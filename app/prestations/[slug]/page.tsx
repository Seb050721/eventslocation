import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { services } from "@/data/services";

import ServiceHero from "@/components/service/ServiceHero";
import PriceTable from "@/components/service/PriceTable";
import OptionsGrid from "@/components/service/OptionsGrid";
import EquipmentTable from "@/components/service/EquipmentTable";
import FAQAccordion from "@/components/service/FAQAccordion";
import ServiceHighlights from "@/components/service/ServiceHighlights";
import RelatedServices from "@/components/service/RelatedServices";

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
    (item) => item.id === slug
  );

  if (!service) {
    return {
      title: "Prestation introuvable",

      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const canonicalUrl =
    `${SITE_URL}/prestations/${service.id}`;

  /*
    On utilise en priorité les données SEO
    définies dans data/services.ts.

    Si elles n'existent pas, on génère
    automatiquement un titre et une description.
  */

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

    /* ========================================================
       CANONICAL
    ======================================================== */

    alternates: {
      canonical: canonicalUrl,
    },

    /* ========================================================
       OPEN GRAPH
    ======================================================== */

    openGraph: {
      type: "website",

      locale: "fr_FR",

      url: canonicalUrl,

      title,

      description,

      siteName:
        "Event'S Location",

      images: [
        {
          url: image,

          alt:
            `${service.title} - Event'S Location`,
        },
      ],
    },

    /* ========================================================
       TWITTER / PARTAGE
    ======================================================== */

    twitter: {
      card:
        "summary_large_image",

      title,

      description,

      images: [
        image,
      ],
    },

    /* ========================================================
       INDEXATION
    ======================================================== */

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
    (item) => item.id === slug
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
    <main className="relative min-h-screen overflow-hidden bg-[#050505] pb-16 pt-24 sm:pb-20 sm:pt-28 lg:pb-24 lg:pt-32">

      {/* =====================================================
          DONNÉES STRUCTURÉES SERVICE
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

      {/* =====================================================
          FIL D'ARIANE GOOGLE
      ===================================================== */}

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html:
            JSON.stringify(
              breadcrumbSchema
            ),
        }}
      />

      {/* =====================================================
          FAQ SCHEMA
      ===================================================== */}

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

      <div className="pointer-events-none absolute -left-40 top-0 h-[300px] w-[300px] rounded-full bg-green-500/10 blur-[130px] sm:-left-20 sm:h-[380px] sm:w-[380px] sm:blur-[160px] lg:left-0 lg:h-[450px] lg:w-[450px] lg:blur-[180px]" />

      <div className="pointer-events-none absolute -right-40 top-[420px] h-[300px] w-[300px] rounded-full bg-green-500/10 blur-[130px] sm:-right-20 sm:h-[380px] sm:w-[380px] sm:blur-[160px] lg:right-0 lg:top-[400px] lg:h-[450px] lg:w-[450px] lg:blur-[180px]" />

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

        {/* MATÉRIEL À L'UNITÉ */}

        <EquipmentTable
          equipments={
            service.equipments
          }
        />

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
            CTA
        =================================================== */}

        <section className="overflow-hidden rounded-[22px] border border-green-500/20 bg-gradient-to-br from-green-600 via-green-500 to-green-700 p-5 sm:rounded-[26px] sm:p-7 lg:rounded-[28px] lg:p-12">

          <div className="flex flex-col gap-7 lg:flex-row lg:items-center lg:justify-between lg:gap-10">

            <div className="max-w-2xl">

              <span className="inline-flex rounded-full bg-white/20 px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-white sm:px-4 sm:py-2 sm:text-xs sm:tracking-[0.25em] lg:text-sm lg:tracking-[0.3em]">
                Demande de devis
              </span>

              <h2 className="mt-4 text-2xl font-black leading-tight tracking-tight text-white sm:mt-5 sm:text-3xl lg:mt-6 lg:text-4xl">
                Vous souhaitez réserver{" "}
                {service.title} ?
              </h2>

              <p className="mt-4 text-sm leading-6 text-green-50 sm:text-base sm:leading-7 lg:mt-5 lg:text-lg lg:leading-8">
                Vérifiez la disponibilité
                de votre date et obtenez
                un devis personnalisé pour
                votre événement en Nièvre,
                Yonne ou Cher.
              </p>

            </div>

            <div className="grid w-full gap-3 sm:grid-cols-2 lg:w-auto lg:min-w-[280px] lg:grid-cols-1">

              <a
                href="/#contact"
                className="inline-flex min-h-[52px] items-center justify-center rounded-xl bg-white px-5 py-3.5 text-center text-sm font-bold text-green-700 transition hover:scale-[1.02] sm:text-base lg:rounded-2xl lg:px-6 lg:py-4 lg:text-lg"
              >
                Demander un devis
              </a>

              <a
                href="tel:+33643894570"
                className="inline-flex min-h-[52px] items-center justify-center rounded-xl border border-white/40 px-5 py-3.5 text-center text-sm font-semibold text-white transition hover:bg-white/10 sm:text-base lg:rounded-2xl lg:px-6 lg:py-4 lg:text-lg"
              >
                📞 06 43 89 45 70
              </a>

            </div>

          </div>

        </section>

      </div>

    </main>
  );
}