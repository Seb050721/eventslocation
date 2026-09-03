"use client";

import Link from "next/link";

import {
  Heart,
  Cake,
  Baby,
  Building2,
  PartyPopper,
  ArrowRight,
  Sparkles,
} from "lucide-react";

const events = [
  {
    icon: Heart,
    title: "Mariage",
    description:
      "Photo Booth, Smoke Puff, mobilier et équipements pour votre réception.",
    color: "text-[#C34F72]",
    background: "bg-[#FAEEF2]",
  },
  {
    icon: Cake,
    title: "Anniversaire",
    description:
      "Animations et matériel pour créer une ambiance qui vous ressemble.",
    color: "text-[#F3A044]",
    background: "bg-[#FFF5E9]",
  },
  {
    icon: Baby,
    title: "Gender Reveal",
    description:
      "Smoke Puff, machine à bulles et Photo Booth pour marquer le moment.",
    color: "text-[#4A9692]",
    background: "bg-[#EDF7F6]",
  },
  {
    icon: Building2,
    title: "Entreprise",
    description:
      "Matériel pour réceptions, inaugurations et événements professionnels.",
    color: "text-[#87954E]",
    background: "bg-[#F3F5E9]",
  },
  {
    icon: PartyPopper,
    title: "Associations",
    description:
      "Solutions pour associations, comités des fêtes et collectivités.",
    color: "text-[#EF5A4F]",
    background: "bg-[#FFF0ED]",
  },
];

export default function EventTypes() {
  return (
    <section className="relative overflow-hidden bg-[#FBFAF8] py-12 sm:py-14 lg:py-16">

      {/* HALOS */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 top-10 h-[260px] w-[260px] rounded-full bg-[#4A9692]/7 blur-[120px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 bottom-0 h-[260px] w-[260px] rounded-full bg-[#EF5A4F]/7 blur-[120px]"
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

        {/* =====================================================
            TITRE
        ===================================================== */}

        <div className="mx-auto mb-8 max-w-3xl text-center">

          <span className="inline-flex items-center gap-2 rounded-full border border-[#F3A044]/20 bg-[#FFF5E9] px-4 py-2 text-[10px] font-bold uppercase tracking-[0.18em] text-[#C77A20] sm:text-xs">
            <Sparkles size={14} />
            Vos événements
          </span>

          <h2 className="mt-4 text-3xl font-black tracking-tight text-[#1D1B1C] sm:text-4xl lg:text-[42px]">
            Une solution pour
            <span className="text-[#EF5A4F]">
              {" "}chaque occasion
            </span>
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-[#716A6C] sm:text-base">
            Mariage, anniversaire, événement professionnel ou associatif :
            composez votre prestation avec le matériel dont vous avez besoin.
          </p>

        </div>

        {/* =====================================================
            TYPES D'ÉVÉNEMENTS
        ===================================================== */}

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">

          {events.map((event) => {
            const Icon = event.icon;

            return (
              <Link
                href="#services"
                key={event.title}
                className="group flex h-full flex-col rounded-[20px] border border-[#E9E2DD] bg-white p-4 shadow-[0_6px_20px_rgba(31,25,27,0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-[#EF5A4F]/20 hover:shadow-[0_12px_30px_rgba(31,25,27,0.07)] sm:p-5"
              >

                <div
                  className={`flex h-11 w-11 items-center justify-center rounded-xl ${event.background}`}
                >
                  <Icon
                    size={21}
                    className={event.color}
                  />
                </div>

                <h3 className="mt-4 text-base font-black text-[#1D1B1C] sm:text-lg">
                  {event.title}
                </h3>

                <p className="mt-2 flex-1 text-xs leading-5 text-[#716A6C] sm:text-sm">
                  {event.description}
                </p>

                <div className="mt-4 flex items-center gap-1.5 text-xs font-bold text-[#3F3A3C] transition-colors duration-200 group-hover:text-[#EF5A4F]">
                  Voir les prestations

                  <ArrowRight
                    size={14}
                    className="transition-transform duration-200 group-hover:translate-x-1"
                  />
                </div>

              </Link>
            );
          })}

        </div>

      </div>
    </section>
  );
}