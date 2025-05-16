"use client";

import { cn } from "@/lib/utils";
import React, { useRef, useState, useEffect } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  animate,
  useVelocity,
  useAnimationControls,
} from "framer-motion"; // Note: corrected from "motion/react" to "framer-motion"

export const DraggableCardBody = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const cardRef = useRef<HTMLDivElement>(null);
  const controls = useAnimationControls();

  const [constraints, setConstraints] = useState({
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  });

  const velocityX = useVelocity(mouseX);
  const velocityY = useVelocity(mouseY);

  const springConfig = {
    stiffness: 100,
    damping: 20,
    mass: 0.5,
  };

  const rotateX = useSpring(
    useTransform(mouseY, [-300, 300], [25, -25]),
    springConfig
  );
  const rotateY = useSpring(
    useTransform(mouseX, [-300, 300], [-25, 25]),
    springConfig
  );

  const opacity = useSpring(
    useTransform(mouseX, [-300, 0, 300], [0.8, 1, 0.8]),
    springConfig
  );

  const glareOpacity = useSpring(
    useTransform(mouseX, [-300, 0, 300], [0.2, 0, 0.2]),
    springConfig
  );

  // Track drag distance
  const distance = useMotionValue(0);

  useEffect(() => {
    const updateDistance = () => {
      const x = mouseX.get();
      const y = mouseY.get();
      const d = Math.sqrt(x * x + y * y);
      distance.set(d);
    };

    const unsubX = mouseX.on("change", updateDistance);
    const unsubY = mouseY.on("change", updateDistance);

    return () => {
      unsubX();
      unsubY();
    };
  }, [mouseX, mouseY]);

  const fadingOpacity = useSpring(
    useTransform(distance, [0, 600], [1, 0]),
    springConfig
  );

  useEffect(() => {
    const updateConstraints = () => {
      if (typeof window !== "undefined") {
        setConstraints({
          top: -window.innerHeight / 2,
          left: -window.innerWidth / 2,
          right: window.innerWidth / 2,
          bottom: window.innerHeight / 2,
        });
      }
    };

    updateConstraints();
    window.addEventListener("resize", updateConstraints);

    return () => {
      window.removeEventListener("resize", updateConstraints);
    };
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY } = e;
    const { width, height, left, top } =
      cardRef.current?.getBoundingClientRect() ?? {
        width: 0,
        height: 0,
        left: 0,
        top: 0,
      };
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    const deltaX = clientX - centerX;
    const deltaY = clientY - centerY;
    mouseX.set(deltaX);
    mouseY.set(deltaY);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <div className="relative">
      {/* Background Punchline */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center text-xl font-bold text-black-300 pointer-events-none select-none uppercase z-0"
        style={{ opacity: useTransform(distance, [300, 300], [0, 1]) }}
      >
       And that’s how you lose it. 
      </motion.div>

      <motion.div
        ref={cardRef}
        drag
        dragConstraints={constraints}
        onDragStart={() => {
          document.body.style.cursor = "grabbing";
        }}
        onDragEnd={(event, info) => {
          document.body.style.cursor = "default";

          controls.start({
            rotateX: 0,
            rotateY: 0,
            transition: {
              type: "spring",
              ...springConfig,
            },
          });

          const currentVelocityX = velocityX.get();
          const currentVelocityY = velocityY.get();
          const velocityMagnitude = Math.sqrt(
            currentVelocityX ** 2 + currentVelocityY ** 2
          );
          const bounce = Math.min(0.8, velocityMagnitude / 1000);

          animate(info.point.x, info.point.x + currentVelocityX * 0.3, {
            duration: 0.8,
            ease: [0.2, 0, 0, 1],
            bounce,
            type: "spring",
            stiffness: 50,
            damping: 15,
            mass: 0.8,
          });

          animate(info.point.y, info.point.y + currentVelocityY * 0.3, {
            duration: 0.8,
            ease: [0.2, 0, 0, 1],
            bounce,
            type: "spring",
            stiffness: 50,
            damping: 15,
            mass: 0.8,
          });
        }}
        style={{
          rotateX,
          rotateY,
          opacity: fadingOpacity,
          willChange: "transform",
        }}
        animate={controls}
        whileHover={{ scale: 1.02 }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className={cn(
          "relative z-10 min-h-96 w-80 overflow-hidden rounded-md bg-neutral-100 p-6 shadow-2xl transform-3d dark:bg-neutral-900",
          className
        )}
      >
        {children}
        <motion.div
          style={{
            opacity: glareOpacity,
          }}
          className="pointer-events-none absolute inset-0 bg-white select-none"
        />
      </motion.div>
    </div>
  );
};

export const DraggableCardContainer = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div className={cn("[perspective:200px]", className)}>{children}</div>
  );
};
