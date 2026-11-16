import React from 'react';
import { Layers, Sparkles, Cpu, Globe, Code2 } from 'lucide-react';
import { GlowingEffect } from './ui/GlowingEffect';

interface ServiceItem {
  area: string;
  icon: React.ReactNode;
  title: string;
  about: string;
  technologies: string;
}

export const ServicesSection: React.FC = () => {
  const services: ServiceItem[] = [
    {
      area: 'md:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/5]',
      icon: <Layers className="h-4 w-4 text-purple-600 dark:text-purple-400" />,
      title: 'Machine Learning & Predictive Modeling',
      about: 'I develop and benchmark predictive ML pipelines (LightGBM, XGBoost, Scikit-learn, Random Forest) with thorough feature engineering, spatial cross-validation, and high classification accuracy.',
      technologies: 'Python, LightGBM, XGBoost, Scikit-learn, Pandas, NumPy, Regression & Classification.',
    },
    {
      area: 'md:[grid-area:1/7/2/13] xl:[grid-area:2/1/3/5]',
      icon: <Sparkles className="h-4 w-4 text-sky-600 dark:text-sky-400" />,
      title: 'Explainable AI & High-Speed APIs',
      about: 'I integrate model interpretability using SHAP to demystify complex ensemble decisions, exposing sub-50ms inference and risk-scoring engines via asynchronous FastAPI microservices.',
      technologies: 'SHAP (XAI), FastAPI, Asynchronous REST APIs, TreeExplainer, Feature Attribution, Docker.',
    },
    {
      area: 'md:[grid-area:2/1/3/7] xl:[grid-area:1/5/3/8]',
      icon: <Cpu className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />,
      title: 'Digital Twins & Sensor Telemetry',
      about: 'I build real-time cyber-physical digital twin architectures and multi-sensor predictive maintenance pipelines for mission-critical systems such as MALE UAV aero piston engines.',
      technologies: 'Digital Twins, IoT Telemetry, Anomaly Detection, Python, Streamlit, Sensor Fusion.',
    },
    {
      area: 'md:[grid-area:2/7/3/13] xl:[grid-area:1/8/2/13]',
      icon: <Globe className="h-4 w-4 text-amber-600 dark:text-amber-400" />,
      title: 'Full-Stack Web Development',
      about: 'I design and build dynamic full-stack web platforms with clean UI, robust backend architecture, token security, and optimized database transactions.',
      technologies: 'React.js, Next.js, Node.js, Express, MongoDB, MySQL, Tailwind CSS, REST APIs.',
    },
    {
      area: 'md:[grid-area:3/1/4/13] xl:[grid-area:2/8/3/13]',
      icon: <Code2 className="h-4 w-4 text-rose-600 dark:text-rose-400" />,
      title: 'Algorithmic Problem Solving & System Design',
      about: 'Proven competitive programmer (LeetCode 1844, CodeChef 1530, 490+ solved) and Winner of Convergence 2K26 Scale Challenge, architecting scalable, fault-tolerant architectures.',
      technologies: 'C++, Python, Java, Data Structures, Algorithms, Distributed System Design, High-Scale Concurrency.',
    },
  ];

  return (
    <section className="w-full scroll-mt-20" id="services">
      {/* Section Header */}
      <div className="mx-6 md:mx-12 mt-24 font-Outfit">
        <h4 className="text-sm md:text-base font-Outfit uppercase tracking-widest text-purple-600 dark:text-purple-400 font-semibold mb-2">
          Capabilities & Solutions
        </h4>
        <h2 className="text-3xl md:text-5xl font-Ovo text-black dark:text-white">
          What I Bring to the Table
        </h2>
        <p className="mt-2 text-neutral-700 dark:text-neutral-300 max-w-xl text-sm md:text-base font-Outfit">
          From explainable machine learning models to high-throughput full-stack architectures and algorithmic optimization.
        </p>
      </div>

      {/* Bento Grid */}
      <ul className="grid grid-cols-1 mx-6 md:mx-12 mb-28 mt-12 gap-6 md:grid-cols-12 md:grid-rows-3 lg:gap-6 xl:max-h-[34rem] xl:grid-rows-2 font-Outfit">
        {services.map((item, idx) => (
          <li key={idx} className={`min-h-[14rem] list-none ${item.area}`}>
            <div className="relative h-full rounded-2xl border p-2 md:rounded-3xl md:p-3 border-gray-200 dark:border-neutral-800">
              <GlowingEffect
                spread={40}
                glow={true}
                disabled={false}
                proximity={64}
                inactiveZone={0.01}
              />
              <div className="border-0.75 relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl p-6 md:p-6 bg-white dark:bg-neutral-900 border border-gray-100 dark:border-neutral-800 dark:shadow-[0px_0px_27px_0px_#2D2D2D]">
                <div className="relative flex flex-1 flex-col justify-between gap-3">
                  <div className="w-fit rounded-lg border border-gray-200 dark:border-gray-700 p-2.5 bg-gray-50 dark:bg-neutral-800">
                    {item.icon}
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-semibold text-lg md:text-xl text-neutral-900 dark:text-white tracking-tight">
                      {item.title}
                    </h3>
                    <p className="text-xs md:text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
                      {item.about}
                    </p>
                  </div>
                </div>
                <div className="pt-3 border-t border-gray-100 dark:border-neutral-800">
                  <p className="text-[11px] font-mono text-purple-600 dark:text-purple-400 font-medium">
                    {item.technologies}
                  </p>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ServicesSection;
