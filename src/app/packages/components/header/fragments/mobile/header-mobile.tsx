import React, { useState } from 'react';
import styles from './HeaderMobile.module.scss';
import { AiOutlineMenu } from 'react-icons/ai';
import { HeaderLogo } from '../shared/logo/header-logo';
import { MenuModal } from './menu-modal/menu-modal';
import MenuMobile from './menu-mobile/menu-mobile';
import { headerMenuMock } from '../shared/__mocks__/header-menu-mock';

export const HeaderMobile = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleClickOpenModal = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className={styles.header}>
            <AiOutlineMenu size={30} className={styles.icon} onClick={handleClickOpenModal} />
            <HeaderLogo
                src={'/assets/logo-header.png'}
                width={80}
                height={80}
                alt={'alt image default'}
                className={styles.logo}
            />

            <MenuModal isOpen={isOpen} isClose={handleClickOpenModal}>
                <HeaderLogo
                    src={'/assets/logo-header.png'}
                    width={60}
                    height={60}
                    alt={'alt image default'}
                    className={styles.logo}
                />
                <MenuMobile links={headerMenuMock.links} />
            </MenuModal>
        </header>
    );
};
