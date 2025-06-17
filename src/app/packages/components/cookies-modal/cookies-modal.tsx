'use client';
import clsx from 'clsx';
import { useEffect, useRef, useState } from 'react';
import { useCookies } from 'react-cookie';
import styles from './cookies-modal.module.scss';
import { useCookiesModal } from './use-cookies-modal';
import Link from 'next/link';
import Button from '../button/button';

const CookiesModal = () => {
  const [hiddenModal, setHiddenModal] = useState(true);
  const [cookies, setCookie] = useCookies(['marcoCivilAccepted']);
  const [marcoCivilAcceptedValue] = useState(cookies?.marcoCivilAccepted);
  const [widthScreen, setWidthScreen] = useState(0);
  const { setHeight } = useCookiesModal();
  const containerRef = useRef<HTMLDivElement>(null);
  const modalIsClosed = (!cookies?.marcoCivilAccepted && hiddenModal) || cookies?.marcoCivilAccepted;

  const handleAccept = () => {
    setCookie('marcoCivilAccepted', 'true');
    setHiddenModal(true);
  };

  const handleReject = () => {
    setHiddenModal(true);
  };

  useEffect(() => {
    let timeoutId: any;

    const updateHeight = () => {
      setHeight(containerRef?.current?.clientHeight || 0);
    };
    clearTimeout(timeoutId);
    timeoutId = setTimeout(updateHeight, 150);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [containerRef, widthScreen, setHeight]);

  useEffect(() => {
    setHiddenModal(false);

    const updateWidthScreen = () => {
      setWidthScreen(window.innerWidth);
    };
    window.addEventListener('resize', updateWidthScreen);
    return () => {
      window.removeEventListener('resize', updateWidthScreen);
    };
  }, []);

  useEffect(() => {
    if (modalIsClosed) {
      setHeight(0);
    }
  }, [modalIsClosed, setHeight]);

  if (marcoCivilAcceptedValue || hiddenModal) return null;

  return (
    <div className={styles.containerCookies} ref={containerRef}>
      <div className={clsx(styles.wrapper)}>
        <p className={styles.description}>
          {'Utilizamos dados da sua navegação para personalizar e melhorar a sua experiência no nosso site. Para saber mais, visite nossa '}
          <Link href="/privacy-policy" target="_blank">
            <span className={styles.inlineLink}>{'Política de Privacidade'}</span>
          </Link>
        </p>

        <div className={styles.containerButtons}>
          <Button 
            onClick={handleAccept} 
            className={clsx(styles.button, styles.buttonAccept)}
            type='primary'
          >
            {'Aceitar cookies'}
          </Button>
          <Button 
            onClick={handleReject}
            className={clsx(styles.button, styles.buttonReject)} type={'danger'}          >
            {'Rejeitar cookies'}
          </Button>
        </div>
      </div>
    </div>
  );
};

export { CookiesModal };
