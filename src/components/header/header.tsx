'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';
import { FiMenu, FiX, FiChevronDown } from 'react-icons/fi';
import styles from './Header.module.scss';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
            <div className={styles.container}>
                <div className={styles.logo}>
                    <Image src="/LOGO.png" alt="Logo &CONTI" width={200} height={200} />
                </div>
                
                <nav className={`${styles.nav} ${isMenuOpen ? styles.navOpen : ''}`}>
                    <ul className={styles.navList}>
                        <li><a href="#home" onClick={() => setIsMenuOpen(false)}>Home</a></li>
                        <li><a href="#sobre" onClick={() => setIsMenuOpen(false)}>Sobre</a></li>
                        <li><a href="#solucoes" onClick={() => setIsMenuOpen(false)}>Soluções</a></li>
                        <li><a href="#portfolio" onClick={() => setIsMenuOpen(false)}>Portfólio</a></li>
                        <li><a href="#planos" onClick={() => setIsMenuOpen(false)}>Planos</a></li>
                        <li><a href="#contato" onClick={() => setIsMenuOpen(false)}>Contato</a></li>
                    </ul>
                </nav>
                
                <div className={styles.actions}>
                    <a href="#contato" className={`${styles.button} btn btn--primary`}>
                        Faça já o seu Orçamento
                    </a>
                    
                    <button 
                        className={styles.menuButton}
                        onClick={toggleMenu}
                        aria-label="Menu"
                    >
                        {isMenuOpen ? <FiX /> : <FiMenu />}
                    </button>
                </div>
            </div>


        </header>
    );
}
