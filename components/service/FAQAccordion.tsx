"use client";

import { useState } from "react";
import type { FAQItem } from "@/data/services";

interface Props {
  faq: FAQItem[];
}

export default function FAQAccordion({ faq }: Props) {
  const [open, setOpen] = useState<number | null>(0);

  if (faq.length === 0) return null;

  return (
    <section className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
      <h2 className="mb-8 text-3xl font-bold text-white">
        Questions fréquentes
      </h2>

      <div className="space-y-4">
        {faq.map((item, index) => (
          <div
            key={item.question}
            className="rounded-2xl border border-white/10"
          >
            <button
              onClick={() =>
                setOpen(open === index ? null : index)
              }
              className="flex w-full items-center justify-between p-6 text-left"
            >
              <span className="font-semibold text-white">
                {item.question}
              </span>

              <span className="text-green-400 text-2xl">
                {open === index ? "−" : "+"}
              </span>
            </button>

            {open === index && (
              <div className="px-6 pb-6 text-gray-300">
                {item.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}