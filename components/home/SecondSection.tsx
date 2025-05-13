import { CoverDemo } from "../sparkleHeading";
import { EvervaultCardDemo } from "./Side-heroImage";

export default function SecondSection() {
  return (
    <div className="mt-10 flex flex-col items-center justify-center gap-10 px-4 md:flex-row md:gap-20 md:px-10">
      {/* Left Section */}
      <div className="w-full md:w-2/3">
        <CoverDemo />
      </div>

      {/* Right Section */}
      <div className="w-full md:w-1/3 flex justify-center md:justify-end">
        <EvervaultCardDemo />
      </div>
    </div>
  );
}
