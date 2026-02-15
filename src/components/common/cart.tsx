import { ShoppingBasketIcon } from "lucide-react";

import { formatCentsToBRL } from "@/helpers/money";
import { useCart } from "@/hooks/queries/use-cart";

import { Button } from "../ui/button";
import { ScrollArea } from "../ui/scroll-area";
import { Separator } from "../ui/separator";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import CartItem from "./cart-item";

export const Cart = () => {
  const { data: cart } = useCart();
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" aria-label="Carrinho">
          <ShoppingBasketIcon />
        </Button>
      </SheetTrigger>
      <SheetContent className="flex flex-col border-l-4 border-black p-0 sm:max-w-md">
        <SheetHeader className="border-b-4 border-black px-6 py-6">
          <SheetTitle className="font-black text-3xl uppercase tracking-tighter">
            Seu Carrinho
          </SheetTitle>
        </SheetHeader>
        
        <div className="flex h-full flex-col px-6 pb-6 pt-4">
          <div className="flex h-full max-h-full flex-col overflow-hidden">
            <ScrollArea className="h-full pr-4">
              <div className="flex h-full flex-col gap-2">
                {cart?.items.length === 0 && (
                    <div className="flex h-full flex-col items-center justify-center space-y-4 opacity-50">
                        <ShoppingBasketIcon className="h-16 w-16" />
                        <p className="font-mono uppercase">Carrinho Vazio</p>
                    </div>
                )}
                {cart?.items.map((item) => (
                  <CartItem
                    key={item.id}
                    id={item.id}
                    productName={item.productVariant.product.name}
                    productVariantId={item.productVariant.id}
                    productVariantName={item.productVariant.name}
                    productVariantImageUrl={item.productVariant.imageUrl}
                    productVariantPriceInCents={
                      item.productVariant.priceInCents
                    }
                    quantity={item.quantity}
                  />
                ))}
              </div>
            </ScrollArea>
          </div>

          {cart?.items && cart?.items.length > 0 && (
            <div className="mt-4 flex flex-col gap-4 border-t-4 border-black pt-6">
              <div className="flex items-center justify-between text-sm font-bold uppercase tracking-wide">
                <p>Subtotal</p>
                <p className="font-mono">{formatCentsToBRL(cart?.totalPriceInCents ?? 0)}</p>
              </div>
              
              <Separator className="bg-border h-[2px]" />

              <div className="flex items-center justify-between text-sm font-bold uppercase tracking-wide">
                <p>Entrega</p>
                <p className="bg-black text-white px-2">GRÁTIS</p>
              </div>

              <Separator className="bg-border h-[2px]" />

              <div className="flex items-center justify-between text-xl font-black uppercase tracking-tighter">
                <p>Total</p>
                <p className="font-mono bg-primary text-primary-foreground px-2 -rotate-1">
                    {formatCentsToBRL(cart?.totalPriceInCents ?? 0)}
                </p>
              </div>
              
              <Button 
                className="mt-6 h-14 w-full rounded-none border-2 border-black bg-black text-lg font-black uppercase tracking-widest text-white hover:bg-white hover:text-black hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all"
                asChild
              >
                <a href="/checkout">Finalizar Compra</a>
              </Button>
            </div>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
};
