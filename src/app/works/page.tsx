"use client";

import TransitionPage from "@/components/transitionPage";
import Link from "next/link";
import { motion, cubicBezier } from "framer-motion";

export default function Works() {
  const textVar = {
    initial: {
      top: 100,
      clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)",
    },
    whileInView: {
      top: 0,
      clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
      transition: {
        ease: cubicBezier(0, 0.55, 0.45, 1),
        duration: 0.75,
        delay: 1.05,
      },
    },
  };
  return (
    <div>
      <TransitionPage />
      <motion.p
        className="relative text-[120px]"
        variants={textVar}
        initial="initial"
        whileInView="whileInView"
      >
        WORKS
      </motion.p>
    </div>
  );
}
