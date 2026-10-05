import { EXPERIENCE } from '@/data/portfolio';
import SectionHeading, { RevealWrapper } from '@/components/SectionHeading';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Briefcase, Check, MapPin } from 'lucide-react';

export default function Experience() {
  const { ref: lineRef, isVisible: lineVisible } = useScrollReveal<HTMLDivElement>({ threshold: 0.1 });

  return (
    <section
      id="experience"
      className="relative py-16 sm:py-24 md:py-28 px-4 sm:px-6 lg:px-10 overflow-hidden"
      style={{ backgroundColor: 'var(--bg-secondary)' }}
    >
      <div className="mx-auto max-w-4xl">
        <SectionHeading
          eyebrow="Experience"
          title="Career Timeline"
          subtitle="Hands-on experience spanning full-stack web application development and AI research internships."
        />

        <div className="relative" ref={lineRef}>
          {/* Timeline line */}
          <div
            className="absolute left-3.5 sm:left-4 top-0 bottom-0 w-[2px] md:left-1/2 md:-translate-x-1/2"
            style={{ backgroundColor: 'var(--border)' }}
          >
            <div
              className="w-full transition-all duration-1000 ease-out"
              style={{
                height: lineVisible ? '100%' : '0%',
                background: 'linear-gradient(180deg, var(--accent), var(--accent-bright))',
                boxShadow: '0 0 10px var(--glow)',
              }}
            />
          </div>

          {/* Timeline items */}
          <div className="space-y-8 sm:space-y-12">
            {EXPERIENCE.map((exp, i) => (
              <RevealWrapper
                key={exp.company + exp.role}
                delay={i * 200}
                direction={i % 2 === 0 ? 'left' : 'right'}
                className="relative"
              >
                <div className={`flex flex-col gap-4 md:flex-row md:items-center ${i % 2 === 0 ? '' : 'md:flex-row-reverse'}`}>
                  {/* Dot */}
                  <div className="absolute left-3.5 sm:left-4 top-2 -translate-x-1/2 md:left-1/2">
                    <div
                      className="flex h-3.5 w-3.5 sm:h-4 sm:w-4 items-center justify-center rounded-full"
                      style={{
                        background: 'var(--accent)',
                        boxShadow: '0 0 15px var(--glow)',
                      }}
                    />
                  </div>

                  {/* Content */}
                  <div className={`ml-8 sm:ml-12 md:ml-0 md:w-1/2 ${i % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                    <div className="rounded-2xl border border-themed bg-card p-4 sm:p-6">
                      <div className={`mb-2 flex flex-wrap items-center gap-2 ${i % 2 === 0 ? 'md:justify-end' : ''}`}>
                        <div className="flex items-center gap-1.5">
                          <Briefcase className="h-3.5 w-3.5 text-accent" style={{ color: 'var(--accent)' }} />
                          <span className="text-xs font-medium text-secondary" style={{ color: 'var(--text-secondary)' }}>
                            {exp.period}
                          </span>
                        </div>
                        {exp.location && (
                          <div className="flex items-center gap-1 text-xs text-secondary" style={{ color: 'var(--text-secondary)' }}>
                            <span>•</span>
                            <MapPin className="h-3 w-3 text-accent" style={{ color: 'var(--accent)' }} />
                            <span>{exp.location}</span>
                          </div>
                        )}
                      </div>
                      <h3 className="text-lg font-bold text-primary" style={{ color: 'var(--text-primary)' }}>
                        {exp.role}
                      </h3>
                      <p className="mb-2 text-sm font-semibold text-accent" style={{ color: 'var(--accent)' }}>
                        {exp.company}
                        <span className="ml-2 text-xs font-normal text-secondary opacity-80">({exp.type})</span>
                      </p>
                      <p className="mb-4 text-sm leading-relaxed text-secondary" style={{ color: 'var(--text-secondary)' }}>
                        {exp.description}
                      </p>
                      <ul className="space-y-1.5">
                        {exp.achievements.map((a) => (
                          <li
                            key={a}
                            className={`flex items-start gap-2 text-xs text-secondary ${i % 2 === 0 ? 'md:justify-end md:flex-row-reverse' : ''}`}
                            style={{ color: 'var(--text-secondary)' }}
                          >
                            <Check className="mt-0.5 h-3 w-3 shrink-0 text-accent" style={{ color: 'var(--accent)' }} />
                            <span>{a}</span>
                          </li>
                        ))}
                      </ul>

                      {exp.technologies && exp.technologies.length > 0 && (
                        <div className={`mt-4 flex flex-wrap gap-1.5 pt-3 border-t border-themed ${i % 2 === 0 ? 'md:justify-end' : ''}`}>
                          {exp.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="rounded-md border border-themed px-2 py-0.5 text-[11px] font-medium text-secondary"
                              style={{ color: 'var(--text-secondary)' }}
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </RevealWrapper>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
