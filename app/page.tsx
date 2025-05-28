import Video from "@/components/home/HeroVideo";
import SecondSection from "@/components/home/SecondSection";
import { HeroParallaxDemo } from "@/components/home/ShowCase";
import { AnimatedPinDemo } from "@/components/home/Services";
import { TextRevealCardPreview } from "@/components/home/ServiesHeading";
import { FeaturesSectionDemo } from "@/components/ui/HeroSecondSecttion";

import { Poppins,Montserrat,Lato } from "next/font/google";
import { ContainerTextFlipDemo } from "@/components/FlipWords";
import { CardHoverEffectDemo } from "@/components/home/BoxLayout";
import { AnimatedTestimonialsDemo } from "@/components/home/Testimonial";
import OrbitalScroll from "@/components/home/someComponent";
import LastSection from "@/components/home/LastSection";
import MarqueeText from "@/components/ui/MarqueeText";
import MarqueeImage from "@/components/ui/MarqueeImage";
import { AppleCardsCarouselDemo } from "@/components/home/imagesSlider";
import HeroSection from "@/components/home/herosec2";
import AnimatedText from "@/components/home/animatedText";


const poppins = Poppins({
  subsets: ["latin"],
  weight:'600'
})
const montserrat = Montserrat({
  subsets: ["latin"],
  weight:'400'
})
const lato = Lato({
  weight:'400',
  subsets: ["latin"],
})

export default function Home() {
  
  const MarqueeHeading=[
    "CREATIVE MARKETING AGENCY." ,"PERFORMENCE MARKETING." ,"UI/UX." ,"BRANDING."
  ]
  return (
   <>
   <Video/>
   <div className=" ">
    
   <SecondSection />
   <div className="text-center">
        <h4 className={`${lato.className} text-[#07437D] text-xl mt-10`}>Unleashing digital solutions that power brands, drive results, and fuel long-term success.</h4>
        <ContainerTextFlipDemo/>
    </div>
    <CardHoverEffectDemo />
    <MarqueeText text={MarqueeHeading} />
    <MarqueeImage/>
   <div className="bg-gray-100 my-20">
  {/* Centered heading */}
  <div className="w-full mb-10">
    <div className="">
      {/* <TextRevealCardPreview /> */}
      <AppleCardsCarouselDemo />
    </div>
  </div>


  
  </div>
  <HeroSection />
    <HeroParallaxDemo />
    {/* <AnimatedTestimonialsDemo />
    <OrbitalScroll /> */}
   <LastSection />
   </div> 
   </>
  );
}
