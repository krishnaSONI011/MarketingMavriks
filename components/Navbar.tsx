"use client";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/resizable-navbar";
import { useState } from "react";
import { Poppins } from "next/font/google";
import { ButtonModal } from "./ButtonModel";
import Link from "next/link";

const poppins =Poppins({
  weight:'400',
  subsets: ['latin'],
  })
export function NavbarDemo() {
  const navItems = [
    {
      name: "Why Choose Us",
      link: "#features",
    },
    {
      name: "Who We Are",
      link: "#pricing",
    },
    {
      name: "What We Do",
      link: "#contact",
    },
  ];
  
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
   <>
      <Navbar className={poppins.className}>
        {/* Desktop Navigation */}
        <NavBody>
          <NavbarLogo />
          <NavItems items={navItems} />
          {/* <Navb /> */}
          <div className="flex items-center gap-4">
            
            <ButtonModal />
            {/* <NavbarButton variant="primary" className="bg-[#c20000] text-white text-xl font-bold">Let's Talk</NavbarButton> */}
          </div>
        </NavBody>

        {/* Mobile Navigation */}
        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo />
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </MobileNavHeader>

          <MobileNavMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
          >
            {navItems.map((item, idx) => (
              <Link
              key={`mobile-link-${idx}`}
              href={item.link}
              onClick={() => setIsMobileMenuOpen(false)}
              className="relative text-neutral-600 dark:text-neutral-300 text-2xl"
              >
                <span className="block text-2xl">{item.name}</span>
              </Link>
            ))} 
            
            <div className="flex w-full flex-col gap-4">
              <NavbarButton
                onClick={() => setIsMobileMenuOpen(false)}
                variant="primary"
                className="w-full"
              >
                Login
              </NavbarButton>
              {/* <NavbarButton
                onClick={() => setIsMobileMenuOpen(false)}
                variant="primary"
                className="w-full font-bold text-xl"
              >
                Let's Talk
              </NavbarButton> */}
            </div>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>
      {/* <DummyContent /> */}
</>
      
    
  );
}


