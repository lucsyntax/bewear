import { eq } from "drizzle-orm";
import Image from "next/image";
import { notFound } from "next/navigation";

import Footer from "@/components/common/footer";
import { Header } from "@/components/common/header";
import ProductList from "@/components/common/product-list";
import { db } from "@/db";
import { productTable, productVariantTable } from "@/db/schema";
import { formatCentsToBRL } from "@/helpers/money";

import ProductActions from "./components/product-actions";
import VariantSelector from "./components/variant-selector";

interface ProductVariantPageProps {
  params: Promise<{ slug: string }>;
}

const ProductVariantPage = async ({ params }: ProductVariantPageProps) => {
  const { slug } = await params;
  const productVariant = await db.query.productVariantTable.findFirst({
    where: eq(productVariantTable.slug, slug),
    with: {
      product: {
        with: {
          variants: true,
        },
      },
    },
  });
  if (!productVariant) {
    return notFound();
  }
  const likelyProducts = await db.query.productTable.findMany({
    where: eq(productTable.categoryId, productVariant.product.categoryId),
    with: {
      variants: true,
    },
  });

  return (
    <>
      <Header />
      <div className="container mx-auto px-5 py-8 lg:py-12">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Coluna da Esquerda: Imagem */}
          <div className="relative aspect-[3/4] w-full overflow-hidden border-2 border-border bg-card shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            <Image
              src={productVariant.imageUrl}
              alt={productVariant.name}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>

          {/* Coluna da Direita: Informações */}
          <div className="flex flex-col space-y-8">
            <div className="space-y-4 border-b-2 border-border pb-8">
              <h2 className="font-inter text-4xl font-black uppercase tracking-tighter sm:text-5xl lg:text-6xl text-primary">
                {productVariant.product.name}
              </h2>
              <h3 className="font-mono text-xl text-muted-foreground uppercase tracking-widest">
                {productVariant.name}
              </h3>
              
              <div className="pt-2">
                <span className="inline-block -rotate-2 bg-primary px-3 py-1 font-mono text-3xl font-bold text-primary-foreground shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                  {formatCentsToBRL(productVariant.priceInCents)}
                </span>
              </div>
            </div>

            <div className="space-y-6">
              <div className="space-y-3">
                 <h4 className="font-mono text-sm uppercase tracking-wide">VARIANTES DISPONÍVEIS:</h4>
                 <VariantSelector
                    selectedVariantSlug={productVariant.slug}
                    variants={productVariant.product.variants}
                 />
              </div>

              <ProductActions productVariantId={productVariant.id} />
            </div>

            <div className="border-t-2 border-border pt-8">
              <h4 className="mb-4 font-black uppercase tracking-tight text-xl">DETALHES</h4>
              <p className="font-sans text-lg leading-relaxed text-muted-foreground">
                {productVariant.product.description}
              </p>
            </div>
          </div>
        </div>

        <div className="mt-20">
          <ProductList products={likelyProducts} title="VOCÊ TAMBÉM PODE GOSTAR" />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductVariantPage;
