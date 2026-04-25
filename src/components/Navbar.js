"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const navItems = [
  { label: "Ana Sayfa", href: "/", active: true },
  { label: "Hakkımızda", href: "/hakkimizda" },
  { label: "Atölyeler", href: "/atolyeler" },
  { label: "Galeri", href: "/galeri" },
  { label: "Personeller", href: "/personeller" },
  { label: "İletişim", href: "/iletisim" },
  { label: "Akademi", href: "/akademi" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-30 bg-white shadow">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <div className="relative h-10 w-[120px] overflow-hidden">
            <Image src="/logo.png" alt="1 Akademi Anaokulu Logo" fill className="object-contain" priority />
          </div>
          <span className="text-lg font-semibold text-gray-800 md:text-xl">
            1 Akademi Anaokulu
          </span>
        </div>

        <nav className="hidden items-center justify-center gap-5 text-sm font-medium md:flex md:text-base">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={`transition-colors hover:text-gray-900 ${
                item.active ? "text-gray-900" : "text-gray-700"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link href="/kayit" className="hidden md:block">
          <button className="rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:scale-105 hover:bg-blue-700 md:text-base">
            Ön Kayıt
          </button>
        </Link>

        <button
          type="button"
          className="rounded-xl border border-slate-200 px-3 py-2 text-sm text-slate-700 md:hidden"
          onClick={() => setIsMenuOpen((prev) => !prev)}
          aria-label="Menüyü aç/kapat"
        >
          {isMenuOpen ? "Kapat" : "Menü"}
        </button>
      </div>

      {isMenuOpen && (
        <div className="border-t border-slate-100 bg-white px-4 py-4 md:hidden">
          <nav className="flex flex-col gap-3 text-sm font-medium text-slate-700">
            {navItems.map((item) => (
              <Link key={item.label} href={item.href} onClick={() => setIsMenuOpen(false)}>
                {item.label}
              </Link>
            ))}
            <Link
              href="/kayit"
              onClick={() => setIsMenuOpen(false)}
              className="mt-2 inline-flex w-fit rounded-xl bg-blue-600 px-5 py-2.5 text-white transition hover:scale-105 hover:bg-blue-700"
            >
              Ön Kayıt
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
