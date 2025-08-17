'use client';

import { motion } from 'framer-motion';
import { FiInstagram, FiMail, FiPhone } from 'react-icons/fi';
import styles from './Footer.module.scss';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: "easeOut" as const
            }
        }
    };

    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <motion.div 
                    className={styles.content}
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <motion.div className={styles.brandSection} variants={itemVariants}>
                        <div className={styles.logo}>
                            <span className={styles.ampersand}>&</span>
                            <span className={styles.brandName}>Conti</span>
                        </div>
                        <p className={styles.tagline}>
                            Transformando negócios através do marketing digital
                        </p>
                        <div className={styles.social}>
                            <motion.a 
                                href="https://instagram.com/econticomigo" 
                                aria-label="Instagram" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <FiInstagram />
                            </motion.a>
                        </div>
                    </motion.div>

                    <motion.div className={styles.linksSection} variants={itemVariants}>
                        <h3>Links Rápidos</h3>
                        <ul>
                            <li><a href="/#sobre">Sobre</a></li>
                            <li><a href="/portfolio">Portfólio</a></li>
                            <li><a href="/planos">Planos</a></li>
                            <li><a href="/contato">Contato</a></li>
                        </ul>
                    </motion.div>

                    <motion.div className={styles.contactSection} variants={itemVariants}>
                        <h3>Contato</h3>
                        <div className={styles.contactInfo}>
                            <div className={styles.contactItem}>
                                <FiPhone />
                                <span>WhatsApp</span>
                            </div>
                            <div className={styles.contactItem}>
                                <FiMail />
                                <span>contato@econti.com.br</span>
                            </div>
                        </div>
                        <motion.a 
                            href="/contato" 
                            className={styles.ctaButton}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Fale Conosco
                        </motion.a>
                    </motion.div>
                </motion.div>

                <motion.div 
                    className={styles.bottom}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                >
                    <div className={styles.bottomContent}>
                        <p>&copy; {currentYear} &Conti. Todos os direitos reservados.</p>
                        <div className={styles.legal}>
                            <a href="/privacidade">Privacidade</a>
                            <a href="/termos">Termos</a>
                        </div>
                    </div>
                </motion.div>
            </div>
        </footer>
    );
}
