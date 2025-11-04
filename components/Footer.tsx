"use client";

export const Footer = () => {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-8 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
        <p>
          © {new Date().getFullYear()} Cap France Renouvelables · Guide conçu pour les étudiants
          togolais.
        </p>
        <p>
          Sources vérifiées : Campus France, Ambassade de France au Togo, ADEME, Universités
          françaises (mise à jour {new Date().toLocaleDateString("fr-FR")}).
        </p>
      </div>
    </footer>
  );
};
