'use client'

import Link from "next/link";

export default function Home() {
  return (
    <main className="flex justify-center items-center gap-4 h-screen">
      <Link href={"/works"}>WORKS</Link>
      <Link href={"/services"}>SERVICES</Link>
    </main>
  );
}
