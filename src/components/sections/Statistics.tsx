import { STATS } from '@/data/portfolio';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { useCountUp } from '@/hooks/useCountUp';

function StatCard({ value, suffix, label, delay }: { value: number; suffix: string; label: string; delay: number }) {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>({ threshold: 0.4 });
  const count = useCountUp(value, isVisible, { duration: 2000 });

  return (
    <div
      ref={ref}
      className="text-center"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
        transition: `all 600ms ease-out ${delay}ms`,
      }}
    >
      <div className="text-5xl font-extrabold text-gradient sm:text-6xl">
        {count}
        <span>{suffix}</span>
      </div>
      <p className="mt-2 text-sm font-medium uppercase tracking-wider text-secondary" style={{ color: 'var(--text-secondary)' }}>
        {label}
      </p>
    </div>
  );
}

export default function Statistics() {
  return (
    <section
      className="relative py-20 px-6 lg:px-10"
      style={{ backgroundColor: 'var(--bg-primary)' }}
    >
      {/* Glow */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        style={{
          width: '800px',
          height: '300px',
          background: 'radial-gradient(ellipse, var(--glow), transparent 70%)',
          filter: 'blur(80px)',
        }}
      />

      <div className="relative mx-auto max-w-5xl">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {STATS.map((stat, i) => (
            <StatCard key={stat.label} {...stat} delay={i * 120} />
          ))}
        </div>
      </div>
    </section>
  );
}
