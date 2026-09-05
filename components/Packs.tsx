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
    accent: {
      text: "text-[#EF5A4F]",
      soft: "bg-[#FFF0ED]",
      border: "border-[#EF5A4F]/30",
    },
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
    accent: {
      text: "text-[#C34F72]",
      soft: "bg-[#FAEEF2]",
      border: "border-[#C34F72]/20",
    },
    items: [
      "Photo Booth + flash",
      "Accessoires Fun",
      "Diffusion",
      "Smoke Puff x5",
      "Installation comprise",
    ],
  },
  {
    title: "Pack Gender Reveal",
    subtitle: "Un moment magique",
    featured: false,
    accent: {
      text: "text-[#4A9692]",
      soft: "bg-[#EDF7F6]",
      border: "border-[#4A9692]/20",
    },
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
      className="relative scroll-mt-[80px] overflow-hidden bg-[#F7F3EF] py-12 sm:py-14 lg:py-16"
    >
      {/* =====================================================
          HALOS
      ===================================================== */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 top-8 h-[260px] w-[260px] rounded-full bg-[#4A9692]/7 blur-[120px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 bottom-0 h-[280px] w-[280px] rounded-full bg-[#EF5A4F]/8 blur-[130px]"
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

        {/* =====================================================
            TITRE
        ===================================================== */}

        <div className="mx-auto mb-8 max-w-3xl text-center">

          <span className="inline-flex items-center gap-2 rounded-full border border-[#F3A044]/20 bg-[#FFF5E9] px-4 py-2 text-[10px] font-bold uppercase tracking-[0.18em] text-[#C77A20] sm:text-xs">
            <Sparkles size={14} />

            Nos packs
          </span>

          <h2 className="mt-4 text-3xl font-black tracking-tight text-[#1D1B1C] sm:text-4xl lg:text-[42px]">
            Des formules pensées pour
            <span className="text-[#EF5A4F]">
              {" "}votre événement
            </span>
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-[#716A6C] sm:text-base">
            Combinez plusieurs prestations dans une formule
            personnalisable selon votre événement, votre lieu et vos besoins.
          </p>

        </div>

        {/* =====================================================
            PACKS
        ===================================================== */}

        <div className="grid gap-4 md:grid-cols-3">

          {packs.map((pack) => (
            <article
              key={pack.title}
              className={`group relative flex h-full flex-col rounded-[22px] border bg-white p-5 shadow-[0_8px_26px_rgba(31,25,27,0.05)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_38px_rgba(31,25,27,0.08)] ${
                pack.featured
                  ? "border-[#EF5A4F]/35"
                  : "border-[#E9E2DD]"
              }`}
            >

              {/* =================================================
                  POPULAIRE
              ================================================= */}

              {pack.featured && (
                <div className="absolute right-4 top-4 flex items-center gap-1 rounded-full bg-[#EF5A4F] px-2.5 py-1 text-[9px] font-black uppercase tracking-[0.12em] text-white shadow-sm">
                  <Sparkles size={11} />
                  Populaire
                </div>
              )}

              {/* =================================================
                  TITRE
              ================================================= */}

              <p
                className={`pr-20 text-[10px] font-bold uppercase tracking-[0.18em] ${pack.accent.text}`}
              >
                {pack.subtitle}
              </p>

              <h3 className="mt-2 text-xl font-black leading-tight text-[#1D1B1C] sm:text-2xl">
                {pack.title}
              </h3>

              {/* =================================================
                  CONTENU
              ================================================= */}

              <div className="mt-4 grid gap-2.5">

                {pack.items.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2.5"
                  >
                    <div
                      className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${pack.accent.soft}`}
                    >
                      <Check
                        size={12}
                        strokeWidth={3}
                        className={pack.accent.text}
                      />
                    </div>

                    <span className="text-sm leading-5 text-[#514B4D]">
                      {item}
                    </span>
                  </div>
                ))}

              </div>

              {/* =================================================
                  CTA
              ================================================= */}

              <div className="mt-auto pt-5">

                <Link
                  href="#contact"
                  className={`group/button flex min-h-[42px] items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-sm font-bold transition-all duration-200 ${
                    pack.featured
                      ? "bg-[#EF5A4F] text-white shadow-[0_8px_20px_rgba(239,90,79,0.16)] hover:bg-[#D94A41]"
                      : "border border-[#E4DCD7] bg-[#FBFAF8] text-[#3F3A3C] hover:border-[#EF5A4F]/30 hover:bg-[#FFF0ED] hover:text-[#D94A41]"
                  }`}
                >
                  Demander un devis

                  <ArrowRight
                    size={15}
                    className="transition-transform duration-200 group-hover/button:translate-x-1"
                  />
                </Link>

              </div>

            </article>
          ))}

        </div>

        {/* =====================================================
            INFORMATION
        ===================================================== */}

        <p className="mx-auto mt-5 max-w-2xl text-center text-xs leading-5 text-[#8B8486]">
          Packs personnalisables selon vos besoins, votre lieu et votre événement.
        </p>

      </div>
    </section>
  );
}