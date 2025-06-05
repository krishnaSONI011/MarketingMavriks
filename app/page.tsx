
import dynamic from 'next/dynamic';
import { Lato } from "next/font/google";
import SecondSection from "@/components/home/SecondSection";

import { ContainerTextFlipDemo } from '@/components/FlipWords';
import { CardHoverEffectDemo } from '@/components/home/BoxLayout';
import { Skeleton } from '@/components/Skeleton';
import HoverCards from '@/components/ImageHoverComponent';
import { BlogGrid } from '@/components/home/BlogGrid';
import { AnimatedTestimonialsDemo } from '@/components/home/Testimonial';
import { AppleCardsCarouselDemo } from '@/components/home/imagesSlider';
import { Metadata } from 'next';
export const metadata: Metadata = {
    description:"Marketing Mavricks is a top social media and performance marketing agency in Jaipur, helping local businesses grow with ROI-driven digital strategies.",
    keywords:['social media', 'performance marketing', 'agency', 'ROI-focused', 'shopify']
}




const Video = dynamic(
  () => import('@/components/home/HeroVideo'),{ loading:()=> <> <Skeleton className='w-full h-[90vh]' /></>}
);

const MarqueeImage = dynamic(() => import('@/components/ui/MarqueeImage'));
const MarqueeText = dynamic(() => import('@/components/ui/MarqueeText'))

const HeroSection = dynamic(() => import('@/components/home/herosec2'))
const lato = Lato({
  weight: '400',
  subsets: ["latin"],
});

export default function Home() {
  const MarqueeHeading = [
    "CREATIVE MARKETING AGENCY.",
    "PERFORMANCE MARKETING.",
    "UI/UX.",
    "BRANDING."
  ];

  return (
    <>
    <div className=''>
    <Video />

<div>
  <SecondSection />

  <div className="text-center">
    <h4 className={`${lato.className} text-[#07437D] text-sm md:text-xl mt-10`}>
    Powering Brands with Digital Solutions for Lasting Success
    </h4>
    <ContainerTextFlipDemo />
  </div>

  <CardHoverEffectDemo />
  <MarqueeText text={MarqueeHeading} />
  <MarqueeImage />

  <div className="bg-gray-100 my-20">
    <div className="w-full mb-10">
      <div>   
        <AppleCardsCarouselDemo />
      </div>
    </div>
  </div>
  <div className='mx-5 '>

<HoverCards />
  </div>
  {/* <HeroSection /> */}
  <AnimatedTestimonialsDemo />
  {/* <LastSection /> */}
  <BlogGrid />
</div>
    </div>
      
    </>
  );
}
