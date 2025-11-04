import { Checklist } from "@/components/Checklist";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ProgramGrid } from "@/components/ProgramGrid";
import { ResourceLinks } from "@/components/ResourceLinks";
import { ScholarshipSection } from "@/components/ScholarshipSection";
import { Timeline } from "@/components/Timeline";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Timeline />
        <ProgramGrid />
        <ScholarshipSection />
        <Checklist />
        <FAQ />
        <ResourceLinks />
      </main>
      <Footer />
    </div>
  );
}
