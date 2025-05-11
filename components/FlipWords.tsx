import { ContainerTextFlip } from "@/components/ui/container-text-flip";
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
export function ContainerTextFlipDemo() {
  return (
    <>
    <h1 className={`${poppins.className} text-3xl`}>
    We Help You In<ContainerTextFlip
      words={["Grow" , "Scale",  "Succeed",  "Dominate"]}
    />
    </h1>
    
    </>
    
  );
}
