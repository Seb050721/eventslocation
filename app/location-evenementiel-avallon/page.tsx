import type { Metadata } from "next";
import Link from "next/link";

import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

const SITE_URL = "https://www.eventslocation.fr";
const PAGE_URL = `${SITE_URL}/location-evenementiel-avallon`;

export const metadata: Metadata = {
  title: "Location événementiel Avallon | Photobooth, sono & mobilier",
  description:
    "Location de matériel événementiel à Avallon : photobooth, sono, tables, chaises, vidéoprojecteur, écran et effets pour mariage, anniversaire et soirée.",
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: "Location de matériel événementiel à Avallon | Event'S Location",
    description:
      "Photobooth, sonorisation, mobilier, projection et effets pour vos mariages, anniversaires et événements à Avallon.",
    url: PAGE_URL,
    siteName: "Event'S Location",
    locale: "fr_FR",
    type: "website",
  },
};

const services = [
  {
    title: "Photobooth à Avallon",
    text: "Animez votre mariage, anniversaire ou soirée avec un photobooth. Plusieurs formules sont proposées, avec ou sans impressions, personnalisation du cadre et galerie photo.",
    href: "/prestations/photobooth",
    link: "Découvrir le photobooth",
  },
  {
    title: "Sonorisation",
    text: "Louez le matériel nécessaire pour sonoriser votre réception : enceintes, caisson, microphones et équipements complémentaires selon vos besoins.",
    href: "/prestations/sonorisation",
    link: "Voir la sonorisation",
  },
  {
    title: "Tables, chaises & mobilier",
    text: "Aménagez votre salle ou votre réception avec nos tables rondes et rectangulaires, chaises, mange-debout, tabourets et autres équipements événementiels.",
    href: "/prestations/mobilier",
    link: "Voir le mobilier",
  },
  {
    title: "Vidéoprojecteur & écran",
    text: "Pour un diaporama, une vidéo, une présentation ou une animation, un vidéoprojecteur et un grand écran peuvent être loués séparément.",
    href: "/prestations/projection",
    link: "Voir le matériel de projection",
  },
  {
    title: "Smoke Puff & machines à effets",
    text: "Créez un moment marquant pendant votre événement avec les Smoke Puff, la fumée, les bulles et les différents effets disponibles.",
    href: "/prestations/feux",
    link: "Découvrir les effets",
  },
];

const faq = [
  {
    question: "Proposez-vous la location de photobooth à Avallon ?",
    answer:
      "Oui. Event'S Location propose plusieurs formules de photobooth pour les mariages, anniversaires, soirées et autres événements organisés à Avallon et dans les environs.",
  },
  {
    question: "Peut-on louer des tables et des chaises pour un événement à Avallon ?",
    answer:
      "Oui. Notre gamme de mobilier comprend notamment des tables rondes, des tables rectangulaires, des chaises, des mange-debout et des tabourets. Les quantités sont à préciser lors de la demande.",
  },
  {
    question: "Peut-on louer plusieurs types de matériel en même temps ?",
    answer:
      "Oui. Une même réservation peut regrouper plusieurs équipements, par exemple du mobilier, un photobooth, de la sonorisation et du matériel de projection.",
  },
  {
    question: "Intervenez-vous uniquement à Avallon ?",
    answer:
      "Non. Event'S Location est basée à Varzy et intervient dans plusieurs secteurs de la Nièvre et de l'Yonne, notamment pour les événements organisés autour d'Avallon.",
  },
];

export default function LocationEvenementielAvallonPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Location de matériel événementiel à Avallon",
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
      name: "Avallon",
    },
    description:
      "Location de photobooth, sonorisation, mobilier, vidéoprojecteur, écran et matériel événementiel à Avallon.",
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
                Event&apos;S Location • Avallon
              </p>

              <h1 className="text-4xl font-bold leading-tight tracking-tight md:text-5xl lg:text-6xl">
                Location de matériel événementiel à{" "}
                <span className="text-[#EF5A4F]">Avallon</span>
              </h1>

              <p className="mt-7 max-w-3xl text-lg leading-8 text-[#716A6C] md:text-xl">
                Vous préparez un mariage, un anniversaire, une fête de
                famille ou une soirée à Avallon ? Event&apos;S Location
                propose du matériel à la location pour équiper et animer
                votre événement : photobooth, sonorisation, tables,
                chaises, projection et effets.
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
            PRÉSENTATION
        ===================================================== */}

        <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#EF5A4F]">
                Votre événement à Avallon
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
                Louez uniquement le matériel dont vous avez besoin
              </h2>

              <div className="mt-6 space-y-5 text-base leading-8 text-[#716A6C]">
                <p>
                  Organiser une réception demande souvent plusieurs
                  équipements. Event&apos;S Location vous permet de
                  regrouper différents besoins auprès d&apos;un même
                  prestataire.
                </p>

                <p>
                  Pour une réception à Avallon, vous pouvez par exemple
                  louer des tables et des chaises pour aménager votre
                  espace, ajouter un photobooth pour divertir vos invités
                  ou compléter votre installation avec de la
                  sonorisation et des effets.
                </p>

                <p>
                  Le matériel peut également être loué séparément. Vous
                  choisissez ainsi une solution adaptée à votre
                  événement plutôt qu&apos;un ensemble imposé.
                </p>
              </div>
            </div>

            <aside className="rounded-3xl border border-[#E9E2DD] bg-white p-7 shadow-sm md:p-9">
              <p className="text-sm font-bold uppercase tracking-[0.15em] text-[#347A77]">
                Particuliers & professionnels
              </p>

              <h2 className="mt-3 text-2xl font-bold">
                Des équipements pour différents événements
              </h2>

              <div className="mt-6 grid grid-cols-2 gap-3 text-sm font-semibold">
                {[
                  "Mariages",
                  "Anniversaires",
                  "Soirées",
                  "Réceptions",
                  "Associations",
                  "Entreprises",
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
                  Une date déjà prévue ?
                </p>

                <p className="mt-2 text-sm leading-6 text-[#716A6C]">
                  Vérifiez la disponibilité du matériel avant
                  d&apos;envoyer votre demande.
                </p>

                <Link
                  href="/disponibilites"
                  className="mt-4 inline-block font-bold text-[#EF5A4F] hover:underline"
                >
                  Voir les disponibilités →
                </Link>
              </div>
            </aside>
          </div>
        </section>

        {/* =====================================================
            SERVICES
        ===================================================== */}

        <section className="border-y border-[#E9E2DD] bg-white">
          <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
            <div className="max-w-3xl">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#347A77]">
                Matériel disponible
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
                Nos locations événementielles à Avallon
              </h2>

              <p className="mt-5 text-lg leading-8 text-[#716A6C]">
                Animation, sonorisation, mobilier ou projection :
                sélectionnez les équipements correspondant à votre
                réception.
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
            MOBILIER
        ===================================================== */}

        <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div className="rounded-3xl bg-[#1D1B1C] p-8 text-white md:p-12">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#EF5A4F]">
                Aménagement de votre réception
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
                Location de tables et chaises à Avallon
              </h2>

              <p className="mt-6 text-lg leading-8 text-white/75">
                Pour aménager votre réception, Event&apos;S Location
                propose notamment des tables rondes, des tables
                rectangulaires, des chaises, des mange-debout et des
                tabourets.
              </p>

              <Link
                href="/prestations/mobilier"
                className="mt-8 inline-block rounded-xl bg-[#EF5A4F] px-6 py-3.5 font-bold text-white transition hover:bg-[#D94A41]"
              >
                Découvrir le mobilier
              </Link>
            </div>

            <div className="px-2 lg:px-8">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#347A77]">
                Animation
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight">
                Un photobooth pour votre événement à Avallon
              </h2>

              <p className="mt-6 leading-8 text-[#716A6C]">
                Le photobooth apporte une animation autonome pendant
                votre réception et permet à vos invités de créer leurs
                propres souvenirs. Le cadre photo est personnalisé pour
                votre événement et une galerie permet de retrouver les
                photos après la prestation.
              </p>

              <p className="mt-5 leading-8 text-[#716A6C]">
                Plusieurs formules sont disponibles selon le nombre
                d&apos;impressions souhaité, ainsi qu&apos;une formule
                numérique sans impressions.
              </p>

              <Link
                href="/prestations/photobooth"
                className="mt-7 inline-block font-bold text-[#EF5A4F] hover:underline"
              >
                Voir les formules photobooth →
              </Link>
            </div>
          </div>
        </section>

        {/* =====================================================
            COMBINAISONS
        ===================================================== */}

        <section className="border-y border-[#E9E2DD] bg-[#F7F3EF]">
          <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
            <div className="max-w-3xl">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#EF5A4F]">
                Une seule demande
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
                Regroupez plusieurs équipements pour votre événement
              </h2>

              <p className="mt-6 text-lg leading-8 text-[#716A6C]">
                Vous pouvez associer plusieurs catégories de matériel
                dans une même demande de devis.
              </p>
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-3">
              <div className="rounded-2xl bg-white p-6">
                <h3 className="text-lg font-bold">
                  Mariage
                </h3>

                <p className="mt-3 leading-7 text-[#716A6C]">
                  Mobilier, photobooth, Smoke Puff et équipements
                  complémentaires pour votre réception.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6">
                <h3 className="text-lg font-bold">
                  Anniversaire
                </h3>

                <p className="mt-3 leading-7 text-[#716A6C]">
                  Photobooth, sonorisation, éclairage et projection pour
                  animer votre soirée.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6">
                <h3 className="text-lg font-bold">
                  Événement professionnel
                </h3>

                <p className="mt-3 leading-7 text-[#716A6C]">
                  Vidéoprojecteur, écran, microphones et sonorisation
                  pour vos présentations et événements.
                </p>
              </div>
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
              Location de matériel à Avallon
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
              Event&apos;S Location
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
              Préparez votre événement à Avallon
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-[#716A6C]">
              Indiquez votre date, le lieu de votre réception et le
              matériel souhaité pour obtenir une proposition adaptée.
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