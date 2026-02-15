"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Loader2 } from "lucide-react";

import { addProductToCart } from "@/actions/add-cart-product";
import { Button } from "@/components/ui/button";

interface AddToCartButtonProps {
  productVariantId: string;
  quantity: number;
}

const AddToCartButton = ({
  productVariantId,
  quantity,
}: AddToCartButtonProps) => {
  const queryClient = useQueryClient();
  const { mutate, isPending } = useMutation({
    mutationKey: ["addProductToCart", productVariantId, quantity],
    mutationFn: () =>
      addProductToCart({
        productVariantId,
        quantity,
      }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["cart"] });
    },
  });
  return (
    <Button
      className="w-full rounded-none border-2 border-black bg-black text-white font-black uppercase tracking-widest hover:bg-white hover:text-black hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all h-14"
      size="lg"
      disabled={isPending}
      onClick={() => mutate()}
    >
      {isPending && <Loader2 className="animate-spin" />}
      ADICIONAR À SACOLA
    </Button>
  );
};

export default AddToCartButton;
