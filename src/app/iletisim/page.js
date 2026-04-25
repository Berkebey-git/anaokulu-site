import Navbar from "@/components/Navbar";
import Reveal from "@/components/Reveal";

export default function IletisimPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />

      <main className="max-w-6xl mx-auto py-16 px-4 space-y-12">
        <Reveal className="text-center">
          <h1 className="text-4xl font-bold text-slate-900 sm:text-5xl">İletişim</h1>
          <p className="mx-auto mt-4 max-w-2xl text-slate-600">
            Bizimle iletişime geçmek için aşağıdaki bilgileri kullanabilirsiniz.
          </p>
        </Reveal>

        <section className="grid gap-10 md:grid-cols-2">
          <Reveal className="bg-white shadow-lg rounded-xl p-6">
            <h2 className="text-2xl font-semibold text-slate-900">İletişim Bilgileri</h2>
            <div className="mt-6 space-y-4 text-slate-700">
              <p>
                <span className="font-semibold">📍 Adres:</span> İstanbul / Türkiye
              </p>
              <p>
                <span className="font-semibold">📞 Telefon:</span> 05XXXXXXXXX
              </p>
              <p>
                <span className="font-semibold">💬 WhatsApp:</span>{" "}
                <a
                  href="https://wa.me/905XXXXXXXXX"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 transition-colors duration-300 hover:text-blue-700"
                >
                  https://wa.me/905XXXXXXXXX
                </a>
              </p>
              <p>
                <span className="font-semibold">✉️ Email:</span> info@1akademi.com
              </p>
            </div>
          </Reveal>

          <Reveal className="bg-white shadow-lg rounded-xl p-6">
            <h2 className="text-2xl font-semibold text-slate-900">Bize Mesaj Gönderin</h2>
            <form className="mt-6">
              <label className="mb-2 block text-sm font-medium text-slate-700" htmlFor="name">
                Ad Soyad
              </label>
              <input
                id="name"
                type="text"
                className="mb-4 w-full rounded-md border border-slate-300 bg-white p-2 text-slate-900 placeholder-slate-500 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                placeholder="Ad Soyad"
              />

              <label className="mb-2 block text-sm font-medium text-slate-700" htmlFor="phone">
                Telefon
              </label>
              <input
                id="phone"
                type="tel"
                className="mb-4 w-full rounded-md border border-slate-300 bg-white p-2 text-slate-900 placeholder-slate-500 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                placeholder="Telefon"
              />

              <label className="mb-2 block text-sm font-medium text-slate-700" htmlFor="message">
                Mesaj
              </label>
              <textarea
                id="message"
                rows="5"
                className="mb-4 w-full rounded-md border border-slate-300 bg-white p-2 text-slate-900 placeholder-slate-500 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                placeholder="Mesajınızı yazın"
              />

              <button
                type="submit"
                className="rounded-lg bg-blue-600 px-6 py-2 text-white transition-all duration-300 hover:scale-105 hover:bg-blue-700"
              >
                Gönder
              </button>
            </form>
          </Reveal>
        </section>

        <Reveal className="bg-white shadow-lg rounded-xl p-6">
          <h2 className="text-2xl font-semibold text-slate-900">Konum</h2>
          <iframe
            title="1 Akademi Anaokulu Konum"
            src="https://maps.google.com/maps?q=Istanbul%20Turkey&t=&z=12&ie=UTF8&iwloc=&output=embed"
            className="mt-6 h-[300px] w-full rounded-xl border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </Reveal>
      </main>
    </div>
  );
}
