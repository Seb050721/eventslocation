import Image from "next/image";
import Link from "next/link";
import { FaInstagram, FaFacebookF } from "react-icons/fa";

import {
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  Camera,
  Speaker,
  Projector,
  Armchair,
  Sparkles,
  } from "lucide-react";

const services = [
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
    name: "Mobilier",
    href: "/prestations/mobilier",
    icon: Armchair,
  },
  {
    name: "Smoke Puff",
    href: "/prestations/feux",
    icon: Sparkles,
  },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#030303]">

      {/* HALOS */}
      <div className="pointer-events-none absolute -left-48 top-0 h-[400px] w-[400px] rounded-full bg-green-500/10 blur-[150px]" />

      <div className="pointer-events-none absolute -right-48 bottom-0 h-[400px] w-[400px] rounded-full bg-emerald-500/10 blur-[150px]" />

      {/* =========================================================
          CTA SUPÉRIEUR
      ========================================================= */}
      <div className="relative border-b border-white/10">

        <div className="mx-auto max-w-7xl px-5 py-12 sm:px-6 sm:py-16 lg:px-8">

          <div className="flex flex-col items-start justify-between gap-8 rounded-[28px] border border-green-500/20 bg-gradient-to-br from-green-600/20 via-green-500/10 to-transparent p-6 sm:p-8 lg:flex-row lg:items-center lg:p-10">

            <div className="max-w-2xl">

              <p className="text-xs font-bold uppercase tracking-[0.25em] text-green-400">
                Votre événement approche ?
              </p>

              <h2 className="mt-3 text-3xl font-black leading-tight text-white sm:text-4xl">
                Parlons de votre projet.
              </h2>

              <p className="mt-3 max-w-xl text-sm leading-6 text-gray-400 sm:text-base">
                Expliquez-nous votre événement et les prestations souhaitées.
                Nous vous proposerons une solution adaptée.
              </p>

            </div>

            <Link
              href="/#contact"
              className="group flex min-h-[54px] w-full items-center justify-center gap-2 rounded-xl bg-green-600 px-6 py-4 font-bold text-white shadow-lg transition-all duration-200 hover:bg-green-700 sm:w-auto sm:rounded-2xl"
            >
              Demander un devis

              <ArrowRight
                size={19}
                className="transition-transform duration-200 group-hover:translate-x-1"
              />
            </Link>

          </div>

        </div>

      </div>

      {/* =========================================================
          FOOTER PRINCIPAL
      ========================================================= */}
      <div className="relative mx-auto max-w-7xl px-5 py-14 sm:px-6 sm:py-16 lg:px-8">

        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.15fr]">

          {/* =====================================================
              ENTREPRISE
          ===================================================== */}
          <div>

            <Link
              href="/"
              className="flex items-center gap-3"
              aria-label="Event'S Location - Accueil"
            >
              <div className="relative h-16 w-16 shrink-0 rounded-full bg-white p-1.5">

                <Image
                  src="/Logo/Logo.png"
                  alt="Logo Event'S Location"
                  fill
                  sizes="64px"
                  className="object-contain p-1"
                />

              </div>

              <div>

                <p className="text-xl font-black text-white">
                  Event&apos;S
                </p>

                <p className="text-sm font-bold tracking-[0.18em] text-green-500">
                  LOCATION
                </p>

              </div>

            </Link>

            <p className="mt-6 max-w-sm text-sm leading-7 text-gray-400">
              Location de matériel événementiel pour mariages,
              anniversaires, événements privés, professionnels
              et associatifs.
            </p>

            <div className="mt-6 flex items-start gap-3 text-sm text-gray-400">

              <MapPin
                size={19}
                className="mt-0.5 shrink-0 text-green-500"
              />

              <p>
                Nièvre • Yonne • Cher
                <br />
                Déplacements plus éloignés sur devis
              </p>

            </div>

          </div>

          {/* =====================================================
              NAVIGATION
          ===================================================== */}
          <div>

            <h3 className="text-sm font-black uppercase tracking-[0.2em] text-white">
              Navigation
            </h3>

            <nav className="mt-6 flex flex-col gap-3 text-sm text-gray-400">

              <Link
                href="/"
                className="transition-colors hover:text-green-400"
              >
                Accueil
              </Link>

              <Link
                href="/#services"
                className="transition-colors hover:text-green-400"
              >
                Prestations
              </Link>

              <Link
                href="/#gallery"
                className="transition-colors hover:text-green-400"
              >
                Réalisations
              </Link>

              <Link
                href="/#packs"
                className="transition-colors hover:text-green-400"
              >
                Packs
              </Link>

              <Link
                href="/#testimonials"
                className="transition-colors hover:text-green-400"
              >
                Avis clients
              </Link>

              <Link
                href="/#contact"
                className="transition-colors hover:text-green-400"
              >
                Demander un devis
              </Link>

            </nav>

          </div>

          {/* =====================================================
              PRESTATIONS
          ===================================================== */}
          <div>

            <h3 className="text-sm font-black uppercase tracking-[0.2em] text-white">
              Prestations
            </h3>

            <div className="mt-6 flex flex-col gap-3">

              {services.map((service) => {
                const Icon = service.icon;

                return (
                  <Link
                    key={service.name}
                    href={service.href}
                    className="group flex items-center gap-2.5 text-sm text-gray-400 transition-colors hover:text-green-400"
                  >
                    <Icon
                      size={16}
                      className="shrink-0 text-green-500"
                    />

                    {service.name}
                  </Link>
                );
              })}

            </div>

          </div>

          {/* =====================================================
              CONTACT
          ===================================================== */}
          <div>

            <h3 className="text-sm font-black uppercase tracking-[0.2em] text-white">
              Contact
            </h3>

            <div className="mt-6 space-y-4">

              {/* TÉLÉPHONE */}
              <a
                href="tel:+33643894570"
                className="flex items-center gap-3 text-sm text-gray-400 transition-colors hover:text-green-400"
              >

                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-green-500/10">

                  <Phone
                    size={18}
                    className="text-green-400"
                  />

                </div>

                <div>

                  <p className="text-xs text-gray-500">
                    Téléphone
                  </p>

                  <p className="font-semibold text-gray-300">
                    06 43 89 45 70
                  </p>

                </div>

              </a>

              {/* EMAIL */}
              <a
                href="mailto:events.location@outlook.com"
                className="flex items-center gap-3 text-sm text-gray-400 transition-colors hover:text-green-400"
              >

                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-green-500/10">

                  <Mail
                    size={18}
                    className="text-green-400"
                  />

                </div>

                <div className="min-w-0">

                  <p className="text-xs text-gray-500">
                    E-mail
                  </p>

                  <p className="break-all font-semibold text-gray-300">
                    events.location@outlook.com
                  </p>

                </div>

              </a>

              {/* =================================================
                  RÉSEAUX SOCIAUX
              ================================================= */}
              <div className="pt-3">

                <p className="text-xs font-bold uppercase tracking-[0.2em] text-gray-500">
                  Suivez-nous
                </p>

                <div className="mt-3 flex gap-3">

                  {/* INSTAGRAM */}
                  <a
                    href="https://www.instagram.com/events_location__/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram Event'S Location"
                    title="Instagram Event'S Location"
                    className="group flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-gray-300 transition-all duration-200 hover:-translate-y-1 hover:border-green-500/40 hover:bg-green-500/10 hover:text-green-400"
                  >
                    <FaInstagram
                     size={21}
                     className="transition-transform duration-200 group-hover:scale-110"
                    />
                  </a>

                  {/* FACEBOOK */}
                  <a
                    href="https://www.facebook.com/share/1H7nS1AuH4/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook Event'S Location"
                    title="Facebook Event'S Location"
                    className="group flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-gray-300 transition-all duration-200 hover:-translate-y-1 hover:border-green-500/40 hover:bg-green-500/10 hover:text-green-400"
                  >
                    <FaFacebookF
                      size={20}
                    className="transition-transform duration-200 group-hover:scale-110"
                    />
                  </a>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

      {/* =========================================================
          BAS DU FOOTER
      ========================================================= */}
      <div className="relative border-t border-white/10">

        <div className="mx-auto flex max-w-7xl flex-col gap-5 px-5 py-6 text-center text-xs text-gray-500 sm:px-6 md:flex-row md:items-center md:justify-between md:text-left lg:px-8">

          <p>
            © {year} Event&apos;S Location. Tous droits réservés.
          </p>

          <div className="flex flex-wrap justify-center gap-x-5 gap-y-2 md:justify-end">

            <Link
              href="/mentions-legales"
              className="transition-colors hover:text-green-400"
            >
              Mentions légales
            </Link>

            <Link
              href="/politique-de-confidentialite"
              className="transition-colors hover:text-green-400"
            >
              Politique de confidentialité
            </Link>

          </div>

        </div>

      </div>

    </footer>
  );
}