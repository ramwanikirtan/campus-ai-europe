'use client';

import { useMemo, useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useAppStore } from '@/lib/store';
import { universities } from '@/lib/seed-data';
import { getUniversityRecommendations } from '@/lib/matching';
import { Heart, MapPin, TrendingUp, Search, SlidersHorizontal, X, ChevronDown, GraduationCap, RotateCcw } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';
import { toast } from 'sonner';

function getCountryFlag(c: string) {
  const flags: Record<string, string> = { 'Germany': '🇩🇪', 'Netherlands': '🇳🇱', 'Sweden': '🇸🇪', 'Switzerland': '🇨🇭', 'Austria': '🇦🇹', 'Italy': '🇮🇹', 'Finland': '🇫🇮', 'Poland': '🇵🇱', 'Czech Republic': '🇨🇿' };
  return flags[c] || '🇪🇺';
}

type SortOption = 'match' | 'ranking' | 'tuition' | 'living-cost';

export default function UniversitiesBrowsePage() {
  const router = useRouter();
  const { profile, isAuthenticated, isLoading, toggleBookmark, isBookmarked } = useAppStore();
  const [search, setSearch] = useState('');
  const [selectedCountries, setSelectedCountries] = useState<string[]>([]);
  const [tuitionRange, setTuitionRange] = useState<[number, number]>([0, 20000]);
  const [minMatch, setMinMatch] = useState(0);
  const [freeTuitionOnly, setFreeTuitionOnly] = useState(false);
  const [sortBy, setSortBy] = useState<SortOption>('match');
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  const allRecs = useMemo(() => {
    if (!profile) {
      // Show all universities without match scores when no profile
      return universities.map(u => ({
        ...u,
        matchScore: { overall: 0, fieldOfStudy: 0, degreeLevel: 0, gpa: 0, budget: 0, language: 0, nationality: 0 },
        relevantPrograms: u.programs,
      }));
    }
    return getUniversityRecommendations(profile, universities);
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

  const countries = [...new Set(allRecs.map((u) => u.country))].sort();

  const filtered = allRecs
    .filter((u) => {
      const matchesSearch = u.name.toLowerCase().includes(search.toLowerCase()) || u.city.toLowerCase().includes(search.toLowerCase());
      const matchesCountry = selectedCountries.length === 0 || selectedCountries.includes(u.country);
      const matchesMatch = u.matchScore.overall >= minMatch;
      const minTuition = Math.min(...u.relevantPrograms.map(p => p.tuitionPerYearEur), u.programs[0]?.tuitionPerYearEur ?? 0);
      const matchesTuition = freeTuitionOnly ? minTuition === 0 : minTuition >= tuitionRange[0] && minTuition <= tuitionRange[1];
      return matchesSearch && matchesCountry && matchesMatch && matchesTuition;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'match': return b.matchScore.overall - a.matchScore.overall;
        case 'ranking': return (a.rankingQs || 999) - (b.rankingQs || 999);
        case 'tuition': {
          const at = a.relevantPrograms[0]?.tuitionPerYearEur ?? 99999;
          const bt = b.relevantPrograms[0]?.tuitionPerYearEur ?? 99999;
          return at - bt;
        }
        case 'living-cost': return a.estimatedMonthlyLivingCostEur - b.estimatedMonthlyLivingCostEur;
        default: return 0;
      }
    });

  const toggleCountry = (c: string) => {
    setSelectedCountries(prev => prev.includes(c) ? prev.filter(x => x !== c) : [...prev, c]);
  };

  const activeFilterCount = (selectedCountries.length > 0 ? 1 : 0) + (minMatch > 0 ? 1 : 0) + (freeTuitionOnly ? 1 : 0);

  const clearFilters = () => {
    setSelectedCountries([]);
    setTuitionRange([0, 20000]);
    setMinMatch(0);
    setFreeTuitionOnly(false);
    setSearch('');
  };

  const FilterSidebar = ({ mobile = false }: { mobile?: boolean }) => (
    <div className={`${mobile ? '' : 'sticky top-24'} space-y-6`}>
      {/* Header */}
      <div className="flex items-center justify-between">
        <h3 className="font-semibold flex items-center gap-2">
          <SlidersHorizontal className="w-4 h-4" />
          Filters
          {activeFilterCount > 0 && (
            <span className="text-xs px-1.5 py-0.5 rounded-full bg-primary text-primary-foreground">{activeFilterCount}</span>
          )}
        </h3>
        {activeFilterCount > 0 && (
          <button onClick={clearFilters} className="text-xs text-primary hover:underline flex items-center gap-1">
            <RotateCcw className="w-3 h-3" /> Clear All
          </button>
        )}
      </div>

      {/* Country Filter */}
      <div>
        <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Location</p>
        <div className="space-y-1.5 max-h-48 overflow-y-auto pr-1">
          {countries.map((c) => {
            const count = allRecs.filter(u => u.country === c).length;
            return (
              <label key={c} className="flex items-center gap-2.5 py-1.5 px-2 rounded-lg hover:bg-secondary/50 cursor-pointer transition-colors text-sm group">
                <input
                  type="checkbox"
                  checked={selectedCountries.includes(c)}
                  onChange={() => toggleCountry(c)}
                  className="rounded border-border accent-primary w-3.5 h-3.5"
                />
                <span className="text-base leading-none">{getCountryFlag(c)}</span>
                <span className="flex-1">{c}</span>
                <span className="text-xs text-muted-foreground">{count}</span>
              </label>
            );
          })}
        </div>
      </div>

      {/* Match Score Filter */}
      <div>
        <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Min Match Score</p>
        <div className="px-1">
          <input
            type="range"
            min={0}
            max={100}
            step={5}
            value={minMatch}
            onChange={(e) => setMinMatch(Number(e.target.value))}
            className="w-full accent-primary"
          />
          <div className="flex justify-between text-xs text-muted-foreground mt-1">
            <span>0%</span>
            <span className="font-medium text-foreground">{minMatch}%</span>
            <span>100%</span>
          </div>
        </div>
      </div>

      {/* Tuition Filter */}
      <div>
        <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Tuition</p>
        <label className="flex items-center gap-2.5 py-1.5 px-2 rounded-lg hover:bg-secondary/50 cursor-pointer transition-colors text-sm">
          <input
            type="checkbox"
            checked={freeTuitionOnly}
            onChange={(e) => setFreeTuitionOnly(e.target.checked)}
            className="rounded border-border accent-primary w-3.5 h-3.5"
          />
          <span>Free tuition only</span>
        </label>
        {!freeTuitionOnly && (
          <div className="mt-3 px-1">
            <input
              type="range"
              min={0}
              max={20000}
              step={1000}
              value={tuitionRange[1]}
              onChange={(e) => setTuitionRange([0, Number(e.target.value)])}
              className="w-full accent-primary"
            />
            <div className="flex justify-between text-xs text-muted-foreground mt-1">
              <span>€0</span>
              <span className="font-medium text-foreground">up to €{tuitionRange[1].toLocaleString()}/yr</span>
            </div>
          </div>
        )}
      </div>

      {/* Sort */}
      <div>
        <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Sort By</p>
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value as SortOption)}
          className="w-full bg-secondary border border-border rounded-xl px-3 py-2 text-sm"
        >
          <option value="match">Best Match</option>
          <option value="ranking">QS Ranking</option>
          <option value="tuition">Lowest Tuition</option>
          <option value="living-cost">Lowest Living Cost</option>
        </select>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-6">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center shadow-lg shadow-primary/20">
              <GraduationCap className="w-5 h-5 text-white" />
            </div>
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold">Universities</h1>
              <p className="text-sm text-muted-foreground">{filtered.length} universities matched to your profile</p>
            </div>
          </div>
        </motion.div>

        {/* Search bar + mobile filter toggle */}
        <div className="flex gap-3 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              placeholder="Search universities, cities..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-10 bg-secondary border-border rounded-xl"
            />
          </div>
          <Button
            variant="outline"
            className="lg:hidden rounded-xl gap-2"
            onClick={() => setMobileSidebarOpen(true)}
          >
            <SlidersHorizontal className="w-4 h-4" />
            Filters
            {activeFilterCount > 0 && (
              <span className="text-xs px-1.5 py-0.5 rounded-full bg-primary text-primary-foreground">{activeFilterCount}</span>
            )}
          </Button>
          <Button
            variant="outline"
            className="hidden lg:flex rounded-xl gap-2"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            <SlidersHorizontal className="w-4 h-4" />
            {sidebarOpen ? 'Hide Filters' : 'Show Filters'}
          </Button>
        </div>

        {/* Active filter chips */}
        {activeFilterCount > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {selectedCountries.map(c => (
              <button
                key={c}
                onClick={() => toggleCountry(c)}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-sm text-primary hover:bg-primary/20 transition-colors"
              >
                {getCountryFlag(c)} {c}
                <X className="w-3 h-3" />
              </button>
            ))}
            {minMatch > 0 && (
              <button
                onClick={() => setMinMatch(0)}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-sm text-primary hover:bg-primary/20 transition-colors"
              >
                Match ≥ {minMatch}%
                <X className="w-3 h-3" />
              </button>
            )}
            {freeTuitionOnly && (
              <button
                onClick={() => setFreeTuitionOnly(false)}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-sm text-primary hover:bg-primary/20 transition-colors"
              >
                Free tuition
                <X className="w-3 h-3" />
              </button>
            )}
          </div>
        )}

        {/* Main layout: sidebar + grid */}
        <div className="flex gap-6">
          {/* Desktop sidebar */}
          <AnimatePresence>
            {sidebarOpen && (
              <motion.aside
                initial={{ width: 0, opacity: 0 }}
                animate={{ width: 280, opacity: 1 }}
                exit={{ width: 0, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="hidden lg:block flex-shrink-0 overflow-hidden"
              >
                <div className="w-[280px] glass-card rounded-2xl p-5 border border-border/50">
                  <FilterSidebar />
                </div>
              </motion.aside>
            )}
          </AnimatePresence>

          {/* Cards grid */}
          <div className="flex-1 min-w-0">
            <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-4">
              {filtered.map((uni, i) => (
                <motion.div key={uni.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.03 * Math.min(i, 10) }}>
                  <Link href={`/universities/${uni.id}`}>
                    <div className="glass-card rounded-2xl p-5 h-full group cursor-pointer border border-border/50 hover:border-primary/30 transition-all">
                      <div className="flex items-start justify-between mb-3">
                        {uni.matchScore.overall > 0 ? (
                          <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-bold border ${uni.matchScore.overall >= 85 ? 'match-high-bg match-high' : uni.matchScore.overall >= 70 ? 'match-medium-bg match-medium' : 'match-low-bg match-low'}`}>
                            <TrendingUp className="w-3 h-3" /> {uni.matchScore.overall}%
                          </span>
                        ) : <span />}
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
                      <div className="flex justify-between text-xs text-muted-foreground pt-3 border-t border-border/50">
                        <span className={uni.relevantPrograms[0]?.tuitionPerYearEur === 0 ? 'text-green-400 font-medium' : ''}>
                          {uni.relevantPrograms[0]?.tuitionPerYearEur === 0 ? '🆓 Free' : `€${uni.relevantPrograms[0]?.tuitionPerYearEur?.toLocaleString()}/yr`}
                        </span>
                        {uni.rankingQs && <span className="bg-secondary/50 px-2 py-0.5 rounded-full">QS #{uni.rankingQs}</span>}
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>

            {filtered.length === 0 && (
              <div className="text-center py-16">
                <GraduationCap className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                <p className="text-muted-foreground mb-4">No universities match your filters.</p>
                <Button variant="outline" onClick={clearFilters} className="rounded-xl">Clear all filters</Button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile sidebar overlay */}
      <AnimatePresence>
        {mobileSidebarOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 z-40 lg:hidden"
              onClick={() => setMobileSidebarOpen(false)}
            />
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="fixed inset-y-0 left-0 w-80 bg-background border-r border-border z-50 lg:hidden overflow-y-auto p-6"
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-semibold text-lg">Filters</h3>
                <button onClick={() => setMobileSidebarOpen(false)} className="p-2 rounded-lg hover:bg-secondary">
                  <X className="w-5 h-5" />
                </button>
              </div>
              <FilterSidebar mobile />
              <Button className="w-full mt-6 rounded-xl" onClick={() => setMobileSidebarOpen(false)}>
                Show {filtered.length} results
              </Button>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
