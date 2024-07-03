'use client';

import { Scroller } from '@/components/ui/scroller';
import {
  Activity,
  Euro,
  Fingerprint,
  Layers2,
  PencilRuler,
  Pyramid,
  Send,
  Shield,
} from 'lucide-react';

export function Banner() {
  return (
    <section className="bg-neutral-900 w-full">
      <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <p className="text-sm text-center text-primary-foreground uppercase pb-4">
          Let the flow guide you
        </p>
        <div className="overflow-hidden">
          <Scroller
            className="text-white"
            useLogos={true}
            logos={[
              { icon: Pyramid, name: 'Prisma' },
              { icon: Fingerprint, name: 'Lucia' },
              { icon: Activity, name: 'Actions' },
              { icon: Shield, name: 'Zod' },
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
            className="text-white"
            useLogos={true}
            logos={[
              { icon: Send, name: 'Resend' },
              { icon: Euro, name: 'Stripe' },
              { icon: PencilRuler, name: 'Stories' },
              { icon: Layers2, name: 'Figma' },
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
        </div>
      </div>
    </section>
  );
}
