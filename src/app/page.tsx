import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { HeroSection } from "@/components/sections/hero";
import { ProblemSection } from "@/components/sections/problem";
import { HowItWorksSection } from "@/components/sections/how-it-works";
import { ModulesSection } from "@/components/sections/modules";
import { PricingSection } from "@/components/sections/pricing";
import { TrustSection } from "@/components/sections/trust";
import { FaqSection } from "@/components/sections/faq";
import { CtaFinalSection } from "@/components/sections/cta-final";
import { ContactSection } from "@/components/sections/contact";

export default function Home() {
  return (
    <>
      <Header />
      <main id="top">
        <HeroSection />
        <ProblemSection />
        <HowItWorksSection />
        <ModulesSection />
        <PricingSection />
        <TrustSection />
        <FaqSection />
        <CtaFinalSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
