import {
  Carousel,
  CarouselMainContainer,
  CarouselNext,
  CarouselPrevious,
  SliderMainItem,
  CarouselThumbsContainer,
  SliderThumbItem,
} from '@/components/ui/carousel';

export function Showcase() {
  return (
    <section className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <Carousel>
        <CarouselNext className="top-1/3 -translate-y-1/3" />
        <CarouselPrevious className="top-1/3 -translate-y-1/3" />
        <CarouselMainContainer className="h-60">
          {Array.from({ length: 5 }).map((_, index) => (
            <SliderMainItem key={index} className="bg-transparent">
              <div className="outline outline-1 outline-border size-full flex items-center justify-center rounded-xl bg-background">
                Slide {index + 1}
              </div>
            </SliderMainItem>
          ))}
        </CarouselMainContainer>
        <CarouselThumbsContainer>
          {Array.from({ length: 5 }).map((_, index) => (
            <SliderThumbItem
              key={index}
              index={index}
              className="bg-transparent"
            >
              <div className="outline outline-1 outline-border size-full flex items-center justify-center rounded-xl bg-background">
                Slide {index + 1}
              </div>{' '}
            </SliderThumbItem>
          ))}
        </CarouselThumbsContainer>
      </Carousel>
    </section>
  );
}
