import * as React from 'react';
import { motion } from 'framer-motion';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const borderBeamVariants = cva(
  'absolute inset-0 overflow-hidden rounded-[inherit]',
  {
    variants: {
      variant: {
        default: '[--color-from:#ffaa40] [--color-to:#9c40ff]',
        blue: '[--color-from:#40c9ff] [--color-to:#4040ff]',
        green: '[--color-from:#40ff80] [--color-to:#40ffc9]',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

export interface BorderBeamProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof borderBeamVariants> {
  duration?: number;
  borderWidth?: number;
  delay?: number;
}

const BorderBeam = React.forwardRef<HTMLDivElement, BorderBeamProps>(
  (
    {
      className,
      variant,
      duration = 5,
      borderWidth = 1.5,
      delay = 0,
      ...props
    },
    ref
  ) => {
    return (
      <div
        className={cn(borderBeamVariants({ variant, className }))}
        ref={ref}
        style={
          {
            '--duration': `${duration}s`,
            '--border-width': `${borderWidth}px`,
            '--delay': `-${delay}s`,
          } as React.CSSProperties
        }
        {...props}
      >
        <div
          className="absolute inset-0 rounded-[inherit]"
          style={{
            border: 'var(--border-width) solid transparent',
            background:
              'linear-gradient(to right, var(--color-from), var(--color-to))',
            backgroundClip: 'padding-box, border-box',
            WebkitMask:
              'linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)',
            WebkitMaskComposite: 'xor',
            maskComposite: 'exclude',
          }}
        >
          <motion.div
            className="absolute inset-[-100%]"
            style={{
              background:
                'conic-gradient(from 0deg, transparent 0deg 90deg, var(--color-from) 180deg 270deg, transparent 360deg)',
            }}
            animate={{
              rotate: [0, 360],
            }}
            transition={{
              duration: duration,
              repeat: Infinity,
              ease: 'linear',
              delay: -delay,
            }}
          />
        </div>
      </div>
    );
  }
);
BorderBeam.displayName = 'BorderBeam';

export { BorderBeam, borderBeamVariants };
