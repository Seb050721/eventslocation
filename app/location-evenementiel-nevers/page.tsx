import type { Metadata } from "next";
import Link from "next/link";

import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

const SITE_URL = "https://www.eventslocation.fr";
const PAGE_URL = `${SITE_URL}/location-evenementiel-nevers`;

export const metadata: Metadata = {
  title: "Location événementiel Nevers | Photobooth, sono & mobilier",
  description:
    "Location de matériel événementiel à Nevers : photobooth, sonorisation, tables, chaises, vidéoprojecteur, écran et effets pour vos événements.",
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: "Location de matériel événementiel à Nevers | Event'S Location",
    description:
      "Photobooth, sono, mobilier, projection et effets pour mariage, anniversaire, réception et événement professionnel à Nevers.",
    url: PAGE_URL,
    siteName: "Event'S Location",
    locale: "fr_FR",
    type: "website",
  },
};

const services = [
  {
    title: "Location de photobooth à Nevers",
    text: "Ajoutez une animation photo à votre mariage, anniversaire ou réception. Nos formules photobooth sont disponibles avec ou sans impressions, avec personnalisation du cadre photo.",
    href: "/prestations/photobooth",
    link: "Voir les formules photobooth",
  },
  {
    title: "Location de sonorisation",
    text: "Pour diffuser votre musique ou sonoriser votre événement, découvrez nos solutions comprenant notamment enceintes, caisson et microphones.",
    href: "/prestations/sonorisation",
    link: "Découvrir la sonorisation",
  },
  {
    title: "Location de tables et chaises",
    text: "Équipez votre réception avec des tables rondes ou rectangulaires, des chaises, des mange-debout, des tabourets et d'autres équipements de mobilier.",
    href: "/prestations/mobilier",
    link: "Voir le mobilier",
  },
  {
    title: "Vidéoprojecteur et écran",
    text: "Projection de photos, vidéos ou présentations : louez un vidéoprojecteur et un grand écran pour compléter votre installation.",
    href: "/prestations/projection",
    link: "Découvrir la projection",
  },
  {
    title: "Machines à effets",
    text: "Machine à fumée, machine à bulles et autres effets permettent de compléter l'ambiance de votre soirée ou de votre réception.",
    href: "/prestations/effets",
    link: "Voir les machines à effets",
  },
  {
    title: "Smoke Puff",
    text: "Créez un effet visuel marquant pour un mariage ou un moment important de votre événement avec nos Smoke Puff.",
    href: "/prestations/feux",
    link: "Découvrir les Smoke Puff",
  },
];

const faq = [
  {
    question: "Proposez-vous la location de photobooth à Nevers ?",
    answer:
      "Oui. Event'S Location propose plusieurs formules photobooth pour les mariages, anniversaires, soirées et autres événements organisés à Nevers et dans les environs.",
  },
  {
    question: "Peut-on louer des tables et des chaises à Nevers ?",
    answer:
      "Oui. Nous proposons notamment des tables rondes, des tables rectangulaires, des chaises, des mange-debout et des tabourets. Les quantités nécessaires sont à indiquer lors de votre demande.",
  },
  {
    question: "Puis-je regrouper plusieurs locations dans un même devis ?",
    answer:
      "Oui. Vous pouvez par exemple demander du mobilier, un photobooth, de la sonorisation et du matériel de projection dans une seule demande.",
  },
  {
    question: "Event'S Location est-elle basée à Nevers ?",
    answer:
      "Non. Event'S Location est basée à Varzy dans la Nièvre et propose ses prestations dans différents secteurs du département, dont Nevers, selon le matériel demandé et le lieu de l'événement.",
  },
];

export default function LocationEvenementielNeversPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Location de matériel événementiel à Nevers",
    serviceType: "Location de matériel événementiel",
    url: PAGE_URL,
    provider: {
      "@type": "LocalBusiness",
      name: "Event'S Location",
      url: SITE_URL,
      telephone: "+33643894570",
      email: "events.location@outlook.com",
      address: {
        "@type": "PostalAddress",
        streetAddress: "17 boulevard Dupin",
        postalCode: "58210",
        addressLocality: "Varzy",
        addressCountry: "FR",
      },
    },
    areaServed: {
      "@type": "City",
      name: "Nevers",
    },
    description:
      "Location de photobooth, sonorisation, mobilier, projection et matériel événementiel à Nevers.",
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
    <>
      <Header />

      <main className="bg-[#FBFAF8] text-[#1D1B1C]">
        {/* =====================================================
            HERO
        ===================================================== */}

        <section className="border-b border-[#E9E2DD] bg-white">
          <div className="mx-auto max-w-7xl px-6 pb-16 pt-32 lg:px-8 lg:pb-24 lg:pt-40">
            <div className="max-w-4xl">
              <p className="mb-5 text-sm font-bold uppercase tracking-[0.18em] text-[#347A77]">
                Event&apos;S Location • Nevers
              </p>

              <h1 className="text-4xl font-bold leading-tight tracking-tight md:text-5xl lg:text-6xl">
                Location de matériel événementiel à{" "}
                <span className="text-[#EF5A4F]">Nevers</span>
              </h1>

              <p className="mt-7 max-w-3xl text-lg leading-8 text-[#716A6C] md:text-xl">
                Vous organisez un mariage, un anniversaire, une soirée
                ou un événement professionnel à Nevers ? Event&apos;S
                Location propose différents équipements à la location
                pour aménager, animer et équiper votre événement.
              </p>

              <div className="mt-9 flex flex-wrap gap-4">
                <Link
                  href="/#contact"
                  className="rounded-xl bg-[#EF5A4F] px-6 py-3.5 font-bold text-white transition hover:bg-[#D94A41]"
                >
                  Demander un devis
                </Link>

                <Link
                  href="/disponibilites"
                  className="rounded-xl border border-[#4A9692] bg-[#EDF7F6] px-6 py-3.5 font-bold text-[#347A77] transition hover:bg-white"
                >
                  Vérifier les disponibilités
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            INTRODUCTION
        ===================================================== */}

        <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#EF5A4F]">
                Organiser votre réception
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
                Du matériel pour équiper votre événement à Nevers
              </h2>

              <div className="mt-6 space-y-5 text-base leading-8 text-[#716A6C]">
                <p>
                  Une réception peut nécessiter du mobilier, de la
                  sonorisation, une animation ou encore du matériel de
                  projection. Event&apos;S Location vous permet de
                  sélectionner les équipements adaptés à votre projet.
                </p>

                <p>
                  Vous pouvez louer un équipement seul ou réunir
                  plusieurs prestations dans une même demande : tables
                  et chaises pour recevoir vos invités, photobooth pour
                  l&apos;animation, sono pour la musique ou encore
                  vidéoprojecteur et écran.
                </p>

                <p>
                  Chaque demande est étudiée en fonction de la date, du
                  lieu de l&apos;événement, des quantités souhaitées et
                  du matériel disponible.
                </p>
              </div>
            </div>

            <aside className="rounded-3xl border border-[#E9E2DD] bg-white p-7 shadow-sm md:p-9">
              <p className="text-sm font-bold uppercase tracking-[0.15em] text-[#347A77]">
                Event&apos;S Location
              </p>

              <h2 className="mt-3 text-2xl font-bold">
                Pour vos événements privés et professionnels
              </h2>

              <div className="mt-6 grid grid-cols-2 gap-3 text-sm font-semibold">
                {[
                  "Mariage",
                  "Anniversaire",
                  "Soirée",
                  "Réception",
                  "Association",
                  "Entreprise",
                ].map((event) => (
                  <div
                    key={event}
                    className="rounded-xl bg-[#F7F3EF] px-4 py-3"
                  >
                    {event}
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-2xl bg-[#EDF7F6] p-5">
                <p className="font-bold text-[#347A77]">
                  Vérifiez votre date
                </p>

                <p className="mt-2 text-sm leading-6 text-[#716A6C]">
                  Consultez les disponibilités du matériel avant votre
                  demande de devis.
                </p>

                <Link
                  href="/disponibilites"
                  className="mt-4 inline-block font-bold text-[#EF5A4F] hover:underline"
                >
                  Consulter les disponibilités →
                </Link>
              </div>
            </aside>
          </div>
        </section>

        {/* =====================================================
            PRESTATIONS
        ===================================================== */}

        <section className="border-y border-[#E9E2DD] bg-white">
          <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
            <div className="max-w-3xl">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#347A77]">
                Nos équipements
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
                Location événementielle à Nevers
              </h2>

              <p className="mt-5 text-lg leading-8 text-[#716A6C]">
                Découvrez les différentes catégories de matériel
                disponibles pour préparer votre événement.
              </p>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {services.map((service) => (
                <article
                  key={service.title}
                  className="flex flex-col rounded-2xl border border-[#E9E2DD] bg-[#FBFAF8] p-7"
                >
                  <h3 className="text-xl font-bold">
                    {service.title}
                  </h3>

                  <p className="mt-4 flex-1 leading-7 text-[#716A6C]">
                    {service.text}
                  </p>

                  <Link
                    href={service.href}
                    className="mt-6 font-bold text-[#EF5A4F] hover:underline"
                  >
                    {service.link} →
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* =====================================================
            MOBILIER + PHOTOBOOTH
        ===================================================== */}

        <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
          <div className="grid gap-8 lg:grid-cols-2">
            <article className="rounded-3xl bg-[#1D1B1C] p-8 text-white md:p-10">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#EF5A4F]">
                Mobilier
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight">
                Tables et chaises à louer à Nevers
              </h2>

              <p className="mt-6 leading-8 text-white/75">
                Pour aménager votre salle ou votre espace de réception,
                retrouvez nos tables rondes, tables rectangulaires,
                chaises, mange-debout et tabourets.
              </p>

              <Link
                href="/prestations/mobilier"
                className="mt-8 inline-block rounded-xl bg-[#EF5A4F] px-6 py-3.5 font-bold text-white transition hover:bg-[#D94A41]"
              >
                Voir le mobilier
              </Link>
            </article>

            <article className="rounded-3xl border border-[#E9E2DD] bg-white p-8 md:p-10">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#347A77]">
                Animation photo
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight">
                Photobooth pour mariage et anniversaire à Nevers
              </h2>

              <p className="mt-6 leading-8 text-[#716A6C]">
                Le photobooth permet à vos invités de réaliser leurs
                photos pendant l&apos;événement. Le cadre est
                personnalisé et plusieurs formules sont proposées selon
                le nombre d&apos;impressions souhaité.
              </p>

              <Link
                href="/prestations/photobooth"
                className="mt-8 inline-block font-bold text-[#EF5A4F] hover:underline"
              >
                Découvrir nos formules photobooth →
              </Link>
            </article>
          </div>
        </section>

        {/* =====================================================
            AUTRES SECTEURS
        ===================================================== */}

        <section className="border-y border-[#E9E2DD] bg-[#F7F3EF]">
          <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#347A77]">
              Nos secteurs
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight">
              Découvrez également nos autres zones d&apos;intervention
            </h2>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/location-evenementiel-auxerre"
                className="rounded-xl border border-[#E9E2DD] bg-white px-5 py-3 font-bold transition hover:border-[#EF5A4F]"
              >
                Location événementielle à Auxerre
              </Link>

              <Link
                href="/location-evenementiel-avallon"
                className="rounded-xl border border-[#E9E2DD] bg-white px-5 py-3 font-bold transition hover:border-[#EF5A4F]"
              >
                Location événementielle à Avallon
              </Link>
            </div>
          </div>
        </section>

        {/* =====================================================
            FAQ
        ===================================================== */}

        <section className="mx-auto max-w-5xl px-6 py-16 lg:px-8 lg:py-24">
          <div className="text-center">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#347A77]">
              Questions fréquentes
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
              Location de matériel événementiel à Nevers
            </h2>
          </div>

          <div className="mt-12 space-y-4">
            {faq.map((item) => (
              <article
                key={item.question}
                className="rounded-2xl border border-[#E9E2DD] bg-white p-6 md:p-7"
              >
                <h3 className="text-lg font-bold">
                  {item.question}
                </h3>

                <p className="mt-3 leading-7 text-[#716A6C]">
                  {item.answer}
                </p>
              </article>
            ))}
          </div>
        </section>

        {/* =====================================================
            CTA
        ===================================================== */}

        <section className="bg-[#FFF0ED]">
          <div className="mx-auto max-w-5xl px-6 py-16 text-center lg:px-8 lg:py-20">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#EF5A4F]">
              Votre projet
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
              Besoin de matériel pour un événement à Nevers ?
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-[#716A6C]">
              Indiquez votre date, votre lieu et le matériel souhaité
              afin de préparer votre demande.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                href="/#contact"
                className="rounded-xl bg-[#EF5A4F] px-7 py-4 font-bold text-white transition hover:bg-[#D94A41]"
              >
                Demander un devis
              </Link>

              <Link
                href="/disponibilites"
                className="rounded-xl border border-[#4A9692] bg-white px-7 py-4 font-bold text-[#347A77]"
              >
                Vérifier les disponibilités
              </Link>
            </div>
          </div>
        </section>

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
            __html: JSON.stringify(faqSchema),
          }}
        />
      </main>

      <Footer />
    </>
  );
}