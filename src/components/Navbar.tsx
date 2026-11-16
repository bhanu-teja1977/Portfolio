import React, { useState, useEffect } from 'react';
import { Download, Terminal } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface NavbarProps {
  onOpenTerminal?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenTerminal }) => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      return (
        document.documentElement.classList.contains('dark') ||
        localStorage.theme === 'dark' ||
        (!('theme' in localStorage) &&
          window.matchMedia('(prefers-color-scheme: dark)').matches)
      );
    }
    return false;
  });

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.theme = 'light';
    }
  }, [isDarkMode]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  const navLinks = [
    { label: 'Home', href: '#top' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills-section' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#work' },
    { label: 'Achievements', href: '#achievements' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <nav
        className={`w-full fixed top-0 left-0 px-5 z-[1000] lg:px-8 xl:px-[7%] py-3.5 flex items-center justify-between transition-all duration-300 ${
          isScrolled
            ? 'bg-white/80 dark:bg-[#0c101d]/85 backdrop-blur-md shadow-sm border-b border-gray-200/50 dark:border-white/10'
            : 'bg-transparent'
        }`}
      >
        {/* Brand Name */}
        <a className="flex items-center gap-2.5 cursor-pointer group" href="#top">
          <img
            src="/images/bhanu_portrait.jpg"
            alt="Bhanu Teja"
            className="w-9 h-9 rounded-full object-cover object-top border-2 border-purple-500/40 shadow-sm group-hover:scale-105 transition-transform"
          />
          <span className="font-Ovo text-2xl md:text-3xl text-neutral-900 dark:text-white font-bold tracking-tight">
            Bhanu Teja
          </span>
        </a>

        {/* Center Floating Pill Navigation */}
        <ul
          className={`hidden lg:flex items-center gap-5 xl:gap-7 rounded-full px-8 py-2 font-Outfit text-sm transition-all duration-300 ${
            isScrolled
              ? 'bg-transparent shadow-none dark:border-transparent'
              : 'bg-white/70 shadow-sm backdrop-blur-md dark:border dark:border-white/20 dark:bg-neutral-900/60'
          }`}
        >
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                className="hover:text-purple-600 dark:hover:text-sky-400 transition text-neutral-700 dark:text-neutral-200 font-medium"
                href={link.href}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Right Actions: Terminal, Theme Toggle, Resume & Contact */}
        <div className="flex items-center gap-2.5 sm:gap-3">
          {/* CLI Terminal Trigger */}
          {onOpenTerminal && (
            <button
              onClick={onOpenTerminal}
              aria-label="Open Interactive CLI Terminal"
              title="Interactive Terminal (Ctrl+K or `)"
              className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-gray-300 dark:border-white/20 text-xs font-mono text-neutral-700 dark:text-slate-300 hover:border-sky-500 hover:text-sky-500 transition active:scale-95 cursor-pointer"
            >
              <Terminal className="w-3.5 h-3.5 text-sky-500" />
              <span>CLI</span>
            </button>
          )}

          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle dark mode"
            className="cursor-pointer flex items-center justify-center p-2 rounded-full border border-gray-200 dark:border-white/10 hover:bg-gray-100 dark:hover:bg-neutral-800 transition active:scale-95"
          >
            <img
              src="/assets/moon_icon.png"
              alt="Toggle Dark Mode"
              className="w-5 dark:hidden"
            />
            <img
              src="/assets/sun_icon.png"
              alt="Toggle Light Mode"
              className="w-5 hidden dark:block"
            />
          </button>

          {/* Resume Download Pill Button */}
          <a
            className="hidden sm:flex items-center gap-1.5 px-4 py-1.5 border border-purple-500/40 bg-purple-500/10 hover:bg-purple-500/20 text-purple-700 dark:text-purple-300 rounded-full font-Outfit text-xs font-semibold transition active:scale-95"
            href={PERSONAL_INFO.resumeUrl}
            download="Aitha_Bhanu_Teja_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Resume</span>
          </a>

          {/* Contact CTA Button */}
          <a
            className="flex items-center gap-2 px-4 py-1.5 bg-neutral-900 hover:bg-black dark:bg-white dark:text-neutral-900 text-white rounded-full font-Outfit text-xs font-semibold transition active:scale-95 shadow-sm"
            href="#contact"
          >
            <span>Contact</span>
          </a>

          {/* Mobile Menu Hamburger */}
          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className="block lg:hidden ml-1 p-1.5 focus:outline-none cursor-pointer"
            aria-label="Open navigation menu"
          >
            <img
              alt="Menu Icon"
              className="w-6 dark:hidden"
              src="/assets/menu-black.png"
            />
            <img
              alt="Menu Icon"
              className="w-6 hidden dark:block"
              src="/assets/menu-white.png"
            />
          </button>
        </div>
      </nav>

      {/* Mobile Slide-Out Drawer Navigation */}
      <ul
        style={{
          transform: isMobileMenuOpen ? 'translateX(0)' : 'translateX(100%)',
        }}
        className="flex lg:hidden flex-col gap-5 py-20 px-8 fixed right-0 top-0 bottom-0 w-72 z-[2000] h-screen bg-white dark:bg-[#0c101d] transition-transform duration-300 font-Outfit text-neutral-900 dark:text-white shadow-2xl border-l border-gray-200 dark:border-white/10"
      >
        <div
          className="absolute right-6 top-6 cursor-pointer p-2 rounded-full hover:bg-gray-100 dark:hover:bg-neutral-800 transition"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <img
            alt="Close Icon"
            className="w-5 dark:hidden"
            src="/assets/close-black.png"
          />
          <img
            alt="Close Icon"
            className="w-5 hidden dark:block"
            src="/assets/close-white.png"
          />
        </div>

        <div className="mb-2 pb-4 border-b border-gray-200 dark:border-white/10">
          <p className="font-bold text-lg">Bhanu Teja</p>
          <p className="text-xs text-neutral-500 dark:text-neutral-400">AI/ML Engineer & Full-Stack Developer</p>
        </div>

        {navLinks.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="hover:text-purple-600 dark:hover:text-sky-400 transition text-base block py-1 font-medium"
            >
              {link.label}
            </a>
          </li>
        ))}

        <li className="pt-4 border-t border-gray-200 dark:border-white/10 space-y-3">
          <a
            href={PERSONAL_INFO.resumeUrl}
            download="Aitha_Bhanu_Teja_Resume.pdf"
            className="flex items-center justify-center gap-2 w-full py-2.5 rounded-full border border-purple-500/40 bg-purple-500/10 text-purple-700 dark:text-purple-300 text-sm font-semibold"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <Download className="w-4 h-4" />
            <span>Download Resume</span>
          </a>

          {onOpenTerminal && (
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenTerminal();
              }}
              className="flex items-center justify-center gap-2 w-full py-2.5 rounded-full border border-gray-300 dark:border-white/20 text-xs font-mono text-sky-500"
            >
              <Terminal className="w-4 h-4" />
              <span>Launch CLI Terminal</span>
            </button>
          )}
        </li>
      </ul>
    </>
  );
};

export default Navbar;
