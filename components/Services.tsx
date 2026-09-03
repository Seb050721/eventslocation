"use client";

import { motion } from "framer-motion";
import { MapPin, Sparkles } from "lucide-react";

import { services } from "@/data/services";
import ServiceCard from "./ServiceCard";

export default function Services() {
  return (
    <section
      id="services"
      className="relative scroll-mt-[80px] overflow-hidden bg-[#FBFAF8] py-12 sm:py-14 lg:py-16"
    >
      {/* =====================================================
          DÉCORATION DE FOND
      ===================================================== */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 top-20 h-[280px] w-[280px] rounded-full bg-[#4A9692]/8 blur-[120px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 top-1/3 h-[320px] w-[320px] rounded-full bg-[#EF5A4F]/8 blur-[130px]"
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

        {/* =====================================================
            EN-TÊTE
        ===================================================== */}

        <div className="mx-auto max-w-3xl text-center">

          <div className="inline-flex items-center gap-2 rounded-full border border-[#EF5A4F]/20 bg-[#FFF0ED] px-4 py-2 text-[10px] font-bold uppercase tracking-[0.18em] text-[#D94A41] sm:text-xs">
            <Sparkles size={14} />

            Nos prestations
          </div>

          <h2 className="mt-4 text-3xl font-black leading-tight tracking-tight text-[#1D1B1C] sm:text-4xl lg:text-[44px]">
            Tout ce qu&apos;il faut pour
            <span className="text-[#EF5A4F]">
              {" "}réussir votre événement
            </span>
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-[#716A6C] sm:text-base sm:leading-7">
            Photo Booth, mobilier, sonorisation, projection et effets :
            louez le matériel adapté à votre mariage, anniversaire,
            réception ou événement professionnel.
          </p>

          {/* =================================================
              SEO LOCAL
          ================================================= */}

          <div className="mx-auto mt-4 flex max-w-2xl items-start justify-center gap-2 text-[13px] leading-6 text-[#716A6C] sm:text-sm">
            <MapPin
              size={17}
              className="mt-0.5 shrink-0 text-[#4A9692]"
            />

            <p>
              Location de matériel événementiel à{" "}
              <strong className="font-semibold text-[#3F3A3C]">
                Auxerre
              </strong>
              ,{" "}
              <strong className="font-semibold text-[#3F3A3C]">
                Avallon
              </strong>
              ,{" "}
              <strong className="font-semibold text-[#3F3A3C]">
                Nevers
              </strong>{" "}
              et{" "}
              <strong className="font-semibold text-[#3F3A3C]">
                Cosne-Cours-sur-Loire
              </strong>
              , ainsi qu&apos;en Nièvre, Yonne et Cher.
            </p>
          </div>

          {/* =================================================
              RAPPEL COULEURS DU LOGO
          ================================================= */}

          <div
            aria-hidden="true"
            className="mt-4 flex justify-center gap-2"
          >
            <span className="h-2 w-2 rounded-full bg-[#4A9692]" />
            <span className="h-2 w-2 rounded-full bg-[#87954E]" />
            <span className="h-2 w-2 rounded-full bg-[#EF5A4F]" />
            <span className="h-2 w-2 rounded-full bg-[#C34F72]" />
            <span className="h-2 w-2 rounded-full bg-[#F3A044]" />
          </div>

        </div>

        {/* =====================================================
            CARTES SERVICES
        ===================================================== */}

        <div className="mt-8 grid gap-5 sm:mt-10 sm:grid-cols-2 xl:grid-cols-3">

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
                margin: "-70px",
              }}
              transition={{
                duration: 0.4,
                delay: Math.min(index * 0.05, 0.2),
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