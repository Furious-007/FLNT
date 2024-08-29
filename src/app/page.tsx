"use client";

import TransitionPage from "@/components/transitionPage";
import { cubicBezier, motion } from "framer-motion";

export default function Home() {
  const textVar = {
    initial: {
      top: 100,
      clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)",
    },
    animate: {
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
        <div className="flex flex-col justify-around h-[90vh] mt-[5vh]">
          <div className="flex px-1 justify-between items-end max-sm:flex-col max-sm:items-center max-sm:justify-between">
            <div className="leading-[130px] max-sm:leading-none">
              <motion.h1
                className="relative text-[150px] font-bold tracking-tighter max-sm:text-[90px]"
                variants={textVar}
                initial="initial"
                animate="animate"
              >
                FREELAN
              </motion.h1>
              <motion.h1
                className="relative text-[150px] font-bold tracking-tighter flex items-baseline gap-4 max-sm:text-[90px]"
                variants={textVar}
                initial="initial"
                animate="animate"
              >
                TECH{" "}
                <p className="text-[17px] leading-none tracking-normal font-medium max-sm:text-[15px]">
                  JUST LEAVE IT ON US
                </p>
              </motion.h1>
            </div>

            <div className="w-[30vw] text-[17px] max-sm:w-full max-sm:px-4 max-sm:text-[15px] max-sm:mt-4">
              <motion.p
                className="relative"
                variants={textVar}
                initial="initial"
                animate="animate"
              >
                Creativity meets technology to fuel your business growth. Let’s
                turn your digital dreams into reality, one strategy at a time.
              </motion.p>
            </div>
          </div>

          <div className="flex justify-between flex-row-reverse items-end px-4 max-sm:flex-col max-sm:justify-between max-sm:h-[15vh]">
            <div className="font-semibold text-[35px] text-right max-sm:text-[25px] max-sm:leading-none">
              <motion.p
                className="relative"
                variants={textVar}
                initial="initial"
                animate="animate"
              >
                WEB DESIGN
              </motion.p>
              <motion.p
                className="relative"
                variants={textVar}
                initial="initial"
                animate="animate"
              >
                WEB DEVELOPMENT
              </motion.p>
              <motion.p
                className="relative"
                variants={textVar}
                initial="initial"
                animate="animate"
              >
                SEARCH ENGINE OPTIMIZATION
              </motion.p>
            </div>

            <div className="text-[17px] max-sm:text-[15px] max-sm:self-start">
              <motion.p
                className="relative"
                variants={textVar}
                initial="initial"
                animate="animate"
              >
                BENGALURU, INDIA
              </motion.p>
            </div>
          </div>
        </div>
    </main>
  );
}
