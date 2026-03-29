"""
Wikidata SPARQL scraper for European universities.
Fetches: name, country, city, website, founding year, coordinates.
"""

import json
import time
import requests

WIKIDATA_SPARQL_URL = "https://query.wikidata.org/sparql"

# European countries with Wikidata Q-IDs
EUROPEAN_COUNTRIES = {
    "Q183": "Germany",
    "Q55": "Netherlands",
    "Q40": "Austria",
    "Q28": "Hungary",
    "Q213": "Czech Republic",
    "Q36": "Poland",
    "Q142": "France",
    "Q38": "Italy",
    "Q29": "Spain",
    "Q34": "Sweden",
    "Q33": "Finland",
    "Q35": "Denmark",
    "Q20": "Norway",
    "Q31": "Belgium",
    "Q39": "Switzerland",
    "Q27": "Ireland",
    "Q45": "Portugal",
    "Q41": "Greece",
    "Q218": "Romania",
    "Q224": "Croatia",
    "Q37": "Lithuania",
    "Q211": "Latvia",
    "Q191": "Estonia",
    "Q214": "Slovakia",
    "Q215": "Slovenia",
    "Q219": "Bulgaria",
    "Q217": "Moldova",
    "Q223": "Greenland",
}

SPARQL_QUERY = """
SELECT DISTINCT
  ?university ?universityLabel
  ?countryLabel ?cityLabel
  ?website ?founded
  ?wikidataId
WHERE {{
  ?university wdt:P31/wdt:P279* wd:Q3918 .
  ?university wdt:P17 wd:{country_qid} .
  ?university wdt:P131*/wdt:P17 wd:{country_qid} .

  OPTIONAL {{ ?university wdt:P856 ?website . }}
  OPTIONAL {{ ?university wdt:P571 ?founded . }}
  OPTIONAL {{ ?university wdt:P131 ?city . }}

  BIND(REPLACE(STR(?university), "http://www.wikidata.org/entity/", "") AS ?wikidataId)

  SERVICE wikibase:label {{ bd:serviceParam wikibase:language "en" . }}
}}
ORDER BY ?universityLabel
LIMIT 50
"""


def fetch_universities_for_country(country_qid: str, country_name: str) -> list[dict]:
    """Fetch universities from Wikidata for a single country."""
    query = SPARQL_QUERY.format(country_qid=country_qid)

    headers = {
        "Accept": "application/sparql-results+json",
        "User-Agent": "CampusAI-Europe/1.0 (educational project)",
    }

    try:
        resp = requests.get(
            WIKIDATA_SPARQL_URL,
            params={"query": query},
            headers=headers,
            timeout=60,
        )
        resp.raise_for_status()
        data = resp.json()
    except Exception as e:
        print(f"  [ERROR] Failed for {country_name}: {e}")
        return []

    results = []
    seen = set()

    for item in data.get("results", {}).get("bindings", []):
        name = item.get("universityLabel", {}).get("value", "")
        wikidata_id = item.get("wikidataId", {}).get("value", "")

        # Skip if no name or duplicate
        if not name or name.startswith("Q") or wikidata_id in seen:
            continue
        seen.add(wikidata_id)

        city = item.get("cityLabel", {}).get("value", "")
        if city.startswith("Q"):
            city = ""

        website = item.get("website", {}).get("value", "")
        founded_raw = item.get("founded", {}).get("value", "")
        founded_year = None
        if founded_raw:
            try:
                founded_year = int(founded_raw[:4])
            except (ValueError, IndexError):
                pass

        results.append({
            "name": name,
            "country": country_name,
            "city": city,
            "websiteUrl": website,
            "foundedYear": founded_year,
            "wikidataId": wikidata_id,
            "dataSource": "wikidata",
        })

    return results


def scrape_all_european_universities() -> list[dict]:
    """Scrape universities from all European countries via Wikidata SPARQL."""
    all_universities = []

    for qid, country in EUROPEAN_COUNTRIES.items():
        print(f"  Fetching universities in {country}...")
        unis = fetch_universities_for_country(qid, country)
        all_universities.extend(unis)
        print(f"    Found {len(unis)} universities")
        time.sleep(2)  # Be respectful to the Wikidata API

    print(f"\n  Total universities from Wikidata: {len(all_universities)}")
    return all_universities


def save_to_json(universities: list[dict], output_path: str):
    """Save scraped universities to a JSON file."""
    with open(output_path, "w", encoding="utf-8") as f:
        json.dump(universities, f, indent=2, ensure_ascii=False)
    print(f"  Saved {len(universities)} universities to {output_path}")


if __name__ == "__main__":
    print("=" * 60)
    print("Wikidata European Universities Scraper")
    print("=" * 60)
    universities = scrape_all_european_universities()
    save_to_json(universities, "scripts/data/wikidata_universities.json")
