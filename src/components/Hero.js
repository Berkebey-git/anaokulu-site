import Reveal from "@/components/Reveal";

export default function Hero() {
  return (
    <section className="relative isolate flex min-h-[60vh] items-center justify-center overflow-hidden md:min-h-[70vh] lg:min-h-[78vh]">
      <img
        src="/hero.jpg"
        alt="Anaokulu sınıf ortamı"
        className="absolute inset-0 -z-20 h-full w-full object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-black/55" />

      <Reveal className="mx-auto w-full max-w-4xl px-4 py-24 text-center sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl">
          Çocuğunuz İçin Güvenli ve Mutlu Bir Eğitim Ortamı
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-base text-slate-200 sm:text-lg">
          Sevgi dolu eğitmen kadromuz, zengin atölyelerimiz ve güvenli kampüs
          ortamımızla çocuğunuzun gelişimini destekliyoruz.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <button className="w-full rounded-full bg-blue-600 px-7 py-3 text-sm font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-blue-700 sm:w-auto md:text-base">
            Ön Kayıt Oluştur
          </button>
          <button className="w-full rounded-full bg-white px-7 py-3 text-sm font-semibold text-slate-900 transition-all duration-300 hover:scale-105 hover:bg-slate-100 sm:w-auto md:text-base">
            Bizi Tanıyın
          </button>
        </div>
      </Reveal>
    </section>
  );
}
