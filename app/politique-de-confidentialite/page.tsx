import Link from "next/link";

export default function PolitiqueConfidentialitePage() {
  return (
    <main className="min-h-screen bg-[#050505] px-5 py-24 text-white sm:px-6 lg:px-8">

      <div className="mx-auto max-w-4xl">

        <Link
          href="/"
          className="text-sm font-semibold text-green-400 transition hover:text-green-300"
        >
          ← Retour à l'accueil
        </Link>

        <div className="mt-10">

          <span className="inline-flex rounded-full border border-green-500/30 bg-green-500/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.25em] text-green-400">
            Protection de vos données
          </span>

          <h1 className="mt-6 text-4xl font-black sm:text-5xl">
            Politique de confidentialité
          </h1>

          <p className="mt-5 leading-7 text-gray-400">
            Cette politique décrit la manière dont Event&apos;S Location
            collecte et utilise les données personnelles transmises via
            le site eventslocation.fr.
          </p>

          <p className="mt-3 text-sm text-gray-500">
            Dernière mise à jour : août 2026
          </p>

        </div>

        <div className="mt-12 space-y-8">

          <section className="rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8">

            <h2 className="text-2xl font-bold">
              Responsable du traitement
            </h2>

            <div className="mt-5 leading-7 text-gray-300">

              <p>
                Le responsable du traitement des données est :
              </p>

              <p className="mt-4">
                <strong className="text-white">
                  Sébastien HAMON – Event&apos;S Location
                </strong>
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
                  href="mailto:events.location@outlook.com"
                  className="text-green-400 hover:text-green-300"
                >
                  events.location@outlook.com
                </a>
              </p>

            </div>

          </section>

          <section className="rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8">

            <h2 className="text-2xl font-bold">
              Données collectées
            </h2>

            <p className="mt-5 leading-7 text-gray-300">
              Lorsque vous utilisez le formulaire de demande de devis,
              les données suivantes peuvent être collectées :
            </p>

            <ul className="mt-5 space-y-3 text-gray-300">
              <li>• Nom et prénom</li>
              <li>• Adresse e-mail</li>
              <li>• Numéro de téléphone</li>
              <li>• Type d&apos;événement</li>
              <li>• Date de l&apos;événement</li>
              <li>• Ville ou lieu de réception</li>
              <li>• Nombre d&apos;invités</li>
              <li>• Prestations souhaitées</li>
              <li>• Informations renseignées librement dans le message</li>
            </ul>

          </section>

          <section className="rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8">

            <h2 className="text-2xl font-bold">
              Finalités du traitement
            </h2>

            <p className="mt-5 leading-7 text-gray-300">
              Les données transmises via le site sont utilisées pour :
            </p>

            <ul className="mt-5 space-y-3 text-gray-300">
              <li>• Répondre aux demandes de devis</li>
              <li>• Vérifier la disponibilité du matériel</li>
              <li>• Préparer une proposition commerciale</li>
              <li>• Contacter le demandeur concernant son événement</li>
              <li>• Assurer le suivi de la relation commerciale</li>
            </ul>

          </section>

          <section className="rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8">

            <h2 className="text-2xl font-bold">
              Base légale
            </h2>

            <p className="mt-5 leading-7 text-gray-300">
              Le traitement des informations transmises dans le cadre
              d&apos;une demande de devis repose principalement sur les
              démarches précontractuelles effectuées à la demande de la
              personne concernée.
            </p>

          </section>

          <section className="rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8">

            <h2 className="text-2xl font-bold">
              Destinataires des données
            </h2>

            <p className="mt-5 leading-7 text-gray-300">
              Les données sont destinées à Event&apos;S Location et aux
              prestataires techniques strictement nécessaires au
              fonctionnement du site et à l&apos;envoi des demandes.
            </p>

            <p className="mt-4 leading-7 text-gray-300">
              Les données ne sont pas vendues à des tiers.
            </p>

          </section>

          <section className="rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8">

            <h2 className="text-2xl font-bold">
              Durée de conservation
            </h2>

            <p className="mt-5 leading-7 text-gray-300">
              Les données issues des demandes de devis sont conservées
              pendant la durée nécessaire au traitement de la demande et
              au suivi de la relation commerciale.
            </p>

            <p className="mt-4 leading-7 text-gray-300">
              Lorsque la demande ne donne pas lieu à une prestation, nous
              prévoyons une durée maximale de conservation de 3 ans après
              le dernier contact, sauf obligation légale imposant une
              durée différente.
            </p>

          </section>

          <section className="rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8">

            <h2 className="text-2xl font-bold">
              Vos droits
            </h2>

            <p className="mt-5 leading-7 text-gray-300">
              Conformément à la réglementation applicable, vous pouvez
              notamment demander l&apos;accès à vos données, leur
              rectification, leur effacement ou la limitation de certains
              traitements.
            </p>

            <p className="mt-4 leading-7 text-gray-300">
              Pour exercer vos droits, contactez :
            </p>

            <a
              href="mailto:events.location@outlook.com"
              className="mt-4 inline-block font-semibold text-green-400 hover:text-green-300"
            >
              events.location@outlook.com
            </a>

            <p className="mt-5 leading-7 text-gray-300">
              Vous disposez également du droit d&apos;introduire une
              réclamation auprès de la CNIL.
            </p>

          </section>

          <section className="rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8">

            <h2 className="text-2xl font-bold">
              Cookies
            </h2>

            <p className="mt-5 leading-7 text-gray-300">
              À ce jour, les cookies strictement nécessaires au
              fonctionnement technique du site peuvent être utilisés.
            </p>

            <p className="mt-4 leading-7 text-gray-300">
              Si des outils de mesure d&apos;audience ou des services
              nécessitant un consentement sont ajoutés ultérieurement,
              cette politique sera mise à jour et un mécanisme de gestion
              du consentement sera mis en place lorsque cela est requis.
            </p>

          </section>

          <section className="rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8">

            <h2 className="text-2xl font-bold">
              Sécurité
            </h2>

            <p className="mt-5 leading-7 text-gray-300">
              Event&apos;S Location met en œuvre des mesures raisonnables
              destinées à protéger les données personnelles contre
              l&apos;accès, la modification, la divulgation ou la
              destruction non autorisés.
            </p>

          </section>

          <section className="rounded-3xl border border-green-500/20 bg-green-500/10 p-6 sm:p-8">

            <h2 className="text-2xl font-bold">
              Contact
            </h2>

            <p className="mt-5 leading-7 text-gray-300">
              Pour toute question concernant cette politique ou
              l&apos;utilisation de vos données :
            </p>

            <a
              href="mailto:events.location@outlook.com"
              className="mt-4 inline-block font-semibold text-green-400 hover:text-green-300"
            >
              events.location@outlook.com
            </a>

          </section>

        </div>

      </div>

    </main>
  );
}