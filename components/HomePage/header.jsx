import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useState } from "react";

export function Header() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <header className="absolute w-full py-4 px-6 bg-transparent top-0 left-0 z-10">
      <div className="container mx-auto flex items-center justify-between">
        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={toggleSidebar}
        >
          <Menu className="h-6 w-6" />
          <span className="sr-only">Open Menu</span>
        </Button>

        {/* Logo */}
        <Link
          href="/"
          className="text-center bg-opacity-4 bg-sky-100 p-3 rounded-3xl border-solid border-zinc-100 border-2 flex justify-center items-center align-middle"
        >
          <h1 className="text-4xl md:text-6xl font-semibold text-sky-700">
            CakeLawa
          </h1>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex md:gap-6 text-sky-800 text-lg font-black">
          <Link href="/products">
            <Button
              className={cn("bg-white/70 text-sky-800 hover:bg-sky-500/50 hover:text-white font-bold border-blue-400/50 border-2 rounded-3xl")}
              variant=""
              size="lg"
            >
              Explore Our Menu
            </Button>
          </Link>
        </div>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-20 transition-opacity duration-300 ${
          isSidebarOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className={`fixed top-0 left-0 w-64 h-full bg-white shadow-lg z-30 transform transition-transform duration-300 ${
            isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between p-4 border-b">
            <Link href="/" className="text-xl font-bold text-sky-700">
              CakeLawa
            </Link>
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleSidebar}
            >
              <X className="h-6 w-6" />
              <span className="sr-only">Close Menu</span>
            </Button>
          </div>
          <nav className="p-4">
            <Link
              href="/products"
              className="block text-lg font-semibold text-sky-700 hover:underline"
              onClick={toggleSidebar}
            >
              Explore Our Menu
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}

