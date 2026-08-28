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
      className="relative overflow-hidden bg-[#050505] py-10 sm:py-12 lg:py-16"
    >
      {/* HALO */}

      <div className="pointer-events-none absolute -right-32 top-10 h-[280px] w-[280px] rounded-full bg-green-500/10 blur-[130px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* TITRE */}

        <div className="mx-auto mb-7 max-w-3xl text-center sm:mb-9">

          <span className="inline-flex items-center gap-2 rounded-full border border-green-500/30 bg-green-500/10 px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-[0.22em] text-green-400 sm:px-4 sm:py-2 sm:text-xs">
            <Sparkles size={14} />
            Nos réalisations
          </span>

          <h2 className="mt-4 text-2xl font-black tracking-tight text-white sm:text-3xl lg:text-4xl">
            Découvrez quelques événements
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-gray-400 sm:text-base">
            Quelques installations réalisées par
            Event&apos;S Location pour des anniversaires,
            mariages et événements en Yonne, Nièvre
            et dans les environs.
          </p>

        </div>

        {/* CARTES */}

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

        {/* VOIR TOUTES LES RÉALISATIONS */}

        {realisations.length > 3 && (
          <div className="mt-7 flex justify-center">

            <Link
              href="/realisations"
              className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.05] px-5 py-3 text-sm font-bold text-white transition hover:border-green-500/30 hover:bg-green-500/10 hover:text-green-400"
            >
              Voir toutes nos réalisations

              <ArrowRight size={16} />
            </Link>

          </div>
        )}

      </div>
    </section>
  );
}