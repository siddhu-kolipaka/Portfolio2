"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { Bangers } from "next/font/google";

const bangers = Bangers({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bangers",
});

interface TechBadgeProps {
  name: string;
  glowColor: "cyan" | "gold" | "red" | "emerald" | "purple" | "orange" | "pink";
}

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
      className={`px-2 py-1 text-[10px] lg:text-xs font-mono rounded border transition-all duration-300 cursor-default select-none ${glowClasses[glowColor]}`}
    >
      {name}
    </motion.span>
  );
}

export default function Slide2() {
  // Diagnostic stats to display as HUD progress bars
  const stats = [
    { label: "MERN Stack // Next.js", value: 90, color: "cyan" as const },
    { label: "AI // ML", value: 85, color: "gold" as const },
    { label: "C++ // DSA", value: 80, color: "red" as const },
  ];

  return (
    <div id="about" className="w-full min-h-[100dvh] bg-black text-white relative overflow-hidden flex flex-col justify-between p-4 md:p-6 lg:p-8 font-mono select-none">
      {/* Background Holographic HUD Grids */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
        <svg width="100%" height="100%" className="absolute inset-0">
          <defs>
            <pattern id="hud-grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(6, 182, 212, 0.15)" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hud-grid)" />
        </svg>

        {/* Large Rotating Compass Circle */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
          className="absolute -right-40 -bottom-40 w-96 h-96 lg:w-[35rem] lg:h-[35rem] border border-cyan-500/10 rounded-full flex items-center justify-center"
        >
          <div className="w-[90%] h-[90%] border border-dashed border-cyan-500/5 rounded-full flex items-center justify-center">
            <div className="w-[80%] h-[80%] border border-cyan-500/10 rounded-full flex items-center justify-center">
              <span className="text-[8px] text-cyan-500/20 tracking-[1em] uppercase">Stark Academic Node</span>
            </div>
          </div>
        </motion.div>

        {/* Diagonal Corner Blueprint Lines */}
        <div className="absolute top-0 left-0 w-24 h-24 border-t-2 border-l-2 border-cyan-500/30"></div>
        <div className="absolute top-0 right-0 w-24 h-24 border-t-2 border-r-2 border-cyan-500/30"></div>
        <div className="absolute bottom-0 left-0 w-24 h-24 border-b-2 border-l-2 border-cyan-500/30"></div>
        <div className="absolute bottom-0 right-0 w-24 h-24 border-b-2 border-r-2 border-cyan-500/30"></div>
      </div>

      {/* Slide Header */}
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="w-full flex flex-col md:flex-row items-start md:items-center justify-between border-b border-cyan-500/30 pb-3 lg:pb-4 z-10 gap-3 md:gap-4"
      >
        <div>
          <h2 className="text-[10px] md:text-xs text-cyan-400 tracking-[0.25em] font-bold">
            SECURE ACCESS CORE // SYSTEM NODE 02
          </h2>
          <h1 className="text-lg md:text-2xl font-bold text-white mt-0.5 uppercase flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse"></span>
            AGENT DOSSIER: Siddharth Kolipaka
          </h1>
        </div>
        <div className="flex items-center gap-6 text-right">
          <div className="hidden sm:block">
            <span className="block text-[9px] md:text-[10px] text-cyan-500">ACADEMICS INDEX</span>
            <span className="text-[10px] md:text-xs text-cyan-400 font-bold">VERIFIED // INTEGRITY</span>
          </div>
          <div className="px-2.5 py-1 bg-cyan-950/40 border border-cyan-500/30 rounded text-cyan-400 text-[10px] md:text-xs">
            SECTION: EDUCATION
          </div>
        </div>
      </motion.div>

      {/* Bento Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 flex-1 my-4 lg:my-5 z-10">

        {/* BENTO CARD 1: Profile Summary (Tall, Column 1, Row 1 & 2) */}
        <motion.div
          initial={{ x: -60, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-1 lg:row-span-2 flex flex-col w-full h-full"
        >
          <div className="border border-cyan-500/20 hover:border-cyan-500/40 bg-slate-950/40 backdrop-blur-md rounded-xl p-4 lg:p-5 relative overflow-hidden shadow-[0_0_15px_rgba(6,182,212,0.08)] hover:shadow-[0_0_30px_rgba(6,182,212,0.4)] transition-all duration-500 group w-full flex flex-col justify-between h-full">
            <div className="flex flex-col flex-1">
              <h3 className={`${bangers.className} text-2xl lg:text-3xl text-cyan-400 tracking-wider mb-3 border-b border-cyan-500/20 pb-1.5`}>
                [ CORE IDENTIFICATION ]
              </h3>

              {/* Holographic Avatar Graphic Area */}
              <div className="w-full h-48 lg:h-[20rem] flex-grow bg-slate-950/20 rounded border border-dashed border-cyan-500/20 flex items-center justify-center relative mb-4 lg:mb-5 overflow-hidden">
                <Image
                  src="/profile.jpg"
                  alt="Siddharth Kolipaka"
                  fill
                  sizes="(max-width: 768px) 100vw, 400px"
                  className="object-cover transition-opacity duration-500"
                  priority
                />
              </div>
            </div>

            {/* Profile Bio Details */}
            <div className="space-y-3 mt-auto">
              <div>
                <span className="text-[9px] lg:text-[10px] text-cyan-500 block">DESIGNATION</span>
                <span className="text-xs lg:text-sm font-bold text-white tracking-wide">
                  Advanced Application Engineer <motion.span className="text-violet-400 text-[10px] lg:text-xs">[Accenture India]</motion.span>
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* BENTO CARD 2: Intel Brief (Column 2, Row 1) */}
        <motion.div
          initial={{ y: -40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-1 lg:row-span-1 flex flex-col w-full h-full"
        >
          <div className="border border-cyan-500/20 hover:border-cyan-500/40 bg-slate-950/40 backdrop-blur-md rounded-xl p-4 lg:p-5 relative overflow-hidden shadow-[0_0_15px_rgba(6,182,212,0.08)] hover:shadow-[0_0_30px_rgba(6,182,212,0.4)] transition-all duration-500 group w-full flex flex-col justify-between h-full">
            <div>
              <h3 className={`${bangers.className} text-2xl lg:text-3xl text-cyan-400 tracking-wider mb-2 border-b border-cyan-500/20 pb-1.5`}>
                [ TACTICAL PROFILE ]
              </h3>
              <div>
                <span className="text-[9px] lg:text-[10px] text-cyan-500 block font-bold mb-1">INTEL BRIEF</span>
                <p className="text-[11px] lg:text-xs text-slate-300 leading-relaxed text-justify">
                  Highly driven Full-Stack Developer specializing in MERN and Next.js environments utilizing both JavaScript and TypeScript. Passionate about Artificial Intelligence and Machine Learning paradigms, focusing on Fake News Detection frameworks using CLIP, FAISS, and NLP Transformers. Dedicated academic researcher presently compiling two scientific research papers on deep learning structures.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* BENTO CARD 3: Holographic Tech Arsenal (Tall, Column 3, Row 1 & 2) */}
        <motion.div
          initial={{ x: 60, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="lg:col-span-1 lg:row-span-2 flex flex-col w-full h-full"
        >
          <div className="border border-cyan-500/20 hover:border-cyan-500/40 bg-slate-950/40 backdrop-blur-md rounded-xl p-4 lg:p-5 relative overflow-hidden shadow-[0_0_15px_rgba(6,182,212,0.08)] hover:shadow-[0_0_30px_rgba(6,182,212,0.4)] transition-all duration-500 group flex flex-col w-full h-full justify-between">
            <div className="flex flex-col flex-1 h-full justify-between">
              <h3 className={`${bangers.className} text-2xl lg:text-3xl text-cyan-400 tracking-wider mb-2 border-b border-cyan-500/20 pb-1.5`}>
                [ HOLOGRAPHIC TECH ARSENAL ]
              </h3>

              <div className="flex-1 flex flex-col justify-between py-1 gap-y-3.5 lg:gap-y-0">
                {/* Languages */}
                <div>
                  <span className="text-[8px] lg:text-[9px] text-cyan-500 block mb-1.5 uppercase font-bold tracking-wider">LANGUAGES CORE</span>
                  <div className="flex flex-wrap gap-1.5 lg:gap-2">
                    <TechBadge name="C++" glowColor="cyan" />
                    <TechBadge name="Python" glowColor="cyan" />
                    <TechBadge name="JavaScript" glowColor="cyan" />
                    <TechBadge name="ES6" glowColor="cyan" />
                    <TechBadge name="TypeScript" glowColor="cyan" />
                    <TechBadge name="Java" glowColor="cyan" />
                    <TechBadge name="C" glowColor="cyan" />
                    <TechBadge name="MySQL (RDBMS)" glowColor="cyan" />
                  </div>
                </div>

                {/* Frontend */}
                <div>
                  <span className="text-[8px] lg:text-[9px] text-purple-400 block mb-1.5 uppercase font-bold tracking-wider">FRONTEND SYSTEMS</span>
                  <div className="flex flex-wrap gap-1.5 lg:gap-2">
                    <TechBadge name="ReactJS" glowColor="purple" />
                    <TechBadge name="NextJS" glowColor="purple" />
                    <TechBadge name="Redux" glowColor="purple" />
                    <TechBadge name="Framer Motion" glowColor="purple" />
                    <TechBadge name="Tailwind CSS" glowColor="purple" />
                    <TechBadge name="Shadcn UI" glowColor="purple" />
                    <TechBadge name="HTML" glowColor="purple" />
                    <TechBadge name="CSS" glowColor="purple" />
                    <TechBadge name="Bootstrap" glowColor="purple" />
                  </div>
                </div>

                {/* Backend & Databases */}
                <div>
                  <span className="text-[8px] lg:text-[9px] text-orange-400 block mb-1.5 uppercase font-bold tracking-wider">BACKEND & DATABASES</span>
                  <div className="flex flex-wrap gap-1.5 lg:gap-2">
                    <TechBadge name="Node.js" glowColor="orange" />
                    <TechBadge name="Express.js" glowColor="orange" />
                    <TechBadge name="Spring" glowColor="orange" />
                    <TechBadge name="Spring Boot" glowColor="orange" />
                    <TechBadge name="MongoDB" glowColor="orange" />
                  </div>
                </div>

                {/* Data Science & ML */}
                <div>
                  <span className="text-[8px] lg:text-[9px] text-red-500 block mb-1.5 uppercase font-bold tracking-wider">DATA SCIENCE & MACHINE LEARNING</span>
                  <div className="flex flex-wrap gap-1.5 lg:gap-2">
                    <TechBadge name="NumPy" glowColor="red" />
                    <TechBadge name="Pandas" glowColor="red" />
                    <TechBadge name="Scikit-learn" glowColor="red" />
                    <TechBadge name="Pytorch" glowColor="red" />
                  </div>
                </div>

                {/* Tools & Platforms */}
                <div>
                  <span className="text-[8px] lg:text-[9px] text-emerald-400 block mb-1.5 uppercase font-bold tracking-wider">TOOLS & PLATFORMS</span>
                  <div className="flex flex-wrap gap-1.5 lg:gap-2">
                    <TechBadge name="Postman" glowColor="emerald" />
                    <TechBadge name="Git" glowColor="emerald" />
                    <TechBadge name="GitHub" glowColor="emerald" />
                    <TechBadge name="Netlify" glowColor="emerald" />
                    <TechBadge name="Render" glowColor="emerald" />
                    <TechBadge name="VS Code" glowColor="emerald" />
                    <TechBadge name="Figma" glowColor="emerald" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* BENTO CARD 4: Educational Qualifications (Column 2, Row 2) */}
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-1 lg:row-span-1 flex flex-col w-full h-full"
        >
          <div className="border border-cyan-500/20 hover:border-cyan-500/40 bg-slate-950/40 backdrop-blur-md rounded-xl p-4 lg:p-5 relative overflow-hidden shadow-[0_0_15px_rgba(6,182,212,0.08)] hover:shadow-[0_0_30px_rgba(6,182,212,0.4)] transition-all duration-500 group flex flex-col w-full h-full justify-between">
            <h3 className={`${bangers.className} text-2xl lg:text-3xl text-cyan-400 tracking-wider mb-2.5 border-b border-cyan-500/20 pb-1.5`}>
              [ ACADEMY LOGS - EDUCATION ]
            </h3>

            <div className="space-y-3.5 flex-1 flex flex-col justify-between">
              {/* Degree Node 1: B.Tech (Cyan theme) */}
              <div className="relative pl-5 lg:pl-6 border-l-2 border-cyan-500/30 group/node flex flex-col py-0.5 hover:bg-cyan-950/10 rounded-r transition-all duration-300">
                <div className="absolute left-0 -translate-x-1/2 top-2.5 w-2.5 h-2.5 rounded-full bg-cyan-500 border border-black shadow-[0_0_6px_rgba(6,182,212,0.6)] group-hover/node:bg-cyan-400 transition-all duration-300"></div>

                <div className="flex justify-between items-start">
                  <div>
                    <span className="text-[8px] lg:text-[9px] text-cyan-500 font-bold tracking-widest block uppercase">SYS.DEGREE // NODE.01</span>
                    <h4 className="text-xs lg:text-sm font-bold text-white uppercase group-hover/node:text-cyan-300 transition-colors">B.Tech in CSE</h4>
                    <p className="text-[9px] lg:text-[10px] text-cyan-400/80 font-medium">IIEST Shibpur</p>
                  </div>
                  <div className="text-right">
                    <span className="text-[8px] lg:text-[9px] text-slate-500 font-bold block uppercase">STABILITY</span>
                    <span className="text-xs lg:text-sm font-bold text-cyan-400 font-mono tracking-wider">9.44 / 10 CGPA</span>
                  </div>
                </div>

                {/* Micro Bar */}
                <div className="mt-2 space-y-1">
                  <div className="h-1 w-full bg-slate-900 border border-slate-800/80 rounded overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "94.4%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.15 }}
                      className="h-full bg-cyan-500 shadow-[0_0_8px_rgba(6,182,212,0.5)]"
                    ></motion.div>
                  </div>
                </div>
              </div>

              {/* Degree Node 2: Intermediate 12th (Gold theme) */}
              <div className="relative pl-5 lg:pl-6 border-l-2 border-yellow-500/30 group/node flex flex-col py-0.5 hover:bg-yellow-950/10 rounded-r transition-all duration-300">
                <div className="absolute left-0 -translate-x-1/2 top-2.5 w-2.5 h-2.5 rounded-full bg-yellow-500 border border-black shadow-[0_0_6px_rgba(234,179,8,0.6)] group-hover/node:bg-yellow-400 transition-all duration-300"></div>

                <div className="flex justify-between items-start">
                  <div>
                    <span className="text-[8px] lg:text-[9px] text-yellow-600 font-bold tracking-widest block uppercase">SYS.DEGREE // NODE.02</span>
                    <h4 className="text-xs lg:text-sm font-bold text-white uppercase group-hover/node:text-yellow-300 transition-colors">Intermediate (12th)</h4>
                    <p className="text-[9px] lg:text-[10px] text-yellow-500/80 font-medium">MPC Sector</p>
                  </div>
                  <div className="text-right">
                    <span className="text-[8px] lg:text-[9px] text-slate-500 font-bold block uppercase">EFFICIENCY</span>
                    <span className="text-xs lg:text-sm font-bold text-yellow-500 font-mono tracking-wider">989 / 1000 MARKS</span>
                  </div>
                </div>

                {/* Micro Bar */}
                <div className="mt-2 space-y-1">
                  <div className="h-1 w-full bg-slate-900 border border-slate-800/80 rounded overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "98.9%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.25 }}
                      className="h-full bg-yellow-500 shadow-[0_0_8px_rgba(234,179,8,0.5)]"
                    ></motion.div>
                  </div>
                </div>
              </div>

              {/* Degree Node 3: SSC 10th (Red theme) */}
              <div className="relative pl-5 lg:pl-6 border-l-2 border-red-500/30 group/node flex flex-col py-0.5 hover:bg-red-950/10 rounded-r transition-all duration-300">
                <div className="absolute left-0 -translate-x-1/2 top-2.5 w-2.5 h-2.5 rounded-full bg-red-500 border border-black shadow-[0_0_6px_rgba(239,68,68,0.6)] group-hover/node:bg-red-400 transition-all duration-300"></div>

                <div className="flex justify-between items-start">
                  <div>
                    <span className="text-[8px] lg:text-[9px] text-red-500 font-bold tracking-widest block uppercase">SYS.DEGREE // NODE.03</span>
                    <h4 className="text-xs lg:text-sm font-bold text-white uppercase group-hover/node:text-red-300 transition-colors">SSC (10th)</h4>
                    <p className="text-[9px] lg:text-[10px] text-red-400/80 font-medium">CBSE Board</p>
                  </div>
                  <div className="text-right">
                    <span className="text-[8px] lg:text-[9px] text-slate-500 font-bold block uppercase">CAPACITY</span>
                    <span className="text-xs lg:text-sm font-bold text-red-500 font-mono tracking-wider">467 / 500 MARKS</span>
                  </div>
                </div>

                {/* Micro Bar */}
                <div className="mt-2 space-y-1">
                  <div className="h-1 w-full bg-slate-900 border border-slate-800/80 rounded overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "93.4%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.35 }}
                      className="h-full bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.5)]"
                    ></motion.div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* BENTO CARD 5: System Telemetry Master Diagnostic (Widescreen bottom banner spanning cols) */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-3 w-full flex flex-col"
        >
          <div className="border border-cyan-500/20 hover:border-cyan-500/40 bg-slate-950/40 backdrop-blur-md rounded-xl p-4 lg:p-5 relative overflow-hidden shadow-[0_0_15px_rgba(6,182,212,0.08)] hover:shadow-[0_0_30px_rgba(6,182,212,0.4)] transition-all duration-500 group flex flex-col w-full h-full">
            <h3 className={`${bangers.className} text-xl lg:text-2xl text-cyan-400 tracking-wider mb-3 border-b border-cyan-500/20 pb-1.5`}>
              [ CORE SYSTEM STABILITY DIAGNOSTICS ]
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
              {stats.map((stat, i) => (
                <div key={i} className="space-y-1.5 flex flex-col justify-center">
                  <div className="flex justify-between text-[10px] lg:text-xs font-mono">
                    <span className="text-slate-400 uppercase tracking-widest">{stat.label}</span>
                    <span className={`text-${stat.color === "gold" ? "yellow-500" : stat.color === "cyan" ? "cyan-400" : "red-400"} font-bold`}>
                      {stat.value}%
                    </span>
                  </div>
                  <div className="h-1.5 w-full bg-slate-900 border border-slate-800 rounded overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${stat.value}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: i * 0.2 }}
                      className={`h-full rounded ${stat.color === "cyan"
                        ? "bg-cyan-500 shadow-[0_0_8px_rgba(6,182,212,0.5)]"
                        : stat.color === "gold"
                          ? "bg-yellow-500 shadow-[0_0_8px_rgba(234,179,8,0.5)]"
                          : "bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.5)]"
                        }`}
                    ></motion.div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Footer Diagnostic Panel */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="w-full flex flex-col sm:flex-row items-center justify-between border-t border-cyan-500/30 pt-3 text-[9px] lg:text-[10px] text-cyan-500/80 font-mono z-10 gap-2 mt-2"
      >
        <span className="tracking-widest">
          STARK CORE INTELNODE v4.81.0 // SECURITY CORE APPROVED
        </span>
        <span className="tracking-[0.2em]">
          COORDINATES: SLIDE_02_ACTIVE // COMPILING_SUCCESS
        </span>
      </motion.div>
    </div>
  );
}
