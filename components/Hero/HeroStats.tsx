import {
  Camera,
  Truck,
  Star,
  Clock3,
} from "lucide-react";

const stats = [
  {
    icon: Camera,
    title: "+300",
    subtitle: "Événements réalisés",
  },
  {
    icon: Truck,
    title: "Livraison",
    subtitle: "Installation incluse",
  },
  {
    icon: Star,
    title: "4.9 / 5",
    subtitle: "Clients satisfaits",
  },
  {
    icon: Clock3,
    title: "<24h",
    subtitle: "Réponse garantie",
  },
];

export default function HeroStats() {
  return (
    <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4 lg:gap-5">

      {stats.map((item) => {
        const Icon = item.icon;

        return (
          <div
            key={item.title}
            className="rounded-2xl border border-white/10 bg-white/10 p-4 text-center backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:bg-white/15 sm:rounded-3xl sm:p-6"
          >
            <Icon className="mx-auto mb-2.5 h-7 w-7 text-green-400 sm:mb-4 sm:h-9 sm:w-9" />

            <h3 className="text-lg font-black text-white sm:text-2xl">
              {item.title}
            </h3>

            <p className="mt-1 text-[11px] leading-4 text-green-100 sm:mt-2 sm:text-sm sm:leading-5">
              {item.subtitle}
            </p>
          </div>
        );
      })}

    </div>
  );
}