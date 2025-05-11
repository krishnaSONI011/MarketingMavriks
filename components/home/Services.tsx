"use client";
import React from "react";
import { PinContainer } from "../ui/3d-pin";
import { Poppins,Montserrat,Lato } from "next/font/google";
import Image from "next/image";


const poppins = Poppins({
  subsets: ["latin"],
  weight:'600'
})
const montserrat = Montserrat({
  subsets: ["latin"],
  weight:'400'
})
const lato = Lato({
  weight:'400',
  subsets: ["latin"],
})
interface ServiesType{
    title: string;
    description: string;
    image:string,
    hoverTitle:string
    
}
export function AnimatedPinDemo({title,description,image,hoverTitle} : ServiesType) {
  return (
    <div className={`h-[25rem]  flex items-center justify-center ${poppins.className}`}>
      <PinContainer
        title={hoverTitle}
        href="#"
      >
        <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[30rem] h-[20rem] ">
          <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-[#c20000]">
           {title}
          </h3>
          <div className="text-base !m-0 !p-0 font-normal text-justify">
            <span className="text-slate-500 text-justify">
              {description}
            </span>
          </div>
          <div className="flex flex-1 w-full rounded-lg mt-4 " >
            <Image src={image}  alt="s-image" className="rounded-lg" height={200}
            width={500}/>
          </div>
        </div>
      </PinContainer>
    </div>
  );
}
