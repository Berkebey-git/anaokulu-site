"use client";

import { useMemo, useState } from "react";
import Navbar from "@/components/Navbar";
import Reveal from "@/components/Reveal";

const tabs = [
  { key: "mudur", label: "Müdür" },
  { key: "mudur-yardimcisi", label: "Müdür Yardımcısı" },
  { key: "ogretmenler", label: "Öğretmenler" },
];

const staffData = {
  mudur: [
    {
      name: "Murat GENÇER",
      title: "Müdür",
      description:
        "Kurumumuzun eğitim vizyonunu yöneten, güvenli ve kaliteli eğitim ortamını destekleyen liderimiz.",
      image: "https://i.pravatar.cc/300?img=12",
    },
  ],
  "mudur-yardimcisi": [
    {
      name: "Ayşe YILMAZ",
      title: "Müdür Yardımcısı",
      description:
        "Eğitim süreçlerinin düzenli ilerlemesini sağlayan, öğrenci ve veli iletişimini destekleyen yönetici kadromuz.",
      image: "https://i.pravatar.cc/300?img=32",
    },
  ],
  ogretmenler: [
    {
      name: "Elif KAYA",
      title: "Okul Öncesi Öğretmeni",
      description: "Çocukların güvenle öğrenmesini destekleyen, sevgi dolu ve deneyimli eğitimcimiz.",
      image: "https://i.pravatar.cc/300?img=5",
    },
    {
      name: "Zeynep DEMİR",
      title: "İngilizce Öğretmeni",
      description: "Oyun temelli etkinliklerle çocukların erken yaşta dil gelişimini güçlendirir.",
      image: "https://i.pravatar.cc/300?img=47",
    },
    {
      name: "Merve ŞAHİN",
      title: "Sanat Atölyesi Eğitmeni",
      description: "Yaratıcı çalışmalarla çocukların hayal gücünü ve kendini ifade becerisini geliştirir.",
      image: "https://i.pravatar.cc/300?img=25",
    },
    {
      name: "Canan ARSLAN",
      title: "Müzik Öğretmeni",
      description: "Ritim ve melodi odaklı derslerle çocukların müzik sevgisini keyifle artırır.",
      image: "https://i.pravatar.cc/300?img=42",
    },
  ],
};

export default function PersonellerPage() {
  const [activeTab, setActiveTab] = useState("mudur");
  const activeStaff = useMemo(() => staffData[activeTab] || [], [activeTab]);

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />

      <main className="max-w-6xl mx-auto py-16 px-4">
        <Reveal className="text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900">Personellerimiz</h1>
          <p className="mt-3 text-sm sm:text-base md:text-lg text-slate-600">Deneyimli ve sevgi dolu kadromuz</p>
        </Reveal>

        <Reveal className="mt-8 flex flex-wrap justify-center gap-3">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.key;
            return (
              <button
                key={tab.key}
                type="button"
                onClick={() => setActiveTab(tab.key)}
                className={`rounded-xl px-5 py-2.5 text-sm sm:text-base font-medium transition ${
                  isActive
                    ? "bg-blue-600 text-white shadow-md"
                    : "bg-white text-slate-700 border border-slate-300 hover:bg-slate-50"
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </Reveal>

        <Reveal
          className={`mt-10 grid gap-6 ${
            activeTab === "ogretmenler" ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" : "grid-cols-1"
          }`}
        >
          {activeStaff.map((person) => (
            <article
              key={person.name}
              className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition text-center h-full flex flex-col justify-between"
            >
              <div className="mx-auto h-24 w-24 overflow-hidden rounded-full border border-slate-200">
                <img src={person.image} alt={person.name} className="h-full w-full object-cover" />
              </div>
              <div className="mt-4">
                <h2 className="text-xl font-semibold text-slate-900">{person.name}</h2>
                <p className="mt-1 font-medium text-blue-600">{person.title}</p>
                <p className="mt-3 text-sm sm:text-base text-slate-600">{person.description}</p>
              </div>
            </article>
          ))}
        </Reveal>
      </main>
    </div>
  );
}
