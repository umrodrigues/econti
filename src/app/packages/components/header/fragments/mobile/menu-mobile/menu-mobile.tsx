import React from 'react';
import { IHeaderMenu } from '@/app/packages/types/header/HeaderMenu';
import styles from './MenuMobile.module.scss'; 
import { Spacer } from '@/app/packages/components/spacer/spacer';
import Accordion from '@/app/packages/components/footer/fragments/accordion-footer/accordion';


export const MenuMobile = ({ links }: IHeaderMenu) => {
return (
    <div className={styles.menuMobile}>
    <Spacer spacing={'xl'} desktopSpacing={'xl'} />

    {links.map((group, index) => (
        <Accordion 
            key={index}
            title={group.title}
            links={group.items.map(item => ({
                href: item.url,
                label: item.text
            }))} 
            type={'menu'}        
            />
    ))}
    </div>
);
};

export default MenuMobile;
