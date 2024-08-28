'use client'

import TransitionPage from "@/components/transitionPage";
import Link from "next/link";

export default function Works() {
  return (
    <div>
      <TransitionPage />
      This is Works Page
      <Link href={"/"}>HOME</Link>
    </div>
  );
}
