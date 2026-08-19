import React, { useState } from 'react';
import {
  Code2,
  Palette,
  FileCode2,
  Cpu,
  Terminal,
  GitBranch,
  Smartphone,
  Layout,
  Sparkles,
  Layers,
  CheckCircle2,
  SlidersHorizontal,
  Flame
} from 'lucide-react';
import { SKILLS_DATA } from '../data/portfolioData';
import { Skill } from '../types';

interface SkillsProps {
  darkMode: boolean;
}

type SkillCategory = 'all' | 'frontend' | 'programming' | 'tools' | 'design';

export default function Skills({ darkMode }: SkillsProps) {
  const [selectedCategory, setSelectedCategory] = useState<SkillCategory>('all');
  const [activeSkill, setActiveSkill] = useState<Skill | null>(null);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code2':
        return <Code2 className="w-6 h-6 text-orange-400" />;
      case 'Palette':
        return <Palette className="w-6 h-6 text-sky-400" />;
      case 'FileCode2':
        return <FileCode2 className="w-6 h-6 text-amber-400" />;
      case 'Cpu':
        return <Cpu className="w-6 h-6 text-blue-400" />;
      case 'Terminal':
        return <Terminal className="w-6 h-6 text-emerald-400" />;
      case 'GitBranch':
        return <GitBranch className="w-6 h-6 text-rose-400" />;
      case 'Smartphone':
        return <Smartphone className="w-6 h-6 text-teal-400" />;
      case 'Layout':
        return <Layout className="w-6 h-6 text-purple-400" />;
      default:
        return <Code2 className="w-6 h-6 text-cyan-400" />;
    }
  };

  const filteredSkills = SKILLS_DATA.filter((skill) => {
    if (selectedCategory === 'all') return true;
    return skill.category === selectedCategory;
  });

  const categories: { id: SkillCategory; label: string }[] = [
    { id: 'all', label: 'All Skills' },
    { id: 'frontend', label: 'Web & Frontend' },
    { id: 'programming', label: 'Programming & Logic' },
    { id: 'tools', label: 'Version Control & Tools' },
    { id: 'design', label: 'UI/UX & Responsive' },
  ];

  return (
    <section id="skills" className="py-20 sm:py-24 relative overflow-hidden">
      {/* Background soft glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-sky-500/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <p className="text-sky-400 font-mono text-xs sm:text-sm font-semibold tracking-wider mb-2">
            // Technical Stack & Tools
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold flex items-center gap-3 text-white mb-3">
            <span className="w-8 h-[2px] bg-sky-500 shrink-0"></span>
            <span>Skills & Core Proficiencies</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Honest and realistic skill assessments developed through 2nd-year BCA coursework at SVU, self-driven programming practice, and hands-on project creation.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center gap-2 mb-10">
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                id={`filter-skill-${cat.id}`}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                  isSelected
                    ? 'bg-sky-500 text-white shadow-md shadow-sky-500/20'
                    : darkMode
                    ? 'bg-slate-900/60 border border-slate-800 text-slate-300 hover:bg-slate-800 hover:text-white'
                    : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-100 shadow-sm'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredSkills.map((skill) => {
            return (
              <div
                key={skill.name}
                id={`skill-card-${skill.name.toLowerCase().replace(/\s+/g, '-')}`}
                onMouseEnter={() => setActiveSkill(skill)}
                className={`p-6 rounded-[28px] border transition-all duration-300 group hover:-translate-y-1 relative overflow-hidden flex flex-col justify-between ${
                  darkMode
                    ? 'bg-slate-900/40 border-slate-800 hover:border-sky-500/40 hover:shadow-lg hover:shadow-sky-500/5'
                    : 'bg-white border-slate-200 shadow-sm hover:border-sky-400 hover:shadow-md'
                }`}
              >
                {/* Subtle top gradient bar on hover */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-sky-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity" />

                <div>
                  {/* Skill Card Header */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-slate-800 border border-slate-700/60 flex items-center justify-center p-2.5 group-hover:scale-105 transition-transform">
                      {getIcon(skill.icon)}
                    </div>
                    <span
                      className={`text-xs font-mono font-semibold px-2.5 py-1 rounded-full border ${
                        skill.experienceLabel === 'Proficient'
                          ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30'
                          : 'bg-sky-500/10 text-sky-400 border-sky-500/30'
                      }`}
                    >
                      {skill.experienceLabel}
                    </span>
                  </div>

                  {/* Skill Title & Description */}
                  <h3 className="text-lg font-bold text-slate-100 dark:text-white mb-2 group-hover:text-sky-400 transition-colors">
                    {skill.name}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed mb-4 min-h-[48px]">
                    {skill.description}
                  </p>
                </div>

                {/* Progress Bar & Level */}
                <div className="space-y-3 pt-3 border-t border-slate-800">
                  <div className="flex justify-between items-center text-xs font-mono">
                    <span className="text-slate-400">Comfort Level</span>
                    <span className="font-bold text-sky-400">{skill.level}%</span>
                  </div>
                  
                  {/* Visual Progress Bar */}
                  <div className="w-full h-2 rounded-full bg-slate-800 overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-sky-400 to-blue-500 rounded-full transition-all duration-700 ease-out"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {skill.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-slate-800/90 text-sky-300 border border-sky-500/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Skill Summary Matrix Banner */}
        <div
          className={`mt-12 p-6 sm:p-8 rounded-[32px] border flex flex-col md:flex-row items-center justify-between gap-6 ${
            darkMode
              ? 'bg-slate-900/40 border-slate-800 text-slate-200'
              : 'bg-slate-50 border-slate-200 text-slate-800 shadow-sm'
          }`}
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-slate-800 text-sky-400 border border-slate-700/60 flex items-center justify-center shrink-0">
              <Flame className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-base text-slate-100 dark:text-white">
                Practicing Modern Web Development & C++ Daily
              </h4>
              <p className="text-xs sm:text-sm text-slate-400">
                Balancing BCA university theory with hands-on coding practice in data structures, algorithms, and responsive UI engineering.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <a
              id="skills-view-projects-link"
              href="#projects"
              className="px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold bg-sky-500 hover:bg-sky-600 text-white shadow-md shadow-sky-500/20 transition-all cursor-pointer"
            >
              See Skills in Projects →
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
