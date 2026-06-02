"use client";

import { motion } from "motion/react";
import { Bangers } from "next/font/google";

const bangers = Bangers({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bangers",
});

interface TechBadgeProps {
  name: string;
  glowColor: "cyan" | "gold" | "red";
}

function TechBadge({ name, glowColor }: TechBadgeProps) {
  const glowClasses = {
    cyan: "border-cyan-500/30 text-cyan-400 bg-cyan-950/20 hover:border-cyan-400 hover:shadow-[0_0_8px_rgba(6,182,212,0.4)]",
    gold: "border-yellow-600/30 text-yellow-500 bg-yellow-950/20 hover:border-yellow-400 hover:shadow-[0_0_8px_rgba(234,179,8,0.4)]",
    red: "border-red-500/30 text-red-400 bg-red-950/20 hover:border-red-400 hover:shadow-[0_0_8px_rgba(239,68,68,0.4)]",
  };

  return (
    <motion.span
      whileHover={{ scale: 1.05 }}
      className={`px-2 py-1 text-[10px] font-mono rounded border transition-all duration-300 cursor-default select-none ${glowClasses[glowColor]}`}
    >
      {name}
    </motion.span>
  );
}

export default function Slide3() {
  // Diagnostic metrics for Project Deployments
  const stats = [
    { label: "API Response Latency", value: 98, color: "cyan" as const },
    { label: "Database Schema Efficacy", value: 94, color: "gold" as const },
    { label: "UI Core Responsiveness", value: 96, color: "cyan" as const },
    { label: "Algorithmic Code Integrity", value: 92, color: "red" as const },
  ];

  return (
    <div className="w-full min-h-[100dvh] bg-black text-white relative overflow-hidden flex flex-col justify-between p-4 md:p-8 font-mono select-none">
      {/* Background Holographic HUD Grids with red/cyan accent theme */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
        <svg width="100%" height="100%" className="absolute inset-0">
          <defs>
            <pattern id="hud-grid-3" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(239, 68, 68, 0.08)" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hud-grid-3)" />
        </svg>

        {/* Large Rotating Compass Circle */}
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          className="absolute -left-40 -bottom-40 w-96 h-96 lg:w-[35rem] lg:h-[35rem] border border-red-500/10 rounded-full flex items-center justify-center"
        >
          <div className="w-[90%] h-[90%] border border-dashed border-red-500/5 rounded-full flex items-center justify-center">
            <div className="w-[80%] h-[80%] border border-red-500/10 rounded-full flex items-center justify-center">
              <span className="text-[8px] text-red-500/20 tracking-[1em] uppercase">Stark Mission Deployer</span>
            </div>
          </div>
        </motion.div>

        {/* Diagonal Corner Blueprint Lines */}
        <div className="absolute top-0 left-0 w-24 h-24 border-t-2 border-l-2 border-red-500/20"></div>
        <div className="absolute top-0 right-0 w-24 h-24 border-t-2 border-r-2 border-red-500/20"></div>
        <div className="absolute bottom-0 left-0 w-24 h-24 border-b-2 border-l-2 border-red-500/20"></div>
        <div className="absolute bottom-0 right-0 w-24 h-24 border-b-2 border-r-2 border-red-500/20"></div>
      </div>

      {/* Slide Header */}
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="w-full flex flex-col md:flex-row items-start md:items-center justify-between border-b border-red-500/30 pb-4 z-10 gap-4"
      >
        <div>
          <h2 className="text-xs text-red-400 tracking-[0.25em] font-bold">
            SECURE ACCESS CORE // SYSTEM NODE 03
          </h2>
          <h1 className="text-xl md:text-2xl font-bold text-white mt-1 uppercase flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse"></span>
            MISSIONS & TACTICAL DEPLOYMENTS
          </h1>
        </div>
        <div className="flex items-center gap-6 text-right">
          <div className="hidden sm:block">
            <span className="block text-[10px] text-red-500">SECTOR LOADOUT</span>
            <span className="text-xs text-yellow-500 font-bold">EXPERIENCE & PROJECTS</span>
          </div>
          <div className="px-3 py-1 bg-red-950/20 border border-red-500/30 rounded text-red-400 text-xs">
            SYS STATUS: COMPILING
          </div>
        </div>
      </motion.div>

      {/* Main Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 flex-1 my-6 z-10">

        {/* COLUMN 1: Professional Experience (Work logs) */}
        <motion.div
          initial={{ x: -60, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="border border-red-500/20 hover:border-red-500/40 bg-slate-950/40 backdrop-blur-md rounded-xl p-5 relative overflow-hidden shadow-[0_0_15px_rgba(239,68,68,0.08)] hover:shadow-[0_0_30px_rgba(239,68,68,0.4)] transition-all duration-500 group flex flex-col"
        >

          <h3 className={`${bangers.className} text-3xl text-red-400 tracking-wider mb-4 border-b border-red-500/20 pb-2`}>
            [ FIELD EXPERIENCE ]
          </h3>

          <div className="space-y-6">
            {/* Experience Node 1 */}
            <div className="relative pl-6 border-l border-red-500/30 group/node">
              <div className="absolute left-0 -translate-x-1/2 top-1.5 w-2.5 h-2.5 rounded-full bg-red-500 border border-black shadow-[0_0_6px_rgba(239,68,68,0.6)] group-hover/node:bg-red-400 transition-all duration-300"></div>

              <span className="text-[10px] text-red-400 font-bold block mb-1">TACTICAL DEPLOYMENT</span>
              <h4 className="text-sm font-bold text-white uppercase">Full-Stack Software Engineer</h4>
              <p className="text-xs text-red-400 font-medium">MERN Stack & Next.js Architecture</p>

              <div className="bg-slate-900/40 border border-slate-800/80 rounded p-4 mt-3 text-xs text-slate-300 space-y-2.5 leading-relaxed">
                <p>• Engineered responsive full-stack applications with modular design using React, Next.js, and MongoDB.</p>
                <p>• Built low-latency RESTful APIs and optimized SQL/NoSQL schema relationships, resulting in 40% reduction in database querying overhead.</p>
                <p>• Ensured absolute type safety and component reliability utilizing strict TypeScript validation rules.</p>
              </div>
            </div>

            {/* Experience Node 2 */}
            <div className="relative pl-6 border-l border-red-500/30 group/node">
              <div className="absolute left-0 -translate-x-1/2 top-1.5 w-2.5 h-2.5 rounded-full bg-red-500 border border-black shadow-[0_0_6px_rgba(239,68,68,0.6)] group-hover/node:bg-red-400 transition-all duration-300"></div>

              <span className="text-[10px] text-yellow-500 font-bold block mb-1">INTELLIGENCE LABORATORY</span>
              <h4 className="text-sm font-bold text-white uppercase">AI/ML & NLP Researcher</h4>
              <p className="text-xs text-yellow-500 font-medium">Deep Learning Classification</p>

              <div className="bg-slate-900/40 border border-slate-800/80 rounded p-4 mt-3 text-xs text-slate-300 space-y-2.5 leading-relaxed">
                <p>• Developed sophisticated data pre-processing and NLP tokenization pipelines using Python and machine learning frameworks.</p>
                <p>• Built advanced classification models to analyze context, identifying misinformation with highly rigorous validation scoring.</p>
                <p>• Spearheaded structural documentation leading to the preparation of two scientific research papers.</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* COLUMN 2: Featured Project - Fake News Detection System (Center) */}
        <motion.div
          initial={{ y: 60, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="border border-red-500/20 hover:border-red-500/40 bg-slate-950/40 backdrop-blur-md rounded-xl p-5 relative overflow-hidden shadow-[0_0_15px_rgba(239,68,68,0.08)] hover:shadow-[0_0_30px_rgba(239,68,68,0.4)] transition-all duration-500 group flex flex-col lg:col-span-1"
        >

          <h3 className={`${bangers.className} text-3xl text-red-400 tracking-wider mb-4 border-b border-red-500/20 pb-2`}>
            [ FEATURED MISSION TARGET ]
          </h3>

          <div className="space-y-4">
            <div className="border border-red-500/30 bg-red-950/10 rounded-lg p-5 shadow-[inset_0_0_15px_rgba(239,68,68,0.05)] relative overflow-hidden">

              <h4 className="text-base font-bold text-white tracking-wide">Fake News Detection System</h4>
              <p className="text-[10px] text-cyan-400 font-semibold tracking-wider uppercase mt-1">
                CLASSIFICATION: AI/ML DEEP LEARNING & NLP
              </p>

              <div className="text-xs text-slate-300 mt-4 space-y-3 leading-relaxed">
                <p>
                  Built a cutting-edge deep learning classification pipeline designed to detect artificial structural patterns in news layouts, headlines, and articles.
                </p>
                <p>
                  Implemented robust validation testing using natural language processing to ensure model efficacy against adversarial testing datasets.
                </p>
              </div>

              <div className="mt-5 flex flex-wrap gap-2">
                <TechBadge name="Python" glowColor="gold" />
                <TechBadge name="NLP" glowColor="gold" />
                <TechBadge name="TensorFlow" glowColor="gold" />
                <TechBadge name="NLTK" glowColor="gold" />
                <TechBadge name="Scikit-Learn" glowColor="gold" />
              </div>
            </div>

            {/* Scientific Publication Banner */}
            <div className="border border-yellow-500/30 bg-yellow-950/10 rounded-lg p-4 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-yellow-500/40"></div>
              <h4 className="text-xs font-bold text-yellow-500 uppercase tracking-widest flex items-center gap-2 mb-1.5">
                <span className="w-2 h-2 rounded-full bg-yellow-500 animate-pulse"></span>
                RESEARCH DIRECTIVE
              </h4>
              <p className="text-[11px] text-slate-200 leading-relaxed">
                Presently compiling and writing <span className="text-yellow-400 font-bold">two scientific research papers</span> detailing custom algorithmic architectures and classification scoring models for public research review.
              </p>
            </div>
          </div>
        </motion.div>

        {/* COLUMN 3: Secondary Projects & System Diagnostics */}
        <motion.div
          initial={{ x: 60, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-6"
        >
          {/* Secondary Projects Panel */}
          <div className="border border-red-500/20 hover:border-red-500/40 bg-slate-950/40 backdrop-blur-md rounded-xl p-5 relative overflow-hidden shadow-[0_0_15px_rgba(239,68,68,0.08)] hover:shadow-[0_0_30px_rgba(239,68,68,0.4)] transition-all duration-500 group">

            <h3 className={`${bangers.className} text-3xl text-red-400 tracking-wider mb-4 border-b border-red-500/20 pb-2`}>
              [ OPERATIONAL PROJECTS ]
            </h3>

            <div className="space-y-4">
              {/* Project Card 1 */}
              <div className="bg-slate-900/30 border border-slate-800 rounded p-3.5 relative hover:border-cyan-500/30 transition-all duration-300">
                <h4 className="text-xs font-bold text-white uppercase">MERN Full-Stack Ecosystem</h4>
                <p className="text-[9px] text-cyan-400 font-bold uppercase tracking-wider mt-0.5">Role: System Architect</p>
                <p className="text-[11px] text-slate-300 mt-2 leading-relaxed">
                  Developed enterprise-level web templates deploying state machines, secured API routing layers, and responsive CSS UI grids.
                </p>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  <TechBadge name="React" glowColor="cyan" />
                  <TechBadge name="Node.js" glowColor="cyan" />
                  <TechBadge name="Express.js" glowColor="cyan" />
                  <TechBadge name="MongoDB" glowColor="cyan" />
                </div>
              </div>

              {/* Project Card 2 */}
              <div className="bg-slate-900/30 border border-slate-800 rounded p-3.5 relative hover:border-red-500/30 transition-all duration-300">
                <h4 className="text-xs font-bold text-white uppercase">Next.js Portfolio Core</h4>
                <p className="text-[9px] text-red-400 font-bold uppercase tracking-wider mt-0.5">Role: Lead Designer</p>
                <p className="text-[11px] text-slate-300 mt-2 leading-relaxed">
                  Built clean Next.js architectures leveraging high-fidelity Framer Motion HUD systems and fully responsive custom CSS parameters.
                </p>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  <TechBadge name="Next.js" glowColor="red" />
                  <TechBadge name="TypeScript" glowColor="red" />
                  <TechBadge name="Framer Motion" glowColor="red" />
                </div>
              </div>
            </div>
          </div>

          {/* Operational Metrics diagnostics */}
          <div className="border border-red-500/20 hover:border-red-500/40 bg-slate-950/40 backdrop-blur-md rounded-xl p-5 relative overflow-hidden shadow-[0_0_15px_rgba(239,68,68,0.08)] hover:shadow-[0_0_30px_rgba(239,68,68,0.4)] transition-all duration-500 group">
            <h3 className={`${bangers.className} text-3xl text-red-400 tracking-wider mb-4 border-b border-red-500/20 pb-2`}>
              [ MISSION DIAGNOSTICS ]
            </h3>

            <div className="space-y-3.5">
              {stats.map((stat, i) => (
                <div key={i} className="space-y-1">
                  <div className="flex justify-between text-xs font-mono">
                    <span className="text-slate-400">{stat.label}</span>
                    <span className={`text-${stat.color === "gold" ? "yellow-500" : stat.color === "cyan" ? "cyan-400" : "red-400"} font-bold`}>
                      {stat.value}%
                    </span>
                  </div>
                  <div className="h-1.5 w-full bg-slate-900 border border-slate-800 rounded overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${stat.value}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: i * 0.15 }}
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
        className="w-full flex flex-col sm:flex-row items-center justify-between border-t border-red-500/30 pt-4 text-[10px] text-red-500/80 font-mono z-10 gap-2 mt-4"
      >
        <span className="tracking-widest">
          STARK CORE INTELNODE v4.81.0 // SECURITY CORE APPROVED
        </span>
        <span className="tracking-[0.2em]">
          COORDINATES: SLIDE_03_ACTIVE // COMPILING_SUCCESS
        </span>
      </motion.div>
    </div>
  );
}
