import React from 'react';
import { Cover } from './ui/Cover';
import { MaskContainer } from './ui/MaskContainer';
import { Download, ArrowRight, Code } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroProps {
  onOpenTerminal?: () => void;
}

export const Hero: React.FC<HeroProps> = () => {
  return (
    <header id="top" className="relative w-full h-screen overflow-hidden flex items-center justify-center">
      {/* Background Top Corner Glow */}
      <div className="fixed top-0 right-0 w-11/12 max-w-5xl -z-10 translate-y-[-80%] pointer-events-none dark:hidden select-none">
        <img alt="" className="w-full opacity-90" src="/assets/header-bg-color.png" />
      </div>

      <MaskContainer
        className="w-full h-full"
        revealSize={600}
        size={30}
        revealText={
          <div className="w-11/12 max-w-4xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-3.5 select-none pt-16 sm:pt-0">
            {/* 1. Avatar Spacer */}
            <div className="rounded-full w-28 h-28 sm:w-32 sm:h-32 invisible" />

            {/* 2. Greeting Spacer */}
            <h3 className="h-9 invisible text-base md:text-2xl font-Ovo">
              Hello, I'm Bhanu Teja
            </h3>

            {/* 3. Central H1 (Revealed on hover) */}
            <h1 className="text-3xl sm:text-5xl lg:text-[56px] font-Ovo leading-tight text-black dark:text-white cursor-pointer px-2">
              Engineering Practical AI Systems & Resilient Architectures
            </h1>

            {/* 4. Tagline Spacer */}
            <p className="text-base sm:text-xl font-Outfit font-semibold invisible">
              AI & Machine Learning Engineer • Full-Stack Developer • Problem Solver
            </p>

            {/* 5. Bio Spacer */}
            <p className="max-w-2xl mx-auto font-Ovo text-xs sm:text-sm md:text-base leading-relaxed invisible px-4">
              Pre-final year B.Tech in AI & ML at VNR VJIET (9.42 CGPA). Specializing in explainable machine learning, digital twins, high-throughput backend services, and algorithmic problem solving.
            </p>

            {/* 6. Buttons Spacer */}
            <div className="flex flex-wrap items-center justify-center gap-3 mt-2 invisible">
              <div className="px-6 py-2.5 h-[42px] rounded-full border">
                <span>Contact</span>
              </div>
            </div>
          </div>
        }
      >
        <div className="w-11/12 max-w-4xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-3.5 select-none pt-16 sm:pt-0">
          {/* 1. Avatar Spacer */}
          <div className="rounded-full w-28 h-28 sm:w-32 sm:h-32 invisible" />

          {/* 2. Greeting Spacer */}
          <h3 className="h-9 invisible text-base md:text-2xl font-Ovo">
            Hello, I'm Bhanu Teja
          </h3>

          {/* 3. Central H1 (Base behind mask) */}
          <h1 className="text-3xl sm:text-5xl lg:text-[56px] font-Ovo leading-tight text-white dark:text-slate-300 font-bold px-2">
            Solving Real-World Problems Through Machine Learning & Scalable Code
          </h1>

          {/* 4. Tagline Spacer */}
          <p className="text-base sm:text-xl font-Outfit font-semibold invisible">
            AI & Machine Learning Engineer • Full-Stack Developer • Problem Solver
          </p>

          {/* 5. Bio Spacer */}
          <p className="max-w-2xl mx-auto font-Ovo text-xs sm:text-sm md:text-base leading-relaxed invisible px-4">
            Pre-final year B.Tech in AI & ML at VNR VJIET (9.42 CGPA). Specializing in explainable machine learning, digital twins, high-throughput backend services, and algorithmic problem solving.
          </p>

          {/* 6. Buttons Spacer */}
          <div className="flex flex-wrap items-center justify-center gap-3 mt-2 invisible">
            <div className="px-6 py-2.5 h-[42px] rounded-full border">
              <span>Contact</span>
            </div>
          </div>
        </div>
      </MaskContainer>

      {/* Foreground overlay with profile avatar, greeting, headline spacer, and visible action CTAs */}
      <div className="absolute inset-0 w-11/12 max-w-4xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-3.5 pointer-events-none z-20 pt-16 sm:pt-0">
        {/* 1. Visible Avatar */}
        <div className="relative group pointer-events-auto">
          <img
            alt="Bhanu Teja Profile"
            className="rounded-full w-28 h-28 sm:w-32 sm:h-32 object-cover object-top border-2 border-white dark:border-white/20 shadow-xl transition-transform duration-300 group-hover:scale-105 bg-gradient-to-tr from-sky-500/20 to-purple-500/20"
            src="/images/bhanu_portrait.jpg"
            onError={(e) => {
              (e.currentTarget as HTMLImageElement).src = '/assets/bhanu_portrait.jpg';
            }}
          />
          <span className="absolute bottom-1 right-1 w-4 h-4 bg-emerald-500 border-2 border-white dark:border-neutral-900 rounded-full" title="Available for opportunities" />
        </div>

        {/* 2. Visible Greeting */}
        <h3 className="h-9 flex items-center justify-center gap-2 text-base md:text-2xl font-Ovo pointer-events-auto text-neutral-800 dark:text-neutral-200">
          <span>Hello, I'm</span>
          <Cover>
            <span className="dark:text-white inline-block text-neutral-900 font-bold relative z-20 group-hover/cover:text-white transition duration-200">
              Bhanu Teja
            </span>
          </Cover>
          <img
            alt="Waving Hand"
            className="w-6 h-6 inline-block animate-bounce"
            src="/assets/hand-icon.png"
          />
        </h3>

        {/* 3. Invisible H1 Spacer matching MaskContainer H1 geometry */}
        <div
          aria-hidden="true"
          className="text-3xl sm:text-5xl lg:text-[56px] font-Ovo leading-tight invisible select-none pointer-events-none cursor-pointer px-2"
        >
          Engineering Practical AI Systems & Resilient Architectures
        </div>

        {/* 4. Visible Professional Title */}
        <p className="text-base sm:text-xl font-Outfit font-semibold tracking-wide text-transparent bg-gradient-to-r from-purple-600 via-sky-500 to-indigo-600 dark:from-purple-400 dark:via-sky-400 dark:to-indigo-300 bg-clip-text pointer-events-none">
          AI & Machine Learning Engineer • Full-Stack Developer • Problem Solver
        </p>

        {/* 5. Visible Bio Description */}
        <p className="max-w-2xl mx-auto font-Ovo pointer-events-none text-neutral-600 dark:text-neutral-300 text-xs sm:text-sm md:text-base leading-relaxed px-4">
          Pre-final year B.Tech in AI & ML at VNR VJIET (9.42 CGPA). Specializing in explainable machine learning, digital twins, high-throughput backend services, and algorithmic problem solving.
        </p>

        {/* 6. Primary Action Buttons & Social Links */}
        <div className="flex flex-wrap items-center justify-center gap-3 mt-2 pointer-events-auto">
          {/* Contact Me CTA */}
          <a
            className="px-6 py-2.5 rounded-full border border-neutral-900 bg-neutral-900 hover:bg-black text-white dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-200 active:scale-95 flex items-center gap-2 transition font-Outfit text-sm shadow-md cursor-pointer select-none font-medium"
            href="#contact"
          >
            <span>Get in Touch</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          {/* Resume Download Button */}
          <a
            className="px-6 py-2.5 rounded-full border border-gray-300 hover:border-neutral-900 bg-white/80 dark:bg-neutral-900/80 hover:bg-neutral-100 dark:hover:bg-neutral-800 text-neutral-900 dark:text-white dark:border-white/20 active:scale-95 flex items-center gap-2 transition font-Outfit text-sm shadow-sm cursor-pointer select-none font-medium"
            href="/bhanu_teja_resume.pdf"
            download="Aitha_Bhanu_Teja_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Download className="w-4 h-4 text-purple-600 dark:text-purple-400" />
            <span>Download Resume</span>
          </a>

          {/* GitHub Profile */}
          <a
            className="p-2.5 rounded-full border border-gray-300 hover:border-neutral-900 bg-white/80 dark:bg-neutral-900/80 hover:bg-neutral-100 dark:hover:bg-neutral-800 text-neutral-800 dark:text-white dark:border-white/20 active:scale-95 transition shadow-sm"
            href={PERSONAL_INFO.social.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            title="GitHub"
          >
            <GithubIcon className="w-4 h-4" />
          </a>

          {/* LinkedIn Profile */}
          <a
            className="p-2.5 rounded-full border border-gray-300 hover:border-neutral-900 bg-white/80 dark:bg-neutral-900/80 hover:bg-neutral-100 dark:hover:bg-neutral-800 text-neutral-800 dark:text-white dark:border-white/20 active:scale-95 transition shadow-sm"
            href={PERSONAL_INFO.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            title="LinkedIn"
          >
            <LinkedinIcon className="w-4 h-4 text-sky-600 dark:text-sky-400" />
          </a>

          {/* LeetCode Profile */}
          <a
            className="px-4 py-2 rounded-full border border-amber-500/30 bg-amber-500/10 hover:bg-amber-500/20 text-amber-700 dark:text-amber-300 active:scale-95 flex items-center gap-1.5 transition font-Outfit text-xs font-semibold shadow-sm"
            href={PERSONAL_INFO.social.leetcode}
            target="_blank"
            rel="noopener noreferrer"
            title="LeetCode Profile: 1844 Rating"
          >
            <Code className="w-3.5 h-3.5" />
            <span>LeetCode 1844</span>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Hero;
