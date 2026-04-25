import Link from "next/link";
import Image from "next/image";

const navItems = [
  { label: "Ana Sayfa", href: "/", active: true },
  { label: "Hakkımızda", href: "/hakkimizda" },
  { label: "Atölyeler", href: "/atolyeler" },
  { label: "Galeri", href: "/galeri" },
  { label: "İletişim", href: "/iletisim" },
  { label: "Akademi", href: "/akademi" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-30 bg-white shadow">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-4">
        <div className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt="1 Akademi Anaokulu Logo"
            width={120}
            height={40}
            className="w-[120px]"
            style={{ height: "auto" }}
            priority
          />
          <span className="text-lg font-semibold text-gray-800 md:text-xl">
            1 Akademi Anaokulu
          </span>
        </div>

        <nav className="flex items-center justify-center gap-5 text-sm font-medium md:text-base">
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

        <Link href="/kayit">
          <button className="rounded-full bg-blue-600 px-6 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-blue-700 md:text-base">
            Ön Kayıt
          </button>
        </Link>
      </div>
    </header>
  );
}
