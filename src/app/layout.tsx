import "./globals.css";

import type { Metadata } from "next";
import { Inter_Tight, JetBrains_Mono } from "next/font/google";
import { Toaster } from "sonner";

import ReactQueryProvider from "@/providers/react-query";

const interTight = Inter_Tight({
  variable: "--font-sans",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bewear - Streetwear Revolution",
  description: "The future of streetwear fashion.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${interTight.variable} ${jetbrainsMono.variable} antialiased`}
      >
        <ReactQueryProvider>{children}</ReactQueryProvider>

        <Toaster 
          toastOptions={{
            className: "bg-black border border-white/20 text-white font-mono rounded-none shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]",
            style: {
              borderRadius: "0px",
              background: "#000",
              color: "#fff",
              border: "1px solid #333",
              fontFamily: "var(--font-mono)",
            },
          }}
        />
      </body>
    </html>
  );
}
