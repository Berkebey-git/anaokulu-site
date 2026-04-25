import Navbar from "@/components/Navbar";
import Reveal from "@/components/Reveal";

const trustItems = [
  {
    title: "Güvenli Ortam",
    icon: "🛡️",
    description:
      "Çocuklarımız için fiziksel ve duygusal güvenliği merkeze alan, huzurlu bir eğitim atmosferi sunuyoruz.",
  },
  {
    title: "Deneyimli Eğitmenler",
    icon: "👩‍🏫",
    description:
      "Alanında uzman ve çocuk gelişimini yakından takip eden eğitmen kadromuzla her çocuğa özel yaklaşım sağlıyoruz.",
  },
  {
    title: "Modern Eğitim",
    icon: "📚",
    description:
      "Güncel eğitim yöntemleri, atölye odaklı içerikler ve oyun temelli öğrenme yaklaşımıyla gelişimi destekliyoruz.",
  },
];

const stats = ["10+ Yıl Deneyim", "500+ Mutlu Öğrenci", "20+ Uzman Eğitmen"];

export default function HakkimizdaPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />

      <main>
        <section className="relative flex h-[200px] items-center justify-center overflow-hidden text-center text-white md:h-[300px] lg:h-[400px]">
          <img src="/hero.jpg" alt="Anaokulu sınıf ortamı" className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-0 bg-black/40" />
          <Reveal className="relative z-10 px-4">
            <h1 className="text-4xl font-bold sm:text-5xl">Hakkımızda</h1>
            <p className="mx-auto mt-4 max-w-3xl text-base text-slate-100 sm:text-lg">
              1 Akademi Anaokulu olarak çocuklarımızın güvenli, mutlu ve gelişim odaklı bir ortamda eğitim
              almasını sağlıyoruz.
            </p>
          </Reveal>
        </section>

        <div className="max-w-6xl mx-auto px-4 py-16 space-y-12">
          <Reveal className="rounded-2xl bg-white p-8 shadow-lg">
            <h2 className="text-3xl font-bold text-slate-900">Biz Kimiz?</h2>
            <div className="mt-6 space-y-4 text-slate-700 leading-7">
              <p>
                1 Akademi Anaokulu olarak amacımız, çocukların sadece akademik değil, sosyal ve duygusal
                gelişimlerini de destekleyen bir eğitim ortamı sunmaktır. Her çocuğun bireysel farklılıklarını göz
                önünde bulundurarak onların potansiyellerini keşfetmelerine yardımcı oluyoruz.
              </p>
              <p>
                Deneyimli eğitmen kadromuz ile modern eğitim tekniklerini bir araya getiriyor, oyun temelli öğrenme
                yaklaşımıyla çocukların öğrenme sürecini keyifli hale getiriyoruz. Güvenli ve sevgi dolu ortamımızda
                çocuklar kendilerini rahatça ifade edebilir.
              </p>
              <p>Amacımız; özgüvenli, yaratıcı, sorgulayan ve sosyal bireyler yetiştirmektir.</p>
            </div>
          </Reveal>

          <section className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <Reveal className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-2xl font-semibold text-slate-900">🎯 Misyon</h3>
              <p className="mt-3 text-slate-700">Çocukların bireysel yeteneklerini keşfetmesini sağlamak</p>
            </Reveal>
            <Reveal className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-2xl font-semibold text-slate-900">🌟 Vizyon</h3>
              <p className="mt-3 text-slate-700">
                Modern eğitim anlayışıyla geleceğin bilinçli bireylerini yetiştirmek
              </p>
            </Reveal>
          </section>

          <section>
            <Reveal>
              <h2 className="text-center text-3xl font-bold text-slate-900">Neden Bizi Tercih Etmelisiniz?</h2>
            </Reveal>
            <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
              {trustItems.map((item) => (
                <Reveal
                  key={item.title}
                  className="rounded-xl bg-white p-6 shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
                >
                  <p className="text-3xl">{item.icon}</p>
                  <h3 className="mt-3 text-xl font-semibold text-slate-900">{item.title}</h3>
                  <p className="mt-2 text-slate-700">{item.description}</p>
                </Reveal>
              ))}
            </div>
          </section>

          <section>
            <Reveal className="rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-10 text-white">
              <div className="text-center grid gap-8 md:grid-cols-3">
                {stats.map((item) => (
                  <div
                    key={item}
                    className="rounded-xl bg-white/10 p-5 transition-all duration-300 hover:scale-105 hover:bg-white/20"
                  >
                    <p className="text-2xl font-bold">{item}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </section>

          <section className="grid grid-cols-1 items-center gap-8 md:grid-cols-2">
            <Reveal className="overflow-hidden rounded-2xl shadow-lg">
              <img
                src="/hero.jpg"
                alt="Çocuklar için modern sınıf"
                className="h-[200px] w-full object-cover transition-all duration-700 hover:scale-105 md:h-[300px] lg:h-[400px]"
              />
            </Reveal>
            <Reveal className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-3xl font-bold text-slate-900">Eğitim Ortamımız</h2>
              <p className="mt-4 text-slate-700 leading-7">
                Çocuklarımızın gelişimini destekleyen modern sınıflarımız, güvenli oyun alanlarımız ve etkileşimli
                atölye içeriklerimiz ile öğrenmeyi hem keyifli hem de kalıcı hale getiriyoruz. Her öğrencimizin kendini
                değerli hissettiği sıcak bir atmosfer oluşturuyor, akademik gelişimin yanı sıra sosyal becerilerini de
                güçlendirmeyi hedefliyoruz.
              </p>
            </Reveal>
          </section>
        </div>
      </main>
    </div>
  );
}
