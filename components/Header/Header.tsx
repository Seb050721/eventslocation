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

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
      {/* HEADER */}
      <header
        className={`fixed inset-x-0 top-0 z-50 h-[72px] transition-all duration-300 ${
          scrolled
            ? "bg-white/95 shadow-lg backdrop-blur-xl"
            : "bg-black/10 backdrop-blur-sm"
        }`}
      >
        <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-5 sm:px-6">

          {/* LOGO */}
          <Link
            href="/"
            onClick={closeMenu}
            className="flex items-center"
          >
            <span
              className={`text-2xl font-black tracking-tight sm:text-3xl ${
                scrolled ? "text-gray-900" : "text-white"
              }`}
            >
              Event&apos;S
            </span>

            <span className="ml-1 text-2xl font-black tracking-tight text-green-500 sm:text-3xl">
              Location
            </span>
          </Link>

          {/* MENU DESKTOP */}
          <nav
            className={`hidden items-center gap-7 lg:flex ${
              scrolled ? "text-gray-800" : "text-white"
            }`}
          >
            {[
              ["Accueil", "/"],
              ["Prestations", "#services"],
              ["Galerie", "#gallery"],
              ["Tarifs", "#packs"],
              ["Avis", "#testimonials"],
              ["Contact", "#contact"],
            ].map(([label, href]) => (
              <Link
                key={label}
                href={href}
                className="group relative py-2 font-medium"
              >
                {label}

                <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-green-500 transition-all duration-200 group-hover:w-full" />
              </Link>
            ))}
          </nav>

          {/* ACTIONS DESKTOP */}
          <div className="hidden items-center gap-4 lg:flex">
            <a
              href="tel:0643894570"
              className={`flex items-center gap-2 font-semibold ${
                scrolled ? "text-green-700" : "text-white"
              }`}
            >
              <Phone size={17} />
              06 43 89 45 70
            </a>

            <Link
              href="#contact"
              className="rounded-xl bg-green-600 px-5 py-3 font-bold text-white shadow-lg transition hover:bg-green-700"
            >
              Demander un devis
            </Link>
          </div>

          {/* BOUTON MOBILE */}
          <button
            type="button"
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={open}
            onClick={() => setOpen((previous) => !previous)}
            className={`relative z-[60] flex h-12 w-12 touch-manipulation items-center justify-center rounded-xl transition-colors duration-150 lg:hidden ${
              scrolled
                ? "bg-gray-100 text-gray-900"
                : "bg-white/15 text-white"
            }`}
          >
            {open ? (
              <X size={28} strokeWidth={2.5} />
            ) : (
              <Menu size={28} strokeWidth={2.5} />
            )}
          </button>
        </div>
      </header>

      {/* MENU MOBILE */}
      <div
        className={`fixed inset-x-0 top-[72px] z-50 lg:hidden ${
          open ? "visible" : "invisible"
        }`}
      >
        {/* Fond */}
        <button
          type="button"
          aria-label="Fermer le menu"
          onClick={closeMenu}
          className={`fixed inset-0 top-[72px] bg-black/40 transition-opacity duration-150 ${
            open
              ? "pointer-events-auto opacity-100"
              : "pointer-events-none opacity-0"
          }`}
        />

        {/* Panneau */}
        <div
          className={`relative bg-white shadow-2xl transition-transform duration-150 ${
            open ? "translate-y-0" : "-translate-y-2"
          }`}
        >
          <nav className="mx-auto flex max-w-7xl flex-col px-5 py-5">

            <Link
              href="/"
              onClick={closeMenu}
              className="border-b border-gray-100 py-4 text-lg font-semibold text-gray-900"
            >
              Accueil
            </Link>

            <Link
              href="#services"
              onClick={closeMenu}
              className="border-b border-gray-100 py-4 text-lg font-semibold text-gray-900"
            >
              Prestations
            </Link>

            <Link
              href="#gallery"
              onClick={closeMenu}
              className="border-b border-gray-100 py-4 text-lg font-semibold text-gray-900"
            >
              Galerie
            </Link>

            <Link
              href="#packs"
              onClick={closeMenu}
              className="border-b border-gray-100 py-4 text-lg font-semibold text-gray-900"
            >
              Tarifs
            </Link>

            <Link
              href="#testimonials"
              onClick={closeMenu}
              className="border-b border-gray-100 py-4 text-lg font-semibold text-gray-900"
            >
              Avis clients
            </Link>

            <Link
              href="#contact"
              onClick={closeMenu}
              className="border-b border-gray-100 py-4 text-lg font-semibold text-gray-900"
            >
              Contact
            </Link>

            <a
              href="tel:0643894570"
              className="mt-5 flex items-center justify-center gap-2 rounded-xl border-2 border-green-600 py-3.5 font-bold text-green-700"
            >
              <Phone size={19} />
              06 43 89 45 70
            </a>

            <Link
              href="#contact"
              onClick={closeMenu}
              className="mt-3 rounded-xl bg-green-600 py-4 text-center font-bold text-white"
            >
              Demander un devis
            </Link>

            <p className="mt-4 text-center text-xs text-gray-500">
              Nièvre • Yonne • Cher
            </p>
          </nav>
        </div>
      </div>
    </>
  );
}