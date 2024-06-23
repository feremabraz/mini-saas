'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

interface AnimatedImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  animationDuration?: number;
  animationDistance?: number;
}

export function Emoji({
  src,
  alt,
  width,
  height,
  className,
  animationDuration = 4,
  animationDistance = 10,
}: AnimatedImageProps) {
  return (
    <motion.div
      animate={{
        x: [0, animationDistance, 0],
      }}
      transition={{
        duration: animationDuration,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    >
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={className}
      />
    </motion.div>
  );
}
