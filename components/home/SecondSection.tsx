import { CoverDemo } from "../sparkleHeading";
import { EvervaultCardDemo } from "./Side-heroImage";
import Image from "next/image";
export default function SecondSection() {
  return (
    <div className="mt-10 flex flex-col items-center justify-center gap-10 px-4 md:flex-row md:gap-20 md:px-10">
      {/* Left Section */}
      <div className="w-full md:w-2/3">
        <CoverDemo />
      </div>

      {/* Right Section */}
      <div className="hidden md:flex w-full md:w-1/3  justify-center md:justify-end">
        <EvervaultCardDemo />
      </div>
      <div className="md:hidden">
        <Image src="/Trinangle-png.webp" alt="best Marketing Agency" height={400} width={400} />
      </div>
    </div>
  );
}
