'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, EffectCoverflow } from 'swiper/modules';
import Image from 'next/image';
import { useState } from 'react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

const portfolioImages = [
  { id: 1, src: '/portifolio/port1.jpg', alt: 'Projeto 1' },
  { id: 2, src: '/portifolio/port2.jpg', alt: 'Projeto 2' },
  { id: 3, src: '/portifolio/port3.jpg', alt: 'Projeto 3' },
  { id: 4, src: '/portifolio/port4.jpg', alt: 'Projeto 4' },
  { id: 5, src: '/portifolio/port5.jpg', alt: 'Projeto 5' },
  { id: 6, src: '/portifolio/port6.jpg', alt: 'Projeto 6' },
  { id: 7, src: '/portifolio/port7.jpg', alt: 'Projeto 7' },
  { id: 8, src: '/portifolio/port8.jpg', alt: 'Projeto 8' },
];

export default function Portfolio() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="py-16 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Nosso Portfólio</h2>
          <p className="text-gray-300 text-lg">Conheça alguns dos nossos trabalhos</p>
        </div>

        <div className="relative">
          <Swiper
            modules={[Navigation, Pagination, EffectCoverflow]}
            effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            slidesPerView="auto"
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            }}
            pagination={{
              clickable: true,
              el: '.swiper-pagination',
            }}
            onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
            className="portfolio-swiper"
            style={{
              paddingTop: '50px',
              paddingBottom: '50px',
            }}
          >
            {portfolioImages.map((image, index) => (
              <SwiperSlide key={image.id} className="!w-80 !h-96">
                <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl group">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  
                  {/* Overlay com informações */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-white font-bold text-lg mb-2">{image.alt}</h3>
                      <p className="text-gray-200 text-sm">Projeto #{image.id}</p>
                    </div>
                  </div>

                  {/* Indicador de posição */}
                  <div className="absolute top-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {index + 1} / {portfolioImages.length}
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navegação customizada */}
          <div className="swiper-button-prev !text-white !bg-black/30 !rounded-full !w-12 !h-12 hover:!bg-black/50 transition-colors"></div>
          <div className="swiper-button-next !text-white !bg-black/30 !rounded-full !w-12 !h-12 hover:!bg-black/50 transition-colors"></div>
          
          {/* Paginação customizada */}
          <div className="swiper-pagination !bottom-0 !mt-8"></div>
        </div>

        {/* Informações do slide ativo */}
        <div className="text-center mt-8">
          <p className="text-gray-300">
            Projeto {activeIndex + 1} de {portfolioImages.length}
          </p>
        </div>
      </div>

      <style jsx global>{`
        .portfolio-swiper .swiper-slide {
          width: 320px;
          height: 400px;
        }
        
        .portfolio-swiper .swiper-slide-active {
          transform: scale(1.05);
        }
        
        .portfolio-swiper .swiper-slide-prev,
        .portfolio-swiper .swiper-slide-next {
          opacity: 0.7;
          transform: scale(0.9);
        }
        
        .swiper-pagination-bullet {
          background: rgba(255, 255, 255, 0.5);
          opacity: 1;
        }
        
        .swiper-pagination-bullet-active {
          background: white;
        }
      `}</style>
    </section>
  );
}
