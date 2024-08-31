'use client'

import Image from "next/image";
import NavbarItems from "./NavbarItems";
import Link from "next/link";

export default function Navbar () {
    return(
        <div className="w-full flex justify-between items-start p-4 fixed top-0 z-[1]">
            <Link href={"/"}><Image className="h-[40px] w-auto max-sm:h-[30px] mix-blend-difference" src={"/assets/FLNT.png"} height={100} width={200} alt="FLNT" /></Link>
            <NavbarItems />
        </div>
    )
}