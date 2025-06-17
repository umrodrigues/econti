import React from 'react';
import { Brand } from './brand';
import { brandsMock } from './__mocks__/brands.mock';
import styles from './Brands.module.scss';

export const BrandsGroup = () => {
  return (
    <div className={styles.brandsGroupContainer}>
      <div className={styles.brandsGroup}>
        {brandsMock.map(brand => (
          <Brand key={brand.href} src={brand.src} alt={brand.alt} href={brand.href} />
        ))}
      </div>
    </div>
  );
};
