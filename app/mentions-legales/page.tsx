
import type { Metadata } from "next";
import Link from "next/link";

const SITE_URL = "https://www.eventsemotions.fr";

export const metadata: Metadata = {
  title: "Mentions légales",
  description:
    "Consultez les mentions légales du site Event'S Emotions, entreprise de location de matériel événementiel située à Varzy dans la Nièvre.",
  alternates: {
    canonical: `${SITE_URL}/mentions-legales`,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function MentionsLegalesPage() {
  return (
    <main className="min-h-screen bg-[#FBFAF8] px-5 py-24 text-[#1D1B1C] sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">

        {/* RETOUR */}

        <Link
          href="/"
          className="inline-flex items-center text-sm font-semibold text-[#EF5A4F] transition hover:text-[#D94A41]"
        >
          ← Retour à l&apos;accueil
        </Link>

        {/* TITRE */}

        <div className="mt-10">
          <span className="inline-flex rounded-full border border-[#EF5A4F]/20 bg-[#FFF0ED] px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[#D94A41]">
            Informations légales
          </span>

          <h1 className="mt-6 text-4xl font-black tracking-tight sm:text-5xl">
            Mentions légales
          </h1>

          <p className="mt-4 text-sm text-[#716A6C]">
            Event&apos;S Emotions — Votre créateur d&apos;émotions
          </p>

          <p className="mt-3 text-sm text-[#716A6C]">
            Dernière mise à jour : novembre 2026
          </p>
        </div>

        {/* SECTIONS */}

        <div className="mt-12 space-y-7">

          {/* ÉDITEUR */}

          <section className="rounded-3xl border border-[#E9E2DD] bg-white p-6 shadow-sm sm:p-8">
            <h2 className="text-2xl font-bold">
              Éditeur du site
            </h2>

            <div className="mt-5 space-y-3 leading-7 text-[#514A4C]">
              <p>
                <strong className="text-[#1D1B1C]">
                  Event&apos;S Emotions
                </strong>
                <br />
                Nom commercial
              </p>

              <p>
                Sébastien HAMON – Entrepreneur individuel
              </p>

              <p>
                17 Boulevard DUPIN
                <br />
                58210 Varzy
                <br />
                France
              </p>

              <p>SIREN : 877 623 835</p>
              <p>SIRET : 877 623 835 00031</p>

              <p>
                Téléphone :{" "}
                <a
                  href="tel:+33643894570"
                  className="font-semibold text-[#D94A41] hover:underline"
                >
                  06 43 89 45 70
                </a>
              </p>

              <p>
                E-mail :{" "}
                <a
                  href="mailto:sebastien.hamon@eventsemotions.fr"
                  className="break-all font-semibold text-[#D94A41] hover:underline"
                >
                  sebastien.hamon@eventsemotions.fr
                </a>
              </p>

              <p>
                Site internet :{" "}
                <a
                  href={SITE_URL}
                  className="font-semibold text-[#D94A41] hover:underline"
                >
                  www.eventsemotions.fr
                </a>
              </p>

              <p>TVA non applicable.</p>
            </div>
          </section>

          {/* DIRECTEUR DE PUBLICATION */}

          <section className="rounded-3xl border border-[#E9E2DD] bg-white p-6 shadow-sm sm:p-8">
            <h2 className="text-2xl font-bold">
              Directeur de la publication
            </h2>

            <p className="mt-5 leading-7 text-[#514A4C]">
              Le directeur de la publication est
              Sébastien HAMON, entrepreneur individuel.
            </p>
          </section>

          {/* HÉBERGEMENT */}

          <section className="rounded-3xl border border-[#E9E2DD] bg-white p-6 shadow-sm sm:p-8">
            <h2 className="text-2xl font-bold">
              Hébergement
            </h2>

            <div className="mt-5 space-y-3 leading-7 text-[#514A4C]">
              <p>Le site est hébergé par :</p>

              <p>
                <strong className="text-[#1D1B1C]">
                  Vercel Inc.
                </strong>
              </p>

              <p>
                440 N Barranca Avenue #4133
                <br />
                Covina, CA 91723
                <br />
                États-Unis
              </p>

              <p>
                Site de l&apos;hébergeur :{" "}
                <a
                  href="https://vercel.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-[#D94A41] hover:underline"
                >
                  vercel.com
                </a>
              </p>
            </div>
          </section>

          {/* PROPRIÉTÉ INTELLECTUELLE */}

          <section className="rounded-3xl border border-[#E9E2DD] bg-white p-6 shadow-sm sm:p-8">
            <h2 className="text-2xl font-bold">
              Propriété intellectuelle
            </h2>

            <p className="mt-5 leading-7 text-[#514A4C]">
              Les contenus présents sur le site
              Event&apos;S Emotions, notamment les textes,
              photographies, illustrations, graphismes,
              logos et éléments visuels, sont protégés
              par les règles applicables à la propriété
              intellectuelle.
            </p>

            <p className="mt-4 leading-7 text-[#514A4C]">
              Toute reproduction, représentation,
              modification ou utilisation non autorisée
              des contenus du site est interdite, sauf
              accord préalable écrit de l&apos;éditeur
              ou dans les cas autorisés par la loi.
            </p>
          </section>

          {/* RESPONSABILITÉ */}

          <section className="rounded-3xl border border-[#E9E2DD] bg-white p-6 shadow-sm sm:p-8">
            <h2 className="text-2xl font-bold">
              Responsabilité
            </h2>

            <p className="mt-5 leading-7 text-[#514A4C]">
              Event&apos;S Emotions s&apos;efforce de fournir
              des informations exactes et à jour.
              Les tarifs, disponibilités et caractéristiques
              des prestations présentés sur le site
              peuvent toutefois évoluer.
            </p>

            <p className="mt-4 leading-7 text-[#514A4C]">
              Les informations définitives sont celles
              figurant sur le devis ou le contrat
              accepté par le client.
            </p>
          </section>

          {/* DONNÉES PERSONNELLES */}

          <section className="rounded-3xl border border-[#4A9692]/25 bg-[#EDF7F6] p-6 sm:p-8">
            <h2 className="text-2xl font-bold">
              Données personnelles
            </h2>

            <p className="mt-5 leading-7 text-[#514A4C]">
              Pour toute information concernant la collecte,
              l&apos;utilisation et la protection de vos
              données personnelles, consultez notre{" "}
              <Link
                href="/politique-de-confidentialite"
                className="font-semibold text-[#347A77] underline-offset-4 hover:underline"
              >
                politique de confidentialité
              </Link>
              .
            </p>
          </section>

        </div>
      </div>
    </main>
  );
}
