import Link from "next/link";
import Navbar from "@/components/Navbar";

const courseDetails = {
  robotik: {
    title: "Robotik Kodlama Eğitimi",
    description:
      "Çocukların analitik düşünme, problem çözme ve üretkenlik becerilerini geliştiren uygulamalı bir eğitim programıdır.",
    price: "2000₺ / Ay",
    offers: [
      "Uygulamalı eğitim içerikleri",
      "Küçük grup çalışmaları",
      "Eğitmen desteği",
      "Eğlenceli ve öğretici etkinlikler",
    ],
    weeks: [
      "1. Hafta: Temel robotik kavramlar ve algoritma mantığı",
      "2. Hafta: Basit kodlama ve sensör kullanımı",
      "3. Hafta: Robot hareketleri ve uygulamalı çalışmalar",
      "4. Hafta: Mini proje geliştirme ve sunum",
    ],
    gains: [
      "Analitik düşünme becerisi",
      "Problem çözme yeteneği",
      "Teknolojiye ilgi",
      "Özgüven ve üretkenlik",
    ],
  },
  ingilizce: {
    title: "İngilizce Eğitimi",
    description:
      "Çocukların erken yaşta İngilizce ile tanışmasını sağlayan eğlenceli ve etkileşimli dil gelişim programıdır.",
    price: "1500₺ / Ay",
    offers: [
      "Oyunlarla öğrenme",
      "Kelime ve konuşma çalışmaları",
      "Görsel ve işitsel materyaller",
      "Eğlenceli sınıf etkinlikleri",
    ],
    weeks: [
      "1. Hafta: Temel kelimeler ve tanışma",
      "2. Hafta: Günlük ifadeler ve mini konuşmalar",
      "3. Hafta: Oyunlarla tekrar ve pratik",
      "4. Hafta: Basit cümle kurma ve sunum",
    ],
    gains: [
      "Temel İngilizce kelime bilgisi",
      "Konuşma cesareti",
      "Dinleme ve anlama gelişimi",
      "Yabancı dile ilgi",
    ],
  },
  sanat: {
    title: "Sanat Atölyesi",
    description: "Çocukların yaratıcılığını, hayal gücünü ve el becerilerini geliştiren eğlenceli sanat programıdır.",
    price: "1200₺ / Ay",
    offers: [
      "Boyama ve çizim çalışmaları",
      "El işi ve tasarım etkinlikleri",
      "Yaratıcı grup projeleri",
      "Bireysel üretim desteği",
    ],
    weeks: [
      "1. Hafta: Temel çizim ve boyama",
      "2. Hafta: Renk ve şekil çalışmaları",
      "3. Hafta: El işi ve tasarım uygulamaları",
      "4. Hafta: Kendi sanat çalışmasını oluşturma",
    ],
    gains: ["Yaratıcılık gelişimi", "El becerisi", "Hayal gücü", "Kendini ifade etme"],
  },
  muzik: {
    title: "Müzik Eğitimi",
    description: "Çocukların ritim, melodi ve işitsel farkındalık becerilerini geliştiren eğlenceli müzik programıdır.",
    price: "1800₺ / Ay",
    offers: [
      "Ritim çalışmaları",
      "Enstrüman tanıma",
      "Şarkılar ve grup etkinlikleri",
      "İşitsel dikkat geliştirme",
    ],
    weeks: [
      "1. Hafta: Ritim ve tempo çalışmaları",
      "2. Hafta: Enstrümanları tanıma",
      "3. Hafta: Uygulamalı müzik etkinlikleri",
      "4. Hafta: Mini performans ve sunum",
    ],
    gains: ["Ritim duygusu", "İşitsel gelişim", "Özgüven", "Sosyal uyum"],
  },
};

export default async function Page({ params }) {
  const resolvedParams = await params;
  const slug = decodeURIComponent((resolvedParams?.slug || "").toLowerCase().trim());
  const course = courseDetails[slug];

  if (!course) {
    return <div className="mt-20 text-center">Kurs bulunamadı</div>;
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      <main className="px-6 py-16">
        <section className="mx-auto max-w-4xl rounded-xl bg-white p-8 shadow-lg">
          <h1 className="text-3xl font-bold text-slate-900">{course.title}</h1>
          <p className="mt-4 leading-7 text-slate-700">{course.description}</p>
          <p className="mt-4 text-xl font-bold text-blue-600">{course.price}</p>

          <h2 className="mt-10 text-2xl font-semibold text-slate-900">Bu Eğitimde Neler Sunuyoruz?</h2>
          <ul className="mt-4 list-disc space-y-2 pl-6 text-slate-700">
            {course.offers.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <h3 className="mt-10 text-xl font-semibold text-slate-900">4 Haftalık Program</h3>
          <ul className="mt-4 list-disc space-y-2 pl-6 text-slate-700">
            {course.weeks.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <h3 className="mt-10 text-xl font-semibold text-slate-900">Çocuklar Ne Kazanır?</h3>
          <ul className="mt-4 list-disc space-y-2 pl-6 text-slate-700">
            {course.gains.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              href={`/kayit?course=${slug}`}
              className="inline-flex rounded-lg bg-blue-600 px-5 py-3 font-medium text-white transition-all duration-300 hover:scale-105 hover:bg-blue-700"
            >
              Kayıt Ol
            </Link>
            <Link
              href="/akademi"
              className="inline-flex rounded-lg border border-gray-300 bg-white px-5 py-3 font-medium text-gray-800 transition-all duration-300 hover:scale-105 hover:bg-gray-100"
            >
              Akademiye Dön
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
