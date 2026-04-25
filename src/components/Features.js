import Reveal from "@/components/Reveal";

const workshops = [
  {
    title: "Robotik Kodlama",
    description: "Problem çözme ve üretken düşünmeyi destekleyen eğlenceli teknoloji etkinlikleri.",
    image: "https://images.unsplash.com/photo-1581092335397-9583eb92d232?auto=format&fit=crop&w=1200&q=80",
    alt: "Robotik Kodlama atölyesi",
  },
  {
    title: "Sanat Atölyesi",
    description: "Resim, el işi ve tasarım çalışmalarıyla çocukların hayal gücünü geliştiriyoruz.",
    image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=1200&q=80",
    alt: "Sanat Atölyesi",
  },
  {
    title: "Müzik Eğitimi",
    description: "Ritim ve melodi etkinlikleriyle çocukların işitsel farkındalığını artırıyoruz.",
    image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&w=1200&q=80",
    alt: "Müzik Eğitimi",
  },
  {
    title: "İngilizce Eğitimi",
    description:
      "Çocukların erken yaşta İngilizce öğrenmesini sağlayan eğlenceli ve etkileşimli dil aktiviteleri sunuyoruz.",
    image:
      "/c__Users_besme_AppData_Roaming_Cursor_User_workspaceStorage_549d20071cbc51026473b84f9172965e_images_Gemini_Generated_Image_kspt8wkspt8wkspt-70f31453-bf09-4fad-bed4-4856bd68a879.png",
    alt: "İngilizce Eğitimi",
  },
];

export default function Features() {
  return (
    <section className="px-4 py-16">
      <Reveal className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-xl font-bold text-gray-900 sm:text-2xl md:text-3xl">Atölyelerimiz</h2>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {workshops.map((workshop) => (
            <article
              key={workshop.title}
              className="group flex h-full flex-col justify-between overflow-hidden rounded-xl bg-white p-5 shadow-md transition hover:shadow-xl"
            >
              <div className="relative w-full h-[220px] overflow-hidden rounded-xl sm:h-[260px] md:h-[300px] lg:h-[340px]">
                <img
                  src={workshop.image}
                  alt={workshop.alt}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <div className="pt-5">
                <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">{workshop.title}</h3>
                <p className="mt-2 text-sm text-gray-700 sm:text-base md:text-lg">{workshop.description}</p>
              </div>
            </article>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
