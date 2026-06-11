"use client";

import { motion, useScroll, useSpring } from "motion/react";
import { Bangers } from "next/font/google";
import Image from "next/image";
import { useRef } from "react";

const bangers = Bangers({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bangers",
});

interface TechBadgeProps {
  name: string;
  glowColor: "cyan" | "gold" | "red" | "emerald" | "purple" | "orange" | "pink";
}

// TechBadge component for showing technologies
function TechBadge({ name, glowColor }: TechBadgeProps) {
  const glowClasses = {
    cyan: "border-cyan-500/30 text-cyan-400 bg-cyan-950/20 hover:border-cyan-400 hover:shadow-[0_0_8px_rgba(6,182,212,0.4)]",
    gold: "border-yellow-600/30 text-yellow-500 bg-yellow-950/20 hover:border-yellow-400 hover:shadow-[0_0_8px_rgba(234,179,8,0.4)]",
    red: "border-red-500/30 text-red-400 bg-red-950/20 hover:border-red-400 hover:shadow-[0_0_8px_rgba(239,68,68,0.4)]",
    emerald: "border-emerald-500/30 text-emerald-400 bg-emerald-950/20 hover:border-emerald-400 hover:shadow-[0_0_8px_rgba(16,185,129,0.4)]",
    purple: "border-purple-500/30 text-purple-400 bg-purple-950/20 hover:border-purple-400 hover:shadow-[0_0_8px_rgba(168,85,247,0.4)]",
    orange: "border-orange-500/30 text-orange-400 bg-orange-950/20 hover:border-orange-400 hover:shadow-[0_0_8px_rgba(249,115,22,0.4)]",
    pink: "border-pink-500/30 text-pink-400 bg-pink-950/20 hover:border-pink-400 hover:shadow-[0_0_8px_rgba(236,72,153,0.4)]",
  };

  return (
    <motion.span
      whileHover={{ scale: 1.05 }}
      className={`px-2 py-0.5 text-[11px] font-mono rounded border transition-all duration-300 cursor-default select-none ${glowClasses[glowColor]}`}
    >
      {name}
    </motion.span>
  );
}

// JSON object array for Experiences
const EXPERIENCES = [
  {
    role: "Advanced Application Engineer",
    company: "Accenture India",
    duration: "July 2024 - Present",
    totalTime: "1 Yr 11 Mos",
    description: "Architecting high-performance client architectures with Next.js 15, React 19, and Tailwind CSS. Restructuring complex state-management patterns to eliminate rendering blocks (improving efficiency by 40%), and developing scalable APIs integrated with vector databases for semantic data retrieval.",
    color: "purple" as const,
    indexStr: "SYS.EXP // 01",
  },
  {
    role: "Deep Learning Researcher",
    company: "AI & ML Collaborations",
    duration: "Sept 2023 - June 2024",
    totalTime: "10 Mos",
    description: "Leading the development of multi-modal AI classification networks combining text and visual heuristics using Contrastive Language-Image Pretraining (CLIP). Implementing high-throughput similarity lookup pipelines via FAISS (Facebook AI Similarity Search) to index millions of text-image vectors with sub-10ms query latencies.",
    color: "pink" as const,
    indexStr: "SYS.EXP // 02",
  },
  {
    role: "Full Stack Developer Intern",
    company: "Software Systems",
    duration: "June 2023 - Aug 2023",
    totalTime: "3 Mos",
    description: "Built interactive web dashboards and real-time visualization interfaces using MongoDB, Express, React, and Node.js (MERN stack). Integrated secure REST APIs and improved application loading metrics by 25% through lazy loading and script bundle optimizations.",
    color: "cyan" as const,
    indexStr: "SYS.EXP // 03",
  },
];

// JSON object array for Projects
const PROJECTS = [
  {
    title: "Multi-Modal Fake News Detector",
    description: "AI-driven news authenticity verification engine using deep learning to match visual and textual heuristics.",
    tech: ["PyTorch", "CLIP", "FAISS", "Transformers", "Python"],
    colorClass: "border-purple-500/20 hover:border-purple-500/50 shadow-[0_0_15px_rgba(168,85,247,0.05)] hover:shadow-[0_0_25px_rgba(168,85,247,0.25)]",
    badgeColor: "purple" as const,
    link: "https://github.com/siddhu-kolipaka",
    imagePath: "/project_fake_news.png",
  },
  {
    title: "AccuKnox Security Dashboard",
    description: "Cloud-native security telemetry console visualizing system alerts, agent status indices, and log streams.",
    tech: ["Next.js", "Redux Toolkit", "Recharts", "Tailwind CSS"],
    colorClass: "border-cyan-500/20 hover:border-cyan-500/50 shadow-[0_0_15px_rgba(6,182,212,0.05)] hover:shadow-[0_0_25px_rgba(6,182,212,0.25)]",
    badgeColor: "cyan" as const,
    link: "https://github.com/siddhu-kolipaka/AccuKnox_Dashboard",
    imagePath: "/project_accuknox.png",
  },
  {
    title: "Valorant Tournament Portal",
    description: "High-traffic registration portal for Revelation 2k24 tournament featuring custom gaming interfaces and bracket metrics.",
    tech: ["React", "Express", "Node.js", "MongoDB", "Framer Motion"],
    colorClass: "border-pink-500/20 hover:border-pink-500/50 shadow-[0_0_15px_rgba(236,72,153,0.05)] hover:shadow-[0_0_25px_rgba(236,72,153,0.25)]",
    badgeColor: "pink" as const,
    link: "https://github.com/siddhu-kolipaka/rev_valo",
    imagePath: "/project_valorant.png",
  },
  {
    title: "Universal Semantic Search",
    description: "Neural index search matching query embeddings in vector space to retrieve contextual documentation instantly.",
    tech: ["FastAPI", "Qdrant", "Sentence-Transformers", "React"],
    colorClass: "border-emerald-500/20 hover:border-emerald-500/50 shadow-[0_0_15px_rgba(16,185,129,0.05)] hover:shadow-[0_0_25px_rgba(16,185,129,0.25)]",
    badgeColor: "emerald" as const,
    link: "https://github.com/siddhu-kolipaka",
    imagePath: "/project_search.png",
  },
  {
    title: "Decentralized Escrow Protocol",
    description: "Web3 escrow smart contract system enforcing secure multi-sig transaction milestones with automated refund hooks.",
    tech: ["Solidity", "Hardhat", "Ethers.js", "React", "TypeScript"],
    colorClass: "border-purple-500/20 hover:border-purple-500/50 shadow-[0_0_15px_rgba(168,85,247,0.05)] hover:shadow-[0_0_25px_rgba(168,85,247,0.25)]",
    badgeColor: "purple" as const,
    link: "https://github.com/siddhu-kolipaka",
    imagePath: "/project_escrow.png",
  },
  {
    title: "Real-time Telemetry Engine",
    description: "High-throughput system telemetry parser handling concurrent data streams from remote IoT sensors via gRPC.",
    tech: ["Rust", "gRPC", "Tokio", "InfluxDB", "Grafana"],
    colorClass: "border-orange-500/20 hover:border-orange-500/50 shadow-[0_0_15px_rgba(249,115,22,0.05)] hover:shadow-[0_0_25px_rgba(249,115,22,0.25)]",
    badgeColor: "orange" as const,
    link: "https://github.com/siddhu-kolipaka",
    imagePath: "/project_telemetry.png",
  },
];

const OVERVIEW_TEXT_STYLES = {
  purple: "text-purple-400",
  cyan: "text-cyan-400",
  pink: "text-pink-400",
  emerald: "text-emerald-400",
  orange: "text-orange-400",
  gold: "text-gold",
  red: "text-red-400",
};

const LAUNCH_BUTTON_STYLES = {
  purple: "border-purple-500/30 text-purple-400 hover:bg-purple-500/20 hover:border-purple-400 hover:shadow-[0_0_12px_rgba(168,85,247,0.4)]",
  cyan: "border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/20 hover:border-cyan-400 hover:shadow-[0_0_12px_rgba(6,182,212,0.4)]",
  pink: "border-pink-500/30 text-pink-400 hover:bg-pink-500/20 hover:border-pink-400 hover:shadow-[0_0_12px_rgba(236,72,153,0.4)]",
  emerald: "border-emerald-500/30 text-emerald-400 hover:bg-emerald-500/20 hover:border-emerald-400 hover:shadow-[0_0_12px_rgba(16,185,129,0.4)]",
  orange: "border-orange-500/30 text-orange-400 hover:bg-orange-500/20 hover:border-orange-400 hover:shadow-[0_0_12px_rgba(249,115,22,0.4)]",
  gold: "border-gold/30 text-gold hover:bg-gold/20 hover:border-gold hover:shadow-[0_0_12px_rgba(230,180,34,0.4)]",
  red: "border-red-500/30 text-red-400 hover:bg-red-500/20 hover:border-red-400 hover:shadow-[0_0_12px_rgba(239,68,68,0.4)]",
};

export default function Slide4() {
  const containerRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  
  // Track scroll specifically for the timeline wrapper to ensure progress bar completes
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start center", "end center"],
  });
  
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div
      id="projects"
      ref={containerRef}
      className="w-full min-h-[100dvh] h-auto bg-black text-white relative overflow-hidden flex flex-col justify-between p-4 md:p-8 font-mono select-none"
    >
      {/* Background Holographic HUD Grids with Purple Theme */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
        <svg width="100%" height="100%" className="absolute inset-0">
          <defs>
            <pattern id="hud-grid-4" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(168, 85, 247, 0.08)" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hud-grid-4)" />
        </svg>

        {/* Large Rotating Compass Circle */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="absolute -right-40 -bottom-40 left-auto top-auto w-96 h-96 lg:w-[35rem] lg:h-[35rem] border border-purple-500/10 rounded-full flex items-center justify-center"
        >
          <div className="w-[90%] h-[90%] border border-dashed border-purple-500/5 rounded-full flex items-center justify-center">
            <div className="w-[80%] h-[80%] border border-purple-500/10 rounded-full flex items-center justify-center">
              <span className="text-[8px] text-purple-500/20 tracking-[1em] uppercase">Stark Repository Center</span>
            </div>
          </div>
        </motion.div>

        {/* Diagonal Corner Blueprint Lines (With right-auto/bottom-auto overrides to counter global inset bug) */}
        <div className="absolute top-0 left-0 right-auto bottom-auto w-24 h-24 border-t-2 border-l-2 border-purple-500/20"></div>
        <div className="absolute top-0 right-0 left-auto bottom-auto w-24 h-24 border-t-2 border-r-2 border-purple-500/20"></div>
        <div className="absolute bottom-0 left-0 right-auto top-auto w-24 h-24 border-b-2 border-l-2 border-purple-500/20"></div>
        <div className="absolute bottom-0 right-0 left-auto top-auto w-24 h-24 border-b-2 border-r-2 border-purple-500/20"></div>
      </div>

      {/* Slide Header */}
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="w-full flex flex-col md:flex-row items-start md:items-center justify-between border-b border-purple-500/30 pb-4 z-10 gap-4"
      >
        <div>
          <h2 className="text-xs text-purple-400 tracking-[0.25em] font-bold">
            SECURE ACCESS CORE // SYSTEM NODE 04
          </h2>
          <h1 className="text-xl md:text-2xl font-bold text-white mt-1 uppercase flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-purple-500 animate-pulse"></span>
            EXPERIENCE & SHOWCASE PROJECTS
          </h1>
        </div>
        <div className="flex items-center gap-6 text-right">
          <div className="hidden sm:block">
            <span className="block text-[10px] text-purple-500">MISSION LOGBOOK</span>
            <span className="text-xs text-yellow-500 font-bold">VERIFIED REPOSITORIES</span>
          </div>
          <div className="px-3 py-1 bg-purple-950/20 border border-purple-500/30 rounded text-purple-400 text-xs">
            SYS STATUS: ONLINE
          </div>
        </div>
      </motion.div>

      {/* Main Stacked Layout (Full Width & Dynamic Height) */}
      <div className="flex flex-col gap-10 flex-1 my-6 z-10">
        
        {/* SECTION 1: Normal Long Timeline with Date on Left, Details on Right */}
        <div className="w-full md:w-[80%] mx-auto border border-purple-500/20 bg-slate-950/40 backdrop-blur-md rounded-xl p-4 md:p-6 relative overflow-hidden flex flex-col">
          <h3 className={`${bangers.className} text-3xl text-purple-400 tracking-wider mb-8 border-b border-purple-500/20 pb-2`}>
            [ MISSION TIMELINE ]
          </h3>
          
          {/* Normal Timeline Wrapper */}
          <div ref={timelineRef} className="relative w-full py-4 min-h-[400px]">
            
            {/* Left Timeline Line (grows scroll-triggered) */}
            <div className="timeline-line-normal bg-slate-800 rounded">
              <motion.div
                style={{ scaleY }}
                className="w-full h-full bg-purple-500 origin-top shadow-[0_0_8px_rgba(168,85,247,0.8)]"
              />
            </div>
 
            {/* Experience Items (long space-y layout) */}
            <div className="space-y-16 lg:space-y-24">
              {EXPERIENCES.map((exp, idx) => (
                <div
                  key={idx}
                  className="relative w-full flex flex-col lg:flex-row items-start group/node"
                >
                  {/* Timeline Pulse Node (centered on line) */}
                  <div className="timeline-node-normal rounded-full bg-slate-950 border-2 border-purple-500 flex items-center justify-center shadow-[0_0_10px_rgba(168,85,247,0.4)]">
                    <motion.div 
                      animate={{ scale: [1, 1.4, 1] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                      className="absolute inset-0 rounded-full border border-purple-400/50 pointer-events-none"
                    />
                    <motion.div 
                      initial={{ scale: 0.5 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      className="w-1.5 h-1.5 lg:w-2 lg:h-2 rounded-full bg-purple-400 shadow-[0_0_6px_rgba(168,85,247,0.8)]"
                    />
                  </div>

                  {/* LEFT SIDE: Date and Time block (Desktop Only - sits to the left of the line) */}
                  <motion.div
                    initial={{ x: -20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, delay: idx * 0.1 }}
                    className="hidden lg:flex w-[280px] pr-12 flex-col items-end text-right shrink-0 space-y-1"
                  >
                    <span className="text-[9px] text-purple-400 font-bold block uppercase tracking-widest">
                      {exp.indexStr}
                    </span>
                    <span className="text-sm font-bold text-white block">
                      {exp.duration}
                    </span>
                    <span className="inline-block px-2 py-0.5 bg-purple-950/40 text-purple-400 text-[10px] rounded border border-purple-500/20 font-bold uppercase">
                      {exp.totalTime}
                    </span>
                  </motion.div>

                  {/* RIGHT SIDE: Details block (Sits entirely to the right of line via padding-left) */}
                  <motion.div
                    initial={{ x: 30, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.7, delay: idx * 0.1 }}
                    className="flex flex-col w-full text-left space-y-2 pl-10 lg:pl-12 group-hover/node:translate-x-1 transition-all duration-300 border border-transparent hover:border-purple-500/10 hover:bg-purple-950/5 rounded-lg p-3 lg:-ml-3"
                  >
                    {/* Mobile-only header (hidden on desktop) */}
                    <div className="flex flex-wrap items-center gap-2 lg:hidden">
                      <span className="text-[9px] text-purple-400 font-bold uppercase tracking-widest">
                        {exp.indexStr}
                      </span>
                      <span className="text-xs text-slate-500 font-bold">//</span>
                      <span className="text-xs font-bold text-white uppercase">
                        {exp.duration}
                      </span>
                      <span className="px-2 py-0.5 bg-purple-950/40 text-purple-400 text-[9px] rounded border border-purple-500/20 font-bold uppercase">
                        {exp.totalTime}
                      </span>
                    </div>

                    {/* Role Title and Company */}
                    <div className="space-y-0.5">
                      <h4 className="text-base font-bold text-white uppercase group-hover/node:text-purple-400 transition-colors duration-300">
                        {exp.role}
                      </h4>
                      <p className="text-[10px] lg:text-xs text-yellow-500 font-bold uppercase tracking-widest">
                        ACCENTNODE // {exp.company}
                      </p>
                    </div>

                    {/* Detailed Paragraph (Max-width for readability, longer descriptions) */}
                    <p className="text-xs lg:text-sm text-slate-400 leading-relaxed max-w-4xl text-justify">
                      {exp.description}
                    </p>
                  </motion.div>
                </div>
              ))}
            </div>

          </div>
        </div>

        {/* SECTION 2: Showcase Projects (Minimalist Gaming Card Style - Full Image, Title Top-Left, Tech Bottom, Blur + Desc on Hover) */}
        <div className="w-full border border-purple-500/20 bg-slate-950/40 backdrop-blur-md rounded-xl p-4 md:p-6 relative overflow-hidden flex flex-col">
          <h3 className={`${bangers.className} text-3xl text-purple-400 tracking-wider mb-6 border-b border-purple-500/20 pb-2`}>
            [ SECURED DEPLOYMENTS ]
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto w-full">
            {PROJECTS.map((proj, idx) => (
              <motion.a
                key={idx}
                href={proj.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                whileHover={{ scale: 1.02, y: -2 }}
                className={`block border bg-slate-950/60 rounded-xl transition-all duration-300 aspect-video relative overflow-hidden group transform translate-z-0 ${proj.colorClass}`}
              >
                {/* Full Background Project Image (filled completely) */}
                <div className="absolute inset-0 right-auto bottom-auto w-full h-full z-0">
                  <Image
                    src={proj.imagePath}
                    alt={proj.title}
                    fill
                    className="object-cover transition-all duration-700 group-hover:scale-105 group-hover:blur-sm"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  {/* Dark overlay gradients */}
                  <div className="absolute inset-0 right-auto bottom-auto w-full h-full bg-gradient-to-b from-black/60 via-transparent to-black/75 transition-all duration-500 group-hover:from-black/80 group-hover:to-black/90" />
                </div>

                {/* Base Layer: Title (Top Left) */}
                <div className="absolute top-4 left-4 z-10 pointer-events-none transition-opacity duration-300 group-hover:opacity-0">
                  <h4 className="text-xs md:text-sm font-bold text-white uppercase tracking-wider bg-black/70 px-2.5 py-1.5 rounded border border-white/10 backdrop-blur-md shadow-[0_2px_8px_rgba(0,0,0,0.5)]">
                    {proj.title}
                  </h4>
                </div>

                {/* Base Layer: Tech Stack (Bottom Centre) */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex flex-wrap justify-center gap-1.5 bg-black/70 p-2 rounded-lg border border-white/10 backdrop-blur-md max-w-[90%] w-max transition-opacity duration-300 group-hover:opacity-0 pointer-events-none">
                  {proj.tech.map((t, tIdx) => (
                    <TechBadge key={tIdx} name={t} glowColor={proj.badgeColor} />
                  ))}
                </div>

                {/* HOVER OVERLAY: Description & Link */}
                <div className="absolute inset-0 right-auto bottom-auto w-full h-full z-20 bg-black/35 backdrop-blur-lg opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-center items-center p-4 text-center rounded-xl overflow-hidden">
                  <span className={`text-[9px] font-bold tracking-[0.2em] mb-1.5 uppercase ${OVERVIEW_TEXT_STYLES[proj.badgeColor]}`}>
                    SYS.PROJECT // DEPLOYED
                  </span>
                  <p className="text-[10px] md:text-xs text-slate-200 leading-relaxed font-mono max-w-[260px] line-clamp-3 md:line-clamp-none">
                    {proj.description}
                  </p>
                  <div className={`mt-4 px-3.5 py-1.5 bg-black/30 border rounded text-[9px] uppercase font-bold tracking-widest transition-all duration-300 cursor-pointer ${LAUNCH_BUTTON_STYLES[proj.badgeColor]}`}>
                    LAUNCH REPOSITORY
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>

      </div>

      {/* Footer Diagnostic Panel */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="w-full flex flex-col sm:flex-row items-center justify-between border-t border-purple-500/30 pt-4 text-[10px] text-purple-500/80 font-mono z-10 gap-2 mt-4"
      >
        <span className="tracking-widest">
          STARK CORE INTELNODE v4.81.0 // SECURITY CORE APPROVED
        </span>
        <span className="tracking-[0.2em]">
          COORDINATES: SLIDE_04_ACTIVE // COMPILING_SUCCESS
        </span>
      </motion.div>
    </div>
  );
}
