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
  title: string;
  subtitle: string;
  type: string;
  description: string;
  bullets: string[];
  tags: string[];
  metric: string;
  githubUrl: string;
}

export const PROJECTS: ProjectItem[] = [
  {
    title: 'FlowForge',
    subtitle: 'Visual Workflow Automation Platform',
    type: 'Individual Project',
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
    title: 'CarConnect',
    subtitle: 'Online Used Car Marketplace',
    type: 'Individual Project',
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
    title: 'LearnBridge',
    subtitle: 'Learning Management Platform',
    type: 'Individual Project',
    description: 'A full-stack 2-role learning platform for Students and Instructors featuring dedicated dashboards, 43 REST APIs, Google OAuth, and learning progress analytics.',
    bullets: [
      'Built a 2-role learning platform for Students and Instructors with dedicated dashboards for course and learner management.',
      'Developed 43 REST APIs for authentication, courses, enrollments, materials, messaging, profiles, and analytics.',
      'Implemented JWT authentication, Google OAuth, bcrypt hashing, RBAC, course publishing, enrollments, and file uploads.',
      'Added 4 analytics metrics to track enrollments, materials, messages, and learning progress.',
    ],
    tags: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'REST APIs', 'JWT', 'Tailwind CSS', 'Google OAuth'],
    metric: '43 REST APIs | 4 Analytics Metrics',
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
  { value: 3, suffix: '', label: 'Production Projects' },
  { value: 43, suffix: '+', label: 'REST APIs Developed' },
  { value: 9000, suffix: '+', label: 'AI Samples Evaluated' },
];
