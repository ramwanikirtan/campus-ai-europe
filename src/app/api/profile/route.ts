import { NextResponse } from 'next/server';
import { auth } from '@/lib/auth';
import { prisma } from '@/lib/prisma';

export async function GET() {
  const session = await auth();
  if (!session?.user?.id) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const profile = await prisma.profile.findUnique({
    where: { userId: session.user.id },
  });

  if (!profile) {
    return NextResponse.json(null);
  }

  return NextResponse.json(profile);
}

export async function POST(request: Request) {
  const session = await auth();
  if (!session?.user?.id) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const data = await request.json();

  const profile = await prisma.profile.upsert({
    where: { userId: session.user.id },
    create: {
      userId: session.user.id,
      fieldOfStudy: data.fieldOfStudy,
      degreeLevel: data.degreeLevel,
      gpaOriginal: data.gpaOriginal,
      gpaNormalized: data.gpaNormalized,
      monthlyBudgetEur: data.monthlyBudgetEur,
      nationality: data.nationality,
      languages: data.languages,
      countryPreferences: data.countryPreferences,
      onboardingCompleted: data.onboardingCompleted ?? true,
    },
    update: {
      fieldOfStudy: data.fieldOfStudy,
      degreeLevel: data.degreeLevel,
      gpaOriginal: data.gpaOriginal,
      gpaNormalized: data.gpaNormalized,
      monthlyBudgetEur: data.monthlyBudgetEur,
      nationality: data.nationality,
      languages: data.languages,
      countryPreferences: data.countryPreferences,
      onboardingCompleted: data.onboardingCompleted ?? true,
    },
  });

  return NextResponse.json(profile);
}
