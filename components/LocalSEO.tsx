import Link from "next/link";
import {
  MapPin,
  Camera,
  Speaker,
  Projector,
  Armchair,
  Sparkles,
  ArrowRight,
} from "lucide-react";

const prestations = [
  {
    name: "Photo Booth",
    href: "/prestations/photobooth",
    icon: Camera,
  },
  {
    name: "Sonorisation",
    href: "/prestations/sonorisation",
    icon: Speaker,
  },
  {
    name: "Projection vidéo",
    href: "/prestations/projection",
    icon: Projector,
  },
  {
    name: "Mobilier événementiel",
    href: "/prestations/mobilier",
    icon: Armchair,
  },
  {
    name: "Machines à effets",
    href: "/prestations/effets",
    icon: Sparkles,
  },
  {
    name: "Smoke Puff",
    href: "/prestations/feux",
    icon: Sparkles,
  },
];

export default function LocalSEO() {
  return (
    <section className="relative overflow-hidden bg-[#080808] py-20 sm:py-24 lg:py-28">
      {/* HALOS */}
      <div className="pointer-events-none absolute -left-48 top-20 h-[400px] w-[400px] rounded-full bg-green-500/10 blur-[150px]" />

      <div className="pointer-events-none absolute -right-48 bottom-0 h-[400px] w-[400px] rounded-full bg-emerald-500/10 blur-[150px]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">

          {/* TEXTE */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-green-500/30 bg-green-500/10 px-4 py-2">
              <MapPin size={16} className="text-green-400" />

              <span className="text-xs font-bold uppercase tracking-[0.25em] text-green-400">
                Nièvre • Yonne • Cher
              </span>
            </div>

            <h2 className="mt-6 text-4xl font-black leading-tight tracking-tight text-white sm:text-5xl">
              Location de matériel événementiel
              <span className="block text-green-400">
                pour tous vos événements
              </span>
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-gray-400 sm:text-lg">
              Event&apos;S Location vous accompagne pour vos mariages,
              anniversaires, événements associatifs et professionnels avec
              une sélection de matériel événementiel disponible à la location.
            </p>

            <p className="mt-5 max-w-2xl leading-8 text-gray-400">
              Basés à Varzy dans la Nièvre, nous proposons notamment la
              location de Photo Booth, mobilier, sonorisation,
              vidéoprojecteur, machines à effets et Smoke Puff. Nous
              intervenons dans la Nièvre, l&apos;Yonne et le Cher, ainsi que
              plus loin sur devis.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-gray-300">
                Mariages
              </span>

              <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-gray-300">
                Anniversaires
              </span>

              <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-gray-300">
                Associations
              </span>

              <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-gray-300">
                Entreprises
              </span>
            </div>

            <Link
              href="/#contact"
              className="group mt-8 inline-flex items-center gap-2 rounded-xl bg-green-600 px-6 py-4 font-bold text-white transition hover:bg-green-700"
            >
              Demander un devis

              <ArrowRight
                size={18}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
          </div>

          {/* PRESTATIONS */}
          <div className="rounded-[28px] border border-white/10 bg-white/[0.04] p-5 backdrop-blur-xl sm:p-7">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-green-400">
              Nos prestations
            </p>

            <div className="mt-6 grid gap-3">
              {prestations.map((prestation) => {
                const Icon = prestation.icon;

                return (
                  <Link
                    key={prestation.name}
                    href={prestation.href}
                    className="group flex items-center justify-between rounded-2xl border border-white/10 bg-black/20 p-4 transition hover:border-green-500/40 hover:bg-green-500/10"
                  >
                    <div className="flex items-center gap-4">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-green-500/10">
                        <Icon
                          size={20}
                          className="text-green-400"
                        />
                      </div>

                      <span className="font-semibold text-white">
                        {prestation.name}
                      </span>
                    </div>

                    <ArrowRight
                      size={18}
                      className="text-gray-500 transition group-hover:translate-x-1 group-hover:text-green-400"
                    />
                  </Link>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}