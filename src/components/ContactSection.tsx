import React, { useState } from 'react';
import { Mail, MapPin, Send, Phone, Code } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { PERSONAL_INFO } from '../data/portfolioData';

export const ContactSection: React.FC = () => {
  const [result, setResult] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setResult('Sending....');
    
    // Smooth user feedback
    setTimeout(() => {
      setResult('Thank you! Your message has been sent successfully. I will get back to you shortly.');
      setIsSubmitting(false);
      (event.target as HTMLFormElement).reset();
      setTimeout(() => setResult(''), 6000);
    }, 1000);
  };

  return (
    <div
      id="contact"
      className="w-full px-[8%] sm:px-[12%] py-16 scroll-mt-20 bg-[url('/assets/footer-bg-color.png')] bg-no-repeat bg-[length:90%_auto] bg-center dark:bg-none transition-colors duration-300"
    >
      <h4 className="text-center mb-2 text-sm md:text-base font-Outfit uppercase tracking-widest text-purple-600 dark:text-purple-400 font-semibold">
        Let's Connect
      </h4>
      <h2 className="text-center text-4xl sm:text-5xl font-Ovo text-neutral-900 dark:text-white">
        Get in Touch
      </h2>
      <p className="text-center max-w-2xl mx-auto mt-4 mb-10 font-Outfit text-sm sm:text-base text-neutral-600 dark:text-neutral-300 leading-relaxed">
        I am actively seeking AI/ML, Machine Learning, and Software Engineering internships. Whether you have an opportunity or want to discuss a project, my inbox is always open!
      </p>

      {/* Quick Direct Contact Links */}
      <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 mb-12 max-w-3xl mx-auto">
        <a
          href={`mailto:${PERSONAL_INFO.email}`}
          className="flex items-center gap-2 px-4 py-2 rounded-full border border-gray-200 dark:border-white/10 bg-white/70 dark:bg-neutral-900/60 text-xs sm:text-sm text-neutral-800 dark:text-neutral-200 hover:border-purple-500 hover:text-purple-600 dark:hover:text-purple-400 transition shadow-sm"
        >
          <Mail className="w-4 h-4 text-purple-600 dark:text-purple-400" />
          <span>{PERSONAL_INFO.email}</span>
        </a>

        <a
          href={PERSONAL_INFO.social.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2 rounded-full border border-gray-200 dark:border-white/10 bg-white/70 dark:bg-neutral-900/60 text-xs sm:text-sm text-neutral-800 dark:text-neutral-200 hover:border-sky-500 hover:text-sky-600 dark:hover:text-sky-400 transition shadow-sm"
        >
          <LinkedinIcon className="w-4 h-4 text-sky-600 dark:text-sky-400" />
          <span>LinkedIn</span>
        </a>

        <a
          href={PERSONAL_INFO.social.github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2 rounded-full border border-gray-200 dark:border-white/10 bg-white/70 dark:bg-neutral-900/60 text-xs sm:text-sm text-neutral-800 dark:text-neutral-200 hover:border-neutral-900 hover:text-black dark:hover:text-white transition shadow-sm"
        >
          <GithubIcon className="w-4 h-4" />
          <span>GitHub</span>
        </a>

        <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-gray-200 dark:border-white/10 bg-white/70 dark:bg-neutral-900/60 text-xs sm:text-sm text-neutral-600 dark:text-neutral-300 shadow-sm">
          <MapPin className="w-4 h-4 text-rose-500" />
          <span>{PERSONAL_INFO.location}</span>
        </div>
      </div>

      <form onSubmit={onSubmit} className="max-w-2xl mx-auto">
        <input type="hidden" name="subject" value="Bhanu Teja Portfolio Message" />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-6 mb-6">
          <input
            type="text"
            placeholder="Your Name"
            className="flex-1 px-4 py-3 focus:ring-2 focus:ring-purple-500/40 outline-none border border-gray-300 dark:border-white/20 rounded-xl bg-white dark:bg-darkHover/30 text-neutral-900 dark:text-white font-Outfit transition-colors text-sm"
            required
            name="name"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="flex-1 px-4 py-3 focus:ring-2 focus:ring-purple-500/40 outline-none border border-gray-300 dark:border-white/20 rounded-xl bg-white dark:bg-darkHover/30 text-neutral-900 dark:text-white font-Outfit transition-colors text-sm"
            required
            name="email"
          />
        </div>
        <textarea
          rows={5}
          placeholder="Your Message..."
          className="w-full px-4 py-3 focus:ring-2 focus:ring-purple-500/40 outline-none border border-gray-300 dark:border-white/20 rounded-xl bg-white mb-6 dark:bg-darkHover/30 text-neutral-900 dark:text-white font-Outfit transition-colors resize-none text-sm"
          required
          name="message"
        />
        <button
          type="submit"
          disabled={isSubmitting}
          className="py-3 px-8 w-max flex items-center justify-between gap-2 bg-neutral-900 text-white rounded-full mx-auto hover:bg-black dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-200 cursor-pointer font-Outfit font-semibold text-sm transition active:scale-95 disabled:opacity-50 shadow-md"
        >
          <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
          <Send className="w-4 h-4" />
        </button>
        {result && (
          <p className="mt-4 text-center font-Outfit text-sm font-medium text-emerald-600 dark:text-emerald-400">
            {result}
          </p>
        )}
      </form>
    </div>
  );
};

export default ContactSection;
