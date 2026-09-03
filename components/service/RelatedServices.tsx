import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

import { services } from "@/data/services";

interface Props {
  currentId: string;
}

const accents = [
  {
    badge: "border-[#4A9692]/20 bg-[#EDF7F6] text-[#347A77]",
    line: "bg-[#4A9692]",
  },
  {
    badge: "border-[#C34F72]/20 bg-[#FAEEF2] text-[#C34F72]",
    line: "bg-[#C34F72]",
  },
  {
    badge: "border-[#F3A044]/25 bg-[#FFF5E9] text-[#D8872F]",
    line: "bg-[#F3A044]",
  },
];

export default function RelatedServices({
  currentId,
}: Props) {
  const related = services
    .filter(
      (service) =>
        service.id !== currentId
    )
    .slice(0, 3);

  return (
    <section className="py-4 sm:py-6 lg:py-8">

      {/* =====================================================
          TITRE
      ===================================================== */}

      <div className="mx-auto mb-7 max-w-3xl text-center sm:mb-9">

        <span className="inline-flex rounded-full border border-[#C34F72]/20 bg-[#FAEEF2] px-4 py-2 text-[10px] font-bold uppercase tracking-[0.18em] text-[#C34F72] sm:text-xs">
          Découvrez aussi
        </span>

        <h2 className="mt-4 text-3xl font-black leading-tight tracking-tight text-[#1D1B1C] sm:text-4xl lg:text-[44px]">
          Vous pourriez
          <span className="text-[#EF5A4F]">
            {" "}aussi aimer
          </span>
        </h2>

        <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-[#716A6C] sm:text-base sm:leading-7">
          Complétez votre événement avec d&apos;autres prestations
          disponibles chez Event&apos;S Location.
        </p>

      </div>

      {/* =====================================================
          SERVICES
      ===================================================== */}

      <div className="grid gap-4 sm:gap-5 md:grid-cols-2 lg:grid-cols-3">

        {related.map(
          (service, index) => {
            const accent =
              accents[index % accents.length];

            return (
              <article
                key={service.id}
                className="group overflow-hidden rounded-[22px] border border-[#E9E2DD] bg-white shadow-[0_8px_26px_rgba(31,25,27,0.04)] transition-all duration-300 sm:rounded-3xl lg:hover:-translate-y-1 lg:hover:border-[#EF5A4F]/25 lg:hover:shadow-[0_16px_38px_rgba(31,25,27,0.08)]"
              >

                {/* ===============================================
                    IMAGE
                =============================================== */}

                <Link
                  href={`/prestations/${service.id}`}
                  className="block"
                >
                  <div className="relative aspect-[16/10] overflow-hidden">

                    <Image
                      src={service.cardImage}
                      alt={service.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover transition duration-700 lg:group-hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-black/5 to-transparent" />

                  </div>
                </Link>

                {/* ===============================================
                    CONTENU
                =============================================== */}

                <div className="p-5 sm:p-6">

                  {/* CATÉGORIE */}

                  <span
                    className={`inline-flex rounded-full border px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.16em] ${accent.badge}`}
                  >
                    {service.category}
                  </span>

                  {/* TITRE */}

                  <h3 className="mt-3 text-xl font-black leading-tight text-[#1D1B1C] transition-colors duration-200 group-hover:text-[#EF5A4F] sm:text-2xl">
                    {service.title}
                  </h3>

                  {/* DESCRIPTION */}

                  <p className="mt-3 line-clamp-3 text-sm leading-6 text-[#716A6C] sm:text-base sm:leading-7">
                    {service.shortDescription}
                  </p>

                  {/* ACCENT */}

                  <div
                    aria-hidden="true"
                    className={`mt-4 h-1 w-10 rounded-full ${accent.line}`}
                  />

                  {/* =============================================
                      PRIX + BOUTON
                  ============================================= */}

                  <div className="mt-5 flex items-center justify-between gap-3 border-t border-[#E9E2DD] pt-4">

                    <div className="min-w-0">

                      <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-[#9A9395] sm:text-[10px]">
                        À partir de
                      </p>

                      <p className="mt-1 whitespace-nowrap text-2xl font-black leading-none text-[#EF5A4F] sm:text-3xl">
                        {service.startingPrice} €
                      </p>

                    </div>

                    <Link
                      href={`/prestations/${service.id}`}
                      aria-label={`Voir la prestation ${service.title}`}
                      className="group/button inline-flex shrink-0 items-center justify-center gap-1.5 rounded-xl bg-[#1D1B1C] px-4 py-3 text-sm font-bold text-white transition-all duration-200 hover:bg-[#EF5A4F] sm:px-5 sm:text-base"
                    >
                      Voir

                      <ArrowRight
                        size={17}
                        className="transition-transform group-hover/button:translate-x-0.5"
                      />

                    </Link>

                  </div>

                </div>

              </article>
            );
          }
        )}

      </div>

    </section>
  );
}