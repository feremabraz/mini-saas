'use client';

import * as React from 'react';
import {
  motion,
  AnimationProps,
  TargetAndTransition,
  Transition,
} from 'framer-motion';
import { Bone, Bug, Cat, PawPrint } from 'lucide-react';
import { cn } from '@/lib/utils';

const logos = [
  { icon: Bone, name: 'Bone' },
  { icon: Bug, name: 'Bug' },
  { icon: Cat, name: 'Cat' },
  { icon: PawPrint, name: 'Paw' },
];

export interface ScrollerProps extends React.HTMLAttributes<HTMLDivElement> {
  animate?: AnimationProps['animate'];
  transition?: Transition;
}

const Scroller = React.forwardRef<HTMLDivElement, ScrollerProps>(
  ({ className, animate, transition, ...props }, ref) => {
    const defaultAnimate: TargetAndTransition = {
      x: [0, -100 * logos.length * 2],
    };

    const defaultTransition: Transition = {
      x: {
        repeat: Infinity,
        repeatType: 'loop',
        duration: 40,
        ease: 'linear',
      },
    };

    const getAnimate = (): AnimationProps['animate'] => {
      if (typeof animate === 'function') {
        return animate;
      }
      if (Array.isArray(animate) || typeof animate === 'string') {
        return animate;
      }
      return { ...defaultAnimate, ...(animate as TargetAndTransition) };
    };

    return (
      <div
        ref={ref}
        className={cn('overflow-hidden py-2 max-w-full relative', className)}
        {...props}
      >
        <motion.div
          className="flex flex-row"
          animate={getAnimate()}
          transition={transition || defaultTransition}
        >
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              className="flex shrink-0 justify-around gap-8 flex-row"
            >
              {logos.map((logo, index) => (
                <div key={index} className="flex items-center w-28 gap-3">
                  <logo.icon size={24} />
                  <p className="text-lg font-bold">{logo.name}</p>
                </div>
              ))}
            </div>
          ))}
        </motion.div>
        <div className="absolute inset-y-0 left-0 w-1/6 bg-gradient-to-r from-white to-transparent" />
        <div className="absolute inset-y-0 right-0 w-1/6 bg-gradient-to-l from-white to-transparent" />
      </div>
    );
  }
);

Scroller.displayName = 'Scroller';

export { Scroller };
