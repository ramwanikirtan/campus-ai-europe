'use client';

import { usePathname } from 'next/navigation';
import Navbar from '@/components/Navbar';
import AIAssistant from '@/components/AIAssistant';
import { Toaster } from 'sonner';

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isOnboarding = pathname === '/onboarding';

  return (
    <>
      {!isOnboarding && <Navbar />}
      <main className={!isOnboarding ? 'pt-16' : ''}>
        {children}
      </main>
      {!isOnboarding && <AIAssistant />}
      <Toaster position="top-right" theme="dark" />
    </>
  );
}
