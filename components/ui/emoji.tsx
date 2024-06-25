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
  direction?: 'horizontal' | 'vertical';
  reverse?: boolean;
}

export function Emoji({
  src,
  alt,
  width,
  height,
  className,
  animationDuration = 4,
  animationDistance = 10,
  direction = 'horizontal',
  reverse = false,
}: AnimatedImageProps) {
  const getAnimationProps = () => {
    const distance = reverse ? -animationDistance : animationDistance;
    return direction === 'horizontal'
      ? { x: [0, distance, 0] }
      : { y: [0, distance, 0] };
  };

  return (
    <motion.div
      animate={getAnimationProps()}
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
