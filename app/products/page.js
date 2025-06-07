"use client";

import { Footer } from "@/components/HomePage/footer";
import { Header } from "@/components/HomePage/header";
import { Banner } from "@/components/ProductsPage/Banner";
import { ProductGrid } from "@/components/ProductsPage/ProductsGrid";
import { Sidebar } from "@/components/ProductsPage/Sidebar";
import { useState } from "react";

export default function ProductPage() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  return (
    <div className="min-h-screen bg-sky-100">
    <Header />
      <Banner />
      <div className="flex flex-col md:flex-row container mx-auto md:px-8">
        <Sidebar
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
        />
        <main className="flex-1 p-4 md:p-8">
          <ProductGrid selectedCategory={selectedCategory} />
        </main>
      </div>
      <Footer />
    </div>
  );
}
