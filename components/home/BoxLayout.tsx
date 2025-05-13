'use client'

import { HoverEffect } from "../ui/card-hover-effect";

export function CardHoverEffectDemo() {
  return (
    <div className="mx-auto px-8">
      <HoverEffect items={projects} />
    </div>
  );
}

export const projects = [
  {
    title: "High-Impact Branding",
    description:
      "Crafting unforgettable brand identities that resonate and convert.",
    link: "#",
  },
  {
    title: "Next-Gen Web Design",
    description:
      "Building fast, modern, and visually stunning websites that drive results.",
    link: "#",
  },
  {
    title: "SEO & Growth Strategy",
    description:
      "Dominating search engines and turning traffic into loyal customers.",
    link: "#",
  },
  {
    title: "Social Media Magic",
    description:
      "Creating viral content and engagement that builds lasting communities.",
    link: "#",
  },
  {
    title: "E-commerce Excellence",
    description:
      "Scaling online stores with high-converting design and seamless UX.",
    link: "#",
  },
  {
    title: "Creative Copywriting",
    description:
      "Words that sell, stories that stick — we bring voice to your vision.",
    link: "#",
  },
];
