import "./globals.css";
import { Poppins, Inter } from "next/font/google";
import type { ReactNode } from "react";
import type { Metadata } from "next";

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-heading"
});

const inter = Inter({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-body"
});

export const metadata: Metadata = {
  title: "Etudier en France | Énergies Renouvelables",
  description:
    "Guide complet pour les étudiants togolais souhaitant poursuivre une formation professionnelle en énergies renouvelables en France."
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="fr" className={`${poppins.variable} ${inter.variable}`}>
      <body>
        {children}
      </body>
    </html>
  );
}
