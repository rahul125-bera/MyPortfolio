import React, { useState } from 'react';
import { X, ExternalLink, Github, CheckCircle2, Code2, Layers, Play, Sparkles, Terminal } from 'lucide-react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  darkMode: boolean;
}

export default function ProjectModal({ project, onClose, darkMode }: ProjectModalProps) {
  const [activeTab, setActiveTab] = useState<'overview' | 'features' | 'code' | 'simulator'>('overview');
  const [simOutput, setSimOutput] = useState<string | null>(null);

  if (!project) return null;

  const handleSimulate = () => {
    if (project.id === 'ecommerce-shoes') {
      setSimOutput('👟 SoleSprint Simulator: Added "Air Velocity Pro (Size 9)" to Cart. Subtotal: $129.99 (Tax: $10.40) -> Checkout simulation ready!');
    } else if (project.id === 'student-management') {
      setSimOutput('📊 Student System Simulator: Record #SVU-2024-42 (Rahul Bera) - Semester 3 GPA: 9.12 / Attendance: 92% [Good Standing].');
    } else if (project.id === 'cpp-projects') {
      setSimOutput('⚙️ C++ Console Simulator: Initialized BankAccount(Acc# 9821). Deposited $500.00. Balance: $1,250.00. Logged to binary file ledger.dat.');
    } else if (project.id === 'excel-data-analysis') {
      setSimOutput('📈 Excel Simulator: Executed =XLOOKUP("BCA-Sem3", StudentData[ID], StudentData[Marks]). Mean Score: 86.4%. Variance: ±3.2%.');
    } else {
      setSimOutput('🚀 Portfolio Simulator: Theme toggled, 7 sections rendered with zero layout shift!');
    }
  };

  return (
    <div
      id="project-detail-modal-overlay"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-fadeIn"
      onClick={onClose}
    >
      <div
        id="project-detail-modal-content"
        className={`w-full max-w-3xl max-h-[90vh] flex flex-col rounded-[32px] border shadow-2xl overflow-hidden transition-all animate-scaleUp ${
          darkMode
            ? 'bg-slate-900 border-slate-800 text-slate-100'
            : 'bg-white border-slate-200 text-slate-900'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between p-5 sm:p-6 border-b border-slate-800/80 bg-slate-950/60">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono font-semibold px-3 py-1 rounded-full bg-slate-800 text-sky-300 border border-sky-500/20">
                {project.categoryLabel}
              </span>
              {project.badge && (
                <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-slate-800 text-sky-400 border border-slate-700">
                  {project.badge}
                </span>
              )}
            </div>
            <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-100 dark:text-white">
              {project.title}
            </h3>
          </div>

          <button
            id="close-project-modal-btn"
            type="button"
            onClick={onClose}
            className="p-2 rounded-full border border-slate-800 text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Nav Tabs */}
        <div className="flex items-center gap-2 px-6 pt-3 border-b border-slate-800/80 bg-slate-950/30 text-xs sm:text-sm font-medium overflow-x-auto">
          <button
            onClick={() => setActiveTab('overview')}
            className={`pb-3 px-2 border-b-2 font-semibold transition-colors cursor-pointer ${
              activeTab === 'overview'
                ? 'border-sky-400 text-sky-400'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            Overview
          </button>
          <button
            onClick={() => setActiveTab('features')}
            className={`pb-3 px-2 border-b-2 font-semibold transition-colors cursor-pointer ${
              activeTab === 'features'
                ? 'border-sky-400 text-sky-400'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            Key Highlights ({project.features.length})
          </button>
          {project.codeSnippet && (
            <button
              onClick={() => setActiveTab('code')}
              className={`pb-3 px-2 border-b-2 font-semibold transition-colors cursor-pointer ${
                activeTab === 'code'
                  ? 'border-sky-400 text-sky-400'
                : 'border-transparent text-slate-400 hover:text-slate-200'
              }`}
            >
              Code Snippet
            </button>
          )}
          <button
            onClick={() => setActiveTab('simulator')}
            className={`pb-3 px-2 border-b-2 font-semibold transition-colors cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'simulator'
                ? 'border-sky-400 text-sky-400'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <span>Interactive Simulator</span>
            <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-ping" />
          </button>
        </div>

        {/* Modal Body with Scroll */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1 text-sm sm:text-base leading-relaxed">
          
          {activeTab === 'overview' && (
            <div className="space-y-5">
              <div>
                <h4 className="text-xs uppercase tracking-wider font-semibold text-slate-400 mb-2 font-mono">
                  // Project Description
                </h4>
                <p className="text-slate-300 dark:text-slate-300">
                  {project.description}
                </p>
              </div>

              {/* Technologies Grid */}
              <div>
                <h4 className="text-xs uppercase tracking-wider font-semibold text-slate-400 mb-2.5 font-mono">
                  // Technologies & Stack
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 rounded-full text-xs font-mono font-medium bg-slate-800 text-sky-300 border border-sky-500/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* What I Learned */}
              <div className="p-4 rounded-2xl bg-slate-950/60 border border-slate-800 space-y-1 text-xs sm:text-sm">
                <span className="font-semibold text-sky-400 flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4" />
                  Key Student Takeaway:
                </span>
                <p className="text-slate-400">
                  Gained practical experience implementing clean component separation, handling local client state, and ensuring smooth performance across screen sizes.
                </p>
              </div>
            </div>
          )}

          {activeTab === 'features' && (
            <div className="space-y-4">
              <h4 className="text-xs uppercase tracking-wider font-semibold text-slate-400 mb-1 font-mono">
                // Architectural Features
              </h4>
              <div className="space-y-3">
                {project.features.map((feature, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 p-3.5 rounded-2xl bg-slate-950/50 border border-slate-800/80"
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-slate-300">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'code' && project.codeSnippet && (
            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs font-mono text-slate-400">
                <span>Language: {project.codeSnippet.language}</span>
                <span>Source preview</span>
              </div>
              <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 text-xs sm:text-sm font-mono overflow-x-auto">
                <pre className="text-sky-300">
                  <code>{project.codeSnippet.code}</code>
                </pre>
              </div>
            </div>
          )}

          {activeTab === 'simulator' && (
            <div className="space-y-4">
              <p className="text-xs sm:text-sm text-slate-400">
                Test a simulated execution routine for <strong className="text-white">{project.title}</strong> right in your browser:
              </p>

              <button
                id="run-project-simulator-btn"
                type="button"
                onClick={handleSimulate}
                className="flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold bg-sky-500 hover:bg-sky-600 text-white shadow-sm shadow-sky-500/20 transition-all cursor-pointer"
              >
                <Play className="w-4 h-4" />
                <span>Simulate Execution</span>
              </button>

              {simOutput && (
                <div className="p-4 rounded-2xl bg-slate-950 border border-sky-500/30 text-xs sm:text-sm font-mono text-sky-300 flex items-start gap-2.5 animate-fadeIn">
                  <Terminal className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-slate-500 font-bold block text-[11px]">[SIMULATOR CONSOLE]</span>
                    <span>{simOutput}</span>
                  </div>
                </div>
              )}
            </div>
          )}

        </div>

        {/* Modal Footer with Actions */}
        <div className="p-5 sm:p-6 border-t border-slate-800/80 bg-slate-950/60 flex flex-wrap items-center justify-between gap-3">
          <div className="text-xs text-slate-500 font-mono">
            BCA Academic Project • SVU
          </div>

          <div className="flex items-center gap-3">
            <a
              id="modal-github-link"
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs sm:text-sm font-bold border border-slate-700 bg-slate-800 text-slate-200 hover:bg-slate-700 hover:text-white transition-colors"
            >
              <Github className="w-4 h-4" />
              <span>GitHub Repository</span>
            </a>

            {project.demoUrl && (
              <a
                id="modal-live-demo-link"
                href={project.demoUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs sm:text-sm font-bold bg-sky-500 hover:bg-sky-600 text-white shadow-sm shadow-sky-500/20 transition-all"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Live Demo</span>
              </a>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}
