import Image from "next/image";
import Link from "next/link";

import { productTable, productVariantTable } from "@/db/schema";
import { formatCentsToBRL } from "@/helpers/money";
import { cn } from "@/lib/utils";

const COLOR_MAP: Record<string, string> = {
  preta: "#1a1a1a",
  preto: "#1a1a1a",
  branca: "#f5f5f5",
  branco: "#f5f5f5",
  azul: "#2563eb",
  verde: "#16a34a",
  vinho: "#7f1d1d",
  bege: "#d4b896",
  marrom: "#78350f",
  cinza: "#6b7280",
  vermelha: "#dc2626",
  vermelho: "#dc2626",
  amarelo: "#eab308",
  amarela: "#eab308",
  rosa: "#ec4899",
};

interface ProductItemProps {
  product: typeof productTable.$inferSelect & {
    variants: (typeof productVariantTable.$inferSelect)[];
  };
  textContainerClassName?: string;
}

const ProductItem = ({ product, textContainerClassName }: ProductItemProps) => {
  const firstVariant = product.variants[0];
  const hasMultipleVariants = product.variants.length > 1;

  return (
    <Link
      href={`/product-variant/${firstVariant.slug}`}
      className="group relative flex flex-col bg-card transition-all duration-300 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1"
    >
      <div className="relative aspect-[4/5] w-full overflow-hidden">
        <Image
          src={firstVariant.imageUrl}
          alt={firstVariant.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 33vw"
        />

        {/* Badge — only for products less than 30 days old */}
        {product.createdAt && (Date.now() - new Date(product.createdAt).getTime()) < 30 * 24 * 60 * 60 * 1000 && (
          <div className="absolute left-0 top-0 bg-primary px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-primary-foreground">
            NOVIDADE
          </div>
        )}
      </div>

      <div
        className={cn(
          "flex flex-col gap-1 py-3",
          textContainerClassName,
        )}
      >
        <div className="flex items-start justify-between gap-2">
          <p className="font-sans text-sm font-black uppercase tracking-tight leading-tight text-foreground">
            {product.name}
          </p>
          <p className="font-mono text-sm font-bold text-primary whitespace-nowrap">
            {formatCentsToBRL(firstVariant.priceInCents)}
          </p>
        </div>

        {/* Variant color swatches */}
        {hasMultipleVariants && (
          <div className="flex items-center gap-1.5 pt-1">
            {product.variants.map((variant) => {
              const hex = COLOR_MAP[variant.color.toLowerCase()] || "#9ca3af";
              const isLight = ["branca", "branco", "bege", "amarelo", "amarela"].includes(variant.color.toLowerCase());
              return (
                <span
                  key={variant.id}
                  title={variant.color}
                  className={cn(
                    "h-3 w-3 rounded-full",
                    isLight && "border border-border"
                  )}
                  style={{ backgroundColor: hex }}
                />
              );
            })}
          </div>
        )}
      </div>
    </Link>
  );
};

export default ProductItem;
