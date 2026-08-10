"use client";

import {
  Truck,
  Wrench,
  Star,
  Clock3,
  Camera,
} from "lucide-react";

const items = [
  {
    icon: Star,
    title: "100+ événements réalisés",
  },
  {
    icon: Truck,
    title: "Livraison offerte jusqu'à 20 km",
  },
  {
    icon: Wrench,
    title: "Installation comprise",
  },
  {
    icon: Camera,
    title: "Matériel professionnel",
  },
  {
    icon: Clock3,
    title: "Réponse sous 24 h",
  },
];

export default function TrustBar() {
  return (
    <section className="border-y border-white/10 bg-[#0a0a0a]">

      <div className="mx-auto flex max-w-7xl flex-wrap justify-center gap-10 px-6 py-6">

        {items.map((item) => {

          const Icon = item.icon;

          return (

            <div
              key={item.title}
              className="flex items-center gap-3"
            >

              <Icon
                className="text-green-400"
                size={22}
              />

              <span className="font-medium text-gray-300">
                {item.title}
              </span>

            </div>

          );

        })}

      </div>

    </section>
  );
}