"use client"

import { motion } from "motion/react"
import { Bangers } from "next/font/google"

const bangers = Bangers({
    weight: "400",
    subsets: ["latin"],
    variable: "--font-bangers",
});

const menuVariants = {
    open: {
        x: "0%",
        transition: {
            type: "tween",
            ease: "easeOut",
            duration: 0.4,
            delayChildren: 0.15,
            staggerChildren: 0.06,
        }
    },
    closed: {
        x: "100%",
        transition: {
            type: "tween",
            ease: "easeIn",
            duration: 0.3,
            delay: 0.25,
            staggerChildren: 0.04,
            staggerDirection: -1,
        }
    }
} as const;

const itemVariants = {
    open: {
        y: 0,
        opacity: 1,
        transition: {
            type: "spring",
            stiffness: 100,
            damping: 15,
            mass: 0.8
        }
    },
    closed: {
        y: "-100%",
        opacity: 0,
        transition: {
            type: "tween",
            ease: "easeInOut",
            duration: 0.25
        }
    }
} as const;

const menuItems = [
    { id: "home", label: "HOME" },
    { id: "about", label: "ABOUT" },
    { id: "stats", label: "STATS" },
    { id: "projects", label: "PROJECTS" },
    { id: "contact", label: "CONTACT" }
] as const;

export default function Menu({ menuOpen, setMenuOpen }: { menuOpen: boolean, setMenuOpen: (open: boolean) => void }) {
    const handleScroll = (id: string) => {
        setMenuOpen(false);
        setTimeout(() => {
            const element = document.getElementById(id);
            if (element) {
                element.scrollIntoView({ behavior: "smooth", block: "start" });
            }
        }, 300);
    };

    return (
        <>
            <motion.div className="w-[100dvw] h-[100dvh] bg-black fixed top-0 left-0 z-99 overflow-hidden flex flex-col justify-between"
                style={{ pointerEvents: menuOpen ? "auto" : "none" }}
                variants={menuVariants}
                initial="closed"
                animate={menuOpen ? "open" : "closed"}
                exit="closed"
            >

                <div
                    className={`flex items-center justify-end w-full h-[12dvh] px-8 border-b border-white/5 z-10 relative`}
                >
                    <button
                        className={`flex items-center justify-center px-6 py-2 border border-white/10 rounded-full ${bangers.className} text-2xl md:text-3xl text-white/70 cursor-pointer hover:text-white hover:border-[#E21B22] hover:bg-[#E21B22]/10 transition-all duration-300 hover:scale-105`}
                        onClick={() => setMenuOpen(false)}
                    >
                        CLOSE
                    </button>
                </div>

                <div className="h-[88dvh] w-full flex flex-col overflow-hidden z-10 relative">
                    {menuItems.map((item) => (
                        <motion.div
                            key={item.id}
                            variants={itemVariants}
                            onClick={() => handleScroll(item.id)}
                            className={`group flex items-center justify-start px-8 md:px-16 h-[20%] w-full border-b border-white/5 cursor-pointer bg-white/[0.01] hover:bg-gradient-to-r hover:from-[#E21B22]/15 hover:to-[#005A9C]/5 border-l-8 border-l-transparent hover:border-l-[#E21B22] transition-colors duration-300 ${bangers.className} text-6xl md:text-8xl text-white/80 hover:text-white`}
                        >
                            <span className="transform group-hover:translate-x-4 transition-transform duration-300">
                                {item.label}
                            </span>
                        </motion.div>
                    ))}
                </div>

            </motion.div >
        </>
    )
}