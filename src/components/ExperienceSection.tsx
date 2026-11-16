import React, { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface TimelineItem {
  period: string;
  role: string;
  techStack: string;
  description: string;
  bullets?: string[];
  images?: { src: string; alt: string }[];
}

export const ExperienceSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (trackRef.current) {
      setHeight(trackRef.current.offsetHeight);
    }
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 10%', 'end 50%'],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  const items: TimelineItem[] = [
    {
      period: 'Jul 2026 – Aug 2026',
      role: 'AI/ML Intern – ShadowFox (Remote)',
      techStack: 'Python, Scikit-learn, HuggingFace Transformers, NLP, Pandas, Regression Analysis',
      description:
        'Engineered predictive machine learning models for vehicle pricing analysis and benchmarked transformer-based language models for NLP evaluation.',
      bullets: [
        'Car Selling Price Prediction: Developed an ML model to estimate car selling prices using vehicle features, statistical analysis, and regression modeling.',
        'Language Model Analysis: Implemented and benchmarked transformer-based language models for NLP tasks, conducting token-level contextual analysis and text generation evaluation across benchmark datasets.',
        'Applied feature engineering, multicollinearity checks, and cross-validation pipelines to maximize model generalization.',
      ],
    },
    {
      period: 'Jun 2026 – Jul 2026',
      role: 'Full Stack Intern – VJ Startups (On-site, Hyderabad)',
      techStack: 'React.js, Node.js, Express.js, MongoDB, REST APIs, Tailwind CSS',
      description:
        'Developed institutional partnership management platforms and interactive administrative analytics dashboards.',
      bullets: [
        'MOU Management System: Developed a web-based platform to manage institutional MOUs, enterprise partnerships, student opportunities, and resource utilization.',
        'MOU Analytics Dashboard: Built real-time analytics dashboards to track MOU utilization metrics, collaborative activities, and venture milestones.',
        'Integrated responsive React interfaces with RESTful backend data APIs for seamless administrative tracking.',
      ],
    },
    {
      period: '2025 – Present',
      role: 'PR Coordinator – ISTE Student Chapter, VNR VJIET',
      techStack: 'Competitive Programming, Technical Workshops, Event Organization',
      description:
        'Organizing technical workshops, curating competitive programming problem sets, and managing student orientation initiatives.',
      bullets: [
        'Organized technical workshops and competitive coding contests for 400+ engineering participants.',
        'Curated problem statements and test cases for algorithmic contests in C++, Python, and Java.',
        'Delivered keynote speeches during university student orientation and technical outreach programs.',
      ],
    },
    {
      period: '2025 – Present',
      role: 'Wing Master & Program Manager – VJ Startups',
      techStack: 'Program Management, Incubation, Agile Coordination, Team Mentorship',
      description:
        'Spearheading student innovation programs, mentoring startup cohorts, and overseeing institutional initiatives.',
      bullets: [
        'Supervised cross-functional student teams across incubation programs and startup cohorts.',
        'Coordinated ideation challenges, pitch presentations, and developer sprint reviews.',
        'Facilitated communication between student innovators, faculty mentors, and external stakeholders.',
      ],
    },
    {
      period: '2024 – Present',
      role: 'B.Tech in Artificial Intelligence & Machine Learning – VNR VJIET',
      techStack: 'Data Structures, Algorithms, Machine Learning, DBMS, System Design (9.42 CGPA)',
      description:
        'Maintaining an exceptional 9.42 / 10 CGPA (3rd Year). Class XI–XII: 98.6%. Double award winner at Convergence 2K26 (Scale Challenge 1st Place & Project Contest 2nd Place), 3rd Prize at Vistera 2K26 (top 1% of 1600+), LeetCode Rating 1844.',
    },
  ];

  return (
    <div id="experience" className="relative w-full overflow-clip scroll-mt-20">
      <div className="w-full bg-white dark:bg-neutral-950 font-Outfit md:px-10" ref={containerRef}>
        <div className="max-w-7xl mx-auto py-20 px-4 md:px-8 lg:px-10">
          <h4 className="text-sm md:text-base font-Outfit uppercase tracking-widest text-purple-600 dark:text-purple-400 font-semibold mb-2">
            Career & Leadership
          </h4>
          <h2 className="text-3xl md:text-5xl mb-4 text-black dark:text-white max-w-4xl font-Ovo">
            Experience & Journey
          </h2>
          <p className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base max-w-2xl font-Outfit">
            A track record of machine learning internships, full-stack platform engineering, competitive programming achievements, and institutional leadership.
          </p>
        </div>

        <div ref={trackRef} className="relative max-w-7xl mx-auto pb-20">
          {items.map((item, index) => (
            <div
              key={index}
              className="flex justify-start pt-10 md:pt-20 md:gap-10"
            >
              <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
                <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-white dark:bg-black flex items-center justify-center border border-purple-500/30">
                  <div className="h-4 w-4 rounded-full bg-neutral-200 dark:bg-purple-500 border border-neutral-300 dark:border-purple-400 p-2" />
                </div>
                <h3 className="hidden md:block text-xl md:pl-20 md:text-2xl font-bold text-neutral-500 dark:text-neutral-400 font-Outfit">
                  {item.period}
                </h3>
              </div>

              <div className="relative pl-20 pr-4 md:pl-4 w-full">
                <h3 className="md:hidden block text-xl mb-4 text-left font-bold text-neutral-500 dark:text-neutral-400 font-Outfit">
                  {item.period}
                </h3>
                <div>
                  <h4 className="text-xl md:text-2xl font-bold text-neutral-900 dark:text-white mb-2 font-Outfit">
                    {item.role}
                  </h4>
                  <p className="text-xs md:text-sm font-mono text-purple-600 dark:text-purple-400 mb-4 bg-purple-500/10 w-fit px-3 py-1 rounded-full border border-purple-500/20">
                    {item.techStack}
                  </p>
                  <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-base font-normal mb-6 font-Outfit leading-relaxed">
                    {item.description}
                  </p>

                  {item.bullets && (
                    <ul className="space-y-2 mb-6">
                      {item.bullets.map((bullet, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-neutral-700 dark:text-neutral-300 font-Outfit">
                          <span className="text-purple-600 dark:text-purple-400 mt-1">▸</span>
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {item.images && item.images.length > 0 && (
                    <div className="grid grid-cols-2 gap-4">
                      {item.images.map((img, i) => (
                        <img
                          key={i}
                          src={img.src}
                          alt={img.alt}
                          className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-md"
                        />
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}

          {/* Animated vertical track bar */}
          <div
            style={{ height: height + 'px' }}
            className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
          >
            <motion.div
              style={{
                height: heightTransform,
                opacity: opacityTransform,
              }}
              className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-purple-500 via-sky-500 to-transparent from-[0%] via-[10%] rounded-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceSection;
