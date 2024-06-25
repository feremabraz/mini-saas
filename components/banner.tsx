import { Scroller } from '@/components/ui/scroller';

export function Banner() {
  return (
    <section className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <p className="text-sm text-center text-muted-foreground uppercase pb-4">
        Let the flow guide you
      </p>
      <Scroller
        transition={{
          x: {
            duration: 10,
            repeat: Infinity,
            repeatType: 'reverse',
          },
        }}
      />
      <Scroller
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
