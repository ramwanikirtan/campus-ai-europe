'use client';

import { useMemo, useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useAppStore } from '@/lib/store';
import { scholarships } from '@/lib/seed-data';
import { getScholarshipRecommendations } from '@/lib/matching';
import { Heart, Calendar, TrendingUp, Search, SlidersHorizontal, X, Award, RotateCcw } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';
import { toast } from 'sonner';

type SortOption = 'match' | 'deadline' | 'amount';
type ScholarshipType = 'full_tuition' | 'partial' | 'stipend' | 'travel_grant';

const typeLabels: Record<ScholarshipType, string> = {
  full_tuition: 'Full Tuition',
  partial: 'Partial',
  stipend: 'Stipend',
  travel_grant: 'Travel Grant',
};

export default function ScholarshipsBrowsePage() {
  const router = useRouter();
  const { profile, isAuthenticated, isLoading, toggleBookmark, isBookmarked } = useAppStore();
  const [search, setSearch] = useState('');
  const [selectedTypes, setSelectedTypes] = useState<ScholarshipType[]>([]);
  const [minMatch, setMinMatch] = useState(0);
  const [deadlineOnly, setDeadlineOnly] = useState(false);
  const [sortBy, setSortBy] = useState<SortOption>('match');
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  const allRecs = useMemo(() => {
    if (!profile) {
      return scholarships.map(s => ({
        ...s,
        matchScore: { overall: 0, fieldOfStudy: 0, degreeLevel: 0, gpa: 0, budget: 0, language: 0, nationality: 0 },
      }));
    }
    return getScholarshipRecommendations(profile, scholarships);
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

  const types = [...new Set(allRecs.map(s => s.type))] as ScholarshipType[];

  const filtered = allRecs
    .filter((s) => {
      const matchesSearch = s.name.toLowerCase().includes(search.toLowerCase()) || s.provider.toLowerCase().includes(search.toLowerCase());
      const matchesType = selectedTypes.length === 0 || selectedTypes.includes(s.type as ScholarshipType);
      const matchesMatch = s.matchScore.overall >= minMatch;
      const daysLeft = Math.ceil((new Date(s.applicationDeadline).getTime() - Date.now()) / (1000 * 60 * 60 * 24));
      const matchesDeadline = !deadlineOnly || daysLeft > 0;
      return matchesSearch && matchesType && matchesMatch && matchesDeadline;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'match': return b.matchScore.overall - a.matchScore.overall;
        case 'deadline': return new Date(a.applicationDeadline).getTime() - new Date(b.applicationDeadline).getTime();
        case 'amount': return b.amountEurMonthly - a.amountEurMonthly;
        default: return 0;
      }
    });

  const toggleType = (t: ScholarshipType) => {
    setSelectedTypes(prev => prev.includes(t) ? prev.filter(x => x !== t) : [...prev, t]);
  };

  const activeFilterCount = (selectedTypes.length > 0 ? 1 : 0) + (minMatch > 0 ? 1 : 0) + (deadlineOnly ? 1 : 0);

  const clearFilters = () => {
    setSelectedTypes([]);
    setMinMatch(0);
    setDeadlineOnly(false);
    setSearch('');
  };

  const FilterSidebar = ({ mobile = false }: { mobile?: boolean }) => (
    <div className={`${mobile ? '' : 'sticky top-24'} space-y-6`}>
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

      {/* Type Filter */}
      <div>
        <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Scholarship Type</p>
        <div className="space-y-1.5">
          {types.map((t) => {
            const count = allRecs.filter(s => s.type === t).length;
            return (
              <label key={t} className="flex items-center gap-2.5 py-1.5 px-2 rounded-lg hover:bg-secondary/50 cursor-pointer transition-colors text-sm">
                <input
                  type="checkbox"
                  checked={selectedTypes.includes(t)}
                  onChange={() => toggleType(t)}
                  className="rounded border-border accent-primary w-3.5 h-3.5"
                />
                <span className="flex-1">{typeLabels[t]}</span>
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

      {/* Deadline Filter */}
      <div>
        <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Deadline</p>
        <label className="flex items-center gap-2.5 py-1.5 px-2 rounded-lg hover:bg-secondary/50 cursor-pointer transition-colors text-sm">
          <input
            type="checkbox"
            checked={deadlineOnly}
            onChange={(e) => setDeadlineOnly(e.target.checked)}
            className="rounded border-border accent-primary w-3.5 h-3.5"
          />
          <span>Open applications only</span>
        </label>
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
          <option value="deadline">Earliest Deadline</option>
          <option value="amount">Highest Amount</option>
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
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[oklch(0.82_0.17_85)] to-[oklch(0.75_0.15_85)] flex items-center justify-center shadow-lg shadow-[oklch(0.82_0.17_85_/_0.2)]">
              <Award className="w-5 h-5 text-white" />
            </div>
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold">Scholarships</h1>
              <p className="text-sm text-muted-foreground">{filtered.length} scholarships matched to your profile</p>
            </div>
          </div>
        </motion.div>

        {/* Search bar + mobile filter toggle */}
        <div className="flex gap-3 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              placeholder="Search scholarships, providers..."
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
            {selectedTypes.map(t => (
              <button
                key={t}
                onClick={() => toggleType(t)}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-sm text-primary hover:bg-primary/20 transition-colors"
              >
                {typeLabels[t]}
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
            {deadlineOnly && (
              <button
                onClick={() => setDeadlineOnly(false)}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-sm text-primary hover:bg-primary/20 transition-colors"
              >
                Open only
                <X className="w-3 h-3" />
              </button>
            )}
          </div>
        )}

        {/* Main layout */}
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
              {filtered.map((sch, i) => {
                const daysLeft = Math.ceil((new Date(sch.applicationDeadline).getTime() - Date.now()) / (1000 * 60 * 60 * 24));
                return (
                  <motion.div key={sch.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.03 * Math.min(i, 10) }}>
                    <Link href={`/scholarships/${sch.id}`}>
                      <div className="glass-card rounded-2xl p-5 h-full group cursor-pointer border border-border/50 hover:border-[oklch(0.82_0.17_85_/_0.3)] transition-all">
                        <div className="flex items-start justify-between mb-3">
                          {sch.matchScore.overall > 0 ? (
                            <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-bold border ${sch.matchScore.overall >= 85 ? 'match-high-bg match-high' : sch.matchScore.overall >= 70 ? 'match-medium-bg match-medium' : 'match-low-bg match-low'}`}>
                              <TrendingUp className="w-3 h-3" /> {sch.matchScore.overall}%
                            </span>
                          ) : <span />}
                          <button
                            onClick={(e) => { e.preventDefault(); e.stopPropagation(); toggleBookmark(sch.id, 'scholarship'); toast(isBookmarked(sch.id) ? 'Removed' : 'Saved!'); }}
                            className="p-1.5 rounded-full hover:bg-secondary"
                          >
                            <Heart className={`w-4 h-4 ${isBookmarked(sch.id) ? 'fill-red-500 text-red-500' : 'text-muted-foreground'}`} />
                          </button>
                        </div>
                        <div className="mb-2">
                          <span className="text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-full bg-secondary text-muted-foreground border border-border/50">
                            {typeLabels[sch.type as ScholarshipType]}
                          </span>
                        </div>
                        <h3 className="font-semibold text-sm mb-1 group-hover:text-primary transition-colors">{sch.name}</h3>
                        <p className="text-xs text-muted-foreground mb-2">{sch.provider}</p>
                        <p className="text-sm font-medium text-primary mb-3">{sch.amountDescription}</p>
                        <div className="flex items-center justify-between text-xs text-muted-foreground pt-3 border-t border-border/50">
                          <div className="flex items-center gap-1.5">
                            <Calendar className="w-3 h-3" />
                            {new Date(sch.applicationDeadline).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                          </div>
                          <span className={`font-medium ${daysLeft > 60 ? 'text-green-400' : daysLeft > 14 ? 'text-yellow-400' : daysLeft > 0 ? 'text-red-400' : 'text-muted-foreground'}`}>
                            {daysLeft > 0 ? `${daysLeft}d left` : 'Closed'}
                          </span>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                );
              })}
            </div>

            {filtered.length === 0 && (
              <div className="text-center py-16">
                <Award className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                <p className="text-muted-foreground mb-4">No scholarships match your filters.</p>
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
