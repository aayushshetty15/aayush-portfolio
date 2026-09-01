import { SKILLS } from '@/data/portfolio';
import SectionHeading, { RevealWrapper } from '@/components/SectionHeading';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { useEffect, useRef, useState } from 'react';

function SkillBar({ name, level, category, delay }: { name: string; level: number; category: string; delay: number }) {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>({ threshold: 0.3 });
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (isVisible) {
      const t = setTimeout(() => setWidth(level), 100);
      return () => clearTimeout(t);
    }
  }, [isVisible, level]);

  return (
    <div ref={ref} className="group">
      <div className="mb-2 flex items-center justify-between">
        <span className="text-sm font-semibold text-primary" style={{ color: 'var(--text-primary)' }}>
          {name}
        </span>
        <span className="text-xs font-medium text-secondary" style={{ color: 'var(--text-secondary)' }}>
          {category}
        </span>
      </div>
      <div
        className="h-2 w-full overflow-hidden rounded-full"
        style={{ backgroundColor: 'var(--border)' }}
      >
        <div
          className="h-full rounded-full transition-all duration-1000 ease-out"
          style={{
            width: `${width}%`,
            background: 'linear-gradient(90deg, var(--accent), var(--accent-bright))',
            boxShadow: '0 0 10px var(--glow)',
            transitionDelay: `${delay}ms`,
          }}
        />
      </div>
      <div className="mt-1 text-right text-xs text-secondary" style={{ color: 'var(--text-secondary)' }}>
        {level}%
      </div>
    </div>
  );
}

export default function Skills() {
  const categories = Array.from(new Set(SKILLS.map((s) => s.category)));

  return (
    <section
      id="skills"
      className="relative py-28 px-6 lg:px-10"
      style={{ backgroundColor: 'var(--bg-primary)' }}
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Skills"
          title="Technical Arsenal"
          subtitle="A practical toolkit for building responsive interfaces, reliable APIs, data-driven features, and collaborative solutions."
        />

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {categories.map((category, ci) => (
            <RevealWrapper key={category} delay={ci * 150} direction="up">
              <div className="rounded-2xl border border-themed bg-card p-6">
                <h3 className="mb-6 text-sm font-bold uppercase tracking-wider text-accent" style={{ color: 'var(--accent)' }}>
                  {category}
                </h3>
                <div className="space-y-5">
                  {SKILLS.filter((s) => s.category === category).map((skill, i) => (
                    <SkillBar
                      key={skill.name}
                      name={skill.name}
                      level={skill.level}
                      category={skill.category}
                      delay={i * 100}
                    />
                  ))}
                </div>
              </div>
            </RevealWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}
