"use client";
import { DirectionAwareHover } from "@/components/ui/direction-aware-hover";

export default function imageHoverDemo() {
  const imageUrl =
    "https://marketingmavricks.com/wp-content/uploads/2025/05/about-We-offer.png";
  return (
    <div className="h-[40rem] relative  flex items-center justify-center">
      <DirectionAwareHover imageUrl={imageUrl}>
        <p className="font-bold text-xl">In the mountains</p>
        <p className="font-normal text-sm">$1299 / night</p>
      </DirectionAwareHover>
    </div>
  );
}
