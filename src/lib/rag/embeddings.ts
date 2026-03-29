import { OpenAIEmbeddings } from '@langchain/openai';
import { Document } from '@langchain/core/documents';
import { prisma } from '../prisma';

let embeddingsInstance: OpenAIEmbeddings | null = null;

export function getEmbeddings(): OpenAIEmbeddings {
  if (!embeddingsInstance) {
    embeddingsInstance = new OpenAIEmbeddings({
      openAIApiKey: process.env.OPENAI_API_KEY,
      modelName: 'text-embedding-3-small',
    });
  }
  return embeddingsInstance;
}

/**
 * Load all universities from DB and convert to LangChain Documents.
 */
export async function loadUniversityDocuments(): Promise<Document[]> {
  const universities = await prisma.university.findMany({
    include: { programs: true },
  });

  const docs: Document[] = [];

  for (const uni of universities) {
    // One document per university with overview
    const programList = uni.programs
      .map(
        (p) =>
          `- ${p.name} (${p.degreeLevel}, ${p.languageOfInstruction}, ` +
          `tuition: EUR${p.tuitionPerYearEur}/yr, ` +
          `min GPA: ${p.minGpaRequired ?? 'N/A'}, ` +
          `deadline: ${p.applicationDeadline ?? 'N/A'})`
      )
      .join('\n');

    const content = [
      `University: ${uni.name}`,
      `Country: ${uni.country}`,
      `City: ${uni.city}`,
      uni.rankingQs ? `QS World Ranking: #${uni.rankingQs}` : null,
      uni.rankingThe ? `THE World Ranking: #${uni.rankingThe}` : null,
      `Estimated monthly living cost: EUR${uni.estimatedMonthlyLivingCostEur}`,
      uni.foundedYear ? `Founded: ${uni.foundedYear}` : null,
      uni.websiteUrl ? `Website: ${uni.websiteUrl}` : null,
      uni.description ? `Description: ${uni.description}` : null,
      uni.programs.length > 0 ? `\nPrograms offered:\n${programList}` : null,
    ]
      .filter(Boolean)
      .join('\n');

    docs.push(
      new Document({
        pageContent: content,
        metadata: {
          type: 'university',
          id: uni.id,
          name: uni.name,
          country: uni.country,
          city: uni.city,
          rankingQs: uni.rankingQs,
        },
      })
    );

    // Additional per-program documents for fine-grained retrieval
    for (const prog of uni.programs) {
      const progContent = [
        `Program: ${prog.name} at ${uni.name}`,
        `University: ${uni.name} (${uni.city}, ${uni.country})`,
        `Degree level: ${prog.degreeLevel}`,
        `Field of study: ${prog.fieldOfStudy}`,
        `Language of instruction: ${prog.languageOfInstruction}`,
        `Duration: ${prog.durationMonths} months`,
        `Tuition: EUR${prog.tuitionPerYearEur}/year`,
        prog.minGpaRequired ? `Minimum GPA required: ${prog.minGpaRequired}` : null,
        prog.requiredLanguage
          ? `Required language: ${prog.requiredLanguage} (${prog.requiredLanguageLevel})`
          : null,
        prog.applicationDeadline ? `Application deadline: ${prog.applicationDeadline}` : null,
        prog.applicationUrl ? `Apply: ${prog.applicationUrl}` : null,
        prog.additionalRequirements
          ? `Additional requirements: ${prog.additionalRequirements}`
          : null,
      ]
        .filter(Boolean)
        .join('\n');

      docs.push(
        new Document({
          pageContent: progContent,
          metadata: {
            type: 'program',
            id: prog.id,
            universityId: uni.id,
            universityName: uni.name,
            name: prog.name,
            fieldOfStudy: prog.fieldOfStudy,
            degreeLevel: prog.degreeLevel,
            country: uni.country,
          },
        })
      );
    }
  }

  return docs;
}

/**
 * Load all scholarships from DB and convert to LangChain Documents.
 */
export async function loadScholarshipDocuments(): Promise<Document[]> {
  const scholarships = await prisma.scholarship.findMany({
    include: { universities: { include: { university: true } } },
  });

  return scholarships.map((sch) => {
    const linkedUnis = sch.universities.map((su) => su.university.name).join(', ');

    const nationalities =
      sch.eligibilityNationalities === 'all' ||
      (typeof sch.eligibilityNationalities === 'string' &&
        sch.eligibilityNationalities === 'all')
        ? 'All nationalities'
        : Array.isArray(sch.eligibilityNationalities)
          ? (sch.eligibilityNationalities as string[]).join(', ')
          : 'All nationalities';

    const fields =
      sch.eligibilityFields === 'all' ||
      (typeof sch.eligibilityFields === 'string' && sch.eligibilityFields === 'all')
        ? 'All fields'
        : Array.isArray(sch.eligibilityFields)
          ? (sch.eligibilityFields as string[]).join(', ')
          : 'All fields';

    const degreeLevels = Array.isArray(sch.eligibilityDegreeLevels)
      ? (sch.eligibilityDegreeLevels as string[]).join(', ')
      : String(sch.eligibilityDegreeLevels);

    const content = [
      `Scholarship: ${sch.name}`,
      `Provider: ${sch.provider}`,
      `Type: ${sch.type}`,
      `Amount: ${sch.amountDescription} (EUR${sch.amountEurMonthly}/month)`,
      sch.coverage ? `Coverage: ${sch.coverage}` : null,
      `Eligible nationalities: ${nationalities}`,
      sch.eligibilityMinGpa ? `Minimum GPA: ${sch.eligibilityMinGpa}` : null,
      `Eligible fields: ${fields}`,
      `Eligible degree levels: ${degreeLevels}`,
      sch.eligibilityOther ? `Other eligibility: ${sch.eligibilityOther}` : null,
      sch.applicationDeadline ? `Application deadline: ${sch.applicationDeadline}` : null,
      sch.applicationUrl ? `Apply: ${sch.applicationUrl}` : null,
      linkedUnis ? `Linked universities: ${linkedUnis}` : null,
    ]
      .filter(Boolean)
      .join('\n');

    return new Document({
      pageContent: content,
      metadata: {
        type: 'scholarship',
        id: sch.id,
        name: sch.name,
        provider: sch.provider,
        scholarshipType: sch.type,
        amountEurMonthly: sch.amountEurMonthly,
      },
    });
  });
}

/**
 * Load all documents (universities + programs + scholarships).
 */
export async function loadAllDocuments(): Promise<Document[]> {
  const [uniDocs, schDocs] = await Promise.all([
    loadUniversityDocuments(),
    loadScholarshipDocuments(),
  ]);
  return [...uniDocs, ...schDocs];
}
