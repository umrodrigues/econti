'use client';

import Image from 'next/image';

const partnersImages = Array.from({ length: 6 }, (_, index) => ({
  id: index + 1,
  src: `/partners/partner${index + 1}.jpg`,
}));

export default function Partners() {
  return (
    <section className="py-16 bg-gray-100 border-y border-gray-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Nossos Parceiros</h2>
          <p className="text-gray-600">Empresas que confiam em nosso trabalho</p>
        </div>

        <div className="relative overflow-hidden">
          <div className="flex animate-scroll">
            {/* Primeira linha de logos */}
            <div className="flex space-x-12 items-center">
              {partnersImages.map((partner) => (
                <div key={partner.id} className="flex-shrink-0">
                  <div className="relative w-64 h-36">
                    <Image
                      src={partner.src}
                      alt=""
                      fill
                      className="object-contain"
                      sizes="256px"
                    />
                  </div>
                </div>
              ))}
            </div>
            
            {/* Segunda linha (duplicada para efeito infinito) */}
            <div className="flex space-x-12 items-center ml-12">
              {partnersImages.map((partner) => (
                <div key={`duplicate-${partner.id}`} className="flex-shrink-0">
                  <div className="relative w-64 h-36">
                    <Image
                      src={partner.src}
                      alt=""
                      fill
                      className="object-contain"
                      sizes="256px"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
        
      `}</style>
    </section>
  );
}
