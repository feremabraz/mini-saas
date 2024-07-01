import type { Meta, StoryObj } from '@storybook/react';
import { Scroller, Logo } from '@/components/ui/scroller';
import { cn } from '@/lib/utils';
import { Bone, Bug, Cat, PawPrint } from 'lucide-react';
import BoringAvatar from 'boring-avatars';

const meta: Meta<typeof Scroller> = {
  title: 'Components/Scroller',
  component: Scroller,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Scroller>;

const logos: Logo[] = [
  { icon: Bone, name: 'Bone' },
  { icon: Bug, name: 'Bug' },
  { icon: Cat, name: 'Cat' },
  { icon: PawPrint, name: 'Paw' },
];

export const LogoScroller: Story = {
  args: {
    useLogos: true,
    logos: logos,
  },
};

const reviews = [
  {
    name: 'Jack',
    username: '@jack',
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: 'https://avatar.vercel.sh/jack',
  },
  {
    name: 'Jill',
    username: '@jill',
    body: "I don't know what to say. I'm speechless. This is amazing.",
    img: 'https://avatar.vercel.sh/jill',
  },
  {
    name: 'John',
    username: '@john',
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: 'https://avatar.vercel.sh/john',
  },
  {
    name: 'Jane',
    username: '@jane',
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: 'https://avatar.vercel.sh/jane',
  },
  {
    name: 'Jenny',
    username: '@jenny',
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: 'https://avatar.vercel.sh/jenny',
  },
  {
    name: 'James',
    username: '@james',
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: 'https://avatar.vercel.sh/james',
  },
];

const boringColors = ['#BBB5BD', '#BDBABD', '#C4BAB9'];

const ReviewCard = ({
  name,
  username,
  body,
}: {
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        'relative cursor-pointer overflow-hidden rounded-xl border p-4',
        'border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]',
        'dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]'
      )}
      style={{ width: '280px' }}
    >
      <div className="flex flex-row items-center gap-2">
        <div className="flex items-center justify-center">
          <BoringAvatar
            size={24}
            name={name}
            variant="beam"
            colors={boringColors}
            square={false}
          />
        </div>
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium dark:text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
};

export const ReviewScroller: Story = {
  args: {
    useLogos: false,
  },
  render: (args) => {
    const scrollerContent = (
      <>
        <div className="flex gap-4">
          {reviews.map((review) => (
            <ReviewCard key={review.username} {...review} />
          ))}
        </div>
        {/* Add an extra gap at the end */}
        <div className="w-4 flex-shrink-0"></div>
      </>
    );

    return (
      <div className="relative w-full overflow-hidden py-10">
        <Scroller
          {...args}
          className="mb-4"
          animate={{ x: ['0%', '-50%'] }}
          transition={{
            x: {
              duration: 20,
              repeat: Infinity,
              repeatType: 'loop',
              ease: 'linear',
            },
          }}
        >
          {scrollerContent}
          {scrollerContent}
        </Scroller>
        <Scroller
          {...args}
          animate={{ x: ['-50%', '0%'] }}
          transition={{
            x: {
              duration: 15,
              repeat: Infinity,
              repeatType: 'loop',
              ease: 'linear',
            },
          }}
        >
          {scrollerContent}
          {scrollerContent}
        </Scroller>
      </div>
    );
  },
};
