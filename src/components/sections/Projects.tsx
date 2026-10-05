import { PROJECTS } from '@/data/portfolio';
import SectionHeading, { RevealWrapper } from '@/components/SectionHeading';
import { Github, TrendingUp, CheckCircle2 } from 'lucide-react';

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
          subtitle="Production-grade full-stack platforms, workflow automation engines, and marketplaces built from scratch."
        />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((project, i) => (
            <RevealWrapper key={project.title} delay={i * 120} direction="up">
              <div
                className="group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-themed bg-card p-5 sm:p-6 transition-all duration-300 hover:-translate-y-1"
                style={{ boxShadow: '0 0 0 1px var(--border)' }}
              >
                {/* Hover glow */}
                <div
                  className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  style={{ background: 'radial-gradient(circle at 50% 0%, var(--glow), transparent 60%)' }}
                />

                <div className="relative">
                  {/* Top Bar */}
                  <div className="mb-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div
                        className="flex h-11 w-11 items-center justify-center rounded-xl"
                        style={{
                          background: 'linear-gradient(135deg, var(--accent), var(--accent-bright))',
                        }}
                      >
                        <span className="text-lg font-bold text-white">{project.title[0]}</span>
                      </div>
                      <div>
                        <span className="text-xs font-semibold uppercase tracking-wider text-accent" style={{ color: 'var(--accent)' }}>
                          {project.type}
                        </span>
                      </div>
                    </div>

                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${project.title} on GitHub`}
                      className="flex h-9 w-9 items-center justify-center rounded-lg border border-themed glass text-secondary transition-all duration-200 hover:text-accent hover:scale-105"
                      style={{ color: 'var(--text-secondary)' }}
                    >
                      <Github className="h-4 w-4" />
                    </a>
                  </div>

                  <h3 className="text-xl font-bold text-primary" style={{ color: 'var(--text-primary)' }}>
                    {project.title}
                  </h3>
                  <p className="mb-3 text-xs font-medium text-accent" style={{ color: 'var(--accent)' }}>
                    {project.subtitle}
                  </p>

                  <p className="mb-4 text-xs sm:text-sm leading-relaxed text-secondary" style={{ color: 'var(--text-secondary)' }}>
                    {project.description}
                  </p>

                  {/* Highlights from resume */}
                  <div className="mb-4 space-y-2 rounded-xl bg-[var(--bg-secondary)]/50 p-3 border border-themed/60">
                    <p className="text-[11px] font-semibold uppercase tracking-wider text-primary" style={{ color: 'var(--text-primary)' }}>
                      Key Features & Architecture:
                    </p>
                    <ul className="space-y-1.5">
                      {project.bullets.map((bullet, bIdx) => (
                        <li key={bIdx} className="flex items-start gap-2 text-xs text-secondary leading-snug" style={{ color: 'var(--text-secondary)' }}>
                          <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-accent" style={{ color: 'var(--accent)' }} />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="relative mt-2">
                  <div className="mb-3 flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-themed px-2.5 py-0.5 text-[11px] font-medium text-secondary"
                        style={{ color: 'var(--text-secondary)' }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-2 pt-3 border-t border-themed">
                    <TrendingUp className="h-3.5 w-3.5 text-accent" style={{ color: 'var(--accent)' }} />
                    <span className="text-xs font-semibold text-accent" style={{ color: 'var(--accent)' }}>
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
