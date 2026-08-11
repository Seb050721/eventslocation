import {
    Camera,
    Truck,
    Star,
    Clock3
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

        <div className="mt-16 grid grid-cols-2 gap-5 lg:grid-cols-4">

            {stats.map((item) => {

                const Icon = item.icon;

                return (

                    <div
                        key={item.title}
                        className="rounded-3xl border border-white/10 bg-white/10 p-6 text-center backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:bg-white/20"
                    >

                        <Icon className="mx-auto mb-4 h-10 w-10 text-green-400" />

                        <h3 className="text-2xl font-black text-white">

                            {item.title}

                        </h3>

                        <p className="mt-2 text-sm text-green-100">

                            {item.subtitle}

                        </p>

                    </div>

                );

            })}

        </div>

    );
}