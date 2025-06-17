import React from 'react';
import styles from './Slides.module.scss';
import Image from 'next/image';

interface ISlidesProps {
  src: string;
  alt: string;
}

export const Slides = ({ src, alt }: ISlidesProps) => {
  return (
    <div className={styles.slide}>
      <Image src={src} alt={alt} width={800} height={300} />
    </div>
  );
};

