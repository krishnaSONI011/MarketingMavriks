import { ContainerTextFlip } from "@/components/ui/container-text-flip";
import { Poppins,Montserrat,Lato } from "next/font/google";

import { FaLinkedin } from "react-icons/fa";
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
export function ContainerTextFlipDemo() {
  return (
    <>
    
    <h1 className={`${poppins.className} text-3xl flex items-center justify-center`}>
    We Help You <span className="ml-3 "><FaLinkedin className="text-blue-600"/></span>

    <ContainerTextFlip
      words={["Grow" , "Scale",  "Succeed",  "Dominate"]}
    />
    </h1>
    
    </>
    
  );
}
