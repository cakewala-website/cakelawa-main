import Image from "next/image"
import hero_welcome from "@/public/Home_welcome.jpg"

export function FeaturedProduct() {
  return (
    <section className="bg-pink-200 py-16 relative">
    <div className="absolute -top-10 left-0 w-full flex justify-evenly items-center ">
        {Array.from({ length:30 }).map((_, i) => (
          <div
            key={i}
            className="bg-pink-200 right-0 -bottom-10 size-20 rounded-full"
          ></div>
        ))}
      </div>
    <div className="absolute -bottom-10 left-0 w-full flex justify-evenly items-center z-10">
        {Array.from({ length: 30 }).map((_, i) => (
          <div
            key={i}
            className="bg-pink-200 right-0 -bottom-10 size-20 rounded-full"
          ></div>
        ))}
      </div>
      <div className="container m-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          <div className="md:w-1/3 flex flex-col justify-center items-start text-center md:text-left">
            <h2 className=" text-3xl md:text-5xl font-bold text-sky-700 mb-4">
            Welcome to Cakelawa
            </h2>
            <h3 className="text-xl md:text-3xl font-semibold mb-2">Where every bite tells a story</h3>
            <p className="text-gray-600 mb-4 text-base md:text-lg font-medium">
            We specialize in creating high-quality, freshly baked goods that bring warmth to your home and joy to your taste buds. From artisanal bread to decadent pastries, we bake with only the finest ingredients. </p>
            {/* <p className="text-xl font-bold text-blue-600">
              $25.00 (8-inch round)
            </p> */}
          </div>
          <div className="md:w-1/2 w-full flex justify-center items-center">
            <Image
              src={hero_welcome}
              alt="Blueberry Bliss Cake"
              width={400}
              height={400}
              className="rounded-lg w-auto h-auto max-w-full"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

