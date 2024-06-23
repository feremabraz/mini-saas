import { Nav } from '@/components/nav';
import { Hero } from '@/components/hero';
import { Features } from '@/components/features';
import { Showcase } from '@/components/showcase';
import { Footer } from '@/components/footer';

export default function LandingPage() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Features />
        <Showcase />
      </main>
      <Footer />
    </>
  );
}
