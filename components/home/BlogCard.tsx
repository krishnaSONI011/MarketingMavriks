// components/BlogCard.tsx
"use client";

import Image from "next/image";
import React from "react";

interface BlogCardProps {
  title: string;
  description: string;
  image: string;
  author: string;
  date: string;
  slug?: string; // Optional if you want to link to blog detail page
}

export const BlogCard = ({
  title,
  description,
  image,
  author,
  date,
  slug,
}: BlogCardProps) => {
  return (
    <div className="w-full max-w-md rounded-xl overflow-hidden shadow-md bg-white dark:bg-neutral-900 transition hover:shadow-lg">
      <div className="relative h-48 md:h-64 w-full">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>
      <div className="p-4 flex flex-col gap-2">
        <h2 className="text-xl font-bold text-gray-800 dark:text-white">
          {title}
        </h2>
        <p className="text-sm text-gray-600 dark:text-gray-300">{description}</p>
        <div className="text-xs text-gray-500 dark:text-gray-400 mt-2">
          By {author} • {date}
        </div>
        {slug && (
            <div className="flex justify-between">

            
<button className=" px-4 py-2 rounded-md border border-[#c20000] bg-white text-[#c20000] text-xl font-semibold hover:shadow-[4px_4px_0px_0px_rgba(194,0,0)] transition duration-200 ">
             Read More 
      </button>
      <button className="border px-4 py-2 rounded border-[#07437D] text-[#07437D] font-bold">
         6 min read
      </button>
          </div>
        )}
      </div>
    </div>
  );
};
