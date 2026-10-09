import { useState, useEffect } from 'react';
import { PROJECTS, type ProjectItem } from '@/data/portfolio';
import { RevealWrapper } from '@/components/SectionHeading';
import { ProjectCardMockup } from './ProjectCardMockup';
import { ArrowRight, Github, ExternalLink, X, CheckCircle2, TrendingUp, Sparkles, Layers } from 'lucide-react';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  // Close modal on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedProject(null);
      }
    };
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedProject]);

  return (
    <section
      id="projects"
      className="relative py-16 sm:py-24 md:py-28 px-4 sm:px-6 lg:px-10 overflow-hidden"
      style={{ backgroundColor: '#070506' }}
    >
      {/* Subtle ambient warm crimson glow in background */}
      <div
        className="pointer-events-none absolute -left-20 top-1/4 w-[450px] h-[450px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(229,9,20,0.12), transparent 70%)',
          filter: 'blur(90px)',
        }}
      />
      <div
        className="pointer-events-none absolute -right-20 bottom-1/4 w-[450px] h-[450px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(229,9,20,0.10), transparent 70%)',
          filter: 'blur(90px)',
        }}
      />

      <div className="mx-auto max-w-7xl">
        {/* Section Header: Left Title "FEATURED WORK", Right "View more projects ->" */}
        <RevealWrapper delay={0} direction="up">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 sm:mb-12 border-b border-white/[0.08] pb-6">
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#E50914] block mb-2">
                PORTFOLIO SHOWCASE
              </span>
              <h2
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight text-[#EAE3D8]"
                style={{
                  fontFamily: 'Inter, system-ui, sans-serif',
                  letterSpacing: '-0.02em',
                }}
              >
                FEATURED WORK
              </h2>
            </div>

            <a
              href="https://github.com/aayushshetty15?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 text-sm sm:text-base font-medium text-[#c43636] hover:text-[#ff3847] transition-colors"
            >
              <span>View more projects</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>
        </RevealWrapper>

        {/* 2x2 Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {PROJECTS.map((project, index) => {
            const isRedBorder = project.hasRedBorder;

            return (
              <RevealWrapper key={project.id} delay={index * 120} direction="up">
                <div
                  onClick={() => setSelectedProject(project)}
                  className="group cursor-pointer flex flex-col transition-all duration-300 hover:-translate-y-1"
                >
                  {/* Top Preview Frame */}
                  <div
                    className={`relative aspect-[16/10.5] w-full rounded-2xl sm:rounded-3xl overflow-hidden transition-all duration-500 ${
                      isRedBorder
                        ? 'border border-[#d9222a]/80 shadow-[0_0_28px_rgba(217,34,42,0.18)] hover:border-[#ff2e3b] hover:shadow-[0_0_40px_rgba(255,46,59,0.3)]'
                        : 'border border-white/10 hover:border-[#d9222a]/80 hover:shadow-[0_0_35px_rgba(217,34,42,0.22)]'
                    }`}
                  >
                    {/* Render Visual Mockup */}
                    <ProjectCardMockup project={project} />

                    {/* Subtle Hover Action Overlay */}
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3 backdrop-blur-[2px] pointer-events-none">
                      <span className="pointer-events-auto inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-black/80 border border-white/20 text-xs font-semibold text-white shadow-xl hover:bg-[#E50914] hover:border-[#E50914] transition-all duration-200">
                        <Sparkles className="w-3.5 h-3.5" />
                        View Details
                      </span>

                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        aria-label={`GitHub repository for ${project.title}`}
                        className="pointer-events-auto inline-flex items-center justify-center w-9 h-9 rounded-full bg-black/80 border border-white/20 text-white hover:text-[#E50914] hover:border-[#E50914] transition-all duration-200"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    </div>
                  </div>

                  {/* Below Preview: Title & Category matching screenshot */}
                  <div className="mt-4 flex items-start justify-between">
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold uppercase tracking-wider text-[#EDE7DF] group-hover:text-white transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-xs sm:text-sm font-medium uppercase tracking-[0.2em] text-[#8C847B] mt-1 group-hover:text-[#AAA299] transition-colors">
                        {project.category}
                      </p>
                    </div>

                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="opacity-60 hover:opacity-100 text-[#8C847B] hover:text-[#E50914] p-1 transition-all"
                      aria-label={`${project.title} source code`}
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </RevealWrapper>
            );
          })}
        </div>
      </div>

      {/* Interactive Project Details Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md transition-opacity duration-300 animate-in fade-in"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl border border-white/20 bg-[#0F0C0D] p-6 sm:p-8 text-white shadow-2xl"
            onClick={(e) => e.stopPropagation()}
            style={{
              boxShadow: '0 0 50px rgba(229,9,20,0.25), 0 20px 40px rgba(0,0,0,0.8)',
            }}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 sm:top-6 sm:right-6 p-2 rounded-full bg-white/10 text-white/80 hover:text-white hover:bg-white/20 transition-all"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div className="pr-10">
              <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#E50914]">
                {selectedProject.category}
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold uppercase tracking-wide text-[#EDE7DF] mt-1">
                {selectedProject.title}
              </h3>
              <p className="text-sm font-medium text-[#C4BCB0] mt-1">
                {selectedProject.subtitle}
              </p>
            </div>

            {/* Project Preview Image if available */}
            {selectedProject.image && (
              <div className="mt-5 relative aspect-[16/9] w-full rounded-xl overflow-hidden border border-white/10 shadow-lg">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover object-top"
                />
              </div>
            )}

            {/* Description */}
            <div className="mt-6 text-sm text-[#A8A196] leading-relaxed">
              {selectedProject.description}
            </div>

            {/* Key Features & Architecture */}
            <div className="mt-6 rounded-xl bg-white/[0.03] border border-white/10 p-4 sm:p-5">
              <div className="flex items-center gap-2 mb-3">
                <Layers className="w-4 h-4 text-[#E50914]" />
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#EDE7DF]">
                  Key Features & System Architecture
                </h4>
              </div>
              <ul className="space-y-2.5">
                {selectedProject.bullets.map((bullet, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#BDB5A9] leading-snug">
                    <CheckCircle2 className="w-4 h-4 text-[#E50914] shrink-0 mt-0.5" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tech Tags */}
            <div className="mt-6">
              <p className="text-xs font-semibold uppercase tracking-wider text-[#8C847B] mb-2.5">
                Technologies Used
              </p>
              <div className="flex flex-wrap gap-2">
                {selectedProject.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full text-xs font-medium bg-white/5 border border-white/10 text-[#DDD5CB]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Metrics & Action Footer */}
            <div className="mt-8 pt-5 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-xs font-semibold text-[#E50914]">
                <TrendingUp className="w-4 h-4" />
                <span>{selectedProject.metric}</span>
              </div>

              <div className="flex items-center gap-3 w-full sm:w-auto">
                <a
                  href={selectedProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-[#E50914] text-white text-xs sm:text-sm font-semibold hover:bg-[#ff1e2d] shadow-[0_0_20px_rgba(229,9,20,0.4)] transition-all"
                >
                  <Github className="w-4 h-4" />
                  <span>View Repository</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
