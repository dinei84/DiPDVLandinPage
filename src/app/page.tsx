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
    <main>
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
  );
}
