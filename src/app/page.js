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

        <section className="bg-gray-100 px-4 py-16">
          <Reveal className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-center text-xl font-bold text-gray-900 sm:text-2xl md:text-3xl">Neler Sunuyoruz?</h2>
            <p className="mt-3 text-center text-sm text-gray-700 sm:text-base md:text-lg">
              Çocuklarınız için en iyi ortamı sunuyoruz
            </p>

            <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <article className="bg-white rounded-xl shadow-md hover:shadow-xl transition p-5 h-full flex flex-col justify-between">
                <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">Modern Bina</h3>
                <p className="mt-2 text-sm text-gray-700 sm:text-base md:text-lg">
                  Ferah sınıflar ve çağdaş altyapı ile güvenli bir öğrenme alanı sağlıyoruz.
                </p>
              </article>

              <article className="bg-white rounded-xl shadow-md hover:shadow-xl transition p-5 h-full flex flex-col justify-between">
                <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">Uzman Kadro</h3>
                <p className="mt-2 text-sm text-gray-700 sm:text-base md:text-lg">
                  Alanında deneyimli eğitmenlerimiz her çocuğun gelişimini yakından takip eder.
                </p>
              </article>

              <article className="bg-white rounded-xl shadow-md hover:shadow-xl transition p-5 h-full flex flex-col justify-between">
                <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">Sevgi Dolu Ortam</h3>
                <p className="mt-2 text-sm text-gray-700 sm:text-base md:text-lg">
                  Çocukların kendini mutlu ve değerli hissettiği sıcak bir atmosfer sunuyoruz.
                </p>
              </article>
            </div>
          </Reveal>
        </section>

        <Features />
        <Gallery />

        <section className="px-4 py-16">
          <Reveal className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-center text-xl font-bold text-gray-900 sm:text-2xl md:text-3xl">
              Neden Bizi Seçmelisiniz?
            </h2>

            <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <article className="bg-white rounded-xl shadow-md hover:shadow-xl transition p-5 h-full flex flex-col justify-between">
                <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">Güvenli ortam</h3>
              </article>
              <article className="bg-white rounded-xl shadow-md hover:shadow-xl transition p-5 h-full flex flex-col justify-between">
                <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">Deneyimli öğretmenler</h3>
              </article>
              <article className="bg-white rounded-xl shadow-md hover:shadow-xl transition p-5 h-full flex flex-col justify-between">
                <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">Modern eğitim sistemi</h3>
              </article>
            </div>
          </Reveal>
        </section>
      </main>
    </div>
  );
}
