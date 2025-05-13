import { Poppins,Lato } from "next/font/google";
import Image from "next/image";



const poppins  =Poppins({
    subsets: ['latin'],
    weight:"400"
})
const lato = Lato({
    subsets: ['latin'],
    weight:"400"
})

export default function BrandValueAndAbout(){
    return(
        <>
        <div className=" flex ">
            <div className="w-1/2">

                <img src={'/4.png'} alt="Khatu Design" className="full" />  
            </div>
        {/* <Image src="/4.png" alt="Brand Value and About" width={} height={192}/> */}
        <div className="bg-[#fff2f5] px-10 w-1/2 ml-0.5 flex flex-col justify-center">
            <h2 className={`${poppins.className} text-black text-3xl `}>Khatu Design: 1,200+ Monthly Orders with Bold Fashion & Smart Marketing</h2>
            <p className={`${lato.className} text-black mt-5 text-justify`}>
            Khatu Design, a fashion label rooted in ethnic expression and modern silhouettes, found itself at a pivotal moment. Known for its bold prints, handcrafted details, and cultural roots, the brand had all the makings of a breakout success — but struggled to scale online. With an average selling price of ₹499 and a low-margin category, the challenge wasn’t just about visibility — it was about positioning, retention, and storytelling that sells.
            </p>
        </div>
        </div>
        
        </>
    )
}