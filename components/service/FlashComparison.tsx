"use client";

import { useState } from "react";
import Image from "next/image";
import { Camera, Sparkles } from "lucide-react";

export default function FlashComparison() {
  const [position, setPosition] = useState(50);

  return (
    <section className="overflow-hidden rounded-[24px] border border-white/10 bg-white/[0.05] p-5 backdrop-blur-xl sm:rounded-3xl sm:p-6 lg:p-8">

      {/* TITRE */}
      <div className="mb-6 sm:mb-8">

        <span className="inline-flex items-center gap-2 rounded-full border border-green-500/30 bg-green-500/10 px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-green-400 sm:px-4 sm:py-2 sm:text-xs sm:tracking-[0.3em]">
          <Camera size={14} />
          Option flash
        </span>

        <h2 className="mt-4 text-2xl font-black leading-tight text-white sm:text-3xl lg:text-4xl">
          Avec ou sans flash ?
        </h2>

        <p className="mt-3 max-w-3xl text-sm leading-6 text-gray-400 sm:text-base sm:leading-7">
          Comparez le résultat obtenu dans les mêmes conditions.
          Le flash externe apporte davantage de luminosité aux visages,
          des couleurs plus éclatantes et un rendu plus homogène.
        </p>

      </div>

      {/* COMPARATEUR */}
      <div className="relative mx-auto aspect-[3/2] w-full max-w-5xl select-none overflow-hidden rounded-2xl border border-white/10">

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
        <div className="absolute left-3 top-3 rounded-full bg-green-500 px-3 py-1.5 text-xs font-bold text-black shadow-lg sm:left-4 sm:top-4 sm:text-sm">
          ✨ Avec flash
        </div>

        {/* LABEL SANS FLASH */}
        <div className="absolute right-3 top-3 rounded-full bg-black/70 px-3 py-1.5 text-xs font-bold text-white backdrop-blur-md sm:right-4 sm:top-4 sm:text-sm">
          Sans flash
        </div>

        {/* BARRE CENTRALE */}
        <div
          className="pointer-events-none absolute bottom-0 top-0 w-[3px] bg-white shadow-xl"
          style={{
            left: `${position}%`,
            transform: "translateX(-50%)",
          }}
        >
          <div className="absolute left-1/2 top-1/2 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-white bg-black/70 text-lg font-bold text-white shadow-xl backdrop-blur-md">
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

        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
          <p className="text-sm font-bold text-white sm:text-base">
            Sans flash
          </p>

          <p className="mt-2 text-sm leading-6 text-gray-400">
            Le photobooth utilise principalement la lumière ambiante.
            Le résultat dépend donc davantage de l'éclairage du lieu.
          </p>
        </div>

        <div className="rounded-2xl border border-green-500/30 bg-green-500/[0.07] p-5">

          <div className="flex items-center gap-2">
            <Sparkles size={17} className="text-green-400" />

            <p className="text-sm font-bold text-white sm:text-base">
              Avec flash — recommandé
            </p>
          </div>

          <p className="mt-2 text-sm leading-6 text-gray-300">
            Des visages plus lumineux, des couleurs plus éclatantes
            et un rendu régulier tout au long de votre événement.
          </p>

          <p className="mt-3 font-black text-green-400">
            Option +10 €
          </p>

        </div>

      </div>

    </section>
  );
}