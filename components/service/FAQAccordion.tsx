"use client";

import { useState } from "react";
import {
  ChevronDown,
  HelpCircle,
} from "lucide-react";

import type { FAQItem } from "@/data/services";

interface Props {
  faq: FAQItem[];
}

export default function FAQAccordion({
  faq,
}: Props) {
  const [open, setOpen] =
    useState<number | null>(0);

  if (faq.length === 0) {
    return null;
  }

  return (
    <section className="rounded-[24px] border border-[#E9E2DD] bg-[#FBFAF8] p-5 shadow-[0_10px_30px_rgba(31,25,27,0.05)] sm:rounded-3xl sm:p-6 lg:p-8">

      {/* TITRE */}

      <div className="mb-6 sm:mb-8">

        <span className="inline-flex items-center gap-2 rounded-full border border-[#F3A044]/25 bg-[#FFF5E9] px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-[0.18em] text-[#D8872F] sm:px-4 sm:py-2 sm:text-xs">
          <HelpCircle size={14} />
          FAQ
        </span>

        <h2 className="mt-4 text-2xl font-black leading-tight text-[#1D1B1C] sm:text-3xl">
          Questions
          <span className="text-[#EF5A4F]">
            {" "}fréquentes
          </span>
        </h2>

        <p className="mt-2 text-sm leading-6 text-[#716A6C] sm:text-base">
          Retrouvez ici les réponses aux questions les plus courantes.
        </p>

      </div>

      {/* QUESTIONS */}

      <div className="space-y-3 sm:space-y-4">

        {faq.map((item, index) => {
          const isOpen =
            open === index;

          return (
            <div
              key={item.question}
              className={`overflow-hidden rounded-2xl border bg-white transition-all duration-300 ${
                isOpen
                  ? "border-[#4A9692]/30 shadow-[0_8px_24px_rgba(31,25,27,0.05)]"
                  : "border-[#E9E2DD] hover:border-[#4A9692]/20"
              }`}
            >

              <button
                type="button"
                aria-expanded={isOpen}
                onClick={() =>
                  setOpen(
                    isOpen
                      ? null
                      : index
                  )
                }
                className="flex w-full items-center justify-between gap-4 px-4 py-4 text-left sm:px-5 sm:py-5 lg:px-6"
              >

                <span className="min-w-0 text-sm font-bold leading-6 text-[#3F3A3C] sm:text-base lg:text-lg">
                  {item.question}
                </span>

                <div
                  className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border transition-all duration-300 ${
                    isOpen
                      ? "rotate-180 border-[#4A9692]/20 bg-[#EDF7F6] text-[#347A77]"
                      : "border-[#E9E2DD] bg-[#FBFAF8] text-[#716A6C]"
                  }`}
                >
                  <ChevronDown size={18} />
                </div>

              </button>

              <div
                className={`grid transition-all duration-300 ease-out ${
                  isOpen
                    ? "grid-rows-[1fr] opacity-100"
                    : "grid-rows-[0fr] opacity-0"
                }`}
              >

                <div className="overflow-hidden">

                  <div className="border-t border-[#E9E2DD] px-4 pb-4 pt-4 text-sm leading-6 text-[#716A6C] sm:px-5 sm:pb-5 sm:text-base sm:leading-7 lg:px-6 lg:pb-6">
                    {item.answer}
                  </div>

                </div>

              </div>

            </div>
          );
        })}

      </div>

    </section>
  );
}