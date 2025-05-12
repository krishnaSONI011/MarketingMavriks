'use client';
import React from 'react';

export default function CaseStudyBanner() {
  return (
    <section className="w-full h-[600px] relative">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://thisisweird.in/wp-content/uploads/2023/12/home-fearless-banner.png"
          alt="Fearless Chai Banner"
          className="w-full h-full object-cover"
        />
        {/* Left dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent" />
      </div>

      {/* Content container */}
      <div className="relative z-10 h-full flex items-center px-6 md:px-20">
        <div className="max-w-xl text-white">
          <h2 className="text-3xl md:text-5xl font-semibold leading-tight mb-6">
            Scaling to 1,200 Monthly Sales with Age-Old Wisdom and New Age Marketing
          </h2>

          <div className="mb-6">
            <p className="text-2xl font-extrabold">FEARLESS</p>
            <p className="text-sm uppercase tracking-widest mt-1">
              Performance | Automation | UI/UX | Branding | Strategy
            </p>
          </div>

          <a
            href="#"
            className="inline-flex items-center gap-2 text-gray-300 hover:text-white border-b border-gray-300 hover:border-white transition text-lg"
          >
            See how we did it →
          </a>
        </div>
      </div>
    </section>
  );
}
