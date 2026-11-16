import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Award, ExternalLink, Code2, Sparkles, CheckCircle2, ShieldCheck } from 'lucide-react';
import { AWARDS, CERTIFICATIONS, PERSONAL_INFO } from '../data/portfolioData';

export const AchievementsSection: React.FC = () => {
  return (
    <section id="achievements" className="w-full px-6 md:px-[10%] lg:px-[12%] py-20 scroll-mt-20">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h4 className="text-sm md:text-base font-Outfit uppercase tracking-widest text-purple-600 dark:text-purple-400 font-semibold mb-2">
          Recognition & Honors
        </h4>
        <h2 className="text-3xl md:text-5xl font-Ovo text-neutral-900 dark:text-white">
          Achievements & Coding Profiles
        </h2>
        <p className="mt-2 text-sm md:text-base text-neutral-600 dark:text-neutral-300 font-Outfit">
          Recognized for algorithmic problem solving, scalable distributed system design, and competitive hackathon projects.
        </p>
      </div>

      {/* Coding Profiles Banner */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {/* LeetCode Profile Card */}
        <motion.div
          whileHover={{ y: -4 }}
          transition={{ duration: 0.2 }}
          className="p-6 rounded-2xl border border-amber-500/30 bg-amber-500/5 dark:bg-amber-500/10 backdrop-blur-sm relative overflow-hidden flex flex-col justify-between"
        >
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400">
              LeetCode Competitive
            </span>
            <span className="text-[11px] font-mono px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-700 dark:text-amber-300 font-semibold">
              Peak 1844
            </span>
          </div>

          <div className="my-2">
            <div className="text-4xl font-extrabold text-neutral-900 dark:text-white font-Outfit tracking-tight">
              1844
            </div>
            <p className="text-xs text-neutral-500 dark:text-neutral-400 font-Outfit mt-1">
              Contest Rating • 229+ Problems Solved
            </p>
          </div>

          <div className="pt-4 border-t border-amber-500/20 mt-2 flex items-center justify-between">
            <span className="text-xs text-neutral-600 dark:text-neutral-300 font-medium">
              Data Structures & DP
            </span>
            <a
              href={PERSONAL_INFO.social.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-xs font-semibold text-amber-600 dark:text-amber-400 hover:underline"
            >
              <span>View Profile</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </motion.div>

        {/* CodeChef Profile Card */}
        <motion.div
          whileHover={{ y: -4 }}
          transition={{ duration: 0.2 }}
          className="p-6 rounded-2xl border border-purple-500/30 bg-purple-500/5 dark:bg-purple-500/10 backdrop-blur-sm relative overflow-hidden flex flex-col justify-between"
        >
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-purple-600 dark:text-purple-400">
              CodeChef Division
            </span>
            <span className="text-[11px] font-mono px-2 py-0.5 rounded-full bg-purple-500/20 text-purple-700 dark:text-purple-300 font-semibold">
              Div 3
            </span>
          </div>

          <div className="my-2">
            <div className="text-4xl font-extrabold text-neutral-900 dark:text-white font-Outfit tracking-tight">
              1530
            </div>
            <p className="text-xs text-neutral-500 dark:text-neutral-400 font-Outfit mt-1">
              Max Rating • 264+ Problems Solved
            </p>
          </div>

          <div className="pt-4 border-t border-purple-500/20 mt-2 flex items-center justify-between">
            <span className="text-xs text-neutral-600 dark:text-neutral-300 font-medium">
              Contest Problem Solving
            </span>
            <a
              href={PERSONAL_INFO.social.codechef}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-xs font-semibold text-purple-600 dark:text-purple-400 hover:underline"
            >
              <span>View Profile</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </motion.div>

        {/* Total Algorithmic Solved Card */}
        <motion.div
          whileHover={{ y: -4 }}
          transition={{ duration: 0.2 }}
          className="p-6 rounded-2xl border border-sky-500/30 bg-sky-500/5 dark:bg-sky-500/10 backdrop-blur-sm relative overflow-hidden flex flex-col justify-between"
        >
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-sky-600 dark:text-sky-400">
              Algorithmic Problems
            </span>
            <span className="text-[11px] font-mono px-2 py-0.5 rounded-full bg-sky-500/20 text-sky-700 dark:text-sky-300 font-semibold">
              Cumulative
            </span>
          </div>

          <div className="my-2">
            <div className="text-4xl font-extrabold text-neutral-900 dark:text-white font-Outfit tracking-tight">
              490+
            </div>
            <p className="text-xs text-neutral-500 dark:text-neutral-400 font-Outfit mt-1">
              Algorithms, OOPs, Trees & Graphs
            </p>
          </div>

          <div className="pt-4 border-t border-sky-500/20 mt-2 flex items-center justify-between">
            <span className="text-xs text-neutral-600 dark:text-neutral-300 font-medium">
              GitHub Repositories
            </span>
            <a
              href={PERSONAL_INFO.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-xs font-semibold text-sky-600 dark:text-sky-400 hover:underline"
            >
              <span>GitHub (20+ Repos)</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </motion.div>
      </div>

      {/* Awards & Competitions Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        {AWARDS.slice(0, 4).map((award, idx) => (
          <motion.div
            key={idx}
            whileHover={{ y: -4 }}
            className="p-6 rounded-2xl border border-gray-200 dark:border-white/10 bg-white dark:bg-neutral-900 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-full bg-purple-500/10 text-purple-600 dark:text-purple-400 border border-purple-500/20">
                  {award.badge}
                </span>
                <span className="text-xs font-mono text-neutral-500">
                  {award.date}
                </span>
              </div>

              <h3 className="text-xl font-bold text-neutral-900 dark:text-white font-Outfit mb-1">
                {award.title}
              </h3>

              <p className="text-xs font-semibold text-purple-600 dark:text-purple-400 mb-3">
                {award.issuer}
              </p>

              <p className="text-sm text-neutral-600 dark:text-neutral-300 font-Outfit leading-relaxed">
                {award.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Certifications Banner */}
      <div className="p-6 sm:p-8 rounded-3xl border border-gray-200 dark:border-white/10 bg-gradient-to-r from-purple-500/5 via-sky-500/5 to-indigo-500/5 dark:from-purple-900/20 dark:via-sky-900/20 dark:to-indigo-900/20">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2.5 rounded-xl bg-purple-500/10 text-purple-600 dark:text-purple-400">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-neutral-900 dark:text-white font-Outfit">
              Industry Certifications
            </h3>
            <p className="text-xs text-neutral-500 dark:text-neutral-400">
              Verified technical credentials from major cloud and enterprise providers
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {CERTIFICATIONS.map((cert) => (
            <div
              key={cert.name}
              className="p-4 rounded-xl border border-gray-200 dark:border-white/10 bg-white dark:bg-neutral-900/80 flex items-start gap-3"
            >
              <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
              <div>
                <h4 className="font-semibold text-sm text-neutral-900 dark:text-white font-Outfit">
                  {cert.name}
                </h4>
                <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-0.5">
                  Issued by {cert.issuer} • {cert.year}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
