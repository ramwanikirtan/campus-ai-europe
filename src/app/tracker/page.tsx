'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useAppStore } from '@/lib/store';
import { universities, scholarships } from '@/lib/seed-data';
import { TrackerStatus } from '@/lib/types';
import { Button } from '@/components/ui/button';
import { GraduationCap, Award, MapPin, Calendar, TrendingUp, X, ArrowRight, Trash2, KanbanSquare } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { toast } from 'sonner';

const columns: { status: TrackerStatus; label: string; color: string; bgColor: string; gradient: string }[] = [
  { status: 'interested', label: 'Interested', color: 'text-blue-400', bgColor: 'bg-blue-500/10 border-blue-500/30', gradient: 'from-blue-500/20 to-blue-600/10' },
  { status: 'applied', label: 'Applied', color: 'text-orange-400', bgColor: 'bg-orange-500/10 border-orange-500/30', gradient: 'from-orange-500/20 to-orange-600/10' },
  { status: 'interview', label: 'Interview', color: 'text-purple-400', bgColor: 'bg-purple-500/10 border-purple-500/30', gradient: 'from-purple-500/20 to-purple-600/10' },
  { status: 'accepted', label: 'Accepted', color: 'text-green-400', bgColor: 'bg-green-500/10 border-green-500/30', gradient: 'from-green-500/20 to-green-600/10' },
  { status: 'rejected', label: 'Rejected', color: 'text-gray-400', bgColor: 'bg-gray-500/10 border-gray-500/30', gradient: 'from-gray-500/20 to-gray-600/10' },
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
    <div className="min-h-screen pb-8">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center shadow-lg shadow-[oklch(0.65_0.18_290_/_0.25)]">
              <KanbanSquare className="w-5 h-5 text-white" />
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold">Application Tracker</h1>
          </div>
          <p className="text-muted-foreground">Drag and drop cards between columns to update your application status</p>
        </motion.div>

        {isEmpty ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-20"
          >
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-24 h-24 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 flex items-center justify-center mx-auto mb-6"
            >
              <GraduationCap className="w-12 h-12 text-muted-foreground" />
            </motion.div>
            <h2 className="text-2xl font-bold mb-3">Your tracker is empty!</h2>
            <p className="text-muted-foreground mb-8 max-w-md mx-auto">
              Start by saving universities or scholarships from your Dashboard to track your applications.
            </p>
            <Button
              asChild
              className="rounded-xl bg-gradient-to-r from-primary to-primary/90 hover:opacity-90 border-0 shadow-lg shadow-primary/25 transition-all hover:scale-105"
            >
              <Link href="/dashboard">
                Go to Dashboard
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </motion.div>
        ) : (
          <div className="flex gap-4 overflow-x-auto pb-4 snap-x">
            {columns.map((col) => {
              const colCards = trackerCards.filter((c) => c.status === col.status);
              return (
                <div
                  key={col.status}
                  className={`flex-shrink-0 w-80 snap-start rounded-2xl p-3 border transition-all ${
                    dragOverCol === col.status
                      ? 'border-primary bg-primary/5 scale-[1.02]'
                      : 'border-border/50 bg-gradient-to-b from-secondary/30 to-secondary/20'
                  }`}
                  onDragOver={(e) => handleDragOver(e, col.status)}
                  onDragLeave={handleDragLeave}
                  onDrop={(e) => handleDrop(e, col.status)}
                >
                  {/* Column header */}
                  <div className={`flex items-center justify-between mb-3 px-2 py-2 rounded-xl bg-gradient-to-r ${col.gradient} border border-border/50`}>
                    <span className={`font-semibold text-sm ${col.color}`}>{col.label}</span>
                    <span className={`text-xs px-2 py-1 rounded-full border font-medium ${col.bgColor}`}>
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
                            initial={{ opacity: 0, scale: 0.9, y: -10 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            draggable
                            onDragStart={(e) => handleDragStart(e as unknown as React.DragEvent, card.id)}
                            onDragEnd={() => { setDraggingId(null); setDragOverCol(null); }}
                            className={`glass-card rounded-xl p-3 cursor-grab active:cursor-grabbing border border-border/50 hover:border-primary/30 transition-all ${
                              draggingId === card.id ? 'opacity-50 scale-105' : 'hover:shadow-lg hover:shadow-primary/5'
                            }`}
                          >
                            <div className="flex items-start justify-between mb-2">
                              <div className="w-8 h-8 rounded-lg bg-secondary/50 flex items-center justify-center text-lg flex-shrink-0">
                                {card.itemType === 'university' ? '🎓' : '💰'}
                              </div>
                              {confirmDelete === card.id ? (
                                <div className="flex gap-1">
                                  <button
                                    onClick={() => { removeTrackerCard(card.id); setConfirmDelete(null); toast.success('Removed from tracker'); }}
                                    className="text-xs px-2 py-1 rounded-lg bg-red-500/20 text-red-400 hover:bg-red-500/30 font-medium transition-all"
                                  >
                                    Confirm
                                  </button>
                                  <button
                                    onClick={() => setConfirmDelete(null)}
                                    className="text-xs px-2 py-1 rounded-lg bg-secondary hover:bg-secondary/80 transition-all"
                                  >
                                    Cancel
                                  </button>
                                </div>
                              ) : (
                                <button
                                  onClick={() => setConfirmDelete(card.id)}
                                  className="p-1.5 rounded-lg hover:bg-secondary/80 text-muted-foreground hover:text-destructive transition-all"
                                >
                                  <X className="w-3.5 h-3.5" />
                                </button>
                              )}
                            </div>
                            <Link href={`/${card.itemType === 'university' ? 'universities' : 'scholarships'}/${card.itemId}`}>
                              <h4 className="text-sm font-semibold mb-2 hover:text-primary transition-colors line-clamp-2">
                                {details.name}
                              </h4>
                            </Link>
                            <p className="text-xs text-muted-foreground flex items-center gap-1.5">
                              {details.country && (
                                <span className="text-base">{getCountryFlag(details.country)}</span>
                              )}
                              <span className="line-clamp-2">{details.subtitle}</span>
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
