"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

export default function Gifts() {
  return (
    <Carousel
      plugins={[
        Autoplay({
          delay: 1500,
        }),
      ]}
    >
      <CarouselContent>
        <CarouselItem>
          <Image
            alt="Ramo de flores"
            className="rounded-2xl border-2 border-pink-500"
            src="/imgs/ramo.jpeg"
            height={500}
            width={350}
          />
        </CarouselItem>
        <CarouselItem>
          <Image
            alt="Ramo de flores"
            className="rounded-2xl border-2 border-pink-500"
            src="/imgs/collar.jpeg"
            height={500}
            width={350}
          />
        </CarouselItem>
      </CarouselContent>
    </Carousel>
  );
}
