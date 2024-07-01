import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@/components/ui/accordion';
import { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Primitives/Accordion',
  render: (args) => (
    <div className="px-8 mx-auto md:px-12 lg:px-32 max-w-7xl">
      <div className="p-2 mt-12 border bg-gray-50 rounded-3xl">
        <div className="flex flex-col gap-6 p-10 bg-white border shadow-lg md:p-20 rounded-3xl lg:col-span-2">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>Is it accessible?</AccordionTrigger>
              <AccordionContent>
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Is it styled?</AccordionTrigger>
              <AccordionContent>
                Yes. It comes with default styles that matches the other
                components&apos; aesthetic.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Is it animated?</AccordionTrigger>
              <AccordionContent>
                Yes. It&apos;s animated by default, but you can disable it if
                you prefer.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  ),
  parameters: {},
} satisfies Meta<{}>;

export default meta;

type Story = StoryObj<typeof meta>;

export const AcorrdionDemo: Story = {
  args: {},
  tags: ['autodocs'],
};
