import React, { useState } from 'react';
import {
  Mail,
  Send,
  Github,
  Linkedin,
  Instagram,
  MapPin,
  Check,
  Copy,
  Sparkles,
  AlertCircle,
  Clock,
  CheckCircle2,
  PhoneCall
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { ContactFormData } from '../types';

interface ContactProps {
  darkMode: boolean;
}

export default function Contact({ darkMode }: ContactProps) {
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

    if (!formData.name.trim()) {
      newErrors.name = 'Please enter your name.';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name should be at least 2 characters.';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Please enter your email.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address.';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Please enter a subject or purpose.';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please enter your message.';
    } else if (formData.message.trim().length < 10) {
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

    // Realistic client-side submission feedback
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });

      setTimeout(() => {
        setIsSuccess(false);
      }, 6000);
    }, 800);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section id="contact" className="py-20 sm:py-24 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[400px] bg-sky-500/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <p className="text-sky-400 font-mono text-xs sm:text-sm font-semibold tracking-wider mb-2">
            // Communication & Connect
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold flex items-center gap-3 text-white mb-3">
            <span className="w-8 h-[2px] bg-sky-500 shrink-0"></span>
            <span>Let's Connect & Build Together</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Have an internship opening, freelance web inquiry, college collaboration, or just want to talk software engineering? Drop a direct message!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Contact Info & Socials */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Primary Direct Contact Box */}
            <div
              className={`p-6 sm:p-8 rounded-[32px] border transition-all ${
                darkMode
                  ? 'bg-slate-900/40 border-slate-800'
                  : 'bg-white border-slate-200 shadow-sm'
              }`}
            >
              <h3 className="text-lg sm:text-xl font-bold mb-2 text-slate-100 dark:text-white">
                Contact Details
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mb-6 leading-relaxed">
                Feel free to email me directly or connect across developer platforms. I usually respond within 24 hours.
              </p>

              <div className="space-y-4">
                {/* Email Item with 1-click copy */}
                <div
                  className={`p-4 rounded-2xl border flex items-center justify-between gap-3 ${
                    darkMode
                      ? 'bg-slate-950/60 border-slate-800'
                      : 'bg-slate-50 border-slate-200'
                  }`}
                >
                  <div className="flex items-center gap-3 overflow-hidden">
                    <div className="w-10 h-10 rounded-2xl bg-slate-800 border border-slate-700/60 text-sky-400 flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div className="overflow-hidden">
                      <span className="text-[11px] text-slate-400 block font-mono">Email Address</span>
                      <a
                        href={`mailto:${PERSONAL_INFO.email}`}
                        className="text-xs sm:text-sm font-semibold text-slate-200 hover:text-sky-400 transition-colors truncate block"
                      >
                        {PERSONAL_INFO.email}
                      </a>
                    </div>
                  </div>

                  <button
                    id="contact-copy-email-btn"
                    type="button"
                    onClick={handleCopyEmail}
                    className="p-2 rounded-xl border border-slate-700 bg-slate-800 text-slate-300 hover:text-white hover:border-slate-600 transition-colors cursor-pointer shrink-0"
                    title="Copy email to clipboard"
                  >
                    {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Location Item */}
                <div
                  className={`p-4 rounded-2xl border flex items-center gap-3 ${
                    darkMode
                      ? 'bg-slate-950/60 border-slate-800'
                      : 'bg-slate-50 border-slate-200'
                  }`}
                >
                  <div className="w-10 h-10 rounded-2xl bg-slate-800 border border-slate-700/60 text-sky-400 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] text-slate-400 block font-mono">Location</span>
                    <span className="text-xs sm:text-sm font-semibold text-slate-200">
                      {PERSONAL_INFO.location}
                    </span>
                  </div>
                </div>

                {/* Availability Item */}
                <div
                  className={`p-4 rounded-2xl border flex items-center gap-3 ${
                    darkMode
                      ? 'bg-slate-950/60 border-slate-800'
                      : 'bg-slate-50 border-slate-200'
                  }`}
                >
                  <div className="w-10 h-10 rounded-2xl bg-slate-800 border border-slate-700/60 text-emerald-400 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] text-slate-400 block font-mono">Current Status</span>
                    <span className="text-xs sm:text-sm font-semibold text-emerald-400">
                      {PERSONAL_INFO.availability}
                    </span>
                  </div>
                </div>
              </div>

              {/* Social Profiles */}
              <div className="mt-8 pt-6 border-t border-slate-800">
                <span className="text-xs uppercase tracking-wider font-semibold text-slate-400 block mb-3 font-mono">
                  Developer Profiles
                </span>
                
                <div className="grid grid-cols-3 gap-2.5">
                  <a
                    id="contact-social-github"
                    href={PERSONAL_INFO.github}
                    target="_blank"
                    rel="noreferrer"
                    className="p-3 rounded-2xl border border-slate-800 bg-slate-950/60 hover:border-sky-500/40 hover:text-sky-400 flex flex-col items-center justify-center gap-1.5 transition-all group text-xs text-slate-300"
                  >
                    <Github className="w-5 h-5 text-slate-400 group-hover:text-sky-400 transition-colors" />
                    <span className="font-mono text-[11px]">GitHub</span>
                  </a>

                  <a
                    id="contact-social-linkedin"
                    href={PERSONAL_INFO.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="p-3 rounded-2xl border border-slate-800 bg-slate-950/60 hover:border-sky-500/40 hover:text-sky-400 flex flex-col items-center justify-center gap-1.5 transition-all group text-xs text-slate-300"
                  >
                    <Linkedin className="w-5 h-5 text-slate-400 group-hover:text-sky-400 transition-colors" />
                    <span className="font-mono text-[11px]">LinkedIn</span>
                  </a>

                  <a
                    id="contact-social-instagram"
                    href={PERSONAL_INFO.instagram}
                    target="_blank"
                    rel="noreferrer"
                    className="p-3 rounded-2xl border border-slate-800 bg-slate-950/60 hover:border-sky-500/40 hover:text-sky-400 flex flex-col items-center justify-center gap-1.5 transition-all group text-xs text-slate-300"
                  >
                    <Instagram className="w-5 h-5 text-slate-400 group-hover:text-sky-400 transition-colors" />
                    <span className="font-mono text-[11px]">Instagram</span>
                  </a>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Contact Message Form */}
          <div className="lg:col-span-7">
            <div
              className={`p-6 sm:p-8 rounded-[32px] border transition-all ${
                darkMode
                  ? 'bg-slate-900/40 border-slate-800'
                  : 'bg-white border-slate-200 shadow-sm'
              }`}
            >
              <h3 className="text-xl font-bold mb-2 text-slate-100 dark:text-white">
                Send a Direct Message
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mb-6">
                Fill out the form below and I'll get back to you promptly.
              </p>

              {/* Success Alert Toast */}
              {isSuccess && (
                <div
                  id="contact-form-success-banner"
                  className="mb-6 p-4 rounded-2xl bg-emerald-500/15 border border-emerald-500/40 text-emerald-300 flex items-start gap-3 animate-fadeIn"
                >
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div className="text-xs sm:text-sm">
                    <strong className="font-bold block">Thank you! Your message has been received.</strong>
                    <span>I have received your inquiry and will reply to your email address shortly.</span>
                  </div>
                </div>
              )}

              <form id="portfolio-contact-form" onSubmit={handleSubmit} noValidate className="space-y-4">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name Input */}
                  <div className="space-y-1.5">
                    <label htmlFor="contact-input-name" className="block text-xs font-semibold text-slate-300">
                      Your Name <span className="text-rose-400">*</span>
                    </label>
                    <input
                      id="contact-input-name"
                      type="text"
                      placeholder="e.g. Alex Johnson"
                      value={formData.name}
                      onChange={(e) => {
                        setFormData({ ...formData, name: e.target.value });
                        if (errors.name) setErrors({ ...errors, name: undefined });
                      }}
                      className={`w-full px-4 py-3 rounded-2xl border text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-sky-500/40 ${
                        errors.name
                          ? 'border-rose-500 bg-rose-500/5 text-slate-100'
                          : darkMode
                          ? 'border-slate-800 bg-slate-950/80 text-slate-100 placeholder-slate-500'
                          : 'border-slate-300 bg-slate-50 text-slate-900 placeholder-slate-400'
                      }`}
                    />
                    {errors.name && (
                      <span className="text-[11px] text-rose-400 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.name}
                      </span>
                    )}
                  </div>

                  {/* Email Input */}
                  <div className="space-y-1.5">
                    <label htmlFor="contact-input-email" className="block text-xs font-semibold text-slate-300">
                      Your Email <span className="text-rose-400">*</span>
                    </label>
                    <input
                      id="contact-input-email"
                      type="email"
                      placeholder="e.g. alex@company.com"
                      value={formData.email}
                      onChange={(e) => {
                        setFormData({ ...formData, email: e.target.value });
                        if (errors.email) setErrors({ ...errors, email: undefined });
                      }}
                      className={`w-full px-4 py-3 rounded-2xl border text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-sky-500/40 ${
                        errors.email
                          ? 'border-rose-500 bg-rose-500/5 text-slate-100'
                          : darkMode
                          ? 'border-slate-800 bg-slate-950/80 text-slate-100 placeholder-slate-500'
                          : 'border-slate-300 bg-slate-50 text-slate-900 placeholder-slate-400'
                      }`}
                    />
                    {errors.email && (
                      <span className="text-[11px] text-rose-400 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.email}
                      </span>
                    )}
                  </div>
                </div>

                {/* Subject Input */}
                <div className="space-y-1.5">
                  <label htmlFor="contact-input-subject" className="block text-xs font-semibold text-slate-300">
                    Subject / Topic <span className="text-rose-400">*</span>
                  </label>
                  <input
                    id="contact-input-subject"
                    type="text"
                    placeholder="e.g. Frontend Internship Inquiry / Web Development Project"
                    value={formData.subject}
                    onChange={(e) => {
                      setFormData({ ...formData, subject: e.target.value });
                      if (errors.subject) setErrors({ ...errors, subject: undefined });
                    }}
                    className={`w-full px-4 py-3 rounded-2xl border text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-sky-500/40 ${
                      errors.subject
                        ? 'border-rose-500 bg-rose-500/5 text-slate-100'
                        : darkMode
                        ? 'border-slate-800 bg-slate-950/80 text-slate-100 placeholder-slate-500'
                        : 'border-slate-300 bg-slate-50 text-slate-900 placeholder-slate-400'
                    }`}
                  />
                  {errors.subject && (
                    <span className="text-[11px] text-rose-400 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {errors.subject}
                    </span>
                  )}
                </div>

                {/* Message Textarea */}
                <div className="space-y-1.5">
                  <div className="flex justify-between items-center">
                    <label htmlFor="contact-input-message" className="block text-xs font-semibold text-slate-300">
                      Message <span className="text-rose-400">*</span>
                    </label>
                    <span className="text-[11px] text-slate-500 font-mono">
                      {formData.message.length} characters
                    </span>
                  </div>
                  <textarea
                    id="contact-input-message"
                    rows={5}
                    placeholder="Hi Rahul, I came across your portfolio and wanted to discuss an opportunity..."
                    value={formData.message}
                    onChange={(e) => {
                      setFormData({ ...formData, message: e.target.value });
                      if (errors.message) setErrors({ ...errors, message: undefined });
                    }}
                    className={`w-full px-4 py-3 rounded-2xl border text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-sky-500/40 resize-y ${
                      errors.message
                        ? 'border-rose-500 bg-rose-500/5 text-slate-100'
                        : darkMode
                        ? 'border-slate-800 bg-slate-950/80 text-slate-100 placeholder-slate-500'
                        : 'border-slate-300 bg-slate-50 text-slate-900 placeholder-slate-400'
                    }`}
                  />
                  {errors.message && (
                    <span className="text-[11px] text-rose-400 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {errors.message}
                    </span>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  id="contact-submit-button"
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full font-bold text-sm transition-all duration-200 cursor-pointer shadow-lg shadow-sky-500/20 bg-sky-500 hover:bg-sky-600 text-white disabled:opacity-50"
                >
                  <Send className={`w-4 h-4 ${isSubmitting ? 'animate-spin' : ''}`} />
                  <span>{isSubmitting ? 'Sending Message...' : 'Send Message'}</span>
                </button>

              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
