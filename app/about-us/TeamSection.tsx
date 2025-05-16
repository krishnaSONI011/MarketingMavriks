import { Poppins, Montserrat, Lato } from "next/font/google";
import TeamSectionD from "./HoverTema";

const poppins = Poppins({ subsets: ["latin"], weight: ["400","700"] });
const montserrat = Montserrat({ subsets: ["latin"], weight: ["600"] });
const lato = Lato({ subsets: ["latin"], weight: ["400"] });

export default function TeamSection(){
    return(
        <>
        <div>
            <h2 className={`${poppins.className} text-3xl font-bold text-center uppercase`}>Meet the <span className="text-[#c20000]">Minds</span>  that Move Us</h2>
            <TeamSectionD />
        </div>
        </>
    )
}