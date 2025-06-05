'use client'
import dynamic from 'next/dynamic';
import { Lato } from "next/font/google";
import SecondSection from "@/components/home/SecondSection";
import LastSection from "@/components/home/LastSection";
import { ContainerTextFlipDemo } from '@/components/FlipWords';
import { CardHoverEffectDemo } from '@/components/home/BoxLayout';
import { Skeleton } from '@/components/Skeleton';
import HoverCards from '@/components/ImageHoverComponent';
import { BlogGrid } from '@/components/home/BlogGrid';
import { AnimatedTestimonialsDemo } from '@/components/home/Testimonial';





const Video = dynamic(
  () => import('@/components/home/HeroVideo'),{ loading:()=> <> <Skeleton className='w-full h-[90vh]' /></>}
);
const AppleCardsCarouselDemo = dynamic(() =>
  import('@/components/home/imagesSlider').then(mod => mod.AppleCardsCarouselDemo),{ssr:false});
const MarqueeImage = dynamic(() => import('@/components/ui/MarqueeImage'),{ssr:false});
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
