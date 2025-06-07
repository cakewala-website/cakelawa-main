'use client'

import { Header } from "@/components/HomePage/header"
import { Hero } from "@/components/HomePage/hero"
import { Categories } from "@/components/HomePage/categories"
import { FeaturedProduct } from "@/components/HomePage/featured-product"
import { ProductCarousel } from "@/components/HomePage/product-carousel"
import { Reviews } from "@/components/HomePage/reviews"
import { Articles } from "@/components/HomePage/articles"
import { Footer } from "@/components/HomePage/footer"

export default function Home() {
  return (
    <div className="min-h-screen relative">
    <Header />
    <main>
      <Hero />
      <Categories />
      <FeaturedProduct />
      {/* <ProductCarousel /> */}
      <Reviews />
      
    </main>
    <Footer />
  </div>
  );
}
