import Contact from "@/components/contact/contact";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contato - &Conti Marketing Digital',
  description: 'Entre em contato com a &Conti Marketing Digital. Estamos prontos para transformar sua presença digital.',
};

export default function ContatoPage() {
  return (
    <div className="contato-page">
      <section className="hero-section">
        <div className="container">
          <div className="hero-content">
            <h1>Entre em Contato</h1>
            <p>Vamos conversar sobre como podemos impulsionar seu negócio</p>
          </div>
        </div>
      </section>
      
      <Contact />
    </div>
  );
}
