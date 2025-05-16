import { DraggableCardDemo } from "@/components/Dragger";
import { Poppins, Montserrat, Lato } from "next/font/google";

const poppins = Poppins({ subsets: ["latin"], weight: ["400","700"] });
const montserrat = Montserrat({ subsets: ["latin"], weight: ["600"] });
const lato = Lato({ subsets: ["latin"], weight: ["400"] });

export default function DraggerCardSection(){
    return(
        <>
        <div className="flex">
        <div className="w-1/2">

            <DraggableCardDemo />
        </div>
        <div className={`w-1/2 p-3 px-10 flex flex-col justify-center items-center uppercase ${poppins.className} text-2xl font-bold`}>
            <h2>We make it easy to
find <span className="text-[#c20000]">the right partners </span> 
to scale <span className="text-[#c20000]">your business</span></h2>
<p className={`${lato.className} text-base text-justify mt-10`}>Marketing Mavricks is a dynamic marketing solutions provider dedicated to crafting innovative strategies that help brands stand out. With expertise spanning content creation, digital marketing, e-commerce, and advertising, we empower businesses to reach new heights.</p>
        </div>
        </div>
        </>
    )
}