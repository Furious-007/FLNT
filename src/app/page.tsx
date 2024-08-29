"use client";

import Navbar from "@/components/Navbar";
import TransitionPage from "@/components/transitionPage";
import { cubicBezier, motion } from "framer-motion";

export default function Home() {
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
    <main className="">
      <TransitionPage />
        <div className="flex flex-col justify-between h-[70vh] mt-[5vh]">
          <div className="flex px-1 justify-between items-end">
            <div className="leading-[130px]">
              <motion.h1
                className="relative text-[150px] font-bold tracking-tighter"
                variants={textVar}
                initial="initial"
                whileInView="whileInView"
              >
                FREELAN
              </motion.h1>
              <motion.h1
                className="relative text-[150px] font-bold tracking-tighter flex items-baseline gap-4"
                variants={textVar}
                initial="initial"
                whileInView="whileInView"
              >
                TECH{" "}
                <p className="text-[17px] leading-none tracking-normal font-medium">
                  JUST LEAVE IT ON US
                </p>
              </motion.h1>
            </div>

            <div className="w-[30vw] text-[17px]">
              <motion.p
                className="relative"
                variants={textVar}
                initial="initial"
                whileInView="whileInView"
              >
                Creativity meets technology to fuel your business growth. Let’s
                turn your digital dreams into reality, one strategy at a time.
              </motion.p>
            </div>
          </div>

          <div className="flex justify-between items-end px-4">
            <div className="font-medium text-[20px]">
              <motion.p
                className="relative"
                variants={textVar}
                initial="initial"
                whileInView="whileInView"
              >
                WEB DESIGN
              </motion.p>
              <motion.p
                className="relative"
                variants={textVar}
                initial="initial"
                whileInView="whileInView"
              >
                WEB DEVELOPMENT
              </motion.p>
              <motion.p
                className="relative"
                variants={textVar}
                initial="initial"
                whileInView="whileInView"
              >
                SEARCH ENGINE OPTIMIZATION
              </motion.p>
            </div>

            <div className="text-[17px]">
              <motion.p
                className="relative"
                variants={textVar}
                initial="initial"
                whileInView="whileInView"
              >
                BENGALURU, KARNATAKA
              </motion.p>
            </div>
          </div>
        </div>
    </main>
  );
}
