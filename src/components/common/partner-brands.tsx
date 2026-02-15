"use client";

import Image from "next/image";

interface PartnerBrandsProps {
  title: string;
}

const PartnerBrands = ({ title }: PartnerBrandsProps) => {
  const partnerBrands = [
    { path: "/nike.svg", name: "Nike" },
    { path: "/adidas.svg", name: "Adidas" },
    { path: "/puma.svg", name: "Puma" },
    { path: "/newbalance.svg", name: "New Balance" },
    { path: "/converse.svg", name: "Converse" },
    { path: "/polo.svg", name: "Polo" },
    { path: "/zara.svg", name: "Zara" },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between px-5">
         <h2 className="font-black text-2xl uppercase tracking-tighter border-l-4 border-primary pl-3">
            {title}
         </h2>
         <div className="h-[2px] flex-1 bg-border ml-4 opacity-20"></div>
      </div>
      
      <div className="flex w-full gap-4 overflow-x-auto px-5 pb-4 [&::-webkit-scrollbar]:hidden">
        {partnerBrands.map((brand, index) => (
          <div key={index} className="flex-shrink-0 group">
            <div className="flex h-24 w-24 flex-col items-center justify-center border-2 border-border bg-card transition-all duration-200 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:shadow-[4px_4px_0px_0px_var(--color-primary)]">
              <Image
                src={brand.path}
                alt={brand.name}
                width={40}
                height={40}
                className="object-contain grayscale transition-all duration-300 group-hover:grayscale-0"
              />
            </div>
            <p className="mt-2 text-center text-xs font-bold uppercase tracking-wider opacity-100 sm:opacity-0 transition-opacity sm:group-hover:opacity-100">{brand.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PartnerBrands;
