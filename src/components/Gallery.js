"use client";

import { useEffect, useState } from "react";
import Reveal from "@/components/Reveal";

const galleryItems = [
  {
    title: "Sınıf Etkinliği",
    image:
      "https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=1200&q=80",
    alt: "Sınıf içinde öğrenme etkinliği",
  },
  {
    title: "Oyun Zamanı",
    image:
      "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=1200&q=80",
    alt: "Çocukların oyun zamanı",
  },
  {
    title: "Sanat Etkinliği",
    image:
      "https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=1200&q=80",
    alt: "Sanat atölyesi etkinliği",
  },
  {
    title: "Müzik Atölyesi",
    image:
      "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?auto=format&fit=crop&w=1200&q=80",
    alt: "Müzik etkinliği",
  },
  {
    title: "Robotik Ders",
    image:
      "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=1200&q=80",
    alt: "Robotik sınıf etkinliği",
  },
  {
    title: "Açık Hava Oyunu",
    image:
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1200&q=80",
    alt: "Açık hava oyun etkinliği",
  },
  {
    title: "Grup Aktivitesi",
    image:
      "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?auto=format&fit=crop&w=1200&q=80",
    alt: "Çocuklarla grup aktivitesi",
  },
  {
    title: "Hikaye Saati",
    image:
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1200&q=80",
    alt: "Öğretmen eşliğinde hikaye saati",
  },
  {
    title: "Yaratıcı Oyun",
    image:
      "https://images.unsplash.com/photo-1541692641319-981cc79ee10a?auto=format&fit=crop&w=1200&q=80",
    alt: "Yaratıcı oyun etkinliği",
  },
  {
    title: "Sınıf Çalışması",
    image:
      "https://images.unsplash.com/photo-1587654780291-39c9404d746b?auto=format&fit=crop&w=1200&q=80",
    alt: "Sınıfta çalışma yapan çocuklar",
  },
];

export default function Gallery() {
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setSelectedItem(null);
      }
    };

    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, []);

  return (
    <>
      <section className="bg-gray-100 px-6 py-16">
        <Reveal className="mx-auto max-w-6xl">
        <h2 className="text-center text-3xl font-bold text-gray-900">Etkinliklerimiz</h2>
        <p className="mt-3 text-center text-gray-700">
          Çocuklarımızın günlük aktivitelerinden kareler
        </p>

        <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {galleryItems.map((item) => (
            <article
              key={item.title}
              className="group relative overflow-hidden rounded-xl bg-white shadow-md"
            >
              <button
                type="button"
                onClick={() => setSelectedItem(item)}
                className="block w-full text-left"
                aria-label={`${item.title} görselini büyüt`}
              >
                <img
                  src={item.image}
                  alt={item.alt}
                  className="h-44 w-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </button>
              <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/55 via-black/10 to-transparent p-4 opacity-0 transition duration-300 group-hover:opacity-100">
                <p className="font-medium text-white">{item.title}</p>
              </div>
            </article>
          ))}
        </div>
        </Reveal>
      </section>

      {selectedItem && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
          onClick={() => setSelectedItem(null)}
        >
          <div
            className="relative w-full max-w-4xl overflow-hidden rounded-xl bg-white shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedItem(null)}
              className="absolute right-3 top-3 z-10 rounded-full bg-black/60 px-3 py-1 text-sm font-semibold text-white transition hover:bg-black/80"
              aria-label="Lightbox kapat"
            >
              X
            </button>
            <img src={selectedItem.image} alt={selectedItem.alt} className="max-h-[80vh] w-full object-cover" />
            <div className="p-4">
              <p className="text-lg font-semibold text-slate-900">{selectedItem.title}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
