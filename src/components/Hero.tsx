import React, { useState } from 'react';
import {
  ArrowRight,
  Mail,
  Github,
  Linkedin,
  FileText,
  Terminal,
  Play,
  Check,
  Copy,
  Sparkles,
  MapPin,
  GraduationCap,
  Code2,
  Cpu
} from 'lucide-react';
import { PERSONAL_INFO, CODE_SNIPPETS } from '../data/portfolioData';

interface HeroProps {
  darkMode: boolean;
  onOpenResume: () => void;
}

type CodeTab = 'react' | 'cpp' | 'python' | 'styles';

export default function Hero({ darkMode, onOpenResume }: HeroProps) {
  const [activeTab, setActiveTab] = useState<CodeTab>('react');
  const [isRunning, setIsRunning] = useState(false);
  const [consoleOutput, setConsoleOutput] = useState<string | null>(null);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleRunCode = () => {
    setIsRunning(true);
    setConsoleOutput(null);

    setTimeout(() => {
      setIsRunning(false);
      if (activeTab === 'react') {
        setConsoleOutput('✓ Component Rendered: Rahul Bera | Web Developer ready for internships!');
      } else if (activeTab === 'cpp') {
        setConsoleOutput('✓ Process exited with code 0: DSA & OOP concepts initialized successfully.');
      } else if (activeTab === 'python') {
        setConsoleOutput('✓ Output: {"developer": "Rahul Bera", "momentum": "Always building & leveling up!"}');
      } else {
        setConsoleOutput('✓ CSS Styles applied: Responsive modern layout with gradient accents.');
      }
    }, 600);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const tabLabels: Record<CodeTab, { label: string; icon: string; lang: string }> = {
    react: { label: 'Developer.jsx', icon: '⚛️', lang: 'jsx' },
    cpp: { label: 'student.cpp', icon: '⚙️', lang: 'cpp' },
    python: { label: 'growth.py', icon: '🐍', lang: 'py' },
    styles: { label: 'theme.css', icon: '🎨', lang: 'css' },
  };

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] pt-28 sm:pt-32 pb-16 lg:pb-24 flex items-center overflow-hidden"
    >
      {/* Background ambient lighting effects matching Immersive UI */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] sm:w-[700px] h-[350px] sm:h-[450px] bg-sky-500/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-blue-600/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-stretch">
          
          {/* Left Column: Hero Content & Intros inside rounded-[32px] Immersive container */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div
              className={`p-6 sm:p-10 rounded-[32px] border relative overflow-hidden transition-all duration-300 flex-1 flex flex-col justify-between ${
                darkMode
                  ? 'bg-slate-900/40 border-slate-800 shadow-2xl shadow-black/40 text-slate-200'
                  : 'bg-white/90 border-slate-200 shadow-xl shadow-slate-200/50 text-slate-800'
              }`}
            >
              {/* Subtle top-right ambient blur */}
              <div className="absolute -top-20 -right-20 w-48 h-48 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />

              <div>
                {/* Intro Code Tag */}
                <div className="flex items-center gap-2 mb-4">
                  <p className="text-sky-400 font-mono text-xs sm:text-sm font-semibold tracking-wider">
                    // Introduction
                  </p>
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-[11px] font-mono text-slate-400 hidden sm:inline">SVU Barrackpore</span>
                </div>

                {/* Main Headline */}
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-3 tracking-tight text-white">
                  Rahul <br className="hidden sm:inline" />
                  <span className="bg-gradient-to-r from-sky-400 via-sky-300 to-blue-500 bg-clip-text text-transparent">
                    Bera
                  </span>
                </h1>

                {/* Role and University */}
                <p className="text-slate-300 dark:text-slate-300 text-base sm:text-lg font-medium mb-4">
                  2nd Year BCA Student & Aspiring Web Developer
                </p>

                {/* Intro statement */}
                <p className="text-slate-400 text-sm sm:text-base leading-relaxed mb-6 max-w-xl">
                  "{PERSONAL_INFO.tagline}"
                </p>

                {/* Location and College Info */}
                <div className="flex flex-wrap items-center gap-2.5 mb-8 text-xs text-slate-400">
                  <div className="flex items-center gap-1.5 bg-slate-800/80 border border-slate-700/60 rounded-full px-3.5 py-1.5">
                    <GraduationCap className="w-3.5 h-3.5 text-sky-400" />
                    <span>Swami Vivekananda University</span>
                  </div>
                  <div className="flex items-center gap-1.5 bg-slate-800/80 border border-slate-700/60 rounded-full px-3.5 py-1.5">
                    <MapPin className="w-3.5 h-3.5 text-sky-400" />
                    <span>Barrackpore, Kolkata</span>
                  </div>
                  <div className="flex items-center gap-1.5 bg-slate-800/80 border border-slate-700/60 rounded-full px-3.5 py-1.5">
                    <Code2 className="w-3.5 h-3.5 text-sky-400" />
                    <span>Web Development & C++</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons & Socials */}
              <div className="space-y-4 pt-2">
                <div className="flex flex-wrap items-center gap-3">
                  <a
                    id="hero-view-projects-btn"
                    href="#projects"
                    className="inline-flex items-center justify-center gap-2 bg-sky-500 hover:bg-sky-600 text-white px-6 py-3 rounded-xl text-sm font-bold shadow-lg shadow-sky-500/20 hover:shadow-sky-500/30 transition-all cursor-pointer"
                  >
                    <span>View Projects</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>

                  <a
                    id="hero-contact-me-btn"
                    href="#contact"
                    className="inline-flex items-center justify-center gap-2 border border-slate-700 hover:bg-slate-800/90 text-slate-200 px-6 py-3 rounded-xl text-sm font-bold transition-colors cursor-pointer"
                  >
                    <Mail className="w-4 h-4 text-sky-400" />
                    <span>Contact Me</span>
                  </a>

                  <button
                    id="hero-resume-btn"
                    type="button"
                    onClick={onOpenResume}
                    className="inline-flex items-center justify-center gap-2 border border-slate-800 hover:border-slate-700 bg-slate-900/60 text-slate-300 hover:text-white px-4 py-3 rounded-xl text-xs font-semibold transition-all cursor-pointer"
                  >
                    <FileText className="w-4 h-4 text-sky-400" />
                    <span>Resume</span>
                  </button>
                </div>

                {/* Direct quick connect */}
                <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400 pt-2 border-t border-slate-800/80">
                  <span className="font-mono text-slate-500 uppercase tracking-wider">Connect:</span>
                  
                  <a
                    id="hero-github-link"
                    href={PERSONAL_INFO.github}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="GitHub Profile"
                    className="flex items-center gap-1.5 hover:text-sky-400 transition-colors"
                  >
                    <Github className="w-3.5 h-3.5" />
                    <span>GitHub</span>
                  </a>

                  <a
                    id="hero-linkedin-link"
                    href={PERSONAL_INFO.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="LinkedIn Profile"
                    className="flex items-center gap-1.5 hover:text-sky-400 transition-colors"
                  >
                    <Linkedin className="w-3.5 h-3.5" />
                    <span>LinkedIn</span>
                  </a>

                  <button
                    id="hero-copy-email-btn"
                    type="button"
                    onClick={handleCopyEmail}
                    className="flex items-center gap-1.5 hover:text-sky-400 transition-colors cursor-pointer"
                    title="Click to copy email address"
                  >
                    {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    <span className="font-mono">{copiedEmail ? 'Copied!' : PERSONAL_INFO.email}</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Currently Learning Card in Hero */}
            <div
              className={`p-6 rounded-[32px] border transition-all ${
                darkMode
                  ? 'bg-slate-900/40 border-slate-800 shadow-lg'
                  : 'bg-white/80 border-slate-200 shadow-sm'
              }`}
            >
              <h3 className="text-xs uppercase tracking-widest text-slate-500 font-bold mb-4 flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-sky-400" />
                <span>Currently Learning & Mastering</span>
              </h3>
              <div className="flex flex-wrap gap-2">
                <span className="bg-slate-800/90 px-3 py-1 rounded-full text-xs text-sky-300 border border-sky-500/20 font-medium">
                  React 19 & Next.js Basics
                </span>
                <span className="bg-slate-800/90 px-3 py-1 rounded-full text-xs text-sky-300 border border-sky-500/20 font-medium">
                  C++ Data Structures
                </span>
                <span className="bg-slate-800/90 px-3 py-1 rounded-full text-xs text-sky-300 border border-sky-500/20 font-medium">
                  Tailwind CSS & UI Design
                </span>
                <span className="bg-slate-800/90 px-3 py-1 rounded-full text-xs text-sky-300 border border-sky-500/20 font-medium">
                  Node.js & Express REST APIs
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Developer IDE / Code Simulator inside rounded-[32px] container */}
          <div className="lg:col-span-5 flex flex-col">
            <div
              id="developer-terminal-card"
              className={`rounded-[32px] border transition-all duration-300 shadow-2xl overflow-hidden flex flex-col flex-1 ${
                darkMode
                  ? 'bg-slate-900/60 border-slate-800 text-slate-200'
                  : 'bg-slate-900 text-slate-100 border-slate-800 shadow-slate-900/40'
              }`}
            >
              {/* Window Header */}
              <div className="flex items-center justify-between px-5 py-4 bg-slate-950/80 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/90" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/90" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/90" />
                  <span className="ml-2 text-xs font-mono text-slate-400 hidden sm:inline">
                    rahul-bera@svu-workstation:~
                  </span>
                </div>
                
                {/* Run code trigger */}
                <button
                  id="terminal-run-code-button"
                  type="button"
                  onClick={handleRunCode}
                  disabled={isRunning}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-sky-500 hover:bg-sky-600 text-white shadow-md shadow-sky-500/20 transition-all cursor-pointer disabled:opacity-50"
                  title="Execute code snippet"
                >
                  <Play className={`w-3 h-3 ${isRunning ? 'animate-spin' : ''}`} />
                  <span>{isRunning ? 'Running...' : 'Run Code'}</span>
                </button>
              </div>

              {/* Code Tabs */}
              <div className="flex items-center gap-1 px-4 py-2 bg-slate-950/40 border-b border-slate-800/80 overflow-x-auto text-xs font-mono">
                {(['react', 'cpp', 'python', 'styles'] as CodeTab[]).map((tab) => {
                  const isActive = activeTab === tab;
                  return (
                    <button
                      key={tab}
                      id={`tab-btn-${tab}`}
                      onClick={() => {
                        setActiveTab(tab);
                        setConsoleOutput(null);
                      }}
                      className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-colors cursor-pointer whitespace-nowrap ${
                        isActive
                          ? 'bg-slate-800 text-sky-400 font-semibold border border-slate-700'
                          : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
                      }`}
                    >
                      <span>{tabLabels[tab].icon}</span>
                      <span>{tabLabels[tab].label}</span>
                    </button>
                  );
                })}
              </div>

              {/* Code Content Area */}
              <div className="p-5 text-xs sm:text-sm font-mono overflow-x-auto flex-1 max-h-[340px]">
                <pre className="text-slate-300 leading-relaxed font-mono">
                  <code>{CODE_SNIPPETS[activeTab]}</code>
                </pre>
              </div>

              {/* Terminal Output Drawer / Console */}
              {consoleOutput && (
                <div className="p-4 bg-slate-950/95 border-t border-sky-500/30 text-xs font-mono text-sky-300 flex items-start gap-2.5 animate-fadeIn">
                  <Terminal className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                  <div className="flex-1 break-words">
                    <span className="text-slate-500 font-bold block mb-0.5">[OUTPUT CONSOLE]</span>
                    <span>{consoleOutput}</span>
                  </div>
                </div>
              )}

              {/* Footer status bar */}
              <div className="px-5 py-3 bg-slate-950/80 border-t border-slate-800 flex items-center justify-between text-[11px] font-mono text-slate-400">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-sky-400 inline-block animate-pulse" />
                  <span>UTF-8 • {tabLabels[activeTab].lang.toUpperCase()}</span>
                </div>
                <span>BCA 2nd Year • SVU</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
