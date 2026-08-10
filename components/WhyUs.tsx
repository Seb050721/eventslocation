export default function WhyUs() {
  const avantages = [
    "✔ Plus de 100 événements réalisés",
    "✔ Installation et reprise du matériel",
    "✔ Matériel professionnel récent",
    "✔ Personnalisation de votre événement",
    "✔ Déplacement dans toute la France sur devis",
    "✔ Accompagnement avant, pendant et après votre événement",
  ];

  return (
    <section className="bg-gray-50 py-24">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-16 px-6 lg:flex-row">

        <div className="lg:w-1/2">
          <img
            src="/images/photobooth.jpg"
            alt="Photobooth Event'S Location"
            className="rounded-3xl shadow-2xl"
          />
        </div>

        <div className="lg:w-1/2">

          <span className="rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700">
            Pourquoi nous choisir ?
          </span>

          <h2 className="mt-6 text-5xl font-black text-gray-900">
            Une prestation clé en main
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            Depuis 2023, Event'S Location accompagne les particuliers,
            entreprises et associations avec du matériel professionnel
            pour tous types d'événements.
          </p>

          <div className="mt-10 space-y-5">
            {avantages.map((item) => (
              <div
                key={item}
                className="rounded-xl bg-white p-5 shadow-md transition hover:scale-[1.02]"
              >
                {item}
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}