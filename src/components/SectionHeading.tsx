import { useScrollReveal } from '@/hooks/useScrollReveal';
import type { ReactNode } from 'react';

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
}

export default function SectionHeading({ eyebrow, title, subtitle, align = 'center' }: SectionHeadingProps) {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={`mb-10 sm:mb-16 ${align === 'center' ? 'text-center' : 'text-left'}`}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
        transition: 'all 700ms ease-out',
      }}
    >
      <div className={`mb-3 flex items-center gap-3 ${align === 'center' ? 'justify-center' : ''}`}>
        <div className="h-[2px] w-6 sm:w-8" style={{ background: 'var(--accent)' }} />
        <span className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-accent" style={{ color: 'var(--accent)' }}>
          {eyebrow}
        </span>
        <div className="h-[2px] w-6 sm:w-8" style={{ background: 'var(--accent)' }} />
      </div>
      <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl md:text-5xl" style={{ color: 'var(--text-primary)' }}>
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-3 sm:mt-4 text-sm sm:text-base md:text-lg text-secondary ${align === 'center' ? 'mx-auto max-w-2xl' : 'max-w-2xl'}`}
          style={{ color: 'var(--text-secondary)' }}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}

export function RevealWrapper({
  children,
  delay = 0,
  direction = 'up',
  className = '',
}: {
  children: ReactNode;
  delay?: number;
  direction?: 'up' | 'left' | 'right' | 'scale';
  className?: string;
}) {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();

  const transforms: Record<string, string> = {
    up: 'translateY(40px)',
    left: 'translateX(-40px)',
    right: 'translateX(40px)',
    scale: 'scale(0.92)',
  };

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translate(0,0) scale(1)' : transforms[direction],
        transition: `all 700ms ease-out ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}
