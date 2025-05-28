'use client'

import { motion, useAnimation, useInView } from 'framer-motion'
import { useEffect, useRef } from 'react'

interface RevealTextProps {
  children: React.ReactNode
  color?: string // Supports Tailwind (e.g. bg-red-500) or raw hex like #f97316
}

export default function RevealText({ children, color = 'bg-orange-500' }: RevealTextProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '0px 0px -100px 0px' })
  const controls = useAnimation()

  useEffect(() => {
    if (isInView) {
      controls.start('animate')
    }
  }, [isInView, controls])

  return (
    <div ref={ref} className="relative inline-block overflow-hidden">
      {/* Rectangle animation from left to right */}
      <motion.div
        className="absolute top-0 bottom-0 left-0 h-full z-20"
        style={{
          backgroundColor: color.startsWith('bg-') ? undefined : color,
        }}
        initial={{ width: 0 }}
        animate={controls}
        variants={{
          animate: {
            width: ['0%', '100%', '0%'],
            left: ['0%', '0%', '100%'],
            transition: {
              duration: 1.2,
              ease: 'easeInOut',
              times: [0, 0.5, 1],
            },
          },
        }}
      >
        {color.startsWith('bg-') && <div className={`w-full h-full ${color}`} />}
      </motion.div>

      {/* Text content */}
      <motion.div
        className="relative z-10"
        initial={{ opacity: 0 }}
        animate={controls}
        variants={{
          animate: {
            opacity: 1,
            transition: {
              delay: 1.2,
              duration: 0.3,
            },
          },
        }}
      >
        {children}
      </motion.div>
    </div>
  )
}
