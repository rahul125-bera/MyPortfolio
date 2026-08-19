import React from 'react';
import {
  GraduationCap,
  Sparkles,
  BookOpen,
  Code,
  Terminal,
  Layers,
  MapPin,
  Mail,
  Calendar,
  CheckCircle2,
  Cpu,
  BrainCircuit,
  Compass
} from 'lucide-react';
import { PERSONAL_INFO, CURRENTLY_LEARNING } from '../data/portfolioData';

interface AboutProps {
  darkMode: boolean;
}

export default function About({ darkMode }: AboutProps) {
  const highlights = [
    {
      icon: <GraduationCap className="w-5 h-5 text-sky-400" />,
      title: '2nd Year BCA Student',
      desc: 'Pursuing Bachelor of Computer Applications at Swami Vivekananda University (SVU), Barrackpore.',
    },
    {
      icon: <Code className="w-5 h-5 text-sky-400" />,
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
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-sky-500/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Immersive UI styling */}
        <div className="max-w-3xl mb-12">
          <p className="text-sky-400 font-mono text-xs sm:text-sm font-semibold tracking-wider mb-2">
            // Academic & Developer Story
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold flex items-center gap-3 text-white mb-3">
            <span className="w-8 h-[2px] bg-sky-500 shrink-0"></span>
            <span>About Rahul Bera</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            A genuine student journey focused on practical skill acquisition, clean coding, and meaningful software projects at SVU Barrackpore.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
          
          {/* Left Column: Genuine Student Story in rounded-[32px] container */}
          <div className="lg:col-span-7 space-y-6">
            <div
              className={`p-6 sm:p-8 rounded-[32px] border transition-all ${
                darkMode
                  ? 'bg-slate-900/40 border-slate-800 text-slate-200'
                  : 'bg-white border-slate-200 shadow-sm text-slate-800'
              }`}
            >
              <h3 className="text-xl font-bold mb-4 flex items-center justify-between">
                <span>Student Developer Bio</span>
                <span className="text-xs font-mono font-medium text-sky-400 px-3 py-1 rounded-full bg-slate-800 border border-sky-500/20">
                  SVU Barrackpore
                </span>
              </h3>

              <div className="space-y-4 text-slate-300 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
                <p>
                  Hello! I'm <strong className="text-white font-semibold">Rahul Bera</strong>, a 2nd-year Bachelor of Computer Applications (BCA) undergraduate at <strong className="text-sky-400">Swami Vivekananda University (SVU), Barrackpore</strong>.
                </p>
                <p>
                  My journey with technology started with curiosity about how interactive websites work under the hood. Over the past two years of my BCA curriculum and continuous self-study, I have developed a strong foundation in <span className="text-white font-medium">HTML5, CSS3, JavaScript, C++, and Python</span>.
                </p>
                <p>
                  I enjoy solving coding problems, architecting responsive layouts, and turning concepts into functional web applications. Whether it's crafting an e-commerce interface, building a student management system, or writing modular C++ algorithms, I care deeply about clean code, good user experience, and practical software design.
                </p>
                <p>
                  I am actively seeking <strong className="text-sky-400 font-semibold">internship opportunities, freelance projects, and technical collaborations</strong> where I can contribute my frontend and programming skills, learn from experienced engineering teams, and grow into a versatile software engineer.
                </p>
              </div>

              {/* Quick Info Grid */}
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

            {/* Core Pillars Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {highlights.map((item, idx) => (
                <div
                  key={idx}
                  className={`p-5 rounded-[24px] border transition-all ${
                    darkMode
                      ? 'bg-slate-900/40 border-slate-800 hover:border-slate-700'
                      : 'bg-white border-slate-200 shadow-sm hover:border-slate-300'
                  }`}
                >
                  <div className="mb-3">{item.icon}</div>
                  <h4 className="font-bold text-sm sm:text-base text-slate-100 dark:text-slate-100 mb-1">
                    {item.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Currently Learning & Academic Focus */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Currently Learning Box */}
            <div
              className={`p-6 sm:p-7 rounded-[32px] border transition-all ${
                darkMode
                  ? 'bg-slate-900/40 border-slate-800'
                  : 'bg-white border-slate-200 shadow-sm'
              }`}
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold flex items-center gap-2 text-white">
                  <BookOpen className="w-5 h-5 text-sky-400" />
                  <span>Currently Learning</span>
                </h3>
                <span className="text-xs font-mono px-3 py-1 rounded-full bg-slate-800 text-sky-300 border border-sky-500/20">
                  Active Focus
                </span>
              </div>

              <p className="text-xs sm:text-sm text-slate-400 mb-5">
                Technologies and computer science subjects I am actively mastering during my 2nd year:
              </p>

              <div className="space-y-3">
                {CURRENTLY_LEARNING.map((item, idx) => (
                  <div
                    key={idx}
                    className={`p-4 rounded-2xl border transition-all hover:border-sky-500/30 ${
                      darkMode
                        ? 'bg-slate-950/60 border-slate-800 text-slate-200'
                        : 'bg-slate-50 border-slate-200 text-slate-800'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-bold text-sm text-slate-100">
                        {item.name}
                      </span>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-slate-800 text-sky-300 border border-sky-500/20">
                        {item.tag}
                      </span>
                    </div>
                    <p className="text-xs text-slate-400 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Developer Philosophy Card */}
            <div
              className={`p-6 sm:p-7 rounded-[32px] border ${
                darkMode
                  ? 'bg-slate-900/40 border-slate-800'
                  : 'bg-slate-50 border-slate-200 shadow-sm'
              }`}
            >
              <div className="flex items-center gap-2 mb-4 text-sky-400 font-bold text-sm">
                <Compass className="w-4 h-4" />
                <span>My Approach & Work Ethic</span>
              </div>
              <ul className="space-y-3 text-xs sm:text-sm text-slate-300 dark:text-slate-300">
                <li className="flex items-start gap-2.5">
                  <span className="text-sky-400 font-bold font-mono">01.</span>
                  <span><strong className="text-white">Fundamentals First:</strong> Strong grasp of core data structures, syntax, and standard conventions before jumping into complex frameworks.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-sky-400 font-bold font-mono">02.</span>
                  <span><strong className="text-white">Clean & Maintainable:</strong> Writing readable code with semantic tags, modular components, and understandable naming.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-sky-400 font-bold font-mono">03.</span>
                  <span><strong className="text-white">Continuous Practice:</strong> Solving algorithmic challenges and creating real portfolio projects that provide value.</span>
                </li>
              </ul>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
