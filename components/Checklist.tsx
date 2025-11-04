"use client";

import { checklist } from "@/data/checklist";

export const Checklist = () => {
  return (
    <section id="checklist" className="mx-auto max-w-6xl space-y-10 px-4 py-16">
      <div className="space-y-3">
        <h2 className="font-heading text-3xl font-semibold text-slate-900">
          Checklist visa & installation
        </h2>
        <p className="max-w-3xl text-base text-slate-600">
          Utilisez cette checklist pour suivre vos démarches. Imprimez-la et cochez chaque item
          avant de réserver votre billet d&apos;avion.
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {checklist.map((block) => (
          <div key={block.phase} className="rounded-3xl border border-slate-200 bg-white p-6 shadow">
            <h3 className="font-heading text-lg font-semibold text-primary-700">{block.phase}</h3>
            <ul className="mt-4 space-y-3 text-sm text-slate-600">
              {block.items.map((item) => (
                <li key={item.label} className="flex items-start gap-3">
                  <input type="checkbox" className="mt-1 h-4 w-4 rounded border-primary-300" />
                  <div>
                    <p className="font-semibold text-slate-800">{item.label}</p>
                    <p className="text-xs text-slate-500">{item.detail}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};
