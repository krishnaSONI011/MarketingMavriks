
import { Poppins, Montserrat, Lato } from "next/font/google";

const poppins = Poppins({ subsets: ["latin"], weight: ["400","700"] });
const montserrat = Montserrat({ subsets: ["latin"], weight: ["600"] });
const lato = Lato({ subsets: ["latin"], weight: ["400"] });
export default function AboutusStory(){
    return(
        <>
        <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-1/2 flex justify-center items-center border-b-2 border-[#06437d] py-10 md:py-0">
                <h3 className={`uppercase text-2xl md:text-4xl font-bold text-center px-4 ${poppins.className}`}>Results,not <span className="text-[#c20000]"> prophecies</span></h3>
            </div>
            <div className="bg-[#06437d]  w-full md:w-1/2 py-10 md:py-20">
                <h3 className={`${poppins.className} text-white text-xl md:text-3xl p-3 text-center md:text-left`}>Driven by Data. Powered by Creativity.</h3>
                <p className={`${lato.className} text-white text-base md:text-lg p-3 text-justify`}>
                We are a creative performance marketing agency that believes that a great ad always converts. We use data to make each creative decision and consumer intention is the center of our universe. It’s an approach that makes all our brands a conversion machine.


                </p>
            </div>
        </div>
        </>
    )
}