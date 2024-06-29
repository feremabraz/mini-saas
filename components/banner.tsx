'use client';

import { Scroller } from '@/components/ui/scroller';
import { Bone, Bug, Cat, PawPrint } from 'lucide-react';

export function Banner() {
  return (
    <section className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <p className="text-sm text-center text-muted-foreground uppercase pb-4">
        Let the flow guide you
      </p>
      <Scroller
        useLogos={true}
        logos={[
          { icon: Bone, name: 'Bone' },
          { icon: Bug, name: 'Bug' },
          { icon: Cat, name: 'Cat' },
          { icon: PawPrint, name: 'Paw' },
        ]}
        transition={{
          x: {
            duration: 10,
            repeat: Infinity,
            repeatType: 'reverse',
          },
        }}
      />
      <Scroller
        useLogos={true}
        logos={[
          { icon: Bone, name: 'Bone' },
          { icon: Bug, name: 'Bug' },
          { icon: Cat, name: 'Cat' },
          { icon: PawPrint, name: 'Paw' },
        ]}
        animate={{ x: [0, -1000] }}
        transition={{
          x: {
            duration: 10,
            repeat: Infinity,
            repeatType: 'reverse',
          },
        }}
      />
    </section>
  );
}
