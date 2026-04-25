import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Gallery from "@/components/Gallery";
import Navbar from "@/components/Navbar";
import Reveal from "@/components/Reveal";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      <main>
        <Hero />

        <section className="bg-gray-100 px-6 py-16">
          <Reveal className="mx-auto max-w-6xl">
            <h2 className="text-center text-3xl font-bold text-gray-900">Neler Sunuyoruz?</h2>
            <p className="mt-3 text-center text-gray-700">
              Çocuklarınız için en iyi ortamı sunuyoruz
            </p>

            <div className="mt-10 grid gap-6 md:grid-cols-3">
              <article className="rounded-xl bg-white p-6 shadow transition-all duration-300 hover:scale-105 hover:shadow-xl">
                <h3 className="text-xl font-semibold text-gray-900">Modern Bina</h3>
                <p className="mt-2 text-gray-700">
                  Ferah sınıflar ve çağdaş altyapı ile güvenli bir öğrenme alanı sağlıyoruz.
                </p>
              </article>

              <article className="rounded-xl bg-white p-6 shadow transition-all duration-300 hover:scale-105 hover:shadow-xl">
                <h3 className="text-xl font-semibold text-gray-900">Uzman Kadro</h3>
                <p className="mt-2 text-gray-700">
                  Alanında deneyimli eğitmenlerimiz her çocuğun gelişimini yakından takip eder.
                </p>
              </article>

              <article className="rounded-xl bg-white p-6 shadow transition-all duration-300 hover:scale-105 hover:shadow-xl">
                <h3 className="text-xl font-semibold text-gray-900">Sevgi Dolu Ortam</h3>
                <p className="mt-2 text-gray-700">
                  Çocukların kendini mutlu ve değerli hissettiği sıcak bir atmosfer sunuyoruz.
                </p>
              </article>
            </div>
          </Reveal>
        </section>

        <Features />
        <Gallery />

        <section className="px-6 py-16">
          <Reveal className="mx-auto max-w-6xl">
            <h2 className="text-center text-3xl font-bold text-gray-900">
              Neden Bizi Seçmelisiniz?
            </h2>

            <div className="mt-10 grid gap-6 md:grid-cols-3">
              <article className="rounded-xl bg-white p-6 shadow transition-all duration-300 hover:scale-105 hover:shadow-xl">
                <h3 className="text-lg font-semibold text-gray-900">Güvenli ortam</h3>
              </article>
              <article className="rounded-xl bg-white p-6 shadow transition-all duration-300 hover:scale-105 hover:shadow-xl">
                <h3 className="text-lg font-semibold text-gray-900">Deneyimli öğretmenler</h3>
              </article>
              <article className="rounded-xl bg-white p-6 shadow transition-all duration-300 hover:scale-105 hover:shadow-xl">
                <h3 className="text-lg font-semibold text-gray-900">Modern eğitim sistemi</h3>
              </article>
            </div>
          </Reveal>
        </section>
      </main>
    </div>
  );
}
