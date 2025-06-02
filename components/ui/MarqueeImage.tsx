import Image from "next/image";
import Marquee from "react-fast-marquee";

export default function MarqueeImage(){
    return(
        <div className="w-fit">

        
        <Marquee speed={200} autoFill >
           <Image src="/dummy.png" alt="Marquee Image" className="" height={5000} width={5000}/>
           <Image src="/dummy.png" alt="Marquee Image" className="" height={5000} width={5000}/>

        </Marquee>
        </div>
    )
}