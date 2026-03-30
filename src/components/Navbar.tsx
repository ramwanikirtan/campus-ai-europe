'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useAppStore } from '@/lib/store';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { GraduationCap, LayoutDashboard, Building2, Award, KanbanSquare, User, LogOut, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

export default function Navbar() {
  const { isAuthenticated, user, logout, profile } = useAppStore();
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isPublicPage = pathname === '/' || pathname.startsWith('/auth');

  const navLinks = [
    { href: '/dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { href: '/universities', label: 'Universities', icon: Building2 },
    { href: '/scholarships', label: 'Scholarships', icon: Award },
    { href: '/tracker', label: 'App Tracker', icon: KanbanSquare },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href={isAuthenticated ? '/dashboard' : '/'} className="flex items-center gap-2.5 group">
            <motion.div
              whileHover={{ scale: 1.1, rotate: 5 }}
              className="w-9 h-9 rounded-xl bg-gradient-to-br from-[oklch(0.70_0.18_250)] to-[oklch(0.65_0.18_290)] flex items-center justify-center shadow-lg shadow-primary/20"
            >
              <GraduationCap className="w-5 h-5 text-white" />
            </motion.div>
            <span className="text-lg font-bold gradient-text hidden sm:block">Campus AI</span>
          </Link>

          {/* Desktop Nav Links */}
          {isAuthenticated && !isPublicPage && (
            <div className="hidden md:flex items-center gap-1.5">
              {navLinks.map((link) => {
                const isActive = pathname === link.href || pathname.startsWith(link.href + '/');
                const Icon = link.icon;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`flex items-center gap-2 px-3 py-2 rounded-xl text-sm font-medium transition-all ${
                      isActive
                        ? 'bg-gradient-to-r from-[oklch(0.70_0.18_250_/_0.15)] to-[oklch(0.65_0.18_290_/_0.15)] text-primary border border-primary/20'
                        : 'text-muted-foreground hover:text-foreground hover:bg-secondary/50'
                    }`}
                  >
                    <Icon className={`w-4 h-4 ${isActive ? 'scale-110 transition-transform' : ''}`} />
                    {link.label}
                  </Link>
                );
              })}
            </div>
          )}

          {/* Right side */}
          <div className="flex items-center gap-3">
            {isAuthenticated ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="flex items-center gap-2 px-2 hover:bg-secondary/50 transition-all">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[oklch(0.70_0.18_250)] to-[oklch(0.65_0.18_290)] flex items-center justify-center text-sm font-bold text-white shadow-md">
                      {user?.fullName?.charAt(0) || 'U'}
                    </div>
                    <span className="hidden sm:block text-sm font-medium">{user?.fullName?.split(' ')[0]}</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-48 bg-card border-border shadow-xl">
                  <DropdownMenuItem asChild>
                    <Link href="/profile" className="flex items-center gap-2">
                      <User className="w-4 h-4" />
                      Profile
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem
                    onClick={() => logout()}
                    className="text-destructive focus:text-destructive focus:bg-destructive/10"
                  >
                    <LogOut className="w-4 h-4 mr-2" />
                    Logout
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <div className="flex items-center gap-2">
                <Button variant="ghost" asChild className="text-sm hover:bg-secondary/50">
                  <Link href="/auth/login">Log In</Link>
                </Button>
                <Button asChild className="text-sm bg-gradient-to-r from-[oklch(0.70_0.18_250)] to-[oklch(0.65_0.18_290)] hover:opacity-90 border-0 shadow-lg shadow-primary/25">
                  <Link href="/auth/signup">Sign Up Free</Link>
                </Button>
              </div>
            )}

            {/* Mobile menu toggle */}
            {isAuthenticated && !isPublicPage && (
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden hover:bg-secondary/50"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </Button>
            )}
          </div>
        </div>

        {/* Mobile nav */}
        <AnimatePresence>
          {mobileMenuOpen && isAuthenticated && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden border-t border-border/50 pb-4 pt-2 overflow-hidden"
            >
              {navLinks.map((link, i) => {
                const isActive = pathname === link.href;
                const Icon = link.icon;
                return (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`flex items-center gap-3 px-3 py-3 rounded-xl text-sm font-medium transition-all ${
                        isActive
                          ? 'bg-gradient-to-r from-[oklch(0.70_0.18_250_/_0.15)] to-[oklch(0.65_0.18_290_/_0.15)] text-primary border border-primary/20'
                          : 'text-muted-foreground hover:text-foreground hover:bg-secondary/50'
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                      {link.label}
                    </Link>
                  </motion.div>
                );
              })}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
