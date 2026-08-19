import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 350);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  if (!isVisible) return null;

  return (
    <button
      id="back-to-top-button"
      type="button"
      onClick={scrollToTop}
      aria-label="Scroll to top of page"
      className="fixed bottom-6 right-6 z-40 p-3.5 rounded-full bg-sky-500 text-white shadow-lg shadow-sky-500/30 hover:bg-sky-600 hover:scale-110 hover:shadow-sky-500/50 transition-all duration-200 cursor-pointer animate-fadeIn border border-sky-400/40"
    >
      <ArrowUp className="w-5 h-5 font-bold" />
    </button>
  );
}
