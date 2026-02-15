export const revalidate = 60;

import { desc } from "drizzle-orm";

import CategorySelector from "@/components/common/category-selector";
import Footer from "@/components/common/footer";
import { Header } from "@/components/common/header";
import PartnerBrands from "@/components/common/partner-brands";
import ProductList from "@/components/common/product-list";
import { Hero } from "@/components/home/hero";
import PromoBanner from "@/components/home/promo-banner";
import { db } from "@/db";
import { productTable } from "@/db/schema";

const Home = async () => {
  const products = await db.query.productTable.findMany({
    with: {
      variants: true,
    },
  });

  const newLyCreatedProducts = await db.query.productTable.findMany({
    orderBy: [desc(productTable.createdAt)],
    with: {
      variants: true,
    },
  });
  const categories = await db.query.categoryTable.findMany({});

  return (
    <>
      <Header />
      <main className="space-y-6">
        <Hero />
        <div className="px-5">
          <PartnerBrands title="PARCEIROS" />



          <ProductList products={products} title="MAIS VENDIDOS" />

          <CategorySelector categories={categories} />

          <PromoBanner />

          <ProductList products={newLyCreatedProducts} title="NOVA COLEÇÃO" />
        </div>
        <Footer />
      </main>
    </>
  );
};

export default Home;
