import React, { useState } from 'react';
import {
  Sparkles,
  Github,
  ExternalLink,
  Layers,
  ArrowUpRight,
  Code2,
  CheckCircle2,
  Eye,
  SlidersHorizontal,
  FolderGit2
} from 'lucide-react';
import { PROJECTS_DATA } from '../data/portfolioData';
import { Project } from '../types';
import ProjectModal from './ProjectModal';

interface ProjectsProps {
  darkMode: boolean;
}

type ProjectCategory = 'all' | 'web' | 'cpp' | 'data';

export default function Projects({ darkMode }: ProjectsProps) {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>('all');
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const filteredProjects = PROJECTS_DATA.filter((proj) => {
    if (selectedCategory === 'all') return true;
    return proj.category === selectedCategory;
  });

  const categories: { id: ProjectCategory; label: string }[] = [
    { id: 'all', label: 'All Projects (5)' },
    { id: 'web', label: 'Web Applications (3)' },
    { id: 'cpp', label: 'C++ & Algorithms (1)' },
    { id: 'data', label: 'Data & Analytics (1)' },
  ];

  return (
    <section id="projects" className="py-20 sm:py-24 relative overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-sky-500/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <p className="text-sky-400 font-mono text-xs sm:text-sm font-semibold tracking-wider mb-2">
            // Featured Projects & Code
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold flex items-center gap-3 text-white mb-3">
            <span className="w-8 h-[2px] bg-sky-500 shrink-0"></span>
            <span>Projects & Software Builds</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Practical software projects demonstrating responsive web engineering, OOP with C++, data analysis, and student-led development at SVU Barrackpore.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center gap-2 mb-10">
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                id={`project-category-${cat.id}`}
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

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              id={`project-card-${project.id}`}
              className={`rounded-[28px] border transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1.5 overflow-hidden ${
                darkMode
                  ? 'bg-slate-900/40 border-slate-800 hover:border-sky-500/40 hover:shadow-xl hover:shadow-sky-500/5'
                  : 'bg-white border-slate-200 shadow-sm hover:border-sky-400 hover:shadow-lg'
              }`}
            >
              {/* Card Top Decorative Header */}
              <div className={`p-6 bg-slate-950/80 border-b border-slate-800 relative`}>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-xs font-mono font-semibold px-3 py-1 rounded-full bg-slate-800 text-sky-300 border border-sky-500/20">
                    {project.categoryLabel}
                  </span>
                  {project.badge && (
                    <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-slate-800 text-sky-400 border border-slate-700">
                      {project.badge}
                    </span>
                  )}
                </div>

                <h3 className="text-xl font-bold tracking-tight text-slate-100 dark:text-white group-hover:text-sky-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-xs text-slate-400 mt-1 font-medium">
                  {project.subtitle}
                </p>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-5">
                <div>
                  <p className="text-xs sm:text-sm text-slate-300 dark:text-slate-300 leading-relaxed line-clamp-3">
                    {project.description}
                  </p>

                  {/* Highlights Bullet Preview */}
                  <div className="mt-4 space-y-1.5">
                    {project.features.slice(0, 2).map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2 text-xs text-slate-400">
                        <CheckCircle2 className="w-3.5 h-3.5 text-sky-400 shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Pills */}
                <div className="pt-4 border-t border-slate-800">
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.technologies.slice(0, 4).map((tech, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-slate-800/90 text-sky-300 border border-sky-500/20"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-slate-800 text-slate-400">
                        +{project.technologies.length - 4}
                      </span>
                    )}
                  </div>

                  {/* Card Action Buttons */}
                  <div className="flex items-center justify-between gap-2 pt-2">
                    <button
                      id={`btn-explore-${project.id}`}
                      type="button"
                      onClick={() => setActiveProject(project)}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-sky-400 hover:text-sky-300 transition-colors p-1 cursor-pointer"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>Details & Code</span>
                    </button>

                    <div className="flex items-center gap-2">
                      <a
                        id={`btn-github-${project.id}`}
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="p-2 rounded-xl border border-slate-700 bg-slate-800 text-slate-300 hover:text-white hover:border-slate-600 transition-colors"
                        title="GitHub Source Code"
                        aria-label={`GitHub repository for ${project.title}`}
                      >
                        <Github className="w-3.5 h-3.5" />
                      </a>

                      {project.demoUrl && (
                        <button
                          id={`btn-demo-${project.id}`}
                          type="button"
                          onClick={() => setActiveProject(project)}
                          className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-bold bg-sky-500 hover:bg-sky-600 text-white shadow-sm shadow-sky-500/20 transition-all cursor-pointer"
                          title="Live Demo Simulator"
                        >
                          <span>Demo</span>
                          <ArrowUpRight className="w-3 h-3" />
                        </button>
                      )}
                    </div>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* GitHub Full Profile Banner */}
        <div
          className={`mt-14 p-6 sm:p-8 rounded-[32px] border flex flex-col sm:flex-row items-center justify-between gap-6 ${
            darkMode
              ? 'bg-slate-900/40 border-slate-800'
              : 'bg-white border-slate-200 shadow-sm'
          }`}
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-slate-800 flex items-center justify-center text-sky-400 border border-slate-700/60 shrink-0">
              <FolderGit2 className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-base sm:text-lg text-slate-100 dark:text-white">
                Explore More Practice Repositories on GitHub
              </h4>
              <p className="text-xs sm:text-sm text-slate-400">
                Check out algorithm practice repositories, mini frontend templates, and college lab assignments.
              </p>
            </div>
          </div>

          <a
            id="view-all-github-btn"
            href="https://github.com/rahulbera-dev"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-bold text-xs sm:text-sm bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 transition-colors shrink-0"
          >
            <Github className="w-4 h-4" />
            <span>Visit @rahulbera-dev</span>
          </a>
        </div>

      </div>

      {/* Interactive Project Deep Dive Modal */}
      <ProjectModal
        project={activeProject}
        onClose={() => setActiveProject(null)}
        darkMode={darkMode}
      />
    </section>
  );
}
