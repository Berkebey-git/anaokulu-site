"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Navbar from "@/components/Navbar";

const courseLabelMap = {
  robotik: "Robotik Kodlama",
  ingilizce: "İngilizce Eğitimi",
  sanat: "Sanat Atölyesi",
  muzik: "Müzik Eğitimi",
};

export default function KayitPage() {
  const searchParams = useSearchParams();
  const selectedCourse = (searchParams.get("course") || "").toLowerCase();

  const [formData, setFormData] = useState({
    adSoyad: "",
    telefonNumarasi: "",
    cocukYasi: "",
    program: selectedCourse,
  });

  useEffect(() => {
    setFormData((prev) => ({
      ...prev,
      program: selectedCourse || "",
    }));
  }, [selectedCourse]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Kayıt başarılı!");
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />

      <main className="flex min-h-[calc(100vh-80px)] items-center justify-center px-4 py-10">
        <section className="w-full max-w-md rounded-xl bg-white p-8 shadow-xl">
          <h1 className="text-3xl font-bold text-gray-900">Kayıt Formu</h1>
          <p className="mb-6 mt-2 text-gray-700">
            Çocuğunuz için ön kayıt oluşturun
          </p>
          {selectedCourse && courseLabelMap[selectedCourse] && (
            <p className="mb-4 rounded-lg bg-blue-50 p-3 text-sm font-medium text-blue-700">
              Seçtiğiniz kurs: {courseLabelMap[selectedCourse]}
            </p>
          )}

          <form onSubmit={handleSubmit}>
            <label htmlFor="adSoyad" className="mb-1 block text-sm font-medium text-gray-800">
              Ad Soyad
            </label>
            <input
              id="adSoyad"
              type="text"
              name="adSoyad"
              value={formData.adSoyad}
              onChange={handleChange}
              className="mb-4 w-full rounded-lg border border-gray-300 p-3 text-black placeholder:text-gray-500 outline-none transition focus:ring-2 focus:ring-blue-500"
              required
            />

            <label
              htmlFor="telefonNumarasi"
              className="mb-1 block text-sm font-medium text-gray-800"
            >
              Telefon Numarası
            </label>
            <input
              id="telefonNumarasi"
              type="tel"
              name="telefonNumarasi"
              value={formData.telefonNumarasi}
              onChange={handleChange}
              className="mb-4 w-full rounded-lg border border-gray-300 p-3 text-black placeholder:text-gray-500 outline-none transition focus:ring-2 focus:ring-blue-500"
              required
            />

            <label htmlFor="cocukYasi" className="mb-1 block text-sm font-medium text-gray-800">
              Çocuk Yaşı
            </label>
            <input
              id="cocukYasi"
              type="number"
              name="cocukYasi"
              value={formData.cocukYasi}
              onChange={handleChange}
              className="mb-4 w-full rounded-lg border border-gray-300 p-3 text-black placeholder:text-gray-500 outline-none transition focus:ring-2 focus:ring-blue-500"
              min="1"
              required
            />

            <label htmlFor="program" className="mb-1 block text-sm font-medium text-gray-800">
              İlgilendiği Program
            </label>
            <select
              id="program"
              name="program"
              value={formData.program || ""}
              onChange={handleChange}
              className="mb-4 w-full rounded-lg border border-gray-300 p-3 text-black outline-none transition focus:ring-2 focus:ring-blue-500"
              required
            >
              <option value="" disabled>
                Program seçiniz
              </option>
              <option value="robotik">Robotik Kodlama</option>
              <option value="ingilizce">İngilizce Eğitimi</option>
              <option value="sanat">Sanat Atölyesi</option>
              <option value="muzik">Müzik Eğitimi</option>
            </select>

            <button
              type="submit"
              className="w-full rounded-lg bg-blue-600 px-6 py-3 text-white transition-all duration-300 hover:bg-blue-700"
            >
              Kayıt Gönder
            </button>
          </form>
        </section>
      </main>
    </div>
  );
}
