import { Hero } from '@/components/hero';
import { Features } from '@/components/features';
import { Banner } from '@/components/banner';
import { Footer } from '@/components/footer';
import { Faq } from '@/components/faq';

import { FixedNav } from '@/components/ui/fixed-nav';

export default function LandingPage() {
  const links = [
    { href: 'https://mini-storybook-liard.vercel.app/', label: 'Components' },
    { href: 'https://github.com/feremabraz/mini-saas', label: 'GitHub' },
  ];
  return (
    <>
      <FixedNav links={links} />
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
