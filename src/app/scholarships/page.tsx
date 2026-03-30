'use client';

import { useMemo, useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useAppStore } from '@/lib/store';
import { scholarships } from '@/lib/seed-data';
import { getScholarshipRecommendations } from '@/lib/matching';
import { Heart, Calendar, TrendingUp, Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { motion } from 'framer-motion';
import { toast } from 'sonner';

export default function ScholarshipsBrowsePage() {
  const router = useRouter();
  const { profile, isAuthenticated, toggleBookmark, isBookmarked } = useAppStore();
  const [search, setSearch] = useState('');

  const allRecs = useMemo(() => {
    if (!profile) return [];
    return getScholarshipRecommendations(profile, scholarships);
  }, [profile]);

  useEffect(() => {
    if (!isAuthenticated || !profile) {
      router.push('/auth/login');
    }
  }, [isAuthenticated, profile, router]);

  if (!isAuthenticated || !profile) {
    return null;
  }

  const filtered = allRecs.filter((s) =>
    s.name.toLowerCase().includes(search.toLowerCase()) || s.provider.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="text-2xl sm:text-3xl font-bold mb-2">Scholarships</h1>
          <p className="text-muted-foreground mb-6">Scholarships matched to your profile and eligibility</p>

          <div className="relative max-w-md mb-8">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input placeholder="Search scholarships..." value={search} onChange={(e) => setSearch(e.target.value)} className="pl-10 bg-secondary border-border rounded-xl" />
          </div>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((sch, i) => (
            <motion.div key={sch.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.03 * i }}>
              <Link href={`/scholarships/${sch.id}`}>
                <div className="glass-card rounded-2xl p-5 h-full group cursor-pointer">
                  <div className="flex items-start justify-between mb-3">
                    <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-bold border ${sch.matchScore.overall >= 85 ? 'match-high-bg match-high' : sch.matchScore.overall >= 70 ? 'match-medium-bg match-medium' : 'match-low-bg match-low'}`}>
                      <TrendingUp className="w-3 h-3" /> {sch.matchScore.overall}%
                    </span>
                    <button
                      onClick={(e) => { e.preventDefault(); e.stopPropagation(); toggleBookmark(sch.id, 'scholarship'); toast(isBookmarked(sch.id) ? 'Removed' : 'Saved!'); }}
                      className="p-1.5 rounded-full hover:bg-secondary"
                    >
                      <Heart className={`w-4 h-4 ${isBookmarked(sch.id) ? 'fill-red-500 text-red-500' : 'text-muted-foreground'}`} />
                    </button>
                  </div>
                  <h3 className="font-semibold text-sm mb-1 group-hover:text-primary transition-colors">{sch.name}</h3>
                  <p className="text-xs text-muted-foreground mb-2">{sch.provider}</p>
                  <p className="text-sm font-medium text-primary mb-3">{sch.amountDescription}</p>
                  <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                    <Calendar className="w-3 h-3" />
                    {new Date(sch.applicationDeadline).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-16 text-muted-foreground">No scholarships match your search.</div>
        )}
      </div>
    </div>
  );
}
