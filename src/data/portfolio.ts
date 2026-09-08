export const NAV_ITEMS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
] as const;

export const SKILLS = [
  { name: 'React', level: 88, category: 'Frameworks & Libraries' },
  { name: 'Express.js', level: 84, category: 'Frameworks & Libraries' },
  { name: 'Node.js', level: 86, category: 'Frameworks & Libraries' },
  { name: 'Tailwind CSS', level: 82, category: 'Frameworks & Libraries' },
  { name: 'JavaScript', level: 88, category: 'Programming Languages' },
  { name: 'Python', level: 76, category: 'Programming Languages' },
  { name: 'PHP', level: 68, category: 'Programming Languages' },
  { name: 'HTML5', level: 94, category: 'Programming Languages' },
  { name: 'CSS3', level: 90, category: 'Programming Languages' },
  { name: 'MongoDB', level: 86, category: 'Databases' },
  { name: 'Firebase', level: 72, category: 'Databases' },
  { name: 'Git & GitHub', level: 84, category: 'Tools & Platforms' },
];

export const EXPERIENCE = [
  {
    role: 'Intern | Research Internship',
    company: 'National Institute of Engineering and Technology',
    period: 'Feb 2026 — May 2026',
    description: 'Completed a 4-month research internship focused on AI-driven image understanding and model evaluation at the National Institute of Engineering and Technology, Surathkal.',
    achievements: [
      'Evaluated model performance on 9,000+ image-question pairs using Exact Match and other evaluation metrics',
      'Preprocessed and quality-validated 9,000+ data samples for reliable model evaluation',
      'Organized research datasets for experimentation and benchmarking',
      'Streamlined dataset processing and evaluation workflows with Python and Git',
    ],
  },
  {
    role: 'Full Stack Developer Intern',
    company: 'Zephyr Technologies',
    period: 'Aug 2026 - Nov 2026',
    description: 'Worked on software development projects at Zephyr Technologies, gaining hands-on experience in application development, debugging, testing, and implementing practical software solutions.',

    achievements: [
    'Developed and enhanced application features based on project requirements',
    'Implemented and tested software components to improve functionality and reliability',
    'Debugged and resolved application issues to ensure smooth system performance',
    'Collaborated with team members using Git and modern development tools to manage project workflows'
    ],
  },
];

export const PROJECTS = [
  {
    title: 'SmartHire — AI-Powered Recruitment Platform',
    description: 'A full-stack recruitment platform for Recruiters and Job Seekers, with job posting, application management, secure authentication, role-based access control, 8+ RESTful API endpoints, and 5+ MongoDB collections.',
    tags: ['React', 'Node.js', 'Express', 'MongoDB'],
    metric: '10+ responsive pages | 100% protected routes',
  },
  {
    title: 'MediCare',
    description: 'A full-stack healthcare management system for Patients and Healthcare Providers, with appointment scheduling, patient records, prescriptions, medical information, 8+ RESTful API endpoints, and 8+ application modules.',
    tags: ['React', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS'],
    metric: '8+ modules | 8+ RESTful endpoints',
  },
];

export const EDUCATION = [
  {
    degree: 'B.E. in Computer Science and Engineering',
    institution: 'AJ Institute of Engineering and Technology',
    period: 'Dec 2022 — May 2026',
    description: 'CGPA: 7.68 / 10. AJ Institute of Engineering and Technology.'
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
  { value: 1, suffix: '', label: 'Research Internship' },
  { value: 2, suffix: '+', label: 'Full-Stack Projects' },
  { value: 10, suffix: '+', label: 'Responsive Pages' },
  { value: 8, suffix: '+', label: 'RESTful Endpoints' },
];
