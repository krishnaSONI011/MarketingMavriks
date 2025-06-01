'use client';
import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';
const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Contact', href: '/contact' },
];
import { Poppins } from 'next/font/google';
const poppins = Poppins({
    subsets: ['latin'],
    weight: ['300', '400', '500', '600', '700']
})
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className={`${poppins.className} antialiased top-0 w-full bg-white/80 backdrop-blur shadow-lg z-50 py-2`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between relative">
        
        {/* Left: Logo */}
        <div className="absolute left-4 md:static">
          <Link href="/" className="text-2xl font-bold text-blue-600 tracking-tight">
            <Image src={'/logo.png'} alt='logo_website' height={100} width={90} />
          </Link>
        </div>

        {/* Center: Nav Links (Desktop) */}
        <div className="hidden md:flex space-x-8 mx-auto">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="relative text-gray-700 hover:text-blue-600 transition font-medium"
            >
              <span className="hover-underline">{link.name}</span>
            </Link>
          ))}
        </div>

        {/* Right: Button + Toggle */}
        <div className="absolute right-4 md:static flex items-center space-x-4">
          <button className="hidden md:inline-block bg-gradient-to-r from-blue-500 to-blue-700 text-white px-4 py-2 rounded-lg shadow hover:shadow-md transition">
            Get Started
          </button>
          <button
            className="md:hidden text-gray-800"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-white px-4 py-4 rounded-b-lg shadow-inner"
          >
            <div className="space-y-3">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="block text-gray-800 font-medium hover:text-blue-600 transition"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <button className="w-full mt-3 bg-gradient-to-r from-blue-500 to-blue-700 text-white py-2 rounded-lg shadow hover:shadow-md transition">
                Get Started
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Extra spacing below nav for fixed positioning */}
      <div className=" md:hidden" />
    </nav>
  );
}
