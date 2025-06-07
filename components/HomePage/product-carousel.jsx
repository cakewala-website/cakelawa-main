import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import show1 from "@/public/HeroCarousal/show1.webp";
import show2 from "@/public/HeroCarousal/show2.webp";
import show3 from "@/public/HeroCarousal/show3.webp";
import show4 from "@/public/HeroCarousal/show4.webp";
import show5 from "@/public/HeroCarousal/show5.webp";
import show6 from "@/public/HeroCarousal/show6.webp";
import show7 from "@/public/HeroCarousal/show7.webp";
import show8 from "@/public/HeroCarousal/show8.webp";
import show9 from "@/public/HeroCarousal/show9.webp";
import show10 from "@/public/HeroCarousal/show10.webp";
import show11 from "@/public/HeroCarousal/show11.webp";

const products = [
  {
    name: "Chocolate Brownie",
    price: "$5.00",
    image: "/placeholder.svg?height=200&width=200"
  },
  {
    name: "Blueberry Bliss Cake",
    price: "$25.00",
    image: "/placeholder.svg?height=200&width=200"
  },
  {
    name: "Honey Bliss Waffles",
    price: "$8.50",
    image: "/placeholder.svg?height=200&width=200"
  },
  {
    name: "Honey Bliss Waffles",
    price: "$8.50",
    image: "/placeholder.svg?height=200&width=200"
  },
  {
    name: "Orchard Delight Donut",
    price: "$2.75",
    image: "/placeholder.svg?height=200&width=200"
  }
]

export function ProductCarousel() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
);

  return (
    <section className="py-24 bg-sky-100 relative">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-sky-700 text-center mb-12">
          Our Featured Products
        </h2>
        <Carousel
      plugins={[plugin.current]}
      className="w-full"
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {products.map((product, index) => (
          <CarouselItem className="lg:basis-1/4" key={index}>
            <div className="p-1">
            <Card key={product.name} className="flex-shrink-0">
                <CardContent className="p-4">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={200}
                    height={200}
                    className="rounded-lg mb-4"
                  />
                  <h3 className="font-semibold mb-2">{product.name}</h3>
                  <p className="text-blue-600 font-bold">{product.price}</p>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      {/* <CarouselPrevious />
      <CarouselNext /> */}
    </Carousel>
        
      </div>
    </section>
  )
}

