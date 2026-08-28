import {
  CalendarDays,
  Camera,
  Clock3,
  MapPinned,
  ShieldCheck,
  Sparkles,
  Star,
  Truck,
  Wrench,
} from "lucide-react";

/* ============================================================
   CHIFFRES CLÉS
============================================================ */

const stats = [
  {
    icon: CalendarDays,
    value: "2023",
    label: "Entreprise créée",
  },
  {
    icon: Star,
    value: "100+",
    label: "Événements réalisés",
  },
  {
    icon: Camera,
    value: "10+",
    label: "Matériels à louer",
  },
  {
    icon: MapPinned,
    value: "Nièvre • Yonne • Cher",
    label: "Zone d'intervention",
  },
];

/* ============================================================
   POINTS FORTS
============================================================ */

const advantages = [
  {
    icon: Truck,
    title: "Livraison offerte",
    description: "Jusqu'à 20 km autour de notre dépôt.",
  },
  {
    icon: Wrench,
    title: "Installation comprise",
    description: "Nous installons le matériel lorsque nécessaire.",
  },
  {
    icon: ShieldCheck,
    title: "Matériel professionnel",
    description: "Contrôlé et entretenu avant chaque location.",
  },
  {
    icon: Sparkles,
    title: "Prestations personnalisées",
    description: "Des solutions adaptées à votre événement.",
  },
];

/* ============================================================
   COMPOSANT
============================================================ */

export default function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden bg-[#050505] py-10 sm:py-12 lg:py-16">

      {/* HALOS */}

      <div className="pointer-events-none absolute -left-40 top-0 h-[300px] w-[300px] rounded-full bg-green-500/10 blur-[140px]" />

      <div className="pointer-events-none absolute -right-40 bottom-0 h-[250px] w-[250px] rounded-full bg-green-500/5 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* =====================================================
            TITRE
        ===================================================== */}

        <div className="mx-auto max-w-3xl text-center">

          <span className="inline-flex items-center gap-2 rounded-full border border-green-500/30 bg-green-500/10 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.22em] text-green-400 sm:text-xs">
            <ShieldCheck size={14} />
            Pourquoi Event&apos;S Location ?
          </span>

          <h2 className="mt-4 text-2xl font-black tracking-tight text-white sm:text-3xl lg:text-4xl">
            Votre événement,
            <span className="text-green-400">
              {" "}notre priorité
            </span>
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-gray-400 sm:text-base">
            Du matériel professionnel et un accompagnement
            personnalisé pour vos mariages, anniversaires
            et événements.
          </p>

        </div>

        {/* =====================================================
            CHIFFRES CLÉS
        ===================================================== */}

        <div className="mt-8 grid grid-cols-2 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] lg:grid-cols-4">

          {stats.map((stat, index) => {
            const Icon = stat.icon;

            return (
              <div
                key={stat.label}
                className={`flex min-h-[110px] items-center gap-3 p-4 sm:p-5 ${
                  index % 2 !== 0
                    ? "border-l border-white/10"
                    : ""
                } ${
                  index >= 2
                    ? "border-t border-white/10 lg:border-t-0"
                    : ""
                } ${
                  index > 0
                    ? "lg:border-l lg:border-white/10"
                    : ""
                }`}
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-green-500/10 sm:h-11 sm:w-11">
                  <Icon
                    size={20}
                    className="text-green-400"
                  />
                </div>

                <div className="min-w-0">
                  <p className="text-lg font-black leading-tight text-white sm:text-xl">
                    {stat.value}
                  </p>

                  <p className="mt-1 text-xs leading-4 text-gray-400 sm:text-sm">
                    {stat.label}
                  </p>
                </div>
              </div>
            );
          })}

        </div>

        {/* =====================================================
            AVANTAGES
        ===================================================== */}

        <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">

          {advantages.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.title}
                className="group rounded-2xl border border-white/10 bg-white/[0.035] p-4 transition duration-300 hover:border-green-500/30 hover:bg-white/[0.06] sm:p-5"
              >
                <div className="flex items-start gap-3">

                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-green-500/10 transition group-hover:bg-green-500">
                    <Icon
                      size={20}
                      className="text-green-400 transition group-hover:text-white"
                    />
                  </div>

                  <div>
                    <h3 className="text-sm font-bold text-white sm:text-base">
                      {item.title}
                    </h3>

                    <p className="mt-1 text-xs leading-5 text-gray-400 sm:text-sm">
                      {item.description}
                    </p>
                  </div>

                </div>
              </article>
            );
          })}

        </div>

        {/* =====================================================
            PETITE BARRE DE CONFIANCE
        ===================================================== */}

        <div className="mt-5 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 border-t border-white/10 pt-5 text-xs font-medium text-gray-400 sm:text-sm">

          <span className="flex items-center gap-2">
            <Clock3
              size={15}
              className="text-green-400"
            />
            Réponse sous 24 h
          </span>

          <span className="hidden h-1 w-1 rounded-full bg-gray-600 sm:block" />

          <span className="flex items-center gap-2">
            <Star
              size={15}
              className="text-green-400"
            />
            Plus de 100 événements
          </span>

          <span className="hidden h-1 w-1 rounded-full bg-gray-600 sm:block" />

          <span className="flex items-center gap-2">
            <ShieldCheck
              size={15}
              className="text-green-400"
            />
            Accompagnement 7j/7
          </span>

        </div>

      </div>
    </section>
  );
}