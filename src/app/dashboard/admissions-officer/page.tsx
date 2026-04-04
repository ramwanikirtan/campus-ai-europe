'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useAppStore } from '@/lib/store';
import { Button } from '@/components/ui/button';
import { ShieldCheck, Plus, ChevronRight, Clock, TrendingUp, AlertTriangle, CheckCircle, XCircle, ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';

interface ReviewSummary {
  id: string;
  universityName: string;
  programName: string;
  status: string;
  overallScore: number | null;
  verdict: string | null;
  createdAt: string;
  iterations: { iterationNumber: number; overallScore: number; createdAt: string }[];
}

function VerdictIcon({ verdict }: { verdict: string | null }) {
  if (verdict === 'admit') return <CheckCircle className="w-4 h-4 text-green-400" />;
  if (verdict === 'waitlist') return <AlertTriangle className="w-4 h-4 text-yellow-400" />;
  if (verdict === 'reject') return <XCircle className="w-4 h-4 text-red-400" />;
  return <Clock className="w-4 h-4 text-muted-foreground" />;
}

function verdictLabel(verdict: string | null) {
  if (verdict === 'admit') return { text: 'Likely Admit', color: 'text-green-400 bg-green-400/10 border-green-400/30' };
  if (verdict === 'waitlist') return { text: 'Waitlist Range', color: 'text-yellow-400 bg-yellow-400/10 border-yellow-400/30' };
  if (verdict === 'reject') return { text: 'High Risk', color: 'text-red-400 bg-red-400/10 border-red-400/30' };
  return { text: 'Pending', color: 'text-muted-foreground bg-secondary border-border' };
}

export default function AdmissionsOfficerPage() {
  const router = useRouter();
  const { isAuthenticated, isLoading } = useAppStore();
  const [reviews, setReviews] = useState<ReviewSummary[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      router.push('/auth/login');
    }
  }, [isLoading, isAuthenticated, router]);

  useEffect(() => {
    if (!isAuthenticated) return;
    fetch('/api/admissions-review')
      .then((r) => r.json())
      .then((data) => {
        if (Array.isArray(data)) setReviews(data);
      })
      .finally(() => setLoading(false));
  }, [isAuthenticated]);

  if (isLoading || loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin w-8 h-8 border-2 border-primary border-t-transparent rounded-full" />
      </div>
    );
  }

  return (
    <div className="min-h-screen pb-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Button variant="ghost" size="sm" onClick={() => router.back()} className="mb-6 text-muted-foreground">
          <ArrowLeft className="w-4 h-4 mr-1" /> Back
        </Button>

        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center">
                <ShieldCheck className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h1 className="text-2xl font-bold">AI Admissions Officer</h1>
                <p className="text-sm text-muted-foreground">Get an honest AI assessment of your application</p>
              </div>
            </div>
            <Button asChild className="rounded-xl bg-gradient-to-r from-primary to-primary/90 hover:opacity-90 border-0">
              <Link href="/dashboard/admissions-officer/new">
                <Plus className="w-4 h-4 mr-2" /> New Review
              </Link>
            </Button>
          </div>
        </motion.div>

        {/* Empty state */}
        {reviews.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="glass-card rounded-2xl p-12 text-center"
          >
            <div className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-4">
              <ShieldCheck className="w-8 h-8 text-primary" />
            </div>
            <h2 className="text-lg font-semibold mb-2">No reviews yet</h2>
            <p className="text-muted-foreground text-sm mb-6 max-w-xs mx-auto">
              Submit your SOP, CV, and application details to get a detailed AI admissions assessment.
            </p>
            <Button asChild className="rounded-xl bg-gradient-to-r from-primary to-primary/90 hover:opacity-90 border-0">
              <Link href="/dashboard/admissions-officer/new">
                <Plus className="w-4 h-4 mr-2" /> Start Your First Review
              </Link>
            </Button>
          </motion.div>
        )}

        {/* Review list */}
        {reviews.length > 0 && (
          <div className="space-y-4">
            {reviews.map((review, i) => {
              const { text, color } = verdictLabel(review.verdict);
              return (
                <motion.div
                  key={review.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link href={`/dashboard/admissions-officer/${review.id}`}>
                    <div className="glass-card rounded-2xl p-5 cursor-pointer hover:border-primary/30 border border-border/50 transition-all group">
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex items-start gap-4 flex-1 min-w-0">
                          <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <VerdictIcon verdict={review.verdict} />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h3 className="font-semibold group-hover:text-primary transition-colors truncate">
                              {review.universityName}
                            </h3>
                            <p className="text-sm text-muted-foreground truncate">{review.programName}</p>
                            <div className="flex items-center gap-3 mt-2 flex-wrap">
                              <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium border ${color}`}>
                                {text}
                              </span>
                              {review.overallScore !== null && (
                                <span className="inline-flex items-center gap-1 text-xs text-muted-foreground">
                                  <TrendingUp className="w-3 h-3" />
                                  Score: {review.overallScore}/100
                                </span>
                              )}
                              {review.iterations.length > 1 && (
                                <span className="text-xs text-muted-foreground">
                                  {review.iterations.length} iterations
                                </span>
                              )}
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center gap-3 flex-shrink-0">
                          <span className="text-xs text-muted-foreground hidden sm:block">
                            {new Date(review.createdAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                          </span>
                          <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
