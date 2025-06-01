"use client";
import React from "react";

import { Poppins,Montserrat,Lato } from "next/font/google";



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
export function TextRevealCardPreview() {
  return (
    <div className="flex flex-col">
      
        <h3 className={`${lato.className} antialiased text-center text-lg md:text-xl my-4 text-[#07437D]`}>We combine creativity, technology, and strategy to deliver measurable outcomes.</h3>
        <h2 className={`text-center text-xl md:text-3xl ${poppins.className}`}>
        Solutions That <span className="text-[#c20000]">Drive</span>  Growth
        </h2>
      {/* <TextRevealCard
        text="You know the business"
        revealText="I know the chemistry "
      >
        
      </TextRevealCard> */}
    </div>
  );
}
