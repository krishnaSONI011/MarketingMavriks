import { ContainerTextFlip } from "@/components/ui/container-text-flip";
import { Poppins, Montserrat, Lato } from "next/font/google";
import { FaLinkedin } from "react-icons/fa";

const poppins = Poppins({
  subsets: ["latin"],
  weight: "600",
});
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: "400",
});
const lato = Lato({
  weight: "400",
  subsets: ["latin"],
});

export function ContainerTextFlipDemo() {
  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 py-10 text-center">
      <h1
        className={`${poppins.className} text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold flex flex-wrap items-center justify-center gap-2 sm:gap-3`}
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
