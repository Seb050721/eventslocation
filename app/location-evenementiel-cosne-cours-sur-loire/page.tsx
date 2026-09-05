import type { Metadata } from "next";
import Link from "next/link";

import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

const SITE_URL = "https://www.eventslocation.fr";
const PAGE_URL = `${SITE_URL}/location-evenementiel-cosne-cours-sur-loire`;

export const metadata: Metadata = {
  title: "Location événementiel Cosne-Cours-sur-Loire | Photobooth & sono",
  description:
    "Location de matériel événementiel à Cosne-Cours-sur-Loire : photobooth, sono, tables, chaises, vidéoprojecteur, écran et effets pour vos événements.",
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title:
      "Location de matériel événementiel à Cosne-Cours-sur-Loire | Event'S Location",
    description:
      "Photobooth, sonorisation, mobilier, projection et effets pour vos mariages, anniversaires et événements à Cosne-Cours-sur-Loire.",
    url: PAGE_URL,
    siteName: "Event'S Location",
    locale: "fr_FR",
    type: "website",
  },
};

const services = [
  {
    title: "Photobooth à Cosne-Cours-sur-Loire",
    text: "Proposez une animation photo à vos invités lors d'un mariage, anniversaire ou autre réception. Plusieurs formules sont disponibles avec ou sans impressions.",
    href: "/prestations/photobooth",
    link: "Voir les formules photobooth",
  },
  {
    title: "Sonorisation",
    text: "Pour votre musique, vos discours ou vos animations, Event'S Location propose du matériel de sonorisation adapté à différents types de réceptions.",
    href: "/prestations/sonorisation",
    link: "Voir la sonorisation",
  },
  {
    title: "Tables et chaises",
    text: "Aménagez votre réception avec des tables rondes ou rectangulaires, des chaises, des mange-debout et des tabourets selon vos besoins.",
    href: "/prestations/mobilier",
    link: "Découvrir le mobilier",
  },
  {
    title: "Vidéoprojecteur et écran",
    text: "Diffusez un diaporama, une vidéo ou une présentation grâce à la location d'un vidéoprojecteur et d'un grand écran.",
    href: "/prestations/projection",
    link: "Voir la projection",
  },
  {
    title: "Machines à effets",
    text: "Complétez l'ambiance de votre soirée avec une machine à fumée, une machine à bulles ou d'autres équipements d'animation.",
    href: "/prestations/effets",
    link: "Découvrir les effets",
  },
  {
    title: "Smoke Puff",
    text: "Pour une arrivée, une cérémonie ou un moment fort de votre événement, les Smoke Puff permettent de créer un effet visuel marquant.",
    href: "/prestations/feux",
    link: "Découvrir les Smoke Puff",
  },
];

const faq = [
  {
    question:
      "Proposez-vous la location de photobooth à Cosne-Cours-sur-Loire ?",
    answer:
      "Oui. Event'S Location propose plusieurs formules photobooth pour les mariages, anniversaires, soirées et autres événements organisés à Cosne-Cours-sur-Loire et dans les environs.",
  },
  {
    question:
      "Peut-on louer du matériel de sonorisation à Cosne-Cours-sur-Loire ?",
    answer:
      "Oui. Plusieurs équipements de sonorisation sont disponibles à la location, notamment pour diffuser de la musique, utiliser des microphones ou équiper une réception.",
  },
  {
    question:
      "Proposez-vous des tables et des chaises pour une réception à Cosne ?",
    answer:
      "Oui. Event'S Location dispose notamment de tables rondes, tables rectangulaires, chaises, mange-debout et tabourets. Les quantités dépendent des disponibilités à la date souhaitée.",
  },
  {
    question:
      "Peut-on louer un vidéoprojecteur et un écran à Cosne-Cours-sur-Loire ?",
    answer:
      "Oui. Le vidéoprojecteur et l'écran peuvent être loués pour diffuser des photos, des vidéos ou des présentations pendant votre événement.",
  },
];

export default function LocationEvenementielCosnePage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Location de matériel événementiel à Cosne-Cours-sur-Loire",
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
      name: "Cosne-Cours-sur-Loire",
    },
    description:
      "Location de photobooth, sonorisation, mobilier, vidéoprojecteur, écran et matériel événementiel à Cosne-Cours-sur-Loire.",
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
        {/* HERO */}

        <section className="border-b border-[#E9E2DD] bg-white">
          <div className="mx-auto max-w-7xl px-6 pb-16 pt-32 lg:px-8 lg:pb-24 lg:pt-40">
            <div className="max-w-4xl">
              <p className="mb-5 text-sm font-bold uppercase tracking-[0.18em] text-[#347A77]">
                Event&apos;S Location • Cosne-Cours-sur-Loire
              </p>

              <h1 className="text-4xl font-bold leading-tight tracking-tight md:text-5xl lg:text-6xl">
                Location de matériel événementiel à{" "}
                <span className="text-[#EF5A4F]">
                  Cosne-Cours-sur-Loire
                </span>
              </h1>

              <p className="mt-7 max-w-3xl text-lg leading-8 text-[#716A6C] md:text-xl">
                Mariage, anniversaire, soirée, réception ou événement
                professionnel à Cosne-Cours-sur-Loire : louez le matériel
                nécessaire avec Event&apos;S Location, du photobooth au
                mobilier en passant par la sonorisation et la projection.
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

        {/* INTRODUCTION */}

        <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#EF5A4F]">
                Votre réception à Cosne
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
                Plusieurs équipements pour une seule organisation
              </h2>

              <div className="mt-6 space-y-5 text-base leading-8 text-[#716A6C]">
                <p>
                  Event&apos;S Location accompagne les particuliers,
                  associations et professionnels qui recherchent du
                  matériel pour leurs événements dans le secteur de
                  Cosne-Cours-sur-Loire.
                </p>

                <p>
                  Selon votre projet, vous pouvez louer du mobilier pour
                  recevoir vos invités, une sonorisation pour votre
                  soirée, un photobooth pour l&apos;animation ou encore
                  du matériel de projection.
                </p>

                <p>
                  Chaque équipement peut être loué séparément ou intégré
                  à une demande regroupant plusieurs besoins.
                </p>
              </div>
            </div>

            <aside className="rounded-3xl border border-[#E9E2DD] bg-white p-7 shadow-sm md:p-9">
              <p className="text-sm font-bold uppercase tracking-[0.15em] text-[#347A77]">
                Matériel événementiel
              </p>

              <h2 className="mt-3 text-2xl font-bold">
                Pour différents types d&apos;événements
              </h2>

              <div className="mt-6 grid grid-cols-2 gap-3 text-sm font-semibold">
                {[
                  "Mariages",
                  "Anniversaires",
                  "Soirées",
                  "Réceptions",
                  "Associations",
                  "Entreprises",
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
                  Une date en tête ?
                </p>

                <p className="mt-2 text-sm leading-6 text-[#716A6C]">
                  Consultez les disponibilités du matériel avant votre
                  demande.
                </p>

                <Link
                  href="/disponibilites"
                  className="mt-4 inline-block font-bold text-[#EF5A4F] hover:underline"
                >
                  Vérifier ma date →
                </Link>
              </div>
            </aside>
          </div>
        </section>

        {/* PRESTATIONS */}

        <section className="border-y border-[#E9E2DD] bg-white">
          <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
            <div className="max-w-3xl">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#347A77]">
                Nos prestations
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
                Matériel événementiel à louer à Cosne-Cours-sur-Loire
              </h2>

              <p className="mt-5 text-lg leading-8 text-[#716A6C]">
                Retrouvez plusieurs solutions pour aménager, sonoriser et
                animer votre événement.
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

        {/* PHOTOBOOTH / SONO */}

        <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
          <div className="grid gap-8 lg:grid-cols-2">
            <article className="rounded-3xl bg-[#1D1B1C] p-8 text-white md:p-10">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#EF5A4F]">
                Animation photo
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight">
                Location de photobooth à Cosne-Cours-sur-Loire
              </h2>

              <p className="mt-6 leading-8 text-white/75">
                Le photobooth permet à vos invités de réaliser leurs
                propres photos tout au long de votre réception. Le cadre
                photo est personnalisé pour votre événement et plusieurs
                formules sont disponibles avec ou sans impressions.
              </p>

              <Link
                href="/prestations/photobooth"
                className="mt-8 inline-block rounded-xl bg-[#EF5A4F] px-6 py-3.5 font-bold text-white transition hover:bg-[#D94A41]"
              >
                Voir les formules photobooth
              </Link>
            </article>

            <article className="rounded-3xl border border-[#E9E2DD] bg-white p-8 md:p-10">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#347A77]">
                Musique & discours
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight">
                Location de sono à Cosne
              </h2>

              <p className="mt-6 leading-8 text-[#716A6C]">
                Pour une soirée, un anniversaire ou une réception, la
                sonorisation permet de diffuser votre musique et
                d&apos;utiliser des microphones selon vos besoins.
              </p>

              <Link
                href="/prestations/sonorisation"
                className="mt-8 inline-block font-bold text-[#EF5A4F] hover:underline"
              >
                Découvrir le matériel de sonorisation →
              </Link>
            </article>
          </div>
        </section>

        {/* PROJECTION / MOBILIER */}

        <section className="border-y border-[#E9E2DD] bg-[#F7F3EF]">
          <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
            <div className="grid gap-10 lg:grid-cols-2">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#EF5A4F]">
                  Projection
                </p>

                <h2 className="mt-3 text-3xl font-bold tracking-tight">
                  Vidéoprojecteur et écran à Cosne-Cours-sur-Loire
                </h2>

                <p className="mt-5 leading-8 text-[#716A6C]">
                  Pour diffuser un diaporama de mariage, une vidéo
                  d&apos;anniversaire ou une présentation professionnelle,
                  un vidéoprojecteur et un grand écran sont disponibles à
                  la location.
                </p>

                <Link
                  href="/prestations/projection"
                  className="mt-6 inline-block font-bold text-[#EF5A4F] hover:underline"
                >
                  Voir le matériel de projection →
                </Link>
              </div>

              <div>
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#347A77]">
                  Aménagement
                </p>

                <h2 className="mt-3 text-3xl font-bold tracking-tight">
                  Tables, chaises et mobilier événementiel
                </h2>

                <p className="mt-5 leading-8 text-[#716A6C]">
                  Tables rondes, tables rectangulaires, chaises,
                  mange-debout et tabourets permettent d&apos;aménager
                  votre salle ou votre espace de réception selon le
                  nombre d&apos;invités.
                </p>

                <Link
                  href="/prestations/mobilier"
                  className="mt-6 inline-block font-bold text-[#EF5A4F] hover:underline"
                >
                  Découvrir notre mobilier →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* MAILLAGE LOCAL */}

        <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#347A77]">
            Nos secteurs
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight">
            Event&apos;S Location intervient également dans d&apos;autres
            secteurs
          </h2>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/location-evenementiel-clamecy"
              className="rounded-xl border border-[#E9E2DD] bg-white px-5 py-3 font-bold transition hover:border-[#EF5A4F]"
            >
              Location événementielle à Clamecy
            </Link>

            <Link
              href="/location-evenementiel-nevers"
              className="rounded-xl border border-[#E9E2DD] bg-white px-5 py-3 font-bold transition hover:border-[#EF5A4F]"
            >
              Location événementielle à Nevers
            </Link>

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
        </section>

        {/* FAQ */}

        <section className="border-t border-[#E9E2DD] bg-white">
          <div className="mx-auto max-w-5xl px-6 py-16 lg:px-8 lg:py-24">
            <div className="text-center">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#347A77]">
                Questions fréquentes
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
                Location de matériel à Cosne-Cours-sur-Loire
              </h2>
            </div>

            <div className="mt-12 space-y-4">
              {faq.map((item) => (
                <article
                  key={item.question}
                  className="rounded-2xl border border-[#E9E2DD] bg-[#FBFAF8] p-6 md:p-7"
                >
                  <h3 className="text-lg font-bold">{item.question}</h3>

                  <p className="mt-3 leading-7 text-[#716A6C]">
                    {item.answer}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}

        <section className="bg-[#FFF0ED]">
          <div className="mx-auto max-w-5xl px-6 py-16 text-center lg:px-8 lg:py-20">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#EF5A4F]">
              Event&apos;S Location
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
              Votre événement à Cosne-Cours-sur-Loire
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-[#716A6C]">
              Indiquez votre date, votre lieu et le matériel dont vous
              avez besoin pour préparer votre demande.
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
            __html: JSON.stringify(faqSchema),
          }}
        />
      </main>

      <Footer />
    </>
  );
}