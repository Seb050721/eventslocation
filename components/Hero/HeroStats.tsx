import {
  Camera,
  Truck,
  Star,
  Clock3,
} from "lucide-react";

const stats = [
  {
    icon: Camera,
    title: "+100",
    subtitle: "Événements réalisés",
    iconColor: "text-[#C34F72]",
    iconBg: "bg-[#FAEEF2]",
    hoverBorder: "hover:border-[#C34F72]/30",
  },
  {
    icon: Truck,
    title: "Livraison 20 Klm",
    subtitle: "Offerte autour de Varzy",
    iconColor: "text-[#4A9692]",
    iconBg: "bg-[#EDF7F6]",
    hoverBorder: "hover:border-[#4A9692]/30",
  },
  {
    icon: Star,
    title: "4.9 / 5",
    subtitle: "Clients satisfaits",
    iconColor: "text-[#F3A044]",
    iconBg: "bg-[#FFF5E9]",
    hoverBorder: "hover:border-[#F3A044]/30",
  },
  {
    icon: Clock3,
    title: "<24h",
    subtitle: "Réponse garantie",
    iconColor: "text-[#87954E]",
    iconBg: "bg-[#F3F5E9]",
    hoverBorder: "hover:border-[#87954E]/30",
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
            className={`group rounded-2xl border border-[#E9E2DD] bg-white/80 p-4 text-center shadow-[0_8px_30px_rgba(31,25,27,0.05)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-[0_15px_40px_rgba(31,25,27,0.09)] sm:rounded-3xl sm:p-6 ${item.hoverBorder}`}
          >

            {/* ICÔNE */}

            <div
              className={`mx-auto mb-3 flex h-11 w-11 items-center justify-center rounded-2xl sm:mb-4 sm:h-14 sm:w-14 ${item.iconBg}`}
            >
              <Icon
                className={`h-5 w-5 sm:h-7 sm:w-7 ${item.iconColor}`}
              />
            </div>

            {/* VALEUR */}

            <h3 className="text-lg font-black tracking-tight text-[#1D1B1C] sm:text-2xl">
              {item.title}
            </h3>

            {/* DESCRIPTION */}

            <p className="mt-1 text-[11px] font-medium leading-4 text-[#817A7C] sm:mt-2 sm:text-sm sm:leading-5">
              {item.subtitle}
            </p>

          </div>
        );
      })}

    </div>
  );
}