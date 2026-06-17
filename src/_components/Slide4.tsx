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
      whileHover={{ scale: 1.08 }}
      transition={{ type: "spring", stiffness: 400, damping: 15 }}
      className={`px-1.5 py-0.5 text-[9px] md:text-[10px] lg:text-[11px] font-mono rounded border transition-[border-color,background-color,box-shadow] duration-300 cursor-default select-none ${glowClasses[glowColor]}`}
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
    duration: "Joining on July 24, 2026",
    totalTime: "Yet to join",
    description: "Yet to join",
    color: "purple" as const,
    indexStr: "SYS.EXP // 01",
  },
  {
    role: "ML Researcher",
    company: "IIEST, Shibpur",
    duration: "Aug 2025 - May 2026",
    totalTime: "10 Mos",
    description: "Led the development of multi-modal fake news detection networks combining text and images using state of the art models like CLIP. Implementing high-throughput similarity search pipelines to index millions of text-image vectors. Using transformers for creating evidence based context aware embeddings. Compiled 2 research papers.",
    color: "pink" as const,
    indexStr: "SYS.EXP // 02",
  },
  {
    role: "Advanced Application Engineering Analyst Intern",
    company: "Accenture India",
    duration: "May 2025 - July 2025",
    totalTime: "2 Mos",
    description: "Proposed an improved AI-driven brainstorming framework after evaluating 3+ existing tools and models. Analyzed 3+ fintech platforms to propose enhancements and additions to current Banking-as-a-Service architectures. Presented 2 strategic solutions to senior engineers, highlighting opportunities for digital innovation.",
    color: "cyan" as const,
    indexStr: "SYS.EXP // 03",
  },
];

// JSON object array for Projects
const PROJECTS = [


  {
    title: "Multi-Modal Fake News Detection Model (FACTS-OOCMDM)",
    description: "Created evidence-aware multi-modal networks to detect fake news combining visual and text features using CLIP and Transformers. Built FAISS-based similarity search pipelines and contextualized embeddings.",
    tech: ["PyTorch", "CLIP", "FAISS", "Transformers", "Python"],
    colorClass: "border-purple-500/20 hover:border-purple-500/50 shadow-[0_0_15px_rgba(168,85,247,0.05)] hover:shadow-[0_0_25px_rgba(168,85,247,0.25)]",
    badgeColor: "purple" as const,
    link: "https://github.com/siddhu-kolipaka/FACTS-OOCMDM",
    imagePath: "/project_fake_news.png",
  },
  {
    title: "Evidence based Out of context benchmark (EVIOOC)",
    description: "An experimental ML benchmark for out-of-context fake news detection. Evaluated 5 models, 5 text & 3 image vectorizers, and 4 fusion strategies across 240 pipeline configurations.",
    tech: ["PyTorch", "Python", "ML Models", "DL Models", "Multimodal Vectorisation Techniques", "Fusion Strategies"],
    colorClass: "border-gold/20 hover:border-gold/50 shadow-[0_0_15px_rgba(230,180,34,0.05)] hover:shadow-[0_0_25px_rgba(230,180,34,0.25)]",
    badgeColor: "gold" as const,
    link: "https://github.com/siddhu-kolipaka/EVIOOC",
    imagePath: "/out_of_context_benchmark.png",
  },

  {
    title: "SidTrack: Wealth Tracking Website",
    description: "A multi-feature wealth tracking platform with a zero-infrastructure-cost architecture. Features 5 financial analytics modules, stateless JWT authentication, and optimized MongoDB queries reducing database I/O by 40%.",
    tech: ["JavaScript", "Node.js", "React", "Express", "MongoDB", "JWT", "Tailwind CSS", "Framer Motion", "Redux Toolkit"],
    colorClass: "border-pink-500/20 hover:border-pink-500/50 shadow-[0_0_15px_rgba(236,72,153,0.05)] hover:shadow-[0_0_25px_rgba(236,72,153,0.25)]",
    badgeColor: "pink" as const,
    link: "https://github.com/siddhu-kolipaka/SidTrack",
    liveLink: "https://sidtrack.netlify.app/",
    imagePath: "/sidtrack.png",
  },
  {
    title: "Current Portfolio Website (2026)",
    description: "A sleek, modern, and dynamic portfolio website built with cutting-edge technologies to showcase my skills and projects. This website features a unique, futuristic design with smooth animations and interactive elements.",
    tech: ["Next.js", "Typescript", "Tailwind CSS", "Framer Motion"],
    colorClass: "border-red-500/20 hover:border-red-500/50 shadow-[0_0_15px_rgba(239,68,68,0.05)] hover:shadow-[0_0_25px_rgba(239,68,68,0.25)]",
    badgeColor: "red" as const,
    link: "https://github.com/siddhu-kolipaka/Portfolio2",
    liveLink: "https://siddharthkolipaka.netlify.app/",
    imagePath: "/portfolio2.png",
  },
  {
    title: "First Portfolio Website (2024)",
    description: "My first attempt at building a professional portfolio website. It was a great learning experience and helped me understand the basics of web development.",
    tech: ["JavaScript", "React", "Framer Motion"],
    colorClass: "border-cyan-500/20 hover:border-cyan-500/50 shadow-[0_0_15px_rgba(6,182,212,0.05)] hover:shadow-[0_0_25px_rgba(6,182,212,0.25)]",
    badgeColor: "cyan" as const,
    link: "https://github.com/siddhu-kolipaka/portfolio",
    liveLink: "https://siddhukolipaka.netlify.app/",
    imagePath: "/portfolio1.png",
  },
  {
    title: "Sankranti Website (2026)",
    description: "First ever sankranti website in the history of IIEST,Shibpur.",
    tech: ["Next.js", "Typescript", "Tailwind CSS", "Framer Motion", "Shandcn UI", "Ant Design", "Material UI"],
    colorClass: "border-orange-500/20 hover:border-orange-500/50 shadow-[0_0_15px_rgba(249,115,22,0.05)] hover:shadow-[0_0_25px_rgba(249,115,22,0.25)]",
    badgeColor: "orange" as const,
    link: "https://github.com/siddhu-kolipaka/Sankranti-IIESTS",
    liveLink: "https://sankranti-iiests.vercel.app/",
    imagePath: "/sankranti-2k26.png",
  },

  {
    title: "Certificate Generator (IIEST, Shibpur)",
    description: "A full-stack certificate automation web application reducing manual effort by 100% for faculty. Features a REST API to auto-fetch student records and a single-click PDF export that cuts certification turnaround time by 90%.",
    tech: ["Node.js", "Express", "MongoDB", "HTML", "CSS", "JavaScript", "Handlebars"],
    colorClass: "border-cyan-500/20 hover:border-cyan-500/50 shadow-[0_0_15px_rgba(6,182,212,0.05)] hover:shadow-[0_0_25px_rgba(6,182,212,0.25)]",
    badgeColor: "cyan" as const,
    link: "https://github.com/siddhu-kolipaka/Certificate-Generator",
    liveLink: "https://certificate-generator-bvtg.onrender.com/",
    imagePath: "/cert-gen.png",
  },

  {
    title: "Pre-Christmas Website (2024)",
    description: "First ever prechristmas website in the history of IIEST,Shibpur.",
    tech: ["React", "JavaScript", "Tailwind CSS", "Framer Motion"],
    colorClass: "border-emerald-500/20 hover:border-emerald-500/50 shadow-[0_0_15px_rgba(16,185,129,0.05)] hover:shadow-[0_0_25px_rgba(16,185,129,0.25)]",
    badgeColor: "emerald" as const,
    link: "https://github.com/siddhu-kolipaka/pre-christmas",
    liveLink: "https://pre-christmas-2k24.netlify.app/",
    imagePath: "/pre-christmas.png",
  },

  {
    title: "Memory Allocation Tracker",
    description: "A C-based memory leak detection library hooking into malloc and free to log 100% of allocations. Features a custom reporting utility to print unfreed blocks with origin lines and sizes, cutting debugging time by 30%.",
    tech: ["C", "GCC", "GDB", "System Programming", "Memory Management"],
    colorClass: "border-red-500/20 hover:border-red-500/50 shadow-[0_0_15px_rgba(239,68,68,0.05)] hover:shadow-[0_0_25px_rgba(239,68,68,0.25)]",
    badgeColor: "red" as const,
    link: "https://github.com/siddhu-kolipaka/memTracLib",
    imagePath: "/memory_tracker.png",
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
              <span className="text-[8px] text-purple-500/20 tracking-[1em] uppercase">Repository Center</span>
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
        transition={{ duration: 0.45, ease: "easeOut" }}
        className="w-full flex flex-col md:flex-row items-start md:items-center justify-between border-b border-purple-500/30 pb-4 z-10 gap-4"
      >
        <div>
          <h2 className="text-[10px] md:text-xs text-purple-400 tracking-[0.25em] font-bold uppercase">
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
            [  TIMELINE ]
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
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 24,
                      mass: 0.6,
                      delay: idx * 0.05
                    }}
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
                    whileHover={{ x: 4 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 24,
                      mass: 0.6,
                      delay: idx * 0.05
                    }}
                    className="flex flex-col w-[calc(100%-2rem)] lg:w-auto lg:flex-1 text-left space-y-2 ml-8 lg:ml-8 transition-[border-color,background-color] duration-300 border border-transparent hover:border-purple-500/10 hover:bg-purple-950/5 rounded-lg p-4"
                  >
                    {/* Mobile-only header (hidden on desktop) */}
                    <div className="flex flex-wrap items-center gap-2 lg:hidden">
                      <span className="text-[9px] text-purple-400 font-bold uppercase tracking-widest">
                        {exp.indexStr}
                      </span>
                      <span className="text-xs text-slate-500 font-bold">{"//"}</span>
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
                        {exp.company}
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
            [ PROJECTS ]
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto w-full">
            {PROJECTS.map((proj, idx) => (
              <motion.div
                key={idx}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, y: -4 }}
                transition={{
                  type: "spring",
                  stiffness: 400,
                  damping: 22,
                  mass: 0.6,
                  delay: idx * 0.05
                }}
                className={`block border bg-slate-950/60 rounded-xl transition-[border-color,background-color,box-shadow] duration-300 aspect-[4/3] md:aspect-video relative overflow-hidden group transform translate-z-0 ${proj.colorClass}`}
              >
                {/* Full Background Project Image (filled completely) */}
                <div className="absolute inset-0 right-auto bottom-auto w-full h-full z-0">
                  <Image
                    src={proj.imagePath}
                    alt={proj.title}
                    fill
                    className="object-cover transition-transform duration-300 ease-out group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  {/* Performance-tuned dark overlay gradients */}
                  <div className="absolute inset-0 right-auto bottom-auto w-full h-full bg-gradient-to-b from-black/60 via-transparent to-black/80 z-[1]" />
                  <div className="absolute inset-[1px] bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-[2] rounded-xl" />
                </div>

                {/* Base Layer: Title (Top Left) */}
                <div className="absolute top-3 left-3 md:top-4 md:left-4 z-10 pointer-events-none transition-opacity duration-300 group-hover:opacity-0">
                  <h4 className="text-[10px] md:text-xs lg:text-sm font-bold text-white uppercase tracking-wider bg-black/70 px-2 py-1 md:px-2.5 md:py-1.5 rounded border border-white/10 backdrop-blur-md shadow-[0_2px_8px_rgba(0,0,0,0.5)]">
                    {proj.title}
                  </h4>
                </div>

                {/* Base Layer: Tech Stack (Bottom Centre) */}
                <div className="absolute bottom-3 md:bottom-4 left-1/2 -translate-x-1/2 z-10 flex flex-wrap justify-center gap-1 md:gap-1.5 bg-black/70 p-1.5 md:p-2 rounded-lg border border-white/10 backdrop-blur-md max-w-[92%] w-max transition-opacity duration-300 group-hover:opacity-0 pointer-events-none">
                  {proj.tech.map((t, tIdx) => (
                    <TechBadge key={tIdx} name={t} glowColor={proj.badgeColor} />
                  ))}
                </div>

                {/* HOVER OVERLAY: Description & Link */}
                <div className="absolute inset-[1px] z-20 bg-black/40 backdrop-blur-[3px] opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex flex-col justify-center items-center p-4 text-center rounded-xl overflow-hidden">
                  <span className={`text-[9px] font-bold tracking-[0.2em] mb-1.5 uppercase ${OVERVIEW_TEXT_STYLES[proj.badgeColor]}`}>
                    SYS.PROJECT // DEPLOYED
                  </span>
                  <p className="text-[10px] md:text-xs text-slate-200 leading-relaxed font-mono max-w-[260px] line-clamp-3 md:line-clamp-none">
                    {proj.description}
                  </p>
                  <div className="flex gap-3 mt-4 w-full justify-center z-30">
                    <motion.a
                      href={proj.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 400, damping: 15 }}
                      className={`px-3 py-1.5 bg-black/30 border rounded text-[9px] uppercase font-bold tracking-widest transition-[border-color,background-color,box-shadow] duration-300 cursor-pointer ${LAUNCH_BUTTON_STYLES[proj.badgeColor]}`}
                    >
                      GITHUB
                    </motion.a>
                    {proj.liveLink && (
                      <motion.a
                        href={proj.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 400, damping: 15 }}
                        className={`px-3 py-1.5 bg-black/30 border rounded text-[9px] uppercase font-bold tracking-widest transition-[border-color,background-color,box-shadow] duration-300 cursor-pointer ${LAUNCH_BUTTON_STYLES[proj.badgeColor]}`}
                      >
                        LIVE DEPLOY
                      </motion.a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>

      {/* Footer Diagnostic Panel */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45, ease: "easeOut" }}
        className="w-full flex flex-col sm:flex-row items-center justify-between border-t border-purple-500/30 pt-4 text-[10px] text-purple-500/80 font-mono z-10 gap-2 mt-4"
      >
        <span className="tracking-widest text-center">
          CORE INTELNODE v4.81.0 // SECURITY CORE APPROVED
        </span>
        <span className="tracking-[0.2em] text-center">
          COORDINATES: SLIDE_04_ACTIVE // COMPILING_SUCCESS
        </span>
      </motion.div>
    </div>
  );
}
