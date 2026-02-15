import { desc, eq } from "drizzle-orm";

import FilterSidebar from "@/components/catalog/filter-sidebar";
import ProductGrid from "@/components/catalog/product-grid";
import Footer from "@/components/common/footer";
import { Header } from "@/components/common/header";
import { db } from "@/db";
import { categoryTable, productTable } from "@/db/schema";

interface CatalogPageProps {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

const CatalogPage = async ({ searchParams }: CatalogPageProps) => {
  const resolvedSearchParams = await searchParams;
  const categoryId = resolvedSearchParams.category as string | undefined;
  const sort = (resolvedSearchParams.sort as string) || "newest";

  // fetch categories for sidebar
  const categories = await db.select().from(categoryTable);

  // fetch products with variants
  const products = await db.query.productTable.findMany({
    where: categoryId ? eq(productTable.categoryId, categoryId) : undefined,
    with: {
      variants: true,
    },
    orderBy: [desc(productTable.createdAt)],
  });

  // Apply sorting in memory (since price is on variants and complex to sort via ORM directly in one go for now)
  const sortedProducts = [...products];

  if (sort === "price-asc") {
    sortedProducts.sort((a, b) => {
      const priceA = Math.min(...a.variants.map((v) => v.priceInCents));
      const priceB = Math.min(...b.variants.map((v) => v.priceInCents));
      return priceA - priceB;
    });
  } else if (sort === "price-desc") {
    sortedProducts.sort((a, b) => {
      const priceA = Math.min(...a.variants.map((v) => v.priceInCents));
      const priceB = Math.min(...b.variants.map((v) => v.priceInCents));
      return priceB - priceA;
    });
  }
  // "newest" is default from DB query (orderBy createdAt desc)

  return (
    <>
      <Header />
      <main className="container mx-auto min-h-screen px-5 py-8">
        <div className="mb-8 border-b-4 border-black pb-4">
          <h1 className="text-4xl font-black uppercase tracking-tighter italic lg:text-6xl">
            CATÁLOGO
          </h1>
          <p className="mt-2 font-mono text-xs font-bold text-black/60 uppercase">
            TODOS OS PRODUTOS DISPONÍVEIS // QTD: {sortedProducts.length}
          </p>
        </div>

        <div className="flex flex-col gap-8 lg:flex-row">
          <FilterSidebar categories={categories} />
          <div className="flex-1">
             <ProductGrid products={sortedProducts} />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default CatalogPage;
