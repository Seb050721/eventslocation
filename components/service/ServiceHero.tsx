import Image from "next/image";
import Link from "next/link";

import {
  ArrowLeft,
  CalendarDays,
  Phone,
} from "lucide-react";

import { Service } from "@/data/services";

interface Props {
  service: Service;
}

export default function ServiceHero({
  service,
}: Props) {
  return (
    <section className="relative overflow-hidden rounded-[24px] border border-[#E9E2DD] bg-[#FBFAF8] shadow-[0_18px_55px_rgba(31,25,27,0.08)] sm:rounded-[28px] lg:rounded-[32px]">

      <div className="grid lg:min-h-[560px] lg:grid-cols-[1.05fr_0.95fr]">

        {/* =====================================================
            IMAGE
        ===================================================== */}

        <div className="relative min-h-[330px] overflow-hidden sm:min-h-[420px] lg:min-h-full">

          <Image
            src={service.heroImage}
            alt={service.title}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 55vw"
            className="object-cover"
          />

          {/* léger dégradé pour garder l'image lisible */}

          <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />

          {/* RETOUR */}

          <div className="absolute left-4 top-4 z-10 sm:left-6 sm:top-6">

            <Link
              href="/#services"
              className="inline-flex items-center gap-2 rounded-full border border-white/70 bg-white/90 px-4 py-2.5 text-sm font-semibold text-[#3F3A3C] shadow-[0_8px_24px_rgba(31,25,27,0.10)] backdrop-blur-md transition-all duration-200 hover:-translate-y-0.5 hover:bg-white hover:text-[#EF5A4F]"
            >
              <ArrowLeft size={17} />

              Retour
            </Link>

          </div>

          {/* PETIT BADGE IMAGE */}

          <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6">

            <span className="inline-flex rounded-full border border-white/70 bg-white/90 px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-[0.18em] text-[#347A77] shadow-md backdrop-blur-md sm:text-xs">
              {service.category}
            </span>

          </div>

        </div>

        {/* =====================================================
            CONTENU
        ===================================================== */}

        <div className="relative flex items-center bg-[#FBFAF8] px-5 py-8 sm:px-8 sm:py-10 lg:px-10 lg:py-12 xl:px-12">

          {/* halos */}

          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-20 top-10 h-[180px] w-[180px] rounded-full bg-[#EF5A4F]/8 blur-[90px]"
          />

          <div
            aria-hidden="true"
            className="pointer-events-none absolute -left-12 bottom-10 h-[160px] w-[160px] rounded-full bg-[#4A9692]/8 blur-[90px]"
          />

          <div className="relative w-full">

            {/* BADGE */}

            <span className="inline-flex items-center rounded-full border border-[#EF5A4F]/20 bg-[#FFF0ED] px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-[0.18em] text-[#D94A41] sm:px-4 sm:py-2 sm:text-xs">
              {service.category}
            </span>

            {/* TITRE */}

            <h1 className="mt-4 text-4xl font-black leading-[1.02] tracking-tight text-[#1D1B1C] sm:text-5xl lg:text-6xl">
              {service.title}
            </h1>

            {/* DESCRIPTION */}

            <p className="mt-5 max-w-xl text-sm leading-7 text-[#716A6C] sm:text-base sm:leading-8 lg:text-lg">
              {service.description}
            </p>

            {/* =================================================
                PRIX
            ================================================= */}

            <div className="mt-7 rounded-2xl border border-[#E9E2DD] bg-white p-5 shadow-[0_8px_25px_rgba(31,25,27,0.04)] sm:p-6">

              <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#9A9395] sm:text-xs">
                À partir de
              </p>

              <div className="mt-1 flex flex-wrap items-end gap-x-3 gap-y-1">

                <p className="text-4xl font-black leading-none text-[#EF5A4F] sm:text-5xl">
                  {service.startingPrice} €
                </p>

                <p className="pb-1 text-sm font-medium text-[#716A6C]">
                  selon la formule choisie
                </p>

              </div>

            </div>

            {/* =================================================
                ACTIONS
            ================================================= */}

            <div className="mt-6 grid gap-3 sm:grid-cols-2">

              <Link
                href="/#contact"
                className="group inline-flex min-h-[52px] items-center justify-center gap-2 rounded-xl bg-[#EF5A4F] px-5 py-3.5 text-sm font-bold text-white shadow-[0_10px_25px_rgba(239,90,79,0.22)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#D94A41] sm:text-base"
              >
                <CalendarDays size={18} />

                Demander un devis
              </Link>

              <a
                href="tel:+33643894570"
                className="group inline-flex min-h-[52px] items-center justify-center gap-2 rounded-xl border border-[#DCD4CF] bg-white px-5 py-3.5 text-sm font-semibold text-[#3F3A3C] shadow-[0_8px_22px_rgba(31,25,27,0.04)] transition-all duration-200 hover:-translate-y-0.5 hover:border-[#4A9692]/40 hover:bg-[#EDF7F6] hover:text-[#347A77] sm:text-base"
              >
                <Phone
                  size={18}
                  className="text-[#4A9692]"
                />

                06 43 89 45 70
              </a>

            </div>

            {/* =================================================
                ACCENTS COULEURS LOGO
            ================================================= */}

            <div
              aria-hidden="true"
              className="mt-7 flex items-center gap-2"
            >
              <span className="h-2 w-2 rounded-full bg-[#4A9692]" />
              <span className="h-2 w-2 rounded-full bg-[#87954E]" />
              <span className="h-2 w-2 rounded-full bg-[#EF5A4F]" />
              <span className="h-2 w-2 rounded-full bg-[#C34F72]" />
              <span className="h-2 w-2 rounded-full bg-[#F3A044]" />
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}