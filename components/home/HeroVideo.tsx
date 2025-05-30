'use client'

import { useEffect, useRef, useState } from 'react';
import { FaVolumeMute, FaVolumeUp } from 'react-icons/fa';

export default function Video() {
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const toggleMute = () => {
    if (videoRef.current) {
      const newMute = !videoRef.current.muted;
      videoRef.current.muted = newMute;
      setIsMuted(newMute);
      localStorage.setItem('video-muted', JSON.stringify(newMute));
      videoRef.current.play().catch((e) => console.warn('Toggle play error:', e));
    }
  };

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
  
    // Load saved mute preference
    const savedMute = localStorage.getItem('video-muted');
    const initialMuted = savedMute ? JSON.parse(savedMute) : true;
  
    video.muted = initialMuted;
    setIsMuted(initialMuted);
  
    // Play video initially after short delay for autoplay compliance
    const timeout = setTimeout(() => {
      video.play().catch((e) => console.warn('Initial play error:', e));
    }, 1000);
  
    // Intersection Observer to auto pause/play on visibility (mute state unchanged)
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!videoRef.current) return;
  
        if (entry.isIntersecting) {
          videoRef.current.play().catch((e) => console.warn('Observer play error:', e));
        } else {
          videoRef.current.pause();
        }
      },
      { threshold: 0.6 }
    );
  
    observer.observe(video);
  
    return () => {
      clearTimeout(timeout);
      observer.disconnect();
    };
  }, []);
  

  return (
    <div className="relative w-full h-[90vh]">
      <video
        ref={videoRef}
        src="https://marketingmavricks.com/wp-content/uploads/2025/05/MM-Showreel_4.1.mp4"
        autoPlay
        loop
        playsInline
        muted // Still needed for autoplay start
        className="w-full h-full object-cover"
      />

      <button
        aria-label={isMuted ? 'Unmute video' : 'Mute video'}
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
