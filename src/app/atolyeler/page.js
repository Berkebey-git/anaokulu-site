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

      <main className="max-w-6xl mx-auto py-16 px-4 space-y-12">
        <Reveal className="text-center">
          <h1 className="text-4xl font-bold text-slate-900 sm:text-5xl">Atölyelerimiz</h1>
          <p className="mx-auto mt-4 max-w-2xl text-slate-600">
            Çocuklarımızın gelişimini destekleyen etkinlikler
          </p>
        </Reveal>

        <section className="grid gap-6 md:grid-cols-2">
          {workshops.map((workshop) => (
            <Reveal
              key={workshop.slug}
              className="group overflow-hidden bg-white rounded-xl shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              <img
                src={workshop.image}
                alt={workshop.title}
                className="w-full h-48 object-cover rounded-t-xl"
              />
              <div className="p-6">
                <h2 className="text-2xl font-semibold text-slate-900">{workshop.title}</h2>
                <p className="mt-3 text-slate-700">{workshop.shortDescription}</p>
                <Link
                  href={`/atolyeler/${workshop.slug}`}
                  className="mt-5 inline-flex rounded-lg bg-blue-600 px-4 py-2 text-white transition-all duration-300 hover:scale-105 hover:bg-blue-700"
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
