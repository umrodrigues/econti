import styles from "./Popover.module.scss";

interface PopoverProps {
  text: string;
  layout?: "default" | "outlined" | "filled";
}

export const Popover = ({ text, layout = "default" }: PopoverProps) => {
  return (
    <div className={styles.popoverContainer}>
      <div className={`${styles.popover} ${styles[layout]}`}>{text}</div>
    </div>
  );
};