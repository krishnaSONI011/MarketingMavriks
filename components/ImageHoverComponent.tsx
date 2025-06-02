'use client';
import Image from 'next/image';
import Link from 'next/link';
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

const cards = [
  {
    title: 'Ezyle',
    image: '/1.png',
    content: 'Branding | Strategy',
    link: '/ezyle',
  },
  {
    title: 'Khatu Design',
    image: '/4.png',
    content: 'Website | UI/UX',
    link: '#',
  },
  {
    title: 'Room To Moon',
    image: '/2.png',
    content: 'Branding | Strategy',
    link: '/room-to-moon',
  },
  {
    title: 'Gulabo Jaipur',
    image: '/3.png',
    content: 'Website | Branding',
    link: '/gulabo-jaipur',
  },
];

export default function HoverCards() {
  return (
    <div>
      <div>
        <h3
          className={`${lato.className} antialiased text-center text-lg md:text-xl my-4 text-[#07437D]`}
        >
          Real Results. Real Impact.
        </h3>
        <h2
          className={`text-center text-xl md:text-3xl ${poppins.className} font-bold`}
        >
          Case <span className="text-[#c20000]">Studies</span>
        </h2>
      </div>

      <div className="mt-5 w-full bg-white overflow-hidden">
        <div className="flex flex-col lg:flex-row w-full group">
          {cards.map((card, i) => (
            <div
              key={i}
              className="relative w-full h-[300px] lg:h-[400px] flex-shrink-0 lg:flex-1 overflow-hidden cursor-pointer transition-all duration-500 ease-in-out group-hover:lg:flex-[0.8] hover:lg:flex-[3]"
            >
              <div className="relative w-full h-full">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center text-white px-4">
                <h2
                  className={`text-2xl lg:text-3xl font-bold mb-2 ${poppins.className}`}
                >
                  {card.title}
                </h2>
                <p
                  className={`text-sm lg:text-base font-semibold mb-4 ${montserrat.className}`}
                >
                  {card.content}
                </p>
                <Link
                  href={card.link}
                  className="mt-2 bg-white text-black px-4 py-2 rounded-full text-sm font-semibold hover:bg-gray-100 transition-all duration-300"
                >
                  View Case Study
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className='text-center'>
        <button className="mt-5 px-4 py-2 rounded-md border border-[#c20000] bg-white text-[#c20000] text-xl font-semibold hover:shadow-[4px_4px_0px_0px_rgba(194,0,0)] transition duration-200 ">
             Read More Story
      </button>
      </div>
      
    </div>
  );
}
