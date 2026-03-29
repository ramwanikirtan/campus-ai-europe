# Campus AI Europe — Data Pipeline

## Overview
Collects real European university and scholarship data, then seeds it into PostgreSQL.

**Sources:**
- Wikidata SPARQL API → university names, countries, cities, websites, founding years
- Curated data → programs, rankings (QS/THE), tuition, GPA requirements, deadlines
- DAAD, Erasmus+, country government scholarships → scholarship details

**Target:** 100+ universities, 60+ programs, 30+ scholarships across 20+ European countries

## Setup

### 1. Install Python dependencies
```bash
cd scripts
pip install -r requirements.txt
```

### 2. Run Prisma migration (create the tables)
```bash
# From project root
npx prisma migrate dev --name add_university_scholarship_models
```

### 3. Run the full pipeline
```bash
# From project root — scrapes data + seeds database
python scripts/seed_database.py
```

### Alternative run modes
```bash
# Scrape only (saves to scripts/data/*.json, no DB insert)
python scripts/seed_database.py --scrape-only

# Seed only (uses cached JSON files, skip scraping)
python scripts/seed_database.py --seed-only
```

## File Structure
```
scripts/
├── README.md                  # This file
├── requirements.txt           # Python dependencies
├── seed_database.py           # Main pipeline orchestrator
├── scrapers/
│   ├── __init__.py
│   ├── wikidata_universities.py   # Wikidata SPARQL scraper
│   ├── scholarship_scraper.py     # DAAD, Erasmus+, country scholarships
│   └── program_scraper.py         # Curated programs + rankings
└── data/                      # Cached JSON output (auto-generated)
    ├── wikidata_universities.json
    ├── programs.json
    ├── rankings.json
    └── scholarships.json
```

## Data Models (Prisma)

### University
- name, country, city, websiteUrl, rankings (QS/THE), description
- foundedYear, wikidataId, estimatedMonthlyLivingCostEur

### Program (belongs to University)
- name, fieldOfStudy, degreeLevel, language, duration, tuition
- minGpaRequired, requiredLanguage/Level, applicationDeadline

### Scholarship
- name, provider, type, amountEurMonthly, coverage
- eligibility: nationalities, minGpa, fields, degreeLevels
- applicationDeadline, applicationUrl

## Troubleshooting

**"prisma generate" fails with EPERM:**
Close VS Code dev server, then re-run. The Prisma engine DLL is locked by another process.

**"No DATABASE_URL found":**
Ensure `.env.local` has `DIRECT_URL` or `DATABASE_URL` set.

**pip install fails:**
Ensure you have Python 3.10+ and internet access. On Windows:
```bash
python -m pip install -r scripts/requirements.txt
```
