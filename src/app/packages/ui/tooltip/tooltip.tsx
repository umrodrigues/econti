import React from 'react';
import styles from './Tooltip.module.scss';

type TooltipProps = {
  text: string; // Texto a ser exibido na tooltip
};

export const Tooltip: React.FC<TooltipProps> = ({ text }) => {
  return (
    <div className={styles.tooltip}>
      <span className={styles.tooltipText}>{text}</span>
    </div>
  );
};
