import Image from "next/image";

import HeroButtons from "./HeroButtons";
import HeroStats from "./HeroStats";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[linear-gradient(135deg,#FBFAF8_0%,#FFF7F2_45%,#F8F6F1_100%)]">

      {/* =====================================================
          HALOS
      ===================================================== */}

      <div className="pointer-events-none absolute -left-40 top-16 h-[360px] w-[360px] rounded-full bg-[#4A9692]/12 blur-[130px]" />

      <div className="pointer-events-none absolute right-[-160px] top-24 h-[420px] w-[420px] rounded-full bg-[#EF5A4F]/12 blur-[150px]" />

      <div className="pointer-events-none absolute bottom-[-180px] left-1/3 h-[320px] w-[320px] rounded-full bg-[#F3A044]/10 blur-[140px]" />

      {/* =====================================================
          PETITS POINTS DU LOGO
      ===================================================== */}

      <div className="pointer-events-none absolute left-[8%] top-[18%] hidden items-center gap-2 lg:flex">
        <span className="h-2.5 w-2.5 rounded-full bg-[#4A9692]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#87954E]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#EF5A4F]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#C34F72]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#F3A044]" />
      </div>

      {/* =====================================================
          CONTENU
      ===================================================== */}

      <div className="relative mx-auto max-w-7xl px-5 pb-12 pt-24 sm:px-6 sm:pb-16 sm:pt-28 lg:px-8 lg:pb-16 lg:pt-32">

        <div className="grid items-center gap-9 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">

          {/* =================================================
              TEXTE
          ================================================= */}

          <div className="order-1">

            {/* BADGE */}

            <span className="inline-flex items-center gap-2 rounded-full border border-[#EF5A4F]/20 bg-[#FFF0ED] px-4 py-2 text-[10px] font-bold uppercase tracking-[0.16em] text-[#D94A41] sm:px-5 sm:text-xs sm:tracking-[0.22em]">
              <span className="h-2 w-2 rounded-full bg-[#EF5A4F]" />

              Location de matériel événementiel
            </span>

            {/* TITRE */}

            <h1 className="mt-5 max-w-3xl text-[38px] font-black leading-[1.02] tracking-tight text-[#1D1B1C] min-[380px]:text-[42px] sm:mt-6 sm:text-5xl md:text-6xl lg:mt-8 lg:text-7xl xl:text-[76px]">

              Donnez vie à

              <span className="block bg-gradient-to-r from-[#EF5A4F] via-[#C34F72] to-[#F3A044] bg-clip-text text-transparent">
                vos événements
              </span>

            </h1>

            {/* DESCRIPTION */}

            <p className="mt-5 max-w-2xl text-[15px] leading-7 text-[#716A6C] sm:mt-6 sm:text-lg sm:leading-8 lg:mt-7 lg:text-xl lg:leading-9">

              Photo Booth, mobilier, sonorisation, projection,
              machines à effets et Smoke Puff pour créer des
              moments inoubliables Nièvre, Yonne et Cher.

            </p>

            {/* BADGES SERVICES */}

            <div className="mt-5 flex flex-wrap gap-2 sm:mt-6 sm:gap-3">

              <span className="rounded-full border border-[#C34F72]/15 bg-[#FAEEF2] px-3 py-2 text-[11px] font-semibold text-[#A93E61] sm:px-4 sm:text-sm">
                📸 Photo Booth
              </span>

              <span className="rounded-full border border-[#87954E]/15 bg-[#F3F5E9] px-3 py-2 text-[11px] font-semibold text-[#66743A] sm:px-4 sm:text-sm">
                🪑 Mobilier
              </span>

              <span className="rounded-full border border-[#F3A044]/15 bg-[#FFF5E9] px-3 py-2 text-[11px] font-semibold text-[#C77A20] sm:px-4 sm:text-sm">
                💨 Smoke Puff
              </span>

              <span className="rounded-full border border-[#4A9692]/15 bg-[#EDF7F6] px-3 py-2 text-[11px] font-semibold text-[#347A77] sm:px-4 sm:text-sm">
                🚚 Livraison 20 km et +
              </span>

            </div>

            {/* BOUTONS */}

            <HeroButtons />

          </div>

          {/* =================================================
              IMAGE
          ================================================= */}

          <div className="order-2 mx-auto w-full max-w-[520px] lg:max-w-none">

            <div className="relative">

              {/* HALO IMAGE */}

              <div className="absolute -inset-4 rounded-[34px] bg-gradient-to-br from-[#EF5A4F]/15 via-[#C34F72]/10 to-[#4A9692]/15 blur-3xl sm:-inset-8" />

              {/* PETITE DÉCO */}

              <div className="absolute -right-3 -top-3 z-20 hidden h-20 w-20 rounded-full border border-[#F3A044]/20 bg-[#FFF5E9] sm:flex sm:items-center sm:justify-center">
                <div className="flex gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#4A9692]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#EF5A4F]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#F3A044]" />
                </div>
              </div>

              {/* CARTE IMAGE */}

              <div className="group relative overflow-hidden rounded-[26px] border border-[#E9E2DD] bg-white shadow-[0_24px_70px_rgba(31,25,27,0.14)] sm:rounded-[34px]">

                <div className="relative aspect-[4/3] w-full sm:aspect-[5/6] lg:aspect-[4/5]">

                  <Image
                    src="/images/hero-photobooth.jpg"
                    alt="Photo Booth Event'S Location lors d'un événement"
                    fill
                    priority
                    sizes="(max-width: 640px) 90vw, (max-width: 1024px) 80vw, 45vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#1D1B1C]/35 via-transparent to-transparent" />

                  {/* BADGE IMAGE */}

                  <div className="absolute bottom-3 left-3 right-3 rounded-xl border border-white/30 bg-white/85 p-3 text-[#1D1B1C] shadow-lg backdrop-blur-xl sm:bottom-6 sm:left-6 sm:right-auto sm:max-w-[310px] sm:rounded-2xl sm:p-4">

                    <div className="mb-2 flex items-center gap-1.5">
                      <span className="h-2 w-2 rounded-full bg-[#4A9692]" />
                      <span className="h-2 w-2 rounded-full bg-[#87954E]" />
                      <span className="h-2 w-2 rounded-full bg-[#EF5A4F]" />
                      <span className="h-2 w-2 rounded-full bg-[#C34F72]" />
                      <span className="h-2 w-2 rounded-full bg-[#F3A044]" />
                    </div>

                    <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#EF5A4F] sm:text-xs sm:tracking-[0.2em]">
                      Event&apos;S Location
                    </p>

                    <p className="mt-1 text-xs font-semibold text-[#3F3A3C] sm:text-base">
                      Des souvenirs qui restent.
                    </p>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

        {/* =====================================================
            STATISTIQUES
        ===================================================== */}

        <div className="mt-8 sm:mt-10 lg:mt-12">
          <HeroStats />
        </div>

      </div>

      {/* =====================================================
          LIGNE BAS DE HERO
      ===================================================== */}

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#EF5A4F]/25 to-transparent" />

    </section>
  );
}