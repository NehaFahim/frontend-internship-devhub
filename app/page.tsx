"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Cpu, Code2, Sparkles, Video, Globe, Shield, Zap, Command,
  ArrowRight, ExternalLink, Mail, Calendar as CalendarIcon, Clock, Check, X, Users, CheckCircle,
  Monitor, Server, Smartphone, Palette, Brain, Layers, Menu, ChevronLeft, ChevronRight
} from "lucide-react";

// --- DYNAMIC BACKGROUND COMPONENT ---
const GridBackground = () => (
  <div className="absolute inset-0 -z-10 overflow-hidden bg-[#030303]">
    <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[40px_40px] mask-[radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-62.5 h-31.25 bg-blue-500/10 blur-[120px] rounded-full" />
  </div>
);

const TerminalAbout = () => {
  const [text, setText] = useState("");
  const fullText = `> npm install @devhub/innovation --future
> Initializing scalable architecture...
> Deploying edge-optimized solutions...
> Status: Ready to Build.`;

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) clearInterval(interval);
    }, 40);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full max-w-3xl mx-auto font-mono text-sm md:text-base p-6 md:p-8 rounded-3xl border border-white/10 bg-black/60 backdrop-blur-md shadow-[0_0_50px_-12px_rgba(59,130,246,0.3)]">
      <div className="flex gap-2 mb-6 border-b border-white/10 pb-3">
        <div className="w-3 h-3 rounded-full bg-red-500/70" />
        <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
        <div className="w-3 h-3 rounded-full bg-green-500/70" />
        <span className="ml-4 text-white/30 text-xs">terminal — developershub</span>
      </div>
      <pre className="text-blue-400 leading-relaxed whitespace-pre-wrap wrap-break-word">
        {text}
        <span className="animate-pulse">_</span>
      </pre>
    </div>
  );
};

export default function DevelopersHub() {
  const [bookingStep, setBookingStep] = useState<'idle' | 'calendar' | 'confirm' | 'success'>('idle');
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

const timeSlotsByDate: Record<string, string[]> = {
    "2026-04-20": ["10:00 AM", "11:30 AM", "02:30 PM", "03:30 PM", "05:00 PM"],
    "2026-04-21": ["11:00 AM", "11:30 AM", "02:30 PM", "03:00 PM", "05:00 PM"],
    "2026-04-22": ["09:00 AM", "02:00 PM", "02:30 PM", "04:00 PM"],
    "2026-04-23": ["09:00 AM", "10:00 AM", "11:00 AM", "02:30 PM", "04:00 PM"],
    "2026-04-24": ["11:00 AM", "11:30 AM", "03:30 PM", "04:00 PM", "05:00 PM"],
    "2026-04-25": ["10:00 AM", "11:30 AM", "02:30 PM"],
    "2026-04-26": ["11:30 AM", "03:00 PM", "05:00 PM"],
    "2026-04-27": ["11:00 AM", "03:30 PM", "05:00 PM"],
    "2026-04-28": ["11:30 AM", "02:30 PM", "03:30 PM"],
    "2026-04-29": ["09:00 AM", "02:00 PM", "02:30 PM", "04:00 PM"],
    "2026-04-30": ["09:00 AM", "11:00 AM", "02:30 PM", "03:30 PM", "05:00 PM"],
    "2026-05-01": ["09:00 AM", "01:00 PM", "04:30 PM"],
    "2026-05-02": ["10:00 AM", "01:00 PM", "03:00 PM", "03:30 PM"],
    "2026-05-03": ["01:00 PM", "02:00 PM", "02:30 PM", "05:00 PM"],
    "2026-05-04": ["10:00 AM", "11:30 AM", "03:30 PM", "04:00 PM"],
    "2026-05-05": ["11:00 AM", "02:00 PM", "05:00 PM"],
    "2026-05-06": ["09:00 AM", "02:00 PM", "02:30 PM", "04:30 PM", "05:00 PM"],
    "2026-05-07": ["04:00 PM", "04:30 PM", "05:00 PM"],
    "2026-05-08": ["11:30 AM", "02:00 PM", "03:00 PM", "04:30 PM"],
    "2026-05-09": ["11:00 AM", "11:30 AM", "03:30 PM", "04:00 PM"],
    "2026-05-10": ["09:00 AM", "11:30 AM", "03:00 PM", "04:00 PM"],
    "2026-05-11": ["11:00 AM", "02:00 PM", "03:00 PM", "04:00 PM"],
    "2026-05-12": ["10:00 AM", "01:00 PM", "02:00 PM", "02:30 PM", "04:00 PM"],
    "2026-05-13": ["02:30 PM", "03:00 PM", "04:30 PM", "05:00 PM"],
    "2026-05-14": ["09:00 AM", "11:30 AM", "03:00 PM"],
    "2026-05-15": ["10:00 AM", "11:00 AM", "03:30 PM"],
    "2026-05-16": ["10:00 AM", "01:00 PM", "02:00 PM", "03:00 PM", "04:00 PM"],
    "2026-05-17": ["10:00 AM", "11:00 AM", "02:30 PM"],
    "2026-05-18": ["11:30 AM", "02:30 PM", "03:00 PM"],
    "2026-05-19": ["01:00 PM", "02:30 PM", "04:30 PM", "05:00 PM"],
    "2026-05-20": ["09:00 AM", "11:00 AM", "02:00 PM", "04:00 PM"],
    "2026-05-21": ["10:00 AM", "01:30 PM", "03:30 PM", "05:00 PM"],
    "2026-05-22": ["09:30 AM", "11:30 AM", "02:30 PM"],
    "2026-05-23": ["10:00 AM", "12:00 PM", "03:00 PM", "04:30 PM"],
    "2026-05-24": ["09:00 AM", "01:00 PM", "03:30 PM"],
    "2026-05-25": ["11:00 AM", "02:00 PM", "04:00 PM", "05:00 PM"],
    "2026-05-26": ["09:30 AM", "11:30 AM", "02:30 PM", "04:30 PM"],
    "2026-05-27": ["10:00 AM", "01:00 PM", "03:00 PM"],
    "2026-05-28": ["09:00 AM", "11:00 AM", "02:00 PM", "04:00 PM"],
    "2026-05-29": ["10:30 AM", "02:30 PM", "05:00 PM"],
    "2026-05-30": ["09:00 AM", "11:30 AM", "03:30 PM"],
    "2026-05-31": ["10:00 AM", "01:30 PM", "04:00 PM"],
    "2026-06-01": ["09:30 AM", "11:00 AM", "02:00 PM", "04:30 PM"],
    "2026-06-02": ["10:00 AM", "01:00 PM", "03:00 PM"],
    "2026-06-03": ["09:00 AM", "11:30 AM", "02:30 PM", "05:00 PM"],
    "2026-06-04": ["10:30 AM", "02:00 PM", "04:00 PM"],
    "2026-06-05": ["09:00 AM", "11:00 AM", "03:30 PM"],
    "2026-06-06": ["10:00 AM", "01:30 PM", "04:30 PM"],
    "2026-06-07": ["09:30 AM", "02:00 PM", "05:00 PM"],
    "2026-06-08": ["11:00 AM", "02:30 PM", "04:00 PM"],
    "2026-06-09": ["09:00 AM", "11:30 AM", "03:00 PM"],
    "2026-06-10": ["10:00 AM", "01:00 PM", "04:30 PM"],
    "2026-06-11": ["09:30 AM", "02:00 PM", "05:00 PM"],
    "2026-06-12": ["11:00 AM", "02:30 PM", "04:00 PM"],
    "2026-06-13": ["09:00 AM", "11:30 AM", "03:30 PM"],
    "2026-06-14": ["10:00 AM", "01:30 PM", "04:30 PM"],
    "2026-06-15": ["09:30 AM", "02:00 PM", "05:00 PM"],
    "2026-06-16": ["11:00 AM", "02:30 PM"],
    "2026-06-17": ["09:00 AM", "11:30 AM", "03:00 PM", "04:30 PM"],
    "2026-06-18": ["10:00 AM", "01:00 PM", "04:00 PM"],
    "2026-06-19": ["09:30 AM", "02:00 PM", "05:00 PM"],
    "2026-06-20": ["11:00 AM", "02:30 PM", "04:30 PM"],
    "2026-06-21": ["09:00 AM", "11:30 AM", "03:30 PM"],
    "2026-06-22": ["10:00 AM", "01:30 PM", "04:00 PM"],
    "2026-06-23": ["09:30 AM", "02:00 PM", "05:00 PM"],
    "2026-06-24": ["11:00 AM", "02:30 PM"],
    "2026-06-25": ["09:00 AM", "11:30 AM", "03:00 PM", "04:30 PM"],
    "2026-06-26": ["10:00 AM", "01:00 PM", "04:00 PM"],
    "2026-06-27": ["09:30 AM", "02:00 PM", "05:00 PM"],
    "2026-06-28": ["11:00 AM", "02:30 PM", "04:30 PM"],
    "2026-06-29": ["09:00 AM", "11:30 AM", "03:30 PM"],
    "2026-06-30": ["10:00 AM", "01:30 PM", "04:00 PM"],
    "2026-07-01": ["09:30 AM", "02:00 PM", "05:00 PM"],
    "2026-07-02": ["11:00 AM", "02:30 PM"],
    "2026-07-03": ["09:00 AM", "11:30 AM", "03:00 PM", "04:30 PM"],
    "2026-07-04": ["10:00 AM", "01:00 PM", "04:00 PM"],
    "2026-07-05": ["09:30 AM", "02:00 PM", "05:00 PM"],
    "2026-07-06": ["11:00 AM", "02:30 PM", "04:30 PM"],
    "2026-07-07": ["09:00 AM", "11:30 AM", "03:30 PM"],
    "2026-07-08": ["10:00 AM", "01:30 PM", "04:00 PM"],
    "2026-07-09": ["09:30 AM", "02:00 PM", "05:00 PM"],
    "2026-07-10": ["11:00 AM", "02:30 PM"],
    "2026-07-11": ["09:00 AM", "11:30 AM", "03:00 PM", "04:30 PM"],
    "2026-07-12": ["10:00 AM", "01:00 PM", "04:00 PM"],
    "2026-07-13": ["09:30 AM", "02:00 PM", "05:00 PM"],
    "2026-07-14": ["01:00 PM", "02:00 PM", "02:30 PM", "03:00 PM", "04:30 PM"],
    "2026-07-15": ["09:00 AM", "02:30 PM", "04:30 PM", "05:00 PM"],
    "2026-07-16": ["09:00 AM", "11:30 AM", "03:30 PM", "04:00 PM", "05:00 PM"],
    "2026-07-17": ["09:00 AM", "11:00 AM", "02:00 PM", "05:00 PM"],
    "2026-07-18": ["01:00 PM", "02:30 PM", "04:00 PM", "04:30 PM", "05:00 PM"],
  };

  const whyUs = [
    { title: "Performance First", desc: "Lightning fast code with best in class SEO and Core Web Vitals.", icon: Zap },
    { title: "Security Focused", desc: "Enterprise grade security built into every project.", icon: Shield },
    { title: "AI-Native", desc: "We build with AI, not just use it.", icon: Cpu },
  ];

  const portfolioItems = [
    { icon: Monitor, title: "Frontend Development", desc: "Modern, responsive and pixel-perfect user interfaces using React, Next.js, Tailwind and Framer Motion.", tags: ["React", "Next.js", "Tailwind", "TypeScript"], color: "blue" },
    { icon: Server, title: "Backend & APIs", desc: "Scalable server-side solutions with Node.js, NestJS, Express, PostgreSQL and real-time features.", tags: ["Node.js", "PostgreSQL", "NestJS", "Socket.io"], color: "emerald" },
    { icon: Layers, title: "Full-Stack Applications", desc: "End-to-end web applications including authentication, payments, dashboards and admin panels.", tags: ["MERN", "Next.js", "Stripe", "Prisma"], color: "violet" },
    { icon: Palette, title: "UI/UX Design", desc: "Beautiful, intuitive and user-centered designs with Figma to clean, accessible code implementation.", tags: ["Figma", "UI/UX", "Design Systems", "Accessibility"], color: "amber" },
    { icon: Brain, title: "AI & Machine Learning", desc: "Intelligent solutions including RAG systems, AI content generation, chatbots and automation.", tags: ["OpenAI", "LangChain", "Python", "Automation"], color: "purple" },
    { icon: Smartphone, title: "Mobile App Development", desc: "Cross-platform mobile applications with React Native and native-like performance.", tags: ["React Native", "Expo", "Firebase"], color: "rose" },
    { icon: Globe, title: "SaaS & Web Platforms", desc: "Subscription-based SaaS products with multi-tenant architecture and advanced analytics.", tags: ["SaaS", "Dashboard", "Analytics", "Multi-tenant"], color: "cyan" },
    { icon: Sparkles, title: "Emerging Technologies", desc: "Web3 integrations, blockchain solutions, AR/VR experiences and cutting-edge innovations.", tags: ["Web3", "Blockchain", "AR/VR", "Innovation"], color: "orange" }
  ];

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Work', href: '#portfolio' }
  ];

  // Calendar Helpers
const getDaysInMonth = (year: number, month: number) => new Date(year, month + 1, 0).getDate();
  const getFirstDayOfMonth = (year: number, month: number) => new Date(year, month, 1).getDay();

  const renderCalendarDays = () => {
    const daysInMonth = getDaysInMonth(currentYear, currentMonth);
    const firstDay = getFirstDayOfMonth(currentYear, currentMonth);
    const days = [];
    const today = new Date();

    for (let i = 0; i < firstDay; i++) {
      days.push(<div key={`empty-${i}`} className="h-10" />);
    }

    for (let day = 1; day <= daysInMonth; day++) {
      const dateStr = `${currentYear}-${String(currentMonth + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
      const isAvailable = !!timeSlotsByDate[dateStr];
      const isSelected = selectedDate?.getDate() === day && 
                        selectedDate?.getMonth() === currentMonth && 
                        selectedDate?.getFullYear() === currentYear;
      const isPast = new Date(currentYear, currentMonth, day) < new Date(today.getFullYear(), today.getMonth(), today.getDate());

      days.push(
        <button
          key={day}
          onClick={() => {
            if (!isPast && isAvailable) {
              setSelectedDate(new Date(currentYear, currentMonth, day));
              setSelectedTime(null);
            }
          }}
          disabled={isPast || !isAvailable}
          className={`h-10 w-10 rounded-xl flex items-center justify-center text-sm font-medium transition-all
            ${isSelected ? 'bg-blue-600 text-white shadow-lg' : ''}
            ${!isPast && isAvailable ? 'hover:bg-blue-500/20 text-white' : 'text-white/30 cursor-not-allowed'}
            ${isPast ? 'line-through opacity-40' : ''}
          `}
        >
          {day}
        </button>
      );
    }
    return days;
  };

  const getAvailableTimes = () => {
    if (!selectedDate) return [];
    const dateStr = `${selectedDate.getFullYear()}-${String(selectedDate.getMonth() + 1).padStart(2, '0')}-${String(selectedDate.getDate()).padStart(2, '0')}`;
    return timeSlotsByDate[dateStr] || [];
  };

  const handleBookingConfirm = () => {
    if (!selectedDate || !selectedTime) return;
    setBookingStep('success');
    setTimeout(() => {
      setBookingStep('idle');
      setSelectedDate(null);
      setSelectedTime(null);
    }, 2500);
  };

  const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  return (
    <main className="relative min-h-screen text-white selection:bg-blue-500/30 overflow-x-hidden">
      <GridBackground />

      {/* ==================== NAVBAR ==================== */}
      <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-black/90 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2 group cursor-pointer">
            <Command className="w-6 h-6 text-blue-500 group-hover:rotate-180 transition-transform duration-500" />
            <span className="font-bold tracking-tighter text-xl">Developers Hub</span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-white/75 hover:text-white transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <button 
              onClick={() => setBookingStep('calendar')}
              className="hidden sm:block text-xs font-bold px-5 py-2.5 bg-blue-600 hover:bg-blue-500 rounded-xl transition-all shadow-[0_0_20px_rgba(37,99,235,0.3)]"
            >
              Book a call
            </button>

            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-white"
            >
              <Menu size={28} />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden border-t border-white/10 bg-black/95 backdrop-blur-xl"
            >
              <div className="px-6 py-8 flex flex-col gap-6 text-lg">
                {navLinks.map((link) => (
                  <a 
                    key={link.name}
                    href={link.href}
                    className="py-2 text-white/80 hover:text-white transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </a>
                ))}
                <button 
                  onClick={() => {
                    setBookingStep('calendar');
                    setIsMobileMenuOpen(false);
                  }}
                  className="mt-4 w-full py-4 bg-blue-600 hover:bg-blue-500 rounded-2xl font-bold text-base transition"
                >
                  Book a Discovery Call
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* HERO SECTION */}
      <section id="home" className="pt-24 md:pt-32 pb-16 md:pb-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-400/30 bg-blue-500/10 text-[10px] font-bold uppercase tracking-widest text-emerald-400 mb-8"
          >
            <Zap className="w-3 h-3 fill-current" /> Next-Gen Development Agency
          </motion.div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-[-0.04em] leading-[1.05] md:leading-[0.85] mb-8">
            From Idea to Production <br className="hidden sm:block" /> 
            <span className="bg-linear-to-r from-white via-blue-300 to-cyan-300 bg-clip-text text-transparent">
              at the Speed of Thought
            </span>
          </h1>
          
          <p className="max-w-xl mx-auto text-white/60 text-base md:text-lg font-light mb-10">
            We architect high performance digital infrastructure for the next generation of startups and tech leaders.
          </p>

          <div className="px-4">
            <TerminalAbout />
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
            <button
              onClick={() => setBookingStep('calendar')}
              className="px-8 sm:px-10 py-4 sm:py-5 bg-blue-600 hover:bg-blue-500 rounded-2xl font-bold text-base sm:text-lg flex items-center justify-center gap-3 transition w-full sm:w-auto"
            >
              Schedule Discovery Call <ArrowRight className="w-5 h-5" />
            </button>
            <a 
              href="#portfolio" 
              className="px-8 sm:px-10 py-4 sm:py-5 border border-white/20 hover:bg-white/10 rounded-2xl font-bold text-base sm:text-lg transition w-full sm:w-auto text-center"
            >
              View Our Work
            </a>
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="py-24 border-t border-white/10">
        <div className="max-w-screen-2xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }}>
            <h2 className="text-5xl font-bold tracking-tighter mb-8 text-blue-500 underline decoration-blue-500/30 underline-offset-8">01. Our Vision</h2>
            <p className="text-zinc-400 text-lg leading-relaxed">Founded in 2023, DevelopersHub is a boutique technology agency that combines deep engineering expertise with creative vision. We help ambitious companies turn complex ideas into elegant products.</p>
            <div className="mt-12 flex gap-8">
              <div><div className="text-4xl font-bold">120+</div><div className="text-xs text-zinc-500 uppercase tracking-widest">Projects</div></div>
              <div><div className="text-4xl font-bold">98%</div><div className="text-xs text-zinc-500 uppercase tracking-widest">Retention</div></div>
            </div>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-white/5 border border-white/10 p-8 rounded-3xl"><Users className="text-blue-500 mb-4" /><h4 className="font-bold">Top Talent</h4><p className="text-sm text-zinc-500">Engineers from global tech giants.</p></div>
            <div className="bg-white/5 border border-white/10 p-8 rounded-3xl"><CheckCircle className="text-emerald-500 mb-4" /><h4 className="font-bold">End-to-End</h4><p className="text-sm text-zinc-500">From discovery to deployment.</p></div>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section id="services" className="py-32 max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-end mb-16">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Our Stack</h2>
            <p className="text-white/40 text-sm mt-2">Comprehensive tech solutions for modern problems.</p>
          </div>
          <div className="hidden md:block text-[10px] font-mono text-white/20">SEARCH_PARAMS: ALL_SERVICES</div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          <div className="md:col-span-8 group relative overflow-hidden rounded-2xl border border-white/10 bg-linear-to-br from-white/5 to-transparent p-10 hover:border-blue-500/50 transition-all duration-500">
            <div className="absolute top-0 right-0 p-8">
              <Code2 className="w-32 h-32 text-blue-500" />
            </div>
            <div className="relative z-10 h-full flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-bold mb-4">Software Development</h3>
                <p className="text-white/75 max-w-md font-light leading-relaxed">
                  We build production-ready applications using Next.js, React, and robust backend architectures. 
                  Optimized for speed, SEO, and developer experience.
                </p>
              </div>
              <div className="flex gap-4 mt-12">
                {['React', 'Next.js', 'PostgreSQL'].map(t => (
                  <span key={t} className="px-3 py-1 rounded-md bg-white/5 border border-blue-400 text-[10px] font-mono uppercase tracking-tighter text-gray-400">{t}</span>
                ))}
              </div>
            </div>
          </div>

          <div className="md:col-span-4 group rounded-2xl border border-white/10 bg-[#0A0A0A] p-8 hover:bg-blue-600/5 transition-colors">
            <div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center mb-6">
              <Cpu className="w-5 h-5 text-purple-400" />
            </div>
            <h3 className="text-xl font-bold mb-2">AI & Automation</h3>
            <p className="text-sm text-white/40 font-light mb-6">RAG implementation, custom LLM fine tuning, and AI driven content pipelines.</p>
            <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
              <motion.div initial={{ width: 0 }} whileInView={{ width: "100%" }} transition={{ duration: 1.5 }} className="h-full bg-purple-500" />
            </div>
          </div>

          <div className="md:col-span-4 group rounded-2xl border border-white/10 bg-white/5 p-8 relative overflow-hidden">
            <div className="flex justify-between items-center mb-6">
              <Globe className="w-5 h-5 text-emerald-400" />
              <ExternalLink className="w-4 h-4 text-white/20 group-hover:text-white transition" />
            </div>
            <h3 className="text-lg font-bold">Marketing & Growth</h3>
            <p className="text-xs text-white/40 mt-2">Data driven strategies to scale your user base.</p>
          </div>

          <div className="md:col-span-4 group rounded-2xl border border-white/10 bg-white/5 p-8">
            <Video className="w-5 h-5 text-pink-400 mb-6" />
            <h3 className="text-lg font-bold">Post Production</h3>
            <p className="text-xs text-white/40 mt-2">Professional digital asset creation and editing.</p>
          </div>

          <div className="md:col-span-4 group rounded-2xl border border-blue-500/30 bg-blue-500/5 p-8 flex flex-col justify-between">
            <div className="flex justify-between items-center">
              <CalendarIcon className="w-5 h-5 text-blue-400" />
              <div className="px-2 py-0.5 rounded bg-blue-500 text-[8px] font-black uppercase">Live</div>
            </div>
            <div>
              <h3 className="text-lg font-bold">Meeting Scheduler</h3>
              <p className="text-[10px] text-blue-400/60 font-mono mt-1">Status: active_session</p>
            </div>
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section id="whyus" className="py-24 bg-zinc-900/30">
        <div className="max-w-screen-2xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold tracking-tighter mb-16">Why DevelopersHub?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {whyUs.map((item, i) => (
              <div key={i} className="p-10 rounded-[2.5rem] border border-white/5 bg-zinc-950/50 backdrop-blur-sm hover:border-blue-500/50 transition-all">
                <item.icon className="w-12 h-12 text-blue-500 mx-auto mb-6" />
                <h4 className="text-2xl font-bold mb-4">{item.title}</h4>
                <p className="text-zinc-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PORTFOLIO */}
      <section id="portfolio" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4">Our Expertise Across Domains</h2>
            <p className="text-white/60 text-xl max-w-2xl mx-auto">
              We have successfully delivered projects in Frontend, Backend, AI, Mobile, SaaS and much more.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {portfolioItems.map((project, i) => (
              <div 
                key={i} 
                className="group p-8 rounded-3xl border border-white/10 bg-zinc-900/70 hover:border-blue-500/50 hover:bg-zinc-900 transition-all duration-500 flex flex-col"
              >
                <div className={`w-14 h-14 rounded-2xl bg-linear-to-br from-${project.color}-500/20 to-transparent flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <project.icon className={`w-8 h-8 text-${project.color}-400`} />
                </div>
                
                <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
                <p className="text-white/70 text-[15px] leading-relaxed mb-8 grow">
                  {project.desc}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map((tag, idx) => (
                    <span 
                      key={idx}
                      className="text-xs px-3 py-1 bg-white/5 border border-white/10 rounded-full text-white/70"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-20 text-center">
            <p className="text-white/50 text-sm max-w-md mx-auto">
              + Many more projects delivered for clients across different industries using latest technologies and best practices.
            </p>
            <button 
              onClick={() => setBookingStep('calendar')}
              className="mt-8 px-8 py-4 border border-white/30 hover:bg-white/5 rounded-2xl text-sm font-medium transition flex items-center gap-3 mx-auto"
            >
              Discuss Your Project With Us <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="py-32 border-t border-white/10 px-6 bg-[#050505]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-6">Ready to Build Something Great?</h2>
          <p className="text-white/60 text-lg mb-12">Let's turn your idea into a production ready product.</p>

          <div className="flex justify-center mb-12">
            <button
              onClick={() => setBookingStep('calendar')}
              className="px-12 py-6 bg-blue-600 hover:bg-blue-400 rounded-2xl text-xl font-bold flex items-center gap-3"
            >
              Book Your Strategy Call <CalendarIcon className="w-6 h-6" />
            </button>
          </div>

          <div className="text-sm text-white/50 font-mono">hello@developershub.corp</div>
        </div>
      </section>

      <section id="contact" className="py-32 px-6 border-t border-white/5 bg-[#050505]">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-20">
          <div>
            <h2 className="text-4xl font-black mb-6">Connect to <br />Our Server.</h2>
            <p className="text-white/40 mb-10 leading-relaxed font-light">
              Fill out the query params below to initialize a conversation with our engineering team.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-4 text-sm text-white/60">
                <Mail className="w-4 h-4 text-blue-500" /> hello@developershub.corp
              </div>
            </div>
          </div>
          
          <form className="space-y-4 font-mono">
            <div className="p-4 bg-white/5 border border-white/10 rounded-lg focus-within:border-blue-500/50 transition">
              <label className="block text-[12px] text-white/90 uppercase mb-1">input_name</label>
              <input type="text" className="w-full bg-transparent outline-none text-sm placeholder:text-white/20" placeholder="Required..." />
            </div>
            <div className="p-4 bg-white/5 border border-white/10 rounded-lg focus-within:border-blue-500/50 transition">
              <label className="block text-[12px] text-white/90 uppercase mb-1">input_email</label>
              <input type="email" className="w-full bg-transparent outline-none text-sm placeholder:text-white/20" placeholder="user@host.com" />
            </div>
            <div className="p-4 bg-white/5 border border-white/10 rounded-lg focus-within:border-blue-500/50 transition">
              <label className="block text-[12px] text-white/90 uppercase mb-1">query_string</label>
              <textarea className="w-full bg-transparent outline-none text-sm placeholder:text-white/20 resize-none" rows={4} placeholder="Describe your project requirements..."></textarea>
            </div>
            <button className="w-full py-4 bg-blue-600 hover:bg-blue-500 font-bold rounded-lg transition-all flex items-center justify-center gap-2 group">
              EXECUTE REQUEST <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
            </button>
          </form>
        </div>
      </section>

      <footer className="bg-black border-t border-white/10 py-16">
        <div className="max-w-screen-2xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-y-12">
            <div>
              <div className="flex items-center gap-x-2 mb-6">
                <div className="flex items-center gap-2 group cursor-pointer">
                  <Command className="w-6 h-6 text-blue-500 group-hover:rotate-180 transition-transform duration-500" />
                  <span className="font-bold tracking-tighter text-xl">Developers Hub</span>
                </div>
              </div>
              <p className="text-zinc-400 text-sm leading-relaxed max-w-55">
                Karachi • San Francisco • Remote
              </p>
            </div>

            <div>
              <p className="font-medium mb-4">Company</p>
              <div className="space-y-3 text-sm text-zinc-400">
                <a href="#" className="block hover:text-white">About Us</a>
                <a href="#" className="block hover:text-white">Careers</a>
                <a href="#" className="block hover:text-white">Blog</a>
              </div>
            </div>

            <div>
              <p className="font-medium mb-4">Services</p>
              <div className="space-y-3 text-sm text-zinc-400">
                <a href="#" className="block hover:text-white">Software Development</a>
                <a href="#" className="block hover:text-white">AI Solutions</a>
                <a href="#" className="block hover:text-white">Digital Marketing</a>
              </div>
            </div>

            <div>
              <p className="font-medium mb-4">Legal</p>
              <div className="space-y-3 text-sm text-zinc-400">
                <a href="#" className="block hover:text-white">Privacy</a>
                <a href="#" className="block hover:text-white">Terms</a>
              </div>
            </div>

            <div>
              <p className="font-medium mb-4">Connect</p>
              <div className="flex gap-x-6">
                <a href="https://x.com" target="_blank" className="text-zinc-400 hover:text-white transition-colors">
                  <X className="w-6 h-6" />
                </a>
                <a href="https://github.com" target="_blank" className="text-zinc-400 hover:text-white transition-colors">
                  <Code2 className="w-6 h-6" />
                </a>
              </div>
              <div className="mt-8 text-xs text-zinc-500">
                © 2026 DevelopersHub. All rights reserved.
              </div>
            </div>
          </div>
        </div>
      </footer>

   {/* ==================== BOOKING MODAL ==================== */}
      <AnimatePresence>
        {bookingStep !== 'idle' && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-100 flex items-center justify-center bg-black/90 backdrop-blur-md p-4 sm:p-6">
            <motion.div initial={{ scale: 0.95, y: 30 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.95, y: 30 }} className="bg-[#0a0a0c] border border-white/10 w-full max-w-lg rounded-3xl overflow-hidden max-h-[95vh] flex flex-col">
              
              <div className="p-6 border-b border-white/10 flex justify-between items-center shrink-0">
                <h3 className="font-bold flex items-center gap-2 text-blue-400">
                  <CalendarIcon size={18} /> Meeting Scheduler
                </h3>
                <button onClick={() => { setBookingStep('idle'); setSelectedDate(null); setSelectedTime(null); }} className="text-white/40 hover:text-white">
                  <X size={22} />
                </button>
              </div>

              <div className="flex-1 overflow-auto p-6 sm:p-8">
                {bookingStep === 'calendar' && (
                  <>
                    <h4 className="text-2xl font-bold mb-6">Select Date & Time</h4>
                    
                    <div className="flex items-center justify-between mb-6">
                      <button onClick={() => { if (currentMonth === 0) { setCurrentMonth(11); setCurrentYear(y => y-1); } else setCurrentMonth(m => m-1); }} className="p-3 hover:bg-white/10 rounded-xl transition">
                        <ChevronLeft size={22} />
                      </button>
                      <div className="font-semibold text-lg tracking-tight">{monthNames[currentMonth]} {currentYear}</div>
                      <button onClick={() => { if (currentMonth === 11) { setCurrentMonth(0); setCurrentYear(y => y+1); } else setCurrentMonth(m => m+1); }} className="p-3 hover:bg-white/10 rounded-xl transition">
                        <ChevronRight size={22} />
                      </button>
                    </div>

                    <div className="grid grid-cols-7 gap-1 text-center mb-8">
                      {['Sun','Mon','Tue','Wed','Thu','Fri','Sat'].map(d => <div key={d} className="text-xs text-white/40 font-medium py-1">{d}</div>)}
                      {renderCalendarDays()}
                    </div>

                    {selectedDate && (
                      <div className="mt-6">
                        <p className="font-medium mb-4 text-white/80">
                          Available times on {selectedDate.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}
                        </p>
                        <div className="grid grid-cols-2 gap-3">
                          {getAvailableTimes().map((time) => (
                            <button
                              key={time}
                              onClick={() => setSelectedTime(time)}
                              className={`p-4 rounded-2xl border text-sm font-medium transition-all ${
                                selectedTime === time ? 'border-blue-500 bg-blue-500/10 text-blue-400' : 'border-white/10 hover:border-white/30 hover:bg-white/5'
                              }`}
                            >
                              {time}
                            </button>
                          ))}
                        </div>
                      </div>
                    )}
                  </>
                )}

                {/* Confirm and Success steps same as before */}
                {bookingStep === 'confirm' && selectedDate && selectedTime && (
                  <div className="text-center py-6">
                    <div className="w-20 h-20 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Clock className="text-blue-500" size={40} />
                    </div>
                    <h4 className="text-3xl font-bold mb-3">Confirm Booking</h4>
                    <div className="bg-white/5 rounded-2xl p-6 mb-8">
                      <p className="text-white/60 mb-1">Discovery Call</p>
                      <p className="text-lg font-semibold">
                        {selectedDate.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' })} at {selectedTime}
                      </p>
                    </div>
                    <div className="flex gap-4">
                      <button onClick={() => setBookingStep('calendar')} className="flex-1 py-4 border border-white/10 rounded-2xl font-medium hover:bg-white/5">Change</button>
                      <button onClick={handleBookingConfirm} className="flex-1 py-4 bg-blue-600 hover:bg-blue-500 rounded-2xl font-bold transition">Confirm Booking</button>
                    </div>
                  </div>
                )}

                {bookingStep === 'success' && (
                  <div className="text-center py-12">
                    <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="w-24 h-24 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Check className="text-emerald-500" size={50} />
                    </motion.div>
                    <h4 className="text-3xl font-bold mb-2">Booking Confirmed!</h4>
                    <p className="text-white/60">A calendar invite has been sent to your email.</p>
                  </div>
                )}
              </div>

              {bookingStep === 'calendar' && selectedDate && selectedTime && (
                <div className="p-6 border-t border-white/10 shrink-0">
                  <button onClick={() => setBookingStep('confirm')} className="w-full py-4 bg-blue-600 hover:bg-blue-500 rounded-2xl font-bold text-base transition">
                    Continue to Confirm
                  </button>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}