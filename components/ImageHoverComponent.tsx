'use client';
import Image from 'next/image';
import Link from 'next/link';
import { Poppins, Montserrat } from 'next/font/google';
import { link } from 'fs';

const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-poppins',
  weight: ['400', '500'],
});
const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '600'],
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
    image:'/4.png',
    content:'Website | UI/UX',
    link:'#'
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

    
    <div className="w-full h-[400px] bg-white overflow-hidden">
      <div className="flex flex-row w-full h-full group">
        {cards.map((card, i) => (
          <div
            key={i}
            className="relative h-full flex-1 overflow-hidden cursor-pointer transition-all duration-500 ease-in-out group-hover:flex-[0.8] hover:flex-[3]"
          >
            <Image
              src={card.image}
              alt={card.title}
              fill
              className="object-cover transition-transform duration-500 hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center text-white px-4">
              <h2 className={`text-3xl font-bold mb-2 ${poppins.className}`}>{card.title}</h2>
              <p className={`text-base font-semibold mb-4 ${montserrat.className}`}>
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
    </div>
  );
}
