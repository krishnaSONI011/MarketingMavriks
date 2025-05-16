
import { Poppins, Montserrat, Lato } from "next/font/google";

const poppins = Poppins({ subsets: ["latin"], weight: ["400","700"] });
const montserrat = Montserrat({ subsets: ["latin"], weight: ["600"] });
const lato = Lato({ subsets: ["latin"], weight: ["400"] });
export default function AboutusStory(){
    return(
        <>
        <div className="flex justify-between">
            <div className="w-1/2 flex justify-center items-center border-b-2 border-[#06437d]">
                <h3 className={`uppercase text-4xl font-bold ${poppins.className}`}>Results,not <span className="text-[#c20000]"> prophecies</span></h3>
            </div>
            <div className="bg-[#06437d] w-1/2 py-20">
                <h3 className={`${poppins.className} text-white text-3xl p-3`}>Driven by Data. Powered by Creativity.</h3>
                <p className={`${lato.className} text-white text-lg p-3 text-justify`}>
                We are a creative performance marketing agency that believes that a great ad always converts. We use data to make each creative decision and consumer intention is the center of our universe. It’s an approach that makes all our brands a conversion machine.


                </p>
            </div>
        </div>
        </>
    )
}