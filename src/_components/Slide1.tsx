"use client";
import { motion } from "motion/react";
import Image from "next/image";
import { Bangers } from "next/font/google";
import { useState } from "react";

const bangers = Bangers({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bangers",
});

export default function Slide1() {
  const [hov, setHov] = useState(false);

  return (
    <div className="w-full h-[100dvh] bg-black relative">
      <motion.div className="w-full h-full flex flex-col justify-center items-center absolute z-10">
        <motion.div
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          className="size-50 flex justify-center items-center"
        >
          <motion.div
            className="size-60 bg-blue-500 absolute blur-3xl"
            animate={{ scale: [1, 1.2, 1, 1, 1.2, 0], opacity: [1, 0.3, 1] }}
            transition={{ duration: 1, ease: "easeInOut" }}
          ></motion.div>
          <Image
            src="/arc-reactor.webp"
            alt="arc-reactor"
            width={200}
            height={200}
            className="absolute z-10 w-auto h-auto"
            onMouseEnter={() => setHov(true)}
            onMouseLeave={() => setHov(false)}
          />
        </motion.div>
      </motion.div>

      <motion.div
        className="w-full h-full flex flex-col justify-center items-center absolute"
        animate={{ gap: hov ? "5rem" : "0rem" }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      >
        <motion.div
          className={`text-9xl ${bangers.className} text-red`}
          animate={{ y: ["-200%", "0%", "-20%"] }}
          transition={{ duration: 2, ease: "easeInOut" }}
        >
          SIDDHARTH
        </motion.div>
        <motion.div
          className={`text-9xl ${bangers.className} text-gold`}
          animate={{ y: ["200%", "0%", "20%"] }}
          transition={{ duration: 2, ease: "easeInOut" }}
        >
          KOLIPAKA
        </motion.div>
      </motion.div>
    </div>
  );
}
