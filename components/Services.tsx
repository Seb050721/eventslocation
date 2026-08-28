"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

import { services } from "@/data/services";
import ServiceCard from "./ServiceCard";

export default function Services() {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-[#050505] py-10 sm:py-12 lg:py-16"
    >
      {/* HALOS */}

      <div className="pointer-events-none absolute -left-40 top-0 h-[300px] w-[300px] rounded-full bg-green-500/10 blur-[140px]" />

      <div className="pointer-events-none absolute -right-40 bottom-0 h-[300px] w-[300px] rounded-full bg-emerald-500/10 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* =====================================================
            TITRE
        ===================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.5,
          }}
          className="mx-auto mb-7 max-w-3xl text-center sm:mb-9"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-green-500/30 bg-green-500/10 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.22em] text-green-400 sm:text-xs">
            <Sparkles size={14} />
            Nos prestations
          </span>

          <h2 className="mt-4 text-2xl font-black leading-tight tracking-tight text-white sm:text-3xl lg:text-4xl">
            Tout pour votre{" "}
            <span className="text-green-400">
              événement
            </span>
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-gray-400 sm:text-base">
            Photo Booth, sonorisation, barnum,
            mobilier, effets et équipements pour
            vos mariages, anniversaires et événements.
          </p>
        </motion.div>

        {/* =====================================================
            CARTES
        ===================================================== */}

        <div className="grid gap-4 md:grid-cols-2 lg:gap-5">

          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.1,
              }}
              transition={{
                duration: 0.4,
                delay: Math.min(
                  index * 0.05,
                  0.2
                ),
              }}
              className="h-full"
            >
              <ServiceCard
                service={service}
              />
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}