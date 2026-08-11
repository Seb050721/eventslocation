"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X, Phone } from "lucide-react";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Bloque le scroll lorsque le menu mobile est ouvert
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const closeMenu = () => {
    setOpen(false);
  };

  return (
    <>
      {/* =====================================================
          HEADER
      ===================================================== */}

      <header
        className={`fixed inset-x-0 top-0 z-50 h-[72px] transition-all duration-300 ${
          scrolled
            ? "bg-white/95 shadow-lg backdrop-blur-xl"
            : "bg-black/10 backdrop-blur-sm"
        }`}
      >
        <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-5 sm:px-6">

          {/* =================================================
              LOGO
          ================================================= */}

          <Link
            href="/"
            onClick={closeMenu}
            className="group flex items-center"
          >
            <span
              className={`text-2xl font-black tracking-tight transition-colors duration-300 sm:text-3xl ${
                scrolled ? "text-gray-900" : "text-white"
              }`}
            >
              Event&apos;S
            </span>

            <span className="ml-1 text-2xl font-black tracking-tight text-green-500 transition-colors duration-300 sm:text-3xl">
              Location
            </span>
          </Link>

          {/* =================================================
              MENU DESKTOP
          ================================================= */}

          <nav
            className={`hidden items-center gap-7 lg:flex ${
              scrolled ? "text-gray-800" : "text-white"
            }`}
          >
            <Link
              href="/"
              className="group relative py-2 font-medium"
            >
              Accueil
              <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-green-500 transition-all duration-300 group-hover:w-full" />
            </Link>

            <Link
              href="#services"
              className="group relative py-2 font-medium"
            >
              Prestations
              <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-green-500 transition-all duration-300 group-hover:w-full" />
            </Link>

            <Link
              href="#gallery"
              className="group relative py-2 font-medium"
            >
              Galerie
              <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-green-500 transition-all duration-300 group-hover:w-full" />
            </Link>

            <Link
              href="#packs"
              className="group relative py-2 font-medium"
            >
              Tarifs
              <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-green-500 transition-all duration-300 group-hover:w-full" />
            </Link>

            <Link
              href="#testimonials"
              className="group relative py-2 font-medium"
            >
              Avis
              <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-green-500 transition-all duration-300 group-hover:w-full" />
            </Link>

            <Link
              href="#contact"
              className="group relative py-2 font-medium"
            >
              Contact
              <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-green-500 transition-all duration-300 group-hover:w-full" />
            </Link>
          </nav>

          {/* =================================================
              ACTIONS DESKTOP
          ================================================= */}

          <div className="hidden items-center gap-4 lg:flex">
            <a
              href="tel:0643894570"
              className={`flex items-center gap-2 font-semibold transition-colors ${
                scrolled
                  ? "text-green-700 hover:text-green-800"
                  : "text-white hover:text-green-300"
              }`}
            >
              <Phone size={17} />
              <span>06 43 89 45 70</span>
            </a>

            <Link
              href="#contact"
              className="rounded-xl bg-green-600 px-5 py-3 font-bold text-white shadow-lg shadow-green-900/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-green-700 hover:shadow-xl"
            >
              Demander un devis
            </Link>
          </div>

          {/* =================================================
              BOUTON MOBILE
          ================================================= */}

          <button
            type="button"
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
            className={`relative flex h-11 w-11 items-center justify-center rounded-xl transition-all duration-300 lg:hidden ${
              scrolled
                ? "bg-gray-100 text-gray-900 hover:bg-gray-200"
                : "bg-white/10 text-white backdrop-blur-md hover:bg-white/20"
            }`}
          >
            <span
              className={`absolute transition-all duration-300 ${
                open
                  ? "rotate-90 scale-0 opacity-0"
                  : "rotate-0 scale-100 opacity-100"
              }`}
            >
              <Menu size={27} />
            </span>

            <span
              className={`absolute transition-all duration-300 ${
                open
                  ? "rotate-0 scale-100 opacity-100"
                  : "-rotate-90 scale-0 opacity-0"
              }`}
            >
              <X size={27} />
            </span>
          </button>
        </div>
      </header>

      {/* =====================================================
          MENU MOBILE
      ===================================================== */}

      <div
        className={`fixed inset-x-0 top-[72px] z-40 lg:hidden ${
          open ? "pointer-events-auto" : "pointer-events-none"
        }`}
      >
        {/* Fond sombre derrière le menu */}
        <div
          onClick={closeMenu}
          className={`fixed inset-0 top-[72px] bg-black/40 backdrop-blur-sm transition-opacity duration-300 ${
            open ? "opacity-100" : "opacity-0"
          }`}
        />

        {/* Panneau */}
        <div
          className={`relative bg-white shadow-2xl transition-all duration-300 ${
            open
              ? "translate-y-0 opacity-100"
              : "-translate-y-5 opacity-0"
          }`}
        >
          <nav className="mx-auto flex max-w-7xl flex-col px-5 py-6">

            <Link
              href="/"
              onClick={closeMenu}
              className="border-b border-gray-100 py-4 text-lg font-semibold text-gray-900 transition-colors hover:text-green-600"
            >
              Accueil
            </Link>

            <Link
              href="#services"
              onClick={closeMenu}
              className="border-b border-gray-100 py-4 text-lg font-semibold text-gray-900 transition-colors hover:text-green-600"
            >
              Prestations
            </Link>

            <Link
              href="#gallery"
              onClick={closeMenu}
              className="border-b border-gray-100 py-4 text-lg font-semibold text-gray-900 transition-colors hover:text-green-600"
            >
              Galerie
            </Link>

            <Link
              href="#packs"
              onClick={closeMenu}
              className="border-b border-gray-100 py-4 text-lg font-semibold text-gray-900 transition-colors hover:text-green-600"
            >
              Tarifs
            </Link>

            <Link
              href="#testimonials"
              onClick={closeMenu}
              className="border-b border-gray-100 py-4 text-lg font-semibold text-gray-900 transition-colors hover:text-green-600"
            >
              Avis clients
            </Link>

            <Link
              href="#contact"
              onClick={closeMenu}
              className="border-b border-gray-100 py-4 text-lg font-semibold text-gray-900 transition-colors hover:text-green-600"
            >
              Contact
            </Link>

            {/* Téléphone */}
            <a
              href="tel:0643894570"
              className="mt-6 flex items-center justify-center gap-3 rounded-xl border-2 border-green-600 py-3.5 font-bold text-green-700 transition-all duration-300 hover:bg-green-50"
            >
              <Phone size={19} />
              06 43 89 45 70
            </a>

            {/* Devis */}
            <Link
              href="#contact"
              onClick={closeMenu}
              className="mt-3 rounded-xl bg-green-600 py-4 text-center font-bold text-white shadow-lg transition-all duration-300 hover:bg-green-700"
            >
              Demander un devis
            </Link>

            {/* Zone */}
            <p className="mt-5 text-center text-xs text-gray-500">
              Nièvre • Yonne • Cher
            </p>
          </nav>
        </div>
      </div>
    </>
  );
}