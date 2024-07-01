import { Bird, LucideProps } from 'lucide-react';
import React from 'react';

export const Logo: React.ForwardRefExoticComponent<LucideProps> =
  React.forwardRef((props, ref) => <Bird {...props} ref={ref} />);

Logo.displayName = 'Logo';
