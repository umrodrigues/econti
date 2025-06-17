
import React from 'react';
import { AiFillFacebook, AiFillInstagram, AiOutlineWhatsApp } from "react-icons/ai";
import Link from 'next/link';
import styles from './SocialMedia.module.scss'

export const SocialMedia = () => {
return (
    <>
    <div className={styles.socialMedia}>
    <Link href={'https://www.facebook.com/'} target={'_blank'}>
    <AiFillFacebook size={24} />
    </Link>
    <Link href={'https://www.instagram.com/lunaris.tech/'} target={'_blank'}>
    <AiFillInstagram size={24} />
    </Link>
    <Link href={'https://api.whatsapp.com/send?phone=5551997791996'} target={'_blank'}>
    <AiOutlineWhatsApp size={24}/>
    </Link>
    </div>
    </>

);
};

