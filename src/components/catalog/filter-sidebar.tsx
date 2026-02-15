"use client";

import { motion } from "framer-motion";
import { useRouter, useSearchParams } from "next/navigation";

import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { categoryTable } from "@/db/schema";

interface FilterSidebarProps {
  categories: (typeof categoryTable.$inferSelect)[];
}

const FilterSidebar = ({ categories }: FilterSidebarProps) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const currentCategory = searchParams.get("category");
  const currentSort = searchParams.get("sort") || "newest";

  const handleCategoryChange = (categoryId: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (currentCategory === categoryId) {
      params.delete("category");
    } else {
      params.set("category", categoryId);
    }
    router.push(`/catalog?${params.toString()}`);
  };

  const handleSortChange = (value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("sort", value);
    router.push(`/catalog?${params.toString()}`);
  };

  return (
    <aside className="static top-24 h-fit w-full space-y-8 lg:sticky lg:w-64">
      {/* Category Filter */}
      <div className="space-y-4">
        <h3 className="border-b-2 border-black pb-2 font-mono text-sm font-black uppercase tracking-widest">
          FILTRAR POR
        </h3>
        <div className="space-y-3">
          {categories.map((category) => (
            <div key={category.id} className="flex items-center space-x-3 group">
              <Checkbox 
                id={category.id} 
                checked={currentCategory === category.id}
                onCheckedChange={() => handleCategoryChange(category.id)}
                className="rounded-none border-2 border-black data-[state=checked]:bg-black data-[state=checked]:text-white transition-none"
              />
              <Label
                htmlFor={category.id}
                className="cursor-pointer font-mono text-xs font-bold uppercase transition-colors group-hover:text-primary group-hover:underline"
              >
                {category.name}
              </Label>
            </div>
          ))}
        </div>
      </div>

      {/* Sort Filter */}
      <div className="space-y-4">
        <h3 className="border-b-2 border-black pb-2 font-mono text-sm font-black uppercase tracking-widest">
          ORDENAR POR
        </h3>
        <RadioGroup value={currentSort} onValueChange={handleSortChange}>
          <div className="flex items-center space-x-3 group">
            <RadioGroupItem value="newest" id="sort-newest" className="rounded-none border-2 border-black text-black shadow-none transition-none" />
            <Label htmlFor="sort-newest" className="cursor-pointer font-mono text-xs font-bold uppercase transition-colors group-hover:text-primary group-hover:underline">
              MAIS RECENTES
            </Label>
          </div>
          <div className="flex items-center space-x-3 group">
            <RadioGroupItem value="price-asc" id="sort-price-asc" className="rounded-none border-2 border-black text-black shadow-none transition-none" />
            <Label htmlFor="sort-price-asc" className="cursor-pointer font-mono text-xs font-bold uppercase transition-colors group-hover:text-primary group-hover:underline">
              MENOR PREÇO
            </Label>
          </div>
          <div className="flex items-center space-x-3 group">
            <RadioGroupItem value="price-desc" id="sort-price-desc" className="rounded-none border-2 border-black text-black shadow-none transition-none" />
            <Label htmlFor="sort-price-desc" className="cursor-pointer font-mono text-xs font-bold uppercase transition-colors group-hover:text-primary group-hover:underline">
              MAIOR PREÇO
            </Label>
          </div>
        </RadioGroup>
      </div>

      {/* Clear Filters */}
      {(currentCategory || currentSort !== "newest") && (
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={() => router.push("/catalog")}
          className="w-full bg-black py-2 font-mono text-xs font-bold text-white uppercase hover:bg-primary hover:text-black transition-colors"
        >
          LIMPAR FILTROS
        </motion.button>
      )}
    </aside>
  );
};

export default FilterSidebar;
