import React from 'react';
import {
  GraduationCap,
  Calendar,
  MapPin,
  Sparkles,
  BookOpen,
  CheckCircle2,
  School,
  Award,
  Compass
} from 'lucide-react';
import { EDUCATION_DATA } from '../data/portfolioData';

interface EducationProps {
  darkMode: boolean;
}

export default function Education({ darkMode }: EducationProps) {
  return (
    <section id="education" className="py-20 sm:py-24 relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-sky-500/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <p className="text-sky-400 font-mono text-xs sm:text-sm font-semibold tracking-wider mb-2">
            // Academic Pathway
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold flex items-center gap-3 text-white mb-3">
            <span className="w-8 h-[2px] bg-sky-500 shrink-0"></span>
            <span>Education & Academic Foundations</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Undergraduate degree coursework and foundational computing training at Swami Vivekananda University (SVU), Barrackpore.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="max-w-4xl mx-auto relative">
          
          {/* Vertical timeline line */}
          <div className="absolute left-4 sm:left-1/2 top-4 bottom-4 w-0.5 bg-gradient-to-b from-sky-500 via-blue-500 to-slate-800 -translate-x-1/2 hidden sm:block" />

          <div className="space-y-12">
            {EDUCATION_DATA.map((item, idx) => {
              const isEven = idx % 2 === 0;

              return (
                <div
                  key={idx}
                  id={`education-card-${idx}`}
                  className={`relative flex flex-col sm:flex-row items-start ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  } gap-8 group`}
                >
                  {/* Center Node Icon */}
                  <div className="hidden sm:flex absolute left-1/2 top-6 -translate-x-1/2 w-10 h-10 rounded-full bg-slate-950 border-2 border-sky-400 items-center justify-center text-sky-400 shadow-lg shadow-sky-500/20 z-10 group-hover:scale-110 transition-transform">
                    {idx === 0 ? <GraduationCap className="w-5 h-5" /> : <School className="w-4 h-4" />}
                  </div>

                  {/* Empty Spacer Column for timeline balance */}
                  <div className="hidden sm:block sm:w-1/2" />

                  {/* Education Content Card */}
                  <div className="w-full sm:w-1/2">
                    <div
                      className={`p-6 sm:p-7 rounded-[28px] border transition-all duration-300 ${
                        darkMode
                          ? 'bg-slate-900/40 border-slate-800 hover:border-sky-500/30 hover:shadow-xl hover:shadow-sky-500/5'
                          : 'bg-white border-slate-200 shadow-sm hover:border-sky-400 hover:shadow-md'
                      }`}
                    >
                      {/* Badge and Period */}
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                        <span className="text-xs font-mono font-semibold px-3 py-1 rounded-full bg-slate-800 text-sky-300 border border-sky-500/20">
                          {item.status}
                        </span>
                        <div className="flex items-center gap-1.5 text-xs text-slate-400 font-mono">
                          <Calendar className="w-3.5 h-3.5" />
                          <span>{item.period}</span>
                        </div>
                      </div>

                      {/* Degree & Institution */}
                      <h3 className="text-lg sm:text-xl font-bold text-slate-100 dark:text-white mb-1">
                        {item.degree}
                      </h3>
                      <div className="flex items-center gap-1.5 text-sm font-semibold text-sky-400 mb-3">
                        <MapPin className="w-4 h-4" />
                        <span>{item.institution}, {item.location}</span>
                      </div>

                      {/* Description */}
                      <p className="text-xs sm:text-sm text-slate-300 dark:text-slate-300 leading-relaxed mb-4">
                        {item.description}
                      </p>

                      {/* Highlights */}
                      <div className="space-y-2 mb-5">
                        {item.highlights.map((h, hIdx) => (
                          <div key={hIdx} className="flex items-start gap-2 text-xs text-slate-400">
                            <CheckCircle2 className="w-3.5 h-3.5 text-sky-400 shrink-0 mt-0.5" />
                            <span>{h}</span>
                          </div>
                        ))}
                      </div>

                      {/* Key Coursework / Subjects */}
                      <div>
                        <span className="text-[11px] uppercase tracking-wider font-semibold text-slate-500 block mb-2">
                          Key Subjects & Coursework
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {item.coursework.map((course, cIdx) => (
                            <span
                              key={cIdx}
                              className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-slate-800/90 text-sky-300 border border-sky-500/20"
                            >
                              {course}
                            </span>
                          ))}
                        </div>
                      </div>

                    </div>
                  </div>

                </div>
              );
            })}
          </div>
        </div>

        {/* Academic Commitment Note */}
        <div
          className={`max-w-3xl mx-auto mt-14 p-6 rounded-[32px] border text-center ${
            darkMode
              ? 'bg-slate-900/40 border-slate-800 text-slate-300'
              : 'bg-slate-50 border-slate-200 text-slate-700'
          }`}
        >
          <div className="flex items-center justify-center gap-2 text-sky-400 font-bold text-sm mb-1.5">
            <BookOpen className="w-4 h-4" />
            <span>Academic Focus</span>
          </div>
          <p className="text-xs sm:text-sm text-slate-400">
            "I actively connect classroom theoretical computing concepts (memory management, asymptotic complexity, schema design) to real web and software development projects."
          </p>
        </div>

      </div>
    </section>
  );
}
