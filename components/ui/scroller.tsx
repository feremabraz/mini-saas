'use client';

import * as React from 'react';
import {
  motion,
  AnimationProps,
  TargetAndTransition,
  Transition,
} from 'framer-motion';
import { cn } from '@/lib/utils';

export interface Logo {
  icon: React.ElementType;
  name: string;
}

export interface ScrollerProps extends React.HTMLAttributes<HTMLDivElement> {
  animate?: AnimationProps['animate'];
  transition?: Transition;
  children?: React.ReactNode;
  logos?: Logo[];
  useLogos?: boolean;
}

const Scroller = React.forwardRef<HTMLDivElement, ScrollerProps>(
  (
    {
      className,
      animate,
      transition,
      children,
      logos = [],
      useLogos = false,
      ...props
    },
    ref
  ) => {
    const defaultAnimate: TargetAndTransition = {
      x: useLogos ? [0, -100 * logos.length * 2] : [0, '-100%'],
    };

    const defaultTransition: Transition = {
      x: {
        repeat: Infinity,
        repeatType: 'loop',
        duration: useLogos ? 40 : 20,
        ease: 'linear',
      },
    };

    const getAnimate = (): AnimationProps['animate'] => {
      if (animate) return animate;
      return defaultAnimate;
    };

    const renderContent = () => {
      if (useLogos && logos.length > 0) {
        return (
          <>
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
          </>
        );
      } else {
        return (
          <>
            {children}
            {children}
          </>
        );
      }
    };

    return (
      <div
        ref={ref}
        className={cn('overflow-hidden py-2 w-full relative', className)}
        {...props}
      >
        <motion.div
          className={cn('flex', useLogos ? 'flex-row' : 'flex-nowrap')}
          animate={getAnimate()}
          transition={transition || defaultTransition}
        >
          {renderContent()}
        </motion.div>
        {!useLogos && (
          <>
            <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background" />
          </>
        )}
      </div>
    );
  }
);

Scroller.displayName = 'Scroller';

export { Scroller };
