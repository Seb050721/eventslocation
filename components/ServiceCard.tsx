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

export default function ServiceCard({
  service,
}: Props) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-[22px] border border-white/10 bg-white/[0.04] transition-all duration-300 hover:-translate-y-1 hover:border-green-500/30 hover:bg-white/[0.06]">

      {/* =====================================================
          IMAGE
      ===================================================== */}

      <Link
        href={`/prestations/${service.id}`}
        className="relative block h-[190px] overflow-hidden sm:h-[210px] lg:h-[220px]"
      >
        <Image
          src={service.cardImage}
          alt={service.title}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/15 to-transparent" />

        {/* PRIX */}

        <div className="absolute right-3 top-3 rounded-full border border-white/20 bg-black/60 px-3 py-1.5 text-xs font-bold text-white backdrop-blur-md sm:text-sm">
          Dès {service.startingPrice} €
        </div>

        {/* TITRE */}

        <div className="absolute bottom-4 left-4 right-4 sm:bottom-5 sm:left-5">

          <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-green-400 sm:text-[10px]">
            {service.category}
          </p>

          <h3 className="mt-1 text-2xl font-black leading-tight text-white sm:text-3xl">
            {service.title}
          </h3>

        </div>
      </Link>

      {/* =====================================================
          CONTENU
      ===================================================== */}

      <div className="flex flex-1 flex-col p-4 sm:p-5">

        {/* DESCRIPTION */}

        <p className="text-sm leading-6 text-gray-400">
          {service.shortDescription}
        </p>

        {/* POINTS FORTS */}

        {service.included.length > 0 && (
          <div className="mt-4 grid gap-2 sm:grid-cols-2">

            {service.included
              .slice(0, 2)
              .map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-2"
                >
                  <div className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-green-500/15">
                    <Check
                      size={10}
                      strokeWidth={3}
                      className="text-green-400"
                    />
                  </div>

                  <span className="text-xs leading-5 text-gray-300 sm:text-sm">
                    {item}
                  </span>
                </div>
              ))}

          </div>
        )}

        {/* =====================================================
            LIEN
        ===================================================== */}

        <div className="mt-auto pt-4">

          <div className="mb-3 h-px bg-white/10" />

          <Link
            href={`/prestations/${service.id}`}
            className="group/button inline-flex items-center gap-2 text-sm font-bold text-white transition hover:text-green-400"
          >
            Découvrir la prestation

            <ArrowRight
              size={15}
              className="transition-transform duration-200 group-hover/button:translate-x-1"
            />
          </Link>

        </div>

      </div>

    </article>
  );
}