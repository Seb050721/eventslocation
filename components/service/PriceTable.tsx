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
    <section className="py-4 sm:py-6 lg:py-8">

      {/* =====================================================
          TITRE
      ===================================================== */}

      <div className="mx-auto mb-8 max-w-3xl text-center sm:mb-10 lg:mb-12">

        <span className="inline-flex rounded-full border border-green-500/30 bg-green-500/10 px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-green-400 sm:px-5 sm:py-2 sm:text-xs sm:tracking-[0.3em]">
          Tarifs
        </span>

        <h2 className="mt-5 text-3xl font-black leading-tight tracking-tight text-white sm:mt-6 sm:text-4xl lg:text-5xl">
          {title}
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-gray-400 sm:mt-5 sm:text-base sm:leading-7 lg:text-lg">
          Choisissez la formule qui correspond à votre événement.
        </p>

      </div>

      {/* =====================================================
          FORMULES
      ===================================================== */}

      <div className="grid gap-4 sm:gap-5 md:grid-cols-2 xl:grid-cols-3">

        {items.map((item) => (
          <div
            key={item.label}
            className="group flex h-full flex-col rounded-2xl border border-white/10 bg-white/[0.05] p-5 backdrop-blur-xl transition duration-300 sm:rounded-3xl sm:p-6 lg:p-8 lg:hover:-translate-y-1 lg:hover:border-green-500/40 lg:hover:shadow-[0_20px_60px_rgba(34,197,94,.12)]"
          >

            {/* FORMULE */}

            <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-green-400 sm:text-xs sm:tracking-[0.3em]">
              Formule
            </p>

            <h3 className="mt-2 text-xl font-bold leading-tight text-white sm:mt-3 sm:text-2xl lg:mt-4 lg:text-3xl">
              {item.label}
            </h3>

            {/* PRIX */}

            <div className="mt-5 sm:mt-6 lg:mt-8">

              {item.price === null ? (
                <p className="text-3xl font-black leading-none text-green-400 sm:text-4xl">
                  Sur devis
                </p>
              ) : (
                <p className="text-4xl font-black leading-none text-green-400 sm:text-5xl">
                  {item.price} €
                </p>
              )}

            </div>

            {/* DESCRIPTION */}

            {item.description && (
              <p className="mt-4 text-sm leading-6 text-gray-400 sm:mt-5 sm:text-base sm:leading-7 lg:mt-6">
                {item.description}
              </p>
            )}

            {/* AVANTAGES */}

            <div className="mt-6 space-y-3 border-t border-white/10 pt-5 sm:mt-7 sm:pt-6 lg:mt-8">

              <div className="flex items-start gap-3">

                <CheckCircle
                  size={18}
                  className="mt-0.5 shrink-0 text-green-400"
                />

                <span className="text-sm leading-5 text-gray-200 sm:text-base">
                  Installation comprise
                </span>

              </div>

              <div className="flex items-start gap-3">

                <CheckCircle
                  size={18}
                  className="mt-0.5 shrink-0 text-green-400"
                />

                <span className="text-sm leading-5 text-gray-200 sm:text-base">
                  Matériel professionnel
                </span>

              </div>

              <div className="flex items-start gap-3">

                <CheckCircle
                  size={18}
                  className="mt-0.5 shrink-0 text-green-400"
                />

                <span className="text-sm leading-5 text-gray-200 sm:text-base">
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