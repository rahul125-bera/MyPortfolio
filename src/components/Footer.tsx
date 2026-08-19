import React from 'react';
import { Github, Linkedin, Instagram, Mail, Heart, Code2, ArrowUp, GraduationCap } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface FooterProps {
  onOpenResume: () => void;
}

export default function Footer({ onOpenResume }: FooterProps) {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer id="main-footer" className="border-t border-slate-800/80 bg-slate-950 text-slate-400 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center pb-8 border-b border-slate-900">
          
          {/* Brand Col */}
          <div className="md:col-span-5 space-y-2">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-sky-500 flex items-center justify-center font-mono font-bold text-white text-xs shadow-sm shadow-sky-500/30">
                RB
              </div>
              <span className="font-bold text-lg text-white tracking-tight">
                {PERSONAL_INFO.name}
              </span>
            </div>
            <p className="text-xs text-slate-400 max-w-sm">
              2nd Year BCA Student at Swami Vivekananda University (SVU), Barrackpore. Aspiring Web Developer & Software Engineer.
            </p>
          </div>

          {/* Nav links */}
          <div className="md:col-span-4 flex flex-wrap gap-x-6 gap-y-2 text-xs font-medium">
            <button onClick={() => scrollToSection('hero')} className="hover:text-sky-400 transition-colors cursor-pointer">
              Home
            </button>
            <button onClick={() => scrollToSection('about')} className="hover:text-sky-400 transition-colors cursor-pointer">
              About
            </button>
            <button onClick={() => scrollToSection('skills')} className="hover:text-sky-400 transition-colors cursor-pointer">
              Skills
            </button>
            <button onClick={() => scrollToSection('projects')} className="hover:text-sky-400 transition-colors cursor-pointer">
              Projects
            </button>
            <button onClick={() => scrollToSection('education')} className="hover:text-sky-400 transition-colors cursor-pointer">
              Education
            </button>
            <button onClick={() => scrollToSection('learning')} className="hover:text-sky-400 transition-colors cursor-pointer">
              Learning
            </button>
            <button onClick={() => scrollToSection('contact')} className="hover:text-sky-400 transition-colors cursor-pointer">
              Contact
            </button>
            <button onClick={onOpenResume} className="text-sky-400 hover:underline transition-colors cursor-pointer font-semibold">
              Resume
            </button>
          </div>

          {/* Social icons */}
          <div className="md:col-span-3 flex items-center md:justify-end gap-3">
            <a
              id="footer-github-link"
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="p-2.5 rounded-2xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-sky-400 hover:border-sky-500/40 transition-all"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              id="footer-linkedin-link"
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="p-2.5 rounded-2xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-sky-400 hover:border-sky-500/40 transition-all"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              id="footer-instagram-link"
              href={PERSONAL_INFO.instagram}
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="p-2.5 rounded-2xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-sky-400 hover:border-sky-500/40 transition-all"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a
              id="footer-email-link"
              href={`mailto:${PERSONAL_INFO.email}`}
              aria-label="Email"
              className="p-2.5 rounded-2xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-sky-400 hover:border-sky-500/40 transition-all"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>

        </div>

        {/* Bottom copyright line */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500 text-center sm:text-left">
          <div>
            © 2026 Rahul Bera. Built with React & modern web engineering.
          </div>
          <div className="flex items-center gap-2 font-mono">
            <span>SVU Barrackpore • BCA 2nd Year</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
