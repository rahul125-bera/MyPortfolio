import { Skill, Project, EducationItem, LearningItem } from '../types';

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
  buildUsefulThings: () => {
    return "Writing clean, responsive and user-friendly code.";
  }
};`,
  cpp: `// C++ Data Structures & Algorithms Practice
#include <iostream>
#include <vector>
#include <string>

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
  background: linear-gradient(135deg, #090d16, #0e1726);
  border: 1px solid rgba(6, 182, 212, 0.2);
  border-radius: 1rem;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
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
    imageAccent: 'from-cyan-500/20 to-blue-500/20',
    technologies: ['React 19', 'Tailwind CSS', 'TypeScript', 'Motion', 'Vite'],
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
    } else {
        std::cout << "Error: Insufficient funds or invalid amount." << std::endl;
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
    status: 'In Progress (Expected Graduation: 2027)',
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
    coursework: [
      'Computer Science',
      'Mathematics',
      'Physics',
      'English'
    ],
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
    description: 'Regularly leading lab assignments, assisting batchmates with C++ syntax debugging and HTML/CSS web layout implementations during college practicals.',
    metric: 'Lab Contributor',
    icon: 'GraduationCap',
    date: 'SVU Barrackpore',
  },
  {
    title: 'Continuous Self-Directed Learning',
    category: 'Self-Improvement',
    description: 'Dedicates 15+ hours weekly outside university lectures to study modern developer roadmaps, technical documentation, and web standards.',
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
