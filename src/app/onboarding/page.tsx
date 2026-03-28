'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAppStore } from '@/lib/store';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { GraduationCap, Bot, User, ArrowLeft, Check, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { fieldsOfStudy, europeanCountries, allNationalities, languages } from '@/lib/seed-data';
import { LanguageSkill } from '@/lib/types';
import { toast } from 'sonner';

interface Message {
  id: string;
  role: 'bot' | 'user';
  content: string;
  component?: React.ReactNode;
}

export default function OnboardingPage() {
  const router = useRouter();
  const { user, setProfile } = useAppStore();
  const [step, setStep] = useState(0);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'welcome',
      role: 'bot',
      content: `Hey! 👋 Welcome to Campus AI Europe, ${user?.fullName?.split(' ')[0] || 'there'}! I'm going to ask you a few quick questions to personalize your experience. Ready?`,
    },
  ]);

  // Form state
  const [fieldOfStudy, setFieldOfStudy] = useState('');
  const [degreeLevel, setDegreeLevel] = useState('');
  const [gpa, setGpa] = useState('');
  const [budget, setBudget] = useState(700);
  const [userLangs, setUserLangs] = useState<LanguageSkill[]>([]);
  const [nationality, setNationality] = useState('');
  const [countries, setCountries] = useState<string[]>([]);
  const [fieldFilter, setFieldFilter] = useState('');
  const [natFilter, setNatFilter] = useState('');
  const [langToAdd, setLangToAdd] = useState('');
  const [langLevel, setLangLevel] = useState('B2');

  const addMessage = (role: 'bot' | 'user', content: string) => {
    setMessages((prev) => [...prev, { id: `msg-${Date.now()}-${Math.random()}`, role, content }]);
  };

  const proceed = (userAnswer: string, nextStep: number) => {
    addMessage('user', userAnswer);
    setTimeout(() => {
      setStep(nextStep);
      const botMessages: Record<number, string> = {
        1: "What field do you want to study? 📚",
        2: "Great choice! 💻 What degree level are you looking for?",
        3: 'What\'s your current GPA or grade? You can enter it in any format — like 3.5/4.0, 85%, or First Class. 📊',
        4: "Nice! 🎓 What's your monthly budget for living + tuition in Europe? (in EUR) 💰",
        5: "What languages do you speak, and at what level? 🗣️",
        6: "Where are you from? (Your nationality) 🌍",
        7: "Last one! Which European countries interest you? 🇪🇺",
        8: "profile_summary",
      };
      if (botMessages[nextStep] && botMessages[nextStep] !== 'profile_summary') {
        addMessage('bot', botMessages[nextStep]);
      }
    }, 500);
  };

  const parseGpa = (input: string): number => {
    const trimmed = input.trim();
    if (trimmed.includes('/')) {
      const parts = trimmed.split('/');
      const num = parseFloat(parts[0]);
      const den = parseFloat(parts[1]);
      if (den > 0) return Math.round((num / den) * 4 * 100) / 100;
    }
    if (trimmed.includes('%')) {
      const pct = parseFloat(trimmed);
      return Math.round((pct / 100) * 4 * 100) / 100;
    }
    const num = parseFloat(trimmed);
    if (num <= 4) return num;
    if (num <= 10) return Math.round((num / 10) * 4 * 100) / 100;
    if (num <= 100) return Math.round((num / 100) * 4 * 100) / 100;
    return 3.0;
  };

  const handleSaveProfile = async () => {
    const profileData = {
      fieldOfStudy,
      degreeLevel: degreeLevel as 'bachelors' | 'masters' | 'phd',
      gpaOriginal: gpa,
      gpaNormalized: parseGpa(gpa),
      monthlyBudgetEur: budget,
      nationality,
      languages: userLangs,
      countryPreferences: countries,
      onboardingCompleted: true,
    };

    // Save to database
    try {
      const res = await fetch('/api/profile', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(profileData),
      });
      const saved = await res.json();

      // Also update local Zustand store for immediate reactivity
      setProfile({
        id: saved.id || `profile-${Date.now()}`,
        userId: user?.id || '',
        ...profileData,
      });

      toast.success('Profile saved! 🎉');
      router.push('/dashboard');
    } catch {
      // Fallback: save locally even if API fails
      setProfile({
        id: `profile-${Date.now()}`,
        userId: user?.id || '',
        ...profileData,
      });
      toast.success('Profile saved! 🎉');
      router.push('/dashboard');
    }
  };

  const filteredFields = fieldsOfStudy.filter((f) =>
    f.toLowerCase().includes(fieldFilter.toLowerCase())
  );

  const filteredNats = allNationalities.filter((n) =>
    n.toLowerCase().includes(natFilter.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <div className="border-b border-border px-4 py-3 flex items-center gap-3">
        <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[oklch(0.70_0.18_250)] to-[oklch(0.65_0.18_290)] flex items-center justify-center">
          <GraduationCap className="w-5 h-5 text-white" />
        </div>
        <div>
          <span className="font-bold gradient-text">Campus AI Europe</span>
          <p className="text-xs text-muted-foreground">Profile Setup</p>
        </div>
        <div className="ml-auto flex gap-1">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className={`w-6 h-1.5 rounded-full transition-all ${
                i <= step ? 'bg-primary' : 'bg-secondary'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Chat area */}
      <div className="flex-1 overflow-y-auto p-4 max-w-2xl mx-auto w-full">
        <AnimatePresence>
          {messages.map((msg) => (
            <motion.div
              key={msg.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`flex mb-4 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div className={`flex items-start gap-2 max-w-[85%] ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                  msg.role === 'user'
                    ? 'bg-gradient-to-br from-[oklch(0.70_0.18_250)] to-[oklch(0.65_0.18_290)]'
                    : 'bg-secondary'
                }`}>
                  {msg.role === 'user' ? <User className="w-4 h-4 text-white" /> : <Bot className="w-4 h-4" />}
                </div>
                <div className={`rounded-2xl px-4 py-3 text-sm ${
                  msg.role === 'user'
                    ? 'bg-gradient-to-r from-[oklch(0.70_0.18_250)] to-[oklch(0.65_0.18_290)] text-white'
                    : 'bg-secondary'
                }`}>
                  {msg.content}
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>

        {/* Step-specific input components */}
        <motion.div
          key={step}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-4"
        >
          {/* Step 0: Ready */}
          {step === 0 && (
            <div className="flex justify-center">
              <Button
                onClick={() => proceed("Let's go! 🚀", 1)}
                className="bg-gradient-to-r from-[oklch(0.70_0.18_250)] to-[oklch(0.65_0.18_290)] hover:opacity-90 border-0 rounded-xl px-8"
              >
                <Sparkles className="w-4 h-4 mr-2" />
                Let&apos;s go!
              </Button>
            </div>
          )}

          {/* Step 1: Field of study */}
          {step === 1 && (
            <div className="space-y-2">
              <Input
                placeholder="Search for a field..."
                value={fieldFilter}
                onChange={(e) => setFieldFilter(e.target.value)}
                className="bg-secondary border-border rounded-xl"
              />
              <div className="flex flex-wrap gap-2 max-h-48 overflow-y-auto">
                {filteredFields.map((f) => (
                  <button
                    key={f}
                    onClick={() => { setFieldOfStudy(f); setFieldFilter(''); proceed(f, 2); }}
                    className="px-3 py-1.5 rounded-full text-sm border border-border hover:bg-primary hover:text-white hover:border-primary transition-all"
                  >
                    {f}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 2: Degree level */}
          {step === 2 && (
            <div className="flex gap-3 justify-center flex-wrap">
              {[{ value: 'bachelors', label: "Bachelor's 🎓" }, { value: 'masters', label: "Master's 🎓🎓" }, { value: 'phd', label: "PhD 🎓🎓🎓" }].map((d) => (
                <Button
                  key={d.value}
                  variant="outline"
                  onClick={() => { setDegreeLevel(d.value); proceed(d.label, 3); }}
                  className="rounded-xl px-6 py-5 border-border hover:bg-primary hover:text-white hover:border-primary"
                >
                  {d.label}
                </Button>
              ))}
            </div>
          )}

          {/* Step 3: GPA */}
          {step === 3 && (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                if (gpa) proceed(gpa, 4);
              }}
              className="flex gap-2"
            >
              <Input
                placeholder="e.g. 3.6/4.0 or 85%"
                value={gpa}
                onChange={(e) => setGpa(e.target.value)}
                className="bg-secondary border-border rounded-xl"
              />
              <Button type="submit" className="bg-primary hover:bg-primary/90 rounded-xl px-6">Next</Button>
            </form>
          )}

          {/* Step 4: Budget */}
          {step === 4 && (
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <input
                  type="range"
                  min={0}
                  max={3000}
                  step={50}
                  value={budget}
                  onChange={(e) => setBudget(Number(e.target.value))}
                  className="flex-1 accent-primary"
                />
                <span className="text-lg font-bold min-w-[80px] text-right">€{budget}</span>
              </div>
              <p className="text-xs text-muted-foreground text-center">Monthly budget including tuition + living costs</p>
              <div className="flex justify-center">
                <Button onClick={() => proceed(`€${budget}/month`, 5)} className="bg-primary hover:bg-primary/90 rounded-xl px-8">
                  Next
                </Button>
              </div>
            </div>
          )}

          {/* Step 5: Languages */}
          {step === 5 && (
            <div className="space-y-3">
              {userLangs.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-2">
                  {userLangs.map((l) => (
                    <span key={l.language} className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-primary/10 border border-primary/30 text-sm">
                      {l.language} ({l.level})
                      <button onClick={() => setUserLangs(userLangs.filter((x) => x.language !== l.language))} className="ml-1 hover:text-destructive">×</button>
                    </span>
                  ))}
                </div>
              )}
              <div className="flex gap-2 flex-wrap">
                <select
                  value={langToAdd}
                  onChange={(e) => setLangToAdd(e.target.value)}
                  className="bg-secondary border border-border rounded-xl px-3 py-2 text-sm flex-1"
                >
                  <option value="">Select language...</option>
                  {languages.filter(l => !userLangs.find(ul => ul.language === l)).map((l) => (
                    <option key={l} value={l}>{l}</option>
                  ))}
                </select>
                <select
                  value={langLevel}
                  onChange={(e) => setLangLevel(e.target.value)}
                  className="bg-secondary border border-border rounded-xl px-3 py-2 text-sm"
                >
                  {['A1', 'A2', 'B1', 'B2', 'C1', 'C2', 'native'].map((l) => (
                    <option key={l} value={l}>{l}</option>
                  ))}
                </select>
                <Button
                  variant="outline"
                  onClick={() => {
                    if (langToAdd) {
                      setUserLangs([...userLangs, { language: langToAdd, level: langLevel as LanguageSkill['level'] }]);
                      setLangToAdd('');
                    }
                  }}
                  className="rounded-xl border-border"
                >
                  Add
                </Button>
              </div>
              {userLangs.length > 0 && (
                <div className="flex justify-center">
                  <Button
                    onClick={() => proceed(userLangs.map((l) => `${l.language} (${l.level})`).join(', '), 6)}
                    className="bg-primary hover:bg-primary/90 rounded-xl px-8"
                  >
                    Next
                  </Button>
                </div>
              )}
            </div>
          )}

          {/* Step 6: Nationality */}
          {step === 6 && (
            <div className="space-y-2">
              <Input
                placeholder="Search your nationality..."
                value={natFilter}
                onChange={(e) => setNatFilter(e.target.value)}
                className="bg-secondary border-border rounded-xl"
              />
              <div className="flex flex-wrap gap-2 max-h-48 overflow-y-auto">
                {filteredNats.slice(0, 20).map((n) => (
                  <button
                    key={n}
                    onClick={() => { setNationality(n); setNatFilter(''); proceed(n, 7); }}
                    className="px-3 py-1.5 rounded-full text-sm border border-border hover:bg-primary hover:text-white hover:border-primary transition-all"
                  >
                    {n}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 7: Countries */}
          {step === 7 && (
            <div className="space-y-3">
              <div className="flex flex-wrap gap-2">
                {europeanCountries.map((c) => (
                  <button
                    key={c}
                    onClick={() =>
                      setCountries((prev) =>
                        prev.includes(c) ? prev.filter((x) => x !== c) : [...prev, c]
                      )
                    }
                    className={`px-3 py-1.5 rounded-full text-sm border transition-all ${
                      countries.includes(c)
                        ? 'bg-primary text-white border-primary'
                        : 'border-border hover:border-primary/50'
                    }`}
                  >
                    {c}
                  </button>
                ))}
              </div>
              <button
                onClick={() => setCountries(countries.length === europeanCountries.length ? [] : [...europeanCountries])}
                className="text-xs text-primary hover:underline"
              >
                {countries.length === europeanCountries.length ? 'Deselect all' : 'No preference — show everything'}
              </button>
              {countries.length > 0 && (
                <div className="flex justify-center">
                  <Button
                    onClick={() => {
                      addMessage('user', countries.join(', '));
                      setTimeout(() => setStep(8), 500);
                    }}
                    className="bg-primary hover:bg-primary/90 rounded-xl px-8"
                  >
                    Next
                  </Button>
                </div>
              )}
            </div>
          )}

          {/* Step 8: Summary */}
          {step === 8 && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="glass-card rounded-2xl p-6 max-w-md mx-auto"
            >
              <div className="flex items-center gap-2 mb-4">
                <Bot className="w-5 h-5 text-primary" />
                <span className="font-semibold">Here&apos;s your profile summary:</span>
              </div>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between"><span className="text-muted-foreground">📚 Field</span><span className="font-medium">{fieldOfStudy} ({degreeLevel === 'bachelors' ? "Bachelor's" : degreeLevel === 'masters' ? "Master's" : 'PhD'})</span></div>
                <div className="flex justify-between"><span className="text-muted-foreground">📊 GPA</span><span className="font-medium">{gpa} ({parseGpa(gpa).toFixed(1)}/4.0)</span></div>
                <div className="flex justify-between"><span className="text-muted-foreground">💰 Budget</span><span className="font-medium">€{budget}/month</span></div>
                <div className="flex justify-between items-start"><span className="text-muted-foreground">🗣️ Languages</span><span className="font-medium text-right">{userLangs.map((l) => `${l.language} (${l.level})`).join(', ')}</span></div>
                <div className="flex justify-between"><span className="text-muted-foreground">🌍 Nationality</span><span className="font-medium">{nationality}</span></div>
                <div className="flex justify-between items-start"><span className="text-muted-foreground">🇪🇺 Countries</span><span className="font-medium text-right max-w-[200px]">{countries.join(', ')}</span></div>
              </div>
              <div className="flex gap-3 mt-6">
                <Button
                  variant="outline"
                  onClick={() => { setMessages([messages[0]]); setStep(0); }}
                  className="flex-1 rounded-xl border-border"
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Edit
                </Button>
                <Button
                  onClick={handleSaveProfile}
                  className="flex-1 bg-gradient-to-r from-[oklch(0.70_0.18_250)] to-[oklch(0.65_0.18_290)] hover:opacity-90 border-0 rounded-xl"
                >
                  <Check className="w-4 h-4 mr-2" />
                  Save & Continue
                </Button>
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </div>
  );
}
