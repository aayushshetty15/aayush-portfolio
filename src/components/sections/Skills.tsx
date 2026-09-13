import { SKILLS } from '@/data/portfolio';
import SectionHeading, { RevealWrapper } from '@/components/SectionHeading';
import { useCallback, useEffect, useRef, useState } from 'react';
import { Sparkles, RotateCcw } from 'lucide-react';

const skillLogos: Record<string, string> = {
  React:
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
  'Express.js':
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
  'Node.js':
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
  'Tailwind CSS':
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg',
  JavaScript:
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
  Python:
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
  PHP:
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg',
  HTML5:
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
  CSS3:
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
  MongoDB:
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
  Firebase:
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg',
  'Git & GitHub':
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
};

const skillColors: Record<string, { primary: string; glow: string }> = {
  React: { primary: '#61DAFB', glow: 'rgba(97, 218, 251, 0.35)' },
  'Express.js': { primary: '#E5E5E5', glow: 'rgba(255, 255, 255, 0.3)' },
  'Node.js': { primary: '#68A063', glow: 'rgba(104, 160, 99, 0.35)' },
  'Tailwind CSS': { primary: '#38BDF8', glow: 'rgba(56, 189, 248, 0.35)' },
  JavaScript: { primary: '#F7DF1E', glow: 'rgba(247, 223, 30, 0.35)' },
  Python: { primary: '#3776AB', glow: 'rgba(55, 118, 171, 0.35)' },
  PHP: { primary: '#777BB4', glow: 'rgba(119, 123, 180, 0.35)' },
  HTML5: { primary: '#E34F26', glow: 'rgba(227, 79, 38, 0.35)' },
  CSS3: { primary: '#1572B6', glow: 'rgba(21, 114, 182, 0.35)' },
  MongoDB: { primary: '#47A248', glow: 'rgba(71, 162, 72, 0.35)' },
  Firebase: { primary: '#FFCA28', glow: 'rgba(255, 202, 40, 0.35)' },
  'Git & GitHub': { primary: '#F05032', glow: 'rgba(240, 80, 50, 0.35)' },
};

type DisperseTransform = {
  x: number;
  y: number;
  z: number;
  rotateX: number;
  rotateY: number;
  rotateZ: number;
  scale: number;
};

type DesktopPosition = {
  x: number;
  y: number;
  rotate: number;
  delay: number;
};

// Ergonomic positions for desktop viewports
const desktopPositions: DesktopPosition[] = [
  { x: 50, y: 14, rotate: -4, delay: 0 },
  { x: 34, y: 26, rotate: 5, delay: 0.4 },
  { x: 66, y: 26, rotate: -5, delay: 0.8 },
  { x: 20, y: 44, rotate: -6, delay: 0.2 },
  { x: 38, y: 44, rotate: 4, delay: 1.0 },
  { x: 62, y: 44, rotate: -4, delay: 0.6 },
  { x: 80, y: 44, rotate: 6, delay: 1.2 },
  { x: 26, y: 62, rotate: 5, delay: 0.5 },
  { x: 50, y: 60, rotate: -3, delay: 0.9 },
  { x: 74, y: 62, rotate: 4, delay: 0.3 },
  { x: 38, y: 80, rotate: -5, delay: 0.7 },
  { x: 62, y: 80, rotate: 4, delay: 1.1 },
];

function SkillBadge3D({
  name,
  isDispersed,
  disperseTransform,
  onTriggerDisperse,
  isDesktop = false,
  desktopPos,
  index,
}: {
  name: string;
  isDispersed: boolean;
  disperseTransform?: DisperseTransform;
  onTriggerDisperse: () => void;
  isDesktop?: boolean;
  desktopPos?: DesktopPosition;
  index: number;
}) {
  const logo = skillLogos[name];
  const color = skillColors[name] || {
    primary: 'var(--accent)',
    glow: 'var(--glow)',
  };

  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isDispersed) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const tiltX = ((y - centerY) / centerY) * -16;
    const tiltY = ((x - centerX) / centerX) * 16;
    setTilt({ x: tiltX, y: tiltY });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
    onTriggerDisperse();
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setTilt({ x: 0, y: 0 });
  };

  // Compute 3D transform string
  let transformStr = '';
  let transitionStr = '';

  if (isDesktop && desktopPos) {
    if (isDispersed && disperseTransform) {
      transformStr = `
        translate(-50%, -50%)
        translate3d(${disperseTransform.x}px, ${disperseTransform.y}px, ${disperseTransform.z}px)
        rotateX(${disperseTransform.rotateX}deg)
        rotateY(${disperseTransform.rotateY}deg)
        rotateZ(${disperseTransform.rotateZ}deg)
        scale(${disperseTransform.scale})
      `;
      // Disperse burst transition
      transitionStr =
        'transform 0.45s cubic-bezier(0.18, 0.89, 0.32, 1.28), box-shadow 0.4s ease';
    } else {
      const baseRotate = desktopPos.rotate;
      const tiltRotateX = isHovered ? tilt.x : 0;
      const tiltRotateY = isHovered ? tilt.y : 0;
      transformStr = `
        translate(-50%, -50%)
        translate3d(0px, 0px, ${isHovered ? '25px' : '0px'})
        rotateX(${tiltRotateX}deg)
        rotateY(${tiltRotateY}deg)
        rotateZ(${baseRotate}deg)
        scale(${isHovered ? 1.08 : 1})
      `;
      // Return transition: smooth 2.5s cycle spring return
      transitionStr = isHovered
        ? 'transform 0.15s ease-out'
        : 'transform 1.4s cubic-bezier(0.34, 1.56, 0.64, 1)';
    }
  } else {
    // Mobile / Tablet grid view
    if (isDispersed && disperseTransform) {
      transformStr = `
        translate3d(${disperseTransform.x * 0.7}px, ${disperseTransform.y * 0.7}px, ${disperseTransform.z}px)
        rotateX(${disperseTransform.rotateX}deg)
        rotateY(${disperseTransform.rotateY}deg)
        rotateZ(${disperseTransform.rotateZ}deg)
        scale(${disperseTransform.scale})
      `;
      transitionStr =
        'transform 0.45s cubic-bezier(0.18, 0.89, 0.32, 1.28), box-shadow 0.4s ease';
    } else {
      transformStr = `
        translate3d(0px, 0px, ${isHovered ? '20px' : '0px'})
        rotateX(${isHovered ? tilt.x : 0}deg)
        rotateY(${isHovered ? tilt.y : 0}deg)
        scale(${isHovered ? 1.05 : 1})
      `;
      transitionStr = isHovered
        ? 'transform 0.15s ease-out'
        : 'transform 1.2s cubic-bezier(0.34, 1.56, 0.64, 1)';
    }
  }

  const containerStyle: React.CSSProperties = isDesktop && desktopPos
    ? {
        position: 'absolute',
        left: `${desktopPos.x}%`,
        top: `${desktopPos.y}%`,
        transform: transformStr,
        transition: transitionStr,
        zIndex: isDispersed ? 50 : isHovered ? 40 : 20 + index,
      }
    : {
        transform: transformStr,
        transition: transitionStr,
        zIndex: isDispersed ? 50 : isHovered ? 40 : 10,
      };

  return (
    <div
      style={containerStyle}
      className="perspective-1000 select-none cursor-pointer"
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onTriggerDisperse}
      onTouchStart={onTriggerDisperse}
    >
      {/* 3D Coin Badge */}
      <div
        className="
          preserve-3d relative flex flex-col items-center justify-center
          rounded-2xl border
          h-24 w-24 p-2
          sm:h-28 sm:w-28 sm:p-3
          lg:h-32 lg:w-32 lg:p-3.5
        "
        style={{
          background:
            'linear-gradient(145deg, rgba(30, 30, 35, 0.92) 0%, rgba(12, 12, 16, 0.96) 100%)',
          borderColor: isHovered || isDispersed
            ? color.primary
            : 'rgba(255, 255, 255, 0.14)',
          boxShadow: isDispersed
            ? `0 24px 48px -10px ${color.glow}, 0 0 35px ${color.glow}, inset 0 1.5px 3px rgba(255,255,255,0.4)`
            : isHovered
              ? `0 18px 36px -8px ${color.glow}, 0 0 25px ${color.glow}, inset 0 1px 2px rgba(255,255,255,0.3)`
              : `0 10px 24px -6px rgba(0, 0, 0, 0.6), inset 0 1px 1px rgba(255, 255, 255, 0.15), inset 0 -2px 4px rgba(0, 0, 0, 0.5)`,
        }}
      >
        {/* Specular Bevel Top Rim */}
        <div
          className="pointer-events-none absolute inset-x-2 top-0 h-[1.5px] rounded-t-xl"
          style={{
            background:
              'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.45), transparent)',
          }}
        />

        {/* Ambient Brand Glow inside disc */}
        <div
          className="pointer-events-none absolute inset-0 rounded-2xl opacity-20 transition-opacity duration-300"
          style={{
            background: `radial-gradient(circle at 50% 40%, ${color.primary}, transparent 70%)`,
            opacity: isHovered || isDispersed ? 0.45 : 0.2,
          }}
        />

        {/* 3D Floating Icon Layer */}
        <div
          className="relative flex items-center justify-center h-10 w-10 sm:h-12 sm:w-12 lg:h-14 lg:w-14"
          style={{
            transform: 'translateZ(26px)',
            filter: isHovered || isDispersed
              ? `drop-shadow(0 6px 12px ${color.glow})`
              : 'drop-shadow(0 4px 6px rgba(0, 0, 0, 0.4))',
            transition: 'filter 0.3s ease',
          }}
        >
          {logo ? (
            <img
              src={logo}
              alt={name}
              className="h-full w-full object-contain pointer-events-none"
              loading="lazy"
            />
          ) : (
            <span
              className="text-xl sm:text-2xl font-black"
              style={{ color: color.primary }}
            >
              {name.charAt(0)}
            </span>
          )}
        </div>

        {/* 3D Floating Skill Name */}
        <span
          className="relative mt-2 text-center text-[10px] sm:text-xs font-semibold tracking-wide"
          style={{
            transform: 'translateZ(18px)',
            color: isHovered || isDispersed ? color.primary : 'var(--text-primary)',
            transition: 'color 0.3s ease',
            textShadow: '0 2px 4px rgba(0,0,0,0.8)',
          }}
        >
          {name}
        </span>

        {/* Disperse Shockwave Indicator */}
        {isDispersed && (
          <div
            className="pointer-events-none absolute -inset-2 rounded-2xl border animate-ping"
            style={{
              borderColor: color.primary,
              opacity: 0.6,
              animationDuration: '1.2s',
            }}
          />
        )}
      </div>
    </div>
  );
}

export default function Skills() {
  const skills = SKILLS.filter((s) => s.category !== 'Soft Skills');

  // Track disperse transforms for each skill name
  const [dispersedState, setDispersedState] = useState<
    Record<string, DisperseTransform | null>
  >({});

  // Maintain timeout refs for automatic 2-3s reassembly
  const timeoutsRef = useRef<Record<string, ReturnType<typeof setTimeout>>>({});

  // Detect desktop vs mobile/tablet viewport
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkScreen = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };
    checkScreen();
    window.addEventListener('resize', checkScreen);
    return () => window.removeEventListener('resize', checkScreen);
  }, []);

  // Cleanup timeouts on unmount
  useEffect(() => {
    const timeouts = timeoutsRef.current;
    return () => {
      Object.values(timeouts).forEach(clearTimeout);
    };
  }, []);

  const triggerDisperse = useCallback((skillName: string) => {
    // If already dispersed, reset the timer to prevent premature reassembly
    if (timeoutsRef.current[skillName]) {
      clearTimeout(timeoutsRef.current[skillName]);
    }

    // Generate dynamic 3D scatter trajectory
    const angle = Math.random() * Math.PI * 2;
    const distance = 120 + Math.random() * 140; // 120px to 260px
    const zDepth = 60 + Math.random() * 90; // Pop forward in 3D
    const rotX = (Math.random() - 0.5) * 80;
    const rotY = (Math.random() - 0.5) * 80;
    const rotZ = (Math.random() - 0.5) * 60;

    const transform: DisperseTransform = {
      x: Math.cos(angle) * distance,
      y: Math.sin(angle) * distance,
      z: zDepth,
      rotateX: rotX,
      rotateY: rotY,
      rotateZ: rotZ,
      scale: 1.15,
    };

    setDispersedState((prev) => ({
      ...prev,
      [skillName]: transform,
    }));

    // Auto-return after 2.5 seconds (in the 2-3 seconds window)
    timeoutsRef.current[skillName] = setTimeout(() => {
      setDispersedState((prev) => ({
        ...prev,
        [skillName]: null,
      }));
      delete timeoutsRef.current[skillName];
    }, 2500);
  }, []);

  // Disperse all skills at once (interactive party trick / demo)
  const disperseAll = () => {
    skills.forEach((skill, idx) => {
      setTimeout(() => {
        triggerDisperse(skill.name);
      }, idx * 40);
    });
  };

  const isAnyDispersed = Object.values(dispersedState).some(Boolean);

  return (
    <section
      id="skills"
      className="relative overflow-hidden py-16 sm:py-24 md:py-28 px-4 sm:px-6 lg:px-10"
      style={{ backgroundColor: 'var(--bg-primary)' }}
    >
      {/* Background ambient radial glow */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[450px] w-[450px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[140px]"
        style={{
          backgroundColor: 'var(--glow)',
          opacity: 0.22,
        }}
      />

      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Skills"
          title="Technical Arsenal"
          subtitle="A collection of technologies and tools I use to build modern digital experiences. Hover over any 3D badge to disperse it in 3D space."
        />

        {/* Disperse All Action Bar */}
        <div className="mb-8 flex items-center justify-center gap-3">
          <button
            onClick={disperseAll}
            className="group flex items-center gap-2 rounded-full border border-themed px-4 py-2 text-xs font-semibold glass transition-all duration-300 hover:border-accent hover:scale-105"
            style={{ color: 'var(--text-secondary)' }}
          >
            {isAnyDispersed ? (
              <RotateCcw className="h-3.5 w-3.5 text-accent animate-spin" />
            ) : (
              <Sparkles className="h-3.5 w-3.5 text-accent" />
            )}
            <span>Disperse All & Reassemble</span>
          </button>
        </div>

        <RevealWrapper delay={100} direction="up">
          {isDesktop ? (
            /* Desktop Constellation View */
            <div
              className="
                relative mx-auto h-[620px] w-full
                max-w-5xl rounded-3xl border border-themed/40
                p-6
              "
              style={{
                perspective: '1200px',
                background:
                  'radial-gradient(circle at center, rgba(255,255,255,0.02) 0%, transparent 80%)',
              }}
            >
              {skills.map((skill, index) => (
                <SkillBadge3D
                  key={skill.name}
                  name={skill.name}
                  isDispersed={Boolean(dispersedState[skill.name])}
                  disperseTransform={dispersedState[skill.name] || undefined}
                  onTriggerDisperse={() => triggerDisperse(skill.name)}
                  isDesktop={true}
                  desktopPos={desktopPositions[index] || desktopPositions[0]}
                  index={index}
                />
              ))}
            </div>
          ) : (
            /* Tablet & Mobile Responsive 3D Grid */
            <div
              className="
                mx-auto max-w-3xl
                grid grid-cols-3 sm:grid-cols-4
                gap-3 sm:gap-4 md:gap-6
                justify-items-center
                py-4
              "
              style={{ perspective: '1000px' }}
            >
              {skills.map((skill, index) => (
                <SkillBadge3D
                  key={skill.name}
                  name={skill.name}
                  isDispersed={Boolean(dispersedState[skill.name])}
                  disperseTransform={dispersedState[skill.name] || undefined}
                  onTriggerDisperse={() => triggerDisperse(skill.name)}
                  isDesktop={false}
                  index={index}
                />
              ))}
            </div>
          )}
        </RevealWrapper>
      </div>
    </section>
  );
}