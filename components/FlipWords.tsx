import { ContainerTextFlip } from "@/components/ui/container-text-flip";
import { Poppins } from "next/font/google";
import { FaLinkedin } from "react-icons/fa";

const poppins = Poppins({
  subsets: ["latin"],
  weight: "600",
});


export function ContainerTextFlipDemo() {
  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 py-5 text-center">
      <h1
        className={`${poppins.className} text-lg md:text-3xl font-semibold flex flex-wrap items-center justify-center gap-2 sm:gap-3 `}
      >
        We Help You
        <span className="text-blue-600">
          <FaLinkedin className="inline-block" />
        </span>
        <ContainerTextFlip
          words={["Grow", "Scale", "Succeed", "Dominate"]}
        />
      </h1>
    </div>
  );
}
