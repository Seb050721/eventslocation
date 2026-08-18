import {
  CheckCircle2,
  ShieldCheck,
  Truck,
  Sparkles,
  Clock3,
  BadgeCheck,
} from "lucide-react";

interface Props {
  items: string[];
}

const icons = [
  CheckCircle2,
  Sparkles,
  Truck,
  ShieldCheck,
  Clock3,
  BadgeCheck,
];

export default function ServiceHighlights({
  items,
}: Props) {
  return (
    <section className="py-4 sm:py-6 lg:py-8">

      {/* =====================================================
          TITRE
      ===================================================== */}

      <div className="mx-auto mb-8 max-w-3xl text-center sm:mb-10 lg:mb-12">

        <span className="inline-flex rounded-full border border-green-500/30 bg-green-500/10 px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-green-400 sm:px-5 sm:py-2 sm:text-xs sm:tracking-[0.3em]">
          Les avantages
        </span>

        <h2 className="mt-5 text-3xl font-black leading-tight tracking-tight text-white sm:mt-6 sm:text-4xl lg:text-5xl">
          Pourquoi choisir
          <span className="block text-green-400 sm:inline">
            {" "}cette prestation ?
          </span>
        </h2>

      </div>

      {/* =====================================================
          AVANTAGES
      ===================================================== */}

      <div className="grid gap-3 sm:grid-cols-2 sm:gap-4 lg:gap-5 xl:grid-cols-3">

        {items.map((item, index) => {
          const Icon =
            icons[index % icons.length];

          return (
            <div
              key={`${item}-${index}`}
              className="group rounded-2xl border border-white/10 bg-white/[0.05] p-5 backdrop-blur-xl transition duration-300 sm:rounded-3xl sm:p-6 lg:p-8 lg:hover:-translate-y-1 lg:hover:border-green-500/40 lg:hover:shadow-[0_20px_60px_rgba(34,197,94,.12)]"
            >

              {/* ICÔNE */}

              <div className="flex items-start gap-4 sm:block">

                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-green-500/10 text-green-400 transition duration-300 sm:mb-5 sm:h-14 sm:w-14 sm:rounded-2xl lg:mb-6 lg:h-16 lg:w-16 lg:group-hover:bg-green-500 lg:group-hover:text-white">

                  <Icon
                    size={23}
                    className="sm:h-7 sm:w-7 lg:h-[30px] lg:w-[30px]"
                  />

                </div>

                {/* TEXTE */}

                <p className="pt-1 text-base font-semibold leading-6 text-white sm:pt-0 sm:text-lg sm:leading-7 lg:leading-8">
                  {item}
                </p>

              </div>

            </div>
          );
        })}

      </div>

    </section>
  );
}