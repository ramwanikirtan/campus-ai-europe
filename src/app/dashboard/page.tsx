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

  useEffect(() => {
    if (!profile?.onboardingCompleted) {
      router.push('/onboarding');
    }
  }, [profile, router]);

  if (!profile?.onboardingCompleted) {
    return null;
  }

  const uniRecs = useMemo(() => getUniversityRecommendations(profile, universities), [profile]);
  const schRecs = useMemo(() => getScholarshipRecommendations(profile, scholarships), [profile]);

  const degreeLevelLabel = profile.degreeLevel === 'bachelors' ? "Bachelor's" : profile.degreeLevel === 'masters' ? "Master's" : 'PhD';

  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-10"
        >
          <h1 className="text-2xl sm:text-3xl font-bold mb-2">
            Welcome back, {profile.userId ? profile.nationality : 'Student'}! 👋
          </h1>
          <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary">
              📚 {profile.fieldOfStudy}
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary">
              🎓 {degreeLevelLabel}
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary">
              💰 €{profile.monthlyBudgetEur}/mo
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary">
              🌍 {profile.countryPreferences?.slice(0, 3).join(', ')}
              {(profile.countryPreferences?.length || 0) > 3 && ` +${profile.countryPreferences.length - 3}`}
            </span>
            <Button variant="ghost" size="sm" asChild className="text-primary">
              <Link href="/onboarding"><Edit3 className="w-3 h-3 mr-1" /> Edit Profile</Link>
            </Button>
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
            <h2 className="text-xl font-bold flex items-center gap-2">
              <GraduationCap className="w-5 h-5 text-primary" />
              Recommended Universities
            </h2>
            <Link href="/universities" className="text-sm text-primary hover:underline flex items-center gap-1">
              View All <ArrowRight className="w-3 h-3" />
            </Link>
          </div>

          {uniRecs.length === 0 ? (
            <div className="glass-card rounded-2xl p-8 text-center">
              <p className="text-muted-foreground">No matching universities found. Try adjusting your profile.</p>
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {uniRecs.slice(0, 8).map((uni, i) => (
                <motion.div
                  key={uni.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 * i }}
                >
                  <Link href={`/universities/${uni.id}`}>
                    <div className="glass-card rounded-2xl p-5 h-full group cursor-pointer">
                      <div className="flex items-start justify-between mb-3">
                        <MatchBadge score={uni.matchScore.overall} />
                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            toggleBookmark(uni.id, 'university');
                            toast(isBookmarked(uni.id) ? 'Removed from tracker' : 'Saved to tracker!');
                          }}
                          className="p-1.5 rounded-full hover:bg-secondary transition-colors"
                        >
                          <Heart
                            className={`w-4 h-4 transition-colors ${isBookmarked(uni.id) ? 'fill-red-500 text-red-500' : 'text-muted-foreground'}`}
                          />
                        </button>
                      </div>
                      <h3 className="font-semibold text-sm mb-1 group-hover:text-primary transition-colors line-clamp-2">
                        {uni.name}
                      </h3>
                      <div className="flex items-center gap-1.5 text-xs text-muted-foreground mb-3">
                        <span>{getCountryFlag(uni.country)}</span>
                        <MapPin className="w-3 h-3" />
                        {uni.city}, {uni.country}
                      </div>
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-muted-foreground">
                          {uni.relevantPrograms[0]?.tuitionPerYearEur === 0
                            ? '🆓 No tuition'
                            : `€${uni.relevantPrograms[0]?.tuitionPerYearEur?.toLocaleString()}/yr`}
                        </span>
                        {uni.rankingQs && (
                          <span className="text-muted-foreground">QS #{uni.rankingQs}</span>
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
            <h2 className="text-xl font-bold flex items-center gap-2">
              <Award className="w-5 h-5 text-primary" />
              Recommended Scholarships
            </h2>
            <Link href="/scholarships" className="text-sm text-primary hover:underline flex items-center gap-1">
              View All <ArrowRight className="w-3 h-3" />
            </Link>
          </div>

          {schRecs.length === 0 ? (
            <div className="glass-card rounded-2xl p-8 text-center">
              <p className="text-muted-foreground">No matching scholarships found. Try adjusting your profile.</p>
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {schRecs.slice(0, 8).map((sch, i) => (
                <motion.div
                  key={sch.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 * i }}
                >
                  <Link href={`/scholarships/${sch.id}`}>
                    <div className="glass-card rounded-2xl p-5 h-full group cursor-pointer">
                      <div className="flex items-start justify-between mb-3">
                        <MatchBadge score={sch.matchScore.overall} />
                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            toggleBookmark(sch.id, 'scholarship');
                            toast(isBookmarked(sch.id) ? 'Removed from tracker' : 'Saved to tracker!');
                          }}
                          className="p-1.5 rounded-full hover:bg-secondary transition-colors"
                        >
                          <Heart
                            className={`w-4 h-4 transition-colors ${isBookmarked(sch.id) ? 'fill-red-500 text-red-500' : 'text-muted-foreground'}`}
                          />
                        </button>
                      </div>
                      <h3 className="font-semibold text-sm mb-1 group-hover:text-primary transition-colors line-clamp-2">
                        {sch.name}
                      </h3>
                      <p className="text-xs text-muted-foreground mb-3">{sch.provider}</p>
                      <div className="text-xs font-medium text-primary mb-2">{sch.amountDescription}</div>
                      <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                        <Calendar className="w-3 h-3" />
                        Deadline: {new Date(sch.applicationDeadline).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
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
