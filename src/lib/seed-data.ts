import { University, Scholarship } from './types';

export const universities: University[] = [
  // ============================================
  // GERMANY (30 universities — free tuition for most)
  // ============================================
  {
    id: 'uni-1', name: 'Technical University of Munich', country: 'Germany', city: 'Munich',
    websiteUrl: 'https://www.tum.de', logoUrl: '', rankingQs: 37, rankingThe: 30,
    estimatedMonthlyLivingCostEur: 950,
    description: 'TU Munich is one of Europe\'s top technical universities, renowned for engineering, computer science, and natural sciences.',
    programs: [
      { id: 'p-1', universityId: 'uni-1', name: 'M.Sc. Informatics', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 0, minGpaRequired: 3.5, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-10-15', applicationUrl: 'https://www.tum.de/apply' },
      { id: 'p-2', universityId: 'uni-1', name: 'M.Sc. Data Engineering and Analytics', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 0, minGpaRequired: 3.3, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-10-15', applicationUrl: 'https://www.tum.de/apply' },
      { id: 'p-3', universityId: 'uni-1', name: 'B.Sc. Mechanical Engineering', fieldOfStudy: 'Engineering', degreeLevel: 'bachelors', languageOfInstruction: 'German', durationMonths: 36, tuitionPerYearEur: 0, minGpaRequired: 3.0, requiredLanguage: 'German', requiredLanguageLevel: 'C1', applicationDeadline: '2026-07-15', applicationUrl: 'https://www.tum.de/apply' },
      { id: 'p-4', universityId: 'uni-1', name: 'M.Sc. Management & Technology', fieldOfStudy: 'Business Administration', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 0, minGpaRequired: 3.2, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-10-15', applicationUrl: 'https://www.tum.de/apply' },
    ]
  },
  {
    id: 'uni-2', name: 'Ludwig Maximilian University of Munich', country: 'Germany', city: 'Munich',
    websiteUrl: 'https://www.lmu.de', logoUrl: '', rankingQs: 59, rankingThe: 38,
    estimatedMonthlyLivingCostEur: 950,
    description: 'LMU Munich is one of Europe\'s premier academic and research institutions, with a 500-year tradition of excellence.',
    programs: [
      { id: 'p-5', universityId: 'uni-2', name: 'M.Sc. Computer Science', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 0, minGpaRequired: 3.3, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-07-15', applicationUrl: 'https://www.lmu.de/apply' },
      { id: 'p-6', universityId: 'uni-2', name: 'M.Sc. Economics', fieldOfStudy: 'Economics', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 0, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-07-15', applicationUrl: 'https://www.lmu.de/apply' },
      { id: 'p-7', universityId: 'uni-2', name: 'M.Sc. Physics', fieldOfStudy: 'Physics', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 0, minGpaRequired: 3.2, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-07-15', applicationUrl: 'https://www.lmu.de/apply' },
    ]
  },
  {
    id: 'uni-3', name: 'RWTH Aachen University', country: 'Germany', city: 'Aachen',
    websiteUrl: 'https://www.rwth-aachen.de', logoUrl: '', rankingQs: 106, rankingThe: 90,
    estimatedMonthlyLivingCostEur: 850,
    description: 'RWTH Aachen is Germany\'s largest technical university, known for engineering and strong industry connections.',
    programs: [
      { id: 'p-8', universityId: 'uni-3', name: 'M.Sc. Computer Science', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 0, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-03-01', applicationUrl: 'https://www.rwth-aachen.de/apply' },
      { id: 'p-9', universityId: 'uni-3', name: 'M.Sc. Electrical Engineering', fieldOfStudy: 'Engineering', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 0, minGpaRequired: 2.8, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-03-01', applicationUrl: 'https://www.rwth-aachen.de/apply' },
      { id: 'p-10', universityId: 'uni-3', name: 'M.Sc. Mechanical Engineering', fieldOfStudy: 'Engineering', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 0, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-03-01', applicationUrl: 'https://www.rwth-aachen.de/apply' },
    ]
  },
  {
    id: 'uni-4', name: 'Technical University of Berlin', country: 'Germany', city: 'Berlin',
    websiteUrl: 'https://www.tu.berlin', logoUrl: '', rankingQs: 154, rankingThe: 140,
    estimatedMonthlyLivingCostEur: 900,
    description: 'TU Berlin is a research university in the heart of Berlin with strong international programs in engineering and technology.',
    programs: [
      { id: 'p-11', universityId: 'uni-4', name: 'M.Sc. Computer Science', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 0, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-12-15', applicationUrl: 'https://www.tu.berlin/apply' },
      { id: 'p-12', universityId: 'uni-4', name: 'B.Sc. Computer Science', fieldOfStudy: 'Computer Science', degreeLevel: 'bachelors', languageOfInstruction: 'German', durationMonths: 36, tuitionPerYearEur: 0, minGpaRequired: 2.8, requiredLanguage: 'German', requiredLanguageLevel: 'C1', applicationDeadline: '2026-07-15', applicationUrl: 'https://www.tu.berlin/apply' },
      { id: 'p-13', universityId: 'uni-4', name: 'M.Sc. Industrial Engineering', fieldOfStudy: 'Engineering', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 0, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-12-15', applicationUrl: 'https://www.tu.berlin/apply' },
    ]
  },
  {
    id: 'uni-5', name: 'Heidelberg University', country: 'Germany', city: 'Heidelberg',
    websiteUrl: 'https://www.uni-heidelberg.de', logoUrl: '', rankingQs: 65, rankingThe: 47,
    estimatedMonthlyLivingCostEur: 850,
    description: 'Heidelberg is Germany\'s oldest university (1386), a research-intensive institution strong in natural sciences and medicine.',
    programs: [
      { id: 'p-14', universityId: 'uni-5', name: 'M.Sc. Physics', fieldOfStudy: 'Physics', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 0, minGpaRequired: 3.2, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-07-15', applicationUrl: 'https://www.uni-heidelberg.de/apply' },
      { id: 'p-15', universityId: 'uni-5', name: 'M.Sc. Mathematics', fieldOfStudy: 'Mathematics', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 0, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-07-15', applicationUrl: 'https://www.uni-heidelberg.de/apply' },
      { id: 'p-16', universityId: 'uni-5', name: 'M.Sc. Biology', fieldOfStudy: 'Biology', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 0, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-07-15', applicationUrl: 'https://www.uni-heidelberg.de/apply' },
    ]
  },
  {
    id: 'uni-6', name: 'Humboldt University of Berlin', country: 'Germany', city: 'Berlin',
    websiteUrl: 'https://www.hu-berlin.de', logoUrl: '', rankingQs: 120, rankingThe: 87,
    estimatedMonthlyLivingCostEur: 900,
    description: 'Humboldt University is one of Berlin\'s oldest universities, renowned for arts, humanities, social sciences, and natural sciences.',
    programs: [
      { id: 'p-17', universityId: 'uni-6', name: 'M.A. Social Sciences', fieldOfStudy: 'Social Sciences', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 0, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-07-15', applicationUrl: 'https://www.hu-berlin.de/apply' },
      { id: 'p-18', universityId: 'uni-6', name: 'M.Sc. Economics', fieldOfStudy: 'Economics', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 0, minGpaRequired: 3.2, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-07-15', applicationUrl: 'https://www.hu-berlin.de/apply' },
    ]
  },
  {
    id: 'uni-7', name: 'Free University of Berlin', country: 'Germany', city: 'Berlin',
    websiteUrl: 'https://www.fu-berlin.de', logoUrl: '', rankingQs: 118, rankingThe: 91,
    estimatedMonthlyLivingCostEur: 900,
    description: 'Freie Universität Berlin excels in humanities, social sciences, and natural sciences with a strong international focus.',
    programs: [
      { id: 'p-19', universityId: 'uni-7', name: 'M.Sc. Computer Science', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 0, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-07-15', applicationUrl: 'https://www.fu-berlin.de/apply' },
      { id: 'p-20', universityId: 'uni-7', name: 'M.A. Political Science', fieldOfStudy: 'Social Sciences', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 0, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-07-15', applicationUrl: 'https://www.fu-berlin.de/apply' },
    ]
  },
  {
    id: 'uni-8', name: 'University of Freiburg', country: 'Germany', city: 'Freiburg',
    websiteUrl: 'https://www.uni-freiburg.de', logoUrl: '', rankingQs: 189, rankingThe: 138,
    estimatedMonthlyLivingCostEur: 800,
    description: 'University of Freiburg is one of Germany\'s oldest and most prestigious universities, located in the sunny Black Forest region.',
    programs: [
      { id: 'p-21', universityId: 'uni-8', name: 'M.Sc. Computer Science', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 0, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-07-15', applicationUrl: 'https://www.uni-freiburg.de/apply' },
      { id: 'p-22', universityId: 'uni-8', name: 'M.Sc. Biology', fieldOfStudy: 'Biology', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 0, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-07-15', applicationUrl: 'https://www.uni-freiburg.de/apply' },
      { id: 'p-23', universityId: 'uni-8', name: 'M.Sc. Chemistry', fieldOfStudy: 'Chemistry', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 0, minGpaRequired: 2.8, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-07-15', applicationUrl: 'https://www.uni-freiburg.de/apply' },
    ]
  },
  {
    id: 'uni-9', name: 'University of Göttingen', country: 'Germany', city: 'Göttingen',
    websiteUrl: 'https://www.uni-goettingen.de', logoUrl: '', rankingQs: 233, rankingThe: 180,
    estimatedMonthlyLivingCostEur: 750,
    description: 'Georg-August-Universität Göttingen is a public research university with 45 Nobel Prize laureates among its alumni and faculty.',
    programs: [
      { id: 'p-24', universityId: 'uni-9', name: 'M.Sc. Mathematics', fieldOfStudy: 'Mathematics', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 0, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-07-15', applicationUrl: 'https://www.uni-goettingen.de/apply' },
      { id: 'p-25', universityId: 'uni-9', name: 'M.Sc. Physics', fieldOfStudy: 'Physics', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 0, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-07-15', applicationUrl: 'https://www.uni-goettingen.de/apply' },
      { id: 'p-26', universityId: 'uni-9', name: 'M.Sc. Economics', fieldOfStudy: 'Economics', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 0, minGpaRequired: 2.8, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-07-15', applicationUrl: 'https://www.uni-goettingen.de/apply' },
    ]
  },
  {
    id: 'uni-10', name: 'University of Stuttgart', country: 'Germany', city: 'Stuttgart',
    websiteUrl: 'https://www.uni-stuttgart.de', logoUrl: '', rankingQs: 285, rankingThe: 250,
    estimatedMonthlyLivingCostEur: 850,
    description: 'University of Stuttgart is a leading technical university in Germany\'s automotive heartland with strong ties to industry.',
    programs: [
      { id: 'p-27', universityId: 'uni-10', name: 'M.Sc. Computer Science', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 0, minGpaRequired: 2.8, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-07-15', applicationUrl: 'https://www.uni-stuttgart.de/apply' },
      { id: 'p-28', universityId: 'uni-10', name: 'M.Sc. Automotive Engineering', fieldOfStudy: 'Engineering', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 0, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-07-15', applicationUrl: 'https://www.uni-stuttgart.de/apply' },
    ]
  },
  {
    id: 'uni-11', name: 'Karlsruhe Institute of Technology', country: 'Germany', city: 'Karlsruhe',
    websiteUrl: 'https://www.kit.edu', logoUrl: '', rankingQs: 119, rankingThe: 107,
    estimatedMonthlyLivingCostEur: 800,
    description: 'KIT is a national research center and technical university, one of Germany\'s Universities of Excellence.',
    programs: [
      { id: 'p-29', universityId: 'uni-11', name: 'M.Sc. Computer Science', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 0, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-07-15', applicationUrl: 'https://www.kit.edu/apply' },
      { id: 'p-30', universityId: 'uni-11', name: 'M.Sc. Mechanical Engineering', fieldOfStudy: 'Engineering', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 0, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-07-15', applicationUrl: 'https://www.kit.edu/apply' },
      { id: 'p-31', universityId: 'uni-11', name: 'M.Sc. Mathematics', fieldOfStudy: 'Mathematics', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 0, minGpaRequired: 2.8, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-07-15', applicationUrl: 'https://www.kit.edu/apply' },
    ]
  },
  {
    id: 'uni-12', name: 'TU Dresden', country: 'Germany', city: 'Dresden',
    websiteUrl: 'https://tu-dresden.de', logoUrl: '', rankingQs: 173, rankingThe: 155,
    estimatedMonthlyLivingCostEur: 700,
    description: 'TU Dresden is one of eleven German Universities of Excellence and the largest university in Saxony.',
    programs: [
      { id: 'p-32', universityId: 'uni-12', name: 'M.Sc. Computer Science', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 0, minGpaRequired: 2.8, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-06-15', applicationUrl: 'https://tu-dresden.de/apply' },
      { id: 'p-33', universityId: 'uni-12', name: 'M.Sc. Electrical Engineering', fieldOfStudy: 'Engineering', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 0, minGpaRequired: 2.8, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-06-15', applicationUrl: 'https://tu-dresden.de/apply' },
    ]
  },
  {
    id: 'uni-13', name: 'TU Darmstadt', country: 'Germany', city: 'Darmstadt',
    websiteUrl: 'https://www.tu-darmstadt.de', logoUrl: '', rankingQs: 260, rankingThe: 230,
    estimatedMonthlyLivingCostEur: 850,
    description: 'TU Darmstadt is a leading technical university known for engineering, computer science, and cybersecurity research.',
    programs: [
      { id: 'p-34', universityId: 'uni-13', name: 'M.Sc. Computer Science', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 0, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-07-15', applicationUrl: 'https://www.tu-darmstadt.de/apply' },
      { id: 'p-35', universityId: 'uni-13', name: 'M.Sc. IT Security', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 0, minGpaRequired: 3.2, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-07-15', applicationUrl: 'https://www.tu-darmstadt.de/apply' },
    ]
  },
  {
    id: 'uni-14', name: 'University of Bonn', country: 'Germany', city: 'Bonn',
    websiteUrl: 'https://www.uni-bonn.de', logoUrl: '', rankingQs: 200, rankingThe: 170,
    estimatedMonthlyLivingCostEur: 820,
    description: 'University of Bonn is a University of Excellence known for mathematics, economics, and natural sciences.',
    programs: [
      { id: 'p-36', universityId: 'uni-14', name: 'M.Sc. Mathematics', fieldOfStudy: 'Mathematics', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 0, minGpaRequired: 3.2, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-07-15', applicationUrl: 'https://www.uni-bonn.de/apply' },
      { id: 'p-37', universityId: 'uni-14', name: 'M.Sc. Economics', fieldOfStudy: 'Economics', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 0, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-07-15', applicationUrl: 'https://www.uni-bonn.de/apply' },
    ]
  },
  {
    id: 'uni-15', name: 'University of Hamburg', country: 'Germany', city: 'Hamburg',
    websiteUrl: 'https://www.uni-hamburg.de', logoUrl: '', rankingQs: 228, rankingThe: 195,
    estimatedMonthlyLivingCostEur: 900,
    description: 'University of Hamburg is the largest research university in Northern Germany with a broad range of subjects.',
    programs: [
      { id: 'p-38', universityId: 'uni-15', name: 'M.Sc. Computer Science', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 0, minGpaRequired: 2.8, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-07-15', applicationUrl: 'https://www.uni-hamburg.de/apply' },
      { id: 'p-39', universityId: 'uni-15', name: 'M.A. Economics', fieldOfStudy: 'Economics', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 0, minGpaRequired: 2.8, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-07-15', applicationUrl: 'https://www.uni-hamburg.de/apply' },
      { id: 'p-40', universityId: 'uni-15', name: 'B.Sc. Business Administration', fieldOfStudy: 'Business Administration', degreeLevel: 'bachelors', languageOfInstruction: 'German', durationMonths: 36, tuitionPerYearEur: 0, minGpaRequired: 2.5, requiredLanguage: 'German', requiredLanguageLevel: 'C1', applicationDeadline: '2026-07-15', applicationUrl: 'https://www.uni-hamburg.de/apply' },
    ]
  },
  {
    id: 'uni-16', name: 'University of Tübingen', country: 'Germany', city: 'Tübingen',
    websiteUrl: 'https://uni-tuebingen.de', logoUrl: '', rankingQs: 213, rankingThe: 145,
    estimatedMonthlyLivingCostEur: 780,
    description: 'University of Tübingen is an Excellence University especially strong in AI, neuroscience, and machine learning research.',
    programs: [
      { id: 'p-41', universityId: 'uni-16', name: 'M.Sc. Machine Learning', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 0, minGpaRequired: 3.3, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-06-15', applicationUrl: 'https://uni-tuebingen.de/apply' },
      { id: 'p-42', universityId: 'uni-16', name: 'M.Sc. Psychology', fieldOfStudy: 'Psychology', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 0, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-06-15', applicationUrl: 'https://uni-tuebingen.de/apply' },
    ]
  },
  {
    id: 'uni-17', name: 'University of Mannheim', country: 'Germany', city: 'Mannheim',
    websiteUrl: 'https://www.uni-mannheim.de', logoUrl: '', rankingQs: 350, rankingThe: 300,
    estimatedMonthlyLivingCostEur: 800,
    description: 'University of Mannheim is Germany\'s top-ranked business school, known for economics and social sciences.',
    programs: [
      { id: 'p-43', universityId: 'uni-17', name: 'M.Sc. Business Administration', fieldOfStudy: 'Business Administration', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 0, minGpaRequired: 3.3, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-05-31', applicationUrl: 'https://www.uni-mannheim.de/apply' },
      { id: 'p-44', universityId: 'uni-17', name: 'M.Sc. Economics', fieldOfStudy: 'Economics', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 0, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-05-31', applicationUrl: 'https://www.uni-mannheim.de/apply' },
    ]
  },
  {
    id: 'uni-18', name: 'University of Cologne', country: 'Germany', city: 'Cologne',
    websiteUrl: 'https://www.uni-koeln.de', logoUrl: '', rankingQs: 308, rankingThe: 270,
    estimatedMonthlyLivingCostEur: 850,
    description: 'University of Cologne is one of the oldest universities in Europe with a strong economics faculty.',
    programs: [
      { id: 'p-45', universityId: 'uni-18', name: 'M.Sc. Economics', fieldOfStudy: 'Economics', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 0, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-07-15', applicationUrl: 'https://www.uni-koeln.de/apply' },
      { id: 'p-46', universityId: 'uni-18', name: 'M.Sc. Business Administration', fieldOfStudy: 'Business Administration', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 0, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-07-15', applicationUrl: 'https://www.uni-koeln.de/apply' },
      { id: 'p-47', universityId: 'uni-18', name: 'LL.M. European Law', fieldOfStudy: 'Law', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 12, tuitionPerYearEur: 0, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'C1', applicationDeadline: '2026-07-15', applicationUrl: 'https://www.uni-koeln.de/apply' },
    ]
  },
  {
    id: 'uni-19', name: 'FAU Erlangen-Nuremberg', country: 'Germany', city: 'Erlangen',
    websiteUrl: 'https://www.fau.de', logoUrl: '', rankingQs: 280, rankingThe: 240,
    estimatedMonthlyLivingCostEur: 750,
    description: 'FAU is one of Germany\'s largest universities with strong engineering, natural sciences, and medical faculties.',
    programs: [
      { id: 'p-48', universityId: 'uni-19', name: 'M.Sc. Computer Science', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 0, minGpaRequired: 2.8, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-07-15', applicationUrl: 'https://www.fau.de/apply' },
      { id: 'p-49', universityId: 'uni-19', name: 'M.Sc. Medical Engineering', fieldOfStudy: 'Engineering', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 0, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-07-15', applicationUrl: 'https://www.fau.de/apply' },
    ]
  },
  {
    id: 'uni-20', name: 'University of Würzburg', country: 'Germany', city: 'Würzburg',
    websiteUrl: 'https://www.uni-wuerzburg.de', logoUrl: '', rankingQs: 400, rankingThe: 350,
    estimatedMonthlyLivingCostEur: 720,
    description: 'University of Würzburg, founded in 1402, is known for natural sciences and was the workplace of multiple Nobel laureates.',
    programs: [
      { id: 'p-50', universityId: 'uni-20', name: 'M.Sc. Physics', fieldOfStudy: 'Physics', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 0, minGpaRequired: 2.8, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-07-15', applicationUrl: 'https://www.uni-wuerzburg.de/apply' },
      { id: 'p-51', universityId: 'uni-20', name: 'M.Sc. Chemistry', fieldOfStudy: 'Chemistry', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 0, minGpaRequired: 2.8, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-07-15', applicationUrl: 'https://www.uni-wuerzburg.de/apply' },
    ]
  },

  // ============================================
  // NETHERLANDS (20 universities)
  // ============================================
  {
    id: 'uni-21', name: 'Delft University of Technology', country: 'Netherlands', city: 'Delft',
    websiteUrl: 'https://www.tudelft.nl', logoUrl: '', rankingQs: 47, rankingThe: 48,
    estimatedMonthlyLivingCostEur: 1100,
    description: 'TU Delft is the largest and oldest Dutch public technical university, known for architecture, aerospace, and CS.',
    programs: [
      { id: 'p-52', universityId: 'uni-21', name: 'M.Sc. Computer Science', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 2314, minGpaRequired: 3.3, requiredLanguage: 'English', requiredLanguageLevel: 'C1', applicationDeadline: '2026-12-01', applicationUrl: 'https://www.tudelft.nl/apply' },
      { id: 'p-53', universityId: 'uni-21', name: 'M.Sc. Aerospace Engineering', fieldOfStudy: 'Engineering', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 2314, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'C1', applicationDeadline: '2026-12-01', applicationUrl: 'https://www.tudelft.nl/apply' },
      { id: 'p-54', universityId: 'uni-21', name: 'M.Sc. Architecture', fieldOfStudy: 'Architecture', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 2314, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'C1', applicationDeadline: '2026-12-01', applicationUrl: 'https://www.tudelft.nl/apply' },
    ]
  },
  {
    id: 'uni-22', name: 'University of Amsterdam', country: 'Netherlands', city: 'Amsterdam',
    websiteUrl: 'https://www.uva.nl', logoUrl: '', rankingQs: 53, rankingThe: 60,
    estimatedMonthlyLivingCostEur: 1200,
    description: 'The University of Amsterdam is the largest university in the Netherlands, known for AI research and social sciences.',
    programs: [
      { id: 'p-55', universityId: 'uni-22', name: 'M.Sc. Artificial Intelligence', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 2314, minGpaRequired: 3.4, requiredLanguage: 'English', requiredLanguageLevel: 'C1', applicationDeadline: '2026-12-15', applicationUrl: 'https://www.uva.nl/apply' },
      { id: 'p-56', universityId: 'uni-22', name: 'M.Sc. Business Administration', fieldOfStudy: 'Business Administration', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 12, tuitionPerYearEur: 2314, minGpaRequired: 3.2, requiredLanguage: 'English', requiredLanguageLevel: 'C1', applicationDeadline: '2026-11-01', applicationUrl: 'https://www.uva.nl/apply' },
      { id: 'p-57', universityId: 'uni-22', name: 'M.Sc. Economics', fieldOfStudy: 'Economics', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 12, tuitionPerYearEur: 2314, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'C1', applicationDeadline: '2026-11-01', applicationUrl: 'https://www.uva.nl/apply' },
      { id: 'p-58', universityId: 'uni-22', name: 'LL.M. International Law', fieldOfStudy: 'Law', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 12, tuitionPerYearEur: 2314, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'C1', applicationDeadline: '2026-06-01', applicationUrl: 'https://www.uva.nl/apply' },
    ]
  },
  {
    id: 'uni-23', name: 'Eindhoven University of Technology', country: 'Netherlands', city: 'Eindhoven',
    websiteUrl: 'https://www.tue.nl', logoUrl: '', rankingQs: 124, rankingThe: 115,
    estimatedMonthlyLivingCostEur: 1000,
    description: 'TU/e is a research university specializing in engineering science & technology with strong industry ties.',
    programs: [
      { id: 'p-59', universityId: 'uni-23', name: 'M.Sc. Computer Science', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 2314, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-04-01', applicationUrl: 'https://www.tue.nl/apply' },
      { id: 'p-60', universityId: 'uni-23', name: 'M.Sc. Data Science', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 2314, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-04-01', applicationUrl: 'https://www.tue.nl/apply' },
      { id: 'p-61', universityId: 'uni-23', name: 'M.Sc. Electrical Engineering', fieldOfStudy: 'Engineering', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 2314, minGpaRequired: 2.8, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-04-01', applicationUrl: 'https://www.tue.nl/apply' },
    ]
  },
  {
    id: 'uni-24', name: 'Leiden University', country: 'Netherlands', city: 'Leiden',
    websiteUrl: 'https://www.universiteitleiden.nl', logoUrl: '', rankingQs: 126, rankingThe: 77,
    estimatedMonthlyLivingCostEur: 1050,
    description: 'Leiden University is the oldest university in the Netherlands (1575), known for law, political science, and humanities.',
    programs: [
      { id: 'p-62', universityId: 'uni-24', name: 'M.Sc. Computer Science', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 2314, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'C1', applicationDeadline: '2026-04-01', applicationUrl: 'https://www.universiteitleiden.nl/apply' },
      { id: 'p-63', universityId: 'uni-24', name: 'LL.M. Public International Law', fieldOfStudy: 'Law', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 12, tuitionPerYearEur: 2314, minGpaRequired: 3.2, requiredLanguage: 'English', requiredLanguageLevel: 'C1', applicationDeadline: '2026-04-01', applicationUrl: 'https://www.universiteitleiden.nl/apply' },
    ]
  },
  {
    id: 'uni-25', name: 'Utrecht University', country: 'Netherlands', city: 'Utrecht',
    websiteUrl: 'https://www.uu.nl', logoUrl: '', rankingQs: 107, rankingThe: 66,
    estimatedMonthlyLivingCostEur: 1050,
    description: 'Utrecht University is one of Europe\'s leading research universities, strong in geosciences, humanities, and life sciences.',
    programs: [
      { id: 'p-64', universityId: 'uni-25', name: 'M.Sc. Artificial Intelligence', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 2314, minGpaRequired: 3.2, requiredLanguage: 'English', requiredLanguageLevel: 'C1', applicationDeadline: '2026-04-01', applicationUrl: 'https://www.uu.nl/apply' },
      { id: 'p-65', universityId: 'uni-25', name: 'M.Sc. Economics', fieldOfStudy: 'Economics', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 12, tuitionPerYearEur: 2314, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'C1', applicationDeadline: '2026-04-01', applicationUrl: 'https://www.uu.nl/apply' },
    ]
  },
  {
    id: 'uni-26', name: 'University of Groningen', country: 'Netherlands', city: 'Groningen',
    websiteUrl: 'https://www.rug.nl', logoUrl: '', rankingQs: 139, rankingThe: 104,
    estimatedMonthlyLivingCostEur: 900,
    description: 'University of Groningen is a top-100 research university with affordable living costs in Northern Netherlands.',
    programs: [
      { id: 'p-66', universityId: 'uni-26', name: 'M.Sc. Computing Science', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 2314, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-05-01', applicationUrl: 'https://www.rug.nl/apply' },
      { id: 'p-67', universityId: 'uni-26', name: 'M.Sc. Business Administration', fieldOfStudy: 'Business Administration', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 12, tuitionPerYearEur: 2314, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-05-01', applicationUrl: 'https://www.rug.nl/apply' },
      { id: 'p-68', universityId: 'uni-26', name: 'M.Sc. Psychology', fieldOfStudy: 'Psychology', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 12, tuitionPerYearEur: 2314, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-05-01', applicationUrl: 'https://www.rug.nl/apply' },
    ]
  },
  {
    id: 'uni-27', name: 'Erasmus University Rotterdam', country: 'Netherlands', city: 'Rotterdam',
    websiteUrl: 'https://www.eur.nl', logoUrl: '', rankingQs: 176, rankingThe: 72,
    estimatedMonthlyLivingCostEur: 1050,
    description: 'Erasmus University is famous for its Rotterdam School of Management (RSM), one of Europe\'s top business schools.',
    programs: [
      { id: 'p-69', universityId: 'uni-27', name: 'M.Sc. Business Administration', fieldOfStudy: 'Business Administration', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 12, tuitionPerYearEur: 2314, minGpaRequired: 3.3, requiredLanguage: 'English', requiredLanguageLevel: 'C1', applicationDeadline: '2026-04-15', applicationUrl: 'https://www.eur.nl/apply' },
      { id: 'p-70', universityId: 'uni-27', name: 'M.Sc. Economics', fieldOfStudy: 'Economics', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 12, tuitionPerYearEur: 2314, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'C1', applicationDeadline: '2026-04-15', applicationUrl: 'https://www.eur.nl/apply' },
    ]
  },
  {
    id: 'uni-28', name: 'University of Twente', country: 'Netherlands', city: 'Enschede',
    websiteUrl: 'https://www.utwente.nl', logoUrl: '', rankingQs: 210, rankingThe: 184,
    estimatedMonthlyLivingCostEur: 850,
    description: 'University of Twente is a technical university with a campus-based experience, known for nanotechnology and engineering.',
    programs: [
      { id: 'p-71', universityId: 'uni-28', name: 'M.Sc. Computer Science', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 2314, minGpaRequired: 2.8, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-05-01', applicationUrl: 'https://www.utwente.nl/apply' },
      { id: 'p-72', universityId: 'uni-28', name: 'M.Sc. Engineering', fieldOfStudy: 'Engineering', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 2314, minGpaRequired: 2.8, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-05-01', applicationUrl: 'https://www.utwente.nl/apply' },
    ]
  },
  {
    id: 'uni-29', name: 'Vrije Universiteit Amsterdam', country: 'Netherlands', city: 'Amsterdam',
    websiteUrl: 'https://vu.nl', logoUrl: '', rankingQs: 207, rankingThe: 120,
    estimatedMonthlyLivingCostEur: 1200,
    description: 'VU Amsterdam is a public research university in Amsterdam known for its diverse community and strong research.',
    programs: [
      { id: 'p-73', universityId: 'uni-29', name: 'M.Sc. Computer Science', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 2314, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-04-01', applicationUrl: 'https://vu.nl/apply' },
      { id: 'p-74', universityId: 'uni-29', name: 'M.Sc. Business Analytics', fieldOfStudy: 'Business Administration', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 2314, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-04-01', applicationUrl: 'https://vu.nl/apply' },
    ]
  },
  {
    id: 'uni-30', name: 'Wageningen University', country: 'Netherlands', city: 'Wageningen',
    websiteUrl: 'https://www.wur.nl', logoUrl: '', rankingQs: 151, rankingThe: 59,
    estimatedMonthlyLivingCostEur: 900,
    description: 'Wageningen is the #1 university worldwide for agriculture and forestry, and strong in life sciences.',
    programs: [
      { id: 'p-75', universityId: 'uni-30', name: 'M.Sc. Biology', fieldOfStudy: 'Biology', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 2314, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-05-01', applicationUrl: 'https://www.wur.nl/apply' },
      { id: 'p-76', universityId: 'uni-30', name: 'M.Sc. Environmental Sciences', fieldOfStudy: 'Natural Sciences', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 2314, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-05-01', applicationUrl: 'https://www.wur.nl/apply' },
    ]
  },

  // ============================================
  // SWITZERLAND (10 universities)
  // ============================================
  {
    id: 'uni-31', name: 'ETH Zurich', country: 'Switzerland', city: 'Zurich',
    websiteUrl: 'https://ethz.ch', logoUrl: '', rankingQs: 7, rankingThe: 11,
    estimatedMonthlyLivingCostEur: 1800,
    description: 'ETH Zurich is one of the world\'s leading universities for technology and natural sciences. Einstein\'s alma mater.',
    programs: [
      { id: 'p-77', universityId: 'uni-31', name: 'M.Sc. Computer Science', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 1460, minGpaRequired: 3.7, requiredLanguage: 'English', requiredLanguageLevel: 'C1', applicationDeadline: '2026-12-15', applicationUrl: 'https://ethz.ch/apply' },
      { id: 'p-78', universityId: 'uni-31', name: 'M.Sc. Physics', fieldOfStudy: 'Physics', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 1460, minGpaRequired: 3.5, requiredLanguage: 'English', requiredLanguageLevel: 'C1', applicationDeadline: '2026-12-15', applicationUrl: 'https://ethz.ch/apply' },
      { id: 'p-79', universityId: 'uni-31', name: 'M.Sc. Mechanical Engineering', fieldOfStudy: 'Engineering', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 1460, minGpaRequired: 3.5, requiredLanguage: 'English', requiredLanguageLevel: 'C1', applicationDeadline: '2026-12-15', applicationUrl: 'https://ethz.ch/apply' },
    ]
  },
  {
    id: 'uni-32', name: 'EPFL', country: 'Switzerland', city: 'Lausanne',
    websiteUrl: 'https://www.epfl.ch', logoUrl: '', rankingQs: 12, rankingThe: 19,
    estimatedMonthlyLivingCostEur: 1700,
    description: 'EPFL is a world-renowned Swiss technical university on the shores of Lake Geneva, strong in all STEM fields.',
    programs: [
      { id: 'p-80', universityId: 'uni-32', name: 'M.Sc. Computer Science', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 1460, minGpaRequired: 3.5, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-12-15', applicationUrl: 'https://www.epfl.ch/apply' },
      { id: 'p-81', universityId: 'uni-32', name: 'M.Sc. Data Science', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 1460, minGpaRequired: 3.5, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-12-15', applicationUrl: 'https://www.epfl.ch/apply' },
    ]
  },
  {
    id: 'uni-33', name: 'University of Zurich', country: 'Switzerland', city: 'Zurich',
    websiteUrl: 'https://www.uzh.ch', logoUrl: '', rankingQs: 83, rankingThe: 80,
    estimatedMonthlyLivingCostEur: 1800,
    description: 'University of Zurich is the largest university in Switzerland with strengths in finance, law, and life sciences.',
    programs: [
      { id: 'p-82', universityId: 'uni-33', name: 'M.Sc. Economics', fieldOfStudy: 'Economics', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 1800, minGpaRequired: 3.2, requiredLanguage: 'English', requiredLanguageLevel: 'C1', applicationDeadline: '2026-12-15', applicationUrl: 'https://www.uzh.ch/apply' },
      { id: 'p-83', universityId: 'uni-33', name: 'LL.M. International Law', fieldOfStudy: 'Law', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 12, tuitionPerYearEur: 1800, minGpaRequired: 3.3, requiredLanguage: 'English', requiredLanguageLevel: 'C1', applicationDeadline: '2026-02-28', applicationUrl: 'https://www.uzh.ch/apply' },
    ]
  },
  {
    id: 'uni-34', name: 'University of Basel', country: 'Switzerland', city: 'Basel',
    websiteUrl: 'https://www.unibas.ch', logoUrl: '', rankingQs: 141, rankingThe: 101,
    estimatedMonthlyLivingCostEur: 1600,
    description: 'University of Basel is Switzerland\'s oldest university, strong in biomedical research and the pharma industry hub.',
    programs: [
      { id: 'p-84', universityId: 'uni-34', name: 'M.Sc. Computer Science', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 1600, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-04-30', applicationUrl: 'https://www.unibas.ch/apply' },
      { id: 'p-85', universityId: 'uni-34', name: 'M.Sc. Chemistry', fieldOfStudy: 'Chemistry', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 1600, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-04-30', applicationUrl: 'https://www.unibas.ch/apply' },
    ]
  },
  {
    id: 'uni-35', name: 'University of Bern', country: 'Switzerland', city: 'Bern',
    websiteUrl: 'https://www.unibe.ch', logoUrl: '', rankingQs: 127, rankingThe: 98,
    estimatedMonthlyLivingCostEur: 1500,
    description: 'University of Bern is located in the Swiss capital, known for space research, climate science, and medicine.',
    programs: [
      { id: 'p-86', universityId: 'uni-35', name: 'M.Sc. Physics', fieldOfStudy: 'Physics', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 1500, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-04-30', applicationUrl: 'https://www.unibe.ch/apply' },
      { id: 'p-87', universityId: 'uni-35', name: 'M.Sc. Biology', fieldOfStudy: 'Biology', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 1500, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-04-30', applicationUrl: 'https://www.unibe.ch/apply' },
    ]
  },

  // ============================================
  // SWEDEN (12 universities)
  // ============================================
  {
    id: 'uni-36', name: 'KTH Royal Institute of Technology', country: 'Sweden', city: 'Stockholm',
    websiteUrl: 'https://www.kth.se', logoUrl: '', rankingQs: 73, rankingThe: 72,
    estimatedMonthlyLivingCostEur: 1050,
    description: 'KTH is Sweden\'s largest and most prestigious technical university with world-class engineering programs.',
    programs: [
      { id: 'p-88', universityId: 'uni-36', name: 'M.Sc. Computer Science', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 0, minGpaRequired: 3.2, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-01-15', applicationUrl: 'https://www.kth.se/apply' },
      { id: 'p-89', universityId: 'uni-36', name: 'M.Sc. Machine Learning', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 0, minGpaRequired: 3.3, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-01-15', applicationUrl: 'https://www.kth.se/apply' },
      { id: 'p-90', universityId: 'uni-36', name: 'M.Sc. Electrical Engineering', fieldOfStudy: 'Engineering', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 0, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-01-15', applicationUrl: 'https://www.kth.se/apply' },
    ]
  },
  {
    id: 'uni-37', name: 'Lund University', country: 'Sweden', city: 'Lund',
    websiteUrl: 'https://www.lu.se', logoUrl: '', rankingQs: 85, rankingThe: 95,
    estimatedMonthlyLivingCostEur: 900,
    description: 'Lund University is Scandinavia\'s largest institution for research and education, founded in 1666.',
    programs: [
      { id: 'p-91', universityId: 'uni-37', name: 'M.Sc. Computer Science', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 0, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-01-15', applicationUrl: 'https://www.lu.se/apply' },
      { id: 'p-92', universityId: 'uni-37', name: 'M.Sc. Physics', fieldOfStudy: 'Physics', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 0, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-01-15', applicationUrl: 'https://www.lu.se/apply' },
      { id: 'p-93', universityId: 'uni-37', name: 'M.Sc. Economics', fieldOfStudy: 'Economics', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 0, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-01-15', applicationUrl: 'https://www.lu.se/apply' },
    ]
  },
  {
    id: 'uni-38', name: 'Uppsala University', country: 'Sweden', city: 'Uppsala',
    websiteUrl: 'https://www.uu.se', logoUrl: '', rankingQs: 105, rankingThe: 88,
    estimatedMonthlyLivingCostEur: 900,
    description: 'Uppsala University is the oldest university in Sweden (1477) and consistently ranked among Europe\'s best.',
    programs: [
      { id: 'p-94', universityId: 'uni-38', name: 'M.Sc. Computer Science', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 0, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-01-15', applicationUrl: 'https://www.uu.se/apply' },
      { id: 'p-95', universityId: 'uni-38', name: 'M.Sc. Physics', fieldOfStudy: 'Physics', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 0, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-01-15', applicationUrl: 'https://www.uu.se/apply' },
    ]
  },
  {
    id: 'uni-39', name: 'Chalmers University of Technology', country: 'Sweden', city: 'Gothenburg',
    websiteUrl: 'https://www.chalmers.se', logoUrl: '', rankingQs: 125, rankingThe: 130,
    estimatedMonthlyLivingCostEur: 950,
    description: 'Chalmers is one of the Nordic region\'s leading technical universities with strong automotive and IT research.',
    programs: [
      { id: 'p-96', universityId: 'uni-39', name: 'M.Sc. Computer Science', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 0, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-01-15', applicationUrl: 'https://www.chalmers.se/apply' },
      { id: 'p-97', universityId: 'uni-39', name: 'M.Sc. Engineering', fieldOfStudy: 'Engineering', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 0, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-01-15', applicationUrl: 'https://www.chalmers.se/apply' },
    ]
  },
  {
    id: 'uni-40', name: 'Stockholm University', country: 'Sweden', city: 'Stockholm',
    websiteUrl: 'https://www.su.se', logoUrl: '', rankingQs: 148, rankingThe: 122,
    estimatedMonthlyLivingCostEur: 1050,
    description: 'Stockholm University is one of the largest in Scandinavia, known for natural sciences and social sciences.',
    programs: [
      { id: 'p-98', universityId: 'uni-40', name: 'M.Sc. Computer Science', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 0, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-01-15', applicationUrl: 'https://www.su.se/apply' },
      { id: 'p-99', universityId: 'uni-40', name: 'M.Sc. Mathematics', fieldOfStudy: 'Mathematics', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 0, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-01-15', applicationUrl: 'https://www.su.se/apply' },
    ]
  },

  // ============================================
  // FINLAND (8 universities)
  // ============================================
  {
    id: 'uni-41', name: 'University of Helsinki', country: 'Finland', city: 'Helsinki',
    websiteUrl: 'https://www.helsinki.fi', logoUrl: '', rankingQs: 115, rankingThe: 101,
    estimatedMonthlyLivingCostEur: 1000,
    description: 'The University of Helsinki is Finland\'s leading multidisciplinary research university with a strong tech ecosystem.',
    programs: [
      { id: 'p-100', universityId: 'uni-41', name: 'M.Sc. Computer Science', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 15000, minGpaRequired: 3.2, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-01-10', applicationUrl: 'https://www.helsinki.fi/apply' },
      { id: 'p-101', universityId: 'uni-41', name: 'M.Sc. Data Science', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 15000, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-01-10', applicationUrl: 'https://www.helsinki.fi/apply' },
    ]
  },
  {
    id: 'uni-42', name: 'Aalto University', country: 'Finland', city: 'Espoo',
    websiteUrl: 'https://www.aalto.fi', logoUrl: '', rankingQs: 109, rankingThe: 119,
    estimatedMonthlyLivingCostEur: 1000,
    description: 'Aalto University combines technology, business, and design. Located near Helsinki with a vibrant startup scene.',
    programs: [
      { id: 'p-102', universityId: 'uni-42', name: 'M.Sc. Computer Science', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 15000, minGpaRequired: 3.2, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-01-10', applicationUrl: 'https://www.aalto.fi/apply' },
      { id: 'p-103', universityId: 'uni-42', name: 'M.Sc. Business Administration', fieldOfStudy: 'Business Administration', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 15000, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-01-10', applicationUrl: 'https://www.aalto.fi/apply' },
      { id: 'p-104', universityId: 'uni-42', name: 'M.Sc. Architecture', fieldOfStudy: 'Architecture', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 15000, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-01-10', applicationUrl: 'https://www.aalto.fi/apply' },
    ]
  },
  {
    id: 'uni-43', name: 'University of Turku', country: 'Finland', city: 'Turku',
    websiteUrl: 'https://www.utu.fi', logoUrl: '', rankingQs: 295, rankingThe: 260,
    estimatedMonthlyLivingCostEur: 850,
    description: 'University of Turku is an international research university with affordable living in Finland\'s oldest city.',
    programs: [
      { id: 'p-105', universityId: 'uni-43', name: 'M.Sc. Computer Science', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 12000, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-01-15', applicationUrl: 'https://www.utu.fi/apply' },
      { id: 'p-106', universityId: 'uni-43', name: 'M.Sc. Biology', fieldOfStudy: 'Biology', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 12000, minGpaRequired: 2.8, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-01-15', applicationUrl: 'https://www.utu.fi/apply' },
    ]
  },
  {
    id: 'uni-44', name: 'Tampere University', country: 'Finland', city: 'Tampere',
    websiteUrl: 'https://www.tuni.fi', logoUrl: '', rankingQs: 350, rankingThe: 320,
    estimatedMonthlyLivingCostEur: 800,
    description: 'Tampere University is Finland\'s second-largest university, strong in technology, health, and society research.',
    programs: [
      { id: 'p-107', universityId: 'uni-44', name: 'M.Sc. Computer Science', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 10000, minGpaRequired: 2.8, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-01-15', applicationUrl: 'https://www.tuni.fi/apply' },
      { id: 'p-108', universityId: 'uni-44', name: 'M.Sc. Engineering', fieldOfStudy: 'Engineering', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 10000, minGpaRequired: 2.8, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-01-15', applicationUrl: 'https://www.tuni.fi/apply' },
    ]
  },

  // ============================================
  // AUSTRIA (8 universities)
  // ============================================
  {
    id: 'uni-45', name: 'University of Vienna', country: 'Austria', city: 'Vienna',
    websiteUrl: 'https://www.univie.ac.at', logoUrl: '', rankingQs: 130, rankingThe: 124,
    estimatedMonthlyLivingCostEur: 900,
    description: 'University of Vienna is one of the oldest and largest universities in Europe, founded in 1365.',
    programs: [
      { id: 'p-109', universityId: 'uni-45', name: 'M.Sc. Computer Science', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 726, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-02-28', applicationUrl: 'https://www.univie.ac.at/apply' },
      { id: 'p-110', universityId: 'uni-45', name: 'M.Sc. Economics', fieldOfStudy: 'Economics', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 726, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-02-28', applicationUrl: 'https://www.univie.ac.at/apply' },
      { id: 'p-111', universityId: 'uni-45', name: 'M.Sc. Psychology', fieldOfStudy: 'Psychology', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 726, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-02-28', applicationUrl: 'https://www.univie.ac.at/apply' },
    ]
  },
  {
    id: 'uni-46', name: 'TU Wien', country: 'Austria', city: 'Vienna',
    websiteUrl: 'https://www.tuwien.at', logoUrl: '', rankingQs: 192, rankingThe: 180,
    estimatedMonthlyLivingCostEur: 900,
    description: 'TU Wien is Austria\'s leading technical university, strong in computer science, engineering, and architecture.',
    programs: [
      { id: 'p-112', universityId: 'uni-46', name: 'M.Sc. Computer Science', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 726, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-03-31', applicationUrl: 'https://www.tuwien.at/apply' },
      { id: 'p-113', universityId: 'uni-46', name: 'M.Sc. Architecture', fieldOfStudy: 'Architecture', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 726, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-03-31', applicationUrl: 'https://www.tuwien.at/apply' },
    ]
  },
  {
    id: 'uni-47', name: 'University of Graz', country: 'Austria', city: 'Graz',
    websiteUrl: 'https://www.uni-graz.at', logoUrl: '', rankingQs: 350, rankingThe: 300,
    estimatedMonthlyLivingCostEur: 750,
    description: 'University of Graz is Austria\'s second-oldest university, known for humanities, natural sciences, and social sciences.',
    programs: [
      { id: 'p-114', universityId: 'uni-47', name: 'M.Sc. Computer Science', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 726, minGpaRequired: 2.8, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-05-15', applicationUrl: 'https://www.uni-graz.at/apply' },
      { id: 'p-115', universityId: 'uni-47', name: 'M.Sc. Physics', fieldOfStudy: 'Physics', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 726, minGpaRequired: 2.8, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-05-15', applicationUrl: 'https://www.uni-graz.at/apply' },
    ]
  },
  {
    id: 'uni-48', name: 'University of Innsbruck', country: 'Austria', city: 'Innsbruck',
    websiteUrl: 'https://www.uibk.ac.at', logoUrl: '', rankingQs: 280, rankingThe: 250,
    estimatedMonthlyLivingCostEur: 800,
    description: 'University of Innsbruck is a research university in the Alps, strong in physics, geography, and atmospheric sciences.',
    programs: [
      { id: 'p-116', universityId: 'uni-48', name: 'M.Sc. Computer Science', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 726, minGpaRequired: 2.8, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-03-15', applicationUrl: 'https://www.uibk.ac.at/apply' },
      { id: 'p-117', universityId: 'uni-48', name: 'M.Sc. Physics', fieldOfStudy: 'Physics', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 726, minGpaRequired: 2.8, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-03-15', applicationUrl: 'https://www.uibk.ac.at/apply' },
    ]
  },

  // ============================================
  // ITALY (12 universities)
  // ============================================
  {
    id: 'uni-49', name: 'Politecnico di Milano', country: 'Italy', city: 'Milan',
    websiteUrl: 'https://www.polimi.it', logoUrl: '', rankingQs: 123, rankingThe: 155,
    estimatedMonthlyLivingCostEur: 1000,
    description: 'Politecnico di Milano is Italy\'s most prestigious technical university, known for engineering, architecture, and design.',
    programs: [
      { id: 'p-118', universityId: 'uni-49', name: 'M.Sc. Computer Science and Engineering', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 3900, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-01-20', applicationUrl: 'https://www.polimi.it/apply' },
      { id: 'p-119', universityId: 'uni-49', name: 'M.Sc. Mechanical Engineering', fieldOfStudy: 'Engineering', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 3900, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-01-20', applicationUrl: 'https://www.polimi.it/apply' },
      { id: 'p-120', universityId: 'uni-49', name: 'M.Sc. Architecture', fieldOfStudy: 'Architecture', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 3900, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-01-20', applicationUrl: 'https://www.polimi.it/apply' },
    ]
  },
  {
    id: 'uni-50', name: 'University of Bologna', country: 'Italy', city: 'Bologna',
    websiteUrl: 'https://www.unibo.it', logoUrl: '', rankingQs: 164, rankingThe: 172,
    estimatedMonthlyLivingCostEur: 850,
    description: 'The University of Bologna is the oldest university in the world (1088), offering a wide range of programs in English.',
    programs: [
      { id: 'p-121', universityId: 'uni-50', name: 'M.Sc. Computer Science', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 2800, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-03-15', applicationUrl: 'https://www.unibo.it/apply' },
      { id: 'p-122', universityId: 'uni-50', name: 'M.Sc. Economics', fieldOfStudy: 'Economics', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 2800, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-03-15', applicationUrl: 'https://www.unibo.it/apply' },
      { id: 'p-123', universityId: 'uni-50', name: 'LL.M. European Law', fieldOfStudy: 'Law', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 12, tuitionPerYearEur: 2800, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-03-15', applicationUrl: 'https://www.unibo.it/apply' },
    ]
  },
  {
    id: 'uni-51', name: 'Sapienza University of Rome', country: 'Italy', city: 'Rome',
    websiteUrl: 'https://www.uniroma1.it', logoUrl: '', rankingQs: 132, rankingThe: 160,
    estimatedMonthlyLivingCostEur: 900,
    description: 'Sapienza is the largest university in Europe by enrollment and one of Italy\'s most prestigious institutions.',
    programs: [
      { id: 'p-124', universityId: 'uni-51', name: 'M.Sc. Computer Science', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 2500, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-04-30', applicationUrl: 'https://www.uniroma1.it/apply' },
      { id: 'p-125', universityId: 'uni-51', name: 'M.Sc. Physics', fieldOfStudy: 'Physics', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 2500, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-04-30', applicationUrl: 'https://www.uniroma1.it/apply' },
      { id: 'p-126', universityId: 'uni-51', name: 'M.Sc. Architecture', fieldOfStudy: 'Architecture', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 2500, minGpaRequired: 2.8, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-04-30', applicationUrl: 'https://www.uniroma1.it/apply' },
    ]
  },
  {
    id: 'uni-52', name: 'Politecnico di Torino', country: 'Italy', city: 'Turin',
    websiteUrl: 'https://www.polito.it', logoUrl: '', rankingQs: 241, rankingThe: 230,
    estimatedMonthlyLivingCostEur: 800,
    description: 'Politecnico di Torino is a leading Italian technical university with strong ties to FIAT and the automotive industry.',
    programs: [
      { id: 'p-127', universityId: 'uni-52', name: 'M.Sc. Computer Engineering', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 3000, minGpaRequired: 2.8, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-02-28', applicationUrl: 'https://www.polito.it/apply' },
      { id: 'p-128', universityId: 'uni-52', name: 'M.Sc. Automotive Engineering', fieldOfStudy: 'Engineering', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 3000, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-02-28', applicationUrl: 'https://www.polito.it/apply' },
    ]
  },
  {
    id: 'uni-53', name: 'University of Milan', country: 'Italy', city: 'Milan',
    websiteUrl: 'https://www.unimi.it', logoUrl: '', rankingQs: 216, rankingThe: 190,
    estimatedMonthlyLivingCostEur: 1000,
    description: 'The University of Milan is the largest university in Lombardy, strong in medicine, law, and humanities.',
    programs: [
      { id: 'p-129', universityId: 'uni-53', name: 'M.Sc. Computer Science', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 3000, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-04-15', applicationUrl: 'https://www.unimi.it/apply' },
      { id: 'p-130', universityId: 'uni-53', name: 'M.Sc. Economics', fieldOfStudy: 'Economics', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 3000, minGpaRequired: 2.8, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-04-15', applicationUrl: 'https://www.unimi.it/apply' },
    ]
  },
  {
    id: 'uni-54', name: 'University of Padua', country: 'Italy', city: 'Padua',
    websiteUrl: 'https://www.unipd.it', logoUrl: '', rankingQs: 219, rankingThe: 201,
    estimatedMonthlyLivingCostEur: 800,
    description: 'University of Padua is one of the oldest universities in the world (1222), where Galileo once taught.',
    programs: [
      { id: 'p-131', universityId: 'uni-54', name: 'M.Sc. Computer Science', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 2500, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-04-30', applicationUrl: 'https://www.unipd.it/apply' },
      { id: 'p-132', universityId: 'uni-54', name: 'M.Sc. Physics', fieldOfStudy: 'Physics', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 2500, minGpaRequired: 2.8, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-04-30', applicationUrl: 'https://www.unipd.it/apply' },
    ]
  },

  // ============================================
  // FRANCE (12 universities)
  // ============================================
  {
    id: 'uni-55', name: 'Université Paris-Saclay', country: 'France', city: 'Paris',
    websiteUrl: 'https://www.universite-paris-saclay.fr', logoUrl: '', rankingQs: 71, rankingThe: 58,
    estimatedMonthlyLivingCostEur: 1200,
    description: 'Paris-Saclay is France\'s top-ranked university, a merger of several prestigious institutions south of Paris.',
    programs: [
      { id: 'p-133', universityId: 'uni-55', name: 'M.Sc. Computer Science', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 243, minGpaRequired: 3.2, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-05-15', applicationUrl: 'https://www.universite-paris-saclay.fr/apply' },
      { id: 'p-134', universityId: 'uni-55', name: 'M.Sc. Physics', fieldOfStudy: 'Physics', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 243, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-05-15', applicationUrl: 'https://www.universite-paris-saclay.fr/apply' },
      { id: 'p-135', universityId: 'uni-55', name: 'M.Sc. Mathematics', fieldOfStudy: 'Mathematics', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 243, minGpaRequired: 3.2, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-05-15', applicationUrl: 'https://www.universite-paris-saclay.fr/apply' },
    ]
  },
  {
    id: 'uni-56', name: 'Sorbonne University', country: 'France', city: 'Paris',
    websiteUrl: 'https://www.sorbonne-universite.fr', logoUrl: '', rankingQs: 59, rankingThe: 65,
    estimatedMonthlyLivingCostEur: 1200,
    description: 'Sorbonne University inherits 800 years of Parisian academic tradition, strong in science, medicine, and humanities.',
    programs: [
      { id: 'p-136', universityId: 'uni-56', name: 'M.Sc. Computer Science', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 243, minGpaRequired: 3.3, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-04-15', applicationUrl: 'https://www.sorbonne-universite.fr/apply' },
      { id: 'p-137', universityId: 'uni-56', name: 'M.Sc. Mathematics', fieldOfStudy: 'Mathematics', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 243, minGpaRequired: 3.2, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-04-15', applicationUrl: 'https://www.sorbonne-universite.fr/apply' },
    ]
  },
  {
    id: 'uni-57', name: 'PSL University', country: 'France', city: 'Paris',
    websiteUrl: 'https://www.psl.eu', logoUrl: '', rankingQs: 24, rankingThe: 44,
    estimatedMonthlyLivingCostEur: 1200,
    description: 'PSL is a collegiate university grouping elite institutions like ENS, Dauphine, and Mines ParisTech.',
    programs: [
      { id: 'p-138', universityId: 'uni-57', name: 'M.Sc. Computer Science', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 380, minGpaRequired: 3.5, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-03-15', applicationUrl: 'https://www.psl.eu/apply' },
      { id: 'p-139', universityId: 'uni-57', name: 'M.Sc. Economics', fieldOfStudy: 'Economics', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 380, minGpaRequired: 3.3, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-03-15', applicationUrl: 'https://www.psl.eu/apply' },
    ]
  },
  {
    id: 'uni-58', name: 'Grenoble Alpes University', country: 'France', city: 'Grenoble',
    websiteUrl: 'https://www.univ-grenoble-alpes.fr', logoUrl: '', rankingQs: 221, rankingThe: 196,
    estimatedMonthlyLivingCostEur: 850,
    description: 'Grenoble Alpes is a leading French research university in the Alps, strong in physics, CS, and engineering.',
    programs: [
      { id: 'p-140', universityId: 'uni-58', name: 'M.Sc. Computer Science', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 243, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-05-01', applicationUrl: 'https://www.univ-grenoble-alpes.fr/apply' },
      { id: 'p-141', universityId: 'uni-58', name: 'M.Sc. Physics', fieldOfStudy: 'Physics', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 243, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-05-01', applicationUrl: 'https://www.univ-grenoble-alpes.fr/apply' },
    ]
  },
  {
    id: 'uni-59', name: 'University of Strasbourg', country: 'France', city: 'Strasbourg',
    websiteUrl: 'https://www.unistra.fr', logoUrl: '', rankingQs: 292, rankingThe: 260,
    estimatedMonthlyLivingCostEur: 800,
    description: 'University of Strasbourg sits on the French-German border with 4 Nobel Prize winners and strong EU ties.',
    programs: [
      { id: 'p-142', universityId: 'uni-59', name: 'M.Sc. Computer Science', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 243, minGpaRequired: 2.8, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-05-01', applicationUrl: 'https://www.unistra.fr/apply' },
      { id: 'p-143', universityId: 'uni-59', name: 'M.Sc. Chemistry', fieldOfStudy: 'Chemistry', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 243, minGpaRequired: 2.8, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-05-01', applicationUrl: 'https://www.unistra.fr/apply' },
    ]
  },

  // ============================================
  // SPAIN (10 universities)
  // ============================================
  {
    id: 'uni-60', name: 'University of Barcelona', country: 'Spain', city: 'Barcelona',
    websiteUrl: 'https://www.ub.edu', logoUrl: '', rankingQs: 164, rankingThe: 152,
    estimatedMonthlyLivingCostEur: 950,
    description: 'University of Barcelona is Spain\'s highest-ranked university, strong in biomedicine, social sciences, and humanities.',
    programs: [
      { id: 'p-144', universityId: 'uni-60', name: 'M.Sc. Computer Science', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 12, tuitionPerYearEur: 2500, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-06-15', applicationUrl: 'https://www.ub.edu/apply' },
      { id: 'p-145', universityId: 'uni-60', name: 'M.Sc. Economics', fieldOfStudy: 'Economics', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 12, tuitionPerYearEur: 2500, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-06-15', applicationUrl: 'https://www.ub.edu/apply' },
    ]
  },
  {
    id: 'uni-61', name: 'Universitat Politècnica de Catalunya', country: 'Spain', city: 'Barcelona',
    websiteUrl: 'https://www.upc.edu', logoUrl: '', rankingQs: 315, rankingThe: 280,
    estimatedMonthlyLivingCostEur: 950,
    description: 'UPC is Spain\'s leading technical university, specializing in architecture, engineering, and technology.',
    programs: [
      { id: 'p-146', universityId: 'uni-61', name: 'M.Sc. Computer Science', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 2500, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-06-30', applicationUrl: 'https://www.upc.edu/apply' },
      { id: 'p-147', universityId: 'uni-61', name: 'M.Sc. Architecture', fieldOfStudy: 'Architecture', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 12, tuitionPerYearEur: 2500, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-06-30', applicationUrl: 'https://www.upc.edu/apply' },
    ]
  },
  {
    id: 'uni-62', name: 'Autonomous University of Madrid', country: 'Spain', city: 'Madrid',
    websiteUrl: 'https://www.uam.es', logoUrl: '', rankingQs: 199, rankingThe: 175,
    estimatedMonthlyLivingCostEur: 900,
    description: 'UAM is one of Spain\'s top research universities with a beautiful campus near Madrid.',
    programs: [
      { id: 'p-148', universityId: 'uni-62', name: 'M.Sc. Computer Science', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 12, tuitionPerYearEur: 2200, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-06-15', applicationUrl: 'https://www.uam.es/apply' },
      { id: 'p-149', universityId: 'uni-62', name: 'M.Sc. Physics', fieldOfStudy: 'Physics', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 12, tuitionPerYearEur: 2200, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-06-15', applicationUrl: 'https://www.uam.es/apply' },
      { id: 'p-150', universityId: 'uni-62', name: 'M.Sc. Biology', fieldOfStudy: 'Biology', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 12, tuitionPerYearEur: 2200, minGpaRequired: 2.8, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-06-15', applicationUrl: 'https://www.uam.es/apply' },
    ]
  },
  {
    id: 'uni-63', name: 'Complutense University of Madrid', country: 'Spain', city: 'Madrid',
    websiteUrl: 'https://www.ucm.es', logoUrl: '', rankingQs: 226, rankingThe: 200,
    estimatedMonthlyLivingCostEur: 900,
    description: 'Complutense is the largest university in Spain and one of the oldest, with a wide range of programs.',
    programs: [
      { id: 'p-151', universityId: 'uni-63', name: 'M.Sc. Computer Science', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 12, tuitionPerYearEur: 2000, minGpaRequired: 2.8, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-06-30', applicationUrl: 'https://www.ucm.es/apply' },
      { id: 'p-152', universityId: 'uni-63', name: 'LL.M. Law', fieldOfStudy: 'Law', degreeLevel: 'masters', languageOfInstruction: 'Spanish', durationMonths: 12, tuitionPerYearEur: 2000, minGpaRequired: 3.0, requiredLanguage: 'Spanish', requiredLanguageLevel: 'B2', applicationDeadline: '2026-06-30', applicationUrl: 'https://www.ucm.es/apply' },
    ]
  },

  // ============================================
  // DENMARK (6 universities)
  // ============================================
  {
    id: 'uni-64', name: 'University of Copenhagen', country: 'Denmark', city: 'Copenhagen',
    websiteUrl: 'https://www.ku.dk', logoUrl: '', rankingQs: 82, rankingThe: 96,
    estimatedMonthlyLivingCostEur: 1200,
    description: 'University of Copenhagen is Scandinavia\'s most prestigious university with 9 Nobel laureates.',
    programs: [
      { id: 'p-153', universityId: 'uni-64', name: 'M.Sc. Computer Science', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 0, minGpaRequired: 3.2, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-01-15', applicationUrl: 'https://www.ku.dk/apply' },
      { id: 'p-154', universityId: 'uni-64', name: 'M.Sc. Economics', fieldOfStudy: 'Economics', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 0, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-01-15', applicationUrl: 'https://www.ku.dk/apply' },
      { id: 'p-155', universityId: 'uni-64', name: 'M.Sc. Biology', fieldOfStudy: 'Biology', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 0, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-01-15', applicationUrl: 'https://www.ku.dk/apply' },
    ]
  },
  {
    id: 'uni-65', name: 'Technical University of Denmark', country: 'Denmark', city: 'Copenhagen',
    websiteUrl: 'https://www.dtu.dk', logoUrl: '', rankingQs: 99, rankingThe: 111,
    estimatedMonthlyLivingCostEur: 1200,
    description: 'DTU is the leading technical university in Denmark, focused on engineering, technology, and natural sciences.',
    programs: [
      { id: 'p-156', universityId: 'uni-65', name: 'M.Sc. Computer Science', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 0, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-01-15', applicationUrl: 'https://www.dtu.dk/apply' },
      { id: 'p-157', universityId: 'uni-65', name: 'M.Sc. Engineering', fieldOfStudy: 'Engineering', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 0, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-01-15', applicationUrl: 'https://www.dtu.dk/apply' },
    ]
  },
  {
    id: 'uni-66', name: 'Aarhus University', country: 'Denmark', city: 'Aarhus',
    websiteUrl: 'https://www.au.dk', logoUrl: '', rankingQs: 143, rankingThe: 109,
    estimatedMonthlyLivingCostEur: 1000,
    description: 'Aarhus University is Denmark\'s second-largest university, strong in political science, economics, and natural sciences.',
    programs: [
      { id: 'p-158', universityId: 'uni-66', name: 'M.Sc. Computer Science', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 0, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-01-15', applicationUrl: 'https://www.au.dk/apply' },
      { id: 'p-159', universityId: 'uni-66', name: 'M.Sc. Economics', fieldOfStudy: 'Economics', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 0, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-01-15', applicationUrl: 'https://www.au.dk/apply' },
    ]
  },

  // ============================================
  // NORWAY (5 universities)
  // ============================================
  {
    id: 'uni-67', name: 'University of Oslo', country: 'Norway', city: 'Oslo',
    websiteUrl: 'https://www.uio.no', logoUrl: '', rankingQs: 113, rankingThe: 131,
    estimatedMonthlyLivingCostEur: 1300,
    description: 'University of Oslo is Norway\'s oldest and largest university, with free tuition for all students.',
    programs: [
      { id: 'p-160', universityId: 'uni-67', name: 'M.Sc. Computer Science', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 0, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-03-01', applicationUrl: 'https://www.uio.no/apply' },
      { id: 'p-161', universityId: 'uni-67', name: 'M.Sc. Economics', fieldOfStudy: 'Economics', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 0, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-03-01', applicationUrl: 'https://www.uio.no/apply' },
      { id: 'p-162', universityId: 'uni-67', name: 'LL.M. International Law', fieldOfStudy: 'Law', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 12, tuitionPerYearEur: 0, minGpaRequired: 3.2, requiredLanguage: 'English', requiredLanguageLevel: 'C1', applicationDeadline: '2026-03-01', applicationUrl: 'https://www.uio.no/apply' },
    ]
  },
  {
    id: 'uni-68', name: 'NTNU', country: 'Norway', city: 'Trondheim',
    websiteUrl: 'https://www.ntnu.edu', logoUrl: '', rankingQs: 196, rankingThe: 175,
    estimatedMonthlyLivingCostEur: 1100,
    description: 'NTNU is Norway\'s largest university and leading technical institution with free tuition.',
    programs: [
      { id: 'p-163', universityId: 'uni-68', name: 'M.Sc. Computer Science', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 0, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-03-01', applicationUrl: 'https://www.ntnu.edu/apply' },
      { id: 'p-164', universityId: 'uni-68', name: 'M.Sc. Engineering', fieldOfStudy: 'Engineering', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 0, minGpaRequired: 2.8, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-03-01', applicationUrl: 'https://www.ntnu.edu/apply' },
    ]
  },

  // ============================================
  // BELGIUM (6 universities)
  // ============================================
  {
    id: 'uni-69', name: 'KU Leuven', country: 'Belgium', city: 'Leuven',
    websiteUrl: 'https://www.kuleuven.be', logoUrl: '', rankingQs: 61, rankingThe: 42,
    estimatedMonthlyLivingCostEur: 900,
    description: 'KU Leuven is Belgium\'s largest and highest-ranked university, consistently in Europe\'s top 10.',
    programs: [
      { id: 'p-165', universityId: 'uni-69', name: 'M.Sc. Computer Science', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 938, minGpaRequired: 3.2, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-03-01', applicationUrl: 'https://www.kuleuven.be/apply' },
      { id: 'p-166', universityId: 'uni-69', name: 'M.Sc. Business Administration', fieldOfStudy: 'Business Administration', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 12, tuitionPerYearEur: 938, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-03-01', applicationUrl: 'https://www.kuleuven.be/apply' },
      { id: 'p-167', universityId: 'uni-69', name: 'M.Sc. Engineering', fieldOfStudy: 'Engineering', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 938, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-03-01', applicationUrl: 'https://www.kuleuven.be/apply' },
    ]
  },
  {
    id: 'uni-70', name: 'Ghent University', country: 'Belgium', city: 'Ghent',
    websiteUrl: 'https://www.ugent.be', logoUrl: '', rankingQs: 133, rankingThe: 101,
    estimatedMonthlyLivingCostEur: 850,
    description: 'Ghent University is one of Belgium\'s top research universities with a vibrant student city.',
    programs: [
      { id: 'p-168', universityId: 'uni-70', name: 'M.Sc. Computer Science', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 938, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-03-01', applicationUrl: 'https://www.ugent.be/apply' },
      { id: 'p-169', universityId: 'uni-70', name: 'M.Sc. Biology', fieldOfStudy: 'Biology', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 938, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-03-01', applicationUrl: 'https://www.ugent.be/apply' },
    ]
  },
  {
    id: 'uni-71', name: 'Université Libre de Bruxelles', country: 'Belgium', city: 'Brussels',
    websiteUrl: 'https://www.ulb.be', logoUrl: '', rankingQs: 186, rankingThe: 165,
    estimatedMonthlyLivingCostEur: 950,
    description: 'ULB is a French-speaking research university in the heart of Brussels, the EU capital.',
    programs: [
      { id: 'p-170', universityId: 'uni-71', name: 'M.Sc. Computer Science', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 835, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-04-30', applicationUrl: 'https://www.ulb.be/apply' },
      { id: 'p-171', universityId: 'uni-71', name: 'M.Sc. Economics', fieldOfStudy: 'Economics', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 835, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-04-30', applicationUrl: 'https://www.ulb.be/apply' },
    ]
  },

  // ============================================
  // IRELAND (5 universities)
  // ============================================
  {
    id: 'uni-72', name: 'Trinity College Dublin', country: 'Ireland', city: 'Dublin',
    websiteUrl: 'https://www.tcd.ie', logoUrl: '', rankingQs: 81, rankingThe: 146,
    estimatedMonthlyLivingCostEur: 1300,
    description: 'Trinity is Ireland\'s top university, founded in 1592, with a historic campus in the heart of Dublin.',
    programs: [
      { id: 'p-172', universityId: 'uni-72', name: 'M.Sc. Computer Science', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 12, tuitionPerYearEur: 11600, minGpaRequired: 3.3, requiredLanguage: 'English', requiredLanguageLevel: 'C1', applicationDeadline: '2026-06-30', applicationUrl: 'https://www.tcd.ie/apply' },
      { id: 'p-173', universityId: 'uni-72', name: 'M.Sc. Economics', fieldOfStudy: 'Economics', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 12, tuitionPerYearEur: 11600, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'C1', applicationDeadline: '2026-06-30', applicationUrl: 'https://www.tcd.ie/apply' },
    ]
  },
  {
    id: 'uni-73', name: 'University College Dublin', country: 'Ireland', city: 'Dublin',
    websiteUrl: 'https://www.ucd.ie', logoUrl: '', rankingQs: 126, rankingThe: 171,
    estimatedMonthlyLivingCostEur: 1300,
    description: 'UCD is Ireland\'s largest university by enrollment, strong in business, law, and engineering.',
    programs: [
      { id: 'p-174', universityId: 'uni-73', name: 'M.Sc. Computer Science', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 12, tuitionPerYearEur: 10400, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-06-30', applicationUrl: 'https://www.ucd.ie/apply' },
      { id: 'p-175', universityId: 'uni-73', name: 'M.Sc. Business Administration', fieldOfStudy: 'Business Administration', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 12, tuitionPerYearEur: 10400, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-06-30', applicationUrl: 'https://www.ucd.ie/apply' },
    ]
  },

  // ============================================
  // POLAND (8 universities)
  // ============================================
  {
    id: 'uni-74', name: 'University of Warsaw', country: 'Poland', city: 'Warsaw',
    websiteUrl: 'https://www.uw.edu.pl', logoUrl: '', rankingQs: 262, rankingThe: 401,
    estimatedMonthlyLivingCostEur: 600,
    description: 'University of Warsaw is Poland\'s top-ranked university with very affordable living costs and a growing tech scene.',
    programs: [
      { id: 'p-176', universityId: 'uni-74', name: 'M.Sc. Computer Science', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 3200, minGpaRequired: 2.7, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-06-15', applicationUrl: 'https://www.uw.edu.pl/apply' },
      { id: 'p-177', universityId: 'uni-74', name: 'M.Sc. Economics', fieldOfStudy: 'Economics', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 3200, minGpaRequired: 2.7, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-06-15', applicationUrl: 'https://www.uw.edu.pl/apply' },
    ]
  },
  {
    id: 'uni-75', name: 'Warsaw University of Technology', country: 'Poland', city: 'Warsaw',
    websiteUrl: 'https://www.pw.edu.pl', logoUrl: '', rankingQs: 500, rankingThe: 450,
    estimatedMonthlyLivingCostEur: 600,
    description: 'Warsaw University of Technology is Poland\'s oldest and largest technical university with strong engineering programs.',
    programs: [
      { id: 'p-178', universityId: 'uni-75', name: 'M.Sc. Computer Science', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 2500, minGpaRequired: 2.7, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-07-15', applicationUrl: 'https://www.pw.edu.pl/apply' },
      { id: 'p-179', universityId: 'uni-75', name: 'M.Sc. Engineering', fieldOfStudy: 'Engineering', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 2500, minGpaRequired: 2.7, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-07-15', applicationUrl: 'https://www.pw.edu.pl/apply' },
    ]
  },
  {
    id: 'uni-76', name: 'Jagiellonian University', country: 'Poland', city: 'Krakow',
    websiteUrl: 'https://www.uj.edu.pl', logoUrl: '', rankingQs: 304, rankingThe: 380,
    estimatedMonthlyLivingCostEur: 550,
    description: 'Jagiellonian is one of the oldest universities in the world (1364), located in beautiful Krakow.',
    programs: [
      { id: 'p-180', universityId: 'uni-76', name: 'M.Sc. Computer Science', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 3000, minGpaRequired: 2.8, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-06-30', applicationUrl: 'https://www.uj.edu.pl/apply' },
      { id: 'p-181', universityId: 'uni-76', name: 'M.Sc. Physics', fieldOfStudy: 'Physics', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 3000, minGpaRequired: 2.8, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-06-30', applicationUrl: 'https://www.uj.edu.pl/apply' },
    ]
  },
  {
    id: 'uni-77', name: 'AGH University of Krakow', country: 'Poland', city: 'Krakow',
    websiteUrl: 'https://www.agh.edu.pl', logoUrl: '', rankingQs: 550, rankingThe: 500,
    estimatedMonthlyLivingCostEur: 550,
    description: 'AGH is Poland\'s leading technical university for mining, metallurgy, and engineering.',
    programs: [
      { id: 'p-182', universityId: 'uni-77', name: 'M.Sc. Computer Science', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 2200, minGpaRequired: 2.5, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-07-15', applicationUrl: 'https://www.agh.edu.pl/apply' },
      { id: 'p-183', universityId: 'uni-77', name: 'M.Sc. Engineering', fieldOfStudy: 'Engineering', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 2200, minGpaRequired: 2.5, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-07-15', applicationUrl: 'https://www.agh.edu.pl/apply' },
    ]
  },

  // ============================================
  // CZECH REPUBLIC (5 universities)
  // ============================================
  {
    id: 'uni-78', name: 'Charles University', country: 'Czech Republic', city: 'Prague',
    websiteUrl: 'https://cuni.cz', logoUrl: '', rankingQs: 246, rankingThe: 236,
    estimatedMonthlyLivingCostEur: 650,
    description: 'Charles University is the oldest university in Central Europe (1348). Prague offers very affordable living.',
    programs: [
      { id: 'p-184', universityId: 'uni-78', name: 'M.Sc. Computer Science', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 5000, minGpaRequired: 2.8, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-04-30', applicationUrl: 'https://cuni.cz/apply' },
      { id: 'p-185', universityId: 'uni-78', name: 'M.Sc. Mathematics', fieldOfStudy: 'Mathematics', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 5000, minGpaRequired: 2.8, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-04-30', applicationUrl: 'https://cuni.cz/apply' },
    ]
  },
  {
    id: 'uni-79', name: 'Czech Technical University in Prague', country: 'Czech Republic', city: 'Prague',
    websiteUrl: 'https://www.cvut.cz', logoUrl: '', rankingQs: 403, rankingThe: 390,
    estimatedMonthlyLivingCostEur: 650,
    description: 'CTU Prague is the oldest technical university in Central Europe, founded in 1707.',
    programs: [
      { id: 'p-186', universityId: 'uni-79', name: 'M.Sc. Computer Science', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 4500, minGpaRequired: 2.8, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-04-30', applicationUrl: 'https://www.cvut.cz/apply' },
      { id: 'p-187', universityId: 'uni-79', name: 'M.Sc. Electrical Engineering', fieldOfStudy: 'Engineering', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 4500, minGpaRequired: 2.5, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-04-30', applicationUrl: 'https://www.cvut.cz/apply' },
    ]
  },
  {
    id: 'uni-80', name: 'Masaryk University', country: 'Czech Republic', city: 'Brno',
    websiteUrl: 'https://www.muni.cz', logoUrl: '', rankingQs: 500, rankingThe: 450,
    estimatedMonthlyLivingCostEur: 550,
    description: 'Masaryk University is the second-largest university in Czech Republic, located in the student-friendly city of Brno.',
    programs: [
      { id: 'p-188', universityId: 'uni-80', name: 'M.Sc. Computer Science', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 4000, minGpaRequired: 2.5, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-04-30', applicationUrl: 'https://www.muni.cz/apply' },
      { id: 'p-189', universityId: 'uni-80', name: 'M.Sc. Economics', fieldOfStudy: 'Economics', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 4000, minGpaRequired: 2.5, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-04-30', applicationUrl: 'https://www.muni.cz/apply' },
    ]
  },

  // ============================================
  // HUNGARY (4 universities)
  // ============================================
  {
    id: 'uni-81', name: 'Eötvös Loránd University', country: 'Hungary', city: 'Budapest',
    websiteUrl: 'https://www.elte.hu', logoUrl: '', rankingQs: 560, rankingThe: 500,
    estimatedMonthlyLivingCostEur: 550,
    description: 'ELTE is Hungary\'s most prestigious university, especially strong in computer science and mathematics.',
    programs: [
      { id: 'p-190', universityId: 'uni-81', name: 'M.Sc. Computer Science', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 3200, minGpaRequired: 2.5, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-06-15', applicationUrl: 'https://www.elte.hu/apply' },
      { id: 'p-191', universityId: 'uni-81', name: 'M.Sc. Mathematics', fieldOfStudy: 'Mathematics', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 3200, minGpaRequired: 2.5, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-06-15', applicationUrl: 'https://www.elte.hu/apply' },
    ]
  },
  {
    id: 'uni-82', name: 'Budapest University of Technology', country: 'Hungary', city: 'Budapest',
    websiteUrl: 'https://www.bme.hu', logoUrl: '', rankingQs: 600, rankingThe: 550,
    estimatedMonthlyLivingCostEur: 550,
    description: 'BME is Hungary\'s leading technical university with over 200 years of history in engineering education.',
    programs: [
      { id: 'p-192', universityId: 'uni-82', name: 'M.Sc. Computer Science', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 3000, minGpaRequired: 2.5, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-06-30', applicationUrl: 'https://www.bme.hu/apply' },
      { id: 'p-193', universityId: 'uni-82', name: 'M.Sc. Engineering', fieldOfStudy: 'Engineering', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 3000, minGpaRequired: 2.5, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-06-30', applicationUrl: 'https://www.bme.hu/apply' },
    ]
  },

  // ============================================
  // PORTUGAL (4 universities)
  // ============================================
  {
    id: 'uni-83', name: 'University of Lisbon', country: 'Portugal', city: 'Lisbon',
    websiteUrl: 'https://www.ulisboa.pt', logoUrl: '', rankingQs: 217, rankingThe: 270,
    estimatedMonthlyLivingCostEur: 800,
    description: 'University of Lisbon is Portugal\'s largest and highest-ranked university in a vibrant, affordable capital.',
    programs: [
      { id: 'p-194', universityId: 'uni-83', name: 'M.Sc. Computer Science', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 1500, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-06-30', applicationUrl: 'https://www.ulisboa.pt/apply' },
      { id: 'p-195', universityId: 'uni-83', name: 'M.Sc. Engineering', fieldOfStudy: 'Engineering', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 1500, minGpaRequired: 2.8, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-06-30', applicationUrl: 'https://www.ulisboa.pt/apply' },
    ]
  },
  {
    id: 'uni-84', name: 'University of Porto', country: 'Portugal', city: 'Porto',
    websiteUrl: 'https://www.up.pt', logoUrl: '', rankingQs: 274, rankingThe: 320,
    estimatedMonthlyLivingCostEur: 700,
    description: 'University of Porto is one of Portugal\'s best universities, in a charming city with affordable living.',
    programs: [
      { id: 'p-196', universityId: 'uni-84', name: 'M.Sc. Computer Science', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 1500, minGpaRequired: 2.8, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-06-30', applicationUrl: 'https://www.up.pt/apply' },
      { id: 'p-197', universityId: 'uni-84', name: 'M.Sc. Engineering', fieldOfStudy: 'Engineering', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 1500, minGpaRequired: 2.8, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-06-30', applicationUrl: 'https://www.up.pt/apply' },
    ]
  },

  // ============================================
  // ROMANIA (3 universities)
  // ============================================
  {
    id: 'uni-85', name: 'University of Bucharest', country: 'Romania', city: 'Bucharest',
    websiteUrl: 'https://www.unibuc.ro', logoUrl: '', rankingQs: 600, rankingThe: 550,
    estimatedMonthlyLivingCostEur: 500,
    description: 'University of Bucharest is Romania\'s top university with extremely affordable living costs.',
    programs: [
      { id: 'p-198', universityId: 'uni-85', name: 'M.Sc. Computer Science', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 2500, minGpaRequired: 2.5, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-07-15', applicationUrl: 'https://www.unibuc.ro/apply' },
      { id: 'p-199', universityId: 'uni-85', name: 'M.Sc. Mathematics', fieldOfStudy: 'Mathematics', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 2500, minGpaRequired: 2.5, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-07-15', applicationUrl: 'https://www.unibuc.ro/apply' },
    ]
  },
  {
    id: 'uni-86', name: 'Politehnica University of Bucharest', country: 'Romania', city: 'Bucharest',
    websiteUrl: 'https://www.upb.ro', logoUrl: '', rankingQs: 700, rankingThe: 650,
    estimatedMonthlyLivingCostEur: 500,
    description: 'Politehnica is Romania\'s oldest and most prestigious technical university.',
    programs: [
      { id: 'p-200', universityId: 'uni-86', name: 'M.Sc. Computer Science', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 2000, minGpaRequired: 2.5, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-07-15', applicationUrl: 'https://www.upb.ro/apply' },
      { id: 'p-201', universityId: 'uni-86', name: 'M.Sc. Engineering', fieldOfStudy: 'Engineering', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 2000, minGpaRequired: 2.5, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-07-15', applicationUrl: 'https://www.upb.ro/apply' },
    ]
  },

  // ============================================
  // CROATIA (2 universities)
  // ============================================
  {
    id: 'uni-87', name: 'University of Zagreb', country: 'Croatia', city: 'Zagreb',
    websiteUrl: 'https://www.unizg.hr', logoUrl: '', rankingQs: 650, rankingThe: 600,
    estimatedMonthlyLivingCostEur: 550,
    description: 'University of Zagreb is the largest and oldest university in Southeast Europe (1669).',
    programs: [
      { id: 'p-202', universityId: 'uni-87', name: 'M.Sc. Computer Science', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 2500, minGpaRequired: 2.5, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-07-15', applicationUrl: 'https://www.unizg.hr/apply' },
      { id: 'p-203', universityId: 'uni-87', name: 'M.Sc. Engineering', fieldOfStudy: 'Engineering', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 2500, minGpaRequired: 2.5, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-07-15', applicationUrl: 'https://www.unizg.hr/apply' },
    ]
  },

  // ============================================
  // GREECE (3 universities)
  // ============================================
  {
    id: 'uni-88', name: 'National Technical University of Athens', country: 'Greece', city: 'Athens',
    websiteUrl: 'https://www.ntua.gr', logoUrl: '', rankingQs: 395, rankingThe: 400,
    estimatedMonthlyLivingCostEur: 650,
    description: 'NTUA is the oldest and most prestigious technical university in Greece, strong in engineering.',
    programs: [
      { id: 'p-204', universityId: 'uni-88', name: 'M.Sc. Computer Science', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 0, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-06-30', applicationUrl: 'https://www.ntua.gr/apply' },
      { id: 'p-205', universityId: 'uni-88', name: 'M.Sc. Engineering', fieldOfStudy: 'Engineering', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 0, minGpaRequired: 2.8, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-06-30', applicationUrl: 'https://www.ntua.gr/apply' },
    ]
  },
  {
    id: 'uni-89', name: 'University of Athens', country: 'Greece', city: 'Athens',
    websiteUrl: 'https://www.uoa.gr', logoUrl: '', rankingQs: 440, rankingThe: 420,
    estimatedMonthlyLivingCostEur: 650,
    description: 'National and Kapodistrian University of Athens is the oldest university in Greece (1837).',
    programs: [
      { id: 'p-206', universityId: 'uni-89', name: 'M.Sc. Computer Science', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 0, minGpaRequired: 2.8, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-06-30', applicationUrl: 'https://www.uoa.gr/apply' },
      { id: 'p-207', universityId: 'uni-89', name: 'M.Sc. Economics', fieldOfStudy: 'Economics', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 0, minGpaRequired: 2.8, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-06-30', applicationUrl: 'https://www.uoa.gr/apply' },
    ]
  },

  // ============================================
  // GERMANY (additional universities)
  // ============================================
  {
    id: 'uni-90', name: 'University of Munich Applied Sciences', country: 'Germany', city: 'Munich',
    websiteUrl: 'https://www.hm.edu', logoUrl: '', rankingQs: 500, rankingThe: 480,
    estimatedMonthlyLivingCostEur: 950,
    description: 'HM Munich is Bavaria\'s largest university of applied sciences with strong industry partnerships.',
    programs: [
      { id: 'p-208', universityId: 'uni-90', name: 'M.Sc. Applied Computer Science', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 0, minGpaRequired: 2.8, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-07-15', applicationUrl: 'https://www.hm.edu/apply' },
      { id: 'p-209', universityId: 'uni-90', name: 'B.Sc. Business Administration', fieldOfStudy: 'Business Administration', degreeLevel: 'bachelors', languageOfInstruction: 'German', durationMonths: 42, tuitionPerYearEur: 0, minGpaRequired: 2.5, requiredLanguage: 'German', requiredLanguageLevel: 'C1', applicationDeadline: '2026-07-15', applicationUrl: 'https://www.hm.edu/apply' },
    ]
  },
  {
    id: 'uni-91', name: 'University of Konstanz', country: 'Germany', city: 'Konstanz',
    websiteUrl: 'https://www.uni-konstanz.de', logoUrl: '', rankingQs: 450, rankingThe: 350,
    estimatedMonthlyLivingCostEur: 800,
    description: 'University of Konstanz is a reform university and University of Excellence known for social sciences and life sciences.',
    programs: [
      { id: 'p-210', universityId: 'uni-91', name: 'M.Sc. Computer and Information Science', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 0, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-07-15', applicationUrl: 'https://www.uni-konstanz.de/apply' },
      { id: 'p-211', universityId: 'uni-91', name: 'M.A. Politics and Public Administration', fieldOfStudy: 'Social Sciences', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 0, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-07-15', applicationUrl: 'https://www.uni-konstanz.de/apply' },
    ]
  },
  {
    id: 'uni-92', name: 'TU Braunschweig', country: 'Germany', city: 'Braunschweig',
    websiteUrl: 'https://www.tu-braunschweig.de', logoUrl: '', rankingQs: 400, rankingThe: 380,
    estimatedMonthlyLivingCostEur: 750,
    description: 'TU Braunschweig is the oldest technical university in Germany, strong in automotive and aerospace engineering.',
    programs: [
      { id: 'p-212', universityId: 'uni-92', name: 'M.Sc. Computer Science', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 0, minGpaRequired: 2.8, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-07-15', applicationUrl: 'https://www.tu-braunschweig.de/apply' },
      { id: 'p-213', universityId: 'uni-92', name: 'M.Sc. Mechanical Engineering', fieldOfStudy: 'Engineering', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 0, minGpaRequired: 2.8, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-07-15', applicationUrl: 'https://www.tu-braunschweig.de/apply' },
    ]
  },
  {
    id: 'uni-93', name: 'University of Duisburg-Essen', country: 'Germany', city: 'Essen',
    websiteUrl: 'https://www.uni-due.de', logoUrl: '', rankingQs: 450, rankingThe: 400,
    estimatedMonthlyLivingCostEur: 780,
    description: 'University of Duisburg-Essen is one of Germany\'s youngest universities with strengths in nanoscience and urban systems.',
    programs: [
      { id: 'p-214', universityId: 'uni-93', name: 'M.Sc. Computer Engineering', fieldOfStudy: 'Engineering', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 0, minGpaRequired: 2.8, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-07-15', applicationUrl: 'https://www.uni-due.de/apply' },
      { id: 'p-215', universityId: 'uni-93', name: 'M.Sc. Economics', fieldOfStudy: 'Economics', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 0, minGpaRequired: 2.8, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-07-15', applicationUrl: 'https://www.uni-due.de/apply' },
    ]
  },
  {
    id: 'uni-94', name: 'University of Bremen', country: 'Germany', city: 'Bremen',
    websiteUrl: 'https://www.uni-bremen.de', logoUrl: '', rankingQs: 470, rankingThe: 420,
    estimatedMonthlyLivingCostEur: 750,
    description: 'University of Bremen is a University of Excellence known for marine and environmental sciences, AI, and logistics.',
    programs: [
      { id: 'p-216', universityId: 'uni-94', name: 'M.Sc. Computer Science', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 0, minGpaRequired: 2.8, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-07-15', applicationUrl: 'https://www.uni-bremen.de/apply' },
      { id: 'p-217', universityId: 'uni-94', name: 'M.Sc. Industrial Mathematics', fieldOfStudy: 'Mathematics', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 0, minGpaRequired: 2.8, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-07-15', applicationUrl: 'https://www.uni-bremen.de/apply' },
    ]
  },

  // ============================================
  // NETHERLANDS (additional universities)
  // ============================================
  {
    id: 'uni-95', name: 'Tilburg University', country: 'Netherlands', city: 'Tilburg',
    websiteUrl: 'https://www.tilburguniversity.edu', logoUrl: '', rankingQs: 350, rankingThe: 320,
    estimatedMonthlyLivingCostEur: 900,
    description: 'Tilburg University is top-ranked in the Netherlands for economics, law, and social sciences.',
    programs: [
      { id: 'p-218', universityId: 'uni-95', name: 'M.Sc. Data Science and Society', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 12, tuitionPerYearEur: 15000, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-05-01', applicationUrl: 'https://www.tilburguniversity.edu/apply' },
      { id: 'p-219', universityId: 'uni-95', name: 'M.Sc. Economics', fieldOfStudy: 'Economics', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 12, tuitionPerYearEur: 15000, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-05-01', applicationUrl: 'https://www.tilburguniversity.edu/apply' },
      { id: 'p-220', universityId: 'uni-95', name: 'M.Sc. Business Administration', fieldOfStudy: 'Business Administration', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 12, tuitionPerYearEur: 15000, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-05-01', applicationUrl: 'https://www.tilburguniversity.edu/apply' },
    ]
  },
  {
    id: 'uni-96', name: 'Radboud University', country: 'Netherlands', city: 'Nijmegen',
    websiteUrl: 'https://www.ru.nl', logoUrl: '', rankingQs: 230, rankingThe: 200,
    estimatedMonthlyLivingCostEur: 850,
    description: 'Radboud University is a comprehensive research university known for AI, neuroscience, and molecular sciences.',
    programs: [
      { id: 'p-221', universityId: 'uni-96', name: 'M.Sc. Artificial Intelligence', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 16000, minGpaRequired: 3.2, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-04-01', applicationUrl: 'https://www.ru.nl/apply' },
      { id: 'p-222', universityId: 'uni-96', name: 'M.Sc. Computing Science', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 16000, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-04-01', applicationUrl: 'https://www.ru.nl/apply' },
      { id: 'p-223', universityId: 'uni-96', name: 'M.Sc. Biology', fieldOfStudy: 'Biology', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 16000, minGpaRequired: 2.8, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-04-01', applicationUrl: 'https://www.ru.nl/apply' },
    ]
  },
  {
    id: 'uni-97', name: 'Maastricht University', country: 'Netherlands', city: 'Maastricht',
    websiteUrl: 'https://www.maastrichtuniversity.nl', logoUrl: '', rankingQs: 264, rankingThe: 220,
    estimatedMonthlyLivingCostEur: 850,
    description: 'Maastricht University is known for its innovative problem-based learning approach and strong international orientation.',
    programs: [
      { id: 'p-224', universityId: 'uni-97', name: 'M.Sc. Data Science for Decision Making', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 12, tuitionPerYearEur: 15000, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-06-01', applicationUrl: 'https://www.maastrichtuniversity.nl/apply' },
      { id: 'p-225', universityId: 'uni-97', name: 'M.Sc. International Business', fieldOfStudy: 'Business Administration', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 12, tuitionPerYearEur: 15000, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-06-01', applicationUrl: 'https://www.maastrichtuniversity.nl/apply' },
      { id: 'p-226', universityId: 'uni-97', name: 'M.Sc. Psychology', fieldOfStudy: 'Psychology', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 12, tuitionPerYearEur: 15000, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-06-01', applicationUrl: 'https://www.maastrichtuniversity.nl/apply' },
    ]
  },

  // ============================================
  // FRANCE (additional universities)
  // ============================================
  {
    id: 'uni-98', name: 'Sciences Po', country: 'France', city: 'Paris',
    websiteUrl: 'https://www.sciencespo.fr', logoUrl: '', rankingQs: 240, rankingThe: 260,
    estimatedMonthlyLivingCostEur: 1200,
    description: 'Sciences Po is France\'s leading university for political science, international affairs, and social sciences.',
    programs: [
      { id: 'p-227', universityId: 'uni-98', name: 'M.A. International Affairs', fieldOfStudy: 'Social Sciences', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 14500, minGpaRequired: 3.3, requiredLanguage: 'English', requiredLanguageLevel: 'C1', applicationDeadline: '2026-01-15', applicationUrl: 'https://www.sciencespo.fr/apply' },
      { id: 'p-228', universityId: 'uni-98', name: 'M.A. Economics and Public Policy', fieldOfStudy: 'Economics', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 14500, minGpaRequired: 3.3, requiredLanguage: 'English', requiredLanguageLevel: 'C1', applicationDeadline: '2026-01-15', applicationUrl: 'https://www.sciencespo.fr/apply' },
    ]
  },
  {
    id: 'uni-99', name: 'Ecole Polytechnique', country: 'France', city: 'Paris',
    websiteUrl: 'https://www.polytechnique.edu', logoUrl: '', rankingQs: 46, rankingThe: 72,
    estimatedMonthlyLivingCostEur: 1200,
    description: 'Ecole Polytechnique is France\'s most prestigious engineering grande école with world-class research.',
    programs: [
      { id: 'p-229', universityId: 'uni-99', name: 'M.Sc. Data Science', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 15900, minGpaRequired: 3.5, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-04-01', applicationUrl: 'https://www.polytechnique.edu/apply' },
      { id: 'p-230', universityId: 'uni-99', name: 'M.Sc. Mathematics', fieldOfStudy: 'Mathematics', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 15900, minGpaRequired: 3.5, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-04-01', applicationUrl: 'https://www.polytechnique.edu/apply' },
      { id: 'p-231', universityId: 'uni-99', name: 'M.Sc. Physics', fieldOfStudy: 'Physics', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 15900, minGpaRequired: 3.5, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-04-01', applicationUrl: 'https://www.polytechnique.edu/apply' },
    ]
  },
  {
    id: 'uni-100', name: 'University of Lyon', country: 'France', city: 'Lyon',
    websiteUrl: 'https://www.universite-lyon.fr', logoUrl: '', rankingQs: 350, rankingThe: 300,
    estimatedMonthlyLivingCostEur: 900,
    description: 'Université de Lyon is a major French research and higher education cluster in France\'s second-largest city.',
    programs: [
      { id: 'p-232', universityId: 'uni-100', name: 'M.Sc. Computer Science', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 3770, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-04-15', applicationUrl: 'https://www.universite-lyon.fr/apply' },
      { id: 'p-233', universityId: 'uni-100', name: 'M.Sc. Applied Mathematics', fieldOfStudy: 'Mathematics', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 3770, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-04-15', applicationUrl: 'https://www.universite-lyon.fr/apply' },
    ]
  },
  {
    id: 'uni-101', name: 'Aix-Marseille University', country: 'France', city: 'Marseille',
    websiteUrl: 'https://www.univ-amu.fr', logoUrl: '', rankingQs: 380, rankingThe: 350,
    estimatedMonthlyLivingCostEur: 850,
    description: 'Aix-Marseille University is France\'s largest university by student enrollment with excellent research output.',
    programs: [
      { id: 'p-234', universityId: 'uni-101', name: 'M.Sc. Computer Science', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 3770, minGpaRequired: 2.8, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-05-01', applicationUrl: 'https://www.univ-amu.fr/apply' },
      { id: 'p-235', universityId: 'uni-101', name: 'M.Sc. Physics', fieldOfStudy: 'Physics', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 3770, minGpaRequired: 2.8, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-05-01', applicationUrl: 'https://www.univ-amu.fr/apply' },
    ]
  },
  {
    id: 'uni-102', name: 'University of Bordeaux', country: 'France', city: 'Bordeaux',
    websiteUrl: 'https://www.u-bordeaux.fr', logoUrl: '', rankingQs: 400, rankingThe: 370,
    estimatedMonthlyLivingCostEur: 850,
    description: 'University of Bordeaux is a leading French university known for neuroscience, laser physics, and viticulture.',
    programs: [
      { id: 'p-236', universityId: 'uni-102', name: 'M.Sc. Computer Science', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 3770, minGpaRequired: 2.8, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-05-01', applicationUrl: 'https://www.u-bordeaux.fr/apply' },
      { id: 'p-237', universityId: 'uni-102', name: 'M.Sc. Biology', fieldOfStudy: 'Biology', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 3770, minGpaRequired: 2.8, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-05-01', applicationUrl: 'https://www.u-bordeaux.fr/apply' },
    ]
  },
  {
    id: 'uni-103', name: 'University of Toulouse', country: 'France', city: 'Toulouse',
    websiteUrl: 'https://www.univ-toulouse.fr', logoUrl: '', rankingQs: 420, rankingThe: 380,
    estimatedMonthlyLivingCostEur: 800,
    description: 'University of Toulouse is a key hub for aerospace engineering and space research in Europe.',
    programs: [
      { id: 'p-238', universityId: 'uni-103', name: 'M.Sc. Aerospace Engineering', fieldOfStudy: 'Engineering', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 3770, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-05-01', applicationUrl: 'https://www.univ-toulouse.fr/apply' },
      { id: 'p-239', universityId: 'uni-103', name: 'M.Sc. Computer Science', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 3770, minGpaRequired: 2.8, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-05-01', applicationUrl: 'https://www.univ-toulouse.fr/apply' },
    ]
  },

  // ============================================
  // ITALY (additional universities)
  // ============================================
  {
    id: 'uni-104', name: 'University of Florence', country: 'Italy', city: 'Florence',
    websiteUrl: 'https://www.unifi.it', logoUrl: '', rankingQs: 420, rankingThe: 380,
    estimatedMonthlyLivingCostEur: 850,
    description: 'University of Florence is a large Italian research university with strengths in arts, humanities, and sciences.',
    programs: [
      { id: 'p-240', universityId: 'uni-104', name: 'M.Sc. Computer Science', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 3500, minGpaRequired: 2.8, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-07-15', applicationUrl: 'https://www.unifi.it/apply' },
      { id: 'p-241', universityId: 'uni-104', name: 'M.A. Architecture', fieldOfStudy: 'Architecture', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 3500, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-07-15', applicationUrl: 'https://www.unifi.it/apply' },
    ]
  },
  {
    id: 'uni-105', name: 'University of Naples Federico II', country: 'Italy', city: 'Naples',
    websiteUrl: 'https://www.unina.it', logoUrl: '', rankingQs: 380, rankingThe: 350,
    estimatedMonthlyLivingCostEur: 700,
    description: 'Founded in 1224, Naples Federico II is one of the world\'s oldest public universities with strong engineering programs.',
    programs: [
      { id: 'p-242', universityId: 'uni-105', name: 'M.Sc. Computer Science', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 2500, minGpaRequired: 2.8, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-07-15', applicationUrl: 'https://www.unina.it/apply' },
      { id: 'p-243', universityId: 'uni-105', name: 'M.Sc. Engineering', fieldOfStudy: 'Engineering', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 2500, minGpaRequired: 2.8, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-07-15', applicationUrl: 'https://www.unina.it/apply' },
    ]
  },
  {
    id: 'uni-106', name: 'University of Turin', country: 'Italy', city: 'Turin',
    websiteUrl: 'https://www.unito.it', logoUrl: '', rankingQs: 450, rankingThe: 400,
    estimatedMonthlyLivingCostEur: 800,
    description: 'University of Turin is one of Italy\'s oldest and most prestigious universities, known for social sciences and medicine.',
    programs: [
      { id: 'p-244', universityId: 'uni-106', name: 'M.Sc. Computer Science', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 3000, minGpaRequired: 2.8, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-07-15', applicationUrl: 'https://www.unito.it/apply' },
      { id: 'p-245', universityId: 'uni-106', name: 'M.Sc. Economics', fieldOfStudy: 'Economics', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 3000, minGpaRequired: 2.8, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-07-15', applicationUrl: 'https://www.unito.it/apply' },
    ]
  },
  {
    id: 'uni-107', name: 'University of Trento', country: 'Italy', city: 'Trento',
    websiteUrl: 'https://www.unitn.it', logoUrl: '', rankingQs: 350, rankingThe: 300,
    estimatedMonthlyLivingCostEur: 750,
    description: 'University of Trento is a young but highly ranked Italian university, particularly strong in computer science and cognitive science.',
    programs: [
      { id: 'p-246', universityId: 'uni-107', name: 'M.Sc. Computer Science', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 3000, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-04-15', applicationUrl: 'https://www.unitn.it/apply' },
      { id: 'p-247', universityId: 'uni-107', name: 'M.Sc. Data Science', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 3000, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-04-15', applicationUrl: 'https://www.unitn.it/apply' },
      { id: 'p-248', universityId: 'uni-107', name: 'M.Sc. Physics', fieldOfStudy: 'Physics', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 3000, minGpaRequired: 2.8, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-04-15', applicationUrl: 'https://www.unitn.it/apply' },
    ]
  },
  {
    id: 'uni-108', name: 'University of Pisa', country: 'Italy', city: 'Pisa',
    websiteUrl: 'https://www.unipi.it', logoUrl: '', rankingQs: 380, rankingThe: 360,
    estimatedMonthlyLivingCostEur: 750,
    description: 'University of Pisa is one of Italy\'s most prestigious universities, famous for physics and engineering.',
    programs: [
      { id: 'p-249', universityId: 'uni-108', name: 'M.Sc. Computer Science', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 3000, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-07-15', applicationUrl: 'https://www.unipi.it/apply' },
      { id: 'p-250', universityId: 'uni-108', name: 'M.Sc. Mathematics', fieldOfStudy: 'Mathematics', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 3000, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-07-15', applicationUrl: 'https://www.unipi.it/apply' },
    ]
  },

  // ============================================
  // SPAIN (additional universities)
  // ============================================
  {
    id: 'uni-109', name: 'Pompeu Fabra University', country: 'Spain', city: 'Barcelona',
    websiteUrl: 'https://www.upf.edu', logoUrl: '', rankingQs: 280, rankingThe: 250,
    estimatedMonthlyLivingCostEur: 950,
    description: 'Pompeu Fabra University is a young but highly prestigious research university in Barcelona.',
    programs: [
      { id: 'p-251', universityId: 'uni-109', name: 'M.Sc. Data Science', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 18, tuitionPerYearEur: 8000, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-06-15', applicationUrl: 'https://www.upf.edu/apply' },
      { id: 'p-252', universityId: 'uni-109', name: 'M.Sc. Economics', fieldOfStudy: 'Economics', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 18, tuitionPerYearEur: 8000, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-06-15', applicationUrl: 'https://www.upf.edu/apply' },
    ]
  },
  {
    id: 'uni-110', name: 'University of Valencia', country: 'Spain', city: 'Valencia',
    websiteUrl: 'https://www.uv.es', logoUrl: '', rankingQs: 380, rankingThe: 350,
    estimatedMonthlyLivingCostEur: 750,
    description: 'University of Valencia is one of Spain\'s oldest and largest universities with comprehensive study programs.',
    programs: [
      { id: 'p-253', universityId: 'uni-110', name: 'M.Sc. Computer Science', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 18, tuitionPerYearEur: 4000, minGpaRequired: 2.8, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-06-30', applicationUrl: 'https://www.uv.es/apply' },
      { id: 'p-254', universityId: 'uni-110', name: 'M.Sc. Physics', fieldOfStudy: 'Physics', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 18, tuitionPerYearEur: 4000, minGpaRequired: 2.8, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-06-30', applicationUrl: 'https://www.uv.es/apply' },
    ]
  },
  {
    id: 'uni-111', name: 'University of Granada', country: 'Spain', city: 'Granada',
    websiteUrl: 'https://www.ugr.es', logoUrl: '', rankingQs: 400, rankingThe: 370,
    estimatedMonthlyLivingCostEur: 650,
    description: 'University of Granada is one of the most popular destinations for Erasmus students, known for affordable living.',
    programs: [
      { id: 'p-255', universityId: 'uni-111', name: 'M.Sc. Computer Science', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 18, tuitionPerYearEur: 3500, minGpaRequired: 2.5, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-06-30', applicationUrl: 'https://www.ugr.es/apply' },
      { id: 'p-256', universityId: 'uni-111', name: 'M.Sc. Mathematics', fieldOfStudy: 'Mathematics', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 18, tuitionPerYearEur: 3500, minGpaRequired: 2.5, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-06-30', applicationUrl: 'https://www.ugr.es/apply' },
    ]
  },
  {
    id: 'uni-112', name: 'University of Seville', country: 'Spain', city: 'Seville',
    websiteUrl: 'https://www.us.es', logoUrl: '', rankingQs: 450, rankingThe: 420,
    estimatedMonthlyLivingCostEur: 650,
    description: 'University of Seville is one of Spain\'s largest universities with a vibrant student life and affordable costs.',
    programs: [
      { id: 'p-257', universityId: 'uni-112', name: 'M.Sc. Computer Engineering', fieldOfStudy: 'Engineering', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 18, tuitionPerYearEur: 3500, minGpaRequired: 2.5, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-06-30', applicationUrl: 'https://www.us.es/apply' },
      { id: 'p-258', universityId: 'uni-112', name: 'M.Sc. Economics', fieldOfStudy: 'Economics', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 18, tuitionPerYearEur: 3500, minGpaRequired: 2.5, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-06-30', applicationUrl: 'https://www.us.es/apply' },
    ]
  },
  {
    id: 'uni-113', name: 'University Carlos III of Madrid', country: 'Spain', city: 'Madrid',
    websiteUrl: 'https://www.uc3m.es', logoUrl: '', rankingQs: 310, rankingThe: 290,
    estimatedMonthlyLivingCostEur: 900,
    description: 'UC3M is a modern Spanish university highly ranked for economics, engineering, and social sciences.',
    programs: [
      { id: 'p-259', universityId: 'uni-113', name: 'M.Sc. Computer Science and Technology', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 18, tuitionPerYearEur: 6000, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-05-15', applicationUrl: 'https://www.uc3m.es/apply' },
      { id: 'p-260', universityId: 'uni-113', name: 'M.Sc. Business Administration', fieldOfStudy: 'Business Administration', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 18, tuitionPerYearEur: 6000, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-05-15', applicationUrl: 'https://www.uc3m.es/apply' },
    ]
  },

  // ============================================
  // SWEDEN (additional universities)
  // ============================================
  {
    id: 'uni-114', name: 'Linköping University', country: 'Sweden', city: 'Linköping',
    websiteUrl: 'https://liu.se', logoUrl: '', rankingQs: 340, rankingThe: 310,
    estimatedMonthlyLivingCostEur: 850,
    description: 'Linköping University is known for its innovative approach, strong in engineering, technology, and health sciences.',
    programs: [
      { id: 'p-261', universityId: 'uni-114', name: 'M.Sc. Computer Science', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 14000, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-01-15', applicationUrl: 'https://liu.se/apply' },
      { id: 'p-262', universityId: 'uni-114', name: 'M.Sc. Mechanical Engineering', fieldOfStudy: 'Engineering', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 14000, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-01-15', applicationUrl: 'https://liu.se/apply' },
    ]
  },
  {
    id: 'uni-115', name: 'Umeå University', country: 'Sweden', city: 'Umeå',
    websiteUrl: 'https://www.umu.se', logoUrl: '', rankingQs: 400, rankingThe: 370,
    estimatedMonthlyLivingCostEur: 800,
    description: 'Umeå University is a comprehensive research university in northern Sweden with a strong international profile.',
    programs: [
      { id: 'p-263', universityId: 'uni-115', name: 'M.Sc. Computing Science', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 12000, minGpaRequired: 2.8, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-01-15', applicationUrl: 'https://www.umu.se/apply' },
      { id: 'p-264', universityId: 'uni-115', name: 'M.Sc. Physics', fieldOfStudy: 'Physics', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 12000, minGpaRequired: 2.8, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-01-15', applicationUrl: 'https://www.umu.se/apply' },
    ]
  },

  // ============================================
  // DENMARK (additional universities)
  // ============================================
  {
    id: 'uni-116', name: 'Aalborg University', country: 'Denmark', city: 'Aalborg',
    websiteUrl: 'https://www.aau.dk', logoUrl: '', rankingQs: 330, rankingThe: 300,
    estimatedMonthlyLivingCostEur: 900,
    description: 'Aalborg University is known for its problem-based learning model and strong engineering programs.',
    programs: [
      { id: 'p-265', universityId: 'uni-116', name: 'M.Sc. Computer Science', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 13500, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-03-01', applicationUrl: 'https://www.aau.dk/apply' },
      { id: 'p-266', universityId: 'uni-116', name: 'M.Sc. Engineering', fieldOfStudy: 'Engineering', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 13500, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-03-01', applicationUrl: 'https://www.aau.dk/apply' },
    ]
  },
  {
    id: 'uni-117', name: 'University of Southern Denmark', country: 'Denmark', city: 'Odense',
    websiteUrl: 'https://www.sdu.dk', logoUrl: '', rankingQs: 370, rankingThe: 340,
    estimatedMonthlyLivingCostEur: 850,
    description: 'SDU offers innovative education with a focus on interdisciplinary research and robot technology.',
    programs: [
      { id: 'p-267', universityId: 'uni-117', name: 'M.Sc. Computer Science', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 12000, minGpaRequired: 2.8, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-03-01', applicationUrl: 'https://www.sdu.dk/apply' },
      { id: 'p-268', universityId: 'uni-117', name: 'M.Sc. Economics', fieldOfStudy: 'Economics', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 12000, minGpaRequired: 2.8, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-03-01', applicationUrl: 'https://www.sdu.dk/apply' },
    ]
  },

  // ============================================
  // NORWAY (additional universities)
  // ============================================
  {
    id: 'uni-118', name: 'University of Bergen', country: 'Norway', city: 'Bergen',
    websiteUrl: 'https://www.uib.no', logoUrl: '', rankingQs: 350, rankingThe: 320,
    estimatedMonthlyLivingCostEur: 1200,
    description: 'University of Bergen is Norway\'s second largest university, strong in marine research and climate science.',
    programs: [
      { id: 'p-269', universityId: 'uni-118', name: 'M.Sc. Computer Science', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 0, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-04-15', applicationUrl: 'https://www.uib.no/apply' },
      { id: 'p-270', universityId: 'uni-118', name: 'M.Sc. Biology', fieldOfStudy: 'Biology', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 0, minGpaRequired: 2.8, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-04-15', applicationUrl: 'https://www.uib.no/apply' },
    ]
  },
  {
    id: 'uni-119', name: 'UiT The Arctic University of Norway', country: 'Norway', city: 'Tromsø',
    websiteUrl: 'https://en.uit.no', logoUrl: '', rankingQs: 450, rankingThe: 400,
    estimatedMonthlyLivingCostEur: 1100,
    description: 'UiT is the world\'s northernmost university, specializing in arctic and climate research.',
    programs: [
      { id: 'p-271', universityId: 'uni-119', name: 'M.Sc. Computer Science', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 0, minGpaRequired: 2.8, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-04-15', applicationUrl: 'https://en.uit.no/apply' },
      { id: 'p-272', universityId: 'uni-119', name: 'M.Sc. Physics', fieldOfStudy: 'Physics', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 0, minGpaRequired: 2.8, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-04-15', applicationUrl: 'https://en.uit.no/apply' },
    ]
  },

  // ============================================
  // FINLAND (additional universities)
  // ============================================
  {
    id: 'uni-120', name: 'University of Oulu', country: 'Finland', city: 'Oulu',
    websiteUrl: 'https://www.oulu.fi', logoUrl: '', rankingQs: 400, rankingThe: 370,
    estimatedMonthlyLivingCostEur: 750,
    description: 'University of Oulu is a multidisciplinary research university known for wireless communications and health technology.',
    programs: [
      { id: 'p-273', universityId: 'uni-120', name: 'M.Sc. Computer Science', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 12000, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-01-15', applicationUrl: 'https://www.oulu.fi/apply' },
      { id: 'p-274', universityId: 'uni-120', name: 'M.Sc. Engineering', fieldOfStudy: 'Engineering', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 12000, minGpaRequired: 2.8, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-01-15', applicationUrl: 'https://www.oulu.fi/apply' },
    ]
  },
  {
    id: 'uni-121', name: 'LUT University', country: 'Finland', city: 'Lappeenranta',
    websiteUrl: 'https://www.lut.fi', logoUrl: '', rankingQs: 450, rankingThe: 420,
    estimatedMonthlyLivingCostEur: 700,
    description: 'LUT is a pioneering science university combining technology, business, and sustainability research.',
    programs: [
      { id: 'p-275', universityId: 'uni-121', name: 'M.Sc. Software Engineering', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 11500, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-01-31', applicationUrl: 'https://www.lut.fi/apply' },
      { id: 'p-276', universityId: 'uni-121', name: 'M.Sc. Business Administration', fieldOfStudy: 'Business Administration', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 11500, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-01-31', applicationUrl: 'https://www.lut.fi/apply' },
    ]
  },

  // ============================================
  // AUSTRIA (additional universities)
  // ============================================
  {
    id: 'uni-122', name: 'TU Graz', country: 'Austria', city: 'Graz',
    websiteUrl: 'https://www.tugraz.at', logoUrl: '', rankingQs: 350, rankingThe: 320,
    estimatedMonthlyLivingCostEur: 750,
    description: 'TU Graz is one of Austria\'s largest technical universities, strong in IT, mechanical engineering, and electrical engineering.',
    programs: [
      { id: 'p-277', universityId: 'uni-122', name: 'M.Sc. Computer Science', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 1500, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-07-15', applicationUrl: 'https://www.tugraz.at/apply' },
      { id: 'p-278', universityId: 'uni-122', name: 'M.Sc. Electrical Engineering', fieldOfStudy: 'Engineering', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 1500, minGpaRequired: 2.8, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-07-15', applicationUrl: 'https://www.tugraz.at/apply' },
    ]
  },
  {
    id: 'uni-123', name: 'Johannes Kepler University Linz', country: 'Austria', city: 'Linz',
    websiteUrl: 'https://www.jku.at', logoUrl: '', rankingQs: 450, rankingThe: 400,
    estimatedMonthlyLivingCostEur: 700,
    description: 'JKU Linz is known for its Institute for Machine Learning and strong ties to tech industry.',
    programs: [
      { id: 'p-279', universityId: 'uni-123', name: 'M.Sc. Artificial Intelligence', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 1500, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-07-15', applicationUrl: 'https://www.jku.at/apply' },
      { id: 'p-280', universityId: 'uni-123', name: 'M.Sc. Computer Science', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 1500, minGpaRequired: 2.8, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-07-15', applicationUrl: 'https://www.jku.at/apply' },
    ]
  },

  // ============================================
  // SWITZERLAND (additional universities)
  // ============================================
  {
    id: 'uni-124', name: 'University of Geneva', country: 'Switzerland', city: 'Geneva',
    websiteUrl: 'https://www.unige.ch', logoUrl: '', rankingQs: 125, rankingThe: 130,
    estimatedMonthlyLivingCostEur: 1500,
    description: 'University of Geneva is a leading Swiss university near CERN, strong in physics and international affairs.',
    programs: [
      { id: 'p-281', universityId: 'uni-124', name: 'M.Sc. Computer Science', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 1000, minGpaRequired: 3.2, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-02-28', applicationUrl: 'https://www.unige.ch/apply' },
      { id: 'p-282', universityId: 'uni-124', name: 'M.Sc. Physics', fieldOfStudy: 'Physics', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 1000, minGpaRequired: 3.2, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-02-28', applicationUrl: 'https://www.unige.ch/apply' },
      { id: 'p-283', universityId: 'uni-124', name: 'M.A. International Affairs', fieldOfStudy: 'Social Sciences', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 1000, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-02-28', applicationUrl: 'https://www.unige.ch/apply' },
    ]
  },
  {
    id: 'uni-125', name: 'University of Lausanne', country: 'Switzerland', city: 'Lausanne',
    websiteUrl: 'https://www.unil.ch', logoUrl: '', rankingQs: 200, rankingThe: 190,
    estimatedMonthlyLivingCostEur: 1400,
    description: 'University of Lausanne is located on the shores of Lake Geneva, known for business, economics, and life sciences.',
    programs: [
      { id: 'p-284', universityId: 'uni-125', name: 'M.Sc. Economics', fieldOfStudy: 'Economics', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 1160, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-02-28', applicationUrl: 'https://www.unil.ch/apply' },
      { id: 'p-285', universityId: 'uni-125', name: 'M.Sc. Biology', fieldOfStudy: 'Biology', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 1160, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-02-28', applicationUrl: 'https://www.unil.ch/apply' },
    ]
  },

  // ============================================
  // BELGIUM (additional universities)
  // ============================================
  {
    id: 'uni-126', name: 'University of Antwerp', country: 'Belgium', city: 'Antwerp',
    websiteUrl: 'https://www.uantwerpen.be', logoUrl: '', rankingQs: 280, rankingThe: 260,
    estimatedMonthlyLivingCostEur: 900,
    description: 'University of Antwerp is a dynamic research university known for drug development, nanotechnology, and digital humanities.',
    programs: [
      { id: 'p-286', universityId: 'uni-126', name: 'M.Sc. Computer Science', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 6000, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-05-01', applicationUrl: 'https://www.uantwerpen.be/apply' },
      { id: 'p-287', universityId: 'uni-126', name: 'M.Sc. Biology', fieldOfStudy: 'Biology', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 6000, minGpaRequired: 2.8, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-05-01', applicationUrl: 'https://www.uantwerpen.be/apply' },
    ]
  },
  {
    id: 'uni-127', name: 'Vrije Universiteit Brussel', country: 'Belgium', city: 'Brussels',
    websiteUrl: 'https://www.vub.be', logoUrl: '', rankingQs: 300, rankingThe: 280,
    estimatedMonthlyLivingCostEur: 950,
    description: 'VUB is a Dutch-speaking free university in Brussels with strong AI and engineering research groups.',
    programs: [
      { id: 'p-288', universityId: 'uni-127', name: 'M.Sc. Computer Science', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 6000, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-05-01', applicationUrl: 'https://www.vub.be/apply' },
      { id: 'p-289', universityId: 'uni-127', name: 'M.Sc. Engineering', fieldOfStudy: 'Engineering', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 6000, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-05-01', applicationUrl: 'https://www.vub.be/apply' },
    ]
  },

  // ============================================
  // IRELAND (additional universities)
  // ============================================
  {
    id: 'uni-128', name: 'University of Galway', country: 'Ireland', city: 'Galway',
    websiteUrl: 'https://www.universityofgalway.ie', logoUrl: '', rankingQs: 270, rankingThe: 260,
    estimatedMonthlyLivingCostEur: 900,
    description: 'University of Galway is a research university on Ireland\'s west coast, strong in biomedical engineering and data science.',
    programs: [
      { id: 'p-290', universityId: 'uni-128', name: 'M.Sc. Computer Science', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 12, tuitionPerYearEur: 18000, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-06-30', applicationUrl: 'https://www.universityofgalway.ie/apply' },
      { id: 'p-291', universityId: 'uni-128', name: 'M.Sc. Data Analytics', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 12, tuitionPerYearEur: 18000, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-06-30', applicationUrl: 'https://www.universityofgalway.ie/apply' },
    ]
  },
  {
    id: 'uni-129', name: 'Dublin City University', country: 'Ireland', city: 'Dublin',
    websiteUrl: 'https://www.dcu.ie', logoUrl: '', rankingQs: 420, rankingThe: 400,
    estimatedMonthlyLivingCostEur: 1100,
    description: 'DCU is an innovative Irish university known for its enterprise and engagement focus.',
    programs: [
      { id: 'p-292', universityId: 'uni-129', name: 'M.Sc. Computing', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 12, tuitionPerYearEur: 16000, minGpaRequired: 2.8, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-06-30', applicationUrl: 'https://www.dcu.ie/apply' },
      { id: 'p-293', universityId: 'uni-129', name: 'M.Sc. Business Administration', fieldOfStudy: 'Business Administration', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 12, tuitionPerYearEur: 16000, minGpaRequired: 2.8, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-06-30', applicationUrl: 'https://www.dcu.ie/apply' },
    ]
  },
  {
    id: 'uni-130', name: 'University of Limerick', country: 'Ireland', city: 'Limerick',
    websiteUrl: 'https://www.ul.ie', logoUrl: '', rankingQs: 480, rankingThe: 450,
    estimatedMonthlyLivingCostEur: 850,
    description: 'University of Limerick is known for its co-operative education program and strong industry links.',
    programs: [
      { id: 'p-294', universityId: 'uni-130', name: 'M.Sc. Software Engineering', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 12, tuitionPerYearEur: 15000, minGpaRequired: 2.8, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-06-30', applicationUrl: 'https://www.ul.ie/apply' },
      { id: 'p-295', universityId: 'uni-130', name: 'M.Sc. Economics', fieldOfStudy: 'Economics', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 12, tuitionPerYearEur: 15000, minGpaRequired: 2.8, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-06-30', applicationUrl: 'https://www.ul.ie/apply' },
    ]
  },

  // ============================================
  // PORTUGAL (additional universities)
  // ============================================
  {
    id: 'uni-131', name: 'University of Coimbra', country: 'Portugal', city: 'Coimbra',
    websiteUrl: 'https://www.uc.pt', logoUrl: '', rankingQs: 400, rankingThe: 380,
    estimatedMonthlyLivingCostEur: 550,
    description: 'University of Coimbra is one of the world\'s oldest universities (1290), a UNESCO World Heritage Site.',
    programs: [
      { id: 'p-296', universityId: 'uni-131', name: 'M.Sc. Computer Science', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 3000, minGpaRequired: 2.8, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-06-30', applicationUrl: 'https://www.uc.pt/apply' },
      { id: 'p-297', universityId: 'uni-131', name: 'M.Sc. Mathematics', fieldOfStudy: 'Mathematics', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 3000, minGpaRequired: 2.8, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-06-30', applicationUrl: 'https://www.uc.pt/apply' },
    ]
  },
  {
    id: 'uni-132', name: 'University of Aveiro', country: 'Portugal', city: 'Aveiro',
    websiteUrl: 'https://www.ua.pt', logoUrl: '', rankingQs: 450, rankingThe: 420,
    estimatedMonthlyLivingCostEur: 500,
    description: 'University of Aveiro is a modern Portuguese university known for its innovative campus and engineering programs.',
    programs: [
      { id: 'p-298', universityId: 'uni-132', name: 'M.Sc. Computer Engineering', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 2500, minGpaRequired: 2.5, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-06-30', applicationUrl: 'https://www.ua.pt/apply' },
      { id: 'p-299', universityId: 'uni-132', name: 'M.Sc. Engineering', fieldOfStudy: 'Engineering', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 2500, minGpaRequired: 2.5, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-06-30', applicationUrl: 'https://www.ua.pt/apply' },
    ]
  },
  {
    id: 'uni-133', name: 'NOVA University Lisbon', country: 'Portugal', city: 'Lisbon',
    websiteUrl: 'https://www.unl.pt', logoUrl: '', rankingQs: 350, rankingThe: 330,
    estimatedMonthlyLivingCostEur: 700,
    description: 'NOVA is a young, modern Portuguese university recognized for its business school and social sciences.',
    programs: [
      { id: 'p-300', universityId: 'uni-133', name: 'M.Sc. Computer Science', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 4000, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-06-30', applicationUrl: 'https://www.unl.pt/apply' },
      { id: 'p-301', universityId: 'uni-133', name: 'M.Sc. Economics', fieldOfStudy: 'Economics', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 4000, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-06-30', applicationUrl: 'https://www.unl.pt/apply' },
      { id: 'p-302', universityId: 'uni-133', name: 'M.Sc. Business Administration', fieldOfStudy: 'Business Administration', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 18, tuitionPerYearEur: 8000, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-06-30', applicationUrl: 'https://www.unl.pt/apply' },
    ]
  },

  // ============================================
  // POLAND (additional universities)
  // ============================================
  {
    id: 'uni-134', name: 'Wroclaw University of Technology', country: 'Poland', city: 'Wroclaw',
    websiteUrl: 'https://pwr.edu.pl', logoUrl: '', rankingQs: 550, rankingThe: 500,
    estimatedMonthlyLivingCostEur: 500,
    description: 'Wroclaw Tech is one of Poland\'s best technical universities, strong in computer science and electronics.',
    programs: [
      { id: 'p-303', universityId: 'uni-134', name: 'M.Sc. Computer Science', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 3500, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-07-15', applicationUrl: 'https://pwr.edu.pl/apply' },
      { id: 'p-304', universityId: 'uni-134', name: 'M.Sc. Engineering', fieldOfStudy: 'Engineering', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 3500, minGpaRequired: 2.8, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-07-15', applicationUrl: 'https://pwr.edu.pl/apply' },
    ]
  },
  {
    id: 'uni-135', name: 'Poznan University of Technology', country: 'Poland', city: 'Poznan',
    websiteUrl: 'https://www.put.poznan.pl', logoUrl: '', rankingQs: 600, rankingThe: 550,
    estimatedMonthlyLivingCostEur: 480,
    description: 'Poznan Tech is one of Poland\'s leading technical universities with strong engineering programs.',
    programs: [
      { id: 'p-305', universityId: 'uni-135', name: 'M.Sc. Computer Science', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 3000, minGpaRequired: 2.8, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-07-15', applicationUrl: 'https://www.put.poznan.pl/apply' },
      { id: 'p-306', universityId: 'uni-135', name: 'M.Sc. Mechanical Engineering', fieldOfStudy: 'Engineering', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 3000, minGpaRequired: 2.8, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-07-15', applicationUrl: 'https://www.put.poznan.pl/apply' },
    ]
  },
  {
    id: 'uni-136', name: 'University of Wroclaw', country: 'Poland', city: 'Wroclaw',
    websiteUrl: 'https://www.uni.wroc.pl', logoUrl: '', rankingQs: 500, rankingThe: 470,
    estimatedMonthlyLivingCostEur: 500,
    description: 'University of Wroclaw is one of Poland\'s oldest universities with 11 Nobel Prize laureates.',
    programs: [
      { id: 'p-307', universityId: 'uni-136', name: 'M.Sc. Computer Science', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 3000, minGpaRequired: 2.8, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-07-15', applicationUrl: 'https://www.uni.wroc.pl/apply' },
      { id: 'p-308', universityId: 'uni-136', name: 'M.Sc. Mathematics', fieldOfStudy: 'Mathematics', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 3000, minGpaRequired: 2.8, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-07-15', applicationUrl: 'https://www.uni.wroc.pl/apply' },
    ]
  },

  // ============================================
  // CZECH REPUBLIC (additional universities)
  // ============================================
  {
    id: 'uni-137', name: 'Brno University of Technology', country: 'Czech Republic', city: 'Brno',
    websiteUrl: 'https://www.vut.cz', logoUrl: '', rankingQs: 550, rankingThe: 520,
    estimatedMonthlyLivingCostEur: 550,
    description: 'BUT is one of the Czech Republic\'s largest technical universities, strong in IT, engineering, and architecture.',
    programs: [
      { id: 'p-309', universityId: 'uni-137', name: 'M.Sc. Computer Science', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 4000, minGpaRequired: 2.8, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-04-30', applicationUrl: 'https://www.vut.cz/apply' },
      { id: 'p-310', universityId: 'uni-137', name: 'M.Sc. Engineering', fieldOfStudy: 'Engineering', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 4000, minGpaRequired: 2.8, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-04-30', applicationUrl: 'https://www.vut.cz/apply' },
    ]
  },
  {
    id: 'uni-138', name: 'University of Chemistry and Technology Prague', country: 'Czech Republic', city: 'Prague',
    websiteUrl: 'https://www.vscht.cz', logoUrl: '', rankingQs: 500, rankingThe: 470,
    estimatedMonthlyLivingCostEur: 600,
    description: 'UCT Prague is the largest university of its kind in Central Europe, specializing in chemistry and chemical engineering.',
    programs: [
      { id: 'p-311', universityId: 'uni-138', name: 'M.Sc. Chemistry', fieldOfStudy: 'Chemistry', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 5000, minGpaRequired: 2.8, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-04-30', applicationUrl: 'https://www.vscht.cz/apply' },
      { id: 'p-312', universityId: 'uni-138', name: 'M.Sc. Engineering', fieldOfStudy: 'Engineering', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 5000, minGpaRequired: 2.8, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-04-30', applicationUrl: 'https://www.vscht.cz/apply' },
    ]
  },

  // ============================================
  // HUNGARY (additional universities)
  // ============================================
  {
    id: 'uni-139', name: 'University of Debrecen', country: 'Hungary', city: 'Debrecen',
    websiteUrl: 'https://www.unideb.hu', logoUrl: '', rankingQs: 550, rankingThe: 520,
    estimatedMonthlyLivingCostEur: 400,
    description: 'University of Debrecen is one of Hungary\'s largest universities with excellent medical and engineering faculties.',
    programs: [
      { id: 'p-313', universityId: 'uni-139', name: 'M.Sc. Computer Science', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 3500, minGpaRequired: 2.5, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-06-15', applicationUrl: 'https://www.unideb.hu/apply' },
      { id: 'p-314', universityId: 'uni-139', name: 'M.Sc. Mathematics', fieldOfStudy: 'Mathematics', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 3500, minGpaRequired: 2.5, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-06-15', applicationUrl: 'https://www.unideb.hu/apply' },
    ]
  },
  {
    id: 'uni-140', name: 'University of Szeged', country: 'Hungary', city: 'Szeged',
    websiteUrl: 'https://www.u-szeged.hu', logoUrl: '', rankingQs: 500, rankingThe: 480,
    estimatedMonthlyLivingCostEur: 380,
    description: 'University of Szeged is one of Hungary\'s most distinguished universities, known for sciences and medicine.',
    programs: [
      { id: 'p-315', universityId: 'uni-140', name: 'M.Sc. Computer Science', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 3000, minGpaRequired: 2.5, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-06-15', applicationUrl: 'https://www.u-szeged.hu/apply' },
      { id: 'p-316', universityId: 'uni-140', name: 'M.Sc. Physics', fieldOfStudy: 'Physics', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 3000, minGpaRequired: 2.5, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-06-15', applicationUrl: 'https://www.u-szeged.hu/apply' },
    ]
  },
  {
    id: 'uni-141', name: 'Corvinus University of Budapest', country: 'Hungary', city: 'Budapest',
    websiteUrl: 'https://www.uni-corvinus.hu', logoUrl: '', rankingQs: 480, rankingThe: 460,
    estimatedMonthlyLivingCostEur: 500,
    description: 'Corvinus is Hungary\'s leading university for economics, business, and social sciences.',
    programs: [
      { id: 'p-317', universityId: 'uni-141', name: 'M.Sc. Economics', fieldOfStudy: 'Economics', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 4000, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-06-15', applicationUrl: 'https://www.uni-corvinus.hu/apply' },
      { id: 'p-318', universityId: 'uni-141', name: 'M.Sc. Business Administration', fieldOfStudy: 'Business Administration', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 4000, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-06-15', applicationUrl: 'https://www.uni-corvinus.hu/apply' },
    ]
  },

  // ============================================
  // ROMANIA (additional universities)
  // ============================================
  {
    id: 'uni-142', name: 'Babes-Bolyai University', country: 'Romania', city: 'Cluj-Napoca',
    websiteUrl: 'https://www.ubbcluj.ro', logoUrl: '', rankingQs: 600, rankingThe: 570,
    estimatedMonthlyLivingCostEur: 450,
    description: 'Babes-Bolyai is Romania\'s largest university, located in the vibrant tech hub of Cluj-Napoca.',
    programs: [
      { id: 'p-319', universityId: 'uni-142', name: 'M.Sc. Computer Science', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 2500, minGpaRequired: 2.5, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-07-15', applicationUrl: 'https://www.ubbcluj.ro/apply' },
      { id: 'p-320', universityId: 'uni-142', name: 'M.Sc. Mathematics', fieldOfStudy: 'Mathematics', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 2500, minGpaRequired: 2.5, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-07-15', applicationUrl: 'https://www.ubbcluj.ro/apply' },
    ]
  },
  {
    id: 'uni-143', name: 'Technical University of Cluj-Napoca', country: 'Romania', city: 'Cluj-Napoca',
    websiteUrl: 'https://www.utcluj.ro', logoUrl: '', rankingQs: 650, rankingThe: 620,
    estimatedMonthlyLivingCostEur: 450,
    description: 'UTCN is one of Romania\'s leading technical universities with a growing tech ecosystem around it.',
    programs: [
      { id: 'p-321', universityId: 'uni-143', name: 'M.Sc. Computer Science', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 2000, minGpaRequired: 2.5, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-07-15', applicationUrl: 'https://www.utcluj.ro/apply' },
      { id: 'p-322', universityId: 'uni-143', name: 'M.Sc. Engineering', fieldOfStudy: 'Engineering', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 2000, minGpaRequired: 2.5, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-07-15', applicationUrl: 'https://www.utcluj.ro/apply' },
    ]
  },

  // ============================================
  // CROATIA (additional universities)
  // ============================================
  {
    id: 'uni-144', name: 'University of Split', country: 'Croatia', city: 'Split',
    websiteUrl: 'https://www.unist.hr', logoUrl: '', rankingQs: 700, rankingThe: 680,
    estimatedMonthlyLivingCostEur: 550,
    description: 'University of Split is Croatia\'s second largest university, located in a beautiful Mediterranean coastal city.',
    programs: [
      { id: 'p-323', universityId: 'uni-144', name: 'M.Sc. Computer Science', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 2000, minGpaRequired: 2.5, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-07-15', applicationUrl: 'https://www.unist.hr/apply' },
      { id: 'p-324', universityId: 'uni-144', name: 'M.Sc. Engineering', fieldOfStudy: 'Engineering', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 2000, minGpaRequired: 2.5, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-07-15', applicationUrl: 'https://www.unist.hr/apply' },
    ]
  },

  // ============================================
  // GREECE (additional universities)
  // ============================================
  {
    id: 'uni-145', name: 'Aristotle University of Thessaloniki', country: 'Greece', city: 'Thessaloniki',
    websiteUrl: 'https://www.auth.gr', logoUrl: '', rankingQs: 420, rankingThe: 400,
    estimatedMonthlyLivingCostEur: 550,
    description: 'Aristotle University is the largest university in Greece with comprehensive faculties and vibrant student life.',
    programs: [
      { id: 'p-325', universityId: 'uni-145', name: 'M.Sc. Computer Science', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 0, minGpaRequired: 2.8, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-06-30', applicationUrl: 'https://www.auth.gr/apply' },
      { id: 'p-326', universityId: 'uni-145', name: 'M.Sc. Physics', fieldOfStudy: 'Physics', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 0, minGpaRequired: 2.8, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-06-30', applicationUrl: 'https://www.auth.gr/apply' },
      { id: 'p-327', universityId: 'uni-145', name: 'M.Sc. Economics', fieldOfStudy: 'Economics', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 0, minGpaRequired: 2.8, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-06-30', applicationUrl: 'https://www.auth.gr/apply' },
    ]
  },
  {
    id: 'uni-146', name: 'University of Crete', country: 'Greece', city: 'Heraklion',
    websiteUrl: 'https://www.uoc.gr', logoUrl: '', rankingQs: 500, rankingThe: 480,
    estimatedMonthlyLivingCostEur: 550,
    description: 'University of Crete is known for computer science and physics research, associated with FORTH research center.',
    programs: [
      { id: 'p-328', universityId: 'uni-146', name: 'M.Sc. Computer Science', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 0, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-06-30', applicationUrl: 'https://www.uoc.gr/apply' },
      { id: 'p-329', universityId: 'uni-146', name: 'M.Sc. Physics', fieldOfStudy: 'Physics', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 0, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-06-30', applicationUrl: 'https://www.uoc.gr/apply' },
    ]
  },

  // ============================================
  // ESTONIA (new country)
  // ============================================
  {
    id: 'uni-147', name: 'University of Tartu', country: 'Estonia', city: 'Tartu',
    websiteUrl: 'https://www.ut.ee', logoUrl: '', rankingQs: 300, rankingThe: 280,
    estimatedMonthlyLivingCostEur: 600,
    description: 'University of Tartu is Estonia\'s leading university and one of the oldest in Northern Europe (1632).',
    programs: [
      { id: 'p-330', universityId: 'uni-147', name: 'M.Sc. Computer Science', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 4000, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-04-01', applicationUrl: 'https://www.ut.ee/apply' },
      { id: 'p-331', universityId: 'uni-147', name: 'M.Sc. Data Science', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 4000, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-04-01', applicationUrl: 'https://www.ut.ee/apply' },
      { id: 'p-332', universityId: 'uni-147', name: 'M.Sc. Mathematics', fieldOfStudy: 'Mathematics', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 4000, minGpaRequired: 2.8, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-04-01', applicationUrl: 'https://www.ut.ee/apply' },
    ]
  },
  {
    id: 'uni-148', name: 'Tallinn University of Technology', country: 'Estonia', city: 'Tallinn',
    websiteUrl: 'https://taltech.ee', logoUrl: '', rankingQs: 450, rankingThe: 420,
    estimatedMonthlyLivingCostEur: 650,
    description: 'TalTech is Estonia\'s only technological university, located in one of Europe\'s most digital societies.',
    programs: [
      { id: 'p-333', universityId: 'uni-148', name: 'M.Sc. Computer Science', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 4500, minGpaRequired: 2.8, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-05-01', applicationUrl: 'https://taltech.ee/apply' },
      { id: 'p-334', universityId: 'uni-148', name: 'M.Sc. Cybersecurity', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 4500, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-05-01', applicationUrl: 'https://taltech.ee/apply' },
      { id: 'p-335', universityId: 'uni-148', name: 'M.Sc. Engineering', fieldOfStudy: 'Engineering', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 4500, minGpaRequired: 2.8, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-05-01', applicationUrl: 'https://taltech.ee/apply' },
    ]
  },

  // ============================================
  // LITHUANIA (new country)
  // ============================================
  {
    id: 'uni-149', name: 'Vilnius University', country: 'Lithuania', city: 'Vilnius',
    websiteUrl: 'https://www.vu.lt', logoUrl: '', rankingQs: 400, rankingThe: 380,
    estimatedMonthlyLivingCostEur: 500,
    description: 'Vilnius University is one of the oldest universities in Eastern Europe (1579), Lithuania\'s most prestigious institution.',
    programs: [
      { id: 'p-336', universityId: 'uni-149', name: 'M.Sc. Computer Science', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 3500, minGpaRequired: 2.8, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-06-01', applicationUrl: 'https://www.vu.lt/apply' },
      { id: 'p-337', universityId: 'uni-149', name: 'M.Sc. Economics', fieldOfStudy: 'Economics', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 3500, minGpaRequired: 2.8, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-06-01', applicationUrl: 'https://www.vu.lt/apply' },
    ]
  },
  {
    id: 'uni-150', name: 'Kaunas University of Technology', country: 'Lithuania', city: 'Kaunas',
    websiteUrl: 'https://ktu.edu', logoUrl: '', rankingQs: 550, rankingThe: 520,
    estimatedMonthlyLivingCostEur: 450,
    description: 'KTU is Lithuania\'s largest technical university with a focus on interdisciplinary research and innovation.',
    programs: [
      { id: 'p-338', universityId: 'uni-150', name: 'M.Sc. Computer Science', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 3200, minGpaRequired: 2.5, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-06-15', applicationUrl: 'https://ktu.edu/apply' },
      { id: 'p-339', universityId: 'uni-150', name: 'M.Sc. Engineering', fieldOfStudy: 'Engineering', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 3200, minGpaRequired: 2.5, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-06-15', applicationUrl: 'https://ktu.edu/apply' },
    ]
  },
  {
    id: 'uni-151', name: 'Vilnius Gediminas Technical University', country: 'Lithuania', city: 'Vilnius',
    websiteUrl: 'https://vilniustech.lt', logoUrl: '', rankingQs: 600, rankingThe: 570,
    estimatedMonthlyLivingCostEur: 500,
    description: 'VILNIUS TECH is one of Lithuania\'s leading technical universities, strong in civil engineering and IT.',
    programs: [
      { id: 'p-340', universityId: 'uni-151', name: 'M.Sc. Computer Science', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 3000, minGpaRequired: 2.5, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-06-15', applicationUrl: 'https://vilniustech.lt/apply' },
      { id: 'p-341', universityId: 'uni-151', name: 'M.Sc. Engineering', fieldOfStudy: 'Engineering', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 3000, minGpaRequired: 2.5, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-06-15', applicationUrl: 'https://vilniustech.lt/apply' },
    ]
  },

  // ============================================
  // LATVIA (new country)
  // ============================================
  {
    id: 'uni-152', name: 'University of Latvia', country: 'Latvia', city: 'Riga',
    websiteUrl: 'https://www.lu.lv', logoUrl: '', rankingQs: 550, rankingThe: 520,
    estimatedMonthlyLivingCostEur: 550,
    description: 'University of Latvia is the largest university in the Baltic states by number of students.',
    programs: [
      { id: 'p-342', universityId: 'uni-152', name: 'M.Sc. Computer Science', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 3500, minGpaRequired: 2.5, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-06-15', applicationUrl: 'https://www.lu.lv/apply' },
      { id: 'p-343', universityId: 'uni-152', name: 'M.Sc. Mathematics', fieldOfStudy: 'Mathematics', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 3500, minGpaRequired: 2.5, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-06-15', applicationUrl: 'https://www.lu.lv/apply' },
    ]
  },
  {
    id: 'uni-153', name: 'Riga Technical University', country: 'Latvia', city: 'Riga',
    websiteUrl: 'https://www.rtu.lv', logoUrl: '', rankingQs: 600, rankingThe: 570,
    estimatedMonthlyLivingCostEur: 550,
    description: 'RTU is Latvia\'s oldest and leading technical university with strong engineering and IT programs.',
    programs: [
      { id: 'p-344', universityId: 'uni-153', name: 'M.Sc. Computer Science', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 3500, minGpaRequired: 2.5, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-06-15', applicationUrl: 'https://www.rtu.lv/apply' },
      { id: 'p-345', universityId: 'uni-153', name: 'M.Sc. Engineering', fieldOfStudy: 'Engineering', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 3500, minGpaRequired: 2.5, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-06-15', applicationUrl: 'https://www.rtu.lv/apply' },
    ]
  },

  // ============================================
  // SLOVENIA (new country)
  // ============================================
  {
    id: 'uni-154', name: 'University of Ljubljana', country: 'Slovenia', city: 'Ljubljana',
    websiteUrl: 'https://www.uni-lj.si', logoUrl: '', rankingQs: 350, rankingThe: 330,
    estimatedMonthlyLivingCostEur: 600,
    description: 'University of Ljubljana is the oldest and largest university in Slovenia, ranked among the world\'s top 500.',
    programs: [
      { id: 'p-346', universityId: 'uni-154', name: 'M.Sc. Computer Science', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 3000, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-06-15', applicationUrl: 'https://www.uni-lj.si/apply' },
      { id: 'p-347', universityId: 'uni-154', name: 'M.Sc. Mathematics', fieldOfStudy: 'Mathematics', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 3000, minGpaRequired: 2.8, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-06-15', applicationUrl: 'https://www.uni-lj.si/apply' },
      { id: 'p-348', universityId: 'uni-154', name: 'M.Sc. Engineering', fieldOfStudy: 'Engineering', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 3000, minGpaRequired: 2.8, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-06-15', applicationUrl: 'https://www.uni-lj.si/apply' },
    ]
  },
  {
    id: 'uni-155', name: 'University of Maribor', country: 'Slovenia', city: 'Maribor',
    websiteUrl: 'https://www.um.si', logoUrl: '', rankingQs: 600, rankingThe: 570,
    estimatedMonthlyLivingCostEur: 500,
    description: 'University of Maribor is Slovenia\'s second largest university, strong in engineering and IT.',
    programs: [
      { id: 'p-349', universityId: 'uni-155', name: 'M.Sc. Computer Science', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 2500, minGpaRequired: 2.5, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-06-15', applicationUrl: 'https://www.um.si/apply' },
      { id: 'p-350', universityId: 'uni-155', name: 'M.Sc. Engineering', fieldOfStudy: 'Engineering', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 2500, minGpaRequired: 2.5, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-06-15', applicationUrl: 'https://www.um.si/apply' },
    ]
  },

  // ============================================
  // SLOVAKIA (new country)
  // ============================================
  {
    id: 'uni-156', name: 'Comenius University Bratislava', country: 'Slovakia', city: 'Bratislava',
    websiteUrl: 'https://www.uniba.sk', logoUrl: '', rankingQs: 550, rankingThe: 520,
    estimatedMonthlyLivingCostEur: 500,
    description: 'Comenius University is Slovakia\'s largest and most prestigious university, founded in 1919.',
    programs: [
      { id: 'p-351', universityId: 'uni-156', name: 'M.Sc. Computer Science', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 3000, minGpaRequired: 2.8, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-06-30', applicationUrl: 'https://www.uniba.sk/apply' },
      { id: 'p-352', universityId: 'uni-156', name: 'M.Sc. Mathematics', fieldOfStudy: 'Mathematics', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 3000, minGpaRequired: 2.5, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-06-30', applicationUrl: 'https://www.uniba.sk/apply' },
    ]
  },
  {
    id: 'uni-157', name: 'Slovak University of Technology', country: 'Slovakia', city: 'Bratislava',
    websiteUrl: 'https://www.stuba.sk', logoUrl: '', rankingQs: 650, rankingThe: 620,
    estimatedMonthlyLivingCostEur: 500,
    description: 'STU is Slovakia\'s leading technical university with strong engineering and architecture programs.',
    programs: [
      { id: 'p-353', universityId: 'uni-157', name: 'M.Sc. Computer Science', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 2500, minGpaRequired: 2.5, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-06-30', applicationUrl: 'https://www.stuba.sk/apply' },
      { id: 'p-354', universityId: 'uni-157', name: 'M.Sc. Engineering', fieldOfStudy: 'Engineering', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 2500, minGpaRequired: 2.5, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-06-30', applicationUrl: 'https://www.stuba.sk/apply' },
    ]
  },

  // ============================================
  // SERBIA (new country)
  // ============================================
  {
    id: 'uni-158', name: 'University of Belgrade', country: 'Serbia', city: 'Belgrade',
    websiteUrl: 'https://www.bg.ac.rs', logoUrl: '', rankingQs: 500, rankingThe: 480,
    estimatedMonthlyLivingCostEur: 450,
    description: 'University of Belgrade is the oldest and largest university in Serbia with a strong mathematics and CS tradition.',
    programs: [
      { id: 'p-355', universityId: 'uni-158', name: 'M.Sc. Computer Science', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 2000, minGpaRequired: 2.8, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-06-30', applicationUrl: 'https://www.bg.ac.rs/apply' },
      { id: 'p-356', universityId: 'uni-158', name: 'M.Sc. Mathematics', fieldOfStudy: 'Mathematics', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 2000, minGpaRequired: 2.8, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-06-30', applicationUrl: 'https://www.bg.ac.rs/apply' },
      { id: 'p-357', universityId: 'uni-158', name: 'M.Sc. Engineering', fieldOfStudy: 'Engineering', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 2000, minGpaRequired: 2.5, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-06-30', applicationUrl: 'https://www.bg.ac.rs/apply' },
    ]
  },
  {
    id: 'uni-159', name: 'University of Novi Sad', country: 'Serbia', city: 'Novi Sad',
    websiteUrl: 'https://www.uns.ac.rs', logoUrl: '', rankingQs: 650, rankingThe: 620,
    estimatedMonthlyLivingCostEur: 380,
    description: 'University of Novi Sad is Serbia\'s second largest university, known for its Faculty of Sciences and IT programs.',
    programs: [
      { id: 'p-358', universityId: 'uni-159', name: 'M.Sc. Computer Science', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 1800, minGpaRequired: 2.5, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-06-30', applicationUrl: 'https://www.uns.ac.rs/apply' },
      { id: 'p-359', universityId: 'uni-159', name: 'M.Sc. Engineering', fieldOfStudy: 'Engineering', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 1800, minGpaRequired: 2.5, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-06-30', applicationUrl: 'https://www.uns.ac.rs/apply' },
    ]
  },

  // ============================================
  // BULGARIA (new country)
  // ============================================
  {
    id: 'uni-160', name: 'Sofia University', country: 'Bulgaria', city: 'Sofia',
    websiteUrl: 'https://www.uni-sofia.bg', logoUrl: '', rankingQs: 550, rankingThe: 530,
    estimatedMonthlyLivingCostEur: 400,
    description: 'Sofia University is the oldest and most prestigious university in Bulgaria, strong in mathematics and sciences.',
    programs: [
      { id: 'p-360', universityId: 'uni-160', name: 'M.Sc. Computer Science', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 2500, minGpaRequired: 2.5, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-06-30', applicationUrl: 'https://www.uni-sofia.bg/apply' },
      { id: 'p-361', universityId: 'uni-160', name: 'M.Sc. Mathematics', fieldOfStudy: 'Mathematics', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 2500, minGpaRequired: 2.5, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-06-30', applicationUrl: 'https://www.uni-sofia.bg/apply' },
    ]
  },
  {
    id: 'uni-161', name: 'Technical University of Sofia', country: 'Bulgaria', city: 'Sofia',
    websiteUrl: 'https://www.tu-sofia.bg', logoUrl: '', rankingQs: 700, rankingThe: 670,
    estimatedMonthlyLivingCostEur: 400,
    description: 'TU Sofia is Bulgaria\'s leading technical university, the largest center of engineering education in the country.',
    programs: [
      { id: 'p-362', universityId: 'uni-161', name: 'M.Sc. Computer Science', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 2000, minGpaRequired: 2.5, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-06-30', applicationUrl: 'https://www.tu-sofia.bg/apply' },
      { id: 'p-363', universityId: 'uni-161', name: 'M.Sc. Engineering', fieldOfStudy: 'Engineering', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 2000, minGpaRequired: 2.5, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-06-30', applicationUrl: 'https://www.tu-sofia.bg/apply' },
    ]
  },

  // ============================================
  // ADDITIONAL: More German universities
  // ============================================
  {
    id: 'uni-162', name: 'University of Leipzig', country: 'Germany', city: 'Leipzig',
    websiteUrl: 'https://www.uni-leipzig.de', logoUrl: '', rankingQs: 480, rankingThe: 450,
    estimatedMonthlyLivingCostEur: 700,
    description: 'University of Leipzig is one of Germany\'s oldest universities, strong in humanities, social sciences, and medicine.',
    programs: [
      { id: 'p-364', universityId: 'uni-162', name: 'M.Sc. Computer Science', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 0, minGpaRequired: 2.8, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-07-15', applicationUrl: 'https://www.uni-leipzig.de/apply' },
      { id: 'p-365', universityId: 'uni-162', name: 'M.Sc. Economics', fieldOfStudy: 'Economics', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 0, minGpaRequired: 2.8, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-07-15', applicationUrl: 'https://www.uni-leipzig.de/apply' },
    ]
  },
  {
    id: 'uni-163', name: 'University of Jena', country: 'Germany', city: 'Jena',
    websiteUrl: 'https://www.uni-jena.de', logoUrl: '', rankingQs: 350, rankingThe: 320,
    estimatedMonthlyLivingCostEur: 650,
    description: 'Friedrich Schiller University Jena is a research-intensive university in Thuringia, known for optics and photonics.',
    programs: [
      { id: 'p-366', universityId: 'uni-163', name: 'M.Sc. Computer Science', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 0, minGpaRequired: 2.8, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-07-15', applicationUrl: 'https://www.uni-jena.de/apply' },
      { id: 'p-367', universityId: 'uni-163', name: 'M.Sc. Physics', fieldOfStudy: 'Physics', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 0, minGpaRequired: 2.8, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-07-15', applicationUrl: 'https://www.uni-jena.de/apply' },
    ]
  },
  {
    id: 'uni-164', name: 'University of Münster', country: 'Germany', city: 'Münster',
    websiteUrl: 'https://www.uni-muenster.de', logoUrl: '', rankingQs: 300, rankingThe: 270,
    estimatedMonthlyLivingCostEur: 800,
    description: 'University of Münster is one of Germany\'s largest universities, known for excellent research across all disciplines.',
    programs: [
      { id: 'p-368', universityId: 'uni-164', name: 'M.Sc. Computer Science', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 0, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-07-15', applicationUrl: 'https://www.uni-muenster.de/apply' },
      { id: 'p-369', universityId: 'uni-164', name: 'M.Sc. Mathematics', fieldOfStudy: 'Mathematics', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 0, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-07-15', applicationUrl: 'https://www.uni-muenster.de/apply' },
      { id: 'p-370', universityId: 'uni-164', name: 'M.Sc. Economics', fieldOfStudy: 'Economics', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 0, minGpaRequired: 2.8, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-07-15', applicationUrl: 'https://www.uni-muenster.de/apply' },
    ]
  },
  {
    id: 'uni-165', name: 'University of Kiel', country: 'Germany', city: 'Kiel',
    websiteUrl: 'https://www.uni-kiel.de', logoUrl: '', rankingQs: 420, rankingThe: 390,
    estimatedMonthlyLivingCostEur: 750,
    description: 'University of Kiel is the only fully-fledged university in Schleswig-Holstein, strong in marine and ocean sciences.',
    programs: [
      { id: 'p-371', universityId: 'uni-165', name: 'M.Sc. Computer Science', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 0, minGpaRequired: 2.8, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-07-15', applicationUrl: 'https://www.uni-kiel.de/apply' },
      { id: 'p-372', universityId: 'uni-165', name: 'M.Sc. Biology', fieldOfStudy: 'Biology', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 0, minGpaRequired: 2.8, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-07-15', applicationUrl: 'https://www.uni-kiel.de/apply' },
    ]
  },
  {
    id: 'uni-166', name: 'University of Kaiserslautern-Landau', country: 'Germany', city: 'Kaiserslautern',
    websiteUrl: 'https://rptu.de', logoUrl: '', rankingQs: 500, rankingThe: 470,
    estimatedMonthlyLivingCostEur: 700,
    description: 'RPTU is a German technical university known for AI research (DFKI) and computer science.',
    programs: [
      { id: 'p-373', universityId: 'uni-166', name: 'M.Sc. Computer Science', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 0, minGpaRequired: 2.8, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-07-15', applicationUrl: 'https://rptu.de/apply' },
      { id: 'p-374', universityId: 'uni-166', name: 'M.Sc. Mathematics', fieldOfStudy: 'Mathematics', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 0, minGpaRequired: 2.8, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-07-15', applicationUrl: 'https://rptu.de/apply' },
    ]
  },

  // ============================================
  // ADDITIONAL: More Netherlands universities
  // ============================================
  {
    id: 'uni-167', name: 'University of Amsterdam (bachelors)', country: 'Netherlands', city: 'Amsterdam',
    websiteUrl: 'https://www.uva.nl', logoUrl: '', rankingQs: 55, rankingThe: 60,
    estimatedMonthlyLivingCostEur: 1100,
    description: 'UvA Amsterdam also offers excellent bachelor programs in English across multiple disciplines.',
    programs: [
      { id: 'p-375', universityId: 'uni-167', name: 'B.Sc. Computer Science', fieldOfStudy: 'Computer Science', degreeLevel: 'bachelors', languageOfInstruction: 'English', durationMonths: 36, tuitionPerYearEur: 12000, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-04-01', applicationUrl: 'https://www.uva.nl/apply' },
      { id: 'p-376', universityId: 'uni-167', name: 'B.Sc. Economics and Business', fieldOfStudy: 'Economics', degreeLevel: 'bachelors', languageOfInstruction: 'English', durationMonths: 36, tuitionPerYearEur: 12000, minGpaRequired: 2.8, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-04-01', applicationUrl: 'https://www.uva.nl/apply' },
      { id: 'p-377', universityId: 'uni-167', name: 'B.Sc. Psychology', fieldOfStudy: 'Psychology', degreeLevel: 'bachelors', languageOfInstruction: 'English', durationMonths: 36, tuitionPerYearEur: 12000, minGpaRequired: 2.8, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-04-01', applicationUrl: 'https://www.uva.nl/apply' },
    ]
  },

  // ============================================
  // ADDITIONAL: More Switzerland
  // ============================================
  {
    id: 'uni-168', name: 'University of St. Gallen', country: 'Switzerland', city: 'St. Gallen',
    websiteUrl: 'https://www.unisg.ch', logoUrl: '', rankingQs: 480, rankingThe: 450,
    estimatedMonthlyLivingCostEur: 1400,
    description: 'University of St. Gallen is one of Europe\'s leading business universities, consistently top-ranked for finance and management.',
    programs: [
      { id: 'p-378', universityId: 'uni-168', name: 'M.A. Banking and Finance', fieldOfStudy: 'Business Administration', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 3000, minGpaRequired: 3.5, requiredLanguage: 'English', requiredLanguageLevel: 'C1', applicationDeadline: '2026-03-31', applicationUrl: 'https://www.unisg.ch/apply' },
      { id: 'p-379', universityId: 'uni-168', name: 'M.A. Economics', fieldOfStudy: 'Economics', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 3000, minGpaRequired: 3.3, requiredLanguage: 'English', requiredLanguageLevel: 'C1', applicationDeadline: '2026-03-31', applicationUrl: 'https://www.unisg.ch/apply' },
    ]
  },

  // ============================================
  // ADDITIONAL: More diverse programs in existing countries
  // ============================================
  {
    id: 'uni-169', name: 'Bauhaus-Universität Weimar', country: 'Germany', city: 'Weimar',
    websiteUrl: 'https://www.uni-weimar.de', logoUrl: '', rankingQs: 600, rankingThe: 570,
    estimatedMonthlyLivingCostEur: 650,
    description: 'Bauhaus-Universität is the successor of the famous Bauhaus school, focused on architecture, design, media, and civil engineering.',
    programs: [
      { id: 'p-380', universityId: 'uni-169', name: 'M.A. Architecture', fieldOfStudy: 'Architecture', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 0, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-03-15', applicationUrl: 'https://www.uni-weimar.de/apply' },
      { id: 'p-381', universityId: 'uni-169', name: 'M.Sc. Computer Science for Digital Media', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 0, minGpaRequired: 2.8, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-03-15', applicationUrl: 'https://www.uni-weimar.de/apply' },
    ]
  },
  {
    id: 'uni-170', name: 'University of the Arts Berlin', country: 'Germany', city: 'Berlin',
    websiteUrl: 'https://www.udk-berlin.de', logoUrl: '', rankingQs: 500, rankingThe: 480,
    estimatedMonthlyLivingCostEur: 900,
    description: 'UdK Berlin is one of the largest and most diversified arts universities in the world.',
    programs: [
      { id: 'p-382', universityId: 'uni-170', name: 'M.A. Arts & Humanities', fieldOfStudy: 'Arts & Humanities', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 0, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-03-01', applicationUrl: 'https://www.udk-berlin.de/apply' },
      { id: 'p-383', universityId: 'uni-170', name: 'M.A. Architecture', fieldOfStudy: 'Architecture', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 0, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-03-01', applicationUrl: 'https://www.udk-berlin.de/apply' },
    ]
  },

  // ============================================
  // MORE: Bachelors programs across Europe
  // ============================================
  {
    id: 'uni-171', name: 'University of Twente (bachelors)', country: 'Netherlands', city: 'Enschede',
    websiteUrl: 'https://www.utwente.nl', logoUrl: '', rankingQs: 210, rankingThe: 190,
    estimatedMonthlyLivingCostEur: 850,
    description: 'UT offers several English-taught bachelor programs with a strong entrepreneurial and technical focus.',
    programs: [
      { id: 'p-384', universityId: 'uni-171', name: 'B.Sc. Technical Computer Science', fieldOfStudy: 'Computer Science', degreeLevel: 'bachelors', languageOfInstruction: 'English', durationMonths: 36, tuitionPerYearEur: 12500, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-05-01', applicationUrl: 'https://www.utwente.nl/apply' },
      { id: 'p-385', universityId: 'uni-171', name: 'B.Sc. Business & IT', fieldOfStudy: 'Business Administration', degreeLevel: 'bachelors', languageOfInstruction: 'English', durationMonths: 36, tuitionPerYearEur: 12500, minGpaRequired: 2.8, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-05-01', applicationUrl: 'https://www.utwente.nl/apply' },
    ]
  },
  {
    id: 'uni-172', name: 'Jacobs University Bremen', country: 'Germany', city: 'Bremen',
    websiteUrl: 'https://www.jacobs-university.de', logoUrl: '', rankingQs: 500, rankingThe: 480,
    estimatedMonthlyLivingCostEur: 750,
    description: 'Jacobs University is a private, English-language university in Germany with a highly international campus.',
    programs: [
      { id: 'p-386', universityId: 'uni-172', name: 'B.Sc. Computer Science', fieldOfStudy: 'Computer Science', degreeLevel: 'bachelors', languageOfInstruction: 'English', durationMonths: 36, tuitionPerYearEur: 20000, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-06-01', applicationUrl: 'https://www.jacobs-university.de/apply' },
      { id: 'p-387', universityId: 'uni-172', name: 'B.Sc. Business Administration', fieldOfStudy: 'Business Administration', degreeLevel: 'bachelors', languageOfInstruction: 'English', durationMonths: 36, tuitionPerYearEur: 20000, minGpaRequired: 2.8, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-06-01', applicationUrl: 'https://www.jacobs-university.de/apply' },
    ]
  },
  {
    id: 'uni-173', name: 'Bocconi University', country: 'Italy', city: 'Milan',
    websiteUrl: 'https://www.unibocconi.it', logoUrl: '', rankingQs: 18, rankingThe: 50,
    estimatedMonthlyLivingCostEur: 1000,
    description: 'Bocconi is Italy\'s premier private university for business, economics, and finance, ranked #1 in Italy.',
    programs: [
      { id: 'p-388', universityId: 'uni-173', name: 'M.Sc. Economics and Management of Innovation', fieldOfStudy: 'Economics', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 14000, minGpaRequired: 3.5, requiredLanguage: 'English', requiredLanguageLevel: 'C1', applicationDeadline: '2026-01-10', applicationUrl: 'https://www.unibocconi.it/apply' },
      { id: 'p-389', universityId: 'uni-173', name: 'M.Sc. Finance', fieldOfStudy: 'Business Administration', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 14000, minGpaRequired: 3.5, requiredLanguage: 'English', requiredLanguageLevel: 'C1', applicationDeadline: '2026-01-10', applicationUrl: 'https://www.unibocconi.it/apply' },
      { id: 'p-390', universityId: 'uni-173', name: 'B.Sc. Economics', fieldOfStudy: 'Economics', degreeLevel: 'bachelors', languageOfInstruction: 'English', durationMonths: 36, tuitionPerYearEur: 13000, minGpaRequired: 3.3, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-01-10', applicationUrl: 'https://www.unibocconi.it/apply' },
    ]
  },

  // ============================================
  // PhD programs across Europe
  // ============================================
  {
    id: 'uni-174', name: 'Max Planck Institute Network (Germany)', country: 'Germany', city: 'Munich',
    websiteUrl: 'https://www.mpg.de', logoUrl: '', rankingQs: 1, rankingThe: 1,
    estimatedMonthlyLivingCostEur: 900,
    description: 'Max Planck Institutes are Germany\'s premier basic research institutions, offering fully funded PhD positions.',
    programs: [
      { id: 'p-391', universityId: 'uni-174', name: 'PhD Computer Science (IMPRS-IS)', fieldOfStudy: 'Computer Science', degreeLevel: 'phd', languageOfInstruction: 'English', durationMonths: 48, tuitionPerYearEur: 0, minGpaRequired: 3.5, requiredLanguage: 'English', requiredLanguageLevel: 'C1', applicationDeadline: '2026-11-15', applicationUrl: 'https://www.mpg.de/imprs' },
      { id: 'p-392', universityId: 'uni-174', name: 'PhD Physics', fieldOfStudy: 'Physics', degreeLevel: 'phd', languageOfInstruction: 'English', durationMonths: 48, tuitionPerYearEur: 0, minGpaRequired: 3.5, requiredLanguage: 'English', requiredLanguageLevel: 'C1', applicationDeadline: '2026-11-15', applicationUrl: 'https://www.mpg.de/imprs' },
      { id: 'p-393', universityId: 'uni-174', name: 'PhD Biology', fieldOfStudy: 'Biology', degreeLevel: 'phd', languageOfInstruction: 'English', durationMonths: 48, tuitionPerYearEur: 0, minGpaRequired: 3.5, requiredLanguage: 'English', requiredLanguageLevel: 'C1', applicationDeadline: '2026-11-15', applicationUrl: 'https://www.mpg.de/imprs' },
    ]
  },

  // ============================================
  // Additional universities for more diverse coverage
  // ============================================
  {
    id: 'uni-175', name: 'Loughborough University', country: 'Ireland', city: 'Cork',
    websiteUrl: 'https://www.ucc.ie', logoUrl: '', rankingQs: 320, rankingThe: 300,
    estimatedMonthlyLivingCostEur: 900,
    description: 'University College Cork is a world-class research university in Ireland\'s second city.',
    programs: [
      { id: 'p-394', universityId: 'uni-175', name: 'M.Sc. Computer Science', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 12, tuitionPerYearEur: 16000, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-06-30', applicationUrl: 'https://www.ucc.ie/apply' },
      { id: 'p-395', universityId: 'uni-175', name: 'M.Sc. Data Science', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 12, tuitionPerYearEur: 16000, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-06-30', applicationUrl: 'https://www.ucc.ie/apply' },
    ]
  },
  {
    id: 'uni-176', name: 'Charité – Universitätsmedizin Berlin', country: 'Germany', city: 'Berlin',
    websiteUrl: 'https://www.charite.de', logoUrl: '', rankingQs: 80, rankingThe: 70,
    estimatedMonthlyLivingCostEur: 900,
    description: 'Charité is one of Europe\'s largest university hospitals, a leading institution for medical research and education.',
    programs: [
      { id: 'p-396', universityId: 'uni-176', name: 'M.Sc. Medicine (International Health)', fieldOfStudy: 'Medicine', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 0, minGpaRequired: 3.5, requiredLanguage: 'English', requiredLanguageLevel: 'C1', applicationDeadline: '2026-05-15', applicationUrl: 'https://www.charite.de/apply' },
      { id: 'p-397', universityId: 'uni-176', name: 'M.Sc. Neuroscience', fieldOfStudy: 'Biology', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 0, minGpaRequired: 3.3, requiredLanguage: 'English', requiredLanguageLevel: 'C1', applicationDeadline: '2026-05-15', applicationUrl: 'https://www.charite.de/apply' },
    ]
  },
  {
    id: 'uni-177', name: 'Aalborg University Copenhagen', country: 'Denmark', city: 'Copenhagen',
    websiteUrl: 'https://www.aau.dk/cph', logoUrl: '', rankingQs: 330, rankingThe: 300,
    estimatedMonthlyLivingCostEur: 1100,
    description: 'AAU Copenhagen campus offers innovative, problem-based learning programs in the Danish capital.',
    programs: [
      { id: 'p-398', universityId: 'uni-177', name: 'M.Sc. Data Science', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 13500, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-03-01', applicationUrl: 'https://www.aau.dk/cph/apply' },
      { id: 'p-399', universityId: 'uni-177', name: 'M.Sc. Business Administration', fieldOfStudy: 'Business Administration', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 13500, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-03-01', applicationUrl: 'https://www.aau.dk/cph/apply' },
    ]
  },
  {
    id: 'uni-178', name: 'Warsaw School of Economics', country: 'Poland', city: 'Warsaw',
    websiteUrl: 'https://www.sgh.waw.pl', logoUrl: '', rankingQs: 400, rankingThe: 380,
    estimatedMonthlyLivingCostEur: 550,
    description: 'SGH Warsaw is Poland\'s leading economics university, a member of the CEMS global alliance.',
    programs: [
      { id: 'p-400', universityId: 'uni-178', name: 'M.Sc. Economics', fieldOfStudy: 'Economics', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 3000, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-07-15', applicationUrl: 'https://www.sgh.waw.pl/apply' },
      { id: 'p-401', universityId: 'uni-178', name: 'M.Sc. Business Administration', fieldOfStudy: 'Business Administration', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 3000, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-07-15', applicationUrl: 'https://www.sgh.waw.pl/apply' },
    ]
  },
  {
    id: 'uni-179', name: 'University of Groningen (bachelors)', country: 'Netherlands', city: 'Groningen',
    websiteUrl: 'https://www.rug.nl', logoUrl: '', rankingQs: 139, rankingThe: 120,
    estimatedMonthlyLivingCostEur: 850,
    description: 'RUG Groningen offers numerous English-taught bachelor programs in a vibrant student city.',
    programs: [
      { id: 'p-402', universityId: 'uni-179', name: 'B.Sc. Artificial Intelligence', fieldOfStudy: 'Computer Science', degreeLevel: 'bachelors', languageOfInstruction: 'English', durationMonths: 36, tuitionPerYearEur: 13000, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-05-01', applicationUrl: 'https://www.rug.nl/apply' },
      { id: 'p-403', universityId: 'uni-179', name: 'B.Sc. Economics and Business', fieldOfStudy: 'Economics', degreeLevel: 'bachelors', languageOfInstruction: 'English', durationMonths: 36, tuitionPerYearEur: 13000, minGpaRequired: 2.8, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-05-01', applicationUrl: 'https://www.rug.nl/apply' },
      { id: 'p-404', universityId: 'uni-179', name: 'B.Sc. Psychology', fieldOfStudy: 'Psychology', degreeLevel: 'bachelors', languageOfInstruction: 'English', durationMonths: 36, tuitionPerYearEur: 13000, minGpaRequired: 2.8, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-05-01', applicationUrl: 'https://www.rug.nl/apply' },
    ]
  },
  {
    id: 'uni-180', name: 'IST University of Lisbon', country: 'Portugal', city: 'Lisbon',
    websiteUrl: 'https://tecnico.ulisboa.pt', logoUrl: '', rankingQs: 250, rankingThe: 240,
    estimatedMonthlyLivingCostEur: 700,
    description: 'Instituto Superior Técnico is Portugal\'s top engineering school, part of University of Lisbon.',
    programs: [
      { id: 'p-405', universityId: 'uni-180', name: 'M.Sc. Computer Science', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 3500, minGpaRequired: 3.2, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-06-30', applicationUrl: 'https://tecnico.ulisboa.pt/apply' },
      { id: 'p-406', universityId: 'uni-180', name: 'M.Sc. Engineering', fieldOfStudy: 'Engineering', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 3500, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-06-30', applicationUrl: 'https://tecnico.ulisboa.pt/apply' },
      { id: 'p-407', universityId: 'uni-180', name: 'M.Sc. Mathematics', fieldOfStudy: 'Mathematics', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 3500, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-06-30', applicationUrl: 'https://tecnico.ulisboa.pt/apply' },
    ]
  },

  // ============================================
  // Law programs across Europe
  // ============================================
  {
    id: 'uni-181', name: 'University of Amsterdam (Law)', country: 'Netherlands', city: 'Amsterdam',
    websiteUrl: 'https://www.uva.nl', logoUrl: '', rankingQs: 55, rankingThe: 60,
    estimatedMonthlyLivingCostEur: 1100,
    description: 'UvA Law School offers internationally recognized LLM programs in the heart of Amsterdam.',
    programs: [
      { id: 'p-408', universityId: 'uni-181', name: 'LLM International and European Law', fieldOfStudy: 'Law', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 12, tuitionPerYearEur: 16000, minGpaRequired: 3.2, requiredLanguage: 'English', requiredLanguageLevel: 'C1', applicationDeadline: '2026-04-01', applicationUrl: 'https://www.uva.nl/apply' },
      { id: 'p-409', universityId: 'uni-181', name: 'LLM European Private Law', fieldOfStudy: 'Law', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 12, tuitionPerYearEur: 16000, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'C1', applicationDeadline: '2026-04-01', applicationUrl: 'https://www.uva.nl/apply' },
    ]
  },
  {
    id: 'uni-182', name: 'Leiden University (Law)', country: 'Netherlands', city: 'Leiden',
    websiteUrl: 'https://www.universiteitleiden.nl', logoUrl: '', rankingQs: 120, rankingThe: 110,
    estimatedMonthlyLivingCostEur: 950,
    description: 'Leiden Law School is the oldest law school in the Netherlands with globally respected international law programs.',
    programs: [
      { id: 'p-410', universityId: 'uni-182', name: 'LLM Public International Law', fieldOfStudy: 'Law', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 12, tuitionPerYearEur: 17500, minGpaRequired: 3.3, requiredLanguage: 'English', requiredLanguageLevel: 'C1', applicationDeadline: '2026-04-01', applicationUrl: 'https://www.universiteitleiden.nl/apply' },
      { id: 'p-411', universityId: 'uni-182', name: 'LLM European Law', fieldOfStudy: 'Law', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 12, tuitionPerYearEur: 17500, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'C1', applicationDeadline: '2026-04-01', applicationUrl: 'https://www.universiteitleiden.nl/apply' },
    ]
  },

  // ============================================
  // Education programs
  // ============================================
  {
    id: 'uni-183', name: 'University of Helsinki (Education)', country: 'Finland', city: 'Helsinki',
    websiteUrl: 'https://www.helsinki.fi', logoUrl: '', rankingQs: 107, rankingThe: 101,
    estimatedMonthlyLivingCostEur: 1000,
    description: 'University of Helsinki is Finland\'s top university, ranked #1 globally for educational research.',
    programs: [
      { id: 'p-412', universityId: 'uni-183', name: 'M.A. Education', fieldOfStudy: 'Education', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 13000, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-01-10', applicationUrl: 'https://www.helsinki.fi/apply' },
      { id: 'p-413', universityId: 'uni-183', name: 'M.Sc. Psychology', fieldOfStudy: 'Psychology', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 13000, minGpaRequired: 3.2, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-01-10', applicationUrl: 'https://www.helsinki.fi/apply' },
    ]
  },

  // ============================================
  // More diverse field coverage
  // ============================================
  {
    id: 'uni-184', name: 'TU Delft (bachelors)', country: 'Netherlands', city: 'Delft',
    websiteUrl: 'https://www.tudelft.nl', logoUrl: '', rankingQs: 47, rankingThe: 55,
    estimatedMonthlyLivingCostEur: 1000,
    description: 'TU Delft offers leading English-taught bachelor programs in science, engineering, and technology.',
    programs: [
      { id: 'p-414', universityId: 'uni-184', name: 'B.Sc. Computer Science', fieldOfStudy: 'Computer Science', degreeLevel: 'bachelors', languageOfInstruction: 'English', durationMonths: 36, tuitionPerYearEur: 13500, minGpaRequired: 3.2, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-05-01', applicationUrl: 'https://www.tudelft.nl/apply' },
      { id: 'p-415', universityId: 'uni-184', name: 'B.Sc. Aerospace Engineering', fieldOfStudy: 'Engineering', degreeLevel: 'bachelors', languageOfInstruction: 'English', durationMonths: 36, tuitionPerYearEur: 13500, minGpaRequired: 3.2, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-05-01', applicationUrl: 'https://www.tudelft.nl/apply' },
    ]
  },
  {
    id: 'uni-185', name: 'Politecnico di Milano (bachelors)', country: 'Italy', city: 'Milan',
    websiteUrl: 'https://www.polimi.it', logoUrl: '', rankingQs: 111, rankingThe: 100,
    estimatedMonthlyLivingCostEur: 950,
    description: 'Politecnico di Milano also offers English-taught bachelors in engineering and design.',
    programs: [
      { id: 'p-416', universityId: 'uni-185', name: 'B.Sc. Engineering', fieldOfStudy: 'Engineering', degreeLevel: 'bachelors', languageOfInstruction: 'English', durationMonths: 36, tuitionPerYearEur: 3900, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-02-28', applicationUrl: 'https://www.polimi.it/apply' },
      { id: 'p-417', universityId: 'uni-185', name: 'B.Sc. Architecture', fieldOfStudy: 'Architecture', degreeLevel: 'bachelors', languageOfInstruction: 'English', durationMonths: 36, tuitionPerYearEur: 3900, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-02-28', applicationUrl: 'https://www.polimi.it/apply' },
    ]
  },
  {
    id: 'uni-186', name: 'Copenhagen Business School', country: 'Denmark', city: 'Copenhagen',
    websiteUrl: 'https://www.cbs.dk', logoUrl: '', rankingQs: 200, rankingThe: 190,
    estimatedMonthlyLivingCostEur: 1100,
    description: 'CBS is one of Northern Europe\'s largest business schools and among the top-ranked worldwide.',
    programs: [
      { id: 'p-418', universityId: 'uni-186', name: 'M.Sc. Business Administration', fieldOfStudy: 'Business Administration', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 13500, minGpaRequired: 3.3, requiredLanguage: 'English', requiredLanguageLevel: 'C1', applicationDeadline: '2026-03-01', applicationUrl: 'https://www.cbs.dk/apply' },
      { id: 'p-419', universityId: 'uni-186', name: 'M.Sc. Economics', fieldOfStudy: 'Economics', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 13500, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-03-01', applicationUrl: 'https://www.cbs.dk/apply' },
    ]
  },
  {
    id: 'uni-187', name: 'Stockholm School of Economics', country: 'Sweden', city: 'Stockholm',
    websiteUrl: 'https://www.hhs.se', logoUrl: '', rankingQs: 180, rankingThe: 170,
    estimatedMonthlyLivingCostEur: 1100,
    description: 'SSE is one of Europe\'s leading business schools, known for its research and strong alumni network.',
    programs: [
      { id: 'p-420', universityId: 'uni-187', name: 'M.Sc. Economics', fieldOfStudy: 'Economics', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 0, minGpaRequired: 3.5, requiredLanguage: 'English', requiredLanguageLevel: 'C1', applicationDeadline: '2026-01-15', applicationUrl: 'https://www.hhs.se/apply' },
      { id: 'p-421', universityId: 'uni-187', name: 'M.Sc. Business Administration', fieldOfStudy: 'Business Administration', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 0, minGpaRequired: 3.5, requiredLanguage: 'English', requiredLanguageLevel: 'C1', applicationDeadline: '2026-01-15', applicationUrl: 'https://www.hhs.se/apply' },
    ]
  },
  {
    id: 'uni-188', name: 'WHU – Otto Beisheim School of Management', country: 'Germany', city: 'Vallendar',
    websiteUrl: 'https://www.whu.edu', logoUrl: '', rankingQs: 400, rankingThe: 380,
    estimatedMonthlyLivingCostEur: 800,
    description: 'WHU is one of Germany\'s most prestigious private business schools, AACSB, EQUIS, and AMBA accredited.',
    programs: [
      { id: 'p-422', universityId: 'uni-188', name: 'M.Sc. Management', fieldOfStudy: 'Business Administration', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 18, tuitionPerYearEur: 24000, minGpaRequired: 3.5, requiredLanguage: 'English', requiredLanguageLevel: 'C1', applicationDeadline: '2026-03-31', applicationUrl: 'https://www.whu.edu/apply' },
      { id: 'p-423', universityId: 'uni-188', name: 'M.Sc. Finance', fieldOfStudy: 'Economics', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 18, tuitionPerYearEur: 24000, minGpaRequired: 3.3, requiredLanguage: 'English', requiredLanguageLevel: 'C1', applicationDeadline: '2026-03-31', applicationUrl: 'https://www.whu.edu/apply' },
    ]
  },
  {
    id: 'uni-189', name: 'University of Navarra', country: 'Spain', city: 'Pamplona',
    websiteUrl: 'https://www.unav.edu', logoUrl: '', rankingQs: 250, rankingThe: 240,
    estimatedMonthlyLivingCostEur: 700,
    description: 'University of Navarra houses IESE Business School and is one of Spain\'s top private research universities.',
    programs: [
      { id: 'p-424', universityId: 'uni-189', name: 'M.Sc. Engineering', fieldOfStudy: 'Engineering', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 18, tuitionPerYearEur: 12000, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-05-15', applicationUrl: 'https://www.unav.edu/apply' },
      { id: 'p-425', universityId: 'uni-189', name: 'M.Sc. Economics', fieldOfStudy: 'Economics', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 18, tuitionPerYearEur: 12000, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-05-15', applicationUrl: 'https://www.unav.edu/apply' },
    ]
  },
  {
    id: 'uni-190', name: 'Erasmus University Rotterdam (bachelors)', country: 'Netherlands', city: 'Rotterdam',
    websiteUrl: 'https://www.eur.nl', logoUrl: '', rankingQs: 176, rankingThe: 160,
    estimatedMonthlyLivingCostEur: 950,
    description: 'EUR Rotterdam offers English-taught bachelors at one of Europe\'s top economics and business faculties.',
    programs: [
      { id: 'p-426', universityId: 'uni-190', name: 'B.Sc. Economics and Business', fieldOfStudy: 'Economics', degreeLevel: 'bachelors', languageOfInstruction: 'English', durationMonths: 36, tuitionPerYearEur: 12500, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-05-01', applicationUrl: 'https://www.eur.nl/apply' },
      { id: 'p-427', universityId: 'uni-190', name: 'B.Sc. Psychology', fieldOfStudy: 'Psychology', degreeLevel: 'bachelors', languageOfInstruction: 'English', durationMonths: 36, tuitionPerYearEur: 12500, minGpaRequired: 2.8, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-05-01', applicationUrl: 'https://www.eur.nl/apply' },
    ]
  },

  // ============================================
  // Additional: Medicine and Natural Sciences coverage
  // ============================================
  {
    id: 'uni-191', name: 'Karolinska Institutet', country: 'Sweden', city: 'Stockholm',
    websiteUrl: 'https://ki.se', logoUrl: '', rankingQs: 60, rankingThe: 45,
    estimatedMonthlyLivingCostEur: 1100,
    description: 'Karolinska is one of the world\'s leading medical universities, awarding the Nobel Prize in Physiology or Medicine.',
    programs: [
      { id: 'p-428', universityId: 'uni-191', name: 'M.Sc. Biomedicine', fieldOfStudy: 'Biology', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 18000, minGpaRequired: 3.5, requiredLanguage: 'English', requiredLanguageLevel: 'C1', applicationDeadline: '2026-01-15', applicationUrl: 'https://ki.se/apply' },
      { id: 'p-429', universityId: 'uni-191', name: 'M.Sc. Public Health', fieldOfStudy: 'Medicine', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 18000, minGpaRequired: 3.3, requiredLanguage: 'English', requiredLanguageLevel: 'C1', applicationDeadline: '2026-01-15', applicationUrl: 'https://ki.se/apply' },
    ]
  },
  {
    id: 'uni-192', name: 'University of Groningen (Medicine)', country: 'Netherlands', city: 'Groningen',
    websiteUrl: 'https://www.rug.nl', logoUrl: '', rankingQs: 139, rankingThe: 120,
    estimatedMonthlyLivingCostEur: 850,
    description: 'RUG offers excellent medicine and natural science programs in a highly livable northern Dutch city.',
    programs: [
      { id: 'p-430', universityId: 'uni-192', name: 'M.Sc. Chemistry', fieldOfStudy: 'Chemistry', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 16000, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-05-01', applicationUrl: 'https://www.rug.nl/apply' },
      { id: 'p-431', universityId: 'uni-192', name: 'M.Sc. Physics', fieldOfStudy: 'Physics', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 16000, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-05-01', applicationUrl: 'https://www.rug.nl/apply' },
    ]
  },
  {
    id: 'uni-193', name: 'Scuola Normale Superiore', country: 'Italy', city: 'Pisa',
    websiteUrl: 'https://www.sns.it', logoUrl: '', rankingQs: 200, rankingThe: 180,
    estimatedMonthlyLivingCostEur: 750,
    description: 'Scuola Normale Superiore is one of Italy\'s most prestigious universities, fully funded and highly selective.',
    programs: [
      { id: 'p-432', universityId: 'uni-193', name: 'PhD Physics', fieldOfStudy: 'Physics', degreeLevel: 'phd', languageOfInstruction: 'English', durationMonths: 48, tuitionPerYearEur: 0, minGpaRequired: 3.7, requiredLanguage: 'English', requiredLanguageLevel: 'C1', applicationDeadline: '2026-04-15', applicationUrl: 'https://www.sns.it/apply' },
      { id: 'p-433', universityId: 'uni-193', name: 'PhD Mathematics', fieldOfStudy: 'Mathematics', degreeLevel: 'phd', languageOfInstruction: 'English', durationMonths: 48, tuitionPerYearEur: 0, minGpaRequired: 3.7, requiredLanguage: 'English', requiredLanguageLevel: 'C1', applicationDeadline: '2026-04-15', applicationUrl: 'https://www.sns.it/apply' },
    ]
  },
  {
    id: 'uni-194', name: 'Wageningen University (bachelors)', country: 'Netherlands', city: 'Wageningen',
    websiteUrl: 'https://www.wur.nl', logoUrl: '', rankingQs: 115, rankingThe: 100,
    estimatedMonthlyLivingCostEur: 850,
    description: 'Wageningen is the world\'s #1 university for agriculture and forestry, offering English-taught bachelor programs.',
    programs: [
      { id: 'p-434', universityId: 'uni-194', name: 'B.Sc. Biology', fieldOfStudy: 'Biology', degreeLevel: 'bachelors', languageOfInstruction: 'English', durationMonths: 36, tuitionPerYearEur: 13000, minGpaRequired: 2.8, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-05-01', applicationUrl: 'https://www.wur.nl/apply' },
      { id: 'p-435', universityId: 'uni-194', name: 'B.Sc. Environmental Sciences', fieldOfStudy: 'Natural Sciences', degreeLevel: 'bachelors', languageOfInstruction: 'English', durationMonths: 36, tuitionPerYearEur: 13000, minGpaRequired: 2.8, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-05-01', applicationUrl: 'https://www.wur.nl/apply' },
    ]
  },

  // ============================================
  // Remaining universities to reach 200+
  // ============================================
  {
    id: 'uni-195', name: 'Ghent University (bachelors)', country: 'Belgium', city: 'Ghent',
    websiteUrl: 'https://www.ugent.be', logoUrl: '', rankingQs: 130, rankingThe: 115,
    estimatedMonthlyLivingCostEur: 850,
    description: 'Ghent University offers English-taught bachelor programs at one of Belgium\'s top research universities.',
    programs: [
      { id: 'p-436', universityId: 'uni-195', name: 'B.Sc. Engineering', fieldOfStudy: 'Engineering', degreeLevel: 'bachelors', languageOfInstruction: 'English', durationMonths: 36, tuitionPerYearEur: 6000, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-03-01', applicationUrl: 'https://www.ugent.be/apply' },
      { id: 'p-437', universityId: 'uni-195', name: 'B.Sc. Biology', fieldOfStudy: 'Biology', degreeLevel: 'bachelors', languageOfInstruction: 'English', durationMonths: 36, tuitionPerYearEur: 6000, minGpaRequired: 2.8, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-03-01', applicationUrl: 'https://www.ugent.be/apply' },
    ]
  },
  {
    id: 'uni-196', name: 'University of Turku (bachelors)', country: 'Finland', city: 'Turku',
    websiteUrl: 'https://www.utu.fi', logoUrl: '', rankingQs: 310, rankingThe: 290,
    estimatedMonthlyLivingCostEur: 800,
    description: 'University of Turku offers interdisciplinary English-taught programs in Finland\'s oldest city.',
    programs: [
      { id: 'p-438', universityId: 'uni-196', name: 'B.Sc. Computer Science', fieldOfStudy: 'Computer Science', degreeLevel: 'bachelors', languageOfInstruction: 'English', durationMonths: 36, tuitionPerYearEur: 12000, minGpaRequired: 2.8, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-01-15', applicationUrl: 'https://www.utu.fi/apply' },
      { id: 'p-439', universityId: 'uni-196', name: 'B.Sc. Education', fieldOfStudy: 'Education', degreeLevel: 'bachelors', languageOfInstruction: 'English', durationMonths: 36, tuitionPerYearEur: 12000, minGpaRequired: 2.8, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-01-15', applicationUrl: 'https://www.utu.fi/apply' },
    ]
  },
  {
    id: 'uni-197', name: 'HEC Paris', country: 'France', city: 'Paris',
    websiteUrl: 'https://www.hec.edu', logoUrl: '', rankingQs: 100, rankingThe: 90,
    estimatedMonthlyLivingCostEur: 1300,
    description: 'HEC Paris is one of the world\'s top business schools, consistently ranked #1 in Europe for management.',
    programs: [
      { id: 'p-440', universityId: 'uni-197', name: 'M.Sc. Management', fieldOfStudy: 'Business Administration', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 18, tuitionPerYearEur: 35000, minGpaRequired: 3.5, requiredLanguage: 'English', requiredLanguageLevel: 'C1', applicationDeadline: '2026-03-15', applicationUrl: 'https://www.hec.edu/apply' },
      { id: 'p-441', universityId: 'uni-197', name: 'M.Sc. Finance', fieldOfStudy: 'Economics', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 12, tuitionPerYearEur: 35000, minGpaRequired: 3.5, requiredLanguage: 'English', requiredLanguageLevel: 'C1', applicationDeadline: '2026-03-15', applicationUrl: 'https://www.hec.edu/apply' },
    ]
  },
  {
    id: 'uni-198', name: 'WU Vienna', country: 'Austria', city: 'Vienna',
    websiteUrl: 'https://www.wu.ac.at', logoUrl: '', rankingQs: 300, rankingThe: 280,
    estimatedMonthlyLivingCostEur: 900,
    description: 'WU Vienna is one of Europe\'s largest and most modern business universities, triple-accredited.',
    programs: [
      { id: 'p-442', universityId: 'uni-198', name: 'M.Sc. Economics', fieldOfStudy: 'Economics', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 1500, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-03-31', applicationUrl: 'https://www.wu.ac.at/apply' },
      { id: 'p-443', universityId: 'uni-198', name: 'M.Sc. Business Administration', fieldOfStudy: 'Business Administration', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 1500, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-03-31', applicationUrl: 'https://www.wu.ac.at/apply' },
    ]
  },
  {
    id: 'uni-199', name: 'Technical University of Eindhoven (bachelors)', country: 'Netherlands', city: 'Eindhoven',
    websiteUrl: 'https://www.tue.nl', logoUrl: '', rankingQs: 120, rankingThe: 110,
    estimatedMonthlyLivingCostEur: 900,
    description: 'TU/e Eindhoven offers English-taught bachelor programs in engineering and technology in Brainport Eindhoven.',
    programs: [
      { id: 'p-444', universityId: 'uni-199', name: 'B.Sc. Computer Science', fieldOfStudy: 'Computer Science', degreeLevel: 'bachelors', languageOfInstruction: 'English', durationMonths: 36, tuitionPerYearEur: 13000, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-05-01', applicationUrl: 'https://www.tue.nl/apply' },
      { id: 'p-445', universityId: 'uni-199', name: 'B.Sc. Electrical Engineering', fieldOfStudy: 'Engineering', degreeLevel: 'bachelors', languageOfInstruction: 'English', durationMonths: 36, tuitionPerYearEur: 13000, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-05-01', applicationUrl: 'https://www.tue.nl/apply' },
    ]
  },
  {
    id: 'uni-200', name: 'IE University', country: 'Spain', city: 'Madrid',
    websiteUrl: 'https://www.ie.edu', logoUrl: '', rankingQs: 320, rankingThe: 300,
    estimatedMonthlyLivingCostEur: 950,
    description: 'IE University is a top-ranked Spanish private university known for business, law, and technology.',
    programs: [
      { id: 'p-446', universityId: 'uni-200', name: 'M.Sc. Business Administration', fieldOfStudy: 'Business Administration', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 12, tuitionPerYearEur: 42000, minGpaRequired: 3.3, requiredLanguage: 'English', requiredLanguageLevel: 'C1', applicationDeadline: '2026-05-15', applicationUrl: 'https://www.ie.edu/apply' },
      { id: 'p-447', universityId: 'uni-200', name: 'M.Sc. Computer Science and Technology', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 12, tuitionPerYearEur: 28000, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-05-15', applicationUrl: 'https://www.ie.edu/apply' },
    ]
  },
  {
    id: 'uni-201', name: 'Università Cattolica del Sacro Cuore', country: 'Italy', city: 'Milan',
    websiteUrl: 'https://www.unicatt.it', logoUrl: '', rankingQs: 400, rankingThe: 380,
    estimatedMonthlyLivingCostEur: 950,
    description: 'Cattolica is Italy\'s largest private university with strong programs in economics, law, and psychology.',
    programs: [
      { id: 'p-448', universityId: 'uni-201', name: 'M.Sc. Economics', fieldOfStudy: 'Economics', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 9000, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-06-30', applicationUrl: 'https://www.unicatt.it/apply' },
      { id: 'p-449', universityId: 'uni-201', name: 'M.Sc. Psychology', fieldOfStudy: 'Psychology', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 9000, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-06-30', applicationUrl: 'https://www.unicatt.it/apply' },
    ]
  },
  {
    id: 'uni-202', name: 'University of Tartu (bachelors)', country: 'Estonia', city: 'Tartu',
    websiteUrl: 'https://www.ut.ee', logoUrl: '', rankingQs: 300, rankingThe: 280,
    estimatedMonthlyLivingCostEur: 600,
    description: 'University of Tartu also offers affordable English-taught bachelor programs in the digital-first Estonia.',
    programs: [
      { id: 'p-450', universityId: 'uni-202', name: 'B.Sc. Computer Science', fieldOfStudy: 'Computer Science', degreeLevel: 'bachelors', languageOfInstruction: 'English', durationMonths: 36, tuitionPerYearEur: 3500, minGpaRequired: 2.8, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-04-01', applicationUrl: 'https://www.ut.ee/apply' },
      { id: 'p-451', universityId: 'uni-202', name: 'B.A. Social Sciences', fieldOfStudy: 'Social Sciences', degreeLevel: 'bachelors', languageOfInstruction: 'English', durationMonths: 36, tuitionPerYearEur: 3500, minGpaRequired: 2.5, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-04-01', applicationUrl: 'https://www.ut.ee/apply' },
    ]
  },
  {
    id: 'uni-203', name: 'Charles University (Medicine)', country: 'Czech Republic', city: 'Prague',
    websiteUrl: 'https://cuni.cz', logoUrl: '', rankingQs: 240, rankingThe: 220,
    estimatedMonthlyLivingCostEur: 650,
    description: 'Charles University offers some of Europe\'s most sought-after English-taught medicine programs.',
    programs: [
      { id: 'p-452', universityId: 'uni-203', name: 'M.D. General Medicine', fieldOfStudy: 'Medicine', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 72, tuitionPerYearEur: 14500, minGpaRequired: 3.5, requiredLanguage: 'English', requiredLanguageLevel: 'C1', applicationDeadline: '2026-02-28', applicationUrl: 'https://cuni.cz/apply' },
      { id: 'p-453', universityId: 'uni-203', name: 'M.Sc. Psychology', fieldOfStudy: 'Psychology', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 7000, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-04-30', applicationUrl: 'https://cuni.cz/apply' },
    ]
  },
  {
    id: 'uni-204', name: 'University of Debrecen (Medicine)', country: 'Hungary', city: 'Debrecen',
    websiteUrl: 'https://www.unideb.hu', logoUrl: '', rankingQs: 550, rankingThe: 520,
    estimatedMonthlyLivingCostEur: 400,
    description: 'University of Debrecen is a popular destination for international medical students with affordable tuition.',
    programs: [
      { id: 'p-454', universityId: 'uni-204', name: 'M.D. General Medicine', fieldOfStudy: 'Medicine', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 72, tuitionPerYearEur: 8200, minGpaRequired: 3.2, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-06-15', applicationUrl: 'https://www.unideb.hu/apply' },
    ]
  },
  {
    id: 'uni-205', name: 'RWTH Aachen (bachelors)', country: 'Germany', city: 'Aachen',
    websiteUrl: 'https://www.rwth-aachen.de', logoUrl: '', rankingQs: 106, rankingThe: 90,
    estimatedMonthlyLivingCostEur: 850,
    description: 'RWTH Aachen offers tuition-free bachelor programs in Germany\'s leading technical university.',
    programs: [
      { id: 'p-455', universityId: 'uni-205', name: 'B.Sc. Computer Science', fieldOfStudy: 'Computer Science', degreeLevel: 'bachelors', languageOfInstruction: 'German', durationMonths: 36, tuitionPerYearEur: 0, minGpaRequired: 3.0, requiredLanguage: 'German', requiredLanguageLevel: 'C1', applicationDeadline: '2026-07-15', applicationUrl: 'https://www.rwth-aachen.de/apply' },
      { id: 'p-456', universityId: 'uni-205', name: 'B.Sc. Mechanical Engineering', fieldOfStudy: 'Engineering', degreeLevel: 'bachelors', languageOfInstruction: 'German', durationMonths: 36, tuitionPerYearEur: 0, minGpaRequired: 2.8, requiredLanguage: 'German', requiredLanguageLevel: 'C1', applicationDeadline: '2026-07-15', applicationUrl: 'https://www.rwth-aachen.de/apply' },
    ]
  },
  {
    id: 'uni-206', name: 'Sorbonne University (Sciences)', country: 'France', city: 'Paris',
    websiteUrl: 'https://www.sorbonne-universite.fr', logoUrl: '', rankingQs: 62, rankingThe: 55,
    estimatedMonthlyLivingCostEur: 1200,
    description: 'Sorbonne University also offers English-taught science masters and PhD programs at low fees.',
    programs: [
      { id: 'p-457', universityId: 'uni-206', name: 'M.Sc. Chemistry', fieldOfStudy: 'Chemistry', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 3770, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-04-01', applicationUrl: 'https://www.sorbonne-universite.fr/apply' },
      { id: 'p-458', universityId: 'uni-206', name: 'M.Sc. Biology', fieldOfStudy: 'Biology', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 3770, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-04-01', applicationUrl: 'https://www.sorbonne-universite.fr/apply' },
    ]
  },
  {
    id: 'uni-207', name: 'Aalto University (bachelors)', country: 'Finland', city: 'Espoo',
    websiteUrl: 'https://www.aalto.fi', logoUrl: '', rankingQs: 116, rankingThe: 105,
    estimatedMonthlyLivingCostEur: 1000,
    description: 'Aalto also offers English-taught bachelor programs combining business, art, science, and technology.',
    programs: [
      { id: 'p-459', universityId: 'uni-207', name: 'B.Sc. Computer Science', fieldOfStudy: 'Computer Science', degreeLevel: 'bachelors', languageOfInstruction: 'English', durationMonths: 36, tuitionPerYearEur: 12000, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-01-09', applicationUrl: 'https://www.aalto.fi/apply' },
      { id: 'p-460', universityId: 'uni-207', name: 'B.Sc. Business Administration', fieldOfStudy: 'Business Administration', degreeLevel: 'bachelors', languageOfInstruction: 'English', durationMonths: 36, tuitionPerYearEur: 12000, minGpaRequired: 2.8, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-01-09', applicationUrl: 'https://www.aalto.fi/apply' },
    ]
  },
  {
    id: 'uni-208', name: 'University of Barcelona (Sciences)', country: 'Spain', city: 'Barcelona',
    websiteUrl: 'https://www.ub.edu', logoUrl: '', rankingQs: 164, rankingThe: 150,
    estimatedMonthlyLivingCostEur: 900,
    description: 'UB Barcelona offers English-taught science and arts programs at Spain\'s highest-ranked university.',
    programs: [
      { id: 'p-461', universityId: 'uni-208', name: 'M.Sc. Chemistry', fieldOfStudy: 'Chemistry', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 18, tuitionPerYearEur: 5000, minGpaRequired: 2.8, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-06-15', applicationUrl: 'https://www.ub.edu/apply' },
      { id: 'p-462', universityId: 'uni-208', name: 'M.Sc. Biology', fieldOfStudy: 'Biology', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 18, tuitionPerYearEur: 5000, minGpaRequired: 2.8, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-06-15', applicationUrl: 'https://www.ub.edu/apply' },
    ]
  },
  {
    id: 'uni-209', name: 'Sapienza University (Engineering)', country: 'Italy', city: 'Rome',
    websiteUrl: 'https://www.uniroma1.it', logoUrl: '', rankingQs: 132, rankingThe: 120,
    estimatedMonthlyLivingCostEur: 850,
    description: 'Sapienza\'s engineering faculty is one of Italy\'s largest, offering fully English-taught master programs.',
    programs: [
      { id: 'p-463', universityId: 'uni-209', name: 'M.Sc. Artificial Intelligence and Robotics', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 2800, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-07-15', applicationUrl: 'https://www.uniroma1.it/apply' },
      { id: 'p-464', universityId: 'uni-209', name: 'M.Sc. Architecture', fieldOfStudy: 'Architecture', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 2800, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-07-15', applicationUrl: 'https://www.uniroma1.it/apply' },
    ]
  },
  {
    id: 'uni-210', name: 'University of Milan-Bicocca', country: 'Italy', city: 'Milan',
    websiteUrl: 'https://www.unimib.it', logoUrl: '', rankingQs: 450, rankingThe: 420,
    estimatedMonthlyLivingCostEur: 950,
    description: 'Bicocca is a modern Italian university with strengths in data science, economics, and biomedical sciences.',
    programs: [
      { id: 'p-465', universityId: 'uni-210', name: 'M.Sc. Data Science', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 3500, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-07-15', applicationUrl: 'https://www.unimib.it/apply' },
      { id: 'p-466', universityId: 'uni-210', name: 'M.Sc. Economics', fieldOfStudy: 'Economics', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 3500, minGpaRequired: 2.8, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-07-15', applicationUrl: 'https://www.unimib.it/apply' },
    ]
  },
];

export const scholarships: Scholarship[] = [
  { id: 'sch-1', name: 'DAAD Scholarship', provider: 'German Academic Exchange Service (DAAD)', type: 'stipend', amountDescription: '\u20AC934/month + travel + insurance', amountEurMonthly: 934, coverage: 'Monthly stipend of \u20AC934, travel allowance, health insurance, study and research allowance', eligibilityNationalities: 'all', eligibilityMinGpa: 3.0, eligibilityFields: 'all', eligibilityDegreeLevels: ['masters', 'phd'], eligibilityOther: 'Relevant professional experience preferred', applicationDeadline: '2026-10-15', applicationUrl: 'https://www.daad.de/scholarships', linkedUniversityIds: ['uni-1', 'uni-3', 'uni-4'] },
  { id: 'sch-2', name: 'Holland Scholarship', provider: 'Dutch Ministry of Education', type: 'partial', amountDescription: '\u20AC5,000 one-time grant', amountEurMonthly: 417, coverage: 'One-time grant of \u20AC5,000 for the first year of studies', eligibilityNationalities: 'all', eligibilityMinGpa: 3.0, eligibilityFields: 'all', eligibilityDegreeLevels: ['bachelors', 'masters'], eligibilityOther: 'Non-EEA students only', applicationDeadline: '2026-02-01', applicationUrl: 'https://www.studyinholland.nl/finances/scholarships', linkedUniversityIds: ['uni-21', 'uni-22'] },
  { id: 'sch-3', name: 'Erasmus Mundus Joint Masters', provider: 'European Commission', type: 'full_tuition', amountDescription: 'Full tuition + \u20AC1,400/month stipend', amountEurMonthly: 1400, coverage: 'Full tuition, monthly stipend, travel costs, insurance', eligibilityNationalities: 'all', eligibilityMinGpa: 3.2, eligibilityFields: 'all', eligibilityDegreeLevels: ['masters'], applicationDeadline: '2026-01-10', applicationUrl: 'https://erasmus-plus.ec.europa.eu', linkedUniversityIds: ['uni-1', 'uni-21', 'uni-36', 'uni-49'] },
  { id: 'sch-4', name: 'Stipendium Hungaricum', provider: 'Hungarian Government', type: 'full_tuition', amountDescription: 'Full tuition + \u20AC140/month + accommodation', amountEurMonthly: 140, coverage: 'Full tuition waiver, monthly stipend, dormitory accommodation', eligibilityNationalities: ['Pakistan', 'India', 'Bangladesh', 'Nigeria', 'Egypt', 'Turkey', 'Jordan', 'Kenya', 'Ghana', 'Ethiopia'], eligibilityMinGpa: 2.8, eligibilityFields: 'all', eligibilityDegreeLevels: ['bachelors', 'masters', 'phd'], applicationDeadline: '2026-01-15', applicationUrl: 'https://stipendiumhungaricum.hu', linkedUniversityIds: ['uni-81', 'uni-82'] },
  { id: 'sch-5', name: 'Swedish Institute Scholarship', provider: 'Swedish Institute', type: 'full_tuition', amountDescription: 'Full tuition + ~\u20AC900/month', amountEurMonthly: 900, coverage: 'Full tuition waiver, monthly living allowance, travel grant, insurance', eligibilityNationalities: ['Pakistan', 'India', 'Bangladesh', 'Nigeria', 'Egypt', 'Kenya', 'Ghana', 'Ethiopia', 'Turkey'], eligibilityMinGpa: 3.0, eligibilityFields: 'all', eligibilityDegreeLevels: ['masters'], eligibilityOther: 'Min 3,000 hours work experience, demonstrated leadership', applicationDeadline: '2026-02-10', applicationUrl: 'https://si.se/en/apply/scholarships', linkedUniversityIds: ['uni-36', 'uni-37'] },
  { id: 'sch-6', name: 'Deutschlandstipendium', provider: 'German Federal Government', type: 'stipend', amountDescription: '\u20AC300/month stipend', amountEurMonthly: 300, coverage: 'Monthly stipend of \u20AC300 for at least two semesters', eligibilityNationalities: 'all', eligibilityMinGpa: 3.3, eligibilityFields: 'all', eligibilityDegreeLevels: ['bachelors', 'masters'], applicationDeadline: '2026-09-30', applicationUrl: 'https://www.deutschlandstipendium.de', linkedUniversityIds: ['uni-1', 'uni-3', 'uni-4'] },
  { id: 'sch-7', name: 'OeAD Scholarship (Austria)', provider: 'Austrian Agency for International Cooperation', type: 'stipend', amountDescription: '\u20AC1,250/month stipend', amountEurMonthly: 1250, coverage: 'Monthly stipend, tuition waiver, health insurance', eligibilityNationalities: 'all', eligibilityMinGpa: 3.0, eligibilityFields: 'all', eligibilityDegreeLevels: ['masters', 'phd'], applicationDeadline: '2026-03-01', applicationUrl: 'https://oead.at/scholarships', linkedUniversityIds: ['uni-45', 'uni-46'] },
  { id: 'sch-8', name: 'ETH Zurich Excellence Scholarship', provider: 'ETH Zurich Foundation', type: 'full_tuition', amountDescription: 'Full tuition + CHF 12,000/semester', amountEurMonthly: 2000, coverage: 'Full tuition waiver plus living stipend', eligibilityNationalities: 'all', eligibilityMinGpa: 3.8, eligibilityFields: 'all', eligibilityDegreeLevels: ['masters'], eligibilityOther: 'Top 10% of graduating class', applicationDeadline: '2026-12-15', applicationUrl: 'https://ethz.ch/scholarships', linkedUniversityIds: ['uni-31'] },
  { id: 'sch-9', name: 'Politecnico di Milano Merit Scholarship', provider: 'Politecnico di Milano', type: 'partial', amountDescription: '\u20AC10,000/year tuition waiver', amountEurMonthly: 833, coverage: 'Full tuition reduction based on merit', eligibilityNationalities: 'all', eligibilityMinGpa: 3.5, eligibilityFields: ['Computer Science', 'Engineering'], eligibilityDegreeLevels: ['masters'], applicationDeadline: '2026-01-20', applicationUrl: 'https://www.polimi.it/scholarships', linkedUniversityIds: ['uni-49'] },
  { id: 'sch-10', name: 'Finnish Government Scholarship', provider: 'Finnish National Agency for Education', type: 'stipend', amountDescription: '\u20AC1,500/month stipend', amountEurMonthly: 1500, coverage: 'Monthly living allowance for the duration of studies', eligibilityNationalities: 'all', eligibilityMinGpa: 3.2, eligibilityFields: ['Computer Science', 'Engineering'], eligibilityDegreeLevels: ['masters', 'phd'], applicationDeadline: '2026-02-28', applicationUrl: 'https://www.oph.fi/en/scholarships', linkedUniversityIds: ['uni-41', 'uni-42'] },
  { id: 'sch-11', name: 'Eiffel Excellence Scholarship (France)', provider: 'French Ministry of Foreign Affairs', type: 'stipend', amountDescription: '\u20AC1,181/month stipend', amountEurMonthly: 1181, coverage: 'Monthly allowance, housing, travel, health insurance', eligibilityNationalities: 'all', eligibilityMinGpa: 3.3, eligibilityFields: 'all', eligibilityDegreeLevels: ['masters'], applicationDeadline: '2026-01-10', applicationUrl: 'https://www.campusfrance.org/eiffel', linkedUniversityIds: ['uni-55', 'uni-56', 'uni-57'] },
  { id: 'sch-12', name: 'KU Leuven Science Scholarship', provider: 'KU Leuven', type: 'partial', amountDescription: '\u20AC10,000/year scholarship', amountEurMonthly: 833, coverage: 'Partial tuition waiver and living allowance', eligibilityNationalities: 'all', eligibilityMinGpa: 3.5, eligibilityFields: ['Computer Science', 'Engineering', 'Mathematics', 'Physics'], eligibilityDegreeLevels: ['masters'], applicationDeadline: '2026-02-01', applicationUrl: 'https://www.kuleuven.be/scholarships', linkedUniversityIds: ['uni-69'] },
  { id: 'sch-13', name: 'Irish Government Scholarship', provider: 'Government of Ireland', type: 'full_tuition', amountDescription: 'Full tuition + \u20AC10,000/year stipend', amountEurMonthly: 833, coverage: 'Full tuition waiver and annual stipend', eligibilityNationalities: 'all', eligibilityMinGpa: 3.5, eligibilityFields: 'all', eligibilityDegreeLevels: ['masters', 'phd'], applicationDeadline: '2026-02-15', applicationUrl: 'https://research.ie', linkedUniversityIds: ['uni-72', 'uni-73'] },
  { id: 'sch-14', name: 'Polish National Agency Scholarship', provider: 'NAWA Poland', type: 'stipend', amountDescription: '\u20AC350/month + tuition waiver', amountEurMonthly: 350, coverage: 'Monthly stipend and tuition waiver at Polish universities', eligibilityNationalities: 'all', eligibilityMinGpa: 3.0, eligibilityFields: 'all', eligibilityDegreeLevels: ['masters', 'phd'], applicationDeadline: '2026-03-31', applicationUrl: 'https://nawa.gov.pl/en', linkedUniversityIds: ['uni-74', 'uni-75', 'uni-76'] },
  { id: 'sch-15', name: 'EPFL Excellence Fellowship', provider: 'EPFL', type: 'full_tuition', amountDescription: 'CHF 50,000/year fellowship', amountEurMonthly: 3500, coverage: 'Tuition waiver and generous living stipend', eligibilityNationalities: 'all', eligibilityMinGpa: 3.7, eligibilityFields: ['Computer Science', 'Engineering', 'Mathematics', 'Physics'], eligibilityDegreeLevels: ['masters'], eligibilityOther: 'Top of graduating class, exceptional academic record', applicationDeadline: '2026-12-15', applicationUrl: 'https://www.epfl.ch/education/fellowships', linkedUniversityIds: ['uni-32'] },
];

export const europeanCountries = [
  'Germany', 'Netherlands', 'Austria', 'Hungary', 'Czech Republic',
  'Poland', 'France', 'Italy', 'Spain', 'Sweden', 'Finland',
  'Denmark', 'Norway', 'Belgium', 'Switzerland', 'Ireland',
  'Portugal', 'Greece', 'Romania', 'Croatia', 'Estonia',
  'Lithuania', 'Latvia', 'Slovenia', 'Slovakia', 'Serbia', 'Bulgaria'
];

export const fieldsOfStudy = [
  'Computer Science', 'Engineering', 'Business Administration',
  'Medicine', 'Law', 'Arts & Humanities', 'Natural Sciences',
  'Social Sciences', 'Architecture', 'Economics', 'Mathematics',
  'Physics', 'Chemistry', 'Biology', 'Psychology', 'Education'
];

export const allNationalities = [
  'Afghanistan', 'Albania', 'Algeria', 'Argentina', 'Australia', 'Austria',
  'Bangladesh', 'Belgium', 'Brazil', 'Canada', 'China', 'Colombia',
  'Czech Republic', 'Denmark', 'Egypt', 'Ethiopia', 'Finland', 'France',
  'Germany', 'Ghana', 'Greece', 'Hungary', 'India', 'Indonesia',
  'Iran', 'Iraq', 'Ireland', 'Italy', 'Japan', 'Jordan', 'Kenya',
  'Lebanon', 'Libya', 'Malaysia', 'Mexico', 'Morocco', 'Nepal',
  'Netherlands', 'Nigeria', 'Norway', 'Pakistan', 'Palestine',
  'Philippines', 'Poland', 'Portugal', 'Romania', 'Russia',
  'Saudi Arabia', 'South Korea', 'Spain', 'Sri Lanka', 'Sudan',
  'Sweden', 'Switzerland', 'Syria', 'Tanzania', 'Thailand',
  'Tunisia', 'Turkey', 'Uganda', 'Ukraine', 'United Arab Emirates',
  'United Kingdom', 'United States', 'Vietnam', 'Yemen', 'Zimbabwe'
];

export const languages = [
  'English', 'German', 'French', 'Dutch', 'Spanish', 'Italian',
  'Swedish', 'Danish', 'Finnish', 'Norwegian', 'Polish', 'Czech',
  'Hungarian', 'Portuguese', 'Arabic', 'Turkish', 'Hindi', 'Urdu',
  'Bengali', 'Chinese'
];
