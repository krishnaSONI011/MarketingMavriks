import { CardStackDemo } from "../Stack";
import { Poppins, Montserrat, Lato } from "next/font/google";

const poppins = Poppins({ subsets: ["latin"], weight: ["700"] });
const montserrat = Montserrat({ subsets: ["latin"], weight: ["600"] });
const lato = Lato({ subsets: ["latin"], weight: ["400"] });

export default function LastSection() {
  return (
    <section className="bg-white py-20 px-6 md:px-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* Left Side - Content */}
        <div className="space-y-6">
        <h3 className={`${montserrat.className} text-2xl font-semibold`} style={{ color: "#07437D" }}>
            Real Results, Real Stories
          </h3>
          <h2 className={`${poppins.className} text-4xl font-bold`} style={{ color: "#c20000" }}>
            What Our Clients Say
          </h2>
          
          <p className={`${lato.className} text-gray-700 text-base leading-relaxed`}>
            We don’t just deliver projects — we deliver experiences. Hear from the
            brands that trusted us to transform their digital presence and drive results.
          </p>
          <p className={`${lato.className} text-gray-500 text-sm`}>
            Our testimonials reflect our commitment to quality, creativity, and client satisfaction.
          </p>
          <button className="px-4 py-2 rounded-md border border-[#c20000] bg-white text-[#c20000] text-xl font-semibold hover:shadow-[4px_4px_0px_0px_rgba(194,0,0)] transition duration-200">
             Read More Story
      </button>
        </div>

        {/* Right Side - Testimonial Cards */}
        <div>
          <CardStackDemo />
        </div>
        
      </div>
    </section>
  );
}
