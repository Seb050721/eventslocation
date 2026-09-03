import Image from "next/image";
import Link from "next/link";

import {
  ArrowRight,
  CalendarDays,
  MapPin,
} from "lucide-react";

import type { Realisation } from "@/data/realisations";

interface Props {
  realisation: Realisation;
}

export function RealisationCard({
  realisation,
}: Props) {
  return (
    <Link
      href={`/realisations/${realisation.id}`}
      className="group block h-full overflow-hidden rounded-[22px] border border-[#E9E2DD] bg-white shadow-[0_8px_26px_rgba(31,25,27,0.05)] transition-all duration-300 hover:-translate-y-1 hover:border-[#EF5A4F]/25 hover:shadow-[0_16px_38px_rgba(31,25,27,0.09)]"
    >
      {/* =====================================================
          IMAGE
      ===================================================== */}

      <div className="relative aspect-[16/10] overflow-hidden bg-[#F7F3EF]">
        <Image
          src={realisation.coverImage}
          alt={`${realisation.title} - Event'S Location`}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/5 to-transparent" />

        {/* LOCALISATION */}

        <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-white/40 bg-white/90 px-3 py-1.5 text-[11px] font-semibold text-[#3F3A3C] shadow-sm backdrop-blur-md sm:text-xs">
            <MapPin
              size={13}
              className="text-[#4A9692]"
            />

            {realisation.location},{" "}
            {realisation.department}
          </span>
        </div>
      </div>

      {/* =====================================================
          CONTENU
      ===================================================== */}

      <div className="p-4 sm:p-5">

        {/* DATE */}

        <div className="flex items-center gap-2 text-[11px] font-medium text-[#8B8486] sm:text-xs">
          <CalendarDays
            size={14}
            className="text-[#EF5A4F]"
          />

          {realisation.date}
        </div>

        {/* TITRE */}

        <h3 className="mt-2.5 text-xl font-black leading-tight tracking-tight text-[#1D1B1C] transition-colors duration-200 group-hover:text-[#EF5A4F] sm:text-2xl">
          {realisation.title}
        </h3>

        {/* DESCRIPTION */}

        <p className="mt-2.5 line-clamp-3 text-sm leading-6 text-[#716A6C]">
          {realisation.shortDescription}
        </p>

        {/* =================================================
            PRESTATIONS
        ================================================= */}

        <div className="mt-3.5 flex flex-wrap gap-2">

          {realisation.services
            .slice(0, 3)
            .map((service, index) => (
              <span
                key={`${service.id}-${index}`}
                className="rounded-full border border-[#4A9692]/15 bg-[#EDF7F6] px-2.5 py-1 text-[11px] font-semibold text-[#347A77]"
              >
                {service.label}
              </span>
            ))}

        </div>

        {/* =================================================
            LIEN
        ================================================= */}

        <div className="mt-4 flex items-center gap-2 text-sm font-bold text-[#1D1B1C] transition-colors duration-200 group-hover:text-[#EF5A4F]">
          Voir cette réalisation

          <ArrowRight
            size={16}
            className="transition-transform duration-300 group-hover:translate-x-1"
          />
        </div>

      </div>
    </Link>
  );
}