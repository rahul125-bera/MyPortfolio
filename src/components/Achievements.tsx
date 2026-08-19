import React from 'react';
import {
  Terminal,
  Globe,
  GraduationCap,
  BookOpen,
  GitPullRequest,
  Sparkles,
  Flame,
  CheckCircle2,
  TrendingUp,
  Clock,
  Code
} from 'lucide-react';
import { LEARNING_ACHIEVEMENTS } from '../data/portfolioData';

interface AchievementsProps {
  darkMode: boolean;
}

export default function Achievements({ darkMode }: AchievementsProps) {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Terminal':
        return <Terminal className="w-5 h-5 text-cyan-400" />;
      case 'Globe':
        return <Globe className="w-5 h-5 text-teal-400" />;
      case 'GraduationCap':
        return <GraduationCap className="w-5 h-5 text-sky-400" />;
      case 'BookOpen':
        return <BookOpen className="w-5 h-5 text-emerald-400" />;
      case 'GitPullRequest':
        return <GitPullRequest className="w-5 h-5 text-rose-400" />;
      default:
        return <Code className="w-5 h-5 text-cyan-400" />;
    }
  };

  return (
    <section id="learning" className="py-20 sm:py-24 relative overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-sky-500/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <p className="text-sky-400 font-mono text-xs sm:text-sm font-semibold tracking-wider mb-2">
            // Continuous Progress & Milestones
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold flex items-center gap-3 text-white mb-3">
            <span className="w-8 h-[2px] bg-sky-500 shrink-0"></span>
            <span>Learning Milestones & Coding Practice</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Real, verifiable development habits and academic milestones achieved through daily discipline and curiosity at SVU Barrackpore.
          </p>
        </div>

        {/* Milestone Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {LEARNING_ACHIEVEMENTS.map((item, idx) => (
            <div
              key={idx}
              id={`learning-card-${idx}`}
              className={`p-6 rounded-[28px] border transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 ${
                darkMode
                  ? 'bg-slate-900/40 border-slate-800 hover:border-sky-500/40 hover:shadow-lg hover:shadow-sky-500/5'
                  : 'bg-white border-slate-200 shadow-sm hover:border-sky-400 hover:shadow-md'
              }`}
            >
              <div>
                {/* Card Top Pill & Icon */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="w-10 h-10 rounded-2xl bg-slate-800 border border-slate-700/60 flex items-center justify-center">
                    {getIcon(item.icon)}
                  </div>
                  <span className="text-xs font-mono font-semibold px-3 py-1 rounded-full bg-slate-800 text-sky-300 border border-sky-500/20">
                    {item.metric}
                  </span>
                </div>

                <div className="text-xs font-mono text-slate-500 uppercase tracking-wider mb-1">
                  {item.category}
                </div>

                <h3 className="text-base sm:text-lg font-bold text-slate-100 dark:text-white mb-2 group-hover:text-sky-400 transition-colors">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Card Footer Tag */}
              <div className="mt-5 pt-3 border-t border-slate-800 flex items-center justify-between text-xs text-slate-500 font-mono">
                <span className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-sky-400" />
                  <span>{item.date}</span>
                </span>
                <span className="text-sky-400">Verified Routine</span>
              </div>
            </div>
          ))}

          {/* Special Routine Focus Card */}
          <div
            className={`p-6 rounded-[28px] border flex flex-col justify-between ${
              darkMode
                ? 'bg-slate-900/40 border-slate-800'
                : 'bg-slate-50 border-slate-200 shadow-sm'
            }`}
          >
            <div>
              <div className="w-10 h-10 rounded-2xl bg-slate-800 border border-slate-700/60 text-sky-400 flex items-center justify-center mb-4">
                <Flame className="w-5 h-5" />
              </div>
              <div className="text-xs font-mono text-sky-400 uppercase tracking-wider mb-1">
                Student Routine
              </div>
              <h3 className="text-base sm:text-lg font-bold text-slate-100 dark:text-white mb-2">
                Daily Coding Commitment
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 dark:text-slate-300 leading-relaxed">
                Combining <strong className="text-white">SVU BCA coursework</strong> with 2–3 hours of hands-on frontend experimentation, data structures problem solving, and GitHub project commits daily.
              </p>
            </div>

            <div className="mt-5 pt-3 border-t border-slate-800 text-xs font-mono text-sky-300 flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Dedicated to continuous growth</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
