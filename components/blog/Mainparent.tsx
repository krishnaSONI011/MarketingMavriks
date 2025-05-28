
import { Poppins } from "next/font/google";
import BigBlogLayout from "./BigBlogLayout";
import LatestBlogs from "./LatestBlogs";
const poppins = Poppins({
    subsets: ['latin'],
    weight: ["400"]
  });
  
export default function Mainparent(){
    return(
        <>
         <div>
              {/* top title */}
              <h1 className={`${poppins.className} text-3xl border-b p-3`}>
                Latest Blog Post
              </h1>
        
              {/* blog list */}
              <div className="flex gap-4 p-4">
                <BigBlogLayout />
                <LatestBlogs />
                </div>
                </div>
        </>
    )
}