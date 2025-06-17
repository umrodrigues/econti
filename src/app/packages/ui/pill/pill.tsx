import styles from "./Pill.module.scss";

type PillProps = {
  label: string;
  active: boolean;
  onClick?: () => void;
};

export const Pill: React.FC<PillProps> = ({ label, active, onClick }) => {
  return (
    <button
      className={`${styles.pill} ${active ? styles.active : styles.inactive}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};
