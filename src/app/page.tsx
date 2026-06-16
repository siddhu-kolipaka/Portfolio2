"use client";
import Slide1 from "@/_components/Slide1";
import Slide2 from "@/_components/Slide2";
import Slide3 from "@/_components/Slide3";
import Slide4 from "@/_components/Slide4";
import Slide5 from "@/_components/Slide5";
import Menu from "@/_components/Menu";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showHamburger, setShowHamburger] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowHamburger(window.scrollY > window.innerHeight * 0.8);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // initial check
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="w-full overflow-x-hidden relative flex flex-col gap-12 md:gap-4 bg-black">
      <Slide1 setMenuOpen={setMenuOpen} />
      <Slide2 />
      <Slide3 />
      <Slide4 />
      <Slide5 />

      {/* Floating Hamburger button from Slide 2 onwards */}
      <AnimatePresence>
        {showHamburger && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            onClick={() => setMenuOpen(true)}
            className="fixed top-6 right-6 md:top-8 md:right-12 z-[80] size-14 md:size-16 rounded-full bg-black/45 backdrop-blur-md border border-white/10 shadow-[0_4px_25px_rgba(0,0,0,0.6)] flex flex-col items-center justify-center gap-1.5 cursor-pointer hover:bg-black/60 hover:border-white/20 transition-[background-color,border-color] duration-300 pointer-events-auto"
            title="Open Menu"
          >
            <span className="w-6 h-0.5 bg-white rounded-full"></span>
            <span className="w-6 h-0.5 bg-white rounded-full"></span>
            <span className="w-6 h-0.5 bg-white rounded-full"></span>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Global Menu overlay */}
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
    </div>
  );
}
