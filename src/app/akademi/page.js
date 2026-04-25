import Navbar from "@/components/Navbar";
import Reveal from "@/components/Reveal";
import Link from "next/link";

const courses = [
  {
    title: "Robotik Kodlama",
    description:
      "Çocukların analitik düşünme ve problem çözme becerilerini geliştiren robotik ve temel kodlama eğitimi sunuyoruz. Uygulamalı çalışmalarla öğrenme desteklenir.",
    price: "2000₺ / Ay",
    detailHref: "/akademi/robotik",
    courseKey: "robotik",
    image: "https://images.unsplash.com/photo-1581092335397-9583eb92d232?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "İngilizce Eğitimi",
    description:
      "Çocukların erken yaşta dil becerilerini geliştirmesi için eğlenceli ve etkileşimli İngilizce eğitim programı sunuyoruz.",
    price: "1500₺ / Ay",
    detailHref: "/akademi/ingilizce",
    courseKey: "ingilizce",
    image:
      "/c__Users_besme_AppData_Roaming_Cursor_User_workspaceStorage_549d20071cbc51026473b84f9172965e_images_Gemini_Generated_Image_kspt8wkspt8wkspt-70f31453-bf09-4fad-bed4-4856bd68a879.png",
  },
  {
    title: "Sanat Atölyesi",
    description:
      "Yaratıcılığı geliştiren resim, el işi ve tasarım çalışmaları ile çocukların hayal gücünü destekliyoruz.",
    price: "1200₺ / Ay",
    detailHref: "/akademi/sanat",
    courseKey: "sanat",
    image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Müzik Eğitimi",
    description:
      "Çocukların ritim, melodi ve müzik yeteneklerini geliştiren eğlenceli ve öğretici etkinlikler sunuyoruz. Enstrüman tanıma, ritim çalışmaları ve grup aktiviteleri ile çocukların özgüvenini artırıyoruz.",
    price: "1800₺ / Ay",
    detailHref: "/akademi/muzik",
    courseKey: "muzik",
    image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&w=1200&q=80",
  },
];

export default function AkademiPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />

      <main className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <section className="text-center">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
            Akademi Programlarımız
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-slate-600 sm:text-lg">
            Çocuklar için özel ücretli eğitim programları
          </p>
        </section>

        <Reveal>
          <section className="grid grid-cols-1 gap-6 py-16 text-center md:grid-cols-2 lg:grid-cols-4">
            {courses.map((course) => (
              <article
                key={course.title}
                className="group overflow-hidden rounded-xl bg-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
              >
                {course.image && (
                  <img
                    src={course.image}
                    alt={course.title}
                    className="h-48 w-full rounded-t-xl object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                )}
                <div className="p-6">
                  <h2 className="text-xl font-bold text-slate-900">{course.title}</h2>
                  <p className="mt-3 text-slate-600">{course.description}</p>
                  <p className="mt-2 text-lg font-bold text-blue-600">{course.price}</p>
                  <div className="mt-4 flex justify-center gap-3">
                    <Link
                      href={`/kayit?course=${course.courseKey}`}
                      className="rounded-lg bg-blue-600 px-4 py-2 text-white transition-all duration-300 hover:scale-105 hover:bg-blue-700"
                    >
                      Kayıt Ol
                    </Link>
                    <Link href={course.detailHref}>
                      <button className="rounded-lg border border-gray-400 bg-white px-4 py-2 font-medium text-gray-800 transition-all duration-300 hover:scale-105 hover:border-gray-600 hover:bg-gray-100">
                        Detaylı Bilgi
                      </button>
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </section>
        </Reveal>
      </main>
    </div>
  );
}
