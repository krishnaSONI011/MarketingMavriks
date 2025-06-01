import React from "react";
import { Cover } from "@/components/ui/cover";
import { Poppins, Montserrat, Lato } from "next/font/google";
import RevealText from "./home/animatedText";

const poppins = Poppins({
  subsets: ["latin"],
  weight: "600",
});
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: "400",
});
const lato = Lato({
  weight: "400",
  subsets: ["latin"],
});

export function CoverDemo() {
  return (
    <div className="mt-10 px-4 sm:px-6 md:px-10 max-w-7xl mx-auto">
      
        <h3
          className={`${montserrat.className} text-center md:text-left font-bold text-sm sm:text-base md:text-lg lg:text-xl text-[#07437D] my-3`}
        >
          TOP REVIEWED AGENCY IN THE INDIA | NO STRINGS ATTACHED AUDIT
        </h3>
     

      
        <h1
          className={`${poppins.className} antialiased text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-800 dark:via-white dark:to-white text-center md:text-left`}
        >
          <span>
            Marketing{" "}
            <span className="text-[#C20000]">Mavricks</span>
          </span>{" "}
          {/* <Cover>Creative Agency</Cover> */}
          Marketing Agency
        </h1>
     

      <p
        className={`${lato.className} mt-5 text-sm sm:text-base md:text-lg text-center md:text-justify max-w-3xl `}
      >
        After thousands of audits, we’ve found that 76% of marketing spend goes
        to waste. We’ll show you where yours is leaking—and how to fix it fast.
      </p>

      <div className="mt-6 text-center md:text-left">
        <button className="px-4 py-2 rounded-md border border-[#c20000] bg-white text-[#c20000] text-base sm:text-lg md:text-xl font-semibold hover:shadow-[4px_4px_0px_0px_rgba(194,0,0)] transition duration-200">
          Know More About Us
        </button>
      </div>
    </div>
  );
}
