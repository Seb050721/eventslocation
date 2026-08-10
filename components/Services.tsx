"use client";

import { motion } from "framer-motion";
import { services } from "@/data/services";
import ServiceCard from "./ServiceCard";

export default function Services() {
  return (
    <section
      id="prestations"
      className="relative overflow-hidden bg-[#050505] py-24"
    >
      {/* Halo gauche */}
      <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-green-500/10 blur-[150px]" />

      {/* Halo droit */}
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-green-500/10 blur-[170px]" />

      <div className="relative mx-auto max-w-7xl px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto mb-20 max-w-3xl text-center"
        >

          <span className="rounded-full border border-green-500/30 bg-green-500/10 px-5 py-2 text-sm font-semibold uppercase tracking-[0.35em] text-green-400">
            Nos locations
          </span>

          <h2 className="mt-8 text-5xl font-bold text-white md:text-6xl">
            Tout le matériel
            <br />
            pour réussir votre événement
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-gray-400">
            Que vous organisiez un mariage, un anniversaire, une soirée privée,
            une réception ou un événement professionnel, Event'S Location met
            à votre disposition du matériel de qualité, prêt à l'emploi et
            disponible à la location.
          </p>

        </motion.div>

        <div className="grid gap-10 lg:grid-cols-2">

          {services.map((service, index) => (

            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.08,
              }}
            >
              <ServiceCard service={service} />
            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}