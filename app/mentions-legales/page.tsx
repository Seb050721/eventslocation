import Link from "next/link";

export default function MentionsLegalesPage() {
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
            Informations légales
          </span>

          <h1 className="mt-6 text-4xl font-black sm:text-5xl">
            Mentions légales
          </h1>

          <p className="mt-5 text-gray-400">
            Dernière mise à jour : août 2026
          </p>

        </div>

        <div className="mt-12 space-y-8">

          <section className="rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8">

            <h2 className="text-2xl font-bold">
              Éditeur du site
            </h2>

            <div className="mt-5 space-y-2 leading-7 text-gray-300">

              <p>
                <strong className="text-white">
                  Event&apos;S Location
                </strong>
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

              <p>
                SIREN : 877 623 835
              </p>

              <p>
                SIRET : 877 623 835 00031
              </p>

              <p>
                Téléphone :{" "}
                <a
                  href="tel:0643894570"
                  className="text-green-400 hover:text-green-300"
                >
                  06 43 89 45 70
                </a>
              </p>

              <p>
                E-mail :{" "}
                <a
                  href="mailto:events.location@outlook.com"
                  className="text-green-400 hover:text-green-300"
                >
                  events.location@outlook.com
                </a>
              </p>

              <p>
                Site internet : eventslocation.fr
              </p>

              <p>
                TVA non applicable.
              </p>

            </div>

          </section>

          <section className="rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8">

            <h2 className="text-2xl font-bold">
              Directeur de la publication
            </h2>

            <p className="mt-5 leading-7 text-gray-300">
              Le directeur de la publication est Sébastien HAMON.
            </p>

          </section>

          <section className="rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8">

            <h2 className="text-2xl font-bold">
              Hébergement
            </h2>

            <div className="mt-5 space-y-2 leading-7 text-gray-300">

              <p>
                Le site est hébergé par :
              </p>

              <p>
                <strong className="text-white">
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

            </div>

          </section>

          <section className="rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8">

            <h2 className="text-2xl font-bold">
              Propriété intellectuelle
            </h2>

            <p className="mt-5 leading-7 text-gray-300">
              Les contenus présents sur le site Event&apos;S Location,
              notamment les textes, photographies, illustrations,
              graphismes et éléments visuels, sont protégés par les
              règles applicables à la propriété intellectuelle.
            </p>

            <p className="mt-4 leading-7 text-gray-300">
              Toute reproduction ou utilisation non autorisée des
              contenus du site est interdite, sauf accord préalable
              écrit d&apos;Event&apos;S Location.
            </p>

          </section>

          <section className="rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8">

            <h2 className="text-2xl font-bold">
              Responsabilité
            </h2>

            <p className="mt-5 leading-7 text-gray-300">
              Event&apos;S Location s&apos;efforce de fournir des
              informations exactes et à jour. Les tarifs, disponibilités
              et caractéristiques des prestations présentés sur le site
              peuvent toutefois évoluer.
            </p>

            <p className="mt-4 leading-7 text-gray-300">
              Les informations définitives sont celles figurant sur le
              devis ou le contrat accepté par le client.
            </p>

          </section>

          <section className="rounded-3xl border border-green-500/20 bg-green-500/10 p-6 sm:p-8">

            <h2 className="text-2xl font-bold">
              Données personnelles
            </h2>

            <p className="mt-5 leading-7 text-gray-300">
              Pour toute information concernant la collecte et le
              traitement des données personnelles, consultez notre{" "}
              <Link
                href="/politique-de-confidentialite"
                className="font-semibold text-green-400 hover:text-green-300"
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