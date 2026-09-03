"use client";

import { useState } from "react";
import Image from "next/image";
import { Camera, Sparkles } from "lucide-react";

export default function FlashComparison() {
  const [position, setPosition] = useState(50);

  return (
    <section className="overflow-hidden rounded-[24px] border border-[#E9E2DD] bg-[#FBFAF8] p-5 shadow-[0_10px_30px_rgba(31,25,27,0.05)] sm:rounded-3xl sm:p-6 lg:p-8">

      {/* TITRE */}

      <div className="mb-6 sm:mb-8">

        <span className="inline-flex items-center gap-2 rounded-full border border-[#F3A044]/25 bg-[#FFF5E9] px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-[0.18em] text-[#D8872F] sm:px-4 sm:py-2 sm:text-xs">
          <Camera size={14} />
          Option flash
        </span>

        <h2 className="mt-4 text-2xl font-black leading-tight text-[#1D1B1C] sm:text-3xl lg:text-4xl">
          Avec ou sans
          <span className="text-[#EF5A4F]">
            {" "}flash ?
          </span>
        </h2>

        <p className="mt-3 max-w-3xl text-sm leading-6 text-[#716A6C] sm:text-base sm:leading-7">
          Comparez le résultat obtenu dans les mêmes conditions.
          Le flash externe apporte davantage de luminosité aux visages,
          des couleurs plus éclatantes et un rendu plus homogène.
        </p>

      </div>

      {/* COMPARATEUR */}

      <div className="relative mx-auto aspect-[3/2] w-full max-w-5xl select-none overflow-hidden rounded-[20px] border border-[#E9E2DD] bg-white shadow-[0_12px_35px_rgba(31,25,27,0.08)]">

        {/* SANS FLASH */}

        <Image
          src="/images/services/photobooth-sans-flash.webp"
          alt="Photo prise avec notre photobooth sans flash à Auxerre"
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 1000px"
        />

        {/* AVEC FLASH */}

        <div
          className="absolute inset-0 overflow-hidden"
          style={{
            clipPath: `inset(0 ${100 - position}% 0 0)`,
          }}
        >
          <Image
            src="/images/services/photobooth-avec-flash.webp"
            alt="Photo prise avec notre photobooth équipé du flash externe à Auxerre"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 1000px"
          />
        </div>

        {/* LABEL AVEC FLASH */}

        <div className="absolute left-3 top-3 rounded-full border border-white/70 bg-white/90 px-3 py-1.5 text-xs font-bold text-[#D94A41] shadow-md backdrop-blur-md sm:left-4 sm:top-4 sm:text-sm">
          ✨ Avec flash
        </div>

        {/* LABEL SANS FLASH */}

        <div className="absolute right-3 top-3 rounded-full border border-white/70 bg-white/90 px-3 py-1.5 text-xs font-bold text-[#3F3A3C] shadow-md backdrop-blur-md sm:right-4 sm:top-4 sm:text-sm">
          Sans flash
        </div>

        {/* BARRE CENTRALE */}

        <div
          className="pointer-events-none absolute bottom-0 top-0 w-[3px] bg-white shadow-[0_0_12px_rgba(0,0,0,0.25)]"
          style={{
            left: `${position}%`,
            transform: "translateX(-50%)",
          }}
        >
          <div className="absolute left-1/2 top-1/2 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-white bg-[#EF5A4F] text-lg font-bold text-white shadow-[0_8px_20px_rgba(239,90,79,0.30)]">
            ↔
          </div>
        </div>

        {/* CURSEUR INVISIBLE SUR TOUTE L'IMAGE */}

        <input
          type="range"
          min="0"
          max="100"
          value={position}
          onChange={(e) => setPosition(Number(e.target.value))}
          aria-label="Comparer la photo avec et sans flash"
          className="absolute inset-0 z-20 h-full w-full cursor-ew-resize opacity-0"
        />

      </div>

      {/* EXPLICATION */}

      <div className="mt-6 grid gap-4 sm:grid-cols-2">

        {/* SANS FLASH */}

        <div className="rounded-2xl border border-[#E9E2DD] bg-white p-5 shadow-[0_6px_20px_rgba(31,25,27,0.03)]">

          <p className="text-sm font-bold text-[#1D1B1C] sm:text-base">
            Sans flash
          </p>

          <p className="mt-2 text-sm leading-6 text-[#716A6C]">
            Le photobooth utilise principalement la lumière ambiante.
            Le résultat dépend donc davantage de l&apos;éclairage du lieu.
          </p>

        </div>

        {/* AVEC FLASH */}

        <div className="rounded-2xl border border-[#EF5A4F]/20 bg-[#FFF0ED] p-5 shadow-[0_6px_20px_rgba(31,25,27,0.03)]">

          <div className="flex items-center gap-2">

            <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-white">
              <Sparkles
                size={17}
                className="text-[#EF5A4F]"
              />
            </div>

            <p className="text-sm font-bold text-[#1D1B1C] sm:text-base">
              Avec flash — recommandé
            </p>

          </div>

          <p className="mt-3 text-sm leading-6 text-[#716A6C]">
            Des visages plus lumineux, des couleurs plus éclatantes
            et un rendu régulier tout au long de votre événement.
          </p>

          <div className="mt-4 inline-flex rounded-full bg-white px-3.5 py-1.5 text-sm font-black text-[#EF5A4F] shadow-sm">
            Option +10 €
          </div>

        </div>

      </div>

    </section>
  );
}