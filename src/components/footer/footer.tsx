import { FaInstagram, FaLinkedinIn, FaFacebookF } from 'react-icons/fa';
import styles from './Footer.module.scss';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.column}>
        <h3>Ajudaê</h3>
        <ul>
          <li>Sobre nós</li>
          <li>Nossa missão</li>
          <li>Blog</li>
        </ul>
      </div>
      <div className={styles.column}>
        <h3>Voluntários</h3>
        <ul>
          <li>Encontre oportunidades</li>
          <li>Como funciona</li>
          <li>Dúvidas frequentes</li>
        </ul>
      </div>
      <div className={styles.column}>
        <h3>ONGs</h3>
        <ul>
          <li>Cadastre sua ONG</li>
          <li>Benefícios</li>
          <li>Suporte</li>
        </ul>
      </div>
      <div className={styles.column}>
        <h3>Contato</h3>
        <p>contato@ajudae.org</p>
        <div className={styles.socials}>
          <FaInstagram />
          <FaLinkedinIn />
          <FaFacebookF />
        </div>
        <ul>
          <li>Política de privacidade</li>
          <li>Termos de uso</li>
        </ul>
      </div>
    </footer>
  );
}
