import { FaChartLine, FaVideo, FaPaintBrush } from 'react-icons/fa';
import styles from './Products.module.scss';

export default function Products() {
  return (
    <div className={styles.productsContainer}>
      <div className={styles.productCard}>
        <h3><FaChartLine style={{ marginRight: '8px' }} />Marketing Digital</h3>
        <ul>
          <li>Gestão de redes sociais com foco em resultados.</li>
          <li>Criação de campanhas estratégicas.</li>
          <li>Mentorias personalizadas para marcas.</li>
          <li>Produção de conteúdo visual e textual.</li>
          <li>Desenvolvimento de presença online.</li>
        </ul>
      </div>

      <div className={styles.productCard}>
        <h3><FaVideo style={{ marginRight: '8px' }} />Audiovisual</h3>
        <ul>
          <li>Produção e edição de vídeos institucionais.</li>
          <li>Captação de imagens com drones.</li>
          <li>Fotografia profissional para campanhas.</li>
          <li>Roteirização e direção criativa.</li>
          <li>Vídeos promocionais e para redes sociais.</li>
        </ul>
      </div>

      <div className={styles.productCard}>
        <h3><FaPaintBrush style={{ marginRight: '8px' }} />Design</h3>
        <ul>
          <li>Criação de identidade visual completa.</li>
          <li>Design para mídias digitais e impressas.</li>
          <li>Apresentações profissionais e mockups.</li>
          <li>Materiais gráficos para eventos.</li>
          <li>Catálogos e folders personalizados.</li>
        </ul>
      </div>
    </div>
  );
}
