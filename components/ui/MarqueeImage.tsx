import Image from "next/image";
import Marquee from "react-fast-marquee";

export default function MarqueeImage(){
    return(
        <Marquee speed={200} autoFill >
           <img src="/dummy.png" alt="Marquee Image" className="w-[6000px]"/>
           <img src="/dummy.png" alt="Marquee Image" className="w-[6000px]"/>

        </Marquee>
    )
}