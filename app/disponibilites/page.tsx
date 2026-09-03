import type { Metadata } from "next";

import Header from "@/components/Header/Header";
import AvailabilityCalendar from "@/components/AvailabilityCalendar";
import Footer from "@/components/Footer/Footer";

import {
  CalendarCheck,
  ShieldCheck,
  Clock3,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Disponibilités | Event'S Location",

  description:
    "Consultez les disponibilités d'Event'S Location pour votre mariage, anniversaire ou événement en Nièvre, Yonne et Cher.",

  alternates: {
    canonical: "/disponibilites",
  },

  robots: {
    index: true,
    follow: true,
  },
};

const infos = [
  {
    title: "Disponibilité en ligne",
    text: "Consultez rapidement les dates actuellement disponibles pour votre événement.",
    icon: CalendarCheck,
    iconBg: "bg-[#EDF7F6]",
    iconColor: "text-[#347A77]",
    accent: "bg-[#4A9692]",
  },
  {
    title: "Confirmation de réservation",
    text: "Une date disponible n'est définitivement réservée qu'après confirmation de votre demande.",
    icon: ShieldCheck,
    iconBg: "bg-[#FFF0ED]",
    iconColor: "text-[#EF5A4F]",
    accent: "bg-[#EF5A4F]",
  },
  {
    title: "Calendrier actualisé",
    text: "Les disponibilités évoluent selon les réservations et demandes en cours.",
    icon: Clock3,
    iconBg: "bg-[#FFF5E9]",
    iconColor: "text-[#D8872F]",
    accent: "bg-[#F3A044]",
  },
];

export default function DisponibilitesPage() {
  return (
    <>
      <Header />

      <main className="relative min-h-screen overflow-hidden bg-[#FBFAF8] pb-20 pt-28 sm:pt-32 lg:pb-24">

        {/* =====================================================
            DÉCOR
        ===================================================== */}

        <div className="pointer-events-none absolute -left-44 top-24 h-[420px] w-[420px] rounded-full bg-[#4A9692]/8 blur-[150px]" />

        <div className="pointer-events-none absolute -right-44 top-[420px] h-[420px] w-[420px] rounded-full bg-[#EF5A4F]/7 blur-[150px]" />

        <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

          {/* =====================================================
              INTRODUCTION
          ===================================================== */}

          <section className="mx-auto mb-10 max-w-4xl text-center sm:mb-12 lg:mb-14">

            <span className="inline-flex items-center gap-2 rounded-full border border-[#4A9692]/20 bg-[#EDF7F6] px-4 py-2 text-[10px] font-bold uppercase tracking-[0.18em] text-[#347A77] sm:px-5 sm:text-xs">
              <CalendarCheck size={16} />

              Calendrier
            </span>

            <h1 className="mt-5 text-4xl font-black leading-tight tracking-tight text-[#1D1B1C] sm:text-5xl lg:text-6xl">
              Votre date est-elle
              <span className="block text-[#EF5A4F]">
                disponible ?
              </span>
            </h1>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-[#716A6C] sm:text-lg sm:leading-8">
              Consultez notre calendrier, choisissez la date de votre
              événement et envoyez-nous directement votre demande de devis.
            </p>

            {/* PETITS ACCENTS DU LOGO */}

            <div
              aria-hidden="true"
              className="mt-5 flex items-center justify-center gap-2"
            >
              <span className="h-2 w-2 rounded-full bg-[#EF5A4F]" />
              <span className="h-2 w-2 rounded-full bg-[#4A9692]" />
              <span className="h-2 w-2 rounded-full bg-[#C34F72]" />
              <span className="h-2 w-2 rounded-full bg-[#F3A044]" />
              <span className="h-2 w-2 rounded-full bg-[#87954E]" />
            </div>

          </section>

          {/* =====================================================
              CALENDRIER
          ===================================================== */}

          <AvailabilityCalendar />

          {/* =====================================================
              INFORMATIONS
          ===================================================== */}

          <section className="mt-10 grid gap-4 sm:mt-12 md:grid-cols-3">

            {infos.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  className="relative overflow-hidden rounded-2xl border border-[#E9E2DD] bg-white p-6 shadow-[0_8px_26px_rgba(31,25,27,0.04)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_32px_rgba(31,25,27,0.07)]"
                >

                  <div
                    aria-hidden="true"
                    className={`absolute left-0 top-0 h-1 w-full ${item.accent}`}
                  />

                  <div
                    className={`flex h-11 w-11 items-center justify-center rounded-xl ${item.iconBg} ${item.iconColor}`}
                  >
                    <Icon size={22} />
                  </div>

                  <h2 className="mt-5 text-lg font-black text-[#1D1B1C]">
                    {item.title}
                  </h2>

                  <p className="mt-2 text-sm leading-6 text-[#716A6C]">
                    {item.text}
                  </p>

                </article>
              );
            })}

          </section>

          {/* =====================================================
              TEXTE SEO LOCAL
          ===================================================== */}

          <section className="mx-auto mt-14 max-w-4xl rounded-3xl border border-[#E9E2DD] bg-white p-6 text-center shadow-[0_8px_26px_rgba(31,25,27,0.04)] sm:mt-16 sm:p-8">

            <span className="inline-flex rounded-full border border-[#EF5A4F]/20 bg-[#FFF0ED] px-4 py-2 text-[10px] font-bold uppercase tracking-[0.18em] text-[#D94A41] sm:text-xs">
              Event&apos;S Location
            </span>

            <h2 className="mt-4 text-2xl font-black text-[#1D1B1C] sm:text-3xl">
              Réservez votre
              <span className="text-[#EF5A4F]">
                {" "}matériel événementiel
              </span>
            </h2>

            <p className="mx-auto mt-5 max-w-3xl text-sm leading-7 text-[#716A6C] sm:text-base">
              Event&apos;S Location propose la location de Photo Booth,
              mobilier, sonorisation, vidéoprojecteur, machines à effets
              et Smoke Puff pour vos mariages, anniversaires, événements
              privés, professionnels et associatifs en Nièvre, dans
              l&apos;Yonne et le Cher.
            </p>

          </section>

        </div>

      </main>

      <Footer />
    </>
  );
}