'use client';

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { useAppStore } from '@/lib/store';
import { Button } from '@/components/ui/button';
import {
  ArrowLeft, CheckCircle, AlertTriangle, XCircle, TrendingUp,
  ChevronDown, ChevronUp, Wand2, ShieldCheck, RefreshCw
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
} from 'recharts';

// ── Types ────────────────────────────────────────────────────────────────────

interface Risk {
  title: string;
  description: string;
  severity: 'low' | 'medium' | 'high';
}

interface SopWeakness {
  paragraph: string;
  issue: string;
  suggestion: string;
}

interface Iteration {
  iterationNumber: number;
  overallScore: number;
  verdict: string;
  verdictReason: string;
  strengths: string[];
  risks: Risk[];
  sopWeaknesses: SopWeakness[];
  admissionsInsights: string;
  createdAt: string;
}

interface AdmissionsReview {
  id: string;
  universityName: string;
  programName: string;
  status: string;
  overallScore: number | null;
  verdict: string | null;
  verdictReason: string | null;
  strengths: string[] | null;
  risks: Risk[] | null;
  sopWeaknesses: SopWeakness[] | null;
  admissionsInsights: string | null;
  sopText: string | null;
  cvText: string | null;
  gpa: string | null;
  recommenders: string | null;
  iterations: Iteration[];
}

// ── Sub-components ────────────────────────────────────────────────────────────

function ScoreRing({ score }: { score: number }) {
  const size = 140;
  const strokeWidth = 12;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (score / 100) * circumference;
  const color = score >= 75 ? '#4ade80' : score >= 55 ? '#facc15' : '#f87171';

  return (
    <div className="relative flex items-center justify-center" style={{ width: size, height: size }}>
      <svg width={size} height={size} className="-rotate-90">
        <circle
          cx={size / 2} cy={size / 2} r={radius}
          fill="none" stroke="hsl(var(--secondary))" strokeWidth={strokeWidth}
        />
        <motion.circle
          cx={size / 2} cy={size / 2} r={radius}
          fill="none" stroke={color} strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeDasharray={circumference}
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset: offset }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <motion.span
          className="text-3xl font-bold"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          style={{ color }}
        >
          {score}
        </motion.span>
        <span className="text-xs text-muted-foreground">/ 100</span>
      </div>
    </div>
  );
}

function VerdictBox({ verdict, reason }: { verdict: string; reason: string }) {
  const config = {
    admit: {
      icon: <CheckCircle className="w-6 h-6" />,
      label: 'Likely Admit',
      bg: 'bg-green-400/10 border-green-400/30',
      text: 'text-green-400',
    },
    waitlist: {
      icon: <AlertTriangle className="w-6 h-6" />,
      label: 'Waitlist Range',
      bg: 'bg-yellow-400/10 border-yellow-400/30',
      text: 'text-yellow-400',
    },
    reject: {
      icon: <XCircle className="w-6 h-6" />,
      label: 'High Risk / Likely Reject',
      bg: 'bg-red-400/10 border-red-400/30',
      text: 'text-red-400',
    },
  }[verdict] || {
    icon: <AlertTriangle className="w-6 h-6" />,
    label: 'Uncertain',
    bg: 'bg-secondary border-border',
    text: 'text-muted-foreground',
  };

  return (
    <div className={`rounded-2xl p-5 border ${config.bg}`}>
      <div className={`flex items-center gap-3 mb-3 ${config.text}`}>
        {config.icon}
        <span className="text-lg font-bold">{config.label}</span>
      </div>
      <p className="text-sm text-muted-foreground leading-relaxed">{reason}</p>
    </div>
  );
}

function StrengthCard({ strengths }: { strengths: string[] }) {
  return (
    <div className="glass-card rounded-2xl p-5">
      <h3 className="font-semibold mb-3 flex items-center gap-2 text-green-400">
        <CheckCircle className="w-4 h-4" /> Strengths
      </h3>
      <ul className="space-y-2">
        {strengths.map((s, i) => (
          <motion.li
            key={i}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.1 }}
            className="flex items-start gap-2 text-sm"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 mt-2 flex-shrink-0" />
            {s}
          </motion.li>
        ))}
      </ul>
    </div>
  );
}

function RiskCard({ risks }: { risks: Risk[] }) {
  const severityConfig = {
    high: 'text-red-400 bg-red-400/10 border-red-400/30',
    medium: 'text-yellow-400 bg-yellow-400/10 border-yellow-400/30',
    low: 'text-blue-400 bg-blue-400/10 border-blue-400/30',
  };

  return (
    <div className="glass-card rounded-2xl p-5">
      <h3 className="font-semibold mb-3 flex items-center gap-2 text-red-400">
        <AlertTriangle className="w-4 h-4" /> Risk Factors
      </h3>
      <div className="space-y-4">
        {risks.map((risk, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="border-l-2 border-border pl-4"
          >
            <div className="flex items-center gap-2 mb-1">
              <span className={`text-xs font-bold px-2 py-0.5 rounded-full border ${severityConfig[risk.severity] || severityConfig.low}`}>
                {risk.severity}
              </span>
              <span className="text-sm font-medium">{risk.title}</span>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed">{risk.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function SOPWeaknessPanel({ weaknesses }: { weaknesses: SopWeakness[] }) {
  const [expanded, setExpanded] = useState<number | null>(0);
  const [fixing, setFixing] = useState<number | null>(null);
  const [fixed, setFixed] = useState<Record<number, string>>({});
  const [showDiff, setShowDiff] = useState<Record<number, boolean>>({});

  const handleFix = async (idx: number, w: SopWeakness) => {
    setFixing(idx);
    try {
      const res = await fetch('/api/fix-sop-paragraph', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ paragraph: w.paragraph, issue: w.issue, suggestion: w.suggestion }),
      });
      const data = await res.json();
      if (data.rewritten) {
        setFixed((prev) => ({ ...prev, [idx]: data.rewritten }));
        setShowDiff((prev) => ({ ...prev, [idx]: true }));
      }
    } finally {
      setFixing(null);
    }
  };

  if (!weaknesses.length) {
    return (
      <div className="glass-card rounded-2xl p-5">
        <h3 className="font-semibold mb-2 flex items-center gap-2">
          <Wand2 className="w-4 h-4 text-primary" /> SOP Analysis
        </h3>
        <p className="text-sm text-muted-foreground">No specific weaknesses identified. Your SOP is well-written!</p>
      </div>
    );
  }

  return (
    <div className="glass-card rounded-2xl p-5">
      <h3 className="font-semibold mb-4 flex items-center gap-2">
        <Wand2 className="w-4 h-4 text-primary" /> SOP Weaknesses &amp; AI Fixes
      </h3>
      <div className="space-y-3">
        {weaknesses.map((w, i) => (
          <div key={i} className="border border-border/50 rounded-xl overflow-hidden">
            <button
              className="w-full flex items-start justify-between gap-3 p-4 text-left hover:bg-secondary/30 transition-colors"
              onClick={() => setExpanded(expanded === i ? null : i)}
            >
              <div className="flex-1 min-w-0">
                <p className="text-xs text-muted-foreground mb-1">Issue {i + 1}</p>
                <p className="text-sm font-medium truncate">{w.issue}</p>
              </div>
              {expanded === i ? <ChevronUp className="w-4 h-4 text-muted-foreground flex-shrink-0 mt-0.5" /> : <ChevronDown className="w-4 h-4 text-muted-foreground flex-shrink-0 mt-0.5" />}
            </button>

            <AnimatePresence>
              {expanded === i && (
                <motion.div
                  initial={{ height: 0 }}
                  animate={{ height: 'auto' }}
                  exit={{ height: 0 }}
                  className="overflow-hidden border-t border-border/50"
                >
                  <div className="p-4 space-y-4">
                    {/* Original */}
                    <div>
                      <p className="text-xs font-semibold text-muted-foreground mb-1.5 uppercase tracking-wide">Original Text</p>
                      <blockquote className="text-sm text-muted-foreground bg-secondary/40 rounded-lg p-3 border-l-2 border-border italic">
                        {w.paragraph}
                      </blockquote>
                    </div>

                    {/* Suggestion */}
                    <div>
                      <p className="text-xs font-semibold text-muted-foreground mb-1.5 uppercase tracking-wide">Improvement Suggestion</p>
                      <p className="text-sm text-muted-foreground">{w.suggestion}</p>
                    </div>

                    {/* AI Fix */}
                    {fixed[i] && showDiff[i] && (
                      <div>
                        <p className="text-xs font-semibold text-green-400 mb-1.5 uppercase tracking-wide">AI Rewrite</p>
                        <div className="text-sm bg-green-400/5 border border-green-400/20 rounded-lg p-3 leading-relaxed">
                          {fixed[i]}
                        </div>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="mt-2 text-xs text-muted-foreground"
                          onClick={() => setShowDiff((prev) => ({ ...prev, [i]: false }))}
                        >
                          Hide rewrite
                        </Button>
                      </div>
                    )}

                    {!fixed[i] && (
                      <Button
                        size="sm"
                        onClick={() => handleFix(i, w)}
                        disabled={fixing === i}
                        className="rounded-lg bg-primary/10 text-primary hover:bg-primary/20 border-0 text-xs"
                      >
                        {fixing === i ? (
                          <>
                            <div className="w-3 h-3 border border-primary border-t-transparent rounded-full animate-spin mr-1.5" />
                            Rewriting...
                          </>
                        ) : (
                          <>
                            <Wand2 className="w-3 h-3 mr-1.5" /> Fix with AI
                          </>
                        )}
                      </Button>
                    )}

                    {fixed[i] && !showDiff[i] && (
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-xs text-primary"
                        onClick={() => setShowDiff((prev) => ({ ...prev, [i]: true }))}
                      >
                        Show AI rewrite
                      </Button>
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
}

function ScoreHistoryChart({ iterations }: { iterations: Iteration[] }) {
  if (iterations.length < 2) return null;
  const data = iterations.map((it) => ({
    name: `Review ${it.iterationNumber}`,
    score: it.overallScore,
  }));

  return (
    <div className="glass-card rounded-2xl p-5">
      <h3 className="font-semibold mb-4 flex items-center gap-2">
        <TrendingUp className="w-4 h-4 text-primary" /> Score Progression
      </h3>
      <ResponsiveContainer width="100%" height={160}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
          <XAxis dataKey="name" tick={{ fontSize: 11, fill: 'hsl(var(--muted-foreground))' }} />
          <YAxis domain={[0, 100]} tick={{ fontSize: 11, fill: 'hsl(var(--muted-foreground))' }} />
          <Tooltip
            contentStyle={{
              background: 'hsl(var(--card))',
              border: '1px solid hsl(var(--border))',
              borderRadius: 8,
              fontSize: 12,
            }}
          />
          <Line type="monotone" dataKey="score" stroke="hsl(var(--primary))" strokeWidth={2} dot={{ fill: 'hsl(var(--primary))', r: 4 }} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

// ── Main Page ─────────────────────────────────────────────────────────────────

export default function ReviewDetailPage() {
  const params = useParams();
  const router = useRouter();
  const { isAuthenticated, isLoading } = useAppStore();
  const [review, setReview] = useState<AdmissionsReview | null>(null);
  const [loading, setLoading] = useState(true);
  const [rereviewing, setRereviewing] = useState(false);
  const [reReviewError, setReReviewError] = useState('');
  const reviewId = params.reviewId as string;

  useEffect(() => {
    if (!isLoading && !isAuthenticated) router.push('/auth/login');
  }, [isLoading, isAuthenticated, router]);

  useEffect(() => {
    if (!isAuthenticated || !reviewId) return;
    fetch(`/api/admissions-review?id=${reviewId}`)
      .then((r) => r.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setReview(data.find((r: AdmissionsReview) => r.id === reviewId) || null);
        }
      })
      .finally(() => setLoading(false));
  }, [isAuthenticated, reviewId]);

  const handleReReview = async () => {
    if (!review) return;
    setRereviewing(true);
    setReReviewError('');
    try {
      const res = await fetch('/api/admissions-review', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          universityName: review.universityName,
          programName: review.programName,
          sopText: review.sopText,
          cvText: review.cvText,
          gpa: review.gpa,
          recommenders: review.recommenders,
          reviewId: review.id,
        }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Re-review failed');
      setReview(data);
    } catch (err) {
      setReReviewError(err instanceof Error ? err.message : 'Re-review failed');
    } finally {
      setRereviewing(false);
    }
  };

  if (isLoading || loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin w-8 h-8 border-2 border-primary border-t-transparent rounded-full" />
      </div>
    );
  }

  if (rereviewing) {
    return (
      <div className="fixed inset-0 z-50 bg-background/90 backdrop-blur-md flex flex-col items-center justify-center gap-6">
        <div className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/30 flex items-center justify-center">
          <ShieldCheck className="w-8 h-8 text-primary" />
        </div>
        <div className="text-center">
          <h3 className="text-lg font-semibold mb-1">Re-analyzing your application...</h3>
          <p className="text-sm text-muted-foreground">Getting a fresh perspective from our AI admissions officer.</p>
        </div>
        <div className="flex gap-2">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="w-2 h-2 rounded-full bg-primary"
              animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 1, repeat: Infinity, delay: i * 0.2 }}
            />
          ))}
        </div>
      </div>
    );
  }

  if (!review) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-muted-foreground">Review not found</p>
      </div>
    );
  }

  const score = review.overallScore ?? 0;
  const strengths = review.strengths ?? [];
  const risks = review.risks ?? [];
  const sopWeaknesses = review.sopWeaknesses ?? [];

  return (
    <div className="min-h-screen pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Button variant="ghost" size="sm" onClick={() => router.back()} className="mb-6 text-muted-foreground">
          <ArrowLeft className="w-4 h-4 mr-1" /> Back
        </Button>

        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
            <div>
              <h1 className="text-2xl font-bold">{review.universityName}</h1>
              <p className="text-muted-foreground">{review.programName}</p>
              {review.gpa && <p className="text-xs text-muted-foreground mt-1">GPA: {review.gpa}</p>}
            </div>
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={handleReReview}
                disabled={rereviewing}
                className="rounded-xl border-border"
              >
                <RefreshCw className="w-3.5 h-3.5 mr-1.5" /> Re-Review
              </Button>
            </div>
          </div>
          {reReviewError && (
            <p className="mt-2 text-sm text-red-400 bg-red-400/10 border border-red-400/20 rounded-lg px-4 py-2">{reReviewError}</p>
          )}
        </motion.div>

        {/* Score + Verdict */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="glass-card rounded-2xl p-6 mb-6"
        >
          <div className="flex flex-col sm:flex-row items-center gap-6">
            <ScoreRing score={score} />
            <div className="flex-1">
              {review.verdict && review.verdictReason && (
                <VerdictBox verdict={review.verdict} reason={review.verdictReason} />
              )}
            </div>
          </div>
        </motion.div>

        {/* Score history */}
        {review.iterations.length > 1 && (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }} className="mb-6">
            <ScoreHistoryChart iterations={review.iterations} />
          </motion.div>
        )}

        {/* Strengths + Risks */}
        <div className="grid sm:grid-cols-2 gap-6 mb-6">
          {strengths.length > 0 && (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
              <StrengthCard strengths={strengths} />
            </motion.div>
          )}
          {risks.length > 0 && (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 }}>
              <RiskCard risks={risks} />
            </motion.div>
          )}
        </div>

        {/* SOP Weaknesses */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="mb-6">
          <SOPWeaknessPanel weaknesses={sopWeaknesses} />
        </motion.div>

        {/* Admissions Insights */}
        {review.admissionsInsights && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
            className="glass-card rounded-2xl p-5"
          >
            <h3 className="font-semibold mb-3 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-primary" /> Admissions Insights
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed whitespace-pre-line">{review.admissionsInsights}</p>
          </motion.div>
        )}
      </div>
    </div>
  );
}
