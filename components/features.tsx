import { FeatureCard } from '@/components/ui/featured';
import { BookText, FilePenLine, PencilLine, Radar } from 'lucide-react';

export function Features() {
  return (
    <section className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="flex gap-4 justify-center flex-wrap w-full p-4 bg-white">
        <FeatureCard
          title="Adaptable"
          description="Unlike Kirimase, Mini's CLI is included in your project, shadcn style. You own the code and adapt the templates to your needs."
          icon={<FilePenLine />}
        />
        <FeatureCard
          title="Easy to follow"
          description="Opinionated but easy to reason about: server actions, optimistic UI, prisma, lucia, payments with stripe, mail sending and more."
          icon={<Radar />}
        />
        <FeatureCard
          title="Customizable"
          description="Mini provides a whitelabel MVP. You use the CLI to do the chores associated with customization, focusing on value proposition."
          icon={<PencilLine />}
        />
        <FeatureCard
          title="Self-documented"
          description="There is no need to follow YouTube tutorials or read a README when you follow a tool, and it's all there, in your project."
          icon={<BookText />}
        />
      </div>
      <div
        className="mt-8 mx-20 inverse-toggle px-5 pt-4 shadow-lg text-gray-100 text-sm font-mono subpixel-antialiased 
              bg-neutral-900 pb-6 rounded-lg leading-normal overflow-hidden"
      >
        <div className="top mb-2 flex">
          <div className="h-3 w-3 bg-red-500 rounded-full"></div>
          <div className="ml-2 h-3 w-3 bg-orange-300 rounded-full"></div>
          <div className="ml-2 h-3 w-3 bg-green-500 rounded-full"></div>
        </div>
        <div className="mt-4 flex">
          <span className="text-green-400">computer:~$</span>
          <p className="flex-1 typing items-center pl-2">
            git clone https://github.com/feremabraz/mini-saas.git && cd
            mini-saas && pnpm mini
            <br />
          </p>
        </div>
      </div>
    </section>
  );
}
