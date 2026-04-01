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

// Language level hierarchy for comparison
const languageLevels: Record<string, number> = {
  'A1': 1, 'A2': 2, 'B1': 3, 'B2': 4, 'C1': 5, 'C2': 6, 'native': 7
};

function languageLevelScore(userLevel: string, requiredLevel: string): number {
  const userNum = languageLevels[userLevel] || 0;
  const reqNum = languageLevels[requiredLevel] || 0;
  if (userNum >= reqNum) return 100;
  if (userNum === reqNum - 1) return 50;
  return 0;
}

function fieldMatchScore(userField: string, programField: string): number {
  const normalizedUser = userField.toLowerCase().trim();
  const normalizedProgram = programField.toLowerCase().trim();

  if (normalizedUser === normalizedProgram) return 100;

  // Related fields mapping
  const relatedFields: Record<string, string[]> = {
    'computer science': ['engineering', 'mathematics', 'physics', 'business administration'],
    'engineering': ['computer science', 'mathematics', 'physics', 'architecture'],
    'business administration': ['economics', 'social sciences', 'computer science'],
    'mathematics': ['computer science', 'physics', 'engineering', 'economics'],
    'physics': ['mathematics', 'engineering', 'chemistry', 'natural sciences'],
    'medicine': ['biology', 'chemistry', 'natural sciences'],
    'economics': ['business administration', 'mathematics', 'social sciences'],
    'law': ['social sciences', 'arts & humanities'],
  };

  const related = relatedFields[normalizedUser] || [];
  if (related.includes(normalizedProgram)) return 60;

  return 0;
}

function computeProgramMatchScore(profile: UserProfile, program: Program): MatchScore {
  // 1. Field of study match (30%)
  const fieldScore = fieldMatchScore(profile.fieldOfStudy, program.fieldOfStudy);

  // 2. Degree level match (15%) — must be exact
  const degreeScore = profile.degreeLevel === program.degreeLevel ? 100 : 0;

  // 3. GPA eligibility (20%)
  let gpaScore = 0;
  if (profile.gpaNormalized >= program.minGpaRequired) {
    gpaScore = 100;
  } else if (profile.gpaNormalized >= program.minGpaRequired - 0.3) {
    gpaScore = 70;
  } else {
    gpaScore = 30;
  }

  // 4. Budget fit (15%) — total annual cost vs budget×12
  const annualBudget = profile.monthlyBudgetEur * 12;
  const annualCost = program.tuitionPerYearEur + (0); // Living cost handled separately
  let budgetScore;
  if (annualCost <= annualBudget) {
    budgetScore = 100;
  } else if (annualCost <= annualBudget * 1.2) {
    budgetScore = 60;
  } else {
    budgetScore = 20;
  }

  // 5. Language eligibility (10%)
  const userLang = profile.languages.find(
    (l: LanguageSkill) => l.language.toLowerCase() === program.requiredLanguage.toLowerCase()
  );
  const langScore = userLang
    ? languageLevelScore(userLang.level, program.requiredLanguageLevel)
    : 0;

  // 6. Nationality (10%) — for programs, generally always open
  const nationalityScore = 100;

  const overall = Math.round(
    fieldScore * 0.3 +
    degreeScore * 0.15 +
    gpaScore * 0.2 +
    budgetScore * 0.15 +
    langScore * 0.1 +
    nationalityScore * 0.1
  );

  return {
    overall,
    fieldOfStudy: fieldScore,
    degreeLevel: degreeScore,
    gpa: gpaScore,
    budget: budgetScore,
    language: langScore,
    nationality: nationalityScore,
  };
}

export function getUniversityRecommendations(
  profile: UserProfile,
  universities: University[]
): UniversityWithMatch[] {
  const results: UniversityWithMatch[] = [];

  for (const uni of universities) {
    // Check country preference — penalize score but don't filter out
    const countryMatch =
      profile.countryPreferences.length === 0 ||
      profile.countryPreferences.includes('No preference') ||
      profile.countryPreferences.includes(uni.country);

    // Find programs matching degree level first, fall back to all programs
    const relevantPrograms = uni.programs.filter(
      (p) => p.degreeLevel === profile.degreeLevel
    );
    const programsToScore = relevantPrograms.length > 0 ? relevantPrograms : uni.programs;

    // Compute match score using the best-matching program
    let bestScore: MatchScore = {
      overall: 0, fieldOfStudy: 0, degreeLevel: 0,
      gpa: 0, budget: 0, language: 0, nationality: 0
    };

    for (const program of programsToScore) {
      const score = computeProgramMatchScore(profile, program);
      if (score.overall > bestScore.overall) {
        bestScore = score;
      }
    }

    // Reduce score for non-preferred countries
    if (!countryMatch) {
      bestScore = { ...bestScore, overall: Math.round(bestScore.overall * 0.7) };
    }

    if (bestScore.overall >= 20) {
      results.push({
        ...uni,
        matchScore: bestScore,
        relevantPrograms: relevantPrograms.length > 0 ? relevantPrograms : programsToScore,
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
    // Degree level check
    if (!sch.eligibilityDegreeLevels.includes(profile.degreeLevel)) continue;

    // Field check
    let fieldScore = 100;
    if (sch.eligibilityFields !== 'all') {
      const matchesField = (sch.eligibilityFields as string[]).some(
        (f) => f.toLowerCase() === profile.fieldOfStudy.toLowerCase()
      );
      fieldScore = matchesField ? 100 : 0;
      if (fieldScore === 0) continue;
    }

    // Nationality check
    let nationalityScore = 100;
    if (sch.eligibilityNationalities !== 'all') {
      const nats = sch.eligibilityNationalities as string[];
      nationalityScore = nats.includes(profile.nationality) ? 100 : 0;
      if (nationalityScore === 0) continue;
    }

    // GPA check
    let gpaScore = 0;
    if (profile.gpaNormalized >= sch.eligibilityMinGpa) {
      gpaScore = 100;
    } else if (profile.gpaNormalized >= sch.eligibilityMinGpa - 0.3) {
      gpaScore = 70;
    } else {
      gpaScore = 30;
    }

    // Budget relevance
    const budgetScore = 100;

    // Language
    const langScore = profile.languages.some(
      (l: LanguageSkill) => l.language === 'English' && languageLevels[l.level] >= 4
    ) ? 100 : 50;

    const overall = Math.round(
      fieldScore * 0.3 +
      100 * 0.15 + // degree level matched above
      gpaScore * 0.2 +
      budgetScore * 0.15 +
      langScore * 0.1 +
      nationalityScore * 0.1
    );

    results.push({
      ...sch,
      matchScore: {
        overall,
        fieldOfStudy: fieldScore,
        degreeLevel: 100,
        gpa: gpaScore,
        budget: budgetScore,
        language: langScore,
        nationality: nationalityScore,
      },
    });
  }

  return results.sort((a, b) => b.matchScore.overall - a.matchScore.overall);
}
