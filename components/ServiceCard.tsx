"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";

import type { Service } from "@/data/services";

interface Props {
  service: Service;
}

export default function ServiceCard({ service }: Props) {
  return (
    <article className="group overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl transition-all duration-500 hover:-translate-y-3 hover:border-green-500/40 hover:shadow-[0_25px_80px_rgba(34,197,94,0.18)]">

      {/* IMAGE */}

      <div className="relative h-72 overflow-hidden">

        <Image
          src={service.cardImage}
          alt={service.title}
          fill
          className="object-cover transition duration-700 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

        <div className="absolute right-5 top-5 rounded-full bg-green-500 px-4 py-2 text-xs font-bold uppercase tracking-widest text-white shadow-lg">
          À partir de {service.startingPrice} €
        </div>

        <div className="absolute bottom-6 left-6">

          <p className="text-sm uppercase tracking-[0.35em] text-green-400">
            {service.category}
          </p>

          <h2 className="mt-2 text-4xl font-black text-white">
            {service.title}
          </h2>

        </div>

      </div>

      {/* CONTENU */}

      <div className="space-y-7 p-8">

        <p className="leading-7 text-gray-300">
          {service.shortDescription}
        </p>

        <div className="space-y-3">

          {service.included.slice(0, 3).map((item) => (

            <div
              key={item}
              className="flex items-center gap-3"
            >

              <CheckCircle
                size={18}
                className="text-green-400"
              />

              <span className="text-gray-200">
                {item}
              </span>

            </div>

          ))}

        </div>

        <div className="border-t border-white/10 pt-6">

          <Link
            href={`/prestations/${service.id}`}
            className="flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-green-500 to-green-600 px-6 py-4 font-semibold text-white transition duration-300 hover:scale-[1.02] hover:from-green-600 hover:to-green-700"
          >
            Découvrir la prestation

            <ArrowRight size={18} />
          </Link>

        </div>

      </div>

    </article>
  );
}