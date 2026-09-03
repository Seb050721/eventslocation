import { Check } from "lucide-react";

interface IncludedListProps {
  title?: string;
  items: string[];
}

const accents = [
  {
    icon: "text-[#4A9692]",
    bg: "bg-[#EDF7F6]",
    border: "hover:border-[#4A9692]/30",
  },
  {
    icon: "text-[#C34F72]",
    bg: "bg-[#FAEEF2]",
    border: "hover:border-[#C34F72]/30",
  },
  {
    icon: "text-[#F3A044]",
    bg: "bg-[#FFF5E9]",
    border: "hover:border-[#F3A044]/30",
  },
  {
    icon: "text-[#87954E]",
    bg: "bg-[#F3F5E9]",
    border: "hover:border-[#87954E]/30",
  },
  {
    icon: "text-[#EF5A4F]",
    bg: "bg-[#FFF0ED]",
    border: "hover:border-[#EF5A4F]/30",
  },
];

export default function IncludedList({
  title = "Inclus dans la prestation",
  items,
}: IncludedListProps) {
  if (items.length === 0) {
    return null;
  }

  return (
    <section className="rounded-[24px] border border-[#E9E2DD] bg-[#FBFAF8] p-5 shadow-[0_10px_30px_rgba(31,25,27,0.05)] sm:rounded-3xl sm:p-6 lg:p-8">

      {/* TITRE */}

      <div className="mb-6 sm:mb-8">

        <span className="inline-flex rounded-full border border-[#4A9692]/20 bg-[#EDF7F6] px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-[0.18em] text-[#347A77] sm:px-4 sm:py-2 sm:text-xs">
          Inclus
        </span>

        <h2 className="mt-4 text-2xl font-black leading-tight text-[#1D1B1C] sm:text-3xl">
          {title}
        </h2>

      </div>

      {/* LISTE */}

      <div className="grid gap-3 sm:gap-4 md:grid-cols-2">

        {items.map((item, index) => {
          const accent =
            accents[index % accents.length];

          return (
            <div
              key={item}
              className={`group flex items-start gap-3 rounded-2xl border border-[#E9E2DD] bg-white p-4 shadow-[0_6px_20px_rgba(31,25,27,0.03)] transition-all duration-300 sm:gap-4 sm:p-5 ${accent.border} lg:hover:-translate-y-0.5 lg:hover:shadow-[0_10px_28px_rgba(31,25,27,0.05)]`}
            >

              <div
                className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl ${accent.bg} ${accent.icon} sm:h-10 sm:w-10`}
              >
                <Check
                  size={18}
                  strokeWidth={3}
                />
              </div>

              <span className="pt-1 text-sm font-medium leading-6 text-[#3F3A3C] sm:text-base">
                {item}
              </span>

            </div>
          );
        })}

      </div>

    </section>
  );
}