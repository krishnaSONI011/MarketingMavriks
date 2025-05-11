'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

export default function RotatingImageCircle() {
  const ref = useRef(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end end'],
  })

  // Rotation of the circle
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360])
  // Zoom-in effect
  const scale = useTransform(scrollYProgress, [0, 1], [1, 2])
  const radius = 200

  const images = Array.from({ length: 30 }).map((_, i) => ({
    src: `https://picsum.photos/seed/${i + 1}/100/100`,
    alt: `Image ${i + 1}`,
  }))

  return (
    <div ref={ref} className="h-[200vh] bg-[#f7f8fa] relative overflow-hidden">
      <div className="sticky top-1/2 transform -translate-y-1/2 flex items-center justify-center">
        <div className="relative w-[600px] h-[600px]">
          {/* Center Text */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-10">
            <p className="text-xl font-medium text-gray-800">
              The future is built on Artificial Intelligence.
            </p>
            <span className="text-sm tracking-widest text-gray-500 mt-2">
              SCROLL TO EXPLORE
            </span>
          </div>

          {/* Rotating & Scaling Image Circle */}
          <motion.div
            className="absolute inset-0"
            style={{ rotate, scale }}
          >
            {images.map((img, index) => {
              const angleDeg = (360 / images.length) * index
              const angleRad = (angleDeg * Math.PI) / 180
              const x = radius * Math.cos(angleRad)
              const y = radius * Math.sin(angleRad)

              return (
                <motion.img
                  key={index}
                  src={img.src}
                  alt={img.alt}
                  className="w-[60px] h-[60px] object-cover rounded-md absolute shadow-md"
                  style={{
                    x,
                    y,
                    rotate: angleDeg + 90, // make image follow the circular arc
                  }}
                />
              )
            })}
          </motion.div>
        </div>
      </div>
    </div>
  )
}
