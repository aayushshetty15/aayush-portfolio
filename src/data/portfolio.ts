export const NAV_ITEMS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
] as const;

export interface SkillItem {
  name: string;
  level: number;
  category: string;
}

export const SKILLS: SkillItem[] = [
  // Frameworks & Libraries
  { name: 'React', level: 90, category: 'Frameworks & Libraries' },
  { name: 'Node.js', level: 88, category: 'Frameworks & Libraries' },
  { name: 'Express.js', level: 86, category: 'Frameworks & Libraries' },
  { name: 'Tailwind CSS', level: 85, category: 'Frameworks & Libraries' },

  // Programming Languages
  { name: 'JavaScript', level: 90, category: 'Programming Languages' },
  { name: 'TypeScript', level: 86, category: 'Programming Languages' },
  { name: 'Python', level: 80, category: 'Programming Languages' },
  { name: 'PHP', level: 82, category: 'Programming Languages' },
  { name: 'HTML5', level: 95, category: 'Programming Languages' },
  { name: 'CSS3', level: 90, category: 'Programming Languages' },

  // Databases
  { name: 'MongoDB', level: 88, category: 'Databases' },
  { name: 'MySQL', level: 85, category: 'Databases' },
  { name: 'Firebase', level: 75, category: 'Databases' },

  // Tools & Platforms
  { name: 'Git', level: 88, category: 'Tools & Platforms' },
  { name: 'GitHub', level: 88, category: 'Tools & Platforms' },
  { name: 'MERN Stack', level: 90, category: 'Tools & Platforms' },
  { name: 'REST APIs', level: 92, category: 'Tools & Platforms' },
  { name: 'CRUD Operations', level: 90, category: 'Tools & Platforms' },
  { name: 'Authentication & Authorization', level: 88, category: 'Tools & Platforms' },
  { name: 'API Integration', level: 88, category: 'Tools & Platforms' },
];

export const SOFT_SKILLS = [
  'Communication',
  'Team Work',
  'Problem Solving',
  'Time Management',
];

export const SPOKEN_LANGUAGES = ['English', 'Hindi', 'Kannada'];

export interface ExperienceItem {
  role: string;
  company: string;
  location: string;
  period: string;
  type: string;
  description: string;
  achievements: string[];
  technologies: string[];
}

export const EXPERIENCE: ExperienceItem[] = [
  {
    role: 'Full Stack Developer',
    company: 'Zephyr Technologies',
    location: 'Mangalore, Karnataka',
    period: 'Aug 2026 — Nov 2026',
    type: 'Internship • On-site',
    description: 'Worked on full-stack application development, building interactive components, improving system performance, and managing workflows using modern software development tools.',
    achievements: [
      'Develop and enhance 5+ application features based on project requirements and user needs.',
      'Implement and test 10+ software components to improve application functionality and reliability.',
      'Debug and resolve 15+ application issues to maintain smooth system performance and reduce recurring errors.',
      'Collaborate with team members using Git and modern development tools across 3+ development workflows.',
    ],
    technologies: ['MongoDB', 'Express', 'React', 'Node.js', 'Tailwind CSS', 'PHP'],
  },
  {
    role: 'Research Intern',
    company: 'National Institute of Engineering and Technology',
    location: 'Surathkal, Karnataka',
    period: 'Feb 2026 — May 2026',
    type: 'Internship • On-site',
    description: 'Completed a 4-month research internship focused on AI-driven image understanding, dataset curation, quality evaluation, and benchmarking.',
    achievements: [
      'Completed a 4-month research internship focused on AI-driven image understanding and model evaluation.',
      'Conducted performance evaluation of AI models using a dataset of 9,000+ image-question pairs and metrics including Exact Match (EM).',
      'Performed data preprocessing, validation, and quality assessment on 9,000+ research samples to ensure consistency and reliability.',
      'Contributed to research dataset curation, experimental analysis, and model benchmarking for image-understanding tasks.',
      'Used Python and Git for research data analysis, preprocessing, and experiment management.',
    ],
    technologies: ['Python', 'Git', 'Data Preprocessing', 'Dataset Curation', 'AI Model Evaluation'],
  },
];

export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  type: string;
  description: string;
  bullets: string[];
  tags: string[];
  metric: string;
  githubUrl: string;
  liveUrl?: string;
  hasRedBorder?: boolean;
  image?: string;
}

export const PROJECTS: ProjectItem[] = [
  {
    id: 'flowforge',
    title: 'FlowForge',
    subtitle: 'Visual Workflow Automation Platform',
    category: 'WEB DESIGN / DEVELOPMENT',
    type: 'Individual Project',
    hasRedBorder: true,
    image: '/projects/flowforge-thumb.png',
    description: 'A visual workflow automation platform supporting 4 node types (Webhook, Condition, HTTP, Notification), cycle-protected execution, 3-layer rate limiting, and comprehensive acceptance testing.',
    bullets: [
      'Built a visual workflow automation platform supporting 4 node types: Webhook, Condition, HTTP, and Notification.',
      'Implemented a workflow engine with 50-step cycle protection and 30-second execution timeouts.',
      'Added 3-layer rate limiting, JWT authentication, Zod validation, SSRF protection, and detailed execution auditing.',
      'Developed 45 automated acceptance tests covering authentication, workflows, webhooks, branching, audit logs, and multi-tenant isolation.',
    ],
    tags: ['MongoDB', 'Express', 'React', 'Node.js', 'Tailwind CSS', 'JWT', 'Zod'],
    metric: '45 Acceptance Tests | 50-Step Protection',
    githubUrl: 'https://github.com/aayushshetty15',
  },
  {
    id: 'carconnect',
    title: 'CarConnect',
    subtitle: 'Online Used Car Marketplace',
    category: 'DATABASE & SYSTEM ARCHITECTURE',
    type: 'Individual Project',
    hasRedBorder: false,
    image: '/projects/carconnect-thumb.png',
    description: 'A multi-role marketplace with 70+ PHP files supporting authentication, listings, search, messaging, orders, and reviews with a 13-table MySQL database and analytics modules.',
    bullets: [
      'Built a 3-role marketplace with 70+ PHP files supporting authentication, listings, search, messaging, orders, and reviews.',
      'Designed a 13-table MySQL database for users, vehicles, transactions, and marketplace operations.',
      'Implemented 4 analytics modules for sales, vehicle views, conversion rates, and user activity.',
      'Added OTP verification, RBAC, password hashing, prepared SQL queries, and admin listing approval for secure operations.',
    ],
    tags: ['PHP', 'HTML', 'CSS', 'MySQL', 'JavaScript'],
    metric: '70+ PHP Files | 13-Table MySQL DB',
    githubUrl: 'https://github.com/aayushshetty15',
  },
  {
    id: 'munchly',
    title: 'Munchly',
    subtitle: 'Reels-Based Food Discovery Platform',
    category: 'FULL STACK / STREAMING PLATFORM',
    type: 'Individual Project',
    hasRedBorder: false,
    description: 'A MERN-stack food discovery platform featuring a vertical, reels-style video feed for browsing food content and partners, 2-role JWT authentication, 4 core backend REST capabilities, and ImageKit cloud media integration.',
    bullets: [
      'Built a MERN-stack food discovery platform featuring a vertical, reels-style video feed for browsing food content and food partners.',
      'Implemented 2 distinct user roles with JWT-based authentication, protected routes, and cookie-based session handling.',
      'Developed 4 core backend capabilities: authentication, food content creation, content retrieval, and media uploads using REST APIs.',
      'Integrated 1 cloud media service (ImageKit) with Multer and Axios for media uploads and frontend-backend communication.',
    ],
    tags: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'REST APIs', 'JWT', 'Tailwind CSS', 'Google OAuth'],
    metric: 'Reels Video Feed | ImageKit Cloud Media',
    githubUrl: 'https://github.com/aayushshetty15',
  },
  {
    id: 'portfolio',
    title: 'Personal Portfolio',
    subtitle: 'Interactive 3D Developer Website',
    category: 'CREATIVE TECH / 3D WEB EXPERIENCE',
    type: 'Individual Project',
    hasRedBorder: true,
    image: '/projects/portfolio-thumb.png',
    description: 'A high-performance modern developer portfolio with an interactive 3D tech stack physics model in Three.js and React Three Fiber, 2 theme modes with localStorage persistence, glassmorphism UI, and responsive layouts across all device viewports.',
    bullets: [
      'Developed a responsive portfolio using 4 core technologies: React, Vite, TypeScript, and Tailwind CSS to showcase projects, skills, education, and experience.',
      'Integrated an interactive 3D tech stack model using Three.js and React Three Fiber for an immersive user experience.',
      'Implemented 2 theme modes with persistent preferences using localStorage, alongside gradient effects, glassmorphism, and hover animations.',
      'Designed 3 responsive layout categories—desktop, tablet, and mobile—with reusable React components and interactive UI elements.',
    ],
    tags: ['React', 'Vite', 'TypeScript', 'Tailwind CSS', 'Three.js', 'React Three Fiber', 'Node.js', 'MongoDB'],
    metric: 'Three.js 3D Physics | Dual Theme Engine',
    githubUrl: 'https://github.com/aayushshetty15',
  },
];

export const EDUCATION = [
  {
    degree: 'B.E in Information Science and Engineering',
    institution: 'AJ Institute of Engineering and Technology',
    period: 'Dec 2022 — May 2026',
    description: 'CGPA: 7.68 / 10. AJ Institute of Engineering and Technology, Mangaluru.',
  },
  {
    degree: 'Pre-University (PCMS)',
    institution: 'Govinda Dasa PU College',
    period: 'Jun 2020 — Aug 2022',
    description: 'Grade: 93%.',
  },
  {
    degree: 'Secondary Education',
    institution: 'Dr M.R.S.M English Medium High School',
    period: '2020',
    description: 'Central Board of Secondary Education (CBSE). Grade: 78%.',
  },
];

export const STATS = [
  { value: 2, suffix: '', label: 'Internships Completed' },
  { value: 4, suffix: '', label: 'Production Projects' },
  { value: 45, suffix: '+', label: 'Acceptance Tests' },
  { value: 9000, suffix: '+', label: 'AI Samples Evaluated' },
];

