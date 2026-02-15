"use client";

import { motion } from "framer-motion";
import { ArrowRight,Loader2 } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

import { Header } from "@/components/common/header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { formatCentsToBRL } from "@/helpers/money";
import { useCart } from "@/hooks/queries/use-cart";

const CheckoutPage = () => {
  const { data: cart, isLoading } = useCart();
  const [paymentMethod, setPaymentMethod] = useState<"credit" | "pix" | null>(null);

  if (isLoading) {
    return (
      <div className="flex h-screen items-center justify-center bg-black">
        <Loader2 className="h-12 w-12 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f0f0f0] selection:bg-primary selection:text-black">
      <Header />
      
      <main className="relative overflow-hidden px-4 py-12 sm:px-8">
        {/* Background Massive Header */}
        <div className="pointer-events-none absolute left-0 top-20 -z-10 w-full">
            <h1 className="whitespace-nowrap text-[15rem] font-black uppercase leading-none tracking-tighter opacity-[0.04] sm:text-[25rem]">
                CHECKOUT
            </h1>
        </div>

        <div className="mx-auto max-w-7xl">
          <header className="mb-20 flex flex-col items-start gap-4">
            <motion.span 
              initial={{ rotate: -5, opacity: 0 }}
              animate={{ rotate: -2, opacity: 1 }}
              className="bg-black px-4 py-1 font-mono text-sm font-bold uppercase text-white"
            >
              PROCESSAMENTO DE PEDIDO
            </motion.span>
            <h2 className="text-7xl font-black uppercase tracking-tighter sm:text-9xl">
              FINALIZAR COMPRA<span className="text-primary">.</span>
            </h2>
          </header>

          <div className="grid gap-20 lg:grid-cols-12">
            
            {/* Seções Fragmentadas */}
            <div className="space-y-32 lg:col-span-8">
              
              {/* Seção 01: Identificação */}
              <motion.section 
                initial={{ x: -20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                className="relative z-10 max-w-2xl border-4 border-black bg-white p-8 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]"
              >
                <div className="absolute -left-6 -top-6 bg-primary px-4 py-2 text-2xl font-black uppercase italic text-black border-2 border-black rotate-3">
                  01
                </div>
                <h3 className="mb-10 text-3xl font-black uppercase italic tracking-tighter">IDENTIFICAÇÃO</h3>
                <div className="grid gap-8 sm:grid-cols-2">
                  <div className="space-y-3">
                    <Label className="font-mono text-xs font-bold uppercase tracking-widest text-muted-foreground">NOME COMPLETO</Label>
                    <Input className="h-14 rounded-none border-2 border-black bg-white px-4 font-bold focus:bg-primary/5 focus:ring-0 focus:shadow-[4px_4px_0px_0px_var(--color-primary)] transition-all" />
                  </div>
                  <div className="space-y-3">
                    <Label className="font-mono text-xs font-bold uppercase tracking-widest text-muted-foreground">EMAIL DE ENTREGA</Label>
                    <Input className="h-14 rounded-none border-2 border-black bg-white px-4 font-bold focus:bg-primary/5 focus:ring-0 focus:shadow-[4px_4px_0px_0px_var(--color-primary)] transition-all" />
                  </div>
                </div>
              </motion.section>

              {/* Seção 02: Entrega - Deslocada para Direita */}
              <motion.section 
                initial={{ x: 20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                className="relative z-20 self-end lg:ml-auto max-w-2xl border-4 border-black bg-black p-8 text-white shadow-[12px_12px_0px_0px_rgba(255,102,0,1)]"
              >
                <div className="absolute -right-6 -top-6 bg-white px-4 py-2 text-2xl font-black uppercase italic text-black border-2 border-black -rotate-3">
                  02
                </div>
                <h3 className="mb-10 text-3xl font-black uppercase italic tracking-tighter">ENTREGA</h3>
                <div className="grid gap-8">
                  <div className="w-1/2 space-y-3">
                    <Label className="font-mono text-xs font-bold uppercase tracking-widest text-primary">CEP</Label>
                    <Input className="h-14 rounded-none border-2 border-white bg-transparent px-4 font-bold text-white focus:bg-white/10 transition-all" placeholder="00000-000" />
                  </div>
                  <div className="grid gap-8 sm:grid-cols-2">
                    <div className="space-y-3">
                      <Label className="font-mono text-xs font-bold uppercase tracking-widest text-primary">LOGRADOURO</Label>
                      <Input className="h-14 rounded-none border-2 border-white bg-transparent px-4 font-bold text-white focus:bg-white/10 transition-all" />
                    </div>
                    <div className="space-y-3">
                      <Label className="font-mono text-xs font-bold uppercase tracking-widest text-primary">NÚMERO</Label>
                      <Input className="h-14 rounded-none border-2 border-white bg-transparent px-4 font-bold text-white focus:bg-white/10 transition-all" />
                    </div>
                  </div>
                </div>
              </motion.section>

              {/* Seção 03: Pagamento */}
              <motion.section 
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                className="relative z-10 max-w-3xl border-4 border-black bg-white p-8 shadow-[16px_16px_0px_0px_rgba(0,0,0,1)]"
              >
                <div className="absolute -left-6 -top-10 bg-black px-6 py-4 text-4xl font-black uppercase text-white italic border-2 border-primary rotate-1">
                  03
                </div>
                <h3 className="mb-12 mt-4 text-3xl font-black uppercase italic tracking-tighter">PAGAMENTO</h3>
                
                <div className="grid gap-6 sm:grid-cols-2">
                  <Button
                    variant="outline"
                    onClick={() => setPaymentMethod("credit")}
                    className={`group relative h-24 overflow-hidden rounded-none border-4 transition-all active:scale-95 ${
                      paymentMethod === "credit"
                        ? "border-primary bg-primary/20"
                        : "border-black hover:bg-black hover:text-white"
                    }`}
                  >
                    <div className="flex flex-col items-center gap-1">
                      <span className="text-xl font-black uppercase tracking-widest">CARTÃO DE CRÉDITO</span>
                      <span className="font-mono text-[10px] uppercase opacity-60">EM ATÉ 12X</span>
                    </div>
                  </Button>

                  <Button
                    variant="outline"
                    onClick={() => setPaymentMethod("pix")}
                    className={`group relative h-24 overflow-hidden rounded-none border-4 transition-all active:scale-95 ${
                      paymentMethod === "pix"
                        ? "border-primary bg-primary/20"
                        : "border-black hover:bg-black hover:text-white"
                    }`}
                  >
                    <div className="flex flex-col items-center gap-1">
                      <span className="text-xl font-black uppercase tracking-widest">PIX (INSTANTÂNEO)</span>
                      <span className="font-mono text-[10px] uppercase text-primary">5% DE DESCONTO</span>
                    </div>
                  </Button>
                </div>
              </motion.section>
            </div>

            {/* Resumo Estilo Manifesto - Lateral */}
            <div className="lg:col-span-4 lg:pt-20">
              <aside className="sticky top-10 border-4 border-black bg-white p-8 shadow-[8px_8px_0px_0px_rgba(255,102,0,1)]">
                <div className="mb-8 border-b-2 border-black pb-4 flex justify-between items-end">
                  <h4 className="text-2xl font-black uppercase tracking-tighter">Manifesto</h4>
                  <span className="font-mono text-[10px] opacity-40">REF_{Math.random().toString(36).substring(7).toUpperCase()}</span>
                </div>

                <div className="mb-10 space-y-6">
                  {cart?.items.map((item) => (
                    <div key={item.id} className="flex gap-4 items-start">
                      <div className="h-16 w-12 flex-shrink-0 border-2 border-black grayscale contrast-125">
                        <Image src={item.productVariant.imageUrl} alt={item.productVariant.name} width={48} height={64} className="h-full w-full object-cover" />
                      </div>
                      <div className="flex flex-col">
                        <p className="text-[10px] font-black uppercase leading-none line-clamp-1">{item.productVariant.product.name}</p>
                        <p className="mt-1 font-mono text-xs opacity-60">{item.productVariant.name} / x{item.quantity}</p>
                        <p className="mt-1 font-bold text-sm">{formatCentsToBRL(item.productVariant.priceInCents)}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="space-y-3 border-t-2 border-black pt-6 font-mono text-[11px] font-bold uppercase">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span>{formatCentsToBRL(cart?.totalPriceInCents ?? 0)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Expedição</span>
                    <span className="text-primary">PREMIUM_GRÁTIS</span>
                  </div>
                </div>

                <div className="mt-10 flex flex-col gap-4">
                  <div className="flex items-end justify-between">
                    <span className="text-2xl font-black uppercase tracking-tighter italic">Total</span>
                    <span className="bg-black px-2 text-3xl font-black tabular-nums text-white">
                      {formatCentsToBRL(cart?.totalPriceInCents ?? 0)}
                    </span>
                  </div>

                  <Button className="group mt-4 h-20 w-full rounded-none border-4 border-black bg-primary text-xl font-black uppercase tracking-widest text-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-none transition-all">
                    CONFIRMAR_PEDIDO <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform" />
                  </Button>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </main>

      {/* Grid Pattern Overlay (Invisível mas dá textura) */}
      <div className="pointer-events-none fixed inset-0 -z-50 opacity-[0.015]" 
           style={{ backgroundImage: "radial-gradient(#000 1px, transparent 1px)", backgroundSize: "20px 20px" }} />
    </div>
  );
};

export default CheckoutPage;

