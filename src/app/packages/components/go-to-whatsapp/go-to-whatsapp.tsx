'use client';
import React from 'react';
import Image from 'next/image';
import styles from './GoToWhatsapp.module.scss';

export const GoToWhatsapp = () => {
  const handleClick = () => {
    window.open('https://api.whatsapp.com/send?phone=5551997791996', '_blank');
  };

  return (
    <div className={styles.container}>
      <button
        onClick={handleClick}
        className={styles.button}
        aria-label="Falar com Bento no WhatsApp"
      >
        <Image
          src="/home/bento.png"
          alt="Foto do Bento"
          fill
          className={styles.avatar}
        />
      </button>
      <div className={styles.message} onClick={handleClick}>
        Clique aqui para conversar conosco via WhatsApp!
      </div>
    </div>
  );
};
