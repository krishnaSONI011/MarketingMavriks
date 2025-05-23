import Marquee from "react-fast-marquee";
import { Poppins } from "next/font/google";

interface MarqueeText{
    text:string[]
}
const poppins = Poppins({
    weight:'400',
    subsets: ['latin']
})
export default function MarqueeText({text}:MarqueeText){
    return(
        <>
        <Marquee speed={50}  pauseOnHover={true}  autoFill className="bg-[#07437D] text-white py-4" direction="right">
        {
            text.map((heading,index)=>(
               <p key={index} className={`text-4xl mx-3 ${poppins.className}`}>{heading}</p>
            ))  
        }
       </Marquee>
        </>
    )
}