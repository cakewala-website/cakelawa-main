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

import bar_choc from "@/public/exclusive/bar_chocolates.jpg";
import blueberry_cheesecake from "@/public/exclusive/blueberry_cheesecake.jpg";
import bon_bon_chocolate from "@/public/exclusive/bon_bon_chocolate.jpg";
import bon_bon from "@/public/exclusive/bon_bon.jpg";
import brownie from "@/public/exclusive/brownie.jpg";
import cheeseCake from "@/public/exclusive/cheeseCake.jpg";
import chocolate_sticks from "@/public/exclusive/chocolate_sticks.jpg";
import Jars from "@/public/exclusive/Jars.jpg";
import muffin_barcake from "@/public/exclusive/muffin_barcake.jpg";
import pastry from "@/public/exclusive/pastry.jpg";
import tiramisu from "@/public/exclusive/tiramisu.jpg";


export function CarouselPlugin() {
    const plugin = React.useRef(
        Autoplay({ delay: 2000, stopOnInteraction: true })
  );
  
  const products = [
    {
      name: "Brownie",
      photo: brownie,
    },
    {
      name: "Blueberry Cheesecake",
      photo: blueberry_cheesecake,
    },
    {
      name: "Bon Bon Chocolate",
      photo: bon_bon_chocolate,
    },
    {
      name: "Bon Bon",
      photo: bon_bon,
    },
    {
      name: "Cheese Cake",
      photo: cheeseCake,
    },
    {
      name: "Chocolate Sticks",
      photo: chocolate_sticks,
    },
    {
      name: "Pastry",
      photo: pastry,
    },
    {
      name: "Tiramisu",
      photo: tiramisu,
    },
    {
      name: "Muffin Bar Cake",
      photo: muffin_barcake,
    },
    {
      name: "Jars",
      photo: Jars,
    },
    {
      name: "Bar Chocolates",
      photo: bar_choc,
    },
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
                <CardContent className="relative flex flex-col items-center justify-center bg-sky-100 rounded-xl overflow-hidden h-64">
                  <span className="absolute bottom-0 w-full text-center text-white text-xl font-serif bg-black bg-opacity-50 py-2 z-10">
                    {product.name}
                  </span>
                  <Image
                    src={product.photo}
                    alt={product.name}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg"
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
