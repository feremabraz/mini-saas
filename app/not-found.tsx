import { Footer } from '@/components/footer';
import { Nav } from '@/components/nav';
import { Button } from '@/components/ui/button';
import { Emoji } from '@/components/ui/emoji';

export default function NotFound() {
  return (
    <>
      <Nav />
      <main>
        <div className="grid min-h-full grid-cols-1">
          <div className="w-full px-6 py-24 mx-auto max-w-7xl sm:py-32 lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:px-24">
            <div className="max-w-lg">
              <p className="text-base font-semibold leading-8 text-gray-400">
                404
              </p>
              <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                Page not found
              </h1>
              <p className="mt-6 text-base leading-7 text-gray-600">
                Sorry, we couldn&apos;t find the page you&apos;re looking for.
              </p>
              <div className="flex flex-col items-center gap-2 mx-auto mt-8 md:flex-row">
                <Button>Home</Button>
                <Button variant="secondary">Go back</Button>
              </div>
            </div>
          </div>
          <div className="hidden lg:relative lg:col-start-2 lg:row-start-1 lg:row-end-4 lg:block">
            <Emoji
              src="/assets/emoji-wtf.svg"
              alt="Emoji WTF"
              className="size-64 mt-20 mr-40"
              width={64}
              height={64}
              animationDuration={4}
              animationDistance={10}
              direction="vertical"
            />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
