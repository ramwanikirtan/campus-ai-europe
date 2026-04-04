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
      { id: 'p-1', universityId: 'uni-1', name: 'M.Sc. Informatics', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 0, minGpaRequired: 3.5, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-10-15', applicationUrl: 'https://www.tum.de' },
      { id: 'p-2', universityId: 'uni-1', name: 'M.Sc. Data Engineering and Analytics', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 0, minGpaRequired: 3.3, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-10-15', applicationUrl: 'https://www.tum.de' },
      { id: 'p-3', universityId: 'uni-1', name: 'B.Sc. Mechanical Engineering', fieldOfStudy: 'Engineering', degreeLevel: 'bachelors', languageOfInstruction: 'German', durationMonths: 36, tuitionPerYearEur: 0, minGpaRequired: 3.0, requiredLanguage: 'German', requiredLanguageLevel: 'C1', applicationDeadline: '2026-07-15', applicationUrl: 'https://www.tum.de' },
      { id: 'p-4', universityId: 'uni-1', name: 'M.Sc. Management & Technology', fieldOfStudy: 'Business Administration', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 0, minGpaRequired: 3.2, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-10-15', applicationUrl: 'https://www.tum.de' },
    ]
  },
  {
    id: 'uni-2', name: 'Ludwig Maximilian University of Munich', country: 'Germany', city: 'Munich',
    websiteUrl: 'https://www.lmu.de', logoUrl: '', rankingQs: 59, rankingThe: 38,
    estimatedMonthlyLivingCostEur: 950,
    description: 'LMU Munich is one of Europe\'s premier academic and research institutions, with a 500-year tradition of excellence.',
    programs: [
      { id: 'p-5', universityId: 'uni-2', name: 'M.Sc. Computer Science', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 0, minGpaRequired: 3.3, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-07-15', applicationUrl: 'https://www.lmu.de' },
      { id: 'p-6', universityId: 'uni-2', name: 'M.Sc. Economics', fieldOfStudy: 'Economics', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 0, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-07-15', applicationUrl: 'https://www.lmu.de' },
      { id: 'p-7', universityId: 'uni-2', name: 'M.Sc. Physics', fieldOfStudy: 'Physics', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 0, minGpaRequired: 3.2, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-07-15', applicationUrl: 'https://www.lmu.de' },
    ]
  },
  {
    id: 'uni-3', name: 'RWTH Aachen University', country: 'Germany', city: 'Aachen',
    websiteUrl: 'https://www.rwth-aachen.de', logoUrl: '', rankingQs: 106, rankingThe: 90,
    estimatedMonthlyLivingCostEur: 850,
    description: 'RWTH Aachen is Germany\'s largest technical university, known for engineering and strong industry connections.',
    programs: [
      { id: 'p-8', universityId: 'uni-3', name: 'M.Sc. Computer Science', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 0, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-03-01', applicationUrl: 'https://www.rwth-aachen.de' },
      { id: 'p-9', universityId: 'uni-3', name: 'M.Sc. Electrical Engineering', fieldOfStudy: 'Engineering', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 0, minGpaRequired: 2.8, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-03-01', applicationUrl: 'https://www.rwth-aachen.de' },
      { id: 'p-10', universityId: 'uni-3', name: 'M.Sc. Mechanical Engineering', fieldOfStudy: 'Engineering', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 0, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-03-01', applicationUrl: 'https://www.rwth-aachen.de' },
    ]
  },
  {
    id: 'uni-4', name: 'Technical University of Berlin', country: 'Germany', city: 'Berlin',
    websiteUrl: 'https://www.tu.berlin', logoUrl: '', rankingQs: 154, rankingThe: 140,
    estimatedMonthlyLivingCostEur: 900,
    description: 'TU Berlin is a research university in the heart of Berlin with strong international programs in engineering and technology.',
    programs: [
      { id: 'p-11', universityId: 'uni-4', name: 'M.Sc. Computer Science', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 0, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-12-15', applicationUrl: 'https://www.tu.berlin' },
      { id: 'p-12', universityId: 'uni-4', name: 'B.Sc. Computer Science', fieldOfStudy: 'Computer Science', degreeLevel: 'bachelors', languageOfInstruction: 'German', durationMonths: 36, tuitionPerYearEur: 0, minGpaRequired: 2.8, requiredLanguage: 'German', requiredLanguageLevel: 'C1', applicationDeadline: '2026-07-15', applicationUrl: 'https://www.tu.berlin' },
      { id: 'p-13', universityId: 'uni-4', name: 'M.Sc. Industrial Engineering', fieldOfStudy: 'Engineering', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 0, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-12-15', applicationUrl: 'https://www.tu.berlin' },
    ]
  },
  {
    id: 'uni-5', name: 'Heidelberg University', country: 'Germany', city: 'Heidelberg',
    websiteUrl: 'https://www.uni-heidelberg.de', logoUrl: '', rankingQs: 65, rankingThe: 47,
    estimatedMonthlyLivingCostEur: 850,
    description: 'Heidelberg is Germany\'s oldest university (1386), a research-intensive institution strong in natural sciences and medicine.',
    programs: [
      { id: 'p-14', universityId: 'uni-5', name: 'M.Sc. Physics', fieldOfStudy: 'Physics', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 0, minGpaRequired: 3.2, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-07-15', applicationUrl: 'https://www.uni-heidelberg.de' },
      { id: 'p-15', universityId: 'uni-5', name: 'M.Sc. Mathematics', fieldOfStudy: 'Mathematics', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 0, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-07-15', applicationUrl: 'https://www.uni-heidelberg.de' },
      { id: 'p-16', universityId: 'uni-5', name: 'M.Sc. Biology', fieldOfStudy: 'Biology', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 0, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-07-15', applicationUrl: 'https://www.uni-heidelberg.de' },
    ]
  },
  {
    id: 'uni-6', name: 'Humboldt University of Berlin', country: 'Germany', city: 'Berlin',
    websiteUrl: 'https://www.hu-berlin.de', logoUrl: '', rankingQs: 120, rankingThe: 87,
    estimatedMonthlyLivingCostEur: 900,
    description: 'Humboldt University is one of Berlin\'s oldest universities, renowned for arts, humanities, social sciences, and natural sciences.',
    programs: [
      { id: 'p-17', universityId: 'uni-6', name: 'M.A. Social Sciences', fieldOfStudy: 'Social Sciences', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 0, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-07-15', applicationUrl: 'https://www.hu-berlin.de' },
      { id: 'p-18', universityId: 'uni-6', name: 'M.Sc. Economics', fieldOfStudy: 'Economics', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 0, minGpaRequired: 3.2, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-07-15', applicationUrl: 'https://www.hu-berlin.de' },
    ]
  },
  {
    id: 'uni-7', name: 'Free University of Berlin', country: 'Germany', city: 'Berlin',
    websiteUrl: 'https://www.fu-berlin.de', logoUrl: '', rankingQs: 118, rankingThe: 91,
    estimatedMonthlyLivingCostEur: 900,
    description: 'Freie Universität Berlin excels in humanities, social sciences, and natural sciences with a strong international focus.',
    programs: [
      { id: 'p-19', universityId: 'uni-7', name: 'M.Sc. Computer Science', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 0, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-07-15', applicationUrl: 'https://www.fu-berlin.de' },
      { id: 'p-20', universityId: 'uni-7', name: 'M.A. Political Science', fieldOfStudy: 'Social Sciences', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 0, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-07-15', applicationUrl: 'https://www.fu-berlin.de' },
    ]
  },
  {
    id: 'uni-8', name: 'University of Freiburg', country: 'Germany', city: 'Freiburg',
    websiteUrl: 'https://www.uni-freiburg.de', logoUrl: '', rankingQs: 189, rankingThe: 138,
    estimatedMonthlyLivingCostEur: 800,
    description: 'University of Freiburg is one of Germany\'s oldest and most prestigious universities, located in the sunny Black Forest region.',
    programs: [
      { id: 'p-21', universityId: 'uni-8', name: 'M.Sc. Computer Science', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 0, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-07-15', applicationUrl: 'https://www.uni-freiburg.de' },
      { id: 'p-22', universityId: 'uni-8', name: 'M.Sc. Biology', fieldOfStudy: 'Biology', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 0, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-07-15', applicationUrl: 'https://www.uni-freiburg.de' },
      { id: 'p-23', universityId: 'uni-8', name: 'M.Sc. Chemistry', fieldOfStudy: 'Chemistry', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 0, minGpaRequired: 2.8, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-07-15', applicationUrl: 'https://www.uni-freiburg.de' },
    ]
  },
  {
    id: 'uni-9', name: 'University of Göttingen', country: 'Germany', city: 'Göttingen',
    websiteUrl: 'https://www.uni-goettingen.de', logoUrl: '', rankingQs: 233, rankingThe: 180,
    estimatedMonthlyLivingCostEur: 750,
    description: 'Georg-August-Universität Göttingen is a public research university with 45 Nobel Prize laureates among its alumni and faculty.',
    programs: [
      { id: 'p-24', universityId: 'uni-9', name: 'M.Sc. Mathematics', fieldOfStudy: 'Mathematics', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 0, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-07-15', applicationUrl: 'https://www.uni-goettingen.de' },
      { id: 'p-25', universityId: 'uni-9', name: 'M.Sc. Physics', fieldOfStudy: 'Physics', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 0, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-07-15', applicationUrl: 'https://www.uni-goettingen.de' },
      { id: 'p-26', universityId: 'uni-9', name: 'M.Sc. Economics', fieldOfStudy: 'Economics', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 0, minGpaRequired: 2.8, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-07-15', applicationUrl: 'https://www.uni-goettingen.de' },
    ]
  },
  {
    id: 'uni-10', name: 'University of Stuttgart', country: 'Germany', city: 'Stuttgart',
    websiteUrl: 'https://www.uni-stuttgart.de', logoUrl: '', rankingQs: 285, rankingThe: 250,
    estimatedMonthlyLivingCostEur: 850,
    description: 'University of Stuttgart is a leading technical university in Germany\'s automotive heartland with strong ties to industry.',
    programs: [
      { id: 'p-27', universityId: 'uni-10', name: 'M.Sc. Computer Science', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 0, minGpaRequired: 2.8, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-07-15', applicationUrl: 'https://www.uni-stuttgart.de' },
      { id: 'p-28', universityId: 'uni-10', name: 'M.Sc. Automotive Engineering', fieldOfStudy: 'Engineering', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 0, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-07-15', applicationUrl: 'https://www.uni-stuttgart.de' },
    ]
  },
  {
    id: 'uni-11', name: 'Karlsruhe Institute of Technology', country: 'Germany', city: 'Karlsruhe',
    websiteUrl: 'https://www.kit.edu', logoUrl: '', rankingQs: 119, rankingThe: 107,
    estimatedMonthlyLivingCostEur: 800,
    description: 'KIT is a national research center and technical university, one of Germany\'s Universities of Excellence.',
    programs: [
      { id: 'p-29', universityId: 'uni-11', name: 'M.Sc. Computer Science', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 0, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-07-15', applicationUrl: 'https://www.kit.edu' },
      { id: 'p-30', universityId: 'uni-11', name: 'M.Sc. Mechanical Engineering', fieldOfStudy: 'Engineering', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 0, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-07-15', applicationUrl: 'https://www.kit.edu' },
      { id: 'p-31', universityId: 'uni-11', name: 'M.Sc. Mathematics', fieldOfStudy: 'Mathematics', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 0, minGpaRequired: 2.8, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-07-15', applicationUrl: 'https://www.kit.edu' },
    ]
  },
  {
    id: 'uni-12', name: 'TU Dresden', country: 'Germany', city: 'Dresden',
    websiteUrl: 'https://tu-dresden.de', logoUrl: '', rankingQs: 173, rankingThe: 155,
    estimatedMonthlyLivingCostEur: 700,
    description: 'TU Dresden is one of eleven German Universities of Excellence and the largest university in Saxony.',
    programs: [
      { id: 'p-32', universityId: 'uni-12', name: 'M.Sc. Computer Science', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 0, minGpaRequired: 2.8, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-06-15', applicationUrl: 'https://tu-dresden.de' },
      { id: 'p-33', universityId: 'uni-12', name: 'M.Sc. Electrical Engineering', fieldOfStudy: 'Engineering', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 0, minGpaRequired: 2.8, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-06-15', applicationUrl: 'https://tu-dresden.de' },
    ]
  },
  {
    id: 'uni-13', name: 'TU Darmstadt', country: 'Germany', city: 'Darmstadt',
    websiteUrl: 'https://www.tu-darmstadt.de', logoUrl: '', rankingQs: 260, rankingThe: 230,
    estimatedMonthlyLivingCostEur: 850,
    description: 'TU Darmstadt is a leading technical university known for engineering, computer science, and cybersecurity research.',
    programs: [
      { id: 'p-34', universityId: 'uni-13', name: 'M.Sc. Computer Science', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 0, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-07-15', applicationUrl: 'https://www.tu-darmstadt.de' },
      { id: 'p-35', universityId: 'uni-13', name: 'M.Sc. IT Security', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 0, minGpaRequired: 3.2, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-07-15', applicationUrl: 'https://www.tu-darmstadt.de' },
    ]
  },
  {
    id: 'uni-14', name: 'University of Bonn', country: 'Germany', city: 'Bonn',
    websiteUrl: 'https://www.uni-bonn.de', logoUrl: '', rankingQs: 200, rankingThe: 170,
    estimatedMonthlyLivingCostEur: 820,
    description: 'University of Bonn is a University of Excellence known for mathematics, economics, and natural sciences.',
    programs: [
      { id: 'p-36', universityId: 'uni-14', name: 'M.Sc. Mathematics', fieldOfStudy: 'Mathematics', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 0, minGpaRequired: 3.2, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-07-15', applicationUrl: 'https://www.uni-bonn.de' },
      { id: 'p-37', universityId: 'uni-14', name: 'M.Sc. Economics', fieldOfStudy: 'Economics', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 0, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-07-15', applicationUrl: 'https://www.uni-bonn.de' },
    ]
  },
  {
    id: 'uni-15', name: 'University of Hamburg', country: 'Germany', city: 'Hamburg',
    websiteUrl: 'https://www.uni-hamburg.de', logoUrl: '', rankingQs: 228, rankingThe: 195,
    estimatedMonthlyLivingCostEur: 900,
    description: 'University of Hamburg is the largest research university in Northern Germany with a broad range of subjects.',
    programs: [
      { id: 'p-38', universityId: 'uni-15', name: 'M.Sc. Computer Science', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 0, minGpaRequired: 2.8, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-07-15', applicationUrl: 'https://www.uni-hamburg.de' },
      { id: 'p-39', universityId: 'uni-15', name: 'M.A. Economics', fieldOfStudy: 'Economics', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 0, minGpaRequired: 2.8, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-07-15', applicationUrl: 'https://www.uni-hamburg.de' },
      { id: 'p-40', universityId: 'uni-15', name: 'B.Sc. Business Administration', fieldOfStudy: 'Business Administration', degreeLevel: 'bachelors', languageOfInstruction: 'German', durationMonths: 36, tuitionPerYearEur: 0, minGpaRequired: 2.5, requiredLanguage: 'German', requiredLanguageLevel: 'C1', applicationDeadline: '2026-07-15', applicationUrl: 'https://www.uni-hamburg.de' },
    ]
  },
  {
    id: 'uni-16', name: 'University of Tübingen', country: 'Germany', city: 'Tübingen',
    websiteUrl: 'https://uni-tuebingen.de', logoUrl: '', rankingQs: 213, rankingThe: 145,
    estimatedMonthlyLivingCostEur: 780,
    description: 'University of Tübingen is an Excellence University especially strong in AI, neuroscience, and machine learning research.',
    programs: [
      { id: 'p-41', universityId: 'uni-16', name: 'M.Sc. Machine Learning', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 0, minGpaRequired: 3.3, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-06-15', applicationUrl: 'https://uni-tuebingen.de' },
      { id: 'p-42', universityId: 'uni-16', name: 'M.Sc. Psychology', fieldOfStudy: 'Psychology', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 0, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-06-15', applicationUrl: 'https://uni-tuebingen.de' },
    ]
  },
  {
    id: 'uni-17', name: 'University of Mannheim', country: 'Germany', city: 'Mannheim',
    websiteUrl: 'https://www.uni-mannheim.de', logoUrl: '', rankingQs: 350, rankingThe: 300,
    estimatedMonthlyLivingCostEur: 800,
    description: 'University of Mannheim is Germany\'s top-ranked business school, known for economics and social sciences.',
    programs: [
      { id: 'p-43', universityId: 'uni-17', name: 'M.Sc. Business Administration', fieldOfStudy: 'Business Administration', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 0, minGpaRequired: 3.3, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-05-31', applicationUrl: 'https://www.uni-mannheim.de' },
      { id: 'p-44', universityId: 'uni-17', name: 'M.Sc. Economics', fieldOfStudy: 'Economics', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 0, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-05-31', applicationUrl: 'https://www.uni-mannheim.de' },
    ]
  },
  {
    id: 'uni-18', name: 'University of Cologne', country: 'Germany', city: 'Cologne',
    websiteUrl: 'https://www.uni-koeln.de', logoUrl: '', rankingQs: 308, rankingThe: 270,
    estimatedMonthlyLivingCostEur: 850,
    description: 'University of Cologne is one of the oldest universities in Europe with a strong economics faculty.',
    programs: [
      { id: 'p-45', universityId: 'uni-18', name: 'M.Sc. Economics', fieldOfStudy: 'Economics', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 0, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-07-15', applicationUrl: 'https://www.uni-koeln.de' },
      { id: 'p-46', universityId: 'uni-18', name: 'M.Sc. Business Administration', fieldOfStudy: 'Business Administration', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 0, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-07-15', applicationUrl: 'https://www.uni-koeln.de' },
      { id: 'p-47', universityId: 'uni-18', name: 'LL.M. European Law', fieldOfStudy: 'Law', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 12, tuitionPerYearEur: 0, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'C1', applicationDeadline: '2026-07-15', applicationUrl: 'https://www.uni-koeln.de' },
    ]
  },
  {
    id: 'uni-19', name: 'FAU Erlangen-Nuremberg', country: 'Germany', city: 'Erlangen',
    websiteUrl: 'https://www.fau.de', logoUrl: '', rankingQs: 280, rankingThe: 240,
    estimatedMonthlyLivingCostEur: 750,
    description: 'FAU is one of Germany\'s largest universities with strong engineering, natural sciences, and medical faculties.',
    programs: [
      { id: 'p-48', universityId: 'uni-19', name: 'M.Sc. Computer Science', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 0, minGpaRequired: 2.8, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-07-15', applicationUrl: 'https://www.fau.de' },
      { id: 'p-49', universityId: 'uni-19', name: 'M.Sc. Medical Engineering', fieldOfStudy: 'Engineering', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 0, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-07-15', applicationUrl: 'https://www.fau.de' },
    ]
  },
  {
    id: 'uni-20', name: 'University of Würzburg', country: 'Germany', city: 'Würzburg',
    websiteUrl: 'https://www.uni-wuerzburg.de', logoUrl: '', rankingQs: 400, rankingThe: 350,
    estimatedMonthlyLivingCostEur: 720,
    description: 'University of Würzburg, founded in 1402, is known for natural sciences and was the workplace of multiple Nobel laureates.',
    programs: [
      { id: 'p-50', universityId: 'uni-20', name: 'M.Sc. Physics', fieldOfStudy: 'Physics', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 0, minGpaRequired: 2.8, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-07-15', applicationUrl: 'https://www.uni-wuerzburg.de' },
      { id: 'p-51', universityId: 'uni-20', name: 'M.Sc. Chemistry', fieldOfStudy: 'Chemistry', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 0, minGpaRequired: 2.8, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-07-15', applicationUrl: 'https://www.uni-wuerzburg.de' },
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
      { id: 'p-52', universityId: 'uni-21', name: 'M.Sc. Computer Science', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 2314, minGpaRequired: 3.3, requiredLanguage: 'English', requiredLanguageLevel: 'C1', applicationDeadline: '2026-12-01', applicationUrl: 'https://www.tudelft.nl' },
      { id: 'p-53', universityId: 'uni-21', name: 'M.Sc. Aerospace Engineering', fieldOfStudy: 'Engineering', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 2314, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'C1', applicationDeadline: '2026-12-01', applicationUrl: 'https://www.tudelft.nl' },
      { id: 'p-54', universityId: 'uni-21', name: 'M.Sc. Architecture', fieldOfStudy: 'Architecture', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 2314, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'C1', applicationDeadline: '2026-12-01', applicationUrl: 'https://www.tudelft.nl' },
    ]
  },
  {
    id: 'uni-22', name: 'University of Amsterdam', country: 'Netherlands', city: 'Amsterdam',
    websiteUrl: 'https://www.uva.nl', logoUrl: '', rankingQs: 53, rankingThe: 60,
    estimatedMonthlyLivingCostEur: 1200,
    description: 'The University of Amsterdam is the largest university in the Netherlands, known for AI research and social sciences.',
    programs: [
      { id: 'p-55', universityId: 'uni-22', name: 'M.Sc. Artificial Intelligence', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 2314, minGpaRequired: 3.4, requiredLanguage: 'English', requiredLanguageLevel: 'C1', applicationDeadline: '2026-12-15', applicationUrl: 'https://www.uva.nl' },
      { id: 'p-56', universityId: 'uni-22', name: 'M.Sc. Business Administration', fieldOfStudy: 'Business Administration', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 12, tuitionPerYearEur: 2314, minGpaRequired: 3.2, requiredLanguage: 'English', requiredLanguageLevel: 'C1', applicationDeadline: '2026-11-01', applicationUrl: 'https://www.uva.nl' },
      { id: 'p-57', universityId: 'uni-22', name: 'M.Sc. Economics', fieldOfStudy: 'Economics', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 12, tuitionPerYearEur: 2314, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'C1', applicationDeadline: '2026-11-01', applicationUrl: 'https://www.uva.nl' },
      { id: 'p-58', universityId: 'uni-22', name: 'LL.M. International Law', fieldOfStudy: 'Law', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 12, tuitionPerYearEur: 2314, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'C1', applicationDeadline: '2026-06-01', applicationUrl: 'https://www.uva.nl' },
    ]
  },
  {
    id: 'uni-23', name: 'Eindhoven University of Technology', country: 'Netherlands', city: 'Eindhoven',
    websiteUrl: 'https://www.tue.nl', logoUrl: '', rankingQs: 124, rankingThe: 115,
    estimatedMonthlyLivingCostEur: 1000,
    description: 'TU/e is a research university specializing in engineering science & technology with strong industry ties.',
    programs: [
      { id: 'p-59', universityId: 'uni-23', name: 'M.Sc. Computer Science', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 2314, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-04-01', applicationUrl: 'https://www.tue.nl' },
      { id: 'p-60', universityId: 'uni-23', name: 'M.Sc. Data Science', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 2314, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-04-01', applicationUrl: 'https://www.tue.nl' },
      { id: 'p-61', universityId: 'uni-23', name: 'M.Sc. Electrical Engineering', fieldOfStudy: 'Engineering', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 2314, minGpaRequired: 2.8, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-04-01', applicationUrl: 'https://www.tue.nl' },
    ]
  },
  {
    id: 'uni-24', name: 'Leiden University', country: 'Netherlands', city: 'Leiden',
    websiteUrl: 'https://www.universiteitleiden.nl', logoUrl: '', rankingQs: 126, rankingThe: 77,
    estimatedMonthlyLivingCostEur: 1050,
    description: 'Leiden University is the oldest university in the Netherlands (1575), known for law, political science, and humanities.',
    programs: [
      { id: 'p-62', universityId: 'uni-24', name: 'M.Sc. Computer Science', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 2314, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'C1', applicationDeadline: '2026-04-01', applicationUrl: 'https://www.universiteitleiden.nl' },
      { id: 'p-63', universityId: 'uni-24', name: 'LL.M. Public International Law', fieldOfStudy: 'Law', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 12, tuitionPerYearEur: 2314, minGpaRequired: 3.2, requiredLanguage: 'English', requiredLanguageLevel: 'C1', applicationDeadline: '2026-04-01', applicationUrl: 'https://www.universiteitleiden.nl' },
    ]
  },
  {
    id: 'uni-25', name: 'Utrecht University', country: 'Netherlands', city: 'Utrecht',
    websiteUrl: 'https://www.uu.nl', logoUrl: '', rankingQs: 107, rankingThe: 66,
    estimatedMonthlyLivingCostEur: 1050,
    description: 'Utrecht University is one of Europe\'s leading research universities, strong in geosciences, humanities, and life sciences.',
    programs: [
      { id: 'p-64', universityId: 'uni-25', name: 'M.Sc. Artificial Intelligence', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 2314, minGpaRequired: 3.2, requiredLanguage: 'English', requiredLanguageLevel: 'C1', applicationDeadline: '2026-04-01', applicationUrl: 'https://www.uu.nl' },
      { id: 'p-65', universityId: 'uni-25', name: 'M.Sc. Economics', fieldOfStudy: 'Economics', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 12, tuitionPerYearEur: 2314, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'C1', applicationDeadline: '2026-04-01', applicationUrl: 'https://www.uu.nl' },
    ]
  },
  {
    id: 'uni-26', name: 'University of Groningen', country: 'Netherlands', city: 'Groningen',
    websiteUrl: 'https://www.rug.nl', logoUrl: '', rankingQs: 139, rankingThe: 104,
    estimatedMonthlyLivingCostEur: 900,
    description: 'University of Groningen is a top-100 research university with affordable living costs in Northern Netherlands.',
    programs: [
      { id: 'p-66', universityId: 'uni-26', name: 'M.Sc. Computing Science', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 2314, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-05-01', applicationUrl: 'https://www.rug.nl' },
      { id: 'p-67', universityId: 'uni-26', name: 'M.Sc. Business Administration', fieldOfStudy: 'Business Administration', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 12, tuitionPerYearEur: 2314, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-05-01', applicationUrl: 'https://www.rug.nl' },
      { id: 'p-68', universityId: 'uni-26', name: 'M.Sc. Psychology', fieldOfStudy: 'Psychology', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 12, tuitionPerYearEur: 2314, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-05-01', applicationUrl: 'https://www.rug.nl' },
    ]
  },
  {
    id: 'uni-27', name: 'Erasmus University Rotterdam', country: 'Netherlands', city: 'Rotterdam',
    websiteUrl: 'https://www.eur.nl', logoUrl: '', rankingQs: 176, rankingThe: 72,
    estimatedMonthlyLivingCostEur: 1050,
    description: 'Erasmus University is famous for its Rotterdam School of Management (RSM), one of Europe\'s top business schools.',
    programs: [
      { id: 'p-69', universityId: 'uni-27', name: 'M.Sc. Business Administration', fieldOfStudy: 'Business Administration', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 12, tuitionPerYearEur: 2314, minGpaRequired: 3.3, requiredLanguage: 'English', requiredLanguageLevel: 'C1', applicationDeadline: '2026-04-15', applicationUrl: 'https://www.eur.nl' },
      { id: 'p-70', universityId: 'uni-27', name: 'M.Sc. Economics', fieldOfStudy: 'Economics', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 12, tuitionPerYearEur: 2314, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'C1', applicationDeadline: '2026-04-15', applicationUrl: 'https://www.eur.nl' },
    ]
  },
  {
    id: 'uni-28', name: 'University of Twente', country: 'Netherlands', city: 'Enschede',
    websiteUrl: 'https://www.utwente.nl', logoUrl: '', rankingQs: 210, rankingThe: 184,
    estimatedMonthlyLivingCostEur: 850,
    description: 'University of Twente is a technical university with a campus-based experience, known for nanotechnology and engineering.',
    programs: [
      { id: 'p-71', universityId: 'uni-28', name: 'M.Sc. Computer Science', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 2314, minGpaRequired: 2.8, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-05-01', applicationUrl: 'https://www.utwente.nl' },
      { id: 'p-72', universityId: 'uni-28', name: 'M.Sc. Engineering', fieldOfStudy: 'Engineering', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 2314, minGpaRequired: 2.8, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-05-01', applicationUrl: 'https://www.utwente.nl' },
    ]
  },
  {
    id: 'uni-29', name: 'Vrije Universiteit Amsterdam', country: 'Netherlands', city: 'Amsterdam',
    websiteUrl: 'https://vu.nl', logoUrl: '', rankingQs: 207, rankingThe: 120,
    estimatedMonthlyLivingCostEur: 1200,
    description: 'VU Amsterdam is a public research university in Amsterdam known for its diverse community and strong research.',
    programs: [
      { id: 'p-73', universityId: 'uni-29', name: 'M.Sc. Computer Science', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 2314, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-04-01', applicationUrl: 'https://vu.nl' },
      { id: 'p-74', universityId: 'uni-29', name: 'M.Sc. Business Analytics', fieldOfStudy: 'Business Administration', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 2314, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-04-01', applicationUrl: 'https://vu.nl' },
    ]
  },
  {
    id: 'uni-30', name: 'Wageningen University', country: 'Netherlands', city: 'Wageningen',
    websiteUrl: 'https://www.wur.nl', logoUrl: '', rankingQs: 151, rankingThe: 59,
    estimatedMonthlyLivingCostEur: 900,
    description: 'Wageningen is the #1 university worldwide for agriculture and forestry, and strong in life sciences.',
    programs: [
      { id: 'p-75', universityId: 'uni-30', name: 'M.Sc. Biology', fieldOfStudy: 'Biology', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 2314, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-05-01', applicationUrl: 'https://www.wur.nl' },
      { id: 'p-76', universityId: 'uni-30', name: 'M.Sc. Environmental Sciences', fieldOfStudy: 'Natural Sciences', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 2314, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-05-01', applicationUrl: 'https://www.wur.nl' },
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
      { id: 'p-77', universityId: 'uni-31', name: 'M.Sc. Computer Science', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 1460, minGpaRequired: 3.7, requiredLanguage: 'English', requiredLanguageLevel: 'C1', applicationDeadline: '2026-12-15', applicationUrl: 'https://ethz.ch' },
      { id: 'p-78', universityId: 'uni-31', name: 'M.Sc. Physics', fieldOfStudy: 'Physics', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 1460, minGpaRequired: 3.5, requiredLanguage: 'English', requiredLanguageLevel: 'C1', applicationDeadline: '2026-12-15', applicationUrl: 'https://ethz.ch' },
      { id: 'p-79', universityId: 'uni-31', name: 'M.Sc. Mechanical Engineering', fieldOfStudy: 'Engineering', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 1460, minGpaRequired: 3.5, requiredLanguage: 'English', requiredLanguageLevel: 'C1', applicationDeadline: '2026-12-15', applicationUrl: 'https://ethz.ch' },
    ]
  },
  {
    id: 'uni-32', name: 'EPFL', country: 'Switzerland', city: 'Lausanne',
    websiteUrl: 'https://www.epfl.ch', logoUrl: '', rankingQs: 12, rankingThe: 19,
    estimatedMonthlyLivingCostEur: 1700,
    description: 'EPFL is a world-renowned Swiss technical university on the shores of Lake Geneva, strong in all STEM fields.',
    programs: [
      { id: 'p-80', universityId: 'uni-32', name: 'M.Sc. Computer Science', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 1460, minGpaRequired: 3.5, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-12-15', applicationUrl: 'https://www.epfl.ch' },
      { id: 'p-81', universityId: 'uni-32', name: 'M.Sc. Data Science', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 1460, minGpaRequired: 3.5, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-12-15', applicationUrl: 'https://www.epfl.ch' },
    ]
  },
  {
    id: 'uni-33', name: 'University of Zurich', country: 'Switzerland', city: 'Zurich',
    websiteUrl: 'https://www.uzh.ch', logoUrl: '', rankingQs: 83, rankingThe: 80,
    estimatedMonthlyLivingCostEur: 1800,
    description: 'University of Zurich is the largest university in Switzerland with strengths in finance, law, and life sciences.',
    programs: [
      { id: 'p-82', universityId: 'uni-33', name: 'M.Sc. Economics', fieldOfStudy: 'Economics', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 1800, minGpaRequired: 3.2, requiredLanguage: 'English', requiredLanguageLevel: 'C1', applicationDeadline: '2026-12-15', applicationUrl: 'https://www.uzh.ch' },
      { id: 'p-83', universityId: 'uni-33', name: 'LL.M. International Law', fieldOfStudy: 'Law', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 12, tuitionPerYearEur: 1800, minGpaRequired: 3.3, requiredLanguage: 'English', requiredLanguageLevel: 'C1', applicationDeadline: '2026-02-28', applicationUrl: 'https://www.uzh.ch' },
    ]
  },
  {
    id: 'uni-34', name: 'University of Basel', country: 'Switzerland', city: 'Basel',
    websiteUrl: 'https://www.unibas.ch', logoUrl: '', rankingQs: 141, rankingThe: 101,
    estimatedMonthlyLivingCostEur: 1600,
    description: 'University of Basel is Switzerland\'s oldest university, strong in biomedical research and the pharma industry hub.',
    programs: [
      { id: 'p-84', universityId: 'uni-34', name: 'M.Sc. Computer Science', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 1600, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-04-30', applicationUrl: 'https://www.unibas.ch' },
      { id: 'p-85', universityId: 'uni-34', name: 'M.Sc. Chemistry', fieldOfStudy: 'Chemistry', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 1600, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-04-30', applicationUrl: 'https://www.unibas.ch' },
    ]
  },
  {
    id: 'uni-35', name: 'University of Bern', country: 'Switzerland', city: 'Bern',
    websiteUrl: 'https://www.unibe.ch', logoUrl: '', rankingQs: 127, rankingThe: 98,
    estimatedMonthlyLivingCostEur: 1500,
    description: 'University of Bern is located in the Swiss capital, known for space research, climate science, and medicine.',
    programs: [
      { id: 'p-86', universityId: 'uni-35', name: 'M.Sc. Physics', fieldOfStudy: 'Physics', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 1500, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-04-30', applicationUrl: 'https://www.unibe.ch' },
      { id: 'p-87', universityId: 'uni-35', name: 'M.Sc. Biology', fieldOfStudy: 'Biology', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 1500, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-04-30', applicationUrl: 'https://www.unibe.ch' },
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
      { id: 'p-88', universityId: 'uni-36', name: 'M.Sc. Computer Science', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 0, minGpaRequired: 3.2, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-01-15', applicationUrl: 'https://www.kth.se' },
      { id: 'p-89', universityId: 'uni-36', name: 'M.Sc. Machine Learning', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 0, minGpaRequired: 3.3, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-01-15', applicationUrl: 'https://www.kth.se' },
      { id: 'p-90', universityId: 'uni-36', name: 'M.Sc. Electrical Engineering', fieldOfStudy: 'Engineering', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 0, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-01-15', applicationUrl: 'https://www.kth.se' },
    ]
  },
  {
    id: 'uni-37', name: 'Lund University', country: 'Sweden', city: 'Lund',
    websiteUrl: 'https://www.lu.se', logoUrl: '', rankingQs: 85, rankingThe: 95,
    estimatedMonthlyLivingCostEur: 900,
    description: 'Lund University is Scandinavia\'s largest institution for research and education, founded in 1666.',
    programs: [
      { id: 'p-91', universityId: 'uni-37', name: 'M.Sc. Computer Science', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 0, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-01-15', applicationUrl: 'https://www.lu.se' },
      { id: 'p-92', universityId: 'uni-37', name: 'M.Sc. Physics', fieldOfStudy: 'Physics', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 0, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-01-15', applicationUrl: 'https://www.lu.se' },
      { id: 'p-93', universityId: 'uni-37', name: 'M.Sc. Economics', fieldOfStudy: 'Economics', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 0, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-01-15', applicationUrl: 'https://www.lu.se' },
    ]
  },
  {
    id: 'uni-38', name: 'Uppsala University', country: 'Sweden', city: 'Uppsala',
    websiteUrl: 'https://www.uu.se', logoUrl: '', rankingQs: 105, rankingThe: 88,
    estimatedMonthlyLivingCostEur: 900,
    description: 'Uppsala University is the oldest university in Sweden (1477) and consistently ranked among Europe\'s best.',
    programs: [
      { id: 'p-94', universityId: 'uni-38', name: 'M.Sc. Computer Science', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 0, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-01-15', applicationUrl: 'https://www.uu.se' },
      { id: 'p-95', universityId: 'uni-38', name: 'M.Sc. Physics', fieldOfStudy: 'Physics', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 0, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-01-15', applicationUrl: 'https://www.uu.se' },
    ]
  },
  {
    id: 'uni-39', name: 'Chalmers University of Technology', country: 'Sweden', city: 'Gothenburg',
    websiteUrl: 'https://www.chalmers.se', logoUrl: '', rankingQs: 125, rankingThe: 130,
    estimatedMonthlyLivingCostEur: 950,
    description: 'Chalmers is one of the Nordic region\'s leading technical universities with strong automotive and IT research.',
    programs: [
      { id: 'p-96', universityId: 'uni-39', name: 'M.Sc. Computer Science', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 0, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-01-15', applicationUrl: 'https://www.chalmers.se' },
      { id: 'p-97', universityId: 'uni-39', name: 'M.Sc. Engineering', fieldOfStudy: 'Engineering', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 0, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-01-15', applicationUrl: 'https://www.chalmers.se' },
    ]
  },
  {
    id: 'uni-40', name: 'Stockholm University', country: 'Sweden', city: 'Stockholm',
    websiteUrl: 'https://www.su.se', logoUrl: '', rankingQs: 148, rankingThe: 122,
    estimatedMonthlyLivingCostEur: 1050,
    description: 'Stockholm University is one of the largest in Scandinavia, known for natural sciences and social sciences.',
    programs: [
      { id: 'p-98', universityId: 'uni-40', name: 'M.Sc. Computer Science', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 0, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-01-15', applicationUrl: 'https://www.su.se' },
      { id: 'p-99', universityId: 'uni-40', name: 'M.Sc. Mathematics', fieldOfStudy: 'Mathematics', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 0, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-01-15', applicationUrl: 'https://www.su.se' },
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
      { id: 'p-100', universityId: 'uni-41', name: 'M.Sc. Computer Science', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 15000, minGpaRequired: 3.2, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-01-10', applicationUrl: 'https://www.helsinki.fi' },
      { id: 'p-101', universityId: 'uni-41', name: 'M.Sc. Data Science', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 15000, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-01-10', applicationUrl: 'https://www.helsinki.fi' },
    ]
  },
  {
    id: 'uni-42', name: 'Aalto University', country: 'Finland', city: 'Espoo',
    websiteUrl: 'https://www.aalto.fi', logoUrl: '', rankingQs: 109, rankingThe: 119,
    estimatedMonthlyLivingCostEur: 1000,
    description: 'Aalto University combines technology, business, and design. Located near Helsinki with a vibrant startup scene.',
    programs: [
      { id: 'p-102', universityId: 'uni-42', name: 'M.Sc. Computer Science', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 15000, minGpaRequired: 3.2, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-01-10', applicationUrl: 'https://www.aalto.fi' },
      { id: 'p-103', universityId: 'uni-42', name: 'M.Sc. Business Administration', fieldOfStudy: 'Business Administration', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 15000, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-01-10', applicationUrl: 'https://www.aalto.fi' },
      { id: 'p-104', universityId: 'uni-42', name: 'M.Sc. Architecture', fieldOfStudy: 'Architecture', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 15000, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-01-10', applicationUrl: 'https://www.aalto.fi' },
    ]
  },
  {
    id: 'uni-43', name: 'University of Turku', country: 'Finland', city: 'Turku',
    websiteUrl: 'https://www.utu.fi', logoUrl: '', rankingQs: 295, rankingThe: 260,
    estimatedMonthlyLivingCostEur: 850,
    description: 'University of Turku is an international research university with affordable living in Finland\'s oldest city.',
    programs: [
      { id: 'p-105', universityId: 'uni-43', name: 'M.Sc. Computer Science', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 12000, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-01-15', applicationUrl: 'https://www.utu.fi' },
      { id: 'p-106', universityId: 'uni-43', name: 'M.Sc. Biology', fieldOfStudy: 'Biology', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 12000, minGpaRequired: 2.8, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-01-15', applicationUrl: 'https://www.utu.fi' },
    ]
  },
  {
    id: 'uni-44', name: 'Tampere University', country: 'Finland', city: 'Tampere',
    websiteUrl: 'https://www.tuni.fi', logoUrl: '', rankingQs: 350, rankingThe: 320,
    estimatedMonthlyLivingCostEur: 800,
    description: 'Tampere University is Finland\'s second-largest university, strong in technology, health, and society research.',
    programs: [
      { id: 'p-107', universityId: 'uni-44', name: 'M.Sc. Computer Science', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 10000, minGpaRequired: 2.8, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-01-15', applicationUrl: 'https://www.tuni.fi' },
      { id: 'p-108', universityId: 'uni-44', name: 'M.Sc. Engineering', fieldOfStudy: 'Engineering', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 10000, minGpaRequired: 2.8, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-01-15', applicationUrl: 'https://www.tuni.fi' },
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
      { id: 'p-109', universityId: 'uni-45', name: 'M.Sc. Computer Science', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 726, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-02-28', applicationUrl: 'https://www.univie.ac.at' },
      { id: 'p-110', universityId: 'uni-45', name: 'M.Sc. Economics', fieldOfStudy: 'Economics', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 726, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-02-28', applicationUrl: 'https://www.univie.ac.at' },
      { id: 'p-111', universityId: 'uni-45', name: 'M.Sc. Psychology', fieldOfStudy: 'Psychology', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 726, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-02-28', applicationUrl: 'https://www.univie.ac.at' },
    ]
  },
  {
    id: 'uni-46', name: 'TU Wien', country: 'Austria', city: 'Vienna',
    websiteUrl: 'https://www.tuwien.at', logoUrl: '', rankingQs: 192, rankingThe: 180,
    estimatedMonthlyLivingCostEur: 900,
    description: 'TU Wien is Austria\'s leading technical university, strong in computer science, engineering, and architecture.',
    programs: [
      { id: 'p-112', universityId: 'uni-46', name: 'M.Sc. Computer Science', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 726, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-03-31', applicationUrl: 'https://www.tuwien.at' },
      { id: 'p-113', universityId: 'uni-46', name: 'M.Sc. Architecture', fieldOfStudy: 'Architecture', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 726, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-03-31', applicationUrl: 'https://www.tuwien.at' },
    ]
  },
  {
    id: 'uni-47', name: 'University of Graz', country: 'Austria', city: 'Graz',
    websiteUrl: 'https://www.uni-graz.at', logoUrl: '', rankingQs: 350, rankingThe: 300,
    estimatedMonthlyLivingCostEur: 750,
    description: 'University of Graz is Austria\'s second-oldest university, known for humanities, natural sciences, and social sciences.',
    programs: [
      { id: 'p-114', universityId: 'uni-47', name: 'M.Sc. Computer Science', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 726, minGpaRequired: 2.8, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-05-15', applicationUrl: 'https://www.uni-graz.at' },
      { id: 'p-115', universityId: 'uni-47', name: 'M.Sc. Physics', fieldOfStudy: 'Physics', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 726, minGpaRequired: 2.8, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-05-15', applicationUrl: 'https://www.uni-graz.at' },
    ]
  },
  {
    id: 'uni-48', name: 'University of Innsbruck', country: 'Austria', city: 'Innsbruck',
    websiteUrl: 'https://www.uibk.ac.at', logoUrl: '', rankingQs: 280, rankingThe: 250,
    estimatedMonthlyLivingCostEur: 800,
    description: 'University of Innsbruck is a research university in the Alps, strong in physics, geography, and atmospheric sciences.',
    programs: [
      { id: 'p-116', universityId: 'uni-48', name: 'M.Sc. Computer Science', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 726, minGpaRequired: 2.8, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-03-15', applicationUrl: 'https://www.uibk.ac.at' },
      { id: 'p-117', universityId: 'uni-48', name: 'M.Sc. Physics', fieldOfStudy: 'Physics', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 726, minGpaRequired: 2.8, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-03-15', applicationUrl: 'https://www.uibk.ac.at' },
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
      { id: 'p-118', universityId: 'uni-49', name: 'M.Sc. Computer Science and Engineering', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 3900, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-01-20', applicationUrl: 'https://www.polimi.it' },
      { id: 'p-119', universityId: 'uni-49', name: 'M.Sc. Mechanical Engineering', fieldOfStudy: 'Engineering', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 3900, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-01-20', applicationUrl: 'https://www.polimi.it' },
      { id: 'p-120', universityId: 'uni-49', name: 'M.Sc. Architecture', fieldOfStudy: 'Architecture', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 3900, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-01-20', applicationUrl: 'https://www.polimi.it' },
    ]
  },
  {
    id: 'uni-50', name: 'University of Bologna', country: 'Italy', city: 'Bologna',
    websiteUrl: 'https://www.unibo.it', logoUrl: '', rankingQs: 164, rankingThe: 172,
    estimatedMonthlyLivingCostEur: 850,
    description: 'The University of Bologna is the oldest university in the world (1088), offering a wide range of programs in English.',
    programs: [
      { id: 'p-121', universityId: 'uni-50', name: 'M.Sc. Computer Science', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 2800, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-03-15', applicationUrl: 'https://www.unibo.it' },
      { id: 'p-122', universityId: 'uni-50', name: 'M.Sc. Economics', fieldOfStudy: 'Economics', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 2800, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-03-15', applicationUrl: 'https://www.unibo.it' },
      { id: 'p-123', universityId: 'uni-50', name: 'LL.M. European Law', fieldOfStudy: 'Law', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 12, tuitionPerYearEur: 2800, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-03-15', applicationUrl: 'https://www.unibo.it' },
    ]
  },
  {
    id: 'uni-51', name: 'Sapienza University of Rome', country: 'Italy', city: 'Rome',
    websiteUrl: 'https://www.uniroma1.it', logoUrl: '', rankingQs: 132, rankingThe: 160,
    estimatedMonthlyLivingCostEur: 900,
    description: 'Sapienza is the largest university in Europe by enrollment and one of Italy\'s most prestigious institutions.',
    programs: [
      { id: 'p-124', universityId: 'uni-51', name: 'M.Sc. Computer Science', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 2500, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-04-30', applicationUrl: 'https://www.uniroma1.it' },
      { id: 'p-125', universityId: 'uni-51', name: 'M.Sc. Physics', fieldOfStudy: 'Physics', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 2500, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-04-30', applicationUrl: 'https://www.uniroma1.it' },
      { id: 'p-126', universityId: 'uni-51', name: 'M.Sc. Architecture', fieldOfStudy: 'Architecture', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 2500, minGpaRequired: 2.8, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-04-30', applicationUrl: 'https://www.uniroma1.it' },
    ]
  },
  {
    id: 'uni-52', name: 'Politecnico di Torino', country: 'Italy', city: 'Turin',
    websiteUrl: 'https://www.polito.it', logoUrl: '', rankingQs: 241, rankingThe: 230,
    estimatedMonthlyLivingCostEur: 800,
    description: 'Politecnico di Torino is a leading Italian technical university with strong ties to FIAT and the automotive industry.',
    programs: [
      { id: 'p-127', universityId: 'uni-52', name: 'M.Sc. Computer Engineering', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 3000, minGpaRequired: 2.8, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-02-28', applicationUrl: 'https://www.polito.it' },
      { id: 'p-128', universityId: 'uni-52', name: 'M.Sc. Automotive Engineering', fieldOfStudy: 'Engineering', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 3000, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-02-28', applicationUrl: 'https://www.polito.it' },
    ]
  },
  {
    id: 'uni-53', name: 'University of Milan', country: 'Italy', city: 'Milan',
    websiteUrl: 'https://www.unimi.it', logoUrl: '', rankingQs: 216, rankingThe: 190,
    estimatedMonthlyLivingCostEur: 1000,
    description: 'The University of Milan is the largest university in Lombardy, strong in medicine, law, and humanities.',
    programs: [
      { id: 'p-129', universityId: 'uni-53', name: 'M.Sc. Computer Science', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 3000, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-04-15', applicationUrl: 'https://www.unimi.it' },
      { id: 'p-130', universityId: 'uni-53', name: 'M.Sc. Economics', fieldOfStudy: 'Economics', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 3000, minGpaRequired: 2.8, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-04-15', applicationUrl: 'https://www.unimi.it' },
    ]
  },
  {
    id: 'uni-54', name: 'University of Padua', country: 'Italy', city: 'Padua',
    websiteUrl: 'https://www.unipd.it', logoUrl: '', rankingQs: 219, rankingThe: 201,
    estimatedMonthlyLivingCostEur: 800,
    description: 'University of Padua is one of the oldest universities in the world (1222), where Galileo once taught.',
    programs: [
      { id: 'p-131', universityId: 'uni-54', name: 'M.Sc. Computer Science', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 2500, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-04-30', applicationUrl: 'https://www.unipd.it' },
      { id: 'p-132', universityId: 'uni-54', name: 'M.Sc. Physics', fieldOfStudy: 'Physics', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 2500, minGpaRequired: 2.8, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-04-30', applicationUrl: 'https://www.unipd.it' },
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
      { id: 'p-133', universityId: 'uni-55', name: 'M.Sc. Computer Science', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 243, minGpaRequired: 3.2, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-05-15', applicationUrl: 'https://www.universite-paris-saclay.fr' },
      { id: 'p-134', universityId: 'uni-55', name: 'M.Sc. Physics', fieldOfStudy: 'Physics', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 243, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-05-15', applicationUrl: 'https://www.universite-paris-saclay.fr' },
      { id: 'p-135', universityId: 'uni-55', name: 'M.Sc. Mathematics', fieldOfStudy: 'Mathematics', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 243, minGpaRequired: 3.2, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-05-15', applicationUrl: 'https://www.universite-paris-saclay.fr' },
    ]
  },
  {
    id: 'uni-56', name: 'Sorbonne University', country: 'France', city: 'Paris',
    websiteUrl: 'https://www.sorbonne-universite.fr', logoUrl: '', rankingQs: 59, rankingThe: 65,
    estimatedMonthlyLivingCostEur: 1200,
    description: 'Sorbonne University inherits 800 years of Parisian academic tradition, strong in science, medicine, and humanities.',
    programs: [
      { id: 'p-136', universityId: 'uni-56', name: 'M.Sc. Computer Science', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 243, minGpaRequired: 3.3, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-04-15', applicationUrl: 'https://www.sorbonne-universite.fr' },
      { id: 'p-137', universityId: 'uni-56', name: 'M.Sc. Mathematics', fieldOfStudy: 'Mathematics', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 243, minGpaRequired: 3.2, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-04-15', applicationUrl: 'https://www.sorbonne-universite.fr' },
    ]
  },
  {
    id: 'uni-57', name: 'PSL University', country: 'France', city: 'Paris',
    websiteUrl: 'https://www.psl.eu', logoUrl: '', rankingQs: 24, rankingThe: 44,
    estimatedMonthlyLivingCostEur: 1200,
    description: 'PSL is a collegiate university grouping elite institutions like ENS, Dauphine, and Mines ParisTech.',
    programs: [
      { id: 'p-138', universityId: 'uni-57', name: 'M.Sc. Computer Science', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 380, minGpaRequired: 3.5, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-03-15', applicationUrl: 'https://www.psl.eu' },
      { id: 'p-139', universityId: 'uni-57', name: 'M.Sc. Economics', fieldOfStudy: 'Economics', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 380, minGpaRequired: 3.3, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-03-15', applicationUrl: 'https://www.psl.eu' },
    ]
  },
  {
    id: 'uni-58', name: 'Grenoble Alpes University', country: 'France', city: 'Grenoble',
    websiteUrl: 'https://www.univ-grenoble-alpes.fr', logoUrl: '', rankingQs: 221, rankingThe: 196,
    estimatedMonthlyLivingCostEur: 850,
    description: 'Grenoble Alpes is a leading French research university in the Alps, strong in physics, CS, and engineering.',
    programs: [
      { id: 'p-140', universityId: 'uni-58', name: 'M.Sc. Computer Science', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 243, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-05-01', applicationUrl: 'https://www.univ-grenoble-alpes.fr' },
      { id: 'p-141', universityId: 'uni-58', name: 'M.Sc. Physics', fieldOfStudy: 'Physics', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 243, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-05-01', applicationUrl: 'https://www.univ-grenoble-alpes.fr' },
    ]
  },
  {
    id: 'uni-59', name: 'University of Strasbourg', country: 'France', city: 'Strasbourg',
    websiteUrl: 'https://www.unistra.fr', logoUrl: '', rankingQs: 292, rankingThe: 260,
    estimatedMonthlyLivingCostEur: 800,
    description: 'University of Strasbourg sits on the French-German border with 4 Nobel Prize winners and strong EU ties.',
    programs: [
      { id: 'p-142', universityId: 'uni-59', name: 'M.Sc. Computer Science', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 243, minGpaRequired: 2.8, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-05-01', applicationUrl: 'https://www.unistra.fr' },
      { id: 'p-143', universityId: 'uni-59', name: 'M.Sc. Chemistry', fieldOfStudy: 'Chemistry', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 243, minGpaRequired: 2.8, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-05-01', applicationUrl: 'https://www.unistra.fr' },
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
      { id: 'p-144', universityId: 'uni-60', name: 'M.Sc. Computer Science', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 12, tuitionPerYearEur: 2500, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-06-15', applicationUrl: 'https://www.ub.edu' },
      { id: 'p-145', universityId: 'uni-60', name: 'M.Sc. Economics', fieldOfStudy: 'Economics', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 12, tuitionPerYearEur: 2500, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-06-15', applicationUrl: 'https://www.ub.edu' },
    ]
  },
  {
    id: 'uni-61', name: 'Universitat Politècnica de Catalunya', country: 'Spain', city: 'Barcelona',
    websiteUrl: 'https://www.upc.edu', logoUrl: '', rankingQs: 315, rankingThe: 280,
    estimatedMonthlyLivingCostEur: 950,
    description: 'UPC is Spain\'s leading technical university, specializing in architecture, engineering, and technology.',
    programs: [
      { id: 'p-146', universityId: 'uni-61', name: 'M.Sc. Computer Science', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 2500, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-06-30', applicationUrl: 'https://www.upc.edu' },
      { id: 'p-147', universityId: 'uni-61', name: 'M.Sc. Architecture', fieldOfStudy: 'Architecture', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 12, tuitionPerYearEur: 2500, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-06-30', applicationUrl: 'https://www.upc.edu' },
    ]
  },
  {
    id: 'uni-62', name: 'Autonomous University of Madrid', country: 'Spain', city: 'Madrid',
    websiteUrl: 'https://www.uam.es', logoUrl: '', rankingQs: 199, rankingThe: 175,
    estimatedMonthlyLivingCostEur: 900,
    description: 'UAM is one of Spain\'s top research universities with a beautiful campus near Madrid.',
    programs: [
      { id: 'p-148', universityId: 'uni-62', name: 'M.Sc. Computer Science', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 12, tuitionPerYearEur: 2200, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-06-15', applicationUrl: 'https://www.uam.es' },
      { id: 'p-149', universityId: 'uni-62', name: 'M.Sc. Physics', fieldOfStudy: 'Physics', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 12, tuitionPerYearEur: 2200, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-06-15', applicationUrl: 'https://www.uam.es' },
      { id: 'p-150', universityId: 'uni-62', name: 'M.Sc. Biology', fieldOfStudy: 'Biology', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 12, tuitionPerYearEur: 2200, minGpaRequired: 2.8, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-06-15', applicationUrl: 'https://www.uam.es' },
    ]
  },
  {
    id: 'uni-63', name: 'Complutense University of Madrid', country: 'Spain', city: 'Madrid',
    websiteUrl: 'https://www.ucm.es', logoUrl: '', rankingQs: 226, rankingThe: 200,
    estimatedMonthlyLivingCostEur: 900,
    description: 'Complutense is the largest university in Spain and one of the oldest, with a wide range of programs.',
    programs: [
      { id: 'p-151', universityId: 'uni-63', name: 'M.Sc. Computer Science', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 12, tuitionPerYearEur: 2000, minGpaRequired: 2.8, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-06-30', applicationUrl: 'https://www.ucm.es' },
      { id: 'p-152', universityId: 'uni-63', name: 'LL.M. Law', fieldOfStudy: 'Law', degreeLevel: 'masters', languageOfInstruction: 'Spanish', durationMonths: 12, tuitionPerYearEur: 2000, minGpaRequired: 3.0, requiredLanguage: 'Spanish', requiredLanguageLevel: 'B2', applicationDeadline: '2026-06-30', applicationUrl: 'https://www.ucm.es' },
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
      { id: 'p-153', universityId: 'uni-64', name: 'M.Sc. Computer Science', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 0, minGpaRequired: 3.2, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-01-15', applicationUrl: 'https://www.ku.dk' },
      { id: 'p-154', universityId: 'uni-64', name: 'M.Sc. Economics', fieldOfStudy: 'Economics', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 0, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-01-15', applicationUrl: 'https://www.ku.dk' },
      { id: 'p-155', universityId: 'uni-64', name: 'M.Sc. Biology', fieldOfStudy: 'Biology', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 0, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-01-15', applicationUrl: 'https://www.ku.dk' },
    ]
  },
  {
    id: 'uni-65', name: 'Technical University of Denmark', country: 'Denmark', city: 'Copenhagen',
    websiteUrl: 'https://www.dtu.dk', logoUrl: '', rankingQs: 99, rankingThe: 111,
    estimatedMonthlyLivingCostEur: 1200,
    description: 'DTU is the leading technical university in Denmark, focused on engineering, technology, and natural sciences.',
    programs: [
      { id: 'p-156', universityId: 'uni-65', name: 'M.Sc. Computer Science', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 0, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-01-15', applicationUrl: 'https://www.dtu.dk' },
      { id: 'p-157', universityId: 'uni-65', name: 'M.Sc. Engineering', fieldOfStudy: 'Engineering', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 0, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-01-15', applicationUrl: 'https://www.dtu.dk' },
    ]
  },
  {
    id: 'uni-66', name: 'Aarhus University', country: 'Denmark', city: 'Aarhus',
    websiteUrl: 'https://www.au.dk', logoUrl: '', rankingQs: 143, rankingThe: 109,
    estimatedMonthlyLivingCostEur: 1000,
    description: 'Aarhus University is Denmark\'s second-largest university, strong in political science, economics, and natural sciences.',
    programs: [
      { id: 'p-158', universityId: 'uni-66', name: 'M.Sc. Computer Science', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 0, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-01-15', applicationUrl: 'https://www.au.dk' },
      { id: 'p-159', universityId: 'uni-66', name: 'M.Sc. Economics', fieldOfStudy: 'Economics', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 0, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-01-15', applicationUrl: 'https://www.au.dk' },
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
      { id: 'p-160', universityId: 'uni-67', name: 'M.Sc. Computer Science', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 0, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-03-01', applicationUrl: 'https://www.uio.no' },
      { id: 'p-161', universityId: 'uni-67', name: 'M.Sc. Economics', fieldOfStudy: 'Economics', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 0, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-03-01', applicationUrl: 'https://www.uio.no' },
      { id: 'p-162', universityId: 'uni-67', name: 'LL.M. International Law', fieldOfStudy: 'Law', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 12, tuitionPerYearEur: 0, minGpaRequired: 3.2, requiredLanguage: 'English', requiredLanguageLevel: 'C1', applicationDeadline: '2026-03-01', applicationUrl: 'https://www.uio.no' },
    ]
  },
  {
    id: 'uni-68', name: 'NTNU', country: 'Norway', city: 'Trondheim',
    websiteUrl: 'https://www.ntnu.edu', logoUrl: '', rankingQs: 196, rankingThe: 175,
    estimatedMonthlyLivingCostEur: 1100,
    description: 'NTNU is Norway\'s largest university and leading technical institution with free tuition.',
    programs: [
      { id: 'p-163', universityId: 'uni-68', name: 'M.Sc. Computer Science', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 0, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-03-01', applicationUrl: 'https://www.ntnu.edu' },
      { id: 'p-164', universityId: 'uni-68', name: 'M.Sc. Engineering', fieldOfStudy: 'Engineering', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 0, minGpaRequired: 2.8, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-03-01', applicationUrl: 'https://www.ntnu.edu' },
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
      { id: 'p-165', universityId: 'uni-69', name: 'M.Sc. Computer Science', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 938, minGpaRequired: 3.2, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-03-01', applicationUrl: 'https://www.kuleuven.be' },
      { id: 'p-166', universityId: 'uni-69', name: 'M.Sc. Business Administration', fieldOfStudy: 'Business Administration', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 12, tuitionPerYearEur: 938, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-03-01', applicationUrl: 'https://www.kuleuven.be' },
      { id: 'p-167', universityId: 'uni-69', name: 'M.Sc. Engineering', fieldOfStudy: 'Engineering', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 938, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-03-01', applicationUrl: 'https://www.kuleuven.be' },
    ]
  },
  {
    id: 'uni-70', name: 'Ghent University', country: 'Belgium', city: 'Ghent',
    websiteUrl: 'https://www.ugent.be', logoUrl: '', rankingQs: 133, rankingThe: 101,
    estimatedMonthlyLivingCostEur: 850,
    description: 'Ghent University is one of Belgium\'s top research universities with a vibrant student city.',
    programs: [
      { id: 'p-168', universityId: 'uni-70', name: 'M.Sc. Computer Science', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 938, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-03-01', applicationUrl: 'https://www.ugent.be' },
      { id: 'p-169', universityId: 'uni-70', name: 'M.Sc. Biology', fieldOfStudy: 'Biology', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 938, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-03-01', applicationUrl: 'https://www.ugent.be' },
    ]
  },
  {
    id: 'uni-71', name: 'Université Libre de Bruxelles', country: 'Belgium', city: 'Brussels',
    websiteUrl: 'https://www.ulb.be', logoUrl: '', rankingQs: 186, rankingThe: 165,
    estimatedMonthlyLivingCostEur: 950,
    description: 'ULB is a French-speaking research university in the heart of Brussels, the EU capital.',
    programs: [
      { id: 'p-170', universityId: 'uni-71', name: 'M.Sc. Computer Science', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 835, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-04-30', applicationUrl: 'https://www.ulb.be' },
      { id: 'p-171', universityId: 'uni-71', name: 'M.Sc. Economics', fieldOfStudy: 'Economics', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 835, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-04-30', applicationUrl: 'https://www.ulb.be' },
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
      { id: 'p-172', universityId: 'uni-72', name: 'M.Sc. Computer Science', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 12, tuitionPerYearEur: 11600, minGpaRequired: 3.3, requiredLanguage: 'English', requiredLanguageLevel: 'C1', applicationDeadline: '2026-06-30', applicationUrl: 'https://www.tcd.ie' },
      { id: 'p-173', universityId: 'uni-72', name: 'M.Sc. Economics', fieldOfStudy: 'Economics', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 12, tuitionPerYearEur: 11600, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'C1', applicationDeadline: '2026-06-30', applicationUrl: 'https://www.tcd.ie' },
    ]
  },
  {
    id: 'uni-73', name: 'University College Dublin', country: 'Ireland', city: 'Dublin',
    websiteUrl: 'https://www.ucd.ie', logoUrl: '', rankingQs: 126, rankingThe: 171,
    estimatedMonthlyLivingCostEur: 1300,
    description: 'UCD is Ireland\'s largest university by enrollment, strong in business, law, and engineering.',
    programs: [
      { id: 'p-174', universityId: 'uni-73', name: 'M.Sc. Computer Science', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 12, tuitionPerYearEur: 10400, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-06-30', applicationUrl: 'https://www.ucd.ie' },
      { id: 'p-175', universityId: 'uni-73', name: 'M.Sc. Business Administration', fieldOfStudy: 'Business Administration', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 12, tuitionPerYearEur: 10400, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-06-30', applicationUrl: 'https://www.ucd.ie' },
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
      { id: 'p-176', universityId: 'uni-74', name: 'M.Sc. Computer Science', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 3200, minGpaRequired: 2.7, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-06-15', applicationUrl: 'https://www.uw.edu.pl' },
      { id: 'p-177', universityId: 'uni-74', name: 'M.Sc. Economics', fieldOfStudy: 'Economics', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 3200, minGpaRequired: 2.7, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-06-15', applicationUrl: 'https://www.uw.edu.pl' },
    ]
  },
  {
    id: 'uni-75', name: 'Warsaw University of Technology', country: 'Poland', city: 'Warsaw',
    websiteUrl: 'https://www.pw.edu.pl', logoUrl: '', rankingQs: 500, rankingThe: 450,
    estimatedMonthlyLivingCostEur: 600,
    description: 'Warsaw University of Technology is Poland\'s oldest and largest technical university with strong engineering programs.',
    programs: [
      { id: 'p-178', universityId: 'uni-75', name: 'M.Sc. Computer Science', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 2500, minGpaRequired: 2.7, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-07-15', applicationUrl: 'https://www.pw.edu.pl' },
      { id: 'p-179', universityId: 'uni-75', name: 'M.Sc. Engineering', fieldOfStudy: 'Engineering', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 2500, minGpaRequired: 2.7, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-07-15', applicationUrl: 'https://www.pw.edu.pl' },
    ]
  },
  {
    id: 'uni-76', name: 'Jagiellonian University', country: 'Poland', city: 'Krakow',
    websiteUrl: 'https://www.uj.edu.pl', logoUrl: '', rankingQs: 304, rankingThe: 380,
    estimatedMonthlyLivingCostEur: 550,
    description: 'Jagiellonian is one of the oldest universities in the world (1364), located in beautiful Krakow.',
    programs: [
      { id: 'p-180', universityId: 'uni-76', name: 'M.Sc. Computer Science', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 3000, minGpaRequired: 2.8, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-06-30', applicationUrl: 'https://www.uj.edu.pl' },
      { id: 'p-181', universityId: 'uni-76', name: 'M.Sc. Physics', fieldOfStudy: 'Physics', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 3000, minGpaRequired: 2.8, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-06-30', applicationUrl: 'https://www.uj.edu.pl' },
    ]
  },
  {
    id: 'uni-77', name: 'AGH University of Krakow', country: 'Poland', city: 'Krakow',
    websiteUrl: 'https://www.agh.edu.pl', logoUrl: '', rankingQs: 550, rankingThe: 500,
    estimatedMonthlyLivingCostEur: 550,
    description: 'AGH is Poland\'s leading technical university for mining, metallurgy, and engineering.',
    programs: [
      { id: 'p-182', universityId: 'uni-77', name: 'M.Sc. Computer Science', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 2200, minGpaRequired: 2.5, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-07-15', applicationUrl: 'https://www.agh.edu.pl' },
      { id: 'p-183', universityId: 'uni-77', name: 'M.Sc. Engineering', fieldOfStudy: 'Engineering', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 2200, minGpaRequired: 2.5, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-07-15', applicationUrl: 'https://www.agh.edu.pl' },
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
      { id: 'p-184', universityId: 'uni-78', name: 'M.Sc. Computer Science', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 5000, minGpaRequired: 2.8, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-04-30', applicationUrl: 'https://cuni.cz' },
      { id: 'p-185', universityId: 'uni-78', name: 'M.Sc. Mathematics', fieldOfStudy: 'Mathematics', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 5000, minGpaRequired: 2.8, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-04-30', applicationUrl: 'https://cuni.cz' },
    ]
  },
  {
    id: 'uni-79', name: 'Czech Technical University in Prague', country: 'Czech Republic', city: 'Prague',
    websiteUrl: 'https://www.cvut.cz', logoUrl: '', rankingQs: 403, rankingThe: 390,
    estimatedMonthlyLivingCostEur: 650,
    description: 'CTU Prague is the oldest technical university in Central Europe, founded in 1707.',
    programs: [
      { id: 'p-186', universityId: 'uni-79', name: 'M.Sc. Computer Science', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 4500, minGpaRequired: 2.8, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-04-30', applicationUrl: 'https://www.cvut.cz' },
      { id: 'p-187', universityId: 'uni-79', name: 'M.Sc. Electrical Engineering', fieldOfStudy: 'Engineering', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 4500, minGpaRequired: 2.5, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-04-30', applicationUrl: 'https://www.cvut.cz' },
    ]
  },
  {
    id: 'uni-80', name: 'Masaryk University', country: 'Czech Republic', city: 'Brno',
    websiteUrl: 'https://www.muni.cz', logoUrl: '', rankingQs: 500, rankingThe: 450,
    estimatedMonthlyLivingCostEur: 550,
    description: 'Masaryk University is the second-largest university in Czech Republic, located in the student-friendly city of Brno.',
    programs: [
      { id: 'p-188', universityId: 'uni-80', name: 'M.Sc. Computer Science', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 4000, minGpaRequired: 2.5, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-04-30', applicationUrl: 'https://www.muni.cz' },
      { id: 'p-189', universityId: 'uni-80', name: 'M.Sc. Economics', fieldOfStudy: 'Economics', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 4000, minGpaRequired: 2.5, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-04-30', applicationUrl: 'https://www.muni.cz' },
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
      { id: 'p-190', universityId: 'uni-81', name: 'M.Sc. Computer Science', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 3200, minGpaRequired: 2.5, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-06-15', applicationUrl: 'https://www.elte.hu' },
      { id: 'p-191', universityId: 'uni-81', name: 'M.Sc. Mathematics', fieldOfStudy: 'Mathematics', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 3200, minGpaRequired: 2.5, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-06-15', applicationUrl: 'https://www.elte.hu' },
    ]
  },
  {
    id: 'uni-82', name: 'Budapest University of Technology', country: 'Hungary', city: 'Budapest',
    websiteUrl: 'https://www.bme.hu', logoUrl: '', rankingQs: 600, rankingThe: 550,
    estimatedMonthlyLivingCostEur: 550,
    description: 'BME is Hungary\'s leading technical university with over 200 years of history in engineering education.',
    programs: [
      { id: 'p-192', universityId: 'uni-82', name: 'M.Sc. Computer Science', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 3000, minGpaRequired: 2.5, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-06-30', applicationUrl: 'https://www.bme.hu' },
      { id: 'p-193', universityId: 'uni-82', name: 'M.Sc. Engineering', fieldOfStudy: 'Engineering', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 3000, minGpaRequired: 2.5, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-06-30', applicationUrl: 'https://www.bme.hu' },
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
      { id: 'p-194', universityId: 'uni-83', name: 'M.Sc. Computer Science', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 1500, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-06-30', applicationUrl: 'https://www.ulisboa.pt' },
      { id: 'p-195', universityId: 'uni-83', name: 'M.Sc. Engineering', fieldOfStudy: 'Engineering', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 1500, minGpaRequired: 2.8, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-06-30', applicationUrl: 'https://www.ulisboa.pt' },
    ]
  },
  {
    id: 'uni-84', name: 'University of Porto', country: 'Portugal', city: 'Porto',
    websiteUrl: 'https://www.up.pt', logoUrl: '', rankingQs: 274, rankingThe: 320,
    estimatedMonthlyLivingCostEur: 700,
    description: 'University of Porto is one of Portugal\'s best universities, in a charming city with affordable living.',
    programs: [
      { id: 'p-196', universityId: 'uni-84', name: 'M.Sc. Computer Science', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 1500, minGpaRequired: 2.8, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-06-30', applicationUrl: 'https://www.up.pt' },
      { id: 'p-197', universityId: 'uni-84', name: 'M.Sc. Engineering', fieldOfStudy: 'Engineering', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 1500, minGpaRequired: 2.8, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-06-30', applicationUrl: 'https://www.up.pt' },
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
      { id: 'p-198', universityId: 'uni-85', name: 'M.Sc. Computer Science', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 2500, minGpaRequired: 2.5, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-07-15', applicationUrl: 'https://www.unibuc.ro' },
      { id: 'p-199', universityId: 'uni-85', name: 'M.Sc. Mathematics', fieldOfStudy: 'Mathematics', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 2500, minGpaRequired: 2.5, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-07-15', applicationUrl: 'https://www.unibuc.ro' },
    ]
  },
  {
    id: 'uni-86', name: 'Politehnica University of Bucharest', country: 'Romania', city: 'Bucharest',
    websiteUrl: 'https://www.upb.ro', logoUrl: '', rankingQs: 700, rankingThe: 650,
    estimatedMonthlyLivingCostEur: 500,
    description: 'Politehnica is Romania\'s oldest and most prestigious technical university.',
    programs: [
      { id: 'p-200', universityId: 'uni-86', name: 'M.Sc. Computer Science', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 2000, minGpaRequired: 2.5, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-07-15', applicationUrl: 'https://www.upb.ro' },
      { id: 'p-201', universityId: 'uni-86', name: 'M.Sc. Engineering', fieldOfStudy: 'Engineering', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 2000, minGpaRequired: 2.5, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-07-15', applicationUrl: 'https://www.upb.ro' },
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
      { id: 'p-202', universityId: 'uni-87', name: 'M.Sc. Computer Science', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 2500, minGpaRequired: 2.5, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-07-15', applicationUrl: 'https://www.unizg.hr' },
      { id: 'p-203', universityId: 'uni-87', name: 'M.Sc. Engineering', fieldOfStudy: 'Engineering', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 2500, minGpaRequired: 2.5, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-07-15', applicationUrl: 'https://www.unizg.hr' },
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
      { id: 'p-204', universityId: 'uni-88', name: 'M.Sc. Computer Science', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 0, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-06-30', applicationUrl: 'https://www.ntua.gr' },
      { id: 'p-205', universityId: 'uni-88', name: 'M.Sc. Engineering', fieldOfStudy: 'Engineering', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 0, minGpaRequired: 2.8, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-06-30', applicationUrl: 'https://www.ntua.gr' },
    ]
  },
  {
    id: 'uni-89', name: 'University of Athens', country: 'Greece', city: 'Athens',
    websiteUrl: 'https://www.uoa.gr', logoUrl: '', rankingQs: 440, rankingThe: 420,
    estimatedMonthlyLivingCostEur: 650,
    description: 'National and Kapodistrian University of Athens is the oldest university in Greece (1837).',
    programs: [
      { id: 'p-206', universityId: 'uni-89', name: 'M.Sc. Computer Science', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 0, minGpaRequired: 2.8, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-06-30', applicationUrl: 'https://www.uoa.gr' },
      { id: 'p-207', universityId: 'uni-89', name: 'M.Sc. Economics', fieldOfStudy: 'Economics', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 0, minGpaRequired: 2.8, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-06-30', applicationUrl: 'https://www.uoa.gr' },
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
      { id: 'p-208', universityId: 'uni-90', name: 'M.Sc. Applied Computer Science', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 0, minGpaRequired: 2.8, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-07-15', applicationUrl: 'https://www.hm.edu' },
      { id: 'p-209', universityId: 'uni-90', name: 'B.Sc. Business Administration', fieldOfStudy: 'Business Administration', degreeLevel: 'bachelors', languageOfInstruction: 'German', durationMonths: 42, tuitionPerYearEur: 0, minGpaRequired: 2.5, requiredLanguage: 'German', requiredLanguageLevel: 'C1', applicationDeadline: '2026-07-15', applicationUrl: 'https://www.hm.edu' },
    ]
  },
  {
    id: 'uni-91', name: 'University of Konstanz', country: 'Germany', city: 'Konstanz',
    websiteUrl: 'https://www.uni-konstanz.de', logoUrl: '', rankingQs: 450, rankingThe: 350,
    estimatedMonthlyLivingCostEur: 800,
    description: 'University of Konstanz is a reform university and University of Excellence known for social sciences and life sciences.',
    programs: [
      { id: 'p-210', universityId: 'uni-91', name: 'M.Sc. Computer and Information Science', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 0, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-07-15', applicationUrl: 'https://www.uni-konstanz.de' },
      { id: 'p-211', universityId: 'uni-91', name: 'M.A. Politics and Public Administration', fieldOfStudy: 'Social Sciences', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 0, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-07-15', applicationUrl: 'https://www.uni-konstanz.de' },
    ]
  },
  {
    id: 'uni-92', name: 'TU Braunschweig', country: 'Germany', city: 'Braunschweig',
    websiteUrl: 'https://www.tu-braunschweig.de', logoUrl: '', rankingQs: 400, rankingThe: 380,
    estimatedMonthlyLivingCostEur: 750,
    description: 'TU Braunschweig is the oldest technical university in Germany, strong in automotive and aerospace engineering.',
    programs: [
      { id: 'p-212', universityId: 'uni-92', name: 'M.Sc. Computer Science', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 0, minGpaRequired: 2.8, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-07-15', applicationUrl: 'https://www.tu-braunschweig.de' },
      { id: 'p-213', universityId: 'uni-92', name: 'M.Sc. Mechanical Engineering', fieldOfStudy: 'Engineering', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 0, minGpaRequired: 2.8, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-07-15', applicationUrl: 'https://www.tu-braunschweig.de' },
    ]
  },
  {
    id: 'uni-93', name: 'University of Duisburg-Essen', country: 'Germany', city: 'Essen',
    websiteUrl: 'https://www.uni-due.de', logoUrl: '', rankingQs: 450, rankingThe: 400,
    estimatedMonthlyLivingCostEur: 780,
    description: 'University of Duisburg-Essen is one of Germany\'s youngest universities with strengths in nanoscience and urban systems.',
    programs: [
      { id: 'p-214', universityId: 'uni-93', name: 'M.Sc. Computer Engineering', fieldOfStudy: 'Engineering', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 0, minGpaRequired: 2.8, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-07-15', applicationUrl: 'https://www.uni-due.de' },
      { id: 'p-215', universityId: 'uni-93', name: 'M.Sc. Economics', fieldOfStudy: 'Economics', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 0, minGpaRequired: 2.8, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-07-15', applicationUrl: 'https://www.uni-due.de' },
    ]
  },
  {
    id: 'uni-94', name: 'University of Bremen', country: 'Germany', city: 'Bremen',
    websiteUrl: 'https://www.uni-bremen.de', logoUrl: '', rankingQs: 470, rankingThe: 420,
    estimatedMonthlyLivingCostEur: 750,
    description: 'University of Bremen is a University of Excellence known for marine and environmental sciences, AI, and logistics.',
    programs: [
      { id: 'p-216', universityId: 'uni-94', name: 'M.Sc. Computer Science', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 0, minGpaRequired: 2.8, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-07-15', applicationUrl: 'https://www.uni-bremen.de' },
      { id: 'p-217', universityId: 'uni-94', name: 'M.Sc. Industrial Mathematics', fieldOfStudy: 'Mathematics', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 0, minGpaRequired: 2.8, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-07-15', applicationUrl: 'https://www.uni-bremen.de' },
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
      { id: 'p-218', universityId: 'uni-95', name: 'M.Sc. Data Science and Society', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 12, tuitionPerYearEur: 15000, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-05-01', applicationUrl: 'https://www.tilburguniversity.edu' },
      { id: 'p-219', universityId: 'uni-95', name: 'M.Sc. Economics', fieldOfStudy: 'Economics', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 12, tuitionPerYearEur: 15000, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-05-01', applicationUrl: 'https://www.tilburguniversity.edu' },
      { id: 'p-220', universityId: 'uni-95', name: 'M.Sc. Business Administration', fieldOfStudy: 'Business Administration', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 12, tuitionPerYearEur: 15000, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-05-01', applicationUrl: 'https://www.tilburguniversity.edu' },
    ]
  },
  {
    id: 'uni-96', name: 'Radboud University', country: 'Netherlands', city: 'Nijmegen',
    websiteUrl: 'https://www.ru.nl', logoUrl: '', rankingQs: 230, rankingThe: 200,
    estimatedMonthlyLivingCostEur: 850,
    description: 'Radboud University is a comprehensive research university known for AI, neuroscience, and molecular sciences.',
    programs: [
      { id: 'p-221', universityId: 'uni-96', name: 'M.Sc. Artificial Intelligence', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 16000, minGpaRequired: 3.2, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-04-01', applicationUrl: 'https://www.ru.nl' },
      { id: 'p-222', universityId: 'uni-96', name: 'M.Sc. Computing Science', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 16000, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-04-01', applicationUrl: 'https://www.ru.nl' },
      { id: 'p-223', universityId: 'uni-96', name: 'M.Sc. Biology', fieldOfStudy: 'Biology', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 16000, minGpaRequired: 2.8, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-04-01', applicationUrl: 'https://www.ru.nl' },
    ]
  },
  {
    id: 'uni-97', name: 'Maastricht University', country: 'Netherlands', city: 'Maastricht',
    websiteUrl: 'https://www.maastrichtuniversity.nl', logoUrl: '', rankingQs: 264, rankingThe: 220,
    estimatedMonthlyLivingCostEur: 850,
    description: 'Maastricht University is known for its innovative problem-based learning approach and strong international orientation.',
    programs: [
      { id: 'p-224', universityId: 'uni-97', name: 'M.Sc. Data Science for Decision Making', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 12, tuitionPerYearEur: 15000, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-06-01', applicationUrl: 'https://www.maastrichtuniversity.nl' },
      { id: 'p-225', universityId: 'uni-97', name: 'M.Sc. International Business', fieldOfStudy: 'Business Administration', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 12, tuitionPerYearEur: 15000, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-06-01', applicationUrl: 'https://www.maastrichtuniversity.nl' },
      { id: 'p-226', universityId: 'uni-97', name: 'M.Sc. Psychology', fieldOfStudy: 'Psychology', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 12, tuitionPerYearEur: 15000, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-06-01', applicationUrl: 'https://www.maastrichtuniversity.nl' },
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
      { id: 'p-227', universityId: 'uni-98', name: 'M.A. International Affairs', fieldOfStudy: 'Social Sciences', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 14500, minGpaRequired: 3.3, requiredLanguage: 'English', requiredLanguageLevel: 'C1', applicationDeadline: '2026-01-15', applicationUrl: 'https://www.sciencespo.fr' },
      { id: 'p-228', universityId: 'uni-98', name: 'M.A. Economics and Public Policy', fieldOfStudy: 'Economics', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 14500, minGpaRequired: 3.3, requiredLanguage: 'English', requiredLanguageLevel: 'C1', applicationDeadline: '2026-01-15', applicationUrl: 'https://www.sciencespo.fr' },
    ]
  },
  {
    id: 'uni-99', name: 'Ecole Polytechnique', country: 'France', city: 'Paris',
    websiteUrl: 'https://www.polytechnique.edu', logoUrl: '', rankingQs: 46, rankingThe: 72,
    estimatedMonthlyLivingCostEur: 1200,
    description: 'Ecole Polytechnique is France\'s most prestigious engineering grande école with world-class research.',
    programs: [
      { id: 'p-229', universityId: 'uni-99', name: 'M.Sc. Data Science', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 15900, minGpaRequired: 3.5, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-04-01', applicationUrl: 'https://www.polytechnique.edu' },
      { id: 'p-230', universityId: 'uni-99', name: 'M.Sc. Mathematics', fieldOfStudy: 'Mathematics', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 15900, minGpaRequired: 3.5, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-04-01', applicationUrl: 'https://www.polytechnique.edu' },
      { id: 'p-231', universityId: 'uni-99', name: 'M.Sc. Physics', fieldOfStudy: 'Physics', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 15900, minGpaRequired: 3.5, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-04-01', applicationUrl: 'https://www.polytechnique.edu' },
    ]
  },
  {
    id: 'uni-100', name: 'University of Lyon', country: 'France', city: 'Lyon',
    websiteUrl: 'https://www.universite-lyon.fr', logoUrl: '', rankingQs: 350, rankingThe: 300,
    estimatedMonthlyLivingCostEur: 900,
    description: 'Université de Lyon is a major French research and higher education cluster in France\'s second-largest city.',
    programs: [
      { id: 'p-232', universityId: 'uni-100', name: 'M.Sc. Computer Science', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 3770, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-04-15', applicationUrl: 'https://www.universite-lyon.fr' },
      { id: 'p-233', universityId: 'uni-100', name: 'M.Sc. Applied Mathematics', fieldOfStudy: 'Mathematics', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 3770, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-04-15', applicationUrl: 'https://www.universite-lyon.fr' },
    ]
  },
  {
    id: 'uni-101', name: 'Aix-Marseille University', country: 'France', city: 'Marseille',
    websiteUrl: 'https://www.univ-amu.fr', logoUrl: '', rankingQs: 380, rankingThe: 350,
    estimatedMonthlyLivingCostEur: 850,
    description: 'Aix-Marseille University is France\'s largest university by student enrollment with excellent research output.',
    programs: [
      { id: 'p-234', universityId: 'uni-101', name: 'M.Sc. Computer Science', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 3770, minGpaRequired: 2.8, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-05-01', applicationUrl: 'https://www.univ-amu.fr' },
      { id: 'p-235', universityId: 'uni-101', name: 'M.Sc. Physics', fieldOfStudy: 'Physics', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 3770, minGpaRequired: 2.8, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-05-01', applicationUrl: 'https://www.univ-amu.fr' },
    ]
  },
  {
    id: 'uni-102', name: 'University of Bordeaux', country: 'France', city: 'Bordeaux',
    websiteUrl: 'https://www.u-bordeaux.fr', logoUrl: '', rankingQs: 400, rankingThe: 370,
    estimatedMonthlyLivingCostEur: 850,
    description: 'University of Bordeaux is a leading French university known for neuroscience, laser physics, and viticulture.',
    programs: [
      { id: 'p-236', universityId: 'uni-102', name: 'M.Sc. Computer Science', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 3770, minGpaRequired: 2.8, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-05-01', applicationUrl: 'https://www.u-bordeaux.fr' },
      { id: 'p-237', universityId: 'uni-102', name: 'M.Sc. Biology', fieldOfStudy: 'Biology', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 3770, minGpaRequired: 2.8, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-05-01', applicationUrl: 'https://www.u-bordeaux.fr' },
    ]
  },
  {
    id: 'uni-103', name: 'University of Toulouse', country: 'France', city: 'Toulouse',
    websiteUrl: 'https://www.univ-toulouse.fr', logoUrl: '', rankingQs: 420, rankingThe: 380,
    estimatedMonthlyLivingCostEur: 800,
    description: 'University of Toulouse is a key hub for aerospace engineering and space research in Europe.',
    programs: [
      { id: 'p-238', universityId: 'uni-103', name: 'M.Sc. Aerospace Engineering', fieldOfStudy: 'Engineering', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 3770, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-05-01', applicationUrl: 'https://www.univ-toulouse.fr' },
      { id: 'p-239', universityId: 'uni-103', name: 'M.Sc. Computer Science', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 3770, minGpaRequired: 2.8, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-05-01', applicationUrl: 'https://www.univ-toulouse.fr' },
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
      { id: 'p-240', universityId: 'uni-104', name: 'M.Sc. Computer Science', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 3500, minGpaRequired: 2.8, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-07-15', applicationUrl: 'https://www.unifi.it' },
      { id: 'p-241', universityId: 'uni-104', name: 'M.A. Architecture', fieldOfStudy: 'Architecture', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 3500, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-07-15', applicationUrl: 'https://www.unifi.it' },
    ]
  },
  {
    id: 'uni-105', name: 'University of Naples Federico II', country: 'Italy', city: 'Naples',
    websiteUrl: 'https://www.unina.it', logoUrl: '', rankingQs: 380, rankingThe: 350,
    estimatedMonthlyLivingCostEur: 700,
    description: 'Founded in 1224, Naples Federico II is one of the world\'s oldest public universities with strong engineering programs.',
    programs: [
      { id: 'p-242', universityId: 'uni-105', name: 'M.Sc. Computer Science', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 2500, minGpaRequired: 2.8, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-07-15', applicationUrl: 'https://www.unina.it' },
      { id: 'p-243', universityId: 'uni-105', name: 'M.Sc. Engineering', fieldOfStudy: 'Engineering', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 2500, minGpaRequired: 2.8, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-07-15', applicationUrl: 'https://www.unina.it' },
    ]
  },
  {
    id: 'uni-106', name: 'University of Turin', country: 'Italy', city: 'Turin',
    websiteUrl: 'https://www.unito.it', logoUrl: '', rankingQs: 450, rankingThe: 400,
    estimatedMonthlyLivingCostEur: 800,
    description: 'University of Turin is one of Italy\'s oldest and most prestigious universities, known for social sciences and medicine.',
    programs: [
      { id: 'p-244', universityId: 'uni-106', name: 'M.Sc. Computer Science', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 3000, minGpaRequired: 2.8, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-07-15', applicationUrl: 'https://www.unito.it' },
      { id: 'p-245', universityId: 'uni-106', name: 'M.Sc. Economics', fieldOfStudy: 'Economics', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 3000, minGpaRequired: 2.8, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-07-15', applicationUrl: 'https://www.unito.it' },
    ]
  },
  {
    id: 'uni-107', name: 'University of Trento', country: 'Italy', city: 'Trento',
    websiteUrl: 'https://www.unitn.it', logoUrl: '', rankingQs: 350, rankingThe: 300,
    estimatedMonthlyLivingCostEur: 750,
    description: 'University of Trento is a young but highly ranked Italian university, particularly strong in computer science and cognitive science.',
    programs: [
      { id: 'p-246', universityId: 'uni-107', name: 'M.Sc. Computer Science', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 3000, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-04-15', applicationUrl: 'https://www.unitn.it' },
      { id: 'p-247', universityId: 'uni-107', name: 'M.Sc. Data Science', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 3000, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-04-15', applicationUrl: 'https://www.unitn.it' },
      { id: 'p-248', universityId: 'uni-107', name: 'M.Sc. Physics', fieldOfStudy: 'Physics', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 3000, minGpaRequired: 2.8, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-04-15', applicationUrl: 'https://www.unitn.it' },
    ]
  },
  {
    id: 'uni-108', name: 'University of Pisa', country: 'Italy', city: 'Pisa',
    websiteUrl: 'https://www.unipi.it', logoUrl: '', rankingQs: 380, rankingThe: 360,
    estimatedMonthlyLivingCostEur: 750,
    description: 'University of Pisa is one of Italy\'s most prestigious universities, famous for physics and engineering.',
    programs: [
      { id: 'p-249', universityId: 'uni-108', name: 'M.Sc. Computer Science', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 3000, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-07-15', applicationUrl: 'https://www.unipi.it' },
      { id: 'p-250', universityId: 'uni-108', name: 'M.Sc. Mathematics', fieldOfStudy: 'Mathematics', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 3000, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-07-15', applicationUrl: 'https://www.unipi.it' },
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
      { id: 'p-251', universityId: 'uni-109', name: 'M.Sc. Data Science', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 18, tuitionPerYearEur: 8000, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-06-15', applicationUrl: 'https://www.upf.edu' },
      { id: 'p-252', universityId: 'uni-109', name: 'M.Sc. Economics', fieldOfStudy: 'Economics', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 18, tuitionPerYearEur: 8000, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-06-15', applicationUrl: 'https://www.upf.edu' },
    ]
  },
  {
    id: 'uni-110', name: 'University of Valencia', country: 'Spain', city: 'Valencia',
    websiteUrl: 'https://www.uv.es', logoUrl: '', rankingQs: 380, rankingThe: 350,
    estimatedMonthlyLivingCostEur: 750,
    description: 'University of Valencia is one of Spain\'s oldest and largest universities with comprehensive study programs.',
    programs: [
      { id: 'p-253', universityId: 'uni-110', name: 'M.Sc. Computer Science', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 18, tuitionPerYearEur: 4000, minGpaRequired: 2.8, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-06-30', applicationUrl: 'https://www.uv.es' },
      { id: 'p-254', universityId: 'uni-110', name: 'M.Sc. Physics', fieldOfStudy: 'Physics', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 18, tuitionPerYearEur: 4000, minGpaRequired: 2.8, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-06-30', applicationUrl: 'https://www.uv.es' },
    ]
  },
  {
    id: 'uni-111', name: 'University of Granada', country: 'Spain', city: 'Granada',
    websiteUrl: 'https://www.ugr.es', logoUrl: '', rankingQs: 400, rankingThe: 370,
    estimatedMonthlyLivingCostEur: 650,
    description: 'University of Granada is one of the most popular destinations for Erasmus students, known for affordable living.',
    programs: [
      { id: 'p-255', universityId: 'uni-111', name: 'M.Sc. Computer Science', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 18, tuitionPerYearEur: 3500, minGpaRequired: 2.5, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-06-30', applicationUrl: 'https://www.ugr.es' },
      { id: 'p-256', universityId: 'uni-111', name: 'M.Sc. Mathematics', fieldOfStudy: 'Mathematics', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 18, tuitionPerYearEur: 3500, minGpaRequired: 2.5, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-06-30', applicationUrl: 'https://www.ugr.es' },
    ]
  },
  {
    id: 'uni-112', name: 'University of Seville', country: 'Spain', city: 'Seville',
    websiteUrl: 'https://www.us.es', logoUrl: '', rankingQs: 450, rankingThe: 420,
    estimatedMonthlyLivingCostEur: 650,
    description: 'University of Seville is one of Spain\'s largest universities with a vibrant student life and affordable costs.',
    programs: [
      { id: 'p-257', universityId: 'uni-112', name: 'M.Sc. Computer Engineering', fieldOfStudy: 'Engineering', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 18, tuitionPerYearEur: 3500, minGpaRequired: 2.5, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-06-30', applicationUrl: 'https://www.us.es' },
      { id: 'p-258', universityId: 'uni-112', name: 'M.Sc. Economics', fieldOfStudy: 'Economics', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 18, tuitionPerYearEur: 3500, minGpaRequired: 2.5, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-06-30', applicationUrl: 'https://www.us.es' },
    ]
  },
  {
    id: 'uni-113', name: 'University Carlos III of Madrid', country: 'Spain', city: 'Madrid',
    websiteUrl: 'https://www.uc3m.es', logoUrl: '', rankingQs: 310, rankingThe: 290,
    estimatedMonthlyLivingCostEur: 900,
    description: 'UC3M is a modern Spanish university highly ranked for economics, engineering, and social sciences.',
    programs: [
      { id: 'p-259', universityId: 'uni-113', name: 'M.Sc. Computer Science and Technology', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 18, tuitionPerYearEur: 6000, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-05-15', applicationUrl: 'https://www.uc3m.es' },
      { id: 'p-260', universityId: 'uni-113', name: 'M.Sc. Business Administration', fieldOfStudy: 'Business Administration', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 18, tuitionPerYearEur: 6000, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-05-15', applicationUrl: 'https://www.uc3m.es' },
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
      { id: 'p-261', universityId: 'uni-114', name: 'M.Sc. Computer Science', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 14000, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-01-15', applicationUrl: 'https://liu.se' },
      { id: 'p-262', universityId: 'uni-114', name: 'M.Sc. Mechanical Engineering', fieldOfStudy: 'Engineering', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 14000, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-01-15', applicationUrl: 'https://liu.se' },
    ]
  },
  {
    id: 'uni-115', name: 'Umeå University', country: 'Sweden', city: 'Umeå',
    websiteUrl: 'https://www.umu.se', logoUrl: '', rankingQs: 400, rankingThe: 370,
    estimatedMonthlyLivingCostEur: 800,
    description: 'Umeå University is a comprehensive research university in northern Sweden with a strong international profile.',
    programs: [
      { id: 'p-263', universityId: 'uni-115', name: 'M.Sc. Computing Science', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 12000, minGpaRequired: 2.8, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-01-15', applicationUrl: 'https://www.umu.se' },
      { id: 'p-264', universityId: 'uni-115', name: 'M.Sc. Physics', fieldOfStudy: 'Physics', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 12000, minGpaRequired: 2.8, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-01-15', applicationUrl: 'https://www.umu.se' },
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
      { id: 'p-265', universityId: 'uni-116', name: 'M.Sc. Computer Science', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 13500, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-03-01', applicationUrl: 'https://www.aau.dk' },
      { id: 'p-266', universityId: 'uni-116', name: 'M.Sc. Engineering', fieldOfStudy: 'Engineering', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 13500, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-03-01', applicationUrl: 'https://www.aau.dk' },
    ]
  },
  {
    id: 'uni-117', name: 'University of Southern Denmark', country: 'Denmark', city: 'Odense',
    websiteUrl: 'https://www.sdu.dk', logoUrl: '', rankingQs: 370, rankingThe: 340,
    estimatedMonthlyLivingCostEur: 850,
    description: 'SDU offers innovative education with a focus on interdisciplinary research and robot technology.',
    programs: [
      { id: 'p-267', universityId: 'uni-117', name: 'M.Sc. Computer Science', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 12000, minGpaRequired: 2.8, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-03-01', applicationUrl: 'https://www.sdu.dk' },
      { id: 'p-268', universityId: 'uni-117', name: 'M.Sc. Economics', fieldOfStudy: 'Economics', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 12000, minGpaRequired: 2.8, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-03-01', applicationUrl: 'https://www.sdu.dk' },
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
      { id: 'p-269', universityId: 'uni-118', name: 'M.Sc. Computer Science', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 0, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-04-15', applicationUrl: 'https://www.uib.no' },
      { id: 'p-270', universityId: 'uni-118', name: 'M.Sc. Biology', fieldOfStudy: 'Biology', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 0, minGpaRequired: 2.8, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-04-15', applicationUrl: 'https://www.uib.no' },
    ]
  },
  {
    id: 'uni-119', name: 'UiT The Arctic University of Norway', country: 'Norway', city: 'Tromsø',
    websiteUrl: 'https://en.uit.no', logoUrl: '', rankingQs: 450, rankingThe: 400,
    estimatedMonthlyLivingCostEur: 1100,
    description: 'UiT is the world\'s northernmost university, specializing in arctic and climate research.',
    programs: [
      { id: 'p-271', universityId: 'uni-119', name: 'M.Sc. Computer Science', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 0, minGpaRequired: 2.8, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-04-15', applicationUrl: 'https://en.uit.no' },
      { id: 'p-272', universityId: 'uni-119', name: 'M.Sc. Physics', fieldOfStudy: 'Physics', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 0, minGpaRequired: 2.8, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-04-15', applicationUrl: 'https://en.uit.no' },
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
      { id: 'p-273', universityId: 'uni-120', name: 'M.Sc. Computer Science', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 12000, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-01-15', applicationUrl: 'https://www.oulu.fi' },
      { id: 'p-274', universityId: 'uni-120', name: 'M.Sc. Engineering', fieldOfStudy: 'Engineering', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 12000, minGpaRequired: 2.8, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-01-15', applicationUrl: 'https://www.oulu.fi' },
    ]
  },
  {
    id: 'uni-121', name: 'LUT University', country: 'Finland', city: 'Lappeenranta',
    websiteUrl: 'https://www.lut.fi', logoUrl: '', rankingQs: 450, rankingThe: 420,
    estimatedMonthlyLivingCostEur: 700,
    description: 'LUT is a pioneering science university combining technology, business, and sustainability research.',
    programs: [
      { id: 'p-275', universityId: 'uni-121', name: 'M.Sc. Software Engineering', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 11500, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-01-31', applicationUrl: 'https://www.lut.fi' },
      { id: 'p-276', universityId: 'uni-121', name: 'M.Sc. Business Administration', fieldOfStudy: 'Business Administration', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 11500, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-01-31', applicationUrl: 'https://www.lut.fi' },
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
      { id: 'p-277', universityId: 'uni-122', name: 'M.Sc. Computer Science', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 1500, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-07-15', applicationUrl: 'https://www.tugraz.at' },
      { id: 'p-278', universityId: 'uni-122', name: 'M.Sc. Electrical Engineering', fieldOfStudy: 'Engineering', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 1500, minGpaRequired: 2.8, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-07-15', applicationUrl: 'https://www.tugraz.at' },
    ]
  },
  {
    id: 'uni-123', name: 'Johannes Kepler University Linz', country: 'Austria', city: 'Linz',
    websiteUrl: 'https://www.jku.at', logoUrl: '', rankingQs: 450, rankingThe: 400,
    estimatedMonthlyLivingCostEur: 700,
    description: 'JKU Linz is known for its Institute for Machine Learning and strong ties to tech industry.',
    programs: [
      { id: 'p-279', universityId: 'uni-123', name: 'M.Sc. Artificial Intelligence', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 1500, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-07-15', applicationUrl: 'https://www.jku.at' },
      { id: 'p-280', universityId: 'uni-123', name: 'M.Sc. Computer Science', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 1500, minGpaRequired: 2.8, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-07-15', applicationUrl: 'https://www.jku.at' },
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
      { id: 'p-281', universityId: 'uni-124', name: 'M.Sc. Computer Science', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 1000, minGpaRequired: 3.2, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-02-28', applicationUrl: 'https://www.unige.ch' },
      { id: 'p-282', universityId: 'uni-124', name: 'M.Sc. Physics', fieldOfStudy: 'Physics', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 1000, minGpaRequired: 3.2, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-02-28', applicationUrl: 'https://www.unige.ch' },
      { id: 'p-283', universityId: 'uni-124', name: 'M.A. International Affairs', fieldOfStudy: 'Social Sciences', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 1000, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-02-28', applicationUrl: 'https://www.unige.ch' },
    ]
  },
  {
    id: 'uni-125', name: 'University of Lausanne', country: 'Switzerland', city: 'Lausanne',
    websiteUrl: 'https://www.unil.ch', logoUrl: '', rankingQs: 200, rankingThe: 190,
    estimatedMonthlyLivingCostEur: 1400,
    description: 'University of Lausanne is located on the shores of Lake Geneva, known for business, economics, and life sciences.',
    programs: [
      { id: 'p-284', universityId: 'uni-125', name: 'M.Sc. Economics', fieldOfStudy: 'Economics', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 1160, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-02-28', applicationUrl: 'https://www.unil.ch' },
      { id: 'p-285', universityId: 'uni-125', name: 'M.Sc. Biology', fieldOfStudy: 'Biology', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 1160, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-02-28', applicationUrl: 'https://www.unil.ch' },
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
      { id: 'p-286', universityId: 'uni-126', name: 'M.Sc. Computer Science', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 6000, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-05-01', applicationUrl: 'https://www.uantwerpen.be' },
      { id: 'p-287', universityId: 'uni-126', name: 'M.Sc. Biology', fieldOfStudy: 'Biology', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 6000, minGpaRequired: 2.8, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-05-01', applicationUrl: 'https://www.uantwerpen.be' },
    ]
  },
  {
    id: 'uni-127', name: 'Vrije Universiteit Brussel', country: 'Belgium', city: 'Brussels',
    websiteUrl: 'https://www.vub.be', logoUrl: '', rankingQs: 300, rankingThe: 280,
    estimatedMonthlyLivingCostEur: 950,
    description: 'VUB is a Dutch-speaking free university in Brussels with strong AI and engineering research groups.',
    programs: [
      { id: 'p-288', universityId: 'uni-127', name: 'M.Sc. Computer Science', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 6000, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-05-01', applicationUrl: 'https://www.vub.be' },
      { id: 'p-289', universityId: 'uni-127', name: 'M.Sc. Engineering', fieldOfStudy: 'Engineering', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 6000, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-05-01', applicationUrl: 'https://www.vub.be' },
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
      { id: 'p-290', universityId: 'uni-128', name: 'M.Sc. Computer Science', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 12, tuitionPerYearEur: 18000, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-06-30', applicationUrl: 'https://www.universityofgalway.ie' },
      { id: 'p-291', universityId: 'uni-128', name: 'M.Sc. Data Analytics', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 12, tuitionPerYearEur: 18000, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-06-30', applicationUrl: 'https://www.universityofgalway.ie' },
    ]
  },
  {
    id: 'uni-129', name: 'Dublin City University', country: 'Ireland', city: 'Dublin',
    websiteUrl: 'https://www.dcu.ie', logoUrl: '', rankingQs: 420, rankingThe: 400,
    estimatedMonthlyLivingCostEur: 1100,
    description: 'DCU is an innovative Irish university known for its enterprise and engagement focus.',
    programs: [
      { id: 'p-292', universityId: 'uni-129', name: 'M.Sc. Computing', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 12, tuitionPerYearEur: 16000, minGpaRequired: 2.8, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-06-30', applicationUrl: 'https://www.dcu.ie' },
      { id: 'p-293', universityId: 'uni-129', name: 'M.Sc. Business Administration', fieldOfStudy: 'Business Administration', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 12, tuitionPerYearEur: 16000, minGpaRequired: 2.8, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-06-30', applicationUrl: 'https://www.dcu.ie' },
    ]
  },
  {
    id: 'uni-130', name: 'University of Limerick', country: 'Ireland', city: 'Limerick',
    websiteUrl: 'https://www.ul.ie', logoUrl: '', rankingQs: 480, rankingThe: 450,
    estimatedMonthlyLivingCostEur: 850,
    description: 'University of Limerick is known for its co-operative education program and strong industry links.',
    programs: [
      { id: 'p-294', universityId: 'uni-130', name: 'M.Sc. Software Engineering', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 12, tuitionPerYearEur: 15000, minGpaRequired: 2.8, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-06-30', applicationUrl: 'https://www.ul.ie' },
      { id: 'p-295', universityId: 'uni-130', name: 'M.Sc. Economics', fieldOfStudy: 'Economics', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 12, tuitionPerYearEur: 15000, minGpaRequired: 2.8, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-06-30', applicationUrl: 'https://www.ul.ie' },
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
      { id: 'p-296', universityId: 'uni-131', name: 'M.Sc. Computer Science', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 3000, minGpaRequired: 2.8, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-06-30', applicationUrl: 'https://www.uc.pt' },
      { id: 'p-297', universityId: 'uni-131', name: 'M.Sc. Mathematics', fieldOfStudy: 'Mathematics', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 3000, minGpaRequired: 2.8, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-06-30', applicationUrl: 'https://www.uc.pt' },
    ]
  },
  {
    id: 'uni-132', name: 'University of Aveiro', country: 'Portugal', city: 'Aveiro',
    websiteUrl: 'https://www.ua.pt', logoUrl: '', rankingQs: 450, rankingThe: 420,
    estimatedMonthlyLivingCostEur: 500,
    description: 'University of Aveiro is a modern Portuguese university known for its innovative campus and engineering programs.',
    programs: [
      { id: 'p-298', universityId: 'uni-132', name: 'M.Sc. Computer Engineering', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 2500, minGpaRequired: 2.5, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-06-30', applicationUrl: 'https://www.ua.pt' },
      { id: 'p-299', universityId: 'uni-132', name: 'M.Sc. Engineering', fieldOfStudy: 'Engineering', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 2500, minGpaRequired: 2.5, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-06-30', applicationUrl: 'https://www.ua.pt' },
    ]
  },
  {
    id: 'uni-133', name: 'NOVA University Lisbon', country: 'Portugal', city: 'Lisbon',
    websiteUrl: 'https://www.unl.pt', logoUrl: '', rankingQs: 350, rankingThe: 330,
    estimatedMonthlyLivingCostEur: 700,
    description: 'NOVA is a young, modern Portuguese university recognized for its business school and social sciences.',
    programs: [
      { id: 'p-300', universityId: 'uni-133', name: 'M.Sc. Computer Science', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 4000, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-06-30', applicationUrl: 'https://www.unl.pt' },
      { id: 'p-301', universityId: 'uni-133', name: 'M.Sc. Economics', fieldOfStudy: 'Economics', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 4000, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-06-30', applicationUrl: 'https://www.unl.pt' },
      { id: 'p-302', universityId: 'uni-133', name: 'M.Sc. Business Administration', fieldOfStudy: 'Business Administration', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 18, tuitionPerYearEur: 8000, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-06-30', applicationUrl: 'https://www.unl.pt' },
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
      { id: 'p-303', universityId: 'uni-134', name: 'M.Sc. Computer Science', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 3500, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-07-15', applicationUrl: 'https://pwr.edu.pl' },
      { id: 'p-304', universityId: 'uni-134', name: 'M.Sc. Engineering', fieldOfStudy: 'Engineering', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 3500, minGpaRequired: 2.8, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-07-15', applicationUrl: 'https://pwr.edu.pl' },
    ]
  },
  {
    id: 'uni-135', name: 'Poznan University of Technology', country: 'Poland', city: 'Poznan',
    websiteUrl: 'https://www.put.poznan.pl', logoUrl: '', rankingQs: 600, rankingThe: 550,
    estimatedMonthlyLivingCostEur: 480,
    description: 'Poznan Tech is one of Poland\'s leading technical universities with strong engineering programs.',
    programs: [
      { id: 'p-305', universityId: 'uni-135', name: 'M.Sc. Computer Science', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 3000, minGpaRequired: 2.8, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-07-15', applicationUrl: 'https://www.put.poznan.pl' },
      { id: 'p-306', universityId: 'uni-135', name: 'M.Sc. Mechanical Engineering', fieldOfStudy: 'Engineering', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 3000, minGpaRequired: 2.8, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-07-15', applicationUrl: 'https://www.put.poznan.pl' },
    ]
  },
  {
    id: 'uni-136', name: 'University of Wroclaw', country: 'Poland', city: 'Wroclaw',
    websiteUrl: 'https://www.uni.wroc.pl', logoUrl: '', rankingQs: 500, rankingThe: 470,
    estimatedMonthlyLivingCostEur: 500,
    description: 'University of Wroclaw is one of Poland\'s oldest universities with 11 Nobel Prize laureates.',
    programs: [
      { id: 'p-307', universityId: 'uni-136', name: 'M.Sc. Computer Science', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 3000, minGpaRequired: 2.8, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-07-15', applicationUrl: 'https://www.uni.wroc.pl' },
      { id: 'p-308', universityId: 'uni-136', name: 'M.Sc. Mathematics', fieldOfStudy: 'Mathematics', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 3000, minGpaRequired: 2.8, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-07-15', applicationUrl: 'https://www.uni.wroc.pl' },
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
      { id: 'p-309', universityId: 'uni-137', name: 'M.Sc. Computer Science', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 4000, minGpaRequired: 2.8, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-04-30', applicationUrl: 'https://www.vut.cz' },
      { id: 'p-310', universityId: 'uni-137', name: 'M.Sc. Engineering', fieldOfStudy: 'Engineering', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 4000, minGpaRequired: 2.8, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-04-30', applicationUrl: 'https://www.vut.cz' },
    ]
  },
  {
    id: 'uni-138', name: 'University of Chemistry and Technology Prague', country: 'Czech Republic', city: 'Prague',
    websiteUrl: 'https://www.vscht.cz', logoUrl: '', rankingQs: 500, rankingThe: 470,
    estimatedMonthlyLivingCostEur: 600,
    description: 'UCT Prague is the largest university of its kind in Central Europe, specializing in chemistry and chemical engineering.',
    programs: [
      { id: 'p-311', universityId: 'uni-138', name: 'M.Sc. Chemistry', fieldOfStudy: 'Chemistry', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 5000, minGpaRequired: 2.8, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-04-30', applicationUrl: 'https://www.vscht.cz' },
      { id: 'p-312', universityId: 'uni-138', name: 'M.Sc. Engineering', fieldOfStudy: 'Engineering', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 5000, minGpaRequired: 2.8, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-04-30', applicationUrl: 'https://www.vscht.cz' },
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
      { id: 'p-313', universityId: 'uni-139', name: 'M.Sc. Computer Science', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 3500, minGpaRequired: 2.5, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-06-15', applicationUrl: 'https://www.unideb.hu' },
      { id: 'p-314', universityId: 'uni-139', name: 'M.Sc. Mathematics', fieldOfStudy: 'Mathematics', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 3500, minGpaRequired: 2.5, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-06-15', applicationUrl: 'https://www.unideb.hu' },
    ]
  },
  {
    id: 'uni-140', name: 'University of Szeged', country: 'Hungary', city: 'Szeged',
    websiteUrl: 'https://www.u-szeged.hu', logoUrl: '', rankingQs: 500, rankingThe: 480,
    estimatedMonthlyLivingCostEur: 380,
    description: 'University of Szeged is one of Hungary\'s most distinguished universities, known for sciences and medicine.',
    programs: [
      { id: 'p-315', universityId: 'uni-140', name: 'M.Sc. Computer Science', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 3000, minGpaRequired: 2.5, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-06-15', applicationUrl: 'https://www.u-szeged.hu' },
      { id: 'p-316', universityId: 'uni-140', name: 'M.Sc. Physics', fieldOfStudy: 'Physics', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 3000, minGpaRequired: 2.5, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-06-15', applicationUrl: 'https://www.u-szeged.hu' },
    ]
  },
  {
    id: 'uni-141', name: 'Corvinus University of Budapest', country: 'Hungary', city: 'Budapest',
    websiteUrl: 'https://www.uni-corvinus.hu', logoUrl: '', rankingQs: 480, rankingThe: 460,
    estimatedMonthlyLivingCostEur: 500,
    description: 'Corvinus is Hungary\'s leading university for economics, business, and social sciences.',
    programs: [
      { id: 'p-317', universityId: 'uni-141', name: 'M.Sc. Economics', fieldOfStudy: 'Economics', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 4000, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-06-15', applicationUrl: 'https://www.uni-corvinus.hu' },
      { id: 'p-318', universityId: 'uni-141', name: 'M.Sc. Business Administration', fieldOfStudy: 'Business Administration', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 4000, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-06-15', applicationUrl: 'https://www.uni-corvinus.hu' },
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
      { id: 'p-319', universityId: 'uni-142', name: 'M.Sc. Computer Science', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 2500, minGpaRequired: 2.5, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-07-15', applicationUrl: 'https://www.ubbcluj.ro' },
      { id: 'p-320', universityId: 'uni-142', name: 'M.Sc. Mathematics', fieldOfStudy: 'Mathematics', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 2500, minGpaRequired: 2.5, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-07-15', applicationUrl: 'https://www.ubbcluj.ro' },
    ]
  },
  {
    id: 'uni-143', name: 'Technical University of Cluj-Napoca', country: 'Romania', city: 'Cluj-Napoca',
    websiteUrl: 'https://www.utcluj.ro', logoUrl: '', rankingQs: 650, rankingThe: 620,
    estimatedMonthlyLivingCostEur: 450,
    description: 'UTCN is one of Romania\'s leading technical universities with a growing tech ecosystem around it.',
    programs: [
      { id: 'p-321', universityId: 'uni-143', name: 'M.Sc. Computer Science', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 2000, minGpaRequired: 2.5, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-07-15', applicationUrl: 'https://www.utcluj.ro' },
      { id: 'p-322', universityId: 'uni-143', name: 'M.Sc. Engineering', fieldOfStudy: 'Engineering', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 2000, minGpaRequired: 2.5, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-07-15', applicationUrl: 'https://www.utcluj.ro' },
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
      { id: 'p-323', universityId: 'uni-144', name: 'M.Sc. Computer Science', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 2000, minGpaRequired: 2.5, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-07-15', applicationUrl: 'https://www.unist.hr' },
      { id: 'p-324', universityId: 'uni-144', name: 'M.Sc. Engineering', fieldOfStudy: 'Engineering', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 2000, minGpaRequired: 2.5, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-07-15', applicationUrl: 'https://www.unist.hr' },
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
      { id: 'p-325', universityId: 'uni-145', name: 'M.Sc. Computer Science', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 0, minGpaRequired: 2.8, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-06-30', applicationUrl: 'https://www.auth.gr' },
      { id: 'p-326', universityId: 'uni-145', name: 'M.Sc. Physics', fieldOfStudy: 'Physics', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 0, minGpaRequired: 2.8, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-06-30', applicationUrl: 'https://www.auth.gr' },
      { id: 'p-327', universityId: 'uni-145', name: 'M.Sc. Economics', fieldOfStudy: 'Economics', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 0, minGpaRequired: 2.8, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-06-30', applicationUrl: 'https://www.auth.gr' },
    ]
  },
  {
    id: 'uni-146', name: 'University of Crete', country: 'Greece', city: 'Heraklion',
    websiteUrl: 'https://www.uoc.gr', logoUrl: '', rankingQs: 500, rankingThe: 480,
    estimatedMonthlyLivingCostEur: 550,
    description: 'University of Crete is known for computer science and physics research, associated with FORTH research center.',
    programs: [
      { id: 'p-328', universityId: 'uni-146', name: 'M.Sc. Computer Science', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 0, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-06-30', applicationUrl: 'https://www.uoc.gr' },
      { id: 'p-329', universityId: 'uni-146', name: 'M.Sc. Physics', fieldOfStudy: 'Physics', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 0, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-06-30', applicationUrl: 'https://www.uoc.gr' },
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
      { id: 'p-330', universityId: 'uni-147', name: 'M.Sc. Computer Science', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 4000, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-04-01', applicationUrl: 'https://www.ut.ee' },
      { id: 'p-331', universityId: 'uni-147', name: 'M.Sc. Data Science', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 4000, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-04-01', applicationUrl: 'https://www.ut.ee' },
      { id: 'p-332', universityId: 'uni-147', name: 'M.Sc. Mathematics', fieldOfStudy: 'Mathematics', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 4000, minGpaRequired: 2.8, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-04-01', applicationUrl: 'https://www.ut.ee' },
    ]
  },
  {
    id: 'uni-148', name: 'Tallinn University of Technology', country: 'Estonia', city: 'Tallinn',
    websiteUrl: 'https://taltech.ee', logoUrl: '', rankingQs: 450, rankingThe: 420,
    estimatedMonthlyLivingCostEur: 650,
    description: 'TalTech is Estonia\'s only technological university, located in one of Europe\'s most digital societies.',
    programs: [
      { id: 'p-333', universityId: 'uni-148', name: 'M.Sc. Computer Science', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 4500, minGpaRequired: 2.8, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-05-01', applicationUrl: 'https://taltech.ee' },
      { id: 'p-334', universityId: 'uni-148', name: 'M.Sc. Cybersecurity', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 4500, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-05-01', applicationUrl: 'https://taltech.ee' },
      { id: 'p-335', universityId: 'uni-148', name: 'M.Sc. Engineering', fieldOfStudy: 'Engineering', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 4500, minGpaRequired: 2.8, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-05-01', applicationUrl: 'https://taltech.ee' },
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
      { id: 'p-336', universityId: 'uni-149', name: 'M.Sc. Computer Science', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 3500, minGpaRequired: 2.8, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-06-01', applicationUrl: 'https://www.vu.lt' },
      { id: 'p-337', universityId: 'uni-149', name: 'M.Sc. Economics', fieldOfStudy: 'Economics', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 3500, minGpaRequired: 2.8, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-06-01', applicationUrl: 'https://www.vu.lt' },
    ]
  },
  {
    id: 'uni-150', name: 'Kaunas University of Technology', country: 'Lithuania', city: 'Kaunas',
    websiteUrl: 'https://ktu.edu', logoUrl: '', rankingQs: 550, rankingThe: 520,
    estimatedMonthlyLivingCostEur: 450,
    description: 'KTU is Lithuania\'s largest technical university with a focus on interdisciplinary research and innovation.',
    programs: [
      { id: 'p-338', universityId: 'uni-150', name: 'M.Sc. Computer Science', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 3200, minGpaRequired: 2.5, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-06-15', applicationUrl: 'https://ktu.edu' },
      { id: 'p-339', universityId: 'uni-150', name: 'M.Sc. Engineering', fieldOfStudy: 'Engineering', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 3200, minGpaRequired: 2.5, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-06-15', applicationUrl: 'https://ktu.edu' },
    ]
  },
  {
    id: 'uni-151', name: 'Vilnius Gediminas Technical University', country: 'Lithuania', city: 'Vilnius',
    websiteUrl: 'https://vilniustech.lt', logoUrl: '', rankingQs: 600, rankingThe: 570,
    estimatedMonthlyLivingCostEur: 500,
    description: 'VILNIUS TECH is one of Lithuania\'s leading technical universities, strong in civil engineering and IT.',
    programs: [
      { id: 'p-340', universityId: 'uni-151', name: 'M.Sc. Computer Science', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 3000, minGpaRequired: 2.5, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-06-15', applicationUrl: 'https://vilniustech.lt' },
      { id: 'p-341', universityId: 'uni-151', name: 'M.Sc. Engineering', fieldOfStudy: 'Engineering', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 3000, minGpaRequired: 2.5, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-06-15', applicationUrl: 'https://vilniustech.lt' },
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
      { id: 'p-342', universityId: 'uni-152', name: 'M.Sc. Computer Science', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 3500, minGpaRequired: 2.5, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-06-15', applicationUrl: 'https://www.lu.lv' },
      { id: 'p-343', universityId: 'uni-152', name: 'M.Sc. Mathematics', fieldOfStudy: 'Mathematics', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 3500, minGpaRequired: 2.5, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-06-15', applicationUrl: 'https://www.lu.lv' },
    ]
  },
  {
    id: 'uni-153', name: 'Riga Technical University', country: 'Latvia', city: 'Riga',
    websiteUrl: 'https://www.rtu.lv', logoUrl: '', rankingQs: 600, rankingThe: 570,
    estimatedMonthlyLivingCostEur: 550,
    description: 'RTU is Latvia\'s oldest and leading technical university with strong engineering and IT programs.',
    programs: [
      { id: 'p-344', universityId: 'uni-153', name: 'M.Sc. Computer Science', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 3500, minGpaRequired: 2.5, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-06-15', applicationUrl: 'https://www.rtu.lv' },
      { id: 'p-345', universityId: 'uni-153', name: 'M.Sc. Engineering', fieldOfStudy: 'Engineering', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 3500, minGpaRequired: 2.5, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-06-15', applicationUrl: 'https://www.rtu.lv' },
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
      { id: 'p-346', universityId: 'uni-154', name: 'M.Sc. Computer Science', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 3000, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-06-15', applicationUrl: 'https://www.uni-lj.si' },
      { id: 'p-347', universityId: 'uni-154', name: 'M.Sc. Mathematics', fieldOfStudy: 'Mathematics', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 3000, minGpaRequired: 2.8, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-06-15', applicationUrl: 'https://www.uni-lj.si' },
      { id: 'p-348', universityId: 'uni-154', name: 'M.Sc. Engineering', fieldOfStudy: 'Engineering', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 3000, minGpaRequired: 2.8, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-06-15', applicationUrl: 'https://www.uni-lj.si' },
    ]
  },
  {
    id: 'uni-155', name: 'University of Maribor', country: 'Slovenia', city: 'Maribor',
    websiteUrl: 'https://www.um.si', logoUrl: '', rankingQs: 600, rankingThe: 570,
    estimatedMonthlyLivingCostEur: 500,
    description: 'University of Maribor is Slovenia\'s second largest university, strong in engineering and IT.',
    programs: [
      { id: 'p-349', universityId: 'uni-155', name: 'M.Sc. Computer Science', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 2500, minGpaRequired: 2.5, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-06-15', applicationUrl: 'https://www.um.si' },
      { id: 'p-350', universityId: 'uni-155', name: 'M.Sc. Engineering', fieldOfStudy: 'Engineering', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 2500, minGpaRequired: 2.5, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-06-15', applicationUrl: 'https://www.um.si' },
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
      { id: 'p-351', universityId: 'uni-156', name: 'M.Sc. Computer Science', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 3000, minGpaRequired: 2.8, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-06-30', applicationUrl: 'https://www.uniba.sk' },
      { id: 'p-352', universityId: 'uni-156', name: 'M.Sc. Mathematics', fieldOfStudy: 'Mathematics', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 3000, minGpaRequired: 2.5, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-06-30', applicationUrl: 'https://www.uniba.sk' },
    ]
  },
  {
    id: 'uni-157', name: 'Slovak University of Technology', country: 'Slovakia', city: 'Bratislava',
    websiteUrl: 'https://www.stuba.sk', logoUrl: '', rankingQs: 650, rankingThe: 620,
    estimatedMonthlyLivingCostEur: 500,
    description: 'STU is Slovakia\'s leading technical university with strong engineering and architecture programs.',
    programs: [
      { id: 'p-353', universityId: 'uni-157', name: 'M.Sc. Computer Science', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 2500, minGpaRequired: 2.5, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-06-30', applicationUrl: 'https://www.stuba.sk' },
      { id: 'p-354', universityId: 'uni-157', name: 'M.Sc. Engineering', fieldOfStudy: 'Engineering', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 2500, minGpaRequired: 2.5, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-06-30', applicationUrl: 'https://www.stuba.sk' },
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
      { id: 'p-355', universityId: 'uni-158', name: 'M.Sc. Computer Science', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 2000, minGpaRequired: 2.8, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-06-30', applicationUrl: 'https://www.bg.ac.rs' },
      { id: 'p-356', universityId: 'uni-158', name: 'M.Sc. Mathematics', fieldOfStudy: 'Mathematics', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 2000, minGpaRequired: 2.8, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-06-30', applicationUrl: 'https://www.bg.ac.rs' },
      { id: 'p-357', universityId: 'uni-158', name: 'M.Sc. Engineering', fieldOfStudy: 'Engineering', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 2000, minGpaRequired: 2.5, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-06-30', applicationUrl: 'https://www.bg.ac.rs' },
    ]
  },
  {
    id: 'uni-159', name: 'University of Novi Sad', country: 'Serbia', city: 'Novi Sad',
    websiteUrl: 'https://www.uns.ac.rs', logoUrl: '', rankingQs: 650, rankingThe: 620,
    estimatedMonthlyLivingCostEur: 380,
    description: 'University of Novi Sad is Serbia\'s second largest university, known for its Faculty of Sciences and IT programs.',
    programs: [
      { id: 'p-358', universityId: 'uni-159', name: 'M.Sc. Computer Science', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 1800, minGpaRequired: 2.5, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-06-30', applicationUrl: 'https://www.uns.ac.rs' },
      { id: 'p-359', universityId: 'uni-159', name: 'M.Sc. Engineering', fieldOfStudy: 'Engineering', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 1800, minGpaRequired: 2.5, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-06-30', applicationUrl: 'https://www.uns.ac.rs' },
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
      { id: 'p-360', universityId: 'uni-160', name: 'M.Sc. Computer Science', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 2500, minGpaRequired: 2.5, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-06-30', applicationUrl: 'https://www.uni-sofia.bg' },
      { id: 'p-361', universityId: 'uni-160', name: 'M.Sc. Mathematics', fieldOfStudy: 'Mathematics', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 2500, minGpaRequired: 2.5, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-06-30', applicationUrl: 'https://www.uni-sofia.bg' },
    ]
  },
  {
    id: 'uni-161', name: 'Technical University of Sofia', country: 'Bulgaria', city: 'Sofia',
    websiteUrl: 'https://www.tu-sofia.bg', logoUrl: '', rankingQs: 700, rankingThe: 670,
    estimatedMonthlyLivingCostEur: 400,
    description: 'TU Sofia is Bulgaria\'s leading technical university, the largest center of engineering education in the country.',
    programs: [
      { id: 'p-362', universityId: 'uni-161', name: 'M.Sc. Computer Science', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 2000, minGpaRequired: 2.5, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-06-30', applicationUrl: 'https://www.tu-sofia.bg' },
      { id: 'p-363', universityId: 'uni-161', name: 'M.Sc. Engineering', fieldOfStudy: 'Engineering', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 2000, minGpaRequired: 2.5, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-06-30', applicationUrl: 'https://www.tu-sofia.bg' },
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
      { id: 'p-364', universityId: 'uni-162', name: 'M.Sc. Computer Science', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 0, minGpaRequired: 2.8, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-07-15', applicationUrl: 'https://www.uni-leipzig.de' },
      { id: 'p-365', universityId: 'uni-162', name: 'M.Sc. Economics', fieldOfStudy: 'Economics', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 0, minGpaRequired: 2.8, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-07-15', applicationUrl: 'https://www.uni-leipzig.de' },
    ]
  },
  {
    id: 'uni-163', name: 'University of Jena', country: 'Germany', city: 'Jena',
    websiteUrl: 'https://www.uni-jena.de', logoUrl: '', rankingQs: 350, rankingThe: 320,
    estimatedMonthlyLivingCostEur: 650,
    description: 'Friedrich Schiller University Jena is a research-intensive university in Thuringia, known for optics and photonics.',
    programs: [
      { id: 'p-366', universityId: 'uni-163', name: 'M.Sc. Computer Science', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 0, minGpaRequired: 2.8, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-07-15', applicationUrl: 'https://www.uni-jena.de' },
      { id: 'p-367', universityId: 'uni-163', name: 'M.Sc. Physics', fieldOfStudy: 'Physics', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 0, minGpaRequired: 2.8, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-07-15', applicationUrl: 'https://www.uni-jena.de' },
    ]
  },
  {
    id: 'uni-164', name: 'University of Münster', country: 'Germany', city: 'Münster',
    websiteUrl: 'https://www.uni-muenster.de', logoUrl: '', rankingQs: 300, rankingThe: 270,
    estimatedMonthlyLivingCostEur: 800,
    description: 'University of Münster is one of Germany\'s largest universities, known for excellent research across all disciplines.',
    programs: [
      { id: 'p-368', universityId: 'uni-164', name: 'M.Sc. Computer Science', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 0, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-07-15', applicationUrl: 'https://www.uni-muenster.de' },
      { id: 'p-369', universityId: 'uni-164', name: 'M.Sc. Mathematics', fieldOfStudy: 'Mathematics', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 0, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-07-15', applicationUrl: 'https://www.uni-muenster.de' },
      { id: 'p-370', universityId: 'uni-164', name: 'M.Sc. Economics', fieldOfStudy: 'Economics', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 0, minGpaRequired: 2.8, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-07-15', applicationUrl: 'https://www.uni-muenster.de' },
    ]
  },
  {
    id: 'uni-165', name: 'University of Kiel', country: 'Germany', city: 'Kiel',
    websiteUrl: 'https://www.uni-kiel.de', logoUrl: '', rankingQs: 420, rankingThe: 390,
    estimatedMonthlyLivingCostEur: 750,
    description: 'University of Kiel is the only fully-fledged university in Schleswig-Holstein, strong in marine and ocean sciences.',
    programs: [
      { id: 'p-371', universityId: 'uni-165', name: 'M.Sc. Computer Science', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 0, minGpaRequired: 2.8, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-07-15', applicationUrl: 'https://www.uni-kiel.de' },
      { id: 'p-372', universityId: 'uni-165', name: 'M.Sc. Biology', fieldOfStudy: 'Biology', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 0, minGpaRequired: 2.8, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-07-15', applicationUrl: 'https://www.uni-kiel.de' },
    ]
  },
  {
    id: 'uni-166', name: 'University of Kaiserslautern-Landau', country: 'Germany', city: 'Kaiserslautern',
    websiteUrl: 'https://rptu.de', logoUrl: '', rankingQs: 500, rankingThe: 470,
    estimatedMonthlyLivingCostEur: 700,
    description: 'RPTU is a German technical university known for AI research (DFKI) and computer science.',
    programs: [
      { id: 'p-373', universityId: 'uni-166', name: 'M.Sc. Computer Science', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 0, minGpaRequired: 2.8, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-07-15', applicationUrl: 'https://rptu.de' },
      { id: 'p-374', universityId: 'uni-166', name: 'M.Sc. Mathematics', fieldOfStudy: 'Mathematics', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 0, minGpaRequired: 2.8, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-07-15', applicationUrl: 'https://rptu.de' },
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
      { id: 'p-375', universityId: 'uni-167', name: 'B.Sc. Computer Science', fieldOfStudy: 'Computer Science', degreeLevel: 'bachelors', languageOfInstruction: 'English', durationMonths: 36, tuitionPerYearEur: 12000, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-04-01', applicationUrl: 'https://www.uva.nl' },
      { id: 'p-376', universityId: 'uni-167', name: 'B.Sc. Economics and Business', fieldOfStudy: 'Economics', degreeLevel: 'bachelors', languageOfInstruction: 'English', durationMonths: 36, tuitionPerYearEur: 12000, minGpaRequired: 2.8, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-04-01', applicationUrl: 'https://www.uva.nl' },
      { id: 'p-377', universityId: 'uni-167', name: 'B.Sc. Psychology', fieldOfStudy: 'Psychology', degreeLevel: 'bachelors', languageOfInstruction: 'English', durationMonths: 36, tuitionPerYearEur: 12000, minGpaRequired: 2.8, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-04-01', applicationUrl: 'https://www.uva.nl' },
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
      { id: 'p-378', universityId: 'uni-168', name: 'M.A. Banking and Finance', fieldOfStudy: 'Business Administration', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 3000, minGpaRequired: 3.5, requiredLanguage: 'English', requiredLanguageLevel: 'C1', applicationDeadline: '2026-03-31', applicationUrl: 'https://www.unisg.ch' },
      { id: 'p-379', universityId: 'uni-168', name: 'M.A. Economics', fieldOfStudy: 'Economics', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 3000, minGpaRequired: 3.3, requiredLanguage: 'English', requiredLanguageLevel: 'C1', applicationDeadline: '2026-03-31', applicationUrl: 'https://www.unisg.ch' },
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
      { id: 'p-380', universityId: 'uni-169', name: 'M.A. Architecture', fieldOfStudy: 'Architecture', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 0, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-03-15', applicationUrl: 'https://www.uni-weimar.de' },
      { id: 'p-381', universityId: 'uni-169', name: 'M.Sc. Computer Science for Digital Media', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 0, minGpaRequired: 2.8, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-03-15', applicationUrl: 'https://www.uni-weimar.de' },
    ]
  },
  {
    id: 'uni-170', name: 'University of the Arts Berlin', country: 'Germany', city: 'Berlin',
    websiteUrl: 'https://www.udk-berlin.de', logoUrl: '', rankingQs: 500, rankingThe: 480,
    estimatedMonthlyLivingCostEur: 900,
    description: 'UdK Berlin is one of the largest and most diversified arts universities in the world.',
    programs: [
      { id: 'p-382', universityId: 'uni-170', name: 'M.A. Arts & Humanities', fieldOfStudy: 'Arts & Humanities', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 0, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-03-01', applicationUrl: 'https://www.udk-berlin.de' },
      { id: 'p-383', universityId: 'uni-170', name: 'M.A. Architecture', fieldOfStudy: 'Architecture', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 0, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-03-01', applicationUrl: 'https://www.udk-berlin.de' },
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
      { id: 'p-384', universityId: 'uni-171', name: 'B.Sc. Technical Computer Science', fieldOfStudy: 'Computer Science', degreeLevel: 'bachelors', languageOfInstruction: 'English', durationMonths: 36, tuitionPerYearEur: 12500, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-05-01', applicationUrl: 'https://www.utwente.nl' },
      { id: 'p-385', universityId: 'uni-171', name: 'B.Sc. Business & IT', fieldOfStudy: 'Business Administration', degreeLevel: 'bachelors', languageOfInstruction: 'English', durationMonths: 36, tuitionPerYearEur: 12500, minGpaRequired: 2.8, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-05-01', applicationUrl: 'https://www.utwente.nl' },
    ]
  },
  {
    id: 'uni-172', name: 'Jacobs University Bremen', country: 'Germany', city: 'Bremen',
    websiteUrl: 'https://www.jacobs-university.de', logoUrl: '', rankingQs: 500, rankingThe: 480,
    estimatedMonthlyLivingCostEur: 750,
    description: 'Jacobs University is a private, English-language university in Germany with a highly international campus.',
    programs: [
      { id: 'p-386', universityId: 'uni-172', name: 'B.Sc. Computer Science', fieldOfStudy: 'Computer Science', degreeLevel: 'bachelors', languageOfInstruction: 'English', durationMonths: 36, tuitionPerYearEur: 20000, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-06-01', applicationUrl: 'https://www.jacobs-university.de' },
      { id: 'p-387', universityId: 'uni-172', name: 'B.Sc. Business Administration', fieldOfStudy: 'Business Administration', degreeLevel: 'bachelors', languageOfInstruction: 'English', durationMonths: 36, tuitionPerYearEur: 20000, minGpaRequired: 2.8, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-06-01', applicationUrl: 'https://www.jacobs-university.de' },
    ]
  },
  {
    id: 'uni-173', name: 'Bocconi University', country: 'Italy', city: 'Milan',
    websiteUrl: 'https://www.unibocconi.it', logoUrl: '', rankingQs: 18, rankingThe: 50,
    estimatedMonthlyLivingCostEur: 1000,
    description: 'Bocconi is Italy\'s premier private university for business, economics, and finance, ranked #1 in Italy.',
    programs: [
      { id: 'p-388', universityId: 'uni-173', name: 'M.Sc. Economics and Management of Innovation', fieldOfStudy: 'Economics', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 14000, minGpaRequired: 3.5, requiredLanguage: 'English', requiredLanguageLevel: 'C1', applicationDeadline: '2026-01-10', applicationUrl: 'https://www.unibocconi.it' },
      { id: 'p-389', universityId: 'uni-173', name: 'M.Sc. Finance', fieldOfStudy: 'Business Administration', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 14000, minGpaRequired: 3.5, requiredLanguage: 'English', requiredLanguageLevel: 'C1', applicationDeadline: '2026-01-10', applicationUrl: 'https://www.unibocconi.it' },
      { id: 'p-390', universityId: 'uni-173', name: 'B.Sc. Economics', fieldOfStudy: 'Economics', degreeLevel: 'bachelors', languageOfInstruction: 'English', durationMonths: 36, tuitionPerYearEur: 13000, minGpaRequired: 3.3, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-01-10', applicationUrl: 'https://www.unibocconi.it' },
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
      { id: 'p-394', universityId: 'uni-175', name: 'M.Sc. Computer Science', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 12, tuitionPerYearEur: 16000, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-06-30', applicationUrl: 'https://www.ucc.ie' },
      { id: 'p-395', universityId: 'uni-175', name: 'M.Sc. Data Science', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 12, tuitionPerYearEur: 16000, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-06-30', applicationUrl: 'https://www.ucc.ie' },
    ]
  },
  {
    id: 'uni-176', name: 'Charité – Universitätsmedizin Berlin', country: 'Germany', city: 'Berlin',
    websiteUrl: 'https://www.charite.de', logoUrl: '', rankingQs: 80, rankingThe: 70,
    estimatedMonthlyLivingCostEur: 900,
    description: 'Charité is one of Europe\'s largest university hospitals, a leading institution for medical research and education.',
    programs: [
      { id: 'p-396', universityId: 'uni-176', name: 'M.Sc. Medicine (International Health)', fieldOfStudy: 'Medicine', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 0, minGpaRequired: 3.5, requiredLanguage: 'English', requiredLanguageLevel: 'C1', applicationDeadline: '2026-05-15', applicationUrl: 'https://www.charite.de' },
      { id: 'p-397', universityId: 'uni-176', name: 'M.Sc. Neuroscience', fieldOfStudy: 'Biology', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 0, minGpaRequired: 3.3, requiredLanguage: 'English', requiredLanguageLevel: 'C1', applicationDeadline: '2026-05-15', applicationUrl: 'https://www.charite.de' },
    ]
  },
  {
    id: 'uni-177', name: 'Aalborg University Copenhagen', country: 'Denmark', city: 'Copenhagen',
    websiteUrl: 'https://www.aau.dk/cph', logoUrl: '', rankingQs: 330, rankingThe: 300,
    estimatedMonthlyLivingCostEur: 1100,
    description: 'AAU Copenhagen campus offers innovative, problem-based learning programs in the Danish capital.',
    programs: [
      { id: 'p-398', universityId: 'uni-177', name: 'M.Sc. Data Science', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 13500, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-03-01', applicationUrl: 'https://www.aau.dk/cph' },
      { id: 'p-399', universityId: 'uni-177', name: 'M.Sc. Business Administration', fieldOfStudy: 'Business Administration', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 13500, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-03-01', applicationUrl: 'https://www.aau.dk/cph' },
    ]
  },
  {
    id: 'uni-178', name: 'Warsaw School of Economics', country: 'Poland', city: 'Warsaw',
    websiteUrl: 'https://www.sgh.waw.pl', logoUrl: '', rankingQs: 400, rankingThe: 380,
    estimatedMonthlyLivingCostEur: 550,
    description: 'SGH Warsaw is Poland\'s leading economics university, a member of the CEMS global alliance.',
    programs: [
      { id: 'p-400', universityId: 'uni-178', name: 'M.Sc. Economics', fieldOfStudy: 'Economics', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 3000, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-07-15', applicationUrl: 'https://www.sgh.waw.pl' },
      { id: 'p-401', universityId: 'uni-178', name: 'M.Sc. Business Administration', fieldOfStudy: 'Business Administration', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 3000, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-07-15', applicationUrl: 'https://www.sgh.waw.pl' },
    ]
  },
  {
    id: 'uni-179', name: 'University of Groningen (bachelors)', country: 'Netherlands', city: 'Groningen',
    websiteUrl: 'https://www.rug.nl', logoUrl: '', rankingQs: 139, rankingThe: 120,
    estimatedMonthlyLivingCostEur: 850,
    description: 'RUG Groningen offers numerous English-taught bachelor programs in a vibrant student city.',
    programs: [
      { id: 'p-402', universityId: 'uni-179', name: 'B.Sc. Artificial Intelligence', fieldOfStudy: 'Computer Science', degreeLevel: 'bachelors', languageOfInstruction: 'English', durationMonths: 36, tuitionPerYearEur: 13000, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-05-01', applicationUrl: 'https://www.rug.nl' },
      { id: 'p-403', universityId: 'uni-179', name: 'B.Sc. Economics and Business', fieldOfStudy: 'Economics', degreeLevel: 'bachelors', languageOfInstruction: 'English', durationMonths: 36, tuitionPerYearEur: 13000, minGpaRequired: 2.8, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-05-01', applicationUrl: 'https://www.rug.nl' },
      { id: 'p-404', universityId: 'uni-179', name: 'B.Sc. Psychology', fieldOfStudy: 'Psychology', degreeLevel: 'bachelors', languageOfInstruction: 'English', durationMonths: 36, tuitionPerYearEur: 13000, minGpaRequired: 2.8, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-05-01', applicationUrl: 'https://www.rug.nl' },
    ]
  },
  {
    id: 'uni-180', name: 'IST University of Lisbon', country: 'Portugal', city: 'Lisbon',
    websiteUrl: 'https://tecnico.ulisboa.pt', logoUrl: '', rankingQs: 250, rankingThe: 240,
    estimatedMonthlyLivingCostEur: 700,
    description: 'Instituto Superior Técnico is Portugal\'s top engineering school, part of University of Lisbon.',
    programs: [
      { id: 'p-405', universityId: 'uni-180', name: 'M.Sc. Computer Science', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 3500, minGpaRequired: 3.2, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-06-30', applicationUrl: 'https://tecnico.ulisboa.pt' },
      { id: 'p-406', universityId: 'uni-180', name: 'M.Sc. Engineering', fieldOfStudy: 'Engineering', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 3500, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-06-30', applicationUrl: 'https://tecnico.ulisboa.pt' },
      { id: 'p-407', universityId: 'uni-180', name: 'M.Sc. Mathematics', fieldOfStudy: 'Mathematics', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 3500, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-06-30', applicationUrl: 'https://tecnico.ulisboa.pt' },
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
      { id: 'p-408', universityId: 'uni-181', name: 'LLM International and European Law', fieldOfStudy: 'Law', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 12, tuitionPerYearEur: 16000, minGpaRequired: 3.2, requiredLanguage: 'English', requiredLanguageLevel: 'C1', applicationDeadline: '2026-04-01', applicationUrl: 'https://www.uva.nl' },
      { id: 'p-409', universityId: 'uni-181', name: 'LLM European Private Law', fieldOfStudy: 'Law', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 12, tuitionPerYearEur: 16000, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'C1', applicationDeadline: '2026-04-01', applicationUrl: 'https://www.uva.nl' },
    ]
  },
  {
    id: 'uni-182', name: 'Leiden University (Law)', country: 'Netherlands', city: 'Leiden',
    websiteUrl: 'https://www.universiteitleiden.nl', logoUrl: '', rankingQs: 120, rankingThe: 110,
    estimatedMonthlyLivingCostEur: 950,
    description: 'Leiden Law School is the oldest law school in the Netherlands with globally respected international law programs.',
    programs: [
      { id: 'p-410', universityId: 'uni-182', name: 'LLM Public International Law', fieldOfStudy: 'Law', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 12, tuitionPerYearEur: 17500, minGpaRequired: 3.3, requiredLanguage: 'English', requiredLanguageLevel: 'C1', applicationDeadline: '2026-04-01', applicationUrl: 'https://www.universiteitleiden.nl' },
      { id: 'p-411', universityId: 'uni-182', name: 'LLM European Law', fieldOfStudy: 'Law', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 12, tuitionPerYearEur: 17500, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'C1', applicationDeadline: '2026-04-01', applicationUrl: 'https://www.universiteitleiden.nl' },
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
      { id: 'p-412', universityId: 'uni-183', name: 'M.A. Education', fieldOfStudy: 'Education', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 13000, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-01-10', applicationUrl: 'https://www.helsinki.fi' },
      { id: 'p-413', universityId: 'uni-183', name: 'M.Sc. Psychology', fieldOfStudy: 'Psychology', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 13000, minGpaRequired: 3.2, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-01-10', applicationUrl: 'https://www.helsinki.fi' },
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
      { id: 'p-414', universityId: 'uni-184', name: 'B.Sc. Computer Science', fieldOfStudy: 'Computer Science', degreeLevel: 'bachelors', languageOfInstruction: 'English', durationMonths: 36, tuitionPerYearEur: 13500, minGpaRequired: 3.2, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-05-01', applicationUrl: 'https://www.tudelft.nl' },
      { id: 'p-415', universityId: 'uni-184', name: 'B.Sc. Aerospace Engineering', fieldOfStudy: 'Engineering', degreeLevel: 'bachelors', languageOfInstruction: 'English', durationMonths: 36, tuitionPerYearEur: 13500, minGpaRequired: 3.2, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-05-01', applicationUrl: 'https://www.tudelft.nl' },
    ]
  },
  {
    id: 'uni-185', name: 'Politecnico di Milano (bachelors)', country: 'Italy', city: 'Milan',
    websiteUrl: 'https://www.polimi.it', logoUrl: '', rankingQs: 111, rankingThe: 100,
    estimatedMonthlyLivingCostEur: 950,
    description: 'Politecnico di Milano also offers English-taught bachelors in engineering and design.',
    programs: [
      { id: 'p-416', universityId: 'uni-185', name: 'B.Sc. Engineering', fieldOfStudy: 'Engineering', degreeLevel: 'bachelors', languageOfInstruction: 'English', durationMonths: 36, tuitionPerYearEur: 3900, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-02-28', applicationUrl: 'https://www.polimi.it' },
      { id: 'p-417', universityId: 'uni-185', name: 'B.Sc. Architecture', fieldOfStudy: 'Architecture', degreeLevel: 'bachelors', languageOfInstruction: 'English', durationMonths: 36, tuitionPerYearEur: 3900, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-02-28', applicationUrl: 'https://www.polimi.it' },
    ]
  },
  {
    id: 'uni-186', name: 'Copenhagen Business School', country: 'Denmark', city: 'Copenhagen',
    websiteUrl: 'https://www.cbs.dk', logoUrl: '', rankingQs: 200, rankingThe: 190,
    estimatedMonthlyLivingCostEur: 1100,
    description: 'CBS is one of Northern Europe\'s largest business schools and among the top-ranked worldwide.',
    programs: [
      { id: 'p-418', universityId: 'uni-186', name: 'M.Sc. Business Administration', fieldOfStudy: 'Business Administration', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 13500, minGpaRequired: 3.3, requiredLanguage: 'English', requiredLanguageLevel: 'C1', applicationDeadline: '2026-03-01', applicationUrl: 'https://www.cbs.dk' },
      { id: 'p-419', universityId: 'uni-186', name: 'M.Sc. Economics', fieldOfStudy: 'Economics', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 13500, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-03-01', applicationUrl: 'https://www.cbs.dk' },
    ]
  },
  {
    id: 'uni-187', name: 'Stockholm School of Economics', country: 'Sweden', city: 'Stockholm',
    websiteUrl: 'https://www.hhs.se', logoUrl: '', rankingQs: 180, rankingThe: 170,
    estimatedMonthlyLivingCostEur: 1100,
    description: 'SSE is one of Europe\'s leading business schools, known for its research and strong alumni network.',
    programs: [
      { id: 'p-420', universityId: 'uni-187', name: 'M.Sc. Economics', fieldOfStudy: 'Economics', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 0, minGpaRequired: 3.5, requiredLanguage: 'English', requiredLanguageLevel: 'C1', applicationDeadline: '2026-01-15', applicationUrl: 'https://www.hhs.se' },
      { id: 'p-421', universityId: 'uni-187', name: 'M.Sc. Business Administration', fieldOfStudy: 'Business Administration', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 0, minGpaRequired: 3.5, requiredLanguage: 'English', requiredLanguageLevel: 'C1', applicationDeadline: '2026-01-15', applicationUrl: 'https://www.hhs.se' },
    ]
  },
  {
    id: 'uni-188', name: 'WHU – Otto Beisheim School of Management', country: 'Germany', city: 'Vallendar',
    websiteUrl: 'https://www.whu.edu', logoUrl: '', rankingQs: 400, rankingThe: 380,
    estimatedMonthlyLivingCostEur: 800,
    description: 'WHU is one of Germany\'s most prestigious private business schools, AACSB, EQUIS, and AMBA accredited.',
    programs: [
      { id: 'p-422', universityId: 'uni-188', name: 'M.Sc. Management', fieldOfStudy: 'Business Administration', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 18, tuitionPerYearEur: 24000, minGpaRequired: 3.5, requiredLanguage: 'English', requiredLanguageLevel: 'C1', applicationDeadline: '2026-03-31', applicationUrl: 'https://www.whu.edu' },
      { id: 'p-423', universityId: 'uni-188', name: 'M.Sc. Finance', fieldOfStudy: 'Economics', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 18, tuitionPerYearEur: 24000, minGpaRequired: 3.3, requiredLanguage: 'English', requiredLanguageLevel: 'C1', applicationDeadline: '2026-03-31', applicationUrl: 'https://www.whu.edu' },
    ]
  },
  {
    id: 'uni-189', name: 'University of Navarra', country: 'Spain', city: 'Pamplona',
    websiteUrl: 'https://www.unav.edu', logoUrl: '', rankingQs: 250, rankingThe: 240,
    estimatedMonthlyLivingCostEur: 700,
    description: 'University of Navarra houses IESE Business School and is one of Spain\'s top private research universities.',
    programs: [
      { id: 'p-424', universityId: 'uni-189', name: 'M.Sc. Engineering', fieldOfStudy: 'Engineering', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 18, tuitionPerYearEur: 12000, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-05-15', applicationUrl: 'https://www.unav.edu' },
      { id: 'p-425', universityId: 'uni-189', name: 'M.Sc. Economics', fieldOfStudy: 'Economics', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 18, tuitionPerYearEur: 12000, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-05-15', applicationUrl: 'https://www.unav.edu' },
    ]
  },
  {
    id: 'uni-190', name: 'Erasmus University Rotterdam (bachelors)', country: 'Netherlands', city: 'Rotterdam',
    websiteUrl: 'https://www.eur.nl', logoUrl: '', rankingQs: 176, rankingThe: 160,
    estimatedMonthlyLivingCostEur: 950,
    description: 'EUR Rotterdam offers English-taught bachelors at one of Europe\'s top economics and business faculties.',
    programs: [
      { id: 'p-426', universityId: 'uni-190', name: 'B.Sc. Economics and Business', fieldOfStudy: 'Economics', degreeLevel: 'bachelors', languageOfInstruction: 'English', durationMonths: 36, tuitionPerYearEur: 12500, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-05-01', applicationUrl: 'https://www.eur.nl' },
      { id: 'p-427', universityId: 'uni-190', name: 'B.Sc. Psychology', fieldOfStudy: 'Psychology', degreeLevel: 'bachelors', languageOfInstruction: 'English', durationMonths: 36, tuitionPerYearEur: 12500, minGpaRequired: 2.8, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-05-01', applicationUrl: 'https://www.eur.nl' },
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
      { id: 'p-428', universityId: 'uni-191', name: 'M.Sc. Biomedicine', fieldOfStudy: 'Biology', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 18000, minGpaRequired: 3.5, requiredLanguage: 'English', requiredLanguageLevel: 'C1', applicationDeadline: '2026-01-15', applicationUrl: 'https://ki.se' },
      { id: 'p-429', universityId: 'uni-191', name: 'M.Sc. Public Health', fieldOfStudy: 'Medicine', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 18000, minGpaRequired: 3.3, requiredLanguage: 'English', requiredLanguageLevel: 'C1', applicationDeadline: '2026-01-15', applicationUrl: 'https://ki.se' },
    ]
  },
  {
    id: 'uni-192', name: 'University of Groningen (Medicine)', country: 'Netherlands', city: 'Groningen',
    websiteUrl: 'https://www.rug.nl', logoUrl: '', rankingQs: 139, rankingThe: 120,
    estimatedMonthlyLivingCostEur: 850,
    description: 'RUG offers excellent medicine and natural science programs in a highly livable northern Dutch city.',
    programs: [
      { id: 'p-430', universityId: 'uni-192', name: 'M.Sc. Chemistry', fieldOfStudy: 'Chemistry', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 16000, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-05-01', applicationUrl: 'https://www.rug.nl' },
      { id: 'p-431', universityId: 'uni-192', name: 'M.Sc. Physics', fieldOfStudy: 'Physics', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 16000, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-05-01', applicationUrl: 'https://www.rug.nl' },
    ]
  },
  {
    id: 'uni-193', name: 'Scuola Normale Superiore', country: 'Italy', city: 'Pisa',
    websiteUrl: 'https://www.sns.it', logoUrl: '', rankingQs: 200, rankingThe: 180,
    estimatedMonthlyLivingCostEur: 750,
    description: 'Scuola Normale Superiore is one of Italy\'s most prestigious universities, fully funded and highly selective.',
    programs: [
      { id: 'p-432', universityId: 'uni-193', name: 'PhD Physics', fieldOfStudy: 'Physics', degreeLevel: 'phd', languageOfInstruction: 'English', durationMonths: 48, tuitionPerYearEur: 0, minGpaRequired: 3.7, requiredLanguage: 'English', requiredLanguageLevel: 'C1', applicationDeadline: '2026-04-15', applicationUrl: 'https://www.sns.it' },
      { id: 'p-433', universityId: 'uni-193', name: 'PhD Mathematics', fieldOfStudy: 'Mathematics', degreeLevel: 'phd', languageOfInstruction: 'English', durationMonths: 48, tuitionPerYearEur: 0, minGpaRequired: 3.7, requiredLanguage: 'English', requiredLanguageLevel: 'C1', applicationDeadline: '2026-04-15', applicationUrl: 'https://www.sns.it' },
    ]
  },
  {
    id: 'uni-194', name: 'Wageningen University (bachelors)', country: 'Netherlands', city: 'Wageningen',
    websiteUrl: 'https://www.wur.nl', logoUrl: '', rankingQs: 115, rankingThe: 100,
    estimatedMonthlyLivingCostEur: 850,
    description: 'Wageningen is the world\'s #1 university for agriculture and forestry, offering English-taught bachelor programs.',
    programs: [
      { id: 'p-434', universityId: 'uni-194', name: 'B.Sc. Biology', fieldOfStudy: 'Biology', degreeLevel: 'bachelors', languageOfInstruction: 'English', durationMonths: 36, tuitionPerYearEur: 13000, minGpaRequired: 2.8, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-05-01', applicationUrl: 'https://www.wur.nl' },
      { id: 'p-435', universityId: 'uni-194', name: 'B.Sc. Environmental Sciences', fieldOfStudy: 'Natural Sciences', degreeLevel: 'bachelors', languageOfInstruction: 'English', durationMonths: 36, tuitionPerYearEur: 13000, minGpaRequired: 2.8, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-05-01', applicationUrl: 'https://www.wur.nl' },
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
      { id: 'p-436', universityId: 'uni-195', name: 'B.Sc. Engineering', fieldOfStudy: 'Engineering', degreeLevel: 'bachelors', languageOfInstruction: 'English', durationMonths: 36, tuitionPerYearEur: 6000, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-03-01', applicationUrl: 'https://www.ugent.be' },
      { id: 'p-437', universityId: 'uni-195', name: 'B.Sc. Biology', fieldOfStudy: 'Biology', degreeLevel: 'bachelors', languageOfInstruction: 'English', durationMonths: 36, tuitionPerYearEur: 6000, minGpaRequired: 2.8, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-03-01', applicationUrl: 'https://www.ugent.be' },
    ]
  },
  {
    id: 'uni-196', name: 'University of Turku (bachelors)', country: 'Finland', city: 'Turku',
    websiteUrl: 'https://www.utu.fi', logoUrl: '', rankingQs: 310, rankingThe: 290,
    estimatedMonthlyLivingCostEur: 800,
    description: 'University of Turku offers interdisciplinary English-taught programs in Finland\'s oldest city.',
    programs: [
      { id: 'p-438', universityId: 'uni-196', name: 'B.Sc. Computer Science', fieldOfStudy: 'Computer Science', degreeLevel: 'bachelors', languageOfInstruction: 'English', durationMonths: 36, tuitionPerYearEur: 12000, minGpaRequired: 2.8, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-01-15', applicationUrl: 'https://www.utu.fi' },
      { id: 'p-439', universityId: 'uni-196', name: 'B.Sc. Education', fieldOfStudy: 'Education', degreeLevel: 'bachelors', languageOfInstruction: 'English', durationMonths: 36, tuitionPerYearEur: 12000, minGpaRequired: 2.8, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-01-15', applicationUrl: 'https://www.utu.fi' },
    ]
  },
  {
    id: 'uni-197', name: 'HEC Paris', country: 'France', city: 'Paris',
    websiteUrl: 'https://www.hec.edu', logoUrl: '', rankingQs: 100, rankingThe: 90,
    estimatedMonthlyLivingCostEur: 1300,
    description: 'HEC Paris is one of the world\'s top business schools, consistently ranked #1 in Europe for management.',
    programs: [
      { id: 'p-440', universityId: 'uni-197', name: 'M.Sc. Management', fieldOfStudy: 'Business Administration', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 18, tuitionPerYearEur: 35000, minGpaRequired: 3.5, requiredLanguage: 'English', requiredLanguageLevel: 'C1', applicationDeadline: '2026-03-15', applicationUrl: 'https://www.hec.edu' },
      { id: 'p-441', universityId: 'uni-197', name: 'M.Sc. Finance', fieldOfStudy: 'Economics', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 12, tuitionPerYearEur: 35000, minGpaRequired: 3.5, requiredLanguage: 'English', requiredLanguageLevel: 'C1', applicationDeadline: '2026-03-15', applicationUrl: 'https://www.hec.edu' },
    ]
  },
  {
    id: 'uni-198', name: 'WU Vienna', country: 'Austria', city: 'Vienna',
    websiteUrl: 'https://www.wu.ac.at', logoUrl: '', rankingQs: 300, rankingThe: 280,
    estimatedMonthlyLivingCostEur: 900,
    description: 'WU Vienna is one of Europe\'s largest and most modern business universities, triple-accredited.',
    programs: [
      { id: 'p-442', universityId: 'uni-198', name: 'M.Sc. Economics', fieldOfStudy: 'Economics', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 1500, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-03-31', applicationUrl: 'https://www.wu.ac.at' },
      { id: 'p-443', universityId: 'uni-198', name: 'M.Sc. Business Administration', fieldOfStudy: 'Business Administration', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 1500, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-03-31', applicationUrl: 'https://www.wu.ac.at' },
    ]
  },
  {
    id: 'uni-199', name: 'Technical University of Eindhoven (bachelors)', country: 'Netherlands', city: 'Eindhoven',
    websiteUrl: 'https://www.tue.nl', logoUrl: '', rankingQs: 120, rankingThe: 110,
    estimatedMonthlyLivingCostEur: 900,
    description: 'TU/e Eindhoven offers English-taught bachelor programs in engineering and technology in Brainport Eindhoven.',
    programs: [
      { id: 'p-444', universityId: 'uni-199', name: 'B.Sc. Computer Science', fieldOfStudy: 'Computer Science', degreeLevel: 'bachelors', languageOfInstruction: 'English', durationMonths: 36, tuitionPerYearEur: 13000, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-05-01', applicationUrl: 'https://www.tue.nl' },
      { id: 'p-445', universityId: 'uni-199', name: 'B.Sc. Electrical Engineering', fieldOfStudy: 'Engineering', degreeLevel: 'bachelors', languageOfInstruction: 'English', durationMonths: 36, tuitionPerYearEur: 13000, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-05-01', applicationUrl: 'https://www.tue.nl' },
    ]
  },
  {
    id: 'uni-200', name: 'IE University', country: 'Spain', city: 'Madrid',
    websiteUrl: 'https://www.ie.edu', logoUrl: '', rankingQs: 320, rankingThe: 300,
    estimatedMonthlyLivingCostEur: 950,
    description: 'IE University is a top-ranked Spanish private university known for business, law, and technology.',
    programs: [
      { id: 'p-446', universityId: 'uni-200', name: 'M.Sc. Business Administration', fieldOfStudy: 'Business Administration', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 12, tuitionPerYearEur: 42000, minGpaRequired: 3.3, requiredLanguage: 'English', requiredLanguageLevel: 'C1', applicationDeadline: '2026-05-15', applicationUrl: 'https://www.ie.edu' },
      { id: 'p-447', universityId: 'uni-200', name: 'M.Sc. Computer Science and Technology', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 12, tuitionPerYearEur: 28000, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-05-15', applicationUrl: 'https://www.ie.edu' },
    ]
  },
  {
    id: 'uni-201', name: 'Università Cattolica del Sacro Cuore', country: 'Italy', city: 'Milan',
    websiteUrl: 'https://www.unicatt.it', logoUrl: '', rankingQs: 400, rankingThe: 380,
    estimatedMonthlyLivingCostEur: 950,
    description: 'Cattolica is Italy\'s largest private university with strong programs in economics, law, and psychology.',
    programs: [
      { id: 'p-448', universityId: 'uni-201', name: 'M.Sc. Economics', fieldOfStudy: 'Economics', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 9000, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-06-30', applicationUrl: 'https://www.unicatt.it' },
      { id: 'p-449', universityId: 'uni-201', name: 'M.Sc. Psychology', fieldOfStudy: 'Psychology', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 9000, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-06-30', applicationUrl: 'https://www.unicatt.it' },
    ]
  },
  {
    id: 'uni-202', name: 'University of Tartu (bachelors)', country: 'Estonia', city: 'Tartu',
    websiteUrl: 'https://www.ut.ee', logoUrl: '', rankingQs: 300, rankingThe: 280,
    estimatedMonthlyLivingCostEur: 600,
    description: 'University of Tartu also offers affordable English-taught bachelor programs in the digital-first Estonia.',
    programs: [
      { id: 'p-450', universityId: 'uni-202', name: 'B.Sc. Computer Science', fieldOfStudy: 'Computer Science', degreeLevel: 'bachelors', languageOfInstruction: 'English', durationMonths: 36, tuitionPerYearEur: 3500, minGpaRequired: 2.8, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-04-01', applicationUrl: 'https://www.ut.ee' },
      { id: 'p-451', universityId: 'uni-202', name: 'B.A. Social Sciences', fieldOfStudy: 'Social Sciences', degreeLevel: 'bachelors', languageOfInstruction: 'English', durationMonths: 36, tuitionPerYearEur: 3500, minGpaRequired: 2.5, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-04-01', applicationUrl: 'https://www.ut.ee' },
    ]
  },
  {
    id: 'uni-203', name: 'Charles University (Medicine)', country: 'Czech Republic', city: 'Prague',
    websiteUrl: 'https://cuni.cz', logoUrl: '', rankingQs: 240, rankingThe: 220,
    estimatedMonthlyLivingCostEur: 650,
    description: 'Charles University offers some of Europe\'s most sought-after English-taught medicine programs.',
    programs: [
      { id: 'p-452', universityId: 'uni-203', name: 'M.D. General Medicine', fieldOfStudy: 'Medicine', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 72, tuitionPerYearEur: 14500, minGpaRequired: 3.5, requiredLanguage: 'English', requiredLanguageLevel: 'C1', applicationDeadline: '2026-02-28', applicationUrl: 'https://cuni.cz' },
      { id: 'p-453', universityId: 'uni-203', name: 'M.Sc. Psychology', fieldOfStudy: 'Psychology', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 7000, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-04-30', applicationUrl: 'https://cuni.cz' },
    ]
  },
  {
    id: 'uni-204', name: 'University of Debrecen (Medicine)', country: 'Hungary', city: 'Debrecen',
    websiteUrl: 'https://www.unideb.hu', logoUrl: '', rankingQs: 550, rankingThe: 520,
    estimatedMonthlyLivingCostEur: 400,
    description: 'University of Debrecen is a popular destination for international medical students with affordable tuition.',
    programs: [
      { id: 'p-454', universityId: 'uni-204', name: 'M.D. General Medicine', fieldOfStudy: 'Medicine', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 72, tuitionPerYearEur: 8200, minGpaRequired: 3.2, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-06-15', applicationUrl: 'https://www.unideb.hu' },
    ]
  },
  {
    id: 'uni-205', name: 'RWTH Aachen (bachelors)', country: 'Germany', city: 'Aachen',
    websiteUrl: 'https://www.rwth-aachen.de', logoUrl: '', rankingQs: 106, rankingThe: 90,
    estimatedMonthlyLivingCostEur: 850,
    description: 'RWTH Aachen offers tuition-free bachelor programs in Germany\'s leading technical university.',
    programs: [
      { id: 'p-455', universityId: 'uni-205', name: 'B.Sc. Computer Science', fieldOfStudy: 'Computer Science', degreeLevel: 'bachelors', languageOfInstruction: 'German', durationMonths: 36, tuitionPerYearEur: 0, minGpaRequired: 3.0, requiredLanguage: 'German', requiredLanguageLevel: 'C1', applicationDeadline: '2026-07-15', applicationUrl: 'https://www.rwth-aachen.de' },
      { id: 'p-456', universityId: 'uni-205', name: 'B.Sc. Mechanical Engineering', fieldOfStudy: 'Engineering', degreeLevel: 'bachelors', languageOfInstruction: 'German', durationMonths: 36, tuitionPerYearEur: 0, minGpaRequired: 2.8, requiredLanguage: 'German', requiredLanguageLevel: 'C1', applicationDeadline: '2026-07-15', applicationUrl: 'https://www.rwth-aachen.de' },
    ]
  },
  {
    id: 'uni-206', name: 'Sorbonne University (Sciences)', country: 'France', city: 'Paris',
    websiteUrl: 'https://www.sorbonne-universite.fr', logoUrl: '', rankingQs: 62, rankingThe: 55,
    estimatedMonthlyLivingCostEur: 1200,
    description: 'Sorbonne University also offers English-taught science masters and PhD programs at low fees.',
    programs: [
      { id: 'p-457', universityId: 'uni-206', name: 'M.Sc. Chemistry', fieldOfStudy: 'Chemistry', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 3770, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-04-01', applicationUrl: 'https://www.sorbonne-universite.fr' },
      { id: 'p-458', universityId: 'uni-206', name: 'M.Sc. Biology', fieldOfStudy: 'Biology', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 3770, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-04-01', applicationUrl: 'https://www.sorbonne-universite.fr' },
    ]
  },
  {
    id: 'uni-207', name: 'Aalto University (bachelors)', country: 'Finland', city: 'Espoo',
    websiteUrl: 'https://www.aalto.fi', logoUrl: '', rankingQs: 116, rankingThe: 105,
    estimatedMonthlyLivingCostEur: 1000,
    description: 'Aalto also offers English-taught bachelor programs combining business, art, science, and technology.',
    programs: [
      { id: 'p-459', universityId: 'uni-207', name: 'B.Sc. Computer Science', fieldOfStudy: 'Computer Science', degreeLevel: 'bachelors', languageOfInstruction: 'English', durationMonths: 36, tuitionPerYearEur: 12000, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-01-09', applicationUrl: 'https://www.aalto.fi' },
      { id: 'p-460', universityId: 'uni-207', name: 'B.Sc. Business Administration', fieldOfStudy: 'Business Administration', degreeLevel: 'bachelors', languageOfInstruction: 'English', durationMonths: 36, tuitionPerYearEur: 12000, minGpaRequired: 2.8, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-01-09', applicationUrl: 'https://www.aalto.fi' },
    ]
  },
  {
    id: 'uni-208', name: 'University of Barcelona (Sciences)', country: 'Spain', city: 'Barcelona',
    websiteUrl: 'https://www.ub.edu', logoUrl: '', rankingQs: 164, rankingThe: 150,
    estimatedMonthlyLivingCostEur: 900,
    description: 'UB Barcelona offers English-taught science and arts programs at Spain\'s highest-ranked university.',
    programs: [
      { id: 'p-461', universityId: 'uni-208', name: 'M.Sc. Chemistry', fieldOfStudy: 'Chemistry', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 18, tuitionPerYearEur: 5000, minGpaRequired: 2.8, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-06-15', applicationUrl: 'https://www.ub.edu' },
      { id: 'p-462', universityId: 'uni-208', name: 'M.Sc. Biology', fieldOfStudy: 'Biology', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 18, tuitionPerYearEur: 5000, minGpaRequired: 2.8, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-06-15', applicationUrl: 'https://www.ub.edu' },
    ]
  },
  {
    id: 'uni-209', name: 'Sapienza University (Engineering)', country: 'Italy', city: 'Rome',
    websiteUrl: 'https://www.uniroma1.it', logoUrl: '', rankingQs: 132, rankingThe: 120,
    estimatedMonthlyLivingCostEur: 850,
    description: 'Sapienza\'s engineering faculty is one of Italy\'s largest, offering fully English-taught master programs.',
    programs: [
      { id: 'p-463', universityId: 'uni-209', name: 'M.Sc. Artificial Intelligence and Robotics', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 2800, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-07-15', applicationUrl: 'https://www.uniroma1.it' },
      { id: 'p-464', universityId: 'uni-209', name: 'M.Sc. Architecture', fieldOfStudy: 'Architecture', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 2800, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-07-15', applicationUrl: 'https://www.uniroma1.it' },
    ]
  },
  {
    id: 'uni-210', name: 'University of Milan-Bicocca', country: 'Italy', city: 'Milan',
    websiteUrl: 'https://www.unimib.it', logoUrl: '', rankingQs: 450, rankingThe: 420,
    estimatedMonthlyLivingCostEur: 950,
    description: 'Bicocca is a modern Italian university with strengths in data science, economics, and biomedical sciences.',
    programs: [
      { id: 'p-465', universityId: 'uni-210', name: 'M.Sc. Data Science', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 3500, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-07-15', applicationUrl: 'https://www.unimib.it' },
      { id: 'p-466', universityId: 'uni-210', name: 'M.Sc. Economics', fieldOfStudy: 'Economics', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 3500, minGpaRequired: 2.8, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-07-15', applicationUrl: 'https://www.unimib.it' },
    ]
  },
  // ── BATCH 2: uni-211 → uni-260 ─────────────────────────────────────
  {
    id: 'uni-211', name: 'Goethe University Frankfurt', country: 'Germany', city: 'Frankfurt',
    websiteUrl: 'https://www.uni-frankfurt.de', logoUrl: '', rankingQs: 310, rankingThe: 280,
    estimatedMonthlyLivingCostEur: 1050,
    description: 'One of Germany\'s largest universities, renowned for finance, economics, and social sciences, located in Europe\'s financial hub.',
    programs: [
      { id: 'p-467', universityId: 'uni-211', name: 'M.Sc. Finance', fieldOfStudy: 'Economics', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 1500, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-05-15', applicationUrl: 'https://www.uni-frankfurt.de' },
      { id: 'p-468', universityId: 'uni-211', name: 'M.Sc. Computer Science', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 1500, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-05-15', applicationUrl: 'https://www.uni-frankfurt.de' },
    ]
  },
  {
    id: 'uni-212', name: 'Johannes Gutenberg University Mainz', country: 'Germany', city: 'Mainz',
    websiteUrl: 'https://www.uni-mainz.de', logoUrl: '', rankingQs: 380, rankingThe: 350,
    estimatedMonthlyLivingCostEur: 900,
    description: 'Comprehensive university excelling in natural sciences, medicine, and humanities, home to the famous Gutenberg press heritage.',
    programs: [
      { id: 'p-469', universityId: 'uni-212', name: 'M.Sc. Physics', fieldOfStudy: 'Physics', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 0, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-05-31', applicationUrl: 'https://www.uni-mainz.de' },
      { id: 'p-470', universityId: 'uni-212', name: 'M.Sc. Chemistry', fieldOfStudy: 'Chemistry', degreeLevel: 'masters', languageOfInstruction: 'German', durationMonths: 24, tuitionPerYearEur: 0, minGpaRequired: 2.8, requiredLanguage: 'German', requiredLanguageLevel: 'B2', applicationDeadline: '2026-05-31', applicationUrl: 'https://www.uni-mainz.de' },
    ]
  },
  {
    id: 'uni-213', name: 'University of Marburg', country: 'Germany', city: 'Marburg',
    websiteUrl: 'https://www.uni-marburg.de', logoUrl: '', rankingQs: 501, rankingThe: 480,
    estimatedMonthlyLivingCostEur: 820,
    description: 'Germany\'s oldest Protestant university with strong programs in pharmacy, medicine, and life sciences.',
    programs: [
      { id: 'p-471', universityId: 'uni-213', name: 'M.Sc. Pharmaceutical Sciences', fieldOfStudy: 'Biology', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 0, minGpaRequired: 3.2, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-06-15', applicationUrl: 'https://www.uni-marburg.de' },
      { id: 'p-472', universityId: 'uni-213', name: 'M.A. Social Sciences', fieldOfStudy: 'Social Sciences', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 0, minGpaRequired: 2.8, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-06-15', applicationUrl: 'https://www.uni-marburg.de' },
    ]
  },
  {
    id: 'uni-214', name: 'Ruhr University Bochum', country: 'Germany', city: 'Bochum',
    websiteUrl: 'https://www.ruhr-uni-bochum.de', logoUrl: '', rankingQs: 430, rankingThe: 400,
    estimatedMonthlyLivingCostEur: 870,
    description: 'One of Germany\'s largest universities in the Ruhr metropolitan area, strong in engineering and natural sciences.',
    programs: [
      { id: 'p-473', universityId: 'uni-214', name: 'M.Sc. Electrical Engineering', fieldOfStudy: 'Engineering', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 0, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-06-15', applicationUrl: 'https://www.ruhr-uni-bochum.de' },
      { id: 'p-474', universityId: 'uni-214', name: 'M.Sc. IT Security', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 0, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-06-15', applicationUrl: 'https://www.ruhr-uni-bochum.de' },
    ]
  },
  {
    id: 'uni-215', name: 'Leibniz University Hannover', country: 'Germany', city: 'Hannover',
    websiteUrl: 'https://www.uni-hannover.de', logoUrl: '', rankingQs: 470, rankingThe: 450,
    estimatedMonthlyLivingCostEur: 870,
    description: 'Leading research university with excellence in engineering, natural sciences, and architecture.',
    programs: [
      { id: 'p-475', universityId: 'uni-215', name: 'M.Sc. Mechanical Engineering', fieldOfStudy: 'Engineering', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 0, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-07-01', applicationUrl: 'https://www.uni-hannover.de' },
      { id: 'p-476', universityId: 'uni-215', name: 'M.Sc. Data Science', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 0, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-07-01', applicationUrl: 'https://www.uni-hannover.de' },
    ]
  },
  {
    id: 'uni-216', name: 'University of Regensburg', country: 'Germany', city: 'Regensburg',
    websiteUrl: 'https://www.uni-regensburg.de', logoUrl: '', rankingQs: 551, rankingThe: 520,
    estimatedMonthlyLivingCostEur: 850,
    description: 'A campus university with strengths in law, economics, and life sciences in the picturesque UNESCO city of Regensburg.',
    programs: [
      { id: 'p-477', universityId: 'uni-216', name: 'LL.M. European Law', fieldOfStudy: 'Law', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 12, tuitionPerYearEur: 2000, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'C1', applicationDeadline: '2026-05-31', applicationUrl: 'https://www.uni-regensburg.de' },
      { id: 'p-478', universityId: 'uni-216', name: 'M.Sc. Economics', fieldOfStudy: 'Economics', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 0, minGpaRequired: 2.8, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-05-31', applicationUrl: 'https://www.uni-regensburg.de' },
    ]
  },
  {
    id: 'uni-217', name: 'University of Augsburg', country: 'Germany', city: 'Augsburg',
    websiteUrl: 'https://www.uni-augsburg.de', logoUrl: '', rankingQs: 601, rankingThe: 570,
    estimatedMonthlyLivingCostEur: 870,
    description: 'Modern university with focus on economics, resource efficiency, and applied sciences in Bavaria.',
    programs: [
      { id: 'p-479', universityId: 'uni-217', name: 'M.Sc. Business Analytics', fieldOfStudy: 'Business Administration', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 0, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-06-30', applicationUrl: 'https://www.uni-augsburg.de' },
      { id: 'p-480', universityId: 'uni-217', name: 'M.Sc. Applied Computer Science', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 0, minGpaRequired: 2.8, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-06-30', applicationUrl: 'https://www.uni-augsburg.de' },
    ]
  },
  {
    id: 'uni-218', name: 'University of Bayreuth', country: 'Germany', city: 'Bayreuth',
    websiteUrl: 'https://www.uni-bayreuth.de', logoUrl: '', rankingQs: 551, rankingThe: 530,
    estimatedMonthlyLivingCostEur: 800,
    description: 'Innovative campus university famous for African studies, polymer sciences, and business law.',
    programs: [
      { id: 'p-481', universityId: 'uni-218', name: 'M.Sc. Polymer Science', fieldOfStudy: 'Chemistry', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 0, minGpaRequired: 3.2, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-05-15', applicationUrl: 'https://www.uni-bayreuth.de' },
      { id: 'p-482', universityId: 'uni-218', name: 'M.Sc. Environmental Engineering', fieldOfStudy: 'Engineering', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 0, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-05-15', applicationUrl: 'https://www.uni-bayreuth.de' },
    ]
  },
  {
    id: 'uni-219', name: 'University of Potsdam', country: 'Germany', city: 'Potsdam',
    websiteUrl: 'https://www.uni-potsdam.de', logoUrl: '', rankingQs: 501, rankingThe: 490,
    estimatedMonthlyLivingCostEur: 950,
    description: 'Berlin\'s neighboring research university with top programs in cognitive science, linguistics, and bioinformatics.',
    programs: [
      { id: 'p-483', universityId: 'uni-219', name: 'M.Sc. Cognitive Systems', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 0, minGpaRequired: 3.2, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-06-15', applicationUrl: 'https://www.uni-potsdam.de' },
      { id: 'p-484', universityId: 'uni-219', name: 'M.A. Linguistics', fieldOfStudy: 'Arts & Humanities', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 0, minGpaRequired: 2.8, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-06-15', applicationUrl: 'https://www.uni-potsdam.de' },
    ]
  },
  {
    id: 'uni-220', name: 'University of Ulm', country: 'Germany', city: 'Ulm',
    websiteUrl: 'https://www.uni-ulm.de', logoUrl: '', rankingQs: 430, rankingThe: 410,
    estimatedMonthlyLivingCostEur: 840,
    description: 'Science-focused university known for mathematics, medicine, and quantum technology research.',
    programs: [
      { id: 'p-485', universityId: 'uni-220', name: 'M.Sc. Electrical Engineering', fieldOfStudy: 'Engineering', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 0, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-06-30', applicationUrl: 'https://www.uni-ulm.de' },
      { id: 'p-486', universityId: 'uni-220', name: 'M.Sc. Medical Informatics', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 0, minGpaRequired: 3.2, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-06-30', applicationUrl: 'https://www.uni-ulm.de' },
    ]
  },
  {
    id: 'uni-221', name: 'Saarland University', country: 'Germany', city: 'Saarbrücken',
    websiteUrl: 'https://www.uni-saarland.de', logoUrl: '', rankingQs: 551, rankingThe: 520,
    estimatedMonthlyLivingCostEur: 820,
    description: 'Franco-German university with world-class computer science and computational linguistics research.',
    programs: [
      { id: 'p-487', universityId: 'uni-221', name: 'M.Sc. Computer Science', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 0, minGpaRequired: 3.2, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-07-15', applicationUrl: 'https://www.uni-saarland.de' },
      { id: 'p-488', universityId: 'uni-221', name: 'M.Sc. Bioinformatics', fieldOfStudy: 'Biology', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 0, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-07-15', applicationUrl: 'https://www.uni-saarland.de' },
    ]
  },
  {
    id: 'uni-222', name: 'University of Passau', country: 'Germany', city: 'Passau',
    websiteUrl: 'https://www.uni-passau.de', logoUrl: '', rankingQs: 601, rankingThe: 580,
    estimatedMonthlyLivingCostEur: 800,
    description: 'Boutique research university excelling in digital humanities, internet computing, and European law.',
    programs: [
      { id: 'p-489', universityId: 'uni-222', name: 'M.Sc. Internet Computing', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 0, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-06-15', applicationUrl: 'https://www.uni-passau.de' },
      { id: 'p-490', universityId: 'uni-222', name: 'M.A. European Studies', fieldOfStudy: 'Social Sciences', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 0, minGpaRequired: 2.8, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-06-15', applicationUrl: 'https://www.uni-passau.de' },
    ]
  },
  {
    id: 'uni-223', name: 'University of Lille', country: 'France', city: 'Lille',
    websiteUrl: 'https://www.univ-lille.fr', logoUrl: '', rankingQs: 601, rankingThe: 570,
    estimatedMonthlyLivingCostEur: 800,
    description: 'One of France\'s largest universities offering broad programs across sciences, humanities, and health.',
    programs: [
      { id: 'p-491', universityId: 'uni-223', name: 'M.Sc. Bioinformatics', fieldOfStudy: 'Biology', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 243, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-04-30', applicationUrl: 'https://www.univ-lille.fr' },
      { id: 'p-492', universityId: 'uni-223', name: 'M.Sc. Data Science & AI', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 243, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-04-30', applicationUrl: 'https://www.univ-lille.fr' },
    ]
  },
  {
    id: 'uni-224', name: 'University of Nantes', country: 'France', city: 'Nantes',
    websiteUrl: 'https://www.univ-nantes.fr', logoUrl: '', rankingQs: 651, rankingThe: 620,
    estimatedMonthlyLivingCostEur: 850,
    description: 'Dynamic western France university known for medicine, engineering, and social sciences.',
    programs: [
      { id: 'p-493', universityId: 'uni-224', name: 'M.Sc. Renewable Energies', fieldOfStudy: 'Engineering', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 243, minGpaRequired: 2.8, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-05-15', applicationUrl: 'https://www.univ-nantes.fr' },
      { id: 'p-494', universityId: 'uni-224', name: 'M.A. International Business', fieldOfStudy: 'Business Administration', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 243, minGpaRequired: 2.8, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-05-15', applicationUrl: 'https://www.univ-nantes.fr' },
    ]
  },
  {
    id: 'uni-225', name: 'University of Rennes', country: 'France', city: 'Rennes',
    websiteUrl: 'https://www.univ-rennes.fr', logoUrl: '', rankingQs: 651, rankingThe: 630,
    estimatedMonthlyLivingCostEur: 820,
    description: 'A major Breton university with leading research in mathematics, computer science, and law.',
    programs: [
      { id: 'p-495', universityId: 'uni-225', name: 'M.Sc. Computer Science', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 243, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-04-30', applicationUrl: 'https://www.univ-rennes.fr' },
      { id: 'p-496', universityId: 'uni-225', name: 'M.Sc. Mathematics', fieldOfStudy: 'Mathematics', degreeLevel: 'masters', languageOfInstruction: 'French', durationMonths: 24, tuitionPerYearEur: 243, minGpaRequired: 3.2, requiredLanguage: 'French', requiredLanguageLevel: 'B2', applicationDeadline: '2026-04-30', applicationUrl: 'https://www.univ-rennes.fr' },
    ]
  },
  {
    id: 'uni-226', name: 'University of Montpellier', country: 'France', city: 'Montpellier',
    websiteUrl: 'https://www.umontpellier.fr', logoUrl: '', rankingQs: 601, rankingThe: 580,
    estimatedMonthlyLivingCostEur: 830,
    description: 'One of Europe\'s oldest universities, with exceptional strengths in pharmacy, medicine, and ecology.',
    programs: [
      { id: 'p-497', universityId: 'uni-226', name: 'M.Sc. Ecology & Evolutionary Biology', fieldOfStudy: 'Biology', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 243, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-05-31', applicationUrl: 'https://www.umontpellier.fr' },
      { id: 'p-498', universityId: 'uni-226', name: 'M.Sc. Bioinformatics', fieldOfStudy: 'Biology', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 243, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-05-31', applicationUrl: 'https://www.umontpellier.fr' },
    ]
  },
  {
    id: 'uni-227', name: 'Université Côte d\'Azur', country: 'France', city: 'Nice',
    websiteUrl: 'https://univ-cotedazur.eu', logoUrl: '', rankingQs: 451, rankingThe: 420,
    estimatedMonthlyLivingCostEur: 1000,
    description: 'A cluster of excellence on the French Riviera offering cutting-edge programs in computer science and mathematics.',
    programs: [
      { id: 'p-499', universityId: 'uni-227', name: 'M.Sc. Artificial Intelligence', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 243, minGpaRequired: 3.2, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-05-15', applicationUrl: 'https://univ-cotedazur.eu' },
      { id: 'p-500', universityId: 'uni-227', name: 'M.Sc. Mathematics', fieldOfStudy: 'Mathematics', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 243, minGpaRequired: 3.3, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-05-15', applicationUrl: 'https://univ-cotedazur.eu' },
    ]
  },
  {
    id: 'uni-228', name: 'CentraleSupélec', country: 'France', city: 'Paris',
    websiteUrl: 'https://www.centralesupelec.fr', logoUrl: '', rankingQs: 258, rankingThe: 230,
    estimatedMonthlyLivingCostEur: 1200,
    description: 'Elite French grande école for engineering and science, consistently ranked among the world\'s top engineering schools.',
    programs: [
      { id: 'p-501', universityId: 'uni-228', name: 'M.Sc. Electrical Engineering', fieldOfStudy: 'Engineering', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 9500, minGpaRequired: 3.5, requiredLanguage: 'English', requiredLanguageLevel: 'C1', applicationDeadline: '2026-03-15', applicationUrl: 'https://www.centralesupelec.fr' },
      { id: 'p-502', universityId: 'uni-228', name: 'M.Sc. Data Science & AI', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 9500, minGpaRequired: 3.5, requiredLanguage: 'English', requiredLanguageLevel: 'C1', applicationDeadline: '2026-03-15', applicationUrl: 'https://www.centralesupelec.fr' },
    ]
  },
  {
    id: 'uni-229', name: 'INSA Lyon', country: 'France', city: 'Lyon',
    websiteUrl: 'https://www.insa-lyon.fr', logoUrl: '', rankingQs: 651, rankingThe: 600,
    estimatedMonthlyLivingCostEur: 900,
    description: 'Leading engineering school part of the INSA network, known for applied sciences and international openness.',
    programs: [
      { id: 'p-503', universityId: 'uni-229', name: 'M.Sc. Civil Engineering', fieldOfStudy: 'Engineering', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 3200, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-05-01', applicationUrl: 'https://www.insa-lyon.fr' },
      { id: 'p-504', universityId: 'uni-229', name: 'M.Sc. Computer Science', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 3200, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-05-01', applicationUrl: 'https://www.insa-lyon.fr' },
    ]
  },
  {
    id: 'uni-230', name: 'University of Genoa', country: 'Italy', city: 'Genoa',
    websiteUrl: 'https://www.unige.it', logoUrl: '', rankingQs: 601, rankingThe: 570,
    estimatedMonthlyLivingCostEur: 800,
    description: 'Historic Italian university in the coastal city of Genoa, strong in naval engineering and computer science.',
    programs: [
      { id: 'p-505', universityId: 'uni-230', name: 'M.Sc. Naval Architecture', fieldOfStudy: 'Engineering', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 2600, minGpaRequired: 2.8, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-07-31', applicationUrl: 'https://www.unige.it' },
      { id: 'p-506', universityId: 'uni-230', name: 'M.Sc. Computer Science', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 2600, minGpaRequired: 2.8, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-07-31', applicationUrl: 'https://www.unige.it' },
    ]
  },
  {
    id: 'uni-231', name: "Ca' Foscari University of Venice", country: 'Italy', city: 'Venice',
    websiteUrl: 'https://www.unive.it', logoUrl: '', rankingQs: 501, rankingThe: 480,
    estimatedMonthlyLivingCostEur: 1000,
    description: 'Prestigious university in the unique city of Venice, excelling in economics, foreign languages, and sustainability.',
    programs: [
      { id: 'p-507', universityId: 'uni-231', name: 'M.Sc. Environmental Sciences', fieldOfStudy: 'Natural Sciences', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 3000, minGpaRequired: 2.8, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-06-30', applicationUrl: 'https://www.unive.it' },
      { id: 'p-508', universityId: 'uni-231', name: 'M.Sc. Economics & Finance', fieldOfStudy: 'Economics', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 3000, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-06-30', applicationUrl: 'https://www.unive.it' },
    ]
  },
  {
    id: 'uni-232', name: 'University of Siena', country: 'Italy', city: 'Siena',
    websiteUrl: 'https://www.unisi.it', logoUrl: '', rankingQs: 651, rankingThe: 620,
    estimatedMonthlyLivingCostEur: 750,
    description: 'One of Europe\'s oldest universities, set in a medieval Tuscan city with strengths in pharmacy and biomedical science.',
    programs: [
      { id: 'p-509', universityId: 'uni-232', name: 'M.Sc. Pharmaceutical Biotechnology', fieldOfStudy: 'Biology', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 2500, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-06-15', applicationUrl: 'https://www.unisi.it' },
      { id: 'p-510', universityId: 'uni-232', name: 'M.A. Medieval History', fieldOfStudy: 'Arts & Humanities', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 2500, minGpaRequired: 2.8, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-06-15', applicationUrl: 'https://www.unisi.it' },
    ]
  },
  {
    id: 'uni-233', name: 'University of Ferrara', country: 'Italy', city: 'Ferrara',
    websiteUrl: 'https://www.unife.it', logoUrl: '', rankingQs: 801, rankingThe: 770,
    estimatedMonthlyLivingCostEur: 720,
    description: 'An ancient Italian university with a vibrant campus and strong programs in architecture and engineering.',
    programs: [
      { id: 'p-511', universityId: 'uni-233', name: 'M.Sc. Architecture', fieldOfStudy: 'Architecture', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 2200, minGpaRequired: 2.8, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-07-15', applicationUrl: 'https://www.unife.it' },
      { id: 'p-512', universityId: 'uni-233', name: 'M.Sc. Physics', fieldOfStudy: 'Physics', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 2200, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-07-15', applicationUrl: 'https://www.unife.it' },
    ]
  },
  {
    id: 'uni-234', name: 'University of Verona', country: 'Italy', city: 'Verona',
    websiteUrl: 'https://www.univr.it', logoUrl: '', rankingQs: 701, rankingThe: 670,
    estimatedMonthlyLivingCostEur: 800,
    description: 'Modern Italian university in the city of Romeo and Juliet, excelling in computer science and medicine.',
    programs: [
      { id: 'p-513', universityId: 'uni-234', name: 'M.Sc. Computer Science & Engineering', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 2800, minGpaRequired: 2.8, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-06-30', applicationUrl: 'https://www.univr.it' },
      { id: 'p-514', universityId: 'uni-234', name: 'M.Sc. Mathematics', fieldOfStudy: 'Mathematics', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 2800, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-06-30', applicationUrl: 'https://www.univr.it' },
    ]
  },
  {
    id: 'uni-235', name: 'University of Perugia', country: 'Italy', city: 'Perugia',
    websiteUrl: 'https://www.unipg.it', logoUrl: '', rankingQs: 801, rankingThe: 760,
    estimatedMonthlyLivingCostEur: 750,
    description: 'One of Italy\'s most international universities in the heart of Umbria, famous for its language programs and agriculture.',
    programs: [
      { id: 'p-515', universityId: 'uni-235', name: 'M.Sc. Agricultural Sciences', fieldOfStudy: 'Natural Sciences', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 2000, minGpaRequired: 2.8, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-07-31', applicationUrl: 'https://www.unipg.it' },
      { id: 'p-516', universityId: 'uni-235', name: 'M.A. Italian Language & Culture', fieldOfStudy: 'Arts & Humanities', degreeLevel: 'masters', languageOfInstruction: 'Italian', durationMonths: 24, tuitionPerYearEur: 2000, minGpaRequired: 2.5, requiredLanguage: 'Italian', requiredLanguageLevel: 'B2', applicationDeadline: '2026-07-31', applicationUrl: 'https://www.unipg.it' },
    ]
  },
  {
    id: 'uni-236', name: 'LUISS University', country: 'Italy', city: 'Rome',
    websiteUrl: 'https://www.luiss.it', logoUrl: '', rankingQs: 701, rankingThe: 680,
    estimatedMonthlyLivingCostEur: 1100,
    description: 'Italy\'s leading private university for economics, political science, and law, with strong industry connections.',
    programs: [
      { id: 'p-517', universityId: 'uni-236', name: 'M.Sc. Finance & Banking', fieldOfStudy: 'Economics', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 13000, minGpaRequired: 3.2, requiredLanguage: 'English', requiredLanguageLevel: 'C1', applicationDeadline: '2026-04-30', applicationUrl: 'https://www.luiss.it' },
      { id: 'p-518', universityId: 'uni-236', name: 'M.Sc. Political Science', fieldOfStudy: 'Social Sciences', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 13000, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'C1', applicationDeadline: '2026-04-30', applicationUrl: 'https://www.luiss.it' },
    ]
  },
  {
    id: 'uni-237', name: 'University of Brescia', country: 'Italy', city: 'Brescia',
    websiteUrl: 'https://www.unibs.it', logoUrl: '', rankingQs: 901, rankingThe: 870,
    estimatedMonthlyLivingCostEur: 800,
    description: 'A focused Italian university with strong programs in engineering, economics, and medicine.',
    programs: [
      { id: 'p-519', universityId: 'uni-237', name: 'M.Sc. Mechanical Engineering', fieldOfStudy: 'Engineering', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 2400, minGpaRequired: 2.8, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-07-15', applicationUrl: 'https://www.unibs.it' },
      { id: 'p-520', universityId: 'uni-237', name: 'M.Sc. Economics', fieldOfStudy: 'Economics', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 2400, minGpaRequired: 2.8, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-07-15', applicationUrl: 'https://www.unibs.it' },
    ]
  },
  {
    id: 'uni-238', name: 'Sant\'Anna School of Advanced Studies', country: 'Italy', city: 'Pisa',
    websiteUrl: 'https://www.santannapisa.it', logoUrl: '', rankingQs: 380, rankingThe: 350,
    estimatedMonthlyLivingCostEur: 850,
    description: 'Elite Italian graduate school in the Pisa system, renowned for biorobotics, political science, and economics.',
    programs: [
      { id: 'p-521', universityId: 'uni-238', name: 'Ph.D. Biorobotics', fieldOfStudy: 'Engineering', degreeLevel: 'phd', languageOfInstruction: 'English', durationMonths: 36, tuitionPerYearEur: 0, minGpaRequired: 3.5, requiredLanguage: 'English', requiredLanguageLevel: 'C1', applicationDeadline: '2026-04-30', applicationUrl: 'https://www.santannapisa.it' },
      { id: 'p-522', universityId: 'uni-238', name: 'M.Sc. Economics', fieldOfStudy: 'Economics', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 0, minGpaRequired: 3.3, requiredLanguage: 'English', requiredLanguageLevel: 'C1', applicationDeadline: '2026-04-30', applicationUrl: 'https://www.santannapisa.it' },
    ]
  },
  {
    id: 'uni-239', name: 'University of Salamanca', country: 'Spain', city: 'Salamanca',
    websiteUrl: 'https://www.usal.es', logoUrl: '', rankingQs: 701, rankingThe: 670,
    estimatedMonthlyLivingCostEur: 700,
    description: 'The oldest Spanish university, with an international reputation for Spanish language and humanities.',
    programs: [
      { id: 'p-523', universityId: 'uni-239', name: 'M.A. Spanish Language Studies', fieldOfStudy: 'Arts & Humanities', degreeLevel: 'masters', languageOfInstruction: 'Spanish', durationMonths: 12, tuitionPerYearEur: 1800, minGpaRequired: 2.8, requiredLanguage: 'Spanish', requiredLanguageLevel: 'B2', applicationDeadline: '2026-06-30', applicationUrl: 'https://www.usal.es' },
      { id: 'p-524', universityId: 'uni-239', name: 'M.Sc. Computer Science', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 1800, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-06-30', applicationUrl: 'https://www.usal.es' },
    ]
  },
  {
    id: 'uni-240', name: 'University of Zaragoza', country: 'Spain', city: 'Zaragoza',
    websiteUrl: 'https://www.unizar.es', logoUrl: '', rankingQs: 651, rankingThe: 620,
    estimatedMonthlyLivingCostEur: 750,
    description: 'A comprehensive Aragonese university with strong engineering, physics, and water science research.',
    programs: [
      { id: 'p-525', universityId: 'uni-240', name: 'M.Sc. Chemical Engineering', fieldOfStudy: 'Engineering', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 2200, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-06-15', applicationUrl: 'https://www.unizar.es' },
      { id: 'p-526', universityId: 'uni-240', name: 'M.Sc. Physics', fieldOfStudy: 'Physics', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 2200, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-06-15', applicationUrl: 'https://www.unizar.es' },
    ]
  },
  {
    id: 'uni-241', name: 'University of the Basque Country (UPV/EHU)', country: 'Spain', city: 'Bilbao',
    websiteUrl: 'https://www.ehu.eus', logoUrl: '', rankingQs: 701, rankingThe: 650,
    estimatedMonthlyLivingCostEur: 800,
    description: 'The largest university in the Basque region, strong in engineering, chemistry, and environmental sciences.',
    programs: [
      { id: 'p-527', universityId: 'uni-241', name: 'M.Sc. Environmental Engineering', fieldOfStudy: 'Engineering', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 2500, minGpaRequired: 2.8, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-06-30', applicationUrl: 'https://www.ehu.eus' },
      { id: 'p-528', universityId: 'uni-241', name: 'M.Sc. Chemistry', fieldOfStudy: 'Chemistry', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 2500, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-06-30', applicationUrl: 'https://www.ehu.eus' },
    ]
  },
  {
    id: 'uni-242', name: 'University of Malaga', country: 'Spain', city: 'Malaga',
    websiteUrl: 'https://www.uma.es', logoUrl: '', rankingQs: 801, rankingThe: 770,
    estimatedMonthlyLivingCostEur: 750,
    description: 'A vibrant university on the Costa del Sol with growing tech and tourism management programs.',
    programs: [
      { id: 'p-529', universityId: 'uni-242', name: 'M.Sc. Software Engineering', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 1800, minGpaRequired: 2.8, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-07-31', applicationUrl: 'https://www.uma.es' },
      { id: 'p-530', universityId: 'uni-242', name: 'M.Sc. Tourism Management', fieldOfStudy: 'Business Administration', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 12, tuitionPerYearEur: 1800, minGpaRequired: 2.5, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-07-31', applicationUrl: 'https://www.uma.es' },
    ]
  },
  {
    id: 'uni-243', name: 'Universitat Politècnica de València', country: 'Spain', city: 'Valencia',
    websiteUrl: 'https://www.upv.es', logoUrl: '', rankingQs: 551, rankingThe: 520,
    estimatedMonthlyLivingCostEur: 800,
    description: 'Spain\'s leading technical university in Valencia, excelling in architecture, agronomy, and industrial engineering.',
    programs: [
      { id: 'p-531', universityId: 'uni-243', name: 'M.Sc. Architecture', fieldOfStudy: 'Architecture', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 2500, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-06-30', applicationUrl: 'https://www.upv.es' },
      { id: 'p-532', universityId: 'uni-243', name: 'M.Sc. Telecommunications Engineering', fieldOfStudy: 'Engineering', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 2500, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-06-30', applicationUrl: 'https://www.upv.es' },
    ]
  },
  {
    id: 'uni-244', name: 'University of Murcia', country: 'Spain', city: 'Murcia',
    websiteUrl: 'https://www.um.es', logoUrl: '', rankingQs: 901, rankingThe: 870,
    estimatedMonthlyLivingCostEur: 680,
    description: 'A welcoming southeastern Spanish university with strong programs in biology, chemistry, and law.',
    programs: [
      { id: 'p-533', universityId: 'uni-244', name: 'M.Sc. Biology', fieldOfStudy: 'Biology', degreeLevel: 'masters', languageOfInstruction: 'Spanish', durationMonths: 24, tuitionPerYearEur: 1500, minGpaRequired: 2.8, requiredLanguage: 'Spanish', requiredLanguageLevel: 'B2', applicationDeadline: '2026-07-31', applicationUrl: 'https://www.um.es' },
      { id: 'p-534', universityId: 'uni-244', name: 'LL.M. Law', fieldOfStudy: 'Law', degreeLevel: 'masters', languageOfInstruction: 'Spanish', durationMonths: 12, tuitionPerYearEur: 1500, minGpaRequired: 2.8, requiredLanguage: 'Spanish', requiredLanguageLevel: 'B2', applicationDeadline: '2026-07-31', applicationUrl: 'https://www.um.es' },
    ]
  },
  {
    id: 'uni-245', name: 'Autonomous University of Barcelona', country: 'Spain', city: 'Barcelona',
    websiteUrl: 'https://www.uab.cat', logoUrl: '', rankingQs: 201, rankingThe: 190,
    estimatedMonthlyLivingCostEur: 950,
    description: 'One of Spain\'s leading research universities on the Barcelona campus, strong in social sciences and natural sciences.',
    programs: [
      { id: 'p-535', universityId: 'uni-245', name: 'M.Sc. Economics', fieldOfStudy: 'Economics', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 2800, minGpaRequired: 3.2, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-05-15', applicationUrl: 'https://www.uab.cat' },
      { id: 'p-536', universityId: 'uni-245', name: 'M.Sc. Molecular Biology', fieldOfStudy: 'Biology', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 2800, minGpaRequired: 3.2, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-05-15', applicationUrl: 'https://www.uab.cat' },
    ]
  },
  {
    id: 'uni-246', name: 'University of Oviedo', country: 'Spain', city: 'Oviedo',
    websiteUrl: 'https://www.uniovi.es', logoUrl: '', rankingQs: 901, rankingThe: 870,
    estimatedMonthlyLivingCostEur: 700,
    description: 'A traditional Asturian university with solid programs in engineering, chemistry, and humanities.',
    programs: [
      { id: 'p-537', universityId: 'uni-246', name: 'M.Sc. Chemical Engineering', fieldOfStudy: 'Engineering', degreeLevel: 'masters', languageOfInstruction: 'Spanish', durationMonths: 24, tuitionPerYearEur: 1600, minGpaRequired: 2.8, requiredLanguage: 'Spanish', requiredLanguageLevel: 'B2', applicationDeadline: '2026-07-15', applicationUrl: 'https://www.uniovi.es' },
      { id: 'p-538', universityId: 'uni-246', name: 'M.A. History of Art', fieldOfStudy: 'Arts & Humanities', degreeLevel: 'masters', languageOfInstruction: 'Spanish', durationMonths: 12, tuitionPerYearEur: 1600, minGpaRequired: 2.5, requiredLanguage: 'Spanish', requiredLanguageLevel: 'B2', applicationDeadline: '2026-07-15', applicationUrl: 'https://www.uniovi.es' },
    ]
  },
  {
    id: 'uni-247', name: 'Middle East Technical University (METU)', country: 'Turkey', city: 'Ankara',
    websiteUrl: 'https://www.metu.edu.tr', logoUrl: '', rankingQs: 601, rankingThe: 570,
    estimatedMonthlyLivingCostEur: 450,
    description: 'Turkey\'s premier engineering and science university, fully English-medium with strong international research output.',
    programs: [
      { id: 'p-539', universityId: 'uni-247', name: 'M.Sc. Computer Engineering', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 800, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-06-01', applicationUrl: 'https://www.metu.edu.tr' },
      { id: 'p-540', universityId: 'uni-247', name: 'M.Sc. Civil Engineering', fieldOfStudy: 'Engineering', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 800, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-06-01', applicationUrl: 'https://www.metu.edu.tr' },
    ]
  },
  {
    id: 'uni-248', name: 'Bogazici University', country: 'Turkey', city: 'Istanbul',
    websiteUrl: 'https://www.boun.edu.tr', logoUrl: '', rankingQs: 651, rankingThe: 620,
    estimatedMonthlyLivingCostEur: 500,
    description: 'Founded as Robert College, one of Turkey\'s most prestigious English-medium universities on the Bosphorus.',
    programs: [
      { id: 'p-541', universityId: 'uni-248', name: 'M.Sc. Computer Engineering', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 900, minGpaRequired: 3.2, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-06-15', applicationUrl: 'https://www.boun.edu.tr' },
      { id: 'p-542', universityId: 'uni-248', name: 'M.Sc. Economics', fieldOfStudy: 'Economics', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 900, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-06-15', applicationUrl: 'https://www.boun.edu.tr' },
    ]
  },
  {
    id: 'uni-249', name: 'Istanbul Technical University', country: 'Turkey', city: 'Istanbul',
    websiteUrl: 'https://www.itu.edu.tr', logoUrl: '', rankingQs: 601, rankingThe: 580,
    estimatedMonthlyLivingCostEur: 490,
    description: 'One of the world\'s oldest technical universities, excelling in engineering, architecture, and management.',
    programs: [
      { id: 'p-543', universityId: 'uni-249', name: 'M.Sc. Electrical Engineering', fieldOfStudy: 'Engineering', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 700, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-06-01', applicationUrl: 'https://www.itu.edu.tr' },
      { id: 'p-544', universityId: 'uni-249', name: 'M.Sc. Architecture', fieldOfStudy: 'Architecture', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 700, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-06-01', applicationUrl: 'https://www.itu.edu.tr' },
    ]
  },
  {
    id: 'uni-250', name: 'Ankara University', country: 'Turkey', city: 'Ankara',
    websiteUrl: 'https://www.ankara.edu.tr', logoUrl: '', rankingQs: 801, rankingThe: 760,
    estimatedMonthlyLivingCostEur: 400,
    description: 'Turkey\'s first modern university, with a broad academic range including medicine, law, and humanities.',
    programs: [
      { id: 'p-545', universityId: 'uni-250', name: 'M.Sc. Biotechnology', fieldOfStudy: 'Biology', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 600, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-07-01', applicationUrl: 'https://www.ankara.edu.tr' },
      { id: 'p-546', universityId: 'uni-250', name: 'LL.M. Public Law', fieldOfStudy: 'Law', degreeLevel: 'masters', languageOfInstruction: 'Turkish', durationMonths: 24, tuitionPerYearEur: 600, minGpaRequired: 2.8, requiredLanguage: 'Turkish', requiredLanguageLevel: 'C1', applicationDeadline: '2026-07-01', applicationUrl: 'https://www.ankara.edu.tr' },
    ]
  },
  {
    id: 'uni-251', name: 'Bilkent University', country: 'Turkey', city: 'Ankara',
    websiteUrl: 'https://www.bilkent.edu.tr', logoUrl: '', rankingQs: 551, rankingThe: 520,
    estimatedMonthlyLivingCostEur: 450,
    description: 'Turkey\'s first private non-profit university, fully English-medium with strong international research.',
    programs: [
      { id: 'p-547', universityId: 'uni-251', name: 'M.Sc. Computer Science', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 5000, minGpaRequired: 3.2, requiredLanguage: 'English', requiredLanguageLevel: 'C1', applicationDeadline: '2026-06-01', applicationUrl: 'https://www.bilkent.edu.tr' },
      { id: 'p-548', universityId: 'uni-251', name: 'M.Sc. Electrical Engineering', fieldOfStudy: 'Engineering', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 5000, minGpaRequired: 3.2, requiredLanguage: 'English', requiredLanguageLevel: 'C1', applicationDeadline: '2026-06-01', applicationUrl: 'https://www.bilkent.edu.tr' },
    ]
  },
  {
    id: 'uni-252', name: 'Sabancı University', country: 'Turkey', city: 'Istanbul',
    websiteUrl: 'https://www.sabanciuniv.edu', logoUrl: '', rankingQs: 601, rankingThe: 570,
    estimatedMonthlyLivingCostEur: 500,
    description: 'A research-intensive private university in Istanbul with a unique interdisciplinary approach to education.',
    programs: [
      { id: 'p-549', universityId: 'uni-252', name: 'M.Sc. Data Science', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 6500, minGpaRequired: 3.2, requiredLanguage: 'English', requiredLanguageLevel: 'C1', applicationDeadline: '2026-05-15', applicationUrl: 'https://www.sabanciuniv.edu' },
      { id: 'p-550', universityId: 'uni-252', name: 'M.Sc. Business Analytics', fieldOfStudy: 'Business Administration', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 6500, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'C1', applicationDeadline: '2026-05-15', applicationUrl: 'https://www.sabanciuniv.edu' },
    ]
  },
  {
    id: 'uni-253', name: 'Koç University', country: 'Turkey', city: 'Istanbul',
    websiteUrl: 'https://www.ku.edu.tr', logoUrl: '', rankingQs: 551, rankingThe: 520,
    estimatedMonthlyLivingCostEur: 500,
    description: 'Leading Turkish private university fully in English, known for medicine, law, and business.',
    programs: [
      { id: 'p-551', universityId: 'uni-253', name: 'M.Sc. Finance', fieldOfStudy: 'Economics', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 7000, minGpaRequired: 3.3, requiredLanguage: 'English', requiredLanguageLevel: 'C1', applicationDeadline: '2026-05-15', applicationUrl: 'https://www.ku.edu.tr' },
      { id: 'p-552', universityId: 'uni-253', name: 'M.Sc. Computer Engineering', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 7000, minGpaRequired: 3.3, requiredLanguage: 'English', requiredLanguageLevel: 'C1', applicationDeadline: '2026-05-15', applicationUrl: 'https://www.ku.edu.tr' },
    ]
  },
  {
    id: 'uni-254', name: 'Hacettepe University', country: 'Turkey', city: 'Ankara',
    websiteUrl: 'https://www.hacettepe.edu.tr', logoUrl: '', rankingQs: 701, rankingThe: 650,
    estimatedMonthlyLivingCostEur: 420,
    description: 'Turkey\'s foremost health sciences university with internationally recognised medical and pharmacy programs.',
    programs: [
      { id: 'p-553', universityId: 'uni-254', name: 'M.Sc. Biomedical Engineering', fieldOfStudy: 'Engineering', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 700, minGpaRequired: 3.2, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-06-15', applicationUrl: 'https://www.hacettepe.edu.tr' },
      { id: 'p-554', universityId: 'uni-254', name: 'M.Sc. Pharmacy', fieldOfStudy: 'Biology', degreeLevel: 'masters', languageOfInstruction: 'Turkish', durationMonths: 24, tuitionPerYearEur: 700, minGpaRequired: 3.0, requiredLanguage: 'Turkish', requiredLanguageLevel: 'C1', applicationDeadline: '2026-06-15', applicationUrl: 'https://www.hacettepe.edu.tr' },
    ]
  },
  {
    id: 'uni-255', name: 'Istanbul University', country: 'Turkey', city: 'Istanbul',
    websiteUrl: 'https://www.istanbul.edu.tr', logoUrl: '', rankingQs: 801, rankingThe: 770,
    estimatedMonthlyLivingCostEur: 480,
    description: 'One of Turkey\'s oldest and largest universities with a wide breadth of programs in law, science, and humanities.',
    programs: [
      { id: 'p-555', universityId: 'uni-255', name: 'M.Sc. Molecular Biology', fieldOfStudy: 'Biology', degreeLevel: 'masters', languageOfInstruction: 'Turkish', durationMonths: 24, tuitionPerYearEur: 600, minGpaRequired: 3.0, requiredLanguage: 'Turkish', requiredLanguageLevel: 'C1', applicationDeadline: '2026-07-01', applicationUrl: 'https://www.istanbul.edu.tr' },
      { id: 'p-556', universityId: 'uni-255', name: 'LL.M. International Law', fieldOfStudy: 'Law', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 12, tuitionPerYearEur: 1500, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-07-01', applicationUrl: 'https://www.istanbul.edu.tr' },
    ]
  },
  {
    id: 'uni-256', name: 'Yıldız Technical University', country: 'Turkey', city: 'Istanbul',
    websiteUrl: 'https://www.yildiz.edu.tr', logoUrl: '', rankingQs: 801, rankingThe: 770,
    estimatedMonthlyLivingCostEur: 480,
    description: 'Technical university in Istanbul with solid engineering and architecture programs, affordable tuition.',
    programs: [
      { id: 'p-557', universityId: 'uni-256', name: 'M.Sc. Mechanical Engineering', fieldOfStudy: 'Engineering', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 600, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-06-30', applicationUrl: 'https://www.yildiz.edu.tr' },
      { id: 'p-558', universityId: 'uni-256', name: 'M.Sc. Architecture', fieldOfStudy: 'Architecture', degreeLevel: 'masters', languageOfInstruction: 'Turkish', durationMonths: 24, tuitionPerYearEur: 600, minGpaRequired: 2.8, requiredLanguage: 'Turkish', requiredLanguageLevel: 'C1', applicationDeadline: '2026-06-30', applicationUrl: 'https://www.yildiz.edu.tr' },
    ]
  },
  {
    id: 'uni-257', name: 'Gazi University', country: 'Turkey', city: 'Ankara',
    websiteUrl: 'https://www.gazi.edu.tr', logoUrl: '', rankingQs: 801, rankingThe: 780,
    estimatedMonthlyLivingCostEur: 410,
    description: 'Comprehensive Ankara university offering diverse programs in education, engineering, and fine arts.',
    programs: [
      { id: 'p-559', universityId: 'uni-257', name: 'M.Sc. Industrial Engineering', fieldOfStudy: 'Engineering', degreeLevel: 'masters', languageOfInstruction: 'Turkish', durationMonths: 24, tuitionPerYearEur: 500, minGpaRequired: 2.8, requiredLanguage: 'Turkish', requiredLanguageLevel: 'C1', applicationDeadline: '2026-07-01', applicationUrl: 'https://www.gazi.edu.tr' },
      { id: 'p-560', universityId: 'uni-257', name: 'M.A. Education', fieldOfStudy: 'Education', degreeLevel: 'masters', languageOfInstruction: 'Turkish', durationMonths: 24, tuitionPerYearEur: 500, minGpaRequired: 2.8, requiredLanguage: 'Turkish', requiredLanguageLevel: 'C1', applicationDeadline: '2026-07-01', applicationUrl: 'https://www.gazi.edu.tr' },
    ]
  },
  {
    id: 'uni-258', name: 'Marmara University', country: 'Turkey', city: 'Istanbul',
    websiteUrl: 'https://www.marmara.edu.tr', logoUrl: '', rankingQs: 901, rankingThe: 860,
    estimatedMonthlyLivingCostEur: 480,
    description: 'A large public university in Istanbul with prominent schools of business and European studies.',
    programs: [
      { id: 'p-561', universityId: 'uni-258', name: 'M.Sc. Business Administration (MBA)', fieldOfStudy: 'Business Administration', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 2500, minGpaRequired: 2.8, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-07-01', applicationUrl: 'https://www.marmara.edu.tr' },
      { id: 'p-562', universityId: 'uni-258', name: 'M.A. European Union Relations', fieldOfStudy: 'Social Sciences', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 2000, minGpaRequired: 2.8, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-07-01', applicationUrl: 'https://www.marmara.edu.tr' },
    ]
  },
  {
    id: 'uni-259', name: 'Amsterdam University of Applied Sciences', country: 'Netherlands', city: 'Amsterdam',
    websiteUrl: 'https://www.hva.nl', logoUrl: '', rankingQs: 0, rankingThe: 0,
    estimatedMonthlyLivingCostEur: 1150,
    description: 'A practice-oriented university in Amsterdam offering hands-on bachelor programs in business, IT, and media.',
    programs: [
      { id: 'p-563', universityId: 'uni-259', name: 'B.Sc. Computer Science', fieldOfStudy: 'Computer Science', degreeLevel: 'bachelors', languageOfInstruction: 'English', durationMonths: 48, tuitionPerYearEur: 2530, minGpaRequired: 2.5, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-05-01', applicationUrl: 'https://www.hva.nl' },
      { id: 'p-564', universityId: 'uni-259', name: 'B.Sc. Business Administration', fieldOfStudy: 'Business Administration', degreeLevel: 'bachelors', languageOfInstruction: 'English', durationMonths: 48, tuitionPerYearEur: 2530, minGpaRequired: 2.5, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-05-01', applicationUrl: 'https://www.hva.nl' },
    ]
  },
  {
    id: 'uni-260', name: 'Hanze University of Applied Sciences', country: 'Netherlands', city: 'Groningen',
    websiteUrl: 'https://www.hanze.nl', logoUrl: '', rankingQs: 0, rankingThe: 0,
    estimatedMonthlyLivingCostEur: 950,
    description: 'A large Dutch university of applied sciences in Groningen with a focus on energy, healthcare, and business.',
    programs: [
      { id: 'p-565', universityId: 'uni-260', name: 'B.Sc. International Business', fieldOfStudy: 'Business Administration', degreeLevel: 'bachelors', languageOfInstruction: 'English', durationMonths: 48, tuitionPerYearEur: 2530, minGpaRequired: 2.5, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-05-01', applicationUrl: 'https://www.hanze.nl' },
      { id: 'p-566', universityId: 'uni-260', name: 'B.Sc. Energy Engineering', fieldOfStudy: 'Engineering', degreeLevel: 'bachelors', languageOfInstruction: 'English', durationMonths: 48, tuitionPerYearEur: 2530, minGpaRequired: 2.5, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-05-01', applicationUrl: 'https://www.hanze.nl' },
    ]
  },
  {
    id: 'uni-261', name: 'Rotterdam University of Applied Sciences', country: 'Netherlands', city: 'Rotterdam',
    websiteUrl: 'https://www.rotterdamuas.com', logoUrl: '', rankingQs: 0, rankingThe: 0,
    estimatedMonthlyLivingCostEur: 1050,
    description: 'Practice-oriented university in Europe\'s largest port city, excelling in logistics, business, and technology.',
    programs: [
      { id: 'p-567', universityId: 'uni-261', name: 'B.Sc. Logistics Management', fieldOfStudy: 'Business Administration', degreeLevel: 'bachelors', languageOfInstruction: 'English', durationMonths: 48, tuitionPerYearEur: 2530, minGpaRequired: 2.5, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-05-01', applicationUrl: 'https://www.rotterdamuas.com' },
      { id: 'p-568', universityId: 'uni-261', name: 'B.Sc. Software Engineering', fieldOfStudy: 'Computer Science', degreeLevel: 'bachelors', languageOfInstruction: 'English', durationMonths: 48, tuitionPerYearEur: 2530, minGpaRequired: 2.5, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-05-01', applicationUrl: 'https://www.rotterdamuas.com' },
    ]
  },
  {
    id: 'uni-262', name: 'Fontys University of Applied Sciences', country: 'Netherlands', city: 'Eindhoven',
    websiteUrl: 'https://www.fontys.edu', logoUrl: '', rankingQs: 0, rankingThe: 0,
    estimatedMonthlyLivingCostEur: 1000,
    description: 'One of the largest Dutch universities of applied sciences in the Brainport technology region.',
    programs: [
      { id: 'p-569', universityId: 'uni-262', name: 'B.Sc. ICT & Technology', fieldOfStudy: 'Computer Science', degreeLevel: 'bachelors', languageOfInstruction: 'English', durationMonths: 48, tuitionPerYearEur: 2530, minGpaRequired: 2.5, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-05-01', applicationUrl: 'https://www.fontys.edu' },
      { id: 'p-570', universityId: 'uni-262', name: 'B.Sc. International Business', fieldOfStudy: 'Business Administration', degreeLevel: 'bachelors', languageOfInstruction: 'English', durationMonths: 48, tuitionPerYearEur: 2530, minGpaRequired: 2.5, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-05-01', applicationUrl: 'https://www.fontys.edu' },
    ]
  },
  {
    id: 'uni-263', name: 'University of Gothenburg', country: 'Sweden', city: 'Gothenburg',
    websiteUrl: 'https://www.gu.se', logoUrl: '', rankingQs: 351, rankingThe: 320,
    estimatedMonthlyLivingCostEur: 1050,
    description: 'Sweden\'s second-largest university with strong programs in social sciences, natural sciences, and arts.',
    programs: [
      { id: 'p-571', universityId: 'uni-263', name: 'M.Sc. Data Science', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 13250, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-01-15', applicationUrl: 'https://www.gu.se' },
      { id: 'p-572', universityId: 'uni-263', name: 'M.Sc. Public Health', fieldOfStudy: 'Natural Sciences', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 13250, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-01-15', applicationUrl: 'https://www.gu.se' },
    ]
  },
  {
    id: 'uni-264', name: 'Örebro University', country: 'Sweden', city: 'Örebro',
    websiteUrl: 'https://www.oru.se', logoUrl: '', rankingQs: 601, rankingThe: 570,
    estimatedMonthlyLivingCostEur: 900,
    description: 'A welcoming Swedish university known for robotics, informatics, and culinary arts research.',
    programs: [
      { id: 'p-573', universityId: 'uni-264', name: 'M.Sc. Robotics and Intelligent Systems', fieldOfStudy: 'Engineering', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 13250, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-01-15', applicationUrl: 'https://www.oru.se' },
      { id: 'p-574', universityId: 'uni-264', name: 'M.Sc. Computer Science', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 13250, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-01-15', applicationUrl: 'https://www.oru.se' },
    ]
  },
  {
    id: 'uni-265', name: 'Mälardalen University', country: 'Sweden', city: 'Västerås',
    websiteUrl: 'https://www.mdu.se', logoUrl: '', rankingQs: 0, rankingThe: 0,
    estimatedMonthlyLivingCostEur: 880,
    description: 'Sweden\'s fastest-growing university with a strong focus on embedded systems and innovation.',
    programs: [
      { id: 'p-575', universityId: 'uni-265', name: 'M.Sc. Embedded Systems', fieldOfStudy: 'Engineering', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 13250, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-01-15', applicationUrl: 'https://www.mdu.se' },
      { id: 'p-576', universityId: 'uni-265', name: 'M.Sc. Innovation and Design', fieldOfStudy: 'Engineering', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 13250, minGpaRequired: 2.8, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-01-15', applicationUrl: 'https://www.mdu.se' },
    ]
  },
  {
    id: 'uni-266', name: 'Mid Sweden University', country: 'Sweden', city: 'Sundsvall',
    websiteUrl: 'https://www.miun.se', logoUrl: '', rankingQs: 0, rankingThe: 0,
    estimatedMonthlyLivingCostEur: 860,
    description: 'A university in northern Sweden with strengths in sports science, media, and sustainable technologies.',
    programs: [
      { id: 'p-577', universityId: 'uni-266', name: 'M.Sc. Sustainable Engineering', fieldOfStudy: 'Engineering', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 13250, minGpaRequired: 2.8, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-01-15', applicationUrl: 'https://www.miun.se' },
      { id: 'p-578', universityId: 'uni-266', name: 'M.A. Media & Communication', fieldOfStudy: 'Social Sciences', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 13250, minGpaRequired: 2.8, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-01-15', applicationUrl: 'https://www.miun.se' },
    ]
  },
  {
    id: 'uni-267', name: 'Jönköping University', country: 'Sweden', city: 'Jönköping',
    websiteUrl: 'https://ju.se', logoUrl: '', rankingQs: 0, rankingThe: 0,
    estimatedMonthlyLivingCostEur: 900,
    description: 'An entrepreneurial Swedish university with internationally acclaimed business and engineering schools.',
    programs: [
      { id: 'p-579', universityId: 'uni-267', name: 'M.Sc. Business Administration', fieldOfStudy: 'Business Administration', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 13250, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-01-15', applicationUrl: 'https://ju.se' },
      { id: 'p-580', universityId: 'uni-267', name: 'M.Sc. Industrial Engineering', fieldOfStudy: 'Engineering', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 13250, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-01-15', applicationUrl: 'https://ju.se' },
    ]
  },
  {
    id: 'uni-268', name: 'University of Lodz', country: 'Poland', city: 'Lodz',
    websiteUrl: 'https://www.uni.lodz.pl', logoUrl: '', rankingQs: 801, rankingThe: 770,
    estimatedMonthlyLivingCostEur: 600,
    description: 'A comprehensive Polish university with strengths in economics, sociology, and natural sciences.',
    programs: [
      { id: 'p-581', universityId: 'uni-268', name: 'M.Sc. Data Science', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 2000, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-07-15', applicationUrl: 'https://www.uni.lodz.pl' },
      { id: 'p-582', universityId: 'uni-268', name: 'M.Sc. Economics', fieldOfStudy: 'Economics', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 2000, minGpaRequired: 2.8, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-07-15', applicationUrl: 'https://www.uni.lodz.pl' },
    ]
  },
  {
    id: 'uni-269', name: 'Gdańsk University of Technology', country: 'Poland', city: 'Gdańsk',
    websiteUrl: 'https://pg.edu.pl', logoUrl: '', rankingQs: 801, rankingThe: 770,
    estimatedMonthlyLivingCostEur: 650,
    description: 'A leading technical university on the Baltic Sea coast with excellent civil and electrical engineering programs.',
    programs: [
      { id: 'p-583', universityId: 'uni-269', name: 'M.Sc. Civil Engineering', fieldOfStudy: 'Engineering', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 2500, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-07-15', applicationUrl: 'https://pg.edu.pl' },
      { id: 'p-584', universityId: 'uni-269', name: 'M.Sc. Computer Science', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 2500, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-07-15', applicationUrl: 'https://pg.edu.pl' },
    ]
  },
  {
    id: 'uni-270', name: 'University of Gdańsk', country: 'Poland', city: 'Gdańsk',
    websiteUrl: 'https://ug.edu.pl', logoUrl: '', rankingQs: 901, rankingThe: 860,
    estimatedMonthlyLivingCostEur: 640,
    description: 'Baltic university with top programs in economics, law, and environmental protection.',
    programs: [
      { id: 'p-585', universityId: 'uni-270', name: 'M.Sc. Marine Biology', fieldOfStudy: 'Biology', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 1800, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-07-01', applicationUrl: 'https://ug.edu.pl' },
      { id: 'p-586', universityId: 'uni-270', name: 'LL.M. International Law', fieldOfStudy: 'Law', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 1800, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-07-01', applicationUrl: 'https://ug.edu.pl' },
    ]
  },
  {
    id: 'uni-271', name: 'Silesian University of Technology', country: 'Poland', city: 'Gliwice',
    websiteUrl: 'https://www.polsl.pl', logoUrl: '', rankingQs: 801, rankingThe: 760,
    estimatedMonthlyLivingCostEur: 580,
    description: 'One of Poland\'s largest technical universities with comprehensive engineering and computer science programs.',
    programs: [
      { id: 'p-587', universityId: 'uni-271', name: 'M.Sc. Mechanical Engineering', fieldOfStudy: 'Engineering', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 2200, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-07-15', applicationUrl: 'https://www.polsl.pl' },
      { id: 'p-588', universityId: 'uni-271', name: 'M.Sc. Automation & Robotics', fieldOfStudy: 'Engineering', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 2200, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-07-15', applicationUrl: 'https://www.polsl.pl' },
    ]
  },
  {
    id: 'uni-272', name: 'University of West Bohemia', country: 'Czech Republic', city: 'Plzeň',
    websiteUrl: 'https://www.zcu.cz', logoUrl: '', rankingQs: 0, rankingThe: 0,
    estimatedMonthlyLivingCostEur: 650,
    description: 'A technical university in western Bohemia with strong programs in computer science and electrical engineering.',
    programs: [
      { id: 'p-589', universityId: 'uni-272', name: 'M.Sc. Computer Science', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 2000, minGpaRequired: 2.8, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-06-30', applicationUrl: 'https://www.zcu.cz' },
      { id: 'p-590', universityId: 'uni-272', name: 'M.Sc. Electrical Engineering', fieldOfStudy: 'Engineering', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 2000, minGpaRequired: 2.8, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-06-30', applicationUrl: 'https://www.zcu.cz' },
    ]
  },
  {
    id: 'uni-273', name: 'Palacký University Olomouc', country: 'Czech Republic', city: 'Olomouc',
    websiteUrl: 'https://www.upol.cz', logoUrl: '', rankingQs: 801, rankingThe: 760,
    estimatedMonthlyLivingCostEur: 600,
    description: 'The second oldest Czech university with excellent natural sciences, medicine, and law faculties.',
    programs: [
      { id: 'p-591', universityId: 'uni-273', name: 'M.Sc. Biochemistry', fieldOfStudy: 'Chemistry', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 3000, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-06-30', applicationUrl: 'https://www.upol.cz' },
      { id: 'p-592', universityId: 'uni-273', name: 'M.Sc. Optics', fieldOfStudy: 'Physics', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 3000, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-06-30', applicationUrl: 'https://www.upol.cz' },
    ]
  },
  {
    id: 'uni-274', name: 'Óbuda University', country: 'Hungary', city: 'Budapest',
    websiteUrl: 'https://uni-obuda.hu', logoUrl: '', rankingQs: 0, rankingThe: 0,
    estimatedMonthlyLivingCostEur: 700,
    description: 'A modern Budapest university specialising in IT, engineering, and applied sciences.',
    programs: [
      { id: 'p-593', universityId: 'uni-274', name: 'M.Sc. Computer Science', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 3500, minGpaRequired: 2.8, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-07-31', applicationUrl: 'https://uni-obuda.hu' },
      { id: 'p-594', universityId: 'uni-274', name: 'M.Sc. Electrical Engineering', fieldOfStudy: 'Engineering', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 3500, minGpaRequired: 2.8, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-07-31', applicationUrl: 'https://uni-obuda.hu' },
    ]
  },
  {
    id: 'uni-275', name: 'Semmelweis University', country: 'Hungary', city: 'Budapest',
    websiteUrl: 'https://semmelweis.hu', logoUrl: '', rankingQs: 701, rankingThe: 670,
    estimatedMonthlyLivingCostEur: 700,
    description: 'Hungary\'s leading medical university, offering internationally recognised degrees in medicine and health sciences.',
    programs: [
      { id: 'p-595', universityId: 'uni-275', name: 'M.D. Medicine', fieldOfStudy: 'Natural Sciences', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 72, tuitionPerYearEur: 16000, minGpaRequired: 3.5, requiredLanguage: 'English', requiredLanguageLevel: 'C1', applicationDeadline: '2026-05-31', applicationUrl: 'https://semmelweis.hu' },
      { id: 'p-596', universityId: 'uni-275', name: 'M.Sc. Health Informatics', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 7000, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-05-31', applicationUrl: 'https://semmelweis.hu' },
    ]
  },
  {
    id: 'uni-276', name: 'University of Patras', country: 'Greece', city: 'Patras',
    websiteUrl: 'https://www.upatras.gr', logoUrl: '', rankingQs: 801, rankingThe: 760,
    estimatedMonthlyLivingCostEur: 650,
    description: 'A large Greek polytechnic university with strong engineering and natural sciences research.',
    programs: [
      { id: 'p-597', universityId: 'uni-276', name: 'M.Sc. Computer Engineering', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 1500, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-07-01', applicationUrl: 'https://www.upatras.gr' },
      { id: 'p-598', universityId: 'uni-276', name: 'M.Sc. Mechanical Engineering', fieldOfStudy: 'Engineering', degreeLevel: 'masters', languageOfInstruction: 'Greek', durationMonths: 24, tuitionPerYearEur: 0, minGpaRequired: 3.0, requiredLanguage: 'Greek', requiredLanguageLevel: 'B2', applicationDeadline: '2026-07-01', applicationUrl: 'https://www.upatras.gr' },
    ]
  },
  {
    id: 'uni-277', name: 'University of Ioannina', country: 'Greece', city: 'Ioannina',
    websiteUrl: 'https://www.uoi.gr', logoUrl: '', rankingQs: 901, rankingThe: 870,
    estimatedMonthlyLivingCostEur: 600,
    description: 'A comprehensive Greek university in the scenic Epirus region with strong programs in mathematics and ecology.',
    programs: [
      { id: 'p-599', universityId: 'uni-277', name: 'M.Sc. Mathematics', fieldOfStudy: 'Mathematics', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 1500, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-07-01', applicationUrl: 'https://www.uoi.gr' },
      { id: 'p-600', universityId: 'uni-277', name: 'M.Sc. Environmental Sciences', fieldOfStudy: 'Natural Sciences', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 1500, minGpaRequired: 2.8, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-07-01', applicationUrl: 'https://www.uoi.gr' },
    ]
  },
  {
    id: 'uni-278', name: 'Alexandru Ioan Cuza University', country: 'Romania', city: 'Iași',
    websiteUrl: 'https://www.uaic.ro', logoUrl: '', rankingQs: 901, rankingThe: 860,
    estimatedMonthlyLivingCostEur: 500,
    description: 'Romania\'s oldest university, known for its scientific research and humanities tradition in the city of Iași.',
    programs: [
      { id: 'p-601', universityId: 'uni-278', name: 'M.Sc. Computer Science', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 2000, minGpaRequired: 2.8, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-07-15', applicationUrl: 'https://www.uaic.ro' },
      { id: 'p-602', universityId: 'uni-278', name: 'M.A. Cultural Studies', fieldOfStudy: 'Arts & Humanities', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 2000, minGpaRequired: 2.8, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-07-15', applicationUrl: 'https://www.uaic.ro' },
    ]
  },
  {
    id: 'uni-279', name: 'West University of Timișoara', country: 'Romania', city: 'Timișoara',
    websiteUrl: 'https://www.uvt.ro', logoUrl: '', rankingQs: 901, rankingThe: 870,
    estimatedMonthlyLivingCostEur: 500,
    description: 'A multicultural Romanian university in Timișoara with modern programs in computer science and economics.',
    programs: [
      { id: 'p-603', universityId: 'uni-279', name: 'M.Sc. Computer Science', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 1800, minGpaRequired: 2.8, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-07-31', applicationUrl: 'https://www.uvt.ro' },
      { id: 'p-604', universityId: 'uni-279', name: 'M.Sc. Economics', fieldOfStudy: 'Economics', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 1800, minGpaRequired: 2.5, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-07-31', applicationUrl: 'https://www.uvt.ro' },
    ]
  },
  {
    id: 'uni-280', name: 'University of Eastern Finland', country: 'Finland', city: 'Joensuu',
    websiteUrl: 'https://www.uef.fi', logoUrl: '', rankingQs: 551, rankingThe: 520,
    estimatedMonthlyLivingCostEur: 800,
    description: 'A multidisciplinary Finnish university across two campuses, renowned for forest sciences and photonics.',
    programs: [
      { id: 'p-605', universityId: 'uni-280', name: 'M.Sc. Environmental Science', fieldOfStudy: 'Natural Sciences', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 10000, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-01-20', applicationUrl: 'https://www.uef.fi' },
      { id: 'p-606', universityId: 'uni-280', name: 'M.Sc. Computer Science', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 10000, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-01-20', applicationUrl: 'https://www.uef.fi' },
    ]
  },
  {
    id: 'uni-281', name: 'University of Jyväskylä', country: 'Finland', city: 'Jyväskylä',
    websiteUrl: 'https://www.jyu.fi', logoUrl: '', rankingQs: 551, rankingThe: 520,
    estimatedMonthlyLivingCostEur: 820,
    description: 'A vibrant Finnish university known for sports science, educational research, and information technology.',
    programs: [
      { id: 'p-607', universityId: 'uni-281', name: 'M.Sc. Information Technology', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 10000, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-01-20', applicationUrl: 'https://www.jyu.fi' },
      { id: 'p-608', universityId: 'uni-281', name: 'M.Sc. Sport and Exercise Psychology', fieldOfStudy: 'Psychology', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 10000, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-01-20', applicationUrl: 'https://www.jyu.fi' },
    ]
  },
  {
    id: 'uni-282', name: 'IT University of Copenhagen', country: 'Denmark', city: 'Copenhagen',
    websiteUrl: 'https://en.itu.dk', logoUrl: '', rankingQs: 601, rankingThe: 570,
    estimatedMonthlyLivingCostEur: 1200,
    description: 'Denmark\'s dedicated IT university with cutting-edge programs in software development and digital innovation.',
    programs: [
      { id: 'p-609', universityId: 'uni-282', name: 'M.Sc. Software Development', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 15000, minGpaRequired: 3.2, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-03-15', applicationUrl: 'https://en.itu.dk' },
      { id: 'p-610', universityId: 'uni-282', name: 'M.Sc. Data Science', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 15000, minGpaRequired: 3.2, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-03-15', applicationUrl: 'https://en.itu.dk' },
    ]
  },
  {
    id: 'uni-283', name: 'Roskilde University', country: 'Denmark', city: 'Roskilde',
    websiteUrl: 'https://ruc.dk', logoUrl: '', rankingQs: 801, rankingThe: 760,
    estimatedMonthlyLivingCostEur: 1100,
    description: 'A problem-oriented Danish university focused on social sciences, humanities, and natural sciences.',
    programs: [
      { id: 'p-611', universityId: 'uni-283', name: 'M.Sc. Global Studies', fieldOfStudy: 'Social Sciences', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 15000, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-03-15', applicationUrl: 'https://ruc.dk' },
      { id: 'p-612', universityId: 'uni-283', name: 'M.Sc. Performance Design', fieldOfStudy: 'Arts & Humanities', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 15000, minGpaRequired: 2.8, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-03-15', applicationUrl: 'https://ruc.dk' },
    ]
  },
  {
    id: 'uni-284', name: 'University of Stavanger', country: 'Norway', city: 'Stavanger',
    websiteUrl: 'https://www.uis.no', logoUrl: '', rankingQs: 801, rankingThe: 760,
    estimatedMonthlyLivingCostEur: 1100,
    description: 'Norway\'s energy and petroleum university in Stavanger, with strong programs in engineering and business.',
    programs: [
      { id: 'p-613', universityId: 'uni-284', name: 'M.Sc. Petroleum Engineering', fieldOfStudy: 'Engineering', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 0, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-04-15', applicationUrl: 'https://www.uis.no' },
      { id: 'p-614', universityId: 'uni-284', name: 'M.Sc. Offshore Technology', fieldOfStudy: 'Engineering', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 0, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-04-15', applicationUrl: 'https://www.uis.no' },
    ]
  },
  {
    id: 'uni-285', name: 'University of Agder', country: 'Norway', city: 'Kristiansand',
    websiteUrl: 'https://www.uia.no', logoUrl: '', rankingQs: 0, rankingThe: 0,
    estimatedMonthlyLivingCostEur: 1050,
    description: 'A young Norwegian university on the southern coast, focused on applied ICT, engineering, and education.',
    programs: [
      { id: 'p-615', universityId: 'uni-285', name: 'M.Sc. Information and Communication Technology', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 0, minGpaRequired: 2.8, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-04-15', applicationUrl: 'https://www.uia.no' },
      { id: 'p-616', universityId: 'uni-285', name: 'M.Sc. Engineering', fieldOfStudy: 'Engineering', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 0, minGpaRequired: 2.8, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-04-15', applicationUrl: 'https://www.uia.no' },
    ]
  },
  {
    id: 'uni-286', name: 'University of Namur', country: 'Belgium', city: 'Namur',
    websiteUrl: 'https://www.unamur.be', logoUrl: '', rankingQs: 801, rankingThe: 770,
    estimatedMonthlyLivingCostEur: 800,
    description: 'A Walloon university with strong programs in computer science, biology, and economics.',
    programs: [
      { id: 'p-617', universityId: 'uni-286', name: 'M.Sc. Computer Science', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 835, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-06-15', applicationUrl: 'https://www.unamur.be' },
      { id: 'p-618', universityId: 'uni-286', name: 'M.Sc. Life Sciences', fieldOfStudy: 'Biology', degreeLevel: 'masters', languageOfInstruction: 'French', durationMonths: 24, tuitionPerYearEur: 835, minGpaRequired: 3.0, requiredLanguage: 'French', requiredLanguageLevel: 'B2', applicationDeadline: '2026-06-15', applicationUrl: 'https://www.unamur.be' },
    ]
  },
  {
    id: 'uni-287', name: 'University of Liège', country: 'Belgium', city: 'Liège',
    websiteUrl: 'https://www.uliege.be', logoUrl: '', rankingQs: 601, rankingThe: 570,
    estimatedMonthlyLivingCostEur: 850,
    description: 'A major Francophone university in Belgium, excelling in veterinary medicine, engineering, and space sciences.',
    programs: [
      { id: 'p-619', universityId: 'uni-287', name: 'M.Sc. Aerospace Engineering', fieldOfStudy: 'Engineering', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 835, minGpaRequired: 3.2, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-05-31', applicationUrl: 'https://www.uliege.be' },
      { id: 'p-620', universityId: 'uni-287', name: 'M.Sc. Business Engineering', fieldOfStudy: 'Business Administration', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 835, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-05-31', applicationUrl: 'https://www.uliege.be' },
    ]
  },
  {
    id: 'uni-288', name: 'University of Neuchâtel', country: 'Switzerland', city: 'Neuchâtel',
    websiteUrl: 'https://www.unine.ch', logoUrl: '', rankingQs: 601, rankingThe: 580,
    estimatedMonthlyLivingCostEur: 1400,
    description: 'A boutique Swiss French-speaking university on Lake Neuchâtel with strong law and language programs.',
    programs: [
      { id: 'p-621', universityId: 'uni-288', name: 'LL.M. International Law', fieldOfStudy: 'Law', degreeLevel: 'masters', languageOfInstruction: 'French', durationMonths: 12, tuitionPerYearEur: 850, minGpaRequired: 3.2, requiredLanguage: 'French', requiredLanguageLevel: 'B2', applicationDeadline: '2026-04-30', applicationUrl: 'https://www.unine.ch' },
      { id: 'p-622', universityId: 'uni-288', name: 'M.Sc. Computer Science', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 850, minGpaRequired: 3.2, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-04-30', applicationUrl: 'https://www.unine.ch' },
    ]
  },
  {
    id: 'uni-289', name: 'Università della Svizzera italiana (USI)', country: 'Switzerland', city: 'Lugano',
    websiteUrl: 'https://www.usi.ch', logoUrl: '', rankingQs: 551, rankingThe: 530,
    estimatedMonthlyLivingCostEur: 1500,
    description: 'Switzerland\'s Italian-speaking university in Lugano, known for computer science, architecture, and communication.',
    programs: [
      { id: 'p-623', universityId: 'uni-289', name: 'M.Sc. Computational Science', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 4000, minGpaRequired: 3.3, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-04-01', applicationUrl: 'https://www.usi.ch' },
      { id: 'p-624', universityId: 'uni-289', name: 'M.Sc. Artificial Intelligence', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 4000, minGpaRequired: 3.3, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-04-01', applicationUrl: 'https://www.usi.ch' },
    ]
  },
  {
    id: 'uni-290', name: 'Maynooth University', country: 'Ireland', city: 'Maynooth',
    websiteUrl: 'https://www.maynoothuniversity.ie', logoUrl: '', rankingQs: 651, rankingThe: 620,
    estimatedMonthlyLivingCostEur: 1100,
    description: 'Ireland\'s fastest-growing university, known for computer science, mathematics, and social sciences.',
    programs: [
      { id: 'p-625', universityId: 'uni-290', name: 'M.Sc. Computer Science', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 12, tuitionPerYearEur: 8000, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'C1', applicationDeadline: '2026-07-01', applicationUrl: 'https://www.maynoothuniversity.ie' },
      { id: 'p-626', universityId: 'uni-290', name: 'M.Sc. Data Science', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 12, tuitionPerYearEur: 8000, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'C1', applicationDeadline: '2026-07-01', applicationUrl: 'https://www.maynoothuniversity.ie' },
    ]
  },
  {
    id: 'uni-291', name: 'University College Cork', country: 'Ireland', city: 'Cork',
    websiteUrl: 'https://www.ucc.ie', logoUrl: '', rankingQs: 401, rankingThe: 380,
    estimatedMonthlyLivingCostEur: 1100,
    description: 'One of Ireland\'s top universities, internationally renowned for food science, pharmacy, and engineering.',
    programs: [
      { id: 'p-627', universityId: 'uni-291', name: 'M.Sc. Food Science', fieldOfStudy: 'Natural Sciences', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 12, tuitionPerYearEur: 7000, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'C1', applicationDeadline: '2026-07-01', applicationUrl: 'https://www.ucc.ie' },
      { id: 'p-628', universityId: 'uni-291', name: 'M.Sc. Software Engineering', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 12, tuitionPerYearEur: 8500, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'C1', applicationDeadline: '2026-07-01', applicationUrl: 'https://www.ucc.ie' },
    ]
  },
  {
    id: 'uni-292', name: 'University of Minho', country: 'Portugal', city: 'Braga',
    websiteUrl: 'https://www.uminho.pt', logoUrl: '', rankingQs: 501, rankingThe: 480,
    estimatedMonthlyLivingCostEur: 650,
    description: 'A young and dynamic Portuguese university with strong programs in engineering and computer science.',
    programs: [
      { id: 'p-629', universityId: 'uni-292', name: 'M.Sc. Software Engineering', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 2000, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-07-31', applicationUrl: 'https://www.uminho.pt' },
      { id: 'p-630', universityId: 'uni-292', name: 'M.Sc. Electrical Engineering', fieldOfStudy: 'Engineering', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 2000, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-07-31', applicationUrl: 'https://www.uminho.pt' },
    ]
  },
  {
    id: 'uni-293', name: 'University of Algarve', country: 'Portugal', city: 'Faro',
    websiteUrl: 'https://www.ualg.pt', logoUrl: '', rankingQs: 0, rankingThe: 0,
    estimatedMonthlyLivingCostEur: 700,
    description: 'Portugal\'s southernmost university in sunny Algarve, with marine biology, tourism, and engineering programs.',
    programs: [
      { id: 'p-631', universityId: 'uni-293', name: 'M.Sc. Marine Sciences', fieldOfStudy: 'Natural Sciences', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 1700, minGpaRequired: 2.8, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-07-31', applicationUrl: 'https://www.ualg.pt' },
      { id: 'p-632', universityId: 'uni-293', name: 'M.Sc. Tourism Management', fieldOfStudy: 'Business Administration', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 12, tuitionPerYearEur: 1700, minGpaRequired: 2.5, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-07-31', applicationUrl: 'https://www.ualg.pt' },
    ]
  },
  {
    id: 'uni-294', name: 'University of Salzburg', country: 'Austria', city: 'Salzburg',
    websiteUrl: 'https://www.plus.ac.at', logoUrl: '', rankingQs: 601, rankingThe: 570,
    estimatedMonthlyLivingCostEur: 1000,
    description: 'A humanities-focused Austrian university in the birthplace of Mozart, with strong law and natural sciences programs.',
    programs: [
      { id: 'p-633', universityId: 'uni-294', name: 'LL.M. European and International Law', fieldOfStudy: 'Law', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 12, tuitionPerYearEur: 726, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'C1', applicationDeadline: '2026-04-30', applicationUrl: 'https://www.plus.ac.at' },
      { id: 'p-634', universityId: 'uni-294', name: 'M.Sc. Psychology', fieldOfStudy: 'Psychology', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 726, minGpaRequired: 3.2, requiredLanguage: 'English', requiredLanguageLevel: 'C1', applicationDeadline: '2026-04-30', applicationUrl: 'https://www.plus.ac.at' },
    ]
  },
  {
    id: 'uni-295', name: 'Alpen-Adria-Universität Klagenfurt', country: 'Austria', city: 'Klagenfurt',
    websiteUrl: 'https://www.aau.at', logoUrl: '', rankingQs: 0, rankingThe: 0,
    estimatedMonthlyLivingCostEur: 920,
    description: 'An Austrian university at the crossroads of three cultures, with innovative programs in technology and management.',
    programs: [
      { id: 'p-635', universityId: 'uni-295', name: 'M.Sc. Information Technology', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 726, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-06-30', applicationUrl: 'https://www.aau.at' },
      { id: 'p-636', universityId: 'uni-295', name: 'M.Sc. Management', fieldOfStudy: 'Business Administration', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 726, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-06-30', applicationUrl: 'https://www.aau.at' },
    ]
  },
  {
    id: 'uni-296', name: 'University of Iceland', country: 'Iceland', city: 'Reykjavík',
    websiteUrl: 'https://english.hi.is', logoUrl: '', rankingQs: 401, rankingThe: 380,
    estimatedMonthlyLivingCostEur: 1500,
    description: 'Iceland\'s national university offering graduate programs in engineering, social sciences, and natural sciences, taught in English.',
    programs: [
      { id: 'p-637', universityId: 'uni-296', name: 'M.Sc. Computer Science', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 0, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-05-01', applicationUrl: 'https://english.hi.is' },
      { id: 'p-638', universityId: 'uni-296', name: 'M.Sc. Environmental Science', fieldOfStudy: 'Natural Sciences', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 0, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-05-01', applicationUrl: 'https://english.hi.is' },
    ]
  },
  {
    id: 'uni-297', name: 'Reykjavík University', country: 'Iceland', city: 'Reykjavík',
    websiteUrl: 'https://en.ru.is', logoUrl: '', rankingQs: 0, rankingThe: 0,
    estimatedMonthlyLivingCostEur: 1500,
    description: 'Iceland\'s largest private university with English-medium programs in engineering, business, and law.',
    programs: [
      { id: 'p-639', universityId: 'uni-297', name: 'M.Sc. Software Engineering', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 5000, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-05-15', applicationUrl: 'https://en.ru.is' },
      { id: 'p-640', universityId: 'uni-297', name: 'M.Sc. Business Administration', fieldOfStudy: 'Business Administration', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 5000, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-05-15', applicationUrl: 'https://en.ru.is' },
    ]
  },
  {
    id: 'uni-298', name: 'University of Cyprus', country: 'Cyprus', city: 'Nicosia',
    websiteUrl: 'https://www.ucy.ac.cy', logoUrl: '', rankingQs: 601, rankingThe: 570,
    estimatedMonthlyLivingCostEur: 850,
    description: 'The largest public university in Cyprus, offering English-medium graduate programs in engineering and science.',
    programs: [
      { id: 'p-641', universityId: 'uni-298', name: 'M.Sc. Computer Science', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 5125, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-05-31', applicationUrl: 'https://www.ucy.ac.cy' },
      { id: 'p-642', universityId: 'uni-298', name: 'M.Sc. Electrical Engineering', fieldOfStudy: 'Engineering', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 5125, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-05-31', applicationUrl: 'https://www.ucy.ac.cy' },
    ]
  },
  {
    id: 'uni-299', name: 'Cyprus University of Technology', country: 'Cyprus', city: 'Limassol',
    websiteUrl: 'https://www.cut.ac.cy', logoUrl: '', rankingQs: 701, rankingThe: 670,
    estimatedMonthlyLivingCostEur: 850,
    description: 'A modern Cypriot university in Limassol focused on applied sciences, engineering, and hotel management.',
    programs: [
      { id: 'p-643', universityId: 'uni-299', name: 'M.Sc. Information Technology', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 5000, minGpaRequired: 2.8, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-06-30', applicationUrl: 'https://www.cut.ac.cy' },
      { id: 'p-644', universityId: 'uni-299', name: 'M.Sc. Biomedical Sciences', fieldOfStudy: 'Biology', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 5000, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-06-30', applicationUrl: 'https://www.cut.ac.cy' },
    ]
  },
  {
    id: 'uni-300', name: 'Frederick University Cyprus', country: 'Cyprus', city: 'Nicosia',
    websiteUrl: 'https://www.frederick.ac.cy', logoUrl: '', rankingQs: 0, rankingThe: 0,
    estimatedMonthlyLivingCostEur: 850,
    description: 'A private Cypriot university with fully English programs in engineering, architecture, and business.',
    programs: [
      { id: 'p-645', universityId: 'uni-300', name: 'M.Sc. Civil Engineering', fieldOfStudy: 'Engineering', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 6000, minGpaRequired: 2.8, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-07-31', applicationUrl: 'https://www.frederick.ac.cy' },
      { id: 'p-646', universityId: 'uni-300', name: 'M.Sc. Architecture', fieldOfStudy: 'Architecture', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 6000, minGpaRequired: 2.8, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-07-31', applicationUrl: 'https://www.frederick.ac.cy' },
    ]
  },
  {
    id: 'uni-301', name: 'University of Luxembourg', country: 'Luxembourg', city: 'Esch-sur-Alzette',
    websiteUrl: 'https://www.uni.lu', logoUrl: '', rankingQs: 251, rankingThe: 220,
    estimatedMonthlyLivingCostEur: 1600,
    description: 'A multilingual, international research university in the heart of Europe with strong programs in finance and computer science.',
    programs: [
      { id: 'p-647', universityId: 'uni-301', name: 'M.Sc. Finance and Economics', fieldOfStudy: 'Economics', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 400, minGpaRequired: 3.2, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-04-01', applicationUrl: 'https://www.uni.lu' },
      { id: 'p-648', universityId: 'uni-301', name: 'M.Sc. Computer Science', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 400, minGpaRequired: 3.2, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-04-01', applicationUrl: 'https://www.uni.lu' },
    ]
  },
  {
    id: 'uni-302', name: 'University of Malta', country: 'Malta', city: 'Msida',
    websiteUrl: 'https://www.um.edu.mt', logoUrl: '', rankingQs: 801, rankingThe: 760,
    estimatedMonthlyLivingCostEur: 900,
    description: 'Malta\'s national university offering English-medium programs in an EU Mediterranean island setting.',
    programs: [
      { id: 'p-649', universityId: 'uni-302', name: 'M.Sc. Computer Science', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 2500, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-06-30', applicationUrl: 'https://www.um.edu.mt' },
      { id: 'p-650', universityId: 'uni-302', name: 'M.Sc. Maritime Studies', fieldOfStudy: 'Engineering', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 12, tuitionPerYearEur: 2500, minGpaRequired: 2.8, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-06-30', applicationUrl: 'https://www.um.edu.mt' },
    ]
  },
  {
    id: 'uni-303', name: 'Tallinn University', country: 'Estonia', city: 'Tallinn',
    websiteUrl: 'https://www.tlu.ee', logoUrl: '', rankingQs: 0, rankingThe: 0,
    estimatedMonthlyLivingCostEur: 750,
    description: 'Estonia\'s digital-humanities university in the medieval capital Tallinn, strong in education and media studies.',
    programs: [
      { id: 'p-651', universityId: 'uni-303', name: 'M.Sc. Educational Technology', fieldOfStudy: 'Education', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 3400, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-06-01', applicationUrl: 'https://www.tlu.ee' },
      { id: 'p-652', universityId: 'uni-303', name: 'M.Sc. Digital Humanities', fieldOfStudy: 'Arts & Humanities', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 3400, minGpaRequired: 2.8, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-06-01', applicationUrl: 'https://www.tlu.ee' },
    ]
  },
  {
    id: 'uni-304', name: 'Estonian University of Life Sciences', country: 'Estonia', city: 'Tartu',
    websiteUrl: 'https://www.emu.ee', logoUrl: '', rankingQs: 0, rankingThe: 0,
    estimatedMonthlyLivingCostEur: 700,
    description: 'Estonia\'s specialist university for life sciences, veterinary medicine, and environmental sustainability.',
    programs: [
      { id: 'p-653', universityId: 'uni-304', name: 'M.Sc. Environmental Management', fieldOfStudy: 'Natural Sciences', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 2500, minGpaRequired: 2.8, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-05-15', applicationUrl: 'https://www.emu.ee' },
      { id: 'p-654', universityId: 'uni-304', name: 'M.Sc. Agricultural Sciences', fieldOfStudy: 'Natural Sciences', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 2500, minGpaRequired: 2.8, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-05-15', applicationUrl: 'https://www.emu.ee' },
    ]
  },
  {
    id: 'uni-305', name: 'Lithuanian Academy of Health Sciences', country: 'Lithuania', city: 'Kaunas',
    websiteUrl: 'https://www.lsmuni.lt', logoUrl: '', rankingQs: 0, rankingThe: 0,
    estimatedMonthlyLivingCostEur: 600,
    description: 'Lithuania\'s leading health sciences university with internationally recognised programs in medicine and pharmacy.',
    programs: [
      { id: 'p-655', universityId: 'uni-305', name: 'M.D. Medicine', fieldOfStudy: 'Natural Sciences', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 72, tuitionPerYearEur: 11000, minGpaRequired: 3.3, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-06-15', applicationUrl: 'https://www.lsmuni.lt' },
      { id: 'p-656', universityId: 'uni-305', name: 'M.Sc. Pharmacy', fieldOfStudy: 'Biology', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 5000, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-06-15', applicationUrl: 'https://www.lsmuni.lt' },
    ]
  },
  {
    id: 'uni-306', name: 'Mykolas Romeris University', country: 'Lithuania', city: 'Vilnius',
    websiteUrl: 'https://www.mruni.eu', logoUrl: '', rankingQs: 0, rankingThe: 0,
    estimatedMonthlyLivingCostEur: 650,
    description: 'A Lithuanian university specialising in law, social technologies, and public administration.',
    programs: [
      { id: 'p-657', universityId: 'uni-306', name: 'LL.M. European Union Law', fieldOfStudy: 'Law', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 2800, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-07-01', applicationUrl: 'https://www.mruni.eu' },
      { id: 'p-658', universityId: 'uni-306', name: 'M.Sc. Smart Social Technologies', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 2800, minGpaRequired: 2.8, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-07-01', applicationUrl: 'https://www.mruni.eu' },
    ]
  },
  {
    id: 'uni-307', name: 'Rīga Stradiņš University', country: 'Latvia', city: 'Riga',
    websiteUrl: 'https://www.rsu.lv', logoUrl: '', rankingQs: 0, rankingThe: 0,
    estimatedMonthlyLivingCostEur: 700,
    description: 'Latvia\'s leading health sciences university, offering English-medium medicine and dentistry programs.',
    programs: [
      { id: 'p-659', universityId: 'uni-307', name: 'M.D. Medicine', fieldOfStudy: 'Natural Sciences', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 72, tuitionPerYearEur: 12000, minGpaRequired: 3.2, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-06-30', applicationUrl: 'https://www.rsu.lv' },
      { id: 'p-660', universityId: 'uni-307', name: 'M.Sc. Public Health', fieldOfStudy: 'Natural Sciences', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 5000, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-06-30', applicationUrl: 'https://www.rsu.lv' },
    ]
  },
  {
    id: 'uni-308', name: 'Latvia University of Life Sciences and Technologies', country: 'Latvia', city: 'Jelgava',
    websiteUrl: 'https://www.llu.lv', logoUrl: '', rankingQs: 0, rankingThe: 0,
    estimatedMonthlyLivingCostEur: 650,
    description: 'Latvia\'s specialist university for agriculture, food technology, and environmental sciences.',
    programs: [
      { id: 'p-661', universityId: 'uni-308', name: 'M.Sc. Food Science and Technology', fieldOfStudy: 'Natural Sciences', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 2200, minGpaRequired: 2.8, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-07-01', applicationUrl: 'https://www.llu.lv' },
      { id: 'p-662', universityId: 'uni-308', name: 'M.Sc. Environmental Engineering', fieldOfStudy: 'Engineering', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 2200, minGpaRequired: 2.8, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-07-01', applicationUrl: 'https://www.llu.lv' },
    ]
  },
  {
    id: 'uni-309', name: 'University of Primorska', country: 'Slovenia', city: 'Koper',
    websiteUrl: 'https://www.upr.si', logoUrl: '', rankingQs: 0, rankingThe: 0,
    estimatedMonthlyLivingCostEur: 800,
    description: 'A Slovenian university on the Adriatic coast with English-medium programs in mathematics, bioinformatics, and management.',
    programs: [
      { id: 'p-663', universityId: 'uni-309', name: 'M.Sc. Bioinformatics', fieldOfStudy: 'Biology', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 3000, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-07-01', applicationUrl: 'https://www.upr.si' },
      { id: 'p-664', universityId: 'uni-309', name: 'M.Sc. Tourism', fieldOfStudy: 'Business Administration', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 3000, minGpaRequired: 2.8, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-07-01', applicationUrl: 'https://www.upr.si' },
    ]
  },
  {
    id: 'uni-310', name: 'University of Nova Gorica', country: 'Slovenia', city: 'Nova Gorica',
    websiteUrl: 'https://www.ung.si', logoUrl: '', rankingQs: 0, rankingThe: 0,
    estimatedMonthlyLivingCostEur: 780,
    description: 'A research university on the Slovenian-Italian border, known for environmental sciences and materials.',
    programs: [
      { id: 'p-665', universityId: 'uni-310', name: 'M.Sc. Materials Science', fieldOfStudy: 'Physics', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 2500, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-07-01', applicationUrl: 'https://www.ung.si' },
      { id: 'p-666', universityId: 'uni-310', name: 'M.Sc. Environmental Sciences', fieldOfStudy: 'Natural Sciences', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 2500, minGpaRequired: 2.8, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-07-01', applicationUrl: 'https://www.ung.si' },
    ]
  },
  {
    id: 'uni-311', name: 'University of Žilina', country: 'Slovakia', city: 'Žilina',
    websiteUrl: 'https://www.uniza.sk', logoUrl: '', rankingQs: 0, rankingThe: 0,
    estimatedMonthlyLivingCostEur: 600,
    description: 'Slovak university in the heart of the Carpathians excelling in transport, electrical engineering, and information technologies.',
    programs: [
      { id: 'p-667', universityId: 'uni-311', name: 'M.Sc. Transport Engineering', fieldOfStudy: 'Engineering', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 2000, minGpaRequired: 2.8, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-07-15', applicationUrl: 'https://www.uniza.sk' },
      { id: 'p-668', universityId: 'uni-311', name: 'M.Sc. Computer Science', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 2000, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-07-15', applicationUrl: 'https://www.uniza.sk' },
    ]
  },
  {
    id: 'uni-312', name: 'Technical University of Košice', country: 'Slovakia', city: 'Košice',
    websiteUrl: 'https://www.tuke.sk', logoUrl: '', rankingQs: 0, rankingThe: 0,
    estimatedMonthlyLivingCostEur: 580,
    description: 'Eastern Slovakia\'s technical university offering affordable programs in engineering and computer science.',
    programs: [
      { id: 'p-669', universityId: 'uni-312', name: 'M.Sc. Electrical Engineering', fieldOfStudy: 'Engineering', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 1800, minGpaRequired: 2.8, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-07-15', applicationUrl: 'https://www.tuke.sk' },
      { id: 'p-670', universityId: 'uni-312', name: 'M.Sc. Industrial Engineering', fieldOfStudy: 'Engineering', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 1800, minGpaRequired: 2.8, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-07-15', applicationUrl: 'https://www.tuke.sk' },
    ]
  },
  {
    id: 'uni-313', name: 'University of Niš', country: 'Serbia', city: 'Niš',
    websiteUrl: 'https://www.ni.ac.rs', logoUrl: '', rankingQs: 0, rankingThe: 0,
    estimatedMonthlyLivingCostEur: 450,
    description: 'A comprehensive Serbian university with faculties spanning engineering, medicine, and economics.',
    programs: [
      { id: 'p-671', universityId: 'uni-313', name: 'M.Sc. Electronics Engineering', fieldOfStudy: 'Engineering', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 2500, minGpaRequired: 2.8, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-07-31', applicationUrl: 'https://www.ni.ac.rs' },
      { id: 'p-672', universityId: 'uni-313', name: 'M.Sc. Economics', fieldOfStudy: 'Economics', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 2500, minGpaRequired: 2.5, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-07-31', applicationUrl: 'https://www.ni.ac.rs' },
    ]
  },
  {
    id: 'uni-314', name: 'University of Kragujevac', country: 'Serbia', city: 'Kragujevac',
    websiteUrl: 'https://www.kg.ac.rs', logoUrl: '', rankingQs: 0, rankingThe: 0,
    estimatedMonthlyLivingCostEur: 430,
    description: 'Central Serbia\'s state university with programs in engineering, medicine, and natural sciences.',
    programs: [
      { id: 'p-673', universityId: 'uni-314', name: 'M.Sc. Mechanical Engineering', fieldOfStudy: 'Engineering', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 2200, minGpaRequired: 2.8, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-07-31', applicationUrl: 'https://www.kg.ac.rs' },
      { id: 'p-674', universityId: 'uni-314', name: 'M.Sc. Computer Science', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 2200, minGpaRequired: 2.8, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-07-31', applicationUrl: 'https://www.kg.ac.rs' },
    ]
  },
  {
    id: 'uni-315', name: 'Plovdiv University', country: 'Bulgaria', city: 'Plovdiv',
    websiteUrl: 'https://uni-plovdiv.bg', logoUrl: '', rankingQs: 0, rankingThe: 0,
    estimatedMonthlyLivingCostEur: 450,
    description: 'Bulgaria\'s second-largest university in the ancient city of Plovdiv, offering modern science and economics programs.',
    programs: [
      { id: 'p-675', universityId: 'uni-315', name: 'M.Sc. Computer Science', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 2000, minGpaRequired: 2.8, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-07-31', applicationUrl: 'https://uni-plovdiv.bg' },
      { id: 'p-676', universityId: 'uni-315', name: 'M.Sc. Business Administration', fieldOfStudy: 'Business Administration', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 2000, minGpaRequired: 2.5, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-07-31', applicationUrl: 'https://uni-plovdiv.bg' },
    ]
  },
  {
    id: 'uni-316', name: 'Varna University of Management', country: 'Bulgaria', city: 'Varna',
    websiteUrl: 'https://www.vum.bg', logoUrl: '', rankingQs: 0, rankingThe: 0,
    estimatedMonthlyLivingCostEur: 450,
    description: 'A focused private Bulgarian university on the Black Sea, offering modern hospitality and business programs.',
    programs: [
      { id: 'p-677', universityId: 'uni-316', name: 'B.Sc. International Hospitality Management', fieldOfStudy: 'Business Administration', degreeLevel: 'bachelors', languageOfInstruction: 'English', durationMonths: 48, tuitionPerYearEur: 4500, minGpaRequired: 2.5, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-07-31', applicationUrl: 'https://www.vum.bg' },
      { id: 'p-678', universityId: 'uni-316', name: 'M.Sc. Business Administration', fieldOfStudy: 'Business Administration', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 4500, minGpaRequired: 2.5, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-07-31', applicationUrl: 'https://www.vum.bg' },
    ]
  },
  {
    id: 'uni-317', name: 'University of Rijeka', country: 'Croatia', city: 'Rijeka',
    websiteUrl: 'https://www.uniri.hr', logoUrl: '', rankingQs: 0, rankingThe: 0,
    estimatedMonthlyLivingCostEur: 700,
    description: 'A Croatian Adriatic university known for maritime studies, engineering, and medicine.',
    programs: [
      { id: 'p-679', universityId: 'uni-317', name: 'M.Sc. Maritime Studies', fieldOfStudy: 'Engineering', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 2000, minGpaRequired: 2.8, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-07-01', applicationUrl: 'https://www.uniri.hr' },
      { id: 'p-680', universityId: 'uni-317', name: 'M.Sc. Computer Engineering', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 2000, minGpaRequired: 2.8, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-07-01', applicationUrl: 'https://www.uniri.hr' },
    ]
  },
  {
    id: 'uni-318', name: 'Josip Juraj Strossmayer University of Osijek', country: 'Croatia', city: 'Osijek',
    websiteUrl: 'https://www.unios.hr', logoUrl: '', rankingQs: 0, rankingThe: 0,
    estimatedMonthlyLivingCostEur: 650,
    description: 'The main university in eastern Croatia, with programs in economics, electrical engineering, and agriculture.',
    programs: [
      { id: 'p-681', universityId: 'uni-318', name: 'M.Sc. Electrical Engineering', fieldOfStudy: 'Engineering', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 1800, minGpaRequired: 2.8, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-07-01', applicationUrl: 'https://www.unios.hr' },
      { id: 'p-682', universityId: 'uni-318', name: 'M.Sc. Economics', fieldOfStudy: 'Economics', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 1800, minGpaRequired: 2.5, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-07-01', applicationUrl: 'https://www.unios.hr' },
    ]
  },
  {
    id: 'uni-319', name: 'University of Sarajevo', country: 'Bosnia', city: 'Sarajevo',
    websiteUrl: 'https://www.unsa.ba', logoUrl: '', rankingQs: 0, rankingThe: 0,
    estimatedMonthlyLivingCostEur: 500,
    description: 'The oldest and largest university in Bosnia and Herzegovina, offering a wide range of programs.',
    programs: [
      { id: 'p-683', universityId: 'uni-319', name: 'M.Sc. Computer Science', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 2500, minGpaRequired: 2.8, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-07-31', applicationUrl: 'https://www.unsa.ba' },
      { id: 'p-684', universityId: 'uni-319', name: 'LL.M. Law', fieldOfStudy: 'Law', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 2500, minGpaRequired: 2.5, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-07-31', applicationUrl: 'https://www.unsa.ba' },
    ]
  },
  {
    id: 'uni-320', name: 'University of Mostar', country: 'Bosnia', city: 'Mostar',
    websiteUrl: 'https://www.sum.ba', logoUrl: '', rankingQs: 0, rankingThe: 0,
    estimatedMonthlyLivingCostEur: 480,
    description: 'A university in the historic city of Mostar offering economics, engineering, and health science programs.',
    programs: [
      { id: 'p-685', universityId: 'uni-320', name: 'M.Sc. Engineering', fieldOfStudy: 'Engineering', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 2000, minGpaRequired: 2.5, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-07-31', applicationUrl: 'https://www.sum.ba' },
      { id: 'p-686', universityId: 'uni-320', name: 'M.Sc. Economics', fieldOfStudy: 'Economics', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 2000, minGpaRequired: 2.5, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-07-31', applicationUrl: 'https://www.sum.ba' },
    ]
  },
  {
    id: 'uni-321', name: 'Ss. Cyril and Methodius University', country: 'North Macedonia', city: 'Skopje',
    websiteUrl: 'https://www.ukim.edu.mk', logoUrl: '', rankingQs: 0, rankingThe: 0,
    estimatedMonthlyLivingCostEur: 420,
    description: 'North Macedonia\'s largest public university, named after the creators of the Cyrillic script.',
    programs: [
      { id: 'p-687', universityId: 'uni-321', name: 'M.Sc. Computer Science', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 1500, minGpaRequired: 2.8, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-07-31', applicationUrl: 'https://www.ukim.edu.mk' },
      { id: 'p-688', universityId: 'uni-321', name: 'M.Sc. Electrical Engineering', fieldOfStudy: 'Engineering', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 1500, minGpaRequired: 2.8, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-07-31', applicationUrl: 'https://www.ukim.edu.mk' },
    ]
  },
  {
    id: 'uni-322', name: 'National Technical University of Ukraine (KPI)', country: 'Ukraine', city: 'Kyiv',
    websiteUrl: 'https://kpi.ua', logoUrl: '', rankingQs: 0, rankingThe: 0,
    estimatedMonthlyLivingCostEur: 500,
    description: 'Ukraine\'s premier technical university with strong programs in engineering, IT, and natural sciences.',
    programs: [
      { id: 'p-689', universityId: 'uni-322', name: 'M.Sc. Computer Engineering', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 3000, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-06-30', applicationUrl: 'https://kpi.ua' },
      { id: 'p-690', universityId: 'uni-322', name: 'M.Sc. Mechanical Engineering', fieldOfStudy: 'Engineering', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 3000, minGpaRequired: 2.8, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-06-30', applicationUrl: 'https://kpi.ua' },
    ]
  },
  {
    id: 'uni-323', name: 'Taras Shevchenko National University of Kyiv', country: 'Ukraine', city: 'Kyiv',
    websiteUrl: 'https://www.univ.kiev.ua', logoUrl: '', rankingQs: 501, rankingThe: 470,
    estimatedMonthlyLivingCostEur: 500,
    description: 'Ukraine\'s flagship classical university covering sciences, humanities, law, and social sciences.',
    programs: [
      { id: 'p-691', universityId: 'uni-323', name: 'M.Sc. Computer Science', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 3500, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-06-30', applicationUrl: 'https://www.univ.kiev.ua' },
      { id: 'p-692', universityId: 'uni-323', name: 'M.Sc. Economics', fieldOfStudy: 'Economics', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 3500, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-06-30', applicationUrl: 'https://www.univ.kiev.ua' },
    ]
  },
  {
    id: 'uni-324', name: 'University of Tirana', country: 'Albania', city: 'Tirana',
    websiteUrl: 'https://www.unitir.edu.al', logoUrl: '', rankingQs: 0, rankingThe: 0,
    estimatedMonthlyLivingCostEur: 400,
    description: 'Albania\'s largest and oldest public university offering programs in natural sciences, social sciences, and law.',
    programs: [
      { id: 'p-693', universityId: 'uni-324', name: 'M.Sc. Computer Science', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 1500, minGpaRequired: 2.8, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-07-31', applicationUrl: 'https://www.unitir.edu.al' },
      { id: 'p-694', universityId: 'uni-324', name: 'LL.M. Law', fieldOfStudy: 'Law', degreeLevel: 'masters', languageOfInstruction: 'Albanian', durationMonths: 24, tuitionPerYearEur: 1000, minGpaRequired: 2.8, requiredLanguage: 'Albanian', requiredLanguageLevel: 'C1', applicationDeadline: '2026-07-31', applicationUrl: 'https://www.unitir.edu.al' },
    ]
  },
  {
    id: 'uni-325', name: 'University of Montenegro', country: 'Montenegro', city: 'Podgorica',
    websiteUrl: 'https://www.ucg.ac.me', logoUrl: '', rankingQs: 0, rankingThe: 0,
    estimatedMonthlyLivingCostEur: 550,
    description: 'Montenegro\'s national university offering programs across engineering, economics, and natural sciences.',
    programs: [
      { id: 'p-695', universityId: 'uni-325', name: 'M.Sc. Computer Science', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 2000, minGpaRequired: 2.8, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-07-31', applicationUrl: 'https://www.ucg.ac.me' },
      { id: 'p-696', universityId: 'uni-325', name: 'M.Sc. Tourism Management', fieldOfStudy: 'Business Administration', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 2000, minGpaRequired: 2.5, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-07-31', applicationUrl: 'https://www.ucg.ac.me' },
    ]
  },
  {
    id: 'uni-326', name: 'University of Pristina', country: 'Kosovo', city: 'Pristina',
    websiteUrl: 'https://www.uni-pr.edu', logoUrl: '', rankingQs: 0, rankingThe: 0,
    estimatedMonthlyLivingCostEur: 400,
    description: 'Kosovo\'s largest public university, offering affordable programs in law, economics, and natural sciences.',
    programs: [
      { id: 'p-697', universityId: 'uni-326', name: 'M.Sc. Computer Science', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 1200, minGpaRequired: 2.5, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-07-31', applicationUrl: 'https://www.uni-pr.edu' },
      { id: 'p-698', universityId: 'uni-326', name: 'LL.M. Law', fieldOfStudy: 'Law', degreeLevel: 'masters', languageOfInstruction: 'Albanian', durationMonths: 24, tuitionPerYearEur: 1200, minGpaRequired: 2.5, requiredLanguage: 'Albanian', requiredLanguageLevel: 'C1', applicationDeadline: '2026-07-31', applicationUrl: 'https://www.uni-pr.edu' },
    ]
  },
  {
    id: 'uni-327', name: 'TU Chemnitz', country: 'Germany', city: 'Chemnitz',
    websiteUrl: 'https://www.tu-chemnitz.de', logoUrl: '', rankingQs: 601, rankingThe: 570,
    estimatedMonthlyLivingCostEur: 780,
    description: 'A compact technical university in Saxony with internationally recognised programs in lightweight engineering and smart systems.',
    programs: [
      { id: 'p-699', universityId: 'uni-327', name: 'M.Sc. Automotive Software Engineering', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 0, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-06-15', applicationUrl: 'https://www.tu-chemnitz.de' },
      { id: 'p-700', universityId: 'uni-327', name: 'M.Sc. Materials Science', fieldOfStudy: 'Physics', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 0, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-06-15', applicationUrl: 'https://www.tu-chemnitz.de' },
    ]
  },
  {
    id: 'uni-328', name: 'University of Siegen', country: 'Germany', city: 'Siegen',
    websiteUrl: 'https://www.uni-siegen.de', logoUrl: '', rankingQs: 0, rankingThe: 0,
    estimatedMonthlyLivingCostEur: 820,
    description: 'German university known for engineering, mathematics, and media studies.',
    programs: [
      { id: 'p-701', universityId: 'uni-328', name: 'M.Sc. Electrical Engineering', fieldOfStudy: 'Engineering', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 0, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-06-30', applicationUrl: 'https://www.uni-siegen.de' },
      { id: 'p-702', universityId: 'uni-328', name: 'M.Sc. Computer Science', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 0, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-06-30', applicationUrl: 'https://www.uni-siegen.de' },
    ]
  },
  {
    id: 'uni-329', name: 'Bielefeld University', country: 'Germany', city: 'Bielefeld',
    websiteUrl: 'https://www.uni-bielefeld.de', logoUrl: '', rankingQs: 501, rankingThe: 480,
    estimatedMonthlyLivingCostEur: 840,
    description: 'A reform university in Germany with a distinctive interdisciplinary approach and strong bioinformatics research.',
    programs: [
      { id: 'p-703', universityId: 'uni-329', name: 'M.Sc. Bioinformatics', fieldOfStudy: 'Biology', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 0, minGpaRequired: 3.2, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-06-15', applicationUrl: 'https://www.uni-bielefeld.de' },
      { id: 'p-704', universityId: 'uni-329', name: 'M.Sc. Cognitive Science', fieldOfStudy: 'Psychology', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 0, minGpaRequired: 3.2, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-06-15', applicationUrl: 'https://www.uni-bielefeld.de' },
    ]
  },
  {
    id: 'uni-330', name: 'University of Kassel', country: 'Germany', city: 'Kassel',
    websiteUrl: 'https://www.uni-kassel.de', logoUrl: '', rankingQs: 0, rankingThe: 0,
    estimatedMonthlyLivingCostEur: 820,
    description: 'German university in Kassel known for renewable energies, international development, and arts.',
    programs: [
      { id: 'p-705', universityId: 'uni-330', name: 'M.Sc. Renewable Energy Systems', fieldOfStudy: 'Engineering', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 0, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-06-30', applicationUrl: 'https://www.uni-kassel.de' },
      { id: 'p-706', universityId: 'uni-330', name: 'M.Sc. International Development', fieldOfStudy: 'Social Sciences', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 0, minGpaRequired: 2.8, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-06-30', applicationUrl: 'https://www.uni-kassel.de' },
    ]
  },
  {
    id: 'uni-331', name: 'University of Oldenburg', country: 'Germany', city: 'Oldenburg',
    websiteUrl: 'https://www.uni-oldenburg.de', logoUrl: '', rankingQs: 601, rankingThe: 570,
    estimatedMonthlyLivingCostEur: 850,
    description: 'A comprehensive German university known for wind energy, physics, and educational sciences.',
    programs: [
      { id: 'p-707', universityId: 'uni-331', name: 'M.Sc. Wind Engineering', fieldOfStudy: 'Engineering', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 0, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-06-30', applicationUrl: 'https://www.uni-oldenburg.de' },
      { id: 'p-708', universityId: 'uni-331', name: 'M.Sc. Physics', fieldOfStudy: 'Physics', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 0, minGpaRequired: 3.2, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-06-30', applicationUrl: 'https://www.uni-oldenburg.de' },
    ]
  },
  {
    id: 'uni-332', name: 'Hamburg University of Technology', country: 'Germany', city: 'Hamburg',
    websiteUrl: 'https://www.tuhh.de', logoUrl: '', rankingQs: 401, rankingThe: 380,
    estimatedMonthlyLivingCostEur: 1050,
    description: 'Hamburg\'s technical university with cutting-edge programs in logistics, microelectronics, and green technologies.',
    programs: [
      { id: 'p-709', universityId: 'uni-332', name: 'M.Sc. Logistics and Supply Chain Management', fieldOfStudy: 'Engineering', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 0, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-06-15', applicationUrl: 'https://www.tuhh.de' },
      { id: 'p-710', universityId: 'uni-332', name: 'M.Sc. Data Science', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 0, minGpaRequired: 3.2, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-06-15', applicationUrl: 'https://www.tuhh.de' },
    ]
  },
  {
    id: 'uni-333', name: 'University of Greifswald', country: 'Germany', city: 'Greifswald',
    websiteUrl: 'https://www.uni-greifswald.de', logoUrl: '', rankingQs: 601, rankingThe: 580,
    estimatedMonthlyLivingCostEur: 770,
    description: 'One of the oldest German universities, set on the Baltic Sea coast with strengths in marine sciences and medicine.',
    programs: [
      { id: 'p-711', universityId: 'uni-333', name: 'M.Sc. Marine Biology', fieldOfStudy: 'Biology', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 0, minGpaRequired: 3.2, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-06-30', applicationUrl: 'https://www.uni-greifswald.de' },
      { id: 'p-712', universityId: 'uni-333', name: 'M.Sc. Biochemistry', fieldOfStudy: 'Chemistry', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 0, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-06-30', applicationUrl: 'https://www.uni-greifswald.de' },
    ]
  },
  {
    id: 'uni-334', name: 'University of Trier', country: 'Germany', city: 'Trier',
    websiteUrl: 'https://www.uni-trier.de', logoUrl: '', rankingQs: 0, rankingThe: 0,
    estimatedMonthlyLivingCostEur: 810,
    description: 'A German university in the oldest city in Germany, known for humanities, social sciences, and environmental law.',
    programs: [
      { id: 'p-713', universityId: 'uni-334', name: 'LL.M. European Business Law', fieldOfStudy: 'Law', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 12, tuitionPerYearEur: 4000, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-05-31', applicationUrl: 'https://www.uni-trier.de' },
      { id: 'p-714', universityId: 'uni-334', name: 'M.A. Digital Humanities', fieldOfStudy: 'Arts & Humanities', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 0, minGpaRequired: 2.8, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-05-31', applicationUrl: 'https://www.uni-trier.de' },
    ]
  },
  {
    id: 'uni-335', name: 'Otto von Guericke University Magdeburg', country: 'Germany', city: 'Magdeburg',
    websiteUrl: 'https://www.ovgu.de', logoUrl: '', rankingQs: 551, rankingThe: 520,
    estimatedMonthlyLivingCostEur: 800,
    description: 'Innovative German university named after the inventor of the vacuum pump, strong in engineering and neuroscience.',
    programs: [
      { id: 'p-715', universityId: 'uni-335', name: 'M.Sc. Computer Science', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 0, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-06-15', applicationUrl: 'https://www.ovgu.de' },
      { id: 'p-716', universityId: 'uni-335', name: 'M.Sc. Mechanical Engineering', fieldOfStudy: 'Engineering', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 0, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-06-15', applicationUrl: 'https://www.ovgu.de' },
    ]
  },
  {
    id: 'uni-336', name: 'Martin Luther University Halle-Wittenberg', country: 'Germany', city: 'Halle',
    websiteUrl: 'https://www.uni-halle.de', logoUrl: '', rankingQs: 551, rankingThe: 530,
    estimatedMonthlyLivingCostEur: 780,
    description: 'One of Germany\'s oldest universities, strong in natural sciences, pharmacy, and social sciences.',
    programs: [
      { id: 'p-717', universityId: 'uni-336', name: 'M.Sc. Biochemistry', fieldOfStudy: 'Chemistry', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 0, minGpaRequired: 3.2, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-05-31', applicationUrl: 'https://www.uni-halle.de' },
      { id: 'p-718', universityId: 'uni-336', name: 'M.Sc. Economics', fieldOfStudy: 'Economics', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 0, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-05-31', applicationUrl: 'https://www.uni-halle.de' },
    ]
  },
  {
    id: 'uni-337', name: 'University of Lorraine', country: 'France', city: 'Nancy',
    websiteUrl: 'https://www.univ-lorraine.fr', logoUrl: '', rankingQs: 601, rankingThe: 580,
    estimatedMonthlyLivingCostEur: 780,
    description: 'A large northeastern French university with strong programs in materials science, engineering, and computing.',
    programs: [
      { id: 'p-719', universityId: 'uni-337', name: 'M.Sc. Materials Science', fieldOfStudy: 'Physics', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 243, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-04-30', applicationUrl: 'https://www.univ-lorraine.fr' },
      { id: 'p-720', universityId: 'uni-337', name: 'M.Sc. Computer Science', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 243, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-04-30', applicationUrl: 'https://www.univ-lorraine.fr' },
    ]
  },
  {
    id: 'uni-338', name: 'University of Poitiers', country: 'France', city: 'Poitiers',
    websiteUrl: 'https://www.univ-poitiers.fr', logoUrl: '', rankingQs: 801, rankingThe: 760,
    estimatedMonthlyLivingCostEur: 760,
    description: 'One of France\'s oldest universities, with growing strengths in biomaterials and environmental chemistry.',
    programs: [
      { id: 'p-721', universityId: 'uni-338', name: 'M.Sc. Environmental Chemistry', fieldOfStudy: 'Chemistry', degreeLevel: 'masters', languageOfInstruction: 'French', durationMonths: 24, tuitionPerYearEur: 243, minGpaRequired: 2.8, requiredLanguage: 'French', requiredLanguageLevel: 'B2', applicationDeadline: '2026-05-15', applicationUrl: 'https://www.univ-poitiers.fr' },
      { id: 'p-722', universityId: 'uni-338', name: 'M.Sc. Biomaterials', fieldOfStudy: 'Biology', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 243, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-05-15', applicationUrl: 'https://www.univ-poitiers.fr' },
    ]
  },
  {
    id: 'uni-339', name: 'Université de Caen Normandie', country: 'France', city: 'Caen',
    websiteUrl: 'https://www.unicaen.fr', logoUrl: '', rankingQs: 801, rankingThe: 770,
    estimatedMonthlyLivingCostEur: 780,
    description: 'Normandy\'s leading university with strong programs in history, law, and health sciences.',
    programs: [
      { id: 'p-723', universityId: 'uni-339', name: 'M.A. History', fieldOfStudy: 'Arts & Humanities', degreeLevel: 'masters', languageOfInstruction: 'French', durationMonths: 24, tuitionPerYearEur: 243, minGpaRequired: 2.8, requiredLanguage: 'French', requiredLanguageLevel: 'B2', applicationDeadline: '2026-05-31', applicationUrl: 'https://www.unicaen.fr' },
      { id: 'p-724', universityId: 'uni-339', name: 'M.Sc. Computer Science', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 243, minGpaRequired: 2.8, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-05-31', applicationUrl: 'https://www.unicaen.fr' },
    ]
  },
  {
    id: 'uni-340', name: 'University of Burgundy', country: 'France', city: 'Dijon',
    websiteUrl: 'https://www.u-bourgogne.fr', logoUrl: '', rankingQs: 801, rankingThe: 760,
    estimatedMonthlyLivingCostEur: 790,
    description: 'A comprehensive French university in the wine capital of Burgundy with strengths in oenology and materials science.',
    programs: [
      { id: 'p-725', universityId: 'uni-340', name: 'M.Sc. Oenology (Wine Science)', fieldOfStudy: 'Natural Sciences', degreeLevel: 'masters', languageOfInstruction: 'French', durationMonths: 24, tuitionPerYearEur: 243, minGpaRequired: 2.8, requiredLanguage: 'French', requiredLanguageLevel: 'B2', applicationDeadline: '2026-05-15', applicationUrl: 'https://www.u-bourgogne.fr' },
      { id: 'p-726', universityId: 'uni-340', name: 'M.Sc. Materials Chemistry', fieldOfStudy: 'Chemistry', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 243, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-05-15', applicationUrl: 'https://www.u-bourgogne.fr' },
    ]
  },
  {
    id: 'uni-341', name: 'Université Clermont Auvergne', country: 'France', city: 'Clermont-Ferrand',
    websiteUrl: 'https://www.uca.fr', logoUrl: '', rankingQs: 651, rankingThe: 620,
    estimatedMonthlyLivingCostEur: 770,
    description: 'A comprehensive French university in the volcanic Auvergne region, known for physics and applied mathematics.',
    programs: [
      { id: 'p-727', universityId: 'uni-341', name: 'M.Sc. Applied Mathematics', fieldOfStudy: 'Mathematics', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 243, minGpaRequired: 3.2, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-05-31', applicationUrl: 'https://www.uca.fr' },
      { id: 'p-728', universityId: 'uni-341', name: 'M.Sc. Physics', fieldOfStudy: 'Physics', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 243, minGpaRequired: 3.2, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-05-31', applicationUrl: 'https://www.uca.fr' },
    ]
  },
  {
    id: 'uni-342', name: 'IMT Atlantique', country: 'France', city: 'Nantes',
    websiteUrl: 'https://www.imt-atlantique.fr', logoUrl: '', rankingQs: 651, rankingThe: 620,
    estimatedMonthlyLivingCostEur: 850,
    description: 'An elite French engineering school with advanced programs in telecommunications, digital sciences, and energy.',
    programs: [
      { id: 'p-729', universityId: 'uni-342', name: 'M.Sc. Digital Engineering', fieldOfStudy: 'Engineering', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 4000, minGpaRequired: 3.2, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-04-30', applicationUrl: 'https://www.imt-atlantique.fr' },
      { id: 'p-730', universityId: 'uni-342', name: 'M.Sc. Energy Systems', fieldOfStudy: 'Engineering', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 4000, minGpaRequired: 3.2, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-04-30', applicationUrl: 'https://www.imt-atlantique.fr' },
    ]
  },
  {
    id: 'uni-343', name: 'Université Paris-Est Créteil', country: 'France', city: 'Paris',
    websiteUrl: 'https://www.u-pec.fr', logoUrl: '', rankingQs: 651, rankingThe: 630,
    estimatedMonthlyLivingCostEur: 1100,
    description: 'A Parisian multi-campus university with diverse programs in health sciences, law, and social sciences.',
    programs: [
      { id: 'p-731', universityId: 'uni-343', name: 'M.Sc. Public Health', fieldOfStudy: 'Natural Sciences', degreeLevel: 'masters', languageOfInstruction: 'French', durationMonths: 24, tuitionPerYearEur: 243, minGpaRequired: 2.8, requiredLanguage: 'French', requiredLanguageLevel: 'B2', applicationDeadline: '2026-05-31', applicationUrl: 'https://www.u-pec.fr' },
      { id: 'p-732', universityId: 'uni-343', name: 'LL.M. Social Law', fieldOfStudy: 'Law', degreeLevel: 'masters', languageOfInstruction: 'French', durationMonths: 24, tuitionPerYearEur: 243, minGpaRequired: 2.8, requiredLanguage: 'French', requiredLanguageLevel: 'B2', applicationDeadline: '2026-05-31', applicationUrl: 'https://www.u-pec.fr' },
    ]
  },
  {
    id: 'uni-344', name: 'University of Trieste', country: 'Italy', city: 'Trieste',
    websiteUrl: 'https://www.units.it', logoUrl: '', rankingQs: 651, rankingThe: 620,
    estimatedMonthlyLivingCostEur: 850,
    description: 'An Italian maritime and scientific university at the crossroads of Latin, Slavic, and Germanic cultures.',
    programs: [
      { id: 'p-733', universityId: 'uni-344', name: 'M.Sc. Physics', fieldOfStudy: 'Physics', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 2500, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-07-31', applicationUrl: 'https://www.units.it' },
      { id: 'p-734', universityId: 'uni-344', name: 'M.Sc. Marine Biology', fieldOfStudy: 'Biology', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 2500, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-07-31', applicationUrl: 'https://www.units.it' },
    ]
  },
  {
    id: 'uni-345', name: 'University of Parma', country: 'Italy', city: 'Parma',
    websiteUrl: 'https://www.unipr.it', logoUrl: '', rankingQs: 701, rankingThe: 670,
    estimatedMonthlyLivingCostEur: 800,
    description: 'An Italian university in the heart of the food valley, with excellent programs in food science and pharmacy.',
    programs: [
      { id: 'p-735', universityId: 'uni-345', name: 'M.Sc. Food Science and Technology', fieldOfStudy: 'Natural Sciences', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 2800, minGpaRequired: 2.8, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-07-15', applicationUrl: 'https://www.unipr.it' },
      { id: 'p-736', universityId: 'uni-345', name: 'M.Sc. Chemistry', fieldOfStudy: 'Chemistry', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 2800, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-07-15', applicationUrl: 'https://www.unipr.it' },
    ]
  },
  {
    id: 'uni-346', name: 'University of Pavia', country: 'Italy', city: 'Pavia',
    websiteUrl: 'https://www.unipv.it', logoUrl: '', rankingQs: 551, rankingThe: 520,
    estimatedMonthlyLivingCostEur: 820,
    description: 'One of the world\'s oldest universities with a rich history and excellence in medicine, law, and physics.',
    programs: [
      { id: 'p-737', universityId: 'uni-346', name: 'M.Sc. Electronics Engineering', fieldOfStudy: 'Engineering', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 3000, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-07-15', applicationUrl: 'https://www.unipv.it' },
      { id: 'p-738', universityId: 'uni-346', name: 'M.Sc. Physics', fieldOfStudy: 'Physics', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 3000, minGpaRequired: 3.2, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-07-15', applicationUrl: 'https://www.unipv.it' },
    ]
  },
  {
    id: 'uni-347', name: 'University of Modena and Reggio Emilia', country: 'Italy', city: 'Modena',
    websiteUrl: 'https://www.unimore.it', logoUrl: '', rankingQs: 701, rankingThe: 670,
    estimatedMonthlyLivingCostEur: 810,
    description: 'An Italian university in the heart of the Motor Valley, known for automotive engineering and biomedical sciences.',
    programs: [
      { id: 'p-739', universityId: 'uni-347', name: 'M.Sc. Automotive Engineering', fieldOfStudy: 'Engineering', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 3000, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-07-15', applicationUrl: 'https://www.unimore.it' },
      { id: 'p-740', universityId: 'uni-347', name: 'M.Sc. Computer Science', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 3000, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-07-15', applicationUrl: 'https://www.unimore.it' },
    ]
  },
  {
    id: 'uni-348', name: 'Marche Polytechnic University', country: 'Italy', city: 'Ancona',
    websiteUrl: 'https://www.univpm.it', logoUrl: '', rankingQs: 801, rankingThe: 760,
    estimatedMonthlyLivingCostEur: 750,
    description: 'A technical university on the Adriatic coast specialising in engineering and marine sciences.',
    programs: [
      { id: 'p-741', universityId: 'uni-348', name: 'M.Sc. Marine and Coastal Engineering', fieldOfStudy: 'Engineering', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 2500, minGpaRequired: 2.8, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-07-31', applicationUrl: 'https://www.univpm.it' },
      { id: 'p-742', universityId: 'uni-348', name: 'M.Sc. Electrical Engineering', fieldOfStudy: 'Engineering', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 2500, minGpaRequired: 2.8, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-07-31', applicationUrl: 'https://www.univpm.it' },
    ]
  },
  {
    id: 'uni-349', name: 'University of Calabria', country: 'Italy', city: 'Rende',
    websiteUrl: 'https://www.unical.it', logoUrl: '', rankingQs: 801, rankingThe: 760,
    estimatedMonthlyLivingCostEur: 700,
    description: 'A modern southern Italian campus university known for engineering, computer science, and international student focus.',
    programs: [
      { id: 'p-743', universityId: 'uni-349', name: 'M.Sc. Computer Engineering', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 2000, minGpaRequired: 2.8, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-07-31', applicationUrl: 'https://www.unical.it' },
      { id: 'p-744', universityId: 'uni-349', name: 'M.Sc. Economics', fieldOfStudy: 'Economics', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 2000, minGpaRequired: 2.5, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-07-31', applicationUrl: 'https://www.unical.it' },
    ]
  },
  {
    id: 'uni-350', name: 'University of Valladolid', country: 'Spain', city: 'Valladolid',
    websiteUrl: 'https://www.uva.es', logoUrl: '', rankingQs: 901, rankingThe: 870,
    estimatedMonthlyLivingCostEur: 720,
    description: 'A historic Castilian university with strong programs in telecommunications, business, and medicine.',
    programs: [
      { id: 'p-745', universityId: 'uni-350', name: 'M.Sc. Telecommunications Engineering', fieldOfStudy: 'Engineering', degreeLevel: 'masters', languageOfInstruction: 'Spanish', durationMonths: 24, tuitionPerYearEur: 1700, minGpaRequired: 2.8, requiredLanguage: 'Spanish', requiredLanguageLevel: 'B2', applicationDeadline: '2026-07-15', applicationUrl: 'https://www.uva.es' },
      { id: 'p-746', universityId: 'uni-350', name: 'M.Sc. Finance', fieldOfStudy: 'Economics', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 12, tuitionPerYearEur: 2500, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-07-15', applicationUrl: 'https://www.uva.es' },
    ]
  },
  {
    id: 'uni-351', name: 'University of Alicante', country: 'Spain', city: 'Alicante',
    websiteUrl: 'https://www.ua.es', logoUrl: '', rankingQs: 801, rankingThe: 770,
    estimatedMonthlyLivingCostEur: 780,
    description: 'A sunny Mediterranean university in Alicante with growing programs in computer science and tourism.',
    programs: [
      { id: 'p-747', universityId: 'uni-351', name: 'M.Sc. Computer Science', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 2000, minGpaRequired: 2.8, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-07-31', applicationUrl: 'https://www.ua.es' },
      { id: 'p-748', universityId: 'uni-351', name: 'M.A. Tourism Management', fieldOfStudy: 'Business Administration', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 12, tuitionPerYearEur: 2000, minGpaRequired: 2.5, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-07-31', applicationUrl: 'https://www.ua.es' },
    ]
  },
  {
    id: 'uni-352', name: 'University of Santiago de Compostela', country: 'Spain', city: 'Santiago de Compostela',
    websiteUrl: 'https://www.usc.gal', logoUrl: '', rankingQs: 651, rankingThe: 620,
    estimatedMonthlyLivingCostEur: 750,
    description: 'A historic Galician university, pilgrimage city host, known for chemistry, pharmacy, and biotechnology.',
    programs: [
      { id: 'p-749', universityId: 'uni-352', name: 'M.Sc. Biotechnology', fieldOfStudy: 'Biology', degreeLevel: 'masters', languageOfInstruction: 'Spanish', durationMonths: 24, tuitionPerYearEur: 1700, minGpaRequired: 3.0, requiredLanguage: 'Spanish', requiredLanguageLevel: 'B2', applicationDeadline: '2026-06-30', applicationUrl: 'https://www.usc.gal' },
      { id: 'p-750', universityId: 'uni-352', name: 'M.Sc. Chemistry', fieldOfStudy: 'Chemistry', degreeLevel: 'masters', languageOfInstruction: 'Spanish', durationMonths: 24, tuitionPerYearEur: 1700, minGpaRequired: 3.0, requiredLanguage: 'Spanish', requiredLanguageLevel: 'B2', applicationDeadline: '2026-06-30', applicationUrl: 'https://www.usc.gal' },
    ]
  },
  {
    id: 'uni-353', name: 'Universidad Politécnica de Madrid', country: 'Spain', city: 'Madrid',
    websiteUrl: 'https://www.upm.es', logoUrl: '', rankingQs: 351, rankingThe: 320,
    estimatedMonthlyLivingCostEur: 1000,
    description: 'Spain\'s premier technical university in Madrid, with top programs in aerospace, civil, and computer engineering.',
    programs: [
      { id: 'p-751', universityId: 'uni-353', name: 'M.Sc. Aerospace Engineering', fieldOfStudy: 'Engineering', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 3000, minGpaRequired: 3.2, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-06-15', applicationUrl: 'https://www.upm.es' },
      { id: 'p-752', universityId: 'uni-353', name: 'M.Sc. Computer Science', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 3000, minGpaRequired: 3.2, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-06-15', applicationUrl: 'https://www.upm.es' },
    ]
  },
  {
    id: 'uni-354', name: 'University of Cádiz', country: 'Spain', city: 'Cádiz',
    websiteUrl: 'https://www.uca.es', logoUrl: '', rankingQs: 0, rankingThe: 0,
    estimatedMonthlyLivingCostEur: 750,
    description: 'A coastal Andalusian university known for marine sciences, tourism, and economics.',
    programs: [
      { id: 'p-753', universityId: 'uni-354', name: 'M.Sc. Marine Sciences', fieldOfStudy: 'Natural Sciences', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 1600, minGpaRequired: 2.8, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-07-31', applicationUrl: 'https://www.uca.es' },
      { id: 'p-754', universityId: 'uni-354', name: 'M.Sc. Tourism Economics', fieldOfStudy: 'Economics', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 12, tuitionPerYearEur: 1600, minGpaRequired: 2.5, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-07-31', applicationUrl: 'https://www.uca.es' },
    ]
  },
  {
    id: 'uni-355', name: 'HAN University of Applied Sciences', country: 'Netherlands', city: 'Arnhem',
    websiteUrl: 'https://www.han.nl', logoUrl: '', rankingQs: 0, rankingThe: 0,
    estimatedMonthlyLivingCostEur: 950,
    description: 'A large Dutch UAS offering practical English-medium programs in engineering, business, and health.',
    programs: [
      { id: 'p-755', universityId: 'uni-355', name: 'B.Sc. Engineering', fieldOfStudy: 'Engineering', degreeLevel: 'bachelors', languageOfInstruction: 'English', durationMonths: 48, tuitionPerYearEur: 2530, minGpaRequired: 2.5, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-05-01', applicationUrl: 'https://www.han.nl' },
      { id: 'p-756', universityId: 'uni-355', name: 'B.Sc. International Business Management', fieldOfStudy: 'Business Administration', degreeLevel: 'bachelors', languageOfInstruction: 'English', durationMonths: 48, tuitionPerYearEur: 2530, minGpaRequired: 2.5, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-05-01', applicationUrl: 'https://www.han.nl' },
    ]
  },
  {
    id: 'uni-356', name: 'Saxion University of Applied Sciences', country: 'Netherlands', city: 'Deventer',
    websiteUrl: 'https://www.saxion.edu', logoUrl: '', rankingQs: 0, rankingThe: 0,
    estimatedMonthlyLivingCostEur: 900,
    description: 'Dutch UAS in eastern Netherlands with modern technology and business programs taught in English.',
    programs: [
      { id: 'p-757', universityId: 'uni-356', name: 'B.Sc. ICT', fieldOfStudy: 'Computer Science', degreeLevel: 'bachelors', languageOfInstruction: 'English', durationMonths: 48, tuitionPerYearEur: 2530, minGpaRequired: 2.5, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-05-01', applicationUrl: 'https://www.saxion.edu' },
      { id: 'p-758', universityId: 'uni-356', name: 'B.Sc. Business Administration', fieldOfStudy: 'Business Administration', degreeLevel: 'bachelors', languageOfInstruction: 'English', durationMonths: 48, tuitionPerYearEur: 2530, minGpaRequired: 2.5, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-05-01', applicationUrl: 'https://www.saxion.edu' },
    ]
  },
  {
    id: 'uni-357', name: 'Inholland University of Applied Sciences', country: 'Netherlands', city: 'Amsterdam',
    websiteUrl: 'https://www.inholland.nl', logoUrl: '', rankingQs: 0, rankingThe: 0,
    estimatedMonthlyLivingCostEur: 1100,
    description: 'A large Dutch UAS with campuses in Amsterdam and other cities offering creative and technical programs.',
    programs: [
      { id: 'p-759', universityId: 'uni-357', name: 'B.Sc. Creative Media and Game Technologies', fieldOfStudy: 'Computer Science', degreeLevel: 'bachelors', languageOfInstruction: 'English', durationMonths: 48, tuitionPerYearEur: 2530, minGpaRequired: 2.5, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-05-01', applicationUrl: 'https://www.inholland.nl' },
      { id: 'p-760', universityId: 'uni-357', name: 'B.Sc. International Business', fieldOfStudy: 'Business Administration', degreeLevel: 'bachelors', languageOfInstruction: 'English', durationMonths: 48, tuitionPerYearEur: 2530, minGpaRequired: 2.5, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-05-01', applicationUrl: 'https://www.inholland.nl' },
    ]
  },
  {
    id: 'uni-358', name: 'The Hague University of Applied Sciences', country: 'Netherlands', city: 'The Hague',
    websiteUrl: 'https://www.thehagueuniversity.com', logoUrl: '', rankingQs: 0, rankingThe: 0,
    estimatedMonthlyLivingCostEur: 1100,
    description: 'A Dutch UAS in the political capital of the Netherlands, specialising in international affairs, law, and IT.',
    programs: [
      { id: 'p-761', universityId: 'uni-358', name: 'B.Sc. International Business', fieldOfStudy: 'Business Administration', degreeLevel: 'bachelors', languageOfInstruction: 'English', durationMonths: 48, tuitionPerYearEur: 2530, minGpaRequired: 2.5, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-05-01', applicationUrl: 'https://www.thehagueuniversity.com' },
      { id: 'p-762', universityId: 'uni-358', name: 'B.Sc. IT & Design', fieldOfStudy: 'Computer Science', degreeLevel: 'bachelors', languageOfInstruction: 'English', durationMonths: 48, tuitionPerYearEur: 2530, minGpaRequired: 2.5, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-05-01', applicationUrl: 'https://www.thehagueuniversity.com' },
    ]
  },
  {
    id: 'uni-359', name: 'Linnaeus University', country: 'Sweden', city: 'Växjö',
    websiteUrl: 'https://lnu.se', logoUrl: '', rankingQs: 0, rankingThe: 0,
    estimatedMonthlyLivingCostEur: 880,
    description: 'A modern Swedish university named after the botanist Carl Linnaeus, with strong programs in digital media and forestry.',
    programs: [
      { id: 'p-763', universityId: 'uni-359', name: 'M.Sc. Computer Science', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 13250, minGpaRequired: 2.8, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-01-15', applicationUrl: 'https://lnu.se' },
      { id: 'p-764', universityId: 'uni-359', name: 'M.Sc. Forestry and Wood Technology', fieldOfStudy: 'Natural Sciences', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 13250, minGpaRequired: 2.8, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-01-15', applicationUrl: 'https://lnu.se' },
    ]
  },
  {
    id: 'uni-360', name: 'Södertörn University', country: 'Sweden', city: 'Stockholm',
    websiteUrl: 'https://www.sh.se', logoUrl: '', rankingQs: 0, rankingThe: 0,
    estimatedMonthlyLivingCostEur: 1050,
    description: 'A Stockholm-area university focused on Baltic studies, cultural sciences, and computer science.',
    programs: [
      { id: 'p-765', universityId: 'uni-360', name: 'M.Sc. Computer and Systems Sciences', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 13250, minGpaRequired: 2.8, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-01-15', applicationUrl: 'https://www.sh.se' },
      { id: 'p-766', universityId: 'uni-360', name: 'M.A. Baltic and East European Studies', fieldOfStudy: 'Social Sciences', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 13250, minGpaRequired: 2.8, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-01-15', applicationUrl: 'https://www.sh.se' },
    ]
  },
  // ── BATCH 4: uni-361 → uni-410 ─────────────────────────────────────
  {
    id: 'uni-361', name: 'Adam Mickiewicz University Poznań', country: 'Poland', city: 'Poznań',
    websiteUrl: 'https://amu.edu.pl', logoUrl: '', rankingQs: 801, rankingThe: 760,
    estimatedMonthlyLivingCostEur: 620,
    description: 'One of Poland\'s top comprehensive universities, known for law, humanities, and social sciences.',
    programs: [
      { id: 'p-767', universityId: 'uni-361', name: 'M.A. European Studies', fieldOfStudy: 'Social Sciences', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 2000, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-07-15', applicationUrl: 'https://amu.edu.pl' },
      { id: 'p-768', universityId: 'uni-361', name: 'M.Sc. Computer Science', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 2000, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-07-15', applicationUrl: 'https://amu.edu.pl' },
    ]
  },
  {
    id: 'uni-362', name: 'Warsaw University of Life Sciences (SGGW)', country: 'Poland', city: 'Warsaw',
    websiteUrl: 'https://www.sggw.pl', logoUrl: '', rankingQs: 0, rankingThe: 0,
    estimatedMonthlyLivingCostEur: 700,
    description: 'Poland\'s largest agricultural university with strong programs in food technology, biology, and ecology.',
    programs: [
      { id: 'p-769', universityId: 'uni-362', name: 'M.Sc. Food Technology', fieldOfStudy: 'Natural Sciences', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 2200, minGpaRequired: 2.8, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-07-15', applicationUrl: 'https://www.sggw.pl' },
      { id: 'p-770', universityId: 'uni-362', name: 'M.Sc. Environmental Sciences', fieldOfStudy: 'Natural Sciences', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 2200, minGpaRequired: 2.8, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-07-15', applicationUrl: 'https://www.sggw.pl' },
    ]
  },
  {
    id: 'uni-363', name: 'Lodz University of Technology', country: 'Poland', city: 'Lodz',
    websiteUrl: 'https://www.p.lodz.pl', logoUrl: '', rankingQs: 801, rankingThe: 760,
    estimatedMonthlyLivingCostEur: 600,
    description: 'A major Polish technical university with strong programs in electrical engineering and information technology.',
    programs: [
      { id: 'p-771', universityId: 'uni-363', name: 'M.Sc. Electrical Engineering', fieldOfStudy: 'Engineering', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 2500, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-07-31', applicationUrl: 'https://www.p.lodz.pl' },
      { id: 'p-772', universityId: 'uni-363', name: 'M.Sc. Computer Science', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 2500, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-07-31', applicationUrl: 'https://www.p.lodz.pl' },
    ]
  },
  {
    id: 'uni-364', name: 'Medical University of Warsaw', country: 'Poland', city: 'Warsaw',
    websiteUrl: 'https://www.wum.edu.pl', logoUrl: '', rankingQs: 0, rankingThe: 0,
    estimatedMonthlyLivingCostEur: 720,
    description: 'Poland\'s leading medical university offering English-medium medicine and pharmacy programs.',
    programs: [
      { id: 'p-773', universityId: 'uni-364', name: 'M.D. Medicine', fieldOfStudy: 'Natural Sciences', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 72, tuitionPerYearEur: 14000, minGpaRequired: 3.5, requiredLanguage: 'English', requiredLanguageLevel: 'C1', applicationDeadline: '2026-06-01', applicationUrl: 'https://www.wum.edu.pl' },
      { id: 'p-774', universityId: 'uni-364', name: 'M.Sc. Public Health', fieldOfStudy: 'Natural Sciences', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 4000, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-06-01', applicationUrl: 'https://www.wum.edu.pl' },
    ]
  },
  {
    id: 'uni-365', name: 'Norwegian University of Life Sciences (NMBU)', country: 'Norway', city: 'Ås',
    websiteUrl: 'https://www.nmbu.no', logoUrl: '', rankingQs: 601, rankingThe: 570,
    estimatedMonthlyLivingCostEur: 1050,
    description: 'Norway\'s specialist university for life sciences, environmental studies, and veterinary medicine.',
    programs: [
      { id: 'p-775', universityId: 'uni-365', name: 'M.Sc. Environmental Sciences', fieldOfStudy: 'Natural Sciences', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 0, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-04-15', applicationUrl: 'https://www.nmbu.no' },
      { id: 'p-776', universityId: 'uni-365', name: 'M.Sc. Data Science', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 0, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-04-15', applicationUrl: 'https://www.nmbu.no' },
    ]
  },
  {
    id: 'uni-366', name: 'BI Norwegian Business School', country: 'Norway', city: 'Oslo',
    websiteUrl: 'https://www.bi.no', logoUrl: '', rankingQs: 601, rankingThe: 570,
    estimatedMonthlyLivingCostEur: 1200,
    description: 'The largest business school in the Nordic countries, fully English-medium with strong finance and strategy programs.',
    programs: [
      { id: 'p-777', universityId: 'uni-366', name: 'M.Sc. Finance', fieldOfStudy: 'Economics', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 17000, minGpaRequired: 3.2, requiredLanguage: 'English', requiredLanguageLevel: 'C1', applicationDeadline: '2026-05-01', applicationUrl: 'https://www.bi.no' },
      { id: 'p-778', universityId: 'uni-366', name: 'M.Sc. Business Analytics', fieldOfStudy: 'Business Administration', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 17000, minGpaRequired: 3.2, requiredLanguage: 'English', requiredLanguageLevel: 'C1', applicationDeadline: '2026-05-01', applicationUrl: 'https://www.bi.no' },
    ]
  },
  {
    id: 'uni-367', name: 'Inland Norway University of Applied Sciences', country: 'Norway', city: 'Lillehammer',
    websiteUrl: 'https://www.inn.no', logoUrl: '', rankingQs: 0, rankingThe: 0,
    estimatedMonthlyLivingCostEur: 1000,
    description: 'A Norwegian UAS in the inland region, known for game development, digital media, and health sciences.',
    programs: [
      { id: 'p-779', universityId: 'uni-367', name: 'M.Sc. Game Development', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 0, minGpaRequired: 2.8, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-04-15', applicationUrl: 'https://www.inn.no' },
      { id: 'p-780', universityId: 'uni-367', name: 'M.Sc. Digital Media', fieldOfStudy: 'Social Sciences', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 0, minGpaRequired: 2.8, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-04-15', applicationUrl: 'https://www.inn.no' },
    ]
  },
  {
    id: 'uni-368', name: 'UCLouvain', country: 'Belgium', city: 'Louvain-la-Neuve',
    websiteUrl: 'https://www.uclouvain.be', logoUrl: '', rankingQs: 251, rankingThe: 230,
    estimatedMonthlyLivingCostEur: 900,
    description: 'A leading Francophone Belgian research university with excellence in health sciences, engineering, and social sciences.',
    programs: [
      { id: 'p-781', universityId: 'uni-368', name: 'M.Sc. Computer Science', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 835, minGpaRequired: 3.2, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-05-31', applicationUrl: 'https://www.uclouvain.be' },
      { id: 'p-782', universityId: 'uni-368', name: 'M.Sc. Biomedical Engineering', fieldOfStudy: 'Engineering', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 835, minGpaRequired: 3.2, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-05-31', applicationUrl: 'https://www.uclouvain.be' },
    ]
  },
  {
    id: 'uni-369', name: 'Hasselt University', country: 'Belgium', city: 'Hasselt',
    websiteUrl: 'https://www.uhasselt.be', logoUrl: '', rankingQs: 601, rankingThe: 570,
    estimatedMonthlyLivingCostEur: 820,
    description: 'An innovative Belgian university specialising in data science, transportation research, and environmental biology.',
    programs: [
      { id: 'p-783', universityId: 'uni-369', name: 'M.Sc. Data Science', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 835, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-05-31', applicationUrl: 'https://www.uhasselt.be' },
      { id: 'p-784', universityId: 'uni-369', name: 'M.Sc. Transportation Sciences', fieldOfStudy: 'Engineering', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 835, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-05-31', applicationUrl: 'https://www.uhasselt.be' },
    ]
  },
  {
    id: 'uni-370', name: 'University of Mons', country: 'Belgium', city: 'Mons',
    websiteUrl: 'https://www.umons.ac.be', logoUrl: '', rankingQs: 0, rankingThe: 0,
    estimatedMonthlyLivingCostEur: 800,
    description: 'Belgian university in Mons with strengths in computer science, engineering, and architecture.',
    programs: [
      { id: 'p-785', universityId: 'uni-370', name: 'M.Sc. Computer Science', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 835, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-05-31', applicationUrl: 'https://www.umons.ac.be' },
      { id: 'p-786', universityId: 'uni-370', name: 'M.Sc. Architecture', fieldOfStudy: 'Architecture', degreeLevel: 'masters', languageOfInstruction: 'French', durationMonths: 24, tuitionPerYearEur: 835, minGpaRequired: 2.8, requiredLanguage: 'French', requiredLanguageLevel: 'B2', applicationDeadline: '2026-05-31', applicationUrl: 'https://www.umons.ac.be' },
    ]
  },
  {
    id: 'uni-371', name: 'Bern University of Applied Sciences', country: 'Switzerland', city: 'Bern',
    websiteUrl: 'https://www.bfh.ch', logoUrl: '', rankingQs: 0, rankingThe: 0,
    estimatedMonthlyLivingCostEur: 1500,
    description: 'A Swiss UAS with excellent practice-oriented programs in engineering, information technology, and architecture.',
    programs: [
      { id: 'p-787', universityId: 'uni-371', name: 'M.Sc. Engineering', fieldOfStudy: 'Engineering', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 1000, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-05-31', applicationUrl: 'https://www.bfh.ch' },
      { id: 'p-788', universityId: 'uni-371', name: 'M.Sc. Data Science', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 1000, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-05-31', applicationUrl: 'https://www.bfh.ch' },
    ]
  },
  {
    id: 'uni-372', name: 'Zurich University of Applied Sciences (ZHAW)', country: 'Switzerland', city: 'Winterthur',
    websiteUrl: 'https://www.zhaw.ch', logoUrl: '', rankingQs: 0, rankingThe: 0,
    estimatedMonthlyLivingCostEur: 1600,
    description: 'One of Switzerland\'s largest UAS with strong English-medium programs in engineering, business, and life sciences.',
    programs: [
      { id: 'p-789', universityId: 'uni-372', name: 'M.Sc. Engineering', fieldOfStudy: 'Engineering', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 1000, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-04-30', applicationUrl: 'https://www.zhaw.ch' },
      { id: 'p-790', universityId: 'uni-372', name: 'M.Sc. Life Sciences', fieldOfStudy: 'Biology', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 1000, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-04-30', applicationUrl: 'https://www.zhaw.ch' },
    ]
  },
  {
    id: 'uni-373', name: 'HES-SO University of Applied Sciences', country: 'Switzerland', city: 'Geneva',
    websiteUrl: 'https://www.hes-so.ch', logoUrl: '', rankingQs: 0, rankingThe: 0,
    estimatedMonthlyLivingCostEur: 1700,
    description: 'The largest UAS in western Switzerland offering French and English programs in engineering, art, and management.',
    programs: [
      { id: 'p-791', universityId: 'uni-373', name: 'M.Sc. Business Administration', fieldOfStudy: 'Business Administration', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 1500, minGpaRequired: 2.8, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-04-30', applicationUrl: 'https://www.hes-so.ch' },
      { id: 'p-792', universityId: 'uni-373', name: 'M.Sc. Social Work', fieldOfStudy: 'Social Sciences', degreeLevel: 'masters', languageOfInstruction: 'French', durationMonths: 24, tuitionPerYearEur: 1500, minGpaRequired: 2.8, requiredLanguage: 'French', requiredLanguageLevel: 'B2', applicationDeadline: '2026-04-30', applicationUrl: 'https://www.hes-so.ch' },
    ]
  },
  {
    id: 'uni-374', name: 'Technological University Dublin', country: 'Ireland', city: 'Dublin',
    websiteUrl: 'https://www.tudublin.ie', logoUrl: '', rankingQs: 0, rankingThe: 0,
    estimatedMonthlyLivingCostEur: 1200,
    description: 'Ireland\'s largest technological university formed from three institutes, offering practical engineering and business programs.',
    programs: [
      { id: 'p-793', universityId: 'uni-374', name: 'M.Sc. Computer Science', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 12, tuitionPerYearEur: 7500, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'C1', applicationDeadline: '2026-07-01', applicationUrl: 'https://www.tudublin.ie' },
      { id: 'p-794', universityId: 'uni-374', name: 'M.Sc. Business Management', fieldOfStudy: 'Business Administration', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 12, tuitionPerYearEur: 7000, minGpaRequired: 2.8, requiredLanguage: 'English', requiredLanguageLevel: 'C1', applicationDeadline: '2026-07-01', applicationUrl: 'https://www.tudublin.ie' },
    ]
  },
  {
    id: 'uni-375', name: 'Munster Technological University', country: 'Ireland', city: 'Cork',
    websiteUrl: 'https://www.mtu.ie', logoUrl: '', rankingQs: 0, rankingThe: 0,
    estimatedMonthlyLivingCostEur: 1100,
    description: 'A new Irish TU on Cork and Kerry campuses, strong in engineering, science, and hospitality management.',
    programs: [
      { id: 'p-795', universityId: 'uni-375', name: 'M.Sc. Cybersecurity', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 12, tuitionPerYearEur: 7000, minGpaRequired: 2.8, requiredLanguage: 'English', requiredLanguageLevel: 'C1', applicationDeadline: '2026-07-01', applicationUrl: 'https://www.mtu.ie' },
      { id: 'p-796', universityId: 'uni-375', name: 'M.Sc. Engineering Management', fieldOfStudy: 'Engineering', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 12, tuitionPerYearEur: 7000, minGpaRequired: 2.8, requiredLanguage: 'English', requiredLanguageLevel: 'C1', applicationDeadline: '2026-07-01', applicationUrl: 'https://www.mtu.ie' },
    ]
  },
  {
    id: 'uni-376', name: 'Universidade Católica Portuguesa', country: 'Portugal', city: 'Lisbon',
    websiteUrl: 'https://www.ucp.pt', logoUrl: '', rankingQs: 601, rankingThe: 570,
    estimatedMonthlyLivingCostEur: 900,
    description: 'A prestigious private Portuguese university with top programs in law, business, and philosophy.',
    programs: [
      { id: 'p-797', universityId: 'uni-376', name: 'LL.M. International Law', fieldOfStudy: 'Law', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 12, tuitionPerYearEur: 5500, minGpaRequired: 3.2, requiredLanguage: 'English', requiredLanguageLevel: 'C1', applicationDeadline: '2026-07-01', applicationUrl: 'https://www.ucp.pt' },
      { id: 'p-798', universityId: 'uni-376', name: 'M.Sc. Management', fieldOfStudy: 'Business Administration', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 5500, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'C1', applicationDeadline: '2026-07-01', applicationUrl: 'https://www.ucp.pt' },
    ]
  },
  {
    id: 'uni-377', name: 'ISCTE – University Institute of Lisbon', country: 'Portugal', city: 'Lisbon',
    websiteUrl: 'https://www.iscte-iul.pt', logoUrl: '', rankingQs: 601, rankingThe: 580,
    estimatedMonthlyLivingCostEur: 900,
    description: 'A dynamic Portuguese research university with strong programs in social sciences, business, and IT.',
    programs: [
      { id: 'p-799', universityId: 'uni-377', name: 'M.Sc. Data Science for Management', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 3500, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-07-31', applicationUrl: 'https://www.iscte-iul.pt' },
      { id: 'p-800', universityId: 'uni-377', name: 'M.Sc. Sociology', fieldOfStudy: 'Social Sciences', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 3500, minGpaRequired: 2.8, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-07-31', applicationUrl: 'https://www.iscte-iul.pt' },
    ]
  },
  {
    id: 'uni-378', name: 'Medical University of Vienna', country: 'Austria', city: 'Vienna',
    websiteUrl: 'https://www.meduniwien.ac.at', logoUrl: '', rankingQs: 301, rankingThe: 280,
    estimatedMonthlyLivingCostEur: 1100,
    description: 'Austria\'s largest medical school, affiliated with Vienna General Hospital, offering English-medium research programs.',
    programs: [
      { id: 'p-801', universityId: 'uni-378', name: 'M.Sc. Biomedical Informatics', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 726, minGpaRequired: 3.3, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-04-30', applicationUrl: 'https://www.meduniwien.ac.at' },
      { id: 'p-802', universityId: 'uni-378', name: 'Ph.D. Molecular Medicine', fieldOfStudy: 'Biology', degreeLevel: 'phd', languageOfInstruction: 'English', durationMonths: 48, tuitionPerYearEur: 726, minGpaRequired: 3.5, requiredLanguage: 'English', requiredLanguageLevel: 'C1', applicationDeadline: '2026-04-30', applicationUrl: 'https://www.meduniwien.ac.at' },
    ]
  },
  {
    id: 'uni-379', name: 'FH Technikum Wien', country: 'Austria', city: 'Vienna',
    websiteUrl: 'https://www.technikum-wien.at', logoUrl: '', rankingQs: 0, rankingThe: 0,
    estimatedMonthlyLivingCostEur: 1100,
    description: 'Vienna\'s engineering-focused UAS with high-quality programs in mechatronics, IT, and electronic engineering.',
    programs: [
      { id: 'p-803', universityId: 'uni-379', name: 'M.Sc. Industrial Engineering', fieldOfStudy: 'Engineering', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 363, minGpaRequired: 2.8, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-06-30', applicationUrl: 'https://www.technikum-wien.at' },
      { id: 'p-804', universityId: 'uni-379', name: 'M.Sc. Computer Science', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 363, minGpaRequired: 2.8, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-06-30', applicationUrl: 'https://www.technikum-wien.at' },
    ]
  },
  {
    id: 'uni-380', name: 'University of Vaasa', country: 'Finland', city: 'Vaasa',
    websiteUrl: 'https://www.uwasa.fi', logoUrl: '', rankingQs: 0, rankingThe: 0,
    estimatedMonthlyLivingCostEur: 790,
    description: 'A Finnish university known for technology management, energy innovation, and multilingual programs.',
    programs: [
      { id: 'p-805', universityId: 'uni-380', name: 'M.Sc. Industrial Management', fieldOfStudy: 'Business Administration', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 10000, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-01-20', applicationUrl: 'https://www.uwasa.fi' },
      { id: 'p-806', universityId: 'uni-380', name: 'M.Sc. Electrical Engineering', fieldOfStudy: 'Engineering', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 10000, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-01-20', applicationUrl: 'https://www.uwasa.fi' },
    ]
  },
  {
    id: 'uni-381', name: 'Åbo Akademi University', country: 'Finland', city: 'Turku',
    websiteUrl: 'https://www.abo.fi', logoUrl: '', rankingQs: 601, rankingThe: 570,
    estimatedMonthlyLivingCostEur: 810,
    description: 'Finland\'s Swedish-speaking university with excellent programs in process chemistry, pharmacy, and information systems.',
    programs: [
      { id: 'p-807', universityId: 'uni-381', name: 'M.Sc. Process Chemistry', fieldOfStudy: 'Chemistry', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 10000, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-01-20', applicationUrl: 'https://www.abo.fi' },
      { id: 'p-808', universityId: 'uni-381', name: 'M.Sc. Information Systems', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 10000, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-01-20', applicationUrl: 'https://www.abo.fi' },
    ]
  },
  {
    id: 'uni-382', name: 'Czech University of Life Sciences Prague', country: 'Czech Republic', city: 'Prague',
    websiteUrl: 'https://www.czu.cz', logoUrl: '', rankingQs: 801, rankingThe: 760,
    estimatedMonthlyLivingCostEur: 700,
    description: 'A Czech university specialising in sustainable agriculture, environmental sciences, and tropical forestry.',
    programs: [
      { id: 'p-809', universityId: 'uni-382', name: 'M.Sc. Environmental Engineering', fieldOfStudy: 'Engineering', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 3000, minGpaRequired: 2.8, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-06-30', applicationUrl: 'https://www.czu.cz' },
      { id: 'p-810', universityId: 'uni-382', name: 'M.Sc. Tropical Forestry', fieldOfStudy: 'Natural Sciences', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 3000, minGpaRequired: 2.8, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-06-30', applicationUrl: 'https://www.czu.cz' },
    ]
  },
  {
    id: 'uni-383', name: 'University of Ostrava', country: 'Czech Republic', city: 'Ostrava',
    websiteUrl: 'https://www.osu.cz', logoUrl: '', rankingQs: 0, rankingThe: 0,
    estimatedMonthlyLivingCostEur: 650,
    description: 'A Czech university in the industrial Ostrava region with growing programs in social sciences and applied mathematics.',
    programs: [
      { id: 'p-811', universityId: 'uni-383', name: 'M.Sc. Applied Mathematics', fieldOfStudy: 'Mathematics', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 2000, minGpaRequired: 2.8, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-06-30', applicationUrl: 'https://www.osu.cz' },
      { id: 'p-812', universityId: 'uni-383', name: 'M.A. Social Work', fieldOfStudy: 'Social Sciences', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 2000, minGpaRequired: 2.5, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-06-30', applicationUrl: 'https://www.osu.cz' },
    ]
  },
  {
    id: 'uni-384', name: 'University of Pécs', country: 'Hungary', city: 'Pécs',
    websiteUrl: 'https://www.pte.hu', logoUrl: '', rankingQs: 801, rankingThe: 760,
    estimatedMonthlyLivingCostEur: 650,
    description: 'Central Europe\'s oldest university with strong programs in medicine, law, and arts.',
    programs: [
      { id: 'p-813', universityId: 'uni-384', name: 'M.D. Medicine', fieldOfStudy: 'Natural Sciences', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 72, tuitionPerYearEur: 14000, minGpaRequired: 3.3, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-06-15', applicationUrl: 'https://www.pte.hu' },
      { id: 'p-814', universityId: 'uni-384', name: 'M.Sc. Computer Science', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 4000, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-06-15', applicationUrl: 'https://www.pte.hu' },
    ]
  },
  {
    id: 'uni-385', name: 'University of Miskolc', country: 'Hungary', city: 'Miskolc',
    websiteUrl: 'https://www.uni-miskolc.hu', logoUrl: '', rankingQs: 0, rankingThe: 0,
    estimatedMonthlyLivingCostEur: 600,
    description: 'A Hungarian technical university known for materials science, mechanical engineering, and earth sciences.',
    programs: [
      { id: 'p-815', universityId: 'uni-385', name: 'M.Sc. Materials Science', fieldOfStudy: 'Physics', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 3500, minGpaRequired: 2.8, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-07-15', applicationUrl: 'https://www.uni-miskolc.hu' },
      { id: 'p-816', universityId: 'uni-385', name: 'M.Sc. Mechanical Engineering', fieldOfStudy: 'Engineering', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 3500, minGpaRequired: 2.8, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-07-15', applicationUrl: 'https://www.uni-miskolc.hu' },
    ]
  },
  {
    id: 'uni-386', name: 'University of Macedonia', country: 'Greece', city: 'Thessaloniki',
    websiteUrl: 'https://www.uom.gr', logoUrl: '', rankingQs: 0, rankingThe: 0,
    estimatedMonthlyLivingCostEur: 650,
    description: 'A Greek university specialising in economics, business, and information systems.',
    programs: [
      { id: 'p-817', universityId: 'uni-386', name: 'M.Sc. Information Systems', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 1500, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-07-01', applicationUrl: 'https://www.uom.gr' },
      { id: 'p-818', universityId: 'uni-386', name: 'M.Sc. Economics', fieldOfStudy: 'Economics', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 1500, minGpaRequired: 2.8, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-07-01', applicationUrl: 'https://www.uom.gr' },
    ]
  },
  {
    id: 'uni-387', name: 'University of Piraeus', country: 'Greece', city: 'Piraeus',
    websiteUrl: 'https://www.unipi.gr', logoUrl: '', rankingQs: 0, rankingThe: 0,
    estimatedMonthlyLivingCostEur: 700,
    description: 'Greece\'s leading maritime and business university, adjacent to Athens with strong economics and IT programs.',
    programs: [
      { id: 'p-819', universityId: 'uni-387', name: 'M.Sc. Maritime Studies', fieldOfStudy: 'Engineering', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 1500, minGpaRequired: 2.8, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-07-01', applicationUrl: 'https://www.unipi.gr' },
      { id: 'p-820', universityId: 'uni-387', name: 'M.Sc. Digital Technologies', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 1500, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-07-01', applicationUrl: 'https://www.unipi.gr' },
    ]
  },
  {
    id: 'uni-388', name: 'Gheorghe Asachi Technical University of Iași', country: 'Romania', city: 'Iași',
    websiteUrl: 'https://www.tuiasi.ro', logoUrl: '', rankingQs: 0, rankingThe: 0,
    estimatedMonthlyLivingCostEur: 480,
    description: 'Romania\'s second-largest technical university with strong programs in engineering and computer science.',
    programs: [
      { id: 'p-821', universityId: 'uni-388', name: 'M.Sc. Computer Science', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 2000, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-07-31', applicationUrl: 'https://www.tuiasi.ro' },
      { id: 'p-822', universityId: 'uni-388', name: 'M.Sc. Electrical Engineering', fieldOfStudy: 'Engineering', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 2000, minGpaRequired: 2.8, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-07-31', applicationUrl: 'https://www.tuiasi.ro' },
    ]
  },
  {
    id: 'uni-389', name: 'University of Oradea', country: 'Romania', city: 'Oradea',
    websiteUrl: 'https://www.uoradea.ro', logoUrl: '', rankingQs: 0, rankingThe: 0,
    estimatedMonthlyLivingCostEur: 460,
    description: 'A western Romanian university near the Hungarian border, known for medicine, engineering, and economics.',
    programs: [
      { id: 'p-823', universityId: 'uni-389', name: 'M.D. Medicine', fieldOfStudy: 'Natural Sciences', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 72, tuitionPerYearEur: 7000, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-07-31', applicationUrl: 'https://www.uoradea.ro' },
      { id: 'p-824', universityId: 'uni-389', name: 'M.Sc. Economics', fieldOfStudy: 'Economics', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 2500, minGpaRequired: 2.5, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-07-31', applicationUrl: 'https://www.uoradea.ro' },
    ]
  },
  {
    id: 'uni-390', name: 'Izmir Institute of Technology', country: 'Turkey', city: 'Izmir',
    websiteUrl: 'https://www.iyte.edu.tr', logoUrl: '', rankingQs: 801, rankingThe: 760,
    estimatedMonthlyLivingCostEur: 430,
    description: 'A research-focused Turkish university in the Aegean region, with strong programs in natural sciences and engineering.',
    programs: [
      { id: 'p-825', universityId: 'uni-390', name: 'M.Sc. Computer Engineering', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 600, minGpaRequired: 3.2, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-07-01', applicationUrl: 'https://www.iyte.edu.tr' },
      { id: 'p-826', universityId: 'uni-390', name: 'M.Sc. Architecture', fieldOfStudy: 'Architecture', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 600, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-07-01', applicationUrl: 'https://www.iyte.edu.tr' },
    ]
  },
  {
    id: 'uni-391', name: 'Dokuz Eylül University', country: 'Turkey', city: 'Izmir',
    websiteUrl: 'https://www.deu.edu.tr', logoUrl: '', rankingQs: 801, rankingThe: 770,
    estimatedMonthlyLivingCostEur: 430,
    description: 'A comprehensive Aegean university known for maritime studies, fine arts, and engineering.',
    programs: [
      { id: 'p-827', universityId: 'uni-391', name: 'M.Sc. Maritime Business Administration', fieldOfStudy: 'Business Administration', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 800, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-07-01', applicationUrl: 'https://www.deu.edu.tr' },
      { id: 'p-828', universityId: 'uni-391', name: 'M.Sc. Electrical Engineering', fieldOfStudy: 'Engineering', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 800, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-07-01', applicationUrl: 'https://www.deu.edu.tr' },
    ]
  },
  {
    id: 'uni-392', name: 'Estonian Business School', country: 'Estonia', city: 'Tallinn',
    websiteUrl: 'https://www.ebs.ee', logoUrl: '', rankingQs: 0, rankingThe: 0,
    estimatedMonthlyLivingCostEur: 760,
    description: 'Estonia\'s leading private business school offering English-medium programs in business and law.',
    programs: [
      { id: 'p-829', universityId: 'uni-392', name: 'M.Sc. Business Administration', fieldOfStudy: 'Business Administration', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 5500, minGpaRequired: 2.8, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-06-30', applicationUrl: 'https://www.ebs.ee' },
      { id: 'p-830', universityId: 'uni-392', name: 'LL.M. Business Law', fieldOfStudy: 'Law', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 12, tuitionPerYearEur: 5500, minGpaRequired: 2.8, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-06-30', applicationUrl: 'https://www.ebs.ee' },
    ]
  },
  {
    id: 'uni-393', name: 'Vytautas Magnus University', country: 'Lithuania', city: 'Kaunas',
    websiteUrl: 'https://www.vdu.lt', logoUrl: '', rankingQs: 0, rankingThe: 0,
    estimatedMonthlyLivingCostEur: 600,
    description: 'A liberal arts university in Kaunas with English-medium programs in social sciences and natural sciences.',
    programs: [
      { id: 'p-831', universityId: 'uni-393', name: 'M.Sc. Environmental Science', fieldOfStudy: 'Natural Sciences', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 2400, minGpaRequired: 2.8, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-07-01', applicationUrl: 'https://www.vdu.lt' },
      { id: 'p-832', universityId: 'uni-393', name: 'M.A. Social Sciences', fieldOfStudy: 'Social Sciences', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 2400, minGpaRequired: 2.8, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-07-01', applicationUrl: 'https://www.vdu.lt' },
    ]
  },
  {
    id: 'uni-394', name: 'Vidzeme University of Applied Sciences', country: 'Latvia', city: 'Valmiera',
    websiteUrl: 'https://www.va.lv', logoUrl: '', rankingQs: 0, rankingThe: 0,
    estimatedMonthlyLivingCostEur: 620,
    description: 'A Latvian UAS in the scenic Vidzeme region offering programs in information technologies and social sciences.',
    programs: [
      { id: 'p-833', universityId: 'uni-394', name: 'M.Sc. Information Technologies', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 2000, minGpaRequired: 2.8, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-07-01', applicationUrl: 'https://www.va.lv' },
      { id: 'p-834', universityId: 'uni-394', name: 'M.Sc. Media and Communications', fieldOfStudy: 'Social Sciences', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 2000, minGpaRequired: 2.5, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-07-01', applicationUrl: 'https://www.va.lv' },
    ]
  },
  {
    id: 'uni-395', name: 'University of Prešov', country: 'Slovakia', city: 'Prešov',
    websiteUrl: 'https://www.unipo.sk', logoUrl: '', rankingQs: 0, rankingThe: 0,
    estimatedMonthlyLivingCostEur: 560,
    description: 'An eastern Slovak university with programs in education, social work, and management.',
    programs: [
      { id: 'p-835', universityId: 'uni-395', name: 'M.A. Education', fieldOfStudy: 'Education', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 1500, minGpaRequired: 2.8, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-07-15', applicationUrl: 'https://www.unipo.sk' },
      { id: 'p-836', universityId: 'uni-395', name: 'M.Sc. Management', fieldOfStudy: 'Business Administration', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 1500, minGpaRequired: 2.5, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-07-15', applicationUrl: 'https://www.unipo.sk' },
    ]
  },
  {
    id: 'uni-396', name: 'Singidunum University', country: 'Serbia', city: 'Belgrade',
    websiteUrl: 'https://www.singidunum.ac.rs', logoUrl: '', rankingQs: 0, rankingThe: 0,
    estimatedMonthlyLivingCostEur: 450,
    description: 'A private Serbian university in Belgrade with English-medium programs in business and IT.',
    programs: [
      { id: 'p-837', universityId: 'uni-396', name: 'M.Sc. Software Engineering', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 3000, minGpaRequired: 2.8, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-07-31', applicationUrl: 'https://www.singidunum.ac.rs' },
      { id: 'p-838', universityId: 'uni-396', name: 'M.Sc. Tourism and Hospitality', fieldOfStudy: 'Business Administration', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 3000, minGpaRequired: 2.5, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-07-31', applicationUrl: 'https://www.singidunum.ac.rs' },
    ]
  },
  {
    id: 'uni-397', name: 'University of Zadar', country: 'Croatia', city: 'Zadar',
    websiteUrl: 'https://www.unizd.hr', logoUrl: '', rankingQs: 0, rankingThe: 0,
    estimatedMonthlyLivingCostEur: 680,
    description: 'One of Croatia\'s oldest universities, set on the Adriatic coast with strong programs in humanities and tourism.',
    programs: [
      { id: 'p-839', universityId: 'uni-397', name: 'M.A. Heritage Studies', fieldOfStudy: 'Arts & Humanities', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 1500, minGpaRequired: 2.8, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-07-01', applicationUrl: 'https://www.unizd.hr' },
      { id: 'p-840', universityId: 'uni-397', name: 'M.Sc. Information Science', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 1500, minGpaRequired: 2.8, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-07-01', applicationUrl: 'https://www.unizd.hr' },
    ]
  },
  {
    id: 'uni-398', name: 'American University in Bulgaria', country: 'Bulgaria', city: 'Blagoevgrad',
    websiteUrl: 'https://www.aubg.edu', logoUrl: '', rankingQs: 0, rankingThe: 0,
    estimatedMonthlyLivingCostEur: 500,
    description: 'A fully English-medium US-style liberal arts university in Bulgaria offering accredited American degrees.',
    programs: [
      { id: 'p-841', universityId: 'uni-398', name: 'B.Sc. Computer Science', fieldOfStudy: 'Computer Science', degreeLevel: 'bachelors', languageOfInstruction: 'English', durationMonths: 48, tuitionPerYearEur: 10000, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'C1', applicationDeadline: '2026-06-01', applicationUrl: 'https://www.aubg.edu' },
      { id: 'p-842', universityId: 'uni-398', name: 'B.Sc. Business Administration', fieldOfStudy: 'Business Administration', degreeLevel: 'bachelors', languageOfInstruction: 'English', durationMonths: 48, tuitionPerYearEur: 10000, minGpaRequired: 2.8, requiredLanguage: 'English', requiredLanguageLevel: 'C1', applicationDeadline: '2026-06-01', applicationUrl: 'https://www.aubg.edu' },
    ]
  },
  {
    id: 'uni-399', name: 'University of Tuzla', country: 'Bosnia', city: 'Tuzla',
    websiteUrl: 'https://www.untz.ba', logoUrl: '', rankingQs: 0, rankingThe: 0,
    estimatedMonthlyLivingCostEur: 460,
    description: 'A Bosnian university offering programs in technology, medicine, and natural sciences.',
    programs: [
      { id: 'p-843', universityId: 'uni-399', name: 'M.Sc. Mining Engineering', fieldOfStudy: 'Engineering', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 2000, minGpaRequired: 2.5, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-07-31', applicationUrl: 'https://www.untz.ba' },
      { id: 'p-844', universityId: 'uni-399', name: 'M.Sc. Computer Science', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 2000, minGpaRequired: 2.8, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-07-31', applicationUrl: 'https://www.untz.ba' },
    ]
  },
  {
    id: 'uni-400', name: 'Polytechnic University of Tirana', country: 'Albania', city: 'Tirana',
    websiteUrl: 'https://www.upt.al', logoUrl: '', rankingQs: 0, rankingThe: 0,
    estimatedMonthlyLivingCostEur: 400,
    description: 'Albania\'s largest technical university offering engineering and IT programs.',
    programs: [
      { id: 'p-845', universityId: 'uni-400', name: 'M.Sc. Computer Engineering', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 1200, minGpaRequired: 2.8, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-07-31', applicationUrl: 'https://www.upt.al' },
      { id: 'p-846', universityId: 'uni-400', name: 'M.Sc. Civil Engineering', fieldOfStudy: 'Engineering', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 1200, minGpaRequired: 2.5, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-07-31', applicationUrl: 'https://www.upt.al' },
    ]
  },
  {
    id: 'uni-401', name: 'University of Donja Gorica', country: 'Montenegro', city: 'Podgorica',
    websiteUrl: 'https://www.udg.edu.me', logoUrl: '', rankingQs: 0, rankingThe: 0,
    estimatedMonthlyLivingCostEur: 550,
    description: 'Montenegro\'s leading private university with modern programs in business, law, and political science.',
    programs: [
      { id: 'p-847', universityId: 'uni-401', name: 'M.Sc. Business Administration', fieldOfStudy: 'Business Administration', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 3500, minGpaRequired: 2.8, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-07-31', applicationUrl: 'https://www.udg.edu.me' },
      { id: 'p-848', universityId: 'uni-401', name: 'LL.M. Law', fieldOfStudy: 'Law', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 3500, minGpaRequired: 2.8, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-07-31', applicationUrl: 'https://www.udg.edu.me' },
    ]
  },
  {
    id: 'uni-402', name: 'South East European University', country: 'North Macedonia', city: 'Tetovo',
    websiteUrl: 'https://www.seeu.edu.mk', logoUrl: '', rankingQs: 0, rankingThe: 0,
    estimatedMonthlyLivingCostEur: 400,
    description: 'A multicultural university in Macedonia offering fully English-medium programs in business and law.',
    programs: [
      { id: 'p-849', universityId: 'uni-402', name: 'LL.M. Public International Law', fieldOfStudy: 'Law', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 2000, minGpaRequired: 2.8, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-07-31', applicationUrl: 'https://www.seeu.edu.mk' },
      { id: 'p-850', universityId: 'uni-402', name: 'M.Sc. Computer Science', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 2000, minGpaRequired: 2.8, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-07-31', applicationUrl: 'https://www.seeu.edu.mk' },
    ]
  },
  {
    id: 'uni-403', name: 'Ivan Franko National University of Lviv', country: 'Ukraine', city: 'Lviv',
    websiteUrl: 'https://www.lnu.edu.ua', logoUrl: '', rankingQs: 0, rankingThe: 0,
    estimatedMonthlyLivingCostEur: 470,
    description: 'Western Ukraine\'s top classical university with programs in natural sciences, economics, and law.',
    programs: [
      { id: 'p-851', universityId: 'uni-403', name: 'M.Sc. Computer Science', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 2500, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-06-30', applicationUrl: 'https://www.lnu.edu.ua' },
      { id: 'p-852', universityId: 'uni-403', name: 'M.Sc. Mathematics', fieldOfStudy: 'Mathematics', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 2500, minGpaRequired: 3.2, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-06-30', applicationUrl: 'https://www.lnu.edu.ua' },
    ]
  },
  {
    id: 'uni-404', name: 'Kharkiv National University of Radio Electronics', country: 'Ukraine', city: 'Kharkiv',
    websiteUrl: 'https://nure.ua', logoUrl: '', rankingQs: 0, rankingThe: 0,
    estimatedMonthlyLivingCostEur: 460,
    description: 'Ukraine\'s leading IT and electronics university with top-ranked programs in software engineering.',
    programs: [
      { id: 'p-853', universityId: 'uni-404', name: 'M.Sc. Software Engineering', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 2800, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-06-30', applicationUrl: 'https://nure.ua' },
      { id: 'p-854', universityId: 'uni-404', name: 'M.Sc. Cybersecurity', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 2800, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-06-30', applicationUrl: 'https://nure.ua' },
    ]
  },
  {
    id: 'uni-405', name: 'Luxembourg School of Business', country: 'Luxembourg', city: 'Luxembourg City',
    websiteUrl: 'https://www.lsb.lu', logoUrl: '', rankingQs: 0, rankingThe: 0,
    estimatedMonthlyLivingCostEur: 1700,
    description: 'A private graduate business school in the EU financial capital offering fully English-medium MBA programs.',
    programs: [
      { id: 'p-855', universityId: 'uni-405', name: 'MBA', fieldOfStudy: 'Business Administration', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 12, tuitionPerYearEur: 18000, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'C1', applicationDeadline: '2026-06-30', applicationUrl: 'https://www.lsb.lu' },
      { id: 'p-856', universityId: 'uni-405', name: 'M.Sc. Finance', fieldOfStudy: 'Economics', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 12, tuitionPerYearEur: 15000, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'C1', applicationDeadline: '2026-06-30', applicationUrl: 'https://www.lsb.lu' },
    ]
  },
  {
    id: 'uni-406', name: 'MCAST – Malta College of Arts, Science and Technology', country: 'Malta', city: 'Paola',
    websiteUrl: 'https://www.mcast.edu.mt', logoUrl: '', rankingQs: 0, rankingThe: 0,
    estimatedMonthlyLivingCostEur: 900,
    description: 'Malta\'s largest applied sciences institution offering hands-on programs in IT, engineering, and creative arts.',
    programs: [
      { id: 'p-857', universityId: 'uni-406', name: 'B.Sc. Information Technology', fieldOfStudy: 'Computer Science', degreeLevel: 'bachelors', languageOfInstruction: 'English', durationMonths: 48, tuitionPerYearEur: 1800, minGpaRequired: 2.5, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-07-31', applicationUrl: 'https://www.mcast.edu.mt' },
      { id: 'p-858', universityId: 'uni-406', name: 'B.Sc. Engineering', fieldOfStudy: 'Engineering', degreeLevel: 'bachelors', languageOfInstruction: 'English', durationMonths: 48, tuitionPerYearEur: 1800, minGpaRequired: 2.5, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-07-31', applicationUrl: 'https://www.mcast.edu.mt' },
    ]
  },
  {
    id: 'uni-407', name: 'Riinvest University', country: 'Kosovo', city: 'Pristina',
    websiteUrl: 'https://www.riinvestuniversity.net', logoUrl: '', rankingQs: 0, rankingThe: 0,
    estimatedMonthlyLivingCostEur: 400,
    description: 'A young Kosovo private university with English-medium programs in business, IT, and political science.',
    programs: [
      { id: 'p-859', universityId: 'uni-407', name: 'M.Sc. Business Informatics', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 2500, minGpaRequired: 2.8, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-07-31', applicationUrl: 'https://www.riinvestuniversity.net' },
      { id: 'p-860', universityId: 'uni-407', name: 'M.Sc. Political Science', fieldOfStudy: 'Social Sciences', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 2500, minGpaRequired: 2.5, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-07-31', applicationUrl: 'https://www.riinvestuniversity.net' },
    ]
  },
  {
    id: 'uni-408', name: 'University of Akureyri', country: 'Iceland', city: 'Akureyri',
    websiteUrl: 'https://www.unak.is', logoUrl: '', rankingQs: 0, rankingThe: 0,
    estimatedMonthlyLivingCostEur: 1400,
    description: 'Iceland\'s regional university in the north, known for polar studies, fisheries, and health sciences.',
    programs: [
      { id: 'p-861', universityId: 'uni-408', name: 'M.Sc. Fisheries Science', fieldOfStudy: 'Natural Sciences', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 0, minGpaRequired: 2.8, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-05-01', applicationUrl: 'https://www.unak.is' },
      { id: 'p-862', universityId: 'uni-408', name: 'M.Sc. Rural Tourism', fieldOfStudy: 'Business Administration', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 0, minGpaRequired: 2.5, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-05-01', applicationUrl: 'https://www.unak.is' },
    ]
  },
  {
    id: 'uni-409', name: 'European University Cyprus', country: 'Cyprus', city: 'Nicosia',
    websiteUrl: 'https://www.euc.ac.cy', logoUrl: '', rankingQs: 0, rankingThe: 0,
    estimatedMonthlyLivingCostEur: 850,
    description: 'A private Cypriot university offering English-medium programs in health sciences, engineering, and business.',
    programs: [
      { id: 'p-863', universityId: 'uni-409', name: 'M.D. Medicine', fieldOfStudy: 'Natural Sciences', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 72, tuitionPerYearEur: 15000, minGpaRequired: 3.2, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-06-30', applicationUrl: 'https://www.euc.ac.cy' },
      { id: 'p-864', universityId: 'uni-409', name: 'M.Sc. Computer Science', fieldOfStudy: 'Computer Science', degreeLevel: 'masters', languageOfInstruction: 'English', durationMonths: 24, tuitionPerYearEur: 6500, minGpaRequired: 3.0, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-06-30', applicationUrl: 'https://www.euc.ac.cy' },
    ]
  },
  {
    id: 'uni-410', name: 'Copenhagen Business Academy', country: 'Denmark', city: 'Copenhagen',
    websiteUrl: 'https://www.cphbusiness.dk', logoUrl: '', rankingQs: 0, rankingThe: 0,
    estimatedMonthlyLivingCostEur: 1200,
    description: 'Denmark\'s largest business academy offering practical English-medium programs in business and IT.',
    programs: [
      { id: 'p-865', universityId: 'uni-410', name: 'B.Sc. International Sales and Marketing', fieldOfStudy: 'Business Administration', degreeLevel: 'bachelors', languageOfInstruction: 'English', durationMonths: 48, tuitionPerYearEur: 0, minGpaRequired: 2.5, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-03-15', applicationUrl: 'https://www.cphbusiness.dk' },
      { id: 'p-866', universityId: 'uni-410', name: 'B.Sc. Software Development', fieldOfStudy: 'Computer Science', degreeLevel: 'bachelors', languageOfInstruction: 'English', durationMonths: 48, tuitionPerYearEur: 0, minGpaRequired: 2.5, requiredLanguage: 'English', requiredLanguageLevel: 'B2', applicationDeadline: '2026-03-15', applicationUrl: 'https://www.cphbusiness.dk' },
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
  'Lithuania', 'Latvia', 'Slovenia', 'Slovakia', 'Serbia', 'Bulgaria',
  'Turkey', 'Iceland', 'Cyprus', 'Luxembourg', 'Malta',
  'Bosnia', 'North Macedonia', 'Ukraine', 'Albania', 'Montenegro', 'Kosovo'
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
