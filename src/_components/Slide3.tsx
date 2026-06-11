"use client";

import { motion } from "motion/react";
import { Bangers } from "next/font/google";
import { useState, useEffect } from "react";

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
      className={`px-2 py-1 text-[10px] font-mono rounded border transition-all duration-300 cursor-default select-none ${glowClasses[glowColor]}`}
    >
      {name}
    </motion.span>
  );
}

export default function Slide3() {
  const [leetcodeData, setLeetcodeData] = useState({
    solved: 258,
    easySolved: 88,
    mediumSolved: 150,
    hardSolved: 20,
    rating: 1881,
    maxRating: 1881,
    rank: "Knight",
    maxRank: "Knight",
  });

  const [codeforcesData, setCodeforcesData] = useState({
    rating: 1176,
    maxRating: 1220,
    rank: "Newbie",
    maxRank: "Pupil",
    solved: 131,
  });

  const [codechefData, setCodechefData] = useState({
    rating: 1539,
    maxRating: 1613,
    stars: "2★ Coder",
    maxStars: "3★ Coder",
    solved: 159,
    division: "Div 3",
  });

  useEffect(() => {
    async function fetchLeetCodeData() {
      try {
        const [profileRes, contestRes] = await Promise.all([
          fetch("https://alfa-leetcode-api.onrender.com/kolipakasiddhu/profile", { cache: "no-store" }),
          fetch("https://alfa-leetcode-api.onrender.com/kolipakasiddhu/contest", { cache: "no-store" }),
        ]);

        if (profileRes.ok && contestRes.ok) {
          const profileData = await profileRes.json();
          const contestData = await contestRes.json();

          const maxContestRating = Array.isArray(contestData.contestParticipation) && contestData.contestParticipation.length > 0
            ? Math.round(Math.max(...contestData.contestParticipation.filter((p: any) => p.attended).map((p: any) => p.rating)))
            : 1881;

          const currentBadge = contestData.contestBadges?.name || "Knight";

          setLeetcodeData({
            solved: profileData.totalSolved || 258,
            easySolved: profileData.easySolved || 88,
            mediumSolved: profileData.mediumSolved || 150,
            hardSolved: profileData.hardSolved || 20,
            rating: Math.round(contestData.contestRating) || 1881,
            maxRating: maxContestRating || 1881,
            rank: currentBadge,
            maxRank: currentBadge,
          });
        }
      } catch (err) {
        console.error("Error fetching LeetCode data:", err);
      }
    }

    async function fetchCodeforcesData() {
      try {
        const [infoRes, statusRes] = await Promise.all([
          fetch("https://codeforces.com/api/user.info?handles=kolipakasiddhu", { cache: "no-store" }),
          fetch("https://codeforces.com/api/user.status?handle=kolipakasiddhu", { cache: "no-store" }),
        ]);

        if (infoRes.ok && statusRes.ok) {
          const infoData = await infoRes.json();
          const statusData = await statusRes.json();

          if (infoData.status === "OK" && infoData.result?.[0]) {
            const user = infoData.result[0];
            const rawRank = user.rank || "Newbie";
            const formattedRank = rawRank.charAt(0).toUpperCase() + rawRank.slice(1);

            const rawMaxRank = user.maxRank || "Pupil";
            const formattedMaxRank = rawMaxRank.charAt(0).toUpperCase() + rawMaxRank.slice(1);

            let solvedCount = 131;
            if (statusData.status === "OK" && Array.isArray(statusData.result)) {
              const okSubmissions = statusData.result.filter((s: any) => s.verdict === "OK");
              const uniqueProblems = new Set(okSubmissions.map((s: any) => `${s.problem.contestId}_${s.problem.name}`));
              solvedCount = uniqueProblems.size;
            }

            setCodeforcesData({
              rating: user.rating || 1176,
              maxRating: user.maxRating || 1220,
              rank: formattedRank,
              maxRank: formattedMaxRank,
              solved: solvedCount,
            });
          }
        }
      } catch (err) {
        console.error("Error fetching Codeforces data:", err);
      }
    }

    async function fetchCodeChefData() {
      try {
        const res = await fetch("/api/codechef", { cache: "no-store" });
        if (res.ok) {
          const data = await res.json();
          setCodechefData({
            rating: data.rating || 1539,
            maxRating: data.maxRating || 1613,
            stars: data.stars || "2★ Coder",
            maxStars: data.maxStars || "3★ Coder",
            solved: data.solved || 159,
            division: data.division || "Div 3",
          });
        }
      } catch (err) {
        console.error("Error fetching CodeChef data:", err);
      }
    }

    fetchLeetCodeData();
    fetchCodeforcesData();
    fetchCodeChefData();
  }, []);

  const cpStats = [
    {
      platform: "LeetCode",
      username: "kolipakasiddhu",
      colorClass: "border-orange-500/20 hover:border-orange-500/50 shadow-[0_0_15px_rgba(249,115,22,0.05)] hover:shadow-[0_0_25px_rgba(249,115,22,0.25)]",
      headerColor: "text-orange-400",
      stats: [
        { label: "Rating", value: leetcodeData.rating.toString() },
        { label: "Rank", value: leetcodeData.rank },
        { label: "Max Rating", value: leetcodeData.maxRating.toString() },
        { label: "Max Rank", value: leetcodeData.maxRank }
      ],
      solved: {
        total: leetcodeData.solved,
        label: `${leetcodeData.solved} / 3200+`,
        distribution: [
          { difficulty: "Easy", count: leetcodeData.easySolved, color: "bg-emerald-500", width: `${(leetcodeData.easySolved / leetcodeData.solved) * 100}%` },
          { difficulty: "Medium", count: leetcodeData.mediumSolved, color: "bg-yellow-500", width: `${(leetcodeData.mediumSolved / leetcodeData.solved) * 100}%` },
          { difficulty: "Hard", count: leetcodeData.hardSolved, color: "bg-red-500", width: `${(leetcodeData.hardSolved / leetcodeData.solved) * 100}%` }
        ]
      },
      badgeName: leetcodeData.rank,
      badgeColor: "orange" as const,
      profileUrl: "https://leetcode.com/u/kolipakasiddhu/"
    },
    {
      platform: "Codeforces",
      username: "kolipakasiddhu",
      colorClass: "border-cyan-500/20 hover:border-cyan-500/50 shadow-[0_0_15px_rgba(6,182,212,0.05)] hover:shadow-[0_0_25px_rgba(6,182,212,0.25)]",
      headerColor: "text-cyan-400",
      stats: [
        { label: "Rating", value: codeforcesData.rating.toString() },
        { label: "Rank", value: codeforcesData.rank },
        { label: "Max Rating", value: codeforcesData.maxRating.toString() },
        { label: "Max Rank", value: codeforcesData.maxRank }
      ],
      solved: {
        total: codeforcesData.solved,
        label: `${codeforcesData.solved} Problems`,
        distribution: [
          { difficulty: "Resolved", count: codeforcesData.solved, color: "bg-cyan-500", width: "100%" }
        ]
      },
      badgeName: codeforcesData.rank,
      badgeColor: "cyan" as const,
      profileUrl: "https://codeforces.com/profile/kolipakasiddhu"
    },
    {
      platform: "CodeChef",
      username: "kolipakasiddhu",
      colorClass: "border-yellow-600/20 hover:border-yellow-600/50 shadow-[0_0_15px_rgba(234,179,8,0.05)] hover:shadow-[0_0_25px_rgba(234,179,8,0.25)]",
      headerColor: "text-yellow-500",
      stats: [
        { label: "Rating", value: codechefData.rating.toString() },
        { label: "Rank", value: codechefData.stars },
        { label: "Max Rating", value: codechefData.maxRating.toString() },
        { label: "Max Rank", value: codechefData.maxStars }
      ],
      solved: {
        total: codechefData.solved,
        label: `${codechefData.solved} Problems`,
        distribution: [
          { difficulty: "Resolved", count: codechefData.solved, color: "bg-yellow-500", width: "100%" }
        ]
      },
      badgeName: codechefData.stars,
      badgeColor: "gold" as const,
      profileUrl: "https://www.codechef.com/users/kolipakasiddhu"
    }
  ];

  const achievements = [
    {
      title: "LeetCode Knight Badge",
      organization: "LeetCode",
      description: "Secured Knight badge with contest rating of 1847+ (Top 6% globally).",
      date: "Q1 2026",
      badge: "KNIGHT // 1847",
      color: "orange" as const,
    },
    {
      title: "CodeChef 3-Star Coder",
      organization: "CodeChef",
      description: "Reached 3-Star Coder status with a peak rating of 1613.",
      date: "Q1 2025",
      badge: "3★ Peak 1613",
      color: "gold" as const,
    },
    {
      title: "Codeforces Pupil",
      organization: "Codeforces",
      description: "Earned Pupil rank with a peak rating of 1220.",
      date: "Q2 2025",
      badge: "PUPIL",
      color: "emerald" as const,
    },
    {
      title: "TS-POLYCET 2020 State Rank 10",
      organization: "TS-POLYCET",
      description: "Secured 10th rank in TS-POLYCET 2020.",
      date: "Q1 2020",
      badge: "STATE RANK 10",
      color: "cyan" as const,
    },
  ];

  const achColors = {
    cyan: "border-cyan-500/20 hover:border-cyan-500/50 hover:shadow-[0_0_15px_rgba(6,182,212,0.15)] text-cyan-400",
    gold: "border-yellow-600/20 hover:border-yellow-500/50 hover:shadow-[0_0_15px_rgba(234,179,8,0.15)] text-yellow-500",
    red: "border-red-500/20 hover:border-red-500/50 hover:shadow-[0_0_15px_rgba(239,68,68,0.15)] text-red-400",
    emerald: "border-emerald-500/20 hover:border-emerald-500/50 hover:shadow-[0_0_15px_rgba(16,185,129,0.15)] text-emerald-400",
    purple: "border-purple-500/20 hover:border-purple-500/50 hover:shadow-[0_0_15px_rgba(168,85,247,0.15)] text-purple-400",
    orange: "border-orange-500/20 hover:border-orange-500/50 hover:shadow-[0_0_15px_rgba(249,115,22,0.15)] text-orange-400",
    pink: "border-pink-500/20 hover:border-pink-500/50 hover:shadow-[0_0_15px_rgba(236,72,153,0.15)] text-pink-400",
  };

  return (
    <div id="stats" className="w-full min-h-[100dvh] bg-black text-white relative overflow-hidden flex flex-col justify-between p-4 md:p-8 font-mono select-none">
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
          <h2 className="text-sm text-red-400 tracking-[0.25em] font-bold">
            SECURE ACCESS CORE // SYSTEM NODE 03
          </h2>
          <h1 className="text-2xl md:text-3xl font-bold text-white mt-1 uppercase flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse"></span>
            COMPETITIVE PROGRAMMING MODULE
          </h1>
        </div>
        <div className="flex items-center gap-6 text-right">
          <div className="hidden sm:block">
            <span className="block text-[10px] text-red-500">USER ID STREAM</span>
            <span className="text-xs text-yellow-500 font-bold">@kolipakasiddhu</span>
          </div>
          <div className="px-3 py-1 bg-red-950/20 border border-red-500/30 rounded text-red-400 text-xs">
            SYS STATUS: ACTIVE
          </div>
        </div>
      </motion.div>

      {/* Main Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 flex-1 my-6 z-10">

        {/* ROW 1: CP Platforms (Spans 2 columns) */}
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-2 border border-red-500/20 bg-slate-950/40 backdrop-blur-md rounded-xl p-5 relative overflow-hidden shadow-[0_0_15px_rgba(239,68,68,0.08)] flex flex-col justify-between"
        >
          <div>
            <h3 className={`${bangers.className} text-4xl text-red-400 tracking-wider mb-4 border-b border-red-500/20 pb-2`}>
              [ CP PLATFORMS ]
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {cpStats.map((platform, idx) => (
                <motion.a
                  key={idx}
                  href={platform.profileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  className={`block border bg-slate-950/60 rounded-lg p-4 transition-all duration-300 ${platform.colorClass}`}
                >
                  <div className="flex justify-between items-center mb-2">
                    <div>
                      <h4 className={`text-lg font-bold uppercase ${platform.headerColor}`}>
                        {platform.platform}
                      </h4>
                      <span className="text-[10px] text-slate-500 uppercase tracking-widest">
                        ID: {platform.username}
                      </span>
                    </div>
                    <TechBadge name={platform.badgeName} glowColor={platform.badgeColor} />
                  </div>

                  <div className="grid grid-cols-2 gap-4 my-3 border-y border-slate-800/80 py-3">
                    {/* Current Stats */}
                    <div className="space-y-2">
                      <span className="block text-[10px] text-slate-500 uppercase tracking-widest font-bold border-b border-slate-900 pb-1">
                        // CURRENT
                      </span>
                      <div>
                        <span className="block text-[9px] text-slate-400 uppercase">Rating</span>
                        <span className="text-sm font-bold text-white font-mono">{platform.stats[0].value}</span>
                      </div>
                      <div>
                        <span className="block text-[9px] text-slate-400 uppercase">Rank</span>
                        <span className="text-xs font-bold text-slate-300 font-mono block leading-snug">{platform.stats[1].value}</span>
                      </div>
                    </div>

                    {/* Max Stats */}
                    <div className="space-y-2 border-l border-slate-800/80 pl-4">
                      <span className="block text-[10px] text-slate-500 uppercase tracking-widest font-bold border-b border-slate-900 pb-1">
                        // MAX / PEAK
                      </span>
                      <div>
                        <span className="block text-[9px] text-slate-400 uppercase">Rating</span>
                        <span className="text-sm font-bold text-white font-mono">{platform.stats[2].value}</span>
                      </div>
                      <div>
                        <span className="block text-[9px] text-slate-400 uppercase">Rank</span>
                        <span className="text-xs font-bold text-slate-300 font-mono block leading-snug">{platform.stats[3].value}</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <div className="flex justify-between text-[11px]">
                      <span className="text-slate-400">Problems Solved</span>
                      <span className="font-bold text-white">{platform.solved.label}</span>
                    </div>
                    <div className="h-2 w-full bg-slate-900 border border-slate-800/80 rounded-full overflow-hidden flex">
                      {platform.solved.distribution.map((dist, dIdx) => (
                        <div
                          key={dIdx}
                          style={{ width: dist.width }}
                          className={`h-full ${dist.color}`}
                          title={`${dist.difficulty}: ${dist.count}`}
                        />
                      ))}
                    </div>
                    {platform.platform === "LeetCode" && (
                      <div className="flex justify-between text-[9px] text-slate-500">
                        <span>Easy ({platform.solved.distribution[0].count})</span>
                        <span>Medium ({platform.solved.distribution[1].count})</span>
                        <span>Hard ({platform.solved.distribution[2].count})</span>
                      </div>
                    )}
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* ROW 2: Achievements (Spans 2 columns, dynamic height) */}
        <motion.div
          initial={{ y: 60, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="lg:col-span-2 border border-red-500/20 hover:border-red-500/40 bg-slate-950/40 backdrop-blur-md rounded-xl p-5 relative overflow-hidden shadow-[0_0_15px_rgba(239,68,68,0.08)] hover:shadow-[0_0_30px_rgba(239,68,68,0.4)] transition-all duration-500 group flex flex-col"
        >
          <div>
            <h3 className={`${bangers.className} text-4xl text-red-400 tracking-wider mb-4 border-b border-red-500/20 pb-2`}>
              [ TACTICAL ACHIEVEMENTS ]
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-2">
              {achievements.map((ach, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ scale: 1.02 }}
                  className={`border bg-slate-950/60 rounded-lg p-4 flex flex-col justify-between transition-all duration-300 ${achColors[ach.color]}`}
                >
                  <div className="flex justify-between items-start mb-2 gap-2">
                    <span className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">
                      {ach.organization}
                    </span>
                    <span className="text-[10px] text-slate-500 font-mono">
                      {ach.date}
                    </span>
                  </div>

                  <h4 className="text-sm font-bold text-white uppercase mb-3 min-h-[2.5rem] flex items-center leading-snug">
                    {ach.title}
                  </h4>

                  <div className="pt-2 border-t border-slate-900 flex justify-between items-center">
                    <span className="text-[9px] text-slate-500 uppercase tracking-wider">
                      Badge
                    </span>
                    <TechBadge name={ach.badge} glowColor={ach.color} />
                  </div>
                </motion.div>
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
