"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ShoppingBasketIcon, XIcon } from "lucide-react";
import { useState } from "react";

import { formatCentsToBRL } from "@/helpers/money";
import { useCart } from "@/hooks/queries/use-cart";

import { Button } from "../ui/button";
import { ScrollArea } from "../ui/scroll-area";
import CartItem from "./cart-item";

export const Cart = () => {
  const { data: cart } = useCart();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button
        variant="outline"
        size="icon"
        aria-label="Carrinho"
        onClick={() => setIsOpen(true)}
        className="relative border-2 border-black hover:bg-black hover:text-white transition-all active:scale-95"
      >
        <ShoppingBasketIcon />
        {cart && cart.items.length > 0 && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="absolute -right-2 -top-2 flex h-5 min-w-[20px] items-center justify-center border border-white bg-black px-1 font-mono text-[10px] font-bold text-white shadow-[2px_2px_0px_0px_rgba(0,0,0,0.1)]"
          >
            {cart.items.reduce((acc, item) => acc + item.quantity, 0)}
          </motion.div>
        )}
      </Button>

      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-[100] flex justify-end">
            {/* Backdrop com Grain (simulado via CSS) */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="absolute inset-0 bg-black/40 backdrop-blur-[2px]"
            />

            <motion.div
              initial={{ x: "100%", rotate: 2 }}
              animate={{ x: 0, rotate: 0 }}
              exit={{ x: "100%", rotate: -2 }}
              transition={{ type: "spring", damping: 20, stiffness: 100 }}
              className="relative flex h-full w-full flex-col border-l-4 border-black bg-white shadow-[-20px_0px_0px_0px_rgba(255,102,0,1)] sm:max-w-xl"
            >
              {/* Background Tipográfico Massivo */}
              <div className="absolute inset-0 -z-10 flex select-none items-center justify-center overflow-hidden opacity-[0.03]">
                <h1 className="rotate-90 text-[20rem] font-black leading-none uppercase tracking-tighter">
                  BEWEAR
                </h1>
              </div>

              <header className="flex items-center justify-between border-b-4 border-black px-8 py-10">
                <h2 className="text-5xl font-black uppercase tracking-tighter sm:text-7xl">
                  CARRINHO<span className="text-primary italic">.</span>
                </h2>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsOpen(false)}
                  className="h-12 w-12 border-2 border-black rounded-none hover:bg-black hover:text-white"
                >
                  <XIcon className="h-6 w-6" />
                </Button>
              </header>

              <div className="flex flex-1 flex-col overflow-hidden px-8 py-6">
                <ScrollArea className="h-full pr-4">
                  <div className="flex flex-col gap-6">
                    {cart?.items.length === 0 && (
                      <div className="flex h-[400px] flex-col items-center justify-center space-y-6">
                        <ShoppingBasketIcon className="h-24 w-24 opacity-10" />
                        <p className="border-2 border-black px-4 py-2 font-mono text-xl font-black uppercase">
                          SEU CARRINHO ESTÁ VAZIO
                        </p>
                      </div>
                    )}
                    {cart?.items.map((item, idx) => (
                      <motion.div
                        key={item.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.1 }}
                      >
                        <CartItem
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
                      </motion.div>
                    ))}
                  </div>
                </ScrollArea>
              </div>

              {cart?.items && cart?.items.length > 0 && (
                <footer className="mt-auto border-t-8 border-black bg-black p-8 text-white">
                  <div className="mb-6 space-y-2 font-mono text-sm uppercase">
                    <div className="flex justify-between">
                      <span>SUBTOTAL</span>
                      <span>{formatCentsToBRL(cart?.totalPriceInCents ?? 0)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>FRETE</span>
                      <span className="text-primary">GRÁTIS</span>
                    </div>
                  </div>

                  <div className="flex items-end justify-between border-t-2 border-white/20 pt-6">
                    <span className="text-2xl font-black uppercase italic tracking-tighter">
                      TOTAL
                    </span>
                    <span className="bg-primary px-3 text-4xl font-black tabular-nums text-black -rotate-1">
                      {formatCentsToBRL(cart?.totalPriceInCents ?? 0)}
                    </span>
                  </div>

                  <Button
                    className="mt-8 h-20 w-full rounded-none border-4 border-white bg-white text-2xl font-black uppercase tracking-[0.2em] text-black shadow-[8px_8px_0px_0px_rgba(255,102,0,1)] hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-none transition-all active:scale-[0.98]"
                    asChild
                  >
                    <a href="/checkout">FINALIZAR COMPRA</a>
                  </Button>
                </footer>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

