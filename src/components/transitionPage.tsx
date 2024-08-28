import { cubicBezier, motion } from "framer-motion";

export default function TransitionPage() {
  return (
    <motion.div
      className="z-10 h-screen w-screen absolute bg-[#e0e1dd] top-0 left-0 flex flex-row justify-center items-center"
      initial={{ top: 0, opacity: 1 }}
      animate={{ top: "-100%", opacity: 0 }}
      transition={{ delay: 1, ease: cubicBezier(0.65, 0, 0.35, 1) }}
    >
      <motion.div
        className="bg-secondary h-screen w-[25%] relative top-0"
        initial={{ top: "100%" }}
        animate={{ top: "-100%" }}
        transition={{ duration: 0.75, delay: 0.1, ease: cubicBezier(0.65, 0, 0.35, 1) }}
      ></motion.div>
      <motion.div
        className="bg-secondary h-screen w-[25%] relative top-0"
        initial={{ top: "100%" }}
        animate={{ top: "-100%" }}
        transition={{ duration: 0.75, delay: 0.15, ease: cubicBezier(0.65, 0, 0.35, 1) }}
      ></motion.div>
      <motion.div
        className="bg-secondary h-screen w-[25%] relative top-0"
        initial={{ top: "100%" }}
        animate={{ top: "-100%" }}
        transition={{ duration: 0.75, delay: 0.2, ease: cubicBezier(0.65, 0, 0.35, 1) }}
      ></motion.div>
      <motion.div
        className="bg-secondary h-screen w-[25%] relative top-0"
        initial={{ top: "100%" }}
        animate={{ top: "-100%" }}
        transition={{ duration: 0.75, delay: 0.25,ease: cubicBezier(0.65, 0, 0.35, 1) }}
      ></motion.div>
    </motion.div>
  );
}
