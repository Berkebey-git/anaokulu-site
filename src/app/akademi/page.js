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

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <section className="text-center">
          <h1 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl md:text-4xl lg:text-5xl">
            Akademi Programlarımız
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-sm text-slate-600 sm:text-base md:text-lg">
            Çocuklar için özel ücretli eğitim programları
          </p>
        </section>

        <Reveal>
          <section className="grid grid-cols-1 gap-6 py-16 text-center sm:grid-cols-2 lg:grid-cols-3">
            {courses.map((course) => (
              <article
                key={course.title}
                className="group bg-white rounded-xl shadow-md hover:shadow-xl transition p-5 h-full flex flex-col justify-between overflow-hidden"
              >
                {course.image && (
                  <div className="relative w-full h-[220px] overflow-hidden rounded-xl sm:h-[260px] md:h-[300px] lg:h-[340px]">
                    <img
                      src={course.image}
                      alt={course.title}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                )}
                <div className="pt-5">
                  <h2 className="text-xl font-bold text-slate-900 sm:text-2xl">{course.title}</h2>
                  <p className="mt-3 text-sm text-slate-600 sm:text-base md:text-lg">{course.description}</p>
                  <p className="mt-2 text-lg font-bold text-blue-600">{course.price}</p>
                  <div className="mt-4 flex justify-center gap-3">
                    <Link
                      href={`/kayit?course=${course.courseKey}`}
                      className="px-5 py-2.5 text-sm sm:text-base rounded-xl transition hover:scale-105 rounded-lg bg-blue-600 text-white hover:bg-blue-700"
                    >
                      Kayıt Ol
                    </Link>
                    <Link href={course.detailHref}>
                      <button className="px-5 py-2.5 text-sm sm:text-base rounded-xl transition hover:scale-105 rounded-lg border border-gray-400 bg-white font-medium text-gray-800 hover:border-gray-600 hover:bg-gray-100">
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
