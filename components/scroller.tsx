'use client';

import { motion } from 'framer-motion';
import { Bone, Bug, Cat, PawPrint } from 'lucide-react';

const Scroller = () => {
  const logos = [
    { icon: Bone, name: 'Bone' },
    { icon: Bug, name: 'Bug' },
    { icon: Cat, name: 'Cat' },
    { icon: PawPrint, name: 'Paw' },
  ];

  return (
    <div className="overflow-hidden py-2 max-w-full relative">
      <motion.div
        className="flex flex-row"
        animate={{
          x: [0, -100 * logos.length * 2],
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: 'loop',
            duration: 40,
            ease: 'linear',
          },
        }}
      >
        {[...Array(4)].map((_, i) => (
          <div key={i} className="flex shrink-0 justify-around gap-8 flex-row">
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
};

export { Scroller };
