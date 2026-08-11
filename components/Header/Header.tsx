"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
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

  const closeMenu = () => {
    setOpen(false);
  };

  return (
    <>
      {/* HEADER */}
      <header
          className={`fixed left-0 right-0 top-0 z-[100] h-[80px] ${
            scrolled
            ? "bg-white shadow-md"
            : "bg-black/10"
          }`}
          >
        <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-5">

          {/* LOGO */}
          <Link
           href="/"
          onClick={closeMenu}
          className="flex items-center gap-3"
          aria-label="Event'S Location - Accueil"
        >
      <div
         className={`relative h-14 w-14 shrink-0 rounded-full p-1 transition-all duration-300 sm:h-16 sm:w-16 ${
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
          sizes="56px"
          className="object-contain"
        />
      </div>

  <div className="flex flex-col leading-none">
    <span
      className={`text-lg font-black tracking-tight transition-colors duration-200 sm:text-xl ${
        scrolled ? "text-gray-900" : "text-white"
      }`}
    >
      Event&apos;S
    </span>

    <span className="mt-1 text-sm font-bold tracking-[0.12em] text-green-500 sm:text-base">
      LOCATION
    </span>
  </div>
</Link>

          {/* MENU DESKTOP */}
          <nav
            className={`hidden items-center gap-7 lg:flex ${
              scrolled ? "text-gray-800" : "text-white"
            }`}
          >
            <Link href="/">Accueil</Link>
            <Link href="#services">Prestations</Link>
            <Link href="#gallery">Galerie</Link>
            <Link href="#packs">Tarifs</Link>
            <Link href="#testimonials">Avis</Link>
            <Link href="#contact">Contact</Link>
          </nav>

          {/* ACTIONS DESKTOP */}
          <div className="hidden items-center gap-4 lg:flex">
            <a
              href="tel:0643894570"
              className={`flex items-center gap-2 font-semibold ${
                scrolled ? "text-green-700" : "text-white"
              }`}
            >
              <Phone size={18} />
              06 43 89 45 70
            </a>

            <Link
              href="#contact"
              className="rounded-xl bg-green-600 px-5 py-3 font-bold text-white"
            >
              Demander un devis
            </Link>
          </div>

          {/* BOUTON MOBILE */}
          <button
            type="button"
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={open}
            onClick={() => setOpen(!open)}
            className={`flex h-12 w-12 items-center justify-center rounded-xl lg:hidden ${
              scrolled
                ? "bg-gray-100 text-gray-900"
                : "bg-white/20 text-white"
            }`}
          >
            {open ? (
              <X size={30} />
            ) : (
              <Menu size={30} />
            )}
          </button>
        </div>
      </header>

      {/* MENU MOBILE */}
      {open && (
        <div className="fixed left-0 right-0 top-[80px] z-[90] bg-white shadow-xl lg:hidden">

          <nav className="flex flex-col px-5 py-4">

            <Link
              href="/"
              onClick={closeMenu}
              className="border-b py-4 text-lg font-semibold"
            >
              Accueil
            </Link>

            <Link
              href="#services"
              onClick={closeMenu}
              className="border-b py-4 text-lg font-semibold"
            >
              Prestations
            </Link>

            <Link
              href="#gallery"
              onClick={closeMenu}
              className="border-b py-4 text-lg font-semibold"
            >
              Galerie
            </Link>

            <Link
              href="#packs"
              onClick={closeMenu}
              className="border-b py-4 text-lg font-semibold"
            >
              Tarifs
            </Link>

            <Link
              href="#testimonials"
              onClick={closeMenu}
              className="border-b py-4 text-lg font-semibold"
            >
              Avis
            </Link>

            <Link
              href="#contact"
              onClick={closeMenu}
              className="border-b py-4 text-lg font-semibold"
            >
              Contact
            </Link>

            <a
              href="tel:0643894570"
              className="mt-5 flex items-center justify-center gap-2 rounded-xl border-2 border-green-600 py-3 font-bold text-green-700"
            >
              <Phone size={18} />
              06 43 89 45 70
            </a>

            <Link
              href="#contact"
              onClick={closeMenu}
              className="mt-3 rounded-xl bg-green-600 py-4 text-center font-bold text-white"
            >
              Demander un devis
            </Link>

          </nav>
        </div>
      )}
    </>
  );
}