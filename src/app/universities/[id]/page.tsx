'use client';

import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { useAppStore } from '@/lib/store';
import { universities, scholarships } from '@/lib/seed-data';
import { getUniversityRecommendations, getScholarshipRecommendations } from '@/lib/matching';
import { useMemo, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Heart, ExternalLink, MapPin, Calendar, TrendingUp, ChevronDown, ArrowLeft, Clock, BookOpen, DollarSign, CheckCircle, AlertTriangle, XCircle, Award } from 'lucide-react';
import { motion } from 'framer-motion';
import { toast } from 'sonner';

function getCountryFlag(c: string) {
  const flags: Record<string, string> = { 'Germany': '🇩🇪', 'Netherlands': '🇳🇱', 'Sweden': '🇸🇪', 'Switzerland': '🇨🇭', 'Austria': '🇦🇹', 'Italy': '🇮🇹', 'Finland': '🇫🇮', 'Poland': '🇵🇱', 'Czech Republic': '🇨🇿' };
  return flags[c] || '🇪🇺';
}

function EligibilityIcon({ meets }: { meets: 'yes' | 'partial' | 'no' }) {
  if (meets === 'yes') return <CheckCircle className="w-4 h-4 text-green-400" />;
  if (meets === 'partial') return <AlertTriangle className="w-4 h-4 text-yellow-400" />;
  return <XCircle className="w-4 h-4 text-red-400" />;
}

export default function UniversityDetailPage() {
  const params = useParams();
  const router = useRouter();
  const { profile, isAuthenticated, toggleBookmark, isBookmarked } = useAppStore();
  const id = params.id as string;

  const allRecs = useMemo(() => {
    if (!profile) return [];
    return getUniversityRecommendations(profile, universities);
  }, [profile]);

  const uni = allRecs.find((u) => u.id === id) || universities.find((u) => u.id === id);
  const uniWithMatch = allRecs.find((u) => u.id === id);

  const relatedScholarships = useMemo(() => {
    if (!profile || !uni) return [];
    const schRecs = getScholarshipRecommendations(profile, scholarships);
    return schRecs.filter((s) => s.linkedUniversityIds.includes(uni.id));
  }, [profile, uni]);

  useEffect(() => {
    if (!isAuthenticated || !profile) {
      router.push('/auth/login');
    }
  }, [isAuthenticated, profile, router]);

  if (!isAuthenticated || !profile) {
    return null;
  }

  if (!uni) return (
    <div className="min-h-screen flex items-center justify-center">
      <p className="text-muted-foreground">University not found</p>
    </div>
  );

  const matchScore = uniWithMatch?.matchScore;
  const relevantPrograms = uni.programs.filter((p) => p.degreeLevel === profile.degreeLevel);
  const otherPrograms = uni.programs.filter((p) => p.degreeLevel !== profile.degreeLevel);

  const daysUntilDeadline = (date: string) => {
    const diff = new Date(date).getTime() - Date.now();
    return Math.ceil(diff / (1000 * 60 * 60 * 24));
  };

  return (
    <div className="min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back */}
        <Button variant="ghost" size="sm" onClick={() => router.back()} className="mb-6 text-muted-foreground">
          <ArrowLeft className="w-4 h-4 mr-1" /> Back
        </Button>

        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold mb-2">{uni.name}</h1>
              <div className="flex items-center gap-3 text-sm text-muted-foreground flex-wrap">
                <span className="flex items-center gap-1">{getCountryFlag(uni.country)} <MapPin className="w-3 h-3" /> {uni.city}, {uni.country}</span>
                {uni.rankingQs && <span>QS #{uni.rankingQs}</span>}
                {uni.rankingThe && <span>THE #{uni.rankingThe}</span>}
              </div>
            </div>
            <div className="flex gap-3">
              <Button
                variant="outline"
                onClick={() => {
                  toggleBookmark(uni.id, 'university');
                  toast(isBookmarked(uni.id) ? 'Removed from tracker' : 'Saved to tracker!');
                }}
                className={`rounded-xl border-border ${isBookmarked(uni.id) ? 'border-red-500/50 text-red-400' : ''}`}
              >
                <Heart className={`w-4 h-4 mr-2 ${isBookmarked(uni.id) ? 'fill-red-500 text-red-500' : ''}`} />
                {isBookmarked(uni.id) ? 'Saved' : 'Save to Tracker'}
              </Button>
              <Button asChild className="rounded-xl bg-gradient-to-r from-[oklch(0.70_0.18_250)] to-[oklch(0.65_0.18_290)] hover:opacity-90 border-0">
                <a href={uni.websiteUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-4 h-4 mr-2" /> Visit Website
                </a>
              </Button>
            </div>
          </div>
        </motion.div>

        {/* Match Score Banner */}
        {matchScore && (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="glass-card rounded-2xl p-6 mb-8">
            <div className="flex items-center gap-4 mb-4">
              <div className={`text-3xl font-bold ${matchScore.overall >= 85 ? 'match-high' : matchScore.overall >= 70 ? 'match-medium' : 'match-low'}`}>
                {matchScore.overall}% Match
              </div>
              <span className="text-sm text-muted-foreground">for your profile</span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
              {[
                { label: 'Field', score: matchScore.fieldOfStudy },
                { label: 'Degree', score: matchScore.degreeLevel },
                { label: 'GPA', score: matchScore.gpa },
                { label: 'Budget', score: matchScore.budget },
                { label: 'Language', score: matchScore.language },
                { label: 'Nationality', score: matchScore.nationality },
              ].map((f) => (
                <div key={f.label} className="text-center">
                  <div className="text-xs text-muted-foreground mb-1">{f.label}</div>
                  <div className="h-2 bg-secondary rounded-full overflow-hidden">
                    <div
                      className={`h-full rounded-full ${f.score >= 80 ? 'bg-green-400' : f.score >= 50 ? 'bg-yellow-400' : 'bg-red-400'}`}
                      style={{ width: `${f.score}%` }}
                    />
                  </div>
                  <div className="text-xs font-medium mt-1">{f.score}%</div>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Description */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.15 }} className="mb-8">
          <p className="text-muted-foreground leading-relaxed">{uni.description}</p>
        </motion.div>

        {/* Programs */}
        <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="mb-8">
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-primary" />
            Programs Matching Your Profile
          </h2>
          {relevantPrograms.length === 0 ? (
            <p className="text-muted-foreground text-sm">No programs match your current degree level.</p>
          ) : (
            <div className="space-y-4">
              {relevantPrograms.map((prog) => {
                const days = daysUntilDeadline(prog.applicationDeadline);
                const userGpa = profile.gpaNormalized;
                const gpaStatus = userGpa >= prog.minGpaRequired ? 'yes' : userGpa >= prog.minGpaRequired - 0.3 ? 'partial' : 'no';
                const userLang = profile.languages.find((l) => l.language.toLowerCase() === prog.requiredLanguage.toLowerCase());
                const langLevels: Record<string, number> = { 'A1': 1, 'A2': 2, 'B1': 3, 'B2': 4, 'C1': 5, 'C2': 6, 'native': 7 };
                const langStatus = userLang ? (langLevels[userLang.level] >= langLevels[prog.requiredLanguageLevel] ? 'yes' : 'partial') : 'no';

                return (
                  <div key={prog.id} className="glass-card rounded-2xl p-5">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
                      <h3 className="font-semibold">{prog.name}</h3>
                      <span className={`text-sm font-medium px-3 py-1 rounded-full ${days > 60 ? 'match-high-bg' : days > 14 ? 'match-medium-bg' : 'bg-red-500/15 text-red-400'} border`}>
                        <Calendar className="w-3 h-3 inline mr-1" />
                        {days > 0 ? `${days} days left` : 'Deadline passed'}
                      </span>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm mb-4">
                      <div><span className="text-muted-foreground block text-xs">Language</span>{prog.languageOfInstruction}</div>
                      <div><span className="text-muted-foreground block text-xs">Duration</span>{prog.durationMonths} months</div>
                      <div><span className="text-muted-foreground block text-xs">Tuition/year</span>{prog.tuitionPerYearEur === 0 ? 'Free' : `€${prog.tuitionPerYearEur.toLocaleString()}`}</div>
                      <div><span className="text-muted-foreground block text-xs">Deadline</span>{new Date(prog.applicationDeadline).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</div>
                    </div>
                    <div className="border-t border-border pt-3">
                      <p className="text-xs font-semibold text-muted-foreground mb-2">ADMISSION REQUIREMENTS</p>
                      <div className="flex flex-wrap gap-4 text-sm">
                        <span className="flex items-center gap-1.5"><EligibilityIcon meets={gpaStatus as 'yes'|'partial'|'no'} /> GPA ≥ {prog.minGpaRequired} (You: {userGpa})</span>
                        <span className="flex items-center gap-1.5"><EligibilityIcon meets={langStatus as 'yes'|'partial'|'no'} /> {prog.requiredLanguage} {prog.requiredLanguageLevel}+</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </motion.section>

        {/* Costs */}
        <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 }} className="mb-8">
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <DollarSign className="w-5 h-5 text-primary" />
            Estimated Costs
          </h2>
          <div className="glass-card rounded-2xl p-6">
            <div className="grid sm:grid-cols-3 gap-6">
              <div className="text-center">
                <p className="text-xs text-muted-foreground mb-1">Tuition / Year</p>
                <p className="text-2xl font-bold">{relevantPrograms[0]?.tuitionPerYearEur === 0 ? 'Free' : `€${relevantPrograms[0]?.tuitionPerYearEur?.toLocaleString()}`}</p>
              </div>
              <div className="text-center">
                <p className="text-xs text-muted-foreground mb-1">Living Cost / Month</p>
                <p className="text-2xl font-bold">~€{uni.estimatedMonthlyLivingCostEur.toLocaleString()}</p>
              </div>
              <div className="text-center">
                <p className="text-xs text-muted-foreground mb-1">Total / Year (est.)</p>
                <p className="text-2xl font-bold">
                  €{((relevantPrograms[0]?.tuitionPerYearEur || 0) + uni.estimatedMonthlyLivingCostEur * 12).toLocaleString()}
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Linked Scholarships */}
        {relatedScholarships.length > 0 && (
          <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
            <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
              <Award className="w-5 h-5 text-primary" />
              Available Scholarships
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {relatedScholarships.map((sch) => (
                <Link key={sch.id} href={`/scholarships/${sch.id}`}>
                  <div className="glass-card rounded-2xl p-5 cursor-pointer">
                    <div className="flex items-center justify-between mb-2">
                      <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-bold border ${sch.matchScore.overall >= 85 ? 'match-high-bg match-high' : 'match-medium-bg match-medium'}`}>
                        <TrendingUp className="w-3 h-3" /> {sch.matchScore.overall}%
                      </span>
                    </div>
                    <h3 className="font-semibold text-sm mb-1">{sch.name}</h3>
                    <p className="text-xs text-primary font-medium">{sch.amountDescription}</p>
                  </div>
                </Link>
              ))}
            </div>
          </motion.section>
        )}
      </div>
    </div>
  );
}
