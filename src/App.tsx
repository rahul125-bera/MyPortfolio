import React, { useState, useEffect } from 'react';
import {
  Menu,
  X,
  Sun,
  Moon,
  FileText,
  Code2,
  Sparkles,
  ArrowRight,
  Mail,
  Github,
  Linkedin,
  Instagram,
  Terminal,
  Play,
  Check,
  Copy,
  MapPin,
  GraduationCap,
  Cpu,
  BookOpen,
  CheckCircle2,
  BrainCircuit,
  Compass,
  Palette,
  FileCode2,
  GitBranch,
  Smartphone,
  Layout,
  Flame,
  ExternalLink,
  Eye,
  ArrowUpRight,
  FolderGit2,
  Calendar,
  School,
  Clock,
  Send,
  AlertCircle,
  ArrowUp,
  Printer
} from 'lucide-react';

/* ==========================================================================
   1. TYPES & INTERFACES
   ========================================================================== */

export interface NavItem {
  id: string;
  label: string;
  href: string;
}

export interface Skill {
  name: string;
  category: 'frontend' | 'programming' | 'tools' | 'design';
  level: number;
  experienceLabel: string;
  icon: string;
  description: string;
  tags: string[];
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  category: 'web' | 'cpp' | 'data';
  categoryLabel: string;
  technologies: string[];
  features: string[];
  githubUrl: string;
  demoUrl?: string;
  imageAccent: string;
  badge?: string;
  codeSnippet?: {
    language: string;
    code: string;
  };
}

export interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  period: string;
  status: string;
  description: string;
  highlights: string[];
  coursework: string[];
}

export interface LearningItem {
  title: string;
  category: string;
  description: string;
  metric: string;
  icon: string;
  date: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

/* ==========================================================================
   2. DATA & CONSTANTS
   ========================================================================== */

export const PERSONAL_INFO = {
  name: 'Rahul Bera',
  role: '2nd Year BCA Student | Aspiring Web Developer',
  university: 'Swami Vivekananda University (SVU), Barrackpore',
  degree: 'Bachelor of Computer Applications (BCA)',
  year: '2nd Year (2024 – 2027)',
  email: 'berarahul125@gmail.com',
  location: 'Barrackpore, Kolkata, West Bengal, India',
  availability: 'Open for Internships, College Projects & Freelance',
  tagline: "I'm a BCA student passionate about building modern websites, learning new technologies, and turning ideas into useful digital experiences.",
  github: 'https://github.com/rahulbera-dev',
  linkedin: 'https://linkedin.com/in/rahul-bera',
  instagram: 'https://instagram.com/rahulbera.dev',
};

export const CODE_SNIPPETS = {
  react: `// Rahul Bera - Aspiring Web Developer
const Developer = {
  name: "Rahul Bera",
  education: "BCA 2nd Year @ SVU Barrackpore",
  passion: ["Modern Web Development", "Problem Solving"],
  primaryStack: ["HTML5", "CSS3", "JavaScript", "C++", "Python"],
  status: "Ready for Internships & Projects 🚀",
  buildUsefulThings: () => "Writing clean, responsive and user-friendly code."
};`,
  cpp: `// C++ Data Structures & Algorithms Practice
#include <iostream>
#include <vector>

class StudentDeveloper {
public:
    std::string name = "Rahul Bera";
    std::string college = "SVU Barrackpore";
    int year = 2;
    void displayFocus() {
        std::cout << "Learning DSA, OOP concepts, and algorithmic thinking." << std::endl;
    }
};`,
  python: `# Python Automation & Scripting
def solve_problem(passion, practice_hours):
    skills = ["Data Handling", "Scripting", "Logic Building"]
    growth = passion * practice_hours
    return {
        "developer": "Rahul Bera",
        "momentum": "Always building & leveling up!",
        "skills_in_progress": skills
    }`,
  styles: `/* Modern Responsive CSS Design */
.developer-profile {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  background: #020617;
  border: 1px solid rgba(56, 189, 248, 0.2);
  border-radius: 2rem;
}`
};

export const SKILLS_DATA: Skill[] = [
  {
    name: 'HTML',
    category: 'frontend',
    level: 88,
    experienceLabel: 'Proficient',
    icon: 'Code2',
    description: 'Semantic HTML5 structure, clean document outlining, forms, SEO fundamentals, and web accessibility (a11y).',
    tags: ['HTML5', 'Semantic Tags', 'Forms & Inputs', 'Accessibility'],
  },
  {
    name: 'CSS',
    category: 'frontend',
    level: 84,
    experienceLabel: 'Proficient',
    icon: 'Palette',
    description: 'Modern CSS styling, Flexbox, CSS Grid layouts, Tailwind CSS utility architecture, transitions, and animations.',
    tags: ['CSS3', 'Tailwind CSS', 'Flexbox', 'CSS Grid', 'Keyframe Animations'],
  },
  {
    name: 'JavaScript',
    category: 'frontend',
    level: 78,
    experienceLabel: 'Intermediate',
    icon: 'FileCode2',
    description: 'Core ES6+ syntax, DOM manipulation, asynchronous programming with Fetch/Promises, event listeners, and modular JS.',
    tags: ['ES6+', 'DOM Manipulation', 'Async / Fetch', 'JSON Handling', 'Events'],
  },
  {
    name: 'C++',
    category: 'programming',
    level: 75,
    experienceLabel: 'Intermediate',
    icon: 'Cpu',
    description: 'Object-Oriented Programming (OOP), memory management pointers, basic STL containers, searching/sorting algorithms.',
    tags: ['OOP Concepts', 'Classes & Objects', 'Pointers', 'STL Basics', 'Algorithms'],
  },
  {
    name: 'Python',
    category: 'programming',
    level: 70,
    experienceLabel: 'Intermediate',
    icon: 'Terminal',
    description: 'Core Python syntax, list/dictionary comprehensions, file I/O operations, scripting, and introductory data manipulation.',
    tags: ['Python 3', 'Scripting', 'Logic Building', 'File I/O', 'Data Structures'],
  },
  {
    name: 'Git & GitHub',
    category: 'tools',
    level: 80,
    experienceLabel: 'Proficient',
    icon: 'GitBranch',
    description: 'Version control workflows, commit etiquette, branching, merging, remote repository management, and GitHub hosting.',
    tags: ['Version Control', 'Branching', 'GitHub Workflow', 'Markdown'],
  },
  {
    name: 'Responsive Web Design',
    category: 'design',
    level: 85,
    experienceLabel: 'Proficient',
    icon: 'Smartphone',
    description: 'Mobile-first development, dynamic fluid typography, viewport media queries, and multi-device usability testing.',
    tags: ['Mobile First', 'Media Queries', 'Adaptive UI', 'Cross-Browser'],
  },
  {
    name: 'Basic UI/UX',
    category: 'design',
    level: 72,
    experienceLabel: 'Intermediate',
    icon: 'Layout',
    description: 'User-centric visual hierarchy, spacing math, color harmony, wireframing in Figma, and clean typography pairing.',
    tags: ['Figma Basics', 'Wireframing', 'Color Harmony', 'Visual Hierarchy'],
  },
];

export const CURRENTLY_LEARNING = [
  { name: 'React 19 & Components', desc: 'Hooks, state management, and component architecture', tag: 'Web Framework' },
  { name: 'Data Structures in C++', desc: 'Linked lists, stacks, queues, and tree traversal', tag: 'Core CS' },
  { name: 'Backend & REST APIs', desc: 'Understanding client-server requests and Node.js basics', tag: 'Full Stack' },
  { name: 'Database Fundamentals', desc: 'SQL queries, relational schema design, and normalization', tag: 'DBMS' },
];

export const PROJECTS_DATA: Project[] = [
  {
    id: 'portfolio',
    title: 'Personal Developer Portfolio',
    subtitle: 'Modern, Responsive Student Showcase',
    description: 'A clean, high-performance portfolio website built with modern frontend tools to present academic milestones, projects, and programming skills to recruiters and peers.',
    category: 'web',
    categoryLabel: 'Web Application',
    badge: 'Featured',
    imageAccent: 'from-sky-500/20 to-blue-500/20',
    technologies: ['React 19', 'Tailwind CSS', 'TypeScript', 'Lucide Icons', 'Vite'],
    features: [
      'Interactive dark and light mode theme toggle with persistent state',
      'Live code terminal widget with interactive syntax-highlighted tabs',
      'Smooth scroll progress bar, active navigation spy, and animated transitions',
      'Responsive project showcase with live interactive detail modals and contact form validation',
    ],
    githubUrl: 'https://github.com/rahulbera-dev/personal-portfolio',
    demoUrl: '#',
    codeSnippet: {
      language: 'tsx',
      code: `export default function HeroSection() {
  return (
    <div className="flex flex-col items-center">
      <h1>Rahul Bera</h1>
      <p>2nd Year BCA Student | Aspiring Web Developer</p>
    </div>
  );
}`
    }
  },
  {
    id: 'ecommerce-shoes',
    title: 'SoleSprint E-commerce Shoe Store',
    subtitle: 'Interactive Footwear Store & Cart Experience',
    description: 'A modern e-commerce web interface for an athletic and lifestyle footwear brand featuring responsive product filtering, dynamic cart drawer, size selection, and realistic checkout flow.',
    category: 'web',
    categoryLabel: 'Web Development',
    imageAccent: 'from-amber-500/20 to-orange-500/20',
    technologies: ['JavaScript ES6', 'HTML5', 'CSS3', 'LocalStorage', 'Responsive UI'],
    features: [
      'Category and price range product filters with instant search query matching',
      'Interactive shopping cart with item quantity updates and subtotal calculation',
      'Product modal with high-resolution image gallery and shoe size picker',
      'Persisted cart items using browser localStorage for seamless user sessions',
    ],
    githubUrl: 'https://github.com/rahulbera-dev/solesprint-ecommerce-shoes',
    demoUrl: 'https://github.com/rahulbera-dev/solesprint-ecommerce-shoes',
    codeSnippet: {
      language: 'javascript',
      code: `function updateCartTotal(cartItems) {
  return cartItems.reduce((total, item) => {
    return total + (item.price * item.quantity);
  }, 0);
}`
    }
  },
  {
    id: 'student-management',
    title: 'Student Management System',
    subtitle: 'Academic Records & Attendance Tracker',
    description: 'A practical web application created to streamline student record administration, GPA calculations, attendance percentage tracking, and grade reporting for college classrooms.',
    category: 'web',
    categoryLabel: 'Web Application',
    imageAccent: 'from-emerald-500/20 to-teal-500/20',
    technologies: ['JavaScript', 'HTML5', 'CSS3 / Bootstrap', 'CRUD Logic', 'Data Export'],
    features: [
      'Complete CRUD operations: Add, view, edit, and delete student academic records',
      'Automated SGPA/CGPA and attendance percentage calculator with colored threshold warnings',
      'Search and filter students by semester, roll number, or academic standing',
      'Export student summary sheets to printable formats and JSON backups',
    ],
    githubUrl: 'https://github.com/rahulbera-dev/student-management-system',
    demoUrl: 'https://github.com/rahulbera-dev/student-management-system',
    codeSnippet: {
      language: 'javascript',
      code: `class StudentRecord {
  constructor(rollNo, name, semester, marks) {
    this.rollNo = rollNo;
    this.name = name;
    this.semester = semester;
    this.marks = marks;
  }
  calculateGPA() {
    const total = this.marks.reduce((a, b) => a + b, 0);
    return (total / this.marks.length) / 9.5;
  }
}`
    }
  },
  {
    id: 'cpp-projects',
    title: 'C++ Systems & Algorithmic Projects',
    subtitle: 'Banking Console & Data Structures Suite',
    description: 'A curated collection of modular C++ applications built during BCA coursework, featuring an interactive console Banking Management System, File I/O transaction logger, and custom Data Structures.',
    category: 'cpp',
    categoryLabel: 'C++ Programming',
    imageAccent: 'from-indigo-500/20 to-violet-500/20',
    technologies: ['C++', 'OOP Architecture', 'File Handling (fstream)', 'Data Structures', 'STL'],
    features: [
      'Account management with deposit, withdrawal, interest calculation, and PIN validation',
      'Persistent ledger storage using binary file input/output streams (fstream)',
      'Custom implementations of Singly Linked Lists, Stacks, and Queues with memory safety',
      'Binary Search and QuickSort algorithmic benchmarks with user test datasets',
    ],
    githubUrl: 'https://github.com/rahulbera-dev/cpp-programming-projects',
    demoUrl: 'https://github.com/rahulbera-dev/cpp-programming-projects',
    codeSnippet: {
      language: 'cpp',
      code: `void BankAccount::withdraw(double amount) {
    if (amount > 0 && amount <= balance) {
        balance -= amount;
        logTransaction("WITHDRAWAL", amount);
        std::cout << "Transaction successful. New balance: $" << balance << std::endl;
    }
}`
    }
  },
  {
    id: 'excel-data-analysis',
    title: 'Excel Academic & Sales Data Analysis',
    subtitle: 'Interactive Pivot Dashboards & Statistical Modeling',
    description: 'A data-driven analytics project examining academic test metrics and retail sales data using advanced Microsoft Excel formulas, Pivot Tables, conditional formatting, and interactive KPI charts.',
    category: 'data',
    categoryLabel: 'Data Analysis',
    imageAccent: 'from-green-500/20 to-emerald-500/20',
    technologies: ['Microsoft Excel', 'Data Analysis', 'Pivot Tables & Slicers', 'VLOOKUP / XLOOKUP', 'KPI Charts'],
    features: [
      'Dynamic Pivot Tables connected to interactive slicers for instant category filtering',
      'Advanced lookup functions (XLOOKUP, INDEX/MATCH) and multi-conditional logic (COUNTIFS/SUMIFS)',
      'Student academic grade distribution curves and trend variance charts',
      'Summary executive dashboard highlighting top performers, averages, and statistical percentiles',
    ],
    githubUrl: 'https://github.com/rahulbera-dev/excel-data-analysis-project',
    demoUrl: 'https://github.com/rahulbera-dev/excel-data-analysis-project',
    codeSnippet: {
      language: 'excel',
      code: `=LET(
  StudentScores, FILTER(Table1[Marks], Table1[Semester]="Sem 3"),
  AverageScore, AVERAGE(StudentScores),
  Grade, IF(AverageScore >= 80, "A+", IF(AverageScore >= 65, "A", "B"))
)`
    }
  },
];

export const EDUCATION_DATA: EducationItem[] = [
  {
    degree: 'Bachelor of Computer Applications (BCA)',
    institution: 'Swami Vivekananda University (SVU)',
    location: 'Barrackpore, Kolkata, West Bengal',
    period: '2024 – Present (2nd Year)',
    status: 'In Progress (Expected: 2027)',
    description: 'Undergraduate degree focused on computer science fundamentals, software engineering, web application development, database management systems, and programming languages.',
    highlights: [
      'Maintaining strong academic performance with focused study on core computing concepts',
      'Active participant in coding labs, computer programming practicals, and peer technical discussions',
      'Applying classroom theoretical computer science to hands-on web and programming projects',
    ],
    coursework: [
      'Data Structures & Algorithms',
      'Object-Oriented Programming with C++',
      'Web Technologies & Internet Programming',
      'Database Management Systems (DBMS)',
      'Computer Organization & Architecture',
      'Discrete Mathematics & Statistics',
      'Operating Systems Fundamentals',
      'Software Engineering Principles'
    ],
  },
  {
    degree: 'Higher Secondary Education (10+2)',
    institution: 'West Bengal Council of Higher Secondary Education',
    location: 'West Bengal, India',
    period: 'Completed (2022 – 2024)',
    status: 'Completed',
    description: 'Completed higher secondary education with a rigorous focus on Mathematics, Physics, and Computer Science fundamentals.',
    highlights: [
      'Built a strong foundation in logical reasoning, mathematical concepts, and introductory computing',
      'Discovered passion for software development and chose to pursue BCA for undergraduate studies',
    ],
    coursework: ['Computer Science', 'Mathematics', 'Physics', 'English'],
  },
];

export const LEARNING_ACHIEVEMENTS: LearningItem[] = [
  {
    title: '100+ Coding Problems Practiced',
    category: 'Problem Solving',
    description: 'Practicing algorithmic problem solving in C++ and Python, focusing on arrays, strings, basic recursion, and searching/sorting logic.',
    metric: '100+ Problems',
    icon: 'Terminal',
    date: 'Ongoing Routine',
  },
  {
    title: '10+ Web Projects & Practice Exercises',
    category: 'Frontend Development',
    description: 'Designed and coded multiple responsive web templates, calculator utilities, interactive landing pages, and JavaScript mini-applications.',
    metric: '10+ Mini Projects',
    icon: 'Globe',
    date: '2024 - 2026',
  },
  {
    title: 'Active Lab Group Contributor at SVU',
    category: 'Academic & Collaboration',
    description: 'Regularly leading lab assignments, assisting batchmates with C++ debugging and HTML/CSS web layout implementations during practicals.',
    metric: 'Lab Contributor',
    icon: 'GraduationCap',
    date: 'SVU Barrackpore',
  },
  {
    title: 'Continuous Self-Directed Learning',
    category: 'Self-Improvement',
    description: 'Dedicates 15+ hours weekly outside university lectures to study modern developer roadmaps, documentation, and web standards.',
    metric: '15+ hrs/week',
    icon: 'BookOpen',
    date: 'Daily Practice',
  },
  {
    title: 'Clean Git & Version Control Practice',
    category: 'Developer Workflow',
    description: 'Consistently using Git for version control across personal projects, writing clear commit histories, and managing repositories on GitHub.',
    metric: 'Daily Commits',
    icon: 'GitPullRequest',
    date: 'GitHub Practice',
  },
];

const NAV_ITEMS: NavItem[] = [
  { id: 'hero', label: 'Home', href: '#hero' },
  { id: 'about', label: 'About', href: '#about' },
  { id: 'skills', label: 'Skills', href: '#skills' },
  { id: 'projects', label: 'Projects', href: '#projects' },
  { id: 'education', label: 'Education', href: '#education' },
  { id: 'learning', label: 'Learning', href: '#learning' },
  { id: 'contact', label: 'Contact', href: '#contact' },
];

/* ==========================================================================
   3. SUBCOMPONENTS
   ========================================================================== */

/* --- Scroll Progress Bar --- */
function ScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const progress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(Math.min(100, Math.max(0, progress)));
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 h-[3px] bg-transparent z-50 pointer-events-none">
      <div
        id="scroll-progress-bar"
        className="h-full bg-gradient-to-r from-sky-400 via-sky-500 to-blue-600 transition-all duration-75 ease-out shadow-[0_0_10px_rgba(56,189,248,0.7)]"
        style={{ width: `${scrollProgress}%` }}
      />
    </div>
  );
}

/* --- Back To Top Button --- */
function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsVisible(window.scrollY > 350);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  if (!isVisible) return null;

  return (
    <button
      id="back-to-top-button"
      type="button"
      onClick={scrollToTop}
      aria-label="Scroll to top of page"
      className="fixed bottom-6 right-6 z-40 p-3.5 rounded-full bg-sky-500 text-white shadow-lg shadow-sky-500/30 hover:bg-sky-600 hover:scale-110 transition-all duration-200 cursor-pointer animate-fadeIn border border-sky-400/40"
    >
      <ArrowUp className="w-5 h-5 font-bold" />
    </button>
  );
}

/* --- Navbar Component --- */
function Navbar({
  darkMode,
  setDarkMode,
  onOpenResume,
}: {
  darkMode: boolean;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
  onOpenResume: () => void;
}) {
  const [activeSection, setActiveSection] = useState('hero');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
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
    if (target) target.scrollIntoView({ behavior: 'smooth' });
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
          <a
            id="nav-brand-logo"
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#hero');
            }}
            className="flex items-center gap-3 group focus:outline-none rounded-full"
          >
            <div className="text-xl font-extrabold bg-gradient-to-r from-sky-400 to-blue-600 bg-clip-text text-transparent tracking-tight group-hover:scale-105 transition-transform duration-200">
              RB.
            </div>
            <div className="hidden sm:flex flex-col">
              <span className="font-bold text-sm tracking-tight text-slate-100 group-hover:text-sky-400 transition-colors flex items-center gap-1.5">
                Rahul Bera
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              </span>
              <span className="text-[10px] text-slate-400 font-mono">BCA 2nd Year • SVU</span>
            </div>
          </a>

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

          <div className="hidden sm:flex items-center gap-2">
            <button
              id="theme-toggle-button"
              type="button"
              onClick={() => setDarkMode((prev) => !prev)}
              aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
              className={`p-2 rounded-full border transition-all duration-200 cursor-pointer ${
                darkMode
                  ? 'border-slate-800 bg-slate-800/80 text-slate-300 hover:text-sky-400 hover:bg-slate-800'
                  : 'border-slate-200 bg-slate-100 text-slate-700 hover:text-sky-600 hover:bg-slate-200'
              }`}
            >
              {darkMode ? <Sun className="w-3.5 h-3.5 text-amber-400" /> : <Moon className="w-3.5 h-3.5 text-slate-700" />}
            </button>

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

          <div className="flex md:hidden items-center gap-2">
            <button
              id="mobile-theme-toggle-button"
              type="button"
              onClick={() => setDarkMode((prev) => !prev)}
              aria-label="Toggle Theme"
              className="p-1.5 rounded-full border border-slate-800 bg-slate-800 text-slate-300"
            >
              {darkMode ? <Sun className="w-3.5 h-3.5 text-amber-400" /> : <Moon className="w-3.5 h-3.5" />}
            </button>
            <button
              id="mobile-menu-toggle-button"
              type="button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              aria-label="Menu"
              className="p-1.5 rounded-full border border-slate-800 bg-slate-800 text-slate-300"
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </nav>
      </div>

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
              {NAV_ITEMS.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.href)}
                  className={`w-full text-left px-4 py-2.5 rounded-xl text-sm font-medium transition-colors flex items-center justify-between ${
                    activeSection === item.id
                      ? 'bg-sky-500/10 text-sky-400 font-semibold border border-sky-500/20'
                      : 'hover:bg-slate-800 text-slate-300'
                  }`}
                >
                  <span>{item.label}</span>
                  {activeSection === item.id && <div className="w-1.5 h-1.5 rounded-full bg-sky-400" />}
                </button>
              ))}
            </div>
            <div className="pt-3 border-t border-slate-800">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenResume();
                }}
                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-full text-xs font-bold bg-sky-500 hover:bg-sky-600 text-white shadow-md cursor-pointer"
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

/* --- Hero Component --- */
function Hero({ darkMode, onOpenResume }: { darkMode: boolean; onOpenResume: () => void }) {
  const [activeTab, setActiveTab] = useState<'react' | 'cpp' | 'python' | 'styles'>('react');
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
        setConsoleOutput('✓ Process exited code 0: DSA & OOP concepts initialized successfully.');
      } else if (activeTab === 'python') {
        setConsoleOutput('✓ Output: {"developer": "Rahul Bera", "momentum": "Always building & leveling up!"}');
      } else {
        setConsoleOutput('✓ CSS Styles applied: Responsive modern layout with sky gradient accents.');
      }
    }, 500);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const tabLabels = {
    react: { label: 'Developer.jsx', icon: '⚛️', lang: 'jsx' },
    cpp: { label: 'student.cpp', icon: '⚙️', lang: 'cpp' },
    python: { label: 'growth.py', icon: '🐍', lang: 'py' },
    styles: { label: 'theme.css', icon: '🎨', lang: 'css' },
  };

  return (
    <section id="hero" className="relative min-h-[92vh] pt-28 sm:pt-32 pb-16 lg:pb-24 flex items-center overflow-hidden">
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] sm:w-[700px] h-[350px] bg-sky-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Intro */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div
              className={`p-6 sm:p-10 rounded-[32px] border relative overflow-hidden transition-all duration-300 flex-1 flex flex-col justify-between ${
                darkMode ? 'bg-slate-900/40 border-slate-800 shadow-2xl text-slate-200' : 'bg-white/90 border-slate-200 shadow-xl text-slate-800'
              }`}
            >
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <p className="text-sky-400 font-mono text-xs sm:text-sm font-semibold tracking-wider">
                    // Introduction
                  </p>
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-[11px] font-mono text-slate-400 hidden sm:inline">SVU Barrackpore</span>
                </div>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-3 tracking-tight text-white">
                  Rahul <br className="hidden sm:inline" />
                  <span className="bg-gradient-to-r from-sky-400 via-sky-300 to-blue-500 bg-clip-text text-transparent">
                    Bera
                  </span>
                </h1>

                <p className="text-slate-300 text-base sm:text-lg font-medium mb-4">
                  2nd Year BCA Student & Aspiring Web Developer
                </p>

                <p className="text-slate-400 text-sm sm:text-base leading-relaxed mb-6 max-w-xl">
                  "{PERSONAL_INFO.tagline}"
                </p>

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

              <div className="space-y-4 pt-2">
                <div className="flex flex-wrap items-center gap-3">
                  <a
                    id="hero-view-projects-btn"
                    href="#projects"
                    className="inline-flex items-center justify-center gap-2 bg-sky-500 hover:bg-sky-600 text-white px-6 py-3 rounded-xl text-sm font-bold shadow-lg shadow-sky-500/20 transition-all cursor-pointer"
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

                <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400 pt-2 border-t border-slate-800/80">
                  <span className="font-mono text-slate-500 uppercase tracking-wider">Connect:</span>
                  <a href={PERSONAL_INFO.github} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 hover:text-sky-400 transition-colors">
                    <Github className="w-3.5 h-3.5" />
                    <span>GitHub</span>
                  </a>
                  <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 hover:text-sky-400 transition-colors">
                    <Linkedin className="w-3.5 h-3.5" />
                    <span>LinkedIn</span>
                  </a>
                  <button type="button" onClick={handleCopyEmail} className="flex items-center gap-1.5 hover:text-sky-400 transition-colors cursor-pointer">
                    {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    <span className="font-mono">{copiedEmail ? 'Copied!' : PERSONAL_INFO.email}</span>
                  </button>
                </div>
              </div>
            </div>

            <div className={`p-6 rounded-[32px] border ${darkMode ? 'bg-slate-900/40 border-slate-800' : 'bg-white/80 border-slate-200'}`}>
              <h3 className="text-xs uppercase tracking-widest text-slate-500 font-bold mb-3 flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-sky-400" />
                <span>Currently Learning & Mastering</span>
              </h3>
              <div className="flex flex-wrap gap-2">
                {CURRENTLY_LEARNING.map((item, idx) => (
                  <span key={idx} className="bg-slate-800/90 px-3 py-1 rounded-full text-xs text-sky-300 border border-sky-500/20 font-medium">
                    {item.name}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Code Terminal */}
          <div className="lg:col-span-5 flex flex-col">
            <div id="developer-terminal-card" className="rounded-[32px] border border-slate-800 bg-slate-900/60 text-slate-200 shadow-2xl overflow-hidden flex flex-col flex-1">
              <div className="flex items-center justify-between px-5 py-4 bg-slate-950/80 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/90" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/90" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/90" />
                  <span className="ml-2 text-xs font-mono text-slate-400 hidden sm:inline">rahul-bera@svu-workstation:~</span>
                </div>
                <button
                  type="button"
                  onClick={handleRunCode}
                  disabled={isRunning}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-sky-500 hover:bg-sky-600 text-white shadow-md transition-all cursor-pointer disabled:opacity-50"
                >
                  <Play className={`w-3 h-3 ${isRunning ? 'animate-spin' : ''}`} />
                  <span>{isRunning ? 'Running...' : 'Run Code'}</span>
                </button>
              </div>

              <div className="flex items-center gap-1 px-4 py-2 bg-slate-950/40 border-b border-slate-800/80 overflow-x-auto text-xs font-mono">
                {(['react', 'cpp', 'python', 'styles'] as const).map((tab) => (
                  <button
                    key={tab}
                    onClick={() => {
                      setActiveTab(tab);
                      setConsoleOutput(null);
                    }}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-colors cursor-pointer whitespace-nowrap ${
                      activeTab === tab
                        ? 'bg-slate-800 text-sky-400 font-semibold border border-slate-700'
                        : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    <span>{tabLabels[tab].icon}</span>
                    <span>{tabLabels[tab].label}</span>
                  </button>
                ))}
              </div>

              <div className="p-5 text-xs sm:text-sm font-mono overflow-x-auto flex-1 max-h-[340px]">
                <pre className="text-slate-300 leading-relaxed font-mono">
                  <code>{CODE_SNIPPETS[activeTab]}</code>
                </pre>
              </div>

              {consoleOutput && (
                <div className="p-4 bg-slate-950/95 border-t border-sky-500/30 text-xs font-mono text-sky-300 flex items-start gap-2.5">
                  <Terminal className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                  <div className="flex-1 break-words">
                    <span className="text-slate-500 font-bold block mb-0.5">[OUTPUT CONSOLE]</span>
                    <span>{consoleOutput}</span>
                  </div>
                </div>
              )}

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

/* --- About Component --- */
function About({ darkMode }: { darkMode: boolean }) {
  const highlights = [
    {
      icon: <GraduationCap className="w-5 h-5 text-sky-400" />,
      title: '2nd Year BCA Student',
      desc: 'Pursuing Bachelor of Computer Applications at Swami Vivekananda University (SVU), Barrackpore.',
    },
    {
      icon: <Code2 className="w-5 h-5 text-sky-400" />,
      title: 'Web & Frontend Development',
      desc: 'Passionate about building responsive, fast, and visually clean web interfaces with HTML, CSS, JavaScript, and modern tools.',
    },
    {
      icon: <Cpu className="w-5 h-5 text-sky-400" />,
      title: 'Programming & Logic Building',
      desc: 'Strengthening foundations in Object-Oriented Programming (C++), Python scripting, and data structure concepts.',
    },
    {
      icon: <BrainCircuit className="w-5 h-5 text-sky-400" />,
      title: 'Eager & Continuous Learner',
      desc: 'Self-motivated student dedicating extra hours daily to explore developer documentation, build mini-projects, and practice coding.',
    },
  ];

  return (
    <section id="about" className="py-20 sm:py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-3xl mb-12">
          <p className="text-sky-400 font-mono text-xs sm:text-sm font-semibold tracking-wider mb-2">
            // Academic & Developer Story
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold flex items-center gap-3 text-white mb-3">
            <span className="w-8 h-[2px] bg-sky-500 shrink-0" />
            <span>About Rahul Bera</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            A genuine student journey focused on practical skill acquisition, clean coding, and meaningful software projects at SVU Barrackpore.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
          
          <div className="lg:col-span-7 space-y-6">
            <div className={`p-6 sm:p-8 rounded-[32px] border ${darkMode ? 'bg-slate-900/40 border-slate-800 text-slate-200' : 'bg-white border-slate-200 text-slate-800'}`}>
              <h3 className="text-xl font-bold mb-4 flex items-center justify-between">
                <span>Student Developer Bio</span>
                <span className="text-xs font-mono font-medium text-sky-400 px-3 py-1 rounded-full bg-slate-800 border border-sky-500/20">
                  SVU Barrackpore
                </span>
              </h3>

              <div className="space-y-4 text-slate-300 leading-relaxed text-sm sm:text-base">
                <p>
                  Hello! I'm <strong className="text-white font-semibold">Rahul Bera</strong>, a 2nd-year Bachelor of Computer Applications (BCA) undergraduate at <strong className="text-sky-400">Swami Vivekananda University (SVU), Barrackpore</strong>.
                </p>
                <p>
                  Over the past two years of my BCA curriculum and self-study, I have developed a strong foundation in <span className="text-white font-medium">HTML5, CSS3, JavaScript, C++, and Python</span>.
                </p>
                <p>
                  I enjoy solving coding problems, architecting responsive layouts, and turning concepts into functional web applications. Whether it's crafting an e-commerce interface, building a student management system, or writing modular C++ algorithms, I care deeply about clean code and good user experience.
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-800 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-xl bg-slate-800 text-sky-400 flex items-center justify-center border border-slate-700/60">
                    <GraduationCap className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-slate-500 block text-xs">Degree</span>
                    <span className="font-semibold text-slate-200">BCA (2nd Year, 2024-2027)</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-xl bg-slate-800 text-sky-400 flex items-center justify-center border border-slate-700/60">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-slate-500 block text-xs">University & City</span>
                    <span className="font-semibold text-slate-200">SVU Barrackpore, Kolkata</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-xl bg-slate-800 text-sky-400 flex items-center justify-center border border-slate-700/60">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-slate-500 block text-xs">Email</span>
                    <span className="font-semibold text-slate-200 font-mono">{PERSONAL_INFO.email}</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-xl bg-slate-800 text-emerald-400 flex items-center justify-center border border-slate-700/60">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-slate-500 block text-xs">Status</span>
                    <span className="font-semibold text-emerald-400">Available for Internships</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {highlights.map((item, idx) => (
                <div key={idx} className={`p-5 rounded-[24px] border ${darkMode ? 'bg-slate-900/40 border-slate-800' : 'bg-white border-slate-200'}`}>
                  <div className="mb-3">{item.icon}</div>
                  <h4 className="font-bold text-sm sm:text-base text-slate-100 mb-1">{item.title}</h4>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 space-y-6">
            <div className={`p-6 sm:p-7 rounded-[32px] border ${darkMode ? 'bg-slate-900/40 border-slate-800' : 'bg-white border-slate-200'}`}>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold flex items-center gap-2 text-white">
                  <BookOpen className="w-5 h-5 text-sky-400" />
                  <span>Currently Learning</span>
                </h3>
                <span className="text-xs font-mono px-3 py-1 rounded-full bg-slate-800 text-sky-300 border border-sky-500/20">
                  Active Focus
                </span>
              </div>

              <div className="space-y-3">
                {CURRENTLY_LEARNING.map((item, idx) => (
                  <div key={idx} className="p-4 rounded-2xl border bg-slate-950/60 border-slate-800 text-slate-200">
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-bold text-sm text-slate-100">{item.name}</span>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-slate-800 text-sky-300 border border-sky-500/20">{item.tag}</span>
                    </div>
                    <p className="text-xs text-slate-400 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className={`p-6 sm:p-7 rounded-[32px] border ${darkMode ? 'bg-slate-900/40 border-slate-800' : 'bg-slate-50 border-slate-200'}`}>
              <div className="flex items-center gap-2 mb-4 text-sky-400 font-bold text-sm">
                <Compass className="w-4 h-4" />
                <span>My Approach & Work Ethic</span>
              </div>
              <ul className="space-y-3 text-xs sm:text-sm text-slate-300">
                <li className="flex items-start gap-2.5">
                  <span className="text-sky-400 font-bold font-mono">01.</span>
                  <span><strong className="text-white">Fundamentals First:</strong> Strong grasp of core data structures, syntax, and standard conventions.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-sky-400 font-bold font-mono">02.</span>
                  <span><strong className="text-white">Clean & Maintainable:</strong> Writing readable code with semantic tags and modular components.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-sky-400 font-bold font-mono">03.</span>
                  <span><strong className="text-white">Continuous Practice:</strong> Solving algorithmic challenges and creating real portfolio projects.</span>
                </li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

/* --- Skills Component --- */
function Skills({ darkMode }: { darkMode: boolean }) {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'frontend' | 'programming' | 'tools' | 'design'>('all');

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code2': return <Code2 className="w-6 h-6 text-orange-400" />;
      case 'Palette': return <Palette className="w-6 h-6 text-sky-400" />;
      case 'FileCode2': return <FileCode2 className="w-6 h-6 text-amber-400" />;
      case 'Cpu': return <Cpu className="w-6 h-6 text-blue-400" />;
      case 'Terminal': return <Terminal className="w-6 h-6 text-emerald-400" />;
      case 'GitBranch': return <GitBranch className="w-6 h-6 text-rose-400" />;
      case 'Smartphone': return <Smartphone className="w-6 h-6 text-teal-400" />;
      case 'Layout': return <Layout className="w-6 h-6 text-purple-400" />;
      default: return <Code2 className="w-6 h-6 text-sky-400" />;
    }
  };

  const filteredSkills = SKILLS_DATA.filter((s) => selectedCategory === 'all' || s.category === selectedCategory);

  const categories = [
    { id: 'all', label: 'All Skills' },
    { id: 'frontend', label: 'Web & Frontend' },
    { id: 'programming', label: 'Programming & Logic' },
    { id: 'tools', label: 'Version Control & Tools' },
    { id: 'design', label: 'UI/UX & Responsive' },
  ] as const;

  return (
    <section id="skills" className="py-20 sm:py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-3xl mb-12">
          <p className="text-sky-400 font-mono text-xs sm:text-sm font-semibold tracking-wider mb-2">
            // Technical Stack & Tools
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold flex items-center gap-3 text-white mb-3">
            <span className="w-8 h-[2px] bg-sky-500 shrink-0" />
            <span>Skills & Core Proficiencies</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Honest and realistic skill assessments developed through 2nd-year BCA coursework at SVU, self-driven programming practice, and hands-on project creation.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                selectedCategory === cat.id
                  ? 'bg-sky-500 text-white shadow-md shadow-sky-500/20'
                  : 'bg-slate-900/60 border border-slate-800 text-slate-300 hover:bg-slate-800 hover:text-white'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredSkills.map((skill) => (
            <div
              key={skill.name}
              className={`p-6 rounded-[28px] border transition-all duration-300 group hover:-translate-y-1 relative overflow-hidden flex flex-col justify-between ${
                darkMode ? 'bg-slate-900/40 border-slate-800 hover:border-sky-500/40 hover:shadow-lg' : 'bg-white border-slate-200 hover:border-sky-400 hover:shadow-md'
              }`}
            >
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-sky-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity" />

              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-slate-800 border border-slate-700/60 flex items-center justify-center p-2.5">
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

                <h3 className="text-lg font-bold text-slate-100 mb-2 group-hover:text-sky-400 transition-colors">
                  {skill.name}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed mb-4 min-h-[48px]">
                  {skill.description}
                </p>
              </div>

              <div className="space-y-3 pt-3 border-t border-slate-800">
                <div className="flex justify-between items-center text-xs font-mono">
                  <span className="text-slate-400">Comfort Level</span>
                  <span className="font-bold text-sky-400">{skill.level}%</span>
                </div>
                
                <div className="w-full h-2 rounded-full bg-slate-800 overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-sky-400 to-blue-500 rounded-full transition-all duration-700 ease-out"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>

                <div className="flex flex-wrap gap-1.5 pt-1">
                  {skill.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-slate-800/90 text-sky-300 border border-sky-500/20">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className={`mt-12 p-6 sm:p-8 rounded-[32px] border flex flex-col md:flex-row items-center justify-between gap-6 ${darkMode ? 'bg-slate-900/40 border-slate-800 text-slate-200' : 'bg-slate-50 border-slate-200 text-slate-800'}`}>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-slate-800 text-sky-400 border border-slate-700/60 flex items-center justify-center shrink-0">
              <Flame className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-base text-slate-100">Practicing Modern Web Development & C++ Daily</h4>
              <p className="text-xs sm:text-sm text-slate-400">Balancing BCA university theory with hands-on coding practice in data structures, algorithms, and responsive UI engineering.</p>
            </div>
          </div>
          <a href="#projects" className="px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold bg-sky-500 hover:bg-sky-600 text-white shadow-md transition-all cursor-pointer shrink-0">
            See Skills in Projects →
          </a>
        </div>

      </div>
    </section>
  );
}

/* --- Projects Component --- */
function Projects({
  darkMode,
  onOpenProject,
}: {
  darkMode: boolean;
  onOpenProject: (p: Project) => void;
}) {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'web' | 'cpp' | 'data'>('all');

  const filteredProjects = PROJECTS_DATA.filter((p) => selectedCategory === 'all' || p.category === selectedCategory);

  const categories = [
    { id: 'all', label: 'All Projects (5)' },
    { id: 'web', label: 'Web Applications (3)' },
    { id: 'cpp', label: 'C++ & Algorithms (1)' },
    { id: 'data', label: 'Data & Analytics (1)' },
  ] as const;

  return (
    <section id="projects" className="py-20 sm:py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-3xl mb-12">
          <p className="text-sky-400 font-mono text-xs sm:text-sm font-semibold tracking-wider mb-2">
            // Featured Projects & Code
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold flex items-center gap-3 text-white mb-3">
            <span className="w-8 h-[2px] bg-sky-500 shrink-0" />
            <span>Projects & Software Builds</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Practical software projects demonstrating responsive web engineering, OOP with C++, data analysis, and student-led development at SVU Barrackpore.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                selectedCategory === cat.id
                  ? 'bg-sky-500 text-white shadow-md shadow-sky-500/20'
                  : 'bg-slate-900/60 border border-slate-800 text-slate-300 hover:bg-slate-800 hover:text-white'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className={`rounded-[28px] border transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1.5 overflow-hidden ${
                darkMode ? 'bg-slate-900/40 border-slate-800 hover:border-sky-500/40 hover:shadow-xl' : 'bg-white border-slate-200 shadow-sm hover:border-sky-400'
              }`}
            >
              <div className="p-6 bg-slate-950/80 border-b border-slate-800 relative">
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

                <h3 className="text-xl font-bold tracking-tight text-slate-100 group-hover:text-sky-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-xs text-slate-400 mt-1 font-medium">{project.subtitle}</p>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between space-y-5">
                <div>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed line-clamp-3">
                    {project.description}
                  </p>

                  <div className="mt-4 space-y-1.5">
                    {project.features.slice(0, 2).map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2 text-xs text-slate-400">
                        <CheckCircle2 className="w-3.5 h-3.5 text-sky-400 shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-800">
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.technologies.slice(0, 4).map((tech, idx) => (
                      <span key={idx} className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-slate-800/90 text-sky-300 border border-sky-500/20">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between gap-2 pt-2">
                    <button
                      type="button"
                      onClick={() => onOpenProject(project)}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-sky-400 hover:text-sky-300 transition-colors p-1 cursor-pointer"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>Details & Code</span>
                    </button>

                    <div className="flex items-center gap-2">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="p-2 rounded-xl border border-slate-700 bg-slate-800 text-slate-300 hover:text-white transition-colors"
                        title="GitHub Source Code"
                      >
                        <Github className="w-3.5 h-3.5" />
                      </a>

                      {project.demoUrl && (
                        <button
                          type="button"
                          onClick={() => onOpenProject(project)}
                          className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-bold bg-sky-500 hover:bg-sky-600 text-white shadow-sm transition-all cursor-pointer"
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

        <div className={`mt-14 p-6 sm:p-8 rounded-[32px] border flex flex-col sm:flex-row items-center justify-between gap-6 ${darkMode ? 'bg-slate-900/40 border-slate-800' : 'bg-white border-slate-200'}`}>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-slate-800 flex items-center justify-center text-sky-400 border border-slate-700/60 shrink-0">
              <FolderGit2 className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-base sm:text-lg text-slate-100">Explore More Practice Repositories on GitHub</h4>
              <p className="text-xs sm:text-sm text-slate-400">Check out algorithm practice repositories, mini frontend templates, and college lab assignments.</p>
            </div>
          </div>

          <a
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
    </section>
  );
}

/* --- Education Component --- */
function Education({ darkMode }: { darkMode: boolean }) {
  return (
    <section id="education" className="py-20 sm:py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-3xl mb-12">
          <p className="text-sky-400 font-mono text-xs sm:text-sm font-semibold tracking-wider mb-2">
            // Academic Pathway
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold flex items-center gap-3 text-white mb-3">
            <span className="w-8 h-[2px] bg-sky-500 shrink-0" />
            <span>Education & Academic Foundations</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Undergraduate degree coursework and foundational computing training at Swami Vivekananda University (SVU), Barrackpore.
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <div className="space-y-8">
            {EDUCATION_DATA.map((item, idx) => (
              <div key={idx} className={`p-6 sm:p-8 rounded-[28px] border ${darkMode ? 'bg-slate-900/40 border-slate-800' : 'bg-white border-slate-200'}`}>
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <span className="text-xs font-mono font-semibold px-3 py-1 rounded-full bg-slate-800 text-sky-300 border border-sky-500/20">
                    {item.status}
                  </span>
                  <div className="flex items-center gap-1.5 text-xs text-slate-400 font-mono">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{item.period}</span>
                  </div>
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-slate-100 mb-1">{item.degree}</h3>
                <div className="flex items-center gap-1.5 text-sm font-semibold text-sky-400 mb-3">
                  <MapPin className="w-4 h-4" />
                  <span>{item.institution}, {item.location}</span>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">{item.description}</p>

                <div className="space-y-2 mb-5">
                  {item.highlights.map((h, hIdx) => (
                    <div key={hIdx} className="flex items-start gap-2 text-xs text-slate-400">
                      <CheckCircle2 className="w-3.5 h-3.5 text-sky-400 shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>

                <div>
                  <span className="text-[11px] uppercase tracking-wider font-semibold text-slate-500 block mb-2">Key Coursework</span>
                  <div className="flex flex-wrap gap-1.5">
                    {item.coursework.map((course, cIdx) => (
                      <span key={cIdx} className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-slate-800/90 text-sky-300 border border-sky-500/20">
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

/* --- Achievements Component --- */
function Achievements({ darkMode }: { darkMode: boolean }) {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Terminal': return <Terminal className="w-5 h-5 text-sky-400" />;
      case 'Globe': return <Code2 className="w-5 h-5 text-teal-400" />;
      case 'GraduationCap': return <GraduationCap className="w-5 h-5 text-sky-400" />;
      case 'BookOpen': return <BookOpen className="w-5 h-5 text-emerald-400" />;
      default: return <Code2 className="w-5 h-5 text-sky-400" />;
    }
  };

  return (
    <section id="learning" className="py-20 sm:py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-3xl mb-12">
          <p className="text-sky-400 font-mono text-xs sm:text-sm font-semibold tracking-wider mb-2">
            // Continuous Progress & Milestones
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold flex items-center gap-3 text-white mb-3">
            <span className="w-8 h-[2px] bg-sky-500 shrink-0" />
            <span>Learning Milestones & Coding Practice</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Real, verifiable development habits and academic milestones achieved through daily discipline and curiosity at SVU Barrackpore.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {LEARNING_ACHIEVEMENTS.map((item, idx) => (
            <div
              key={idx}
              className={`p-6 rounded-[28px] border transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 ${
                darkMode ? 'bg-slate-900/40 border-slate-800 hover:border-sky-500/40 hover:shadow-lg' : 'bg-white border-slate-200'
              }`}
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="w-10 h-10 rounded-2xl bg-slate-800 border border-slate-700/60 flex items-center justify-center">
                    {getIcon(item.icon)}
                  </div>
                  <span className="text-xs font-mono font-semibold px-3 py-1 rounded-full bg-slate-800 text-sky-300 border border-sky-500/20">
                    {item.metric}
                  </span>
                </div>

                <div className="text-xs font-mono text-slate-500 uppercase tracking-wider mb-1">{item.category}</div>
                <h3 className="text-base sm:text-lg font-bold text-slate-100 mb-2 group-hover:text-sky-400 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">{item.description}</p>
              </div>

              <div className="mt-5 pt-3 border-t border-slate-800 flex items-center justify-between text-xs text-slate-500 font-mono">
                <span className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-sky-400" />
                  <span>{item.date}</span>
                </span>
                <span className="text-sky-400">Verified Routine</span>
              </div>
            </div>
          ))}

          <div className={`p-6 rounded-[28px] border flex flex-col justify-between ${darkMode ? 'bg-slate-900/40 border-slate-800' : 'bg-slate-50 border-slate-200'}`}>
            <div>
              <div className="w-10 h-10 rounded-2xl bg-slate-800 border border-slate-700/60 text-sky-400 flex items-center justify-center mb-4">
                <Flame className="w-5 h-5" />
              </div>
              <div className="text-xs font-mono text-sky-400 uppercase tracking-wider mb-1">Student Routine</div>
              <h3 className="text-base sm:text-lg font-bold text-slate-100 mb-2">Daily Coding Commitment</h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
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

/* --- Contact Component --- */
function Contact({ darkMode }: { darkMode: boolean }) {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<Partial<ContactFormData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: Partial<ContactFormData> = {};
    if (!formData.name.trim()) newErrors.name = 'Please enter your name.';
    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email.';
    }
    if (!formData.subject.trim()) newErrors.subject = 'Please enter a subject.';
    if (!formData.message.trim() || formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters.';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;
    setIsSubmitting(true);
    setIsSuccess(false);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setIsSuccess(false), 5000);
    }, 600);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section id="contact" className="py-20 sm:py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-3xl mb-12">
          <p className="text-sky-400 font-mono text-xs sm:text-sm font-semibold tracking-wider mb-2">
            // Communication & Connect
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold flex items-center gap-3 text-white mb-3">
            <span className="w-8 h-[2px] bg-sky-500 shrink-0" />
            <span>Let's Connect & Build Together</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Have an internship opening, freelance web inquiry, college collaboration, or just want to talk software engineering? Drop a direct message!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          <div className="lg:col-span-5 space-y-6">
            <div className={`p-6 sm:p-8 rounded-[32px] border ${darkMode ? 'bg-slate-900/40 border-slate-800' : 'bg-white border-slate-200'}`}>
              <h3 className="text-lg sm:text-xl font-bold mb-2 text-slate-100">Contact Details</h3>
              <p className="text-xs sm:text-sm text-slate-400 mb-6 leading-relaxed">
                Feel free to email me directly or connect across developer platforms.
              </p>

              <div className="space-y-4">
                <div className="p-4 rounded-2xl border flex items-center justify-between gap-3 bg-slate-950/60 border-slate-800">
                  <div className="flex items-center gap-3 overflow-hidden">
                    <div className="w-10 h-10 rounded-2xl bg-slate-800 border border-slate-700/60 text-sky-400 flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div className="overflow-hidden">
                      <span className="text-[11px] text-slate-400 block font-mono">Email Address</span>
                      <a href={`mailto:${PERSONAL_INFO.email}`} className="text-xs sm:text-sm font-semibold text-slate-200 hover:text-sky-400 truncate block">
                        {PERSONAL_INFO.email}
                      </a>
                    </div>
                  </div>
                  <button type="button" onClick={handleCopyEmail} className="p-2 rounded-xl border border-slate-700 bg-slate-800 text-slate-300 hover:text-white cursor-pointer shrink-0">
                    {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                <div className="p-4 rounded-2xl border flex items-center gap-3 bg-slate-950/60 border-slate-800">
                  <div className="w-10 h-10 rounded-2xl bg-slate-800 border border-slate-700/60 text-sky-400 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] text-slate-400 block font-mono">Location</span>
                    <span className="text-xs sm:text-sm font-semibold text-slate-200">{PERSONAL_INFO.location}</span>
                  </div>
                </div>

                <div className="p-4 rounded-2xl border flex items-center gap-3 bg-slate-950/60 border-slate-800">
                  <div className="w-10 h-10 rounded-2xl bg-slate-800 border border-slate-700/60 text-emerald-400 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] text-slate-400 block font-mono">Current Status</span>
                    <span className="text-xs sm:text-sm font-semibold text-emerald-400">{PERSONAL_INFO.availability}</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-800">
                <span className="text-xs uppercase tracking-wider font-semibold text-slate-400 block mb-3 font-mono">Developer Profiles</span>
                <div className="grid grid-cols-3 gap-2.5">
                  <a href={PERSONAL_INFO.github} target="_blank" rel="noreferrer" className="p-3 rounded-2xl border border-slate-800 bg-slate-950/60 hover:text-sky-400 flex flex-col items-center justify-center gap-1.5 transition-all text-xs text-slate-300">
                    <Github className="w-5 h-5 text-slate-400" />
                    <span className="font-mono text-[11px]">GitHub</span>
                  </a>
                  <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noreferrer" className="p-3 rounded-2xl border border-slate-800 bg-slate-950/60 hover:text-sky-400 flex flex-col items-center justify-center gap-1.5 transition-all text-xs text-slate-300">
                    <Linkedin className="w-5 h-5 text-slate-400" />
                    <span className="font-mono text-[11px]">LinkedIn</span>
                  </a>
                  <a href={PERSONAL_INFO.instagram} target="_blank" rel="noreferrer" className="p-3 rounded-2xl border border-slate-800 bg-slate-950/60 hover:text-sky-400 flex flex-col items-center justify-center gap-1.5 transition-all text-xs text-slate-300">
                    <Instagram className="w-5 h-5 text-slate-400" />
                    <span className="font-mono text-[11px]">Instagram</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className={`p-6 sm:p-8 rounded-[32px] border ${darkMode ? 'bg-slate-900/40 border-slate-800' : 'bg-white border-slate-200'}`}>
              <h3 className="text-xl font-bold mb-2 text-slate-100">Send a Direct Message</h3>
              <p className="text-xs sm:text-sm text-slate-400 mb-6">Fill out the form below and I'll get back to you promptly.</p>

              {isSuccess && (
                <div className="mb-6 p-4 rounded-2xl bg-emerald-500/15 border border-emerald-500/40 text-emerald-300 flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div className="text-xs sm:text-sm">
                    <strong className="font-bold block">Thank you! Your message has been received.</strong>
                    <span>I will reply to your email address shortly.</span>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} noValidate className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="block text-xs font-semibold text-slate-300">Your Name *</label>
                    <input
                      type="text"
                      placeholder="e.g. Alex Johnson"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-2xl border border-slate-800 bg-slate-950/80 text-slate-100 placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500/40"
                    />
                    {errors.name && <span className="text-[11px] text-rose-400 flex items-center gap-1"><AlertCircle className="w-3 h-3" />{errors.name}</span>}
                  </div>

                  <div className="space-y-1.5">
                    <label className="block text-xs font-semibold text-slate-300">Your Email *</label>
                    <input
                      type="email"
                      placeholder="e.g. alex@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-2xl border border-slate-800 bg-slate-950/80 text-slate-100 placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500/40"
                    />
                    {errors.email && <span className="text-[11px] text-rose-400 flex items-center gap-1"><AlertCircle className="w-3 h-3" />{errors.email}</span>}
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="block text-xs font-semibold text-slate-300">Subject / Topic *</label>
                  <input
                    type="text"
                    placeholder="e.g. Internship Inquiry / Web Development Project"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-3 rounded-2xl border border-slate-800 bg-slate-950/80 text-slate-100 placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500/40"
                  />
                  {errors.subject && <span className="text-[11px] text-rose-400 flex items-center gap-1"><AlertCircle className="w-3 h-3" />{errors.subject}</span>}
                </div>

                <div className="space-y-1.5">
                  <label className="block text-xs font-semibold text-slate-300">Message *</label>
                  <textarea
                    rows={4}
                    placeholder="Hi Rahul, I came across your portfolio..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-2xl border border-slate-800 bg-slate-950/80 text-slate-100 placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500/40 resize-y"
                  />
                  {errors.message && <span className="text-[11px] text-rose-400 flex items-center gap-1"><AlertCircle className="w-3 h-3" />{errors.message}</span>}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full font-bold text-sm bg-sky-500 hover:bg-sky-600 text-white shadow-lg shadow-sky-500/20 cursor-pointer disabled:opacity-50"
                >
                  <Send className={`w-4 h-4 ${isSubmitting ? 'animate-spin' : ''}`} />
                  <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

/* --- Footer Component --- */
function Footer({ onOpenResume }: { onOpenResume: () => void }) {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer id="main-footer" className="border-t border-slate-800/80 bg-slate-950 text-slate-400 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center pb-8 border-b border-slate-900">
          <div className="md:col-span-5 space-y-2">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-sky-500 flex items-center justify-center font-mono font-bold text-white text-xs shadow-sm shadow-sky-500/30">
                RB
              </div>
              <span className="font-bold text-lg text-white tracking-tight">Rahul Bera</span>
            </div>
            <p className="text-xs text-slate-400 max-w-sm">
              2nd Year BCA Student at Swami Vivekananda University (SVU), Barrackpore. Aspiring Web Developer.
            </p>
          </div>

          <div className="md:col-span-4 flex flex-wrap gap-x-6 gap-y-2 text-xs font-medium">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="hover:text-sky-400 transition-colors cursor-pointer"
              >
                {item.label}
              </button>
            ))}
            <button onClick={onOpenResume} className="text-sky-400 hover:underline transition-colors cursor-pointer font-semibold">
              Resume
            </button>
          </div>

          <div className="md:col-span-3 flex items-center justify-start md:justify-end gap-2.5">
            <a href={PERSONAL_INFO.github} target="_blank" rel="noreferrer" className="p-2.5 rounded-2xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-sky-400 transition-all">
              <Github className="w-4 h-4" />
            </a>
            <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noreferrer" className="p-2.5 rounded-2xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-sky-400 transition-all">
              <Linkedin className="w-4 h-4" />
            </a>
            <a href={PERSONAL_INFO.instagram} target="_blank" rel="noreferrer" className="p-2.5 rounded-2xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-sky-400 transition-all">
              <Instagram className="w-4 h-4" />
            </a>
            <a href={`mailto:${PERSONAL_INFO.email}`} className="p-2.5 rounded-2xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-sky-400 transition-all">
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500 text-center sm:text-left">
          <div>© 2026 Rahul Bera. Built with React & modern web engineering.</div>
          <div className="flex items-center gap-2 font-mono">
            <span>SVU Barrackpore • BCA 2nd Year</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* --- Resume Modal Component --- */
function ResumeModal({ isOpen, onClose, darkMode }: { isOpen: boolean; onClose: () => void; darkMode: boolean }) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md" onClick={onClose}>
      <div
        className={`w-full max-w-4xl max-h-[92vh] flex flex-col rounded-[32px] border shadow-2xl overflow-hidden ${
          darkMode ? 'bg-slate-900 border-slate-800 text-slate-100' : 'bg-white border-slate-200 text-slate-900'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800/80 bg-slate-950/60">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-sky-400" />
            <span className="font-mono text-xs font-semibold text-slate-300">Rahul_Bera_Resume_BCA2026.pdf</span>
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => window.print()}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold bg-sky-500 hover:bg-sky-600 text-white cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>
            <button type="button" onClick={onClose} className="p-2 rounded-full border border-slate-800 text-slate-400 hover:text-white cursor-pointer">
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="p-6 sm:p-10 overflow-y-auto flex-1 bg-slate-950 text-slate-200 font-sans space-y-8">
          <div className="border-b border-slate-800 pb-6 space-y-2">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <h1 className="text-2xl sm:text-3xl font-extrabold text-white">{PERSONAL_INFO.name}</h1>
                <p className="text-sm text-sky-400 font-medium">{PERSONAL_INFO.role}</p>
              </div>
              <div className="text-xs space-y-1 font-mono text-slate-400">
                <div className="flex items-center gap-1.5"><Mail className="w-3.5 h-3.5 text-sky-400" /><span>{PERSONAL_INFO.email}</span></div>
                <div className="flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5 text-sky-400" /><span>{PERSONAL_INFO.location}</span></div>
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <h2 className="text-xs uppercase tracking-wider font-bold text-sky-400 border-b border-slate-800/80 pb-1 font-mono">// Professional Summary</h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Motivated 2nd-year Bachelor of Computer Applications (BCA) student at Swami Vivekananda University, Barrackpore, with skills in HTML, CSS, JavaScript, C++, and Python. Seeking a software engineering or frontend development internship.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-xs uppercase tracking-wider font-bold text-sky-400 border-b border-slate-800/80 pb-1 font-mono">// Education</h2>
            <div className="space-y-3">
              {EDUCATION_DATA.map((edu, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="flex justify-between items-baseline">
                    <span className="font-bold text-sm text-white">{edu.degree}</span>
                    <span className="text-xs font-mono text-slate-400">{edu.period}</span>
                  </div>
                  <div className="text-xs text-sky-400 font-semibold">{edu.institution}, {edu.location}</div>
                  <p className="text-xs text-slate-300 leading-relaxed">{edu.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            <h2 className="text-xs uppercase tracking-wider font-bold text-sky-400 border-b border-slate-800/80 pb-1 font-mono">// Technical Skills</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div><strong className="text-slate-100 block mb-1">Languages:</strong><span className="text-slate-300">C++, Python, JavaScript (ES6+), HTML5, CSS3</span></div>
              <div><strong className="text-slate-100 block mb-1">Web & Frameworks:</strong><span className="text-slate-300">React.js, Tailwind CSS, Responsive Design</span></div>
              <div><strong className="text-slate-100 block mb-1">Tools & Platforms:</strong><span className="text-slate-300">Git, GitHub, VS Code, Vite</span></div>
              <div><strong className="text-slate-100 block mb-1">Coursework:</strong><span className="text-slate-300">Data Structures & Algorithms, OOP, DBMS</span></div>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-xs uppercase tracking-wider font-bold text-sky-400 border-b border-slate-800/80 pb-1 font-mono">// Featured Projects</h2>
            <div className="space-y-4">
              {PROJECTS_DATA.map((proj, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="flex justify-between items-baseline">
                    <span className="font-bold text-sm text-white">{proj.title}</span>
                    <span className="text-[11px] font-mono text-sky-400">{proj.technologies.slice(0, 3).join(', ')}</span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">{proj.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="p-4 border-t border-slate-800/80 bg-slate-950/60 flex items-center justify-between text-xs text-slate-400">
          <span>Ready for opportunities in 2026</span>
          <button onClick={onClose} className="px-5 py-2 rounded-full bg-slate-800 text-slate-200 hover:text-white border border-slate-700 cursor-pointer font-semibold">
            Close Viewer
          </button>
        </div>
      </div>
    </div>
  );
}

/* --- Project Detail & Interactive Simulator Modal --- */
function ProjectModal({ project, onClose, darkMode }: { project: Project | null; onClose: () => void; darkMode: boolean }) {
  const [activeTab, setActiveTab] = useState<'overview' | 'features' | 'code' | 'simulator'>('overview');
  const [simOutput, setSimOutput] = useState<string | null>(null);

  useEffect(() => {
    if (project) {
      setActiveTab('overview');
      setSimOutput(null);
    }
  }, [project]);

  if (!project) return null;

  const handleSimulate = () => {
    setSimOutput('Executing build tests and rendering interactive components...');
    setTimeout(() => {
      setSimOutput(`✓ Simulation Successful: "${project.title}" live demo initialized with responsive state handlers!`);
    }, 400);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md" onClick={onClose}>
      <div
        className={`w-full max-w-3xl max-h-[90vh] flex flex-col rounded-[32px] border shadow-2xl overflow-hidden ${
          darkMode ? 'bg-slate-900 border-slate-800 text-slate-100' : 'bg-white border-slate-200 text-slate-900'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
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
            <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-100">{project.title}</h3>
          </div>
          <button onClick={onClose} className="p-2 rounded-full border border-slate-800 text-slate-400 hover:text-white cursor-pointer">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="flex items-center gap-2 px-6 pt-3 border-b border-slate-800/80 bg-slate-950/30 text-xs sm:text-sm font-medium overflow-x-auto">
          {(['overview', 'features', 'code', 'simulator'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-3 px-2 border-b-2 font-semibold transition-colors cursor-pointer capitalize ${
                activeTab === tab ? 'border-sky-400 text-sky-400' : 'border-transparent text-slate-400 hover:text-slate-200'
              }`}
            >
              {tab === 'features' ? `Key Highlights (${project.features.length})` : tab}
            </button>
          ))}
        </div>

        <div className="p-6 overflow-y-auto flex-1 text-sm space-y-4">
          {activeTab === 'overview' && (
            <div className="space-y-5">
              <div>
                <h4 className="text-xs uppercase tracking-wider font-semibold text-slate-400 mb-2 font-mono">// Project Description</h4>
                <p className="text-slate-300">{project.description}</p>
              </div>
              <div>
                <h4 className="text-xs uppercase tracking-wider font-semibold text-slate-400 mb-2.5 font-mono">// Technologies & Stack</h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, idx) => (
                    <span key={idx} className="px-3 py-1 rounded-full text-xs font-mono bg-slate-800 text-sky-300 border border-sky-500/20">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'features' && (
            <div className="space-y-3">
              <h4 className="text-xs uppercase tracking-wider font-semibold text-slate-400 mb-1 font-mono">// Architectural Features</h4>
              {project.features.map((feature, idx) => (
                <div key={idx} className="flex items-start gap-3 p-3.5 rounded-2xl bg-slate-950/50 border border-slate-800/80">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-slate-300">{feature}</span>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'code' && project.codeSnippet && (
            <div className="space-y-3">
              <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 text-xs sm:text-sm font-mono overflow-x-auto">
                <pre className="text-sky-300"><code>{project.codeSnippet.code}</code></pre>
              </div>
            </div>
          )}

          {activeTab === 'simulator' && (
            <div className="space-y-4">
              <p className="text-xs sm:text-sm text-slate-400">
                Test simulated execution for <strong className="text-white">{project.title}</strong>:
              </p>
              <button
                type="button"
                onClick={handleSimulate}
                className="flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold bg-sky-500 hover:bg-sky-600 text-white cursor-pointer"
              >
                <Play className="w-4 h-4" />
                <span>Simulate Execution</span>
              </button>
              {simOutput && (
                <div className="p-4 rounded-2xl bg-slate-950 border border-sky-500/30 text-xs sm:text-sm font-mono text-sky-300 flex items-start gap-2.5">
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

        <div className="p-5 sm:p-6 border-t border-slate-800/80 bg-slate-950/60 flex flex-wrap items-center justify-between gap-3">
          <div className="text-xs text-slate-500 font-mono">BCA Academic Project • SVU</div>
          <div className="flex items-center gap-3">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs sm:text-sm font-bold border border-slate-700 bg-slate-800 text-slate-200 hover:bg-slate-700"
            >
              <Github className="w-4 h-4" />
              <span>GitHub</span>
            </a>
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs sm:text-sm font-bold bg-sky-500 hover:bg-sky-600 text-white"
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

/* ==========================================================================
   4. MAIN APP COMPONENT
   ========================================================================== */

export default function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [resumeModalOpen, setResumeModalOpen] = useState(false);
  const [activeProjectModal, setActiveProjectModal] = useState<Project | null>(null);

  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div
      id="app-root-container"
      className={`min-h-screen transition-colors duration-300 ${
        darkMode ? 'bg-[#020617] text-slate-100' : 'bg-slate-50 text-slate-900'
      }`}
    >
      <ScrollProgress />

      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        onOpenResume={() => setResumeModalOpen(true)}
      />

      <main id="main-content-flow">
        <Hero
          darkMode={darkMode}
          onOpenResume={() => setResumeModalOpen(true)}
        />

        <About darkMode={darkMode} />

        <Skills darkMode={darkMode} />

        <Projects
          darkMode={darkMode}
          onOpenProject={(proj) => setActiveProjectModal(proj)}
        />

        <Education darkMode={darkMode} />

        <Achievements darkMode={darkMode} />

        <Contact darkMode={darkMode} />
      </main>

      <Footer onOpenResume={() => setResumeModalOpen(true)} />

      <BackToTop />

      <ResumeModal
        isOpen={resumeModalOpen}
        onClose={() => setResumeModalOpen(false)}
        darkMode={darkMode}
      />

      <ProjectModal
        project={activeProjectModal}
        onClose={() => setActiveProjectModal(null)}
        darkMode={darkMode}
      />
    </div>
  );
}
