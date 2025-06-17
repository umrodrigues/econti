import React, { ReactNode } from "react";
import { IoClose } from "react-icons/io5";
import styles from "./Modal.module.scss";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  contentHeader?: ReactNode; 
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children, contentHeader }) => {
  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <div className={styles.modalHeader}>
          {contentHeader && <div className={styles.headerContent}>{contentHeader}</div>}
          <button className={styles.closeButton} onClick={onClose}>
            <IoClose />
          </button>
        </div>
        <div className={styles.modalBody}>{children}</div>
      </div>
    </div>
  );
};

export default Modal;
