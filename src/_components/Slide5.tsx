"use client";

import { Bangers } from "next/font/google";
import { useEffect, useState } from "react";
import { motion } from "motion/react";

const bangers = Bangers({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bangers",
});

export default function Slide5() {
  const [views, setViews] = useState({ views: 0, uniqueViews: 0 });

  useEffect(() => {
    let clientId = localStorage.getItem("portfolio_client_id");
    if (!clientId) {
      clientId = Math.random().toString(36).substring(2) + Date.now().toString(36);
      localStorage.setItem("portfolio_client_id", clientId);
    }

    fetch(`/api/views?clientId=${clientId}`)
      .then((res) => {
        if (!res.ok) throw new Error(`Status ${res.status}`);
        return res.json();
      })
      .then((data) => {
        if (data && typeof data.views === "number") {
          setViews({ views: data.views, uniqueViews: data.uniqueViews });
        }
      })
      .catch(() => { });
  }, []);

  return (
    <div id="contact" className="w-full min-h-[100dvh] h-auto bg-black text-white relative overflow-hidden flex flex-col justify-between pt-12 px-4 pb-4 md:p-8 font-mono">

      {/* Background Holographic HUD Grids with Gold Theme */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
        <svg width="100%" height="100%" className="absolute inset-0">
          <defs>
            <pattern id="hud-grid-5" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(230, 180, 34, 0.15)" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hud-grid-5)" />
        </svg>

        {/* Large Rotating Compass Circle */}
        <div className="absolute -right-40 -bottom-40 left-auto top-auto w-96 h-96 lg:w-[35rem] lg:h-[35rem] border border-gold/10 rounded-full flex items-center justify-center animate-[spin_80s_linear_infinite]">
          <div className="w-[90%] h-[90%] border border-dashed border-gold/5 rounded-full flex items-center justify-center">
            <div className="w-[80%] h-[80%] border border-gold/10 rounded-full flex items-center justify-center">
              <span className="text-[8px] text-gold/20 tracking-[1em] uppercase font-bold">CONTACT DECK</span>
            </div>
          </div>
        </div>

        {/* Diagonal Corner Blueprint Lines */}
        <div className="absolute top-0 left-0 w-24 h-24 border-t-2 border-l-2 border-gold/20"></div>
        <div className="absolute top-0 right-0 w-24 h-24 border-t-2 border-r-2 border-gold/20"></div>
        <div className="absolute bottom-0 left-0 w-24 h-24 border-b-2 border-l-2 border-gold/20"></div>
        <div className="absolute bottom-0 right-0 w-24 h-24 border-b-2 border-r-2 border-gold/20"></div>
      </div>

      {/* Header */}
      <div className="w-full flex items-center justify-between border-b border-gold pb-4 z-10">
        <div>
          <h2 className="text-[10px] md:text-xs text-gold tracking-[0.25em] font-bold uppercase">
            SECURE ACCESS CORE // SYSTEM NODE 05
          </h2>
          <h1 className="text-xl font-bold text-white mt-1 uppercase flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-gold animate-pulse" />
            GET IN TOUCH
          </h1>
        </div>
        <div className="text-right text-xs text-emerald-400 font-bold tracking-widest">
          ONLINE
        </div>
      </div>

      {/* Main Content Grid (Balanced Left/Right Bento Grid Stack) */}
      <div className="flex-grow flex items-center justify-center my-4 sm:my-auto z-10 w-full px-2 sm:px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 max-w-4xl w-full items-stretch">

          {/* Left Column: Card 1: Contact Details */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 220, damping: 20 }}
            className="border border-gold/20 rounded-xl p-4 sm:p-6 bg-gold/5 shadow-[0_0_20px_rgba(230,180,34,0.02)] flex flex-col justify-between h-full min-h-[260px] sm:min-h-[300px]"
          >
            <div>
              <span className="text-[10px] text-gold/60 tracking-widest font-bold uppercase block mb-1">01 // DIRECT PORT</span>
              <h3 className={`${bangers.className} text-3xl text-gold tracking-wide mb-3`}>
                CONTACT DETAILS
              </h3>
            </div>

            <div className="space-y-3 sm:space-y-4 text-xs font-mono py-3 sm:py-4 border-t border-b border-gold/10 my-3 sm:my-4 flex-grow flex flex-col justify-center">
              <div className="flex flex-col gap-1">
                <span className="text-[9px] text-slate-500 font-bold uppercase tracking-wider">EMAIL ADDRESS</span>
                <span className="text-white font-bold text-sm tracking-wide truncate block">
                  kolipakasiddhu.work@gmail.com
                </span>
              </div>

              <div className="flex flex-col gap-1 mt-2 sm:mt-3">
                <span className="text-[9px] text-slate-500 font-bold uppercase tracking-wider">LOCATION COORDINATES</span>
                <span className="text-white text-sm font-bold">Hyderabad, India</span>
              </div>

              <div className="flex flex-col gap-1 mt-2 sm:mt-3">
                <span className="text-[9px] text-slate-500 font-bold uppercase tracking-wider">COMMUNICATION STATUS</span>
                <p className="text-slate-400 text-[11px] leading-relaxed mb-1">
                  Open for new opportunities, software engineering roles, and collaborations.
                </p>
              </div>

              <motion.a
                href="mailto:kolipakasiddhu.work@gmail.com"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
                className="flex items-center justify-between p-2.5 sm:p-3 border border-gold/30 hover:border-gold hover:bg-gold/10 rounded-lg text-gold font-bold transition-all duration-300 text-xs tracking-wider uppercase mt-2 shadow-[0_0_12px_rgba(230,180,34,0.05)] hover:shadow-[0_0_15px_rgba(230,180,34,0.15)]"
              >
                <span>INBOX HANDSHAKE</span>
                <span>→</span>
              </motion.a>
            </div>

            <div className="text-[9px] text-slate-500 uppercase tracking-widest flex items-center justify-between">
              <span>SECURE CONNECT NODE v1.2</span>
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
            </div>
          </motion.div>

          {/* Right Column: Vertical stack of Card 2 & Card 3 */}
          <div className="flex flex-col gap-4 sm:gap-6 justify-between h-full">
            {/* Card 2: Live Telemetry */}
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 220, damping: 20 }}
              className="border border-gold/20 rounded-xl p-4 sm:p-5 bg-gold/5 shadow-[0_0_20px_rgba(230,180,34,0.02)] flex flex-col justify-between flex-1"
            >
              <div>
                <span className="text-[10px] text-gold/60 tracking-widest font-bold uppercase block mb-1">02 // ANALYTICS</span>
                <div className="flex items-center justify-between border-b border-gold/10 pb-2 mb-2">
                  <h3 className={`${bangers.className} text-2xl text-gold tracking-wide`}>
                    LIVE TELEMETRY
                  </h3>
                  <span className="text-[8px] text-emerald-400 font-bold border border-emerald-400/20 px-1.5 py-0.5 rounded bg-emerald-400/5 uppercase">
                    ONLINE
                  </span>
                </div>
                <p className="text-[10px] text-slate-400 leading-relaxed">
                  Tracking active portfolio traffic and unique visitor signals across network connections.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3 sm:gap-4 text-xs font-mono py-2">
                <div className="flex flex-col justify-center border border-zinc-800/80 p-2.5 sm:p-3 rounded bg-black/40">
                  <span className="text-[9px] text-slate-400 font-bold uppercase mb-1">Total Views</span>
                  <span className="text-base sm:text-lg font-bold text-cyan-400 font-mono tracking-wider">
                    {views.views.toLocaleString()}
                  </span>
                </div>
                <div className="flex flex-col justify-center border border-zinc-800/80 p-2.5 sm:p-3 rounded bg-black/40">
                  <span className="text-[9px] text-slate-400 font-bold uppercase mb-1">Unique Views</span>
                  <span className="text-base sm:text-lg font-bold text-amber-400 font-mono tracking-wider">
                    {views.uniqueViews.toLocaleString()}
                  </span>
                </div>
              </div>

              <div className="text-[9px] text-slate-500 uppercase tracking-widest mt-2">
                REAL-TIME SENSOR HUB
              </div>
            </motion.div>

            {/* Card 3: Social Matrix */}
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 220, damping: 20, delay: 0.1 }}
              className="border border-gold/20 rounded-xl p-4 sm:p-5 bg-zinc-950/20 flex flex-col justify-between flex-1"
            >
              <div>
                <span className="text-[10px] text-gold/60 tracking-widest font-bold uppercase block mb-1">03 // NETWORK MATRIX</span>
                <h3 className={`${bangers.className} text-2xl text-gold tracking-wide mb-1`}>
                  SOCIAL MATRIX
                </h3>
                <p className="text-[10px] text-slate-400 leading-relaxed mb-2">
                  Access primary source files, active repositories, and professional network logs.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-4 py-2 sm:py-3 border-t border-b border-gold/10 my-2 sm:my-3">
                <motion.a
                  href="https://github.com/siddhu-kolipaka"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 400, damping: 20 }}
                  className="flex items-center justify-between p-2.5 sm:p-3 border border-cyan-500/20 hover:border-cyan-400 hover:bg-cyan-500/5 rounded text-cyan-400 font-bold transition-all duration-300 text-[10px] sm:text-xs tracking-wider"
                >
                  <span>GITHUB</span>
                  <span>→</span>
                </motion.a>

                <motion.a
                  href="https://www.linkedin.com/in/siddharth-kolipaka"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 400, damping: 20 }}
                  className="flex items-center justify-between p-2.5 sm:p-3 border border-emerald-500/20 hover:border-emerald-400 hover:bg-emerald-500/5 rounded text-emerald-400 font-bold transition-all duration-300 text-[10px] sm:text-xs tracking-wider"
                >
                  <span>LINKEDIN</span>
                  <span>→</span>
                </motion.a>
              </div>

              <div className="text-[9px] text-slate-500 uppercase tracking-widest">
                EXTERNAL RESOURCE LINKER
              </div>
            </motion.div>
          </div>

        </div>
      </div>

      {/* Footer */}
      <footer className="w-full border-t border-gold/20 pt-4 flex flex-col sm:flex-row items-center justify-between text-[10px] text-slate-500 z-10 gap-2 font-mono">
        <span className="text-center w-full sm:w-auto">&copy; {new Date().getFullYear()} Siddharth Kolipaka</span>
        <span className="text-center w-full sm:w-auto">PORTFOLIO CORE // LIVE</span>
      </footer>

    </div>
  );
}
