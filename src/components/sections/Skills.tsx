import SectionHeading, { RevealWrapper } from '@/components/SectionHeading';
import TechStack3DCluster from '@/components/TechStack3DCluster';
import { Database, Layout, Code2, Wrench, Sparkles, Globe } from 'lucide-react';
import { SOFT_SKILLS, SPOKEN_LANGUAGES } from '@/data/portfolio';

const SKILL_CATEGORIES = [
  {
    title: 'Frameworks & Libraries',
    icon: Layout,
    skills: ['React', 'Express.js', 'Node.js', 'Tailwind CSS'],
  },
  {
    title: 'Databases',
    icon: Database,
    skills: ['MongoDB', 'MySQL', 'Firebase'],
  },
  {
    title: 'Programming Languages',
    icon: Code2,
    skills: ['JavaScript', 'TypeScript', 'Python', 'PHP', 'HTML5', 'CSS3'],
  },
  {
    title: 'Tools & Platforms',
    icon: Wrench,
    skills: [
      'Git',
      'GitHub',
      'MERN Stack',
      'REST APIs',
      'CRUD Operations',
      'Authentication & Authorization',
      'API Integration',
    ],
  },
  {
    title: 'Soft Skills',
    icon: Sparkles,
    skills: SOFT_SKILLS,
  },
  {
    title: 'Spoken Languages',
    icon: Globe,
    skills: SPOKEN_LANGUAGES,
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative overflow-hidden py-16 sm:py-24 md:py-28 px-4 sm:px-6 lg:px-10"
      style={{ backgroundColor: 'var(--bg-primary)' }}
    >
      {/* Background ambient radial glow */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[150px]"
        style={{
          backgroundColor: 'var(--glow)',
          opacity: 0.18,
        }}
      />

      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Skills & Technologies"
          title="Technical Arsenal"
          subtitle="Interactive 3D physics cluster of modern tools, languages, and frameworks. Drag any sphere into the cluster to collide and disperse them in real time."
        />

        <RevealWrapper delay={100} direction="up">
          <TechStack3DCluster />
        </RevealWrapper>

        {/* Categorized Skills Breakdown from Resume */}
        <div className="mt-12 sm:mt-16">
          <div className="grid grid-cols-1 gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SKILL_CATEGORIES.map((cat, i) => {
              const Icon = cat.icon;
              return (
                <RevealWrapper key={cat.title} delay={i * 80} direction="up">
                  <div
                    className="group h-full rounded-2xl border border-themed bg-card p-5 sm:p-6 transition-all duration-300 hover:-translate-y-1"
                    style={{ boxShadow: '0 0 0 1px var(--border)' }}
                  >
                    <div className="mb-3.5 flex items-center gap-3">
                      <div
                        className="flex h-10 w-10 items-center justify-center rounded-xl"
                        style={{
                          background: 'linear-gradient(135deg, var(--accent), var(--accent-bright))',
                        }}
                      >
                        <Icon className="h-5 w-5 text-white" />
                      </div>
                      <h3 className="text-base font-bold text-primary" style={{ color: 'var(--text-primary)' }}>
                        {cat.title}
                      </h3>
                    </div>

                    <div className="flex flex-wrap gap-2 pt-1">
                      {cat.skills.map((skill) => (
                        <span
                          key={skill}
                          className="rounded-lg border border-themed bg-[var(--bg-secondary)]/60 px-3 py-1 text-xs font-medium text-secondary transition-colors duration-200 group-hover:text-primary"
                          style={{ color: 'var(--text-secondary)' }}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </RevealWrapper>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}