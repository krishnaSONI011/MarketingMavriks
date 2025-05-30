import React from "react";
import { EvervaultCard, Icon } from "../ui/evervault-card";

export function EvervaultCardDemo() {
  return (
    <div className="border border-black/[0.2] dark:border-white/[0.2] flex flex-col items-start w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl mx-auto p-4 sm:p-6 md:p-8 relative h-auto min-h-[28rem] sm:min-h-[30rem]">
      {/* Corner Icons */}
      <Icon className="absolute h-5 w-5 sm:h-6 sm:w-6 -top-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-5 w-5 sm:h-6 sm:w-6 -bottom-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-5 w-5 sm:h-6 sm:w-6 -top-3 -right-3 dark:text-white text-black" />
      <Icon className="absolute h-5 w-5 sm:h-6 sm:w-6 -bottom-3 -right-3 dark:text-white text-black" />

      {/* Main Animated Card */}
      <EvervaultCard text="Stop Scrolling, Start Glowing" />

      {/* Subtitle */}
      <h2 className="dark:text-white text-black mt-4 text-sm sm:text-base md:text-lg font-light">
        Discover the secret sauce of Mavricks.
      </h2>

      {/* Call to Action */}
      <p className="text-xs sm:text-sm border font-light dark:border-white/[0.2] border-black/[0.2] rounded-full mt-4 text-black dark:text-white px-3 py-1">
        Contact Now!
      </p>
    </div>
  );
}
