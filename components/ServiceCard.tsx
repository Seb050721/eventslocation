"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";

import { services } from "@/data/services";

interface Props {
  service: Service;
}

export default function ServiceCard({ service }: Props) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.05] transition-all duration-300 hover:-translate-y-2 hover:border-green-500/30 hover:shadow-[0_25px_70px_rgba(34,197,94,0.12)] sm:rounded-[32px]">

      {/* IMAGE */}
      <Link
        href={`/prestations/${service.id}`}
        className="relative block h-[240px] overflow-hidden sm:h-[280px] lg:h-[300px]"
      >
        <Image
          src={service.cardImage}
          alt={service.title}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

        {/* PRIX */}
        <div className="absolute right-4 top-4 rounded-full border border-white/20 bg-black/50 px-4 py-2 text-sm font-bold text-white backdrop-blur-md">
          Dès {service.startingPrice} €
        </div>

        {/* TITRE SUR PHOTO */}
        <div className="absolute bottom-5 left-5 right-5 sm:bottom-6 sm:left-6">

          <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-green-400 sm:text-xs">
            {service.category}
          </p>

          <h3 className="mt-2 text-3xl font-black text-white sm:text-4xl">
            {service.title}
          </h3>

        </div>
      </Link>

      {/* CONTENU */}
      <div className="flex flex-1 flex-col p-6 sm:p-8">

        <p className="text-sm leading-7 text-gray-400 sm:text-base">
          {service.shortDescription}
        </p>

        {/* POINTS FORTS */}
        <div className="mt-6 space-y-3">

          {service.included.slice(0, 3).map((item) => (
            <div
              key={item}
              className="flex items-start gap-3"
            >
              <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-green-500/15">
                <Check
                  size={13}
                  strokeWidth={3}
                  className="text-green-400"
                />
              </div>

              <span className="text-sm leading-6 text-gray-300">
                {item}
              </span>
            </div>
          ))}

        </div>

        {/* BAS DE CARTE */}
        <div className="mt-auto pt-8">

          <div className="mb-6 h-px bg-white/10" />

          <div className="flex items-end justify-between gap-4">

            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-gray-500">
                À partir de
              </p>

              <p className="mt-1 text-3xl font-black text-green-400 sm:text-4xl">
                {service.startingPrice} €
              </p>
            </div>

            <Link
              href={`/prestations/${service.id}`}
              className="group/button flex h-12 items-center justify-center gap-2 rounded-full bg-green-600 px-5 text-sm font-bold text-white transition-all duration-200 hover:bg-green-700 sm:h-13 sm:px-6 sm:text-base"
            >
              En savoir plus

              <ArrowRight
                size={18}
                className="transition-transform duration-200 group-hover/button:translate-x-1"
              />
            </Link>

          </div>

        </div>

      </div>
    </article>
  );
}