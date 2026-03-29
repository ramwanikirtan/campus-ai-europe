import { ChatOpenAI } from '@langchain/openai';
import { Document } from '@langchain/core/documents';
import { retrieveRelevantDocs } from './retriever';

interface UserProfile {
  fieldOfStudy?: string;
  degreeLevel?: string;
  gpaNormalized?: number;
  monthlyBudgetEur?: number;
  nationality?: string;
  languages?: { language: string; level: string }[];
  countryPreferences?: string[];
}

interface ChatRequest {
  message: string;
  conversationHistory: { role: 'user' | 'assistant'; content: string }[];
  userProfile?: UserProfile;
}

function buildSystemPrompt(profile?: UserProfile, contextDocs?: Document[]): string {
  let profileSection = '';
  if (profile) {
    const langs = profile.languages
      ?.map((l) => `${l.language} (${l.level})`)
      .join(', ') || 'Not specified';

    const countries = profile.countryPreferences?.length
      ? profile.countryPreferences.join(', ')
      : 'No preference';

    profileSection = `
## Student Profile
- Field of Study: ${profile.fieldOfStudy || 'Not specified'}
- Degree Level: ${profile.degreeLevel || 'Not specified'}
- GPA: ${profile.gpaNormalized || 'Not specified'}/4.0
- Monthly Budget: EUR${profile.monthlyBudgetEur || 'Not specified'}/month
- Languages: ${langs}
- Nationality: ${profile.nationality || 'Not specified'}
- Country Preferences: ${countries}
`;
  }

  let contextSection = '';
  if (contextDocs?.length) {
    const contextText = contextDocs
      .map((doc, i) => `[${i + 1}] ${doc.pageContent}`)
      .join('\n\n---\n\n');
    contextSection = `
## Retrieved Information
Use the following information to answer the student's question. Cite specific universities, programs, and scholarships by name when relevant.

${contextText}
`;
  }

  return `You are Campus AI Europe, an expert AI assistant for students looking to study in Europe. You help students find universities, scholarships, and programs that match their profile.

${profileSection}
${contextSection}

## Guidelines
- Only recommend universities and scholarships that are relevant to the student's profile
- Always mention specific names, amounts, deadlines, and requirements when available
- If the student's GPA or budget doesn't meet requirements, be honest but suggest alternatives
- Format responses with markdown: use **bold** for names, bullet points for lists
- Keep responses concise but informative (2-4 paragraphs max)
- If you don't have specific data, say so rather than making things up
- When mentioning scholarships, include the amount and deadline
- When mentioning universities, include the country and ranking if available
- Be encouraging and supportive — studying abroad is a big decision`;
}

/**
 * Create a streaming chat completion with RAG context.
 */
export async function createRAGStream(request: ChatRequest) {
  const { message, conversationHistory, userProfile } = request;

  // Retrieve relevant documents
  const contextDocs = await retrieveRelevantDocs(message, userProfile ? {
    fieldOfStudy: userProfile.fieldOfStudy,
    degreeLevel: userProfile.degreeLevel,
    gpaNormalized: userProfile.gpaNormalized,
    monthlyBudgetEur: userProfile.monthlyBudgetEur,
    nationality: userProfile.nationality,
    languages: userProfile.languages,
    countryPreferences: userProfile.countryPreferences,
  } : undefined);

  // Build system prompt with profile + context
  const systemPrompt = buildSystemPrompt(userProfile, contextDocs);

  // Build message history
  const messages: { role: 'system' | 'user' | 'assistant'; content: string }[] = [
    { role: 'system', content: systemPrompt },
  ];

  // Add conversation history (last 10 messages to stay within context)
  const recentHistory = conversationHistory.slice(-10);
  for (const msg of recentHistory) {
    messages.push({ role: msg.role, content: msg.content });
  }

  // Add current message
  messages.push({ role: 'user', content: message });

  // Create streaming LLM call
  const llm = new ChatOpenAI({
    openAIApiKey: process.env.OPENAI_API_KEY,
    modelName: 'gpt-4o-mini',
    temperature: 0.7,
    streaming: true,
    maxTokens: 1024,
  });

  const stream = await llm.stream(messages);

  // Collect source metadata for citations
  const sources = contextDocs
    .map((doc) => {
      const m = doc.metadata;
      if (m.type === 'university') return m.name;
      if (m.type === 'program') return `${m.name} at ${m.universityName}`;
      if (m.type === 'scholarship') return m.name;
      return null;
    })
    .filter(Boolean) as string[];

  return { stream, sources: [...new Set(sources)] };
}
