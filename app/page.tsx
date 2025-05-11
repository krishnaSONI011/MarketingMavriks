import Video from "@/components/home/HeroVideo";
import SecondSection from "@/components/home/SecondSection";
import { HeroParallaxDemo } from "@/components/home/ShowCase";
import { AnimatedPinDemo } from "@/components/home/Services";
import { TextRevealCardPreview } from "@/components/home/ServiesHeading";
import { HeroHighlightDemo } from "@/components/home/BgGood";


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
   <HeroParallaxDemo />
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


   {/* <HeroHighlightDemo /> */}
   </div> 
   </>
  );
}
