import type { OptionItem } from "@/data/services";

interface Props {
  options: OptionItem[];
}

export default function OptionsGrid({ options }: Props) {
  if (options.length === 0) return null;

  return (
    <section className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
      <h2 className="mb-8 text-3xl font-bold text-white">
        Options disponibles
      </h2>

      <div className="grid gap-5 md:grid-cols-2">
        {options.map((option) => (
          <div
            key={option.name}
            className="rounded-2xl border border-white/10 bg-white/5 p-6"
          >
            <h3 className="text-xl font-semibold text-white">
              {option.name}
            </h3>

            <p className="mt-3 text-2xl font-bold text-green-400">
              {option.price == null ? "Sur devis" : `${option.price} €`}
            </p>

            {option.description && (
              <p className="mt-3 text-gray-400">
                {option.description}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}