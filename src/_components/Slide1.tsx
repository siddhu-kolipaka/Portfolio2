"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { Bangers } from "next/font/google";
import { useState } from "react";
import Menu from "./Menu";

const bangers = Bangers({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bangers",
});

export default function Slide1() {
  const [hov, setHov] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="w-full h-[100dvh] bg-black relative overflow-hidden">

      <motion.div id="navbar" className="absolute w-full h-[10dvh] z-90 px-4 flex items-center justify-between ">
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
            onClick={() => setMenuOpen(true)}
          >
            MENU
          </button>
        </div>
      </motion.div>

      <motion.div id="ironman bg image"
        initial={{ opacity: 0 }}
        animate={{ opacity: hov ? [0, 1] : 0 }}
        transition={{ duration: 0.2, ease: "easeInOut" }}
        className="absolute w-full h-full flex justify-center items-center z-60 "
      >
        <Image
          src="/image.jpg"
          alt="img"
          fill
          className="object-cover"
          priority
        />
      </motion.div>

      <motion.div id="arc reactor" className="absolute z-80 w-full h-full">
        <div className="absolute w-full h-full">
          <motion.div
            animate={{
              rotate: [0, 360],
              scale: [1, 1.05, 1],
              opacity: hov ? [1, 0] : 1,
            }}
            transition={{
              rotate: { duration: 10, repeat: Infinity, ease: "linear" },
              scale: { duration: 1, ease: "easeInOut", repeat: Infinity },
              opacity: { duration: 0.2, ease: "easeInOut" },
            }}
            className="absolute z-10 size-30 lg:size-50 select-none"
            style={{
              translateX: "-50%",
              translateY: "-50%",
              top: "50%",
              left: "50%",
            }}
          >
            <Image
              src="/arc-reactor.webp"
              alt="arc-reactor"
              fill
              sizes="auto"
              priority
              onMouseEnter={() => setHov(true)}
              onClick={() => setHov(true)}
              onMouseLeave={() => setHov(false)}
            />
          </motion.div>
        </div>
      </motion.div>

      <motion.div id="name"
        className="absolute flex flex-col items-center justify-center w-full h-full z-70 mix-blend-difference"
        animate={{ gap: hov ? "10rem" : "0rem", rotate: hov ? 0 : [0, 360] }}
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
          className={`text-[8rem]  ${bangers.className} text-red`}
          initial={{ y: "-300%", opacity: 0, letterSpacing: "0em" }}
          animate={{
            y: ["-300%", "0%", "-30%"],
            opacity: [0, 0, 1],
            rotate: hov ? -2 : [0, -360],
            scale: hov ? 1.7 : 1,
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
          className={`text-[8rem] ${bangers.className} text-gold`}
          initial={{ y: "300%", opacity: 0, letterSpacing: "0em" }}
          animate={{
            y: ["300%", "0%", "30%"],
            opacity: [0, 0, 1],
            rotate: hov ? -2 : [0, -360],
            scale: hov ? 1.7 : 1,
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
