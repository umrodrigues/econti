import styles from "./ConfirmModal.module.scss";

interface ConfirmModalProps {
  isOpen: boolean;
  onConfirm: () => void;
  onClose: () => void;
  message?: string;
}

const ConfirmModal: React.FC<ConfirmModalProps> = ({ isOpen, onConfirm, onClose, message }) => {
  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <p>{message || "Tem certeza que deseja continuar?"}</p>
        <div className={styles.buttonGroup}>
          <button className={styles.cancelButton} onClick={onClose}>Cancelar</button>
          <button className={styles.confirmButton} onClick={onConfirm}>Confirmar</button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmModal;