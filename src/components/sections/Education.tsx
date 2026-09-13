import { EDUCATION } from '@/data/portfolio';
import SectionHeading, { RevealWrapper } from '@/components/SectionHeading';
import { GraduationCap, MapPin } from 'lucide-react';

export default function Education() {
  return (
    <section
      id="education"
      className="relative py-16 sm:py-24 md:py-28 px-4 sm:px-6 lg:px-10 overflow-hidden"
      style={{ backgroundColor: 'var(--bg-secondary)' }}
    >
      <div className="mx-auto max-w-4xl">
        <SectionHeading
          eyebrow="Education"
          title="Academic Background"
          subtitle="The foundation that shaped my approach to problem-solving."
        />

        <div className="space-y-4 sm:space-y-6">
          {EDUCATION.map((edu, i) => (
            <RevealWrapper key={edu.degree} delay={i * 200} direction="up">
              <div
                className="group relative rounded-2xl border border-themed bg-card p-5 sm:p-6 md:p-8 transition-all duration-300 hover:-translate-y-1"
                style={{ boxShadow: '0 0 0 1px var(--border)' }}
              >
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
                  <div
                    className="flex h-12 w-12 sm:h-14 sm:w-14 shrink-0 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-110"
                    style={{
                      background: 'linear-gradient(135deg, var(--accent), var(--accent-bright))',
                    }}
                  >
                    <GraduationCap className="h-7 w-7 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="mb-1 flex items-center gap-2">
                      <span className="text-xs font-medium text-secondary" style={{ color: 'var(--text-secondary)' }}>
                        {edu.period}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-primary" style={{ color: 'var(--text-primary)' }}>
                      {edu.degree}
                    </h3>
                    <div className="mb-3 flex items-center gap-1.5">
                      <MapPin className="h-3.5 w-3.5 text-accent" style={{ color: 'var(--accent)' }} />
                      <span className="text-sm font-semibold text-accent" style={{ color: 'var(--accent)' }}>
                        {edu.institution}
                      </span>
                    </div>
                    <p className="text-sm leading-relaxed text-secondary" style={{ color: 'var(--text-secondary)' }}>
                      {edu.description}
                    </p>
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
