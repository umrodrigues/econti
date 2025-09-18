import Header from '../../../components/Header';
import LeadershipSection from '../../../components/LeadershipSection';
import Partners from '../../../components/Partners';
import Footer from '../../../components/Footer';
import Image from 'next/image';

export default function Sobre() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Quem Somos</h1>
              <p className="text-xl text-gray-600">Conheça nossa história e missão</p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Nossa História</h2>
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  A &Conti nasceu da paixão por transformar negócios através das redes sociais. 
                  Fundada por Eduarda Conti e Fernando Barbosa, nossa empresa combina criatividade, 
                  estratégia e tecnologia para alavancar marcas no digital.
                </p>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Com anos de experiência no mercado, desenvolvemos estratégias personalizadas 
                  que conectam marcas ao seu público-alvo, gerando resultados reais e mensuráveis.
                </p>
              </div>
              
              <div className="relative">
                <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                  <Image 
                    src="/couple.jpeg" 
                    alt="Eduarda Conti e Fernando Barbosa" 
                    width={600}
                    height={600}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <LeadershipSection />
      </main>
      <Partners />
      <Footer />
    </>
  );
}
