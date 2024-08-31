"use client";

import Lenis from "lenis";

export default function LenisConfig() {
  const lenis = new Lenis();

  function raf(time: any) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);
  return(
    <></>
  )
}