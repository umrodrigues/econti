'use client';
import { useState } from 'react';
import Image from 'next/image';
import styles from './PartnersCarrousel.module.scss';
import { HiArrowLeft, HiArrowRight } from 'react-icons/hi';

export default function PartnersCarrousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const partners = [
    '/partners/TELECEVA GRENAL.png',
    '/partners/ACQUA.png',
    '/partners/MADEPOX.png',
    '/partners/PHARMACYONE.png',
  ];

  const nextPartner = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % partners.length);
  };

  const prevPartner = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + partners.length) % partners.length
    );
  };

  return (
    <div className={styles.partnerCarrousel}>
      <div className={styles.texto}>
        <p>Expertise para atender os melhores</p>
      </div>
      <div className={styles.carrouselContainer}>
        {/* <button className={`${styles.arrow} ${styles.arrowLeft}`} onClick={prevPartner}>
          <HiArrowLeft />
        </button> */}
        <div className={styles.partnerImages} style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {partners.map((partner, index) => (
            <div key={index} className={styles.partner}>
              <Image src={partner} alt={`Partner ${index + 1}`} width={200} height={200} />
            </div>
          ))}
        </div>
        {/* <button className={`${styles.arrow} ${styles.arrowRight}`} onClick={nextPartner}>
          <HiArrowRight />
        </button> */}
      </div>
    </div>
  );
}
