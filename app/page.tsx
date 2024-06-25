import { Nav } from '@/components/nav';
import { Hero } from '@/components/hero';
import { Features } from '@/components/features';
import { Banner } from '@/components/banner';
import { Footer } from '@/components/footer';

export default function LandingPage() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Banner />
        <Features />
      </main>
      <Footer />
    </>
  );
}
