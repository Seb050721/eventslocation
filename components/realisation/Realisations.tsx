import Link from "next/link";

import {
  ArrowRight,
  Sparkles,
} from "lucide-react";

import { realisations } from "@/data/realisations";
import { RealisationCard } from "./RealisationCard";

export function Realisations() {
  if (!realisations || realisations.length === 0) {
    return null;
  }

  const displayedRealisations =
    realisations.slice(0, 3);

  return (
    <section
      id="realisations"
      className="relative overflow-hidden bg-[#FBFAF8] py-12 sm:py-14 lg:py-16"
    >
      {/* =====================================================
          HALOS
      ===================================================== */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 top-10 h-[260px] w-[260px] rounded-full bg-[#4A9692]/7 blur-[120px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 bottom-0 h-[280px] w-[280px] rounded-full bg-[#C34F72]/7 blur-[130px]"
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

        {/* =====================================================
            TITRE
        ===================================================== */}

        <div className="mx-auto mb-8 max-w-3xl text-center">

          <span className="inline-flex items-center gap-2 rounded-full border border-[#C34F72]/20 bg-[#FAEEF2] px-4 py-2 text-[10px] font-bold uppercase tracking-[0.18em] text-[#A93E61] sm:text-xs">
            <Sparkles size={14} />

            Nos réalisations
          </span>

          <h2 className="mt-4 text-3xl font-black tracking-tight text-[#1D1B1C] sm:text-4xl lg:text-[42px]">
            Découvrez quelques
            <span className="text-[#EF5A4F]">
              {" "}événements réalisés
            </span>
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-[#716A6C] sm:text-base">
            Mariages, anniversaires et événements privés ou professionnels :
            découvrez quelques installations réalisées par Event&apos;S Location
            en Yonne, en Nièvre et dans les secteurs voisins.
          </p>

        </div>

        {/* =====================================================
            CARTES
        ===================================================== */}

        <div
          className={`grid gap-5 ${
            displayedRealisations.length === 1
              ? "mx-auto max-w-xl"
              : displayedRealisations.length === 2
                ? "mx-auto max-w-4xl md:grid-cols-2"
                : "md:grid-cols-2 lg:grid-cols-3"
          }`}
        >
          {displayedRealisations.map(
            (realisation) => (
              <RealisationCard
                key={realisation.id}
                realisation={realisation}
              />
            )
          )}
        </div>

        {/* =====================================================
            VOIR TOUTES LES RÉALISATIONS
        ===================================================== */}

        {realisations.length > 3 && (
          <div className="mt-7 flex justify-center">

            <Link
              href="/realisations"
              className="group inline-flex items-center gap-2 rounded-xl border border-[#E4DCD7] bg-white px-5 py-3 text-sm font-bold text-[#3F3A3C] shadow-[0_8px_24px_rgba(31,25,27,0.04)] transition-all duration-200 hover:-translate-y-0.5 hover:border-[#EF5A4F]/30 hover:bg-[#FFF0ED] hover:text-[#D94A41]"
            >
              Voir toutes nos réalisations

              <ArrowRight
                size={16}
                className="transition-transform duration-200 group-hover:translate-x-1"
              />
            </Link>

          </div>
        )}

      </div>
    </section>
  );
}