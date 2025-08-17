import styles from './HomeContent.module.scss';
import Image from 'next/image';

export default function HomeContent() {
  return (
    <section className={styles.homeContent}>
      <div className={styles.container}>
        <div className={styles.heroSection}>
          <div className={styles.bentoContainer}>
            <div className={styles.bentoWrapper}>
              <Image 
                src={'/home/bento.png'} 
                alt="Bento - Mascote da &Conti" 
                className={styles.bentoImage}  
                width={400} 
                height={400}
                priority
              />
              <div className={styles.bentoGlow}></div>
              <div className={styles.bentoParticles}>
                <div className={styles.particle}></div>
                <div className={styles.particle}></div>
                <div className={styles.particle}></div>
                <div className={styles.particle}></div>
                <div className={styles.particle}></div>
              </div>
            </div>
            <div className={styles.bentoInfo}>
              <h3>Bento</h3>
              <p>Nosso mascote e especialista em marketing digital</p>
            </div>
          </div>
          
          <div className={styles.contentSection}>
            <div className={styles.header}>
              <h2>
                Conheça a <span className={styles.highlight}>&amp;Conti</span>
              </h2>
              <p className={styles.subtitle}>
                Transformamos sonhos em resultados através do marketing digital
              </p>
            </div>
            
            <div className={styles.description}>
              <p>
                A &Conti Marketing Digital é uma empresa dedicada a impulsionar o crescimento do seu negócio por meio de soluções abrangentes em imagem, design, performance e audiovisual.
              </p>
              <p>
                Com mais de <strong>70 empresas parceiras</strong> já atendidas, focamos em entregar resultados que realmente <strong>cabem no seu bolso</strong>, tanto no ambiente online quanto offline.
              </p>
            </div>
          </div>
        </div>
        
        <div className={styles.featuresGrid}>
          <div className={`${styles.featureCard} animate-slide-up`}>
            <div className={styles.iconWrapper}>
              <div className={styles.icon}>🎯</div>
            </div>
            <h3>Marketing Digital & Offline</h3>
            <p>
              Soluções completas para presença e performance em ambos os ambientes, garantindo que sua marca tenha destaque.
            </p>
          </div>
          
          <div className={`${styles.featureCard} animate-slide-up`} style={{animationDelay: '0.1s'}}>
            <div className={styles.iconWrapper}>
              <div className={styles.icon}>🤝</div>
            </div>
            <h3>Atendimento Personalizado</h3>
            <p>
              Abordagem focada nas necessidades individuais de cada cliente, criando estratégias únicas e personalizadas.
            </p>
          </div>
          
          <div className={`${styles.featureCard} animate-slide-up`} style={{animationDelay: '0.2s'}}>
            <div className={styles.iconWrapper}>
              <div className={styles.icon}>🚀</div>
            </div>
            <h3>Gerenciamento Collab</h3>
            <p>
              Nossa especialidade em gestão colaborativa de redes sociais, campanhas e estratégias que geram resultados.
            </p>
          </div>
          
          <div className={`${styles.featureCard} animate-slide-up`} style={{animationDelay: '0.3s'}}>
            <div className={styles.iconWrapper}>
              <div className={styles.icon}>📈</div>
            </div>
            <h3>Resultados Comprovados</h3>
            <p>
              Mais de 70 empresas parceiras já atendidas com sucesso, demonstrando nossa capacidade de entregar valor real.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
