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
      <h3 className="px-5 font-semibold">{title}</h3>
      <div className="flex w-full gap-6 overflow-x-auto px-5 [&::-webkit-scrollbar]:hidden">
        {partnerBrands.map((brand, index) => (
          <div key={index} className="flex-shrink-0">
            <div className="flex h-20 w-20 flex-col items-center justify-center rounded-lg border border-gray-200 bg-white">
              <Image
                src={brand.path}
                alt={brand.name}
                width={32}
                height={32}
                className="object-contain"
              />
            </div>
            <p className="mt-2 text-center text-sm font-medium">{brand.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PartnerBrands;
