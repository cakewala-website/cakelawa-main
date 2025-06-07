'use client'

import { CarouselPlugin } from "./Carousal";
import Image from 'next/image'
import { useState, useEffect } from 'react'
import heroBg from '../../public/hero-bg.jpg';
import heroBgMobile from '../../public/hero-bg-mobile.jpg';
import { Fullscreen } from "lucide-react";


export function Hero() {

  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768) // Adjust this breakpoint as needed
    }

    checkIsMobile()
    window.addEventListener('resize', checkIsMobile)

    return () => {
      window.removeEventListener('resize', checkIsMobile)
    }
  }, [])
  return (
    <section className="relative  max-h-screen overflow-hidden">
     <Image
        src={isMobile ? heroBgMobile : heroBg}
        alt="Hero background"
        objectFit="cover"
        priority
        width={1920}
        height={1080}
      />
      <div className=" absolute inset-0 container flex flex-col top-1/4 justify-between  mx-auto text-center px-4 py-2 items-center overflow-hidden">
        <div className="font-bold bg-opacity-40 bg-white p-10 rounded-3xl border-solid border-zinc-100 border-2 text-sky-700 shadow-2xl">
          <h1 className="text-4xl  md:text-5xl lg:text-8xl  mb-10">
            CakeLawa
          </h1>
          <h2 className="text-2xl md:text-3xl lg:text-4xl">
            Handcrafted Pastries & Breads Made with Love
          </h2>
        </div>
        {/* <div className="flex items-center justify-center gap-4 max-w-xl mx-auto">
          <div className="relative flex-1">
            <Input
              type="text"
              placeholder="Let's Find A Perfect Dessert For You..."
              className="w-full pl-4 pr-12 py-2 rounded-md"
            />
          </div>
          <Button className="bg-blue-600 text-white hover:bg-blue-700">
            Search
          </Button>
        </div> */}
        {/* <div className="flex justify-center items-center gap-4 mt-8">
          {[1, 2, 3, 4].map((i) => (
            <Image
              key={i}
              src={show1}
              alt={`Donut ${i}`}
              width={1080}
              height={1080}
              className="animate-float h-56 w-64"
            />
          ))}
        </div> */}
        {/* <CarouselPlugin /> */}
      </div>
      {/* <div className="absolute -bottom-10 left-0 w-full flex justify-evenly items-center">
        {Array.from({ length: 30 }).map((_, i) => (
          <div
            key={i}
            className="bg-blue-100 right-0 -bottom-10 h-20 w-20 rounded-full"
          ></div>
        ))}
      </div> */}
    </section>
  );
}
