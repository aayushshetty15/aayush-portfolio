import SectionHeading, { RevealWrapper } from '@/components/SectionHeading';
import TechStack3DCluster from '@/components/TechStack3DCluster';

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative overflow-hidden py-16 sm:py-24 md:py-28 px-4 sm:px-6 lg:px-10"
      style={{ backgroundColor: 'var(--bg-primary)' }}
    >
      {/* Background ambient radial glow */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[150px]"
        style={{
          backgroundColor: 'var(--glow)',
          opacity: 0.18,
        }}
      />

      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Skills & Technologies"
          title="Technical Arsenal"
          subtitle="Interactive 3D physics cluster of modern tools, languages, and frameworks. Hover over any sphere to push and collide neighboring spheres in real time."
        />

        <RevealWrapper delay={100} direction="up">
          <TechStack3DCluster />
        </RevealWrapper>
      </div>
    </section>
  );
}