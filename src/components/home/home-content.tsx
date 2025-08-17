import styles from './HomeContent.module.scss';
import Image from 'next/image';

export default function HomeContent() {
  return (
    <section className={styles.homeContent}>
      <div className={styles.container}>
        <div className={styles.left}>
          <Image src={'/home/bento.png'} alt="Cachorro fofo com crachá" className={styles.dogImage}  width={500} height={500} />
        </div>
        <div className={styles.right}>
          <h2>
            Sobre a <span className={styles.highlight}>&amp;Conti</span> Marketing Digital
          </h2>
          <p className={styles.description}>
            A &Conti Marketing Digital é uma empresa dedicada a impulsionar o crescimento do seu negócio por meio de soluções abrangentes em imagem, design, performance e audiovisual. Nosso compromisso é proporcionar excelência através de um atendimento personalizado, valorizando a proximidade e o relacionamento duradouro com nossos clientes. Com mais de 70 empresas parceiras já atendidas, focamos em entregar resultados que realmente caibam no seu bolso, tanto no ambiente online quanto offline.
          </p>
          <div className={styles.cards}>
            <div className={styles.card}>
              <h3>Marketing Digital e Offline</h3>
              <p>
                Soluções completas para presença e performance em ambos os ambientes, garantindo que sua marca tenha destaque tanto online quanto offline.
              </p>
            </div>
            <div className={styles.card}>
              <h3>Atendimento Personalizado</h3>
              <p>
                Abordagem focada nas necessidades individuais de cada cliente, criando estratégias únicas que se alinham aos objetivos do seu negócio.
              </p>
            </div>
            <div className={styles.card}>
              <h3>Gerenciamento Collab</h3>
              <p>
                Nossa especialidade em gestão colaborativa de redes sociais, campanhas e estratégias de conteúdo que geram resultados mensuráveis.
              </p>
            </div>
            <div className={styles.card}>
              <h3>Resultados Comprovados</h3>
              <p>
                Mais de 70 empresas parceiras já atendidas com sucesso, demonstrando nossa capacidade de entregar valor real e crescimento sustentável.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
