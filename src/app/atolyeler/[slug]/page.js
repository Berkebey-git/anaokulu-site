import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Reveal from "@/components/Reveal";

const workshopDetails = {
  robotik: {
    title: "Robotik Atölyesi",
    description: "Çocukların problem çözme becerilerini geliştiren uygulamalı robotik etkinlikler.",
    longText:
      "Bu atölyede çocuklar temel robotik sistemleri tanır, basit kodlama öğrenir ve ekip çalışmasıyla mini projeler geliştirir. Adım adım ilerleyen etkinlik yapısı sayesinde hem eğlenir hem üretken düşünmeyi keşfederler.",
    activities: [
      "Temel robotik parçaları ve sensörlerle tanışma",
      "Yaşa uygun kodlama ve algoritma oyunları",
      "Takım çalışmasıyla mini robot projeleri",
      "Problem çözme odaklı uygulamalar",
    ],
    gains: ["Analitik düşünme", "Problem çözme becerisi", "Teknolojiye bilinçli ilgi"],
  },
  sanat: {
    title: "Sanat Atölyesi",
    description: "Yaratıcılığı geliştiren etkinlikler",
    longText:
      "Resim, boyama ve tasarım çalışmaları ile çocukların hayal gücünü destekleyen bu atölyede, her çocuk kendi üretim dilini keşfeder. Süreç odaklı etkinlikler çocukların özgüvenini ve ifade gücünü artırır.",
    activities: [
      "Boyama, kolaj ve çizim uygulamaları",
      "Farklı malzemelerle tasarım etkinlikleri",
      "Bireysel ve grup sanat çalışmaları",
      "Renk ve kompozisyon keşfi",
    ],
    gains: ["Yaratıcılık", "İnce motor gelişimi", "Kendini ifade etme"],
  },
  muzik: {
    title: "Müzik Atölyesi",
    description: "Ritim ve müzik gelişimi",
    longText:
      "Çocuklar ritim duygusu kazanır, sesleri ayırt etmeyi öğrenir ve müzikle kendini ifade eder. Hareket, oyun ve enstrüman tanıma aktiviteleri ile öğrenme daha eğlenceli hale gelir.",
    activities: [
      "Ritim ve tempo oyunları",
      "Basit enstrümanları tanıma",
      "Şarkı ve grup müzik etkinlikleri",
      "Dinleme ve ses ayırt etme çalışmaları",
    ],
    gains: ["İşitsel farkındalık", "Ritim duygusu", "Sosyal uyum"],
  },
  ingilizce: {
    title: "İngilizce Atölyesi",
    description: "Erken yaşta dil eğitimi",
    longText:
      "Oyunlarla İngilizce öğrenme yaklaşımıyla çocuklar yabancı dile doğal bir şekilde maruz kalır. Kelime kartları, hikayeler ve konuşma pratikleri ile temel dil becerileri desteklenir.",
    activities: [
      "Kelime oyunları ve kart etkinlikleri",
      "Basit konuşma pratikleri",
      "Şarkı, hikaye ve canlandırma çalışmaları",
      "Görsel-işitsel dil aktiviteleri",
    ],
    gains: ["Kelime dağarcığı", "Konuşma cesareti", "Yabancı dile ilgi"],
  },
};

export default async function AtolyeDetailPage({ params }) {
  const resolvedParams = await params;
  const slug = decodeURIComponent((resolvedParams?.slug || "").toLowerCase().trim());
  const workshop = workshopDetails[slug];

  if (!workshop) return notFound();

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      <main className="px-6 py-16">
        <Reveal className="mx-auto max-w-4xl rounded-xl bg-white p-8 shadow-lg">
          <h1 className="text-3xl font-bold text-slate-900">{workshop.title}</h1>
          <p className="mt-4 leading-7 text-slate-700">{workshop.description}</p>

          <div className="mt-8">
            <h2 className="text-2xl font-semibold text-slate-900">Açıklama</h2>
            <p className="mt-3 leading-7 text-slate-700">{workshop.longText}</p>
          </div>

          <div className="mt-8">
            <h3 className="text-xl font-semibold text-slate-900">Bu Atölyede Neler Yapıyoruz?</h3>
            <ul className="mt-3 list-disc space-y-2 pl-6 text-slate-700">
              {workshop.activities.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="mt-8">
            <h3 className="text-xl font-semibold text-slate-900">Çocuklar Ne Kazanır?</h3>
            <ul className="mt-3 list-disc space-y-2 pl-6 text-slate-700">
              {workshop.gains.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              href={`/kayit?course=${slug}`}
              className="inline-flex rounded-lg bg-blue-600 px-5 py-3 font-medium text-white transition-all duration-300 hover:scale-105 hover:bg-blue-700"
            >
              Kayıt Ol
            </Link>
            <Link
              href="/atolyeler"
              className="inline-flex rounded-lg border border-gray-300 bg-white px-5 py-3 font-medium text-gray-800 transition-all duration-300 hover:scale-105 hover:bg-gray-100"
            >
              Atölyelere Dön
            </Link>
          </div>
        </Reveal>
      </main>
    </div>
  );
}
