"use client";
import { motion } from "motion/react";
import Image from "next/image";
import { Bangers } from "next/font/google";
import { useState } from "react";
import { useMediaQuery } from "@/_hooks/useMediaQuery";

const bangers = Bangers({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bangers",
});

export default function Slide1() {
  const [hov, setHov] = useState(false);
  const isLargeScreen = useMediaQuery("(min-width: 1024px)");

  return (
    <div className="w-full h-[100dvh] bg-black relative">
      <motion.div className="absolute w-full h-[10dvh] z-90 px-4 flex items-center justify-between">
        <div
          className={`flex items-center justify-center w-fit h-full ${bangers.className} text-4xl `}
        >
          <motion.div
            whileHover={{
              scale: 1.3,
              color: "#27D6F5",
              padding: "0 0.25rem",
            }}
            className="select-none text-gold"
          >
            S
          </motion.div>
          <motion.div
            whileHover={{
              scale: 1.3,
              color: "#27D6F5",
              padding: "0 0.25rem",
            }}
            className="select-none text-red"
          >
            I
          </motion.div>
          <motion.div
            whileHover={{
              scale: 1.3,
              color: "#27D6F5",
              padding: "0 0.25rem",
            }}
            className="select-none text-gold"
          >
            K
          </motion.div>
          <motion.div
            whileHover={{
              scale: 1.3,
              color: "#27D6F5",
              padding: "0 0.25rem",
            }}
            className="select-none text-red"
          >
            O
          </motion.div>
        </div>
        <div className="text-white flex flex-col lg:flex-row justify-center items-center gap-1">
          <div> {isLargeScreen ? "Hover" : "Tap"} everywhere</div>
          <div> to find easter eggs</div>
        </div>
        <motion.div
          className={`flex items-center justify-center w-fit h-full ${bangers.className} text-2xl text-blue-400  `}
          whileHover={{ scale: 1.1, color: "#ffffff" }}
        >
          <div>Code By Sid</div>
        </motion.div>
      </motion.div>

      {/* Background image */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: hov ? [0, 1] : 0 }}
        transition={{ duration: 0.2, ease: "easeInOut" }}
        className="absolute w-full h-full flex justify-center items-center z-60 "
      >
        <Image src="/image.png" alt="img" width={800} height={200} priority />
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

          {/* <motion.div
            className="absolute bg-blue-500 size-50 blur-3xl"
            animate={{ scale: [1, 1.2, 1], opacity: hov ? 0 : [1, 0.3, 1] }}
            transition={{ duration: 1, ease: "easeInOut" }}
            style={{
              translateX: "-50%",
              translateY: "-50%",
              top: "50%",
              left: "50%",
            }}
          /> */}
        </div>
      </motion.div>

      <motion.div
        className="absolute flex flex-col items-center justify-center w-full h-full z-70 "
        animate={{ gap: hov ? "15rem" : "0rem", rotate: hov ? 0 : [0, 360] }}
        transition={{
          gap: { duration: 0.6, ease: "easeInOut" },
          rotate: {
            duration: hov ? 0.2 : 10,
            repeat: hov ? 0 : Infinity,
            ease: "linear",
          },
        }}
      >
        <motion.div
          className={`text-7xl sm:text-8xl lg:text-9xl ${bangers.className} text-red `}
          initial={{ y: "-300%", opacity: 0 }}
          animate={{
            y: ["-300%", "0%", "-30%"],
            opacity: [0, 0, 1],
            rotate: hov ? 0 : [0, -360],
          }}
          transition={{
            y: { duration: 2, ease: "easeInOut" },
            opacity: { duration: 1, ease: "linear" },
            rotate: {
              duration: hov ? 0.2 : 10,
              repeat: hov ? 0 : Infinity,
              ease: "linear",
            },
          }}
        >
          SIDDHARTH
        </motion.div>

        <motion.div
          className={`text-7xl sm:text-8xl lg:text-9xl ${bangers.className} text-gold `}
          initial={{ y: "300%", opacity: 0 }}
          animate={{
            y: ["300%", "0%", "30%"],
            opacity: [0, 0, 1],
            rotate: hov ? 0 : [0, -360],
          }}
          transition={{
            y: { duration: 2, ease: "easeInOut" },
            opacity: { duration: 1, ease: "linear" },
            rotate: {
              duration: hov ? 0.2 : 10,
              repeat: hov ? 0 : Infinity,
              ease: "linear",
            },
          }}
        >
          KOLIPAKA
        </motion.div>
      </motion.div>
    </div>
  );
}
