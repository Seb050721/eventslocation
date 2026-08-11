"use client";

import {
  Quote,
  Star,
  Heart,
} from "lucide-react";

const reviews = [
  {
    name: "Marie & Julien",
    event: "Mariage",
    text: "Service irréprochable ! Le Photo Booth a eu un énorme succès auprès de nos invités. Installation rapide et matériel de qualité.",
  },
  {
    name: "Sophie",
    event: "Anniversaire",
    text: "Très professionnel, ponctuel et à l'écoute. Je recommande sans hésiter !",
  },
  {
    name: "Comité des fêtes",
    event: "Événement associatif",
    text: "Excellent matériel, installation parfaite et très bonne communication avant l'événement.",
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="relative overflow-hidden bg-[#050505] py-20 sm:py-24 lg:py-28"
    >
      {/* Halos */}
      <div className="pointer-events-none absolute -right-52 top-10 h-[500px] w-[500px] rounded-full bg-green-500/10 blur-[170px]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

        {/* TITRE */}
        <div className="mx-auto mb-12 max-w-3xl text-center sm:mb-16 lg:mb-20">

          <span className="inline-flex rounded-full border border-green-500/30 bg-green-500/10 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.25em] text-green-400 sm:px-5 sm:text-xs sm:tracking-[0.35em]">
            Avis clients
          </span>

          <h2 className="mt-6 text-4xl font-black leading-tight tracking-tight text-white sm:text-5xl lg:mt-8 lg:text-6xl">
            Ils nous ont fait
            <span className="block text-green-400">
              confiance
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-gray-400 sm:text-lg sm:leading-8">
            Des événements uniques et des clients satisfaits : c&apos;est
            notre meilleure récompense.
          </p>

        </div>

        {/* NOTE GLOBALE */}
        <div className="mx-auto mb-8 flex max-w-md items-center justify-center gap-4 rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4 sm:mb-12">

          <div className="flex gap-0.5">

            {Array.from({ length: 5 }).map((_, index) => (
              <Star
                key={index}
                size={18}
                fill="currentColor"
                className="text-yellow-400"
              />
            ))}

          </div>

          <div className="h-7 w-px bg-white/10" />

          <p className="text-sm font-semibold text-gray-300">
            Votre satisfaction au cœur de nos événements
          </p>

        </div>

        {/* AVIS */}
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-7">

          {reviews.map((review) => (
            <article
              key={`${review.name}-${review.event}`}
              className="group relative flex h-full flex-col rounded-[26px] border border-white/10 bg-white/[0.05] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-green-500/30 hover:bg-white/[0.07] hover:shadow-[0_20px_60px_rgba(34,197,94,0.10)] sm:rounded-[30px] sm:p-8"
            >
              {/* Guillemets */}
              <div className="absolute right-5 top-5 text-green-500/15">
                <Quote
                  size={52}
                  fill="currentColor"
                  strokeWidth={1}
                />
              </div>

              {/* Étoiles */}
              <div className="relative flex gap-1">

                {Array.from({ length: 5 }).map((_, index) => (
                  <Star
                    key={index}
                    size={17}
                    fill="currentColor"
                    className="text-yellow-400"
                  />
                ))}

              </div>

              {/* Texte */}
              <p className="relative mt-6 flex-1 text-sm leading-7 text-gray-300 sm:text-base sm:leading-8">
                &ldquo;{review.text}&rdquo;
              </p>

              {/* Client */}
              <div className="mt-7 border-t border-white/10 pt-5">

                <div className="flex items-center justify-between gap-4">

                  <div>
                    <p className="font-bold text-white">
                      {review.name}
                    </p>

                    <p className="mt-1 text-sm font-medium text-green-400">
                      {review.event}
                    </p>
                  </div>

                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-500/10 text-green-400">
                    <Heart
                      size={18}
                      fill="currentColor"
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