import Link from "next/link";

import {
  ArrowRight,
  CalendarDays,
} from "lucide-react";

export default function HeroButtons() {
  return (
    <div className="mt-7 flex flex-col gap-3 sm:mt-9 sm:flex-row sm:gap-4">

      {/* =====================================================
          BOUTON PRINCIPAL — DEVIS
      ===================================================== */}

      <Link
        href="#contact"
        className="group flex min-h-[56px] items-center justify-center rounded-xl bg-[#EF5A4F] px-5 py-3.5 text-base font-bold text-white shadow-[0_12px_30px_rgba(239,90,79,0.25)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#D94A41] hover:shadow-[0_16px_35px_rgba(239,90,79,0.30)] sm:rounded-2xl sm:px-7 sm:py-4 sm:text-lg"
      >
        <CalendarDays className="mr-2.5 h-5 w-5 shrink-0" />

        Demander un devis
      </Link>

      {/* =====================================================
          BOUTON SECONDAIRE — PRESTATIONS
      ===================================================== */}

      <Link
        href="#services"
        className="group flex min-h-[56px] items-center justify-center rounded-xl border-2 border-[#DED7D3] bg-white px-5 py-3.5 text-center text-base font-semibold text-[#3F3A3C] shadow-[0_8px_25px_rgba(31,25,27,0.06)] transition-all duration-200 hover:-translate-y-0.5 hover:border-[#4A9692]/50 hover:bg-[#EDF7F6] hover:text-[#347A77] sm:rounded-2xl sm:px-7 sm:py-4 sm:text-lg"
      >
        Découvrir nos prestations

        <ArrowRight className="ml-2.5 h-5 w-5 shrink-0 transition-transform duration-200 group-hover:translate-x-1" />
      </Link>

    </div>
  );
}