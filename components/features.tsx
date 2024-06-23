import { FeatureCard } from '@/components/ui/featured';
import { FilePenLine, PencilLine, Radar } from 'lucide-react';

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
          description="Opinionated but easy to follow: server actions, optimistic UI, prisma, lucia, payments with stripe and more."
          icon={<Radar />}
        />
        <FeatureCard
          title="Customizable"
          description="Mini provides an actual MVP. With just a few steps in the tool you start a new idea, attractive and brandeable."
          icon={<PencilLine />}
        />
      </div>
    </section>
  );
}
