import { SKILLS } from '@/data/portfolio';
import SectionHeading, { RevealWrapper } from '@/components/SectionHeading';
import { useRef, useState } from 'react';

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

type Position = {
  x: number;
  y: number;
  rotate: number;
};

type Movement = {
  x: number;
  y: number;
  rotate: number;
};

const positions: Position[] = [
  { x: 50, y: 18, rotate: -5 },

  { x: 40, y: 28, rotate: 4 },
  { x: 60, y: 28, rotate: -4 },

  { x: 30, y: 40, rotate: -6 },
  { x: 43, y: 40, rotate: 5 },
  { x: 57, y: 40, rotate: -5 },
  { x: 70, y: 40, rotate: 6 },

  { x: 35, y: 53, rotate: 5 },
  { x: 50, y: 53, rotate: -4 },
  { x: 65, y: 53, rotate: 5 },

  { x: 40, y: 66, rotate: -5 },
  { x: 60, y: 66, rotate: 4 },

  { x: 50, y: 78, rotate: 0 },
];

function SkillCard({
  name,
  position,
  movement,
  index,
}: {
  name: string;
  position: Position;
  movement: Movement;
  index: number;
}) {
  const logo = skillLogos[name];

  return (
    <div
      className="
        absolute flex h-28 w-28 flex-col items-center justify-center
        rounded-full border p-3 shadow-lg
       sm:h-28 sm:w-28
      md:h-32 md:w-32
      "
      style={{
        left: `${position.x}%`,
        top: `${position.y}%`,
        transform: `
          translate(-50%, -50%)
          translate(${movement.x}px, ${movement.y}px)
          rotate(${position.rotate + movement.rotate}deg)
        `,
        backgroundColor: 'var(--bg-card)',
        borderColor: 'var(--border)',
        transition: movement.x === 0 && movement.y === 0
          ? 'transform 1.2s cubic-bezier(0.22, 1, 0.36, 1)'
          : 'transform 0.15s ease-out',
        zIndex: 20 + index,
      }}
    >
      {/* Red Glow */}
      <div
        className="absolute inset-0 rounded-2xl opacity-10"
        style={{
          background:
            'radial-gradient(circle at center, var(--accent), transparent 70%)',
        }}
      />

      {/* Logo */}
      <div className="relative z-10 flex h-14 w-14 items-center justify-center sm:h-16 sm:w-16">
        {logo ? (
          <img
            src={logo}
            alt={name}
            className="h-full w-full object-contain"
          />
        ) : (
          <span
            className="text-2xl font-bold"
            style={{ color: 'var(--accent)' }}
          >
            {name.charAt(0)}
          </span>
        )}
      </div>

      {/* Skill Name */}
      <h3
        className="relative z-10 mt-3 text-center text-xs font-semibold sm:text-sm"
        style={{ color: 'var(--text-primary)' }}
      >
        {name}
      </h3>
    </div>
  );
}

export default function Skills() {
  const skills = SKILLS.filter(
    (skill) => skill.category !== 'Soft Skills'
  );

  const [movements, setMovements] = useState<Movement[]>(
    skills.map(() => ({
      x: 0,
      y: 0,
      rotate: 0,
    }))
  );

  const resetTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleMouseMove = (
    e: React.MouseEvent<HTMLDivElement>
  ) => {
    if (resetTimeout.current) {
      clearTimeout(resetTimeout.current);
    }

    const rect = e.currentTarget.getBoundingClientRect();

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const normalizedX = (mouseX - centerX) / centerX;
    const normalizedY = (mouseY - centerY) / centerY;

    const newMovements = skills.map((_, index) => {
      const strength = 15 + (index % 4) * 5;

      const directionX =
        index % 2 === 0 ? -normalizedX : normalizedX;

      const directionY =
        index % 2 === 0 ? -normalizedY : normalizedY;

      return {
        x: directionX * strength,
        y: directionY * strength,
        rotate: normalizedX * (index % 2 === 0 ? 4 : -4),
      };
    });

    setMovements(newMovements);
  };

  const handleMouseLeave = () => {
    if (resetTimeout.current) {
      clearTimeout(resetTimeout.current);
    }

    resetTimeout.current = setTimeout(() => {
      setMovements(
        skills.map(() => ({
          x: 0,
          y: 0,
          rotate: 0,
        }))
      );
    }, 2000);
  };

  return (
    <section
      id="skills"
      className="relative overflow-hidden px-6 py-28 lg:px-10"
      style={{ backgroundColor: 'var(--bg-primary)' }}
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Skills"
          title="Technical Arsenal"
          subtitle="A collection of technologies and tools I use to build modern digital experiences."
        />

        <RevealWrapper delay={100} direction="up">
          <div
            className="
              relative mx-auto mt-16 h-[500px] w-full
              max-w-5xl cursor-pointer
              sm:h-[550px]
              md:h-[600px]
            "
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            {/* Background glow */}
            <div
              className="pointer-events-none absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full blur-[120px]"
              style={{
                backgroundColor: 'var(--glow)',
                opacity: 0.2,
              }}
            />

            {skills.map((skill, index) => (
              <SkillCard
                key={skill.name}
                name={skill.name}
                position={
                  positions[index] || {
                    x: 50,
                    y: 50,
                    rotate: 0,
                  }
                }
                movement={movements[index]}
                index={index}
              />
            ))}
          </div>
        </RevealWrapper>
      </div>
    </section>
  );
}