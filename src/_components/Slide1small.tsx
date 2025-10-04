"use client";
import { motion } from "motion/react";
import Image from "next/legacy/image";
import { Bangers } from "next/font/google";
import { useState } from "react";
import Menusmall from "./Menusmall";

const bangers = Bangers({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bangers",
});

export default function Slide1small() {
  const [hov, setHov] = useState(false);
  const [open, setopen] = useState(false);

  return (
    <motion.div
      animate={{ backgroundColor: hov ? "#9F0B1B" : "#000000" }}
      className="w-full h-[100dvh] relative"
    >
      <motion.div className="absolute w-full h-[10dvh] z-90 px-4 flex items-center justify-between">
        <motion.div
          className={`flex items-center justify-center w-20  h-full ${bangers.className} text-4xl `}
        >
          <motion.div
            animate={{
              opacity: [0, 1],
              color: hov ? "#FFFFFF" : "#3B82F6",
            }}
            transition={{ duration: 2 }}
            className="select-none"
          >
            {hov ? "PSYCHO" : "SIKO"}
          </motion.div>
        </motion.div>

        <div className="text-white">Tap to find suprises</div>

        <Menusmall hov={hov} open={open} setopen={setopen} />
      </motion.div>

      {/* Background image */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: hov ? [0, 1] : 0 }}
        transition={{ duration: 0.2, ease: "easeInOut" }}
        className="absolute w-full h-[90dvh] flex justify-center items-center z-60"
        style={{ top: "10dvh" }}
      >
        <Image
          src="/image.jpg"
          alt="img"
          layout="fill"
          objectFit="cover"
          priority
        />
      </motion.div>

      <motion.div className="absolute z-80 w-full h-full">
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
            className="absolute z-10 size-30 lg:size-50"
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
              width={200}
              height={200}
              priority
              onMouseEnter={() => setHov(true)}
              onClick={() => setHov(true)}
              onMouseLeave={() => setHov(false)}
            />
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        className="absolute flex flex-col items-center justify-center w-full h-full z-70 mix-blend-difference"
        animate={{ gap: hov ? "22rem" : "0rem", rotate: hov ? 0 : [0, 360] }}
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
          className={`text-7xl  lg:text-9xl ${bangers.className} text-red `}
          initial={{ y: "-300%", opacity: 0 }}
          animate={{
            y: ["-300%", "0%", "-100%"],
            opacity: [0, 0, 1],
            rotate: hov ? 0 : [0, 0, -180, -360, -360],
            scale: hov ? 1.5 : 1,
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
          className={`text-7xl  lg:text-9xl ${bangers.className} text-gold `}
          initial={{ y: "300%", opacity: 0 }}
          animate={{
            y: ["300%", "0%", "100%"],
            opacity: [0, 0, 1],
            rotate: hov ? 0 : [0, 0, -180, -360, -360],
            scale: hov ? 1.5 : 1,
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
    </motion.div>
  );
}
