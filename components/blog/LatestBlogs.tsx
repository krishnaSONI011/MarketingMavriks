'use client';

import BigBlogLayout from "@/components/blog/BigBlogLayout";
import SideMiniList from "@/components/blog/SideMiniList";
import { Poppins } from "next/font/google";
import { useEffect, useState } from "react";
import axios from "axios";
import LoadForSide from "./LoadForSide";

const poppins = Poppins({
  subsets: ['latin'],
  weight: ["400"]
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
}

export default function LatestBlogs() {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getBlogPosts() {
      try {
        const response = await axios.get(
          'https://marketingmavricks.com/wp-json/wp/v2/posts?per_page=4&offset=1&_embed'
        );
        setBlogPosts(response.data);
      } catch (err) {
        console.error("Error fetching blog posts:", err);
      } finally {
        setLoading(false);
      }
    }

    getBlogPosts();
  }, []);

  if (loading) return( <>
  <div className="flex flex-col">
    <LoadForSide />
    <LoadForSide />
    <LoadForSide />
    <LoadForSide />
  </div>
    
  </>)

  return (
    
        <div>
          {blogPosts.map((blog, index) => (
            <SideMiniList key={index} title={blog.title.rendered} image={blog._embedded?.["wp:featuredmedia"]?.[0]?.source_url ?? '/blog-post-2.jpg'}/>
          ))}
        </div>
     
    
  );
}
