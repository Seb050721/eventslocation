import Link from "next/link";
import { ArrowRight, CalendarDays } from "lucide-react";

export default function HeroButtons() {
  return (
    <div className="mt-10 flex flex-col gap-4 sm:flex-row">

      <Link
        href="#contact"
        className="group flex items-center justify-center rounded-2xl bg-green-600 px-8 py-4 text-lg font-bold text-white shadow-xl transition-all duration-300 hover:scale-105 hover:bg-green-700"
      >
        <CalendarDays className="mr-3 h-5 w-5" />

        Demander un devis

      </Link>

      <Link
        href="#services"
        className="group flex items-center justify-center rounded-2xl border-2 border-white/40 bg-white/10 px-8 py-4 text-lg font-semibold text-white backdrop-blur transition-all duration-300 hover:bg-white hover:text-green-700"
      >
        Découvrir nos prestations

        <ArrowRight className="ml-3 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />

      </Link>

    </div>
  );
}