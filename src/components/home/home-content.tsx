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
            Porque ter a <span className={styles.highlight}>&amp;CONTI</span> para<br />
            gerenciar suas redes?
          </h2>
          <div className={styles.cards}>
            <div className={styles.card}>
              <h3>Somos especialistas</h3>
              <p>
                Atuamos nas redes sociais de diversos nichos, de áreas institucionais a petshops, com conteúdos otimizados para engajar e fortalecer a presença da sua marca.
              </p>
            </div>
            <div className={styles.card}>
              <h3>Constância</h3>
              <p>
                Reequilibramos as suas redes trazendo uma rotina precisa de postagens e conteúdos para atrair novos seguidores e manter os antigos.
              </p>
            </div>
            <div className={styles.card}>
              <h3>Análise</h3>
              <p>
                Reunimos e cruzamos dados e métricas para entender o comportamento do público e propor ações mais eficazes e estratégicas.
              </p>
            </div>
            <div className={styles.card}>
              <h3>Criatividade</h3>
              <p>
                Aplicando referências visuais, ideias ilustrativas e formatos personalizados, criamos conteúdos com personalidade e foco direto.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
