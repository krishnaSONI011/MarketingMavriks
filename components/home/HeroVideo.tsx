'use client'

import { useEffect, useRef, useState } from 'react';
import { FaVolumeMute, FaVolumeUp } from 'react-icons/fa';

export default function Video() {
  const [isMuted, setIsMuted] = useState(false); // Start unmuted
  const videoRef = useRef<HTMLVideoElement>(null);

  const toggleMute = () => {
    if (videoRef.current) {
      const newMute = !videoRef.current.muted;
      videoRef.current.muted = newMute;
      setIsMuted(newMute);
    }
  };

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!video) return;
        if (!entry.isIntersecting) {
          video.muted = true;
          setIsMuted(true);
        } else {
          video.muted = false;
          setIsMuted(false);
        }
      },
      {
        threshold: 0.6, // At least 60% of the video must be visible
      }
    );

    observer.observe(video);

    return () => {
      if (video) observer.unobserve(video);
    };
  }, []);

  return (
    <div className="relative w-full h-[90vh]">
      <video
        ref={videoRef}
        src="https://marketingmavricks.com/wp-content/uploads/2025/05/MM-Showreel_4.1.mp4"
        autoPlay
        playsInline
        className="w-full h-full object-cover"
      ></video>

      <button
        onClick={toggleMute}
        className="absolute bottom-4 right-4 bg-slate-800/80 p-2 rounded-full shadow-md hover:bg-slate-500 transition"
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
