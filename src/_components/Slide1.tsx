"use client";
import { motion } from "motion/react";
import Image from "next/image";

export default function Slide1() {
  return (
    <>
      <div className="w-full h-[100dvh] bg-black">
        <motion.div className="w-full h-full flex flex-col justify-center items-center">
          <motion.div
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            className="size-50 flex justify-center items-center"
          >
            <motion.div
              className="size-60 bg-blue-500 absolute blur-3xl z-0"
              animate={{ scale: [1, 1.2, 1], opacity: [0.7, 0.3, 0.7] }}
              transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
            ></motion.div>
            <Image
              src="/arc-reactor.webp"
              alt="arc-reactor"
              width={200}
              height={200}
              className="absolute z-10"
            />
          </motion.div>
        </motion.div>
      </div>
    </>
  );
}
