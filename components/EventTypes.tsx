"use client";

import Link from "next/link";
import {
  Heart,
  Cake,
  Baby,
  Building2,
  PartyPopper,
} from "lucide-react";

const events = [
  {
    icon: Heart,
    title: "Mariage",
    description:
      "Photobooth, Smoke Puff, mobilier et décoration.",
  },
  {
    icon: Cake,
    title: "Anniversaire",
    description:
      "Animations et matériel pour tous les âges.",
  },
  {
    icon: Baby,
    title: "Gender Reveal",
    description:
      "Smoke Puff, machine à bulles et Photo Booth.",
  },
  {
    icon: Building2,
    title: "Entreprise",
    description:
      "Événements professionnels et inaugurations.",
  },
  {
    icon: PartyPopper,
    title: "Associations",
    description:
      "Comités des fêtes, collectivités et événements publics.",
  },
];

export default function EventTypes() {
  return (
    <section className="bg-[#080808] py-28">

      <div className="mx-auto max-w-7xl px-6">

        <div className="mx-auto mb-16 max-w-3xl text-center">

          <span className="rounded-full border border-green-500/30 bg-green-500/10 px-5 py-2 text-sm uppercase tracking-[0.35em] text-green-400">
            Nos univers
          </span>

          <h2 className="mt-8 text-5xl font-black text-white">
            Chaque événement mérite une ambiance unique
          </h2>

          <p className="mt-8 text-lg text-gray-400">
            Découvrez nos solutions adaptées à votre événement.
          </p>

        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-5">

          {events.map((event) => {

            const Icon = event.icon;

            return (

              <Link
                href="#services"
                key={event.title}
                className="group rounded-3xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur-xl transition duration-500 hover:-translate-y-3 hover:border-green-500/40 hover:shadow-[0_20px_60px_rgba(34,197,94,0.15)]"
              >

                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-green-500/10 transition group-hover:bg-green-500">

                  <Icon
                    size={38}
                    className="text-green-400 group-hover:text-white"
                  />

                </div>

                <h3 className="mt-6 text-2xl font-bold text-white">
                  {event.title}
                </h3>

                <p className="mt-4 text-gray-400">
                  {event.description}
                </p>

              </Link>

            );

          })}

        </div>

      </div>

    </section>
  );
}