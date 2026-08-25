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
      className="group block overflow-hidden rounded-[24px] border border-white/10 bg-white/[0.04] transition duration-300 hover:-translate-y-1 hover:border-green-500/30 hover:bg-white/[0.06]"
    >
      {/* IMAGE */}

      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={realisation.coverImage}
          alt={`${realisation.title} - Event'S Location`}
          fill
          className="object-cover transition duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 50vw"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

        {/* LOCALISATION */}

        <div className="absolute bottom-4 left-4">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-black/60 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur-md">
            <MapPin
              size={13}
              className="text-green-400"
            />

            {realisation.location},{" "}
            {realisation.department}
          </span>
        </div>
      </div>

      {/* CONTENU */}

      <div className="p-5 sm:p-6">
        <div className="flex items-center gap-2 text-xs font-medium text-gray-400">
          <CalendarDays
            size={14}
            className="text-green-400"
          />

          {realisation.date}
        </div>

        <h3 className="mt-3 text-xl font-black leading-tight text-white transition group-hover:text-green-400 sm:text-2xl">
          {realisation.title}
        </h3>

        <p className="mt-3 text-sm leading-6 text-gray-400">
          {realisation.shortDescription}
        </p>

        {/* PRESTATIONS */}

        <div className="mt-4 flex flex-wrap gap-2">
          {realisation.services.map(
            (service, index) => (
              <span
                key={`${service.id}-${index}`}
                className="rounded-full border border-green-500/20 bg-green-500/[0.08] px-3 py-1 text-xs font-semibold text-green-400"
              >
                {service.label}
              </span>
            )
          )}
        </div>

        {/* LIEN */}

        <div className="mt-5 flex items-center gap-2 text-sm font-bold text-white transition group-hover:text-green-400">
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