import { NextRequest, NextResponse } from 'next/server';
import { auth } from '@/lib/auth';
import OpenAI from 'openai';

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export async function POST(req: NextRequest) {
  try {
    const session = await auth();
    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { paragraph, issue, suggestion } = await req.json();

    if (!paragraph) {
      return NextResponse.json({ error: 'Paragraph is required' }, { status: 400 });
    }

    const prompt = `You are an expert academic writing coach helping a student improve their Statement of Purpose for a European university application.

ORIGINAL PARAGRAPH:
"${paragraph}"

IDENTIFIED ISSUE:
${issue || 'The paragraph needs improvement'}

IMPROVEMENT SUGGESTION:
${suggestion || 'Make it more specific, compelling, and authentic'}

Rewrite this paragraph to address the issue. Make it more:
- Specific and concrete (use examples, numbers, achievements)
- Compelling and authentic (avoid clichés and generic statements)
- Professionally written but natural in tone
- Focused on what makes the applicant unique

Return ONLY the rewritten paragraph text. No explanations, no labels, just the improved paragraph.`;

    const completion = await openai.chat.completions.create({
      model: 'gpt-4o',
      messages: [{ role: 'user', content: prompt }],
      temperature: 0.8,
      max_tokens: 600,
    });

    const rewritten = completion.choices[0].message.content?.trim() || '';

    return NextResponse.json({ rewritten });
  } catch (err) {
    console.error('Fix SOP paragraph error:', err);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
