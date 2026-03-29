import { Document } from '@langchain/core/documents';
import { getVectorStore } from './vectorstore';

interface UserContext {
  fieldOfStudy?: string;
  degreeLevel?: string;
  gpaNormalized?: number;
  monthlyBudgetEur?: number;
  nationality?: string;
  languages?: { language: string; level: string }[];
  countryPreferences?: string[];
}

/**
 * Retrieve the most relevant documents for a user query,
 * enriched with the user's profile context.
 */
export async function retrieveRelevantDocs(
  query: string,
  userContext?: UserContext,
  topK: number = 8
): Promise<Document[]> {
  const store = await getVectorStore();

  // Build an enriched query that incorporates user profile for better matching
  const parts = [query];
  if (userContext) {
    if (userContext.fieldOfStudy) parts.push(`field: ${userContext.fieldOfStudy}`);
    if (userContext.degreeLevel) parts.push(`degree: ${userContext.degreeLevel}`);
    if (userContext.nationality) parts.push(`nationality: ${userContext.nationality}`);
    if (userContext.countryPreferences?.length) {
      parts.push(`preferred countries: ${userContext.countryPreferences.join(', ')}`);
    }
  }

  const enrichedQuery = parts.join('. ');

  // Retrieve more documents than needed, then re-rank
  const results = await store.similaritySearchWithScore(enrichedQuery, topK * 2);

  // Re-rank with profile relevance boost
  const scored = results.map(([doc, distance]) => {
    let boost = 0;
    const meta = doc.metadata;

    if (userContext) {
      // Boost documents matching user's field of study
      if (
        userContext.fieldOfStudy &&
        meta.fieldOfStudy &&
        meta.fieldOfStudy.toLowerCase() === userContext.fieldOfStudy.toLowerCase()
      ) {
        boost += 0.15;
      }

      // Boost documents matching user's degree level
      if (
        userContext.degreeLevel &&
        meta.degreeLevel &&
        meta.degreeLevel === userContext.degreeLevel
      ) {
        boost += 0.1;
      }

      // Boost documents matching user's country preferences
      if (
        userContext.countryPreferences?.length &&
        meta.country &&
        userContext.countryPreferences.includes(meta.country)
      ) {
        boost += 0.1;
      }
    }

    // Lower distance = better match; apply boost as reduction
    return { doc, adjustedScore: distance - boost };
  });

  // Sort by adjusted score (lower = better) and take top K
  scored.sort((a, b) => a.adjustedScore - b.adjustedScore);

  return scored.slice(0, topK).map((s) => s.doc);
}
