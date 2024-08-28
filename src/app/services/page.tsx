"use client";

import Link from "next/link";
import TransitionPage from "@/components/transitionPage";

export default function Services() {
  return (
    <div>
      <TransitionPage />
      This is Services Page
      <Link href={"/"}>HOME</Link>
    </div>
  );
}
