"use client";

import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import { TextRevealCardPreview } from "./ServiesHeading";

export function AppleCardsCarouselDemo() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="w-full h-full py-10">
      <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
         <TextRevealCardPreview />
      </h2>
      <Carousel items={cards} />
    </div>
  );
}

const DummyContent = () => {
  return (
    <>
      {[...new Array(3).fill(1)].map((_, index) => {
        return (
          <div
            key={"dummy-content" + index}
            className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
          >
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <span className="font-bold text-neutral-700 dark:text-neutral-200">
                The first rule of Apple club is that you boast about Apple club.
              </span>{" "}
              Keep a journal, quickly jot down a grocery list, and take amazing
              class notes. Want to convert those notes to text? No problem.
              Langotiya jeetu ka mara hua yaar is ready to capture every
              thought.
            </p>
            <img
              src="https://assets.aceternity.com/macbook.png"
              alt="Macbook mockup from Aceternity UI"
              height="500"
              width="500"
              className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
            />
          </div>
        );
      })}
    </>
  );
};


const data = [
    {
      category: "Content Development",
      title: "Craft compelling content that resonates with your audience.",
      src: "https://images.unsplash.com/photo-1522199710521-72d69614c702?q=80&w=3000&auto=format&fit=crop",
      content: <DummyContent />,
    },
    {
      category: "E-Commerce Solutions",
      title: "Build seamless online shopping experiences.",
      src: "https://images.unsplash.com/photo-1519337265831-281ec6cc8514?q=80&w=3000&auto=format&fit=crop",
      content: <DummyContent />,
    },
    {
      category: "Digital Marketing",
      title: "Boost your brand's online presence effectively.",
      src: "/ser.jpg",
      content: <DummyContent />,
    },
    {
        category: "ATL Advertising",
        title: "Reach a wider audience through mass media.",
        src: "/ser3.jpg",
        content: <DummyContent />,
      },
      {
        category: "Content Marketing",
        title: "Engage customers with valuable content.",
        src: "ser2.jpg",
        content: <DummyContent />,
      },
      {
        category: "Brand Strategy & Consulting",
        title: "Develop a strong and consistent brand identity.",
        src: "https://images.unsplash.com/photo-1508830524289-0adcbe822b40?q=80&w=3000&auto=format&fit=crop",
        content: <DummyContent />,
      },
  ];
      