
import type { Metadata } from "next";
import Link from "next/link";

/* ============================================================
   CONFIGURATION
============================================================ */

const SITE_URL = "https://www.eventsemotions.fr";
const BUSINESS_EMAIL = "sebastien.hamon@eventsemotions.fr";

export const metadata: Metadata = {
  title: "Politique de confidentialité",
  description:
    "Découvrez comment Event'S Emotions protège et traite les données personnelles collectées sur son site de location de matériel événementiel.",
  alternates: {
    canonical: `${SITE_URL}/politique-de-confidentialite`,
  },
  robots: {
    index: true,
    follow: true,
  },
};

/* ============================================================
   DONNÉES COLLECTÉES
============================================================ */

const collectedData = [
  "Nom et prénom",
  "Adresse e-mail",
  "Numéro de téléphone",
  "Type d'événement",
  "Date de l'événement",
  "Ville ou lieu de réception",
  "Nombre d'invités",
  "Prestations souhaitées",
  "Informations renseignées librement dans le message",
];

/* ============================================================
   FINALITÉS
============================================================ */

const purposes = [
  "Répondre aux demandes de devis",
  "Vérifier la disponibilité du matériel",
  "Préparer une proposition commerciale",
  "Contacter le demandeur concernant son événement",
  "Assurer le suivi de la relation commerciale",
];

/* ============================================================
   PAGE
============================================================ */

export default function PolitiqueConfidentialitePage() {
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
          <span className="inline-flex rounded-full border border-[#4A9692]/25 bg-[#EDF7F6] px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[#347A77]">
            Protection de vos données
          </span>

          <h1 className="mt-6 text-4xl font-black tracking-tight sm:text-5xl">
            Politique de confidentialité
          </h1>

          <p className="mt-5 leading-7 text-[#716A6C]">
            Cette politique décrit la manière dont
            Event&apos;S Emotions collecte et utilise
            les données personnelles transmises via
            le site{" "}
            <a
              href={SITE_URL}
              className="font-semibold text-[#D94A41] hover:underline"
            >
              www.eventsemotions.fr
            </a>
            .
          </p>

          <p className="mt-3 text-sm text-[#716A6C]">
            Dernière mise à jour : novembre 2026
          </p>
        </div>

        {/* SECTIONS */}

        <div className="mt-12 space-y-7">

          {/* RESPONSABLE */}

          <section className="rounded-3xl border border-[#E9E2DD] bg-white p-6 shadow-sm sm:p-8">
            <h2 className="text-2xl font-bold">
              Responsable du traitement
            </h2>

            <div className="mt-5 leading-7 text-[#514A4C]">
              <p>
                Le responsable du traitement des données est :
              </p>

              <p className="mt-4">
                <strong className="text-[#1D1B1C]">
                  Sébastien HAMON – Event&apos;S Emotions
                </strong>
                <br />
                Entrepreneur individuel
                <br />
                17 Boulevard DUPIN
                <br />
                58210 Varzy
                <br />
                France
              </p>

              <p className="mt-4">
                E-mail :{" "}
                <a
                  href={`mailto:${BUSINESS_EMAIL}`}
                  className="break-all font-semibold text-[#D94A41] hover:underline"
                >
                  {BUSINESS_EMAIL}
                </a>
              </p>
            </div>
          </section>

          {/* DONNÉES COLLECTÉES */}

          <section className="rounded-3xl border border-[#E9E2DD] bg-white p-6 shadow-sm sm:p-8">
            <h2 className="text-2xl font-bold">
              Données collectées
            </h2>

            <p className="mt-5 leading-7 text-[#514A4C]">
              Lorsque vous utilisez le formulaire de demande
              de devis, les données suivantes peuvent être
              collectées :
            </p>

            <ul className="mt-5 space-y-3 text-[#514A4C]">
              {collectedData.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3"
                >
                  <span
                    aria-hidden="true"
                    className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#EF5A4F]"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* FINALITÉS */}

          <section className="rounded-3xl border border-[#E9E2DD] bg-white p-6 shadow-sm sm:p-8">
            <h2 className="text-2xl font-bold">
              Finalités du traitement
            </h2>

            <p className="mt-5 leading-7 text-[#514A4C]">
              Les données transmises via le site sont
              utilisées pour :
            </p>

            <ul className="mt-5 space-y-3 text-[#514A4C]">
              {purposes.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3"
                >
                  <span
                    aria-hidden="true"
                    className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#4A9692]"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* BASE LÉGALE */}

          <section className="rounded-3xl border border-[#E9E2DD] bg-white p-6 shadow-sm sm:p-8">
            <h2 className="text-2xl font-bold">
              Base légale
            </h2>

            <p className="mt-5 leading-7 text-[#514A4C]">
              Le traitement des informations transmises
              dans le cadre d&apos;une demande de devis
              repose principalement sur les démarches
              précontractuelles effectuées à la demande
              de la personne concernée, conformément
              à l&apos;article 6, paragraphe 1, point b,
              du RGPD.
            </p>

            <p className="mt-4 leading-7 text-[#514A4C]">
              Lorsque la prestation est confirmée,
              certaines données peuvent également
              être traitées pour l&apos;exécution du
              contrat et le respect des obligations
              légales applicables.
            </p>
          </section>

          {/* DESTINATAIRES */}

          <section className="rounded-3xl border border-[#E9E2DD] bg-white p-6 shadow-sm sm:p-8">
            <h2 className="text-2xl font-bold">
              Destinataires des données
            </h2>

            <p className="mt-5 leading-7 text-[#514A4C]">
              Les données sont destinées à
              Event&apos;S Emotions et aux prestataires
              techniques nécessaires au fonctionnement
              du site, à l&apos;hébergement, à la gestion
              des disponibilités et à l&apos;envoi des
              communications liées aux demandes.
            </p>

            <p className="mt-4 leading-7 text-[#514A4C]">
              Selon les fonctionnalités utilisées,
              ces prestataires peuvent notamment
              comprendre les services d&apos;hébergement,
              de messagerie et de calendrier.
            </p>

            <p className="mt-4 leading-7 text-[#514A4C]">
              Les données personnelles ne sont pas
              vendues à des tiers.
            </p>
          </section>

          {/* CONSERVATION */}

          <section className="rounded-3xl border border-[#E9E2DD] bg-white p-6 shadow-sm sm:p-8">
            <h2 className="text-2xl font-bold">
              Durée de conservation
            </h2>

            <p className="mt-5 leading-7 text-[#514A4C]">
              Les données issues des demandes de devis
              sont conservées pendant la durée nécessaire
              au traitement de la demande et au suivi
              de la relation commerciale.
            </p>

            <p className="mt-4 leading-7 text-[#514A4C]">
              Lorsque la demande ne donne pas lieu à
              une prestation, une durée maximale de
              conservation de 3 ans après le dernier
              contact est prévue, sauf obligation
              légale imposant une durée différente.
            </p>

            <p className="mt-4 leading-7 text-[#514A4C]">
              Les documents liés à une prestation
              réalisée peuvent être conservés plus
              longtemps lorsque des obligations
              comptables, fiscales ou légales
              le nécessitent.
            </p>
          </section>

          {/* DROITS */}

          <section className="rounded-3xl border border-[#E9E2DD] bg-white p-6 shadow-sm sm:p-8">
            <h2 className="text-2xl font-bold">
              Vos droits
            </h2>

            <p className="mt-5 leading-7 text-[#514A4C]">
              Conformément à la réglementation
              applicable, vous disposez notamment
              des droits d&apos;accès, de rectification,
              d&apos;effacement et de limitation
              du traitement de vos données.
            </p>

            <p className="mt-4 leading-7 text-[#514A4C]">
              Vous pouvez également exercer,
              selon les conditions prévues par
              la réglementation, vos droits
              d&apos;opposition et de portabilité.
            </p>

            <p className="mt-4 leading-7 text-[#514A4C]">
              Pour exercer vos droits, contactez :
            </p>

            <a
              href={`mailto:${BUSINESS_EMAIL}`}
              className="mt-4 inline-block break-all font-semibold text-[#D94A41] hover:underline"
            >
              {BUSINESS_EMAIL}
            </a>

            <p className="mt-5 leading-7 text-[#514A4C]">
              Vous disposez également du droit
              d&apos;introduire une réclamation
              auprès de la{" "}
              <a
                href="https://www.cnil.fr"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-[#347A77] hover:underline"
              >
                CNIL
              </a>
              .
            </p>
          </section>

          {/* COOKIES */}

          <section className="rounded-3xl border border-[#E9E2DD] bg-white p-6 shadow-sm sm:p-8">
            <h2 className="text-2xl font-bold">
              Cookies
            </h2>

            <p className="mt-5 leading-7 text-[#514A4C]">
              Des cookies ou dispositifs techniques
              strictement nécessaires au fonctionnement
              du site peuvent être utilisés.
            </p>

            <p className="mt-4 leading-7 text-[#514A4C]">
              Si des outils de mesure d&apos;audience,
              des services publicitaires ou des
              fonctionnalités nécessitant un consentement
              sont utilisés, les informations
              correspondantes seront précisées et
              un dispositif de gestion du consentement
              sera mis en place lorsque cela est requis.
            </p>
          </section>

          {/* SÉCURITÉ */}

          <section className="rounded-3xl border border-[#E9E2DD] bg-white p-6 shadow-sm sm:p-8">
            <h2 className="text-2xl font-bold">
              Sécurité
            </h2>

            <p className="mt-5 leading-7 text-[#514A4C]">
              Event&apos;S Emotions met en œuvre
              des mesures techniques et organisationnelles
              raisonnables destinées à protéger les
              données personnelles contre l&apos;accès,
              la modification, la divulgation ou
              la destruction non autorisés.
            </p>
          </section>

          {/* CONTACT */}

          <section className="rounded-3xl border border-[#4A9692]/25 bg-[#EDF7F6] p-6 sm:p-8">
            <h2 className="text-2xl font-bold">
              Une question sur vos données ?
            </h2>

            <p className="mt-5 leading-7 text-[#514A4C]">
              Pour toute question concernant cette
              politique de confidentialité ou
              l&apos;utilisation de vos données,
              vous pouvez contacter directement
              Event&apos;S Emotions.
            </p>

            <a
              href={`mailto:${BUSINESS_EMAIL}`}
              className="mt-5 inline-flex max-w-full break-all rounded-xl bg-[#4A9692] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#347A77]"
            >
              {BUSINESS_EMAIL}
            </a>
          </section>

        </div>
      </div>
    </main>
  );
}
