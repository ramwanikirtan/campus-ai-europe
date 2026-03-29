"""
Campus AI Europe — Data Pipeline & Database Seeder

Orchestrates:
1. Scrape universities from Wikidata SPARQL
2. Collect curated program & ranking data
3. Collect scholarship data (DAAD, Erasmus+, country-specific)
4. Merge, clean, deduplicate
5. Insert into PostgreSQL via psycopg2 (same DATABASE_URL from .env.local)

Usage:
    python scripts/seed_database.py                  # full pipeline (scrape + seed)
    python scripts/seed_database.py --seed-only      # skip scraping, use cached JSON
    python scripts/seed_database.py --scrape-only    # scrape to JSON, don't insert
"""

import argparse
import json
import os
import sys
import uuid
from datetime import datetime, timezone
from pathlib import Path
from urllib.parse import urlparse, parse_qs

import psycopg2
from psycopg2.extras import execute_values, Json
from dotenv import load_dotenv

# Add project root to path
PROJECT_ROOT = Path(__file__).resolve().parent.parent
sys.path.insert(0, str(PROJECT_ROOT / "scripts"))

from scrapers.wikidata_universities import scrape_all_european_universities, save_to_json as save_unis
from scrapers.scholarship_scraper import scrape_all_scholarships, save_to_json as save_schols
from scrapers.program_scraper import get_curated_programs, get_university_rankings

DATA_DIR = PROJECT_ROOT / "scripts" / "data"


# ─── Database Connection ───────────────────────────────────────────

def get_db_connection():
    """Connect to PostgreSQL using DATABASE_URL from .env.local (uses DIRECT_URL to bypass pgbouncer)."""
    # Load .env.local from project root
    env_path = PROJECT_ROOT / ".env.local"
    load_dotenv(env_path)

    # Use DIRECT_URL (port 5432) for migrations/seeding — pgbouncer (port 6543)
    # doesn't support prepared statements well for bulk inserts
    db_url = os.getenv("DIRECT_URL") or os.getenv("DATABASE_URL")
    if not db_url:
        raise RuntimeError("No DATABASE_URL or DIRECT_URL found in .env.local")

    print(f"  Connecting to database...")
    conn = psycopg2.connect(db_url)
    conn.autocommit = False
    print(f"  Connected successfully!")
    return conn


# ─── Step 1: Scrape Data ──────────────────────────────────────────

def run_scrapers():
    """Run all scrapers and save results to JSON files."""
    DATA_DIR.mkdir(parents=True, exist_ok=True)

    print("\n" + "=" * 60)
    print("STEP 1: Scraping university data from Wikidata...")
    print("=" * 60)
    universities = scrape_all_european_universities()
    save_unis(universities, str(DATA_DIR / "wikidata_universities.json"))

    print("\n" + "=" * 60)
    print("STEP 2: Collecting curated program data...")
    print("=" * 60)
    programs = get_curated_programs()
    with open(DATA_DIR / "programs.json", "w", encoding="utf-8") as f:
        json.dump(programs, f, indent=2, ensure_ascii=False)
    print(f"  Saved {len(programs)} programs")

    rankings = get_university_rankings()
    with open(DATA_DIR / "rankings.json", "w", encoding="utf-8") as f:
        json.dump(rankings, f, indent=2, ensure_ascii=False)
    print(f"  Saved rankings for {len(rankings)} universities")

    print("\n" + "=" * 60)
    print("STEP 3: Scraping scholarship data...")
    print("=" * 60)
    scholarships = scrape_all_scholarships()
    save_schols(scholarships, str(DATA_DIR / "scholarships.json"))

    return universities, programs, rankings, scholarships


# ─── Step 2: Merge & Clean ────────────────────────────────────────

def generate_cuid():
    """Generate a cuid-like ID compatible with Prisma."""
    return "c" + uuid.uuid4().hex[:24]


def normalize_name(name: str) -> str:
    """Normalize university name for matching."""
    return (
        name.lower()
        .replace("ü", "u").replace("ö", "o").replace("ä", "a")
        .replace("é", "e").replace("è", "e").replace("ë", "e")
        .replace("ç", "c").replace("ñ", "n")
        .strip()
    )


def merge_university_data(
    wikidata_unis: list[dict],
    programs: list[dict],
    rankings: dict,
) -> list[dict]:
    """
    Merge Wikidata universities with curated program/ranking data.
    Universities with programs or rankings get priority (they're our curated set).
    Remaining Wikidata universities fill to 100+.
    """
    # Build set of university names that have programs
    program_uni_names = set()
    for p in programs:
        program_uni_names.add(p["university"])

    # Also include universities that have rankings
    for name in rankings:
        program_uni_names.add(name)

    # Start with curated universities (those with programs/rankings)
    merged = {}
    name_lookup = {}  # normalized_name -> canonical_name

    for name in program_uni_names:
        norm = normalize_name(name)
        name_lookup[norm] = name

        ranking_data = rankings.get(name, {})
        merged[name] = {
            "id": generate_cuid(),
            "name": name,
            "country": "",
            "city": "",
            "websiteUrl": "",
            "logoUrl": "",
            "rankingQs": ranking_data.get("rankingQs"),
            "rankingThe": ranking_data.get("rankingThe"),
            "estimatedMonthlyLivingCostEur": ranking_data.get("estimatedMonthlyLivingCostEur", 0),
            "description": "",
            "foundedYear": None,
            "wikidataId": None,
            "dataSource": "curated",
        }

    # Enrich with Wikidata data
    matched_count = 0
    for wiki_uni in wikidata_unis:
        norm = normalize_name(wiki_uni["name"])

        # Try exact match first
        canonical = name_lookup.get(norm)

        # Try partial matching if no exact match
        if not canonical:
            for known_norm, known_canonical in name_lookup.items():
                if norm in known_norm or known_norm in norm:
                    canonical = known_canonical
                    break

        if canonical and canonical in merged:
            # Enrich existing curated university with Wikidata data
            uni = merged[canonical]
            if not uni["country"]:
                uni["country"] = wiki_uni.get("country", "")
            if not uni["city"]:
                uni["city"] = wiki_uni.get("city", "")
            if not uni["websiteUrl"]:
                uni["websiteUrl"] = wiki_uni.get("websiteUrl", "")
            if not uni["foundedYear"]:
                uni["foundedYear"] = wiki_uni.get("foundedYear")
            if not uni["wikidataId"]:
                uni["wikidataId"] = wiki_uni.get("wikidataId")
            uni["dataSource"] = "wikidata+curated"
            matched_count += 1
        else:
            # New university from Wikidata (no curated programs yet)
            if wiki_uni["name"] not in merged:
                merged[wiki_uni["name"]] = {
                    "id": generate_cuid(),
                    "name": wiki_uni["name"],
                    "country": wiki_uni.get("country", ""),
                    "city": wiki_uni.get("city", ""),
                    "websiteUrl": wiki_uni.get("websiteUrl", ""),
                    "logoUrl": "",
                    "rankingQs": None,
                    "rankingThe": None,
                    "estimatedMonthlyLivingCostEur": 0,
                    "description": "",
                    "foundedYear": wiki_uni.get("foundedYear"),
                    "wikidataId": wiki_uni.get("wikidataId"),
                    "dataSource": "wikidata",
                }

    # Fill in missing country/city for curated universities
    country_city_map = {
        "Technical University of Munich": ("Germany", "Munich"),
        "RWTH Aachen University": ("Germany", "Aachen"),
        "Technische Universität Berlin": ("Germany", "Berlin"),
        "Ludwig-Maximilians-Universität München": ("Germany", "Munich"),
        "Heidelberg University": ("Germany", "Heidelberg"),
        "Delft University of Technology": ("Netherlands", "Delft"),
        "University of Amsterdam": ("Netherlands", "Amsterdam"),
        "Eindhoven University of Technology": ("Netherlands", "Eindhoven"),
        "ETH Zurich": ("Switzerland", "Zurich"),
        "École Polytechnique Fédérale de Lausanne": ("Switzerland", "Lausanne"),
        "KTH Royal Institute of Technology": ("Sweden", "Stockholm"),
        "University of Vienna": ("Austria", "Vienna"),
        "TU Wien": ("Austria", "Vienna"),
        "Politecnico di Milano": ("Italy", "Milan"),
        "University of Bologna": ("Italy", "Bologna"),
        "Sorbonne University": ("France", "Paris"),
        "École Polytechnique": ("France", "Palaiseau"),
        "University of Helsinki": ("Finland", "Helsinki"),
        "Aalto University": ("Finland", "Espoo"),
        "Technical University of Denmark": ("Denmark", "Lyngby"),
        "University of Copenhagen": ("Denmark", "Copenhagen"),
        "Charles University": ("Czech Republic", "Prague"),
        "Czech Technical University in Prague": ("Czech Republic", "Prague"),
        "University of Warsaw": ("Poland", "Warsaw"),
        "AGH University of Krakow": ("Poland", "Krakow"),
        "KU Leuven": ("Belgium", "Leuven"),
        "Norwegian University of Science and Technology": ("Norway", "Trondheim"),
        "University of Oslo": ("Norway", "Oslo"),
        "Universitat Politècnica de Catalunya": ("Spain", "Barcelona"),
        "Universidad Carlos III de Madrid": ("Spain", "Madrid"),
        "Trinity College Dublin": ("Ireland", "Dublin"),
        "University College Dublin": ("Ireland", "Dublin"),
        "University of Lisbon": ("Portugal", "Lisbon"),
        "University of Porto": ("Portugal", "Porto"),
    }

    for name, (country, city) in country_city_map.items():
        if name in merged:
            if not merged[name]["country"]:
                merged[name]["country"] = country
            if not merged[name]["city"]:
                merged[name]["city"] = city

    # Generate descriptions for universities missing one
    for name, uni in merged.items():
        if not uni["description"]:
            parts = []
            if uni["city"] and uni["country"]:
                parts.append(f"{name} is a university located in {uni['city']}, {uni['country']}.")
            else:
                parts.append(f"{name} is a European university.")
            if uni["foundedYear"]:
                parts.append(f"Founded in {uni['foundedYear']}.")
            if uni["rankingQs"]:
                parts.append(f"QS World Ranking: #{uni['rankingQs']}.")
            uni["description"] = " ".join(parts)

    print(f"\n  Merge results:")
    print(f"    Curated universities: {len(program_uni_names)}")
    print(f"    Wikidata matches enriched: {matched_count}")
    print(f"    Total universities: {len(merged)}")

    return list(merged.values())


def build_program_records(programs: list[dict], university_map: dict[str, str]) -> list[dict]:
    """
    Build program records with proper university IDs.
    university_map: name -> id
    """
    records = []
    name_norm_map = {normalize_name(k): v for k, v in university_map.items()}

    for prog in programs:
        uni_name = prog["university"]
        uni_id = university_map.get(uni_name)

        # Try normalized match
        if not uni_id:
            uni_id = name_norm_map.get(normalize_name(uni_name))

        if not uni_id:
            print(f"    [WARN] No university match for program: {prog['name']} at {uni_name}")
            continue

        records.append({
            "id": generate_cuid(),
            "universityId": uni_id,
            "name": prog["name"],
            "fieldOfStudy": prog["fieldOfStudy"],
            "degreeLevel": prog["degreeLevel"],
            "languageOfInstruction": prog["languageOfInstruction"],
            "durationMonths": prog["durationMonths"],
            "tuitionPerYearEur": prog.get("tuitionPerYearEur", 0),
            "minGpaRequired": prog.get("minGpaRequired"),
            "requiredLanguage": prog.get("requiredLanguage"),
            "requiredLanguageLevel": prog.get("requiredLanguageLevel"),
            "applicationDeadline": prog.get("applicationDeadline"),
            "applicationUrl": prog.get("applicationUrl"),
            "additionalRequirements": prog.get("additionalRequirements"),
            "dataSource": "curated",
        })

    print(f"  Built {len(records)} program records")
    return records


def build_scholarship_records(scholarships: list[dict]) -> list[dict]:
    """Build scholarship records for database insertion."""
    records = []
    for sch in scholarships:
        records.append({
            "id": generate_cuid(),
            "name": sch["name"],
            "provider": sch["provider"],
            "type": sch["type"],
            "amountDescription": sch["amountDescription"],
            "amountEurMonthly": sch.get("amountEurMonthly", 0),
            "coverage": sch.get("coverage"),
            "eligibilityNationalities": sch.get("eligibilityNationalities", "all"),
            "eligibilityMinGpa": sch.get("eligibilityMinGpa"),
            "eligibilityFields": sch.get("eligibilityFields", "all"),
            "eligibilityDegreeLevels": sch.get("eligibilityDegreeLevels", []),
            "eligibilityOther": sch.get("eligibilityOther"),
            "applicationDeadline": sch.get("applicationDeadline"),
            "applicationUrl": sch.get("applicationUrl"),
            "dataSource": sch.get("dataSource", "scraped"),
        })
    print(f"  Built {len(records)} scholarship records")
    return records


# ─── Step 3: Insert into Database ─────────────────────────────────

def create_tables_if_needed(conn):
    """Ensure the University, Program, Scholarship tables exist via raw SQL.
    This is a fallback — normally `prisma migrate dev` handles this."""
    cur = conn.cursor()

    cur.execute("""
    CREATE TABLE IF NOT EXISTS "University" (
        "id" TEXT PRIMARY KEY,
        "name" TEXT NOT NULL,
        "country" TEXT NOT NULL,
        "city" TEXT NOT NULL,
        "websiteUrl" TEXT NOT NULL,
        "logoUrl" TEXT NOT NULL DEFAULT '',
        "rankingQs" INTEGER,
        "rankingThe" INTEGER,
        "estimatedMonthlyLivingCostEur" INTEGER NOT NULL DEFAULT 0,
        "description" TEXT NOT NULL,
        "foundedYear" INTEGER,
        "wikidataId" TEXT UNIQUE,
        "dataSource" TEXT NOT NULL DEFAULT 'manual',
        "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
        "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP
    );
    """)

    cur.execute("""
    CREATE TABLE IF NOT EXISTS "Program" (
        "id" TEXT PRIMARY KEY,
        "universityId" TEXT NOT NULL REFERENCES "University"("id") ON DELETE CASCADE,
        "name" TEXT NOT NULL,
        "fieldOfStudy" TEXT NOT NULL,
        "degreeLevel" TEXT NOT NULL,
        "languageOfInstruction" TEXT NOT NULL,
        "durationMonths" INTEGER NOT NULL,
        "tuitionPerYearEur" DOUBLE PRECISION NOT NULL DEFAULT 0,
        "minGpaRequired" DOUBLE PRECISION,
        "requiredLanguage" TEXT,
        "requiredLanguageLevel" TEXT,
        "applicationDeadline" TEXT,
        "applicationUrl" TEXT,
        "additionalRequirements" TEXT,
        "dataSource" TEXT NOT NULL DEFAULT 'manual',
        "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
        "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP
    );
    """)

    cur.execute("""
    CREATE TABLE IF NOT EXISTS "Scholarship" (
        "id" TEXT PRIMARY KEY,
        "name" TEXT NOT NULL,
        "provider" TEXT NOT NULL,
        "type" TEXT NOT NULL,
        "amountDescription" TEXT NOT NULL,
        "amountEurMonthly" DOUBLE PRECISION NOT NULL DEFAULT 0,
        "coverage" TEXT,
        "eligibilityNationalities" JSONB NOT NULL DEFAULT '"all"',
        "eligibilityMinGpa" DOUBLE PRECISION,
        "eligibilityFields" JSONB NOT NULL DEFAULT '"all"',
        "eligibilityDegreeLevels" JSONB NOT NULL DEFAULT '[]',
        "eligibilityOther" TEXT,
        "applicationDeadline" TEXT,
        "applicationUrl" TEXT,
        "dataSource" TEXT NOT NULL DEFAULT 'manual',
        "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
        "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP
    );
    """)

    cur.execute("""
    CREATE TABLE IF NOT EXISTS "ScholarshipUniversity" (
        "id" TEXT PRIMARY KEY,
        "scholarshipId" TEXT NOT NULL REFERENCES "Scholarship"("id") ON DELETE CASCADE,
        "universityId" TEXT NOT NULL REFERENCES "University"("id") ON DELETE CASCADE,
        UNIQUE("scholarshipId", "universityId")
    );
    """)

    # Create indexes
    cur.execute('CREATE INDEX IF NOT EXISTS "University_country_idx" ON "University"("country");')
    cur.execute('CREATE INDEX IF NOT EXISTS "University_rankingQs_idx" ON "University"("rankingQs");')
    cur.execute('CREATE INDEX IF NOT EXISTS "Program_universityId_idx" ON "Program"("universityId");')
    cur.execute('CREATE INDEX IF NOT EXISTS "Program_fieldOfStudy_idx" ON "Program"("fieldOfStudy");')
    cur.execute('CREATE INDEX IF NOT EXISTS "Program_degreeLevel_idx" ON "Program"("degreeLevel");')
    cur.execute('CREATE INDEX IF NOT EXISTS "Scholarship_type_idx" ON "Scholarship"("type");')
    cur.execute('CREATE INDEX IF NOT EXISTS "Scholarship_applicationDeadline_idx" ON "Scholarship"("applicationDeadline");')

    conn.commit()
    print("  Tables and indexes verified/created.")


def clear_existing_data(conn):
    """Clear existing university/program/scholarship data before re-seeding."""
    cur = conn.cursor()
    cur.execute('DELETE FROM "ScholarshipUniversity";')
    cur.execute('DELETE FROM "Program";')
    cur.execute('DELETE FROM "Scholarship";')
    cur.execute('DELETE FROM "University";')
    conn.commit()
    print("  Cleared existing data.")


def insert_universities(conn, universities: list[dict]):
    """Bulk insert universities."""
    cur = conn.cursor()

    now = datetime.now(timezone.utc)
    values = []
    for u in universities:
        values.append((
            u["id"], u["name"], u["country"], u["city"],
            u["websiteUrl"], u["logoUrl"],
            u.get("rankingQs"), u.get("rankingThe"),
            u.get("estimatedMonthlyLivingCostEur", 0),
            u["description"],
            u.get("foundedYear"), u.get("wikidataId"),
            u.get("dataSource", "manual"),
            now, now,
        ))

    execute_values(
        cur,
        """
        INSERT INTO "University" (
            "id", "name", "country", "city", "websiteUrl", "logoUrl",
            "rankingQs", "rankingThe", "estimatedMonthlyLivingCostEur",
            "description", "foundedYear", "wikidataId", "dataSource",
            "createdAt", "updatedAt"
        ) VALUES %s
        ON CONFLICT ("id") DO NOTHING
        """,
        values,
    )
    conn.commit()
    print(f"  Inserted {len(values)} universities.")


def insert_programs(conn, programs: list[dict]):
    """Bulk insert programs."""
    cur = conn.cursor()

    now = datetime.now(timezone.utc)
    values = []
    for p in programs:
        values.append((
            p["id"], p["universityId"], p["name"], p["fieldOfStudy"],
            p["degreeLevel"], p["languageOfInstruction"], p["durationMonths"],
            p.get("tuitionPerYearEur", 0), p.get("minGpaRequired"),
            p.get("requiredLanguage"), p.get("requiredLanguageLevel"),
            p.get("applicationDeadline"), p.get("applicationUrl"),
            p.get("additionalRequirements"),
            p.get("dataSource", "manual"),
            now, now,
        ))

    execute_values(
        cur,
        """
        INSERT INTO "Program" (
            "id", "universityId", "name", "fieldOfStudy", "degreeLevel",
            "languageOfInstruction", "durationMonths", "tuitionPerYearEur",
            "minGpaRequired", "requiredLanguage", "requiredLanguageLevel",
            "applicationDeadline", "applicationUrl", "additionalRequirements",
            "dataSource", "createdAt", "updatedAt"
        ) VALUES %s
        ON CONFLICT ("id") DO NOTHING
        """,
        values,
    )
    conn.commit()
    print(f"  Inserted {len(values)} programs.")


def insert_scholarships(conn, scholarships: list[dict]):
    """Bulk insert scholarships."""
    cur = conn.cursor()

    now = datetime.now(timezone.utc)
    values = []
    for s in scholarships:
        nat = s.get("eligibilityNationalities", "all")
        fields = s.get("eligibilityFields", "all")
        levels = s.get("eligibilityDegreeLevels", [])

        values.append((
            s["id"], s["name"], s["provider"], s["type"],
            s["amountDescription"], s.get("amountEurMonthly", 0),
            s.get("coverage"),
            Json(nat), s.get("eligibilityMinGpa"),
            Json(fields), Json(levels),
            s.get("eligibilityOther"),
            s.get("applicationDeadline"), s.get("applicationUrl"),
            s.get("dataSource", "manual"),
            now, now,
        ))

    execute_values(
        cur,
        """
        INSERT INTO "Scholarship" (
            "id", "name", "provider", "type", "amountDescription",
            "amountEurMonthly", "coverage", "eligibilityNationalities",
            "eligibilityMinGpa", "eligibilityFields", "eligibilityDegreeLevels",
            "eligibilityOther", "applicationDeadline", "applicationUrl",
            "dataSource", "createdAt", "updatedAt"
        ) VALUES %s
        ON CONFLICT ("id") DO NOTHING
        """,
        values,
    )
    conn.commit()
    print(f"  Inserted {len(values)} scholarships.")


def print_summary(conn):
    """Print final database counts."""
    cur = conn.cursor()

    cur.execute('SELECT COUNT(*) FROM "University";')
    uni_count = cur.fetchone()[0]

    cur.execute('SELECT COUNT(*) FROM "Program";')
    prog_count = cur.fetchone()[0]

    cur.execute('SELECT COUNT(*) FROM "Scholarship";')
    schol_count = cur.fetchone()[0]

    cur.execute('SELECT COUNT(DISTINCT "country") FROM "University";')
    country_count = cur.fetchone()[0]

    print("\n" + "=" * 60)
    print("DATABASE SUMMARY")
    print("=" * 60)
    print(f"  Universities:  {uni_count}")
    print(f"  Programs:      {prog_count}")
    print(f"  Scholarships:  {schol_count}")
    print(f"  Countries:     {country_count}")
    print("=" * 60)

    if uni_count >= 100:
        print("  [OK] Target of 100+ universities MET")
    else:
        print(f"  [!!] Target of 100+ universities not met ({uni_count}/100)")

    if schol_count >= 50:
        print("  [OK] Target of 50+ scholarships MET")
    else:
        print(f"  [!!] Target of 50+ scholarships not met ({schol_count}/50)")


# ─── Main Pipeline ─────────────────────────────────────────────────

def main():
    parser = argparse.ArgumentParser(description="Campus AI Europe — Data Pipeline")
    parser.add_argument("--seed-only", action="store_true", help="Skip scraping, use cached JSON files")
    parser.add_argument("--scrape-only", action="store_true", help="Only scrape, don't insert into DB")
    args = parser.parse_args()

    print("\n" + "#" * 60)
    print("#  Campus AI Europe — Data Pipeline")
    print("#" * 60)

    # ── Scrape or load cached data ──
    if args.seed_only:
        print("\n  Loading cached data from scripts/data/...")
        with open(DATA_DIR / "wikidata_universities.json", encoding="utf-8") as f:
            wikidata_unis = json.load(f)
        with open(DATA_DIR / "programs.json", encoding="utf-8") as f:
            programs = json.load(f)
        with open(DATA_DIR / "rankings.json", encoding="utf-8") as f:
            rankings = json.load(f)
        with open(DATA_DIR / "scholarships.json", encoding="utf-8") as f:
            scholarships = json.load(f)
        print(f"  Loaded: {len(wikidata_unis)} universities, {len(programs)} programs, {len(scholarships)} scholarships")
    else:
        wikidata_unis, programs, rankings, scholarships = run_scrapers()

    if args.scrape_only:
        print("\n  Scrape complete. Skipping database insertion (--scrape-only).")
        return

    # ── Merge & clean ──
    print("\n" + "=" * 60)
    print("STEP 4: Merging and cleaning data...")
    print("=" * 60)

    universities = merge_university_data(wikidata_unis, programs, rankings)

    # Build name -> id map for linking programs
    uni_name_to_id = {u["name"]: u["id"] for u in universities}

    program_records = build_program_records(programs, uni_name_to_id)
    scholarship_records = build_scholarship_records(scholarships)

    # ── Insert into database ──
    print("\n" + "=" * 60)
    print("STEP 5: Inserting into PostgreSQL...")
    print("=" * 60)

    conn = get_db_connection()
    try:
        create_tables_if_needed(conn)
        clear_existing_data(conn)
        insert_universities(conn, universities)
        insert_programs(conn, program_records)
        insert_scholarships(conn, scholarship_records)
        print_summary(conn)
    except Exception as e:
        conn.rollback()
        print(f"\n  [ERROR] Database insertion failed: {e}")
        raise
    finally:
        conn.close()

    print("\n  Pipeline complete!")


if __name__ == "__main__":
    main()
