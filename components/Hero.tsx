"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden">

      {/* Image */}

      <Image
        src="/images/hero/hero.jpg"
        alt="Event'S Location"
        fill
        priority
        className="object-cover"
      />

      {/* Overlay */}

      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/55 to-black/40" />

      {/* Contenu */}

      <div className="relative z-10 mx-auto flex w-full max-w-7xl px-6">

        <div className="max-w-3xl">

          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: .6 }}
            className="inline-flex rounded-full border border-green-400/30 bg-green-500/10 px-5 py-2 text-sm uppercase tracking-[0.3em] text-green-300 backdrop-blur-md"
          >
            Event'S Location
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: .2, duration: .7 }}
            className="mt-8 text-5xl font-black leading-tight text-white sm:text-6xl lg:text-7xl"
          >
            Louez du matériel
            <br />
            événementiel
            <span className="text-green-400">
              {" "}
              haut de gamme
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: .5 }}
            className="mt-8 max-w-2xl text-lg leading-8 text-gray-300"
          >
            Photobooth, sonorisation, vidéoprojecteur, barnums,
            mobilier et effets spéciaux pour rendre vos événements
            inoubliables.
          </motion.p>

          {/* Boutons */}

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: .7 }}
            className="mt-12 flex flex-col gap-4 sm:flex-row"
          >
            <Link
              href="#prestations"
              className="rounded-full bg-green-600 px-8 py-4 text-center font-semibold text-white transition hover:scale-105 hover:bg-green-700"
            >
              Découvrir nos prestations
            </Link>

            <Link
              href="#contact"
              className="rounded-full border border-white/20 bg-white/10 px-8 py-4 text-center font-semibold text-white backdrop-blur-md transition hover:bg-white/20"
            >
              Demander un devis
            </Link>
          </motion.div>

          {/* Points forts */}

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
           className="mt-14 flex flex-wrap items-center gap-6 text-sm font-medium text-white/90"
>
     <span className="rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-md">
    📸 Photobooth
  </span>

  <span className="rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-md">
    🔊 Sonorisation
  </span>

  <span className="rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-md">
    🎥 Vidéoprojecteur
  </span>

  <span className="rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-md">
    💨 Effets spéciaux
  </span>
</motion.div>

        </div>

      </div>

    </section>
  );
}