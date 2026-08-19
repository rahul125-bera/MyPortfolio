import React from 'react';
import {
  X,
  Printer,
  Download,
  Mail,
  MapPin,
  Github,
  Linkedin,
  GraduationCap,
  Briefcase,
  Code2,
  CheckCircle2,
  ExternalLink
} from 'lucide-react';
import { PERSONAL_INFO, SKILLS_DATA, EDUCATION_DATA, PROJECTS_DATA } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
  darkMode: boolean;
}

export default function ResumeModal({ isOpen, onClose, darkMode }: ResumeModalProps) {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div
      id="resume-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
    >
      <div
        id="resume-modal-container"
        className={`w-full max-w-4xl max-h-[92vh] flex flex-col rounded-[32px] border shadow-2xl overflow-hidden transition-all animate-scaleUp ${
          darkMode
            ? 'bg-slate-900 border-slate-800 text-slate-100'
            : 'bg-white border-slate-200 text-slate-900'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800/80 bg-slate-950/60">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-sky-400" />
            <span className="font-mono text-xs font-semibold text-slate-300">
              Rahul_Bera_Resume_BCA2026.pdf
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              id="resume-print-button"
              type="button"
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold bg-sky-500 hover:bg-sky-600 text-white shadow-sm shadow-sky-500/20 transition-all cursor-pointer"
              title="Print or Save as PDF"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>

            <button
              id="close-resume-modal-btn"
              type="button"
              onClick={onClose}
              className="p-2 rounded-full border border-slate-800 text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
              aria-label="Close resume viewer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Sheet */}
        <div className="p-6 sm:p-10 overflow-y-auto flex-1 bg-slate-950 text-slate-200 font-sans space-y-8 print:p-0 print:bg-white print:text-black">
          
          {/* Header */}
          <div className="border-b border-slate-800 pb-6 space-y-2">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white print:text-black">
                  {PERSONAL_INFO.name}
                </h1>
                <p className="text-sm sm:text-base text-sky-400 font-medium print:text-sky-800">
                  {PERSONAL_INFO.role}
                </p>
              </div>

              <div className="text-xs space-y-1 font-mono text-slate-400 print:text-slate-700">
                <div className="flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-sky-400" />
                  <span>{PERSONAL_INFO.email}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-sky-400" />
                  <span>{PERSONAL_INFO.location}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Github className="w-3.5 h-3.5 text-slate-300" />
                  <span>github.com/rahulbera-dev</span>
                </div>
              </div>
            </div>
          </div>

          {/* Objective */}
          <div className="space-y-2">
            <h2 className="text-xs uppercase tracking-wider font-bold text-sky-400 border-b border-slate-800/80 pb-1 font-mono">
              // Professional Summary
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 print:text-slate-800 leading-relaxed">
              Motivated 2nd-year Bachelor of Computer Applications (BCA) student at Swami Vivekananda University, Barrackpore, with proven skills in HTML, CSS, JavaScript, C++, and Python. Actively seeking a software engineering or frontend development internship to apply computer science fundamentals, build user-friendly interfaces, and collaborate with engineering teams.
            </p>
          </div>

          {/* Education */}
          <div className="space-y-4">
            <h2 className="text-xs uppercase tracking-wider font-bold text-sky-400 border-b border-slate-800/80 pb-1 font-mono">
              // Education
            </h2>
            
            <div className="space-y-3">
              {EDUCATION_DATA.map((edu, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="flex justify-between items-baseline">
                    <span className="font-bold text-sm text-white print:text-black">{edu.degree}</span>
                    <span className="text-xs font-mono text-slate-400">{edu.period}</span>
                  </div>
                  <div className="text-xs text-sky-400 font-semibold">{edu.institution}, {edu.location}</div>
                  <p className="text-xs text-slate-300 print:text-slate-700 leading-relaxed">{edu.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Skills */}
          <div className="space-y-3">
            <h2 className="text-xs uppercase tracking-wider font-bold text-sky-400 border-b border-slate-800/80 pb-1 font-mono">
              // Technical Skills
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div>
                <strong className="text-slate-100 font-semibold block mb-1">Languages & Core:</strong>
                <span className="text-slate-300">C++, Python, JavaScript (ES6+), HTML5, CSS3</span>
              </div>
              <div>
                <strong className="text-slate-100 font-semibold block mb-1">Web & Frameworks:</strong>
                <span className="text-slate-300">React.js, Tailwind CSS, Responsive Web Design, DOM Manipulation</span>
              </div>
              <div>
                <strong className="text-slate-100 font-semibold block mb-1">Tools & Platforms:</strong>
                <span className="text-slate-300">Git, GitHub, VS Code, Chrome DevTools, Vite</span>
              </div>
              <div>
                <strong className="text-slate-100 font-semibold block mb-1">Coursework & Concepts:</strong>
                <span className="text-slate-300">Data Structures & Algorithms, Object-Oriented Programming, DBMS, UI/UX Basics</span>
              </div>
            </div>
          </div>

          {/* Projects */}
          <div className="space-y-4">
            <h2 className="text-xs uppercase tracking-wider font-bold text-sky-400 border-b border-slate-800/80 pb-1 font-mono">
              // Featured Academic & Personal Projects
            </h2>

            <div className="space-y-4">
              {PROJECTS_DATA.slice(0, 4).map((proj, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="flex justify-between items-baseline">
                    <span className="font-bold text-sm text-white print:text-black">{proj.title}</span>
                    <span className="text-[11px] font-mono text-sky-400">{proj.technologies.slice(0, 3).join(', ')}</span>
                  </div>
                  <p className="text-xs text-slate-300 print:text-slate-700 leading-relaxed">{proj.description}</p>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="p-4 border-t border-slate-800/80 bg-slate-950/60 flex items-center justify-between text-xs text-slate-400">
          <span>Ready for opportunities in 2026</span>
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-full bg-slate-800 text-slate-200 hover:text-white border border-slate-700 transition-colors cursor-pointer font-semibold"
          >
            Close Viewer
          </button>
        </div>

      </div>
    </div>
  );
}
