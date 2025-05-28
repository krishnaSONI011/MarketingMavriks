"use client";
import React from "react";
import { Boxes } from "@/components/ui/background-boxes";
import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";
import { FaLinkedin, FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";
import Link from "next/link";

const poppins = Poppins({
  subsets: ["latin"],
  weight: "600",
});

export function Footer() {
  return (
    <div
      className={cn(
        poppins.className,
        "relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center rounded-t-2xl py-16 px-6"
      )}
    >
      <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
      <Boxes />

      {/* Branding */}
      <h1 className="text-5xl sm:text-7xl text-white relative z-20 mb-4 text-center">
        Marketing Mavricks
      </h1>

      {/* Tagline */}
      <p className="text-center text-neutral-300 relative z-20 text-sm sm:text-base">
        We build brands that people remember.
      </p>

      {/* Social Icons */}
      <div className="flex gap-6 mt-6 relative z-20 text-white text-2xl">
        <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="hover:text-blue-500 transition duration-200" />
        </Link>
        <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="hover:text-pink-400 transition duration-200" />
        </Link>
        <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <FaFacebook className="hover:text-blue-600 transition duration-200" />
        </Link>
        <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <FaTwitter className="hover:text-blue-400 transition duration-200" />
        </Link>
      </div>

      {/* Footer Links */}
      <div className="mt-8 text-neutral-400 text-sm relative z-20 flex flex-wrap gap-6 justify-center">
        <Link href="/about-us" className="hover:text-white transition duration-200">About</Link>
        <Link href="/services" className="hover:text-white transition duration-200">Services</Link>
        <Link href="#work" className="hover:text-white transition duration-200">Work</Link>
        <Link href="#contact" className="hover:text-white transition duration-200">Contact</Link>
      </div>

      {/* Bottom Text */}
      <div className="mt-8 text-neutral-500 text-xs relative z-20">
        &copy; {new Date().getFullYear()} Marketing Mavricks. All rights reserved.
      </div>
    </div>
  );
}
