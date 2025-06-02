// components/BlogGrid.tsx
import React from "react";
import { BlogCard } from "./BlogCard";
import { Poppins, Montserrat, Lato } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-poppins',
  weight: ['400', '700'],
});
const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '600'],
});
const lato = Lato({
  subsets: ['latin'],
  weight: ['400'],
});
const blogPosts = [
  {
    title: "How to Build a Blog with Next.js",
    description: "A step-by-step guide to building your own blog using Next.js and Tailwind CSS.",
    image: "/ser2.jpg",
    author: "John Doe",
    date: "May 30, 2025",
    slug: "build-blog-nextjs",
  },
  {
    title: "Responsive UI Design Tips",
    description: "Learn how to design a UI that looks great on all screen sizes.",
    image: "/ser3.jpg",
    author: "Jane Smith",
    date: "May 28, 2025",
    slug: "responsive-ui-design",
  },
  {
    title: "Responsive UI Design Tips",
    description: "Learn how to design a UI that looks great on all screen sizes.",
    image: "/ser.jpg",
    author: "Jane Smith",
    date: "May 28, 2025",
    slug: "responsive-ui-design",
  },
];

export const BlogGrid = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 my-10">
       <h3
          className={`${lato.className} antialiased text-center text-lg md:text-xl my-4 text-[#07437D]`}
        >
          Learn, grow, and stay ahead with our expert blog content.
        </h3>
        <h2
          className={`text-center text-xl md:text-3xl ${poppins.className} font-bold`}
        >
          Ideas  <span className="text-[#c20000]">Worth</span>Reading
        </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
        {blogPosts.map((post, index) => (
          <BlogCard key={index} {...post} />
        ))}
      </div>
    </div>
  );
};
