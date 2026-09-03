import { CheckCircle } from "lucide-react";

interface PriceItem {
  label: string;
  price: number | null;
  description?: string;
}

interface PriceTableProps {
  title?: string;
  items: PriceItem[];
}

export default function PriceTable({
  title = "Nos formules",
  items,
}: PriceTableProps) {
  return (
    <section className="py-6 sm:py-8 lg:py-10">

      {/* =====================================================
          TITRE
      ===================================================== */}

      <div className="mx-auto mb-7 max-w-3xl text-center sm:mb-9">

        <span className="inline-flex rounded-full border border-[#EF5A4F]/20 bg-[#FFF0ED] px-4 py-2 text-[10px] font-bold uppercase tracking-[0.18em] text-[#D94A41] sm:text-xs">
          Tarifs
        </span>

        <h2 className="mt-4 text-3xl font-black leading-tight tracking-tight text-[#1D1B1C] sm:text-4xl lg:text-[44px]">
          {title}
        </h2>

        <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-[#716A6C] sm:text-base sm:leading-7">
          Choisissez la formule qui correspond le mieux à votre événement.
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
          FORMULES
      ===================================================== */}

      <div className="grid gap-4 sm:gap-5 md:grid-cols-2 xl:grid-cols-3">

        {items.map((item, index) => (
          <div
            key={item.label}
            className="group relative flex h-full flex-col overflow-hidden rounded-[22px] border border-[#E9E2DD] bg-white p-5 shadow-[0_10px_30px_rgba(31,25,27,0.05)] transition-all duration-300 sm:p-6 lg:hover:-translate-y-1 lg:hover:border-[#EF5A4F]/30 lg:hover:shadow-[0_18px_45px_rgba(31,25,27,0.08)]"
          >

            {/* PETIT ACCENT COULEUR */}

            <div
              aria-hidden="true"
              className={`absolute inset-x-0 top-0 h-1 ${
                index % 5 === 0
                  ? "bg-[#EF5A4F]"
                  : index % 5 === 1
                    ? "bg-[#4A9692]"
                    : index % 5 === 2
                      ? "bg-[#C34F72]"
                      : index % 5 === 3
                        ? "bg-[#F3A044]"
                        : "bg-[#87954E]"
              }`}
            />

            {/* FORMULE */}

            <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.18em] text-[#9A9395] sm:text-xs">
              Formule
            </p>

            <h3 className="mt-2 text-xl font-bold leading-tight text-[#1D1B1C] sm:text-2xl">
              {item.label}
            </h3>

            {/* PRIX */}

            <div className="mt-5">

              {item.price === null ? (
                <p className="text-3xl font-black leading-none text-[#EF5A4F] sm:text-4xl">
                  Sur devis
                </p>
              ) : (
                <div className="flex items-end gap-2">

                  <p className="text-4xl font-black leading-none text-[#EF5A4F] sm:text-5xl">
                    {item.price} €
                  </p>

                </div>
              )}

            </div>

            {/* DESCRIPTION */}

            {item.description && (
              <p className="mt-4 text-sm leading-6 text-[#716A6C] sm:text-base">
                {item.description}
              </p>
            )}

            {/* AVANTAGES */}

            <div className="mt-6 space-y-3 border-t border-[#E9E2DD] pt-5">

              <div className="flex items-start gap-3">

                <CheckCircle
                  size={18}
                  className="mt-0.5 shrink-0 text-[#4A9692]"
                />

                <span className="text-sm leading-5 text-[#3F3A3C] sm:text-base">
                  Installation comprise
                </span>

              </div>

              <div className="flex items-start gap-3">

                <CheckCircle
                  size={18}
                  className="mt-0.5 shrink-0 text-[#4A9692]"
                />

                <span className="text-sm leading-5 text-[#3F3A3C] sm:text-base">
                  Matériel professionnel
                </span>

              </div>

              <div className="flex items-start gap-3">

                <CheckCircle
                  size={18}
                  className="mt-0.5 shrink-0 text-[#4A9692]"
                />

                <span className="text-sm leading-5 text-[#3F3A3C] sm:text-base">
                  Assistance si besoin
                </span>

              </div>

            </div>

          </div>
        ))}

      </div>

    </section>
  );
}