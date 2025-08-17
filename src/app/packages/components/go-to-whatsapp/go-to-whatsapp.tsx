'use client';
import React from 'react';
import Image from 'next/image';
import styles from './GoToWhatsapp.module.scss';

export const GoToWhatsapp = () => {
  const handleClick = () => {
    window.open('https://api.whatsapp.com/send?phone=5511999999999&text=Olá! Gostaria de saber mais sobre os serviços da &Conti Marketing Digital.', '_blank');
  };

  return (
    <div className={styles.container}>
      <button
        onClick={handleClick}
        className={styles.button}
        aria-label="Falar com a &Conti no WhatsApp"
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
