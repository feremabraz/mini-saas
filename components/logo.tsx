import { LucideProps } from 'lucide-react';
import React from 'react';

export const Logo: React.ForwardRefExoticComponent<LucideProps> =
  React.forwardRef((props, ref) => (
    <svg
      width="143"
      height="127"
      viewBox="0 0 143 127"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
      ref={ref}
    >
      <path
        d="M16.614 30.054C8.73794 44.034 2.77706 58.5116 4.12969 74.9364C5.4389 90.8339 13.9967 104.915 27.6734 113.373C59.4253 133.009 107.727 120.535 128.565 90.4739C138.499 76.143 142.726 55.7969 136.639 39.078C128.87 17.7363 109.593 4.8058 87.2451 4.20343C64.7001 3.59575 40.6052 9.28826 23.8739 25.3046C16.6567 32.2133 10.2999 39.7849 6.94544 49.2893C4.6783 55.7129 5.01173 62.4272 5.01173 69.1353"
        stroke="black"
        stroke-width="9"
        stroke-linecap="round"
      />
      <path
        d="M66.6868 37.9924C68.2697 41.1582 68.791 44.6434 70.3507 47.7627"
        stroke="black"
        stroke-width="9"
        stroke-linecap="round"
      />
      <path
        d="M106.379 30.6647C108.792 33.3801 109.048 38.2032 109.432 41.6563"
        stroke="black"
        stroke-width="9"
        stroke-linecap="round"
      />
      <path
        d="M88.67 82.5694C100.426 87.6077 112.409 82.9887 119.202 72.7991"
        stroke="black"
        stroke-width="9"
        stroke-linecap="round"
      />
    </svg>
  ));

Logo.displayName = 'Logo';
