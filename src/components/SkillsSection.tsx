import React, { useState } from 'react';
import { TargetCursor } from './ui/TargetCursor';

const skillIcons: Record<string, string> = {
  Python: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
  'C++': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg',
  C: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg',
  JavaScript: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
  Java: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
  SQL: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
  'Scikit-learn': 'https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg',
  LightGBM: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
  XGBoost: 'https://raw.githubusercontent.com/dmlc/dmlc.github.io/master/img/logo-m/xgboost.png',
  FastAPI: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg',
  React: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
  'Next.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
  'Tailwind CSS': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg',
  'Node.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
  Express: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
  MongoDB: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
  MySQL: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
  PostgreSQL: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
  Firebase: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg',
  Supabase: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg',
  Git: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
  GitHub: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
  Docker: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
  'AWS Cloud': '/assets/aws.svg',
  Pandas: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg',
  NumPy: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg',
  'SHAP (XAI)': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
  Transformers: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg',
};

interface SkillCardProps {
  skill: string;
  className?: string;
}

const SkillCard: React.FC<SkillCardProps> = ({ skill, className = '' }) => {
  const [isHovered, setIsHovered] = useState(false);
  const iconUrl = skillIcons[skill];
  const shouldInvert = skill === 'Express' || skill === 'Next.js' || skill === 'GitHub';

  return (
    <div
      className={`bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md p-3 md:p-4 flex items-center justify-center hover:scale-105 transform transition-all duration-300 cursor-pointer ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      title={skill}
    >
      {/* Mobile view: Always icon (or text if no icon) */}
      <div className="md:hidden">
        {iconUrl ? (
          <img
            src={iconUrl}
            alt={`${skill} logo`}
            className={`w-8 h-8 object-contain ${shouldInvert ? 'dark:invert' : ''}`}
            loading="lazy"
            onError={(e) => {
              (e.currentTarget as HTMLImageElement).style.display = 'none';
            }}
          />
        ) : (
          <span className="text-xs font-semibold dark:text-white text-center">
            {skill}
          </span>
        )}
      </div>

      {/* Desktop view: When hovered -> show text; when not hovered -> show icon */}
      <div className="hidden md:block">
        {isHovered ? (
          <span className="text-sm font-semibold dark:text-white text-center transition-all duration-300 leading-tight">
            {skill}
          </span>
        ) : iconUrl ? (
          <img
            src={iconUrl}
            alt={`${skill} logo`}
            className={`w-9 h-9 object-contain transition-all duration-300 ${shouldInvert ? 'dark:invert' : ''}`}
            loading="lazy"
            onError={(e) => {
              (e.currentTarget as HTMLImageElement).style.display = 'none';
            }}
          />
        ) : (
          <span className="text-sm font-semibold dark:text-white text-center transition-all duration-300 leading-tight">
            {skill}
          </span>
        )}
      </div>
    </div>
  );
};

export const SkillsSection: React.FC = () => {
  return (
    <section id="skills-section" className="max-w-7xl mx-auto my-16 px-4 sm:px-6 scroll-mt-20">
      <div className="text-center mb-10">
        <h4 className="text-sm md:text-base font-Outfit uppercase tracking-widest text-purple-600 dark:text-purple-400 font-semibold mb-2">
          Technical Arsenal
        </h4>
        <h2 className="text-4xl sm:text-5xl font-Ovo dark:text-white">
          Skills & Technologies
        </h2>
        <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400 max-w-xl mx-auto font-Outfit">
          Practical machine learning frameworks, full-stack web stacks, databases, and problem-solving languages.
        </p>
      </div>

      {/* Target Cursor - Locked to #skills-section and .cursor-target elements */}
      <div className="cursor-target-container">
        <TargetCursor
          parentSelector="#skills-section"
          targetSelector=".cursor-target"
          spinDuration={2}
          hideDefaultCursor={true}
          parallaxOn={true}
        />
      </div>

      {/* Category Grid Headers */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8 mx-2 sm:mx-6">
        {/* Left Column: AI/ML & Languages (Purple / Rose Border) */}
        <div className="space-y-3">
          <div className="flex items-center justify-between px-2">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-purple-600 dark:text-purple-400">
              [01] AI & Machine Learning & Languages
            </span>
            <span className="text-xs text-neutral-500 font-mono">Python, C++, LightGBM, SHAP</span>
          </div>
          <div className="grid grid-cols-4 gap-3 sm:gap-4 p-4 rounded-2xl bg-purple-500/5 border border-purple-500/20">
            <SkillCard skill="Python" className="border border-purple-300 dark:border-purple-500/40 cursor-target" />
            <SkillCard skill="C++" className="border border-purple-300 dark:border-purple-500/40 cursor-target" />
            <SkillCard skill="Scikit-learn" className="border border-purple-300 dark:border-purple-500/40 cursor-target" />
            <SkillCard skill="LightGBM" className="border border-purple-300 dark:border-purple-500/40 cursor-target" />
            <SkillCard skill="XGBoost" className="border border-purple-300 dark:border-purple-500/40 cursor-target" />
            <SkillCard skill="Pandas" className="border border-purple-300 dark:border-purple-500/40 cursor-target" />
            <SkillCard skill="NumPy" className="border border-purple-300 dark:border-purple-500/40 cursor-target" />
            <SkillCard skill="SHAP (XAI)" className="border border-purple-300 dark:border-purple-500/40 cursor-target" />
          </div>
        </div>

        {/* Right Column: Full-Stack Web & Backend (Sky / Blue Border) */}
        <div className="space-y-3">
          <div className="flex items-center justify-between px-2">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-sky-600 dark:text-sky-400">
              [02] Full-Stack & APIs
            </span>
            <span className="text-xs text-neutral-500 font-mono">React, FastAPI, Node, Tailwind</span>
          </div>
          <div className="grid grid-cols-4 gap-3 sm:gap-4 p-4 rounded-2xl bg-sky-500/5 border border-sky-500/20">
            <SkillCard skill="React" className="border border-sky-300 dark:border-sky-500/40 cursor-target" />
            <SkillCard skill="Next.js" className="border border-sky-300 dark:border-sky-500/40 cursor-target" />
            <SkillCard skill="FastAPI" className="border border-sky-300 dark:border-sky-500/40 cursor-target" />
            <SkillCard skill="Node.js" className="border border-sky-300 dark:border-sky-500/40 cursor-target" />
            <SkillCard skill="Express" className="border border-sky-300 dark:border-sky-500/40 cursor-target" />
            <SkillCard skill="JavaScript" className="border border-sky-300 dark:border-sky-500/40 cursor-target" />
            <SkillCard skill="Tailwind CSS" className="border border-sky-300 dark:border-sky-500/40 cursor-target" />
            <SkillCard skill="Transformers" className="border border-sky-300 dark:border-sky-500/40 cursor-target" />
          </div>
        </div>
      </div>

      {/* Row 2: Databases, Cloud & Developer Tools (Emerald / Green Border) */}
      <div className="mx-2 sm:mx-6 space-y-3">
        <div className="flex items-center justify-between px-2">
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
            [03] Databases, Cloud & Core CS
          </span>
          <span className="text-xs text-neutral-500 font-mono">MySQL, MongoDB, Git, AWS, DSA</span>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3 sm:gap-4 p-4 rounded-2xl bg-emerald-500/5 border border-emerald-500/20">
          <SkillCard skill="MySQL" className="border border-emerald-300 dark:border-emerald-500/40 cursor-target" />
          <SkillCard skill="MongoDB" className="border border-emerald-300 dark:border-emerald-500/40 cursor-target" />
          <SkillCard skill="PostgreSQL" className="border border-emerald-300 dark:border-emerald-500/40 cursor-target" />
          <SkillCard skill="Firebase" className="border border-emerald-300 dark:border-emerald-500/40 cursor-target" />
          <SkillCard skill="Supabase" className="border border-emerald-300 dark:border-emerald-500/40 cursor-target" />
          <SkillCard skill="Git" className="border border-emerald-300 dark:border-emerald-500/40 cursor-target" />
          <SkillCard skill="GitHub" className="border border-emerald-300 dark:border-emerald-500/40 cursor-target" />
          <SkillCard skill="AWS Cloud" className="border border-emerald-300 dark:border-emerald-500/40 cursor-target" />
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
