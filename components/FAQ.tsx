"use client";

import { faq } from "@/data/faq";
import { useState } from "react";

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="mx-auto max-w-5xl space-y-10 px-4 py-16">
      <div className="space-y-3 text-center">
        <h2 className="font-heading text-3xl font-semibold text-slate-900">Questions fréquentes</h2>
        <p className="text-base text-slate-600">
          Synthèse des points souvent soulevés auprès de Campus France, des ambassades et des
          étudiants togolais déjà en formation.
        </p>
      </div>
      <div className="space-y-4">
        {faq.map((item, index) => {
          const isOpen = openIndex === index;
          return (
            <div key={item.question} className="rounded-2xl border border-slate-200 bg-white p-6 shadow">
              <button
                className="flex w-full items-center justify-between text-left"
                onClick={() => setOpenIndex(isOpen ? null : index)}
              >
                <span className="font-heading text-lg font-semibold text-slate-900">
                  {item.question}
                </span>
                <span className="rounded-full bg-primary-100 px-3 py-1 text-xs font-semibold text-primary-700">
                  {isOpen ? "Fermer" : "Ouvrir"}
                </span>
              </button>
              {isOpen && <p className="mt-4 text-sm text-slate-600">{item.answer}</p>}
            </div>
          );
        })}
      </div>
    </section>
  );
};
