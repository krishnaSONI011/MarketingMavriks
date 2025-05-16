'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { FaSearch, FaCode, FaBullhorn, FaPaintBrush } from 'react-icons/fa';
import Image from 'next/image';

type TeamMember = {
  name: string;
  role: string;
  icon: React.ReactNode;
  image: string;
  description: string;
};

type TeamCardProps = {
  member: TeamMember;
  onHover: (icon: React.ReactNode) => void;
  onLeave: () => void;
};

const teamMembers: TeamMember[] = [
  {
    name: 'Alice Johnson',
    role: 'SEO Specialist',
    icon: <FaSearch />,
    image: 'https://randomuser.me/api/portraits/women/44.jpg',
    description: 'Crafting strategies to get you found everywhere.',
  },
  {
    name: 'Bob Smith',
    role: 'Frontend Developer',
    icon: <FaCode />,
    image: 'https://randomuser.me/api/portraits/men/44.jpg',
    description: 'Building stunning, performant interfaces.',
  },
  {
    name: 'Cara Lee',
    role: 'Digital Marketer',
    icon: <FaBullhorn />,
    image: 'https://randomuser.me/api/portraits/women/45.jpg',
    description: 'Bringing your brand into the spotlight.',
  },
  {
    name: 'Dan Brown',
    role: 'Backend Developer',
    icon: <FaCode />,
    image: 'https://randomuser.me/api/portraits/men/45.jpg',
    description: 'Making the unseen magic work perfectly.',
  },
  {
    name: 'Eva Green',
    role: 'SEO Analyst',
    icon: <FaSearch />,
    image: 'https://randomuser.me/api/portraits/women/46.jpg',
    description: 'Optimizing reach with insight-driven SEO.',
  },
  {
    name: 'Frank White',
    role: 'UI/UX Designer',
    icon: <FaPaintBrush />,
    image: 'https://randomuser.me/api/portraits/men/46.jpg',
    description: 'Designing experiences users remember.',
  },
];

const TeamCard: React.FC<TeamCardProps> = ({ member, onHover, onLeave }) => {
  const [isHovering, setIsHovering] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 300, damping: 30 });
  const springY = useSpring(y, { stiffness: 300, damping: 30 });

  useEffect(() => {
    if (!isHovering) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (!cardRef.current) return;
      const rect = cardRef.current.getBoundingClientRect();
      const posX = e.clientX - rect.left;
      const posY = e.clientY - rect.top;
      x.set(posX);
      y.set(posY);
    };

    const cardElem = cardRef.current;
    cardElem?.addEventListener('mousemove', handleMouseMove);

    return () => {
      cardElem?.removeEventListener('mousemove', handleMouseMove);
    };
  }, [isHovering, x, y]);

  return (
    <div
      ref={cardRef}
      onMouseEnter={() => {
        setIsHovering(true);
        onHover(member.icon);
      }}
      onMouseLeave={() => {
        setIsHovering(false);
        onLeave();
      }}
      className="relative rounded-xl bg-white dark:bg-neutral-800 shadow-lg p-4 w-72 text-center cursor-none"
    >
      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
        <div className="w-full h-48 relative rounded-md overflow-hidden mb-4">
          <Image
            src={'/team.jpg'}
            alt={member.name}
            layout="fill"
            objectFit="cover"
          />
        </div>
        <h3 className="text-xl font-bold mb-1">{member.name}</h3>
        <p className="text-sm text-neutral-500 mb-2">{member.role}</p>
        <p className="text-sm text-neutral-700 dark:text-neutral-300">{member.description}</p>
      </motion.div>

      {isHovering && (
        <motion.div
          className="absolute pointer-events-none z-50 text-3xl"
          style={{
            color: '#c20000',
            left: 0,
            top: 0,
            translateX: '-50%',
            translateY: '-50%',
            x: springX,
            y: springY,
          }}
        >
          {member.icon}
        </motion.div>
      )}
    </div>
  );
};

const TeamSection: React.FC = () => {
  const [cursorIcon, setCursorIcon] = useState<React.ReactNode | null>(null);

  return (
    <div className="relative">
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center py-12 px-6">
        {teamMembers.map((member, index) => (
          <TeamCard
            key={index}
            member={member}
            onHover={setCursorIcon}
            onLeave={() => setCursorIcon(null)}
          />
        ))}
      </div>
    </div>
  );
};

export default TeamSection;
