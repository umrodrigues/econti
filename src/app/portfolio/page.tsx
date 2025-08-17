import Portfolio from "@/components/portfolio/portfolio";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Portfólio - &Conti Marketing Digital',
  description: 'Conheça nossos casos de sucesso e resultados comprovados com mais de 70 empresas parceiras atendidas pela &Conti Marketing Digital.',
};

export default function PortfolioPage() {
  return (
    <div className="portfolio-page">
      <section className="hero-section">
        <div className="container">
          <div className="hero-content">
            <h1>Nosso Portfólio</h1>
            <p>Casos de sucesso que transformaram negócios e geraram resultados reais</p>
          </div>
        </div>
      </section>
      
      <Portfolio />
    </div>
  );
}
