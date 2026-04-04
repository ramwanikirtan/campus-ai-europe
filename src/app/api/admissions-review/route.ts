import { NextRequest, NextResponse } from 'next/server';
import { auth } from '@/lib/auth';
import { prisma } from '@/lib/prisma';
import OpenAI from 'openai';

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

const ANALYSIS_PROMPT = (
  universityName: string,
  programName: string,
  sop: string,
  cv: string,
  gpa: string,
  recommenders: string
) => `You are an experienced European university admissions officer with 15+ years of experience reviewing applications. Provide a thorough, honest, and constructive assessment of this application.

TARGET:
University: ${universityName}
Program: ${programName}

APPLICANT BACKGROUND:
GPA / Academic Standing: ${gpa || 'Not provided'}
Recommenders: ${recommenders || 'Not provided'}

STATEMENT OF PURPOSE:
${sop || 'Not provided'}

CV / RESUME:
${cv || 'Not provided'}

Respond ONLY with a valid JSON object (no markdown, no code fences) in this exact format:
{
  "overallScore": <integer 0-100>,
  "verdict": "<admit|waitlist|reject>",
  "verdictReason": "<2-3 sentences explaining the verdict from an admissions perspective>",
  "strengths": ["<concrete strength 1>", "<concrete strength 2>", "<concrete strength 3>"],
  "risks": [
    { "title": "<short risk title>", "description": "<detailed explanation of the risk and how it might affect admission>", "severity": "<low|medium|high>" }
  ],
  "sopWeaknesses": [
    { "paragraph": "<exact quote of the weak paragraph or phrase>", "issue": "<specific problem with this section>", "suggestion": "<concrete rewrite suggestion>" }
  ],
  "admissionsInsights": "<2-3 paragraph insider perspective: what committees look for, how this application compares, what could swing the decision>"
}

Be specific and actionable. Avoid generic advice. Reference actual content from the documents provided.`;

export async function POST(req: NextRequest) {
  try {
    const session = await auth();
    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const body = await req.json();
    const { universityName, programName, sopText, cvText, gpa, recommenders, reviewId } = body;

    if (!universityName || !programName) {
      return NextResponse.json({ error: 'University name and program name are required' }, { status: 400 });
    }

    // Create or reuse review record
    let review: { id: string; iterations: { iterationNumber: number }[] };

    if (reviewId) {
      const existing = await prisma.admissionsReview.findUnique({
        where: { id: reviewId },
        include: { iterations: { select: { iterationNumber: true } } },
      });
      if (!existing || existing.userId !== session.user.id) {
        return NextResponse.json({ error: 'Review not found' }, { status: 404 });
      }
      review = existing;
    } else {
      review = await prisma.admissionsReview.create({
        data: {
          userId: session.user.id,
          universityName,
          programName,
          sopText: sopText || null,
          cvText: cvText || null,
          gpa: gpa || null,
          recommenders: recommenders || null,
          status: 'pending',
        },
        include: { iterations: { select: { iterationNumber: true } } },
      });
    }

    // Call OpenAI
    const prompt = ANALYSIS_PROMPT(universityName, programName, sopText || '', cvText || '', gpa || '', recommenders || '');

    const completion = await openai.chat.completions.create({
      model: 'gpt-4o',
      messages: [{ role: 'user', content: prompt }],
      temperature: 0.7,
      max_tokens: 2000,
    });

    const raw = completion.choices[0].message.content || '{}';
    let result: {
      overallScore: number;
      verdict: string;
      verdictReason: string;
      strengths: string[];
      risks: { title: string; description: string; severity: string }[];
      sopWeaknesses: { paragraph: string; issue: string; suggestion: string }[];
      admissionsInsights: string;
    };

    try {
      result = JSON.parse(raw);
    } catch {
      // Try extracting JSON from the response
      const jsonMatch = raw.match(/\{[\s\S]*\}/);
      if (!jsonMatch) {
        await prisma.admissionsReview.update({
          where: { id: review.id },
          data: { status: 'failed' },
        });
        return NextResponse.json({ error: 'AI response parsing failed' }, { status: 500 });
      }
      result = JSON.parse(jsonMatch[0]);
    }

    // Save iteration
    const iterationNumber = (review.iterations?.length || 0) + 1;
    await prisma.reviewIteration.create({
      data: {
        reviewId: review.id,
        iterationNumber,
        overallScore: result.overallScore ?? 0,
        verdict: result.verdict ?? 'waitlist',
        verdictReason: result.verdictReason ?? '',
        strengths: result.strengths ?? [],
        risks: result.risks ?? [],
        sopWeaknesses: result.sopWeaknesses ?? [],
        admissionsInsights: result.admissionsInsights ?? null,
      },
    });

    // Update review with latest results
    const updated = await prisma.admissionsReview.update({
      where: { id: review.id },
      data: {
        status: 'completed',
        overallScore: result.overallScore ?? 0,
        verdict: result.verdict ?? 'waitlist',
        verdictReason: result.verdictReason ?? '',
        strengths: result.strengths ?? [],
        risks: result.risks ?? [],
        sopWeaknesses: result.sopWeaknesses ?? [],
        admissionsInsights: result.admissionsInsights ?? null,
      },
      include: {
        iterations: { orderBy: { iterationNumber: 'asc' } },
      },
    });

    return NextResponse.json(updated);
  } catch (err) {
    console.error('Admissions review error:', err);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

export async function GET(req: NextRequest) {
  try {
    const session = await auth();
    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const reviews = await prisma.admissionsReview.findMany({
      where: { userId: session.user.id },
      orderBy: { createdAt: 'desc' },
      include: {
        iterations: {
          orderBy: { iterationNumber: 'asc' },
          select: { iterationNumber: true, overallScore: true, createdAt: true },
        },
      },
    });

    return NextResponse.json(reviews);
  } catch (err) {
    console.error('Get reviews error:', err);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
