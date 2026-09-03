import {
  CalendarDays,
  Camera,
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
    value: "Depuis 2023",
    label: "Event'S Location",
    color: "text-[#4A9692]",
    background: "bg-[#EDF7F6]",
  },
  {
    icon: Star,
    value: "100+",
    label: "Événements réalisés",
    color: "text-[#F3A044]",
    background: "bg-[#FFF5E9]",
  },
  {
    icon: Camera,
    value: "10+",
    label: "Équipements disponibles",
    color: "text-[#C34F72]",
    background: "bg-[#FAEEF2]",
  },
  {
    icon: MapPinned,
    value: "3 départements",
    label: "Nièvre • Yonne • Cher",
    color: "text-[#87954E]",
    background: "bg-[#F3F5E9]",
  },
];

/* ============================================================
   POINTS FORTS
============================================================ */

const advantages = [
  {
    icon: Truck,
    title: "Livraison locale",
    description: "Offerte dans un rayon de 20 km autour de Varzy.",
    color: "text-[#4A9692]",
    background: "bg-[#EDF7F6]",
  },
  {
    icon: Wrench,
    title: "Installation adaptée",
    description: "Mise en place du matériel lorsque la prestation le nécessite.",
    color: "text-[#EF5A4F]",
    background: "bg-[#FFF0ED]",
  },
  {
    icon: ShieldCheck,
    title: "Matériel contrôlé",
    description: "Chaque équipement est vérifié avant sa mise en location.",
    color: "text-[#87954E]",
    background: "bg-[#F3F5E9]",
  },
  {
    icon: Sparkles,
    title: "Solutions sur mesure",
    description: "Des prestations adaptées à votre événement et à vos besoins.",
    color: "text-[#C34F72]",
    background: "bg-[#FAEEF2]",
  },
];

/* ============================================================
   COMPOSANT
============================================================ */

export default function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden bg-[#FBFAF8] py-12 sm:py-14 lg:py-16">

      {/* =====================================================
          HALOS
      ===================================================== */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-0 h-[260px] w-[260px] rounded-full bg-[#4A9692]/7 blur-[120px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 bottom-0 h-[260px] w-[260px] rounded-full bg-[#EF5A4F]/7 blur-[120px]"
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

        {/* =====================================================
            TITRE
        ===================================================== */}

        <div className="mx-auto max-w-3xl text-center">

          <span className="inline-flex items-center gap-2 rounded-full border border-[#4A9692]/20 bg-[#EDF7F6] px-4 py-2 text-[10px] font-bold uppercase tracking-[0.18em] text-[#347A77] sm:text-xs">
            <ShieldCheck size={14} />

            Pourquoi Event&apos;S Location ?
          </span>

          <h2 className="mt-4 text-3xl font-black tracking-tight text-[#1D1B1C] sm:text-4xl lg:text-[42px]">
            Votre événement,
            <span className="text-[#EF5A4F]">
              {" "}notre priorité
            </span>
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-[#716A6C] sm:text-base">
            Du matériel fiable, des conseils personnalisés et un service
            de proximité pour vos événements privés et professionnels.
          </p>

        </div>

        {/* =====================================================
            CHIFFRES CLÉS
        ===================================================== */}

        <div className="mt-8 grid grid-cols-2 gap-3 lg:grid-cols-4 lg:gap-4">

          {stats.map((stat) => {
            const Icon = stat.icon;

            return (
              <div
                key={stat.label}
                className="flex min-h-[105px] items-center gap-3 rounded-2xl border border-[#E9E2DD] bg-white p-4 shadow-[0_8px_24px_rgba(31,25,27,0.04)] sm:p-5"
              >
                <div
                  className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl sm:h-11 sm:w-11 ${stat.background}`}
                >
                  <Icon
                    size={20}
                    className={stat.color}
                  />
                </div>

                <div className="min-w-0">
                  <p className="text-base font-black leading-tight text-[#1D1B1C] sm:text-lg">
                    {stat.value}
                  </p>

                  <p className="mt-1 text-xs leading-4 text-[#817A7C] sm:text-sm">
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

        <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">

          {advantages.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.title}
                className="group rounded-2xl border border-[#E9E2DD] bg-white p-4 transition-all duration-300 hover:-translate-y-1 hover:border-[#EF5A4F]/20 hover:shadow-[0_12px_30px_rgba(31,25,27,0.06)] sm:p-5"
              >
                <div className="flex items-start gap-3">

                  <div
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${item.background}`}
                  >
                    <Icon
                      size={19}
                      className={item.color}
                    />
                  </div>

                  <div>
                    <h3 className="text-sm font-bold text-[#1D1B1C] sm:text-base">
                      {item.title}
                    </h3>

                    <p className="mt-1 text-xs leading-5 text-[#716A6C] sm:text-sm">
                      {item.description}
                    </p>
                  </div>

                </div>
              </article>
            );
          })}

        </div>

      </div>
    </section>
  );
}