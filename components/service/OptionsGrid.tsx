import type { OptionItem } from "@/data/services";

interface Props {
  options: OptionItem[];
}

export default function OptionsGrid({
  options,
}: Props) {
  if (options.length === 0) {
    return null;
  }

  return (
    <section className="rounded-[24px] border border-[#E9E2DD] bg-[#FBFAF8] p-5 shadow-[0_10px_30px_rgba(31,25,27,0.05)] sm:rounded-3xl sm:p-6 lg:p-8">

      {/* TITRE */}

      <div className="mb-6 sm:mb-8">

        <span className="inline-flex rounded-full border border-[#C34F72]/20 bg-[#FAEEF2] px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-[0.18em] text-[#C34F72] sm:px-4 sm:py-2 sm:text-xs">
          Options
        </span>

        <h2 className="mt-4 text-2xl font-black leading-tight text-[#1D1B1C] sm:text-3xl">
          Options disponibles
        </h2>

        <p className="mt-2 text-sm leading-6 text-[#716A6C] sm:text-base">
          Complétez votre prestation selon vos besoins.
        </p>

      </div>

      {/* OPTIONS */}

      <div className="grid gap-3 sm:gap-4 md:grid-cols-2">

        {options.map((option, index) => (
          <div
            key={option.name}
            className="group relative overflow-hidden rounded-2xl border border-[#E9E2DD] bg-white p-4 shadow-[0_6px_20px_rgba(31,25,27,0.03)] transition-all duration-300 sm:p-5 lg:p-6 lg:hover:-translate-y-0.5 lg:hover:border-[#C34F72]/25 lg:hover:shadow-[0_12px_28px_rgba(31,25,27,0.06)]"
          >

            {/* PETIT ACCENT COULEUR */}

            <div
              aria-hidden="true"
              className={`absolute left-0 top-0 h-full w-1 ${
                index % 5 === 0
                  ? "bg-[#C34F72]"
                  : index % 5 === 1
                    ? "bg-[#4A9692]"
                    : index % 5 === 2
                      ? "bg-[#F3A044]"
                      : index % 5 === 3
                        ? "bg-[#87954E]"
                        : "bg-[#EF5A4F]"
              }`}
            />

            <div className="flex items-start justify-between gap-4 pl-2">

              <div className="min-w-0">

                <h3 className="text-base font-bold leading-6 text-[#1D1B1C] sm:text-lg lg:text-xl">
                  {option.name}
                </h3>

                {option.description && (
                  <p className="mt-2 text-sm leading-6 text-[#716A6C]">
                    {option.description}
                  </p>
                )}

              </div>

              <div className="shrink-0 text-right">

                <p
                  className={`font-black text-[#EF5A4F] ${
                    option.price == null
                      ? "text-base sm:text-lg"
                      : "text-xl sm:text-2xl"
                  }`}
                >
                  {option.price == null
                    ? "Sur devis"
                    : `${option.price} €`}
                </p>

              </div>

            </div>

          </div>
        ))}

      </div>

    </section>
  );
}