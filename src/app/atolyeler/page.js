import Navbar from "@/components/Navbar";
import Reveal from "@/components/Reveal";
import Link from "next/link";

const workshops = [
  {
    slug: "robotik",
    title: "Robotik Atölyesi",
    image: "https://images.unsplash.com/photo-1581091215367-59ab6b4c9f9a",
    shortDescription: "Problem çözme becerilerini geliştiren uygulamalı robotik ve kodlama etkinlikleri.",
  },
  {
    slug: "sanat",
    title: "Sanat Atölyesi",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e",
    shortDescription: "Hayal gücünü güçlendiren boyama, tasarım ve el işi çalışmaları.",
  },
  {
    slug: "muzik",
    title: "Müzik Atölyesi",
    image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d",
    shortDescription: "Ritim, melodi ve dinleme becerilerini eğlenceli etkinliklerle geliştirme.",
  },
  {
    slug: "ingilizce",
    title: "İngilizce Atölyesi",
    image: "https://images.unsplash.com/photo-1577896851231-70ef18881754",
    shortDescription: "Oyun ve etkileşim odaklı etkinliklerle erken yaş İngilizce gelişimi.",
  },
];

export default function AtolyelerPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">
        <Reveal className="text-center">
          <h1 className="text-2xl font-bold text-slate-900 sm:text-3xl md:text-4xl lg:text-5xl">Atölyelerimiz</h1>
          <p className="mx-auto mt-4 max-w-2xl text-sm text-slate-600 sm:text-base md:text-lg">
            Çocuklarımızın gelişimini destekleyen etkinlikler
          </p>
        </Reveal>

        <section className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {workshops.map((workshop) => (
            <Reveal
              key={workshop.slug}
              className="group bg-white rounded-xl shadow-md hover:shadow-xl transition p-5 h-full flex flex-col justify-between overflow-hidden"
            >
              <div className="relative w-full h-[220px] overflow-hidden rounded-xl sm:h-[260px] md:h-[300px] lg:h-[340px]">
                <img
                  src={workshop.image}
                  alt={workshop.title}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <div className="pt-5">
                <h2 className="text-xl font-semibold text-slate-900 sm:text-2xl">{workshop.title}</h2>
                <p className="mt-3 text-sm text-slate-700 sm:text-base md:text-lg">{workshop.shortDescription}</p>
                <Link
                  href={`/atolyeler/${workshop.slug}`}
                  className="mt-5 inline-flex px-5 py-2.5 text-sm sm:text-base rounded-xl bg-blue-600 text-white transition hover:scale-105 hover:bg-blue-700"
                >
                  Detaylı İncele
                </Link>
              </div>
            </Reveal>
          ))}
        </section>
      </main>
    </div>
  );
}
