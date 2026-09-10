import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import {
  realisations,
  type Realisation,
} from "@/data/realisations";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

interface RealisationService {
  id: string;
  label: string;
}

const SITE_URL = "https://www.eventslocation.fr";

/* ============================================================
   GÉNÉRATION DES PAGES STATIQUES
============================================================ */

export async function generateStaticParams() {
  return realisations.map(
    (realisation: Realisation) => ({
      slug: realisation.id,
    })
  );
}

/* ============================================================
   SEO
============================================================ */

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;

  const realisation = realisations.find(
    (item: Realisation) =>
      item.id === slug
  );

  if (!realisation) {
    return {
      title: "Réalisation introuvable",

      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const canonicalUrl =
    `${SITE_URL}/realisations/${realisation.id}`;

  return {
    title:
      realisation.seo.title,

    description:
      realisation.seo.description,

    alternates: {
      canonical:
        canonicalUrl,
    },

    openGraph: {
      type:
        "article",

      locale:
        "fr_FR",

      url:
        canonicalUrl,

      siteName:
        "Event'S Location",

      title:
        realisation.seo.title,

      description:
        realisation.seo.description,

      images: [
        {
          url:
            `${SITE_URL}${realisation.coverImage}`,

          alt:
            realisation.title,
        },
      ],
    },

    robots: {
      index: true,
      follow: true,
    },
  };
}

/* ============================================================
   PAGE
============================================================ */

export default async function RealisationPage({
  params,
}: PageProps) {
  const { slug } = await params;

  const realisation = realisations.find(
    (item: Realisation) =>
      item.id === slug
  );

  if (!realisation) {
    notFound();
  }

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#FBFAF8] pb-20 pt-28 text-[#1D1B1C]">
      {/* =====================================================
          HALOS
      ===================================================== */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-36 top-10 h-[300px] w-[300px] rounded-full bg-[#4A9692]/10 blur-[130px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 top-[420px] h-[320px] w-[320px] rounded-full bg-[#EF5A4F]/10 blur-[140px]"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* =====================================================
            RETOUR
        ===================================================== */}

        <Link
          href="/#realisations"
          className="inline-flex items-center gap-2 text-sm font-bold text-[#347A77] transition hover:text-[#EF5A4F]"
        >
          <span aria-hidden="true">←</span>
          Retour aux réalisations
        </Link>

        {/* =====================================================
            HERO
        ===================================================== */}

        <section className="mt-6 overflow-hidden rounded-[28px] border border-[#E9E2DD] bg-white shadow-[0_16px_45px_rgba(31,25,27,0.06)]">
          <div className="relative aspect-[16/9] w-full overflow-hidden">
            <Image
              src={realisation.coverImage}
              alt={realisation.title}
              fill
              priority
              className="object-cover"
              sizes="100vw"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#1D1B1C]/85 via-[#1D1B1C]/25 to-transparent" />

            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 lg:p-10">
              <div className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-3.5 py-1.5 backdrop-blur-sm">
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-white sm:text-sm">
                  {realisation.location},{" "}
                  {realisation.department}
                </p>
              </div>

              <h1 className="mt-4 max-w-4xl text-3xl font-black leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
                {realisation.title}
              </h1>

              <p className="mt-3 text-sm font-medium text-white/80 sm:text-base">
                {realisation.date}
              </p>
            </div>
          </div>
        </section>

        {/* =====================================================
            DESCRIPTION
        ===================================================== */}

        <section className="mt-8 rounded-[24px] border border-[#E9E2DD] bg-white p-5 shadow-[0_12px_35px_rgba(31,25,27,0.05)] sm:p-7 lg:p-8">
          <span className="inline-flex rounded-full border border-[#4A9692]/20 bg-[#EDF7F6] px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-[0.18em] text-[#347A77] sm:px-4 sm:py-2 sm:text-xs">
            Réalisation Event&apos;S Location
          </span>

          <h2 className="mt-4 text-2xl font-black tracking-tight text-[#1D1B1C] sm:text-3xl">
            Une prestation complète à{" "}
            <span className="text-[#EF5A4F]">
              {realisation.location}
            </span>
          </h2>

          <p className="mt-4 max-w-4xl text-sm leading-7 text-[#716A6C] sm:text-base sm:leading-8">
            {realisation.description}
          </p>
        </section>

        {/* =====================================================
            PRESTATIONS
        ===================================================== */}

        <section className="mt-8 rounded-[24px] border border-[#E9E2DD] bg-white p-5 shadow-[0_12px_35px_rgba(31,25,27,0.05)] sm:p-7 lg:p-8">
          <div className="max-w-3xl">
            <span className="inline-flex rounded-full border border-[#EF5A4F]/20 bg-[#FFF0ED] px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-[0.18em] text-[#D94A41] sm:px-4 sm:py-2 sm:text-xs">
              Équipements
            </span>

            <h2 className="mt-4 text-2xl font-black tracking-tight text-[#1D1B1C] sm:text-3xl">
              Prestations réalisées
            </h2>

            <p className="mt-3 text-sm leading-7 text-[#716A6C] sm:text-base">
              Découvrez les équipements utilisés pour cette installation à{" "}
              {realisation.location}.
            </p>
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            {realisation.services.map(
              (
                service: RealisationService,
                index: number
              ) => (
                <Link
                  key={`${service.id}-${index}`}
                  href={`/prestations/${service.id}`}
                  className="group inline-flex items-center gap-2 rounded-full border border-[#EF5A4F]/20 bg-[#FFF0ED] px-4 py-2.5 text-sm font-bold text-[#D94A41] transition-all duration-200 hover:-translate-y-0.5 hover:border-[#EF5A4F]/35 hover:bg-white"
                >
                  {service.label}

                  <span
                    aria-hidden="true"
                    className="transition-transform duration-200 group-hover:translate-x-0.5"
                  >
                    →
                  </span>
                </Link>
              )
            )}
          </div>
        </section>

        {/* =====================================================
            GALERIE
        ===================================================== */}

        {realisation.images.length > 0 && (
          <section className="mt-8">
            <div className="mb-6 max-w-3xl">
              <span className="inline-flex rounded-full border border-[#4A9692]/20 bg-[#EDF7F6] px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-[0.18em] text-[#347A77] sm:px-4 sm:py-2 sm:text-xs">
                Galerie
              </span>

              <h2 className="mt-4 text-2xl font-black tracking-tight text-[#1D1B1C] sm:text-3xl">
                Photos de l&apos;événement
              </h2>

              <p className="mt-3 text-sm leading-7 text-[#716A6C] sm:text-base">
                Quelques images de notre installation à{" "}
                {realisation.location}.
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {realisation.images.map(
                (
                  image: string,
                  index: number
                ) => (
                  <div
                    key={`${image}-${index}`}
                    className="group relative aspect-[4/3] overflow-hidden rounded-[22px] border border-[#E9E2DD] bg-white shadow-[0_10px_28px_rgba(31,25,27,0.05)]"
                  >
                    <Image
                      src={image}
                      alt={`${realisation.title} - photo ${index + 1}`}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                )
              )}
            </div>
          </section>
        )}

        {/* =====================================================
            CTA
        ===================================================== */}

        <section className="relative mt-10 overflow-hidden rounded-[28px] border border-[#EF5A4F]/20 bg-[#FFF0ED] p-6 shadow-[0_14px_40px_rgba(31,25,27,0.06)] sm:p-8 lg:p-10">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-16 -top-16 h-[180px] w-[180px] rounded-full bg-[#EF5A4F]/10 blur-[90px]"
          />

          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-20 left-20 h-[170px] w-[170px] rounded-full bg-[#4A9692]/10 blur-[90px]"
          />

          <div className="relative flex flex-col gap-7 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <span className="inline-flex rounded-full border border-[#EF5A4F]/20 bg-white px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-[0.18em] text-[#D94A41] sm:px-4 sm:py-2 sm:text-xs">
                Votre événement
              </span>

              <h2 className="mt-4 text-2xl font-black tracking-tight text-[#1D1B1C] sm:text-3xl lg:text-4xl">
                Vous préparez un événement à{" "}
                <span className="text-[#EF5A4F]">
                  {realisation.location}
                </span>{" "}
                ou dans les environs ?
              </h2>

              <p className="mt-4 text-sm leading-7 text-[#716A6C] sm:text-base">
                Contactez Event&apos;S Location pour vérifier les
                disponibilités et obtenir un devis adapté à votre événement.
              </p>

              <div
                aria-hidden="true"
                className="mt-5 flex gap-2"
              >
                <span className="h-2 w-2 rounded-full bg-[#4A9692]" />
                <span className="h-2 w-2 rounded-full bg-[#87954E]" />
                <span className="h-2 w-2 rounded-full bg-[#EF5A4F]" />
                <span className="h-2 w-2 rounded-full bg-[#C34F72]" />
                <span className="h-2 w-2 rounded-full bg-[#F3A044]" />
              </div>
            </div>

            <div className="grid w-full gap-3 sm:grid-cols-2 lg:w-auto lg:min-w-[300px] lg:grid-cols-1">
              <Link
                href="/#contact"
                className="inline-flex min-h-[52px] items-center justify-center rounded-xl bg-[#EF5A4F] px-6 py-3.5 text-center text-sm font-bold text-white shadow-[0_10px_25px_rgba(239,90,79,0.22)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#D94A41] sm:text-base"
              >
                Demander un devis
              </Link>

              <Link
                href="/disponibilites"
                className="inline-flex min-h-[52px] items-center justify-center rounded-xl border border-[#4A9692]/25 bg-white px-6 py-3.5 text-center text-sm font-bold text-[#347A77] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#EDF7F6] sm:text-base"
              >
                Vérifier les disponibilités
              </Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}