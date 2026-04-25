import Reveal from "@/components/Reveal";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative isolate flex h-[60vh] items-center justify-center overflow-hidden text-center md:h-[80vh]">
      <Image src="/hero.jpg" alt="Anaokulu sınıf ortamı" fill className="-z-20 object-cover" />
      <div className="absolute inset-0 -z-10 bg-black/55" />

      <Reveal className="mx-auto w-full max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <h1 className="text-2xl font-bold leading-tight text-white sm:text-3xl md:text-4xl lg:text-5xl">
          Çocuğunuz İçin Güvenli ve Mutlu Bir Eğitim Ortamı
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-sm text-slate-200 sm:text-base md:text-lg">
          Sevgi dolu eğitmen kadromuz, zengin atölyelerimiz ve güvenli kampüs
          ortamımızla çocuğunuzun gelişimini destekliyoruz.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <button className="w-full rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:scale-105 hover:bg-blue-700 sm:w-auto sm:text-base">
            Ön Kayıt Oluştur
          </button>
          <button className="w-full rounded-xl bg-white px-5 py-2.5 text-sm font-semibold text-slate-900 transition hover:scale-105 hover:bg-slate-100 sm:w-auto sm:text-base">
            Bizi Tanıyın
          </button>
        </div>
      </Reveal>
    </section>
  );
}
