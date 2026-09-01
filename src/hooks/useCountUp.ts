import { useEffect, useRef, useState } from 'react';

interface CountUpOptions {
  duration?: number;
  start?: number;
}

export function useCountUp(target: number, isVisible: boolean, options: CountUpOptions = {}) {
  const { duration = 2000, start = 0 } = options;
  const [value, setValue] = useState(start);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    if (!isVisible) return;

    const startTime = performance.now();

    const animate = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(start + (target - start) * eased));

      if (progress < 1) {
        rafRef.current = requestAnimationFrame(animate);
      }
    };

    rafRef.current = requestAnimationFrame(animate);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [target, isVisible, duration, start]);

  return value;
}
