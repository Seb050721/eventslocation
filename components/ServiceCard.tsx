"use client";

import Image from "next/image";
import Link from "next/link";

import {
  ArrowRight,
  Check,
} from "lucide-react";

import type { Service } from "@/data/services";

interface Props {
  service: Service;
}

const accents = [
  {
    text: "text-[#C34F72]",
    soft: "bg-[#FAEEF2]",
    border: "group-hover:border-[#C34F72]/30",
  },
  {
    text: "text-[#4A9692]",
    soft: "bg-[#EDF7F6]",
    border: "group-hover:border-[#4A9692]/30",
  },
  {
    text: "text-[#F3A044]",
    soft: "bg-[#FFF5E9]",
    border: "group-hover:border-[#F3A044]/30",
  },
  {
    text: "text-[#87954E]",
    soft: "bg-[#F3F5E9]",
    border: "group-hover:border-[#87954E]/30",
  },
  {
    text: "text-[#EF5A4F]",
    soft: "bg-[#FFF0ED]",
    border: "group-hover:border-[#EF5A4F]/30",
  },
];

export default function ServiceCard({
  service,
}: Props) {
  const accentIndex =
    service.id
      .split("")
      .reduce(
        (total, character) =>
          total + character.charCodeAt(0),
        0
      ) % accents.length;

  const accent = accents[accentIndex];

  return (
    <article
      className={`group flex h-full flex-col overflow-hidden rounded-[22px] border border-[#E9E2DD] bg-white shadow-[0_8px_26px_rgba(31,25,27,0.05)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_38px_rgba(31,25,27,0.09)] ${accent.border}`}
    >
      {/* =====================================================
          IMAGE
      ===================================================== */}

      <Link
        href={`/prestations/${service.id}`}
        className="relative block aspect-[16/9] w-full overflow-hidden bg-[#F7F3EF]"
      >
        <Image
          src={service.cardImage}
          alt={`${service.title} - Event'S Location`}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 group-hover:scale-[1.035]"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />

        {/* PRIX */}

        <div className="absolute right-3 top-3 rounded-full border border-white/60 bg-white/92 px-3 py-1.5 text-[11px] font-black text-[#1D1B1C] shadow-sm backdrop-blur-md sm:text-xs">
          Dès {service.startingPrice} €
        </div>

        {/* CATÉGORIE + TITRE */}

        <div className="absolute bottom-3 left-4 right-4 sm:bottom-4">

          <p className="text-[9px] font-bold uppercase tracking-[0.17em] text-white/80 sm:text-[10px]">
            {service.category}
          </p>

          <h3 className="mt-0.5 text-xl font-black tracking-tight text-white sm:text-2xl">
            {service.title}
          </h3>

        </div>

      </Link>

      {/* =====================================================
          CONTENU
      ===================================================== */}

      <div className="flex flex-1 flex-col p-4 sm:p-5">

        <p className="line-clamp-2 text-sm leading-6 text-[#716A6C]">
          {service.shortDescription}
        </p>

        {/* =================================================
            INCLUS
        ================================================= */}

        <div className="mt-3 space-y-2">

          {service.included
            .slice(0, 2)
            .map((item) => (
              <div
                key={item}
                className="flex items-start gap-2.5"
              >
                <div
                  className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${accent.soft}`}
                >
                  <Check
                    size={12}
                    strokeWidth={3}
                    className={accent.text}
                  />
                </div>

                <span className="text-xs leading-5 text-[#514B4D] sm:text-[13px]">
                  {item}
                </span>
              </div>
            ))}

        </div>

        {/* =================================================
            BAS CARTE
        ================================================= */}

        <div className="mt-auto pt-4">

          <div className="mb-4 h-px bg-[#EEE8E3]" />

          <div className="flex items-end justify-between gap-3">

            <div>
              <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-[#9A9395]">
                À partir de
              </p>

              <p className={`mt-0.5 text-[22px] font-black leading-none ${accent.text}`}>
                {service.startingPrice} €
              </p>
            </div>

            <Link
              href={`/prestations/${service.id}`}
              aria-label={`Découvrir la prestation ${service.title}`}
              className="group/button flex h-10 items-center justify-center gap-1.5 rounded-full bg-[#1D1B1C] px-4 text-xs font-bold text-white transition-all duration-200 hover:bg-[#EF5A4F]"
            >
              Découvrir

              <ArrowRight
                size={15}
                className="transition-transform duration-200 group-hover/button:translate-x-1"
              />
            </Link>

          </div>

        </div>

      </div>

    </article>
  );
}