import type { Metadata } from "next";
import Link from "next/link";

import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

const SITE_URL = "https://www.eventslocation.fr";
const PAGE_URL = `${SITE_URL}/location-evenementiel-clamecy`;

export const metadata: Metadata = {
  title: "Location événementiel Clamecy | Photobooth, sono & mobilier",
  description:
    "Location de matériel événementiel à Clamecy : photobooth, sono, tables, chaises, barnum, vidéoprojecteur, écran et effets pour vos événements.",
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: "Location de matériel événementiel à Clamecy | Event'S Location",
    description:
      "Photobooth, sonorisation, mobilier, barnum, projection et effets pour vos mariages, anniversaires et réceptions à Clamecy.",
    url: PAGE_URL,
    siteName: "Event'S Location",
    locale: "fr_FR",
    type: "website",
  },
};

const services = [
  {
    title: "Photobooth à Clamecy",
    text: "Une animation photo idéale pour mariage, anniversaire, soirée ou fête de famille. Plusieurs formules sont proposées avec ou sans impressions, avec personnalisation du cadre photo.",
    href: "/prestations/photobooth",
    link: "Découvrir le photobooth",
  },
  {
    title: "Sonorisation",
    text: "Louez une solution de sonorisation pour diffuser votre musique et animer votre réception : enceintes, caisson, microphones et équipements complémentaires.",
    href: "/prestations/sonorisation",
    link: "Voir la sonorisation",
  },
  {
    title: "Tables, chaises et mobilier",
    text: "Tables rondes, tables rectangulaires, chaises, mange-debout et tabourets sont disponibles pour aménager votre salle ou votre espace de réception.",
    href: "/prestations/mobilier",
    link: "Voir le mobilier",
  },
  {
    title: "Barnum 4 × 8 m",
    text: "Pour vos réceptions en extérieur, Event'S Location propose également un barnum 4 × 8 m avec montage inclus.",
    href: "/prestations/mobilier",
    link: "Voir les équipements extérieurs",
  },
  {
    title: "Vidéoprojecteur et écran",
    text: "Pour un diaporama, une vidéo ou une présentation, vous pouvez louer un vidéoprojecteur Full HD ainsi qu'un grand écran.",
    href: "/prestations/projection",
    link: "Voir la projection",
  },
  {
    title: "Smoke Puff et effets",
    text: "Ajoutez un effet visuel à votre mariage ou votre réception avec les Smoke Puff, machines à fumée ou machines à bulles.",
    href: "/prestations/feux",
    link: "Découvrir les effets",
  },
];

const faq = [
  {
    question: "Proposez-vous la location de photobooth à Clamecy ?",
    answer:
      "Oui. Event'S Location propose plusieurs formules photobooth pour les mariages, anniversaires, soirées et autres événements organisés à Clamecy et aux alentours.",
  },
  {
    question: "Peut-on louer des tables et des chaises à Clamecy ?",
    answer:
      "Oui. Nous proposons notamment des tables rondes, des tables rectangulaires, des chaises, des mange-debout et des tabourets selon les quantités disponibles.",
  },
  {
    question: "Proposez-vous un barnum pour une réception à Clamecy ?",
    answer:
      "Oui. Un barnum 4 × 8 m est disponible à la location, avec montage inclus. La disponibilité dépend de la date de votre événement.",
  },
  {
    question: "Peut-on louer plusieurs équipements pour un même événement ?",
    answer:
      "Oui. Vous pouvez regrouper plusieurs besoins dans une seule demande, par exemple du mobilier, un photobooth, de la sonorisation, de la projection ou des effets.",
  },
];

export default function LocationEvenementielClamecyPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Location de matériel événementiel à Clamecy",
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
      name: "Clamecy",
    },
    description:
      "Location de photobooth, sonorisation, mobilier, barnum, projection et matériel événementiel à Clamecy.",
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
        <section className="border-b border-[#E9E2DD] bg-white">
          <div className="mx-auto max-w-7xl px-6 pb-16 pt-32 lg:px-8 lg:pb-24 lg:pt-40">
            <div className="max-w-4xl">
              <p className="mb-5 text-sm font-bold uppercase tracking-[0.18em] text-[#347A77]">
                Event&apos;S Location • Clamecy
              </p>

              <h1 className="text-4xl font-bold leading-tight tracking-tight md:text-5xl lg:text-6xl">
                Location de matériel événementiel à{" "}
                <span className="text-[#EF5A4F]">Clamecy</span>
              </h1>

              <p className="mt-7 max-w-3xl text-lg leading-8 text-[#716A6C] md:text-xl">
                Vous organisez un mariage, un anniversaire, une soirée,
                une réception ou un événement professionnel à Clamecy ?
                Event&apos;S Location propose du matériel à la location
                pour aménager et animer votre événement.
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

        <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#EF5A4F]">
                Secteur proche de Varzy
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
                Une solution locale pour votre événement à Clamecy
              </h2>

              <div className="mt-6 space-y-5 text-base leading-8 text-[#716A6C]">
                <p>
                  Basée à Varzy, Event&apos;S Location intervient
                  naturellement dans le secteur de Clamecy pour les
                  événements privés, associatifs et professionnels.
                </p>

                <p>
                  Cette proximité permet de proposer plusieurs catégories
                  de matériel pour vos réceptions : photobooth,
                  sonorisation, mobilier, barnum, projection et effets.
                </p>

                <p>
                  Vous pouvez louer un seul équipement ou réunir plusieurs
                  besoins dans une même demande afin de simplifier
                  l&apos;organisation de votre événement.
                </p>
              </div>
            </div>

            <aside className="rounded-3xl border border-[#E9E2DD] bg-white p-7 shadow-sm md:p-9">
              <p className="text-sm font-bold uppercase tracking-[0.15em] text-[#347A77]">
                Pour vos réceptions
              </p>

              <h2 className="mt-3 text-2xl font-bold">
                Différents équipements disponibles
              </h2>

              <div className="mt-6 grid grid-cols-2 gap-3 text-sm font-semibold">
                {[
                  "Photobooth",
                  "Sonorisation",
                  "Tables",
                  "Chaises",
                  "Barnum",
                  "Projection",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-xl bg-[#F7F3EF] px-4 py-3"
                  >
                    {item}
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-2xl bg-[#EDF7F6] p-5">
                <p className="font-bold text-[#347A77]">
                  Votre date est fixée ?
                </p>

                <p className="mt-2 text-sm leading-6 text-[#716A6C]">
                  Consultez les disponibilités du matériel avant de
                  préparer votre demande.
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

        <section className="border-y border-[#E9E2DD] bg-white">
          <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
            <div className="max-w-3xl">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#347A77]">
                Matériel disponible
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
                Nos locations événementielles à Clamecy
              </h2>

              <p className="mt-5 text-lg leading-8 text-[#716A6C]">
                Sélectionnez les équipements adaptés à votre réception
                et regroupez-les dans une seule demande.
              </p>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {services.map((service) => (
                <article
                  key={service.title}
                  className="flex flex-col rounded-2xl border border-[#E9E2DD] bg-[#FBFAF8] p-7"
                >
                  <h3 className="text-xl font-bold">{service.title}</h3>

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

        <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
          <div className="grid gap-8 lg:grid-cols-2">
            <article className="rounded-3xl bg-[#1D1B1C] p-8 text-white md:p-10">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#EF5A4F]">
                Réception en extérieur
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight">
                Location de barnum à Clamecy
              </h2>

              <p className="mt-6 leading-8 text-white/75">
                Pour une réception en extérieur, Event&apos;S Location
                propose un barnum 4 × 8 m. Il peut être associé à des
                tables, des chaises et d&apos;autres équipements pour
                créer un ensemble adapté à votre événement.
              </p>

              <Link
                href="/prestations/mobilier"
                className="mt-8 inline-block rounded-xl bg-[#EF5A4F] px-6 py-3.5 font-bold text-white transition hover:bg-[#D94A41]"
              >
                Voir le mobilier et le barnum
              </Link>
            </article>

            <article className="rounded-3xl border border-[#E9E2DD] bg-white p-8 md:p-10">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#347A77]">
                Animation
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight">
                Location de photobooth à Clamecy
              </h2>

              <p className="mt-6 leading-8 text-[#716A6C]">
                Le photobooth permet à vos invités de réaliser leurs
                propres photos pendant la soirée. Le cadre est
                personnalisé pour votre événement et plusieurs formules
                sont proposées selon vos besoins.
              </p>

              <Link
                href="/prestations/photobooth"
                className="mt-8 inline-block font-bold text-[#EF5A4F] hover:underline"
              >
                Découvrir les formules photobooth →
              </Link>
            </article>
          </div>
        </section>

        <section className="border-y border-[#E9E2DD] bg-[#F7F3EF]">
          <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#347A77]">
              À proximité
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight">
              Nos autres secteurs d&apos;intervention
            </h2>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/location-evenementiel-auxerre"
                className="rounded-xl border border-[#E9E2DD] bg-white px-5 py-3 font-bold transition hover:border-[#EF5A4F]"
              >
                Auxerre
              </Link>

              <Link
                href="/location-evenementiel-avallon"
                className="rounded-xl border border-[#E9E2DD] bg-white px-5 py-3 font-bold transition hover:border-[#EF5A4F]"
              >
                Avallon
              </Link>

              <Link
                href="/location-evenementiel-nevers"
                className="rounded-xl border border-[#E9E2DD] bg-white px-5 py-3 font-bold transition hover:border-[#EF5A4F]"
              >
                Nevers
              </Link>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-5xl px-6 py-16 lg:px-8 lg:py-24">
          <div className="text-center">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#347A77]">
              Questions fréquentes
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
              Location de matériel à Clamecy
            </h2>
          </div>

          <div className="mt-12 space-y-4">
            {faq.map((item) => (
              <article
                key={item.question}
                className="rounded-2xl border border-[#E9E2DD] bg-white p-6 md:p-7"
              >
                <h3 className="text-lg font-bold">{item.question}</h3>

                <p className="mt-3 leading-7 text-[#716A6C]">
                  {item.answer}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="bg-[#FFF0ED]">
          <div className="mx-auto max-w-5xl px-6 py-16 text-center lg:px-8 lg:py-20">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#EF5A4F]">
              Event&apos;S Location
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
              Vous préparez un événement à Clamecy ?
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-[#716A6C]">
              Indiquez votre date, votre lieu et les équipements
              souhaités afin de préparer votre demande de location.
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
                Voir les disponibilités
              </Link>
            </div>
          </div>
        </section>

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