import React, { PropsWithChildren } from 'react';
import clsx from 'clsx';
import styles from './Button.module.scss';

interface ButtonProps extends PropsWithChildren<{}> {
type: 'primary' | 'secondary' | 'danger';
onClick?: () => void;
className?: string; 
}

const Button: React.FC<ButtonProps> = ({ type, children, onClick, className }) => {
return (
    <button
    className={clsx(styles.button, styles[type], className)} 
    onClick={onClick}
    >
    {children}
    </button>
);
};

export default Button;
