"use client";

import TransitionPage from "@/components/transitionPage";
import { motion, cubicBezier, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Services() {
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
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const left = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);

  return (
    <div className="">
      <TransitionPage />
      <div className="relative h-screen w-full flex justify-center items-center">
        <motion.p
          className="relative text-[170px]"
          variants={textVar}
          initial="initial"
          animate="whileInView"
        >
          SERVICES
        </motion.p>
        <motion.img
          className="absolute top-1/2 left-[28vw]"
          src="/assets/pf.png"
          drag
          dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
        />
        <motion.img
          className="absolute top-[43%] right-[28vw]"
          src="/assets/leaf.png"
          drag
          dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
        />
        <motion.img
          className="absolute top-[35%] left-[44vw]"
          src="/assets/dandelion.png"
          drag
          dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
        />
      </div>
      <motion.div
        ref={ref}
        className="relative flex left-[-5%] w-[250vw] text-nowrap items-center gap-x-10 bg-secondary text-primary text-5xl"
        style={{ x: left }}
      >
        <p>WEB DESIGN</p>
        <p>UI/UX DESIGN</p>
        <p>RESPONSIVE DESIGN</p>
        <p>WEB DESIGN</p>
        <p>UI/UX DESIGN</p>
        <p>RESPONSIVE DESIGN</p>
        <p>WEB DESIGN</p>
        <p>UI/UX DESIGN</p>
        <p>RESPONSIVE DESIGN</p>
        <p>WEB DESIGN</p>
        <p>UI/UX DESIGN</p>
        <p>RESPONSIVE DESIGN</p>
      </motion.div>
      <div className="flex h-screen w-full bg-[#d0d0d0] justify-between items-center">
        <div className="sticky top-0 left-0 h-full flex justify-center items-center">
          WEB DESIGN
        </div>
        <div className="">
          <p>
            We create UI that drives the purpose of your website. Simple,
            Minimal and Beautiful that&apos;s my key mantras. I take special
            care of Typography, Minimal Layout, Clean UI. Design what matters.
          </p>
        </div>
      </div>
    </div>
  );
}
