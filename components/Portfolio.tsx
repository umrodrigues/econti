'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, EffectCoverflow } from 'swiper/modules';
import Image from 'next/image';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

const portfolioImages = Array.from({ length: 37 }, (_, index) => ({
  id: index + 1,
  src: `/portifolio/port${index + 1}.jpg`,
}));


export default function Portfolio() {

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
            className="portfolio-swiper"
            style={{
              paddingTop: '50px',
              paddingBottom: '50px',
            }}
          >
            {portfolioImages.map((image) => (
              <SwiperSlide key={image.id} className="!w-80 !h-96">
                <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl group">
                  <Image
                    src={image.src}
                    alt=""
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  

                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="swiper-button-prev !text-white !bg-black/30 !rounded-full !w-12 !h-12 hover:!bg-black/50 transition-colors"></div>
          <div className="swiper-button-next !text-white !bg-black/30 !rounded-full !w-12 !h-12 hover:!bg-black/50 transition-colors"></div>
          
          <div className="swiper-pagination !bottom-0 !mt-8"></div>
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
