'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useAppStore } from '@/lib/store';
import { universities, scholarships } from '@/lib/seed-data';
import { TrackerStatus } from '@/lib/types';
import { Button } from '@/components/ui/button';
import { GraduationCap, Award, MapPin, Calendar, TrendingUp, X, ArrowRight, Trash2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { toast } from 'sonner';

const columns: { status: TrackerStatus; label: string; color: string; bgColor: string }[] = [
  { status: 'interested', label: 'Interested', color: 'text-blue-400', bgColor: 'bg-blue-500/10 border-blue-500/30' },
  { status: 'applied', label: 'Applied', color: 'text-orange-400', bgColor: 'bg-orange-500/10 border-orange-500/30' },
  { status: 'interview', label: 'Interview', color: 'text-purple-400', bgColor: 'bg-purple-500/10 border-purple-500/30' },
  { status: 'accepted', label: 'Accepted', color: 'text-green-400', bgColor: 'bg-green-500/10 border-green-500/30' },
  { status: 'rejected', label: 'Rejected', color: 'text-gray-400', bgColor: 'bg-gray-500/10 border-gray-500/30' },
];

function getCountryFlag(c: string) {
  const flags: Record<string, string> = { 'Germany': '🇩🇪', 'Netherlands': '🇳🇱', 'Sweden': '🇸🇪', 'Switzerland': '🇨🇭', 'Austria': '🇦🇹', 'Italy': '🇮🇹', 'Finland': '🇫🇮', 'Poland': '🇵🇱', 'Czech Republic': '🇨🇿' };
  return flags[c] || '🇪🇺';
}

export default function TrackerPage() {
  const { trackerCards, removeTrackerCard, moveTrackerCard } = useAppStore();
  const [confirmDelete, setConfirmDelete] = useState<string | null>(null);
  const [draggingId, setDraggingId] = useState<string | null>(null);
  const [dragOverCol, setDragOverCol] = useState<TrackerStatus | null>(null);

  const getItemDetails = (itemType: string, itemId: string) => {
    if (itemType === 'university') {
      const uni = universities.find((u) => u.id === itemId);
      if (uni) return { name: uni.name, subtitle: `${uni.city}, ${uni.country}`, country: uni.country, icon: 'uni' };
    } else {
      const sch = scholarships.find((s) => s.id === itemId);
      if (sch) return { name: sch.name, subtitle: sch.amountDescription, country: '', icon: 'sch' };
    }
    return { name: 'Unknown', subtitle: '', country: '', icon: 'uni' };
  };

  const handleDragStart = (e: React.DragEvent, cardId: string) => {
    setDraggingId(cardId);
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/plain', cardId);
  };

  const handleDragOver = (e: React.DragEvent, status: TrackerStatus) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
    setDragOverCol(status);
  };

  const handleDragLeave = () => {
    setDragOverCol(null);
  };

  const handleDrop = (e: React.DragEvent, status: TrackerStatus) => {
    e.preventDefault();
    const cardId = e.dataTransfer.getData('text/plain');
    if (cardId) {
      moveTrackerCard(cardId, status);
      toast.success(`Moved to ${columns.find((c) => c.status === status)?.label}`);
    }
    setDraggingId(null);
    setDragOverCol(null);
  };

  const isEmpty = trackerCards.length === 0;

  return (
    <div className="min-h-screen">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="text-2xl sm:text-3xl font-bold mb-2">Application Tracker</h1>
          <p className="text-muted-foreground mb-6">Drag and drop cards between columns to update your application status</p>
        </motion.div>

        {isEmpty ? (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-20">
            <div className="w-20 h-20 rounded-2xl bg-secondary flex items-center justify-center mx-auto mb-4">
              <GraduationCap className="w-10 h-10 text-muted-foreground" />
            </div>
            <h2 className="text-xl font-bold mb-2">Your tracker is empty!</h2>
            <p className="text-muted-foreground mb-6 max-w-md mx-auto">
              Start by saving universities or scholarships from your Dashboard.
            </p>
            <Button asChild className="rounded-xl bg-gradient-to-r from-[oklch(0.70_0.18_250)] to-[oklch(0.65_0.18_290)] hover:opacity-90 border-0">
              <Link href="/dashboard">Go to Dashboard <ArrowRight className="w-4 h-4 ml-2" /></Link>
            </Button>
          </motion.div>
        ) : (
          <div className="flex gap-4 overflow-x-auto pb-4 snap-x">
            {columns.map((col) => {
              const colCards = trackerCards.filter((c) => c.status === col.status);
              return (
                <div
                  key={col.status}
                  className={`flex-shrink-0 w-72 snap-start rounded-2xl p-3 border transition-all ${
                    dragOverCol === col.status ? 'border-primary bg-primary/5' : 'border-border bg-secondary/30'
                  }`}
                  onDragOver={(e) => handleDragOver(e, col.status)}
                  onDragLeave={handleDragLeave}
                  onDrop={(e) => handleDrop(e, col.status)}
                >
                  {/* Column header */}
                  <div className="flex items-center justify-between mb-3 px-1">
                    <span className={`font-semibold text-sm ${col.color}`}>{col.label}</span>
                    <span className={`text-xs px-2 py-0.5 rounded-full border ${col.bgColor}`}>
                      {colCards.length}
                    </span>
                  </div>

                  {/* Cards */}
                  <div className="space-y-2 min-h-[100px]">
                    <AnimatePresence>
                      {colCards.map((card) => {
                        const details = getItemDetails(card.itemType, card.itemId);
                        return (
                          <motion.div
                            key={card.id}
                            layout
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            draggable
                            onDragStart={(e) => handleDragStart(e as unknown as React.DragEvent, card.id)}
                            onDragEnd={() => { setDraggingId(null); setDragOverCol(null); }}
                            className={`glass-card rounded-xl p-3 cursor-grab active:cursor-grabbing ${
                              draggingId === card.id ? 'opacity-50' : ''
                            }`}
                          >
                            <div className="flex items-start justify-between mb-2">
                              <span className="text-lg">{card.itemType === 'university' ? '🎓' : '💰'}</span>
                              {confirmDelete === card.id ? (
                                <div className="flex gap-1">
                                  <button
                                    onClick={() => { removeTrackerCard(card.id); setConfirmDelete(null); toast.success('Removed'); }}
                                    className="text-xs px-2 py-0.5 rounded bg-red-500/20 text-red-400 hover:bg-red-500/30"
                                  >
                                    Confirm
                                  </button>
                                  <button
                                    onClick={() => setConfirmDelete(null)}
                                    className="text-xs px-2 py-0.5 rounded bg-secondary hover:bg-secondary/80"
                                  >
                                    Cancel
                                  </button>
                                </div>
                              ) : (
                                <button
                                  onClick={() => setConfirmDelete(card.id)}
                                  className="p-1 rounded hover:bg-secondary text-muted-foreground hover:text-destructive"
                                >
                                  <X className="w-3 h-3" />
                                </button>
                              )}
                            </div>
                            <Link href={`/${card.itemType === 'university' ? 'universities' : 'scholarships'}/${card.itemId}`}>
                              <h4 className="text-sm font-semibold mb-1 hover:text-primary transition-colors line-clamp-2">
                                {details.name}
                              </h4>
                            </Link>
                            <p className="text-xs text-muted-foreground">
                              {details.country && <span>{getCountryFlag(details.country)} </span>}
                              {details.subtitle}
                            </p>
                          </motion.div>
                        );
                      })}
                    </AnimatePresence>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
