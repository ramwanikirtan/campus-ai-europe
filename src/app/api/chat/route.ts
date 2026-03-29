import { NextRequest } from 'next/server';
import { auth } from '@/lib/auth';
import { prisma } from '@/lib/prisma';
import { createRAGStream } from '@/lib/rag/chain';

export async function POST(req: NextRequest) {
  try {
    // Authenticate user
    const session = await auth();
    if (!session?.user?.id) {
      return new Response('Unauthorized', { status: 401 });
    }

    const body = await req.json();
    const { message, conversationHistory = [] } = body;

    if (!message || typeof message !== 'string') {
      return new Response('Message is required', { status: 400 });
    }

    // Load user profile from DB
    const profile = await prisma.profile.findUnique({
      where: { userId: session.user.id },
    });

    const userProfile = profile
      ? {
          fieldOfStudy: profile.fieldOfStudy,
          degreeLevel: profile.degreeLevel,
          gpaNormalized: profile.gpaNormalized,
          monthlyBudgetEur: profile.monthlyBudgetEur,
          nationality: profile.nationality,
          languages: profile.languages as { language: string; level: string }[],
          countryPreferences: profile.countryPreferences as string[],
        }
      : undefined;

    // Run RAG pipeline and get stream
    const { stream, sources } = await createRAGStream({
      message,
      conversationHistory,
      userProfile,
    });

    // Create a ReadableStream that streams the LLM response
    const encoder = new TextEncoder();

    const readable = new ReadableStream({
      async start(controller) {
        try {
          for await (const chunk of stream) {
            const text = chunk.content;
            if (typeof text === 'string' && text) {
              controller.enqueue(
                encoder.encode(`data: ${JSON.stringify({ type: 'text', content: text })}\n\n`)
              );
            }
          }

          // Send sources at the end
          if (sources.length > 0) {
            controller.enqueue(
              encoder.encode(
                `data: ${JSON.stringify({ type: 'sources', sources })}\n\n`
              )
            );
          }

          controller.enqueue(encoder.encode('data: [DONE]\n\n'));
          controller.close();
        } catch (err) {
          console.error('Stream error:', err);
          controller.enqueue(
            encoder.encode(
              `data: ${JSON.stringify({ type: 'error', content: 'An error occurred while generating the response.' })}\n\n`
            )
          );
          controller.close();
        }
      },
    });

    return new Response(readable, {
      headers: {
        'Content-Type': 'text/event-stream',
        'Cache-Control': 'no-cache',
        Connection: 'keep-alive',
      },
    });
  } catch (error) {
    console.error('Chat API error:', error);
    const message =
      error instanceof Error ? error.message : 'Internal server error';

    // If FAISS index not found, return a helpful error
    if (message.includes('FAISS index not found')) {
      return Response.json(
        { error: 'Search index not built yet. Run: npm run build:index' },
        { status: 503 }
      );
    }

    return Response.json({ error: message }, { status: 500 });
  }
}
