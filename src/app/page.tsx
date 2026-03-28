'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { GraduationCap, Brain, Target, KanbanSquare, MessageCircle, ArrowRight, Sparkles, Globe, Users, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5 }
  })
};

const features = [
  {
    icon: Brain,
    title: 'AI-Powered Matching',
    description: 'Get personalized university recommendations based on your profile, GPA, budget, and preferences.',
    gradient: 'from-[oklch(0.70_0.18_250)] to-[oklch(0.60_0.20_280)]'
  },
  {
    icon: Target,
    title: 'Scholarship Finder',
    description: 'Discover scholarships you actually qualify for. No more endless searching through irrelevant listings.',
    gradient: 'from-[oklch(0.65_0.16_160)] to-[oklch(0.55_0.18_190)]'
  },
  {
    icon: KanbanSquare,
    title: 'Application Tracker',
    description: 'Stay organized with a Kanban-style board to track every application from interest to acceptance.',
    gradient: 'from-[oklch(0.65_0.18_290)] to-[oklch(0.55_0.20_320)]'
  },
  {
    icon: MessageCircle,
    title: 'AI Assistant',
    description: 'Ask anything about studying in Europe. Get instant, personalized answers powered by real data.',
    gradient: 'from-[oklch(0.65_0.15_50)] to-[oklch(0.55_0.17_30)]'
  }
];

const steps = [
  { num: '01', title: 'Create Your Profile', desc: 'Tell our AI chatbot about your academic background, budget, and preferences in under 2 minutes.' },
  { num: '02', title: 'Get Matched', desc: 'Receive personalized university and scholarship recommendations with match scores.' },
  { num: '03', title: 'Track & Apply', desc: 'Save your favorites, track applications, and get AI guidance throughout the process.' }
];

const stats = [
  { value: '200+', label: 'Universities' },
  { value: '100+', label: 'Scholarships' },
  { value: '20+', label: 'Countries' },
  { value: 'Free', label: 'For Students' }
];

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center hero-gradient grid-pattern overflow-hidden">
        {/* Floating orbs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-[oklch(0.70_0.18_250_/_0.08)] rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[oklch(0.65_0.18_290_/_0.06)] rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[oklch(0.65_0.16_160_/_0.04)] rounded-full blur-3xl" />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/5 mb-8">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm text-primary font-medium">AI-Powered Education Platform</span>
            </div>
          </motion.div>

          <motion.h1
            className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-[1.1]"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Find Your Perfect
            <br />
            <span className="gradient-text">University in Europe</span>
          </motion.h1>

          <motion.p
            className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            AI-powered recommendations matched to your profile. Discover universities,
            find scholarships, and track applications — all in one place.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Button
              asChild
              size="lg"
              className="text-base px-8 py-6 bg-gradient-to-r from-[oklch(0.70_0.18_250)] to-[oklch(0.65_0.18_290)] hover:opacity-90 border-0 rounded-xl shadow-lg shadow-primary/25"
            >
              <Link href="/auth/signup">
                Get Started Free
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-base px-8 py-6 rounded-xl border-border">
              <Link href="/auth/login">
                Log In
                <ChevronRight className="w-4 h-4 ml-1" />
              </Link>
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-16 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl sm:text-3xl font-bold gradient-text">{stat.value}</div>
                <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 px-4 sm:px-6 relative">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Everything You Need to
              <span className="gradient-text"> Study in Europe</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              From discovery to application, we&apos;ve built the tools to make your journey seamless.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, i) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  className="glass-card rounded-2xl p-6 group"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  custom={i + 1}
                >
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 px-4 sm:px-6 border-t border-border/50">
        <div className="max-w-5xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              How It <span className="gradient-text">Works</span>
            </h2>
            <p className="text-muted-foreground text-lg">Three simple steps to your European education journey.</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, i) => (
              <motion.div
                key={step.num}
                className="relative"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={i + 1}
              >
                <div className="glass-card rounded-2xl p-8 h-full">
                  <div className="text-5xl font-black gradient-text opacity-30 mb-4">{step.num}</div>
                  <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{step.desc}</p>
                </div>
                {i < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                    <ChevronRight className="w-6 h-6 text-muted-foreground" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-24 px-4 sm:px-6 border-t border-border/50">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0}
          >
            <Globe className="w-12 h-12 text-primary mx-auto mb-6" />
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Democratizing Access to <span className="gradient-text">European Education</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-3xl mx-auto">
              Every year, millions of students dream of studying in Europe but are held back by
              fragmented information, confusing processes, and expensive consultants. Campus AI
              Europe levels the playing field — giving every student free, personalized, AI-powered
              guidance to find their perfect university and funding.
            </p>
            <Button
              asChild
              size="lg"
              className="text-base px-8 py-6 bg-gradient-to-r from-[oklch(0.70_0.18_250)] to-[oklch(0.65_0.18_290)] hover:opacity-90 border-0 rounded-xl"
            >
              <Link href="/auth/signup">
                Start Your Journey
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/50 py-12 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[oklch(0.70_0.18_250)] to-[oklch(0.65_0.18_290)] flex items-center justify-center">
                <GraduationCap className="w-4 h-4 text-white" />
              </div>
              <span className="font-bold gradient-text">Campus AI Europe</span>
            </div>
            <div className="flex gap-6 text-sm text-muted-foreground">
              <Link href="#" className="hover:text-foreground transition-colors">About</Link>
              <Link href="#" className="hover:text-foreground transition-colors">Contact</Link>
              <Link href="#" className="hover:text-foreground transition-colors">Privacy</Link>
              <Link href="#" className="hover:text-foreground transition-colors">Terms</Link>
            </div>
            <p className="text-sm text-muted-foreground">© 2025 Campus AI Europe</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
