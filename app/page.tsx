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
  const serviesData = [
    {title:"Content Development" , description:"We create compelling content that engages and converts, including blog writing, website copy, video scripts, and SEO-driven articles.",image:"/s1.jpg" ,hoverTitle:"/Content-development"},
    {title:"E-Commerce Solutions",description:"We build stunning, high-converting shopify e-commerce websites with seamless user experiences, designed to boost sales and customer loyalty.",image:"/s2.jpg",hoverTitle:"/Content-development"},
    {title:"Digital Marketing",description:"SEO, PPC, social media ads, and performance marketing – we drive measurable results that grow your brand online.",image:"/s3.jpg",hoverTitle:"/Content-development"},
    {title:"Digital Marketing",description:"SEO, PPC, social media ads, and performance marketing – we drive measurable results that grow your brand online.",image:"/s3.jpg",hoverTitle:"/Content-development"}
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
   <div className="bg-gray-100 my-20">
  {/* Centered heading */}
  <div className="w-full mb-10">
    <div className="mx-10">
      <TextRevealCardPreview />
    </div>
  </div>

  {/* 2 per row responsive layout */}
  <div className="grid grid-cols-1 sm:grid-cols-2  ">
    {serviesData.map((items, index) => (
      <div key={index}>
        <AnimatedPinDemo
          title={items.title}
          description={items.description}
          image={items.image}
          hoverTitle={items.hoverTitle}
          />
      </div>
    ))}
  </div>
</div>
    <HeroParallaxDemo />
    {/* <AnimatedTestimonialsDemo />
    <OrbitalScroll /> */}
   <LastSection />
   </div> 
   </>
  );
}
