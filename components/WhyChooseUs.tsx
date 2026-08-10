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
    description: "Cadres Photo Booth et prestations adaptées à votre événement.",
  },
  {
    icon: Clock3,
    title: "Disponible 7j/7",
    description: "Nous restons disponibles avant, pendant et après votre événement.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-[#050505] py-28">
      <div className="mx-auto max-w-7xl px-6">

        <div className="mx-auto mb-20 max-w-3xl text-center">

          <span className="rounded-full border border-green-500/30 bg-green-500/10 px-5 py-2 text-sm font-semibold uppercase tracking-[0.35em] text-green-400">
            Pourquoi nous choisir ?
          </span>

          <h2 className="mt-8 text-5xl font-black text-white">
            Bien plus qu'une location de matériel
          </h2>

          <p className="mt-8 text-lg leading-8 text-gray-400">
            Nous vous accompagnons pour que votre événement soit une réussite,
            de la réservation jusqu'à l'installation.
          </p>

        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {items.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="group rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition duration-500 hover:-translate-y-2 hover:border-green-500/40 hover:shadow-[0_25px_70px_rgba(34,197,94,0.15)]"
              >
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-green-500/10 transition group-hover:bg-green-500">
                  <Icon
                    size={30}
                    className="text-green-400 group-hover:text-white"
                  />
                </div>

                <h3 className="text-2xl font-bold text-white">
                  {item.title}
                </h3>

                <p className="mt-4 leading-7 text-gray-400">
                  {item.description}
                </p>
              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}