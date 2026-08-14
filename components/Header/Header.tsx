"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

import {
  Menu,
  X,
  Phone,
  CalendarDays,
} from "lucide-react";

import {
  FaInstagram,
  FaFacebookF,
} from "react-icons/fa";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const closeMenu = () => {
    setOpen(false);
  };

  return (
    <>
      {/* =====================================================
          HEADER
      ===================================================== */}
      <header
        className={`fixed left-0 right-0 top-0 z-[100] h-[80px] transition-colors duration-200 ${
          scrolled
            ? "bg-white shadow-md"
            : "bg-black/10"
        }`}
      >
        <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-5">

          {/* =================================================
              LOGO
          ================================================= */}
          <Link
            href="/"
            onClick={closeMenu}
            className="flex items-center gap-3"
            aria-label="Event'S Location - Accueil"
          >
            <div
              className={`relative h-14 w-14 shrink-0 rounded-full p-1 transition-all duration-200 sm:h-16 sm:w-16 ${
                scrolled
                  ? "bg-transparent"
                  : "bg-white shadow-lg backdrop-blur-sm"
              }`}
            >
              <Image
                src="/Logo/Logo.png"
                alt="Logo Event'S Location"
                fill
                priority
                sizes="64px"
                className="object-contain"
              />
            </div>

            <div className="flex flex-col leading-none">

              <span
                className={`text-lg font-black tracking-tight transition-colors duration-200 sm:text-xl ${
                  scrolled
                    ? "text-gray-900"
                    : "text-white"
                }`}
              >
                Event&apos;S
              </span>

              <span className="mt-1 text-sm font-bold tracking-[0.12em] text-green-500 sm:text-base">
                LOCATION
              </span>

            </div>
          </Link>

          {/* =================================================
              MENU DESKTOP
          ================================================= */}
          <nav
            className={`hidden items-center gap-6 lg:flex ${
              scrolled
                ? "text-gray-800"
                : "text-white"
            }`}
          >

            <Link
              href="/"
              className="transition-colors hover:text-green-500"
            >
              Accueil
            </Link>

            <Link
              href="/#services"
              className="transition-colors hover:text-green-500"
            >
              Prestations
            </Link>

            <Link
              href="/disponibilites"
              className="flex items-center gap-1.5 transition-colors hover:text-green-500"
            >
              <CalendarDays size={16} />

              Disponibilités
            </Link>

            <Link
              href="/#gallery"
              className="transition-colors hover:text-green-500"
            >
              Galerie
            </Link>

            <Link
              href="/#packs"
              className="transition-colors hover:text-green-500"
            >
              Tarifs
            </Link>

            <Link
              href="/#testimonials"
              className="transition-colors hover:text-green-500"
            >
              Avis
            </Link>

            <Link
              href="/#contact"
              className="transition-colors hover:text-green-500"
            >
              Contact
            </Link>

          </nav>

          {/* =================================================
              ACTIONS DESKTOP
          ================================================= */}
          <div className="hidden items-center gap-3 lg:flex">

            {/* INSTAGRAM */}
            <a
              href="https://www.instagram.com/events_location__/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram Event'S Location"
              title="Instagram"
              className={`flex h-10 w-10 items-center justify-center rounded-xl border transition-all duration-200 hover:-translate-y-0.5 hover:border-green-500/50 hover:text-green-500 ${
                scrolled
                  ? "border-gray-200 bg-gray-100 text-gray-700"
                  : "border-white/20 bg-white/10 text-white"
              }`}
            >
              <FaInstagram size={19} />
            </a>

            {/* FACEBOOK */}
            <a
              href="https://www.facebook.com/share/1H7nS1AuH4/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook Event'S Location"
              title="Facebook"
              className={`flex h-10 w-10 items-center justify-center rounded-xl border transition-all duration-200 hover:-translate-y-0.5 hover:border-green-500/50 hover:text-green-500 ${
                scrolled
                  ? "border-gray-200 bg-gray-100 text-gray-700"
                  : "border-white/20 bg-white/10 text-white"
              }`}
            >
              <FaFacebookF size={18} />
            </a>

            {/* TÉLÉPHONE */}
            <a
              href="tel:+33643894570"
              className={`flex shrink-0 items-center gap-2 whitespace-nowrap font-semibold ${
                scrolled
                  ? "text-green-700"
                  : "text-white"
              }`}
            >
              <Phone size={18} />

              06 43 89 45 70
            </a>

          </div>

          {/* =================================================
              BOUTON MOBILE
          ================================================= */}
          <button
            type="button"
            aria-label={
              open
                ? "Fermer le menu"
                : "Ouvrir le menu"
            }
            aria-expanded={open}
            onClick={() => setOpen((current) => !current)}
            className={`relative z-[110] flex h-12 w-12 shrink-0 touch-manipulation items-center justify-center rounded-xl transition-colors duration-150 lg:hidden ${
              scrolled
                ? "bg-gray-100 text-gray-900"
                : "bg-white/20 text-white"
            }`}
          >
            <Menu
              size={30}
              className={`absolute transition-all duration-150 ${
                open
                  ? "scale-75 opacity-0"
                  : "scale-100 opacity-100"
              }`}
            />

            <X
              size={30}
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
        onClick={closeMenu}
        className={`fixed inset-x-0 bottom-0 top-[80px] z-[80] bg-black/30 transition-opacity duration-200 lg:hidden ${
          open
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      />

      {/* =====================================================
          MENU MOBILE
      ===================================================== */}
      <div
        className={`fixed left-0 right-0 top-[80px] z-[90] max-h-[calc(100vh-80px)] overflow-y-auto overscroll-contain bg-white shadow-2xl transition-all duration-200 ease-out lg:hidden ${
          open
            ? "pointer-events-auto translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-4 opacity-0"
        }`}
      >
        <nav className="flex flex-col px-5 py-4">

          {/* ACCUEIL */}
          <Link
            href="/"
            onClick={closeMenu}
            className="border-b border-gray-100 py-4 text-lg font-semibold"
          >
            Accueil
          </Link>

          {/* PRESTATIONS */}
          <Link
            href="/#services"
            onClick={closeMenu}
            className="border-b border-gray-100 py-4 text-lg font-semibold"
          >
            Prestations
          </Link>

          {/* DISPONIBILITÉS */}
          <Link
            href="/disponibilites"
            onClick={closeMenu}
            className="flex items-center gap-2 border-b border-gray-100 py-4 text-lg font-bold text-green-700"
          >
            <CalendarDays size={20} />

            Disponibilités
          </Link>

          {/* GALERIE */}
          <Link
            href="/#gallery"
            onClick={closeMenu}
            className="border-b border-gray-100 py-4 text-lg font-semibold"
          >
            Galerie
          </Link>

          {/* TARIFS */}
          <Link
            href="/#packs"
            onClick={closeMenu}
            className="border-b border-gray-100 py-4 text-lg font-semibold"
          >
            Tarifs
          </Link>

          {/* AVIS */}
          <Link
            href="/#testimonials"
            onClick={closeMenu}
            className="border-b border-gray-100 py-4 text-lg font-semibold"
          >
            Avis
          </Link>

          {/* CONTACT */}
          <Link
            href="/#contact"
            onClick={closeMenu}
            className="border-b border-gray-100 py-4 text-lg font-semibold"
          >
            Contact
          </Link>

          {/* =================================================
              RÉSEAUX
          ================================================= */}
          <div className="mt-5">

            <p className="text-xs font-bold uppercase tracking-[0.18em] text-gray-400">
              Suivez-nous
            </p>

            <div className="mt-3 flex gap-3">

              <a
                href="https://www.instagram.com/events_location__/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram Event'S Location"
                className="flex h-12 w-12 items-center justify-center rounded-xl border border-gray-200 bg-gray-50 text-gray-700"
              >
                <FaInstagram size={21} />
              </a>

              <a
                href="https://www.facebook.com/share/1H7nS1AuH4/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook Event'S Location"
                className="flex h-12 w-12 items-center justify-center rounded-xl border border-gray-200 bg-gray-50 text-gray-700"
              >
                <FaFacebookF size={20} />
              </a>

            </div>

          </div>

          {/* =================================================
              TÉLÉPHONE
          ================================================= */}
          <a
            href="tel:+33643894570"
            className="mt-5 flex items-center justify-center gap-2 rounded-xl border-2 border-green-600 py-3 font-bold text-green-700"
          >
            <Phone size={18} />

            06 43 89 45 70
          </a>

          {/* =================================================
              DEVIS
          ================================================= */}
          <Link
            href="/#contact"
            onClick={closeMenu}
            className="mt-3 rounded-xl bg-green-600 py-4 text-center font-bold text-white"
          >
            Demander un devis
          </Link>

        </nav>
      </div>
    </>
  );
}