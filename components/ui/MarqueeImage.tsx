'use client'
import Image from "next/image";
import Marquee from "react-fast-marquee";

export default function MarqueeImage(){
    return(
        <div className="w-fit">

        
        <Marquee speed={200} autoFill >
           <Image src="/scroll.png" alt="Marquee Image" className="" height={6000} width={6000}/>
           <Image src="/scroll.png" alt="Marquee Image" className="" height={6000} width={6000}/>

        </Marquee>
        </div>
    )
}