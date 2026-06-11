"use client";

import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import { Bangers } from "next/font/google";
import { useState, useEffect } from "react";
import Menu from "./Menu";

const bangers = Bangers({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bangers",
});

export default function Slide1() {
  const [hov, setHov] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      id="home"
      className="w-full h-[100dvh] bg-black relative overflow-hidden cursor-pointer"
      onClick={() => {
        if (window.innerWidth < 768) {
          setHov((prev) => !prev);
        }
      }}
    >

      <motion.div
        id="navbar"
        className="absolute w-full h-[10dvh] z-90 px-4 flex items-center justify-between"
        onClick={(e) => e.stopPropagation()}
      >
        <div
          className={`flex items-center justify-center w-30 h-full ${bangers.className} text-4xl  `}
        >
          <motion.div
            className={`flex items-center justify-center w-25 h-full ${bangers.className} text-4xl text-white `}
            whileHover={{ scale: 1.2 }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 913 393"
              fill="none"
              className="w-full h-auto drop-shadow-[0_0_25px_rgba(230,180,34,0.15)]"
            >


              <motion.path
                d="
            M42 339
            H286
            C342 339 378 306 378 258
            C378 210 342 177 286 177
            H118
            C79 177 54 152 54 120
            C54 88 79 60 118 60
            H412
            C435 60 446 72 446 94
            V300
            C446 327 459 339 486 339
            H709
            C807 339 861 284 861 195
            C861 106 807 47 709 47
            H554
            V279
            "
                stroke="white"
                strokeWidth="23"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{
                  duration: 1.8,
                  ease: "easeInOut",
                  repeat: Infinity,
                  repeatType: "reverse",
                  delay: 0.5,
                }}
              />


            </svg>
          </motion.div>
        </div>

        <div
          className={`flex items-center justify-center w-30 h-full ${bangers.className} text-4xl text-white `}
        >
          <button
            className={`flex items-center justify-center w-30 h-full ${bangers.className} text-4xl`}
            onClick={(e) => {
              e.stopPropagation();
              setMenuOpen(true);
            }}
          >
            MENU
          </button>
        </div>
      </motion.div>

      <motion.div id="ironman bg image"
        initial={{ opacity: 0 }}
        animate={{ opacity: hov ? [0, 1] : 0 }}
        transition={{ duration: 0.2, ease: "easeInOut" }}
        className="absolute w-full h-full flex justify-center items-center z-60 bg-[#9b121e]"
      >
        <Image
          src={isMobile ? "/mobile-image.jpg" : "/image.jpg"}
          alt="img"
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
      </motion.div>

      <motion.div
        id="arc-reactor-container"
        animate={{ opacity: isMobile && hov ? 0 : 1 }}
        transition={{ duration: 0.2 }}
        className="absolute z-80 select-none size-28 lg:size-50"
        style={{
          translateX: "-50%",
          translateY: "-50%",
          top: "50%",
          left: "50%",
        }}
        onMouseEnter={() => {
          if (window.innerWidth >= 768) setHov(true);
        }}
        onMouseLeave={() => {
          if (window.innerWidth >= 768) setHov(false);
        }}
        onClick={(e) => {
          e.stopPropagation();
          setHov((prev) => !prev);
        }}
      >
        <motion.div
          animate={{
            rotate: [0, 360],
            scale: [1, 1.05, 1],
          }}
          transition={{
            rotate: { duration: 10, repeat: Infinity, ease: "linear" },
            scale: { duration: 1, ease: "easeInOut", repeat: Infinity },
          }}
          className="relative w-full h-full"
        >
          <Image
            src="/arc-reactor.webp"
            alt="arc-reactor"
            fill
            sizes="(max-width: 1024px) 112px, 200px"
            priority
          />
        </motion.div>
      </motion.div>

      <motion.div id="name"
        className="absolute flex flex-col items-center justify-center w-full h-full z-70 mix-blend-difference pointer-events-none"
        animate={{ gap: hov ? (isMobile ? "10rem" : "18rem") : (isMobile ? "4rem" : "8rem"), rotate: hov ? 0 : [0, 360], opacity: isMobile && hov ? 0 : 1 }}
        transition={{
          gap: { duration: 0.6, ease: "easeInOut" },
          rotate: {
            duration: hov ? 0 : 10,
            repeat: hov ? 0 : Infinity,
            ease: "linear",
          },
        }}
      >
        <motion.div
          className={`text-[17vw] sm:text-[6rem] md:text-[8rem] leading-none whitespace-nowrap ${bangers.className} text-red`}
          initial={{ y: "-300%", opacity: 0, letterSpacing: "0em" }}
          animate={{
            y: ["-300%", "0%", "-30%"],
            opacity: [0, 0, 1],
            rotate: hov ? -2 : [0, -360],
            scale: hov ? (isMobile ? 1.2 : 1.5) : 1,
            letterSpacing: hov ? "0.05em" : "0em",
          }}
          transition={{
            y: { duration: 2, ease: "easeInOut" },
            opacity: { duration: 1, ease: "linear" },
            rotate: {
              duration: hov ? 0 : 10,
              repeat: hov ? 0 : Infinity,
              ease: "linear",
            },
          }}
        >
          SIDDHARTH
        </motion.div>

        <motion.div
          className={`text-[18vw] sm:text-[6.5rem] md:text-[8rem] leading-none whitespace-nowrap ${bangers.className} text-gold`}
          initial={{ y: "300%", opacity: 0, letterSpacing: "0em" }}
          animate={{
            y: ["300%", "0%", "30%"],
            opacity: [0, 0, 1],
            rotate: hov ? -2 : [0, -360],
            scale: hov ? (isMobile ? 1.2 : 1.5) : 1,
            letterSpacing: hov ? "0.05em" : "0em",
          }}
          transition={{
            y: { duration: 2, ease: "easeInOut" },
            opacity: { duration: 1, ease: "linear" },
            rotate: {
              duration: hov ? 0 : 10,
              repeat: hov ? 0 : Infinity,
              ease: "linear",
            },
          }}
        >
          KOLIPAKA
        </motion.div>
      </motion.div>

      <motion.div id="menu">
        <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      </motion.div>
    </div>
  );
}
