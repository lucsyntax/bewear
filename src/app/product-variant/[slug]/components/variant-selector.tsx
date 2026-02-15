import Image from "next/image";
import Link from "next/link";

import { productVariantTable } from "@/db/schema";

interface VariantSelectorProps {
  selectedVariantSlug: string;
  variants: (typeof productVariantTable.$inferSelect)[];
}

const VariantSelector = ({
  selectedVariantSlug,
  variants,
}: VariantSelectorProps) => {
  return (
    <div className="flex gap-4 overflow-x-auto pb-2">
      {variants.map((variant) => (
        <Link
          href={`/product-variant/${variant.slug}`}
          key={variant.id}
          className={`
            group relative h-[80px] w-[80px] flex-shrink-0 border-2 transition-all duration-200
            ${
              selectedVariantSlug === variant.slug
                ? "border-primary bg-primary translate-x-[2px] translate-y-[2px] shadow-none"
                : "border-border bg-card hover:-translate-y-1 hover:translate-x-1 hover:shadow-[4px_4px_0px_0px_var(--color-primary)]"
            }
          `}
        >
          <Image
            src={variant.imageUrl}
            alt={variant.name}
            fill
            className={`object-cover ${
              selectedVariantSlug === variant.slug ? "opacity-90 grayscale" : "grayscale-0 group-hover:grayscale transition-all"
            }`}
          />
        </Link>
      ))}
    </div>
  );
};

export default VariantSelector;
