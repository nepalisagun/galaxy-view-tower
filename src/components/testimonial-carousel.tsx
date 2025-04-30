'use client';

import * as React from 'react';
import Autoplay from "embla-carousel-autoplay"

import { testimonials } from '@/data/testimonials';
import { TestimonialCard } from '@/components/testimonial-card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export function TestimonialCarousel() {
   const plugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true })
  )

  return (
    <section id="testimonials" className="py-16 bg-secondary">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-10 text-primary">What Our Guests Say</h2>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
           plugins={[plugin.current]}
           onMouseEnter={plugin.current.stop}
           onMouseLeave={plugin.current.reset}
          className="w-full max-w-xs sm:max-w-lg md:max-w-2xl lg:max-w-4xl xl:max-w-6xl mx-auto"
        >
          <CarouselContent>
            {testimonials.map((testimonial) => (
              <CarouselItem key={testimonial.id} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1 h-full">
                   <TestimonialCard testimonial={testimonial} />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden sm:flex"/>
          <CarouselNext className="hidden sm:flex"/>
        </Carousel>
      </div>
    </section>
  );
}
