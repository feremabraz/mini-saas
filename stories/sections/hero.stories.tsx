import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Underlined } from '@/components/ui/underlined';
import { Emoji } from '@/components/ui/emoji';
import BoringAvatar from 'boring-avatars';
import { Terminal } from 'lucide-react';
import Image from 'next/image';
import { BorderBeam } from '@/components/ui/border-beam';
import { SparklesText } from '@/components/ui/sparks';

const meta: Meta = {
  title: 'Sections/Hero',
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const DefaultHero: Story = {
  render: () => {
    const boringColors = ['#BBB5BD', '#BDBABD', '#C4BAB9'];
    return (
      <section className="overflow-hidden">
        <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="absolute top-0 z-[-2] h-full w-8/12 bg-white bg-[radial-gradient(100%_50%_at_50%_0%,rgba(0,1,1,0.13)_0,rgba(0,163,255,0)_50%,rgba(0,163,255,0)_100%)]" />
          <div className="relative mx-auto max-w-4xl grid space-y-5 sm:space-y-10">
            {/* Announcement Banner */}
            <div className="flex justify-center">
              <a
                className="inline-flex items-center gap-x-2 border text-xs px-2 py-1 rounded-lg transition"
                href="#"
              >
                <span className="py-1.5 px-2.5 inline-flex justify-center items-center gap-x-2 rounded-lg bg-muted-foreground/15 font-semibold text-sm">
                  <Terminal className="size-3" />
                </span>
                gh repo clone feremabraz/mini
              </a>
            </div>
            {/* End Announcement Banner */}
            {/* Title */}
            <div className="text-center">
              <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
                Let&apos;s Build a <Underlined>Product</Underlined>
              </h1>
            </div>
            <div className="mt-5 max-w-3xl text-center mx-auto">
              <p className="text-xl text-muted-foreground">
                Mini is a Next.js 15 & React 19 unbloated but feature-complete
                template. It includes a customizable tool that guides you to
                define your schema and that generates server actions, routes and
                components in a MVC fashion.
              </p>
            </div>
            {/* End Title */}
            {/* Avatar Group */}
            <div className="sm:flex sm:justify-center sm:items-center text-center sm:text-start">
              <div className="flex-shrink-0 pb-5 sm:flex sm:pb-0 sm:pe-5">
                {/* Avatar Group */}
                <div className="flex justify-center -space-x-3">
                  <BoringAvatar
                    size={32}
                    name="Maria Mitchell"
                    variant="beam"
                    colors={boringColors}
                  />
                  <BoringAvatar
                    size={32}
                    name="Taylor Watson"
                    variant="beam"
                    colors={boringColors}
                  />
                  <BoringAvatar
                    size={32}
                    name="Ana Potter"
                    variant="beam"
                    colors={boringColors}
                  />
                  <BoringAvatar
                    size={32}
                    name="Orban Klapper"
                    variant="beam"
                    colors={boringColors}
                  />
                  <span className="z-10 inline-flex items-center justify-center h-8 w-8 rounded-full ring-2 ring-muted-foreground bg-background">
                    <span className="text-xs font-medium leading-none uppercase">
                      7k+
                    </span>
                  </span>
                </div>
                {/* End Avatar Group */}
              </div>
              <div className="border-t sm:border-t-0 sm:border-s  w-32 h-px sm:w-auto sm:h-full mx-auto sm:mx-0" />
              <div className="pt-5 sm:pt-0 sm:ps-5">
                <div className="text-lg font-semibold">Trust Pilot</div>
                <div className="text-sm text-muted-foreground">
                  Rated best over 7k reviews
                </div>
              </div>
            </div>
            {/* End Avatar Group */}
            {/* Form */}
            <form>
              <div className="mx-auto max-w-2xl sm:flex sm:space-x-3 p-3 border rounded-lg shadow-lg shadow-primary-foreground bg-white">
                <div className="pb-2 sm:pb-0 sm:flex-[1_0_0%]">
                  <Label htmlFor="email">
                    <span className="sr-only">Your email</span>
                  </Label>
                  <Input type="email" id="email" placeholder="Your name" />
                </div>
                <div className="pt-2 sm:pt-0 sm:ps-3 border-t sm:border-t-0 sm:border-s sm:flex-[1_0_0%]">
                  <Label
                    htmlFor="password"
                    className="block text-sm font-medium dark:text-white"
                  >
                    <span className="sr-only">Your password</span>
                  </Label>
                  <Input
                    type="password"
                    id="password"
                    placeholder="Your password"
                  />
                </div>
                <div className="pt-2 sm:pt-0 grid sm:block sm:flex-[0_0_auto]">
                  <Button>Just check it</Button>
                </div>
              </div>
            </form>
            {/* End Form */}
            {/* SVG Element */}
            <div
              className="hidden absolute top-2/4 start-0 transform -translate-y-2/4 -translate-x-40 md:block lg:-translate-x-80"
              aria-hidden="true"
            >
              <Emoji
                src="/assets/emoji-left.svg"
                alt="Emoji Left"
                className="flex-shrink-0 size-64 bg-white"
                width={64}
                height={64}
                animationDuration={4}
                animationDistance={10}
              />
            </div>
            {/* End SVG Element */}
            {/* SVG Element */}
            <div
              className="hidden absolute top-2/4 end-0 transform -translate-y-2/4 translate-x-40 md:block lg:translate-x-80"
              aria-hidden="true"
            >
              <Emoji
                src="/assets/emoji-right.svg"
                alt="Emoji Left"
                className="flex-shrink-0 size-64 bg-white"
                width={64}
                height={64}
                animationDuration={6}
                animationDistance={8}
              />
            </div>
            {/* End SVG Element */}
          </div>
        </div>
      </section>
    );
  },
};

export const NonDefaultHero: Story = {
  render: () => {
    return (
      <section>
        <div className="px-8 py-24 mx-auto md:px-12 lg:px-32 max-w-7xl">
          <div className="text-center">
            <h1 className="text-4xl font-semibold tracking-tighter text-gray-900 lg:text-5xl text-balance">
              Building one pagers together,
              <SparklesText text="wherever and anywhere" />
            </h1>
            <p className="mt-4 text-base font-medium text-gray-500">
              The fastest method for working together on staging and temporary
              environments.
            </p>
            <div className="flex flex-col items-center justify-center gap-2 mx-auto mt-8 md:flex-row">
              <Button>Get Started</Button>
              <Button variant={'secondary'}>Documentation</Button>
            </div>
          </div>
          <div className="relative h-full p-2 mt-12 overflow-hidden border rounded-3xl">
            <BorderBeam
              borderWidth={3}
              duration={10}
              delay={0.5}
              variant={'blue'}
            />
            <Image
              src="https://images.unsplash.com/photo-1572905046368-9232a9149fb4"
              className="object-cover h-full border shadow-2xl rounded-3xl"
              alt="Software Screenshot"
              width={1200}
              height={600}
            />
          </div>
        </div>
      </section>
    );
  },
};
