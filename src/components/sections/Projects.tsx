import { PROJECTS } from '@/data/portfolio';
import SectionHeading, { RevealWrapper } from '@/components/SectionHeading';
import { ArrowUpRight, TrendingUp } from 'lucide-react';

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative py-16 sm:py-24 md:py-28 px-4 sm:px-6 lg:px-10 overflow-hidden"
      style={{ backgroundColor: 'var(--bg-primary)' }}
    >
      {/* Ambient glow */}
      <div
        className="pointer-events-none absolute right-0 top-1/4"
        style={{
          width: '500px',
          height: '500px',
          background: 'radial-gradient(circle, var(--glow), transparent 70%)',
          filter: 'blur(100px)',
        }}
      />

      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Projects"
          title="Featured Work"
          subtitle="A selection of products I've built, shipped, and scaled."
        />

        <div className="grid grid-cols-1 gap-5 md:gap-6 md:grid-cols-2">
          {PROJECTS.map((project, i) => (
            <RevealWrapper key={project.title} delay={i * 150} direction={i % 2 === 0 ? 'left' : 'right'}>
              <div
                className="group relative h-full overflow-hidden rounded-2xl border border-themed bg-card p-5 sm:p-6 md:p-8 transition-all duration-300 hover:-translate-y-1"
                style={{ boxShadow: '0 0 0 1px var(--border)' }}
              >
                {/* Hover glow */}
                <div
                  className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  style={{ background: 'radial-gradient(circle at 50% 0%, var(--glow), transparent 60%)' }}
                />

                <div className="relative">
                  <div className="mb-4 flex items-start justify-between">
                    <div
                      className="flex h-12 w-12 items-center justify-center rounded-xl"
                      style={{
                        background: 'linear-gradient(135deg, var(--accent), var(--accent-bright))',
                      }}
                    >
                      <span className="text-xl font-bold text-white">{project.title[0]}</span>
                    </div>
                    <ArrowUpRight
                      className="h-5 w-5 text-secondary transition-all duration-300 group-hover:text-accent group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      style={{ color: 'var(--text-secondary)' }}
                    />
                  </div>

                  <h3 className="mb-2 text-xl font-bold text-primary" style={{ color: 'var(--text-primary)' }}>
                    {project.title}
                  </h3>
                  <p className="mb-4 text-sm leading-relaxed text-secondary" style={{ color: 'var(--text-secondary)' }}>
                    {project.description}
                  </p>

                  <div className="mb-4 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-themed px-3 py-1 text-xs font-medium text-secondary"
                        style={{ color: 'var(--text-secondary)' }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-2 pt-2 border-t border-themed">
                    <TrendingUp className="h-4 w-4 text-accent" style={{ color: 'var(--accent)' }} />
                    <span className="text-sm font-semibold text-accent" style={{ color: 'var(--accent)' }}>
                      {project.metric}
                    </span>
                  </div>
                </div>
              </div>
            </RevealWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}
