"use client";
import React from "react";
import {
  TextRevealCard,
  TextRevealCardDescription,
  TextRevealCardTitle,
} from "../ui/text-reveal-card";
import { Poppins,Montserrat,Lato } from "next/font/google";
import RevealText from "./animatedText";


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
      <RevealText color="#07437D">
        <h3 className={`${lato.className} antialiased text-2xl my-4 text-[#07437D]`}>Sometimes, you just need to see it.</h3></RevealText>
        <RevealText color="#c20000">
      <TextRevealCard
        text="You know the business"
        revealText="I know the chemistry "
      >
        
      </TextRevealCard></RevealText>
    </div>
  );
}
