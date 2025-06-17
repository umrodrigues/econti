
import { PropsWithChildren } from 'react';
import styles from './DefaultContent.module.scss';

export const DefaultContent = ({children} : PropsWithChildren) => {

return (
<div className={styles.defaultContent}>
    {children}
</div>
    );
};
