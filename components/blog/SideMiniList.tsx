'use client';
import { Lato } from "next/font/google";
import Image from "next/image";

const lato = Lato({
  subsets: ["latin"],
  weight: '400'
});

interface blogdata {
  title: string;
  image: string;
}

export default function SideMiniList({ title, image }: blogdata) {
  return (
    <div>
      <div className="flex gap-2 mt-5">
        {/* Blog image */}
        <div>
          <Image src={image} alt="blog image" height={200} width={180} />
        </div>
        <div>
          <h2 className={`${lato.className} antialiased text-xl`}>
            {title}
          </h2>
          <div className={`flex gap-2 justify-start my-4 ${lato.className}`}>
            <span className="text-sm bg-[#c20000] text-white p-1 rounded">27 May, 25</span>
            <span className="text-sm bg-[#06437d] text-white p-1 rounded">6 Min Read</span>
          </div>
        </div>
      </div>
    </div>
  );
}
