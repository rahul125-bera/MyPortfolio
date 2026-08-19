export interface NavItem {
  id: string;
  label: string;
  href: string;
}

export interface Skill {
  name: string;
  category: 'frontend' | 'programming' | 'tools' | 'design';
  level: number; // 0 to 100
  experienceLabel: string; // e.g. "Proficient", "Intermediate", "Learning"
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
