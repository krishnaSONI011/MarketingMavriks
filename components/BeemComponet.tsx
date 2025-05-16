import React from "react";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";

interface TitleData{
  title: string,
  subTitle:string
}
export function BackgroundBeamsWithCollisionDemo({title,subTitle}: TitleData) {
  return (
    <BackgroundBeamsWithCollision>
      <h2 className="text-2xl relative z-20 md:text-4xl lg:text-7xl font-bold text-center text-black dark:text-white font-sans tracking-tight">
        {title} {" "}<br/>
        <div className="relative mx-auto inline-block w-max [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))]">
          {/* <div className="absolute left-0 top-[1px] bg-clip-text bg-no-repeat  bg-gradient-to-r py-4 text-[#c20000] [text-shadow:0_0_rgba(0,0,0,0.1)]">
            <span className="">KHATU DESIGN</span>
          </div> */}
          <div className="relative bg-clip-text  bg-no-repeat bg-gradient-to-r text-[#c20000]">
            <span className="">{subTitle}</span>
          </div>
        </div>
      </h2>
    </BackgroundBeamsWithCollision>
  );
}
