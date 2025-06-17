'use client';
import React from 'react';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css'; 
import { Slides } from './slides';
import styles from './Slides.module.scss';
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { carouselSlidesMock } from './__mocks__/slides-mock';
import clsx from 'clsx';

export const CarrouselSlides = () => {
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    initial: 0,
    slides: {
      perView: 1,
      spacing: 0,
    },
  });

  return (
    <div className={styles.carouselContainer}>
      <div ref={sliderRef} className={clsx("keen-slider", styles.keenSlider)}>
        {carouselSlidesMock.map((image, index) => (
          <div key={index} className={clsx("keen-slider__slide", styles.keenSliderSlide)}>
            <Slides src={image.src} alt={image.alt} />
          </div>
        ))}
      </div>
      <button className={styles.arrowLeft} onClick={() => instanceRef.current?.prev()}>
        <AiOutlineLeft />
      </button>
      <button className={styles.arrowRight} onClick={() => instanceRef.current?.next()}>
        <AiOutlineRight />
      </button>
    </div>
  );
};
