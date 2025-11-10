import { CTASection } from "./components/cta-section";
import { HeroSection } from "./components/hero-section";
import { ImpactSection } from "./components/impact";
import { PartnerLogos } from "./components/partnership";
import { PartnershipSection } from "./components/partnership-section";
import { ProblemSolution } from "./components/problem-solution";
import { ProductEcosystem } from "./components/product-ecosystem";
import { TechnologySection } from "./components/technology";

export default function Home() {
    return (
        <main className="min-h-screen">
            <HeroSection />
            <PartnerLogos />
            <ProblemSolution />
            <ProductEcosystem />
            <ImpactSection />
            <PartnershipSection />
            <TechnologySection />
            <CTASection />
        </main>
    )
}