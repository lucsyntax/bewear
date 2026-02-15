"use client";

import { useState } from "react";

import { Header } from "@/components/common/header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { formatCentsToBRL } from "@/helpers/money";
import { useCart } from "@/hooks/queries/use-cart";
import { Loader2 } from "lucide-react";
import Image from "next/image";

const CheckoutPage = () => {
  const { data: cart, isLoading } = useCart();
  const [paymentMethod, setPaymentMethod] = useState<"credit" | "pix" | null>(null);

  if (isLoading) {
    return (
      <div className="flex h-screen items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin" />
      </div>
    );
  }

  return (
    <>
      <Header />
      <main className="container mx-auto px-5 py-10">
        <h1 className="mb-10 border-b-4 border-black pb-4 text-5xl font-black uppercase tracking-tighter sm:text-7xl">
          Checkout
        </h1>

        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          {/* Formulário (Esquerda) */}
          <div className="space-y-10 lg:col-span-7">
            
            {/* Seção 01: Identificação */}
            <section className="border-2 border-border p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
              <h2 className="mb-6 font-mono text-2xl font-bold uppercase tracking-tight">
                <span className="bg-primary px-2 mr-2 text-primary-foreground">01.</span>
                Identificação
              </h2>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label className="font-mono uppercase">Nome Completo</Label>
                  <Input className="rounded-none border-2 border-black h-12 outline-none focus-visible:ring-0 focus-visible:shadow-[4px_4px_0px_0px_var(--color-primary)]" placeholder="Ex: João da Silva" />
                </div>
                <div className="space-y-2">
                  <Label className="font-mono uppercase">Email</Label>
                  <Input className="rounded-none border-2 border-black h-12 outline-none focus-visible:ring-0 focus-visible:shadow-[4px_4px_0px_0px_var(--color-primary)]" placeholder="joao@email.com" />
                </div>
              </div>
            </section>

             {/* Seção 02: Entrega */}
             <section className="border-2 border-border p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
              <h2 className="mb-6 font-mono text-2xl font-bold uppercase tracking-tight">
                <span className="bg-primary px-2 mr-2 text-primary-foreground">02.</span>
                Entrega
              </h2>
              <div className="grid gap-4">
                 <div className="grid gap-4 sm:grid-cols-3">
                    <div className="space-y-2">
                        <Label className="font-mono uppercase">CEP</Label>
                        <Input className="rounded-none border-2 border-black h-12 focus-visible:ring-0 focus-visible:shadow-[4px_4px_0px_0px_var(--color-primary)]" placeholder="00000-000" />
                    </div>
                 </div>
                 <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                        <Label className="font-mono uppercase">Rua</Label>
                        <Input className="rounded-none border-2 border-black h-12 focus-visible:ring-0 focus-visible:shadow-[4px_4px_0px_0px_var(--color-primary)]" placeholder="Rua das Flores" />
                    </div>
                    <div className="space-y-2">
                        <Label className="font-mono uppercase">Número</Label>
                        <Input className="rounded-none border-2 border-black h-12 focus-visible:ring-0 focus-visible:shadow-[4px_4px_0px_0px_var(--color-primary)]" placeholder="123" />
                    </div>
                </div>
                 <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                        <Label className="font-mono uppercase">Bairro</Label>
                        <Input className="rounded-none border-2 border-black h-12 focus-visible:ring-0 focus-visible:shadow-[4px_4px_0px_0px_var(--color-primary)]" placeholder="Centro" />
                    </div>
                    <div className="space-y-2">
                        <Label className="font-mono uppercase">Cidade</Label>
                        <Input className="rounded-none border-2 border-black h-12 focus-visible:ring-0 focus-visible:shadow-[4px_4px_0px_0px_var(--color-primary)]" placeholder="São Paulo" />
                    </div>
                </div>
              </div>
            </section>

            {/* Seção 03: Pagamento */}
            <section className="border-2 border-border p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
              <h2 className="mb-6 font-mono text-2xl font-bold uppercase tracking-tight">
                <span className="bg-primary px-2 mr-2 text-primary-foreground">03.</span>
                Pagamento
              </h2>
               <div className="space-y-4">
                  <div className="flex flex-col gap-4 sm:flex-row">
                    <Button
                      variant="outline"
                      onClick={() => setPaymentMethod("credit")}
                      className={`h-16 flex-1 flex-col items-center justify-center gap-1 rounded-none border-2 active:scale-[0.98] transition-all ${
                        paymentMethod === "credit"
                          ? "border-primary bg-primary/10 text-primary ring-2 ring-primary ring-offset-2"
                          : "border-black hover:border-primary hover:bg-primary/10 hover:text-primary"
                      }`}
                    >
                        <span className="font-black uppercase">Cartão de Crédito</span>
                        <span className="text-xs text-muted-foreground">Até 12x sem juros</span>
                    </Button>
                    <Button
                      variant="outline"
                      onClick={() => setPaymentMethod("pix")}
                      className={`h-16 flex-1 flex-col items-center justify-center gap-1 rounded-none border-2 active:scale-[0.98] transition-all ${
                        paymentMethod === "pix"
                          ? "border-primary bg-primary/10 text-primary ring-2 ring-primary ring-offset-2"
                          : "border-black hover:border-primary hover:bg-primary/10 hover:text-primary"
                      }`}
                    >
                        <span className="font-black uppercase">PIX</span>
                        <span className="text-xs font-bold text-emerald-600">-5% de Desconto</span>
                    </Button>
                  </div>
               </div>
            </section>

          </div>

          {/* Resumo (Direita) */}
          <div className="lg:col-span-5">
            <div className="sticky top-10 space-y-6 border-2 border-black bg-muted/20 p-6 backdrop-blur-sm">
                <h3 className="font-black text-2xl uppercase tracking-tighter">Resumo do Pedido</h3>
                
                <div className="space-y-4">
                    {cart?.items.map((item) => (
                        <div key={item.id} className="flex gap-4">
                            <div className="relative h-16 w-16 flex-shrink-0 border-2 border-border bg-white">
                                <Image
                                    src={item.productVariant.imageUrl}
                                    alt={item.productVariant.name}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="flex flex-1 flex-col justify-between">
                                <p className="font-bold text-sm uppercase leading-tight line-clamp-2">{item.productVariant.product.name}</p>
                                <div className="flex justify-between items-center text-xs font-mono text-muted-foreground">
                                    <span>Qtd: {item.quantity}</span>
                                    <span className="text-foreground font-bold">{formatCentsToBRL(item.productVariant.priceInCents)}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <Separator className="bg-black/20" />

                <div className="space-y-2 text-sm font-medium uppercase">
                    <div className="flex justify-between">
                        <span>Subtotal</span>
                        <span>{formatCentsToBRL(cart?.totalPriceInCents ?? 0)}</span>
                    </div>
                    <div className="flex justify-between text-muted-foreground">
                        <span>Entrega</span>
                        <span>Grátis</span>
                    </div>
                </div>

                <div className="flex justify-between border-t-2 border-black pt-4 text-xl font-black uppercase">
                    <span>Total</span>
                    <span className="bg-primary px-2 text-primary-foreground">{formatCentsToBRL(cart?.totalPriceInCents ?? 0)}</span>
                </div>

                <Button className="h-14 w-full rounded-none border-2 border-black bg-black text-lg font-black uppercase tracking-widest text-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all">
                    Finalizar Pedido
                </Button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default CheckoutPage;
