import { eq } from "drizzle-orm";
import Link from "next/link";
import { notFound } from "next/navigation";

import { Header } from "@/components/common/header";
import ProductItem from "@/components/common/product-item";
import { db } from "@/db";
import { categoryTable, productTable } from "@/db/schema";

interface CategoryPageProps {
  params: Promise<{ slug: string }>;
}

const CategoryPage = async ({ params }: CategoryPageProps) => {
  const { slug } = await params;
  const category = await db.query.categoryTable.findFirst({
    where: eq(categoryTable.slug, slug),
  });

  if (!category) {
    return notFound();
  }
  const products = await db.query.productTable.findMany({
    where: eq(productTable.categoryId, category.id),
    with: {
      variants: true,
    },
  });
  return (
    <>
      <Header />
      <div className="container mx-auto px-5 py-8">
        <div className="mb-10 space-y-4">
           {/* Breadcrumb Style */}
           <nav className="flex items-center gap-2 font-mono text-xs uppercase text-muted-foreground" aria-label="Breadcrumb">
              <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
              <span>/</span>
              <span className="text-foreground font-bold">{category.name}</span>
           </nav>
           
           {/* Brutalist Header */}
           <div className="relative border-b-4 border-black pb-4">
              <h2 className="text-6xl font-black uppercase tracking-tighter sm:text-7xl lg:text-8xl">
                {category.name}
              </h2>
              <div className="absolute -bottom-1 left-0 h-4 w-32 bg-primary"></div>
           </div>
           <p className="font-mono text-sm uppercase tracking-wide text-muted-foreground">
              {products.length} Produtos Encontrados
           </p>
        </div>

        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-5">
          {products.map((product) => (
            <ProductItem
              key={product.id}
              product={product}
              textContainerClassName="max-w-full"
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default CategoryPage;
