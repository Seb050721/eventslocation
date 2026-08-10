"use client";

import { motion } from "framer-motion";
import { CalendarDays, MapPinned, Camera, Star } from "lucide-react";
import Container from "./ui/Container";

const stats = [
  {
    icon: CalendarDays,
    value: "2023",
    label: "Entreprise créée",
  },
  {
    icon: Star,
    value: "100+",
    label: "Événements réalisés",
  },
  {
    icon: Camera,
    value: "10+",
    label: "Matériels à louer",
  },
  {
    icon: MapPinned,
    value: "Nièvre, Yonne, Cher et +",
    label: "Zone d'intervention",
  },
];

export default function Stats() {
  return (
    <section className="-mt-24 relative z-20 pb-20">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid gap-6 rounded-3xl bg-white p-8 shadow-2xl md:grid-cols-2 xl:grid-cols-4"
        >
          {stats.map((stat) => {
            const Icon = stat.icon;

            return (
              <div
                key={stat.label}
                className="flex items-center gap-5"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-green-100">
                  <Icon className="h-8 w-8 text-green-600" />
                </div>

                <div>
                  <h3 className="text-3xl font-extrabold text-gray-900">
                    {stat.value}
                  </h3>

                  <p className="mt-1 text-gray-500">
                    {stat.label}
                  </p>
                </div>
              </div>
            );
          })}
        </motion.div>
      </Container>
    </section>
  );
}