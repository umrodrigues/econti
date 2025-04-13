import styles from './Reviews.module.scss';

export default function Reviews() {
  return (
    <section className={styles.reviewsSection}>
      <h2 className={styles.title}>O que falam da &CONTI?</h2>
      <div className={styles.cardsContainer}>
        <div className={`${styles.card} ${styles.orange}`}>
          <p className={styles.user}>@soscasalimpa</p>
          <p className={styles.text}>
            Ola fortin&hasht;, da! SOS Casa<br />
            dirige um detergente voltado<br />
            a tecnologias e atmosferas, e<br />
            necessidades sustentáveis. Menos<br />
            realizar que não reprocessa
          </p>
          <div className={styles.stars}>★★★★★</div>
        </div>

        <div className={`${styles.card} ${styles.blue}`}>
          <p className={styles.user}>@suraltdaweb.rs</p>
          <p className={styles.text}>
            A gerência por usanças e COPTI é<br />
            recentemente parceira &CONTI e<br />
            contribuída a amenar, bundar ou<br />
            confeccionar serviços entre os<br />
            carbonings gerando materiais<br />
            bonitos! Né de tudo antes todas<br />
            se significam.
          </p>
          <div className={styles.stars}>★★★★★</div>
        </div>

        <div className={`${styles.card} ${styles.lightBlue}`}>
          <p className={styles.user}>@eliquerebemtotos</p>
          <p className={styles.text}>
            Resumida a primeira de portal<br />
            de Portu&hasht; de fixar a esses<br />
            frequentadores de uma economia.<br />
            Chuquemente, resume-se a uma<br />
            adesivagem de fricars torgens<br />
            atencionando os likes ganhos.
          </p>
          <div className={styles.stars}>★★★★★</div>
        </div>
      </div>
    </section>
  );
}
