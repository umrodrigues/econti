'use client';

import Image from 'next/image';
import { FiMail, FiPhone, FiMapPin, FiInstagram, FiFacebook, FiLinkedin, FiTwitter } from 'react-icons/fi';
import styles from './Footer.module.scss';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <div className={styles.section}>
                        <div className={styles.logo}>
                            <Image src="/LOGO.png" alt="Logo &CONTI" width={200} height={200} />
                        </div>
                        <p className={styles.description}>
                            A &Conti Marketing Digital é dedicada a impulsionar o crescimento do seu negócio com soluções abrangentes em imagem, design, performance e audiovisual. Mais de 70 empresas parceiras atendidas.
                        </p>
                        <div className={styles.social}>
                            <a href="https://instagram.com/econticomigo" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                                <FiInstagram />
                            </a>
                        </div>
                    </div>

                    <div className={styles.section}>
                        <h3>Serviços</h3>
                        <ul>
                            <li><a href="/#solucoes">Marketing Digital</a></li>
                            <li><a href="/#solucoes">Gerenciamento Collab</a></li>
                            <li><a href="/#solucoes">Design e Imagem</a></li>
                            <li><a href="/#solucoes">Audiovisual</a></li>
                            <li><a href="/#solucoes">Marketing Offline</a></li>
                        </ul>
                    </div>

                    <div className={styles.section}>
                        <h3>Empresa</h3>
                        <ul>
                            <li><a href="/#sobre">Sobre Nós</a></li>
                            <li><a href="/portfolio">Portfólio</a></li>
                            <li><a href="/planos">Planos</a></li>
                            <li><a href="/contato">Contato</a></li>
                        </ul>
                    </div>

                    <div className={styles.section}>
                        <h3>Contato</h3>
                        <div className={styles.contact}>
                            <div className={styles.contactItem}>
                                <FiPhone />
                                <span>WhatsApp</span>
                            </div>
                            <div className={styles.contactItem}>
                                <FiMail />
                                <span>contato@econti.com.br</span>
                            </div>
                            <div className={styles.contactItem}>
                                <FiMapPin />
                                <span>@econticomigo</span>
                            </div>
                        </div>
                        <a href="/contato" className={`${styles.ctaButton} btn btn--primary`}>
                            Fale Conosco
                        </a>
                    </div>
                </div>

                <div className={styles.bottom}>
                    <div className={styles.bottomContent}>
                        <p>&copy; {currentYear} &CONTI. Todos os direitos reservados.</p>
                        <div className={styles.legal}>
                            <a href="/privacidade">Política de Privacidade</a>
                            <a href="/termos">Termos de Uso</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
