"use client";

import Link from "next/link";
import { Check, ArrowRight, Sparkles } from "lucide-react";

const packs = [
  {
    title: "Pack Mariage Essentiel",
    subtitle: "Le plus demandé",
    price: "Sur devis",
    featured: true,
    items: [
      "Photo Booth",
      "Toile de fond",
      "Accessoires Fun",
      "Smoke Puff x2",
      "Installation comprise",
    ],
  },
  {
    title: "Pack Prestige",
    subtitle: "Effet garanti",
    price: "Sur devis",
    featured: false,
    items: [
      "Photo Booth",
      "Flash additionnel",
      "Smoke Puff x4",
      "Décoration",
      "Installation comprise",
    ],
  },
  {
    title: "Pack Gender Reveal",
    subtitle: "Un moment magique",
    price: "Sur devis",
    featured: false,
    items: [
      "Photo Booth",
      "Smoke Puff bleu ou rose",
      "Machine à bulles",
      "Décoration",
      "Installation comprise",
    ],
  },
];

export default function Packs() {
  return (
    <section
      id="packs"
      className="relative overflow-hidden bg-[#080808] py-20 sm:py-24 lg:py-28"
    >
      <div className="pointer-events-none absolute -right-52 top-20 h-[500px] w-[500px] rounded-full bg-green-500/10 blur-[170px]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

        <div className="mx-auto mb-12 max-w-3xl text-center sm:mb-16 lg:mb-20">

          <span className="inline-flex rounded-full border border-green-500/30 bg-green-500/10 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.25em] text-green-400 sm:px-5 sm:text-xs sm:tracking-[0.35em]">
            Nos packs
          </span>

          <h2 className="mt-6 text-4xl font-black leading-tight tracking-tight text-white sm:text-5xl lg:mt-8 lg:text-6xl">
            Des offres pensées pour
            <span className="block text-green-400">
              votre événement
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-gray-400 sm:text-lg sm:leading-8">
            Combinez plusieurs prestations dans une formule adaptée à votre
            événement et demandez un devis personnalisé.
          </p>

        </div>

        <div className="grid gap-5 lg:grid-cols-3 lg:gap-7">

          {packs.map((pack) => (
            <article
              key={pack.title}
              className={`relative flex h-full flex-col rounded-[28px] border p-6 transition-all duration-300 hover:-translate-y-2 sm:p-8 ${
                pack.featured
                  ? "border-green-500/70 bg-green-500/10 shadow-[0_25px_70px_rgba(34,197,94,0.14)]"
                  : "border-white/10 bg-white/[0.05] hover:border-green-500/30"
              }`}
            >

              {pack.featured && (
                <div className="absolute right-5 top-5 flex items-center gap-1.5 rounded-full bg-green-500 px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.16em] text-white">
                  <Sparkles size={13} />
                  Populaire
                </div>
              )}

              <p className="pr-24 text-[10px] font-bold uppercase tracking-[0.25em] text-green-400 sm:text-xs">
                {pack.subtitle}
              </p>

              <h3 className="mt-3 text-2xl font-black leading-tight text-white sm:text-3xl">
                {pack.title}
              </h3>

              <p className="mt-5 text-3xl font-black text-green-400 sm:mt-6 sm:text-4xl">
                {pack.price}
              </p>

              <div className="mt-7 space-y-3 sm:mt-8 sm:space-y-4">

                {pack.items.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3"
                  >
                    <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-green-500/15">
                      <Check
                        size={13}
                        strokeWidth={3}
                        className="text-green-400"
                      />
                    </div>

                    <span className="text-sm leading-6 text-gray-300 sm:text-base">
                      {item}
                    </span>
                  </div>
                ))}

              </div>

              <div className="mt-auto pt-8">

                <Link
                  href="#contact"
                  className={`group flex min-h-[54px] items-center justify-center gap-2 rounded-xl px-5 py-3.5 text-center font-bold transition-all duration-200 sm:rounded-2xl ${
                    pack.featured
                      ? "bg-green-600 text-white hover:bg-green-700"
                      : "border border-white/15 bg-white/5 text-white hover:border-green-500/40 hover:bg-green-500/10"
                  }`}
                >
                  Demander un devis

                  <ArrowRight
                    size={18}
                    className="transition-transform duration-200 group-hover:translate-x-1"
                  />
                </Link>

              </div>

            </article>
          ))}

        </div>

        <p className="mx-auto mt-8 max-w-2xl text-center text-xs leading-5 text-gray-500 sm:text-sm">
          Les packs sont personnalisables selon vos besoins, votre lieu et la
          configuration de votre événement.
        </p>

      </div>
    </section>
  );
}