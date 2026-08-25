import { Sparkles } from "lucide-react";

import { realisations } from "@/data/realisations";
import { RealisationCard } from "./RealisationCard";

export function Realisations() {
  if (!realisations || realisations.length === 0) {
    return null;
  }

  return (
    <section
      id="realisations"
      className="relative overflow-hidden bg-[#050505] py-16 sm:py-20 lg:py-24"
    >
      {/* HALO */}

      <div className="pointer-events-none absolute -right-40 top-20 h-[400px] w-[400px] rounded-full bg-green-500/10 blur-[160px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* TITRE */}

        <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-12">
          <span className="inline-flex items-center gap-2 rounded-full border border-green-500/30 bg-green-500/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.25em] text-green-400">
            <Sparkles size={14} />
            Nos réalisations
          </span>

          <h2 className="mt-5 text-3xl font-black tracking-tight text-white sm:text-4xl lg:text-5xl">
            Découvrez nos événements
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-gray-400 sm:text-base">
            Mariages, anniversaires et événements :
            découvrez quelques installations réalisées
            par Event&apos;S Location en Yonne, Nièvre
            et dans les environs.
          </p>
        </div>

        {/* CARTES */}

        <div
          className={`grid gap-6 ${
            realisations.length === 1
              ? "mx-auto max-w-2xl"
              : "md:grid-cols-2 lg:grid-cols-3"
          }`}
        >
          {realisations.map((realisation) => (
            <RealisationCard
              key={realisation.id}
              realisation={realisation}
            />
          ))}
        </div>

      </div>
    </section>
  );
}