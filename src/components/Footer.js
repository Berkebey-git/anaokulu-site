import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { label: "Ana Sayfa", href: "/" },
  { label: "Hakkımızda", href: "/hakkimizda" },
  { label: "Atölyeler", href: "/atolyeler" },
  { label: "Galeri", href: "/galeri" },
  { label: "Akademi", href: "/akademi" },
  { label: "İletişim", href: "/iletisim" },
];

export default function Footer() {
  return (
    <footer className="bg-slate-900 px-4 py-12 text-white">
      <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-3">
            <div className="relative h-10 w-[120px] overflow-hidden">
              <Image src="/logo.png" alt="1 Akademi Anaokulu Logo" fill className="object-contain" />
            </div>
            <h3 className="text-lg font-semibold">1 Akademi Anaokulu</h3>
          </div>
          <p className="mt-4 max-w-sm text-sm leading-6 text-slate-300">
            Çocuklarımız için güvenli, mutlu ve gelişim odaklı bir eğitim ortamı sunuyoruz.
          </p>
        </div>

        <div>
          <h4 className="text-base font-semibold">Hızlı Erişim</h4>
          <nav className="mt-4 space-y-2">
            {navLinks.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="block text-slate-200 transition-colors duration-300 hover:text-blue-400"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        <div>
          <h4 className="text-base font-semibold">İletişim</h4>
          <div className="mt-4 space-y-2 text-slate-200">
            <p>📍 İstanbul / Türkiye</p>
            <p>📞 05XXXXXXXXX</p>
            <p>
              💬 WhatsApp:{" "}
              <a
                href="https://wa.me/905XXXXXXXXX"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors duration-300 hover:text-blue-400"
              >
                https://wa.me/905XXXXXXXXX
              </a>
            </p>
            <p>✉️ info@1akademi.com</p>
          </div>
        </div>
      </div>

      <p className="mt-10 text-center text-sm text-gray-400">
        © 2026 1 Akademi Anaokulu. Tüm hakları saklıdır.
      </p>
    </footer>
  );
}
