import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';

const bentoGridVariants = cva('grid w-full gap-4', {
  variants: {
    columns: {
      1: 'grid-cols-1',
      2: 'grid-cols-2',
      3: 'grid-cols-3',
      4: 'grid-cols-4',
    },
  },
  defaultVariants: {
    columns: 3,
  },
});

export interface BentoGridProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof bentoGridVariants> {}

const BentoGrid = React.forwardRef<HTMLDivElement, BentoGridProps>(
  ({ className, columns, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(bentoGridVariants({ columns, className }))}
        {...props}
      />
    );
  }
);
BentoGrid.displayName = 'BentoGrid';

const bentoCardVariants = cva(
  'group relative flex flex-col justify-between overflow-hidden rounded-xl bg-white dark:bg-black transform-gpu transition-all duration-300',
  {
    variants: {
      variant: {
        default:
          '[box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)] dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]',
        hover: 'hover:shadow-lg dark:hover:shadow-white/5',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

export interface BentoCardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof bentoCardVariants> {
  name: string;
  background?: React.ReactNode;
  Icon: React.ElementType;
  description: string;
  href: string;
  cta: string;
}

const BentoCard = React.forwardRef<HTMLDivElement, BentoCardProps>(
  (
    {
      className,
      variant,
      name,
      background,
      Icon,
      description,
      href,
      cta,
      ...props
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={cn(bentoCardVariants({ variant, className }))}
        {...props}
      >
        {background && <div>{background}</div>}
        <div className="pointer-events-none z-10 flex transform-gpu flex-col gap-1 p-6 transition-all duration-300 group-hover:-translate-y-10">
          <Icon className="h-12 w-12 origin-left transform-gpu text-neutral-700 transition-all duration-300 ease-in-out group-hover:scale-75 dark:text-neutral-300" />
          <h3 className="text-xl font-semibold text-neutral-700 dark:text-neutral-300">
            {name}
          </h3>
          <p className="max-w-lg text-neutral-400">{description}</p>
        </div>
        <div className="pointer-events-none absolute bottom-0 flex w-full translate-y-10 transform-gpu flex-row items-center p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          <Button
            variant="ghost"
            asChild
            size="sm"
            className="pointer-events-auto"
          >
            <a href={href}>
              {cta}
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
        <div className="pointer-events-none absolute inset-0 transform-gpu transition-all duration-300 group-hover:bg-black/[.03] group-hover:dark:bg-neutral-800/10" />
      </div>
    );
  }
);
BentoCard.displayName = 'BentoCard';

export { BentoGrid, BentoCard, bentoGridVariants, bentoCardVariants };
