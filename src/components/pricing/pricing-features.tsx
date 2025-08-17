import { FiTrendingUp, FiUsers, FiBarChart, FiAward, FiClock, FiShield } from 'react-icons/fi';
import styles from './PricingFeatures.module.scss';

const features = [
  {
    icon: FiTrendingUp,
    title: 'Crescimento Garantido',
    description: 'Estratégias comprovadas que aumentam seu engajamento e seguidores'
  },
  {
    icon: FiUsers,
    title: 'Equipe Especializada',
    description: 'Profissionais certificados em marketing digital e redes sociais'
  },
  {
    icon: FiBarChart,
    title: 'Relatórios Detalhados',
    description: 'Acompanhe seu progresso com métricas e análises em tempo real'
  },
  {
    icon: FiAward,
    title: 'Qualidade Premium',
    description: 'Conteúdo criativo e profissional que representa sua marca'
  },
  {
    icon: FiClock,
    title: 'Suporte 24/7',
    description: 'Estamos sempre disponíveis para ajudar quando você precisar'
  },
  {
    icon: FiShield,
    title: 'Segurança Total',
    description: 'Seus dados e contas protegidos com as melhores práticas'
  }
];

export default function PricingFeatures() {
  return (
    <section className={styles.featuresSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2>Por que escolher a &CONTI?</h2>
          <p>
            Oferecemos soluções completas e personalizadas para impulsionar sua presença digital
          </p>
        </div>

        <div className={styles.featuresGrid}>
          {features.map((feature, index) => (
            <div 
              key={index} 
              className={`${styles.featureCard} card animate-slide-up`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={styles.icon}>
                <feature.icon />
              </div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>

        <div className={styles.cta}>
          <h3>Pronto para transformar sua presença digital?</h3>
          <p>Entre em contato conosco e descubra como podemos ajudar seu negócio a crescer</p>
          <div className={styles.buttons}>
            <a href="/planos" className="btn btn--primary">
              Ver Planos
            </a>
            <a href="/contato" className="btn btn--outline">
              Falar com Especialista
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
