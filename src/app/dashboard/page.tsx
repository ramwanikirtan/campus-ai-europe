'use client';

import { useMemo, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useAppStore } from '@/lib/store';
import { universities, scholarships } from '@/lib/seed-data';
import { getUniversityRecommendations, getScholarshipRecommendations } from '@/lib/matching';
import { Button } from '@/components/ui/button';
import { Heart, ArrowRight, GraduationCap, Award, MapPin, Calendar, Edit3, TrendingUp } from 'lucide-react';
import { toast } from 'sonner';

function MatchBadge({ score }: { score: number }) {
  const color = score >= 85 ? 'text-green-400 bg-green-400/10 border-green-400/25' : score >= 70 ? 'text-yellow-400 bg-yellow-400/10 border-yellow-400/25' : 'text-muted-foreground bg-secondary border-border/50';
  return (
    <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-bold border ${color}`}>
      <TrendingUp className="w-3 h-3" />
      {score}%
    </span>
  );
}

function getCountryFlag(country: string): string {
  const flags: Record<string, string> = {
    'Germany': '🇩🇪', 'Netherlands': '🇳🇱', 'Sweden': '🇸🇪', 'Switzerland': '🇨🇭',
    'Austria': '🇦🇹', 'Italy': '🇮🇹', 'Finland': '🇫🇮', 'Poland': '🇵🇱',
    'Czech Republic': '🇨🇿', 'France': '🇫🇷', 'Spain': '🇪🇸', 'Denmark': '🇩🇰',
    'Norway': '🇳🇴', 'Belgium': '🇧🇪', 'Hungary': '🇭🇺', 'Ireland': '🇮🇪',
  };
  return flags[country] || '🇪🇺';
}

export default function DashboardPage() {
  const router = useRouter();
  const { profile, user, isLoading, toggleBookmark, isBookmarked } = useAppStore();

  const uniRecs = useMemo(() => {
    if (!profile) return [];
    return getUniversityRecommendations(profile, universities);
  }, [profile]);
  const schRecs = useMemo(() => {
    if (!profile) return [];
    return getScholarshipRecommendations(profile, scholarships);
  }, [profile]);

  useEffect(() => {
    if (!isLoading && !profile?.onboardingCompleted) {
      router.push('/onboarding');
    }
  }, [isLoading, profile, router]);

  if (isLoading || !profile?.onboardingCompleted) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin w-8 h-8 border-2 border-primary border-t-transparent rounded-full" />
      </div>
    );
  }

  const degreeLevelLabel = profile.degreeLevel === 'bachelors' ? "Bachelor's" : profile.degreeLevel === 'masters' ? "Master's" : 'PhD';

  return (
    <div className="min-h-screen pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome section */}
        <div className="mb-10">
          <h1 className="text-2xl sm:text-3xl font-bold mb-4">
            Welcome back, <span className="text-primary">{user?.fullName?.split(' ')[0] || 'Student'}</span>
          </h1>
          <div className="rounded-xl bg-card border border-border p-4">
            <div className="flex flex-wrap items-center gap-2 text-sm">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary font-medium">
                {profile.fieldOfStudy}
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-secondary border border-border text-foreground font-medium">
                {degreeLevelLabel}
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-secondary border border-border text-foreground font-medium">
                &euro;{profile.monthlyBudgetEur.toLocaleString()}/mo
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-secondary border border-border text-foreground font-medium">
                {profile.countryPreferences?.slice(0, 3).join(', ')}
                {(profile.countryPreferences?.length || 0) > 3 && (
                  <span className="text-xs text-muted-foreground ml-1">+{profile.countryPreferences.length - 3}</span>
                )}
              </span>
              <Button variant="ghost" size="sm" asChild className="text-primary hover:bg-primary/10">
                <Link href="/onboarding"><Edit3 className="w-3 h-3 mr-1" /> Edit</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* University Recommendations */}
        <section className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-primary flex items-center justify-center">
                <GraduationCap className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-xl font-bold">Recommended Universities</h2>
            </div>
            <Link href="/universities" className="text-sm text-primary hover:underline flex items-center gap-1">
              View All <ArrowRight className="w-3 h-3" />
            </Link>
          </div>

          {uniRecs.length === 0 ? (
            <div className="rounded-xl bg-card border border-border p-12 text-center">
              <GraduationCap className="w-10 h-10 text-muted-foreground mx-auto mb-3" />
              <p className="text-muted-foreground mb-4">No matching universities found.</p>
              <Button variant="outline" asChild>
                <Link href="/onboarding">Adjust your profile</Link>
              </Button>
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {uniRecs.slice(0, 8).map((uni) => (
                <Link key={uni.id} href={`/universities/${uni.id}`}>
                  <div className="rounded-xl bg-card border border-border p-4 h-full hover:border-primary/40 transition-colors">
                    <div className="flex items-start justify-between mb-3">
                      <MatchBadge score={uni.matchScore.overall} />
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          toggleBookmark(uni.id, 'university');
                          toast(isBookmarked(uni.id) ? 'Removed from tracker' : 'Saved to tracker');
                        }}
                        className="p-1.5 rounded-full hover:bg-secondary transition-colors"
                      >
                        <Heart
                          className={`w-4 h-4 ${
                            isBookmarked(uni.id)
                              ? 'fill-red-500 text-red-500'
                              : 'text-muted-foreground hover:text-red-400'
                          }`}
                        />
                      </button>
                    </div>
                    <div className="flex items-start gap-3 mb-3">
                      <div className="w-9 h-9 rounded-lg bg-secondary flex items-center justify-center text-lg flex-shrink-0">
                        {getCountryFlag(uni.country)}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-sm line-clamp-2">{uni.name}</h3>
                        <p className="text-xs text-muted-foreground flex items-center gap-1 mt-1">
                          <MapPin className="w-3 h-3" /> {uni.city}
                        </p>
                      </div>
                    </div>
                    <div className="pt-3 border-t border-border flex items-center justify-between text-xs">
                      <span className={`font-medium ${
                        uni.relevantPrograms[0]?.tuitionPerYearEur === 0 ? 'text-green-400' : 'text-muted-foreground'
                      }`}>
                        {uni.relevantPrograms[0]?.tuitionPerYearEur === 0
                          ? 'Free tuition'
                          : `\u20AC${uni.relevantPrograms[0]?.tuitionPerYearEur?.toLocaleString()}/yr`}
                      </span>
                      {uni.rankingQs && (
                        <span className="text-muted-foreground bg-secondary px-2 py-0.5 rounded-full">
                          QS #{uni.rankingQs}
                        </span>
                      )}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </section>

        {/* Scholarship Recommendations */}
        <section>
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-gold flex items-center justify-center">
                <Award className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-xl font-bold">Recommended Scholarships</h2>
            </div>
            <Link href="/scholarships" className="text-sm text-primary hover:underline flex items-center gap-1">
              View All <ArrowRight className="w-3 h-3" />
            </Link>
          </div>

          {schRecs.length === 0 ? (
            <div className="rounded-xl bg-card border border-border p-12 text-center">
              <Award className="w-10 h-10 text-muted-foreground mx-auto mb-3" />
              <p className="text-muted-foreground mb-4">No matching scholarships found.</p>
              <Button variant="outline" asChild>
                <Link href="/onboarding">Adjust your profile</Link>
              </Button>
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {schRecs.slice(0, 8).map((sch) => (
                <Link key={sch.id} href={`/scholarships/${sch.id}`}>
                  <div className="rounded-xl bg-card border border-border p-4 h-full hover:border-primary/40 transition-colors">
                    <div className="flex items-start justify-between mb-3">
                      <MatchBadge score={sch.matchScore.overall} />
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          toggleBookmark(sch.id, 'scholarship');
                          toast(isBookmarked(sch.id) ? 'Removed from tracker' : 'Saved to tracker');
                        }}
                        className="p-1.5 rounded-full hover:bg-secondary transition-colors"
                      >
                        <Heart
                          className={`w-4 h-4 ${
                            isBookmarked(sch.id)
                              ? 'fill-red-500 text-red-500'
                              : 'text-muted-foreground hover:text-red-400'
                          }`}
                        />
                      </button>
                    </div>
                    <div className="flex items-start gap-3 mb-3">
                      <div className="w-9 h-9 rounded-lg bg-gold/10 flex items-center justify-center flex-shrink-0">
                        <Award className="w-5 h-5 text-gold" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-sm line-clamp-2">{sch.name}</h3>
                        <p className="text-xs text-muted-foreground mt-1">{sch.provider}</p>
                      </div>
                    </div>
                    <div className="p-2 rounded-lg bg-gold/8 border border-gold/15 mb-3">
                      <p className="text-xs font-medium text-gold">{sch.amountDescription}</p>
                    </div>
                    <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                      <Calendar className="w-3 h-3" />
                      {new Date(sch.applicationDeadline).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </section>
      </div>
    </div>
  );
}
