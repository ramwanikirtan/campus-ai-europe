'use client';

import { useRouter } from 'next/navigation';
import { useAppStore } from '@/lib/store';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Edit3, User, BookOpen, GraduationCap, DollarSign, Globe, Languages, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function ProfilePage() {
  const router = useRouter();
  const { profile, user } = useAppStore();

  return (
    <div className="min-h-screen">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Button variant="ghost" size="sm" onClick={() => router.back()} className="mb-6 text-muted-foreground">
          <ArrowLeft className="w-4 h-4 mr-1" /> Back
        </Button>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          {/* User info */}
          <div className="glass-card rounded-2xl p-6 mb-6">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-primary/90 flex items-center justify-center text-2xl font-bold text-white">
                {user?.fullName?.charAt(0) || 'U'}
              </div>
              <div>
                <h1 className="text-2xl font-bold">{user?.fullName}</h1>
                <p className="text-muted-foreground">{user?.email}</p>
                <p className="text-xs text-muted-foreground mt-1">
                  Joined {user?.createdAt ? new Date(user.createdAt).toLocaleDateString() : 'Recently'}
                </p>
              </div>
            </div>
          </div>

          {/* Profile data */}
          {profile?.onboardingCompleted ? (
            <div className="glass-card rounded-2xl p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold">Academic Profile</h2>
                <Button asChild variant="outline" size="sm" className="rounded-xl border-border">
                  <Link href="/onboarding"><Edit3 className="w-3 h-3 mr-1" /> Edit Profile</Link>
                </Button>
              </div>

              <div className="space-y-5">
                <div className="flex items-start gap-3">
                  <BookOpen className="w-5 h-5 text-primary mt-0.5" />
                  <div>
                    <p className="text-xs text-muted-foreground">Field of Study</p>
                    <p className="font-medium">{profile.fieldOfStudy}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <GraduationCap className="w-5 h-5 text-primary mt-0.5" />
                  <div>
                    <p className="text-xs text-muted-foreground">Degree Level</p>
                    <p className="font-medium capitalize">{profile.degreeLevel === 'bachelors' ? "Bachelor's" : profile.degreeLevel === 'masters' ? "Master's" : 'PhD'}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 flex items-center justify-center text-primary mt-0.5 text-sm font-bold">📊</div>
                  <div>
                    <p className="text-xs text-muted-foreground">GPA</p>
                    <p className="font-medium">{profile.gpaOriginal} ({profile.gpaNormalized}/4.0)</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <DollarSign className="w-5 h-5 text-primary mt-0.5" />
                  <div>
                    <p className="text-xs text-muted-foreground">Monthly Budget</p>
                    <p className="font-medium">€{profile.monthlyBudgetEur}/month</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Languages className="w-5 h-5 text-primary mt-0.5" />
                  <div>
                    <p className="text-xs text-muted-foreground">Languages</p>
                    <div className="flex flex-wrap gap-2 mt-1">
                      {profile.languages.map((l) => (
                        <span key={l.language} className="text-sm px-2 py-0.5 bg-secondary rounded-full">
                          {l.language} ({l.level})
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Globe className="w-5 h-5 text-primary mt-0.5" />
                  <div>
                    <p className="text-xs text-muted-foreground">Nationality</p>
                    <p className="font-medium">{profile.nationality}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-primary mt-0.5" />
                  <div>
                    <p className="text-xs text-muted-foreground">Preferred Countries</p>
                    <div className="flex flex-wrap gap-2 mt-1">
                      {profile.countryPreferences.map((c) => (
                        <span key={c} className="text-sm px-2 py-0.5 bg-secondary rounded-full">{c}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="glass-card rounded-2xl p-8 text-center">
              <p className="text-muted-foreground mb-4">You haven&apos;t completed your profile yet.</p>
              <Button asChild className="rounded-xl bg-gradient-to-r from-primary to-primary/90 hover:opacity-90 border-0">
                <Link href="/onboarding">Complete Profile</Link>
              </Button>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
}
