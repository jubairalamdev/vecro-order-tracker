"use client";

import { Link } from "@heroui/react";

const navigation = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/products" },
  { label: "Orders", href: "/orders" },
  { label: "About", href: "/about" },
];

export default function OrderHeader() {
  return (
    <header className="flex items-center justify-between rounded-full border border-zinc-200 bg-white px-4 py-3">
      <div className="flex items-center gap-3">
        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#9F54F7] text-sm font-bold text-white">
          V
        </div>

        <span className="hidden text-sm font-semibold sm:block">
          Vecro Soft
        </span>
      </div>

      <nav className="hidden items-center gap-7 text-sm text-zinc-500 md:flex">
        {navigation.map((item) => {
          const isCurrent = item.href === "/orders";

          return (
            <Link
              key={item.href}
              href={item.href}
              className={
                isCurrent
                  ? "font-medium text-[#9F54F7]"
                  : "transition-colors hover:text-zinc-900"
              }
            >
              {item.label}
            </Link>
          );
        })}
      </nav>

      <Link
        href="/signup"
        className="rounded-full bg-[#9F54F7] px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-[#8B45E0]"
      >
        Get Started
      </Link>
    </header>
  );
}
