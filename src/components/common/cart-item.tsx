"use client";

import { motion } from "framer-motion";
import { MinusIcon, PlusIcon, Trash2Icon } from "lucide-react";
import Image from "next/image";
import { toast } from "sonner";

import { formatCentsToBRL } from "@/helpers/money";
import { useDecreaseCartProduct } from "@/hooks/mutations/use-decrease-cart-product";
import { useIncreaseCartProduct } from "@/hooks/mutations/use-increase-cart-product";
import { useRemoveProductFromCart } from "@/hooks/mutations/use-remove-product-from-cart";

import { Button } from "../ui/button";

interface CartItemProps {
  id: string;
  productName: string;
  productVariantId: string;
  productVariantName: string;
  productVariantImageUrl: string;
  productVariantPriceInCents: number;
  quantity: number;
}

const CartItem = ({
  id,
  productName,
  productVariantId,
  productVariantImageUrl,
  productVariantName,
  productVariantPriceInCents,
  quantity,
}: CartItemProps) => {
  const removeProductFromCartMutation = useRemoveProductFromCart(id);
  const decreaseCartProductQuantityMutation = useDecreaseCartProduct(id);
  const increaseCartProductQuantityMutation =
    useIncreaseCartProduct(productVariantId);

  const handleDeleteClick = () => {
    removeProductFromCartMutation.mutate(undefined, {
      onSuccess: () => toast.success("PRODUTO REMOVIDO"),
      onError: () => toast.error("ERRO AO REMOVER"),
    });
  };

  const handleDecreaseQuantityClick = () => {
    if (decreaseCartProductQuantityMutation.isPending) return;
    decreaseCartProductQuantityMutation.mutate(undefined);
  };

  const handleIncreaseQuantityClick = () => {
    if (increaseCartProductQuantityMutation.isPending) return;
    increaseCartProductQuantityMutation.mutate(undefined);
  };

  return (
    <motion.div 
      whileHover={{ x: 4 }}
      className="relative flex items-center gap-6 border-2 border-black bg-white p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all hover:bg-primary/5"
    >
      {/* Etiqueta de Quantidade */}
      <div className="absolute -left-3 top-4 -rotate-90 bg-black px-2 py-0.5 text-[10px] font-bold text-white uppercase italic">
        QTD_{quantity.toString().padStart(2, '0')}
      </div>

      <div className="relative h-24 w-24 flex-shrink-0 border-2 border-black grayscale contrast-125">
        <Image
          src={productVariantImageUrl}
          alt={productVariantName}
          fill
          className="object-cover"
        />
      </div>

      <div className="flex flex-1 flex-col justify-between self-stretch py-1">
        <div className="space-y-1">
          <h4 className="text-sm font-black uppercase leading-none tracking-tight line-clamp-2">
            {productName}
          </h4>
          <p className="font-mono text-[10px] font-bold uppercase text-muted-foreground">
            {productVariantName} <span>{"//"}</span> REF: {productVariantId.substring(0, 8)}
          </p>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex h-8 items-center border-2 border-black bg-white">
            <Button
              className="h-full w-8 rounded-none border-r-2 border-black p-0 hover:bg-black hover:text-white disabled:opacity-50"
              size="icon"
              variant="ghost"
              onClick={handleDecreaseQuantityClick}
              disabled={decreaseCartProductQuantityMutation.isPending}
            >
              <motion.div
                animate={decreaseCartProductQuantityMutation.isPending ? { opacity: [0.3, 1, 0.3] } : {}}
                transition={{ repeat: Infinity, duration: 0.5 }}
              >
                <MinusIcon className="h-3 w-3" />
              </motion.div>
            </Button>
            <div className="flex w-10 items-center justify-center font-mono text-xs font-black relative overflow-hidden">
               <motion.span
                 key={quantity}
                 initial={{ y: 10, opacity: 0 }}
                 animate={{ y: 0, opacity: 1 }}
                 className="block"
               >
                {quantity}
               </motion.span>
            </div>
            <Button
              className="h-full w-8 rounded-none border-l-2 border-black p-0 hover:bg-black hover:text-white disabled:opacity-50"
              size="icon"
              variant="ghost"
              onClick={handleIncreaseQuantityClick}
              disabled={increaseCartProductQuantityMutation.isPending}
            >
              <motion.div
                animate={increaseCartProductQuantityMutation.isPending ? { opacity: [0.3, 1, 0.3] } : {}}
                transition={{ repeat: Infinity, duration: 0.5 }}
              >
                <PlusIcon className="h-3 w-3" />
              </motion.div>
            </Button>
          </div>
          
          <Button
            variant="ghost"
            size="icon"
            onClick={handleDeleteClick}
            className="h-8 w-8 rounded-none border-2 border-transparent hover:border-black hover:bg-primary/10 transition-all"
          >
            <Trash2Icon className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <div className="flex flex-col items-end justify-between self-stretch py-1">
        <span className="font-mono text-[9px] font-bold opacity-30">P_ITEM_{id.substring(0,4)}</span>
        <div className="bg-black px-2 py-1 text-sm font-black text-white -rotate-1">
          {formatCentsToBRL(productVariantPriceInCents)}
        </div>
      </div>
    </motion.div>
  );
};

export default CartItem;
