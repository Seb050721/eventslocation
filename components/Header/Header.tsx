
"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

import { Menu, X, Phone, CalendarDays } from "lucide-react";
import { FaInstagram, FaFacebookF } from "react-icons/fa";

/* ============================================================
   IDENTITÉ EVENT'S EMOTIONS
============================================================ */

const INSTAGRAM_URL =
  "https://www.instagram.com/events_emotions__/";

const FACEBOOK_URL =
  "https://www.facebook.com/share/1H7nS1AuH4/";

const PHONE_URL = "tel:+33643894570";
const PHONE_DISPLAY = "06 43 89 45 70";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const pathname = usePathname();
  const router = useRouter();

  /* ============================================================
     SCROLL HEADER
  ============================================================ */

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  /* ============================================================
     FERMETURE AUTOMATIQUE AU CHANGEMENT DE PAGE
  ============================================================ */

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  /* ============================================================
     BLOQUER LE SCROLL DERRIÈRE LE MENU MOBILE
  ============================================================ */

  useEffect(() => {
    if (!open) {
      document.body.style.overflow = "";
      return;
    }

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  /* ============================================================
     NAVIGATION
  ============================================================ */

  const closeMenu = () => {
    setOpen(false);
  };

  const goToSection = (sectionId: string) => {
    setOpen(false);

    if (pathname === "/") {
      window.history.replaceState(
        null,
        "",
        `#${sectionId}`
      );

      requestAnimationFrame(() => {
        const element = document.getElementById(sectionId);

        if (!element) return;

        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      });

      return;
    }

    router.push(`/#${sectionId}`);
  };

  return (
    <>
      {/* =====================================================
          HEADER
      ===================================================== */}

      <header
        className={`fixed left-0 right-0 top-0 z-[100] h-[80px] border-b transition-all duration-200 ${
          scrolled
            ? "border-[#E9E2DD] bg-[#FBFAF8]/95 shadow-[0_8px_30px_rgba(31,25,27,0.08)] backdrop-blur-xl"
            : "border-transparent bg-[#FBFAF8]/90 backdrop-blur-lg"
        }`}
      >
        <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-4 sm:px-5 lg:px-8">

          {/* =================================================
              LOGO ET NOM
          ================================================= */}

          <Link
            href="/"
            onClick={closeMenu}
            className="flex items-center gap-3"
            aria-label="Event'S Emotions - Accueil"
          >
            <div className="relative h-14 w-14 shrink-0 sm:h-16 sm:w-16">
              <Image
                src="/Logo/LogTransparent.png"
                alt="Logo Event'S Emotions"
                fill
                priority
                sizes="64px"
                className="object-contain"
              />
            </div>

            <div className="hidden flex-col leading-none sm:flex">
              <span className="text-lg font-black tracking-tight text-[#1D1B1C] sm:text-xl">
                Event&apos;S
              </span>

              <span className="mt-1 text-xs font-bold tracking-[0.15em] text-[#EF5A4F] sm:text-sm">
                ÉMOTIONS
              </span>

              <span className="mt-1.5 text-[9px] font-medium tracking-wide text-[#716A6C]">
                Votre créateur d&apos;émotions
              </span>
            </div>
          </Link>

          {/* =================================================
              MENU DESKTOP
          ================================================= */}

          <nav className="hidden items-center gap-6 text-sm font-semibold text-[#3F3A3C] lg:flex">

            <Link
              href="/"
              className="transition-colors hover:text-[#EF5A4F]"
            >
              Accueil
            </Link>

            <button
              type="button"
              onClick={() => goToSection("services")}
              className="transition-colors hover:text-[#EF5A4F]"
            >
              Prestations
            </button>

            <Link
              href="/disponibilites"
              className="flex items-center gap-1.5 transition-colors hover:text-[#4A9692]"
            >
              <CalendarDays
                size={16}
                className="text-[#4A9692]"
              />
              Disponibilités
            </Link>

            <button
              type="button"
              onClick={() => goToSection("gallery")}
              className="transition-colors hover:text-[#C34F72]"
            >
              Galerie
            </button>

            <button
              type="button"
              onClick={() => goToSection("packs")}
              className="transition-colors hover:text-[#F3A044]"
            >
              Tarifs
            </button>

            <button
              type="button"
              onClick={() => goToSection("testimonials")}
              className="transition-colors hover:text-[#87954E]"
            >
              Avis
            </button>

            <button
              type="button"
              onClick={() => goToSection("contact")}
              className="transition-colors hover:text-[#EF5A4F]"
            >
              Contact
            </button>
          </nav>

          {/* =================================================
              ACTIONS DESKTOP
          ================================================= */}

          <div className="hidden items-center gap-2.5 lg:flex">

            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram Event'S Emotions"
              title="Instagram"
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#E9E2DD] bg-white text-[#C34F72] transition-all duration-200 hover:-translate-y-0.5 hover:border-[#C34F72]/40 hover:bg-[#FAEEF2]"
            >
              <FaInstagram size={18} />
            </a>

            <a
              href={FACEBOOK_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook Event'S Emotions"
              title="Facebook"
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#E9E2DD] bg-white text-[#4A9692] transition-all duration-200 hover:-translate-y-0.5 hover:border-[#4A9692]/40 hover:bg-[#EDF7F6]"
            >
              <FaFacebookF size={17} />
            </a>

            <a
              href={PHONE_URL}
              className="flex shrink-0 items-center gap-2 whitespace-nowrap rounded-xl bg-[#EF5A4F] px-4 py-2.5 text-sm font-bold text-white shadow-[0_8px_20px_rgba(239,90,79,0.18)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#D94A41]"
            >
              <Phone size={17} />
              {PHONE_DISPLAY}
            </a>
          </div>

          {/* =================================================
              BOUTON MOBILE
          ================================================= */}

          <button
            type="button"
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={open}
            aria-controls="mobile-navigation"
            onClick={() => setOpen((current) => !current)}
            className="relative z-[110] flex h-11 w-11 shrink-0 touch-manipulation items-center justify-center rounded-xl border border-[#E9E2DD] bg-white text-[#1D1B1C] shadow-sm transition-all duration-150 hover:border-[#EF5A4F]/30 hover:bg-[#FFF0ED] lg:hidden"
          >
            <Menu
              size={26}
              className={`absolute transition-all duration-150 ${
                open
                  ? "scale-75 opacity-0"
                  : "scale-100 opacity-100"
              }`}
            />

            <X
              size={26}
              className={`absolute transition-all duration-150 ${
                open
                  ? "scale-100 opacity-100"
                  : "scale-75 opacity-0"
              }`}
            />
          </button>
        </div>
      </header>

      {/* =====================================================
          FOND MOBILE
      ===================================================== */}

      <button
        type="button"
        aria-label="Fermer le menu"
        tabIndex={open ? 0 : -1}
        onClick={closeMenu}
        className={`fixed inset-x-0 bottom-0 top-[80px] z-[80] bg-[#1D1B1C]/30 backdrop-blur-[2px] transition-opacity duration-150 lg:hidden ${
          open
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      />

      {/* =====================================================
          MENU MOBILE
      ===================================================== */}

      <div
        id="mobile-navigation"
        aria-hidden={!open}
        inert={!open}
        className={`fixed left-0 right-0 top-[80px] z-[90] max-h-[calc(100dvh-80px)] overflow-y-auto overscroll-contain border-b border-[#E9E2DD] bg-[#FBFAF8] shadow-2xl transition-all duration-150 ease-out lg:hidden ${
          open
            ? "pointer-events-auto translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-2 opacity-0"
        }`}
      >
        <nav className="flex flex-col px-5 py-4">

          <Link
            href="/"
            onClick={closeMenu}
            className="border-b border-[#E9E2DD] py-4 text-lg font-semibold text-[#1D1B1C] transition-colors hover:text-[#EF5A4F]"
          >
            Accueil
          </Link>

          <button
            type="button"
            onClick={() => goToSection("services")}
            className="border-b border-[#E9E2DD] py-4 text-left text-lg font-semibold text-[#1D1B1C] transition-colors hover:text-[#EF5A4F]"
          >
            Prestations
          </button>

          <Link
            href="/disponibilites"
            onClick={closeMenu}
            className="flex items-center gap-2 border-b border-[#E9E2DD] py-4 text-lg font-bold text-[#4A9692]"
          >
            <CalendarDays size={20} />
            Disponibilités
          </Link>

          <button
            type="button"
            onClick={() => goToSection("gallery")}
            className="border-b border-[#E9E2DD] py-4 text-left text-lg font-semibold text-[#1D1B1C] transition-colors hover:text-[#C34F72]"
          >
            Galerie
          </button>

          <button
            type="button"
            onClick={() => goToSection("packs")}
            className="border-b border-[#E9E2DD] py-4 text-left text-lg font-semibold text-[#1D1B1C] transition-colors hover:text-[#F3A044]"
          >
            Tarifs
          </button>

          <button
            type="button"
            onClick={() => goToSection("testimonials")}
            className="border-b border-[#E9E2DD] py-4 text-left text-lg font-semibold text-[#1D1B1C] transition-colors hover:text-[#87954E]"
          >
            Avis
          </button>

          <button
            type="button"
            onClick={() => goToSection("contact")}
            className="border-b border-[#E9E2DD] py-4 text-left text-lg font-semibold text-[#1D1B1C] transition-colors hover:text-[#EF5A4F]"
          >
            Contact
          </button>

          {/* =================================================
              RÉSEAUX SOCIAUX
          ================================================= */}

          <div className="mt-5">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#9A9395]">
              Suivez-nous
            </p>

            <div className="mt-3 flex gap-3">

              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram Event'S Emotions"
                className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#E9E2DD] bg-white text-[#C34F72]"
              >
                <FaInstagram size={21} />
              </a>

              <a
                href={FACEBOOK_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook Event'S Emotions"
                className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#E9E2DD] bg-white text-[#4A9692]"
              >
                <FaFacebookF size={20} />
              </a>
            </div>
          </div>

          {/* =================================================
              TÉLÉPHONE
          ================================================= */}

          <a
            href={PHONE_URL}
            onClick={closeMenu}
            className="mt-5 flex items-center justify-center gap-2 rounded-xl border-2 border-[#4A9692] py-3 font-bold text-[#347A77]"
          >
            <Phone size={18} />
            {PHONE_DISPLAY}
          </a>

          {/* =================================================
              DEVIS
          ================================================= */}

          <button
            type="button"
            onClick={() => goToSection("contact")}
            className="mt-3 rounded-xl bg-[#EF5A4F] py-4 text-center font-bold text-white shadow-[0_10px_24px_rgba(239,90,79,0.18)] transition hover:bg-[#D94A41]"
          >
            Demander un devis
          </button>
        </nav>
      </div>
    </>
  );
}
