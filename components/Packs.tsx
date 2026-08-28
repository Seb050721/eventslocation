"use client";

import Link from "next/link";
import {
  ArrowRight,
  Check,
  Sparkles,
} from "lucide-react";

const packs = [
  {
    title: "Pack Mariage Essentiel",
    subtitle: "Le plus demandé",
    featured: true,
    items: [
      "Photo Booth + toile de fond",
      "Accessoires Fun",
      "Smoke Puff x2",
      "Installation comprise",
    ],
  },
  {
    title: "Pack Prestige",
    subtitle: "Effet garanti",
    featured: false,
    items: [
      "Photo Booth + flash",
      "Smoke Puff x4",
      "Décoration",
      "Installation comprise",
    ],
  },
  {
    title: "Pack Gender Reveal",
    subtitle: "Un moment magique",
    featured: false,
    items: [
      "Photo Booth",
      "Smoke Puff bleu ou rose",
      "Machine à bulles",
      "Installation comprise",
    ],
  },
];

export default function Packs() {
  return (
    <section
      id="packs"
      className="relative overflow-hidden bg-[#080808] py-10 sm:py-12 lg:py-16"
    >
      {/* HALO */}

      <div className="pointer-events-none absolute -right-40 top-10 h-[300px] w-[300px] rounded-full bg-green-500/10 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* =====================================================
            TITRE
        ===================================================== */}

        <div className="mx-auto mb-7 max-w-3xl text-center sm:mb-9">

          <span className="inline-flex items-center gap-2 rounded-full border border-green-500/30 bg-green-500/10 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.22em] text-green-400 sm:text-xs">
            <Sparkles size={14} />
            Nos packs
          </span>

          <h2 className="mt-4 text-2xl font-black tracking-tight text-white sm:text-3xl lg:text-4xl">
            Des formules pensées pour
            <span className="text-green-400">
              {" "}votre événement
            </span>
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-gray-400 sm:text-base">
            Combinez plusieurs prestations dans une formule
            personnalisable et profitez d&apos;une installation
            adaptée à votre événement.
          </p>

        </div>

        {/* =====================================================
            PACKS
        ===================================================== */}

        <div className="grid gap-4 md:grid-cols-3">

          {packs.map((pack) => (
            <article
              key={pack.title}
              className={`group relative flex flex-col rounded-2xl border p-5 transition duration-300 hover:-translate-y-1 ${
                pack.featured
                  ? "border-green-500/50 bg-green-500/[0.08]"
                  : "border-white/10 bg-white/[0.04] hover:border-green-500/30"
              }`}
            >

              {/* POPULAIRE */}

              {pack.featured && (
                <div className="absolute right-4 top-4 flex items-center gap-1 rounded-full bg-green-500 px-2.5 py-1 text-[9px] font-black uppercase tracking-[0.12em] text-white">
                  <Sparkles size={11} />
                  Populaire
                </div>
              )}

              {/* TITRE */}

              <p className="pr-20 text-[10px] font-bold uppercase tracking-[0.2em] text-green-400">
                {pack.subtitle}
              </p>

              <h3 className="mt-2 text-xl font-black leading-tight text-white sm:text-2xl">
                {pack.title}
              </h3>

              {/* CONTENU */}

              <div className="mt-4 grid gap-2.5">

                {pack.items.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2.5"
                  >
                    <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-green-500/10">
                      <Check
                        size={12}
                        strokeWidth={3}
                        className="text-green-400"
                      />
                    </div>

                    <span className="text-sm leading-5 text-gray-300">
                      {item}
                    </span>
                  </div>
                ))}

              </div>

              {/* CTA */}

              <div className="mt-auto pt-5">

                <Link
                  href="#contact"
                  className={`group/button flex min-h-[44px] items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-sm font-bold transition ${
                    pack.featured
                      ? "bg-green-600 text-white hover:bg-green-700"
                      : "border border-white/10 bg-white/5 text-white hover:border-green-500/30 hover:bg-green-500/10"
                  }`}
                >
                  Demander un devis

                  <ArrowRight
                    size={15}
                    className="transition-transform group-hover/button:translate-x-1"
                  />
                </Link>

              </div>

            </article>
          ))}

        </div>

        {/* =====================================================
            INFORMATION
        ===================================================== */}

        <p className="mx-auto mt-5 max-w-2xl text-center text-xs leading-5 text-gray-500">
          Packs personnalisables selon vos besoins,
          votre lieu et votre événement.
        </p>

      </div>
    </section>
  );
}