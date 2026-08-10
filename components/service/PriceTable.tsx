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
    <section>

      <div className="mb-12 text-center">

        <span className="rounded-full border border-green-500/30 bg-green-500/10 px-5 py-2 text-sm uppercase tracking-[0.35em] text-green-400">
          Tarifs
        </span>

        <h2 className="mt-6 text-5xl font-black text-white">
          {title}
        </h2>

        <p className="mt-5 text-lg text-gray-400">
          Choisissez la formule qui correspond à votre événement.
        </p>

      </div>

      <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

        {items.map((item) => (

          <div
            key={item.label}
            className="group rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition duration-500 hover:-translate-y-2 hover:border-green-500/40 hover:shadow-[0_20px_60px_rgba(34,197,94,.18)]"
          >

            <p className="text-sm uppercase tracking-[0.35em] text-green-400">
              Formule
            </p>

            <h3 className="mt-4 text-3xl font-bold text-white">
              {item.label}
            </h3>

            <div className="mt-8">

              <span className="text-5xl font-black text-green-400">

                {item.price === null
                  ? "Sur devis"
                  : `${item.price} €`}

              </span>

            </div>

            {item.description && (

              <p className="mt-6 leading-7 text-gray-400">
                {item.description}
              </p>

            )}

            <div className="mt-8 space-y-3">

              <div className="flex items-center gap-3">

                <CheckCircle
                  size={18}
                  className="text-green-400"
                />

                <span className="text-gray-200">
                  Installation comprise
                </span>

              </div>

              <div className="flex items-center gap-3">

                <CheckCircle
                  size={18}
                  className="text-green-400"
                />

                <span className="text-gray-200">
                  Matériel professionnel
                </span>

              </div>

              <div className="flex items-center gap-3">

                <CheckCircle
                  size={18}
                  className="text-green-400"
                />

                <span className="text-gray-200">
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