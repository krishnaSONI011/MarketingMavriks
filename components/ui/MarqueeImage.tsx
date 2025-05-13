import Image from "next/image";
import Marquee from "react-fast-marquee";

export default function MarqueeImage(){
    return(
        <div className="w-fit">

        
        <Marquee speed={200} autoFill >
           <img src="/dummy.png" alt="Marquee Image" className="h-[400px] md:h-[500px] w-auto object-contain"/>
           <img src="/dummy.png" alt="Marquee Image" className="h-[400px] md:h-[500px] w-auto object-contain"/>

        </Marquee>
        </div>
    )
}