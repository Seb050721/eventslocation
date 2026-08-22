"use client";

import { useState } from "react";
import {
  ChevronDown,
  HelpCircle,
} from "lucide-react";

import type { FAQItem } from "@/components/service/services";

interface Props {
  faq: FAQItem[];
}

export default function FAQAccordion({
  faq,
}: Props) {
  const [open, setOpen] = useState<number | null>(0);

  if (faq.length === 0) {
    return null;
  }

  return (
    <section className="rounded-[24px] border border-white/10 bg-white/[0.05] p-5 backdrop-blur-xl sm:rounded-3xl sm:p-6 lg:p-8">

      {/* TITRE */}

      <div className="mb-6 sm:mb-8">

        <span className="inline-flex items-center gap-2 rounded-full border border-green-500/30 bg-green-500/10 px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-green-400 sm:px-4 sm:py-2 sm:text-xs sm:tracking-[0.3em]">
          <HelpCircle size={14} />

          FAQ
        </span>

        <h2 className="mt-4 text-2xl font-black leading-tight text-white sm:text-3xl">
          Questions fréquentes
        </h2>

        <p className="mt-2 text-sm leading-6 text-gray-400 sm:text-base">
          Retrouvez ici les réponses aux questions les plus courantes.
        </p>

      </div>

      {/* QUESTIONS */}

      <div className="space-y-3 sm:space-y-4">

        {faq.map((item, index) => {
          const isOpen = open === index;

          return (
            <div
              key={item.question}
              className={`overflow-hidden rounded-2xl border transition duration-300 ${
                isOpen
                  ? "border-green-500/30 bg-green-500/[0.06]"
                  : "border-white/10 bg-white/[0.03]"
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

                <span className="min-w-0 text-sm font-bold leading-6 text-white sm:text-base lg:text-lg">
                  {item.question}
                </span>

                <div
                  className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border transition duration-300 ${
                    isOpen
                      ? "rotate-180 border-green-500/30 bg-green-500/15 text-green-400"
                      : "border-white/10 bg-white/5 text-gray-400"
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

                  <div className="border-t border-white/10 px-4 pb-4 pt-4 text-sm leading-6 text-gray-300 sm:px-5 sm:pb-5 sm:text-base sm:leading-7 lg:px-6 lg:pb-6">
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