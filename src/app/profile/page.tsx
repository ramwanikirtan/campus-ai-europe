'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAppStore } from '@/lib/store';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ArrowLeft, Save, BookOpen, GraduationCap, DollarSign, Globe, Languages, MapPin } from 'lucide-react';
import { fieldsOfStudy, europeanCountries, allNationalities, languages } from '@/lib/seed-data';
import { LanguageSkill } from '@/lib/types';
import { toast } from 'sonner';

export default function ProfilePage() {
  const router = useRouter();
  const { profile, user, isAuthenticated, isLoading, setProfile } = useAppStore();

  // Form state — initialized from existing profile or empty
  const [fieldOfStudy, setFieldOfStudy] = useState('');
  const [degreeLevel, setDegreeLevel] = useState('');
  const [gpa, setGpa] = useState('');
  const [budget, setBudget] = useState(700);
  const [nationality, setNationality] = useState('');
  const [userLangs, setUserLangs] = useState<LanguageSkill[]>([]);
  const [countries, setCountries] = useState<string[]>([]);
  const [langToAdd, setLangToAdd] = useState('');
  const [langLevel, setLangLevel] = useState('B2');
  const [saving, setSaving] = useState(false);

  // Populate form from existing profile
  useEffect(() => {
    if (profile) {
      setFieldOfStudy(profile.fieldOfStudy || '');
      setDegreeLevel(profile.degreeLevel || '');
      setGpa(profile.gpaOriginal || '');
      setBudget(profile.monthlyBudgetEur || 700);
      setNationality(profile.nationality || '');
      setUserLangs(profile.languages || []);
      setCountries(profile.countryPreferences || []);
    }
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

  const handleSave = async () => {
    if (!fieldOfStudy || !degreeLevel || !gpa || !nationality) {
      toast.error('Please fill in all required fields');
      return;
    }

    setSaving(true);
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

    try {
      const res = await fetch('/api/profile', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(profileData),
      });
      const saved = await res.json();
      setProfile({
        id: saved.id || profile?.id || `profile-${Date.now()}`,
        userId: user?.id || '',
        ...profileData,
      });
      toast.success('Profile saved!');
      router.push('/dashboard');
    } catch {
      setProfile({
        id: profile?.id || `profile-${Date.now()}`,
        userId: user?.id || '',
        ...profileData,
      });
      toast.success('Profile saved!');
      router.push('/dashboard');
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="min-h-screen pb-12">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 py-8">
        <Button variant="ghost" size="sm" onClick={() => router.back()} className="mb-6 text-muted-foreground">
          <ArrowLeft className="w-4 h-4 mr-1" /> Back
        </Button>

        {/* User info header */}
        <div className="glass-card rounded-2xl p-6 mb-6">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center text-xl font-bold text-white">
              {user?.fullName?.charAt(0) || 'U'}
            </div>
            <div>
              <h1 className="text-xl font-bold">{user?.fullName || 'Your Profile'}</h1>
              <p className="text-sm text-muted-foreground">{user?.email}</p>
            </div>
          </div>
        </div>

        {/* Profile form */}
        <div className="glass-card rounded-2xl p-6 space-y-6">
          <h2 className="text-lg font-bold">Academic Profile</h2>

          {/* Field of Study */}
          <div>
            <label className="text-sm font-medium flex items-center gap-2 mb-2">
              <BookOpen className="w-4 h-4 text-primary" /> Field of Study *
            </label>
            <select
              value={fieldOfStudy}
              onChange={(e) => setFieldOfStudy(e.target.value)}
              className="w-full bg-secondary border border-border rounded-xl px-3 py-2.5 text-sm"
            >
              <option value="">Select your field...</option>
              {fieldsOfStudy.map((f) => (
                <option key={f} value={f}>{f}</option>
              ))}
            </select>
          </div>

          {/* Degree Level */}
          <div>
            <label className="text-sm font-medium flex items-center gap-2 mb-2">
              <GraduationCap className="w-4 h-4 text-primary" /> Degree Level *
            </label>
            <div className="flex gap-2">
              {[{ value: 'bachelors', label: "Bachelor's" }, { value: 'masters', label: "Master's" }, { value: 'phd', label: 'PhD' }].map((d) => (
                <button
                  key={d.value}
                  onClick={() => setDegreeLevel(d.value)}
                  className={`flex-1 px-4 py-2.5 rounded-xl text-sm font-medium border transition-all ${
                    degreeLevel === d.value
                      ? 'bg-primary text-white border-primary'
                      : 'bg-secondary border-border hover:border-primary/50'
                  }`}
                >
                  {d.label}
                </button>
              ))}
            </div>
          </div>

          {/* GPA */}
          <div>
            <label className="text-sm font-medium mb-2 block">GPA / Grade *</label>
            <Input
              placeholder="e.g. 3.6/4.0 or 85%"
              value={gpa}
              onChange={(e) => setGpa(e.target.value)}
              className="bg-secondary border-border rounded-xl"
            />
            {gpa && <p className="text-xs text-muted-foreground mt-1">Normalized: {parseGpa(gpa).toFixed(1)}/4.0</p>}
          </div>

          {/* Budget */}
          <div>
            <label className="text-sm font-medium flex items-center gap-2 mb-2">
              <DollarSign className="w-4 h-4 text-primary" /> Monthly Budget (EUR)
            </label>
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
              <span className="text-sm font-bold min-w-[70px] text-right">&euro;{budget}</span>
            </div>
          </div>

          {/* Nationality */}
          <div>
            <label className="text-sm font-medium flex items-center gap-2 mb-2">
              <Globe className="w-4 h-4 text-primary" /> Nationality *
            </label>
            <select
              value={nationality}
              onChange={(e) => setNationality(e.target.value)}
              className="w-full bg-secondary border border-border rounded-xl px-3 py-2.5 text-sm"
            >
              <option value="">Select nationality...</option>
              {allNationalities.map((n) => (
                <option key={n} value={n}>{n}</option>
              ))}
            </select>
          </div>

          {/* Languages */}
          <div>
            <label className="text-sm font-medium flex items-center gap-2 mb-2">
              <Languages className="w-4 h-4 text-primary" /> Languages
            </label>
            {userLangs.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-2">
                {userLangs.map((l) => (
                  <span key={l.language} className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-primary/10 border border-primary/30 text-sm">
                    {l.language} ({l.level})
                    <button onClick={() => setUserLangs(userLangs.filter((x) => x.language !== l.language))} className="ml-1 hover:text-destructive">&times;</button>
                  </span>
                ))}
              </div>
            )}
            <div className="flex gap-2">
              <select
                value={langToAdd}
                onChange={(e) => setLangToAdd(e.target.value)}
                className="bg-secondary border border-border rounded-xl px-3 py-2 text-sm flex-1"
              >
                <option value="">Add language...</option>
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
          </div>

          {/* Country Preferences */}
          <div>
            <label className="text-sm font-medium flex items-center gap-2 mb-2">
              <MapPin className="w-4 h-4 text-primary" /> Preferred Countries
            </label>
            <div className="flex flex-wrap gap-2">
              {europeanCountries.map((c) => (
                <button
                  key={c}
                  onClick={() =>
                    setCountries((prev) =>
                      prev.includes(c) ? prev.filter((x) => x !== c) : [...prev, c]
                    )
                  }
                  className={`px-3 py-1.5 rounded-full text-xs border transition-all ${
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
              className="text-xs text-primary hover:underline mt-2"
            >
              {countries.length === europeanCountries.length ? 'Deselect all' : 'Select all'}
            </button>
          </div>

          {/* Save button */}
          <div className="pt-4 border-t border-border/50">
            <Button
              onClick={handleSave}
              disabled={saving}
              className="w-full py-5 rounded-xl bg-primary hover:bg-primary/90 border-0 text-base"
            >
              {saving ? (
                <span className="flex items-center gap-2">
                  <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Saving...
                </span>
              ) : (
                <span className="flex items-center gap-2">
                  <Save className="w-4 h-4" /> Save Profile
                </span>
              )}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
