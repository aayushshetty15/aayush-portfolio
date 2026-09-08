import { useScrollProgress } from '@/hooks/useParallax';
export default function ScrollProgress() {
  const progress = useScrollProgress();

  return (
    <div
      className="fixed top-0 left-0 right-0 z-[60] h-[3px]"
      style={{ backgroundColor: 'rgba(0,0,0,0.3)' }}
    >
      <div
        className="h-full transition-[width] duration-75 ease-out"
        style={{
          width: `${progress}%`,
          background: 'linear-gradient(90deg, var(--accent), var(--accent-bright))',
          boxShadow: '0 0 10px var(--glow)',
        }}
      />
    </div>
  );
}
