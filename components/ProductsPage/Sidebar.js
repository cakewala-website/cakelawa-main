import { categories } from "@/data/data";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export function Sidebar({ selectedCategory, onSelectCategory }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Buttons for smaller screens */}
      <div className="block text-sky-800 md:hidden mb-4">
        <button
          className="flex  items-center justify-between w-full px-4 py-2 text-white bg-pink-400/80 "
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <span>Categories</span>
          {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
        <div
          className={`overflow-hidden transition-max-height duration-700 ease-in-out ${
            isMobileMenuOpen ? "max-h-screen" : "max-h-0"
          }`}
        >
          <div className=" bg-blue-200/50  rounded-b-3xl p-4">
            <ul>
              <li
                className={`cursor-pointer p-2 hover:bg-pink-200 ${
                  selectedCategory === null ? "font-bold" : ""
                }`}
                onClick={() => {
                  onSelectCategory(null);
                  setIsMobileMenuOpen(false);
                }}
              >
                All Products
              </li>
              {categories.map((category) => (
                <li
                  key={category}
                  className={`cursor-pointer p-2 hover:bg-pink-200 ${
                    selectedCategory === category ? "font-bold" : ""
                  }`}
                  onClick={() => {
                    onSelectCategory(category);
                    setIsMobileMenuOpen(false);
                  }}
                >
                  {category}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Sidebar for larger screens */}
      <div className="hidden mt-4 md:block">
        <div
          className={`fixed text-sky-800 inset-y-0 left-0 z-30 w-64 transform min-h-full rounded-3xl bg-white p-4 transition-transform duration-300 ease-in-out md:static md:translate-x-0`}
        >
          <h2 className="mb-4 text-xl font-bold">Categories</h2>
          <ul>
            <li
              className={`cursor-pointer p-2 hover:bg-gray-200 ${
                selectedCategory === null ? "font-bold" : ""
              }`}
              onClick={() => {
                onSelectCategory(null);
              }}
            >
              All Products
            </li>
            {categories.map((category) => (
              <li
                key={category}
                className={`cursor-pointer p-2 hover:bg-gray-200 ${
                  selectedCategory === category ? "font-bold" : ""
                }`}
                onClick={() => {
                  onSelectCategory(category);
                }}
              >
                {category}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
