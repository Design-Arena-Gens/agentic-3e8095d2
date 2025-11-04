"use client";

import { scholarships } from "@/data/scholarships";

export const ScholarshipSection = () => {
  return (
    <section id="funding" className="mx-auto max-w-6xl space-y-10 px-4 py-16">
      <div className="space-y-3">
        <h2 className="font-heading text-3xl font-semibold text-slate-900">
          Financements & bourses prioritaires
        </h2>
        <p className="max-w-3xl text-base text-slate-600">
          Combinez les programmes nationaux et régionaux. Préparez un dossier solide avec projet de
          retour au Togo pour augmenter vos chances. Pensez à déposer plusieurs candidatures en
  parallèle.
        </p>
      </div>
      <div className="space-y-6">
        {scholarships.map((scholarship) => (
          <article
            key={scholarship.url}
            className="rounded-3xl border border-primary-100 bg-primary-50/70 p-8 shadow transition hover:-translate-y-1 hover:border-primary-200 hover:bg-white"
          >
            <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
              <div>
                <h3 className="font-heading text-xl font-semibold text-primary-800">
                  {scholarship.name}
                </h3>
                <p className="text-sm font-medium text-primary-600">{scholarship.sponsor}</p>
              </div>
              <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold uppercase text-primary-700 shadow">
                {scholarship.timeline}
              </span>
            </div>
            <div className="mt-6 grid gap-6 md:grid-cols-3">
              <div>
                <h4 className="text-xs font-semibold uppercase text-slate-500">Avantages</h4>
                <ul className="mt-2 space-y-2 text-sm text-slate-600">
                  {scholarship.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-start gap-2">
                      <span className="mt-1 text-primary-500">✔</span>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-xs font-semibold uppercase text-slate-500">Éligibilité</h4>
                <ul className="mt-2 space-y-2 text-sm text-slate-600">
                  {scholarship.eligibility.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="mt-1 text-primary-500">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-col justify-between rounded-2xl border border-primary-100 bg-white p-4 text-sm text-slate-600 shadow">
                <p>
                  Préparez un dossier complet : lettre de motivation axée transition énergétique,
                  preuves d&apos;engagement local (ONG, projets solaires) et plan de diffusion de
                  compétences au retour.
                </p>
                <a
                  href={scholarship.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center justify-center rounded-full bg-primary-600 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-white shadow-focus transition hover:bg-primary-500"
                >
                  Voir les modalités
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};
