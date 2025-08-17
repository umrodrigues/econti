import { FaChartLine, FaVideo, FaPaintBrush, FaUsers, FaBullhorn, FaMobile } from 'react-icons/fa';
import styles from './Products.module.scss';

export default function Products() {
  return (
    <div className={styles.productsContainer}>
      <div className={styles.productCard}>
        <h3><FaChartLine style={{ marginRight: '8px' }} />Marketing Digital</h3>
        <ul>
          <li>Gestão completa de redes sociais</li>
          <li>Campanhas de performance e conversão</li>
          <li>Estratégias de SEO e posicionamento</li>
          <li>Análise de métricas e relatórios</li>
          <li>Otimização de conversão</li>
        </ul>
      </div>

      <div className={styles.productCard}>
        <h3><FaUsers style={{ marginRight: '8px' }} />Gerenciamento Collab</h3>
        <ul>
          <li>Gestão colaborativa de redes sociais</li>
          <li>Estratégias de conteúdo personalizadas</li>
          <li>Campanhas colaborativas e parcerias</li>
          <li>Gestão de comunidade e engajamento</li>
          <li>Resultados comprovados com @gb_viamopolis, @riverdaestalagem, @barbeariaeneiasdebittencourt</li>
        </ul>
      </div>

      <div className={styles.productCard}>
        <h3><FaPaintBrush style={{ marginRight: '8px' }} />Design e Imagem</h3>
        <ul>
          <li>Criação de identidade visual completa</li>
          <li>Design para mídias digitais e impressas</li>
          <li>Materiais gráficos para eventos</li>
          <li>Apresentações profissionais</li>
          <li>Branding e posicionamento visual</li>
        </ul>
      </div>

      <div className={styles.productCard}>
        <h3><FaVideo style={{ marginRight: '8px' }} />Audiovisual</h3>
        <ul>
          <li>Produção de vídeos institucionais</li>
          <li>Conteúdo para redes sociais</li>
          <li>Fotografia profissional</li>
          <li>Captação com drones</li>
          <li>Edição e pós-produção</li>
        </ul>
      </div>

      <div className={styles.productCard}>
        <h3><FaBullhorn style={{ marginRight: '8px' }} />Marketing Offline</h3>
        <ul>
          <li>Estratégias de marketing tradicional</li>
          <li>Materiais impressos personalizados</li>
          <li>Eventos e ações promocionais</li>
          <li>Planejamento de campanhas integradas</li>
          <li>Atendimento personalizado</li>
        </ul>
      </div>

      <div className={styles.productCard}>
        <h3><FaMobile style={{ marginRight: '8px' }} />Soluções Integradas</h3>
        <ul>
          <li>Estratégias online e offline</li>
          <li>Atendimento personalizado</li>
          <li>Relacionamento duradouro</li>
          <li>Resultados que cabem no seu bolso</li>
          <li>Mais de 70 empresas atendidas</li>
        </ul>
      </div>
    </div>
  );
}
