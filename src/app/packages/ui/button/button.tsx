import React, { PropsWithChildren } from 'react';
import styles from './Button.module.scss';

interface ButtonProps extends PropsWithChildren {
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  className?: string;
  icon?: React.ReactNode; 
}

const Button: React.FC<ButtonProps> = ({
  onClick,
  type = 'button',
  disabled = false,
  className = '',
  children,
  icon 
}) => {
  return (
    <button
      onClick={onClick}
      type={type}
      disabled={disabled}
      className={`${styles.button} ${className} ${!className && type === 'button' ? styles.default : ''}`}
    >
      {children}
      {icon && <span className={styles.icon}>{icon}</span>}
    </button>
  );
};


export default Button;
