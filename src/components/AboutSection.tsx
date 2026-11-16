import React from 'react';
import { Brain, GraduationCap, Code2, Trophy, Briefcase, Award } from 'lucide-react';
import { PERSONAL_INFO, EDUCATION } from '../data/portfolioData';

export const AboutSection: React.FC = () => {
  return (
    <section className="w-full px-6 md:px-[10%] lg:px-[12%] py-16 scroll-mt-20" id="about">
      {/* Section Headings */}
      <h4 className="text-center mb-2 text-sm md:text-base font-Outfit uppercase tracking-widest text-purple-600 dark:text-purple-400 font-semibold">
        Introduction & Background
      </h4>
      <h2 className="text-center text-4xl sm:text-5xl font-Ovo tracking-tight">
        About Me
      </h2>

      <div className="flex w-full flex-col lg:flex-row items-center gap-12 lg:gap-16 my-16">
        {/* Left: Profile Cutout Image with Rotating Circular Badge */}
        <div className="max-w-max mx-auto relative shrink-0">
          <div className="relative p-2 rounded-3xl bg-gradient-to-tr from-purple-500/20 via-sky-500/20 to-indigo-500/20 border border-gray-200 dark:border-white/10 shadow-2xl">
            <img
              alt="Bhanu Teja Portrait"
              className="w-64 sm:w-72 md:w-80 h-80 sm:h-96 md:h-[400px] rounded-2xl object-cover object-top shadow-lg"
              src="/images/bhanu_portrait.jpg"
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).src = '/assets/bhanu_portrait.jpg';
              }}
            />
          </div>

          {/* Rotating Circular Stamp Badge */}
          <div className="bg-white dark:bg-[#0c101d] w-32 sm:w-36 aspect-square absolute right-0 bottom-0 rounded-full translate-x-1/4 translate-y-1/4 shadow-[0_4px_35px_rgba(149,0,162,0.25)] flex items-center justify-center border border-purple-200 dark:border-purple-500/30">
            <div className="relative w-full h-full flex items-center justify-center animate-spin_slow">
              <svg className="w-full h-full" viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <path
                    d="M150,150 m-120,0 a120,120 0 1,1 240,0 a120,120 0 1,1 -240,0"
                    id="circleText"
                  />
                </defs>
                <text fill="currentColor" className="text-black dark:text-white font-mono font-bold" fontSize="19" letterSpacing="4">
                  <textPath href="#circleText" startOffset="0%">
                    AI & ML • FULL-STACK • PROBLEM SOLVER • BUILDER •
                  </textPath>
                </text>
              </svg>
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none flex items-center justify-center">
              <Brain className="w-7 h-7 text-purple-600 dark:text-purple-400" />
            </div>
          </div>
        </div>

        {/* Right: Bio and 4 Highlight Cards */}
        <div className="flex-1 space-y-6">
          <p className="font-Outfit text-neutral-700 dark:text-neutral-300 leading-relaxed text-base sm:text-lg">
            I am a 3rd-year <strong className="font-semibold text-black dark:text-white">B.Tech in Artificial Intelligence & Machine Learning</strong> student at <strong className="font-semibold text-black dark:text-white">{EDUCATION.institution}</strong>, Hyderabad with an outstanding <strong className="font-semibold text-purple-600 dark:text-purple-400">{EDUCATION.gpa} CGPA</strong>.
          </p>

          <p className="font-Outfit text-neutral-600 dark:text-neutral-300 leading-relaxed text-sm sm:text-base">
            My technical focus lies at the intersection of <strong className="font-medium text-black dark:text-white">Machine Learning Engineering</strong> and <strong className="font-medium text-black dark:text-white">Full-Stack Application Development</strong>. I believe in developing models that are not only statistically sound but explainable (using SHAP and local interpretability), robust, and deployed through fast, production-ready APIs (FastAPI & Node.js).
          </p>

          <p className="font-Outfit text-neutral-600 dark:text-neutral-300 leading-relaxed text-sm sm:text-base">
            With a disciplined problem-solving background on <strong className="font-medium text-black dark:text-white">LeetCode (Rating: 1844)</strong> and <strong className="font-medium text-black dark:text-white">CodeChef (Rating: 1530)</strong>, I bridge algorithmic efficiency with real-world engineering — from digital twin simulations for aero piston engines to AI-driven maritime route optimization and explainable cybersecurity systems.
          </p>

          {/* 4 Feature Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            {/* Education Card */}
            <div className="border border-gray-200 dark:border-white/10 rounded-2xl p-5 bg-white/50 dark:bg-neutral-900/40 hover:-translate-y-1 transition duration-300 shadow-sm hover:shadow-md hover:border-purple-500/40">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 rounded-xl bg-purple-500/10 text-purple-600 dark:text-purple-400">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-gray-900 dark:text-white font-Outfit text-base">
                  Academics & College
                </h3>
              </div>
              <p className="text-gray-700 dark:text-gray-300 text-sm font-medium font-Outfit">
                VNR VJIET, Hyderabad
              </p>
              <p className="text-gray-500 dark:text-gray-400 text-xs font-Outfit mt-1">
                B.Tech in AI & ML • <span className="text-purple-600 dark:text-purple-400 font-bold">9.42 CGPA</span> (2024–Present)
              </p>
            </div>

            {/* Competitive Programming Card */}
            <div className="border border-gray-200 dark:border-white/10 rounded-2xl p-5 bg-white/50 dark:bg-neutral-900/40 hover:-translate-y-1 transition duration-300 shadow-sm hover:shadow-md hover:border-sky-500/40">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 rounded-xl bg-sky-500/10 text-sky-600 dark:text-sky-400">
                  <Code2 className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-gray-900 dark:text-white font-Outfit text-base">
                  Problem Solving
                </h3>
              </div>
              <p className="text-gray-700 dark:text-gray-300 text-sm font-medium font-Outfit">
                490+ Total Problems Solved
              </p>
              <p className="text-gray-500 dark:text-gray-400 text-xs font-Outfit mt-1">
                LeetCode: <strong className="text-sky-600 dark:text-sky-400">1844</strong> • CodeChef: <strong>1530</strong>
              </p>
            </div>

            {/* Experience Card */}
            <div className="border border-gray-200 dark:border-white/10 rounded-2xl p-5 bg-white/50 dark:bg-neutral-900/40 hover:-translate-y-1 transition duration-300 shadow-sm hover:shadow-md hover:border-emerald-500/40">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                  <Briefcase className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-gray-900 dark:text-white font-Outfit text-base">
                  Practical Experience
                </h3>
              </div>
              <p className="text-gray-700 dark:text-gray-300 text-sm font-medium font-Outfit">
                AI/ML & Full-Stack Internships
              </p>
              <p className="text-gray-500 dark:text-gray-400 text-xs font-Outfit mt-1">
                ShadowFox (AI/ML) • VJ Startups (Full-Stack)
              </p>
            </div>

            {/* Competitions Card */}
            <div className="border border-gray-200 dark:border-white/10 rounded-2xl p-5 bg-white/50 dark:bg-neutral-900/40 hover:-translate-y-1 transition duration-300 shadow-sm hover:shadow-md hover:border-amber-500/40">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 rounded-xl bg-amber-500/10 text-amber-600 dark:text-amber-400">
                  <Trophy className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-gray-900 dark:text-white font-Outfit text-base">
                  Key Achievements
                </h3>
              </div>
              <p className="text-gray-700 dark:text-gray-300 text-sm font-medium font-Outfit">
                Convergence 2K26 Double Award
              </p>
              <p className="text-gray-500 dark:text-gray-400 text-xs font-Outfit mt-1">
                Scale Challenge Winner • 2nd Place Project Contest
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
