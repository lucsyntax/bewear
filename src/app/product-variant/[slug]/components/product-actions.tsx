"use client";

import { MinusIcon, PlusIcon } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";

import AddToCartButton from "./add-to-cart-button";

interface ProductActionsProps {
  productVariantId: string;
}

const ProductActions = ({ productVariantId }: ProductActionsProps) => {
  const [quantity, setQuantity] = useState(1);

  const handleDecrement = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : prev));
  };

  const handleIncrement = () => {
    setQuantity((prev) => prev + 1);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <label className="font-mono text-sm uppercase tracking-wide">QUANTIDADE:</label>
        <div className="flex items-center border-2 border-border bg-card shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
          <Button
            size="icon"
            variant="ghost"
            onClick={handleDecrement}
            className="h-10 w-10 rounded-none border-r-2 border-border hover:bg-muted"
          >
            <MinusIcon className="h-4 w-4" />
          </Button>
          <div className="flex h-10 w-12 items-center justify-center font-mono text-lg font-bold">
            {quantity}
          </div>
          <Button
            size="icon"
            variant="ghost"
            onClick={handleIncrement}
            className="h-10 w-10 rounded-none border-l-2 border-border hover:bg-muted"
          >
            <PlusIcon className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <div className="space-y-3">
        <AddToCartButton
          productVariantId={productVariantId}
          quantity={quantity}
        />
        <Button className="w-full rounded-none border-2 border-black bg-white text-black text-lg font-black uppercase tracking-wider hover:bg-black hover:text-white hover:translate-x-[2px] hover:translate-y-[2px] transition-all shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none" size="lg">
          COMPRAR AGORA
        </Button>
      </div>
    </div>
  );
};

export default ProductActions;
