import Image from "next/image";
import Link from "next/link";

import {
  FaFacebookF,
  FaInstagram,
} from "react-icons/fa";

import {
  ArrowRight,
  Armchair,
  Camera,
  Mail,
  MapPin,
  Phone,
  Projector,
  Sparkles,
  Speaker,
} from "lucide-react";

const services = [
  {
    name: "Photo Booth",
    href: "/prestations/photobooth",
    icon: Camera,
    color: "text-[#C34F72]",
  },
  {
    name: "Sonorisation",
    href: "/prestations/sonorisation",
    icon: Speaker,
    color: "text-[#4A9692]",
  },
  {
    name: "Projection vidéo",
    href: "/prestations/projection",
    icon: Projector,
    color: "text-[#F3A044]",
  },
  {
    name: "Mobilier",
    href: "/prestations/mobilier",
    icon: Armchair,
    color: "text-[#87954E]",
  },
  {
    name: "Smoke Puff",
    href: "/prestations/feux",
    icon: Sparkles,
    color: "text-[#EF5A4F]",
  },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-[#332E30] bg-[#1D1B1C]">

      {/* =====================================================
          HALOS
      ===================================================== */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-0 h-[300px] w-[300px] rounded-full bg-[#4A9692]/10 blur-[130px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 bottom-0 h-[320px] w-[320px] rounded-full bg-[#EF5A4F]/10 blur-[140px]"
      />

      {/* =====================================================
          CTA SUPÉRIEUR
      ===================================================== */}

      <div className="relative border-b border-white/10">

        <div className="mx-auto max-w-7xl px-5 py-8 sm:px-6 sm:py-10 lg:px-8">

          <div className="flex flex-col items-start justify-between gap-5 rounded-[22px] border border-white/10 bg-white/[0.05] p-5 sm:p-6 lg:flex-row lg:items-center lg:px-7 lg:py-6">

            <div className="max-w-2xl">

              <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#F3A044] sm:text-xs">
                Votre événement approche ?
              </p>

              <h2 className="mt-2 text-2xl font-black leading-tight text-white sm:text-3xl">
                Parlons de votre projet.
              </h2>

              <p className="mt-2 max-w-xl text-sm leading-6 text-[#BDB6B8]">
                Expliquez-nous vos besoins et recevez une proposition
                adaptée à votre événement.
              </p>

            </div>

            <Link
              href="/#contact"
              className="group flex min-h-[48px] w-full items-center justify-center gap-2 rounded-xl bg-[#EF5A4F] px-5 py-3 text-sm font-bold text-white shadow-[0_10px_25px_rgba(239,90,79,0.20)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#D94A41] sm:w-auto"
            >
              Demander un devis

              <ArrowRight
                size={17}
                className="transition-transform duration-200 group-hover:translate-x-1"
              />
            </Link>

          </div>

        </div>

      </div>

      {/* =====================================================
          FOOTER PRINCIPAL
      ===================================================== */}

      <div className="relative mx-auto max-w-7xl px-5 py-10 sm:px-6 sm:py-12 lg:px-8">

        <div className="grid gap-9 sm:grid-cols-2 lg:grid-cols-[1.35fr_0.8fr_1fr_1.2fr] lg:gap-10">

          {/* =================================================
              ENTREPRISE
          ================================================= */}

          <div>

            <Link
              href="/"
              className="inline-flex items-center"
              aria-label="Event'S Location - Accueil"
            >
              <div className="relative h-[74px] w-[150px]">
                <Image
                  src="/Logo/LogoRond.png"
                  alt="Logo Event'S Location"
                  fill
                  sizes="150px"
                  className="object-contain object-left"
                />
              </div>
            </Link>

            <p className="mt-4 max-w-sm text-sm leading-6 text-[#BDB6B8]">
              Location de matériel événementiel pour mariages,
              anniversaires, événements privés, professionnels
              et associatifs.
            </p>

            <div className="mt-4 flex items-start gap-2.5 text-sm leading-6 text-[#BDB6B8]">

              <MapPin
                size={17}
                className="mt-0.5 shrink-0 text-[#4A9692]"
              />

              <p>
                Basé à Varzy
                <br />
                Nièvre • Yonne • Cher
              </p>

            </div>

          </div>

          {/* =================================================
              NAVIGATION
          ================================================= */}

          <div>

            <h3 className="text-xs font-black uppercase tracking-[0.18em] text-white">
              Navigation
            </h3>

            <nav className="mt-5 flex flex-col gap-2.5 text-sm text-[#BDB6B8]">

              <Link
                href="/"
                className="transition-colors hover:text-[#EF5A4F]"
              >
                Accueil
              </Link>

              <Link
                href="/#services"
                className="transition-colors hover:text-[#EF5A4F]"
              >
                Prestations
              </Link>

              <Link
                href="/#realisations"
                className="transition-colors hover:text-[#EF5A4F]"
              >
                Réalisations
              </Link>

              <Link
                href="/#gallery"
                className="transition-colors hover:text-[#EF5A4F]"
              >
                Galerie
              </Link>

              <Link
                href="/#packs"
                className="transition-colors hover:text-[#EF5A4F]"
              >
                Packs
              </Link>

              <Link
                href="/#testimonials"
                className="transition-colors hover:text-[#EF5A4F]"
              >
                Avis clients
              </Link>

              <Link
                href="/#contact"
                className="font-semibold text-[#EF5A4F] transition-colors hover:text-[#FF756A]"
              >
                Demander un devis
              </Link>

            </nav>

          </div>

          {/* =================================================
              PRESTATIONS
          ================================================= */}

          <div>

            <h3 className="text-xs font-black uppercase tracking-[0.18em] text-white">
              Prestations
            </h3>

            <div className="mt-5 flex flex-col gap-3">

              {services.map((service) => {
                const Icon = service.icon;

                return (
                  <Link
                    key={service.name}
                    href={service.href}
                    className="group flex items-center gap-2.5 text-sm text-[#BDB6B8] transition-colors hover:text-white"
                  >
                    <Icon
                      size={15}
                      className={`shrink-0 ${service.color}`}
                    />

                    {service.name}
                  </Link>
                );
              })}

            </div>

          </div>

          {/* =================================================
              CONTACT
          ================================================= */}

          <div>

            <h3 className="text-xs font-black uppercase tracking-[0.18em] text-white">
              Contact
            </h3>

            <div className="mt-5 space-y-3">

              {/* TÉLÉPHONE */}

              <a
                href="tel:+33643894570"
                className="group flex items-center gap-3"
              >

                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#EDF7F6]/10">

                  <Phone
                    size={16}
                    className="text-[#4A9692]"
                  />

                </div>

                <div>

                  <p className="text-[10px] text-[#8F878A]">
                    Téléphone
                  </p>

                  <p className="text-sm font-semibold text-[#DDD7D9] transition-colors group-hover:text-white">
                    06 43 89 45 70
                  </p>

                </div>

              </a>

              {/* EMAIL */}

              <a
                href="mailto:events.location@outlook.com"
                className="group flex items-center gap-3"
              >

                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#FAEEF2]/10">

                  <Mail
                    size={16}
                    className="text-[#C34F72]"
                  />

                </div>

                <div className="min-w-0">

                  <p className="text-[10px] text-[#8F878A]">
                    E-mail
                  </p>

                  <p className="break-all text-sm font-semibold text-[#DDD7D9] transition-colors group-hover:text-white">
                    events.location@outlook.com
                  </p>

                </div>

              </a>

              {/* =================================================
                  RÉSEAUX SOCIAUX
              ================================================= */}

              <div className="pt-2">

                <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#8F878A]">
                  Suivez-nous
                </p>

                <div className="mt-3 flex gap-2">

                  {/* INSTAGRAM */}

                  <a
                    href="https://www.instagram.com/events_location__/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram Event'S Location"
                    title="Instagram Event'S Location"
                    className="group flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.05] text-[#C34F72] transition-all duration-200 hover:-translate-y-0.5 hover:border-[#C34F72]/40 hover:bg-[#C34F72]/10"
                  >
                    <FaInstagram
                      size={19}
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
                    className="group flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.05] text-[#4A9692] transition-all duration-200 hover:-translate-y-0.5 hover:border-[#4A9692]/40 hover:bg-[#4A9692]/10"
                  >
                    <FaFacebookF
                      size={18}
                      className="transition-transform duration-200 group-hover:scale-110"
                    />
                  </a>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

      {/* =====================================================
          BAS DU FOOTER
      ===================================================== */}

      <div className="relative border-t border-white/10">

        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-5 text-center text-xs text-[#8F878A] sm:px-6 md:flex-row md:items-center md:justify-between md:text-left lg:px-8">

          <p>
            © {year} Event&apos;S Location. Tous droits réservés.
          </p>

          <div className="flex flex-wrap justify-center gap-x-5 gap-y-2 md:justify-end">

            <Link
              href="/mentions-legales"
              className="transition-colors hover:text-[#EF5A4F]"
            >
              Mentions légales
            </Link>

            <Link
              href="/politique-de-confidentialite"
              className="transition-colors hover:text-[#EF5A4F]"
            >
              Politique de confidentialité
            </Link>

          </div>

        </div>

      </div>

    </footer>
  );
}