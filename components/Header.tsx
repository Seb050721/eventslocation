"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X, Phone, FileText } from "lucide-react";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white shadow-lg py-3"
            : "bg-white/90 backdrop-blur py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 flex items-center justify-between">

          {/* Logo */}
          <Link
            href="/"
            className="text-2xl font-bold text-green-700 tracking-tight"
          >
            Event'S Location
          </Link>

          {/* Menu PC */}
          <nav className="hidden lg:flex items-center gap-8 text-gray-700 font-medium">

            <Link href="/">Accueil</Link>

            <Link href="#services">Prestations</Link>

            <Link href="#gallery">Galerie</Link>

            <Link href="#packs">Tarifs</Link>

            <Link href="#testimonials">Avis</Link>

            <Link href="#contact">Contact</Link>

          </nav>

          {/* Bouton devis PC */}
          <div className="hidden lg:flex items-center gap-4">

            <a
              href="tel:0643894570"
              className="flex items-center gap-2 text-green-700 font-semibold"
            >
              <Phone size={18} />
              06 43 89 45 70
            </a>

            <Link
              href="#contact"
              className="bg-green-600 hover:bg-green-700 transition text-white px-5 py-3 rounded-xl font-semibold"
            >
              Demander un devis
            </Link>

          </div>

          {/* Hamburger */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden"
          >
            {open ? <X size={32} /> : <Menu size={32} />}
          </button>

        </div>
      </header>

      {/* MENU MOBILE */}

      <div
        className={`fixed top-16 left-0 right-0 bg-white shadow-xl transition-all duration-300 overflow-hidden lg:hidden z-40 ${
          open ? "max-h-screen py-6" : "max-h-0"
        }`}
      >
        <div className="flex flex-col px-6 gap-6 text-lg font-medium">

          <Link href="/" onClick={() => setOpen(false)}>
            Accueil
          </Link>

          <Link href="#services" onClick={() => setOpen(false)}>
            Prestations
          </Link>

          <Link href="#gallery" onClick={() => setOpen(false)}>
            Galerie
          </Link>

          <Link href="#packs" onClick={() => setOpen(false)}>
            Tarifs
          </Link>

          <Link href="#testimonials" onClick={() => setOpen(false)}>
            Avis
          </Link>

          <Link href="#contact" onClick={() => setOpen(false)}>
            Contact
          </Link>

          <a
            href="tel:0643894570"
            className="flex items-center gap-3 text-green-700 font-semibold"
          >
            <Phone size={20} />
            06 43 89 45 70
          </a>

          <Link
            href="#contact"
            onClick={() => setOpen(false)}
            className="bg-green-600 text-white text-center py-4 rounded-xl font-bold flex items-center justify-center gap-2"
          >
            <FileText size={20} />
            Demander un devis
          </Link>

        </div>
      </div>

      {/* Décalage pour le header fixe */}
      <div className="h-20"></div>
    </>
  );
}