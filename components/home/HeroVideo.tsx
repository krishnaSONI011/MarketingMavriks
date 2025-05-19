'use client'

import { useState, useRef } from 'react';
import { FaVolumeMute, FaVolumeUp } from 'react-icons/fa';

export default function Video() {
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  return (
    <div className="relative w-full h-[90vh]">
      <video
        ref={videoRef}
        src="https://marketingmavricks.com/wp-content/uploads/2025/05/MM-Showreel_4.1.mp4"
        
        muted
        autoPlay
        className="w-full h-full object-cover"
      ></video>

      <button
        onClick={toggleMute}
        className="absolute bottom-4 right-4 bg-slate-800/80 p-2 rounded-full shadow-md hover:bg-slate-500  transition"
      >
        {isMuted ? (
          <FaVolumeMute className="text-white text-2xl" />
        ) : (
          <FaVolumeUp className="text-white text-2xl" />
        )}
      </button>
    </div>
  );
}
