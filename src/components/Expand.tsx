import Image from "next/image";
import { useState } from "react";
interface props {
  heading: String,
  content: String
}

export default function Expand({ heading, content }: props) {

    const [expand, setExpand] = useState(false)
    const [rotate, setRotate] = useState('rotate-0')
    const handleExpand = () => {
        if (expand) {
            setExpand(false)
            setRotate('rotate-0')
        }
        else {
            setExpand(true)
            setRotate('rotate-45')
        }
    }

  return (
    <div className="flex flex-col justify-between gap-y-8 border-b-2 py-8">
      <span className="flex justify-between items-center">
        <span className="flex gap-4 items-center">
          <Image
            src={"/assets/star.png"}
            alt="STAR"
            height={40}
            width={50}
            className="h-[40px] w-auto"
          />{" "}
          <p className="font-semibold text-4xl">{heading}</p>
        </span>
        <Image
          src={"/assets/cross.png"}
          alt="Expand"
          height={36}
          width={36}
          className={`h-[30px] w-auto cursor-pointer transition-all ${rotate}`}
          onClick={handleExpand}
        />
      </span>
      {expand ? 
      <div className="text-[18px] font-medium">
        {content}
      </div> : ""}
    </div>
  );
}
