"use client";
import { motion } from "motion/react";
import { HeroHighlight, Highlight } from "../ui/hero-highlight";
import { TextRevealCardPreview } from "./ServiesHeading";
import { AnimatedPinDemo } from "./Services";

export function HeroHighlightDemo() {
    const serviesData = [
        {title:"Content Development" , description:"We create compelling content that engages and converts, including blog writing, website copy, video scripts, and SEO-driven articles.",image:"/s1.jpg" ,hoverTitle:"/Content-development"},
        {title:"E-Commerce Solutions",description:"We build stunning, high-converting shopify e-commerce websites with seamless user experiences, designed to boost sales and customer loyalty.",image:"/s2.jpg",hoverTitle:"/Content-development"},
        {title:"Digital Marketing",description:"SEO, PPC, social media ads, and performance marketing – we drive measurable results that grow your brand online.",image:"/s3.jpg",hoverTitle:"/Content-development"},
        {title:"Digital Marketing",description:"SEO, PPC, social media ads, and performance marketing – we drive measurable results that grow your brand online.",image:"/s3.jpg",hoverTitle:"/Content-development"}
      ]
  return (
    <HeroHighlight className="h-[1000px]">
      <motion.div
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: [20, -5, 0],
        }}
        transition={{
          duration: 0.5,
          ease: [0.4, 0.0, 0.2, 1],
        }}
        className=""
      >
        <div className=" flex flex-wrap ">
            <div className="w-full">
              <div className="mx-10">
              <TextRevealCardPreview />
              </div>
              
            </div>
            {
              serviesData.map((items,index)=>(
                 <AnimatedPinDemo title={items.title} description={items.description} image={items.image} hoverTitle={items.hoverTitle}/>
              ))
            }
          
           
           </div>
      </motion.div>
    </HeroHighlight>
  );
}
