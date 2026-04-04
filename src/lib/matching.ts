import {
  UserProfile,
  University,
  Scholarship,
  MatchScore,
  UniversityWithMatch,
  ScholarshipWithMatch,
  Program,
  LanguageSkill,
} from './types';

// Language level hierarchy
const languageLevels: Record<string, number> = {
  'A1': 1, 'A2': 2, 'B1': 3, 'B2': 4, 'C1': 5, 'C2': 6, 'native': 7,
};

function languageLevelScore(userLevel: string, requiredLevel: string): number {
  const userNum = languageLevels[userLevel] || 0;
  const reqNum = languageLevels[requiredLevel] || 0;
  if (userNum >= reqNum) return 100;
  if (userNum === reqNum - 1) return 60;
  if (userNum === reqNum - 2) return 30;
  return 0;
}

// Bidirectional related-field map
const RELATED_FIELDS: Record<string, string[]> = {
  'computer science': ['engineering', 'mathematics', 'physics', 'business administration', 'economics', 'natural sciences'],
  'engineering': ['computer science', 'mathematics', 'physics', 'architecture', 'natural sciences', 'chemistry'],
  'business administration': ['economics', 'social sciences', 'computer science', 'mathematics', 'law'],
  'mathematics': ['computer science', 'physics', 'engineering', 'economics', 'natural sciences'],
  'physics': ['mathematics', 'engineering', 'chemistry', 'natural sciences', 'computer science'],
  'medicine': ['biology', 'chemistry', 'natural sciences', 'psychology'],
  'economics': ['business administration', 'mathematics', 'social sciences', 'computer science'],
  'law': ['social sciences', 'arts & humanities', 'economics', 'business administration'],
  'biology': ['chemistry', 'natural sciences', 'medicine', 'engineering'],
  'chemistry': ['biology', 'natural sciences', 'physics', 'engineering'],
  'natural sciences': ['biology', 'chemistry', 'physics', 'mathematics', 'engineering'],
  'social sciences': ['law', 'arts & humanities', 'psychology', 'economics'],
  'psychology': ['social sciences', 'medicine', 'natural sciences', 'education'],
  'architecture': ['engineering', 'arts & humanities', 'natural sciences'],
  'arts & humanities': ['social sciences', 'law', 'education', 'psychology'],
  'education': ['psychology', 'social sciences', 'arts & humanities'],
};

function fieldMatchScore(userField: string, programField: string): number {
  const u = userField.toLowerCase().trim();
  const p = programField.toLowerCase().trim();
  if (u === p) return 100;
  const related = RELATED_FIELDS[u] || [];
  if (related.includes(p)) return 60;
  // Check reverse direction
  const revRelated = RELATED_FIELDS[p] || [];
  if (revRelated.includes(u)) return 50;
  return 0;
}

/**
 * Computes a match score for a user against a specific program + university.
 * Weights:
 *   Field of study      30%
 *   Degree level        10%
 *   GPA eligibility     20%
 *   Total cost budget   25%  (tuition + living cost vs user budget)
 *   Language            15%
 */
function computeProgramScore(
  profile: UserProfile,
  uni: University,
  program: Program
): MatchScore {
  // 1. Field of study (30%)
  const fieldScore = fieldMatchScore(profile.fieldOfStudy, program.fieldOfStudy);

  // 2. Degree level (10%) — soft: wrong level gets 20 rather than 0 (still shows results)
  const degreeScore = profile.degreeLevel === program.degreeLevel ? 100 : 20;

  // 3. GPA eligibility (20%)
  const gpaDiff = profile.gpaNormalized - program.minGpaRequired;
  let gpaScore: number;
  if (gpaDiff >= 0) {
    // Exceeds requirement — bonus for exceeding by more
    gpaScore = Math.min(100, 85 + Math.round(gpaDiff * 15));
  } else if (gpaDiff >= -0.3) {
    gpaScore = 60; // Slightly below — still possible with strong app
  } else if (gpaDiff >= -0.5) {
    gpaScore = 35;
  } else {
    gpaScore = 10;
  }

  // 4. Total annual cost vs budget (25%)
  //    Includes tuition + estimated monthly living costs × 12
  const annualBudget = profile.monthlyBudgetEur * 12;
  const annualTuition = program.tuitionPerYearEur;
  const annualLiving = uni.estimatedMonthlyLivingCostEur * 12;
  const annualTotal = annualTuition + annualLiving;

  let budgetScore: number;
  if (annualTotal === 0) {
    budgetScore = 100; // Free tuition country, check only living
  } else if (annualBudget === 0) {
    budgetScore = 20;
  } else {
    const ratio = annualBudget / annualTotal;
    if (ratio >= 1.2) {
      budgetScore = 100; // Comfortably within budget
    } else if (ratio >= 1.0) {
      budgetScore = 85;  // Exactly fits
    } else if (ratio >= 0.85) {
      budgetScore = 65;  // Slightly over — still worth showing
    } else if (ratio >= 0.7) {
      budgetScore = 40;
    } else {
      budgetScore = 15;  // Significantly over budget
    }
  }

  // 5. Language eligibility (15%)
  const userLang = profile.languages.find(
    (l: LanguageSkill) => l.language.toLowerCase() === program.requiredLanguage.toLowerCase()
  );
  let langScore: number;
  if (userLang) {
    langScore = languageLevelScore(userLang.level, program.requiredLanguageLevel);
  } else if (program.requiredLanguage.toLowerCase() === 'english') {
    // If no explicit English entry, give partial credit (most applicants have some English)
    langScore = 40;
  } else {
    langScore = 0;
  }

  const overall = Math.round(
    fieldScore  * 0.30 +
    degreeScore * 0.10 +
    gpaScore    * 0.20 +
    budgetScore * 0.25 +
    langScore   * 0.15
  );

  return {
    overall,
    fieldOfStudy: fieldScore,
    degreeLevel:  degreeScore,
    gpa:          gpaScore,
    budget:       budgetScore,
    language:     langScore,
    nationality:  100,
  };
}

export function getUniversityRecommendations(
  profile: UserProfile,
  universities: University[]
): UniversityWithMatch[] {
  const hasCountryPref =
    profile.countryPreferences.length > 0 &&
    !profile.countryPreferences.includes('No preference');

  const results: UniversityWithMatch[] = [];

  for (const uni of universities) {
    const countryPreferred = !hasCountryPref || profile.countryPreferences.includes(uni.country);

    // Score against programs that match the requested degree level first;
    // fall back to all programs so we never miss a university entirely.
    const levelMatch = uni.programs.filter(p => p.degreeLevel === profile.degreeLevel);
    const candidatePrograms = levelMatch.length > 0 ? levelMatch : uni.programs;

    let bestScore: MatchScore = {
      overall: 0, fieldOfStudy: 0, degreeLevel: 0,
      gpa: 0, budget: 0, language: 0, nationality: 0,
    };
    let bestProgram: Program | null = null;

    for (const program of candidatePrograms) {
      const score = computeProgramScore(profile, uni, program);
      if (score.overall > bestScore.overall) {
        bestScore = score;
        bestProgram = program;
      }
    }

    // Country preference adjustment — preferred country gets a bonus, not a penalty
    if (countryPreferred && hasCountryPref) {
      bestScore = { ...bestScore, overall: Math.min(100, Math.round(bestScore.overall * 1.08)) };
    } else if (!countryPreferred) {
      // Non-preferred country: mild reduction so preferred countries rank higher
      bestScore = { ...bestScore, overall: Math.round(bestScore.overall * 0.80) };
    }

    // Only include universities with a meaningful match
    if (bestScore.overall >= 15) {
      results.push({
        ...uni,
        matchScore: bestScore,
        relevantPrograms: levelMatch.length > 0 ? levelMatch : (bestProgram ? [bestProgram] : uni.programs.slice(0, 2)),
      });
    }
  }

  return results.sort((a, b) => b.matchScore.overall - a.matchScore.overall);
}

export function getScholarshipRecommendations(
  profile: UserProfile,
  scholarships: Scholarship[]
): ScholarshipWithMatch[] {
  const results: ScholarshipWithMatch[] = [];

  for (const sch of scholarships) {
    // Hard filter: degree level must match
    if (!sch.eligibilityDegreeLevels.includes(profile.degreeLevel)) continue;

    // Field check
    let fieldScore = 100;
    if (sch.eligibilityFields !== 'all') {
      const matchesField = (sch.eligibilityFields as string[]).some(
        (f) => f.toLowerCase() === profile.fieldOfStudy.toLowerCase() ||
               (RELATED_FIELDS[profile.fieldOfStudy.toLowerCase()] || []).includes(f.toLowerCase())
      );
      if (!matchesField) continue;
      fieldScore = (sch.eligibilityFields as string[]).some(
        (f) => f.toLowerCase() === profile.fieldOfStudy.toLowerCase()
      ) ? 100 : 70;
    }

    // Nationality check
    let nationalityScore = 100;
    if (sch.eligibilityNationalities !== 'all') {
      const nats = sch.eligibilityNationalities as string[];
      if (!nats.includes(profile.nationality)) continue;
    }

    // GPA
    const gpaDiff = profile.gpaNormalized - sch.eligibilityMinGpa;
    let gpaScore: number;
    if (gpaDiff >= 0) {
      gpaScore = Math.min(100, 80 + Math.round(gpaDiff * 20));
    } else if (gpaDiff >= -0.3) {
      gpaScore = 60;
    } else {
      gpaScore = 20;
    }

    // Language
    const hasGoodEnglish = profile.languages.some(
      (l: LanguageSkill) => l.language.toLowerCase() === 'english' && (languageLevels[l.level] || 0) >= 4
    );
    const langScore = hasGoodEnglish ? 100 : 50;

    const overall = Math.round(
      fieldScore       * 0.30 +
      100              * 0.10 + // degree level already matched above
      gpaScore         * 0.25 +
      100              * 0.10 + // budget (scholarship covers cost)
      langScore        * 0.15 +
      nationalityScore * 0.10
    );

    results.push({
      ...sch,
      matchScore: {
        overall,
        fieldOfStudy: fieldScore,
        degreeLevel:  100,
        gpa:          gpaScore,
        budget:       100,
        language:     langScore,
        nationality:  nationalityScore,
      },
    });
  }

  return results.sort((a, b) => b.matchScore.overall - a.matchScore.overall);
}
