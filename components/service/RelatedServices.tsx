import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

import { services } from "@/data/services";

interface Props {
  currentId: string;
}


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

      <div className="mx-auto mb-8 max-w-3xl text-center sm:mb-10 lg:mb-12">

        <span className="inline-flex rounded-full border border-green-500/30 bg-green-500/10 px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-green-400 sm:px-5 sm:py-2 sm:text-xs sm:tracking-[0.3em]">
          Découvrez aussi
        </span>

        <h2 className="mt-5 text-3xl font-black leading-tight tracking-tight text-white sm:mt-6 sm:text-4xl lg:text-5xl">
          Vous pourriez
          <span className="block text-green-400 sm:inline">
            {" "}aussi aimer
          </span>
        </h2>

      </div>

      {/* =====================================================
          SERVICES
      ===================================================== */}

      <div className="grid gap-4 sm:gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">

        {related.map(
          (service) => (
            <article
              key={service.id}
              className="group overflow-hidden rounded-[22px] border border-white/10 bg-white/[0.05] transition duration-300 sm:rounded-3xl lg:hover:-translate-y-1 lg:hover:border-green-500/30 lg:hover:shadow-[0_20px_60px_rgba(34,197,94,.10)]"
            >

              {/* ===============================================
                  IMAGE
              =============================================== */}

              <Link
                href={`/prestations/${service.id}`}
                className="block"
              >

                <div className="relative h-40 overflow-hidden sm:h-48 lg:h-56 xl:h-60">

                  <Image
                    src={
                      service.cardImage
                    }
                    alt={
                      service.title
                    }
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition duration-700 lg:group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/25 to-transparent" />

                </div>

              </Link>

              {/* ===============================================
                  CONTENU
              =============================================== */}

              <div className="p-5 sm:p-6 lg:p-7 xl:p-8">

                {/* CATÉGORIE */}

                <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-green-400 sm:text-xs sm:tracking-[0.3em]">
                  {service.category}
                </p>

                {/* TITRE */}

                <h3 className="mt-2 text-xl font-black leading-tight text-white sm:mt-3 sm:text-2xl lg:text-3xl">
                  {service.title}
                </h3>

                {/* DESCRIPTION */}

                <p className="mt-3 text-sm leading-6 text-gray-400 sm:mt-4 sm:text-base sm:leading-7 lg:mt-5">
                  {
                    service.shortDescription
                  }
                </p>

                {/* =============================================
                    PRIX + BOUTON
                ============================================= */}

                <div className="mt-5 flex items-center justify-between gap-3 border-t border-white/10 pt-4 sm:mt-6 sm:pt-5 lg:mt-7">

                  <div className="min-w-0">

                    <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-gray-500 sm:text-[10px]">
                      À partir de
                    </p>

                    <p className="mt-1 whitespace-nowrap text-2xl font-black leading-none text-green-400 sm:text-3xl">
                      {
                        service.startingPrice
                      }{" "}
                      €
                    </p>

                  </div>

                  <Link
                    href={`/prestations/${service.id}`}
                    aria-label={`Voir la prestation ${service.title}`}
                    className="group/button inline-flex shrink-0 items-center justify-center gap-1.5 rounded-xl bg-green-600 px-4 py-3 text-sm font-bold text-white transition hover:bg-green-700 sm:rounded-2xl sm:px-5 sm:text-base"
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
          )
        )}

      </div>

    </section>
  );
}