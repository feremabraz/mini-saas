'use client';

import { useState, useRef } from 'react';
import Link from 'next/link';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';

import { Logo } from '@/components/logo';

interface NavLink {
  href: string;
  label: string;
}

export interface StickyNavProps {
  links: NavLink[];
}

export const StickyNav: React.FC<StickyNavProps> = ({ links }) => {
  const [isHidden, setIsHidden] = useState(false);
  const { scrollY } = useScroll();
  const lastYRef = useRef(0);

  useMotionValueEvent(scrollY, 'change', (y) => {
    const difference = y - lastYRef.current;
    if (Math.abs(difference) > 50) {
      setIsHidden(difference > 0);
      lastYRef.current = y;
    }
  });

  return (
    <header className="m-auto h-20 flex items-center">
      <motion.div
        animate={isHidden ? 'hidden' : 'visible'}
        whileHover="visible"
        onFocusCapture={() => setIsHidden(false)}
        variants={{
          hidden: { y: '-90%' },
          visible: { y: '0%' },
        }}
        transition={{ duration: 0.2 }}
        className="fixed top-0 z-10 flex w-full justify-center pt-3"
      >
        <nav className="flex justify-between gap-3 rounded-3xl bg-white p-5 *:rounded-xl *:border *:border-gray-200 *:px-7 *:py-2 *:transition-colors *:duration-300 hover:*:bg-gray-200 focus-visible:*:bg-gray-200">
          <Link href="/" className="bg-gray-200">
            <Logo className="h-6 w-6" />
            <span className="sr-only">Home</span>
          </Link>
          {links.map((link) => (
            <Link key={link.href} href={link.href}>
              {link.label}
            </Link>
          ))}
        </nav>
      </motion.div>
    </header>
  );
};
