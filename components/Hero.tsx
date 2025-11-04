"use client";

import Link from "next/link";

export const Hero = () => {
  return (
    <section
      id="overview"
      className="container-hero mx-auto grid max-w-6xl gap-10 px-4 pb-24 pt-16 md:grid-cols-2 md:items-center"
    >
      <div className="space-y-6">
        <span className="inline-flex items-center rounded-full bg-primary-50 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-primary-700">
          Feuille de route personnalisée · Étudiant togolais
        </span>
        <h1 className="font-heading text-4xl font-semibold text-slate-900 md:text-5xl">
          Poursuivre une formation professionnelle en énergies renouvelables en France
        </h1>
        <p className="text-lg text-slate-600">
          Plan d&apos;action complet pour valoriser votre licence en anglais, renforcer votre profil
          technique et sécuriser une bourse ou un financement adapté avant votre départ.
        </p>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Link
            href="#steps"
            className="rounded-full bg-primary-600 px-5 py-3 text-sm font-semibold text-white shadow-focus transition hover:bg-primary-500"
          >
            Explorer la feuille de route
          </Link>
          <Link
            href="#programs"
            className="rounded-full border border-primary-200 px-5 py-3 text-sm font-semibold text-primary-700 transition hover:border-primary-300 hover:bg-primary-50"
          >
            Formations recommandées
          </Link>
        </div>
        <div className="flex flex-wrap gap-6 text-sm text-slate-500">
          <div>
            <span className="block font-heading text-3xl font-semibold text-primary-600">12+</span>
            Ressources officielles vérifiées
          </div>
          <div>
            <span className="block font-heading text-3xl font-semibold text-primary-600">4</span>
            Paliers clés, du Togo à l&apos;installation
          </div>
          <div>
            <span className="block font-heading text-3xl font-semibold text-primary-600">3</span>
            Opportunités de financement prioritaire
          </div>
        </div>
      </div>
      <div className="relative overflow-hidden rounded-3xl bg-white shadow-lg">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-100 via-white to-white" />
        <div className="relative space-y-6 p-8">
          <h2 className="font-heading text-xl font-semibold text-primary-800">
            Profil analysé
          </h2>
          <ul className="space-y-4 text-sm text-slate-600">
            <li>
              <span className="font-semibold text-slate-700">Nationalité :</span> Togolaise, projet
              de mobilité vers la France.
            </li>
            <li>
              <span className="font-semibold text-slate-700">Diplôme actuel :</span> Licence en
              anglais (moyenne 16/20), orientation internationale.
            </li>
            <li>
              <span className="font-semibold text-slate-700">Objectif :</span> Formation
              professionnalisante en énergies renouvelables (hors cycle licence/master classique).
            </li>
            <li>
              <span className="font-semibold text-slate-700">Contraintes :</span> Besoin de
              financement ou de bourse, exigence de maîtrise du français.
            </li>
          </ul>
          <p className="rounded-xl bg-primary-50 p-4 text-sm text-primary-800">
            Ce guide combine procédures Campus France, dispositifs de bourses et programmes
            d&apos;alternance compatibles avec votre profil anglophone.
          </p>
        </div>
      </div>
    </section>
  );
};
