import React from "react";
import { Cover } from "@/components/ui/cover";
import { Poppins,Montserrat,Lato } from "next/font/google";
import RevealText from "./home/animatedText";


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
interface HeadindData{
  title: string,
  subtitle: string;
}
export function CoverDemo() {
  return (
    <div className="mt-10">
      <RevealText color="#06437d">
      <h3 className={`${montserrat.className} font-bold text-xl text-[#07437D] my-5`}>TOP REVIEWED AGENCY IN THE INDIA | NO STRINGS ATTACHED AUDIT</h3>
      </RevealText>
      <RevealText color="#c20000">
      <h1 className={`${poppins.className} antialiased text-4xl md:text-4xl lg:text-4xl font-semibold max-w-7xl mx-auto   relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-800 dark:via-white dark:to-white`}>
        <span className=" ">Marketing <span className="text-[#C20000]">Mavricks</span></span> <Cover className="">Creative Agency</Cover>
      </h1></RevealText>
      <p className={`${lato.className} text-justify w-[80%] text-lg mt-6`}>After thousands of audits, we’ve found that 76% of marketing spend goes to waste. We’ll show you where yours is leaking—and how to fix it fast.</p>
      <div className="mt-6">
        <button className="px-4 py-2 rounded-md border border-[#c20000] bg-white text-[#c20000] text-xl font-semibold hover:shadow-[4px_4px_0px_0px_rgba(194,0,0)] transition duration-200">
      Know More About Us
      </button>
      </div>
      
    </div>
  );
}
