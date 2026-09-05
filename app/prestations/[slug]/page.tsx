import type { Metadata } from "next";
import Link from "next/link";
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

const SITE_URL = "https://www.eventslocation.fr";

/* ============================================================
   PAGES LOCALES PHOTOBOOTH
============================================================ */

const photoboothLocations = [
  {
    city: "Auxerre",
    department: "Yonne",
    href: "/location-evenementiel-auxerre",
  },
  {
    city: "Avallon",
    department: "Yonne",
    href: "/location-evenementiel-avallon",
  },
  {
    city: "Clamecy",
    department: "Nièvre",
    href: "/location-evenementiel-clamecy",
  },
  {
    city: "Nevers",
    department: "Nièvre",
    href: "/location-evenementiel-nevers",
  },
  {
    city: "Cosne-Cours-sur-Loire",
    department: "Nièvre",
    href: "/location-evenementiel-cosne-cours-sur-loire",
  },
];

/* ============================================================
   PAGES LOCALES MOBILIER
============================================================ */

const mobilierLocations = [
  {
    city: "Clamecy",
    department: "Nièvre",
    href: "/location-evenementiel-clamecy",
    title: "Tables et chaises à Clamecy",
    description:
      "Location de tables, chaises, mange-debout, tabourets et tente pour vos événements à Clamecy.",
  },
  {
    city: "Nevers",
    department: "Nièvre",
    href: "/location-evenementiel-nevers",
    title: "Mobilier événementiel à Nevers",
    description:
      "Tables, chaises et mobilier pour mariage, anniversaire, réception et événement à Nevers.",
  },
  {
    city: "Auxerre",
    department: "Yonne",
    href: "/location-evenementiel-auxerre",
    title: "Tables et chaises à Auxerre",
    description:
      "Location de mobilier, tables et chaises pour vos événements à Auxerre et dans les environs.",
  },
  {
    city: "Avallon",
    department: "Yonne",
    href: "/location-evenementiel-avallon",
    title: "Mobilier événementiel à Avallon",
    description:
      "Location de tables, chaises et mobilier pour mariages et réceptions dans le secteur d'Avallon.",
  },
  {
    city: "Cosne-Cours-sur-Loire",
    department: "Nièvre",
    href: "/location-evenementiel-cosne-cours-sur-loire",
    title: "Tables et chaises à Cosne",
    description:
      "Location de tables, chaises et mobilier événementiel à Cosne-Cours-sur-Loire et aux alentours.",
  },
];

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

  const service = services.find((item) => item.id === slug);

  if (!service) {
    return {
      title: "Prestation introuvable",

      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const canonicalUrl = `${SITE_URL}/prestations/${service.id}`;

  const title =
    service.seo?.title ??
    `${service.title} en Nièvre, Yonne et Cher`;

  const description =
    service.seo?.description ??
    `${service.description} Location pour mariages, anniversaires et événements en Nièvre, Yonne et Cher.`;

  const image = service.heroImage;

  return {
    title,

    description,

    alternates: {
      canonical: canonicalUrl,
    },

    openGraph: {
      type: "website",
      locale: "fr_FR",
      url: canonicalUrl,
      title,
      description,
      siteName: "Event'S Location",

      images: [
        {
          url: `${SITE_URL}${image}`,
          alt: `${service.title} - Event'S Location`,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`${SITE_URL}${image}`],
    },

    robots: {
      index: true,
      follow: true,

      googleBot: {
        index: true,
        follow: true,

        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
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

  const service = services.find((item) => item.id === slug);

  if (!service) {
    notFound();
  }

  const canonicalUrl = `${SITE_URL}/prestations/${service.id}`;

  /* ==========================================================
     DONNÉES STRUCTURÉES : SERVICE
  ========================================================== */

  const serviceSchema = {
    "@context": "https://schema.org",

    "@type": "Service",

    "@id": `${canonicalUrl}#service`,

    name: service.title,

    description:
      service.seo?.description ??
      service.description,

    url: canonicalUrl,

    image: `${SITE_URL}${service.heroImage}`,

    provider: {
      "@type": "LocalBusiness",

      "@id": `${SITE_URL}/#business`,

      name: "Event'S Location",

      url: SITE_URL,

      telephone: "+33643894570",

      email: "events.location@outlook.com",

      address: {
        "@type": "PostalAddress",

        streetAddress: "17 boulevard Dupin",

        addressLocality: "Varzy",

        postalCode: "58210",

        addressRegion: "Bourgogne-Franche-Comté",

        addressCountry: "FR",
      },
    },

    areaServed: [
      {
        "@type": "AdministrativeArea",
        name: "Nièvre",
      },
      {
        "@type": "AdministrativeArea",
        name: "Yonne",
      },
      {
        "@type": "AdministrativeArea",
        name: "Cher",
      },
    ],
  };

  /* ==========================================================
     FIL D'ARIANE GOOGLE
  ========================================================== */

  const breadcrumbSchema = {
    "@context": "https://schema.org",

    "@type": "BreadcrumbList",

    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Accueil",
        item: SITE_URL,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Prestations",
        item: `${SITE_URL}/#services`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: service.title,
        item: canonicalUrl,
      },
    ],
  };

  /* ==========================================================
     FAQ
  ========================================================== */

  const faqSchema =
    service.faq.length > 0
      ? {
          "@context": "https://schema.org",

          "@type": "FAQPage",

          mainEntity: service.faq.map((item) => ({
            "@type": "Question",

            name: item.question,

            acceptedAnswer: {
              "@type": "Answer",

              text: item.answer,
            },
          })),
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
          __html: JSON.stringify(serviceSchema),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />

      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqSchema),
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

        <ServiceHero service={service} />

        {/* AVANTAGES */}

        <ServiceHighlights items={service.included} />

        {/* TARIFS */}

        <PriceTable
          title="Nos tarifs"
          items={service.pricing}
        />

        {/* OPTIONS */}

        <OptionsGrid options={service.options} />

        {/* ===================================================
            COMPARATIF FLASH PHOTOBOOTH
        =================================================== */}

        {service.id === "photobooth" && (
          <FlashComparison />
        )}

        {/* ===================================================
            MATÉRIEL À L'UNITÉ
        =================================================== */}

        <EquipmentTable
          equipments={service.equipments}
        />

        {/* ===================================================
            GALERIE DU SERVICE
        =================================================== */}

        {service.gallery.length > 0 && (
          <EquipmentGallery
            images={service.gallery}
          />
        )}

        {/* ===================================================
            CONTENU SEO LOCAL
        =================================================== */}

        {service.seoContent && (
          <SeoContent
            title={service.seoContent.title}
            paragraphs={service.seoContent.paragraphs}
          />
        )}

        {/* ===================================================
            MAILLAGE LOCAL PHOTOBOOTH
        =================================================== */}

        {service.id === "photobooth" && (
          <section className="relative overflow-hidden rounded-[24px] border border-[#E9E2DD] bg-white p-5 shadow-[0_12px_35px_rgba(31,25,27,0.05)] sm:rounded-[28px] sm:p-7 lg:p-9">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-20 -top-20 h-[200px] w-[200px] rounded-full bg-[#4A9692]/8 blur-[90px]"
            />

            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-20 -left-10 h-[180px] w-[180px] rounded-full bg-[#EF5A4F]/8 blur-[90px]"
            />

            <div className="relative">
              <div className="max-w-3xl">
                <span className="inline-flex rounded-full border border-[#4A9692]/20 bg-[#EDF7F6] px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-[0.18em] text-[#347A77] sm:px-4 sm:py-2 sm:text-xs">
                  Nos secteurs
                </span>

                <h2 className="mt-4 text-2xl font-black leading-tight tracking-tight text-[#1D1B1C] sm:text-3xl lg:text-4xl">
                  Location de photobooth{" "}
                  <span className="text-[#EF5A4F]">
                    près de chez vous
                  </span>
                </h2>

                <p className="mt-4 text-sm leading-7 text-[#716A6C] sm:text-base">
                  Event&apos;S Location propose la location de
                  Photo Booth dans plusieurs secteurs de
                  l&apos;Yonne et de la Nièvre. Retrouvez les
                  informations correspondant à votre secteur.
                </p>
              </div>

              <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {photoboothLocations.map((location) => (
                  <Link
                    key={location.city}
                    href={location.href}
                    className="group rounded-2xl border border-[#E9E2DD] bg-[#FBFAF8] p-5 transition-all duration-200 hover:-translate-y-0.5 hover:border-[#EF5A4F]/35 hover:bg-white hover:shadow-[0_10px_30px_rgba(31,25,27,0.06)]"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#347A77]">
                          {location.department}
                        </p>

                        <h3 className="mt-2 text-lg font-black text-[#1D1B1C]">
                          Photobooth à {location.city}
                        </h3>
                      </div>

                      <span
                        aria-hidden="true"
                        className="text-xl font-bold text-[#EF5A4F] transition-transform duration-200 group-hover:translate-x-1"
                      >
                        →
                      </span>
                    </div>

                    <p className="mt-4 text-sm leading-6 text-[#716A6C]">
                      Location de photobooth pour mariage,
                      anniversaire, soirée et réception à{" "}
                      {location.city}.
                    </p>

                    <p className="mt-5 text-sm font-bold text-[#EF5A4F]">
                      Voir les informations locales
                    </p>
                  </Link>
                ))}
              </div>

              <div className="mt-7 rounded-2xl border border-[#4A9692]/15 bg-[#EDF7F6] p-5 sm:p-6">
                <p className="font-bold text-[#347A77]">
                  Vous êtes dans une autre commune ?
                </p>

                <p className="mt-2 text-sm leading-6 text-[#716A6C]">
                  Event&apos;S Location intervient également
                  dans de nombreuses communes autour de Varzy,
                  dans l&apos;Yonne, la Nièvre et selon les
                  demandes dans le Cher.
                </p>

                <Link
                  href="/#contact"
                  className="mt-4 inline-flex font-bold text-[#EF5A4F] transition hover:text-[#D94A41]"
                >
                  Demander un devis pour ma commune →
                </Link>
              </div>
            </div>
          </section>
        )}

        {/* ===================================================
            MAILLAGE LOCAL MOBILIER
        =================================================== */}

        {service.id === "mobilier" && (
          <section className="relative overflow-hidden rounded-[24px] border border-[#E9E2DD] bg-white p-5 shadow-[0_12px_35px_rgba(31,25,27,0.05)] sm:rounded-[28px] sm:p-7 lg:p-9">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-20 -top-20 h-[200px] w-[200px] rounded-full bg-[#4A9692]/8 blur-[90px]"
            />

            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-20 -left-10 h-[180px] w-[180px] rounded-full bg-[#F3A044]/8 blur-[90px]"
            />

            <div className="relative">
              <div className="max-w-3xl">
                <span className="inline-flex rounded-full border border-[#4A9692]/20 bg-[#EDF7F6] px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-[0.18em] text-[#347A77] sm:px-4 sm:py-2 sm:text-xs">
                  Location de mobilier
                </span>

                <h2 className="mt-4 text-2xl font-black leading-tight tracking-tight text-[#1D1B1C] sm:text-3xl lg:text-4xl">
                  Tables, chaises et mobilier{" "}
                  <span className="text-[#EF5A4F]">
                    près de chez vous
                  </span>
                </h2>

                <p className="mt-4 text-sm leading-7 text-[#716A6C] sm:text-base">
                  Besoin de tables, chaises, mange-debout,
                  tabourets ou d&apos;une tente pour votre
                  événement ? Retrouvez nos principaux secteurs
                  d&apos;intervention en Nièvre et dans
                  l&apos;Yonne.
                </p>
              </div>

              <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {mobilierLocations.map((location) => (
                  <Link
                    key={location.city}
                    href={location.href}
                    className="group rounded-2xl border border-[#E9E2DD] bg-[#FBFAF8] p-5 transition-all duration-200 hover:-translate-y-0.5 hover:border-[#EF5A4F]/35 hover:bg-white hover:shadow-[0_10px_30px_rgba(31,25,27,0.06)]"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#347A77]">
                          {location.department}
                        </p>

                        <h3 className="mt-2 text-lg font-black text-[#1D1B1C]">
                          {location.title}
                        </h3>
                      </div>

                      <span
                        aria-hidden="true"
                        className="text-xl font-bold text-[#EF5A4F] transition-transform duration-200 group-hover:translate-x-1"
                      >
                        →
                      </span>
                    </div>

                    <p className="mt-4 text-sm leading-6 text-[#716A6C]">
                      {location.description}
                    </p>

                    <p className="mt-5 text-sm font-bold text-[#EF5A4F]">
                      Voir les informations locales
                    </p>
                  </Link>
                ))}
              </div>

              <div className="mt-7 grid gap-4 lg:grid-cols-2">
                <div className="rounded-2xl border border-[#4A9692]/15 bg-[#EDF7F6] p-5 sm:p-6">
                  <p className="font-bold text-[#347A77]">
                    Besoin de plusieurs équipements ?
                  </p>

                  <p className="mt-2 text-sm leading-6 text-[#716A6C]">
                    Vous pouvez regrouper tables, chaises,
                    mange-debout, tabourets, tente et autres
                    prestations dans une même demande de devis.
                  </p>

                  <Link
                    href="/#contact"
                    className="mt-4 inline-flex font-bold text-[#EF5A4F] transition hover:text-[#D94A41]"
                  >
                    Demander un devis →
                  </Link>
                </div>

                <div className="rounded-2xl border border-[#F3A044]/20 bg-[#FFF8EE] p-5 sm:p-6">
                  <p className="font-bold text-[#1D1B1C]">
                    Vous êtes dans une autre commune ?
                  </p>

                  <p className="mt-2 text-sm leading-6 text-[#716A6C]">
                    Event&apos;S Location intervient également
                    dans de nombreuses communes autour de Varzy
                    et peut étudier les demandes plus éloignées
                    selon le matériel nécessaire.
                  </p>

                  <Link
                    href="/#contact"
                    className="mt-4 inline-flex font-bold text-[#EF5A4F] transition hover:text-[#D94A41]"
                  >
                    Vérifier votre secteur →
                  </Link>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* ===================================================
            FAQ
        =================================================== */}

        <FAQAccordion faq={service.faq} />

        {/* ===================================================
            PRESTATIONS ASSOCIÉES
        =================================================== */}

        <RelatedServices currentId={service.id} />

        {/* ===================================================
            CTA FINAL
        =================================================== */}

        <section className="relative overflow-hidden rounded-[24px] border border-[#EF5A4F]/20 bg-[#FFF0ED] p-5 shadow-[0_14px_40px_rgba(31,25,27,0.06)] sm:rounded-[28px] sm:p-7 lg:p-10">
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
                </span>{" "}
                ?
              </h2>

              <p className="mt-4 text-sm leading-6 text-[#716A6C] sm:text-base sm:leading-7">
                Vérifiez la disponibilité de votre date et
                obtenez un devis personnalisé pour votre
                événement en Nièvre, Yonne ou Cher.
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
                className="inline-flex min-h-[52px] items-center justify-center rounded-xl bg-[#EF5A4F] px-5 py-3.5 text-center text-sm font-bold text-white shadow-[0_10px_25px_rgba(239,90,79,0.22)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#D94A41] sm:text-base"
              >
                Demander un devis
              </Link>

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