import type { OptionItem } from "@/components/service/services";

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
    <section className="rounded-[24px] border border-white/10 bg-white/[0.05] p-5 backdrop-blur-xl sm:rounded-3xl sm:p-6 lg:p-8">

      {/* TITRE */}

      <div className="mb-6 sm:mb-8">

        <span className="inline-flex rounded-full border border-green-500/30 bg-green-500/10 px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-green-400 sm:px-4 sm:py-2 sm:text-xs sm:tracking-[0.3em]">
          Options
        </span>

        <h2 className="mt-4 text-2xl font-black leading-tight text-white sm:text-3xl">
          Options disponibles
        </h2>

        <p className="mt-2 text-sm leading-6 text-gray-400 sm:text-base">
          Complétez votre prestation selon vos besoins.
        </p>

      </div>

      {/* OPTIONS */}

      <div className="grid gap-3 sm:gap-4 md:grid-cols-2">

        {options.map((option) => (
          <div
            key={option.name}
            className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 transition duration-300 sm:p-5 lg:p-6 lg:hover:border-green-500/30 lg:hover:bg-green-500/[0.05]"
          >

            <div className="flex items-start justify-between gap-4">

              <div className="min-w-0">

                <h3 className="text-base font-bold leading-6 text-white sm:text-lg lg:text-xl">
                  {option.name}
                </h3>

                {option.description && (
                  <p className="mt-2 text-sm leading-6 text-gray-400">
                    {option.description}
                  </p>
                )}

              </div>

              <div className="shrink-0 text-right">

                <p
                  className={`font-black text-green-400 ${
                    option.price == null
                      ? "text-lg sm:text-xl"
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