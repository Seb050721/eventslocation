
"use client";

import { useState } from "react";
import Image from "next/image";
import { X, Sparkles, ArrowRight } from "lucide-react";

export default function NouveauteBubble() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <>
      {/* BULLE FLOTTANTE */}
      <div className="fixed bottom-5 right-4 z-[80] flex flex-col items-center sm:bottom-7 sm:right-7">
        <button
          type="button"
          onClick={() => setIsVisible(false)}
          aria-label="Masquer la nouveauté"
          className="absolute -right-2 -top-2 z-10 flex h-7 w-7 items-center justify-center rounded-full border border-[#E9E2DD] bg-white text-[#716A6C] shadow-md"
        >
          <X size={15} />
        </button>

        <button
          type="button"
          onClick={() => setIsOpen(true)}
          aria-label="Découvrir le livre d'or audio à 59 euros le week-end"
          className="group flex flex-col items-center"
        >
          <div className="relative h-24 w-24 overflow-hidden rounded-full border-[3px] border-[#EF5A4F] bg-white p-1 shadow-xl transition-transform duration-300 group-hover:scale-105 sm:h-32 sm:w-32">
            <div className="relative h-full w-full overflow-hidden rounded-full bg-[#FFF0ED]">
              <Image
                src="/nouveautes/livre-or-audio.png"
                alt="Livre d'or audio"
                fill
                sizes="(max-width: 640px) 96px, 128px"
                className="object-cover"
              />
            </div>
          </div>

          <span className="-mt-3 z-10 rounded-full bg-[#EF5A4F] px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-white shadow-md">
            Nouveauté
          </span>

          <span className="mt-1 rounded-full border border-[#E9E2DD] bg-white px-3 py-1 text-sm font-extrabold text-[#1D1B1C] shadow-md">
            59 € / week-end
          </span>
        </button>
      </div>

      {/* FENÊTRE DE PRÉSENTATION */}
      {isOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/55 p-4"
          onClick={() => setIsOpen(false)}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="nouveaute-title"
            className="relative w-full max-w-md overflow-hidden rounded-3xl bg-[#FBFAF8] shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              aria-label="Fermer"
              className="absolute right-4 top-4 z-10 rounded-full bg-white p-2 text-[#1D1B1C] shadow-md"
            >
              <X size={20} />
            </button>

            <div className="relative h-52 w-full bg-[#FFF0ED] sm:h-64">
              <Image
                src="/nouveautes/livre-or-audio.jpg"
                alt="Téléphone livre d'or audio"
                fill
                sizes="(max-width: 640px) 100vw, 448px"
                className="object-contain p-5"
              />
            </div>

            <div className="p-6 text-center sm:p-8">
              <div className="mb-3 flex items-center justify-center gap-2 text-sm font-semibold text-[#347A77]">
                <Sparkles size={17} />
                Notre nouveauté
              </div>

              <h2
                id="nouveaute-title"
                className="text-2xl font-extrabold text-[#1D1B1C]"
              >
                Le livre d'or audio
              </h2>

              <p className="mt-3 text-sm leading-6 text-[#716A6C]">
                Offrez à vos invités une façon originale
                de vous laisser un souvenir.
                Ils décrochent le téléphone et enregistrent
                leurs messages, leurs rires et leurs émotions.
              </p>

              <p className="mt-5 text-3xl font-black text-[#EF5A4F]">
                59 €
                <span className="ml-2 text-sm font-medium text-[#716A6C]">
                  / week-end
                </span>
              </p>

              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="mt-6 flex items-center justify-center gap-2 rounded-full bg-[#EF5A4F] px-6 py-4 font-bold text-white transition hover:bg-[#D94A41]"
              >
                Demander un devis
                <ArrowRight size={18} />
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
