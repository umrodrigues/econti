'use client'
import React, { PropsWithChildren } from 'react';
import styles from './MenuModal.module.scss';
import { AiOutlineClose } from "react-icons/ai";

export interface ServiceModalProps extends PropsWithChildren{
isOpen: boolean;
isClose: () => void;
}

export const MenuModal = ({ isOpen, isClose, children } : ServiceModalProps) => {
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
        {children}
    </div>
    </div>
);
};

