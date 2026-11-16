import React, { useState } from 'react';
import { PinContainer } from './ui/PinContainer';
import { ProjectModal } from './ProjectModal';
import { PROJECTS, Project } from '../data/portfolioData';

interface ProjectItem {
  id: string;
  title: string;
  category: string;
  date: string;
  description: string;
  github?: string;
  demo?: string;
  image: string;
  technologies: { name: string; icon: string }[];
}

export const ProjectsSection: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: ProjectItem[] = [
    {
      id: 'phishguard',
      title: 'PHISHGUARD',
      category: 'Explainable AI & Cybersecurity',
      date: '2026',
      description:
        'Developed an ML-powered phishing URL detection system benchmarking Logistic Regression, Random Forest, XGBoost, and LightGBM. Selected LightGBM with 92% accuracy, integrating SHAP-based explainable AI and a 0–100 risk scoring engine served via FastAPI and React/Next.js.',
      github: 'https://github.com/bhanu-teja1977',
      image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1200&q=80',
      technologies: [
        { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
        { name: 'Scikit-learn', icon: 'https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg' },
        { name: 'FastAPI', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg' },
        { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
        { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
      ],
    },
    {
      id: 'aerotwin',
      title: 'AeroTwin',
      category: 'Digital Twin & Predictive Modeling',
      date: '2026',
      description:
        'Engineered an AI-powered digital twin simulation and predictive telemetry pipeline for real-time monitoring and combustion anomaly detection in Medium-Altitude Long-Endurance (MALE) UAV aero piston engines.',
      github: 'https://github.com/bhanu-teja1977/Digital_Twin',
      image: 'https://images.unsplash.com/photo-1517976487584-60172c918ee4?auto=format&fit=crop&w=1200&q=80',
      technologies: [
        { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
        { name: 'FastAPI', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg' },
        { name: 'Pandas', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg' },
        { name: 'NumPy', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg' },
      ],
    },
    {
      id: 'greenfleet-q',
      title: 'GreenFleet-Q',
      category: 'AI Maritime Decision-Support',
      date: 'Convergence 2K26 (Runner-Up)',
      description:
        'Engineered an AI-driven maritime decision-support platform using Random Forest and Quantum Particle Swarm Optimization (QPSO) to predict fuel consumption and dynamic voyage routes from weather datasets. Awarded 2nd Place in Convergence 2K26 Project Contest.',
      github: 'https://github.com/bhanu-teja1977',
      image: 'https://images.unsplash.com/photo-1505705694340-019e1e335916?auto=format&fit=crop&w=1200&q=80',
      technologies: [
        { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
        { name: 'Scikit-learn', icon: 'https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg' },
        { name: 'FastAPI', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg' },
        { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
      ],
    },
    {
      id: 'signalsafe',
      title: 'SignalSafe',
      category: 'Spatial ML & Travel Safety',
      date: '2026',
      description:
        'Cellular connectivity analysis and signal-quality prediction platform leveraging spatial indexing and leakage-safe machine learning (Random Forest, ExtraTrees, XGBoost) across real-world drive-test datasets.',
      github: 'https://github.com/bhanu-teja1977',
      image: 'https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&w=1200&q=80',
      technologies: [
        { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
        { name: 'Scikit-learn', icon: 'https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg' },
        { name: 'FastAPI', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg' },
        { name: 'Pandas', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg' },
      ],
    },
    {
      id: 'drishyamitra',
      title: 'DrishyaMitra',
      category: 'Full-Stack MERN Platform',
      date: '2025 – 2026',
      description:
        'Designed and developed a responsive full-stack MERN web application with intuitive interfaces for data interaction, RESTful API endpoints, and MongoDB data persistence with full CRUD operations.',
      github: 'https://github.com/bhanu-teja1977',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
      technologies: [
        { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
        { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
        { name: 'Express', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' },
        { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
        { name: 'Tailwind CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' },
      ],
    },
  ];

  const handleOpenDetails = (projectId: string) => {
    const fullProj = PROJECTS.find((p) => p.id === projectId) || null;
    setSelectedProject(fullProj);
  };

  return (
    <section className="max-w-6xl mx-auto py-20 px-4 md:px-8 space-y-12 scroll-mt-20" id="work">
      <div className="text-center max-w-2xl mx-auto mb-10">
        <h4 className="text-sm md:text-base font-Outfit uppercase tracking-widest text-purple-600 dark:text-purple-400 font-semibold mb-2">
          Featured Engineering
        </h4>
        <h2 className="text-3xl md:text-5xl font-Ovo text-neutral-900 dark:text-white">
          Key Projects & Systems
        </h2>
        <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400 font-Outfit">
          Practical applications built with explainable AI, physics-informed digital twins, and full-stack architectures.
        </p>
      </div>

      {projects.map((proj) => (
        <div
          key={proj.id}
          className="relative overflow-hidden md:overflow-visible border rounded-2xl shadow-lg bg-white dark:bg-neutral-900 border-gray-200 dark:border-neutral-800 p-6 md:p-10 h-auto md:h-[400px] flex flex-col justify-between gap-8 md:gap-0 hover:border-purple-500/30 transition-colors"
        >
          {/* Left info column */}
          <div className="relative z-10 w-full md:w-[58%] space-y-3">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-[11px] font-mono uppercase tracking-wider text-purple-600 dark:text-purple-400 bg-purple-500/10 px-2.5 py-0.5 rounded-full border border-purple-500/20">
                  {proj.category}
                </span>
                <span className="text-xs text-neutral-500 dark:text-neutral-400 font-Outfit">
                  {proj.date}
                </span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold tracking-tight dark:text-white font-Outfit">
                {proj.title}
              </h3>
            </div>

            <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed text-sm md:text-base font-Outfit">
              {proj.description}
            </p>

            {/* Action Buttons: GitHub & View Details */}
            <div className="flex flex-wrap gap-3 pt-2">
              {proj.github && (
                <a
                  href={proj.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex justify-center gap-2 items-center text-xs sm:text-sm bg-white dark:bg-neutral-900 border-gray-200 dark:border-neutral-700 px-4 py-2 border rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-800 text-neutral-900 dark:text-white font-Outfit transition shadow-sm font-medium"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                  <span>GitHub</span>
                </a>
              )}

              <button
                onClick={() => handleOpenDetails(proj.id)}
                className="flex justify-center gap-1.5 items-center text-xs sm:text-sm bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-full font-Outfit transition shadow-sm font-medium cursor-pointer"
              >
                <span>Architecture & Metrics</span>
              </button>
            </div>
          </div>

          {/* Overlapping circular tech stack badges */}
          <div className="relative z-10 flex flex-row items-center w-full md:w-[45%]">
            {proj.technologies.map((tech, idx) => (
              <div key={idx} className="-mr-3 relative group">
                <div
                  className="flex items-center justify-center rounded-full h-11 w-11 sm:h-12 sm:w-12 border-2 border-white dark:border-neutral-800 bg-white dark:bg-neutral-800 relative transition duration-300 group-hover:scale-110 group-hover:z-30 shadow-sm"
                  title={tech.name}
                >
                  <img
                    alt={tech.name}
                    src={tech.icon}
                    className="w-5 h-5 sm:w-6 sm:h-6 object-contain"
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).style.display = 'none';
                    }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* 3D Pin Container on the right */}
          <div className="relative md:absolute bottom-0 right-0 w-full md:w-[58%] h-[230px] md:h-full flex items-center md:items-end justify-center md:justify-end pointer-events-none mt-4 md:mt-0">
            <div className="pointer-events-auto w-full h-full flex justify-center md:w-auto md:h-auto md:block">
              <PinContainer
                title={proj.title}
                href={proj.github}
                containerClassName="h-full w-full flex justify-center md:justify-end"
              >
                <div className="w-[300px] md:w-[500px] h-full md:h-[280px] flex items-center justify-center md:block relative overflow-hidden rounded-xl">
                  <img
                    src={proj.image}
                    alt={proj.title}
                    className="object-cover rounded-xl w-full h-full brightness-90 hover:brightness-100 transition-all duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-4">
                    <span className="text-white text-xs font-mono font-medium drop-shadow">
                      {proj.title} • {proj.category}
                    </span>
                  </div>
                </div>
              </PinContainer>
            </div>
          </div>
        </div>
      ))}

      {/* Project Detail Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};

export default ProjectsSection;
