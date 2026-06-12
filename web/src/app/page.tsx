import { PageShell } from "@/components/site/PageShell";
import { Hero } from "@/components/landing/Hero";
import { Philosophy } from "@/components/landing/Philosophy";
import { DiagnosesShowcase } from "@/components/landing/DiagnosesShowcase";
import { HowItWorks } from "@/components/landing/HowItWorks";
import { Testimonials } from "@/components/landing/Testimonials";
import { CTA } from "@/components/landing/CTA";

export default function HomePage() {
  return (
    <PageShell>
      <Hero />
      <Philosophy />
      <DiagnosesShowcase />
      <HowItWorks />
      <Testimonials />
      <CTA />
    </PageShell>
  );
}
