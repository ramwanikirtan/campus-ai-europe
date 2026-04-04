'use client';

import { useMemo, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useAppStore } from '@/lib/store';
import { universities, scholarships } from '@/lib/seed-data';
import { getUniversityRecommendations, getScholarshipRecommendations } from '@/lib/matching';
import { Button } from '@/components/ui/button';
import { Heart, ArrowRight, GraduationCap, Award, MapPin, Calendar, Edit3, TrendingUp, UserCircle, BrainCircuit } from 'lucide-react';
import { toast } from 'sonner';

function MatchBadge({ score }: { score: number }) {
  if (score === 0) return null;
  const color = score >= 85 ? 'match-high-bg match-high' : score >= 70 ? 'match-medium-bg match-medium' : 'match-low-bg match-low';
  return (
    <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-bold border ${color}`}>
      <TrendingUp className="w-3 h-3" />
      {score}%
    </span>
  );
}

function getCountryFlag(country: string): string {
  const flags: Record<string, string> = {
    'Germany': '\u{1F1E9}\u{1F1EA}', 'Netherlands': '\u{1F1F3}\u{1F1F1}', 'Sweden': '\u{1F1F8}\u{1F1EA}', 'Switzerland': '\u{1F1E8}\u{1F1ED}',
    'Austria': '\u{1F1E6}\u{1F1F9}', 'Italy': '\u{1F1EE}\u{1F1F9}', 'Finland': '\u{1F1EB}\u{1F1EE}', 'Poland': '\u{1F1F5}\u{1F1F1}',
    'Czech Republic': '\u{1F1E8}\u{1F1FF}', 'France': '\u{1F1EB}\u{1F1F7}', 'Spain': '\u{1F1EA}\u{1F1F8}', 'Denmark': '\u{1F1E9}\u{1F1F0}',
    'Norway': '\u{1F1F3}\u{1F1F4}', 'Belgium': '\u{1F1E7}\u{1F1EA}', 'Hungary': '\u{1F1ED}\u{1F1FA}', 'Ireland': '\u{1F1EE}\u{1F1EA}',
  };
  return flags[country] || '\u{1F1EA}\u{1F1FA}';
}

export default function DashboardPage() {
  const router = useRouter();
  const { profile, user, isAuthenticated, isLoading, toggleBookmark, isBookmarked } = useAppStore();

  const hasProfile = !!profile?.onboardingCompleted;

  const uniRecs = useMemo(() => {
    if (!profile) {
      return universities.map(u => ({
        ...u,
        matchScore: { overall: 0, fieldOfStudy: 0, degreeLevel: 0, gpa: 0, budget: 0, language: 0, nationality: 0 },
        relevantPrograms: u.programs,
      }));
    }
    return getUniversityRecommendations(profile, universities);
  }, [profile]);

  const schRecs = useMemo(() => {
    if (!profile) {
      return scholarships.map(s => ({
        ...s,
        matchScore: { overall: 0, fieldOfStudy: 0, degreeLevel: 0, gpa: 0, budget: 0, language: 0, nationality: 0 },
      }));
    }
    return getScholarshipRecommendations(profile, scholarships);
  }, [profile]);

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      router.push('/auth/login');
    }
  }, [isLoading, isAuthenticated, router]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin w-8 h-8 border-2 border-primary border-t-transparent rounded-full" />
      </div>
    );
  }

  const degreeLevelLabel = profile?.degreeLevel === 'bachelors' ? "Bachelor's" : profile?.degreeLevel === 'masters' ? "Master's" : profile?.degreeLevel === 'phd' ? 'PhD' : '';

  return (
    <div className="min-h-screen pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome section */}
        <div className="mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold mb-4">
            Welcome{user?.fullName ? `, ${user.fullName.split(' ')[0]}` : ''}!
          </h1>

          {/* Profile completion banner */}
          {!hasProfile && (
            <div className="rounded-2xl p-4 mb-6 border border-primary/30 bg-primary/5">
              <div className="flex items-center gap-3 flex-wrap">
                <UserCircle className="w-5 h-5 text-primary flex-shrink-0" />
                <p className="text-sm flex-1">
                  <span className="font-medium">Complete your profile</span> to get personalized university and scholarship recommendations.
                </p>
                <Button asChild size="sm" className="rounded-xl bg-primary hover:bg-primary/90 border-0">
                  <Link href="/profile">Complete Profile <ArrowRight className="w-3 h-3 ml-1" /></Link>
                </Button>
              </div>
            </div>
          )}

          {/* Profile summary chips */}
          {hasProfile && (
            <div className="glass-card rounded-2xl p-4 border-border/50">
              <div className="flex flex-wrap items-center gap-2 text-sm">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/30 text-primary font-medium">
                  {profile.fieldOfStudy}
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-secondary border border-border/50 font-medium">
                  {degreeLevelLabel}
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-secondary border border-border/50 font-medium">
                  &euro;{profile.monthlyBudgetEur.toLocaleString()}/mo
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-secondary border border-border/50">
                  {profile.countryPreferences?.slice(0, 3).join(', ')}
                  {(profile.countryPreferences?.length || 0) > 3 && (
                    <span className="text-xs text-muted-foreground">+{profile.countryPreferences.length - 3}</span>
                  )}
                </span>
                <Button variant="ghost" size="sm" asChild className="text-primary hover:bg-primary/10">
                  <Link href="/profile"><Edit3 className="w-3 h-3 mr-1" /> Edit</Link>
                </Button>
              </div>
            </div>
          )}
        </div>

        {/* University Recommendations */}
        <section className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
                <GraduationCap className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-xl font-bold">{hasProfile ? 'Recommended Universities' : 'Universities'}</h2>
            </div>
            <Link href="/universities" className="text-sm text-primary hover:underline flex items-center gap-1">
              View All <ArrowRight className="w-3 h-3" />
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {uniRecs.slice(0, 8).map((uni) => (
              <Link key={uni.id} href={`/universities/${uni.id}`}>
                <div className="glass-card rounded-2xl p-4 h-full group cursor-pointer border border-border/50 hover:border-primary/30 transition-all">
                  <div className="flex items-start justify-between mb-3">
                    <MatchBadge score={uni.matchScore.overall} />
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        toggleBookmark(uni.id, 'university');
                        toast(isBookmarked(uni.id) ? 'Removed from tracker' : 'Saved to tracker!');
                      }}
                      className="p-1.5 rounded-full hover:bg-secondary/80 transition-all"
                    >
                      <Heart
                        className={`w-4 h-4 transition-all ${
                          isBookmarked(uni.id)
                            ? 'fill-red-500 text-red-500'
                            : 'text-muted-foreground hover:text-red-400'
                        }`}
                      />
                    </button>
                  </div>
                  <div className="flex items-start gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-secondary/50 flex items-center justify-center text-lg flex-shrink-0">
                      {getCountryFlag(uni.country)}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-sm group-hover:text-primary transition-colors line-clamp-2">
                        {uni.name}
                      </h3>
                      <p className="text-xs text-muted-foreground flex items-center gap-1 mt-1">
                        <MapPin className="w-3 h-3" />
                        {uni.city}
                      </p>
                    </div>
                  </div>
                  <div className="pt-3 border-t border-border/50 flex items-center justify-between text-xs">
                    <span className={`font-medium ${
                      uni.relevantPrograms[0]?.tuitionPerYearEur === 0
                        ? 'text-green-400'
                        : 'text-muted-foreground'
                    }`}>
                      {uni.relevantPrograms[0]?.tuitionPerYearEur === 0
                        ? 'Free tuition'
                        : `\u20AC${uni.relevantPrograms[0]?.tuitionPerYearEur?.toLocaleString()}/yr`}
                    </span>
                    {uni.rankingQs && (
                      <span className="text-muted-foreground bg-secondary/50 px-2 py-1 rounded-full">
                        QS #{uni.rankingQs}
                      </span>
                    )}
                  </div>
                  <Button
                    asChild
                    size="sm"
                    variant="ghost"
                    className="mt-3 w-full text-xs gap-1.5 text-primary hover:bg-primary/10 border border-primary/20 hover:border-primary/40"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Link href={`/dashboard/admissions-officer/new?university=${encodeURIComponent(uni.name)}`}>
                      <BrainCircuit className="w-3 h-3" />
                      Review Application
                    </Link>
                  </Button>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Scholarship Recommendations */}
        <section>
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-yellow-500/80 flex items-center justify-center">
                <Award className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-xl font-bold">{hasProfile ? 'Recommended Scholarships' : 'Scholarships'}</h2>
            </div>
            <Link href="/scholarships" className="text-sm text-primary hover:underline flex items-center gap-1">
              View All <ArrowRight className="w-3 h-3" />
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {schRecs.slice(0, 8).map((sch) => (
              <Link key={sch.id} href={`/scholarships/${sch.id}`}>
                <div className="glass-card rounded-2xl p-4 h-full group cursor-pointer border border-border/50 hover:border-primary/30 transition-all">
                  <div className="flex items-start justify-between mb-3">
                    <MatchBadge score={sch.matchScore.overall} />
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        toggleBookmark(sch.id, 'scholarship');
                        toast(isBookmarked(sch.id) ? 'Removed from tracker' : 'Saved to tracker!');
                      }}
                      className="p-1.5 rounded-full hover:bg-secondary/80 transition-all"
                    >
                      <Heart
                        className={`w-4 h-4 transition-all ${
                          isBookmarked(sch.id)
                            ? 'fill-red-500 text-red-500'
                            : 'text-muted-foreground hover:text-red-400'
                        }`}
                      />
                    </button>
                  </div>
                  <div className="flex items-start gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-yellow-500/10 flex items-center justify-center flex-shrink-0">
                      <Award className="w-5 h-5 text-yellow-500" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-sm group-hover:text-primary transition-colors line-clamp-2">
                        {sch.name}
                      </h3>
                      <p className="text-xs text-muted-foreground mt-1">{sch.provider}</p>
                    </div>
                  </div>
                  <div className="p-2 rounded-lg bg-yellow-500/10 border border-yellow-500/20 mb-3">
                    <p className="text-xs font-medium text-yellow-500">{sch.amountDescription}</p>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <div className="flex items-center gap-1.5 bg-secondary/50 px-2 py-1.5 rounded-lg flex-1">
                      <Calendar className="w-3 h-3" />
                      <span className="truncate">
                        {new Date(sch.applicationDeadline).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
