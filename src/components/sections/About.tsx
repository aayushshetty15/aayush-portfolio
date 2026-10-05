import { BrainCircuit, Code2, Database, Users } from 'lucide-react';
import SectionHeading, { RevealWrapper } from '@/components/SectionHeading';

const ABOUT_CARDS = [
  {
    icon: Code2,
    title: 'Full-Stack Development',
    description: 'I build responsive web applications with React, Node.js, Express, and MongoDB, from secure authentication to polished user interfaces.'
  },
  {
    icon: Database,
    title: 'REST APIs & Databases',
    description: 'I architect robust RESTful APIs and schema designs across MongoDB and MySQL, with rate limiting, Zod validation, and role-based access control.'
  },
  {
    icon: BrainCircuit,
    title: 'AI Research & Evaluation',
    description: 'Conducted a 4-month research internship at NIET focusing on AI-driven image understanding and evaluating models over 9,000+ image-question pairs.'
  },
  {
    icon: Users,
    title: 'Collaborative Problem Solving',
    description: 'Experienced in Agile development workflows, Git version control, debugging complex issues, and delivering performant, user-focused applications.'
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative py-16 sm:py-24 md:py-28 px-4 sm:px-6 lg:px-10 overflow-hidden"
      style={{ backgroundColor: 'var(--bg-secondary)' }}
    >
      {/* Transition glow */}
      <div
        className="pointer-events-none absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, var(--glow), transparent)' }}
      />

      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="About"
          title="Who I Am"
          subtitle="A dedicated Information Science and Engineering graduate with hands-on experience in full-stack web development, MERN stack, secure REST APIs, and AI model evaluation."
        />

        <div className="grid grid-cols-1 gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {ABOUT_CARDS.map((card, i) => {
            const Icon = card.icon;
            return (
              <RevealWrapper key={card.title} delay={i * 120} direction="up">
                <div
                  className="group h-full rounded-2xl border border-themed bg-card p-5 sm:p-6 transition-all duration-300 hover:-translate-y-1"
                  style={{
                    boxShadow: '0 0 0 1px var(--border)',
                  }}
                >
                  <div
                    className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-110"
                    style={{
                      background: 'linear-gradient(135deg, var(--accent), var(--accent-bright))',
                    }}
                  >
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="mb-2 text-lg font-bold text-primary" style={{ color: 'var(--text-primary)' }}>
                    {card.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-secondary" style={{ color: 'var(--text-secondary)' }}>
                    {card.description}
                  </p>
                </div>
              </RevealWrapper>
            );
          })}
        </div>
      </div>
    </section>
  );
}
