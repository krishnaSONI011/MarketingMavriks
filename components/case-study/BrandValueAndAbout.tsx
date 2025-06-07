import { Poppins, Lato } from "next/font/google";
import Image from "next/image";
const poppins = Poppins({
  subsets: ["latin"],
  weight: "400",
});

const lato = Lato({
  subsets: ["latin"],
  weight: "400",
});

export default function BrandValueAndAbout() {
  return (
    <div className="flex flex-col md:flex-row">
      {/* Image Section */}
      <div className="w-full md:w-1/2 flex justify-center items-center border-b-2 border-[#fff2f5]">
        {/* <img
          src="/kahtu_design/khatu_logo.png"
          alt="Khatu Design"
          className="w-full h-auto "
        /> */}
        <Image src={'/kahtu_design/khatu_logo.png'} alt="Khatu_logo" width={300} height={500} />
      </div>

      {/* Text Section */}
      <div className="bg-[#fff2f5] px-6 py-8 md:px-10 md:py-10 w-full md:w-1/2 flex flex-col justify-center">
        <h2
          className={`${poppins.className} text-black text-2xl md:text-3xl`}
        >
          Khatu Design: 1,200+ Monthly Orders with Bold Fashion & Smart
          Marketing
        </h2>
        <p
          className={`${lato.className} text-black mt-4 md:mt-5 text-sm md:text-base text-justify`}
        >
          Khatu Design, a fashion label rooted in ethnic expression and modern
          silhouettes, found itself at a pivotal moment. Known for its bold
          prints, handcrafted details, and cultural roots, the brand had all the
          makings of a breakout success — but struggled to scale online. With an
          average selling price of ₹499 and a low-margin category, the challenge
          wasn’t just about visibility — it was about positioning, retention,
          and storytelling that sells.
        </p>
      </div>
    </div>
  );
}
