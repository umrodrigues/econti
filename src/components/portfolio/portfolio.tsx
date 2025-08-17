import { FaInstagram, FaChartLine, FaUsers, FaStar } from 'react-icons/fa';
import styles from './Portfolio.module.scss';

export default function Portfolio() {
  const cases = [
    {
      id: 1,
      client: '@gb_viamopolis',
      description: 'Gestão completa de redes sociais com foco em engajamento e conversão',
      results: 'Aumento significativo no engajamento e seguidores',
      icon: <FaInstagram />,
      category: 'Gerenciamento Collab'
    },
    {
      id: 2,
      client: '@riverdaestalagem',
      description: 'Estratégia de conteúdo personalizada para estabelecimento gastronômico',
      results: 'Crescimento na presença digital e atração de clientes',
      icon: <FaChartLine />,
      category: 'Marketing Digital'
    },
    {
      id: 3,
      client: '@barbeariaeneiasdebittencourt',
      description: 'Gestão colaborativa de redes sociais para barbearia',
      results: 'Fortalecimento da marca e aumento no agendamento online',
      icon: <FaUsers />,
      category: 'Gerenciamento Collab'
    }
  ];

  return (
    <section className={styles.portfolio}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2>Casos de Sucesso</h2>
          <p>Conheça alguns dos nossos resultados comprovados com mais de 70 empresas parceiras</p>
        </div>
        
        <div className={styles.cases}>
          {cases.map((caseItem) => (
            <div key={caseItem.id} className={styles.caseCard}>
              <div className={styles.caseHeader}>
                <div className={styles.icon}>
                  {caseItem.icon}
                </div>
                <div className={styles.clientInfo}>
                  <h3>{caseItem.client}</h3>
                  <span className={styles.category}>{caseItem.category}</span>
                </div>
              </div>
              
              <div className={styles.caseContent}>
                <p className={styles.description}>{caseItem.description}</p>
                <div className={styles.results}>
                  <FaStar className={styles.starIcon} />
                  <span>{caseItem.results}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className={styles.cta}>
          <p>Quer ver mais resultados? Entre em contato conosco</p>
          <a href="/contato" className="btn btn--primary">
            Solicitar Orçamento
          </a>
        </div>
      </div>
    </section>
  );
}
