"use client";

import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import Autoplay from "embla-carousel-autoplay";
import reviewImage from "@/public/CakeLawa_Circular_Logo_Clean.webp";

const items = [
  {
    title: "Saisha Gogia",
    description: "Absolutely love this place! Their cheesecakes are the creamiest I’ve ever had—rich, flavorful, and perfectly sweet. The brownie selection is also top-notch, especially the fudge walnut one. It's my go-to dessert spot.",
  },
  {
    title: "Aryaman Chaudhary",
    description: "Every time I walk in, I’m greeted with the sweet scent of freshly baked goods. The cakes are moist and beautifully decorated, and the mini desserts are a fun treat to take home. Highly recommend their triple chocolate brownie!",
  },
  {
    title: "Isheeta Juneja",
    description: "I ordered a custom birthday cake and some cheesecake slices for a party—everyone was blown away! The red velvet cheesecake is out of this world. It’s clear that everything is made with high-quality ingredients.",
  },
  {
    title: "Vishist Kohsiy",
    description: "This bakery is a hidden gem. The brownie-stuffed cookies are genius, and their strawberry swirl cheesecake is a must-try. I love that they also have seasonal items that keep the menu exciting.",
  },
  {
    title: "Shenaya Kapoor",
    description: "I’m a huge dessert lover, and this bakery hits all the right notes. The Oreo cheesecake is my weakness, and the brownie sundae was heavenly. Everything feels freshly made and not overly sweet.",
  },
  {
    title: "Yash Tyagi",
    description: "If you're looking for quality desserts, this is the place. The presentation is beautiful, and the flavors are even better. The carrot cake was moist with just the right amount of spice, and the brownies had the perfect crackly top.",
  },
  {
    title: "Tisha Singhania",
    description: "Stopped in on a whim and left with a box of assorted desserts. The lemon cheesecake was tangy and smooth, and the brownies were decadent. You can tell the bakers are passionate about what they do.",
  },
  {
    title: "Dhruv Kumar",
    description: "You can really taste the love in their baking. The brownies are dense and gooey, just the way I like them. I also tried a tiramisu cake slice and it was phenomenal—light, creamy, and packed with flavor.",
  },
];

export function Reviews() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-bold text-sky-700 text-center mb-8 md:mb-12">
          Sweet Reviews
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="flex justify-center items-center">
            <Image
              src={reviewImage}
              alt="Dessert variety"
              width={300}
              height={300}
              className="rounded-full bg-pink-200 md:w-[400px] md:h-[400px]"
            />
          </div>
          <div>
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              plugins={[
                Autoplay({
                  delay: 3000,
                }),
              ]}
              orientation="vertical"
              className="max-w-full md:max-w-4xl h-[400px] md:h-[600px]"
            >
              <CarouselContent className="-mt-1 h-[400px] md:h-[600px]">
                {Array.from({
                  length: Math.ceil(items.length / 4),
                }).map((_, index) => (
                  <CarouselItem key={index} className="py-6 md:py-10">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 h-full">
                      {items
                        .slice(index * 4, (index + 1) * 4)
                        .map((item, itemIndex) => (
                          <Card
                            key={itemIndex}
                            className="bg-pink-200 border-none shadow-none flex flex-col"
                          >
                            <CardHeader>
                              <CardTitle className="text-lg md:text-xl font-semibold text-sky-800">
                                {item.title}
                              </CardTitle>
                            </CardHeader>
                            <CardContent className="flex-grow">
                              <CardDescription className="text-sm md:text-md text-sky-700">
                                {item.description}
                              </CardDescription>
                            </CardContent>
                          </Card>
                        ))}
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious
                className={cn(
                  "bg-transparent border-primary text-primary hover:bg-primary hover:text-primary-foreground",
                  "left-1/2 -translate-x-1/2 top-0"
                )}
              />
              <CarouselNext
                className={cn(
                  "bg-transparent border-primary text-primary hover:bg-primary hover:text-primary-foreground",
                  "left-1/2 -translate-x-1/2 bottom-0"
                )}
              />
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
}
