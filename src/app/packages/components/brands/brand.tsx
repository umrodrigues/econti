import React from 'react';
import styles from './Brands.module.scss';
import Image from 'next/image';
import Link from 'next/link';

export interface ISlidesProps {
  src: string;
  alt: string;
  href: string;
}

export const Brand = ({ src, alt, href }: ISlidesProps) => {
  return (
    <div className={styles.slide}>
      <Link href={href}>
      <Image src={src} alt={alt} width={800} height={300} className={styles.image}/>
      </Link>
    </div>
  );
};

