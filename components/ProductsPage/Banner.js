import Image from "next/image";
import productBanner from "../../public/product.jpg";

export function Banner() {
  return (
    <>
      <div
        className="py-10 pt-32 sm:py-20 text-center relative border-b-[20px] border-b-white border-dotted"
        style={{
          backgroundImage: `url(${productBanner.src})`,
          backgroundRepeat: "repeat",
          backgroundSize: "auto",
          backgroundPosition: "center",
        }}
      >
        <div className="bg-black h-full z-10 w-full"></div>
        <div className="font-bold bg-opacity-80 bg-white p-6 sm:p-10 rounded-3xl border-solid border-zinc-100 border-2 text-sky-700 shadow-2xl w-11/12 sm:w-fit flex flex-col justify-center items-center mx-auto">
          <h1 className="text-xl sm:text-5xl font-bold text-sky-700">
            Welcome to Our Store
          </h1>
          <p className="mt-2 sm:mt-4 text-sm sm:text-2xl text-black">
            Discover amazing products at great prices!
          </p>
        </div>
      </div>
    </>
  );
}
