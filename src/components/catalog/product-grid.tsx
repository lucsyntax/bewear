import { productTable, productVariantTable } from "@/db/schema";

import ProductItem from "../common/product-item";

interface ProductGridProps {
  products: (typeof productTable.$inferSelect & {
    variants: (typeof productVariantTable.$inferSelect)[];
  })[];
}

const ProductGrid = ({ products }: ProductGridProps) => {
  if (products.length === 0) {
    return (
      <div className="flex h-64 w-full flex-col items-center justify-center border-2 border-dashed border-black/20 bg-primary/5 p-8">
        <h3 className="font-mono text-xl font-bold uppercase text-black/40">
          SYS_ERROR // NO_DATA_FOUND
        </h3>
        <p className="mt-2 font-mono text-xs text-black/40">
          Try adjusting your search parameters.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 gap-4 gap-y-8 md:grid-cols-3 lg:grid-cols-4 lg:gap-6">
      {products.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductGrid;
