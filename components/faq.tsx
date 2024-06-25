import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export function Faq() {
  return (
    <section>
      <div className="px-8 py-24 mx-auto md:px-12 lg:px-32 max-w-7xl">
        <div className="text-center">
          <div>
            <p className="text-4xl font-bold">Frequent questions and answers</p>
            <p className="w-1/2 mx-auto mt-4 text-balance">
              Answers to commonly asked questions about our platform
            </p>
          </div>
        </div>
        <div className="p-2 mt-12 border bg-gray-50 rounded-3xl">
          <div className="flex flex-col gap-6 p-10 bg-white border shadow-lg md:p-20 rounded-3xl lg:col-span-2">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>Does it modify shadcn-ui?</AccordionTrigger>
                <AccordionContent>
                  Yes, it does. That&apos;s the whole point of shadcn-ui,
                  otherwise every app would look and feel the same. Instead of
                  requiring tailwindcss-animate, it uses framer-motion. The
                  components are sometimes the same, sometimes are not. It also
                  includes some new components with the same code style.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>Why?</AccordionTrigger>
                <AccordionContent>
                  Because I&apos;ve seen a lot of projects which end including
                  not only the default tailwindcss-animate, but framer-motion
                  for some things, GSAP for other things. This way, developers
                  can see everything in the same code style and use a single
                  library.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>
                  How should I modify the content, let&apos;s say, the landing
                  page?
                </AccordionTrigger>
                <AccordionContent>
                  You can use the CLI to swap sections, or you can run the
                  accompanying Storybook and play around with the components.
                  The CLI will show you the available sections as images in your
                  terminal.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}
