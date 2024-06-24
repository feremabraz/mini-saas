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
    </section>
  );
}
