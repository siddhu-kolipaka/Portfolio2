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
      <motion.div className="absolute z-10 w-full h-full">
        <div className="absolute w-full h-full">
          <motion.div
            animate={{
              rotate: [0, 360],
              scale: [1, 1.05, 1],
            }}
            transition={{
              rotate: { duration: 10, repeat: Infinity, ease: "linear" },
              scale: { duration: 1, ease: "easeInOut", repeat: Infinity },
            }}
            className="absolute z-10 size-40 lg:size-50 "
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
              onMouseLeave={() => setHov(false)}
            />
          </motion.div>

          <motion.div
            className="absolute bg-blue-500 size-50 blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [1, 0.3, 1],
            }}
            whileHover={{ opacity: 1 }}
            transition={{
              duration: 1,
              ease: "easeInOut",
              repeat: Infinity,
            }}
            style={{
              translateX: "-50%",
              translateY: "-50%",
              top: "50%",
              left: "50%",
            }}
          ></motion.div>
        </div>
      </motion.div>

      <motion.div
        className="absolute flex flex-col items-center justify-center w-full h-full"
        animate={{ gap: hov ? "15rem" : "0rem" }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      >
        <motion.div
          className={`text-8xl lg:text-9xl ${bangers.className} text-red `}
          initial={{ y: "-300%", opacity: 0 }}
          animate={{
            y: ["-300%", "0%", "-20%"],
            x: hov ? ["0%", "-40%"] : "0%",
            opacity: [0, 0, 1],
          }}
          transition={{
            y: { duration: 2, ease: "easeInOut" },
            opacity: { duration: 1, ease: "linear" },
          }}
        >
          SIDDHARTH
        </motion.div>

        <motion.div
          className={`text-8xl lg:text-9xl ${bangers.className} text-gold`}
          initial={{ y: "300%", opacity: 0 }}
          animate={{
            y: ["300%", "0%", "20%"],
            x: hov ? ["0%", "40%"] : "0%",
            opacity: [0, 0, 1],
          }}
          transition={{
            y: { duration: 2, ease: "easeInOut" },
            opacity: { duration: 1, ease: "linear" },
          }}
        >
          KOLIPAKA
        </motion.div>
      </motion.div>
    </div>
  );
}
