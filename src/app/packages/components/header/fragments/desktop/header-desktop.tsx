import React, { useState } from 'react';
import { HeaderLogo } from '../shared/logo/header-logo';
import { SocialMedia } from '../../../social-media/social-media';
import { HeaderMenuGroup } from './menu/header-menu-group';

export const HeaderDesktop = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleClickOpenModal = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
        <HeaderLogo
            src={'/assets/logo-header.png'}
            width={200}
            height={150}
            alt={'alt image default'}
            />
            <div>
                <SocialMedia />
                <HeaderMenuGroup />
            </div></>
    );
};
