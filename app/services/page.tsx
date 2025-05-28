'use client'

import { FiBarChart, FiBell, FiDollarSign, FiPlay } from "react-icons/fi";
import { AnimatePresence, motion } from "framer-motion";
import { useWindowSize } from "@/lib/useWindowSize";
import { useState } from "react";
import { BackgroundBeamsWithCollisionDemo } from "@/components/BeemComponet";
import { SomethingAmazing } from "./somthingAmazing";
import MarqueeText from "@/components/ui/MarqueeText";
import { Poppins , Lato } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400","700"],
})
const lato = Lato({
  subsets: ["latin"],
  weight: ["400","700"],
})

const VerticalAccordion = () => {
  const [open, setOpen] = useState(items[0].id);
  const MarqueeHeading=[
    "CREATIVE MARKETING AGENCY." ,"PERFORMENCE MARKETING." ,"UI/UX." ,"BRANDING."
  ]
  
  return (
    <>
    <BackgroundBeamsWithCollisionDemo title="We Don’t Just Market" subTitle="We Make Brands Matter" />
    <MarqueeText text={MarqueeHeading}/>
    {/* servies section */}
    <div className="flex justify-around mt-10">

      <div className="flex justify-center items-center">
        <h1 className={`${poppins.className} text-4xl font-bold uppercase`}>
        Services <span className="text-[#06437d]">That </span> Drive <span className="text-[#c20000]">Success</span>
      </h1> 
      </div>
      <div className="w-1/2">
        {/* <p className={`${lato.className} text-lg text-justify`}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio vitae neque beatae fugit accusamus nesciunt incidunt porro ratione odio, sunt amet totam fuga architecto doloremque harum explicabo at magni aut.
        </p> */}
         <section className="p-4 ">
      <div className="flex flex-col lg:flex-row h-fit lg:h-[450px] w-full max-w-6xl mx-auto shadow overflow-hidden">
        {items.map((item) => {
          return (
            <Panel
              key={item.id}
              open={open}
              setOpen={setOpen}
              id={item.id}
              Icon={item.Icon}
              title={item.title}
              imgSrc={item.imgSrc}
              description={item.description}
            />
          );
        })}
      </div>
          </section>
      </div>
      
    </div>
    <img src="/marketing-images.jpg" alt="marketing images" className="w-full`"/>
    <SomethingAmazing />
    
    </>
  );
};
interface PanelProps {
    open: number,
    setOpen: (id: number) => void,
    id: number,
    Icon: any,
    title: string,
    imgSrc: string,
    description: string
    
}
const Panel = ({ open, setOpen, id, Icon, title, imgSrc, description } : PanelProps) => {
  const { width } = useWindowSize();
  const isOpen = open === id;

  return (
    <>
      <button
        className="bg-white hover:bg-slate-50 transition-colors p-3 border-r-[1px] border-b-[1px] border-slate-200 flex flex-row-reverse lg:flex-col justify-end items-center gap-4 relative group"
        onClick={() => setOpen(id)}
      >
        <span
          style={{
            writingMode: "vertical-lr",
          }}
          className="hidden lg:block text-xl font-light rotate-180"
        >
          {title}
        </span>
        <span className="block lg:hidden text-xl font-light">{title}</span>
        <div className="w-6 lg:w-full aspect-square bg-[#c20000] text-white grid place-items-center">
          <Icon />
        </div>
        <span className="w-4 h-4 bg-white group-hover:bg-slate-50 transition-colors border-r-[1px] border-b-[1px] lg:border-b-0 lg:border-t-[1px] border-slate-200 rotate-45 absolute bottom-0 lg:bottom-[50%] right-[50%] lg:right-0 translate-y-[50%] translate-x-[50%] z-20" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            key={`panel-${id}`}
            variants={width && width > 1024 ? panelVariants : panelVariantsSm}
            initial="closed"
            animate="open"
            exit="closed"
            style={{
              backgroundImage: `url(${imgSrc})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
            className="w-full h-full overflow-hidden relative bg-black flex items-end"
          >
            <motion.div
              variants={descriptionVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="px-4 py-2 bg-black/40 backdrop-blur-sm text-white"
            >
              <p>{description}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default VerticalAccordion;

const panelVariants = {
  open: {
    width: "100%",
    height: "100%",
  },
  closed: {
    width: "0%",
    height: "100%",
  },
};

const panelVariantsSm = {
  open: {
    width: "100%",
    height: "200px",
  },
  closed: {
    width: "100%",
    height: "0px",
  },
};

const descriptionVariants = {
  open: {
    opacity: 1,
    y: "0%",
    transition: {
      delay: 0.125,
    },
  },
  closed: { opacity: 0, y: "100%" },
};

const items = [
  {
    id: 1,
    title: "Content Development",
    Icon: FiDollarSign,
    imgSrc:
      "https://marketingmavricks.com/wp-content/uploads/2025/05/services-1.png",
    description:
      "We create compelling content that engages and converts, including blog writing, website copy, video scripts, and SEO-driven articles.",
  },
  {
    id: 2,
    title: "E-commerce Solution",
    Icon: FiPlay,
    imgSrc:
      "https://marketingmavricks.com/wp-content/uploads/2025/05/services-2.png",
    description:
      "We build stunning, high-converting shopify e-commerce websites with seamless user experiences, designed to boost sales and customer loyalty.",
  },
  {
    id: 3,
    title: "Digital Marketing",
    Icon: FiBell,
    imgSrc:
      "https://marketingmavricks.com/wp-content/uploads/2025/05/services-3.png",
    description:
      "SEO, PPC, social media ads, and performance marketing – we drive measurable results that grow your brand online.",
  },
  {
    id: 4,
    title: "ATL Advertising",
    Icon: FiBarChart,
    imgSrc:
      "https://marketingmavricks.com/wp-content/uploads/2025/05/services-4.png",
    description:
      "Create consistent impact and high recall by effectively reaching wider audiences through Television, Print, OOH & Cinema.",
  },
  {
    id: 5,
    title: "Content Marketing",
    Icon: FiBarChart,
    imgSrc:
      "https://marketingmavricks.com/wp-content/uploads/2025/05/services-5.png",
    description:
      "From social media campaigns to influencer collaborations and email marketing, we amplify your content for maximum reach and impact.",
  },
  {
    id: 6,
    title: "Brand Strategy & Consulting",
    Icon: FiBarChart,
    imgSrc:
      "https://marketingmavricks.com/wp-content/uploads/2025/05/services-6.png",
    description:
      "We help businesses refine their brand positioning, conduct market research, and develop strategies for long-term success.",
  },
];