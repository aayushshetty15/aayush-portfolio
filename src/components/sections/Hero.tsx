import { useEffect, useState } from 'react';
import { ArrowDown, Download, MousePointerClick, Sparkles } from 'lucide-react';
import { useScrollY } from '@/hooks/useParallax';
import { usePrefersReducedMotion } from '@/hooks/useMediaQuery';


interface HeroProps {
  isLoaded?: boolean;
}

export default function Hero({ isLoaded = true }: HeroProps) {
  const scrollY = useScrollY();
  const reducedMotion = usePrefersReducedMotion();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if (isLoaded) {
      setMounted(true);
    }
  }, [isLoaded]);

  const parallaxOffset = reducedMotion ? 0 : Math.min(scrollY * 0.4, 300);
  const contentOffset = reducedMotion ? 0 : Math.min(scrollY * 0.15, 100);
  const glowOffset = reducedMotion ? 0 : scrollY * 0.2;

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ backgroundColor: 'var(--bg-primary)' }}
    >
      {/* Background grid */}
      <div
        className="absolute inset-0 bg-grid opacity-40"
        style={{
          maskImage: 'radial-gradient(ellipse at center, black 30%, transparent 70%)',
          WebkitMaskImage: 'radial-gradient(ellipse at center, black 30%, transparent 70%)',
        }}
      />

      {/* Ambient glow */}
      <div
        className="absolute pointer-events-none"
        style={{
          width: '600px',
          height: '600px',
          top: '20%',
          left: '50%',
          transform: `translate(-50%, ${glowOffset}px)`,
          background: 'radial-gradient(circle, var(--glow), transparent 70%)',
          filter: 'blur(80px)',
        }}
      />

      {/* Floating decorative elements */}
      {!reducedMotion && (
        <>
          <div
            className="absolute animate-float"
            style={{
              top: '15%',
              left: '10%',
              width: '12px',
              height: '12px',
              borderRadius: '50%',
              background: 'var(--accent)',
              opacity: 0.6,
            }}
          />
          <div
            className="absolute animate-float"
            style={{
              top: '70%',
              right: '15%',
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              background: 'var(--accent-bright)',
              opacity: 0.5,
              animationDelay: '2s',
            }}
          />
          <div
            className="absolute animate-float"
            style={{
              top: '40%',
              right: '8%',
              width: '6px',
              height: '6px',
              borderRadius: '50%',
              background: 'var(--accent)',
              opacity: 0.4,
              animationDelay: '4s',
            }}
          />
        </>
      )}
      {/* Profile Image */}
      <div
        className="absolute left-1/2 top-1/2 pointer-events-none overflow-hidden"
        style={{
          transform: `
            translate(
              calc(-50% + ${Math.min(scrollY * 0.3, 250)}px),
              calc(-50% + ${parallaxOffset}px)
            )
          `,
          opacity: Math.max(0.35 - scrollY / 1000, 0),
          transition: 'transform 0.15s ease-out, opacity 0.15s ease-out',
        }}
      >
        <img
            src="/profile.png"
            alt="Aayush Shetty"
            className="
              h-[340px] w-auto object-contain
              sm:h-[480px]
              md:h-[620px]
              lg:h-[760px]
            "/>
      </div>
      {/* Theme Blend Overlay */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: `
            radial-gradient(
              ellipse at center,
              transparent 20%,
              var(--bg-primary) 75%
            )
          `,
        }}
      />
      {/* Content */}
      <div
        className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-10"
        style={{
          transform: `translateY(${-contentOffset}px)`,
          opacity: Math.max(1 - scrollY / 600, 0),
        }}
      >
        <div className="flex flex-col items-center text-center">
          {/* Badge */}
          <div
            className="mb-4 sm:mb-6 flex items-center gap-2 rounded-full glass border-themed px-3.5 py-1.5 sm:px-4 sm:py-2"
            style={{
              opacity: mounted ? 1 : 0,
              transform: mounted ? 'translateY(0)' : 'translateY(20px)',
              transition: 'all 600ms ease-out',
            }}
          >
            <Sparkles className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-accent" style={{ color: 'var(--accent)' }} />
            <span className="text-xs sm:text-sm font-medium text-secondary" style={{ color: 'var(--text-secondary)' }}>
              Available for new opportunities
            </span>
          </div>

          {/* Name */}
          <h1
            className="text-4xl font-extrabold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl"
            style={{
              opacity: mounted ? 1 : 0,
              transform: mounted ? 'translateY(0)' : 'translateY(30px)',
              transition: 'all 800ms ease-out 100ms',
            }}
          >
            <span className="text-primary" style={{ color: 'var(--text-primary)' }}>Aayush</span>{' '}
            <span className="text-gradient">Shetty</span>
          </h1>

          {/* Role */}
          <p
            className="mt-3 sm:mt-4 text-lg font-medium text-secondary sm:text-2xl md:text-3xl px-2"
            style={{
              color: 'var(--text-secondary)',
              opacity: mounted ? 1 : 0,
              transform: mounted ? 'translateY(0)' : 'translateY(30px)',
              transition: 'all 800ms ease-out 200ms',
            }}
          >
            Information Science & Engineering Student
          </p>

          {/* Description */}
          <p
            className="mt-4 sm:mt-6 max-w-2xl text-sm leading-relaxed text-secondary sm:text-base md:text-lg px-2"
            style={{
              color: 'var(--text-secondary)',
              opacity: mounted ? 1 : 0,
              transform: mounted ? 'translateY(0)' : 'translateY(30px)',
              transition: 'all 800ms ease-out 300ms',
            }}
          >
            Motivated and detail-oriented Information Science and Engineering student with hands-on experience in full-stack web development and a research internship focused on computer vision and deep learning. Passionate about building responsive, scalable web applications, writing clean and maintainable code, and continuously learning modern technologies.
          </p>

          {/* CTA */}
          <div
            className="mt-8 sm:mt-10 flex flex-col items-center gap-4 sm:flex-row"
            style={{
              opacity: mounted ? 1 : 0,
              transform: mounted ? 'translateY(0)' : 'translateY(30px)',
              transition: 'all 800ms ease-out 400ms',
            }}
          >
            <a
              href="/Aayush_Shetty_Resume.pdf"
              download="Aayush_Shetty_Resume.pdf"
              className="group flex items-center justify-center gap-2.5 rounded-full px-7 py-3 sm:px-8 sm:py-3.5 text-sm sm:text-base font-semibold text-white transition-all duration-300 hover:scale-105"
              style={{
                background: 'linear-gradient(135deg, var(--accent), var(--accent-bright))',
                boxShadow: '0 0 30px var(--glow)',
              }}
            >
              <Download className="h-4 w-4 sm:h-5 sm:w-5 transition-transform duration-300 group-hover:translate-y-0.5" />
              Download Resume
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2"
        style={{ opacity: Math.max(1 - scrollY / 200, 0) }}
        aria-label="Scroll to explore"
      >
        <div className="flex flex-col items-center gap-1">
          <MousePointerClick className="h-5 w-5 text-accent" style={{ color: 'var(--accent)' }} />
          <ArrowDown
            className="h-4 w-4 text-accent animate-bounce"
            style={{ color: 'var(--accent)' }}
          />
        </div>
        <div
          className="h-10 w-[2px] origin-top animate-scroll-line"
          style={{ background: 'linear-gradient(180deg, var(--accent), transparent)' }}
        />
        <span className="text-xs font-medium uppercase tracking-widest text-secondary" style={{ color: 'var(--text-secondary)' }}>
          Scroll to Explore
        </span>
      </button>
    </section>
  );
}
