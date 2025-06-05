import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { NavbarDemo } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

import Navbar from "@/components/AnotherNav";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title:{
    default: "Marketing Mavricks",
    template:"%s | Marketing Mavricks"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased scroll-smooth `}
      >
         <div className="relative w-full">
          <div className="hidden md:block">

        <NavbarDemo />
          </div>
          <div className="md:hidden">

        <Navbar />
          </div>
        {/* <IdleAnimation /> */}
        {children}</div>
        <Footer />
      </body>
    </html>
  );
}
