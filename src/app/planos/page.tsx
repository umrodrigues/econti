import PricingPlans from "@/components/pricing/pricing-plans";
import PricingFeatures from "@/components/pricing/pricing-features";
import PricingFAQ from "@/components/pricing/pricing-faq";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Planos - &Conti Marketing Digital',
  description: 'Conheça nossos planos personalizados de marketing digital. Escolha o plano ideal para impulsionar sua presença online.',
};

export default function PlanosPage() {
  return (
    <div className="planos-page">
      <section className="hero-section">
        <div className="container">
          <div className="hero-content">
            <h1>Nossos Planos</h1>
            <p>Escolha o plano ideal para impulsionar sua presença digital</p>
          </div>
        </div>
      </section>
      
      <PricingPlans />
      <PricingFeatures />
      <PricingFAQ />
    </div>
  );
}
