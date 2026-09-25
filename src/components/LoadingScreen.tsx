import { useEffect, useRef, useState } from 'react';

interface LoadingScreenProps {
  onComplete: () => void;
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);
  const [isExiting, setIsExiting] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGRectElement>(null);
  const [perimeter, setPerimeter] = useState(0);
  const [dimensions, setDimensions] = useState({ width: 360, height: 62 });

  // Measure container dimensions & calculate perimeter for SVG glowing stroke
  useEffect(() => {
    const updateSize = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const w = Math.round(rect.width);
        const h = Math.round(rect.height);
        setDimensions({ width: w, height: h });
        if (pathRef.current) {
          try {
            const length = pathRef.current.getTotalLength();
            if (length > 0) {
              setPerimeter(length);
              return;
            }
          } catch {
            // fallback calculation for capsule perimeter
          }
        }
        const r = (h - 3) / 2;
        const straight = Math.max(0, (w - 3) - 2 * r);
        const approxPerimeter = 2 * straight + 2 * Math.PI * r;
        setPerimeter(approxPerimeter);
      }
    };

    updateSize();
    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  // Lock scroll while loading
  useEffect(() => {
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, []);

  // 3-second progress counter from 0% to 100%
  useEffect(() => {
    const DURATION = 3000; // Exactly 3 seconds
    let animationFrameId: number;
    const startTime = performance.now();

    const frame = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const linearRatio = Math.min(elapsed / DURATION, 1);

      // Smooth progress calculation
      const currentPercent = Math.min(100, Math.floor(linearRatio * 100));
      setProgress(currentPercent);

      if (linearRatio < 1) {
        animationFrameId = requestAnimationFrame(frame);
      } else {
        setProgress(100);
        // Brief hold at 100% before smooth cinematic exit
        const exitTimer = setTimeout(() => {
          setIsExiting(true);
          const completeTimer = setTimeout(() => {
            onComplete();
          }, 450); // Matches transition duration
          return () => clearTimeout(completeTimer);
        }, 200);

        return () => clearTimeout(exitTimer);
      }
    };

    animationFrameId = requestAnimationFrame(frame);
    return () => cancelAnimationFrame(animationFrameId);
  }, [onComplete]);

  const strokeDashoffset = perimeter > 0 ? perimeter * (1 - progress / 100) : 0;

  return (
    <div
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center select-none overflow-hidden transition-all duration-500 ease-out ${
        isExiting
          ? 'opacity-0 scale-[1.03] pointer-events-none'
          : 'opacity-100 scale-100'
      }`}
      style={{
        backgroundColor: 'var(--bg-primary, #050505)',
      }}
    >
      {/* Background subtle grid pattern */}
      <div
        className="absolute inset-0 bg-grid opacity-30 pointer-events-none"
        style={{
          maskImage: 'radial-gradient(ellipse at center, black 35%, transparent 75%)',
          WebkitMaskImage: 'radial-gradient(ellipse at center, black 35%, transparent 75%)',
        }}
      />

      {/* Atmospheric center ambient glow */}
      <div
        className="absolute pointer-events-none rounded-full"
        style={{
          width: '540px',
          height: '320px',
          background: 'radial-gradient(ellipse at center, rgba(229, 9, 20, 0.18) 0%, transparent 70%)',
          filter: 'blur(75px)',
          transform: 'translate(-50%, -50%)',
          top: '50%',
          left: '50%',
        }}
      />

      {/* Large backdrop watermark typography matching reference layout ("DEVELOPER") */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
        <span
          className="text-[17vw] sm:text-[14vw] md:text-[12vw] font-black tracking-widest uppercase leading-none font-sans"
          style={{
            color: 'rgba(255, 255, 255, 0.04)',
            letterSpacing: '0.12em',
          }}
        >
          DEVELOPER
        </span>
      </div>

      {/* Center Capsule Loading Bar */}
      <div className="relative z-10 flex flex-col items-center">
        <div
          ref={containerRef}
          className="relative w-[320px] sm:w-[370px] md:w-[390px] h-[58px] sm:h-[62px] rounded-full flex items-center justify-between px-6 sm:px-8 border border-white/10"
          style={{
            backgroundColor: '#090909',
            boxShadow:
              '0 20px 40px -10px rgba(0, 0, 0, 0.95), 0 0 35px -5px rgba(229, 9, 20, 0.22), inset 0 1px 1px 0 rgba(255, 255, 255, 0.12)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
          }}
        >
          {/* SVG Progress Glow Stroke tracing around capsule perimeter */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none overflow-visible rounded-full"
            style={{ borderRadius: '9999px' }}
          >
            <defs>
              <linearGradient id="theme-loader-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="var(--accent-bright, #FF1E2D)" />
                <stop offset="70%" stopColor="var(--accent, #E50914)" />
                <stop offset="100%" stopColor="#990000" />
              </linearGradient>
              <filter id="theme-glow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="3" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* Subtle background track */}
            <rect
              x="1.5"
              y="1.5"
              width={Math.max(0, dimensions.width - 3)}
              height={Math.max(0, dimensions.height - 3)}
              rx={(dimensions.height - 3) / 2}
              fill="none"
              stroke="rgba(255, 255, 255, 0.07)"
              strokeWidth="2"
            />

            {/* Glowing active perimeter stroke */}
            <rect
              ref={pathRef}
              x="1.5"
              y="1.5"
              width={Math.max(0, dimensions.width - 3)}
              height={Math.max(0, dimensions.height - 3)}
              rx={(dimensions.height - 3) / 2}
              fill="none"
              stroke="url(#theme-loader-gradient)"
              strokeWidth="2.5"
              strokeDasharray={perimeter || 800}
              strokeDashoffset={strokeDashoffset}
              strokeLinecap="round"
              filter="url(#theme-glow)"
              style={{
                transition: 'stroke-dashoffset 40ms linear',
              }}
            />
          </svg>

          {/* Left Text: "LOADING" with pulsing indicator */}
          <div className="flex items-center gap-2.5 sm:gap-3 z-10">
            <span className="relative flex h-2 w-2">
              <span
                className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75"
                style={{ backgroundColor: 'var(--accent, #E50914)' }}
              />
              <span
                className="relative inline-flex rounded-full h-2 w-2"
                style={{ backgroundColor: 'var(--accent, #E50914)' }}
              />
            </span>
            <span
              className="text-xs sm:text-sm font-bold tracking-[0.22em] text-white uppercase select-none font-sans"
              style={{ letterSpacing: '0.22em' }}
            >
              LOADING
            </span>
          </div>

          {/* Right Section: Percentage counter & mini battery indicator block */}
          <div className="flex items-center gap-2 sm:gap-2.5 z-10">
            <span
              className="font-mono text-xs sm:text-sm font-semibold tracking-wider tabular-nums select-none"
              style={{ color: '#F3F4F6' }}
            >
              {progress}%
            </span>

            {/* Battery / indicator block matching reference icon */}
            <div
              className="relative w-2.5 h-4 sm:w-3 sm:h-4.5 rounded-[2px] border border-white/30 p-[1.5px] flex flex-col justify-end overflow-hidden"
              style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
            >
              <div
                className="w-full rounded-[1px] transition-all duration-75"
                style={{
                  height: `${Math.min(100, Math.max(8, progress))}%`,
                  background: 'linear-gradient(to top, var(--accent, #E50914), var(--accent-bright, #FF1E2D))',
                  boxShadow: '0 0 6px var(--accent, #E50914)',
                }}
              />
            </div>
          </div>

          {/* Subtle bottom progress line inside capsule */}
          <div className="absolute bottom-1.5 left-7 right-7 h-[2px] bg-white/[0.05] rounded-full overflow-hidden pointer-events-none">
            <div
              className="h-full rounded-full transition-all duration-75"
              style={{
                width: `${progress}%`,
                background: 'linear-gradient(90deg, transparent, var(--accent, #E50914), var(--accent-bright, #FF1E2D))',
                boxShadow: '0 0 8px var(--accent, #E50914)',
              }}
            />
          </div>
        </div>

        {/* Minimal status caption below capsule */}
        <div className="mt-5 flex items-center gap-2 text-[10px] sm:text-xs font-mono tracking-[0.25em] text-white/40 uppercase">
          <span>AAYUSH SHETTY</span>
          <span className="text-white/20">•</span>
          <span style={{ color: 'var(--accent, #E50914)' }}>INITIALIZING</span>
        </div>
      </div>
    </div>
  );
}
