'use client';

import { useState, useEffect, useRef, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useAppStore } from '@/lib/store';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ArrowLeft, ArrowRight, ShieldCheck, FileText, Upload, User, Users, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const STEPS = [
  { id: 1, title: 'University & Program', icon: ShieldCheck, description: 'Where are you applying?' },
  { id: 2, title: 'Statement of Purpose', icon: FileText, description: 'Your SOP or personal statement' },
  { id: 3, title: 'CV & Background', icon: User, description: 'Your CV, GPA, and recommenders' },
  { id: 4, title: 'Review & Submit', icon: CheckCircle2, description: 'Confirm and get AI feedback' },
];

function LoadingOverlay() {
  const [dots, setDots] = useState('');
  useEffect(() => {
    const iv = setInterval(() => setDots((d) => (d.length >= 3 ? '' : d + '.')), 500);
    return () => clearInterval(iv);
  }, []);
  return (
    <div className="fixed inset-0 z-50 bg-background/90 backdrop-blur-md flex flex-col items-center justify-center gap-6">
      <div className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/30 flex items-center justify-center">
        <ShieldCheck className="w-8 h-8 text-primary" />
      </div>
      <div className="text-center">
        <h3 className="text-lg font-semibold mb-1">Analyzing your application{dots}</h3>
        <p className="text-sm text-muted-foreground max-w-xs">
          Our AI admissions officer is reviewing your documents and preparing detailed feedback.
        </p>
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

function TextArea({
  value,
  onChange,
  placeholder,
  onFileUpload,
}: {
  value: string;
  onChange: (v: string) => void;
  placeholder: string;
  onFileUpload?: (text: string) => void;
}) {
  const fileRef = useRef<HTMLInputElement>(null);

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => {
      const text = ev.target?.result as string;
      if (text) {
        onChange(text);
        onFileUpload?.(text);
      }
    };
    reader.readAsText(file);
    e.target.value = '';
  };

  return (
    <div className="space-y-2">
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        rows={10}
        className="w-full rounded-xl border border-border bg-secondary/30 px-4 py-3 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-primary/50 placeholder:text-muted-foreground"
      />
      <div className="flex items-center gap-2">
        <input ref={fileRef} type="file" accept=".txt,.md" className="hidden" onChange={handleFile} />
        <Button
          type="button"
          variant="outline"
          size="sm"
          onClick={() => fileRef.current?.click()}
          className="rounded-lg border-border text-muted-foreground hover:text-foreground text-xs"
        >
          <Upload className="w-3 h-3 mr-1.5" /> Upload .txt file
        </Button>
        <span className="text-xs text-muted-foreground">{value.length} characters</span>
      </div>
    </div>
  );
}

function NewReviewInner() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { isAuthenticated, isLoading, profile } = useAppStore();

  const [step, setStep] = useState(1);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');

  // Form fields
  const [universityName, setUniversityName] = useState('');
  const [programName, setProgramName] = useState('');
  const [sopText, setSopText] = useState('');
  const [cvText, setCvText] = useState('');
  const [gpa, setGpa] = useState('');
  const [recommenders, setRecommenders] = useState('');

  // Pre-fill from query param
  useEffect(() => {
    const uni = searchParams.get('university');
    if (uni) setUniversityName(decodeURIComponent(uni));
    const prog = searchParams.get('program');
    if (prog) setProgramName(decodeURIComponent(prog));
  }, [searchParams]);

  // Pre-fill GPA from profile
  useEffect(() => {
    if (profile?.gpaOriginal && !gpa) {
      setGpa(profile.gpaOriginal);
    }
  }, [profile]);

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      router.push('/auth/login');
    }
  }, [isLoading, isAuthenticated, router]);

  const canAdvance = () => {
    if (step === 1) return universityName.trim() && programName.trim();
    if (step === 2) return sopText.trim().length >= 50;
    if (step === 3) return true;
    return true;
  };

  const handleSubmit = async () => {
    setSubmitting(true);
    setError('');
    try {
      const res = await fetch('/api/admissions-review', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ universityName, programName, sopText, cvText, gpa, recommenders }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Failed to create review');
      router.push(`/dashboard/admissions-officer/${data.id}`);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong');
      setSubmitting(false);
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin w-8 h-8 border-2 border-primary border-t-transparent rounded-full" />
      </div>
    );
  }

  return (
    <div className="min-h-screen pb-12">
      {submitting && <LoadingOverlay />}

      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Button variant="ghost" size="sm" onClick={() => (step > 1 ? setStep(step - 1) : router.back())} className="mb-6 text-muted-foreground">
          <ArrowLeft className="w-4 h-4 mr-1" /> {step > 1 ? 'Back' : 'Cancel'}
        </Button>

        {/* Step indicators */}
        <div className="flex items-center gap-2 mb-8 overflow-x-auto pb-1">
          {STEPS.map((s, i) => (
            <div key={s.id} className="flex items-center gap-2 flex-shrink-0">
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold border-2 transition-all ${
                  step === s.id
                    ? 'border-primary bg-primary text-white'
                    : step > s.id
                    ? 'border-green-400 bg-green-400/20 text-green-400'
                    : 'border-border text-muted-foreground'
                }`}
              >
                {step > s.id ? <CheckCircle2 className="w-4 h-4" /> : s.id}
              </div>
              <span className={`text-xs font-medium hidden sm:block ${step === s.id ? 'text-foreground' : 'text-muted-foreground'}`}>
                {s.title}
              </span>
              {i < STEPS.length - 1 && <div className="w-6 h-px bg-border flex-shrink-0" />}
            </div>
          ))}
        </div>

        {/* Step content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.2 }}
            className="glass-card rounded-2xl p-6"
          >
            {/* Step 1: University & Program */}
            {step === 1 && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-xl font-bold mb-1">University &amp; Program</h2>
                  <p className="text-sm text-muted-foreground">Which program are you applying to?</p>
                </div>
                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">University Name *</label>
                    <Input
                      value={universityName}
                      onChange={(e) => setUniversityName(e.target.value)}
                      placeholder="e.g. Technical University of Munich"
                      className="rounded-xl border-border bg-secondary/30"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Program / Degree *</label>
                    <Input
                      value={programName}
                      onChange={(e) => setProgramName(e.target.value)}
                      placeholder="e.g. MSc Computer Science"
                      className="rounded-xl border-border bg-secondary/30"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Step 2: SOP */}
            {step === 2 && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-xl font-bold mb-1">Statement of Purpose</h2>
                  <p className="text-sm text-muted-foreground">
                    Paste your SOP or motivational letter (minimum 50 characters). The more complete, the better the feedback.
                  </p>
                </div>
                <TextArea
                  value={sopText}
                  onChange={setSopText}
                  placeholder="Paste your Statement of Purpose here..."
                />
                {sopText.length > 0 && sopText.length < 50 && (
                  <p className="text-xs text-yellow-400">Please enter at least 50 characters for a meaningful analysis.</p>
                )}
              </div>
            )}

            {/* Step 3: CV & Background */}
            {step === 3 && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-xl font-bold mb-1">CV &amp; Background</h2>
                  <p className="text-sm text-muted-foreground">Additional context helps the AI give more accurate feedback.</p>
                </div>
                <div className="space-y-5">
                  <div>
                    <label className="text-sm font-medium mb-2 block flex items-center gap-1.5">
                      <User className="w-3.5 h-3.5" /> CV / Resume (optional)
                    </label>
                    <TextArea
                      value={cvText}
                      onChange={setCvText}
                      placeholder="Paste your CV text here (education, experience, publications, projects)..."
                    />
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block">GPA / Academic Score (optional)</label>
                      <Input
                        value={gpa}
                        onChange={(e) => setGpa(e.target.value)}
                        placeholder="e.g. 3.7/4.0 or 85%"
                        className="rounded-xl border-border bg-secondary/30"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 flex items-center gap-1.5">
                        <Users className="w-3.5 h-3.5" /> Recommenders (optional)
                      </label>
                      <Input
                        value={recommenders}
                        onChange={(e) => setRecommenders(e.target.value)}
                        placeholder="e.g. Prof. Smith (MIT), Dr. Lee (IBM)"
                        className="rounded-xl border-border bg-secondary/30"
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Step 4: Review & Submit */}
            {step === 4 && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-xl font-bold mb-1">Review &amp; Submit</h2>
                  <p className="text-sm text-muted-foreground">Confirm your submission before the AI analysis begins.</p>
                </div>
                <div className="space-y-3">
                  {[
                    { label: 'University', value: universityName },
                    { label: 'Program', value: programName },
                    { label: 'SOP', value: sopText ? `${sopText.length} characters` : '—' },
                    { label: 'CV', value: cvText ? `${cvText.length} characters` : '—' },
                    { label: 'GPA', value: gpa || '—' },
                    { label: 'Recommenders', value: recommenders || '—' },
                  ].map(({ label, value }) => (
                    <div key={label} className="flex items-start justify-between gap-4 py-2 border-b border-border/40 last:border-0">
                      <span className="text-sm text-muted-foreground w-28 flex-shrink-0">{label}</span>
                      <span className="text-sm font-medium text-right">{value}</span>
                    </div>
                  ))}
                </div>
                {error && (
                  <p className="text-sm text-red-400 bg-red-400/10 border border-red-400/20 rounded-lg px-4 py-3">{error}</p>
                )}
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        {/* Navigation buttons */}
        <div className="flex justify-between mt-6">
          {step > 1 ? (
            <Button variant="outline" onClick={() => setStep(step - 1)} className="rounded-xl border-border">
              <ArrowLeft className="w-4 h-4 mr-2" /> Back
            </Button>
          ) : (
            <div />
          )}
          {step < 4 ? (
            <Button
              onClick={() => setStep(step + 1)}
              disabled={!canAdvance()}
              className="rounded-xl bg-gradient-to-r from-primary to-primary/90 hover:opacity-90 border-0 disabled:opacity-40"
            >
              Continue <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          ) : (
            <Button
              onClick={handleSubmit}
              disabled={submitting}
              className="rounded-xl bg-gradient-to-r from-primary to-primary/90 hover:opacity-90 border-0"
            >
              <ShieldCheck className="w-4 h-4 mr-2" /> Submit for AI Review
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}

export default function NewReviewPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin w-8 h-8 border-2 border-primary border-t-transparent rounded-full" />
      </div>
    }>
      <NewReviewInner />
    </Suspense>
  );
}
