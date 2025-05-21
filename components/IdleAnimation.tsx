// components/IdleTreeAnimation.tsx
"use client";
import { useEffect, useState } from "react";

export default function IdleTreeAnimation() {
  const [isIdle, setIsIdle] = useState(false);
  const idleTime = 8000; // 8 seconds

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    const handleActivity = () => {
      setIsIdle(false);
      document.body.style.cursor = "auto";
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        setIsIdle(true);
        document.body.style.cursor = "none";
      }, idleTime);
    };

    window.addEventListener("mousemove", handleActivity);
    window.addEventListener("keydown", handleActivity);

    handleActivity();

    return () => {
      clearTimeout(timeout);
      window.removeEventListener("mousemove", handleActivity);
      window.removeEventListener("keydown", handleActivity);
      document.body.style.cursor = "auto";
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {isIdle && <TreeAnimation />}
    </div>
  );
}

function TreeAnimation() {
  return (
    <div className="flex items-center justify-center h-screen w-full bg-transparent">
    <svg
  width="300"
  height="300"
  viewBox="0 0 300 300"
  xmlns="http://www.w3.org/2000/svg"
  className="animate-fade-in"
>
  {/* Ground */}
  <ellipse cx="150" cy="290" rx="150" ry="20" fill="#8B4513" />

  {/* Seed */}
  <circle cx="150" cy="270" r="6" fill="#5C4033">
    <animate attributeName="r" from="6" to="1" dur="0.8s" fill="freeze" />
  </circle>

  {/* Trunk */}
  <path
    d="M150 270 Q148 200 150 130 Q152 70 150 30"
    stroke="#8B4513"
    strokeWidth="12"
    strokeLinecap="round"
    fill="none"
  >
    <animate attributeName="stroke-dasharray" from="0,300" to="300,0" dur="1.2s" begin="0.8s" fill="freeze" />
  </path>

  {/* Branches */}
  <path
    d="M150 130 C130 110, 110 100, 90 90"
    stroke="#2E8B57"
    strokeWidth="6"
    fill="none"
  >
    <animate attributeName="stroke-dasharray" from="0,100" to="100,0" dur="1s" begin="2.1s" fill="freeze" />
  </path>
  <path
    d="M150 130 C170 110, 190 100, 210 90"
    stroke="#2E8B57"
    strokeWidth="6"
    fill="none"
  >
    <animate attributeName="stroke-dasharray" from="0,100" to="100,0" dur="1s" begin="2.1s" fill="freeze" />
  </path>

  {/* Tree Crown */}
  <circle cx="150" cy="60" r="30" fill="#228B22" opacity="0">
    <animate attributeName="opacity" from="0" to="1" dur="0.5s" begin="3.2s" fill="freeze" />
  </circle>
  <circle cx="120" cy="80" r="25" fill="#2E8B57" opacity="0">
    <animate attributeName="opacity" from="0" to="1" dur="0.5s" begin="3.3s" fill="freeze" />
  </circle>
  <circle cx="180" cy="80" r="25" fill="#2E8B57" opacity="0">
    <animate attributeName="opacity" from="0" to="1" dur="0.5s" begin="3.4s" fill="freeze" />
  </circle>

  {/* Message */}
  <text
    x="150"
    y="20"
    textAnchor="middle"
    fontSize="18"
    fill="#006400"
    opacity="0"
    fontWeight="bold"
  >
    Save Trees 🌳
    <animate attributeName="opacity" from="0" to="1" dur="1s" begin="4s" fill="freeze" />
  </text>
</svg>



    </div>
  );
}
