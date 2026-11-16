export interface Project {
  id: string;
  title: string;
  category: 'AI & Machine Learning' | 'AI & Optimization' | 'Full-Stack' | 'Core CS & Software Dev' | 'AI & IoT';
  subtitle: string;
  description: string;
  longDescription: string;
  image: string;
  tags: string[];
  metrics: { label: string; value: string }[];
  architecture: string[];
  highlights: string[];
  links: {
    github?: string;
    live?: string;
    demo?: string;
  };
  featured: boolean;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  status: 'Current' | 'Completed';
  summary: string;
  achievements: string[];
  technologies: string[];
  type: 'Engineering' | 'Leadership' | 'Academic';
}

export interface SkillCategory {
  category: string;
  icon: string;
  description: string;
  skills: {
    name: string;
    level: number;
    experience: string;
    highlight?: boolean;
  }[];
}

export interface Award {
  title: string;
  issuer: string;
  date: string;
  badge: string;
  description: string;
}

export interface Certification {
  name: string;
  issuer: string;
  year: string;
  credentialId?: string;
}

export const PERSONAL_INFO = {
  name: 'Bhanu Teja',
  fullName: 'Aitha Bhanu Teja',
  role: 'AI & Machine Learning Engineer | Full-Stack Developer',
  tagline: 'Architecting explainable AI pipelines, intelligent digital twin systems, and scalable full-stack applications.',
  bio: 'Pre-final year B.Tech in Artificial Intelligence and Machine Learning at VNR VJIET (9.42 CGPA). Specializing in machine learning modeling (LightGBM, XGBoost, Scikit-learn), explainable AI (SHAP), digital twin simulations, and end-to-end full-stack architectures. Proven competitive programmer with a LeetCode rating of 1844 and Winner of the Convergence 2K26 System Design Scale Challenge.',
  location: 'Hyderabad, Telangana, India',
  email: 'bhanuteja1977@gmail.com',
  phone: '+91-868-8928-793',
  resumeUrl: '/bhanu_teja_resume.pdf',
  social: {
    github: 'https://github.com/bhanu-teja1977',
    linkedin: 'https://www.linkedin.com/in/aitha-bhanu-teja-3b13a738b/',
    leetcode: 'https://leetcode.com/u/bhanuteja190707/',
    codechef: 'https://www.codechef.com/users/bhanuteja1977',
  },
  codingStats: {
    leetcodeRating: 1844,
    leetcodeRanking: 'Top Tier',
    leetcodeSolved: 229,
    codechefRating: 1530,
    codechefDiv: 'Div 3',
    codechefSolved: 264,
    totalProblems: '490+',
  },
  availability: 'Open for AI/ML & Software Engineering Internships',
  currentFocus: 'Explainable AI, Digital Twin Modeling, and High-Throughput REST APIs',
  stats: [
    { label: 'Academic CGPA', value: '9.42' },
    { label: 'LeetCode Rating', value: '1844' },
    { label: 'Contest Standing', value: '1844 Peak' },
    { label: 'Total Problems Solved', value: '490+' },
    { label: 'PhishGuard Accuracy', value: '92%' },
    { label: 'Convergence 2K26', value: '2x Awards' },
  ],
};

export const PROJECTS: Project[] = [
  {
    id: 'phishguard',
    title: 'PHISHGUARD',
    category: 'AI & Machine Learning',
    subtitle: 'Explainable Machine Learning-Based Phishing URL Risk Scoring System',
    description: 'Developed an ML-powered phishing URL detection system with LightGBM (92% accuracy), SHAP explainable AI, and a real-time risk-scoring engine (0–100) served via FastAPI and React.',
    longDescription: 'PhishGuard is an explainable machine learning detection pipeline designed to protect users by identifying malicious and phishing URLs in real time. Rigorously evaluated Logistic Regression, Random Forest, XGBoost, and LightGBM across structural, lexical, and domain entropy features. Selected LightGBM for superior inference latency and 92% classification accuracy. Integrated SHAP (SHapley Additive exPlanations) to demystify black-box predictions by computing token-level contribution scores, mapped to an intuitive 0–100 risk score and served via a high-performance FastAPI backend with an interactive React/Next.js frontend.',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1200&q=80',
    tags: ['Python', 'LightGBM', 'XGBoost', 'Scikit-learn', 'SHAP (XAI)', 'FastAPI', 'React', 'TypeScript'],
    metrics: [
      { label: 'Model Accuracy', value: '92%' },
      { label: 'Risk Score Range', value: '0–100' },
      { label: 'Inference Latency', value: '<50ms' },
      { label: 'Interpretability', value: 'SHAP (XAI)' },
    ],
    architecture: [
      'Lexical, statistical, and domain entropy feature extraction from raw URL strings',
      'Comparative benchmarking across Logistic Regression, Random Forest, XGBoost, and LightGBM',
      'SHAP TreeExplainer integration attributing positive/negative risk weights to URL tokens',
      'FastAPI asynchronous microservice providing sub-50ms REST scoring to React client'
    ],
    highlights: [
      'Selected LightGBM as the optimal production model with 92% accuracy and low latency',
      'Implemented explainable AI via SHAP values, providing transparent rationale for every flagged URL',
      'Engineered an intuitive 0–100 risk score with visual risk tiers (Safe, Suspicious, Dangerous)'
    ],
    links: {
      github: 'https://github.com/bhanu-teja1977',
    },
    featured: true
  },
  {
    id: 'aerotwin',
    title: 'AeroTwin',
    category: 'AI & Machine Learning',
    subtitle: 'AI-Enabled Real-Time Digital Twin System for Aero Piston Engines in MALE UAVs',
    description: 'AI-powered digital twin simulation and predictive telemetry pipeline for real-time health monitoring and anomaly detection in Medium-Altitude Long-Endurance (MALE) UAV piston engines.',
    longDescription: 'AeroTwin is an intelligent cyber-physical digital twin architecture engineered for aero piston engines used in Medium-Altitude Long-Endurance (MALE) Unmanned Aerial Vehicles. The system ingests streaming multi-sensor telemetry (manifold pressure, cylinder head temperatures, RPM, vibration spectra) and applies machine learning models to simulate nominal engine behavior in real time, forecast component wear, and flag anomalous combustion transients before inflight engine failure occurs.',
    image: 'https://images.unsplash.com/photo-1517976487584-60172c918ee4?auto=format&fit=crop&w=1200&q=80',
    tags: ['Python', 'Digital Twin', 'Machine Learning', 'IoT Telemetry', 'FastAPI', 'Streamlit', 'Predictive Analysis'],
    metrics: [
      { label: 'Domain', value: 'MALE UAVs' },
      { label: 'Telemetry Stream', value: 'Real-Time' },
      { label: 'Monitoring Scope', value: 'Multi-Sensor' },
      { label: 'Alerting', value: 'Proactive Faults' },
    ],
    architecture: [
      'Multi-sensor telemetry ingestion pipeline processing engine speed, temperatures, and pressures',
      'Machine learning model capturing engine thermodynamic and mechanical operational envelopes',
      'Real-time digital twin state estimator comparing live telemetry against simulated nominal baselines',
      'Predictive health dashboard alerting operators to thermal stress spikes and component degradation'
    ],
    highlights: [
      'Simulates nominal operational states in real time for MALE UAV aero piston engines',
      'Proactively flags combustion anomalies and thermal stress spikes prior to critical degradation',
      'Open-source repository available on GitHub with full simulation workflows'
    ],
    links: {
      github: 'https://github.com/bhanu-teja1977/Digital_Twin',
    },
    featured: true
  },
  {
    id: 'greenfleet-q',
    title: 'GreenFleet-Q',
    category: 'AI & Optimization',
    subtitle: 'AI-Driven Maritime Optimization Platform (Runner-Up at Convergence 2K26)',
    description: 'Engineered an AI-driven maritime platform using Random Forest and Quantum Particle Swarm Optimization (QPSO) to predict fuel consumption and dynamic voyage routes from weather datasets.',
    longDescription: 'GreenFleet-Q is an award-winning intelligent maritime decision-support platform designed to minimize bunker fuel consumption and maritime emissions. Built by Team TechnoForge at VNR VJIET, the system analyzes oceanic weather datasets (wave height, wind speed, currents) and deploys Random Forest regression coupled with Quantum Particle Swarm Optimization (QPSO) to compute fuel-optimal dynamic voyage trajectories. Inferences are served via a high-performance FastAPI backend to an interactive React.js map dashboard with Leaflet and Recharts.',
    image: 'https://images.unsplash.com/photo-1505705694340-019e1e335916?auto=format&fit=crop&w=1200&q=80',
    tags: ['Python', 'FastAPI', 'Scikit-learn', 'Random Forest', 'QPSO', 'React.js', 'Leaflet', 'Recharts'],
    metrics: [
      { label: 'Award', value: '2nd Place (Runner-Up)' },
      { label: 'Event', value: 'Convergence 2K26' },
      { label: 'Optimization', value: 'QPSO Algorithm' },
      { label: 'Backend', value: 'FastAPI' },
    ],
    architecture: [
      'Oceanic weather data pipeline processing meteorological conditions and hydrodynamics',
      'Random Forest fuel consumption estimation model calibrated on maritime vessel profiles',
      'Quantum Particle Swarm Optimization (QPSO) solver generating global minimum-energy routes',
      'Interactive React and Leaflet geospatial map UI with real-time waypoint adjustments and Recharts graphs'
    ],
    highlights: [
      'Awarded 2nd Place in the Project Contest at Convergence 2K26, VNR VJIET',
      'Engineered dynamic route adjustments reducing projected fuel consumption under turbulent seas',
      'Integrated responsive Leaflet interactive route plotting and telemetry visualization'
    ],
    links: {
      github: 'https://github.com/bhanu-teja1977',
    },
    featured: true
  },
  {
    id: 'signalsafe',
    title: 'SignalSafe',
    category: 'AI & Machine Learning',
    subtitle: 'AI-Powered Travel Safety and Cellular Connectivity Platform',
    description: 'Cellular connectivity analysis and signal-quality prediction platform leveraging spatial indexing and leakage-safe machine learning across real-world drive-test datasets.',
    longDescription: 'SignalSafe addresses travel communication dead zones by predicting cellular signal quality along transit corridors. Processed large-scale real-world drive-test datasets, applying spatial indexing and rigorous leakage-safe cross-validation pipelines. Evaluated Random Forest, ExtraTrees, Ridge Regression, and XGBoost to deliver reliable signal quality indices that help commuters plan safe journeys and emergency fallback communication points.',
    image: 'https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&w=1200&q=80',
    tags: ['Python', 'XGBoost', 'Random Forest', 'ExtraTrees', 'Spatial Indexing', 'FastAPI', 'Scikit-learn'],
    metrics: [
      { label: 'Dataset', value: 'Real Drive-Tests' },
      { label: 'Best Model', value: 'XGBoost / ExtraTrees' },
      { label: 'Validation', value: 'Leakage-Safe Spatial' },
      { label: 'Inference', value: 'Sub-second' },
    ],
    architecture: [
      'Spatial indexing engine partitioning geospatial signal measurements along transit corridors',
      'Leakage-safe group cross-validation preventing spatial auto-correlation overfitting',
      'Ensemble regressor combining ExtraTrees and XGBoost for cellular quality forecasting',
      'FastAPI microservice exposing geo-coordinate signal quality lookups'
    ],
    highlights: [
      'Prevented data leakage using strict spatial block splitting across transit routes',
      'Delivered reliable signal quality predictions empowering travelers in cellular dead zones',
      'Engineered clean REST endpoints for GPS location query evaluations'
    ],
    links: {
      github: 'https://github.com/bhanu-teja1977',
    },
    featured: true
  },
  {
    id: 'grainpulse',
    title: 'GrainPulse',
    category: 'AI & IoT',
    subtitle: 'AI-Assisted Grain Storage Monitoring & Quality Assessment System',
    description: 'Intelligent grain storage preservation platform combining sensor telemetry, environmental anomaly detection, and automated spoilage risk alerts.',
    longDescription: 'GrainPulse is an intelligent agricultural monitoring solution developed to prevent post-harvest grain losses in storage facilities and silos. Continuously monitors temperature, humidity, and environmental sensor streams to detect micro-climate anomalies indicative of pest infestation or moisture spikes. Incorporates predictive algorithms to forecast spoilage risks and trigger automated alerts, validated with comprehensive backend test suites and frontend production builds.',
    image: 'https://images.unsplash.com/photo-1574943320219-553eb213f72d?auto=format&fit=crop&w=1200&q=80',
    tags: ['Python', 'FastAPI', 'React', 'IoT Telemetry', 'Predictive Modeling', 'Tailwind CSS'],
    metrics: [
      { label: 'Monitoring Scope', value: 'Temperature & Humidity' },
      { label: 'Alerting', value: 'Automated Spoilage Triggers' },
      { label: 'Validation', value: 'Tests & Production Build' },
      { label: 'Architecture', value: 'Full-Stack' },
    ],
    architecture: [
      'Silo sensor telemetry ingestion engine for environmental parameters',
      'Time-series anomaly detection identifying localized thermal and humidity spikes',
      'FastAPI REST backend with verified unit/integration testing',
      'Modern React dashboard with real-time silo condition gauges'
    ],
    highlights: [
      'Successfully validated backend test suites and frontend production builds',
      'Proactively alerts facility operators before mold and pest proliferation occurs',
      'Designed for low-cost, decentralized rural grain storage deployments'
    ],
    links: {
      github: 'https://github.com/bhanu-teja1977',
    },
    featured: false
  },
  {
    id: 'drishyamitra',
    title: 'DrishyaMitra',
    category: 'Full-Stack',
    subtitle: 'MERN Stack Web Application with Intuitive Interfaces & RESTful APIs',
    description: 'Designed and developed a responsive full-stack MERN web application featuring RESTful API architectures, MongoDB data persistence, and interactive user experiences.',
    longDescription: 'DrishyaMitra is a comprehensive full-stack MERN application built with React.js, Node.js, Express.js, and MongoDB. Features secure user authentication, responsive UI components styled with modern CSS/Tailwind, modular RESTful APIs for efficient data storage and retrieval, and complete CRUD functionality.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
    tags: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'REST APIs', 'JavaScript', 'Tailwind CSS'],
    metrics: [
      { label: 'Stack', value: 'MERN Stack' },
      { label: 'API Architecture', value: 'RESTful' },
      { label: 'Database', value: 'MongoDB' },
      { label: 'UI Responsiveness', value: '100% Mobile Ready' },
    ],
    architecture: [
      'Modular React component architecture with reusable UI state patterns',
      'Express.js REST API layer with token authentication and input sanitization',
      'MongoDB database integration with indexed collections for fast retrieval',
      'Clean Tailwind CSS design system with responsive layouts'
    ],
    highlights: [
      'Smooth data interaction with optimized query handling and responsive state management',
      'Engineered clean RESTful endpoints adhering to industry conventions',
      'Full Git version-controlled development workflow'
    ],
    links: {
      github: 'https://github.com/bhanu-teja1977',
    },
    featured: false
  },
  {
    id: 'railway-management',
    title: 'Railway Management System',
    category: 'Core CS & Software Dev',
    subtitle: 'Object-Oriented Java Database Application with JDBC & MySQL',
    description: 'Developed a robust Java-based railway management system managing train scheduling, ticket reservations, passenger records, and ACID database transactions via JDBC.',
    longDescription: 'Railway Management System is an enterprise-pattern Java application designed to automate railway ticketing operations, train dispatch schedules, and passenger manifests. Engineered with clean Object-Oriented Programming (OOP) principles and integrated with MySQL database via Java Database Connectivity (JDBC) for transactional integrity and secure CRUD operations.',
    image: 'https://images.unsplash.com/photo-1474487548417-781cb71495f3?auto=format&fit=crop&w=1200&q=80',
    tags: ['Java', 'MySQL', 'JDBC', 'OOP', 'Database Management', 'Transaction Management'],
    metrics: [
      { label: 'Core Language', value: 'Java' },
      { label: 'Connectivity', value: 'JDBC' },
      { label: 'Database', value: 'MySQL' },
      { label: 'Architecture', value: 'OOP Design' },
    ],
    architecture: [
      'Object-oriented domain model representing trains, routes, passengers, and reservations',
      'JDBC connection layer managing transactional consistency and parameterized queries',
      'Relational MySQL schema with foreign keys, constraints, and index optimizations',
      'Administrative logic for rapid ticketing workflows and schedule updates'
    ],
    highlights: [
      'Implemented secure database operations preventing SQL injection via PreparedStatement',
      'Handled concurrent seat reservation logic with transactional locking',
      'Demonstrated deep foundational strength in OOP and relational database theory'
    ],
    links: {
      github: 'https://github.com/bhanu-teja1977',
    },
    featured: false
  }
];

export const EXPERIENCES: Experience[] = [
  {
    id: 'shadowfox-aiml',
    role: 'AI/ML Intern',
    company: 'ShadowFox',
    location: 'Remote',
    period: 'Jul 2026 — Aug 2026',
    status: 'Completed',
    type: 'Engineering',
    summary: 'Developed machine learning models for predictive pricing and conducted benchmarking of transformer-based language models for NLP evaluation.',
    achievements: [
      'Car Selling Price Prediction: Developed an ML model to estimate car selling prices using vehicle features, statistical analysis, and regression modeling.',
      'Language Model Analysis: Implemented and benchmarked transformer-based language models for NLP tasks, conducting token-level contextual analysis and text generation evaluation across benchmark datasets.',
      'Applied feature engineering, multicollinearity checks, and cross-validation pipelines to maximize model generalization.'
    ],
    technologies: ['Python', 'Scikit-learn', 'Transformers (HuggingFace)', 'NLP', 'Pandas', 'NumPy', 'Regression Analysis'],
  },
  {
    id: 'vjstartups-fullstack',
    role: 'Full Stack Intern',
    company: 'VJ Startups',
    location: 'Hyderabad, India (On-site)',
    period: 'Jun 2026 — Jul 2026',
    status: 'Completed',
    type: 'Engineering',
    summary: 'Engineered institutional MOU management platforms and interactive administrative analytics dashboards.',
    achievements: [
      'MOU Management System: Developed a web-based platform to manage institutional MOUs, enterprise partnerships, student opportunities, and resource utilization.',
      'MOU Analytics Dashboard: Built real-time analytics dashboards to track MOU utilization metrics, collaborative activities, and venture milestones.',
      'Integrated responsive frontend interfaces with backend data APIs for seamless administrative tracking.'
    ],
    technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'REST APIs', 'Tailwind CSS', 'Analytics Dashboards'],
  },
  {
    id: 'iste-pr-coordinator',
    role: 'PR Coordinator',
    company: 'ISTE Student Chapter, VNR VJIET',
    location: 'Hyderabad, India',
    period: '2025 — Present',
    status: 'Current',
    type: 'Leadership',
    summary: 'Organizing technical workshops, curating competitive programming problem sets, and managing student orientation initiatives.',
    achievements: [
      'Organized technical workshops and competitive coding contests for 400+ engineering participants.',
      'Prepared problem statements and test cases for algorithmic contests in C++, Python, and Java.',
      'Delivered keynote speeches during university student orientation and technical outreach programs.'
    ],
    technologies: ['Event Management', 'Competitive Programming', 'Public Speaking', 'Problem Formulation', 'Team Leadership'],
  },
  {
    id: 'vjstartups-leadership',
    role: 'Wing Master & Program Manager',
    company: 'VJ Startups',
    location: 'Hyderabad, India',
    period: '2025 — Present',
    status: 'Current',
    type: 'Leadership',
    summary: 'Spearheading student innovation programs, mentoring startup cohorts, and overseeing institutional initiatives.',
    achievements: [
      'Supervised cross-functional student teams across incubation programs and startup cohorts.',
      'Coordinated ideation challenges, pitch presentations, and developer sprint reviews.',
      'Facilitated communication between student innovators, faculty mentors, and external stakeholders.'
    ],
    technologies: ['Program Management', 'Startup Incubation', 'Agile Leadership', 'Technical Mentorship'],
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    category: 'Programming Languages',
    icon: 'Code',
    description: 'Object-oriented programming, systems development, and data scripting',
    skills: [
      { name: 'Python', level: 95, experience: 'Scikit-learn, LightGBM, FastAPI, SHAP, Pandas', highlight: true },
      { name: 'C++', level: 90, experience: 'Data Structures, Algorithms, Competitive Programming', highlight: true },
      { name: 'C', level: 88, experience: 'Low-level programming, memory management, pointers' },
      { name: 'JavaScript (ES6+)', level: 92, experience: 'React, Node.js, asynchronous web runtimes', highlight: true },
      { name: 'Java', level: 86, experience: 'Object-Oriented Programming, JDBC, Railway System' },
      { name: 'SQL', level: 90, experience: 'Complex queries, schema design, relational modeling', highlight: true },
    ]
  },
  {
    category: 'AI & Machine Learning',
    icon: 'Sparkles',
    description: 'Predictive modeling, explainable AI, and neural language models',
    skills: [
      { name: 'Scikit-learn', level: 94, experience: 'Regression, Classification, Cross-validation', highlight: true },
      { name: 'LightGBM & XGBoost', level: 92, experience: 'Gradient boosting ensembles, 92% URL accuracy', highlight: true },
      { name: 'SHAP (Explainable AI)', level: 90, experience: 'Feature attribution, model interpretability', highlight: true },
      { name: 'Transformers & NLP', level: 86, experience: 'HuggingFace, token-level analysis, benchmarking', highlight: true },
      { name: 'Pandas & NumPy', level: 94, experience: 'Data cleaning, feature engineering, statistical analysis' },
      { name: 'Random Forest & Ensembles', level: 92, experience: 'QPSO route optimization, feature selection' },
    ]
  },
  {
    category: 'Web Development',
    icon: 'Layout',
    description: 'Modern frontend interfaces and high-throughput backend microservices',
    skills: [
      { name: 'React.js', level: 94, experience: 'Custom hooks, state management, SPA architecture', highlight: true },
      { name: 'Next.js', level: 88, experience: 'Server-side rendering, routing, modern web UI' },
      { name: 'FastAPI', level: 92, experience: 'Asynchronous Python REST APIs, ML model serving', highlight: true },
      { name: 'Node.js & Express', level: 90, experience: 'RESTful APIs, middleware, MERN backend', highlight: true },
      { name: 'Tailwind CSS', level: 95, experience: 'Modern utility-first styling, dark mode, responsive', highlight: true },
      { name: 'HTML5 & CSS3', level: 95, experience: 'Semantic layouts, accessible web, animations' },
    ]
  },
  {
    category: 'Databases & Storage',
    icon: 'Database',
    description: 'Relational data stores, document databases, and cloud persistence',
    skills: [
      { name: 'MySQL', level: 90, experience: 'JDBC transactions, relational schemas, indexing', highlight: true },
      { name: 'MongoDB', level: 88, experience: 'NoSQL collections, MERN stack, data aggregation', highlight: true },
      { name: 'PostgreSQL', level: 86, experience: 'ACID transactions, relational design, queries' },
      { name: 'Firebase', level: 85, experience: 'Real-time database, authentication, cloud storage' },
      { name: 'Supabase', level: 84, experience: 'PostgreSQL cloud backend, auth, REST APIs' },
    ]
  },
  {
    category: 'Developer Tools & Platforms',
    icon: 'Cpu',
    description: 'Version control, cloud platforms, and developer utilities',
    skills: [
      { name: 'Git & GitHub', level: 94, experience: 'Version control, branch workflows, open source', highlight: true },
      { name: 'AWS Cloud', level: 84, experience: 'AWS Cloud Practitioner Essentials, compute & S3', highlight: true },
      { name: 'Docker', level: 82, experience: 'Containerization, reproducible deployment environments' },
      { name: 'Postman', level: 90, experience: 'REST API testing, endpoint validation, mock servers' },
      { name: 'Linux / Bash', level: 86, experience: 'Shell scripting, environment setup, command line' },
    ]
  },
  {
    category: 'Core Computer Science',
    icon: 'Server',
    description: 'Theoretical foundations, systems architecture, and algorithmic design',
    skills: [
      { name: 'Data Structures & Algorithms', level: 95, experience: 'LeetCode 1844, 490+ problems solved', highlight: true },
      { name: 'Object-Oriented Programming (OOPS)', level: 94, experience: 'Encapsulation, inheritance, polymorphism in Java/C++', highlight: true },
      { name: 'Database Management Systems (DBMS)', level: 92, experience: 'Normalisation, ACID properties, query execution' },
      { name: 'System Design & Scalability', level: 88, experience: 'Winner of Convergence 2K26 Scale Challenge', highlight: true },
      { name: 'Problem Solving', level: 95, experience: 'CodeChef Div 3 (Rating 1530), contest rankings' },
    ]
  }
];

export const AWARDS: Award[] = [
  {
    title: 'Winner – Scale Challenge (System Design), CONVERGENCE 2K26',
    issuer: 'VNR VJIET',
    date: '2026',
    badge: '1st Place Winner',
    description: 'Won 1st Place in the Scale Challenge System Design competition by architecting a scalable, fault-tolerant, and high-performance distributed solution for a real-world problem.'
  },
  {
    title: 'Runner-Up – Project Contest, CONVERGENCE 2K26',
    issuer: 'VNR VJIET (Team TechnoForge)',
    date: '2026',
    badge: '2nd Place Runner-Up',
    description: 'Secured 2nd Place in the flagship Project Contest at Convergence 2K26 for GreenFleet-Q — an AI-driven maritime optimization platform combining Random Forest and QPSO algorithms.'
  },
  {
    title: '3rd Prize Winner: Vistera 2K26',
    issuer: 'Vistera 2K26',
    date: '2026',
    badge: '3rd Prize Winner',
    description: 'Won 3rd Prize among 1,600+ participants and 425+ teams for technical innovation and algorithmic implementation.'
  },
  {
    title: 'LeetCode Competitive Programming',
    issuer: 'LeetCode',
    date: '2025 – Present',
    badge: 'Rating 1844',
    description: 'Achieved a peak contest rating of 1844 (Top 11.39%) with 229+ algorithmic problems solved across data structures, dynamic programming, and graphs.'
  },
  {
    title: 'CodeChef Competitive Programming',
    issuer: 'CodeChef',
    date: '2025 – Present',
    badge: 'Div 3 (Max Rating 1530)',
    description: 'Active Div 3 competitive programmer with 264+ algorithmic problems solved and consistent performance in global rated contests.'
  }
];

export const CERTIFICATIONS: Certification[] = [
  {
    name: 'Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate',
    issuer: 'Oracle',
    year: '2025',
    credentialId: 'Certified AI Foundations Associate'
  },
  {
    name: 'AWS Cloud Practitioner Essentials',
    issuer: 'Amazon Web Services (AWS)',
    year: '2025',
    credentialId: 'Cloud Practitioner Essentials'
  }
];

export const EDUCATION = {
  institution: 'VNR Vignana Jyothi Institute of Engineering and Technology',
  degree: 'Bachelor of Technology in Artificial Intelligence and Machine Learning / CSE',
  university: 'VNR VJIET, Hyderabad (Autonomous)',
  period: '2024 — Present (3rd Year)',
  gpa: '9.42 / 10.0',
  previousEducation: {
    institution: 'Narayana Junior College, Hyderabad',
    score: '98.6%',
    period: '2022 — 2024 (Class XI–XII)'
  },
  schoolEducation: {
    institution: 'Kakatiya High School, Nizamabad',
    score: '10.00 GPA',
    period: '2021 — 2022 (Class X)'
  },
  coursework: [
    'Artificial Intelligence & Machine Learning',
    'Data Structures & Algorithms',
    'Database Management Systems (DBMS)',
    'Object-Oriented Programming (OOPS)',
    'Operating Systems',
    'Computer Networks',
    'System Design'
  ]
};

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    quote: "Bhanu demonstrated outstanding system architecture depth in the Convergence 2K26 Scale Challenge, delivering a resilient, fault-tolerant design under strict evaluation.",
    author: "Evaluation Panel",
    role: "System Design Challenge",
    company: "Convergence 2K26, VNR VJIET"
  },
  {
    quote: "His implementation of GreenFleet-Q combining QPSO route optimization with Random Forest inference achieved top marks for innovation and engineering execution.",
    author: "Project Contest Jury",
    role: "Technical Evaluation",
    company: "Convergence 2K26"
  },
  {
    quote: "Bhanu brings rare dual strength: sharp algorithmic clarity (LeetCode 1844) coupled with hands-on full-stack engineering maturity.",
    author: "Technical Mentor",
    role: "Engineering Lead",
    company: "VJ Startups"
  },
  {
    quote: "During his AI/ML internship, Bhanu delivered clean, maintainable machine learning workflows and benchmarked transformer models with high analytical rigor.",
    author: "Engineering Lead",
    role: "AI/ML Mentor",
    company: "ShadowFox"
  }
];
