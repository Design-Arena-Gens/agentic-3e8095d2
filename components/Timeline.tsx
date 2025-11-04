"use client";

import { roadmap } from "@/data/roadmap";

export const Timeline = () => {
  return (
    <section id="steps" className="mx-auto max-w-6xl space-y-12 px-4 py-16">
      <div className="space-y-3">
        <h2 className="font-heading text-3xl font-semibold text-slate-900">
          Feuille de route en quatre phases
        </h2>
        <p className="max-w-3xl text-base text-slate-600">
          Chaque phase détaille les actions prioritaires, la durée estimée et des ressources
          officielles. Structurez votre calendrier en partant d&apos;une rentrée en septembre N,
          avec un démarrage des démarches d&apos;octobre N-1 à juin N.
        </p>
      </div>
      <div className="space-y-10">
        {roadmap.map((track, trackIndex) => (
          <div key={track.id} className="space-y-6 rounded-3xl border border-slate-200 bg-white p-8 shadow">
            <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-primary-600">
                  Étape {trackIndex + 1}
                </span>
                <h3 className="font-heading text-2xl font-semibold text-slate-900">{track.name}</h3>
              </div>
              <p className="max-w-xl text-sm text-slate-600">{track.summary}</p>
            </div>
            <ol className="space-y-6 border-l-2 border-dashed border-primary-100 pl-6">
              {track.items.map((item, itemIndex) => (
                <li
                  key={`${track.id}-${itemIndex}`}
                  className="relative rounded-2xl border border-slate-100 bg-slate-50/60 p-6 shadow-sm transition hover:-translate-y-1 hover:border-primary-200 hover:bg-white"
                >
                  <span className="absolute -left-[37px] top-6 flex h-8 w-8 items-center justify-center rounded-full border-4 border-white bg-primary-500 font-heading text-sm font-semibold text-white shadow-lg">
                    {itemIndex + 1}
                  </span>
                  <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                    <h4 className="font-heading text-xl font-semibold text-slate-900">
                      {item.title}
                    </h4>
                    <span className="inline-flex items-center rounded-full bg-primary-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary-700">
                      {item.timeframe}
                    </span>
                  </div>
                  <p className="text-sm text-slate-600">{item.description}</p>
                  <div className="flex flex-wrap gap-3 pt-2">
                    {item.resources.map((resource) => (
                      <a
                        key={resource.url}
                        href={resource.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-full border border-primary-100 px-3 py-1 text-xs font-medium text-primary-700 transition hover:border-primary-200 hover:bg-primary-50"
                      >
                        <span>🔗</span>
                        {resource.label}
                      </a>
                    ))}
                  </div>
                </li>
              ))}
            </ol>
          </div>
        ))}
      </div>
    </section>
  );
};
