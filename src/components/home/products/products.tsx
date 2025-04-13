import styles from './Products.module.scss';

export default function Products() {
  return (
    <div className={styles.productsContainer}>
      <div className={styles.productCard}>
        <h3>Marketing Digital</h3>
        <ul>
          <li>Gerenciá gestão e mentoria ce redes sociais edifit,</li>
          <li>Embelecimento é havê estrateg as esitaieis.</li>
          <li>Estrategias de redes intagrevicio</li>
          <li>Ovomivanaes fotôgo e editoo de etas.</li>
          <li>Criacao de stros.</li>
        </ul>
      </div>

      <div className={styles.productCard}>
        <h3>Audiovisual</h3>
        <ul>
          <li>Servico de fotografia. Direcop, roteinoe. savoteócao de eleos.</li>
          <li>Videos provirkas com drone</li>
          <li>Picducão pamiregis, (TV IGTVo videos institucio-rioles e videgs.</li>
        </ul>
      </div>

      <div className={styles.productCard}>
        <h3>Design</h3>
        <ul>
          <li>Criacao de m'atual de 'identidade l'ofierentio em, chacão, qu'edlíquo de leros.</li>
          <li>Criacao dia tais para inoex souais. Pawerplint e outios.</li>
          <li>Artex offline para una cruicao de cotálogos: les. pemineoos outtas. estrategias</li>
        </ul>
      </div>
    </div>
  );
}