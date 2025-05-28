import Image from "next/image"
import { Poppins,Lato,Montserrat } from "next/font/google"


const lato = Lato({
    subsets: ['latin'],
    weight:["400"]
})
export default function DownSectionWithPageIhnation(){
    return(
        <>
        <div className="w-92">
                    <div className="w-full">
                        <Image src={'/blog-post-2.jpg'} alt="dummy" height={400} width={400} className="shadow"/>
                    </div>
                    <div className="w-">
                        <h2 className={`${lato.className} antialiased text-2xl mt-5`}>
                        Food Delivery App Development | On Demand Due To COVID-19
                        </h2>
                    </div>
                    <div className={`flex gap-2 justify-end my-4 ${lato.className}`}>
                        <span className="text-lg bg-[#c20000] text-white p-2 rounded">27 May ,25</span><span className="text-lg bg-[#06437d] text-white p-2 rounded">6 Min Read</span>
        
                    </div>
                </div>
        </>
    )
}