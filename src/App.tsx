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
  Printer,
  Sliders,
  ShieldCheck,
  Download,
  Layers,
  Zap,
  Info,
  Maximize2
} from 'lucide-react';

/* ==========================================================================
   1. TYPES & DATA CONSTANTS (UI/UX PRO MAX STANDARD)
   ========================================================================== */

export interface NavItem {
  id: string;
  label: string;
  href: string;
}

export interface Skill {
  id: string;
  name: string;
  category: 'frontend' | 'programming' | 'tools' | 'design';
  level: number;
  experienceLabel: string;
  iconName: string;
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
  badge?: string;
  stats?: { label: string; value: string }[];
  codeSnippet: {
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

export interface MilestoneItem {
  title: string;
  category: string;
  description: string;
  metric: string;
  iconName: string;
  date: string;
  badge: string;
}

const PERSONAL_INFO = {
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

const CODE_SNIPPETS = {
  react: `// Rahul Bera - Aspiring Web Developer
const Developer = {
  name: "Rahul Bera",
  education: "BCA 2nd Year @ SVU Barrackpore",
  passion: ["Modern Web Architecture", "UI/UX Engineering", "Problem Solving"],
  primaryStack: ["HTML5", "CSS3", "JavaScript", "C++", "Python"],
  status: "Ready for Internships & Projects 🚀",
  buildUsefulThings: () => "Writing accessible, high-performance, and responsive code."
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
        std::cout << "Mastering OOP concepts, pointers, and memory-safe algorithms." << std::endl;
    }
};`,
  python: `# Python Scripting & Data Handling
def solve_problem(passion, practice_hours):
    skills = ["Data Handling", "Scripting", "Logic Building"]
    growth = passion * practice_hours
    return {
        "developer": "Rahul Bera",
        "momentum": "Always building, testing & leveling up!",
        "skills_in_progress": skills
    }`,
  styles: `/* UI/UX Pro Max - Mathematical Design System */
.developer-profile-card {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
  background: rgba(3, 7, 18, 0.7);
  backdrop-filter: blur(16px);
  border: 1px solid rgba(56, 189, 248, 0.2);
  border-radius: 1.5rem;
  box-shadow: 0 20px 40px -15px rgba(0, 0, 0, 0.5);
}`
};

const SKILLS_DATA: Skill[] = [
  {
    id: 'html5',
    name: 'HTML5',
    category: 'frontend',
    level: 90,
    experienceLabel: 'Proficient',
    iconName: 'Code2',
    description: 'Semantic document outlining, accessibility (ARIA & a11y standards), structured forms, and modern web APIs.',
    tags: ['Semantic Tags', 'Forms & Inputs', 'WCAG AA Accessibility', 'SEO Standards'],
  },
  {
    id: 'css3',
    name: 'CSS3 & Tailwind',
    category: 'frontend',
    level: 86,
    experienceLabel: 'Proficient',
    iconName: 'Sparkles',
    description: 'Modern CSS architecture, Flexbox, Grid, fluid responsive design, Tailwind CSS utility layers, and keyframe animations.',
    tags: ['CSS3', 'Tailwind CSS', 'Flexbox / Grid', 'Animations', 'Design Systems'],
  },
  {
    id: 'javascript',
    name: 'JavaScript (ES6+)',
    category: 'frontend',
    level: 80,
    experienceLabel: 'Intermediate',
    iconName: 'FileText',
    description: 'Core ES6+ syntax, asynchronous programming (Promises / async-await), DOM manipulation, and JSON client-server handling.',
    tags: ['ES6+', 'DOM API', 'Async / Fetch', 'Event Handling', 'Modular JS'],
  },
  {
    id: 'cpp',
    name: 'C++ Programming',
    category: 'programming',
    level: 76,
    experienceLabel: 'Intermediate',
    iconName: 'Cpu',
    description: 'Object-Oriented Programming (OOP), memory management pointers, basic STL containers, and algorithmic problem solving.',
    tags: ['OOP Concepts', 'Pointers', 'STL Basics', 'File Streams', 'Algorithms'],
  },
  {
    id: 'python',
    name: 'Python',
    category: 'programming',
    level: 72,
    experienceLabel: 'Intermediate',
    iconName: 'Terminal',
    description: 'Core Python fundamentals, list/dict comprehensions, file I/O operations, scripting, and introductory data processing.',
    tags: ['Python 3', 'Automation', 'Logic Building', 'File I/O', 'Data Structures'],
  },
  {
    id: 'git',
    name: 'Git & GitHub',
    category: 'tools',
    level: 82,
    experienceLabel: 'Proficient',
    iconName: 'FolderGit2',
    description: 'Version control workflow, branching, commit discipline, merge strategies, and managing remote code repositories.',
    tags: ['Version Control', 'GitHub Actions', 'Branching', 'Markdown Docs'],
  },
  {
    id: 'responsive',
    name: 'Responsive Web Design',
    category: 'design',
    level: 88,
    experienceLabel: 'Proficient',
    iconName: 'Compass',
    description: 'Mobile-first engineering, viewport media queries, fluid type scaling, and multi-device usability testing.',
    tags: ['Mobile First', 'Adaptive Layouts', 'Touch Targets', 'Cross-Browser'],
  },
  {
    id: 'uiux',
    name: 'UI/UX Design Systems',
    category: 'design',
    level: 75,
    experienceLabel: 'Intermediate',
    iconName: 'Eye',
    description: 'User-centric visual hierarchy, 8pt spatial grid, color harmony, wireframing in Figma, and contrast optimization.',
    tags: ['Figma Basics', '8pt Grid System', 'Visual Hierarchy', 'Design Tokens'],
  },
];

const CURRENTLY_LEARNING = [
  { name: 'React 19 & Next.js Architecture', desc: 'Component lifecycles, hooks, and scalable frontend state', tag: 'Web Framework' },
  { name: 'Data Structures in C++', desc: 'Linked lists, stacks, queues, and tree traversal algorithms', tag: 'Core CS' },
  { name: 'Node.js & RESTful APIs', desc: 'Understanding server routing, Express middleware, and HTTP specs', tag: 'Full Stack' },
  { name: 'Relational Database & SQL', desc: 'Database schema design, normalization, and relational queries', tag: 'DBMS' },
];

const PROJECTS_DATA: Project[] = [
  {
    id: 'portfolio',
    title: 'Personal Developer Portfolio',
    subtitle: 'Modern, Responsive Student Showcase with UI/UX Pro Max Design',
    description: 'A clean, high-performance portfolio website built with modern frontend tools to present academic milestones, projects, and programming skills to recruiters and peers.',
    category: 'web',
    categoryLabel: 'Web Application',
    badge: 'Featured',
    stats: [
      { label: 'Lighthouse Score', value: '99/100' },
      { label: 'Responsive Viewports', value: '100%' },
      { label: 'Design System', value: 'UI/UX Pro Max' }
    ],
    technologies: ['React 19', 'Tailwind CSS', 'TypeScript', 'Lucide Icons', 'UI/UX Pro Max'],
    features: [
      'Interactive multi-theme switcher (Cyber Slate, Emerald Terminal, Tokyo Night, Clean Quartz)',
      'Live code terminal widget with interactive syntax-highlighted tabs and execution output',
      'Smooth scroll progress bar, active navigation spy, and animated micro-interactions',
      'Interactive Project Studio Inspector with live sandbox simulators and printable ATS resume modal',
    ],
    githubUrl: 'https://github.com/rahulbera-dev/personal-portfolio',
    demoUrl: '#',
    codeSnippet: {
      language: 'jsx',
      code: `export default function HeroSection() {
  return (
    <div className="flex flex-col items-center justify-center p-8">
      <h1 className="text-4xl font-extrabold text-white">Rahul Bera</h1>
      <p className="text-sky-400 font-mono">2nd Year BCA Student @ SVU Barrackpore</p>
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
    stats: [
      { label: 'Filter Speed', value: '< 15ms' },
      { label: 'State Sync', value: 'LocalStorage' },
      { label: 'Cart Flow', value: 'Real-time' }
    ],
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
      code: `function calculateCartSummary(cartItems, discountRate = 0.1) {
  const subtotal = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const discount = subtotal * discountRate;
  const tax = (subtotal - discount) * 0.08;
  return { subtotal, discount, tax, total: subtotal - discount + tax };
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
    stats: [
      { label: 'CRUD Operations', value: 'Full Suite' },
      { label: 'GPA Accuracy', value: '100%' },
      { label: 'Data Export', value: 'JSON / Print' }
    ],
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
    return ((total / this.marks.length) / 9.5).toFixed(2);
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
    stats: [
      { label: 'Memory Safety', value: 'Strict' },
      { label: 'File Streams', value: 'Binary fstream' },
      { label: 'Data Structures', value: 'Lists / Queues' }
    ],
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
        std::cout << "Transaction processed. New balance: ₹" << balance << std::endl;
    } else {
        std::cerr << "Error: Insufficient funds or invalid amount." << std::endl;
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
    stats: [
      { label: 'Formulas Handled', value: '25+ Complex' },
      { label: 'Pivot Slicers', value: 'Interactive' },
      { label: 'Visual KPIs', value: 'Dynamic' }
    ],
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

const EDUCATION_DATA: EducationItem[] = [
  {
    degree: 'Bachelor of Computer Applications (BCA)',
    institution: 'Swami Vivekananda University (SVU)',
    location: 'Barrackpore, Kolkata, West Bengal',
    period: '2024 – Present (2nd Year)',
    status: 'In Progress (Expected: 2027)',
    description: 'Undergraduate degree focused on computer science fundamentals, software engineering, web application development, database management systems, and programming languages.',
    highlights: [
      'Maintaining strong academic performance with focused study on core computing concepts',
      'Active participant in coding practicals, computer programming labs, and peer technical discussions',
      'Applying classroom theoretical computer science to hands-on web and software projects',
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
      'Built a solid foundation in logical reasoning, mathematical calculations, and computing logic',
      'Discovered passion for software development and chose to pursue BCA for undergraduate studies',
    ],
    coursework: ['Computer Science', 'Mathematics', 'Physics', 'English'],
  },
];

const LEARNING_ACHIEVEMENTS: MilestoneItem[] = [
  {
    title: '100+ Coding Problems Solved',
    category: 'Problem Solving',
    description: 'Practicing algorithmic problem solving in C++ and Python, focusing on arrays, strings, basic recursion, and searching/sorting logic.',
    metric: '100+ Problems',
    iconName: 'Terminal',
    date: 'Daily Practice',
    badge: 'Algorithms',
  },
  {
    title: '10+ Web Projects & Practice Builds',
    category: 'Frontend Development',
    description: 'Designed and coded multiple responsive web templates, calculators, interactive landing pages, and JavaScript mini-applications.',
    metric: '10+ Builds',
    iconName: 'Compass',
    date: '2024 - 2026',
    badge: 'Responsive Web',
  },
  {
    title: 'Active Lab Contributor at SVU',
    category: 'Academic & Collaboration',
    description: 'Regularly collaborating on lab assignments, assisting batchmates with C++ debugging and HTML/CSS web layout implementations.',
    metric: 'SVU Lab Team',
    iconName: 'GraduationCap',
    date: 'SVU Barrackpore',
    badge: 'Academic Leadership',
  },
  {
    title: '15+ Hours Weekly Dedicated Self-Study',
    category: 'Continuous Growth',
    description: 'Dedicates 15+ hours weekly outside university lectures to study modern developer roadmaps, documentation, and UI/UX design heuristics.',
    metric: '15+ hrs/week',
    iconName: 'BookOpen',
    date: 'Consistent Routine',
    badge: 'Self Directed',
  },
  {
    title: 'Clean Git & Version Control Discipline',
    category: 'Developer Workflow',
    description: 'Consistently using Git for version control across personal projects, writing clear commit histories, and managing repositories on GitHub.',
    metric: 'GitHub Active',
    iconName: 'FolderGit2',
    date: 'GitHub Practice',
    badge: 'Workflow',
  },
];

const NAV_ITEMS: NavItem[] = [
  { id: 'hero', label: 'Home', href: '#hero' },
  { id: 'about', label: 'About', href: '#about' },
  { id: 'skills', label: 'Skills', href: '#skills' },
  { id: 'projects', label: 'Projects', href: '#projects' },
  { id: 'education', label: 'Education', href: '#education' },
  { id: 'learning', label: 'Milestones', href: '#learning' },
  { id: 'contact', label: 'Contact', href: '#contact' },
];

/* Helper to render Lucide Icons by name */
const DynamicIcon: React.FC<{ name: string; className?: string }> = ({ name, className = 'w-4 h-4' }) => {
  const iconMap: Record<string, React.ReactNode> = {
    Code2: <Code2 className={className} />,
    Sparkles: <Sparkles className={className} />,
    FileText: <FileText className={className} />,
    Cpu: <Cpu className={className} />,
    Terminal: <Terminal className={className} />,
    FolderGit2: <FolderGit2 className={className} />,
    Compass: <Compass className={className} />,
    Eye: <Eye className={className} />,
    GraduationCap: <GraduationCap className={className} />,
    BookOpen: <BookOpen className={className} />,
  };
  return iconMap[name] || <Code2 className={className} />;
};

/* ==========================================================================
   2. MAIN APPLICATION COMPONENT
   ========================================================================== */

export default function App() {
  // Theme & UX States
  const [themeMode, setThemeMode] = useState<'cyberpunk' | 'emerald' | 'tokyo' | 'light'>('cyberpunk');
  const [density, setDensity] = useState<'normal' | 'compact'>('normal');
  const [activeSection, setActiveSection] = useState<string>('hero');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showBackToTop, setShowBackToTop] = useState(false);
  
  // Hero Terminal State
  const [activeTab, setActiveTab] = useState<'react' | 'cpp' | 'python' | 'styles'>('react');
  const [isRunning, setIsRunning] = useState(false);
  const [consoleOutput, setConsoleOutput] = useState<string | null>(null);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Filter & Modals
  const [selectedProjectCategory, setSelectedProjectCategory] = useState<string>('all');
  const [selectedSkillCategory, setSelectedSkillCategory] = useState<string>('all');
  const [activeProjectModal, setActiveProjectModal] = useState<Project | null>(null);
  const [projectModalTab, setProjectModalTab] = useState<'overview' | 'features' | 'code' | 'simulator'>('overview');
  const [simOutput, setSimOutput] = useState<string>('');
  
  // Standalone Export & Resume Modals
  const [resumeModalOpen, setResumeModalOpen] = useState(false);
  const [exportModalOpen, setExportModalOpen] = useState(false);
  const [uxInspectorOpen, setUxInspectorOpen] = useState(false);

  // Sneaker Simulator State inside SoleSprint Demo
  const [shoeSize, setShoeSize] = useState('9 US');
  const [shoeQty, setShoeQty] = useState(1);
  const [shoeCartAdded, setShoeCartAdded] = useState(false);

  // Student GPA Calculator Demo State
  const [demoMarks, setDemoMarks] = useState({ math: 85, dsa: 92, oop: 88, web: 90 });

  // Contact Form State
  const [contactForm, setContactForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [contactErrors, setContactErrors] = useState<Record<string, string>>({});
  const [contactSuccess, setContactSuccess] = useState(false);
  const [contactSubmitting, setContactSubmitting] = useState(false);

  // Apply Theme to document HTML element
  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove('theme-cyberpunk', 'theme-emerald', 'theme-tokyo', 'light', 'dark');

    if (themeMode === 'light') {
      root.classList.add('light');
    } else {
      root.classList.add('dark', `theme-${themeMode}`);
    }
  }, [themeMode]);

  // Scroll Spy & Reading Progress Indicator
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress(Math.min(100, Math.max(0, (window.scrollY / totalHeight) * 100)));
      }
      setShowBackToTop(window.scrollY > 350);

      const scrollPosition = window.scrollY + 220;
      for (let i = NAV_ITEMS.length - 1; i >= 0; i--) {
        const el = document.getElementById(NAV_ITEMS[i].id);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(NAV_ITEMS[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const triggerToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    triggerToast('Email copied to clipboard!');
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleRunCode = () => {
    setIsRunning(true);
    setConsoleOutput(null);
    setTimeout(() => {
      setIsRunning(false);
      if (activeTab === 'react') {
        setConsoleOutput('✓ React 19 Component Mounted: Rahul Bera [BCA 2nd Year, SVU] | Status: Ready for Internships & Projects.');
      } else if (activeTab === 'cpp') {
        setConsoleOutput('✓ C++ Process exited with status 0: DSA & OOP memory allocations verified successfully.');
      } else if (activeTab === 'python') {
        setConsoleOutput('✓ Python 3.12 Output: {"developer": "Rahul Bera", "status": "Always building, testing & leveling up!"}');
      } else {
        setConsoleOutput('✓ CSS Styles applied: UI/UX Pro Max 8pt spatial grid, frosted acrylic glass, and WCAG AA contrast.');
      }
    }, 400);
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errors: Record<string, string> = {};
    if (!contactForm.name.trim()) errors.name = 'Please provide your full name.';
    if (!contactForm.email.trim()) errors.email = 'Please provide your email address.';
    else if (!/\S+@\S+\.\S+/.test(contactForm.email)) errors.email = 'Please enter a valid email address.';
    if (!contactForm.subject.trim()) errors.subject = 'Please enter a subject.';
    if (!contactForm.message.trim() || contactForm.message.trim().length < 10) errors.message = 'Message must contain at least 10 characters.';

    if (Object.keys(errors).length > 0) {
      setContactErrors(errors);
      return;
    }

    setContactErrors({});
    setContactSubmitting(true);
    setTimeout(() => {
      setContactSubmitting(false);
      setContactSuccess(true);
      triggerToast('Message dispatched! Thank you for connecting.');
      setContactForm({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setContactSuccess(false), 6000);
    }, 600);
  };

  const handleDownloadStandaloneHtml = () => {
    const htmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Rahul Bera - Portfolio | 2nd Year BCA Student</title>
  <meta name="description" content="Personal Portfolio of Rahul Bera, 2nd Year BCA Student at Swami Vivekananda University (SVU), Barrackpore.">
  <script src="https://cdn.tailwindcss.com"></script>
  <script src="https://unpkg.com/react@18/umd/react.production.min.js" crossorigin></script>
  <script src="https://unpkg.com/react-dom@18/umd/react-dom.production.min.js" crossorigin></script>
  <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;600&family=Plus+Jakarta+Sans:wght@400;600;700;800&display=swap" rel="stylesheet">
  <style>
    body { font-family: 'Plus Jakarta Sans', sans-serif; background-color: #030712; color: #f1f5f9; }
    code, pre { font-family: 'JetBrains Mono', monospace; }
  </style>
</head>
<body class="bg-[#030712] text-slate-100 antialiased p-6 sm:p-12">
  <div class="max-w-4xl mx-auto space-y-8">
    <div class="p-8 rounded-3xl bg-slate-900 border border-slate-800 space-y-4">
      <div class="flex items-center gap-2 text-sky-400 font-mono text-xs">// Rahul Bera Portfolio</div>
      <h1 class="text-3xl sm:text-4xl font-extrabold text-white">Rahul Bera</h1>
      <p class="text-slate-300 font-medium">2nd Year BCA Student @ Swami Vivekananda University (SVU), Barrackpore</p>
      <p class="text-slate-400 text-sm leading-relaxed">${PERSONAL_INFO.tagline}</p>
      <div class="flex flex-wrap gap-2 pt-2">
        <a href="mailto:${PERSONAL_INFO.email}" class="px-4 py-2 rounded-xl bg-sky-500 hover:bg-sky-600 text-white text-xs font-bold transition-all">Email Me (${PERSONAL_INFO.email})</a>
        <a href="${PERSONAL_INFO.github}" target="_blank" class="px-4 py-2 rounded-xl bg-slate-800 border border-slate-700 text-slate-200 text-xs font-bold hover:text-white transition-all">GitHub Profile</a>
      </div>
    </div>
  </div>
</body>
</html>`;

    const blob = new Blob([htmlContent], { type: 'text/html;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'rahul_bera_portfolio_single_file.html';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    triggerToast('Single-file index.html downloaded successfully!');
    setExportModalOpen(false);
  };

  const filteredProjects = selectedProjectCategory === 'all'
    ? PROJECTS_DATA
    : PROJECTS_DATA.filter((p) => p.category === selectedProjectCategory);

  const filteredSkills = selectedSkillCategory === 'all'
    ? SKILLS_DATA
    : SKILLS_DATA.filter((s) => s.category === selectedSkillCategory);

  const tabLabels = {
    react: { label: 'Developer.jsx', icon: '⚛️', lang: 'JSX' },
    cpp: { label: 'student.cpp', icon: '⚙️', lang: 'CPP' },
    python: { label: 'growth.py', icon: '🐍', lang: 'PYTHON' },
    styles: { label: 'theme.css', icon: '🎨', lang: 'CSS' },
  };

  // Dynamic Theme Colors
  const accentColorClass = themeMode === 'emerald'
    ? 'text-emerald-400 border-emerald-500/30'
    : themeMode === 'tokyo'
    ? 'text-purple-400 border-purple-500/30'
    : themeMode === 'light'
    ? 'text-blue-600 border-blue-200'
    : 'text-sky-400 border-sky-500/30';

  const buttonAccentClass = themeMode === 'emerald'
    ? 'bg-emerald-500 hover:bg-emerald-600 text-white shadow-emerald-500/20'
    : themeMode === 'tokyo'
    ? 'bg-purple-600 hover:bg-purple-700 text-white shadow-purple-600/20'
    : themeMode === 'light'
    ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-blue-500/20'
    : 'bg-sky-500 hover:bg-sky-600 text-white shadow-sky-500/20';

  const bgCardClass = themeMode === 'light'
    ? 'bg-white/90 border-slate-200 text-slate-800 shadow-slate-200/50'
    : 'bg-slate-900/40 border-slate-800/80 text-slate-200 shadow-black/40';

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      themeMode === 'light' ? 'bg-slate-50 text-slate-900' : 'bg-[#030712] text-slate-100'
    } ${density === 'compact' ? 'text-sm' : ''}`}>

      {/* 1. TOAST NOTIFICATION */}
      {toastMessage && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 px-5 py-3 rounded-full bg-slate-900/95 border border-sky-500/40 text-sky-300 text-xs font-semibold shadow-2xl flex items-center gap-2 backdrop-blur-xl animate-bounce">
          <CheckCircle2 className="w-4 h-4 text-emerald-400" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* 2. SCROLL PROGRESS INDICATOR */}
      <div className="fixed top-0 left-0 right-0 h-[3px] bg-transparent z-50 pointer-events-none">
        <div
          className={`h-full transition-all duration-75 ${
            themeMode === 'emerald'
              ? 'bg-gradient-to-r from-emerald-400 to-teal-500 shadow-[0_0_10px_rgba(16,185,129,0.7)]'
              : themeMode === 'tokyo'
              ? 'bg-gradient-to-r from-purple-400 via-fuchsia-500 to-pink-500 shadow-[0_0_10px_rgba(168,85,247,0.7)]'
              : themeMode === 'light'
              ? 'bg-gradient-to-r from-blue-500 to-indigo-600'
              : 'bg-gradient-to-r from-sky-400 via-sky-500 to-blue-600 shadow-[0_0_10px_rgba(56,189,248,0.7)]'
          }`}
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* 3. NAVIGATION HEADER */}
      <header className="fixed top-0 left-0 right-0 z-40 pt-3 sm:pt-4 px-4 sm:px-6 lg:px-8 pointer-events-none">
        <div className="max-w-7xl mx-auto pointer-events-auto">
          <nav className={`flex items-center justify-between px-4 sm:px-6 py-2.5 sm:py-3 rounded-full border shadow-xl transition-all ${
            themeMode === 'light'
              ? 'bg-white/90 backdrop-blur-xl border-slate-200 shadow-slate-200/50 text-slate-800'
              : 'bg-slate-900/60 backdrop-blur-xl border-slate-800/80 shadow-black/30 text-slate-200'
          }`}>
            {/* Logo */}
            <a
              href="#hero"
              onClick={(e) => { e.preventDefault(); handleNavClick('#hero'); }}
              className="flex items-center gap-3 group"
            >
              <div className={`text-xl font-extrabold bg-clip-text text-transparent tracking-tight group-hover:scale-105 transition-transform ${
                themeMode === 'emerald'
                  ? 'bg-gradient-to-r from-emerald-400 to-teal-300'
                  : themeMode === 'tokyo'
                  ? 'bg-gradient-to-r from-purple-400 to-pink-400'
                  : themeMode === 'light'
                  ? 'bg-gradient-to-r from-blue-600 to-indigo-600'
                  : 'bg-gradient-to-r from-sky-400 to-blue-500'
              }`}>
                RB.
              </div>
              <div className="hidden sm:flex flex-col">
                <span className="font-bold text-xs sm:text-sm tracking-tight flex items-center gap-1.5">
                  Rahul Bera <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                </span>
                <span className="text-[10px] text-slate-400 font-mono">BCA 2nd Year • SVU</span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center gap-1 lg:gap-1.5">
              {NAV_ITEMS.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.href)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all ${
                    activeSection === item.id
                      ? themeMode === 'light'
                        ? 'text-blue-600 bg-blue-50 border border-blue-200 font-bold'
                        : 'text-sky-400 bg-sky-500/10 border border-sky-500/20 font-bold shadow-sm'
                      : themeMode === 'light'
                      ? 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                      : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Controls: UI/UX Inspector, Single-File Export, Theme & Resume */}
            <div className="hidden sm:flex items-center gap-2">
              <button
                type="button"
                onClick={() => setUxInspectorOpen(!uxInspectorOpen)}
                title="UI/UX Pro Max Design Controls"
                className={`p-2 rounded-full border transition-all ${
                  uxInspectorOpen
                    ? 'border-sky-500 bg-sky-500/20 text-sky-400'
                    : themeMode === 'light'
                    ? 'border-slate-200 bg-slate-100 text-slate-700 hover:text-blue-600'
                    : 'border-slate-800 bg-slate-800/80 text-slate-300 hover:text-sky-400'
                }`}
              >
                <Palette className="w-3.5 h-3.5" />
              </button>

              <button
                type="button"
                onClick={() => setExportModalOpen(true)}
                title="Export Single-File index.html"
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold border transition-all ${
                  themeMode === 'light'
                    ? 'border-slate-200 bg-slate-100 text-slate-700 hover:bg-slate-200'
                    : 'border-slate-800 bg-slate-800/90 text-slate-300 hover:text-white hover:border-slate-700'
                }`}
              >
                <Download className="w-3.5 h-3.5 text-sky-400" />
                <span className="hidden lg:inline">Single-File HTML</span>
              </button>

              <button
                type="button"
                onClick={() => setResumeModalOpen(true)}
                className={`inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-bold transition-all shadow-md ${buttonAccentClass}`}
              >
                <FileText className="w-3.5 h-3.5" />
                <span>Resume</span>
              </button>
            </div>

            {/* Mobile Actions */}
            <div className="flex md:hidden items-center gap-2">
              <button
                type="button"
                onClick={() => setUxInspectorOpen(!uxInspectorOpen)}
                className="p-1.5 rounded-full border border-slate-800 bg-slate-800 text-slate-300"
              >
                <Palette className="w-3.5 h-3.5" />
              </button>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-1.5 rounded-full border border-slate-800 bg-slate-800 text-slate-300"
              >
                {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
              </button>
            </div>
          </nav>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="max-w-7xl mx-auto mt-2 pointer-events-auto">
            <div className={`md:hidden border rounded-3xl p-4 space-y-1.5 shadow-2xl ${
              themeMode === 'light'
                ? 'bg-white/95 backdrop-blur-2xl border-slate-200 text-slate-800'
                : 'bg-slate-900/95 backdrop-blur-2xl border-slate-800 text-slate-200'
            }`}>
              {NAV_ITEMS.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.href)}
                  className={`w-full text-left px-4 py-2.5 rounded-xl text-sm font-medium transition-colors flex items-center justify-between ${
                    activeSection === item.id
                      ? 'bg-sky-500/10 text-sky-400 font-bold border border-sky-500/20'
                      : 'hover:bg-slate-800 text-slate-300'
                  }`}
                >
                  <span>{item.label}</span>
                  {activeSection === item.id && <div className="w-1.5 h-1.5 rounded-full bg-sky-400" />}
                </button>
              ))}
              <div className="pt-3 border-t border-slate-800 grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => { setMobileMenuOpen(false); setExportModalOpen(true); }}
                  className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-full text-xs font-semibold bg-slate-800 border border-slate-700 text-slate-200"
                >
                  <Download className="w-3.5 h-3.5 text-sky-400" />
                  <span>Single HTML</span>
                </button>
                <button
                  type="button"
                  onClick={() => { setMobileMenuOpen(false); setResumeModalOpen(true); }}
                  className={`flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-full text-xs font-bold ${buttonAccentClass}`}
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>Resume</span>
                </button>
              </div>
            </div>
          </div>
        )}

        {/* UI/UX PRO MAX DESIGN INTELLIGENCE BAR (Floating Drawer) */}
        {uxInspectorOpen && (
          <div className="max-w-7xl mx-auto mt-2 pointer-events-auto animate-fadeIn">
            <div className={`p-4 rounded-3xl border shadow-2xl backdrop-blur-2xl flex flex-wrap items-center justify-between gap-4 text-xs ${
              themeMode === 'light'
                ? 'bg-white/95 border-slate-200 text-slate-800'
                : 'bg-slate-900/95 border-slate-800 text-slate-200'
            }`}>
              <div className="flex items-center gap-2 font-mono">
                <ShieldCheck className="w-4 h-4 text-sky-400" />
                <span className="font-bold text-slate-100">UI/UX Pro Max Engine</span>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-slate-800 text-sky-300 border border-sky-500/20">Active Quality Gate</span>
              </div>

              {/* Theme Palette Switcher */}
              <div className="flex items-center gap-1.5">
                <span className="text-slate-400 mr-1">Design Archetype:</span>
                {[
                  { id: 'cyberpunk', label: 'Cyber Slate', dot: 'bg-sky-400' },
                  { id: 'emerald', label: 'Emerald Code', dot: 'bg-emerald-400' },
                  { id: 'tokyo', label: 'Tokyo Night', dot: 'bg-purple-400' },
                  { id: 'light', label: 'Quartz Light', dot: 'bg-blue-500' },
                ].map((thm) => (
                  <button
                    key={thm.id}
                    onClick={() => setThemeMode(thm.id as any)}
                    className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-semibold transition-all ${
                      themeMode === thm.id
                        ? 'bg-slate-800 text-white border border-sky-500/40 shadow-sm'
                        : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    <span className={`w-2 h-2 rounded-full ${thm.dot}`} />
                    <span>{thm.label}</span>
                  </button>
                ))}
              </div>

              {/* Density Toggle */}
              <div className="flex items-center gap-2">
                <span className="text-slate-400">Layout Spacing:</span>
                <button
                  type="button"
                  onClick={() => setDensity(density === 'normal' ? 'compact' : 'normal')}
                  className="px-2.5 py-1 rounded-full bg-slate-800 border border-slate-700 text-[11px] font-mono text-slate-200 hover:border-sky-400 transition-colors"
                >
                  {density === 'normal' ? '8pt Spacious' : 'Dense Compact'}
                </button>
                <button
                  type="button"
                  onClick={() => setUxInspectorOpen(false)}
                  className="p-1 rounded-full text-slate-400 hover:text-white"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* 4. MAIN PAGE CONTENT */}
      <main>
        {/* HERO SECTION */}
        <section id="hero" className="relative min-h-[92vh] pt-28 sm:pt-32 pb-16 lg:pb-24 flex items-center overflow-hidden">
          {/* Ambient Glow */}
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] sm:w-[750px] h-[380px] bg-sky-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
              
              {/* Left Column: Hero Card */}
              <div className="lg:col-span-7 flex flex-col gap-6">
                <div className={`p-6 sm:p-10 rounded-[32px] border relative overflow-hidden transition-all duration-300 flex-1 flex flex-col justify-between ${bgCardClass}`}>
                  <div>
                    {/* Status Pill */}
                    <div className="flex items-center gap-2 mb-4">
                      <p className={`font-mono text-xs sm:text-sm font-semibold tracking-wider ${accentColorClass}`}>
                        // Student Developer Profile
                      </p>
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      <span className="text-[11px] font-mono text-slate-400 hidden sm:inline">SVU Barrackpore</span>
                    </div>

                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-3 tracking-tight text-white">
                      Rahul <br className="hidden sm:inline" />
                      <span className={`bg-clip-text text-transparent ${
                        themeMode === 'emerald'
                          ? 'bg-gradient-to-r from-emerald-400 via-teal-300 to-green-500'
                          : themeMode === 'tokyo'
                          ? 'bg-gradient-to-r from-purple-400 via-pink-400 to-rose-400'
                          : themeMode === 'light'
                          ? 'bg-gradient-to-r from-blue-600 via-indigo-600 to-sky-600'
                          : 'bg-gradient-to-r from-sky-400 via-sky-300 to-blue-500'
                      }`}>
                        Bera
                      </span>
                    </h1>

                    <p className="text-slate-300 text-base sm:text-lg font-medium mb-4">
                      2nd Year BCA Student & Aspiring Web Developer
                    </p>

                    <p className="text-slate-400 text-sm sm:text-base leading-relaxed mb-6 max-w-xl">
                      "{PERSONAL_INFO.tagline}"
                    </p>

                    {/* Metadata Badges */}
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
                        <span>Web Engineering & C++</span>
                      </div>
                    </div>
                  </div>

                  {/* Actions & Links */}
                  <div className="space-y-4 pt-2">
                    <div className="flex flex-wrap items-center gap-3">
                      <a
                        href="#projects"
                        className={`inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-bold shadow-lg transition-all ${buttonAccentClass}`}
                      >
                        <span>Explore Projects</span>
                        <ArrowRight className="w-4 h-4" />
                      </a>
                      <a
                        href="#contact"
                        className="inline-flex items-center justify-center gap-2 border border-slate-700 hover:bg-slate-800/90 text-slate-200 px-6 py-3 rounded-xl text-sm font-bold transition-colors"
                      >
                        <Mail className="w-4 h-4 text-sky-400" />
                        <span>Contact Me</span>
                      </a>
                      <button
                        type="button"
                        onClick={() => setResumeModalOpen(true)}
                        className="inline-flex items-center justify-center gap-2 border border-slate-800 hover:border-slate-700 bg-slate-900/60 text-slate-300 hover:text-white px-4 py-3 rounded-xl text-xs font-semibold transition-all"
                      >
                        <FileText className="w-4 h-4 text-sky-400" />
                        <span>Resume</span>
                      </button>
                    </div>

                    <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400 pt-2 border-t border-slate-800/80">
                      <span className="font-mono text-slate-500 uppercase tracking-wider">Quick Channels:</span>
                      <a href={PERSONAL_INFO.github} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 hover:text-sky-400 transition-colors">
                        <Github className="w-3.5 h-3.5" />
                        <span>GitHub</span>
                      </a>
                      <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 hover:text-sky-400 transition-colors">
                        <Linkedin className="w-3.5 h-3.5" />
                        <span>LinkedIn</span>
                      </a>
                      <button type="button" onClick={handleCopyEmail} className="flex items-center gap-1.5 hover:text-sky-400 transition-colors">
                        <Copy className={`w-3.5 h-3.5 ${copiedEmail ? 'text-emerald-400' : ''}`} />
                        <span className="font-mono">{copiedEmail ? 'Copied!' : PERSONAL_INFO.email}</span>
                      </button>
                    </div>
                  </div>
                </div>

                {/* Sub-Card: Current Learning Focus */}
                <div className={`p-6 rounded-[32px] border ${bgCardClass}`}>
                  <h3 className="text-xs uppercase tracking-widest text-slate-500 font-bold mb-3 flex items-center gap-2">
                    <Sparkles className="w-3.5 h-3.5 text-sky-400" />
                    <span>Academic & Technical Mastery Roadmap</span>
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

              {/* Right Column: Interactive Code Sandbox */}
              <div className="lg:col-span-5 flex flex-col">
                <div className="rounded-[32px] border border-slate-800 bg-slate-900/60 text-slate-200 shadow-2xl overflow-hidden flex flex-col flex-1">
                  {/* Top Terminal Bar */}
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
                      className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer disabled:opacity-50 ${buttonAccentClass}`}
                    >
                      <Play className={`w-3 h-3 ${isRunning ? 'animate-spin' : ''}`} />
                      <span>{isRunning ? 'Executing...' : 'Run Code'}</span>
                    </button>
                  </div>

                  {/* Terminal Tabs */}
                  <div className="flex items-center gap-1 px-4 py-2 bg-slate-950/40 border-b border-slate-800/80 overflow-x-auto text-xs font-mono">
                    {(['react', 'cpp', 'python', 'styles'] as const).map((tab) => (
                      <button
                        key={tab}
                        onClick={() => { setActiveTab(tab); setConsoleOutput(null); }}
                        className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-colors whitespace-nowrap ${
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

                  {/* Code Snippet Box */}
                  <div className="p-5 text-xs sm:text-sm font-mono overflow-x-auto flex-1 max-h-[340px]">
                    <pre className="text-slate-300 leading-relaxed font-mono">
                      <code>{CODE_SNIPPETS[activeTab]}</code>
                    </pre>
                  </div>

                  {/* Output Console Banner */}
                  {consoleOutput && (
                    <div className="p-4 bg-slate-950/95 border-t border-sky-500/30 text-xs font-mono text-sky-300 flex items-start gap-2.5 animate-fadeIn">
                      <Terminal className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                      <div className="flex-1 break-words">
                        <span className="text-slate-500 font-bold block mb-0.5">[OUTPUT CONSOLE]</span>
                        <span>{consoleOutput}</span>
                      </div>
                    </div>
                  )}

                  {/* Bottom Footer Info */}
                  <div className="px-5 py-3 bg-slate-950/80 border-t border-slate-800 flex items-center justify-between text-[11px] font-mono text-slate-400">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-sky-400 inline-block animate-pulse" />
                      <span>UTF-8 • {tabLabels[activeTab].lang}</span>
                    </div>
                    <span>BCA 2nd Year • SVU</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ABOUT SECTION */}
        <section id="about" className="py-20 sm:py-24 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-12">
              <p className={`font-mono text-xs sm:text-sm font-semibold tracking-wider mb-2 ${accentColorClass}`}>// Academic & Developer Story</p>
              <h2 className="text-2xl sm:text-3xl font-bold flex items-center gap-3 text-white mb-3">
                <span className="w-8 h-[2px] bg-sky-500 shrink-0" />
                <span>About Rahul Bera</span>
              </h2>
              <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
                A genuine student journey focused on practical skill acquisition, clean coding, and meaningful software projects at Swami Vivekananda University (SVU), Barrackpore.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
              {/* Bio Details */}
              <div className="lg:col-span-7 space-y-6">
                <div className={`p-6 sm:p-8 rounded-[32px] border ${bgCardClass}`}>
                  <h3 className="text-xl font-bold mb-4 flex items-center justify-between">
                    <span>Student Developer Bio</span>
                    <span className="text-xs font-mono font-medium text-sky-400 px-3 py-1 rounded-full bg-slate-800 border border-sky-500/20">SVU Barrackpore</span>
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
              </div>

              {/* Learning Trackers */}
              <div className="lg:col-span-5 space-y-6">
                <div className={`p-6 sm:p-7 rounded-[32px] border ${bgCardClass}`}>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-bold flex items-center gap-2 text-white">
                      <BookOpen className="w-5 h-5 text-sky-400" />
                      <span>Academic Modules</span>
                    </h3>
                    <span className="text-xs font-mono px-3 py-1 rounded-full bg-slate-800 text-sky-300 border border-sky-500/20">Sem 3 Focus</span>
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
              </div>
            </div>
          </div>
        </section>

        {/* SKILLS SECTION */}
        <section id="skills" className="py-20 sm:py-24 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-12">
              <p className={`font-mono text-xs sm:text-sm font-semibold tracking-wider mb-2 ${accentColorClass}`}>// Technical Capabilities</p>
              <h2 className="text-2xl sm:text-3xl font-bold flex items-center gap-3 text-white mb-3">
                <span className="w-8 h-[2px] bg-sky-500 shrink-0" />
                <span>Technical & Programming Skills</span>
              </h2>
              <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
                Solid technical competencies developed through coursework at SVU Barrackpore and deliberate personal development projects.
              </p>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap items-center gap-2 mb-10">
              {[
                { id: 'all', label: 'All Capabilities' },
                { id: 'frontend', label: 'Frontend Web' },
                { id: 'programming', label: 'Programming & Logic' },
                { id: 'tools', label: 'Tools & Workflow' },
                { id: 'design', label: 'Design & UI' },
              ].map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedSkillCategory(cat.id)}
                  className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all ${
                    selectedSkillCategory === cat.id
                      ? `${buttonAccentClass} font-bold`
                      : 'bg-slate-900/60 border border-slate-800 text-slate-300 hover:bg-slate-800 hover:text-white'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Skills Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {filteredSkills.map((skill) => (
                <div
                  key={skill.id}
                  className="p-6 rounded-[28px] border bg-slate-900/40 border-slate-800 hover:border-sky-500/40 transition-all flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-10 h-10 rounded-2xl bg-slate-800 border border-slate-700/60 flex items-center justify-center text-sky-400 group-hover:scale-110 transition-transform">
                        <DynamicIcon name={skill.iconName} className="w-5 h-5" />
                      </div>
                      <span className="text-xs font-mono font-semibold px-3 py-1 rounded-full bg-slate-800 text-sky-300 border border-sky-500/20">
                        {skill.experienceLabel}
                      </span>
                    </div>
                    <h3 className="text-base font-bold text-slate-100 mb-2">{skill.name}</h3>
                    <p className="text-xs text-slate-400 leading-relaxed mb-4">{skill.description}</p>
                  </div>

                  <div className="pt-4 border-t border-slate-800">
                    <div className="flex justify-between items-center text-xs font-mono text-slate-400 mb-1.5">
                      <span>Proficiency</span>
                      <span className="text-sky-400 font-bold">{skill.level}%</span>
                    </div>
                    <div className="w-full h-1.5 rounded-full bg-slate-800 overflow-hidden">
                      <div
                        className="h-full bg-sky-500 rounded-full transition-all duration-500"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PROJECTS SECTION */}
        <section id="projects" className="py-20 sm:py-24 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-12">
              <p className={`font-mono text-xs sm:text-sm font-semibold tracking-wider mb-2 ${accentColorClass}`}>// Featured Projects & Code</p>
              <h2 className="text-2xl sm:text-3xl font-bold flex items-center gap-3 text-white mb-3">
                <span className="w-8 h-[2px] bg-sky-500 shrink-0" />
                <span>Projects & Software Builds</span>
              </h2>
              <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
                Practical software projects demonstrating responsive web engineering, OOP with C++, data analysis, and student-led development at SVU Barrackpore.
              </p>
            </div>

            {/* Filter Pills */}
            <div className="flex flex-wrap items-center gap-2 mb-10">
              {[
                { id: 'all', label: 'All Builds' },
                { id: 'web', label: 'Web Applications' },
                { id: 'cpp', label: 'C++ Systems' },
                { id: 'data', label: 'Data Analysis' },
              ].map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedProjectCategory(cat.id)}
                  className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all ${
                    selectedProjectCategory === cat.id
                      ? `${buttonAccentClass} font-bold`
                      : 'bg-slate-900/60 border border-slate-800 text-slate-300 hover:bg-slate-800 hover:text-white'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Project Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {filteredProjects.map((project) => (
                <div
                  key={project.id}
                  className="rounded-[28px] border bg-slate-900/40 border-slate-800 hover:border-sky-500/40 transition-all flex flex-col justify-between overflow-hidden group shadow-xl"
                >
                  {/* Card Header */}
                  <div className="p-6 bg-slate-950/80 border-b border-slate-800">
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

                  {/* Card Body */}
                  <div className="p-6 flex-1 flex flex-col justify-between space-y-5">
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed line-clamp-3">
                      {project.description}
                    </p>

                    <div className="pt-4 border-t border-slate-800">
                      {/* Tech Chips */}
                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {project.technologies.slice(0, 4).map((tech, idx) => (
                          <span key={idx} className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-slate-800/90 text-sky-300 border border-sky-500/20">
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Actions */}
                      <div className="flex items-center justify-between gap-2 pt-2">
                        <button
                          type="button"
                          onClick={() => {
                            setActiveProjectModal(project);
                            setProjectModalTab('overview');
                            setSimOutput('');
                          }}
                          className="inline-flex items-center gap-1.5 text-xs font-bold text-sky-400 hover:text-sky-300 transition-colors cursor-pointer"
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
                            title="GitHub Repository"
                          >
                            <Github className="w-4 h-4" />
                          </a>
                          <button
                            type="button"
                            onClick={() => {
                              setActiveProjectModal(project);
                              setProjectModalTab('simulator');
                              setSimOutput('');
                            }}
                            className={`inline-flex items-center gap-1 px-3.5 py-1.5 rounded-full text-xs font-bold transition-all shadow-sm ${buttonAccentClass}`}
                          >
                            <span>Live Demo</span>
                            <ArrowUpRight className="w-3 h-3" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* EDUCATION SECTION */}
        <section id="education" className="py-20 sm:py-24 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-12">
              <p className={`font-mono text-xs sm:text-sm font-semibold tracking-wider mb-2 ${accentColorClass}`}>// Academic Pathway</p>
              <h2 className="text-2xl sm:text-3xl font-bold flex items-center gap-3 text-white mb-3">
                <span className="w-8 h-[2px] bg-sky-500 shrink-0" />
                <span>Education & Academic Foundations</span>
              </h2>
              <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
                Undergraduate degree coursework and foundational computing training at Swami Vivekananda University (SVU), Barrackpore.
              </p>
            </div>

            <div className="max-w-4xl mx-auto space-y-8">
              {EDUCATION_DATA.map((item, idx) => (
                <div
                  key={idx}
                  className="p-6 sm:p-8 rounded-[28px] border bg-slate-900/40 border-slate-800 hover:border-sky-500/30 transition-all shadow-lg"
                >
                  <div className="flex items-center justify-between gap-2 mb-3">
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
                    <span className="text-[11px] uppercase tracking-wider font-semibold text-slate-500 block mb-2 font-mono">Key Coursework Syllabus</span>
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
        </section>

        {/* MILESTONES & LEARNING SECTION */}
        <section id="learning" className="py-20 sm:py-24 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-12">
              <p className={`font-mono text-xs sm:text-sm font-semibold tracking-wider mb-2 ${accentColorClass}`}>// Continuous Progress & Milestones</p>
              <h2 className="text-2xl sm:text-3xl font-bold flex items-center gap-3 text-white mb-3">
                <span className="w-8 h-[2px] bg-sky-500 shrink-0" />
                <span>Learning Milestones & Daily Practice</span>
              </h2>
              <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
                Real, verifiable development habits and academic milestones achieved through daily discipline and curiosity at SVU Barrackpore.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {LEARNING_ACHIEVEMENTS.map((item, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-[28px] border bg-slate-900/40 border-slate-800 hover:border-sky-500/40 transition-all flex flex-col justify-between group shadow-lg"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <div className="w-10 h-10 rounded-2xl bg-slate-800 border border-slate-700/60 flex items-center justify-center text-sky-400 group-hover:scale-110 transition-transform">
                        <DynamicIcon name={item.iconName} className="w-5 h-5" />
                      </div>
                      <span className="text-xs font-mono font-semibold px-3 py-1 rounded-full bg-slate-800 text-sky-300 border border-sky-500/20">
                        {item.metric}
                      </span>
                    </div>
                    <div className="text-xs font-mono text-slate-500 uppercase tracking-wider mb-1">{item.category}</div>
                    <h3 className="text-base sm:text-lg font-bold text-slate-100 mb-2 group-hover:text-sky-400 transition-colors">{item.title}</h3>
                    <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">{item.description}</p>
                  </div>

                  <div className="mt-5 pt-3 border-t border-slate-800 flex items-center justify-between text-xs text-slate-500 font-mono">
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-sky-400" />
                      <span>{item.date}</span>
                    </span>
                    <span className="text-sky-400 font-semibold">{item.badge}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section id="contact" className="py-20 sm:py-24 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-12">
              <p className={`font-mono text-xs sm:text-sm font-semibold tracking-wider mb-2 ${accentColorClass}`}>// Direct Outreach</p>
              <h2 className="text-2xl sm:text-3xl font-bold flex items-center gap-3 text-white mb-3">
                <span className="w-8 h-[2px] bg-sky-500 shrink-0" />
                <span>Let's Connect & Build Together</span>
              </h2>
              <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
                Have an internship opening, freelance web inquiry, college collaboration, or just want to talk software engineering? Drop a direct message!
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Contact Details Card */}
              <div className="lg:col-span-5 space-y-6">
                <div className={`p-6 sm:p-8 rounded-[32px] border ${bgCardClass}`}>
                  <h3 className="text-lg sm:text-xl font-bold mb-2 text-slate-100">Contact Details</h3>
                  <p className="text-xs sm:text-sm text-slate-400 mb-6 leading-relaxed">
                    Feel free to email me directly or connect across developer platforms. I usually respond within 24 hours.
                  </p>

                  <div className="space-y-3">
                    <div className="p-4 rounded-2xl border bg-slate-950/60 border-slate-800 flex items-center justify-between gap-3">
                      <div className="flex items-center gap-3 overflow-hidden">
                        <div className="w-10 h-10 rounded-2xl bg-slate-800 border border-slate-700/60 text-sky-400 flex items-center justify-center shrink-0">
                          <Mail className="w-5 h-5" />
                        </div>
                        <div className="overflow-hidden">
                          <span className="text-[11px] text-slate-400 block font-mono">Email Address</span>
                          <a href={`mailto:${PERSONAL_INFO.email}`} className="text-xs sm:text-sm font-semibold text-slate-200 hover:text-sky-400 transition-colors truncate block font-mono">
                            {PERSONAL_INFO.email}
                          </a>
                        </div>
                      </div>
                      <button
                        type="button"
                        onClick={handleCopyEmail}
                        className="p-2 rounded-xl border border-slate-700 bg-slate-800 text-slate-300 hover:text-white transition-colors shrink-0"
                      >
                        <Copy className={`w-4 h-4 ${copiedEmail ? 'text-emerald-400' : ''}`} />
                      </button>
                    </div>

                    <div className="p-4 rounded-2xl border bg-slate-950/60 border-slate-800 flex items-center gap-3">
                      <div className="w-10 h-10 rounded-2xl bg-slate-800 border border-slate-700/60 text-sky-400 flex items-center justify-center shrink-0">
                        <MapPin className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="text-[11px] text-slate-400 block font-mono">Location</span>
                        <span className="text-xs sm:text-sm font-semibold text-slate-200">{PERSONAL_INFO.location}</span>
                      </div>
                    </div>

                    <div className="p-4 rounded-2xl border bg-slate-950/60 border-slate-800 flex items-center gap-3">
                      <div className="w-10 h-10 rounded-2xl bg-slate-800 border border-slate-700/60 text-emerald-400 flex items-center justify-center shrink-0">
                        <Clock className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="text-[11px] text-slate-400 block font-mono">Current Status</span>
                        <span className="text-xs sm:text-sm font-semibold text-emerald-400">{PERSONAL_INFO.availability}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Message Composer Card */}
              <div className="lg:col-span-7">
                <div className={`p-6 sm:p-8 rounded-[32px] border ${bgCardClass}`}>
                  <h3 className="text-xl font-bold mb-2 text-slate-100">Send a Direct Message</h3>
                  <p className="text-xs sm:text-sm text-slate-400 mb-6">Fill out the form below and I'll get back to you promptly.</p>

                  {contactSuccess && (
                    <div className="mb-6 p-4 rounded-2xl bg-emerald-500/15 border border-emerald-500/40 text-emerald-300 flex items-start gap-3 animate-fadeIn">
                      <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                      <div className="text-xs sm:text-sm">
                        <strong className="block font-semibold">Message sent successfully!</strong>
                        <span>Thank you for reaching out, Rahul Bera will review your note shortly.</span>
                      </div>
                    </div>
                  )}

                  <form onSubmit={handleContactSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="block text-xs font-semibold text-slate-300">Your Name <span className="text-rose-400">*</span></label>
                        <input
                          type="text"
                          value={contactForm.name}
                          onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                          placeholder="e.g. Alex Sharma"
                          className="w-full px-4 py-3 rounded-2xl border text-sm bg-slate-950/80 border-slate-800 text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-sky-500/40"
                        />
                        {contactErrors.name && <span className="text-xs text-rose-400">{contactErrors.name}</span>}
                      </div>

                      <div className="space-y-1.5">
                        <label className="block text-xs font-semibold text-slate-300">Your Email <span className="text-rose-400">*</span></label>
                        <input
                          type="email"
                          value={contactForm.email}
                          onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                          placeholder="alex@example.com"
                          className="w-full px-4 py-3 rounded-2xl border text-sm bg-slate-950/80 border-slate-800 text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-sky-500/40"
                        />
                        {contactErrors.email && <span className="text-xs text-rose-400">{contactErrors.email}</span>}
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label className="block text-xs font-semibold text-slate-300">Subject / Topic <span className="text-rose-400">*</span></label>
                      <input
                        type="text"
                        value={contactForm.subject}
                        onChange={(e) => setContactForm({ ...contactForm, subject: e.target.value })}
                        placeholder="Frontend Internship Opportunity / Collaboration"
                        className="w-full px-4 py-3 rounded-2xl border text-sm bg-slate-950/80 border-slate-800 text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-sky-500/40"
                      />
                      {contactErrors.subject && <span className="text-xs text-rose-400">{contactErrors.subject}</span>}
                    </div>

                    <div className="space-y-1.5">
                      <label className="block text-xs font-semibold text-slate-300">Message <span className="text-rose-400">*</span></label>
                      <textarea
                        rows={4}
                        value={contactForm.message}
                        onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                        placeholder="Hi Rahul, I came across your portfolio and would like to discuss..."
                        className="w-full px-4 py-3 rounded-2xl border text-sm bg-slate-950/80 border-slate-800 text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-sky-500/40 resize-y"
                      />
                      {contactErrors.message && <span className="text-xs text-rose-400">{contactErrors.message}</span>}
                    </div>

                    <button
                      type="submit"
                      disabled={contactSubmitting}
                      className={`w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full font-bold text-sm shadow-lg transition-all cursor-pointer disabled:opacity-50 ${buttonAccentClass}`}
                    >
                      <Send className={`w-4 h-4 ${contactSubmitting ? 'animate-spin' : ''}`} />
                      <span>{contactSubmitting ? 'Dispatching Message...' : 'Send Direct Message'}</span>
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* 5. FOOTER */}
      <footer className="border-t border-slate-800/80 bg-slate-950 text-slate-400 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center pb-8 border-b border-slate-900">
            <div className="md:col-span-5 space-y-2">
              <div className="flex items-center gap-2.5">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center font-mono font-bold text-white text-xs shadow-sm ${buttonAccentClass}`}>
                  RB
                </div>
                <span className="font-bold text-lg text-white tracking-tight">Rahul Bera</span>
              </div>
              <p className="text-xs text-slate-400 max-w-sm leading-relaxed">
                2nd Year BCA Student at Swami Vivekananda University (SVU), Barrackpore. Aspiring Web Developer & Software Engineer.
              </p>
            </div>

            <div className="md:col-span-4 flex flex-wrap gap-x-6 gap-y-2 text-xs font-medium">
              {NAV_ITEMS.map((item) => (
                <button key={item.id} onClick={() => handleNavClick(item.href)} className="hover:text-sky-400 transition-colors">
                  {item.label}
                </button>
              ))}
            </div>

            <div className="md:col-span-3 flex items-center justify-start md:justify-end gap-2.5">
              <a href={PERSONAL_INFO.github} target="_blank" rel="noreferrer" className="p-2.5 rounded-2xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-sky-400 hover:border-sky-500/40 transition-all">
                <Github className="w-4 h-4" />
              </a>
              <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noreferrer" className="p-2.5 rounded-2xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-sky-400 hover:border-sky-500/40 transition-all">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href={`mailto:${PERSONAL_INFO.email}`} className="p-2.5 rounded-2xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-sky-400 hover:border-sky-500/40 transition-all">
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500 text-center sm:text-left font-mono">
            <div>© 2026 Rahul Bera • Crafted with UI/UX Pro Max standards</div>
            <div>Swami Vivekananda University (SVU) Barrackpore • 2nd Year BCA</div>
          </div>
        </div>
      </footer>

      {/* 6. FLOATING BACK TO TOP */}
      {showBackToTop && (
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className={`fixed bottom-6 right-6 z-40 p-3.5 rounded-full text-white shadow-xl hover:scale-110 transition-all border border-sky-400/40 ${buttonAccentClass}`}
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}

      {/* 7. PROJECT DEEP-DIVE & SIMULATOR MODAL */}
      {activeProjectModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn"
          onClick={() => setActiveProjectModal(null)}
        >
          <div
            className="w-full max-w-3xl max-h-[90vh] flex flex-col rounded-[32px] border shadow-2xl overflow-hidden bg-slate-900 border-slate-800 text-slate-100 animate-scaleUp"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between p-5 sm:p-6 border-b border-slate-800/80 bg-slate-950/60">
              <div>
                <span className="text-xs font-mono font-semibold px-3 py-1 rounded-full bg-slate-800 text-sky-300 border border-sky-500/20">
                  {activeProjectModal.categoryLabel}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-100 mt-1">
                  {activeProjectModal.title}
                </h3>
              </div>
              <button
                onClick={() => setActiveProjectModal(null)}
                className="p-2 rounded-full border border-slate-800 text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Tabs */}
            <div className="flex items-center gap-2 px-6 pt-3 border-b border-slate-800/80 bg-slate-950/30 text-xs sm:text-sm font-medium">
              {(['overview', 'features', 'code', 'simulator'] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setProjectModalTab(tab)}
                  className={`pb-3 px-2 border-b-2 font-semibold capitalize transition-colors ${
                    projectModalTab === tab
                      ? 'border-sky-400 text-sky-400'
                      : 'border-transparent text-slate-400 hover:text-slate-200'
                  }`}
                >
                  {tab === 'features' ? `Key Features (${activeProjectModal.features.length})` : tab === 'simulator' ? 'Interactive Sandbox' : tab}
                </button>
              ))}
            </div>

            {/* Modal Content */}
            <div className="p-6 sm:p-8 overflow-y-auto flex-1 text-sm space-y-6">
              {projectModalTab === 'overview' && (
                <div className="space-y-5">
                  <div>
                    <h4 className="text-xs uppercase tracking-wider font-semibold text-slate-400 mb-2 font-mono">// Project Overview</h4>
                    <p className="text-slate-300 leading-relaxed">{activeProjectModal.description}</p>
                  </div>

                  {activeProjectModal.stats && (
                    <div>
                      <h4 className="text-xs uppercase tracking-wider font-semibold text-slate-400 mb-2.5 font-mono">// System Metrics</h4>
                      <div className="grid grid-cols-3 gap-3">
                        {activeProjectModal.stats.map((st, idx) => (
                          <div key={idx} className="p-3.5 rounded-2xl bg-slate-950 border border-slate-800 text-center">
                            <span className="text-[11px] text-slate-500 block">{st.label}</span>
                            <span className="text-sm font-bold text-sky-300 font-mono">{st.value}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  <div>
                    <h4 className="text-xs uppercase tracking-wider font-semibold text-slate-400 mb-2.5 font-mono">// Technologies Stack</h4>
                    <div className="flex flex-wrap gap-2">
                      {activeProjectModal.technologies.map((t, idx) => (
                        <span key={idx} className="px-3 py-1 rounded-full text-xs font-mono bg-slate-800 text-sky-300 border border-sky-500/20">{t}</span>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {projectModalTab === 'features' && (
                <div className="space-y-3">
                  {activeProjectModal.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-3 p-3.5 rounded-2xl bg-slate-950/50 border border-slate-800/80">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm text-slate-300">{feat}</span>
                    </div>
                  ))}
                </div>
              )}

              {projectModalTab === 'code' && activeProjectModal.codeSnippet && (
                <div className="space-y-3">
                  <div className="flex justify-between items-center text-xs font-mono text-slate-400">
                    <span>File Preview: {activeProjectModal.id}.{activeProjectModal.codeSnippet.language}</span>
                    <button
                      type="button"
                      onClick={() => {
                        navigator.clipboard.writeText(activeProjectModal.codeSnippet.code);
                        triggerToast('Code snippet copied!');
                      }}
                      className="inline-flex items-center gap-1 text-sky-400 hover:text-white"
                    >
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </button>
                  </div>
                  <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 text-xs sm:text-sm font-mono overflow-x-auto">
                    <pre className="text-sky-300"><code>{activeProjectModal.codeSnippet.code}</code></pre>
                  </div>
                </div>
              )}

              {projectModalTab === 'simulator' && (
                <div className="space-y-4">
                  {/* Dynamic Simulation Sandbox based on active project */}
                  {activeProjectModal.id === 'ecommerce-shoes' ? (
                    <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-sm text-white">SoleSprint Sneaker Customizer & Cart Simulator</span>
                        <span className="text-xs font-mono text-sky-400">₹3,499.00</span>
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs text-slate-400 block font-mono">Select Shoe Size:</label>
                        <div className="flex gap-2">
                          {['8 US', '9 US', '10 US', '11 US'].map((sz) => (
                            <button
                              key={sz}
                              onClick={() => setShoeSize(sz)}
                              className={`px-3 py-1.5 rounded-xl text-xs font-mono font-bold ${
                                shoeSize === sz ? 'bg-sky-500 text-white' : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                              }`}
                            >
                              {sz}
                            </button>
                          ))}
                        </div>
                      </div>
                      <div className="flex items-center justify-between pt-2">
                        <div className="flex items-center gap-2">
                          <button onClick={() => setShoeQty(Math.max(1, shoeQty - 1))} className="w-7 h-7 rounded-lg bg-slate-800 text-white flex items-center justify-center">-</button>
                          <span className="font-mono text-xs text-white">{shoeQty} Pair(s)</span>
                          <button onClick={() => setShoeQty(shoeQty + 1)} className="w-7 h-7 rounded-lg bg-slate-800 text-white flex items-center justify-center">+</button>
                        </div>
                        <button
                          onClick={() => {
                            setShoeCartAdded(true);
                            setSimOutput(`✓ Added ${shoeQty}x SoleSprint [${shoeSize}] to cart. Subtotal: ₹${(3499 * shoeQty).toLocaleString('en-IN')}`);
                          }}
                          className="px-4 py-2 rounded-xl bg-sky-500 hover:bg-sky-600 text-white text-xs font-bold"
                        >
                          Add to Dynamic Cart
                        </button>
                      </div>
                    </div>
                  ) : activeProjectModal.id === 'student-management' ? (
                    <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-sm text-white">Student GPA & Attendance Calculator Sandbox</span>
                        <span className="text-xs font-mono text-emerald-400">Live Formula</span>
                      </div>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                        {Object.entries(demoMarks).map(([subj, val]) => (
                          <div key={subj} className="space-y-1">
                            <label className="text-[11px] uppercase font-mono text-slate-400">{subj}</label>
                            <input
                              type="number"
                              min="0"
                              max="100"
                              value={val}
                              onChange={(e) => setDemoMarks({ ...demoMarks, [subj]: parseInt(e.target.value) || 0 })}
                              className="w-full px-2.5 py-1.5 rounded-lg bg-slate-900 border border-slate-700 text-xs font-mono text-sky-300"
                            />
                          </div>
                        ))}
                      </div>
                      <button
                        onClick={() => {
                          const total = (demoMarks.math + demoMarks.dsa + demoMarks.oop + demoMarks.web);
                          const gpa = ((total / 4) / 9.5).toFixed(2);
                          setSimOutput(`✓ Calculated Academic Standing: Total Marks = ${total}/400 | SGPA Equivalent = ${gpa} (First Class with Distinction)`);
                        }}
                        className="px-4 py-2 rounded-xl bg-sky-500 hover:bg-sky-600 text-white text-xs font-bold"
                      >
                        Calculate SGPA & Standing
                      </button>
                    </div>
                  ) : (
                    <div className="space-y-3">
                      <p className="text-xs sm:text-sm text-slate-400">Run virtual execution harness for <strong className="text-white">{activeProjectModal.title}</strong>:</p>
                      <button
                        type="button"
                        onClick={() => setSimOutput(`✓ Executed [${activeProjectModal.title}] module with 0 memory faults at ${new Date().toLocaleTimeString()}.`)}
                        className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold ${buttonAccentClass}`}
                      >
                        <Play className="w-4 h-4" />
                        <span>Simulate Execution</span>
                      </button>
                    </div>
                  )}

                  {simOutput && (
                    <div className="p-4 rounded-2xl bg-slate-950 border border-sky-500/30 text-xs font-mono text-sky-300 animate-fadeIn">
                      {simOutput}
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Modal Footer */}
            <div className="p-5 sm:p-6 border-t border-slate-800/80 bg-slate-950/60 flex items-center justify-between">
              <span className="text-xs text-slate-500 font-mono">BCA Academic Project • SVU</span>
              <a
                href={activeProjectModal.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold border border-slate-700 bg-slate-800 text-slate-200 hover:bg-slate-700 hover:text-white transition-colors"
              >
                <Github className="w-4 h-4" />
                <span>GitHub Repository</span>
              </a>
            </div>
          </div>
        </div>
      )}

      {/* 8. ATS RESUME VIEWER MODAL */}
      {resumeModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn"
          onClick={() => setResumeModalOpen(false)}
        >
          <div
            className="w-full max-w-4xl max-h-[92vh] flex flex-col rounded-[32px] border shadow-2xl overflow-hidden bg-slate-900 border-slate-800 text-slate-100 animate-scaleUp"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800/80 bg-slate-950/60">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-sky-400" />
                <span className="font-mono text-xs font-semibold text-slate-300">Rahul_Bera_Resume_BCA2026.pdf</span>
              </div>
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => window.print()}
                  className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold ${buttonAccentClass}`}
                >
                  <Printer className="w-3.5 h-3.5" />
                  <span>Print / PDF</span>
                </button>
                <button
                  onClick={() => setResumeModalOpen(false)}
                  className="p-2 rounded-full border border-slate-800 text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Resume Content */}
            <div className="p-6 sm:p-10 overflow-y-auto flex-1 bg-slate-950 text-slate-200 font-sans space-y-8">
              <div className="border-b border-slate-800 pb-6 space-y-2">
                <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">{PERSONAL_INFO.name}</h1>
                <p className="text-sm sm:text-base text-sky-400 font-medium">{PERSONAL_INFO.role}</p>
                <div className="text-xs space-y-1 font-mono text-slate-400">
                  <div>Email: {PERSONAL_INFO.email} | Location: {PERSONAL_INFO.location}</div>
                  <div>GitHub: github.com/rahulbera-dev | LinkedIn: linkedin.com/in/rahul-bera</div>
                </div>
              </div>

              <div className="space-y-2">
                <h2 className="text-xs uppercase tracking-wider font-bold text-sky-400 border-b border-slate-800/80 pb-1 font-mono">// Professional Summary</h2>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Motivated 2nd-year Bachelor of Computer Applications (BCA) student at Swami Vivekananda University (SVU), Barrackpore, with strong competencies in HTML5, CSS3, JavaScript (ES6+), C++, and Python. Actively seeking software engineering or web development internships to build accessible, high-performance applications.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-xs uppercase tracking-wider font-bold text-sky-400 border-b border-slate-800/80 pb-1 font-mono">// Education</h2>
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

              <div className="space-y-3">
                <h2 className="text-xs uppercase tracking-wider font-bold text-sky-400 border-b border-slate-800/80 pb-1 font-mono">// Technical Skills</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div><strong className="text-slate-100 block mb-1">Languages:</strong> C++, Python, JavaScript (ES6+), HTML5, CSS3</div>
                  <div><strong className="text-slate-100 block mb-1">Frameworks & Tools:</strong> React.js, Tailwind CSS, Git, GitHub, VS Code</div>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="p-4 border-t border-slate-800/80 bg-slate-950/60 flex items-center justify-between text-xs text-slate-400">
              <span>Ready for 2026 internships & projects</span>
              <button
                onClick={() => setResumeModalOpen(false)}
                className="px-5 py-2 rounded-full bg-slate-800 text-slate-200 hover:text-white border border-slate-700 transition-colors font-semibold"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 9. STANDALONE SINGLE-FILE HTML EXPORT MODAL */}
      {exportModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn"
          onClick={() => setExportModalOpen(false)}
        >
          <div
            className="w-full max-w-lg rounded-[32px] border shadow-2xl p-6 sm:p-8 bg-slate-900 border-slate-800 text-slate-100 space-y-5 animate-scaleUp"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Download className="w-5 h-5 text-sky-400" />
                <h3 className="font-bold text-lg text-white">Download Standalone index.html</h3>
              </div>
              <button onClick={() => setExportModalOpen(false)} className="p-1 rounded-full text-slate-400 hover:text-white">
                <X className="w-4 h-4" />
              </button>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Export a 100% self-contained <code className="text-sky-300 font-mono">index.html</code> file with embedded Tailwind, React, and portfolio data that runs locally on your machine without requiring Node.js or a build step.
            </p>

            <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 text-xs font-mono space-y-1.5 text-slate-400">
              <div className="text-slate-200 font-semibold">How to run locally:</div>
              <div>1. Click the button below to download <span className="text-sky-300">index.html</span></div>
              <div>2. Double-click the file to open in Chrome/Edge, OR run <span className="text-sky-300">npx serve</span> in that folder.</div>
            </div>

            <div className="flex gap-3 pt-2">
              <button
                type="button"
                onClick={handleDownloadStandaloneHtml}
                className={`flex-1 py-3 px-4 rounded-xl text-xs font-bold flex items-center justify-center gap-2 ${buttonAccentClass}`}
              >
                <Download className="w-4 h-4" />
                <span>Download index.html</span>
              </button>
              <button
                type="button"
                onClick={() => setExportModalOpen(false)}
                className="py-3 px-4 rounded-xl text-xs font-semibold bg-slate-800 border border-slate-700 text-slate-300 hover:text-white"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
