import Image from "next/image";

export function ProductCard({ product }) {
  return (
    <div className="relative h-64 overflow-hidden rounded-lg shadow-md transition-transform duration-300 hover:scale-105">
      <Image
        src={product.image}
        alt={product.name}
        fill // makes image fill the parent container
        style={{ objectFit: "cover" }}
        className="absolute inset-0"
        sizes="(max-width: 768px) 100vw, 25vw" // optional, for responsive optimization
      />
      <div className="absolute inset-0 bg-gradient-to-t z-10 from-black via-transparent to-transparent opacity-70"></div>
      <div className="relative z-10 flex flex-col justify-end h-full p-4 text-white">
        <h3 className="text-xl font-bold">{product.name}</h3>
        <p className="text-sm font-medium text-gray-300">{product.category}</p>
      </div>
    </div>
  );
}
