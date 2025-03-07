import Image from 'next/image';
import styles from './Header.module.scss';

export default function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <Image src="/LOGO.png" alt="Logo &CONTI" width={200} height={200} />
                <nav>
                    <ul className={styles.navList}>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Sobre</a></li>
                        <li><a href="#">Soluções</a></li>
                        <li><a href="#">Conteúdo</a></li>
                        <li><a href="#">Cases</a></li>
                    </ul>
                </nav>
                <a href="#" className={styles.button}>Faça já o seu Orçamento</a>
            </div>

            <div className={styles.contentWrapper}>
                <div className={styles.containerPhone}>
                    <h3>Soluções para o Marketing da sua empresa.</h3>
                    <a href="#" className={styles.button}>Faça já o seu Orçamento</a>
                </div>
                <Image src="/celular.png" alt="&CONTI" width={812} height={812} className={styles.phoneImage} />
            </div>
        </header>
    );
}
