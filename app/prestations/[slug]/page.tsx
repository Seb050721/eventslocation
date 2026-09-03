import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { services } from "@/data/services";

import ServiceHero from "@/components/service/ServiceHero";
import PriceTable from "@/components/service/PriceTable";
import OptionsGrid from "@/components/service/OptionsGrid";
import EquipmentTable from "@/components/service/EquipmentTable";
import EquipmentGallery from "@/components/service/EquipmentGallery";
import FAQAccordion from "@/components/service/FAQAccordion";
import ServiceHighlights from "@/components/service/ServiceHighlights";
import RelatedServices from "@/components/service/RelatedServices";
import SeoContent from "@/components/service/SeoContent";
import FlashComparison from "@/components/service/FlashComparison";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

/* ============================================================
   CONFIGURATION
============================================================ */

const SITE_URL =
  "https://www.eventslocation.fr";

/* ============================================================
   GÉNÉRATION DES PAGES STATIQUES
============================================================ */

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.id,
  }));
}

/* ============================================================
   SEO / METADATA
============================================================ */

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;

  const service = services.find(
    (item) =>
      item.id === slug
  );

  if (!service) {
    return {
      title:
        "Prestation introuvable",

      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const canonicalUrl =
    `${SITE_URL}/prestations/${service.id}`;

  const title =
    service.seo?.title ??
    `${service.title} en Nièvre, Yonne et Cher`;

  const description =
    service.seo?.description ??
    `${service.description} Location pour mariages, anniversaires et événements en Nièvre, Yonne et Cher.`;

  const image =
    service.heroImage;

  return {
    title,

    description,

    /* CANONICAL */

    alternates: {
      canonical:
        canonicalUrl,
    },

    /* OPEN GRAPH */

    openGraph: {
      type:
        "website",

      locale:
        "fr_FR",

      url:
        canonicalUrl,

      title,

      description,

      siteName:
        "Event'S Location",

      images: [
        {
          url:
            `${SITE_URL}${image}`,

          alt:
            `${service.title} - Event'S Location`,
        },
      ],
    },

    /* TWITTER */

    twitter: {
      card:
        "summary_large_image",

      title,

      description,

      images: [
        `${SITE_URL}${image}`,
      ],
    },

    /* INDEXATION */

    robots: {
      index: true,
      follow: true,

      googleBot: {
        index: true,
        follow: true,

        "max-image-preview":
          "large",

        "max-snippet":
          -1,

        "max-video-preview":
          -1,
      },
    },
  };
}

/* ============================================================
   PAGE PRESTATION
============================================================ */

export default async function ServicePage({
  params,
}: PageProps) {
  const { slug } = await params;

  const service = services.find(
    (item) =>
      item.id === slug
  );

  if (!service) {
    notFound();
  }

  const canonicalUrl =
    `${SITE_URL}/prestations/${service.id}`;

  /* ==========================================================
     DONNÉES STRUCTURÉES : SERVICE
  ========================================================== */

  const serviceSchema = {
    "@context":
      "https://schema.org",

    "@type":
      "Service",

    "@id":
      `${canonicalUrl}#service`,

    name:
      service.title,

    description:
      service.seo?.description ??
      service.description,

    url:
      canonicalUrl,

    image:
      `${SITE_URL}${service.heroImage}`,

    provider: {
      "@type":
        "LocalBusiness",

      "@id":
        `${SITE_URL}/#business`,

      name:
        "Event'S Location",

      url:
        SITE_URL,

      telephone:
        "+33643894570",

      address: {
        "@type":
          "PostalAddress",

        addressLocality:
          "Varzy",

        postalCode:
          "58210",

        addressRegion:
          "Bourgogne-Franche-Comté",

        addressCountry:
          "FR",
      },
    },

    areaServed: [
      {
        "@type":
          "AdministrativeArea",

        name:
          "Nièvre",
      },

      {
        "@type":
          "AdministrativeArea",

        name:
          "Yonne",
      },

      {
        "@type":
          "AdministrativeArea",

        name:
          "Cher",
      },
    ],
  };

  /* ==========================================================
     FIL D'ARIANE GOOGLE
  ========================================================== */

  const breadcrumbSchema = {
    "@context":
      "https://schema.org",

    "@type":
      "BreadcrumbList",

    itemListElement: [
      {
        "@type":
          "ListItem",

        position:
          1,

        name:
          "Accueil",

        item:
          SITE_URL,
      },

      {
        "@type":
          "ListItem",

        position:
          2,

        name:
          "Prestations",

        item:
          `${SITE_URL}/#services`,
      },

      {
        "@type":
          "ListItem",

        position:
          3,

        name:
          service.title,

        item:
          canonicalUrl,
      },
    ],
  };

  /* ==========================================================
     FAQ
  ========================================================== */

  const faqSchema =
    service.faq.length > 0
      ? {
          "@context":
            "https://schema.org",

          "@type":
            "FAQPage",

          mainEntity:
            service.faq.map(
              (item) => ({
                "@type":
                  "Question",

                name:
                  item.question,

                acceptedAnswer: {
                  "@type":
                    "Answer",

                  text:
                    item.answer,
                },
              })
            ),
        }
      : null;

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#FBFAF8] pb-16 pt-24 sm:pb-20 sm:pt-28 lg:pb-24 lg:pt-32">

      {/* =====================================================
          DONNÉES STRUCTURÉES
      ===================================================== */}

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html:
            JSON.stringify(
              serviceSchema
            ),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html:
            JSON.stringify(
              breadcrumbSchema
            ),
        }}
      />

      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html:
              JSON.stringify(
                faqSchema
              ),
          }}
        />
      )}

      {/* =====================================================
          HALOS
      ===================================================== */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-0 h-[300px] w-[300px] rounded-full bg-[#4A9692]/8 blur-[130px] sm:-left-20 sm:h-[380px] sm:w-[380px] sm:blur-[160px] lg:left-0 lg:h-[450px] lg:w-[450px] lg:blur-[180px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-[420px] h-[300px] w-[300px] rounded-full bg-[#EF5A4F]/8 blur-[130px] sm:-right-20 sm:h-[380px] sm:w-[380px] sm:blur-[160px] lg:right-0 lg:top-[400px] lg:h-[450px] lg:w-[450px] lg:blur-[180px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-[1200px] h-[260px] w-[260px] -translate-x-1/2 rounded-full bg-[#F3A044]/6 blur-[130px]"
      />

      {/* =====================================================
          CONTENU
      ===================================================== */}

      <div className="relative mx-auto flex max-w-7xl flex-col gap-8 px-4 sm:gap-10 sm:px-6 lg:gap-12 lg:px-8">

        {/* HERO */}

        <ServiceHero
          service={service}
        />

        {/* AVANTAGES */}

        <ServiceHighlights
          items={
            service.included
          }
        />

        {/* TARIFS */}

        <PriceTable
          title="Nos tarifs"
          items={
            service.pricing
          }
        />

        {/* OPTIONS */}

        <OptionsGrid
          options={
            service.options
          }
        />

        {/* ===================================================
            COMPARATIF FLASH PHOTOBOOTH
        =================================================== */}

        {service.id ===
          "photobooth" && (
          <FlashComparison />
        )}

        {/* ===================================================
            MATÉRIEL À L'UNITÉ
        =================================================== */}

        <EquipmentTable
          equipments={
            service.equipments
          }
        />

        {/* ===================================================
            GALERIE DU SERVICE
        =================================================== */}

        {service.gallery.length >
          0 && (
          <EquipmentGallery
            images={
              service.gallery
            }
          />
        )}

        {/* ===================================================
            CONTENU SEO LOCAL
        =================================================== */}

        {service.seoContent && (
          <SeoContent
            title={
              service.seoContent
                .title
            }
            paragraphs={
              service.seoContent
                .paragraphs
            }
          />
        )}

        {/* FAQ */}

        <FAQAccordion
          faq={
            service.faq
          }
        />

        {/* PRESTATIONS ASSOCIÉES */}

        <RelatedServices
          currentId={
            service.id
          }
        />

        {/* ===================================================
            CTA FINAL
        =================================================== */}

        <section className="relative overflow-hidden rounded-[24px] border border-[#EF5A4F]/20 bg-[#FFF0ED] p-5 shadow-[0_14px_40px_rgba(31,25,27,0.06)] sm:rounded-[28px] sm:p-7 lg:p-10">

          {/* HALOS CTA */}

          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-16 -top-16 h-[180px] w-[180px] rounded-full bg-[#EF5A4F]/10 blur-[90px]"
          />

          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-20 left-20 h-[170px] w-[170px] rounded-full bg-[#4A9692]/10 blur-[90px]"
          />

          <div className="relative flex flex-col gap-7 lg:flex-row lg:items-center lg:justify-between lg:gap-10">

            <div className="max-w-2xl">

              <span className="inline-flex rounded-full border border-[#EF5A4F]/20 bg-white px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-[0.18em] text-[#D94A41] sm:px-4 sm:py-2 sm:text-xs">
                Demande de devis
              </span>

              <h2 className="mt-4 text-2xl font-black leading-tight tracking-tight text-[#1D1B1C] sm:text-3xl lg:text-4xl">
                Vous souhaitez réserver{" "}
                <span className="text-[#EF5A4F]">
                  {service.title}
                </span>
                {" "}?
              </h2>

              <p className="mt-4 text-sm leading-6 text-[#716A6C] sm:text-base sm:leading-7">
                Vérifiez la disponibilité de votre date et obtenez un
                devis personnalisé pour votre événement en Nièvre,
                Yonne ou Cher.
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

              <a
                href="/#contact"
                className="inline-flex min-h-[52px] items-center justify-center rounded-xl bg-[#EF5A4F] px-5 py-3.5 text-center text-sm font-bold text-white shadow-[0_10px_25px_rgba(239,90,79,0.22)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#D94A41] sm:text-base"
              >
                Demander un devis
              </a>

              <a
                href="tel:+33643894570"
                className="inline-flex min-h-[52px] items-center justify-center rounded-xl border border-[#4A9692]/25 bg-white px-5 py-3.5 text-center text-sm font-semibold text-[#347A77] shadow-[0_8px_22px_rgba(31,25,27,0.04)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#EDF7F6] sm:text-base"
              >
                06 43 89 45 70
              </a>

            </div>

          </div>

        </section>

      </div>

    </main>
  );
}