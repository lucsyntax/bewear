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
      onSuccess: () => {
        toast.success("Produto removido do carrinho.");
      },
      onError: () => {
        toast.error("Erro ao remover produto do carrinho.");
      },
    });
  };
  const handleDecreaseQuantityClick = () => {
    decreaseCartProductQuantityMutation.mutate(undefined, {
      onSuccess: () => {
        toast.success("Quantidade do produto diminuida.");
      },
    });
  };
  const handleIncreaseQuantityClick = () => {
    increaseCartProductQuantityMutation.mutate(undefined, {
      onSuccess: () => {
        toast.success("Quantidade do produto aumentada");
      },
    });
  };
  return (
    <div className="flex items-center justify-between border-b-2 border-border pb-4 mb-4">
      <div className="flex items-center gap-4">
        <div className="relative border-2 border-border shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <Image
            src={productVariantImageUrl}
            alt={productVariantName}
            width={78}
            height={78}
            className="object-cover"
            />
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-sm font-black uppercase tracking-tight">{productName}</p>
          <p className="text-muted-foreground font-mono text-xs font-medium uppercase">
            {productVariantName}
          </p>
          <div className="flex w-[100px] items-center border-2 border-border bg-card">
            <Button
              className="h-6 w-8 rounded-none border-r-2 border-border hover:bg-muted"
              size="icon"
              variant="ghost"
              onClick={handleDecreaseQuantityClick}
            >
              <MinusIcon className="h-3 w-3" />
            </Button>
            <div className="flex h-6 w-full items-center justify-center font-mono text-xs font-bold">
                {quantity}
            </div>
            <Button
              className="h-6 w-8 rounded-none border-l-2 border-border hover:bg-muted"
              size="icon"
              variant="ghost"
              onClick={handleIncreaseQuantityClick}
            >
              <PlusIcon className="h-3 w-3" />
            </Button>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-end justify-center gap-3">
        <Button 
            variant="ghost" 
            size="icon" 
            onClick={handleDeleteClick}
            className="h-8 w-8 rounded-none border-2 border-transparent hover:border-destructive hover:text-destructive hover:shadow-[2px_2px_0px_0px_var(--color-destructive)] transition-all"
        >
          <Trash2Icon className="h-4 w-4" />
        </Button>
        <p className="font-mono text-sm font-bold bg-primary text-primary-foreground px-1 -rotate-2">
          {formatCentsToBRL(productVariantPriceInCents)}
        </p>
      </div>
    </div>
  );
};

export default CartItem;
