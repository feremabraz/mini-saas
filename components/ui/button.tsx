'use client';

import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import {
  motion,
  HTMLMotionProps,
  MotionProps,
  MotionValue,
} from 'framer-motion';

import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default:
          'bg-primary text-primary-foreground shadow hover:bg-primary/90',
        destructive:
          'bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90',
        outline:
          'border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground',
        secondary:
          'bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80',
        ghost: 'hover:bg-accent hover:text-accent-foreground',
        link: 'text-primary underline-offset-4 hover:underline',
        ringHover:
          'bg-primary text-primary-foreground transition-all duration-300 hover:bg-primary/90 hover:ring-2 hover:ring-primary/90 hover:ring-offset-2',
      },
      size: {
        default: 'h-9 px-4 py-2',
        sm: 'h-8 rounded-md px-3 text-xs',
        lg: 'h-10 rounded-md px-8',
        icon: 'h-9 w-9',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

type ButtonBaseProps = VariantProps<typeof buttonVariants> & {
  isLoading?: boolean;
  disableAnimation?: boolean;
};

type SlotButtonProps = ButtonBaseProps &
  React.ComponentPropsWithoutRef<typeof Slot>;
type MotionButtonProps = ButtonBaseProps &
  Omit<HTMLMotionProps<'button'>, 'children'> & {
    children?: React.ReactNode | MotionValue<number> | MotionValue<string>;
    customAnimation?: MotionProps;
  };

const ButtonContent: React.FC<{
  isLoading?: boolean;
  children?: React.ReactNode | MotionValue<number> | MotionValue<string>;
}> = ({ isLoading, children }) => {
  if (isLoading) {
    return (
      <motion.div
        className="w-5 h-5 border-2 border-current border-t-transparent rounded-full"
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
      />
    );
  }
  if (children instanceof MotionValue) {
    return <motion.span>{children}</motion.span>;
  }
  return <>{children}</>;
};

const SlotButton = React.forwardRef<HTMLElement, SlotButtonProps>(
  ({ className, variant, size, isLoading, ...props }, ref) => (
    <Slot
      className={cn(buttonVariants({ variant, size, className }))}
      ref={ref}
      {...props}
    >
      <ButtonContent isLoading={isLoading}>{props.children}</ButtonContent>
    </Slot>
  )
);
SlotButton.displayName = 'SlotButton';

const defaultAnimation: MotionProps = {
  whileHover: { scale: 1.025 },
  whileTap: { scale: 0.95 },
  transition: { type: 'spring', stiffness: 400, damping: 10 },
};

const MotionButton = React.forwardRef<HTMLButtonElement, MotionButtonProps>(
  (
    {
      className,
      variant,
      size,
      isLoading,
      customAnimation,
      disableAnimation,
      ...props
    },
    ref
  ) => {
    const animationProps = disableAnimation
      ? {}
      : customAnimation || defaultAnimation;

    return (
      <motion.button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        disabled={isLoading || props.disabled}
        {...animationProps}
        {...props}
      >
        <ButtonContent isLoading={isLoading}>{props.children}</ButtonContent>
      </motion.button>
    );
  }
);
MotionButton.displayName = 'MotionButton';

type ButtonProps =
  | (SlotButtonProps & { asChild: true })
  | (MotionButtonProps & { asChild?: false });

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => {
    if (props.asChild) {
      return <SlotButton {...props} ref={ref as React.Ref<HTMLElement>} />;
    }
    return <MotionButton {...props} ref={ref} />;
  }
);
Button.displayName = 'Button';

export { Button, buttonVariants };
export type { ButtonProps };
