"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";

import { productTable, productVariantTable } from "@/db/schema";

import ProductItem from "./product-item";

interface ProductListProps {
  title: string;
  products: (typeof productTable.$inferSelect & {
    variants: (typeof productVariantTable.$inferSelect)[];
  })[];
  initialCount?: number;
}

const ProductList = ({ title, products, initialCount = 4 }: ProductListProps) => {
  const [expanded, setExpanded] = useState(false);
  const hasMore = products.length > initialCount;
  const visibleProducts = expanded ? products : products.slice(0, initialCount);

  return (
    <div className="space-y-6">
      {title && (
        <h2 className="font-black text-xl uppercase tracking-tight">
          {title}
        </h2>
      )}

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
        {visibleProducts.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>

      {hasMore && !expanded && (
        <div className="flex justify-center pt-4">
          <button
            onClick={() => setExpanded(true)}
            className="group flex items-center gap-2 border-2 border-foreground bg-background px-6 py-3 font-mono text-sm font-bold uppercase tracking-wider text-foreground transition-all duration-200 hover:bg-foreground hover:text-background hover:shadow-[4px_4px_0px_0px_var(--color-primary)] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none cursor-pointer"
          >
            Ver mais produtos
            <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
          </button>
        </div>
      )}
    </div>
  );
};

export default ProductList;
