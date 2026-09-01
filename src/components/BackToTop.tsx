import { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';
import { useScrollY } from '@/hooks/useParallax';
import { usePrefersReducedMotion } from '@/hooks/useMediaQuery';

export default function BackToTop() {
  const scrollY = useScrollY();
  const visible = scrollY > 500;
  const reducedMotion = usePrefersReducedMotion();
  const [hovered, setHovered] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: reducedMotion ? 'auto' : 'smooth' });
  };

  return (
    <button
      onClick={scrollToTop}
      aria-label="Back to top"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="fixed bottom-6 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full glass border-accent transition-all duration-300"
      style={{
        opacity: visible ? 1 : 0,
        pointerEvents: visible ? 'auto' : 'none',
        transform: visible ? 'translateY(0) scale(1)' : 'translateY(20px) scale(0.8)',
        boxShadow: hovered ? '0 0 25px var(--glow)' : '0 0 0 1px var(--border)',
      }}
    >
      <ArrowUp
        className="h-5 w-5 transition-transform duration-300"
        style={{
          color: 'var(--accent)',
          transform: hovered ? 'translateY(-3px)' : 'translateY(0)',
        }}
      />
    </button>
  );
}
