'use client';

import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { useSession, signOut } from 'next-auth/react';
import { useState, useEffect, useMemo, useCallback } from 'react';
import { User, UserProfile, TrackerCard, ChatMessage, TrackerStatus } from './types';

// ---------------------------------------------------------------------------
// Internal Zustand store — holds everything EXCEPT auth identity
// ---------------------------------------------------------------------------
interface InternalState {
  _userId: string;

  // Profile
  profile: UserProfile | null;
  setProfile: (profile: UserProfile) => void;

  // Tracker
  trackerCards: TrackerCard[];
  addTrackerCard: (card: Omit<TrackerCard, 'id' | 'createdAt' | 'position'>) => boolean;
  removeTrackerCard: (cardId: string) => void;
  moveTrackerCard: (cardId: string, newStatus: TrackerStatus) => void;

  // Bookmarks
  bookmarkedIds: string[];
  toggleBookmark: (itemId: string, itemType: 'university' | 'scholarship') => void;
  isBookmarked: (itemId: string) => boolean;

  // Chat
  chatMessages: ChatMessage[];
  addChatMessage: (message: ChatMessage) => void;
  clearChat: () => void;
  isChatOpen: boolean;
  toggleChat: () => void;

  // Housekeeping
  clearUserData: () => void;
}

export const useInternalStore = create<InternalState>()(
  persist(
    (set, get) => ({
      _userId: '',

      // Profile
      profile: null,
      setProfile: (profile: UserProfile) => set({ profile }),

      // Tracker
      trackerCards: [],
      addTrackerCard: (card) => {
        const existing = get().trackerCards.find(
          (c) => c.itemId === card.itemId && c.itemType === card.itemType
        );
        if (existing) return false;

        const newCard: TrackerCard = {
          ...card,
          id: `card-${Date.now()}-${Math.random().toString(36).slice(2)}`,
          position: get().trackerCards.filter((c) => c.status === card.status).length,
          createdAt: new Date().toISOString(),
        };
        set({ trackerCards: [...get().trackerCards, newCard] });
        return true;
      },
      removeTrackerCard: (cardId: string) => {
        set({ trackerCards: get().trackerCards.filter((c) => c.id !== cardId) });
      },
      moveTrackerCard: (cardId: string, newStatus: TrackerStatus) => {
        set({
          trackerCards: get().trackerCards.map((c) =>
            c.id === cardId ? { ...c, status: newStatus } : c
          ),
        });
      },

      // Bookmarks
      bookmarkedIds: [],
      toggleBookmark: (itemId: string, itemType: 'university' | 'scholarship') => {
        const current = get().bookmarkedIds;
        if (current.includes(itemId)) {
          set({ bookmarkedIds: current.filter((id) => id !== itemId) });
          get().removeTrackerCard(
            get().trackerCards.find((c) => c.itemId === itemId)?.id || ''
          );
        } else {
          set({ bookmarkedIds: [...current, itemId] });
          get().addTrackerCard({
            userId: get()._userId,
            itemType,
            itemId,
            status: 'interested',
          });
        }
      },
      isBookmarked: (itemId: string) => get().bookmarkedIds.includes(itemId),

      // Chat
      chatMessages: [],
      addChatMessage: (message: ChatMessage) => {
        set({ chatMessages: [...get().chatMessages, message] });
      },
      clearChat: () => set({ chatMessages: [] }),
      isChatOpen: false,
      toggleChat: () => set({ isChatOpen: !get().isChatOpen }),

      // Housekeeping
      clearUserData: () =>
        set({
          _userId: '',
          profile: null,
          trackerCards: [],
          bookmarkedIds: [],
          chatMessages: [],
        }),
    }),
    {
      name: 'campus-ai-store',
    }
  )
);

// ---------------------------------------------------------------------------
// Public hook — same interface every component already uses
// ---------------------------------------------------------------------------
export function useAppStore() {
  const [mounted, setMounted] = useState(false);
  const { data: session, status } = useSession();
  const store = useInternalStore();

  useEffect(() => {
    setMounted(true);
  }, []);

  // Sync the authenticated user's id into zustand so bookmark/tracker logic
  // can reference it without needing the session directly.
  const userId = session?.user?.id || '';
  useEffect(() => {
    if (userId && userId !== useInternalStore.getState()._userId) {
      useInternalStore.setState({ _userId: userId });
    }
  }, [userId]);

  // Map the NextAuth session user → app User type
  const user: User | null = useMemo(() => {
    if (!mounted || status !== 'authenticated' || !session?.user) return null;
    return {
      id: session.user.id || '',
      email: session.user.email || '',
      fullName: session.user.name || '',
      avatarUrl: session.user.image || undefined,
      authProvider: (session.user.image ? 'google' : 'email') as 'email' | 'google',
      emailVerified: true,
      createdAt: new Date().toISOString(),
    };
  }, [session, status, mounted]);

  const logout = useCallback(async () => {
    useInternalStore.getState().clearUserData();
    await signOut({ redirectTo: '/' });
  }, []);

  const isLoading = !mounted || status === 'loading';

  return {
    // Auth — sourced from NextAuth
    user,
    isLoading,
    isAuthenticated: mounted && status === 'authenticated',
    login: (_user: User) => {}, // no-op; real auth is handled by NextAuth
    logout,

    // Everything else — sourced from Zustand
    profile: store.profile,
    setProfile: store.setProfile,
    trackerCards: store.trackerCards,
    addTrackerCard: store.addTrackerCard,
    removeTrackerCard: store.removeTrackerCard,
    moveTrackerCard: store.moveTrackerCard,
    bookmarkedIds: store.bookmarkedIds,
    toggleBookmark: store.toggleBookmark,
    isBookmarked: store.isBookmarked,
    chatMessages: store.chatMessages,
    addChatMessage: store.addChatMessage,
    clearChat: store.clearChat,
    isChatOpen: store.isChatOpen,
    toggleChat: store.toggleChat,
  };
}
