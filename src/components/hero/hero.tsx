import Image from 'next/image';
import { FaRocket, FaChartLine, FaUsers } from 'react-icons/fa';
import styles from './Hero.module.scss';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.textContent}>
            <h1 className={styles.title}>
              Transforme seu <span className={styles.highlight}>negócio</span> com a &Conti
            </h1>
            <p className={styles.subtitle}>
              Soluções completas em marketing digital e offline que impulsionam o crescimento da sua empresa. 
              Mais de 70 empresas já confiaram em nossos serviços.
            </p>
            
            <div className={styles.features}>
              <div className={styles.feature}>
                <FaRocket className={styles.icon} />
                <span>Marketing Digital</span>
              </div>
              <div className={styles.feature}>
                <FaUsers className={styles.icon} />
                <span>Gerenciamento Collab</span>
              </div>
              <div className={styles.feature}>
                <FaChartLine className={styles.icon} />
                <span>Resultados Comprovados</span>
              </div>
            </div>
            
            <div className={styles.buttons}>
              <a href="/contato" className="btn btn--primary">
                Faça seu Orçamento
              </a>
              <a href="/portfolio" className="btn btn--outline">
                Ver Portfólio
              </a>
            </div>
          </div>
          
          <div className={styles.imageContent}>
            <div className={styles.imageContainer}>
              <Image 
                src="/hero-image.png" 
                alt="&Conti Marketing Digital" 
                width={500} 
                height={500}
                className={styles.heroImage}
                priority
              />
              <div className={styles.floatingCard}>
                <div className={styles.cardContent}>
                  <span className={styles.number}>70+</span>
                  <span className={styles.label}>Empresas Atendidas</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className={styles.scrollIndicator}>
        <div className={styles.scrollText}>Role para descobrir</div>
        <div className={styles.scrollArrow}></div>
      </div>
    </section>
  );
}
