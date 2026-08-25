import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { realisations } from "@/data/realisations";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

const SITE_URL = "https://www.eventslocation.fr";

/* ============================================================
   GÉNÉRATION DES PAGES STATIQUES
============================================================ */

export async function generateStaticParams() {
  return realisations.map((realisation) => ({
    slug: realisation.id,
  }));
}

/* ============================================================
   SEO
============================================================ */

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;

  const realisation = realisations.find(
    (item) => item.id === slug
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
    title: realisation.seo.title,

    description:
      realisation.seo.description,

    alternates: {
      canonical: canonicalUrl,
    },

    openGraph: {
      type: "article",
      locale: "fr_FR",
      url: canonicalUrl,
      siteName: "Event'S Location",
      title: realisation.seo.title,
      description:
        realisation.seo.description,
      images: [
        {
          url: realisation.coverImage,
          alt: realisation.title,
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
    (item) => item.id === slug
  );

  if (!realisation) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#050505] pb-20 pt-28 text-white">

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* RETOUR */}

        <Link
          href="/#realisations"
          className="text-sm font-semibold text-green-400 hover:text-green-300"
        >
          ← Retour aux réalisations
        </Link>

        {/* HERO */}

        <section className="mt-6 overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.04]">

          <div className="relative aspect-[16/9] w-full overflow-hidden">

            <Image
              src={realisation.coverImage}
              alt={realisation.title}
              fill
              priority
              className="object-cover"
              sizes="100vw"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 lg:p-10">

              <p className="text-sm font-semibold text-green-400">
                {realisation.location},{" "}
                {realisation.department}
              </p>

              <h1 className="mt-2 max-w-4xl text-3xl font-black leading-tight sm:text-4xl lg:text-5xl">
                {realisation.title}
              </h1>

              <p className="mt-3 text-sm text-gray-300 sm:text-base">
                {realisation.date}
              </p>

            </div>

          </div>

        </section>

        {/* DESCRIPTION */}

        <section className="mt-8 rounded-[24px] border border-white/10 bg-white/[0.04] p-5 sm:p-7 lg:p-8">

          <h2 className="text-2xl font-black sm:text-3xl">
            Une prestation complète à{" "}
            {realisation.location}
          </h2>

          <p className="mt-4 max-w-4xl text-sm leading-7 text-gray-300 sm:text-base sm:leading-8">
            {realisation.description}
          </p>

        </section>

        {/* PRESTATIONS */}

        <section className="mt-8 rounded-[24px] border border-white/10 bg-white/[0.04] p-5 sm:p-7 lg:p-8">

          <h2 className="text-2xl font-black sm:text-3xl">
            Prestations réalisées
          </h2>

          <div className="mt-5 flex flex-wrap gap-3">
            {realisation.services.map(
              (service, index) => (
                <Link
                  key={`${service.id}-${index}`}
                  href={`/prestations/${service.id}`}
                  className="rounded-full border border-green-500/30 bg-green-500/10 px-4 py-2 text-sm font-semibold text-green-400 transition hover:bg-green-500/20"
                >
                  {service.label}
                </Link>
              )
            )}
          </div>

        </section>

        {/* GALERIE */}

        {realisation.images.length > 0 && (
          <section className="mt-8">

            <div className="mb-5">

              <h2 className="text-2xl font-black sm:text-3xl">
                Photos de l'événement
              </h2>

              <p className="mt-2 text-sm text-gray-400">
                Quelques images de notre installation à{" "}
                {realisation.location}.
              </p>

            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">

              {realisation.images.map(
                (image, index) => (
                  <div
                    key={image}
                    className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/10"
                  >

                    <Image
                      src={image}
                      alt={`${realisation.title} - photo ${index + 1}`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />

                  </div>
                )
              )}

            </div>

          </section>
        )}

        {/* CTA */}

        <section className="mt-10 overflow-hidden rounded-[28px] border border-green-500/20 bg-gradient-to-br from-green-600 via-green-500 to-green-700 p-6 sm:p-8 lg:p-10">

          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

            <div className="max-w-2xl">

              <h2 className="text-2xl font-black sm:text-3xl">
                Vous préparez un événement ?
              </h2>

              <p className="mt-3 text-sm leading-7 text-green-50 sm:text-base">
                Contactez Event&apos;S Location pour vérifier
                les disponibilités et obtenir un devis adapté
                à votre événement.
              </p>

            </div>

            <Link
              href="/#contact"
              className="inline-flex min-h-[52px] items-center justify-center rounded-xl bg-white px-6 py-3.5 text-sm font-bold text-green-700 transition hover:scale-[1.02] sm:text-base"
            >
              Demander un devis
            </Link>

          </div>

        </section>

      </div>

    </main>
  );
}