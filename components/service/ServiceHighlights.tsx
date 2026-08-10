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

export default function ServiceHighlights({ items }: Props) {
  return (
    <section>

      <div className="mb-12 text-center">

        <span className="rounded-full border border-green-500/30 bg-green-500/10 px-5 py-2 text-sm uppercase tracking-[0.35em] text-green-400">
          Les avantages
        </span>

        <h2 className="mt-6 text-5xl font-black text-white">
          Pourquoi choisir cette prestation ?
        </h2>

      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">

        {items.map((item, index) => {

          const Icon = icons[index % icons.length];

          return (

            <div
              key={item}
              className="group rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition duration-500 hover:-translate-y-2 hover:border-green-500/40 hover:shadow-[0_20px_60px_rgba(34,197,94,.18)]"
            >

              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-green-500/10 transition group-hover:bg-green-500">

                <Icon
                  size={30}
                  className="text-green-400 group-hover:text-white"
                />

              </div>

              <p className="text-lg font-semibold leading-8 text-white">
                {item}
              </p>

            </div>

          );

        })}

      </div>

    </section>
  );
}