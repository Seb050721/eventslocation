"use client";

import {
  Heart,
  Quote,
  Star,
} from "lucide-react";

const reviews = [
  {
    name: "David & Paola",
    event: "Concert",
    text: "Merci à Séb de Event'S Location de nous avoir permis d'avoir un super son pour notre concert d'hier soir à Ruages 🤘 Duo CHORUS.",
    color: "text-[#4A9692]",
    background: "bg-[#EDF7F6]",
  },
  {
    name: "Océane",
    event: "Naissance",
    text: "Nous avons passé une super soirée, je recommande à 100 %.",
    color: "text-[#C34F72]",
    background: "bg-[#FAEEF2]",
  },
  {
    name: "Audrey",
    event: "Anniversaire",
    text: "Seb super sympa, disponible, avec une installation et des explications adéquates du matériel.",
    color: "text-[#F3A044]",
    background: "bg-[#FFF5E9]",
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="relative scroll-mt-[80px] overflow-hidden bg-[#F7F3EF] py-12 sm:py-14 lg:py-16"
    >
      {/* =====================================================
          HALOS
      ===================================================== */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-10 h-[260px] w-[260px] rounded-full bg-[#4A9692]/7 blur-[120px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 bottom-0 h-[280px] w-[280px] rounded-full bg-[#EF5A4F]/7 blur-[130px]"
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

        {/* =====================================================
            TITRE
        ===================================================== */}

        <div className="mx-auto mb-8 max-w-3xl text-center">

          <span className="inline-flex items-center gap-2 rounded-full border border-[#F3A044]/20 bg-[#FFF5E9] px-4 py-2 text-[10px] font-bold uppercase tracking-[0.18em] text-[#C77A20] sm:text-xs">
            <Star
              size={14}
              fill="currentColor"
            />

            Avis clients
          </span>

          <h2 className="mt-4 text-3xl font-black tracking-tight text-[#1D1B1C] sm:text-4xl lg:text-[42px]">
            Ils nous ont fait
            <span className="text-[#EF5A4F]">
              {" "}confiance
            </span>
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-[#716A6C] sm:text-base">
            Mariages, anniversaires, concerts ou événements privés :
            leur satisfaction reste notre meilleure recommandation.
          </p>

        </div>

        {/* =====================================================
            NOTE GLOBALE
        ===================================================== */}

        <div className="mx-auto mb-6 flex w-fit flex-wrap items-center justify-center gap-3 rounded-full border border-[#E4DCD7] bg-white px-4 py-2.5 shadow-[0_6px_18px_rgba(31,25,27,0.04)]">

          <div className="flex gap-0.5">
            {Array.from({ length: 5 }).map((_, index) => (
              <Star
                key={index}
                size={15}
                fill="currentColor"
                className="text-[#F3A044]"
              />
            ))}
          </div>

          <span className="hidden h-4 w-px bg-[#E4DCD7] sm:block" />

          <p className="text-xs font-semibold text-[#716A6C] sm:text-sm">
            Des clients satisfaits lors de leurs événements
          </p>

        </div>

        {/* =====================================================
            AVIS
        ===================================================== */}

        <div className="grid gap-4 md:grid-cols-3">

          {reviews.map((review) => (
            <article
              key={`${review.name}-${review.event}`}
              className="group relative flex h-full flex-col rounded-[22px] border border-[#E9E2DD] bg-white p-5 shadow-[0_8px_26px_rgba(31,25,27,0.05)] transition-all duration-300 hover:-translate-y-1 hover:border-[#EF5A4F]/20 hover:shadow-[0_16px_38px_rgba(31,25,27,0.08)] sm:p-6"
            >

              {/* GUILLEMETS */}

              <Quote
                size={42}
                fill="currentColor"
                strokeWidth={1}
                className="absolute right-4 top-4 text-[#EF5A4F]/10"
              />

              {/* ÉTOILES */}

              <div className="relative flex gap-0.5">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star
                    key={index}
                    size={15}
                    fill="currentColor"
                    className="text-[#F3A044]"
                  />
                ))}
              </div>

              {/* TEXTE */}

              <p className="relative mt-4 flex-1 text-sm leading-6 text-[#514B4D]">
                &ldquo;{review.text}&rdquo;
              </p>

              {/* CLIENT */}

              <div className="mt-5 border-t border-[#EEE8E3] pt-4">

                <div className="flex items-center justify-between gap-4">

                  <div>
                    <p className="font-bold text-[#1D1B1C]">
                      {review.name}
                    </p>

                    <p className={`mt-1 text-xs font-semibold ${review.color}`}>
                      {review.event}
                    </p>
                  </div>

                  <div
                    className={`flex h-9 w-9 items-center justify-center rounded-full ${review.background}`}
                  >
                    <Heart
                      size={16}
                      fill="currentColor"
                      className={review.color}
                    />
                  </div>

                </div>

              </div>

            </article>
          ))}

        </div>

      </div>
    </section>
  );
}