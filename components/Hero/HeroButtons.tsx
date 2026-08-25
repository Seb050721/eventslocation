import Link from "next/link";

import {
  ArrowRight,
  CalendarDays,
} from "lucide-react";

export default function HeroButtons() {
  return (
    <div className="mt-7 flex flex-col gap-3 sm:mt-9 sm:flex-row sm:gap-4">

      <Link
        href="#contact"
        className="group flex min-h-[56px] items-center justify-center rounded-xl bg-green-600 px-5 py-3.5 text-base font-bold text-white shadow-xl transition-all duration-200 hover:bg-green-700 sm:rounded-2xl sm:px-7 sm:py-4 sm:text-lg"
      >
        <CalendarDays className="mr-2.5 h-5 w-5 shrink-0" />

        Demander un devis
      </Link>

      <Link
        href="#services"
        className="group flex min-h-[56px] items-center justify-center rounded-xl border-2 border-white/40 bg-white/10 px-5 py-3.5 text-center text-base font-semibold text-white backdrop-blur transition-all duration-200 hover:bg-white hover:text-green-700 sm:rounded-2xl sm:px-7 sm:py-4 sm:text-lg"
      >
        Découvrir nos prestations

        <ArrowRight className="ml-2.5 h-5 w-5 shrink-0 transition-transform duration-200 group-hover:translate-x-1" />
      </Link>

    </div>
  );
}