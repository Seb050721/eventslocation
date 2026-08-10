import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, CalendarDays, Phone } from "lucide-react";
import type { Service } from "@/data/services";

interface Props {
  service: Service;
}

export default function ServiceHero({ service }: Props) {
  return (
    <section className="relative overflow-hidden rounded-[32px]">

      {/* Image */}

      <div className="relative h-[620px]">

        <Image
          src={service.heroImage}
          alt={service.title}
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-black/20" />

        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />

        {/* Retour */}

        <div className="absolute left-8 top-8">

          <Link
            href="/#services"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/40 px-5 py-3 text-white backdrop-blur-md transition hover:bg-black/60"
          >
            <ArrowLeft size={18} />

            Retour
          </Link>

        </div>

        {/* Contenu */}

        <div className="absolute bottom-14 left-10 right-10">

          <span className="rounded-full border border-green-400/30 bg-green-500/20 px-5 py-2 text-sm font-semibold uppercase tracking-[0.35em] text-green-400">
            {service.category}
          </span>

          <h1 className="mt-6 max-w-3xl text-6xl font-black leading-tight text-white md:text-7xl">
            {service.title}
          </h1>

          <p className="mt-8 max-w-3xl text-xl leading-9 text-gray-200">
            {service.description}
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-5">

            <div>

              <p className="text-sm uppercase tracking-[0.35em] text-gray-400">
                À partir de
              </p>

              <p className="text-6xl font-black text-green-400">
                {service.startingPrice} €
              </p>

            </div>

            <Link
              href="/#contact"
              className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-green-500 to-green-600 px-8 py-5 font-bold text-white transition duration-300 hover:scale-105"
            >
              <CalendarDays size={20} />

              Demander un devis
            </Link>

            <a
              href="tel:0643894570"
              className="inline-flex items-center gap-3 rounded-full border border-white/30 bg-black/30 px-8 py-5 font-semibold text-white backdrop-blur-md transition duration-300 hover:bg-white/10"
            >
              <Phone size={20} />

              06 43 89 45 70
            </a>

          </div>

        </div>

      </div>

    </section>
  );
}