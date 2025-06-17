'use client';
import React, { useEffect, useState } from 'react';
import styles from './ExitPopUp.module.scss';
import clsx from 'clsx';
import Button from '../button/button';

const ExitPopUp: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const thirtyMinutes = 30 * 60 * 1000;
    const now = new Date().getTime();
    const lastShownTime = localStorage.getItem('lastShownExitPopupTime');

    const shouldShowPopup = !lastShownTime || now - parseInt(lastShownTime, 10) > thirtyMinutes;

    if (shouldShowPopup) {
      const handleMouseLeave = (event: MouseEvent) => {
        if (event.clientY <= 0) {
          setIsVisible(true);
          localStorage.setItem('lastShownExitPopupTime', now.toString());
        }
      };

      document.addEventListener('mouseleave', handleMouseLeave);

      return () => {
        document.removeEventListener('mouseleave', handleMouseLeave);
      };
    }

    const timeoutId = setTimeout(() => {
      localStorage.removeItem('lastShownExitPopupTime');
    }, thirtyMinutes);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    window.location.reload();
  };

  return isVisible ? (
    <div className={styles.overlay}>
      <div className={styles.popup}>
        <h2 className={styles.title}>Espera ai!</h2>
        <p className={styles.message}>Temos uma oferta especial para você</p>
        <Button className={styles.closeButton} onClick={handleClose} type={'primary'}>Fechar</Button>
      </div>
    </div>
  ) : null;
};

export default ExitPopUp;
