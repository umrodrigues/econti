'use client'
import React, { PropsWithChildren } from 'react';
import  styles from './ServiceModal.module.scss';
import { AiOutlineClose } from "react-icons/ai";

export interface ServiceModalProps extends PropsWithChildren{
  title: string;
  isOpen: boolean;
  isClose: () => void;
}

const ServiceModal = ({ title, isOpen, isClose, children } : ServiceModalProps) => {
  if (!isOpen) {
    return null;
  }

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const target = e.target as HTMLDivElement;
    if (target.className === styles.modalOverlay) {
      isClose();
    }
  };
  
  return (
    <div className={styles.modalOverlay} onClick={handleOverlayClick}>
      <div className={styles.modalWrapper}>
        <AiOutlineClose onClick={isClose} className={styles.modalCloseButton}/>
        <h1>{title}</h1>
          {children}
      </div>
    </div>
  );
};

export default ServiceModal;
