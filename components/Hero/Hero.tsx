import Image from "next/image";
import HeroButtons from "./HeroButtons";
import HeroStats from "./HeroStats";

export default function Hero() {
  return (
    <section className="relative min-h-[950px] overflow-hidden bg-gradient-to-br from-[#0f172a] via-[#14532d] to-[#16a34a]">

      {/* Halo gauche */}
      <div className="absolute -left-40 top-0 h-[500px] w-[500px] rounded-full bg-green-500/20 blur-[180px]" />

      {/* Halo droite */}
      <div className="absolute right-0 top-1/3 h-[450px] w-[450px] rounded-full bg-emerald-400/20 blur-[180px]" />

      <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center gap-20 px-6 pt-32 pb-20 lg:flex-row">

        {/* Partie texte */}
        <div className="max-w-2xl">

          <span className="inline-flex items-center rounded-full border border-green-400/30 bg-green-500/20 px-5 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-green-200 backdrop-blur">
            Location de matériel événementiel
          </span>

          <h1 className="mt-8 text-5xl font-black leading-tight text-white md:text-6xl lg:text-7xl">
            Donnez vie à
            <span className="block text-green-400">
              vos événements
            </span>
          </h1>

          <p className="mt-8 max-w-xl text-lg leading-9 text-green-100">
            Photobooth, sonorisation, barnums, mobilier, vidéoprojecteurs
            et équipements professionnels pour réussir tous vos événements
            dans la Nièvre, l'Yonne et le Cher.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">

    <span className="rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-green-100 backdrop-blur">
        📸 Photobooth Premium
    </span>

    <span className="rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-green-100 backdrop-blur">
        🚚 Livraison
    </span>

    <span className="rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-green-100 backdrop-blur">
        🎨 Personnalisation offerte
    </span>

    <span className="rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-green-100 backdrop-blur">
        ⭐ Note moyenne 4.9/5
    </span>

</div>

          <HeroButtons />

          <HeroStats />

        </div>

        {/* Image */}

      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />
        <div className="relative">

          <div className="absolute inset-0 rounded-[40px] bg-green-500/20 blur-3xl" />

          <div className="group relative overflow-hidden rounded-[40px] border border-white/10 bg-white/5 shadow-[0_30px_80px_rgba(0,0,0,0.35)] backdrop-blur">

            <Image
              src="/images/hero-photobooth.jpg"
              alt="Photobooth Event'S Location"
              width={700}
              height={850}
              priority
              className="h-auto w-full object-cover transition duration-700 hover:scale-105"
            />

          </div>

        </div>

      </div>
            <div className="absolute bottom-0 left-0 right-0">

            <svg
            viewBox="0 0 1440 140"
            className="w-full text-white"
            fill="currentColor"
             >

          <path d="M0,96L80,90.7C160,85,320,75,480,74.7C640,75,800,85,960,96C1120,107,1280,117,1360,122.7L1440,128L1440,160L1360,160C1280,160,1120,160,960,160C800,160,640,160,480,160C320,160,160,160,80,160L0,160Z" />

        </svg>

      </div>
    </section>
  );
}