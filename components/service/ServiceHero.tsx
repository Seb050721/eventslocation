import Image from "next/image";
import Link from "next/link";

import {
  ArrowLeft,
  CalendarDays,
  Phone,
} from "lucide-react";

import type { Service } from "@/data/services";

interface Props {
  service: Service;
}

export default function ServiceHero({
  service,
}: Props) {
  return (
    <section className="relative overflow-hidden rounded-[24px] sm:rounded-[28px] lg:rounded-[32px]">

      <div className="relative min-h-[680px] sm:min-h-[620px] lg:h-[620px]">

        {/* =====================================================
            IMAGE
        ===================================================== */}

        <Image
          src={service.heroImage}
          alt={service.title}
          fill
          priority
          sizes="(max-width: 768px) 100vw, 1200px"
          className="object-cover"
        />

        {/* =====================================================
            OVERLAYS

            Plus clair pour mieux voir la photo,
            tout en gardant le texte lisible.
        ===================================================== */}

        {/* Assombrissement général léger */}
        <div className="absolute inset-0 bg-black/20 sm:bg-black/15" />

        {/* Assombrissement principalement derrière le texte */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/40 to-black/5" />

        {/* Dégradé bas pour conserver la lisibilité */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/15 to-transparent" />

        {/* =====================================================
            RETOUR
        ===================================================== */}

        <div className="absolute left-4 top-4 z-20 sm:left-6 sm:top-6 lg:left-8 lg:top-8">

          <Link
            href="/#services"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/50 px-4 py-2.5 text-sm font-semibold text-white backdrop-blur-md transition hover:bg-black/70 sm:px-5 sm:py-3 sm:text-base"
          >
            <ArrowLeft size={17} />

            Retour
          </Link>

        </div>

        {/* =====================================================
            CONTENU
        ===================================================== */}

        <div className="absolute inset-x-0 bottom-0 z-10 px-5 pb-6 pt-28 sm:px-7 sm:pb-8 lg:left-10 lg:right-10 lg:bottom-12 lg:px-0 lg:pb-0 lg:pt-0">

          <div className="max-w-3xl">

            {/* CATÉGORIE */}

            <span className="inline-flex rounded-full border border-green-400/30 bg-green-500/15 px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-[0.18em] text-green-400 backdrop-blur-sm sm:px-4 sm:py-2 sm:text-xs sm:tracking-[0.25em]">
              {service.category}
            </span>

            {/* TITRE */}

            <h1 className="mt-4 text-4xl font-black leading-[1.02] tracking-tight text-white drop-shadow-[0_3px_10px_rgba(0,0,0,0.8)] sm:mt-5 sm:text-5xl lg:mt-6 lg:text-7xl">
              {service.title}
            </h1>

            {/* DESCRIPTION */}

            <p className="mt-5 max-w-2xl text-base leading-7 text-gray-100 drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)] sm:text-lg sm:leading-8 lg:mt-7 lg:text-xl lg:leading-9">
              {service.description}
            </p>

            {/* =================================================
                ACTIONS
            ================================================= */}

            <div className="mt-7 flex flex-col gap-4 sm:mt-8 sm:flex-row sm:flex-wrap sm:items-end lg:mt-10 lg:gap-5">

              {/* PRIX */}

              <div className="min-w-0">

                <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-gray-200 drop-shadow-md sm:text-xs lg:text-sm">
                  À partir de
                </p>

                <p className="mt-1 text-4xl font-black leading-none text-green-400 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] sm:text-5xl lg:text-6xl">
                  {service.startingPrice} €
                </p>

              </div>

              {/* BOUTONS */}

              <div className="grid w-full gap-3 sm:w-auto sm:grid-cols-2 lg:flex lg:flex-wrap">

                <Link
                  href="/#contact"
                  className="inline-flex min-h-[52px] items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-green-500 to-green-600 px-5 py-3.5 text-sm font-bold text-white shadow-lg transition duration-300 hover:from-green-600 hover:to-green-700 sm:px-6 sm:text-base lg:rounded-full lg:px-8 lg:py-5"
                >
                  <CalendarDays size={19} />

                  Demander un devis
                </Link>

                <a
                  href="tel:+33643894570"
                  className="inline-flex min-h-[52px] items-center justify-center gap-2 rounded-2xl border border-white/30 bg-black/40 px-5 py-3.5 text-sm font-semibold text-white backdrop-blur-md transition duration-300 hover:bg-black/55 sm:px-6 sm:text-base lg:rounded-full lg:px-8 lg:py-5"
                >
                  <Phone size={19} />

                  06 43 89 45 70
                </a>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}