"use client";

import { useState } from "react";

const questions = [
  {
    question: "Combien de temps faut-il pour installer le photobooth ?",
    answer:
      "L'installation prend généralement entre 15 et 20 minutes et est entièrement réalisée par nos soins.",
  },
  {
    question: "Les photos sont-elles illimitées ?",
    answer:
      "Oui, vos invités peuvent prendre autant de photos qu'ils le souhaitent pendant toute la durée de la prestation.",
  },
  {
    question: "Les photos sont-elles récupérables après l'événement ?",
    answer:
      "Oui, une galerie privée est mise à disposition pendant 3 mois afin que tous les invités puissent télécharger leurs photos.",
  },
  {
    question: "Intervenez-vous en dehors de la Nièvre ?",
    answer:
      "Oui. Nous intervenons dans la Nièvre, l'Yonne, le Cher et pouvons nous déplacer ailleurs sur devis.",
  },
];

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="bg-gray-50 py-24">
      <div className="mx-auto max-w-4xl px-6">
        <h2 className="mb-12 text-center text-4xl font-bold">
          Questions fréquentes
        </h2>

        <div className="space-y-4">
          {questions.map((item, index) => (
            <div
              key={index}
              className="rounded-2xl border border-gray-200 bg-white shadow-sm"
            >
              <button
                onClick={() =>
                  setOpen(open === index ? null : index)
                }
                className="flex w-full items-center justify-between p-6 text-left"
              >
                <span className="font-semibold text-lg">
                  {item.question}
                </span>

                <span className="text-2xl">
                  {open === index ? "−" : "+"}
                </span>
              </button>

              {open === index && (
                <div className="px-6 pb-6 text-gray-600">
                  {item.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}