import { Button } from '@/components/ui/button';

export default function LandingPage() {
  return (
    <main>
      <section className="container h-screen overflow-hidden bg-background text-foreground pt-24">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-6xl text-center font-semibold mb-6">
            Get testimonials from your customers with ease
          </h1>
          <p className="mb-5 text-center opacity-80">
            Collecting testimonials is hard, we get it! So we built Testimonial.
            In minutes, you can collect text and video testimonials from your
            customers with no need for a developer or website hosting.
          </p>
          <div className="flex gap-2 justify-center items-center pt-6">
            <Button size="lg">Get Started</Button>
            <Button size="lg" variant="ghost">
              Contact Us
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
