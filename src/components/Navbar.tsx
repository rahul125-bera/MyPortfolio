import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, FileText, Code, Sparkles } from 'lucide-react';
import { NavItem } from '../types';

interface NavbarProps {
  darkMode: boolean;
  setDarkMode: (val: boolean | ((prev: boolean) => boolean)) => void;
  onOpenResume: () => void;
}

const NAV_ITEMS: NavItem[] = [
  { id: 'hero', label: 'Home', href: '#hero' },
  { id: 'about', label: 'About', href: '#about' },
  { id: 'skills', label: 'Skills', href: '#skills' },
  { id: 'projects', label: 'Projects', href: '#projects' },
  { id: 'education', label: 'Education', href: '#education' },
  { id: 'learning', label: 'Learning', href: '#learning' },
  { id: 'contact', label: 'Contact', href: '#contact' },
];

export default function Navbar({ darkMode, setDarkMode, onOpenResume }: NavbarProps) {
  const [activeSection, setActiveSection] = useState('hero');
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Section spy
      const sections = NAV_ITEMS.map((item) => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(NAV_ITEMS[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      id="main-navbar-header"
      className="fixed top-0 left-0 right-0 z-40 transition-all duration-300 pt-3 sm:pt-4 px-4 sm:px-6 lg:px-8 pointer-events-none"
    >
      <div className="max-w-7xl mx-auto pointer-events-auto">
        <nav
          className={`flex items-center justify-between px-4 sm:px-6 py-2.5 sm:py-3 rounded-full border transition-all duration-300 shadow-xl ${
            darkMode
              ? 'bg-slate-900/60 backdrop-blur-xl border-slate-800 shadow-black/30 text-slate-200'
              : 'bg-white/90 backdrop-blur-xl border-slate-200 shadow-slate-200/50 text-slate-800'
          }`}
        >
          {/* Logo / Name */}
          <a
            id="nav-brand-logo"
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#hero');
            }}
            className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 rounded-full"
          >
            <div className="text-xl font-extrabold bg-gradient-to-r from-sky-400 to-blue-600 bg-clip-text text-transparent tracking-tight group-hover:scale-105 transition-transform duration-200">
              RB.
            </div>
            <div className="hidden sm:flex flex-col">
              <span className="font-bold text-sm tracking-tight text-slate-100 group-hover:text-sky-400 transition-colors flex items-center gap-1.5">
                Rahul Bera
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" title="Available for opportunities" />
              </span>
              <span className="text-[10px] text-slate-400 font-mono">
                BCA 2nd Year • SVU
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <div id="desktop-nav-menu" className="hidden md:flex items-center gap-1 lg:gap-2">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  id={`nav-link-${item.id}`}
                  onClick={() => handleNavClick(item.href)}
                  className={`px-3.5 py-1.5 rounded-full text-xs lg:text-sm font-medium transition-all duration-150 cursor-pointer ${
                    isActive
                      ? darkMode
                        ? 'text-sky-400 bg-sky-500/10 border border-sky-500/20 font-semibold'
                        : 'text-sky-600 bg-sky-50 border border-sky-200 font-semibold'
                      : darkMode
                      ? 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </div>

          {/* Action Buttons: Theme & Download Resume */}
          <div className="hidden sm:flex items-center gap-2">
            {/* Theme Toggle Button */}
            <button
              id="theme-toggle-button"
              type="button"
              onClick={() => setDarkMode((prev) => !prev)}
              aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
              className={`p-2 rounded-full border transition-all duration-200 cursor-pointer ${
                darkMode
                  ? 'border-slate-800 bg-slate-800/80 text-slate-300 hover:text-sky-400 hover:border-slate-700 hover:bg-slate-800'
                  : 'border-slate-200 bg-slate-100 text-slate-700 hover:text-sky-600 hover:border-slate-300 hover:bg-slate-200 shadow-sm'
              }`}
            >
              {darkMode ? <Sun className="w-3.5 h-3.5 text-amber-400" /> : <Moon className="w-3.5 h-3.5 text-slate-700" />}
            </button>

            {/* Resume Button */}
            <button
              id="header-resume-button"
              type="button"
              onClick={onOpenResume}
              className="inline-flex items-center gap-1.5 bg-sky-500 hover:bg-sky-600 text-white px-4 py-1.5 rounded-full text-xs font-semibold shadow-md shadow-sky-500/20 hover:shadow-sky-500/30 transition-all cursor-pointer"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Download Resume</span>
            </button>
          </div>

          {/* Mobile Menu Toggle & Theme Toggle */}
          <div className="flex md:hidden items-center gap-2">
            <button
              id="mobile-theme-toggle-button"
              type="button"
              onClick={() => setDarkMode((prev) => !prev)}
              aria-label="Toggle Theme"
              className={`p-1.5 rounded-full border ${
                darkMode
                  ? 'border-slate-800 bg-slate-800 text-slate-300'
                  : 'border-slate-200 bg-slate-100 text-slate-700 shadow-sm'
              }`}
            >
              {darkMode ? <Sun className="w-3.5 h-3.5 text-amber-400" /> : <Moon className="w-3.5 h-3.5" />}
            </button>

            <button
              id="mobile-menu-toggle-button"
              type="button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={mobileMenuOpen}
              className={`p-1.5 rounded-full border transition-colors ${
                darkMode
                  ? 'border-slate-800 bg-slate-800 text-slate-300 hover:text-white'
                  : 'border-slate-200 bg-slate-100 text-slate-700 hover:text-slate-900 shadow-sm'
              }`}
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="max-w-7xl mx-auto mt-2 pointer-events-auto">
          <div
            id="mobile-nav-drawer"
            className={`md:hidden border rounded-3xl p-4 space-y-1.5 transition-all duration-200 shadow-2xl ${
              darkMode
                ? 'bg-slate-900/95 backdrop-blur-2xl border-slate-800 text-slate-200'
                : 'bg-white/95 backdrop-blur-2xl border-slate-200 text-slate-800'
            }`}
          >
            <div className="space-y-1">
              {NAV_ITEMS.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <button
                    key={item.id}
                    id={`mobile-nav-link-${item.id}`}
                    onClick={() => handleNavClick(item.href)}
                    className={`w-full text-left px-4 py-2.5 rounded-xl text-sm font-medium transition-colors flex items-center justify-between ${
                      isActive
                        ? darkMode
                          ? 'bg-sky-500/10 text-sky-400 font-semibold border border-sky-500/20'
                          : 'bg-sky-50 text-sky-700 font-semibold border border-sky-200'
                        : darkMode
                        ? 'hover:bg-slate-800 text-slate-300'
                        : 'hover:bg-slate-100 text-slate-700'
                    }`}
                  >
                    <span>{item.label}</span>
                    {isActive && <div className="w-1.5 h-1.5 rounded-full bg-sky-400" />}
                  </button>
                );
              })}
            </div>

            <div className="pt-3 border-t border-slate-800 flex flex-col gap-2">
              <button
                id="mobile-resume-button"
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenResume();
                }}
                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-full text-xs font-bold bg-sky-500 hover:bg-sky-600 text-white shadow-md shadow-sky-500/20 cursor-pointer"
              >
                <FileText className="w-4 h-4" />
                <span>Download Resume</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
