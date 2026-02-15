"use client";

import { motion } from "framer-motion";
import Link from "next/link";

import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-[#f0f0f0] px-4 text-center">
      {/* Scanlines Overlay */}
      <div className="pointer-events-none absolute inset-0 z-50 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_4px,3px_100%] bg-repeat" />
      
      {/* Flicker/Noise Overlay */}
      <motion.div 
        className="pointer-events-none absolute inset-0 z-40 bg-white opacity-[0.02]"
        animate={{ opacity: [0.02, 0.05, 0.02] }}
        transition={{ repeat: Infinity, duration: 0.2, ease: "linear" }}
      />

      <div className="relative z-10 flex items-center justify-center font-black leading-none tracking-tighter text-[12rem] text-black mix-blend-multiply md:text-[20rem] lg:text-[28rem]">
        {/* The first 4 */}
        <motion.span 
          initial={{ x: 0 }}
          animate={{ x: [-2, 2, -1, 0] }}
          transition={{ repeat: Infinity, duration: 0.5, repeatDelay: 2 }}
          className="select-none"
        >
          4
        </motion.span>
        
        {/* The Character (0) - Glitch Video Effect */}
        <div className="relative mx-4 flex h-[12rem] w-[12rem] items-center justify-center md:h-[20rem] md:w-[20rem] lg:h-[28rem] lg:w-[28rem]">
            {/* Main Character Layer (Video) */}
            <motion.div
             animate={{
                x: [0, -2, 2, -1, 1, 0],
                y: [0, 2, -2, 1, -1, 0],
                scale: [1, 1.02, 0.98, 1],
             }}
             transition={{
                repeat: Infinity,
                duration: 0.2, // Fast jitter
                ease: "linear",
                repeatDelay: 0.5
             }}
             className="relative z-10 h-full w-full"
            >
                <video 
                    src="/404.mp4" 
                    autoPlay 
                    loop 
                    muted 
                    playsInline 
                    className="h-full w-full object-cover mix-blend-multiply"
                />
            </motion.div>
        </div>

        {/* The second 4 */}
        <motion.span 
          initial={{ x: 0 }}
          animate={{ x: [2, -2, 1, 0] }}
          transition={{ repeat: Infinity, duration: 0.5, repeatDelay: 1.5 }}
          className="select-none"
        >
          4
        </motion.span>
      </div>

      <div className="z-20 mt-8 space-y-6">
        <div className="space-y-2">
            <h2 className="font-mono text-xl font-bold uppercase tracking-widest text-[#333]">
                <motion.span 
                  animate={{ opacity: [1, 0, 1, 1, 0, 1] }} 
                  transition={{ repeat: Infinity, duration: 2, times: [0, 0.05, 0.1, 0.9, 0.95, 1] }}
                >
                  PÁGINA NÃO ENCONTRADA
                </motion.span> 
                {" // ERRO 404"}
            </h2>
            <p className="mx-auto max-w-md font-mono text-xs text-[#555]">
            A PÁGINA QUE VOCÊ PROCURA NÃO EXISTE OU FOI REMOVIDA.
            </p>
        </div>

        <Button asChild className="h-12 border-2 border-black bg-black px-8 font-mono text-sm font-bold uppercase tracking-widest text-white transition-all hover:bg-white hover:text-black hover:shadow-[4px_4px_0px_0px_#f00]">
          <Link href="/">
            [ VOLTAR AO INÍCIO ]
          </Link>
        </Button>
      </div>

      {/* Brutalist Grid Background */}
      <div className="pointer-events-none absolute inset-0 z-0 opacity-[0.1]" 
           style={{ 
             backgroundImage: "linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)",
             backgroundSize: "40px 40px"
           }} 
      />
    </div>
  );
}
