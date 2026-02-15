"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="relative mt-20 w-full overflow-hidden border-t-4 border-black bg-white py-16">
      {/* Background Text Fragment */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 select-none opacity-[0.03]">
        <span className="text-[20rem] font-black tracking-tighter italic">INFRA</span>
      </div>

      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8">
          
          {/* Section 01: Brand & Logo */}
          <div className="lg:col-span-4">
            <motion.div 
              initial={{ rotate: -1 }}
              whileHover={{ rotate: 0 }}
              className="inline-block bg-black px-6 py-3 shadow-[8px_8px_0px_0px_rgba(255,102,0,1)]"
            >
                BEWEAR
            </motion.div>
            <p className="mt-8 max-w-xs font-mono text-xs font-bold uppercase leading-relaxed text-black/60">
              STREETWEAR EXPERIMENTAL LAB // EST 2024
            </p>
          </div>

          {/* Section 02: Nav Links Fragment */}
          <div className="relative border-l-2 border-black pl-8 lg:col-span-3">
            <h3 className="mb-6 -rotate-2 bg-black px-2 py-1 text-[10px] font-bold text-white uppercase italic w-fit">
              NAVEGAÇÃO
            </h3>
            <ul className="space-y-3 font-black uppercase text-sm tracking-tight">
              <li>
                <Link href="/" className="hover:text-primary transition-colors hover:underline">Home</Link>
              </li>
              <li>
                <Link href="/catalog" className="hover:text-primary transition-colors hover:underline">Toda a coleção</Link>
              </li>
              <li>
                <Link href="/category/camisetas" className="hover:text-primary transition-colors hover:underline">Camisetas</Link>
              </li>
              <li>
                <Link href="/category/calcas" className="hover:text-primary transition-colors hover:underline">Calças</Link>
              </li>
              <li>
                <Link href="/category/acessorios" className="hover:text-primary transition-colors hover:underline">Acessórios</Link>
              </li>
            </ul>
          </div>

          {/* Section 03: Social Links Fragment */}
          <div className="relative border-l-2 border-primary pl-8 lg:col-span-3">
            <h3 className="mb-6 rotate-1 bg-primary px-2 py-1 text-[10px] font-bold text-black uppercase italic w-fit">
              REDES SOCIAIS
            </h3>
            <ul className="space-y-3 font-mono text-xs font-bold uppercase">
              <li>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:bg-black hover:text-white p-1">
                  <span>INSTAGRAM</span>
                </a>
              </li>
              <li>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:bg-black hover:text-white p-1">
                  <span>X / TWITTER</span>
                </a>
              </li>
              <li>
                <a href="https://discord.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:bg-black hover:text-white p-1">
                  <span>DISCORD</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Section 04: Legals Fragment */}
          <div className="lg:col-span-2">
             <div className="flex flex-col gap-4">
                <div className="border-2 border-black p-4 bg-primary/5">
                  <span className="font-mono text-[9px] font-black opacity-40 uppercase mb-2 block">VER: 1.0.4-BETA</span>
                  <div className="space-y-2 text-[10px] font-black uppercase text-black/50">
                    <Link href="#" className="block hover:text-black">Termos de Uso</Link>
                    <Link href="#" className="block hover:text-black">Política de Privacidade</Link>
                  </div>
                </div>
                <div className="text-[9px] font-bold uppercase opacity-30">
                  © {new Date().getFullYear()} BEWEAR // TODOS OS DIREITOS RESERVADOS
                </div>
             </div>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
