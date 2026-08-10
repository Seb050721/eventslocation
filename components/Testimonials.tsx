"use client";

import { Star } from "lucide-react";

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
    <section className="bg-[#080808] py-28">

      <div className="mx-auto max-w-7xl px-6">

        <div className="mx-auto mb-16 max-w-3xl text-center">

          <span className="rounded-full border border-green-500/30 bg-green-500/10 px-5 py-2 text-sm uppercase tracking-[0.35em] text-green-400">
            Avis clients
          </span>

          <h2 className="mt-8 text-5xl font-black text-white">
            Ils nous ont fait confiance
          </h2>

          <p className="mt-8 text-lg text-gray-400">
            Votre satisfaction est notre priorité.
          </p>

        </div>

        <div className="grid gap-8 lg:grid-cols-3">

          {reviews.map((review) => (

            <div
              key={review.name}
              className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:border-green-500/30"
            >

              <div className="mb-5 flex gap-1">

                {[...Array(5)].map((_, i) => (

                  <Star
                    key={i}
                    size={18}
                    fill="currentColor"
                    className="text-yellow-400"
                  />

                ))}

              </div>

              <p className="leading-8 text-gray-300">
                "{review.text}"
              </p>

              <div className="mt-8">

                <p className="font-bold text-white">
                  {review.name}
                </p>

                <p className="text-green-400">
                  {review.event}
                </p>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}