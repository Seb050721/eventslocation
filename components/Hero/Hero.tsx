import Image from "next/image";

import HeroButtons from "./HeroButtons";
import HeroStats from "./HeroStats";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#07120c] via-[#0d351e] to-[#16833f]">

      {/* Halos */}
      <div className="pointer-events-none absolute -left-40 top-20 h-[420px] w-[420px] rounded-full bg-green-400/15 blur-[140px]" />

      <div className="pointer-events-none absolute -right-40 top-1/3 h-[500px] w-[500px] rounded-full bg-emerald-300/15 blur-[160px]" />

      {/* Contenu */}
      <div className="relative mx-auto max-w-7xl px-5 pb-12 pt-24 sm:px-6 sm:pb-16 sm:pt-28 lg:px-8 lg:pb-20 lg:pt-32">

        <div className="grid items-center gap-9 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">

          {/* ==========================
              TEXTE
          ========================== */}

          <div className="order-1">

            {/* Badge */}
            <span className="inline-flex rounded-full border border-green-300/25 bg-white/10 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.16em] text-green-100 backdrop-blur-md sm:px-5 sm:text-xs sm:tracking-[0.24em]">
              Location de matériel événementiel
            </span>

            {/* Titre */}
            <h1 className="mt-5 max-w-3xl text-[38px] font-black leading-[1.02] tracking-tight text-white min-[380px]:text-[42px] sm:mt-6 sm:text-5xl md:text-6xl lg:mt-8 lg:text-7xl xl:text-[78px]">
              Donnez vie à

              <span className="block text-green-400">
                vos événements
              </span>
            </h1>

            {/* Description */}
            <p className="mt-5 max-w-2xl text-[15px] leading-7 text-green-50/85 sm:mt-6 sm:text-lg sm:leading-8 lg:mt-8 lg:text-xl lg:leading-9">
              Photo Booth, mobilier, sonorisation, projection vidéo,
              machines à effets et Smoke Puff pour créer des moments
              inoubliables dans la Nièvre, l&apos;Yonne et le Cher.
            </p>

            {/* Badges */}
            <div className="mt-5 flex flex-wrap gap-2 sm:mt-6 sm:gap-3">

              <span className="rounded-full border border-white/10 bg-white/10 px-3 py-2 text-[11px] font-semibold text-white/90 backdrop-blur-md sm:px-4 sm:text-sm">
                📸 Photo Booth
              </span>

              <span className="rounded-full border border-white/10 bg-white/10 px-3 py-2 text-[11px] font-semibold text-white/90 backdrop-blur-md sm:px-4 sm:text-sm">
                🪑 Mobilier
              </span>

              <span className="rounded-full border border-white/10 bg-white/10 px-3 py-2 text-[11px] font-semibold text-white/90 backdrop-blur-md sm:px-4 sm:text-sm">
                💨 Smoke Puff
              </span>

              <span className="rounded-full border border-white/10 bg-white/10 px-3 py-2 text-[11px] font-semibold text-white/90 backdrop-blur-md sm:px-4 sm:text-sm">
                🚚 Livraison 20 km et +
              </span>

            </div>

            <HeroButtons />

          </div>

          {/* ==========================
              IMAGE
          ========================== */}

          <div className="order-2 mx-auto w-full max-w-[520px] lg:max-w-none">

            <div className="relative">

              {/* Halo */}
              <div className="absolute -inset-4 rounded-[34px] bg-green-400/20 blur-3xl sm:-inset-8" />

              {/* Carte image */}
              <div className="group relative overflow-hidden rounded-[26px] border border-white/15 bg-white/5 shadow-[0_24px_70px_rgba(0,0,0,0.30)] sm:rounded-[36px]">

                <div className="relative aspect-[4/3] w-full sm:aspect-[5/6] lg:aspect-[4/5]">

                  <Image
                    src="/images/hero-photobooth.jpg"
                    alt="Photo Booth Event'S Location lors d'un événement"
                    fill
                    priority
                    sizes="(max-width: 640px) 90vw, (max-width: 1024px) 80vw, 45vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />

                  {/* Badge image */}
                  <div className="absolute bottom-3 left-3 right-3 rounded-xl border border-white/15 bg-black/35 p-3 text-white backdrop-blur-xl sm:bottom-6 sm:left-6 sm:right-auto sm:max-w-[300px] sm:rounded-2xl sm:p-4">

                    <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-green-300 sm:text-xs sm:tracking-[0.2em]">
                      Event&apos;S Location
                    </p>

                    <p className="mt-1 text-xs font-semibold sm:text-base">
                      Des souvenirs qui restent.
                    </p>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

        {/* ==========================
            STATISTIQUES
        ========================== */}

        <div className="mt-8 sm:mt-12 lg:mt-16">
          <HeroStats />
        </div>

      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-green-300/30 to-transparent" />

    </section>
  );
}