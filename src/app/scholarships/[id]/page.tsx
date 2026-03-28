'use client';

import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { useAppStore } from '@/lib/store';
import { universities, scholarships } from '@/lib/seed-data';
import { getScholarshipRecommendations } from '@/lib/matching';
import { useMemo } from 'react';
import { Button } from '@/components/ui/button';
import { Heart, ExternalLink, Calendar, TrendingUp, ArrowLeft, CheckCircle, AlertTriangle, XCircle, Building2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { toast } from 'sonner';

function EligibilityIcon({ meets }: { meets: 'yes' | 'partial' | 'no' }) {
  if (meets === 'yes') return <CheckCircle className="w-4 h-4 text-green-400" />;
  if (meets === 'partial') return <AlertTriangle className="w-4 h-4 text-yellow-400" />;
  return <XCircle className="w-4 h-4 text-red-400" />;
}

export default function ScholarshipDetailPage() {
  const params = useParams();
  const router = useRouter();
  const { profile, isAuthenticated, toggleBookmark, isBookmarked } = useAppStore();
  const id = params.id as string;

  if (!isAuthenticated || !profile) {
    if (typeof window !== 'undefined') router.push('/auth/login');
    return null;
  }

  const allRecs = useMemo(() => getScholarshipRecommendations(profile, scholarships), [profile]);
  const sch = allRecs.find((s) => s.id === id) || scholarships.find((s) => s.id === id);

  if (!sch) return (
    <div className="min-h-screen flex items-center justify-center">
      <p className="text-muted-foreground">Scholarship not found</p>
    </div>
  );

  const schWithMatch = allRecs.find((s) => s.id === id);
  const matchScore = schWithMatch?.matchScore;

  const daysLeft = Math.ceil((new Date(sch.applicationDeadline).getTime() - Date.now()) / (1000 * 60 * 60 * 24));

  // Eligibility checks
  const natCheck = sch.eligibilityNationalities === 'all' || (sch.eligibilityNationalities as string[]).includes(profile.nationality);
  const gpaCheck = profile.gpaNormalized >= sch.eligibilityMinGpa;
  const fieldCheck = sch.eligibilityFields === 'all' || (sch.eligibilityFields as string[]).some(f => f.toLowerCase() === profile.fieldOfStudy.toLowerCase());
  const degreeCheck = sch.eligibilityDegreeLevels.includes(profile.degreeLevel);

  const linkedUnis = universities.filter((u) => sch.linkedUniversityIds.includes(u.id));

  return (
    <div className="min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Button variant="ghost" size="sm" onClick={() => router.back()} className="mb-6 text-muted-foreground">
          <ArrowLeft className="w-4 h-4 mr-1" /> Back
        </Button>

        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold mb-2">{sch.name}</h1>
              <p className="text-muted-foreground">{sch.provider}</p>
              <div className="mt-2 text-lg font-bold text-primary">{sch.amountDescription}</div>
            </div>
            <div className="flex gap-3">
              <Button
                variant="outline"
                onClick={() => { toggleBookmark(sch.id, 'scholarship'); toast(isBookmarked(sch.id) ? 'Removed' : 'Saved!'); }}
                className={`rounded-xl ${isBookmarked(sch.id) ? 'border-red-500/50 text-red-400' : ''}`}
              >
                <Heart className={`w-4 h-4 mr-2 ${isBookmarked(sch.id) ? 'fill-red-500 text-red-500' : ''}`} />
                {isBookmarked(sch.id) ? 'Saved' : 'Save'}
              </Button>
              <Button asChild className="rounded-xl bg-gradient-to-r from-[oklch(0.70_0.18_250)] to-[oklch(0.65_0.18_290)] hover:opacity-90 border-0">
                <a href={sch.applicationUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-4 h-4 mr-2" /> Apply Now
                </a>
              </Button>
            </div>
          </div>
        </motion.div>

        {/* Match Score */}
        {matchScore && (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="glass-card rounded-2xl p-6 mb-8">
            <div className="flex items-center gap-4 mb-4">
              <div className={`text-3xl font-bold ${matchScore.overall >= 85 ? 'match-high' : matchScore.overall >= 70 ? 'match-medium' : 'match-low'}`}>
                {matchScore.overall}% Match
              </div>
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
                    <div className={`h-full rounded-full ${f.score >= 80 ? 'bg-green-400' : f.score >= 50 ? 'bg-yellow-400' : 'bg-red-400'}`} style={{ width: `${f.score}%` }} />
                  </div>
                  <div className="text-xs font-medium mt-1">{f.score}%</div>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Eligibility */}
        <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }} className="glass-card rounded-2xl p-6 mb-8">
          <h2 className="text-lg font-bold mb-4">Eligibility Check</h2>
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-sm">
              <EligibilityIcon meets={natCheck ? 'yes' : 'no'} />
              <span>Nationality: {sch.eligibilityNationalities === 'all' ? 'Open to all' : (sch.eligibilityNationalities as string[]).join(', ')}</span>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <EligibilityIcon meets={gpaCheck ? 'yes' : profile.gpaNormalized >= sch.eligibilityMinGpa - 0.3 ? 'partial' : 'no'} />
              <span>Minimum GPA: {sch.eligibilityMinGpa}/4.0 (You: {profile.gpaNormalized}/4.0)</span>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <EligibilityIcon meets={fieldCheck ? 'yes' : 'no'} />
              <span>Field: {sch.eligibilityFields === 'all' ? 'All fields' : (sch.eligibilityFields as string[]).join(', ')}</span>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <EligibilityIcon meets={degreeCheck ? 'yes' : 'no'} />
              <span>Degree: {sch.eligibilityDegreeLevels.join(', ')}</span>
            </div>
            {sch.eligibilityOther && (
              <div className="flex items-center gap-3 text-sm">
                <AlertTriangle className="w-4 h-4 text-yellow-400" />
                <span>{sch.eligibilityOther}</span>
              </div>
            )}
          </div>
        </motion.section>

        {/* Benefits + Deadline */}
        <div className="grid sm:grid-cols-2 gap-6 mb-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="glass-card rounded-2xl p-6">
            <h2 className="text-lg font-bold mb-3">Benefits</h2>
            <p className="text-sm text-muted-foreground leading-relaxed">{sch.coverage}</p>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 }} className="glass-card rounded-2xl p-6">
            <h2 className="text-lg font-bold mb-3">Deadline</h2>
            <div className="flex items-center gap-2 mb-2">
              <Calendar className="w-5 h-5 text-primary" />
              <span className="text-lg font-semibold">
                {new Date(sch.applicationDeadline).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
              </span>
            </div>
            <p className={`text-sm font-medium ${daysLeft > 60 ? 'text-green-400' : daysLeft > 14 ? 'text-yellow-400' : 'text-red-400'}`}>
              {daysLeft > 0 ? `${daysLeft} days remaining` : 'Deadline passed'}
            </p>
          </motion.div>
        </div>

        {/* Linked Universities */}
        {linkedUnis.length > 0 && (
          <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
            <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
              <Building2 className="w-5 h-5 text-primary" />
              Linked Universities
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {linkedUnis.map((u) => (
                <Link key={u.id} href={`/universities/${u.id}`}>
                  <div className="glass-card rounded-2xl p-5 cursor-pointer">
                    <h3 className="font-semibold text-sm mb-1">{u.name}</h3>
                    <p className="text-xs text-muted-foreground">{u.city}, {u.country}</p>
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
