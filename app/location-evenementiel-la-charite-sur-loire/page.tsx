import type { Metadata } from "next";
import Link from "next/link";

const SITE_URL = "https://www.eventslocation.fr";

const PAGE_URL =
  `${SITE_URL}/location-evenementiel-la-charite-sur-loire`;

export const metadata: Metadata = {
  title:
    "Location Photobooth La Charité-sur-Loire | Event'S Location",

  description:
    "Location de photobooth à La Charité-sur-Loire dès 169 €. Photobooth avec impressions, sonorisation, tables, chaises, vidéoprojecteur et matériel événementiel.",

  alternates: {
    canonical: PAGE_URL,
  },

  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: PAGE_URL,
    title:
      "Location Photobooth La Charité-sur-Loire | Event'S Location",
    description:
      "Photobooth, sonorisation, mobilier et matériel événementiel à La Charité-sur-Loire et dans les environs.",
    siteName: "Event'S Location",
    images: [
      {
        url: `${SITE_URL}/images/services/photobooth-hero.webp`,
        alt: "Location de photobooth à La Charité-sur-Loire",
      },
    ],
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

const services = [
  {
    title: "Photobooth",
    href: "/prestations/photobooth",
    description:
      "Location de photobooth avec photos numériques et formules avec impressions pour mariages, anniversaires et soirées.",
    price: "Dès 169 €",
  },
  {
    title: "Sonorisation",
    href: "/prestations/sonorisation",
    description:
      "Location de matériel de sonorisation pour vos soirées, anniversaires, réceptions et événements.",
    price: null,
  },
  {
    title: "Tables et chaises",
    href: "/prestations/mobilier",
    description:
      "Tables rondes ou rectangulaires, chaises, mange-debout, tabourets et mobilier pour vos réceptions.",
    price: null,
  },
  {
    title: "Projection vidéo",
    href: "/prestations/projection",
    description:
      "Vidéoprojecteur et écran pour diffuser vos photos, vidéos, présentations ou animations.",
    price: null,
  },
  {
    title: "Machines à effets",
    href: "/prestations/effets",
    description:
      "Machines à fumée et autres effets pour compléter l'ambiance de votre événement.",
    price: null,
  },
  {
    title: "Smoke Puff",
    href: "/prestations/feux",
    description:
      "Feux de jour Smoke Puff pour créer un effet visuel marquant lors de votre événement.",
    price: null,
  },
];

const faq = [
  {
    question:
      "Peut-on louer un photobooth à La Charité-sur-Loire ?",
    answer:
      "Oui. Event'S Location propose la location de photobooth à La Charité-sur-Loire et dans les communes environnantes. Plusieurs formules sont disponibles, du numérique uniquement jusqu'aux formules avec impressions photo.",
  },
  {
    question:
      "Quel est le prix d'un photobooth à La Charité-sur-Loire ?",
    answer:
      "Nos formules photobooth commencent à 169 € en version numérique. Des formules avec 100, 150, 200, 300 ou 400 impressions sont également disponibles.",
  },
  {
    question:
      "Le photobooth convient-il pour un mariage ou un anniversaire ?",
    answer:
      "Oui. Le photobooth peut être utilisé pour un mariage, un anniversaire, une soirée privée, une réception ou un événement d'entreprise. Le cadre photo est personnalisé pour l'événement.",
  },
  {
    question:
      "Proposez-vous aussi des tables et des chaises à La Charité-sur-Loire ?",
    answer:
      "Oui. Event'S Location propose notamment des tables rondes et rectangulaires, des chaises, des mange-debout et des tabourets pour les événements.",
  },
  {
    question:
      "Peut-on louer plusieurs équipements pour le même événement ?",
    answer:
      "Oui. Vous pouvez regrouper plusieurs prestations dans votre demande : photobooth, sonorisation, mobilier, projection vidéo, machines à effets ou Smoke Puff.",
  },
];

export default function LaChariteSurLoirePage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",

    "@id": `${PAGE_URL}#service`,

    name:
      "Location de photobooth et matériel événementiel à La Charité-sur-Loire",

    description:
      "Location de photobooth, sonorisation, mobilier, vidéoprojecteur et matériel événementiel à La Charité-sur-Loire.",

    url: PAGE_URL,

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

    areaServed: {
      "@type": "City",
      name: "La Charité-sur-Loire",
    },

    hasOfferCatalog: {
      "@type": "OfferCatalog",

      name: "Location de matériel événementiel",

      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name:
              "Location de photobooth à La Charité-sur-Loire",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name:
              "Location de sonorisation à La Charité-sur-Loire",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name:
              "Location de mobilier événementiel à La Charité-sur-Loire",
          },
        },
      ],
    },
  };

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
        name: "Location événementiel La Charité-sur-Loire",
        item: PAGE_URL,
      },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",

    "@type": "FAQPage",

    mainEntity: faq.map((item) => ({
      "@type": "Question",

      name: item.question,

      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#FBFAF8] pb-16 pt-24 sm:pb-20 sm:pt-28 lg:pb-24 lg:pt-32">
      {/* DONNÉES STRUCTURÉES */}

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

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />

      {/* HALOS */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 top-10 h-[350px] w-[350px] rounded-full bg-[#4A9692]/8 blur-[150px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 top-[500px] h-[400px] w-[400px] rounded-full bg-[#EF5A4F]/8 blur-[160px]"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* ===================================================
            HERO
        =================================================== */}

        <section className="overflow-hidden rounded-[28px] border border-[#E9E2DD] bg-white p-6 shadow-[0_15px_45px_rgba(31,25,27,0.06)] sm:p-8 lg:p-12">
          <div className="max-w-4xl">
            <span className="inline-flex rounded-full border border-[#4A9692]/20 bg-[#EDF7F6] px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[#347A77]">
              Nièvre • La Charité-sur-Loire
            </span>

            <h1 className="mt-5 text-3xl font-black leading-tight tracking-tight text-[#1D1B1C] sm:text-4xl lg:text-5xl">
              Location de photobooth à{" "}
              <span className="text-[#EF5A4F]">
                La Charité-sur-Loire
              </span>
            </h1>

            <p className="mt-6 max-w-3xl text-base leading-8 text-[#716A6C] sm:text-lg">
              Vous recherchez un photobooth à
              La Charité-sur-Loire pour un mariage, un
              anniversaire, une soirée ou une réception ?
              Event&apos;S Location propose plusieurs formules
              de location avec photos numériques et impressions
              directement pendant votre événement.
            </p>

            <p className="mt-4 max-w-3xl text-base leading-8 text-[#716A6C]">
              Basés à Varzy, nous proposons également du
              matériel de sonorisation, des tables, des chaises,
              du mobilier événementiel, de la projection vidéo
              et des machines à effets.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/#contact"
                className="inline-flex min-h-[52px] items-center justify-center rounded-xl bg-[#EF5A4F] px-6 py-3.5 text-center font-bold text-white shadow-[0_10px_25px_rgba(239,90,79,0.22)] transition hover:-translate-y-0.5 hover:bg-[#D94A41]"
              >
                Demander un devis
              </Link>

              <Link
                href="/disponibilites"
                className="inline-flex min-h-[52px] items-center justify-center rounded-xl border border-[#4A9692]/25 bg-[#EDF7F6] px-6 py-3.5 text-center font-bold text-[#347A77] transition hover:-translate-y-0.5 hover:bg-white"
              >
                Vérifier une disponibilité
              </Link>
            </div>
          </div>
        </section>

        {/* ===================================================
            PHOTOBOOTH
        =================================================== */}

        <section className="mt-10 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-[28px] border border-[#E9E2DD] bg-white p-6 sm:p-8 lg:p-10">
            <span className="text-xs font-black uppercase tracking-[0.18em] text-[#EF5A4F]">
              Photobooth
            </span>

            <h2 className="mt-3 text-2xl font-black text-[#1D1B1C] sm:text-3xl">
              Votre photobooth pour un événement à
              La Charité-sur-Loire
            </h2>

            <p className="mt-5 leading-7 text-[#716A6C]">
              Le photobooth permet à vos invités de réaliser
              leurs photos pendant votre événement et de
              conserver un souvenir personnalisé. Event&apos;S
              Location propose une formule numérique dès 169 €
              ainsi que plusieurs formules avec impressions.
            </p>

            <p className="mt-4 leading-7 text-[#716A6C]">
              L&apos;installation est comprise, le cadre photo
              est personnalisé pour votre événement et une
              galerie photo en ligne est également incluse.
            </p>

            <Link
              href="/prestations/photobooth"
              className="mt-6 inline-flex font-bold text-[#EF5A4F] transition hover:text-[#D94A41]"
            >
              Voir nos formules Photobooth →
            </Link>
          </div>

          <div className="rounded-[28px] border border-[#EF5A4F]/20 bg-[#FFF0ED] p-6 sm:p-8">
            <p className="text-sm font-bold text-[#D94A41]">
              Location Photobooth
            </p>

            <p className="mt-3 text-4xl font-black text-[#1D1B1C]">
              dès 169 €
            </p>

            <p className="mt-4 text-sm leading-7 text-[#716A6C]">
              Formule numérique ou formules avec 100, 150, 200,
              300 ou 400 impressions.
            </p>

            <ul className="mt-6 space-y-3 text-sm font-medium text-[#1D1B1C]">
              <li>✓ Installation comprise</li>
              <li>✓ Cadre photo personnalisé</li>
              <li>✓ Galerie photo en ligne</li>
              <li>✓ Assistance si besoin</li>
            </ul>
          </div>
        </section>

        {/* ===================================================
            SERVICES
        =================================================== */}

        <section className="mt-12">
          <div className="max-w-3xl">
            <span className="text-xs font-black uppercase tracking-[0.18em] text-[#347A77]">
              Nos prestations
            </span>

            <h2 className="mt-3 text-2xl font-black text-[#1D1B1C] sm:text-3xl lg:text-4xl">
              Location de matériel événementiel à
              La Charité-sur-Loire
            </h2>

            <p className="mt-4 leading-7 text-[#716A6C]">
              Vous pouvez louer une prestation seule ou
              regrouper plusieurs équipements pour votre
              événement.
            </p>
          </div>

          <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <Link
                key={service.title}
                href={service.href}
                className="group rounded-2xl border border-[#E9E2DD] bg-white p-5 transition-all duration-200 hover:-translate-y-0.5 hover:border-[#EF5A4F]/30 hover:shadow-[0_10px_30px_rgba(31,25,27,0.06)]"
              >
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-lg font-black text-[#1D1B1C]">
                    {service.title}
                  </h3>

                  <span className="font-black text-[#EF5A4F]">
                    →
                  </span>
                </div>

                {service.price && (
                  <p className="mt-2 text-sm font-black text-[#EF5A4F]">
                    {service.price}
                  </p>
                )}

                <p className="mt-3 text-sm leading-6 text-[#716A6C]">
                  {service.description}
                </p>
              </Link>
            ))}
          </div>
        </section>

        {/* ===================================================
            MARIAGE / ANNIVERSAIRE
        =================================================== */}

        <section className="mt-12 grid gap-6 lg:grid-cols-2">
          <div className="rounded-[28px] border border-[#E9E2DD] bg-white p-6 sm:p-8">
            <h2 className="text-2xl font-black text-[#1D1B1C]">
              Photobooth pour mariage à
              La Charité-sur-Loire
            </h2>

            <p className="mt-4 leading-7 text-[#716A6C]">
              Le photobooth est une animation idéale pour
              permettre aux invités de réaliser leurs propres
              photos pendant un mariage. Le cadre peut être
              personnalisé en fonction de votre événement et les
              formules avec impressions permettent aux invités
              de repartir directement avec leurs photos.
            </p>

            <Link
              href="/prestations/photobooth"
              className="mt-5 inline-flex font-bold text-[#EF5A4F]"
            >
              Découvrir le Photobooth →
            </Link>
          </div>

          <div className="rounded-[28px] border border-[#4A9692]/15 bg-[#EDF7F6] p-6 sm:p-8">
            <h2 className="text-2xl font-black text-[#1D1B1C]">
              Photobooth pour anniversaire et soirée
            </h2>

            <p className="mt-4 leading-7 text-[#716A6C]">
              Anniversaire, soirée privée, réception ou
              événement professionnel : nos différentes
              formules permettent d&apos;adapter le nombre
              d&apos;impressions à votre événement tout en
              conservant les photos numériques.
            </p>

            <Link
              href="/#contact"
              className="mt-5 inline-flex font-bold text-[#347A77]"
            >
              Obtenir un devis →
            </Link>
          </div>
        </section>

        {/* ===================================================
            MOBILIER / SONO
        =================================================== */}

        <section className="mt-12 rounded-[28px] border border-[#E9E2DD] bg-white p-6 sm:p-8 lg:p-10">
          <h2 className="text-2xl font-black text-[#1D1B1C] sm:text-3xl">
            Sonorisation, tables et chaises à
            La Charité-sur-Loire
          </h2>

          <p className="mt-5 max-w-4xl leading-7 text-[#716A6C]">
            En complément du photobooth, Event&apos;S Location
            propose du matériel pour équiper votre réception :
            sonorisation, tables rondes ou rectangulaires,
            chaises, mange-debout, tabourets, vidéoprojecteur,
            écran et matériel d&apos;ambiance.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/prestations/mobilier"
              className="rounded-xl border border-[#E9E2DD] bg-[#FBFAF8] px-5 py-3 font-bold text-[#1D1B1C] transition hover:border-[#EF5A4F]/30"
            >
              Voir le mobilier
            </Link>

            <Link
              href="/prestations/sonorisation"
              className="rounded-xl border border-[#E9E2DD] bg-[#FBFAF8] px-5 py-3 font-bold text-[#1D1B1C] transition hover:border-[#EF5A4F]/30"
            >
              Voir la sonorisation
            </Link>

            <Link
              href="/prestations/projection"
              className="rounded-xl border border-[#E9E2DD] bg-[#FBFAF8] px-5 py-3 font-bold text-[#1D1B1C] transition hover:border-[#EF5A4F]/30"
            >
              Voir la projection
            </Link>
          </div>
        </section>

        {/* ===================================================
            SECTEURS
        =================================================== */}

        <section className="mt-12">
          <h2 className="text-2xl font-black text-[#1D1B1C] sm:text-3xl">
            Nos autres secteurs d&apos;intervention
          </h2>

          <p className="mt-4 max-w-3xl leading-7 text-[#716A6C]">
            Event&apos;S Location intervient également dans
            plusieurs secteurs de la Nièvre et de l&apos;Yonne.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/location-evenementiel-cosne-cours-sur-loire"
              className="rounded-xl border border-[#E9E2DD] bg-white px-5 py-3 font-bold text-[#1D1B1C]"
            >
              Photobooth à Cosne-Cours-sur-Loire
            </Link>

            <Link
              href="/location-evenementiel-nevers"
              className="rounded-xl border border-[#E9E2DD] bg-white px-5 py-3 font-bold text-[#1D1B1C]"
            >
              Photobooth à Nevers
            </Link>

            <Link
              href="/location-evenementiel-clamecy"
              className="rounded-xl border border-[#E9E2DD] bg-white px-5 py-3 font-bold text-[#1D1B1C]"
            >
              Photobooth à Clamecy
            </Link>

            <Link
              href="/location-evenementiel-auxerre"
              className="rounded-xl border border-[#E9E2DD] bg-white px-5 py-3 font-bold text-[#1D1B1C]"
            >
              Photobooth à Auxerre
            </Link>

            <Link
              href="/location-evenementiel-avallon"
              className="rounded-xl border border-[#E9E2DD] bg-white px-5 py-3 font-bold text-[#1D1B1C]"
            >
              Photobooth à Avallon
            </Link>
          </div>
        </section>

        {/* ===================================================
            FAQ
        =================================================== */}

        <section className="mt-12 rounded-[28px] border border-[#E9E2DD] bg-white p-6 sm:p-8 lg:p-10">
          <div className="max-w-3xl">
            <span className="text-xs font-black uppercase tracking-[0.18em] text-[#347A77]">
              Questions fréquentes
            </span>

            <h2 className="mt-3 text-2xl font-black text-[#1D1B1C] sm:text-3xl">
              Location Photobooth à La Charité-sur-Loire
            </h2>
          </div>

          <div className="mt-7 grid gap-4">
            {faq.map((item) => (
              <div
                key={item.question}
                className="rounded-2xl border border-[#E9E2DD] bg-[#FBFAF8] p-5 sm:p-6"
              >
                <h3 className="font-black text-[#1D1B1C]">
                  {item.question}
                </h3>

                <p className="mt-3 text-sm leading-7 text-[#716A6C] sm:text-base">
                  {item.answer}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ===================================================
            CTA FINAL
        =================================================== */}

        <section className="mt-12 rounded-[28px] border border-[#EF5A4F]/20 bg-[#FFF0ED] p-6 sm:p-8 lg:p-10">
          <div className="flex flex-col gap-7 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <span className="text-xs font-black uppercase tracking-[0.18em] text-[#D94A41]">
                Votre événement
              </span>

              <h2 className="mt-3 text-2xl font-black text-[#1D1B1C] sm:text-3xl">
                Besoin d&apos;un photobooth à
                La Charité-sur-Loire ?
              </h2>

              <p className="mt-4 leading-7 text-[#716A6C]">
                Indiquez-nous votre date, votre événement et la
                formule souhaitée pour obtenir un devis
                personnalisé.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <Link
                href="/#contact"
                className="inline-flex min-h-[52px] items-center justify-center rounded-xl bg-[#EF5A4F] px-6 py-3.5 font-bold text-white transition hover:bg-[#D94A41]"
              >
                Demander un devis
              </Link>

              <a
                href="tel:+33643894570"
                className="inline-flex min-h-[52px] items-center justify-center rounded-xl border border-[#4A9692]/25 bg-white px-6 py-3.5 font-bold text-[#347A77]"
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