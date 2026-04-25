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
    <section className="px-6 py-16">
      <Reveal className="mx-auto max-w-6xl">
        <h2 className="text-center text-3xl font-bold text-gray-900">Atölyelerimiz</h2>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {workshops.map((workshop) => (
            <article
              key={workshop.title}
              className="group overflow-hidden rounded-xl bg-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              <img
                src={workshop.image}
                alt={workshop.alt}
                className="h-48 w-full rounded-t-xl object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900">{workshop.title}</h3>
                <p className="mt-2 text-gray-700">{workshop.description}</p>
              </div>
            </article>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
