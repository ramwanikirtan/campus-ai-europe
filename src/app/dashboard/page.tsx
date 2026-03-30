'use client';

import { useMemo, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useAppStore } from '@/lib/store';
import { universities, scholarships } from '@/lib/seed-data';
import { getUniversityRecommendations, getScholarshipRecommendations } from '@/lib/matching';
import { Button } from '@/components/ui/button';
import { Heart, ArrowRight, GraduationCap, Award, MapPin, Calendar, Edit3, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';
import { toast } from 'sonner';

function MatchBadge({ score }: { score: number }) {
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
    'Germany': '🇩🇪', 'Netherlands': '🇳🇱', 'Sweden': '🇸🇪', 'Switzerland': '🇨🇭',
    'Austria': '🇦🇹', 'Italy': '🇮🇹', 'Finland': '🇫🇮', 'Poland': '🇵🇱',
    'Czech Republic': '🇨🇿', 'France': '🇫🇷', 'Spain': '🇪🇸', 'Denmark': '🇩🇰',
    'Norway': '🇳🇴', 'Belgium': '🇧🇪', 'Hungary': '🇭🇺', 'Ireland': '🇮🇪',
  };
  return flags[country] || '🇪🇺';
}

export default function DashboardPage() {
  const router = useRouter();
  const { profile, toggleBookmark, isBookmarked } = useAppStore();

  const uniRecs = useMemo(() => {
    if (!profile) return [];
    return getUniversityRecommendations(profile, universities);
  }, [profile]);
  const schRecs = useMemo(() => {
    if (!profile) return [];
    return getScholarshipRecommendations(profile, scholarships);
  }, [profile]);

  useEffect(() => {
    if (!profile?.onboardingCompleted) {
      router.push('/onboarding');
    }
  }, [profile, router]);

  if (!profile?.onboardingCompleted) {
    return null;
  }

  const degreeLevelLabel = profile.degreeLevel === 'bachelors' ? "Bachelor's" : profile.degreeLevel === 'masters' ? "Master's" : 'PhD';

  return (
    <div className="min-h-screen pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-10"
        >
          <motion.h1
            className="text-2xl sm:text-3xl font-bold mb-4"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            Welcome back, <span className="gradient-text">{profile.nationality || 'Student'}</span>! 👋
          </motion.h1>
          <div className="glass-card rounded-2xl p-4 border-border/50">
            <div className="flex flex-wrap items-center gap-2 text-sm">
              <motion.span
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gradient-to-r from-[oklch(0.70_0.18_250_/_0.15)] to-[oklch(0.65_0.18_290_/_0.15)] border border-primary/30 text-primary font-medium"
              >
                📚 {profile.fieldOfStudy}
              </motion.span>
              <motion.span
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.05 }}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gradient-to-r from-[oklch(0.65_0.16_160_/_0.15)] to-[oklch(0.55_0.18_190_/_0.15)] border border-[oklch(0.65_0.16_160_/_0.3)] text-[oklch(0.65_0.16_160)] font-medium"
              >
                🎓 {degreeLevelLabel}
              </motion.span>
              <motion.span
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 }}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gradient-to-r from-[oklch(0.65_0.15_50_/_0.15)] to-[oklch(0.55_0.17_30_/_0.15)] border border-[oklch(0.65_0.15_50_/_0.3)] text-[oklch(0.65_0.15_50)] font-medium"
              >
                💰 €{profile.monthlyBudgetEur.toLocaleString()}/mo
              </motion.span>
              <motion.span
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.15 }}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-secondary border border-border/50"
              >
                🌍 {profile.countryPreferences?.slice(0, 3).join(', ')}
                {(profile.countryPreferences?.length || 0) > 3 && (
                  <span className="text-xs text-muted-foreground">+{profile.countryPreferences.length - 3}</span>
                )}
              </motion.span>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
              >
                <Button variant="ghost" size="sm" asChild className="text-primary hover:bg-primary/10">
                  <Link href="/onboarding"><Edit3 className="w-3 h-3 mr-1" /> Edit Profile</Link>
                </Button>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* University Recommendations */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-12"
        >
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[oklch(0.70_0.18_250)] to-[oklch(0.65_0.18_290)] flex items-center justify-center shadow-lg shadow-primary/20">
                <GraduationCap className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-xl font-bold">Recommended Universities</h2>
            </div>
            <Link href="/universities" className="text-sm text-primary hover:underline flex items-center gap-1 group">
              View All <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {uniRecs.length === 0 ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="glass-card rounded-2xl p-12 text-center"
            >
              <div className="w-16 h-16 rounded-2xl bg-secondary flex items-center justify-center mx-auto mb-4">
                <GraduationCap className="w-8 h-8 text-muted-foreground" />
              </div>
              <p className="text-muted-foreground mb-4">No matching universities found.</p>
              <Button variant="outline" asChild className="rounded-xl">
                <Link href="/onboarding">Adjust your profile</Link>
              </Button>
            </motion.div>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {uniRecs.slice(0, 8).map((uni, i) => (
                <motion.div
                  key={uni.id}
                  initial={{ opacity: 0, y: 20, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ delay: 0.05 * i }}
                >
                  <Link href={`/universities/${uni.id}`}>
                    <div className="glass-card rounded-2xl p-4 h-full group cursor-pointer border border-border/50 hover:border-primary/30 transition-all">
                      <div className="flex items-start justify-between mb-3">
                        <MatchBadge score={uni.matchScore.overall} />
                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            toggleBookmark(uni.id, 'university');
                            toast(isBookmarked(uni.id) ? 'Removed from tracker' : 'Saved to tracker! ✨');
                          }}
                          className="p-1.5 rounded-full hover:bg-secondary/80 transition-all hover:scale-110 active:scale-90"
                        >
                          <Heart
                            className={`w-4 h-4 transition-all ${
                              isBookmarked(uni.id)
                                ? 'fill-red-500 text-red-500 scale-110'
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
                            ? '🆓 Free tuition'
                            : `€${uni.relevantPrograms[0]?.tuitionPerYearEur?.toLocaleString()}/yr`}
                        </span>
                        {uni.rankingQs && (
                          <span className="text-muted-foreground bg-secondary/50 px-2 py-1 rounded-full">
                            QS #{uni.rankingQs}
                          </span>
                        )}
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          )}
        </motion.section>

        {/* Scholarship Recommendations */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[oklch(0.65_0.16_160)] to-[oklch(0.55_0.18_190)] flex items-center justify-center shadow-lg shadow-[oklch(0.65_0.16_160_/_0.25)]">
                <Award className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-xl font-bold">Recommended Scholarships</h2>
            </div>
            <Link href="/scholarships" className="text-sm text-primary hover:underline flex items-center gap-1 group">
              View All <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {schRecs.length === 0 ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="glass-card rounded-2xl p-12 text-center"
            >
              <div className="w-16 h-16 rounded-2xl bg-secondary flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-muted-foreground" />
              </div>
              <p className="text-muted-foreground mb-4">No matching scholarships found.</p>
              <Button variant="outline" asChild className="rounded-xl">
                <Link href="/onboarding">Adjust your profile</Link>
              </Button>
            </motion.div>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {schRecs.slice(0, 8).map((sch, i) => (
                <motion.div
                  key={sch.id}
                  initial={{ opacity: 0, y: 20, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ delay: 0.05 * i + 0.1 }}
                >
                  <Link href={`/scholarships/${sch.id}`}>
                    <div className="glass-card rounded-2xl p-4 h-full group cursor-pointer border border-border/50 hover:border-[oklch(0.65_0.16_160_/_0.3)] transition-all">
                      <div className="flex items-start justify-between mb-3">
                        <MatchBadge score={sch.matchScore.overall} />
                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            toggleBookmark(sch.id, 'scholarship');
                            toast(isBookmarked(sch.id) ? 'Removed from tracker' : 'Saved to tracker! ✨');
                          }}
                          className="p-1.5 rounded-full hover:bg-secondary/80 transition-all hover:scale-110 active:scale-90"
                        >
                          <Heart
                            className={`w-4 h-4 transition-all ${
                              isBookmarked(sch.id)
                                ? 'fill-red-500 text-red-500 scale-110'
                                : 'text-muted-foreground hover:text-red-400'
                            }`}
                          />
                        </button>
                      </div>
                      <div className="flex items-start gap-3 mb-3">
                        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[oklch(0.65_0.16_160_/_0.15)] to-[oklch(0.55_0.18_190_/_0.15)] flex items-center justify-center flex-shrink-0">
                          <Award className="w-5 h-5 text-[oklch(0.65_0.16_160)]" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="font-semibold text-sm group-hover:text-primary transition-colors line-clamp-2">
                            {sch.name}
                          </h3>
                          <p className="text-xs text-muted-foreground mt-1">{sch.provider}</p>
                        </div>
                      </div>
                      <div className="p-2 rounded-lg bg-[oklch(0.65_0.16_160_/_0.1)] border border-[oklch(0.65_0.16_160_/_0.2)] mb-3">
                        <p className="text-xs font-medium text-[oklch(0.65_0.16_160)]">{sch.amountDescription}</p>
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
                </motion.div>
              ))}
            </div>
          )}
        </motion.section>
      </div>
    </div>
  );
}
