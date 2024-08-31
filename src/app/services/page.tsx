"use client";

import TransitionPage from "@/components/transitionPage";
import {
  motion,
  cubicBezier,
  useScroll,
  useTransform,
} from "framer-motion";
import { useRef } from "react";
import Expand from "@/components/Expand";

export default function Services() {
  const initialVar = {
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
      },
    },
  };
  const ref = useRef(null);
  const devref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref, 
    offset: ["start end", "end start"],
  });

  const left = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);

  return (
    <div className="">
      <TransitionPage />
      <div className="relative h-screen w-full flex justify-center items-center">
        <motion.p
          className="relative text-[170px]"
          variants={initialVar}
          initial="initial"
          animate="whileInView"
        >
          SERVICES
        </motion.p>
        <motion.img
          className="absolute top-1/2 left-[28vw]"
          src="/assets/pf.png"
          alt="dragable element"
          drag
          dragTransition={{ bounceStiffness: 100, bounceDamping: 250 }}
        />
        <motion.img
          className="absolute top-[43%] right-[28vw]"
          src="/assets/leaf.png"
          alt="dragable element"
          drag
          dragTransition={{ bounceStiffness: 100, bounceDamping: 250 }}
        />
        <motion.img
          className="absolute top-[35%] left-[44vw]"
          src="/assets/dandelion.png"
          alt="dragable element"
          drag
          dragTransition={{ bounceStiffness: 100, bounceDamping: 250 }}
        />
      </div>
      {/* WEB DESIGN */}
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
      <div className="relative flex w-full bg-primary justify-between items-center py-14">
        <div className="sticky top-0 left-0 h-full w-[30vw] px-4">
          <motion.p
            variants={textVar}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="relative font-bold text-[100px] leading-none mix-blend-difference"
          >
            WEB DESIGN
          </motion.p>
        </div>
        <div className="w-[70vw] px-8">
          <Expand
            heading={"RESPONSIVE DESIGN"}
            content={
              "We specialize in crafting responsive designs that ensure a seamless user experience on desktops, tablets, and smartphones alike. Our approach to responsive design goes beyond just resizing elements; we focus on creating intuitive, adaptable layouts that enhance usability and engagement. Whether your audience is browsing on a large screen or a mobile device, your website will be optimized to deliver a consistent, high-quality experience, keeping users connected to your brand anytime, anywhere."
            }
          />
          <Expand
            heading={"SITEMAP"}
            content={
              "A sitemap is the blueprint of your website, outlining its structure and ensuring that every page is easy to find and navigate. At FLNT, we create clear, organized sitemaps that guide users and search engines through your content, enhancing both user experience and SEO performance."
            }
          />
          <Expand
            heading={"WIREFRAMING"}
            content={
              "Wireframing is the foundation of a successful website, acting as a visual guide for layout and functionality. We use wireframes to map out the structure of your site, focusing on user flow and essential features. This step ensures that your website is intuitive, user-friendly, and aligned with your goals before we dive into design and development."
            }
          />
          <Expand
            heading={"UX WRITING"}
            content={
              "UX writing is the art of crafting clear and compelling text that guides users through your website. We focus on creating concise, user-friendly content that enhances navigation, builds trust, and drives action. Every word is carefully chosen to ensure your users have a seamless and engaging experience."
            }
          />
          <Expand
            heading={"UI DESIGN"}
            content={
              "UI design is all about creating visually appealing and intuitive interfaces that enhance user interaction. We design user interfaces that not only look stunning but also prioritize ease of use. By blending aesthetics with functionality, we ensure that every element on your website contributes to a seamless and enjoyable user experience."
            }
          />
        </div>
      </div>

      {/* WEB DEV */}

      <motion.div
        ref={devref}
        className="relative flex left-[-5%] w-[250vw] text-nowrap items-center gap-x-10 bg-secondary text-primary text-5xl"
        style={{ x: left }}
      >
        <p>WEB DEVELOPMENT</p>
        <p>CUSTOM DEVELOPMENT</p>
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
      <div className="relative flex w-full bg-primary justify-between items-center py-14">
        <div className="sticky top-0 left-0 h-full w-[30vw] px-4">
          <motion.p
            variants={textVar}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="relative font-bold text-[100px] leading-none mix-blend-difference"
          >
            WEB DESIGN
          </motion.p>
        </div>
        <div className="w-[70vw] px-8">
          <Expand
            heading={"RESPONSIVE DESIGN"}
            content={
              "We specialize in crafting responsive designs that ensure a seamless user experience on desktops, tablets, and smartphones alike. Our approach to responsive design goes beyond just resizing elements; we focus on creating intuitive, adaptable layouts that enhance usability and engagement. Whether your audience is browsing on a large screen or a mobile device, your website will be optimized to deliver a consistent, high-quality experience, keeping users connected to your brand anytime, anywhere."
            }
          />
          <Expand
            heading={"SITEMAP"}
            content={
              "A sitemap is the blueprint of your website, outlining its structure and ensuring that every page is easy to find and navigate. At FLNT, we create clear, organized sitemaps that guide users and search engines through your content, enhancing both user experience and SEO performance."
            }
          />
          <Expand
            heading={"WIREFRAMING"}
            content={
              "Wireframing is the foundation of a successful website, acting as a visual guide for layout and functionality. We use wireframes to map out the structure of your site, focusing on user flow and essential features. This step ensures that your website is intuitive, user-friendly, and aligned with your goals before we dive into design and development."
            }
          />
          <Expand
            heading={"UX WRITING"}
            content={
              "UX writing is the art of crafting clear and compelling text that guides users through your website. We focus on creating concise, user-friendly content that enhances navigation, builds trust, and drives action. Every word is carefully chosen to ensure your users have a seamless and engaging experience."
            }
          />
          <Expand
            heading={"UI DESIGN"}
            content={
              "UI design is all about creating visually appealing and intuitive interfaces that enhance user interaction. We design user interfaces that not only look stunning but also prioritize ease of use. By blending aesthetics with functionality, we ensure that every element on your website contributes to a seamless and enjoyable user experience."
            }
          />
        </div>
      </div>
    </div>
  );
}
