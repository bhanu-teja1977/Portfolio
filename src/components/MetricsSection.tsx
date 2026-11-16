import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Trophy, Award, Brain, CheckCircle, GraduationCap } from 'lucide-react';
import { sound } from '../utils/soundEffects';

interface MetricItem {
  icon: React.ReactNode;
  value: string;
  label: string;
  subtext: string;
  color: string;
  glow: string;
}

const METRICS: MetricItem[] = [
  {
    icon: <Code2 className="w-5 h-5" />,
    value: '1844',
    label: 'LeetCode Rating',
    subtext: 'Competitive algorithmic problem solver',
    color: 'from-amber-400 to-orange-500',
    glow: 'rgba(245, 158, 11, 0.25)',
  },
  {
    icon: <Brain className="w-5 h-5" />,
    value: '490+',
    label: 'Problems Solved',
    subtext: 'LeetCode & CodeChef Div 3 competitions',
    color: 'from-purple-400 to-indigo-600',
    glow: 'rgba(168, 85, 247, 0.25)',
  },
  {
    icon: <GraduationCap className="w-5 h-5" />,
    value: '9.42',
    label: 'Academic CGPA',
    subtext: 'B.Tech AI & ML at VNR VJIET',
    color: 'from-emerald-400 to-teal-600',
    glow: 'rgba(52, 211, 153, 0.25)',
  },
  {
    icon: <CheckCircle className="w-5 h-5" />,
    value: '92%',
    label: 'PhishGuard Accuracy',
    subtext: 'LightGBM model with SHAP explainability',
    color: 'from-sky-400 to-blue-600',
    glow: 'rgba(56, 189, 248, 0.25)',
  },
  {
    icon: <Trophy className="w-5 h-5" />,
    value: '2x Awards',
    label: 'Convergence 2K26',
    subtext: 'Scale Challenge Winner & Project Contest Runner-Up',
    color: 'from-amber-400 to-yellow-500',
    glow: 'rgba(234, 179, 8, 0.25)',
  },
  {
    icon: <Award className="w-5 h-5" />,
    value: '1,600+',
    label: 'Contestants Outranked',
    subtext: 'Vistera 2K26 3rd Prize among 425+ teams',
    color: 'from-rose-400 to-red-600',
    glow: 'rgba(244, 63, 94, 0.25)',
  },
];

export const MetricsSection: React.FC = () => {
  return (
    <section className="py-20 px-4 max-w-6xl mx-auto relative z-10">
      <div className="text-center max-w-2xl mx-auto mb-14">
        <span className="text-xs font-mono uppercase tracking-widest text-sky-400 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20">
          Impact & Engineering Quantified
        </span>
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-3">
          Measurable Benchmarks
        </h2>
        <p className="text-sm sm:text-base text-slate-400 mt-2">
          Demonstrated achievements across machine learning accuracy, competitive algorithmic ratings, and university honors.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {METRICS.map((metric, idx) => (
          <motion.div
            key={metric.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.08 }}
            whileHover={{ y: -5, scale: 1.02 }}
            onMouseEnter={() => sound.playHover()}
            style={{
              boxShadow: `0 10px 30px -10px ${metric.glow}`,
            }}
            className="p-6 rounded-3xl glass-panel border border-white/10 hover:border-white/20 transition-all duration-300 relative overflow-hidden group cursor-default"
          >
            <div className="flex items-center justify-between mb-4">
              <span className="text-slate-400 group-hover:text-white transition-colors">
                {metric.icon}
              </span>
              <span className="text-[10px] font-mono text-slate-400 bg-slate-900/80 px-2.5 py-0.5 rounded-full border border-white/5">
                VERIFIED
              </span>
            </div>

            <div className="space-y-1">
              <div
                className={`font-display text-4xl sm:text-5xl font-extrabold text-transparent bg-gradient-to-r ${metric.color} bg-clip-text tracking-tight`}
              >
                {metric.value}
              </div>
              <h3 className="font-display text-lg font-bold text-white">
                {metric.label}
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed pt-1">
                {metric.subtext}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default MetricsSection;
