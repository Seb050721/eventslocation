"use client";

import {
  Truck,
  Wrench,
  Star,
  ShieldCheck,
  Sparkles,
  Clock3,
} from "lucide-react";

const items = [
  {
    icon: Truck,
    title: "Livraison offerte",
    description: "Dans un rayon de 20 km autour de notre dépôt.",
  },
  {
    icon: Wrench,
    title: "Installation comprise",
    description: "Nous installons votre matériel si nécessaire.",
  },
  {
    icon: Star,
    title: "100+ événements",
    description: "Mariages, anniversaires, entreprises et associations.",
  },
  {
    icon: ShieldCheck,
    title: "Matériel professionnel",
    description: "Du matériel entretenu et contrôlé avant chaque location.",
  },
  {
    icon: Sparkles,
    title: "Personnalisation",
    description:
      "Cadres Photo Booth et prestations adaptées à votre événement.",
  },
  {
    icon: Clock3,
    title: "Disponible 7j/7",
    description:
      "Nous restons disponibles avant, pendant et après votre événement.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden bg-[#050505] py-20 sm:py-24 lg:py-28">
      <div className="pointer-events-none absolute -left-52 top-10 h-[450px] w-[450px] rounded-full bg-green-500/10 blur-[160px]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

        <div className="mx-auto mb-12 max-w-3xl text-center sm:mb-16 lg:mb-20">

          <span className="inline-flex rounded-full border border-green-500/30 bg-green-500/10 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.25em] text-green-400 sm:px-5 sm:text-xs sm:tracking-[0.35em]">
            Pourquoi nous choisir ?
          </span>

          <h2 className="mt-6 text-4xl font-black leading-tight tracking-tight text-white sm:text-5xl lg:mt-8 lg:text-6xl">
            Bien plus qu&apos;une
            <span className="block text-green-400">
              location de matériel
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-gray-400 sm:text-lg sm:leading-8">
            Nous vous accompagnons de la réservation jusqu&apos;à
            l&apos;installation pour que votre événement se déroule dans les
            meilleures conditions.
          </p>

        </div>

        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6 xl:grid-cols-3">

          {items.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.title}
                className="group rounded-[24px] border border-white/10 bg-white/[0.05] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-green-500/30 hover:bg-white/[0.07] hover:shadow-[0_20px_60px_rgba(34,197,94,0.10)] sm:rounded-[28px] sm:p-7 lg:p-8"
              >
                <div className="flex items-start gap-4 sm:block">

                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-green-500/10 transition-all duration-300 group-hover:bg-green-500 sm:mb-6 sm:h-16 sm:w-16">
                    <Icon
                      size={26}
                      className="text-green-400 transition-colors group-hover:text-white sm:h-[30px] sm:w-[30px]"
                    />
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-white sm:text-2xl">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-gray-400 sm:mt-4 sm:text-base sm:leading-7">
                      {item.description}
                    </p>
                  </div>

                </div>
              </article>
            );
          })}

        </div>

      </div>
    </section>
  );
}