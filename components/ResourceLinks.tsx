"use client";

const resources = [
  {
    title: "Campus France Togo",
    description: "Portail officiel pour déposer les candidatures et suivre les procédures.",
    url: "https://www.togo.campusfrance.org/",
    category: "Procedure"
  },
  {
    title: "France-Visas",
    description: "Informations actualisées concernant les visas études et documents requis.",
    url: "https://france-visas.gouv.fr/",
    category: "Visa"
  },
  {
    title: "Mon Master / Parcoursup",
    description: "Plateformes de candidature pour BTS/DU selon la formation ciblée.",
    url: "https://www.parcoursup.gouv.fr/",
    category: "Candidature"
  },
  {
    title: "Welcome to France",
    description: "Guide d'installation et d'intégration des étudiants internationaux.",
    url: "https://www.campusfrance.org/fr/bienvenue-en-france",
    category: "Installation"
  },
  {
    title: "ADEME – Métiers de la transition énergétique",
    description: "Panorama des métiers, compétences et formations liées aux énergies vertes.",
    url: "https://www.ademe.fr/formation-metiers-transition-energetique",
    category: "Carrière"
  }
];

export const ResourceLinks = () => {
  return (
    <section id="contact" className="mx-auto max-w-5xl space-y-10 px-4 py-16">
      <div className="space-y-3 text-center">
        <h2 className="font-heading text-3xl font-semibold text-slate-900">
          Liens utiles à sauvegarder
        </h2>
        <p className="text-base text-slate-600">
          Gardez ces portails officiels à portée de main pour suivre l&apos;évolution des
          calendriers, déposer vos dossiers et vérifier les documents exigés.
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        {resources.map((resource) => (
          <a
            key={resource.url}
            href={resource.url}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-3xl border border-slate-200 bg-white p-6 shadow transition hover:-translate-y-1 hover:border-primary-200 hover:bg-primary-50/70"
          >
            <span className="text-xs font-semibold uppercase tracking-wide text-primary-600">
              {resource.category}
            </span>
            <h3 className="mt-2 font-heading text-lg font-semibold text-slate-900">
              {resource.title}
            </h3>
            <p className="mt-2 text-sm text-slate-600">{resource.description}</p>
            <span className="mt-4 inline-block text-xs font-semibold uppercase text-primary-700">
              Ouvrir le site ↗
            </span>
          </a>
        ))}
      </div>
    </section>
  );
};
