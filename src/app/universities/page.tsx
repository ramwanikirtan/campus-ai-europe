'use client';

import { useMemo, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useAppStore } from '@/lib/store';
import { universities } from '@/lib/seed-data';
import { getUniversityRecommendations } from '@/lib/matching';
import { Heart, MapPin, TrendingUp, Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { motion } from 'framer-motion';
import { toast } from 'sonner';
import { useState } from 'react';

function getCountryFlag(c: string) {
  const flags: Record<string, string> = { 'Germany': '🇩🇪', 'Netherlands': '🇳🇱', 'Sweden': '🇸🇪', 'Switzerland': '🇨🇭', 'Austria': '🇦🇹', 'Italy': '🇮🇹', 'Finland': '🇫🇮', 'Poland': '🇵🇱', 'Czech Republic': '🇨🇿' };
  return flags[c] || '🇪🇺';
}

export default function UniversitiesBrowsePage() {
  const router = useRouter();
  const { profile, isAuthenticated, toggleBookmark, isBookmarked } = useAppStore();
  const [search, setSearch] = useState('');
  const [countryFilter, setCountryFilter] = useState('');

  const allRecs = useMemo(() => {
    if (!profile) return [];
    return getUniversityRecommendations(profile, universities);
  }, [profile]);

  useEffect(() => {
    if (!isAuthenticated || !profile) {
      router.push('/auth/login');
    }
  }, [isAuthenticated, profile, router]);

  if (!isAuthenticated || !profile) {
    return null;
  }

  const filtered = allRecs.filter((u) => {
    const matchesSearch = u.name.toLowerCase().includes(search.toLowerCase()) || u.city.toLowerCase().includes(search.toLowerCase());
    const matchesCountry = !countryFilter || u.country === countryFilter;
    return matchesSearch && matchesCountry;
  });

  const countries = [...new Set(allRecs.map((u) => u.country))];

  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="text-2xl sm:text-3xl font-bold mb-2">Universities</h1>
          <p className="text-muted-foreground mb-6">Browse all universities matched to your profile</p>

          <div className="flex flex-col sm:flex-row gap-3 mb-8">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                placeholder="Search universities..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="pl-10 bg-secondary border-border rounded-xl"
              />
            </div>
            <select
              value={countryFilter}
              onChange={(e) => setCountryFilter(e.target.value)}
              className="bg-secondary border border-border rounded-xl px-4 py-2 text-sm"
            >
              <option value="">All Countries</option>
              {countries.map((c) => <option key={c} value={c}>{getCountryFlag(c)} {c}</option>)}
            </select>
          </div>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((uni, i) => (
            <motion.div key={uni.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.03 * i }}>
              <Link href={`/universities/${uni.id}`}>
                <div className="glass-card rounded-2xl p-5 h-full group cursor-pointer">
                  <div className="flex items-start justify-between mb-3">
                    <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-bold border ${uni.matchScore.overall >= 85 ? 'match-high-bg match-high' : uni.matchScore.overall >= 70 ? 'match-medium-bg match-medium' : 'match-low-bg match-low'}`}>
                      <TrendingUp className="w-3 h-3" /> {uni.matchScore.overall}%
                    </span>
                    <button
                      onClick={(e) => { e.preventDefault(); e.stopPropagation(); toggleBookmark(uni.id, 'university'); toast(isBookmarked(uni.id) ? 'Removed' : 'Saved!'); }}
                      className="p-1.5 rounded-full hover:bg-secondary"
                    >
                      <Heart className={`w-4 h-4 ${isBookmarked(uni.id) ? 'fill-red-500 text-red-500' : 'text-muted-foreground'}`} />
                    </button>
                  </div>
                  <h3 className="font-semibold mb-1 group-hover:text-primary transition-colors">{uni.name}</h3>
                  <p className="flex items-center gap-1.5 text-xs text-muted-foreground mb-3">{getCountryFlag(uni.country)} <MapPin className="w-3 h-3" /> {uni.city}, {uni.country}</p>
                  <p className="text-xs text-muted-foreground line-clamp-2 mb-3">{uni.description}</p>
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>{uni.relevantPrograms[0]?.tuitionPerYearEur === 0 ? '🆓 Free' : `€${uni.relevantPrograms[0]?.tuitionPerYearEur?.toLocaleString()}/yr`}</span>
                    {uni.rankingQs && <span>QS #{uni.rankingQs}</span>}
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-16 text-muted-foreground">No universities match your search.</div>
        )}
      </div>
    </div>
  );
}
