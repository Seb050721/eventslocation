"use client";

import { Check } from "lucide-react";
import Link from "next/link";

const packs = [
  {
    title: "Pack Mariage Essentiel",
    subtitle: "Le plus demandé",
    price: "Sur devis",
    featured: true,
    items: [
      "📸 Photo Booth",
      "🖼️ Toile de fond",
      "🎭 Accessoires Fun",
      "💨 Smoke Puff x2",
      "🚚 Installation comprise",
    ],
  },
  {
    title: "Pack Prestige",
    subtitle: "Effet garanti",
    price: "Sur devis",
    featured: false,
    items: [
      "📸 Photo Booth",
      "⚡ Flash additionnel",
      "💨 Smoke Puff x4",
      "🎀 Décoration",
      "🚚 Installation comprise",
    ],
  },
  {
    title: "Pack Gender Reveal",
    subtitle: "Un moment magique",
    price: "Sur devis",
    featured: false,
    items: [
      "📸 Photo Booth",
      "💙 Smoke Puff",
      "🩷 Smoke Puff",
      "🫧 Machine à bulles",
      "🎈 Décoration",
    ],
  },
];
export default function Packs() {
  return (
    <section className="bg-[#050505] py-28">

      <div className="mx-auto max-w-7xl px-6">

        <div className="mx-auto mb-20 max-w-3xl text-center">

          <span className="rounded-full border border-green-500/30 bg-green-500/10 px-5 py-2 text-sm uppercase tracking-[0.35em] text-green-400">
            Nos Packs
          </span>

          <h2 className="mt-8 text-5xl font-black text-white">
            Des offres pensées pour votre événement
          </h2>

          <p className="mt-8 text-lg text-gray-400">
            Gagnez du temps avec des formules complètes adaptées aux moments les plus importants.
          </p>

        </div>

        <div className="grid gap-8 lg:grid-cols-3">

          {packs.map((pack) => (

            <div
              key={pack.title}
              className={`rounded-3xl border p-8 backdrop-blur-xl transition duration-500 hover:-translate-y-2 ${
                pack.featured
                  ? "border-green-500 bg-green-500/10 shadow-[0_20px_60px_rgba(34,197,94,.15)]"
                  : "border-white/10 bg-white/5"
              }`}
            >

              <p className="text-sm uppercase tracking-[0.35em] text-green-400">
                {pack.subtitle}
              </p>

              <h3 className="mt-3 text-3xl font-bold text-white">
                {pack.title}
              </h3>

              <p className="mt-6 text-4xl font-black text-green-400">
                {pack.price}
              </p>

              <div className="mt-8 space-y-4">

                {pack.items.map((item) => (

                  <div
                    key={item}
                    className="flex items-center gap-3"
                  >

                    <Check
                      size={18}
                      className="text-green-400"
                    />

                    <span className="text-gray-200">
                      {item}
                    </span>

                  </div>

                ))}

              </div>

              <Link
                href="#contact"
                className="mt-10 flex justify-center rounded-full bg-green-600 px-6 py-4 font-semibold text-white transition hover:bg-green-700"
              >
                Demander un devis
              </Link>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}