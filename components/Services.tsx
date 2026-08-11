"use client";

import { motion } from "framer-motion";

import { services } from "@/data/services";
import ServiceCard from "./ServiceCard";

export default function Services() {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-[#050505] py-20 sm:py-24 lg:py-28"
    >
      {/* HALOS */}
      <div className="pointer-events-none absolute -left-52 top-10 h-[500px] w-[500px] rounded-full bg-green-500/10 blur-[160px]" />

      <div className="pointer-events-none absolute -right-52 bottom-0 h-[500px] w-[500px] rounded-full bg-emerald-500/10 blur-[170px]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

        {/* TITRE */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-12 max-w-3xl text-center sm:mb-16 lg:mb-20"
        >
          <span className="inline-flex rounded-full border border-green-500/30 bg-green-500/10 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.25em] text-green-400 sm:px-5 sm:text-xs sm:tracking-[0.35em]">
            Nos prestations
          </span>

          <h2 className="mt-6 text-4xl font-black leading-tight tracking-tight text-white sm:text-5xl lg:mt-8 lg:text-6xl">
            Tout pour rendre votre
            <span className="block text-green-400">
              événement inoubliable
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-gray-400 sm:text-lg sm:leading-8">
            Découvrez nos solutions de location pour vos mariages,
            anniversaires, événements privés, professionnels ou associatifs.
          </p>
        </motion.div>

        {/* CARTES */}
        <div className="grid gap-6 md:grid-cols-2 lg:gap-8">

          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{
                duration: 0.5,
                delay: Math.min(index * 0.08, 0.3),
              }}
              className="h-full"
            >
              <ServiceCard service={service} />
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}