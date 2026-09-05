import type { Metadata } from "next";
import Link from "next/link";

import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

const SITE_URL = "https://www.eventslocation.fr";
const PAGE_URL = `${SITE_URL}/location-evenementiel-auxerre`;

export const metadata: Metadata = {
  title: "Location événementiel Auxerre | Photobooth, sono & mobilier",
  description:
    "Location de matériel événementiel à Auxerre et dans l'Yonne : photobooth, sonorisation, mobilier, vidéoprojecteur, écran et effets. Event'S Location.",
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: "Location de matériel événementiel à Auxerre | Event'S Location",
    description:
      "Photobooth, sonorisation, mobilier, projection et effets pour vos événements à Auxerre et dans l'Yonne.",
    url: PAGE_URL,
    siteName: "Event'S Location",
    locale: "fr_FR",
    type: "website",
  },
};

const services = [
  {
    title: "Photobooth",
    text: "Une animation photo pour mariages, anniversaires, soirées privées et événements professionnels à Auxerre. Plusieurs formules sont disponibles avec ou sans impressions.",
    href: "/prestations/photobooth",
    link: "Découvrir le photobooth",
  },
  {
    title: "Sonorisation",
    text: "Des solutions de sonorisation pour vos soirées et réceptions avec enceintes, caisson, table de mixage, microphones et éclairages selon vos besoins.",
    href: "/prestations/sonorisation",
    link: "Voir la sonorisation",
  },
  {
    title: "Mobilier événementiel",
    text: "Tables rondes, tables rectangulaires, mange-debout, chaises, tabourets et barnum pour aménager votre réception à Auxerre et dans l'Yonne.",
    href: "/prestations/mobilier",
    link: "Voir le mobilier",
  },
  {
    title: "Projection",
    text: "Vidéoprojecteur Full HD et grand écran pour diffuser vos photos, vidéos, présentations, diaporamas ou animations pendant votre événement.",
    href: "/prestations/projection",
    link: "Voir la projection",
  },
  {
    title: "Smoke Puff & effets",
    text: "Ajoutez un effet visuel à votre mariage ou votre événement grâce aux Smoke Puff et aux différentes machines à effets disponibles à la location.",
    href: "/prestations/feux",
    link: "Découvrir les effets",
  },
];

const faq = [
  {
    question: "Livrez-vous du matériel événementiel à Auxerre ?",
    answer:
      "Oui. Event'S Location intervient à Auxerre et plus largement dans l'Yonne. Les conditions et frais éventuels de livraison sont définis selon le matériel réservé et le lieu de l'événement.",
  },
  {
    question: "Peut-on louer uniquement un photobooth à Auxerre ?",
    answer:
      "Oui. Le photobooth peut être loué indépendamment des autres équipements. Plusieurs formules sont proposées, notamment avec ou sans impressions.",
  },
  {
    question: "Peut-on regrouper plusieurs équipements pour un même événement ?",
    answer:
      "Oui. Vous pouvez regrouper plusieurs besoins dans une même demande : photobooth, sonorisation, mobilier, projection ou machines à effets.",
  },
  {
    question: "Quels types d'événements pouvez-vous équiper à Auxerre ?",
    answer:
      "Nous proposons du matériel pour les mariages, anniversaires, fêtes privées, soirées, événements associatifs et événements professionnels.",
  },
];

export default function LocationEvenementielAuxerrePage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Location de matériel événementiel à Auxerre",
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
      name: "Auxerre",
    },
    description:
      "Location de photobooth, sonorisation, mobilier, matériel de projection et effets événementiels à Auxerre et dans l'Yonne.",
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
                Event&apos;S Location • Auxerre & Yonne
              </p>

              <h1 className="text-4xl font-bold leading-tight tracking-tight md:text-5xl lg:text-6xl">
                Location de matériel événementiel à{" "}
                <span className="text-[#EF5A4F]">Auxerre</span>
              </h1>

              <p className="mt-7 max-w-3xl text-lg leading-8 text-[#716A6C] md:text-xl">
                Vous organisez un mariage, un anniversaire, une soirée
                ou un événement professionnel à Auxerre ? Event&apos;S
                Location propose du matériel événementiel à la location
                dans l&apos;Yonne : photobooth, sonorisation, mobilier,
                projection et effets.
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
            INTRODUCTION LOCALE
        ===================================================== */}

        <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#EF5A4F]">
                Location événementielle dans l&apos;Yonne
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
                Du matériel pour votre événement à Auxerre
              </h2>

              <div className="mt-6 space-y-5 text-base leading-8 text-[#716A6C]">
                <p>
                  Event&apos;S Location accompagne particuliers,
                  associations et professionnels dans la préparation de
                  leurs événements à Auxerre et dans l&apos;Yonne.
                </p>

                <p>
                  Plutôt que de multiplier les prestataires, vous pouvez
                  réunir plusieurs besoins dans une même demande :
                  animation photobooth, sonorisation, tables et chaises,
                  vidéoprojecteur, écran ou encore machines à effets.
                </p>

                <p>
                  Chaque demande est étudiée selon la date, le lieu de
                  réception, le matériel souhaité et les quantités
                  nécessaires.
                </p>
              </div>
            </div>

            <div className="rounded-3xl border border-[#E9E2DD] bg-white p-7 shadow-sm md:p-9">
              <p className="text-sm font-bold uppercase tracking-[0.15em] text-[#347A77]">
                Zone desservie
              </p>

              <h2 className="mt-3 text-2xl font-bold">
                Auxerre et ses alentours
              </h2>

              <p className="mt-4 leading-7 text-[#716A6C]">
                Basée à Varzy dans la Nièvre, Event&apos;S Location
                intervient également dans l&apos;Yonne pour les
                événements organisés à Auxerre et dans les communes
                environnantes.
              </p>

              <div className="mt-6 rounded-2xl bg-[#EDF7F6] p-5">
                <p className="font-bold text-[#347A77]">
                  Vous avez déjà votre date ?
                </p>

                <p className="mt-2 text-sm leading-6 text-[#716A6C]">
                  Consultez directement la disponibilité du matériel
                  avant de faire votre demande.
                </p>

                <Link
                  href="/disponibilites"
                  className="mt-4 inline-block font-bold text-[#EF5A4F] hover:underline"
                >
                  Consulter les disponibilités →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            SERVICES
        ===================================================== */}

        <section className="border-y border-[#E9E2DD] bg-white">
          <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
            <div className="max-w-3xl">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#347A77]">
                Nos prestations
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
                Location de matériel pour vos événements à Auxerre
              </h2>

              <p className="mt-5 text-lg leading-8 text-[#716A6C]">
                Composez votre location selon les besoins réels de votre
                réception.
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

        {/* =====================================================
            PHOTOBOOTH AUXERRE
        ===================================================== */}

        <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
          <div className="rounded-3xl bg-[#1D1B1C] p-8 text-white md:p-12 lg:p-14">
            <div className="max-w-4xl">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#EF5A4F]">
                Animation photo
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
                Location de photobooth à Auxerre
              </h2>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-white/75">
                Le photobooth permet à vos invités de repartir avec un
                souvenir de votre mariage, anniversaire ou soirée. Nous
                proposons plusieurs formules de location, avec galerie
                photo et personnalisation du cadre, ainsi que des
                formules avec impressions.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/prestations/photobooth"
                  className="rounded-xl bg-[#EF5A4F] px-6 py-3.5 font-bold text-white transition hover:bg-[#D94A41]"
                >
                  Voir les formules photobooth
                </Link>

                <Link
                  href="/realisations/anniversaire-18-ans-auxerre"
                  className="rounded-xl border border-white/20 px-6 py-3.5 font-bold text-white transition hover:bg-white/10"
                >
                  Voir une réalisation à Auxerre
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            ÉVÉNEMENTS
        ===================================================== */}

        <section className="border-y border-[#E9E2DD] bg-[#F7F3EF]">
          <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
            <div className="grid gap-12 lg:grid-cols-2">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#EF5A4F]">
                  Mariage • Anniversaire • Entreprise
                </p>

                <h2 className="mt-3 text-3xl font-bold tracking-tight">
                  Une solution adaptée à votre réception
                </h2>
              </div>

              <div className="space-y-5 leading-8 text-[#716A6C]">
                <p>
                  Pour un mariage à Auxerre, vous pouvez par exemple
                  associer le photobooth au mobilier et aux effets
                  visuels. Pour un anniversaire, la sonorisation,
                  l&apos;éclairage et le photobooth permettent de
                  composer une solution complète.
                </p>

                <p>
                  Les associations et entreprises peuvent également
                  louer séparément un vidéoprojecteur, un écran, des
                  microphones ou du matériel de sonorisation selon leur
                  événement.
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
              Location événementielle à Auxerre
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

        {/* =====================================================
            CTA
        ===================================================== */}

        <section className="bg-[#FFF0ED]">
          <div className="mx-auto max-w-5xl px-6 py-16 text-center lg:px-8 lg:py-20">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#EF5A4F]">
              Votre événement à Auxerre
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
              Besoin de matériel pour votre prochaine réception ?
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-[#716A6C]">
              Indiquez-nous votre date, votre lieu et le matériel dont
              vous avez besoin pour recevoir une proposition adaptée à
              votre événement.
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