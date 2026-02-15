"use client";

import Image from "next/image";
import Link from "next/link";

const PromoBanner = () => {
  return (
    <div className="relative w-full h-[500px] overflow-hidden border-y-4 border-black group my-10">
      {/* Background Image with Overlay */}
      <Image
        src="/banner-02.png"
        alt="Promoção"
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-105 filter grayscale group-hover:grayscale-0"
      />
      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-500" />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-5">
        <h2 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter italic drop-shadow-[4px_4px_0px_rgba(0,0,0,1)]">
          Seja <br />
          <span className="text-primary drop-shadow-[4px_4px_0px_#000]">Autêntico</span>
        </h2>
        
        <p className="mt-4 max-w-md text-lg font-bold text-white bg-black px-2 uppercase tracking-wide">
          Nova coleção Streetwear {new Date().getFullYear()}
        </p>

        <Link
          href="/category/camisetas"
          className="mt-8 relative px-8 py-4 bg-white text-black font-black text-xl uppercase tracking-tighter border-2 border-black transition-all hover:-translate-y-1 hover:translate-x-1 hover:shadow-[6px_6px_0px_0px_var(--color-primary)] active:translate-x-0 active:translate-y-0 active:shadow-none"
        >
          Comprar Agora
        </Link>
      </div>
      
      {/* Decorative corners */}
      <div className="absolute top-0 left-0 w-8 h-8 border-t-4 border-l-4 border-white"></div>
      <div className="absolute top-0 right-0 w-8 h-8 border-t-4 border-r-4 border-white"></div>
      <div className="absolute bottom-0 left-0 w-8 h-8 border-b-4 border-l-4 border-white"></div>
      <div className="absolute bottom-0 right-0 w-8 h-8 border-b-4 border-r-4 border-white"></div>
    </div>
  );
};

export default PromoBanner;
