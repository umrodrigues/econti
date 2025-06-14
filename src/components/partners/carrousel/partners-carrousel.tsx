'use client';
import { useEffect, useRef } from 'react';
import Image from 'next/image';
import styles from './PartnersCarrousel.module.scss';

export default function PartnersCarrousel() {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let scrollAmount = 0;
    const speed = 0.3;

    const step = () => {
      if (!scrollContainer) return;

      scrollAmount += speed;

      if (scrollAmount >= scrollContainer.scrollWidth / 2) {
        scrollAmount = 0;
      }

      scrollContainer.scrollLeft = scrollAmount;

      requestAnimationFrame(step);
    };

    requestAnimationFrame(step);

    return () => {};
  }, []);

  const partners = [
    '/partners/TELECEVA GRENAL.png',
    '/partners/ACQUA.png',
    '/partners/MADEPOX.png',
    '/partners/PHARMACYONE.png',
    '/partners/TELECEVA GRENAL.png',
    '/partners/ACQUA.png',
    '/partners/MADEPOX.png',
    '/partners/PHARMACYONE.png',
    '/partners/TELECEVA GRENAL.png',
    '/partners/ACQUA.png',
    '/partners/MADEPOX.png',
    '/partners/PHARMACYONE.png',
  ];

  return (
    <div className={styles.partnerCarrousel}>
      <div className={styles.carrouselContainer} ref={scrollRef}>
        <div className={styles.partnerImages}>
          {partners.map((partner, index) => (
            <div key={index} className={styles.partner}>
              <Image
                src={partner}
                alt={`Partner ${index + 1}`}
                width={200}
                height={200}
                style={{ objectFit: 'contain' }}
                priority={index === 0}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
