'use client'

import Image from 'next/image';
import { useState, useEffect } from 'react';
import { Lato } from 'next/font/google';
import axios from 'axios';
import Load from './load';
import Link from 'next/link';



const lato = Lato({
  subsets: ['latin'],
  weight: ['400'],
});

interface BlogPost {
  id: number;
  title: {
    rendered: string;
  };
  _embedded?: {
    'wp:featuredmedia'?: {
      source_url: string;
    }[];
  };
  slug:string
}

export default function BigBlogLayout() {
  const [blogData, setBlogData] = useState<BlogPost | null>(null);

  useEffect(() => {
    async function getBlogData() {
      try {
        const response = await axios.get<BlogPost[]>(
          'https://marketingmavricks.com/wp-json/wp/v2/posts?per_page=1&_embed'
        );
        setBlogData(response.data[0]); // get the first post
      } catch (err) {
        console.log(err);
      }
    }

    getBlogData();
  }, []);

  if (!blogData) return <><Load /> </>;

  const featuredImage = blogData._embedded?.['wp:featuredmedia']?.[0]?.source_url;

  return (
    <Link href={`/blogs/${blogData.slug}`}>
    <div className="w-fit">
      
      <div>
        <Image
          src={featuredImage || '/app-delivery.jpg'} // fallback image
          alt={blogData.title.rendered}
          height={400}
          width={700}
          className="shadow"
        />
      </div>
      <div>
        <h2
          className={`${lato.className} antialiased text-2xl mt-5`}
          dangerouslySetInnerHTML={{ __html: blogData.title.rendered }}
        />
      </div>
      <div className={`flex gap-2 justify-end my-4 ${lato.className}`}>
        <span className="text-lg bg-[#c20000] text-white p-2 rounded">27 May, 25</span>
        <span className="text-lg bg-[#06437d] text-white p-2 rounded">6 Min Read</span>
      </div>
     
    </div> </Link>
   
  );
}
