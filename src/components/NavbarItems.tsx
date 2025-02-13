import Link from "next/link";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { useState } from "react";

export default function NavbarItems() {
  const [menu, setMenu] = useState(true);
  const [flex, setFlex] = useState("")
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 20) {
      setMenu(false);
      setFlex("flex justify-between gap-4 items-center")
    } else {
      setMenu(true);
      setFlex("")
    }
  });

  return (
    <div className="flex gap-9 text-[15px] font-semibold mix-blend-difference">
      <ul className={flex}>
        <li>
          <Link href={"/"}>HOME</Link>
        </li>
        <li>
          <Link href={"/works"}>WORKS</Link>
        </li>
        <li>
          <Link href={"/services"}>SERVICES</Link>
        </li>
        <li>
          <Link href={"/contact"}>CONTACT US</Link>
        </li>
      </ul>
      {menu ? (
        <>
          <ul>
            <li>
              <Link href={"/"}>EMAIL</Link>
            </li>
            <li>
              <Link href={"/"}>TWITTER</Link>
            </li>
            <li>
              <Link href={"/"}>LINKEDIN</Link>
            </li>
          </ul>
          <button className="relative border-2 h-11 px-4 group overflow-hidden">
            <p className="group-hover:text-primary transition-all">
              BOOK A CALL
            </p>
            <div className="absolute top-[100%] left-0 bg-secondary h-full w-full group-hover:top-0 transition-all -z-10"></div>
          </button>{" "}
        </>
      ) : (
        ""
      )}
    </div>
  );
}
