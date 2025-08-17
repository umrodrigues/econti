import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
import PricingPlans from "@/components/pricing/pricing-plans";
import PricingFeatures from "@/components/pricing/pricing-features";
import PricingFAQ from "@/components/pricing/pricing-faq";
import { GoToWhatsapp } from '../packages/components/go-to-whatsapp/go-to-whatsapp';

export default function PlanosPage() {
  return (
    <>
      <Header />
      <main>
        <PricingPlans />
        <PricingFeatures />
        <PricingFAQ />
      </main>
      <Footer />
      <GoToWhatsapp />
    </>
  );
}
