import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const Hero = () => {
  return (
    <section className="relative w-full h-[80vh] flex items-center justify-center overflow-hidden bg-background border-b-4 border-border">
        {/* Background Grids/Pattern */}
        <div className="absolute inset-0 z-0 opacity-10 pointer-events-none" 
             style={{ backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)', backgroundSize: '20px 20px' }}>
        </div>

        {/* Floating Abstract Elements */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-primary rounded-full blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-48 h-48 bg-accent rounded-full blur-3xl opacity-20 animate-pulse delay-1000"></div>

        <div className="container px-4 md:px-6 relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            
            {/* Text Content */}
            <div className="flex flex-col space-y-6">
                <div className="inline-block px-3 py-1 bg-accent text-accent-foreground font-mono text-sm font-bold border-2 border-border w-max transform -rotate-2">
                    NOVIDADES 2026
                </div>
                <h1 className="text-4xl md:text-8xl font-black tracking-tighter uppercase leading-[0.9] text-foreground drop-shadow-[4px_4px_0px_rgba(0,0,0,0.2)]">
                    BE<span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">WEAR</span><br/>
                    REVOLUTION
                </h1>
                <p className="max-w-[600px] text-muted-foreground text-xl md:text-2xl font-medium border-l-4 border-primary pl-4">
                    Redefinindo o streetwear. Estilo autêntico e qualidade superior para quem não segue tendências, cria.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                    <Link href="/catalog" 
                          className="group relative px-8 py-4 bg-foreground text-background font-bold text-lg uppercase tracking-wide border-2 border-border hover:bg-transparent hover:text-foreground transition-all duration-200 shadow-[4px_4px_0px_0px_var(--color-primary)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none">
                        <span className="flex items-center gap-2">
                            Comprar Agora <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </span>
                    </Link>
                    <Link href="/about" 
                          className="px-8 py-4 bg-background text-foreground font-bold text-lg uppercase tracking-wide border-2 border-border hover:bg-secondary transition-all duration-200">
                        Nossa História
                    </Link>
                </div>
            </div>

            {/* Hero Image */}
            <div className="relative h-[400px] md:h-[600px] w-full group">
                <div className="absolute inset-0 bg-primary transform translate-x-4 translate-y-4 border-2 border-border"></div>
                 <div className="absolute inset-0 bg-background border-2 border-border overflow-hidden">
                    <Image
                        src="/banner-01.png" // Placeholder, should be replaced or dynamic
                        alt="Hero Streetwear Model"
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105 grayscale hover:grayscale-0"
                        priority
                    />
                    {/* Overlay text on image */}
                    <div className="absolute bottom-4 left-4 bg-white/80 backdrop-blur-sm p-2 border border-black transform rotate-1">
                        <p className="font-mono text-xs font-bold text-black">COLEÇÃO LIMITADA #01</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
};
