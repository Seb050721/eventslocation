import Link from "next/link";

import {
  MapPin,
  Camera,
  Speaker,
  Projector,
  Armchair,
  Sparkles,
  ArrowRight,
} from "lucide-react";

const prestations = [
  {
    name: "Photo Booth",
    href: "/prestations/photobooth",
    icon: Camera,
    color: "text-[#C34F72]",
    background: "bg-[#FAEEF2]",
  },
  {
    name: "Sonorisation",
    href: "/prestations/sonorisation",
    icon: Speaker,
    color: "text-[#4A9692]",
    background: "bg-[#EDF7F6]",
  },
  {
    name: "Projection vidéo",
    href: "/prestations/projection",
    icon: Projector,
    color: "text-[#F3A044]",
    background: "bg-[#FFF5E9]",
  },
  {
    name: "Mobilier événementiel",
    href: "/prestations/mobilier",
    icon: Armchair,
    color: "text-[#87954E]",
    background: "bg-[#F3F5E9]",
  },
  {
    name: "Machines à effets",
    href: "/prestations/effets",
    icon: Sparkles,
    color: "text-[#EF5A4F]",
    background: "bg-[#FFF0ED]",
  },
  {
    name: "Smoke Puff",
    href: "/prestations/feux",
    icon: Sparkles,
    color: "text-[#C34F72]",
    background: "bg-[#FAEEF2]",
  },
];

export default function LocalSEO() {
  return (
    <section className="relative overflow-hidden bg-[#F7F3EF] py-12 sm:py-14 lg:py-16">

      {/* =====================================================
          HALOS
      ===================================================== */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-10 h-[280px] w-[280px] rounded-full bg-[#4A9692]/8 blur-[120px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 bottom-0 h-[300px] w-[300px] rounded-full bg-[#EF5A4F]/8 blur-[130px]"
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

        <div className="grid items-center gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">

          {/* =================================================
              TEXTE LOCAL / SEO
          ================================================= */}

          <div>

            <div className="inline-flex items-center gap-2 rounded-full border border-[#4A9692]/20 bg-[#EDF7F6] px-4 py-2">
              <MapPin
                size={15}
                className="text-[#4A9692]"
              />

              <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#347A77] sm:text-xs">
                Varzy • Nièvre • Yonne • Cher
              </span>
            </div>

            <h2 className="mt-4 max-w-2xl text-3xl font-black leading-tight tracking-tight text-[#1D1B1C] sm:text-4xl lg:text-[42px]">
              Votre matériel événementiel
              <span className="block text-[#EF5A4F]">
                près de chez vous
              </span>
            </h2>

            <p className="mt-4 max-w-2xl text-sm leading-7 text-[#716A6C] sm:text-base">
              Basée à Varzy, Event&apos;S Location propose la location de
              matériel pour mariages, anniversaires, réceptions,
              associations et événements professionnels.
            </p>

            <p className="mt-3 max-w-2xl text-sm leading-7 text-[#716A6C] sm:text-base">
              Nous intervenons notamment à{" "}
              <strong className="font-semibold text-[#3F3A3C]">
                Auxerre
              </strong>
              ,{" "}
              <strong className="font-semibold text-[#3F3A3C]">
                Avallon
              </strong>
              ,{" "}
              <strong className="font-semibold text-[#3F3A3C]">
                Nevers
              </strong>{" "}
              et{" "}
              <strong className="font-semibold text-[#3F3A3C]">
                Cosne-Cours-sur-Loire
              </strong>
              , ainsi que dans les secteurs de la Nièvre, de l&apos;Yonne
              et du Cher.
            </p>

            {/* =================================================
                TYPES D'ÉVÉNEMENTS
            ================================================= */}

            <div className="mt-5 flex flex-wrap gap-2">

              {[
                "Mariages",
                "Anniversaires",
                "Associations",
                "Entreprises",
              ].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-[#E4DCD7] bg-white px-3 py-1.5 text-xs font-medium text-[#514B4D]"
                >
                  {item}
                </span>
              ))}

            </div>

            {/* =================================================
                CTA
            ================================================= */}

            <Link
              href="/#contact"
              className="group mt-6 inline-flex items-center gap-2 rounded-xl bg-[#EF5A4F] px-5 py-3.5 text-sm font-bold text-white shadow-[0_10px_24px_rgba(239,90,79,0.18)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#D94A41]"
            >
              Demander un devis

              <ArrowRight
                size={17}
                className="transition-transform duration-200 group-hover:translate-x-1"
              />
            </Link>

          </div>

          {/* =================================================
              PRESTATIONS
          ================================================= */}

          <div className="rounded-[24px] border border-[#E4DCD7] bg-white p-4 shadow-[0_12px_35px_rgba(31,25,27,0.06)] sm:p-5">

            <p className="px-1 text-[10px] font-bold uppercase tracking-[0.2em] text-[#9A9395] sm:text-xs">
              Nos prestations
            </p>

            <div className="mt-4 grid gap-2.5 sm:grid-cols-2 lg:grid-cols-1">

              {prestations.map((prestation) => {
                const Icon = prestation.icon;

                return (
                  <Link
                    key={prestation.name}
                    href={prestation.href}
                    className="group flex items-center justify-between rounded-2xl border border-[#EEE8E3] bg-[#FBFAF8] p-3 transition-all duration-200 hover:-translate-y-0.5 hover:border-[#EF5A4F]/25 hover:bg-white"
                  >
                    <div className="flex items-center gap-3">

                      <div
                        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl ${prestation.background}`}
                      >
                        <Icon
                          size={17}
                          className={prestation.color}
                        />
                      </div>

                      <span className="text-sm font-semibold text-[#3F3A3C]">
                        {prestation.name}
                      </span>

                    </div>

                    <ArrowRight
                      size={16}
                      className="text-[#AAA2A4] transition-all duration-200 group-hover:translate-x-1 group-hover:text-[#EF5A4F]"
                    />
                  </Link>
                );
              })}

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}