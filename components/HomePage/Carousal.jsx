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

export function CarouselPlugin() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  const products = [
    { name: "Brownie", photo: "/exclusive/brownie.jpg" },
    { name: "Blueberry Cheesecake", photo: "/exclusive/blueberry_cheesecake.jpg" },
    { name: "Bon Bon Chocolate", photo: "/exclusive/bon_bon_chocolate.jpg" },
    { name: "Bon Bon", photo: "/exclusive/bon_bon.jpg" },
    { name: "Cheese Cake", photo: "/exclusive/cheese_cake.webp" },
    { name: "Chocolate Sticks", photo: "/exclusive/chocolate_sticks.jpg" },
    { name: "Pastry", photo: "/exclusive/pastry.jpg" },
    { name: "Tiramisu", photo: "/exclusive/tiramisu.jpg" },
    { name: "Muffin Bar Cake", photo: "/exclusive/muffin_barcake.jpg" },
    { name: "Jars", photo: "/exclusive/Jars.jpg" },
    { name: "Bar Chocolates", photo: "/exclusive/bar_chocolates.jpg" },
  ];

  return (
    <Carousel
      plugins={[plugin.current]}
      className=""
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {products.map((product, index) => (
          <CarouselItem className="md:basis-1/4" key={index}>
            <div className="p-1">
              <Card className="border-none shadow-none">
                <CardContent className="relative flex flex-col items-center justify-center bg-sky-100 rounded-xl overflow-hidden h-64 p-0">
                  <span className="absolute bottom-0 w-full text-center text-white text-xl font-serif bg-black bg-opacity-50 py-2 z-10">
                    {product.name}
                  </span>
                  <Image
                    src={product.photo}
                    alt={product.name}
                    width={500}
                    height={500}
                    className="rounded-lg h-full w-full object-cover"
                  />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
