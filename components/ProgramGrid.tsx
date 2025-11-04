"use client";

import { programs } from "@/data/programs";

export const ProgramGrid = () => {
  return (
    <section id="programs" className="mx-auto max-w-6xl space-y-10 px-4 py-16">
      <div className="space-y-3">
        <h2 className="font-heading text-3xl font-semibold text-slate-900">
          Formations professionnalisantes ciblées
        </h2>
        <p className="max-w-3xl text-base text-slate-600">
          Sélection d&apos;établissements français proposant des formations courtes en énergies
          renouvelables adaptées à un profil bac+3 et compatibles avec l&apos;alternance ou des
          financements publics.
        </p>
      </div>
      <div className="grid gap-8 md:grid-cols-2">
        {programs.map((program) => (
          <article
            key={program.link}
            className="flex h-full flex-col justify-between rounded-3xl border border-slate-200 bg-white p-8 shadow transition hover:-translate-y-1 hover:border-primary-200"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="font-heading text-xl font-semibold text-slate-900">{program.name}</h3>
                <span className="text-xs font-semibold uppercase text-primary-600">
                  {program.credential}
                </span>
              </div>
              <p className="text-sm font-medium text-primary-700">
                {program.institution} · {program.location}
              </p>
              <p className="text-sm text-slate-600">{program.duration}</p>
              <ul className="space-y-2 text-sm text-slate-600">
                {program.highlights.map((highlight) => (
                  <li key={highlight} className="flex items-start gap-2">
                    <span className="mt-1 text-primary-500">◆</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-6 space-y-3">
              <div>
                <span className="text-xs font-semibold uppercase text-slate-500">
                  Conditions d&apos;admission
                </span>
                <ul className="mt-2 space-y-2 text-sm text-slate-600">
                  {program.admission.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="mt-1 text-primary-500">→</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <a
                href={program.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-primary-600 px-4 py-2 text-sm font-semibold text-white shadow-focus transition hover:bg-primary-500"
              >
                Consulter la fiche officielle
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};
