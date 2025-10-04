import { motion } from "motion/react";
import { Dispatch, SetStateAction } from "react";

export default function Menusmall({
  hov,
  open,
  setopen,
}: {
  hov: boolean;
  open: boolean;
  setopen: Dispatch<SetStateAction<boolean>>;
}) {
  return (
    <>
      <motion.button
        className={`flex flex-col items-center justify-center size-12  text-sm gap-0.5 rounded-full relative ${
          hov ? "bg-white" : "bg-red-700"
        }  `}
        onClick={() => {
          setopen(!open);
        }}
        animate={open ? "open" : "closed"}
      >
        <motion.div
          className={`w-6 h-1   ${
            hov ? "bg-red-600" : "bg-white"
          } rounded-full  absolute  `}
          style={{ left: "50%", top: "35%", x: "-50%", y: "-50%" }}
          variants={{
            open: { rotate: 45, top: "50%" },
            closed: { rotate: 0 },
          }}
          transition={{ duration: 0.25, ease: "linear" }}
        ></motion.div>
        <motion.div
          className={`w-6 h-1   ${
            hov ? "bg-red-600" : "bg-white"
          } rounded-full  absolute  `}
          style={{ left: "50%", top: "50%", x: "-50%", y: "-50%" }}
          variants={{
            open: { opacity: 0 },
            closed: { opacity: 1 },
          }}
          transition={{ duration: 0.25, ease: "linear" }}
        ></motion.div>
        <motion.div
          className={`w-6 h-1   ${
            hov ? "bg-red-600" : "bg-white"
          } rounded-full  absolute   `}
          style={{ left: "50%", top: "65%", x: "-50%", y: "-50%" }}
          variants={{
            open: { rotate: -45, top: "50%" },
            closed: { rotate: 0 },
          }}
          transition={{ duration: 0.25, ease: "linear" }}
        ></motion.div>
      </motion.button>
    </>
  );
}
