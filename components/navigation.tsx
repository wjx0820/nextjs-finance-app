"use client";

import { useState } from "react";
import { useMedia } from "react-use";
import { Menu } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { NavButton } from "@/components/nav-button";
import { Button } from "@/components/ui/button";

const routes = [
  {
    href: "/",
    label: "Overview",
  },
  {
    href: "/transactions",
    label: "Transactions",
  },
  {
    href: "/accounts",
    label: "Accounts",
  },
  {
    href: "/categories",
    label: "Categories",
  },
  {
    href: "/settings",
    label: "Settings",
  },
];

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const router = useRouter();

  const pathname = usePathname();

  const isMobile = useMedia("(max-width: 1024px)", false);

  const onClick = (href: string) => {
    router.push(href);
    setIsOpen(false);
  };

  if (isMobile) {
    return (
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger>
          <Button
            variant="outline"
            size="sm"
            className="border-none bg-white/10 font-normal text-white outline-none transition hover:bg-white/20 hover:text-white focus:bg-white/30 focus-visible:ring-transparent focus-visible:ring-offset-0"
          >
            <Menu className="size-4" />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="px-2">
          <nav className="flex flex-col gap-y-2 pt-6">
            {routes.map((r) => {
              return (
                <Button
                  key={r.href}
                  variant={r.href === pathname ? "secondary" : "ghost"}
                  onClick={() => onClick(r.href)}
                  className="w-full justify-start"
                >
                  {r.label}
                </Button>
              );
            })}
          </nav>
        </SheetContent>
      </Sheet>
    );
  }

  return (
    <div className="hidden items-center gap-x-2 overflow-x-auto lg:flex">
      {routes.map((r) => {
        return (
          <NavButton
            href={r.href}
            key={r.href}
            label={r.label}
            isActive={pathname === r.href}
          />
        );
      })}
    </div>
  );
};
