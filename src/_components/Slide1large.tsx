"use client";
import { motion } from "motion/react";
import Image from "next/image";
import { Bangers } from "next/font/google";
import { useEffect, useState } from "react";

const bangers = Bangers({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bangers",
});

export default function Slide1large() {
  const [hov, setHov] = useState(false);
  const [logo, setLogo] = useState("SIKO");
  const [logo2, setLogo2] = useState("Code By");

  useEffect(() => {
    const intervalId = setInterval(() => {
      setLogo((prevLogo) => (prevLogo === "SIKO" ? "PSYCHO" : "SIKO"));
      setLogo2((prevLogo) => (prevLogo === "Code By" ? "Sid" : "Code By"));
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);
  return (
    <div className="w-full h-[100dvh] bg-black relative">
      <motion.div className="absolute w-full h-[10dvh] z-90 px-4 flex items-center justify-between">
        <div
          className={`flex items-center justify-center w-30 h-full ${bangers.className} text-4xl `}
        >
          <motion.div
            whileHover={{
              scale: 1.1,
              color: "#ffffff",
            }}
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 1, repeat: Infinity }}
            className={`select-none ${hov ? "text-white" : "text-blue-400"}`}
          >
            {logo}
          </motion.div>
        </div>
        <div className="text-white flex flex-col lg:flex-row justify-center items-center gap-1">
          <div className="uppercase">
            {hov ? "" : "Hover everywhere to find surprises"}
          </div>
        </div>
        <motion.div
          className={`flex items-center justify-center h-full ${bangers.className} text-4xl w-30 text-blue-400  `}
          whileHover={{ color: "#ffffff" }}
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 1, repeat: Infinity }}
        >
          <div
            className={`select-none ${hov ? "text-white" : "text-blue-400"}`}
          >
            {logo2}
          </div>
        </motion.div>
      </motion.div>

      {/* Background image */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: hov ? [0, 1] : 0 }}
        transition={{ duration: 0.2, ease: "easeInOut" }}
        className="absolute w-full h-full flex justify-center items-center z-60 "
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
          initial={{ y: "-300%", opacity: 0 }}
          animate={{
            y: ["-300%", "0%", "-30%"],
            opacity: [0, 0, 1],
            rotate: hov ? -2 : [0, -360],
            scale: hov ? 1.7 : 1,
            letterSpacing: hov ? "0.05em" : 0,
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
          initial={{ y: "300%", opacity: 0 }}
          animate={{
            y: ["300%", "0%", "30%"],
            opacity: [0, 0, 1],
            rotate: hov ? -2 : [0, -360],
            scale: hov ? 1.7 : 1,
            letterSpacing: hov ? "0.05em" : 0,
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
    </div>
  );
}
