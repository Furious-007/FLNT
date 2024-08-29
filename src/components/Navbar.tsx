import Image from "next/image";
import NavbarItems from "./NavbarItems";
import Link from "next/link";

export default function Navbar () {
    return(
        <div className="w-full flex justify-between items-start p-4">
            <Link href={"/"}><Image className="h-[40px] w-auto" src={"/assets/FLNT.png"} height={100} width={200} alt="FLNT" /></Link>
            <NavbarItems />
        </div>
    )
}