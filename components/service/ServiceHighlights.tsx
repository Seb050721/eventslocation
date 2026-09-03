import {
  BadgeCheck,
  CheckCircle2,
  Clock3,
  ShieldCheck,
  Sparkles,
  Truck,
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

const accents = [
  {
    icon: "text-[#4A9692]",
    bg: "bg-[#EDF7F6]",
    border: "hover:border-[#4A9692]/35",
  },
  {
    icon: "text-[#C34F72]",
    bg: "bg-[#FAEEF2]",
    border: "hover:border-[#C34F72]/35",
  },
  {
    icon: "text-[#F3A044]",
    bg: "bg-[#FFF5E9]",
    border: "hover:border-[#F3A044]/35",
  },
  {
    icon: "text-[#87954E]",
    bg: "bg-[#F3F5E9]",
    border: "hover:border-[#87954E]/35",
  },
  {
    icon: "text-[#EF5A4F]",
    bg: "bg-[#FFF0ED]",
    border: "hover:border-[#EF5A4F]/35",
  },
];

export default function ServiceHighlights({
  items,
}: Props) {
  return (
    <section className="py-6 sm:py-8 lg:py-10">

      {/* =====================================================
          TITRE
      ===================================================== */}

      <div className="mx-auto mb-7 max-w-3xl text-center sm:mb-9">

        <span className="inline-flex rounded-full border border-[#4A9692]/20 bg-[#EDF7F6] px-4 py-2 text-[10px] font-bold uppercase tracking-[0.18em] text-[#347A77] sm:text-xs">
          Les avantages
        </span>

        <h2 className="mt-4 text-3xl font-black leading-tight tracking-tight text-[#1D1B1C] sm:text-4xl lg:text-[44px]">
          Pourquoi choisir
          <span className="text-[#EF5A4F]">
            {" "}cette prestation ?
          </span>
        </h2>

        <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-[#716A6C] sm:text-base sm:leading-7">
          Une prestation pensée pour vous simplifier l&apos;organisation
          et profiter pleinement de votre événement.
        </p>

        <div
          aria-hidden="true"
          className="mt-4 flex justify-center gap-2"
        >
          <span className="h-2 w-2 rounded-full bg-[#4A9692]" />
          <span className="h-2 w-2 rounded-full bg-[#87954E]" />
          <span className="h-2 w-2 rounded-full bg-[#EF5A4F]" />
          <span className="h-2 w-2 rounded-full bg-[#C34F72]" />
          <span className="h-2 w-2 rounded-full bg-[#F3A044]" />
        </div>

      </div>

      {/* =====================================================
          AVANTAGES
      ===================================================== */}

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">

        {items.map((item, index) => {
          const Icon = icons[index % icons.length];
          const accent = accents[index % accents.length];

          return (
            <div
              key={`${item}-${index}`}
              className={`group rounded-[22px] border border-[#E9E2DD] bg-white p-5 shadow-[0_8px_26px_rgba(31,25,27,0.04)] transition-all duration-300 sm:p-6 ${accent.border} lg:hover:-translate-y-1 lg:hover:shadow-[0_16px_38px_rgba(31,25,27,0.07)]`}
            >
              <div className="flex items-start gap-4">

                {/* ICÔNE */}

                <div
                  className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl ${accent.bg} ${accent.icon} transition-transform duration-300 group-hover:scale-105`}
                >
                  <Icon size={23} />
                </div>

                {/* TEXTE */}

                <p className="pt-1 text-base font-semibold leading-6 text-[#3F3A3C] sm:text-lg sm:leading-7">
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