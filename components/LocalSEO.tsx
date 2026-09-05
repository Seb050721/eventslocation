import Link from "next/link";

import {
  MapPin,
  Camera,
  Speaker,
  Projector,
  Armchair,
  Sparkles,
  ArrowRight,
  Navigation,
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

const localPages = [
  {
    city: "Auxerre",
    department: "Yonne",
    href: "/location-evenementiel-auxerre",
    description:
      "Photobooth, sonorisation, mobilier, projection et effets pour vos événements à Auxerre.",
  },
  {
    city: "Avallon",
    department: "Yonne",
    href: "/location-evenementiel-avallon",
    description:
      "Location de matériel pour mariages, anniversaires et réceptions à Avallon et aux alentours.",
  },
  {
    city: "Nevers",
    department: "Nièvre",
    href: "/location-evenementiel-nevers",
    description:
      "Photobooth, sonorisation, tables, chaises, projection et matériel événementiel pour vos événements à Nevers.",
  },
  {
    city: "Clamecy",
    department: "Nièvre",
    href: "/location-evenementiel-clamecy",
    description:
    "Photobooth, sonorisation, tables, chaises, barnum et matériel événementiel pour vos événements à Clamecy.",
  },
  {
    city: "Cosne-Cours-sur-Loire",
    department: "Nièvre",
    href: "/location-evenementiel-cosne-cours-sur-loire",
    description:
    "Photobooth, sonorisation, mobilier, projection et matériel événementiel pour vos événements à Cosne-Cours-sur-Loire.",
  },
];

export default function LocalSEO() {
  return (
    <section className="relative overflow-hidden bg-[#F7F3EF] py-14 sm:py-16 lg:py-20">
      {/* =====================================================
          HALOS
      ===================================================== */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-10 h-[280px] w-[280px] rounded-full bg-[#4A9692]/10 blur-[120px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 bottom-0 h-[300px] w-[300px] rounded-full bg-[#EF5A4F]/10 blur-[130px]"
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* =====================================================
            INTRO
        ===================================================== */}

        <div className="grid items-start gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
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
                Varzy • Clamecy • Auxerre • Nevers • Avallon • Nièvre • Yonne • Cher
              </span>
            </div>

            <h2 className="mt-5 max-w-2xl text-3xl font-black leading-tight tracking-tight text-[#1D1B1C] sm:text-4xl lg:text-[42px]">
              Location de matériel événementiel
              <span className="block text-[#EF5A4F]">
                près de chez vous
              </span>
            </h2>

            <p className="mt-5 max-w-2xl text-sm leading-7 text-[#716A6C] sm:text-base">
              Basée à Varzy, Event&apos;S Location propose la location de
              matériel pour les mariages, anniversaires, réceptions,
              associations et événements professionnels.
            </p>

            <p className="mt-4 max-w-2xl text-sm leading-7 text-[#716A6C] sm:text-base">
              Nous intervenons notamment dans les secteurs de{" "}
              <strong className="font-semibold text-[#3F3A3C]">
                Varzy
              </strong>
              ,{" "}
              <strong className="font-semibold text-[#3F3A3C]">
                Clamecy
              </strong>
              ,{" "}
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
              .
            </p>

            <p className="mt-4 max-w-2xl text-sm leading-7 text-[#716A6C] sm:text-base">
              Photobooth, sonorisation, mobilier, vidéoprojecteur,
              écrans, machines à effets ou Smoke Puff : vous pouvez
              louer un seul équipement ou regrouper plusieurs besoins
              dans une même demande.
            </p>

            {/* =================================================
                TYPES D'ÉVÉNEMENTS
            ================================================= */}

            <div className="mt-6 flex flex-wrap gap-2">
              {[
                "Mariages",
                "Anniversaires",
                "Réceptions",
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

            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                href="/#contact"
                className="group inline-flex items-center gap-2 rounded-xl bg-[#EF5A4F] px-5 py-3.5 text-sm font-bold text-white shadow-[0_10px_24px_rgba(239,90,79,0.18)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#D94A41]"
              >
                Demander un devis

                <ArrowRight
                  size={17}
                  className="transition-transform duration-200 group-hover:translate-x-1"
                />
              </Link>

              <Link
                href="/disponibilites"
                className="group inline-flex items-center gap-2 rounded-xl border border-[#4A9692]/30 bg-white px-5 py-3.5 text-sm font-bold text-[#347A77] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#EDF7F6]"
              >
                Vérifier les disponibilités
              </Link>
            </div>
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

        {/* =====================================================
            ZONES D'INTERVENTION
        ===================================================== */}

        <div className="mt-14 border-t border-[#E4DCD7] pt-12 lg:mt-16">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 text-[#347A77]">
              <Navigation size={17} />

              <span className="text-xs font-bold uppercase tracking-[0.18em]">
                Zones d&apos;intervention
              </span>
            </div>

            <h2 className="mt-3 text-2xl font-black tracking-tight text-[#1D1B1C] sm:text-3xl">
              Retrouvez nos solutions événementielles par secteur
            </h2>

            <p className="mt-4 max-w-2xl text-sm leading-7 text-[#716A6C] sm:text-base">
              Découvrez les prestations et équipements disponibles pour
              organiser votre événement dans votre secteur.
            </p>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {localPages.map((location) => (
              <Link
                key={location.city}
                href={location.href}
                className="group rounded-[22px] border border-[#E4DCD7] bg-white p-6 transition-all duration-200 hover:-translate-y-1 hover:border-[#EF5A4F]/30 hover:shadow-[0_12px_30px_rgba(31,25,27,0.06)]"
              >
                <div className="flex items-start justify-between gap-5">
                  <div>
                    <div className="flex items-center gap-2 text-[#347A77]">
                      <MapPin size={16} />

                      <span className="text-xs font-bold uppercase tracking-[0.16em]">
                        {location.department}
                      </span>
                    </div>

                    <h3 className="mt-3 text-xl font-black text-[#1D1B1C]">
                      Location événementielle à {location.city}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-[#716A6C]">
                      {location.description}
                    </p>
                  </div>

                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#FFF0ED]">
                    <ArrowRight
                      size={18}
                      className="text-[#EF5A4F] transition-transform duration-200 group-hover:translate-x-1"
                    />
                  </div>
                </div>

                <p className="mt-5 text-sm font-bold text-[#EF5A4F]">
                  Voir les prestations à {location.city} →
                </p>
              </Link>
            ))}
          </div>

          {/* =================================================
              AUTRES SECTEURS
          ================================================= */}

          <div className="mt-6 rounded-2xl border border-[#E4DCD7] bg-[#FBFAF8] px-5 py-4">
            <p className="text-sm leading-7 text-[#716A6C]">
              Event&apos;S Location intervient également dans les
              secteurs de{" "}
              <strong className="font-semibold text-[#3F3A3C]">
                Cosne-Cours-sur-Loire
              </strong>
              ,{" "}
              
              et plus largement dans la Nièvre, l&apos;Yonne et le Cher,
              selon le matériel et le lieu de l&apos;événement.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}