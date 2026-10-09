import React from 'react';
import type { ProjectItem } from '@/data/portfolio';

export function ProjectCardMockup({ project }: { project: ProjectItem }) {
  if (project.image) {
    return <ImageThumbnailMockup project={project} />;
  }

  switch (project.id) {
    case 'flowforge':
      return <FlowForgeMockup />;
    case 'carconnect':
      return <CarConnectMockup />;
    case 'munchly':
      return <MunchlyMockup />;
    case 'portfolio':
      return <PortfolioMockup />;
    case 'learnbridge':
      return <LearnBridgeMockup />;
    case 'neurovision':
    default:
      return <NeuroVisionMockup />;
  }
}

/**
 * Image-based Project Thumbnail
 * High-definition snapshot with ambient vignette and hover zoom
 */
function ImageThumbnailMockup({ project }: { project: ProjectItem }) {
  return (
    <div className="relative w-full h-full bg-[#070506] overflow-hidden select-none">
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
        loading="lazy"
      />
      {/* Ambient lighting vignette & bottom gradient */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'linear-gradient(180deg, rgba(0,0,0,0.15) 0%, transparent 40%, rgba(7,5,6,0.6) 100%)',
        }}
      />
    </div>
  );
}

/**
 * 1. FlowForge Mockup
 * Aesthetic: Inspired by "ELEVATE STUDIO - WE CRAFT BRANDS"
 * Editorial typography, crimson fluid ribbon & glowing workflow nodes
 */
function FlowForgeMockup() {
  return (
    <div className="relative w-full h-full bg-[#0d090a] overflow-hidden select-none flex flex-col justify-between p-4 sm:p-6 text-white font-sans">
      {/* Background ambient lighting */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute -right-10 -bottom-10 w-72 h-72 rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(229,9,20,0.25) 0%, transparent 70%)',
            filter: 'blur(50px)',
          }}
        />
        <div
          className="absolute left-1/3 top-1/4 w-48 h-48 rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(160,20,30,0.18) 0%, transparent 70%)',
            filter: 'blur(45px)',
          }}
        />
      </div>

      {/* Top Bar Navigation */}
      <div className="relative z-10 flex items-center justify-between border-b border-white/[0.08] pb-2.5 sm:pb-3">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#E50914] animate-pulse" />
          <span className="text-[11px] sm:text-xs font-semibold tracking-widest text-[#EDE7DF] uppercase">
            FLOWFORGE STUDIO
          </span>
        </div>
        <div className="hidden sm:flex items-center gap-4 text-[10px] text-[#A19D98] tracking-wider uppercase">
          <span className="hover:text-white transition-colors">Overview</span>
          <span className="hover:text-white transition-colors">Pipelines</span>
          <span className="hover:text-white transition-colors">Audit</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="text-[9px] px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-[#D1C9BE]">
            v2.4 Live
          </span>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="relative z-10 grid grid-cols-12 items-center my-auto py-2 sm:py-4 gap-4">
        {/* Left Column: Big Editorial Heading */}
        <div className="col-span-7 sm:col-span-6 pr-2">
          <p className="text-[10px] tracking-[0.25em] uppercase text-[#E50914] font-semibold mb-1 sm:mb-2">
            NEXT-GEN AUTOMATION
          </p>
          <h4 className="text-2xl sm:text-3xl lg:text-4xl font-serif tracking-tight text-[#FAF7F2] leading-[1.08]">
            WE CRAFT <br />
            <span className="italic font-light text-white/90">WORKFLOWS</span>
          </h4>
          <p className="mt-2 text-[10px] sm:text-xs text-[#9E978F] line-clamp-2 max-w-xs leading-relaxed hidden sm:block">
            Cycle-protected visual execution engine with 45 automated acceptance suites.
          </p>
          <div className="mt-3 sm:mt-4 flex items-center gap-2">
            <span className="inline-flex items-center justify-center px-3 py-1 sm:py-1.5 rounded-full bg-[#E50914] text-[10px] sm:text-xs font-medium text-white shadow-[0_0_15px_rgba(229,9,20,0.5)]">
              Explore Engine
            </span>
            <span className="text-[10px] text-[#A89F94] tracking-wider hidden sm:inline">
              50-Step Safe
            </span>
          </div>
        </div>

        {/* Right Column: 3D Crimson Silk Ribbon & Workflow Nodes */}
        <div className="col-span-5 sm:col-span-6 relative flex items-center justify-center h-32 sm:h-44">
          {/* Crimson Ribbon SVG */}
          <svg
            className="w-full h-full drop-shadow-[0_10px_20px_rgba(229,9,20,0.35)]"
            viewBox="0 0 240 160"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="ribbonGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#ff2a38" />
                <stop offset="40%" stopColor="#b30913" />
                <stop offset="75%" stopColor="#570007" />
                <stop offset="100%" stopColor="#8a0710" />
              </linearGradient>
              <linearGradient id="ribbonGrad2" x1="100%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#ff525e" />
                <stop offset="50%" stopColor="#e50914" />
                <stop offset="100%" stopColor="#300004" />
              </linearGradient>
              <filter id="softGlow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="4" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
            </defs>

            {/* Background ribbon loop */}
            <path
              d="M 190 20 C 130 10, 80 50, 110 90 C 130 120, 210 110, 220 70 C 225 50, 215 30, 190 20 Z"
              fill="url(#ribbonGrad1)"
              opacity="0.85"
            />
            {/* Foreground sweeping ribbon drape */}
            <path
              d="M 30 135 C 70 145, 120 120, 140 75 C 160 30, 100 15, 60 55 C 20 95, 80 140, 160 145 C 210 148, 230 115, 215 90 C 190 50, 120 70, 95 105 Z"
              fill="url(#ribbonGrad2)"
              filter="url(#softGlow)"
            />
            {/* Highlight gleams */}
            <path
              d="M 50 125 C 80 130, 125 105, 140 70"
              stroke="rgba(255,255,255,0.4)"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
            <path
              d="M 125 45 C 145 25, 185 30, 205 65"
              stroke="rgba(255,160,170,0.3)"
              strokeWidth="2"
              strokeLinecap="round"
            />

            {/* Glowing Pipeline Nodes Overlay */}
            <g transform="translate(10, 15)">
              <circle cx="20" cy="30" r="12" fill="#120c0e" stroke="#E50914" strokeWidth="1.5" />
              <text x="20" y="33" textAnchor="middle" fill="#FAF7F2" fontSize="9" fontWeight="bold">⚡</text>

              <line x1="32" y1="30" x2="68" y2="45" stroke="#E50914" strokeWidth="1.5" strokeDasharray="3 2" />

              <circle cx="80" cy="48" r="12" fill="#120c0e" stroke="#FAF7F2" strokeWidth="1.5" />
              <text x="80" y="51" textAnchor="middle" fill="#FAF7F2" fontSize="9" fontWeight="bold">🔀</text>
            </g>
          </svg>

          {/* Slider indicator dots matching screenshot */}
          <div className="absolute right-1 bottom-1 sm:bottom-2 flex flex-col gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-white shadow-sm" />
            <span className="w-1.5 h-1.5 rounded-full bg-white/40" />
            <span className="w-1.5 h-1.5 rounded-full bg-white/20" />
          </div>
        </div>
      </div>

      {/* Footer bar */}
      <div className="relative z-10 flex items-center justify-between text-[10px] text-[#857E77] pt-2 border-t border-white/[0.05]">
        <span>4 Node Types • Zero Cycle Loops</span>
        <span className="text-[#D4CCC2]">aayushshetty15 / flowforge</span>
      </div>
    </div>
  );
}

/**
 * 2. CarConnect Mockup
 * Aesthetic: Inspired by "NEXUS FINANCE - Smart Investments Better Future"
 * Clean dark fintech UI with glowing telemetry stock/crypto style graph and red CTA
 */
function CarConnectMockup() {
  return (
    <div className="relative w-full h-full bg-[#0a0a0d] overflow-hidden select-none flex flex-col justify-between p-4 sm:p-6 text-white font-sans">
      {/* Ambient background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute -right-6 top-1/4 w-60 h-60 rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(16,185,129,0.12) 0%, transparent 70%)',
            filter: 'blur(50px)',
          }}
        />
        <div
          className="absolute left-1/4 bottom-0 w-60 h-60 rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(229,9,20,0.12) 0%, transparent 70%)',
            filter: 'blur(50px)',
          }}
        />
      </div>

      {/* Top Bar */}
      <div className="relative z-10 flex items-center justify-between border-b border-white/[0.08] pb-2.5 sm:pb-3">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-gradient-to-tr from-[#E50914] to-[#ff525e]" />
          <span className="text-[11px] sm:text-xs font-semibold tracking-wider text-[#EDE7DF]">
            CARCONNECT
          </span>
        </div>
        <div className="hidden sm:flex items-center gap-4 text-[10px] text-[#9A9690] tracking-wider uppercase">
          <span>Market</span>
          <span>Vehicles</span>
          <span>Analytics</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-[9px] px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
            ● 13 Tables Sync
          </span>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="relative z-10 grid grid-cols-12 items-center my-auto py-2 sm:py-4 gap-4">
        {/* Left: Text & CTA */}
        <div className="col-span-6 sm:col-span-6 pr-2">
          <h4 className="text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight text-[#FAF7F2] leading-tight">
            Smart Investments <br />
            <span className="text-white/85">Better Future</span>
          </h4>
          <p className="mt-2 text-[10px] sm:text-xs text-[#8E877F] line-clamp-2 leading-relaxed hidden sm:block">
            Multi-role automotive marketplace with 70+ PHP engines and 4 live analytics modules.
          </p>
          <div className="mt-3 sm:mt-4 flex items-center gap-2">
            <span className="inline-flex items-center justify-center px-3.5 py-1.5 rounded-md bg-[#E50914] text-[10px] sm:text-xs font-semibold text-white shadow-[0_0_15px_rgba(229,9,20,0.4)]">
              Get Started
            </span>
            <span className="text-[10px] text-[#A19D98] hidden sm:inline">
              Learn More →
            </span>
          </div>
        </div>

        {/* Right: Glowing Graph / Analytics Widget */}
        <div className="col-span-6 sm:col-span-6">
          <div className="relative rounded-xl border border-white/10 bg-[#121217]/90 p-3 sm:p-4 shadow-2xl backdrop-blur-md">
            {/* Metric Top */}
            <div className="flex items-center justify-between mb-2">
              <div>
                <p className="text-[9px] uppercase tracking-wider text-[#7E7A75]">Total Volume</p>
                <p className="text-sm sm:text-lg font-bold text-white">$142,850.00</p>
              </div>
              <span className="text-[9px] px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-400 font-medium">
                +18.4%
              </span>
            </div>

            {/* Glowing Line Graph */}
            <div className="relative h-16 sm:h-20 w-full">
              <svg className="w-full h-full overflow-visible" viewBox="0 0 160 60" fill="none">
                <defs>
                  <linearGradient id="chartGlow" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#10b981" stopOpacity="0.35" />
                    <stop offset="100%" stopColor="#10b981" stopOpacity="0.0" />
                  </linearGradient>
                </defs>
                {/* Area fill */}
                <path
                  d="M 0 45 Q 25 35, 45 42 T 90 25 T 130 18 L 160 10 L 160 60 L 0 60 Z"
                  fill="url(#chartGlow)"
                />
                {/* Glowing line */}
                <path
                  d="M 0 45 Q 25 35, 45 42 T 90 25 T 130 18 L 160 10"
                  stroke="#10b981"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                />
                {/* Live pulse dot */}
                <circle cx="160" cy="10" r="3.5" fill="#10b981" />
                <circle cx="160" cy="10" r="6" fill="#10b981" opacity="0.4" className="animate-ping" />
              </svg>
            </div>

            {/* Mini stats footer */}
            <div className="mt-2 pt-2 border-t border-white/[0.06] flex items-center justify-between text-[9px] text-[#8A857D]">
              <span>70+ Modules</span>
              <span className="text-white/80">3-Role Auth</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative z-10 flex items-center justify-between text-[10px] text-[#807B75] pt-2 border-t border-white/[0.05]">
        <span>MySQL 13-Table Schema • OTP & RBAC</span>
        <span className="text-[#CFC6BA]">aayushshetty15 / carconnect</span>
      </div>
    </div>
  );
}

/**
 * 3. LearnBridge Mockup
 * Aesthetic: Inspired by "TRAVELORA - Explore The Unseen"
 * Deep atmospheric mountain vista with elegant serif title and red CTA
 */
function LearnBridgeMockup() {
  return (
    <div className="relative w-full h-full bg-[#07090b] overflow-hidden select-none flex flex-col justify-between p-4 sm:p-6 text-white font-sans">
      {/* Mountain Landscape Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Subtle sky gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0f14] via-[#121113] to-[#07090b]" />

        {/* Mountain Silhouette SVG */}
        <svg
          className="absolute bottom-0 right-0 w-full sm:w-3/4 h-36 sm:h-52 opacity-65"
          viewBox="0 0 400 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="mountRidge1" x1="50%" y1="0%" x2="50%" y2="100%">
              <stop offset="0%" stopColor="#453835" />
              <stop offset="50%" stopColor="#251e1e" />
              <stop offset="100%" stopColor="#090b0d" />
            </linearGradient>
            <linearGradient id="mountRidge2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#7a554a" />
              <stop offset="40%" stopColor="#3d2a26" />
              <stop offset="100%" stopColor="#0a0a0c" />
            </linearGradient>
          </defs>
          {/* Back peak */}
          <polygon points="120,200 240,60 360,200" fill="url(#mountRidge1)" opacity="0.6" />
          {/* Main rugged peak */}
          <polygon points="180,200 290,30 395,200" fill="url(#mountRidge2)" />
          {/* Accent ridgeline lines */}
          <path d="M 290 30 L 260 110 L 295 200" stroke="rgba(255,200,180,0.2)" strokeWidth="1.5" />
          <path d="M 290 30 L 330 130 L 350 200" stroke="rgba(255,220,200,0.15)" strokeWidth="1" />
        </svg>

        {/* Mist and dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#07090b] via-[#07090b]/80 to-transparent" />
      </div>

      {/* Top Bar */}
      <div className="relative z-10 flex items-center justify-between border-b border-white/[0.08] pb-2.5 sm:pb-3">
        <div className="flex items-center gap-2">
          <span className="text-sm">🏔</span>
          <span className="text-[11px] sm:text-xs font-semibold tracking-wider text-[#EDE7DF]">
            TRAVELORA / LEARNBRIDGE
          </span>
        </div>
        <div className="hidden sm:flex items-center gap-4 text-[10px] text-[#A19D98] tracking-wider uppercase">
          <span>Explore</span>
          <span>Courses</span>
          <span>Analytics</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="text-[9px] px-2 py-0.5 rounded-full bg-white/10 text-[#DDD5CB]">
            43 REST APIs
          </span>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="relative z-10 grid grid-cols-12 items-center my-auto py-2 sm:py-4 gap-4">
        <div className="col-span-8 sm:col-span-7 pr-2">
          <h4 className="text-2xl sm:text-3xl lg:text-4xl font-serif tracking-tight text-[#FAF7F2] leading-tight">
            Explore <br />
            <span className="text-white/90">The Unseen</span>
          </h4>
          <p className="mt-2 text-[10px] sm:text-xs text-[#9E9890] line-clamp-2 max-w-xs leading-relaxed hidden sm:block">
            Dual-role platform with dedicated learner dashboards, Google OAuth, and real-time tracking.
          </p>
          <div className="mt-3 sm:mt-4 flex items-center gap-2">
            <span className="inline-flex items-center justify-center px-3.5 py-1.5 rounded-md bg-[#E50914] text-[10px] sm:text-xs font-semibold text-white shadow-[0_0_15px_rgba(229,9,20,0.5)]">
              Start Journey
            </span>
            <span className="text-[10px] text-[#B0A79E] hidden sm:inline">
              View Catalog →
            </span>
          </div>
        </div>

        {/* Floating progress widget on right */}
        <div className="col-span-4 sm:col-span-5 flex justify-end">
          <div className="rounded-xl border border-white/10 bg-[#0f1115]/80 p-2.5 sm:p-3 backdrop-blur-md max-w-[150px] sm:max-w-[180px] w-full shadow-xl">
            <div className="flex items-center justify-between text-[9px] text-[#9E9890] mb-1">
              <span>Progress</span>
              <span className="text-[#E50914] font-bold">84%</span>
            </div>
            <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-[#E50914] to-[#ff4d5a] rounded-full w-[84%]" />
            </div>
            <div className="mt-2 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span className="text-[8px] sm:text-[9px] text-white/80 truncate">Dual Dashboards</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative z-10 flex items-center justify-between text-[10px] text-[#7E7872] pt-2 border-t border-white/[0.05]">
        <span>Google OAuth • JWT Auth • RBAC</span>
        <span className="text-[#CCC3B7]">aayushshetty15 / learnbridge</span>
      </div>
    </div>
  );
}

/**
 * 4. NeuroVision Mockup
 * Aesthetic: Inspired by "VELOCE APP - Track. Improve. Achieve More."
 * Dark mobile device mockup displaying red glowing "68.4" or "94.2" metrics and audio/telemetry graph
 */
function NeuroVisionMockup() {
  return (
    <div className="relative w-full h-full bg-[#0a0809] overflow-hidden select-none flex flex-col justify-between p-4 sm:p-6 text-white font-sans">
      {/* Background ambient red glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute right-4 bottom-0 w-64 h-64 rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(229,9,20,0.2) 0%, transparent 70%)',
            filter: 'blur(50px)',
          }}
        />
      </div>

      {/* Top Bar */}
      <div className="relative z-10 flex items-center justify-between border-b border-white/[0.08] pb-2.5 sm:pb-3">
        <div className="flex items-center gap-2">
          <span className="text-xs">⚡</span>
          <span className="text-[11px] sm:text-xs font-semibold tracking-wider text-[#EDE7DF]">
            VELOCE / NEUROVISION
          </span>
        </div>
        <div className="hidden sm:flex items-center gap-4 text-[10px] text-[#9C9790] tracking-wider uppercase">
          <span>Models</span>
          <span>Benchmarking</span>
          <span>EM Metric</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="text-[9px] px-2 py-0.5 rounded-full bg-red-500/15 border border-red-500/30 text-[#ff4d5a]">
            9,000+ QA Pairs
          </span>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="relative z-10 grid grid-cols-12 items-center my-auto py-2 sm:py-4 gap-4">
        {/* Left Column: Heading & CTA */}
        <div className="col-span-7 sm:col-span-6 pr-2">
          <h4 className="text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight text-[#FAF7F2] leading-tight">
            Track. Improve. <br />
            <span className="text-white/85">Achieve More.</span>
          </h4>
          <p className="mt-2 text-[10px] sm:text-xs text-[#948E86] line-clamp-2 max-w-xs leading-relaxed hidden sm:block">
            Multimodal dataset curation, quality evaluation, and model benchmarking for visual intelligence.
          </p>
          <div className="mt-3 sm:mt-4 flex items-center gap-2">
            <span className="inline-flex items-center justify-center px-3.5 py-1.5 rounded-md bg-[#E50914] text-[10px] sm:text-xs font-semibold text-white shadow-[0_0_15px_rgba(229,9,20,0.5)]">
              Evaluate
            </span>
            <span className="text-[10px] text-[#A69E94] hidden sm:inline">
              View Benchmarks →
            </span>
          </div>
        </div>

        {/* Right Column: Realistic 3D Mobile Device Mockup matching screenshot */}
        <div className="col-span-5 sm:col-span-6 flex items-center justify-center">
          <div className="relative w-28 sm:w-36 h-36 sm:h-44 rounded-[18px] sm:rounded-[22px] bg-[#000000] border-2 border-[#2b2727] p-1.5 shadow-[0_15px_35px_rgba(0,0,0,0.8)] overflow-hidden">
            {/* Phone Screen Container */}
            <div className="w-full h-full rounded-[14px] sm:rounded-[18px] bg-[#0c090a] p-2 flex flex-col justify-between overflow-hidden border border-white/5">
              {/* Dynamic Island / Notch */}
              <div className="mx-auto w-10 h-1.5 bg-black rounded-full mb-1" />

              {/* Glowing Big Metric */}
              <div>
                <div className="flex items-center justify-between">
                  <span className="text-lg sm:text-2xl font-black tracking-tight text-white">
                    68.4
                  </span>
                  <span className="text-[7px] px-1 py-0.5 rounded bg-[#E50914] text-white font-bold">
                    EXACT
                  </span>
                </div>
                <p className="text-[7px] sm:text-[8px] text-[#7A746D] uppercase">Match Score %</p>
              </div>

              {/* Glowing Red Bar Graph / Telemetry */}
              <div className="flex items-end justify-between gap-1 h-10 sm:h-12 py-1">
                <div className="w-1.5 bg-[#E50914]/40 rounded-t-sm h-[40%]" />
                <div className="w-1.5 bg-[#E50914]/60 rounded-t-sm h-[65%]" />
                <div className="w-1.5 bg-[#E50914]/80 rounded-t-sm h-[50%]" />
                <div className="w-1.5 bg-[#ff3344] rounded-t-sm h-[90%] shadow-[0_0_6px_#ff3344]" />
                <div className="w-1.5 bg-[#E50914] rounded-t-sm h-[75%]" />
                <div className="w-1.5 bg-[#E50914]/70 rounded-t-sm h-[55%]" />
                <div className="w-1.5 bg-[#ff3344] rounded-t-sm h-[85%] shadow-[0_0_6px_#ff3344]" />
                <div className="w-1.5 bg-[#E50914]/50 rounded-t-sm h-[35%]" />
              </div>

              {/* Bottom Phone Indicator */}
              <div className="text-[7px] text-[#807971] flex justify-between items-center border-t border-white/[0.08] pt-1">
                <span>9k Samples</span>
                <span className="text-[#ff3847] font-semibold">Live EM</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative z-10 flex items-center justify-between text-[10px] text-[#756F68] pt-2 border-t border-white/[0.05]">
        <span>Exact Match Metrics • Python & PyTorch</span>
        <span className="text-[#C4BCB0]">aayushshetty15 / neurovision</span>
      </div>
    </div>
  );
}

/**
 * 5. Munchly Mockup
 * Aesthetic: Reels-based food discovery platform
 * Vertical video reels stream with floating engagement bar, chef profile, and ImageKit CDN badge
 */
function MunchlyMockup() {
  return (
    <div className="relative w-full h-full bg-[#0b0809] overflow-hidden select-none flex flex-col justify-between p-4 sm:p-6 text-white font-sans">
      {/* Ambient background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute -right-8 top-1/4 w-64 h-64 rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(229,9,20,0.22) 0%, transparent 70%)',
            filter: 'blur(50px)',
          }}
        />
        <div
          className="absolute left-1/4 -bottom-10 w-60 h-60 rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(245,158,11,0.15) 0%, transparent 70%)',
            filter: 'blur(50px)',
          }}
        />
      </div>

      {/* Top Bar */}
      <div className="relative z-10 flex items-center justify-between border-b border-white/[0.08] pb-2.5 sm:pb-3">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-gradient-to-tr from-[#E50914] to-[#ff6b4a] animate-pulse" />
          <span className="text-[11px] sm:text-xs font-semibold tracking-wider text-[#EDE7DF] uppercase">
            MUNCHLY FEED
          </span>
        </div>
        <div className="hidden sm:flex items-center gap-4 text-[10px] text-[#9E9890] tracking-wider uppercase">
          <span className="hover:text-white transition-colors">Reels</span>
          <span className="hover:text-white transition-colors">Partners</span>
          <span className="hover:text-white transition-colors">ImageKit</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="text-[9px] px-2 py-0.5 rounded-full bg-[#E50914]/15 border border-[#E50914]/30 text-[#ff4d5a] font-medium">
            ● 2-Role Auth
          </span>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="relative z-10 grid grid-cols-12 items-center my-auto py-2 sm:py-4 gap-4">
        {/* Left Column: Headline & CTA */}
        <div className="col-span-7 sm:col-span-6 pr-2">
          <p className="text-[10px] tracking-[0.25em] uppercase text-[#E50914] font-semibold mb-1 sm:mb-2">
            REELS-BASED FOOD DISCOVERY
          </p>
          <h4 className="text-xl sm:text-2xl lg:text-3xl font-serif tracking-tight text-[#FAF7F2] leading-tight">
            STREAM BITES <br />
            <span className="italic font-light text-white/90">CRAVE MORE</span>
          </h4>
          <p className="mt-2 text-[10px] sm:text-xs text-[#999289] line-clamp-2 max-w-xs leading-relaxed hidden sm:block">
            Vertical reel stream with 2-role JWT authentication, REST APIs, and ImageKit media pipeline.
          </p>
          <div className="mt-3 sm:mt-4 flex items-center gap-2">
            <span className="inline-flex items-center justify-center px-3.5 py-1.5 rounded-md bg-[#E50914] text-[10px] sm:text-xs font-semibold text-white shadow-[0_0_15px_rgba(229,9,20,0.5)]">
              Watch Stream
            </span>
            <span className="text-[10px] text-[#A69E94] hidden sm:inline">
              ImageKit CDN →
            </span>
          </div>
        </div>

        {/* Right Column: Vertical Reels Frame Mockup */}
        <div className="col-span-5 sm:col-span-6 flex items-center justify-center">
          <div className="relative w-28 sm:w-36 h-36 sm:h-44 rounded-[18px] sm:rounded-[22px] bg-[#000000] border-2 border-[#2b2727] p-1.5 shadow-[0_15px_35px_rgba(0,0,0,0.85)] overflow-hidden">
            <div className="relative w-full h-full rounded-[14px] sm:rounded-[18px] overflow-hidden bg-gradient-to-b from-[#2e0e11] via-[#1a080a] to-[#0d0708] p-2 flex flex-col justify-between">
              {/* Top Reel header */}
              <div className="flex items-center justify-between z-10">
                <span className="text-[7px] font-bold uppercase tracking-wider text-white/70">Reel</span>
                <span className="text-[7px] px-1 py-0.5 rounded bg-red-600/80 text-white font-semibold">LIVE</span>
              </div>

              {/* Sizzling food graphic illustration */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-40">
                <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-[#E50914] to-[#f59e0b] blur-md" />
                <div className="absolute text-2xl sm:text-3xl">🍔</div>
              </div>

              {/* Floating Reels Actions Sidebar */}
              <div className="absolute right-1.5 bottom-8 z-10 flex flex-col items-center gap-1.5 text-white/90">
                <div className="flex flex-col items-center">
                  <span className="text-[10px]">❤️</span>
                  <span className="text-[6px] font-bold">24k</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-[10px]">💬</span>
                  <span className="text-[6px] font-bold">1.2k</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-[9px]">↗</span>
                </div>
              </div>

              {/* Bottom Video Meta */}
              <div className="z-10 text-[7px] text-[#EDE7DF] space-y-0.5 max-w-[75%]">
                <p className="font-bold text-white flex items-center gap-0.5">
                  @artisan.food <span className="text-[#38bdf8] text-[6px]">✓</span>
                </p>
                <p className="text-[#C7BFB5] line-clamp-1">Truffle Wagyu Glaze 🔥</p>
                {/* Progress bar */}
                <div className="h-0.5 w-full bg-white/20 rounded-full overflow-hidden mt-1">
                  <div className="h-full bg-[#E50914] w-2/3" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative z-10 flex items-center justify-between text-[10px] text-[#78716A] pt-2 border-t border-white/[0.05]">
        <span>MERN Stack • Multer & Axios • ImageKit</span>
        <span className="text-[#CCC3B7]">aayushshetty15 / munchly</span>
      </div>
    </div>
  );
}

/**
 * 6. Portfolio Mockup
 * Aesthetic: Interactive 3D Developer Website
 * Three.js 3D physics cluster graphic, theme switcher indicator, responsive layout preview
 */
function PortfolioMockup() {
  return (
    <div className="relative w-full h-full bg-[#07080e] overflow-hidden select-none flex flex-col justify-between p-4 sm:p-6 text-white font-sans">
      {/* Ambient background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute -right-10 top-1/3 w-64 h-64 rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(99,102,241,0.2) 0%, transparent 70%)',
            filter: 'blur(50px)',
          }}
        />
        <div
          className="absolute left-1/3 -bottom-8 w-60 h-60 rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(229,9,20,0.18) 0%, transparent 70%)',
            filter: 'blur(50px)',
          }}
        />
      </div>

      {/* Top Bar */}
      <div className="relative z-10 flex items-center justify-between border-b border-white/[0.08] pb-2.5 sm:pb-3">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-gradient-to-tr from-[#6366f1] to-[#a855f7]" />
          <span className="text-[11px] sm:text-xs font-semibold tracking-wider text-[#EDE7DF] uppercase">
            3D WEB ENGINE
          </span>
        </div>
        <div className="hidden sm:flex items-center gap-4 text-[10px] text-[#98928A] tracking-wider uppercase">
          <span className="hover:text-white transition-colors">Three.js</span>
          <span className="hover:text-white transition-colors">R3F Physics</span>
          <span className="hover:text-white transition-colors">Dual Themes</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="text-[9px] px-2 py-0.5 rounded-full bg-indigo-500/15 border border-indigo-500/30 text-indigo-400 font-medium">
            3D Canvas
          </span>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="relative z-10 grid grid-cols-12 items-center my-auto py-2 sm:py-4 gap-4">
        {/* Left Column: Heading & CTA */}
        <div className="col-span-7 sm:col-span-6 pr-2">
          <p className="text-[10px] tracking-[0.25em] uppercase text-[#E50914] font-semibold mb-1 sm:mb-2">
            CREATIVE TECH & 3D WEB
          </p>
          <h4 className="text-xl sm:text-2xl lg:text-3xl font-serif tracking-tight text-[#FAF7F2] leading-tight">
            DIMENSION <br />
            <span className="italic font-light text-white/90">IN MOTION</span>
          </h4>
          <p className="mt-2 text-[10px] sm:text-xs text-[#948E86] line-clamp-2 max-w-xs leading-relaxed hidden sm:block">
            Three.js collision physics, persistent dual theme modes, and responsive layout categories.
          </p>
          <div className="mt-3 sm:mt-4 flex items-center gap-2">
            <span className="inline-flex items-center justify-center px-3.5 py-1.5 rounded-md bg-[#E50914] text-[10px] sm:text-xs font-semibold text-white shadow-[0_0_15px_rgba(229,9,20,0.5)]">
              Interact 3D
            </span>
            <span className="text-[10px] text-[#9E9890] hidden sm:inline">
              Vite + TS →
            </span>
          </div>
        </div>

        {/* Right Column: 3D Wireframe Orb & Tech Physics Cluster */}
        <div className="col-span-5 sm:col-span-6 relative flex items-center justify-center h-32 sm:h-44">
          <svg className="w-full h-full" viewBox="0 0 200 160" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="orbGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#818cf8" stopOpacity="0.8" />
                <stop offset="50%" stopColor="#6366f1" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#e50914" stopOpacity="0.6" />
              </linearGradient>
            </defs>

            {/* Orbit rings */}
            <ellipse cx="100" cy="80" rx="75" ry="32" stroke="rgba(99,102,241,0.3)" strokeWidth="1.2" strokeDasharray="3 3" />
            <ellipse cx="100" cy="80" rx="55" ry="60" stroke="rgba(229,9,20,0.25)" strokeWidth="1" transform="rotate(30 100 80)" />

            {/* Central 3D Sphere */}
            <circle cx="100" cy="80" r="28" fill="url(#orbGrad)" />
            <circle cx="92" cy="72" r="6" fill="white" opacity="0.4" />

            {/* Floating Tech Spheres in Cluster */}
            <g transform="translate(45, 45)">
              <circle cx="0" cy="0" r="11" fill="#0f172a" stroke="#38bdf8" strokeWidth="1.2" />
              <text x="0" y="3" textAnchor="middle" fill="#38bdf8" fontSize="7" fontWeight="bold">R3F</text>
            </g>
            <g transform="translate(155, 55)">
              <circle cx="0" cy="0" r="11" fill="#0f172a" stroke="#818cf8" strokeWidth="1.2" />
              <text x="0" y="3" textAnchor="middle" fill="#818cf8" fontSize="7" fontWeight="bold">TS</text>
            </g>
            <g transform="translate(135, 115)">
              <circle cx="0" cy="0" r="10" fill="#0f172a" stroke="#E50914" strokeWidth="1.2" />
              <text x="0" y="3" textAnchor="middle" fill="#FAF7F2" fontSize="6" fontWeight="bold">3D</text>
            </g>
            <g transform="translate(60, 110)">
              <circle cx="0" cy="0" r="9" fill="#0f172a" stroke="#a855f7" strokeWidth="1.2" />
              <text x="0" y="3" textAnchor="middle" fill="#a855f7" fontSize="6" fontWeight="bold">UI</text>
            </g>
          </svg>

          {/* Theme switcher badge preview */}
          <div className="absolute right-1 bottom-1 sm:bottom-2 px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-[8px] sm:text-[9px] text-[#DDD5CB] backdrop-blur-sm">
            ☀️ / 🌙 Dual Mode
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative z-10 flex items-center justify-between text-[10px] text-[#7A746D] pt-2 border-t border-white/[0.05]">
        <span>Three.js • React Three Fiber • Vite + TS</span>
        <span className="text-[#CCC3B7]">aayushshetty15 / aayush-portfolio</span>
      </div>
    </div>
  );
}

