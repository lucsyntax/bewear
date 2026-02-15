"use client";

import { LogInIcon, LogOutIcon, MenuIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { authClient } from "@/lib/auth-client";

import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { Cart } from "./cart";

export const Header = () => {
  const { data: session } = authClient.useSession();
  return (
    <header className="flex items-center justify-between p-5">
      <nav aria-label="Principal">
      <Link href="/">
        <Image src="/logo.svg" alt="BEWEAR-LOGO" width={100} height={26.14} />
      </Link>
      <div className="flex items-center gap-3">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" aria-label="Menu">
              <MenuIcon />
            </Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Menu</SheetTitle>
            </SheetHeader>
            <div className="flex flex-col gap-6 px-5 mt-6">
              <Link href="/catalog" className="text-2xl font-black uppercase italic tracking-tighter hover:text-primary transition-colors">
                CATÁLOGO
              </Link>
              <div className="h-[2px] w-10 bg-black/10" />

              {session?.user ? (
                <>
                  <div className="flex justify-between">
                    <div className="flex items-center gap-3">
                      <Avatar>
                        <AvatarImage
                          src={session?.user?.image as string | undefined}
                        />
                        <AvatarFallback>
                          {session?.user?.name?.split(" ")[0]?.[0]}
                          {session?.user?.name?.split(" ")[1]?.[0]}
                        </AvatarFallback>
                      </Avatar>

                      <div>
                        <h3 className="font-semibold">{session?.user?.name}</h3>
                        <span className="text-muted-foreground block text-xs">
                          {session?.user?.email}
                        </span>
                      </div>
                    </div>
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => authClient.signOut()}
                    >
                      <LogOutIcon />
                    </Button>
                  </div>
                </>
              ) : (
                <div className="flex items-center justify-between">
                  <h2 className="font-semibold">Olá. Faça seu login!</h2>
                  <Button size="icon" asChild variant="outline">
                    <Link href="/authentication">
                      <LogInIcon />
                    </Link>
                  </Button>
                </div>
              )}
            </div>
          </SheetContent>
        </Sheet>
        <Cart />
      </div>
      </nav>
    </header>
  );
};
