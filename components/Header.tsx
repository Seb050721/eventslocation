"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const navigation = [
  { name: "Accueil", href: "/" },
  { name: "Prestations", href: "#prestations" },
  { name: "Galerie", href: "#galerie" },
  { name: "Avis", href: "#avis" },
  { name: "Contact", href: "#contact" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header
      className={`fixed left-1/2 top-4 z-50 w-[95%] max-w-7xl -translate-x-1/2 rounded-2xl transition-all duration-500 ${
          scrolled
            ? "border border-white/80 bg-white/97 shadow-2xl backdrop-blur-2xl py-0"
            : "border border-white/60 bg-white/90 shadow-xl backdrop-blur-xl py-1"
        }`}
    >
      <div className="flex h-20 items-center justify-between px-5 md:px-8">
        {/* Logo */}

        <Link href="/" className="flex items-center gap-4">
          <Image
            src="/Logo/Logo.png"
            alt="Event'S Location"
            width={58}
            height={58}
            priority
            className="rounded-full"
          />

          <div className="hidden sm:block">
            <h1 className="text-xl font-bold tracking-tight text-slate-900">
              Event'S Location
            </h1>

            <p className="text-sm text-gray-500">
              Location de matériel événementiel
            </p>
          </div>
        </Link>

        {/* Navigation Desktop */}

        <nav className="hidden items-center gap-10 lg:flex">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="relative font-medium text-gray-700 transition-colors duration-300 hover:text-green-600 after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-green-600 after:transition-all after:duration-300 hover:after:w-full"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Actions */}

        <div className="flex items-center gap-3">
          <Link
            href="#contact"
            className="hidden rounded-full bg-green-600 px-6 py-3 font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:bg-green-700 active:scale-95 lg:inline-flex"
          >
            Demander un devis
          </Link>

          <button
            aria-label="Menu"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="rounded-xl p-2 transition hover:bg-black/5 lg:hidden"
          >
            {mobileOpen ? (
              <X className="h-7 w-7" />
            ) : (
              <Menu className="h-7 w-7" />
            )}
          </button>
        </div>
      </div>

      {/* Menu Mobile */}

      <div
        className={`overflow-hidden transition-all duration-300 lg:hidden ${
          mobileOpen ? "max-h-[500px]" : "max-h-0"
        }`}
      >
        <nav className="border-t border-gray-200 bg-white/95 backdrop-blur-xl">
          <div className="flex flex-col p-6">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="rounded-xl px-4 py-4 text-lg font-medium text-slate-800 transition hover:bg-green-50 hover:text-green-500"
              >
                {item.name}
              </Link>
            ))}

            <Link
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="mt-6 flex justify-center rounded-full bg-green-600 px-6 py-4 text-lg font-semibold text-white shadow-lg transition hover:bg-green-700"
            >
              Demander un devis
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}