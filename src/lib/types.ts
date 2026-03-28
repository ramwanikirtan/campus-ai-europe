// ============================================
// Campus AI Europe — Type Definitions
// ============================================

export interface User {
  id: string;
  email: string;
  fullName: string;
  avatarUrl?: string;
  authProvider: 'email' | 'google';
  emailVerified: boolean;
  createdAt: string;
}

export interface UserProfile {
  id: string;
  userId: string;
  fieldOfStudy: string;
  degreeLevel: 'bachelors' | 'masters' | 'phd';
  gpaOriginal: string;
  gpaNormalized: number;
  monthlyBudgetEur: number;
  nationality: string;
  languages: LanguageSkill[];
  countryPreferences: string[];
  onboardingCompleted: boolean;
}

export interface LanguageSkill {
  language: string;
  level: 'A1' | 'A2' | 'B1' | 'B2' | 'C1' | 'C2' | 'native';
}

export interface University {
  id: string;
  name: string;
  country: string;
  city: string;
  websiteUrl: string;
  logoUrl: string;
  rankingQs?: number;
  rankingThe?: number;
  estimatedMonthlyLivingCostEur: number;
  description: string;
  programs: Program[];
}

export interface Program {
  id: string;
  universityId: string;
  name: string;
  fieldOfStudy: string;
  degreeLevel: 'bachelors' | 'masters' | 'phd';
  languageOfInstruction: string;
  durationMonths: number;
  tuitionPerYearEur: number;
  minGpaRequired: number;
  requiredLanguage: string;
  requiredLanguageLevel: string;
  applicationDeadline: string;
  applicationUrl: string;
  additionalRequirements?: string;
}

export interface Scholarship {
  id: string;
  name: string;
  provider: string;
  type: 'full_tuition' | 'partial' | 'stipend' | 'travel_grant';
  amountDescription: string;
  amountEurMonthly: number;
  coverage: string;
  eligibilityNationalities: string[] | 'all';
  eligibilityMinGpa: number;
  eligibilityFields: string[] | 'all';
  eligibilityDegreeLevels: string[];
  eligibilityOther?: string;
  applicationDeadline: string;
  applicationUrl: string;
  linkedUniversityIds: string[];
}

export interface TrackerCard {
  id: string;
  userId: string;
  itemType: 'university' | 'scholarship';
  itemId: string;
  programId?: string;
  status: TrackerStatus;
  position: number;
  notes?: string;
  createdAt: string;
}

export type TrackerStatus = 'interested' | 'applied' | 'interview' | 'accepted' | 'rejected';

export interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: string;
  sources?: string[];
}

export interface MatchScore {
  overall: number;
  fieldOfStudy: number;
  degreeLevel: number;
  gpa: number;
  budget: number;
  language: number;
  nationality: number;
}

export interface UniversityWithMatch extends University {
  matchScore: MatchScore;
  relevantPrograms: Program[];
}

export interface ScholarshipWithMatch extends Scholarship {
  matchScore: MatchScore;
}

// Onboarding state
export interface OnboardingState {
  step: number;
  fieldOfStudy: string;
  degreeLevel: string;
  gpa: string;
  monthlyBudget: number;
  languages: LanguageSkill[];
  nationality: string;
  countryPreferences: string[];
}
