import { Hero } from '@/components/hero';
import { Features } from '@/components/features';
import { Banner } from '@/components/banner';
import { Footer } from '@/components/footer';
import { Faq } from '@/components/faq';

import { FixedNav } from '@/components/ui/fixed-nav';
import { StickyNav } from '@/components/ui/sticky-nav';

export default function LandingPage() {
  const links = [
    { href: '#features', label: 'Features' },
    { href: '#showcase', label: 'Showcase' },
    { href: 'https://github.com/', label: 'GitHub' },
  ];
  return (
    <>
      <StickyNav links={links} />
      <main>
        <Hero />
        <Banner />
        <Features />
        <Faq />
      </main>
      <Footer />
    </>
  );
}
