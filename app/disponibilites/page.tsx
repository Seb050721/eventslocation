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

export default function DisponibilitesPage() {
  return (
    <>
      <Header />

      <main className="relative min-h-screen overflow-hidden bg-[#050505] pb-24 pt-32 sm:pt-36">

        {/* =====================================================
            HALOS
        ===================================================== */}

        <div className="pointer-events-none absolute -left-52 top-20 h-[500px] w-[500px] rounded-full bg-green-500/10 blur-[170px]" />

        <div className="pointer-events-none absolute -right-52 top-[500px] h-[500px] w-[500px] rounded-full bg-emerald-500/10 blur-[170px]" />

        <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

          {/* =====================================================
              INTRODUCTION
          ===================================================== */}

          <section className="mx-auto mb-12 max-w-4xl text-center sm:mb-16">

            <span className="inline-flex items-center gap-2 rounded-full border border-green-500/30 bg-green-500/10 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.25em] text-green-400 sm:px-5 sm:text-xs">
              <CalendarCheck size={16} />

              Calendrier
            </span>

            <h1 className="mt-6 text-4xl font-black leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              Votre date est-elle
              <span className="block text-green-400">
                disponible ?
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-gray-400 sm:text-lg sm:leading-8">
              Consultez notre calendrier, choisissez la date de votre
              événement et envoyez-nous directement votre demande de devis.
            </p>

          </section>

          {/* =====================================================
              CALENDRIER
          ===================================================== */}

          <AvailabilityCalendar />

          {/* =====================================================
              INFORMATIONS
          ===================================================== */}

          <section className="mt-12 grid gap-4 md:grid-cols-3 sm:mt-16">

            {/* DISPONIBILITÉ */}

            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6">

              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-green-500/10 text-green-400">
                <CalendarCheck size={22} />
              </div>

              <h2 className="mt-5 text-lg font-black text-white">
                Disponibilité en ligne
              </h2>

              <p className="mt-2 text-sm leading-6 text-gray-400">
                Consultez rapidement les dates actuellement disponibles
                pour votre événement.
              </p>

            </div>

            {/* CONFIRMATION */}

            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6">

              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-green-500/10 text-green-400">
                <ShieldCheck size={22} />
              </div>

              <h2 className="mt-5 text-lg font-black text-white">
                Confirmation de réservation
              </h2>

              <p className="mt-2 text-sm leading-6 text-gray-400">
                Une date disponible n&apos;est définitivement réservée
                qu&apos;après confirmation de votre demande.
              </p>

            </div>

            {/* MISE À JOUR */}

            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6">

              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-green-500/10 text-green-400">
                <Clock3 size={22} />
              </div>

              <h2 className="mt-5 text-lg font-black text-white">
                Calendrier actualisé
              </h2>

              <p className="mt-2 text-sm leading-6 text-gray-400">
                Les disponibilités évoluent selon les réservations et
                demandes en cours.
              </p>

            </div>

          </section>

          {/* =====================================================
              TEXTE SEO LOCAL
          ===================================================== */}

          <section className="mx-auto mt-16 max-w-4xl border-t border-white/10 pt-12 text-center">

            <h2 className="text-2xl font-black text-white sm:text-3xl">
              Réservez votre matériel événementiel
            </h2>

            <p className="mt-5 text-sm leading-7 text-gray-400 sm:text-base">
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