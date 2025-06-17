'use client';
import React from 'react';
import styles from './Header.module.scss';
import { useBreakpoint } from '../../ui/viewport/viewport';
import { HeaderMobile } from './fragments/mobile/header-mobile';
import { HeaderDesktop } from './fragments/desktop/header-desktop';

export const Header = () => {
  
  const { isMobile, isTablet } = useBreakpoint();

  return (
    <header className={styles.header}>
      {isMobile || isTablet ? (
        <HeaderMobile/>
      ) : (
        <div className={styles.headerWrapper}>
          <HeaderDesktop />
        </div>
      )}
    </header>
  );
};
