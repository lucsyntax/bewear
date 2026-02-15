import Link from "next/link";

import { categoryTable } from "@/db/schema";

import { Button } from "../ui/button";

interface CategorySelectorProps {
  categories: (typeof categoryTable.$inferSelect)[];
}

const CategorySelector = ({ categories }: CategorySelectorProps) => {
  return (
    <div className="py-6">
      <div className="flex items-center justify-between mb-4">
         <h3 className="font-black text-xl uppercase tracking-tighter">
            CATEGORIAS
         </h3>
      </div>
      <div className="flex flex-wrap gap-3">
        {categories.map((category) => (
          <Button
            key={category.id}
            variant="outline"
            asChild
            className="rounded-none border-2 border-border h-12 px-6 text-sm font-black uppercase tracking-wide transition-all hover:-translate-y-1 hover:translate-x-1 hover:shadow-[4px_4px_0px_0px_var(--color-primary)] hover:bg-background hover:text-primary"
          >
            <Link href={`/category/${category.slug}`}>{category.name}</Link>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default CategorySelector;
