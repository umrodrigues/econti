'use client';

import { useState } from 'react';
import { FiCheck, FiStar } from 'react-icons/fi';
import styles from './PricingPlans.module.scss';

const plans = [
  {
    id: 'essencial',
    name: 'Essencial',
    price: 997,
    originalPrice: 1497,
    description: 'Ideal para pequenas empresas que estão começando',
    features: [
      'Gestão de 2 redes sociais',
      '12 posts por mês',
      'Design de posts',
      'Relatório mensal básico',
      'Suporte por email',
      'Revisões ilimitadas',
      'Atendimento personalizado'
    ],
    popular: false
  },
  {
    id: 'collab',
    name: 'Gerenciamento Collab',
    price: 1997,
    originalPrice: 2497,
    description: 'Nossa especialidade com resultados comprovados',
    features: [
      'Gestão de 4 redes sociais',
      '20 posts por mês',
      'Design de posts + stories',
      'Relatório mensal detalhado',
      'Suporte prioritário',
      'Revisões ilimitadas',
      'Análise de concorrência',
      'Estratégia personalizada',
      'Gestão de comunidade',
      'Campanhas colaborativas'
    ],
    popular: true
  },
  {
    id: 'premium',
    name: 'Premium',
    price: 3997,
    originalPrice: 4997,
    description: 'Soluções completas online e offline',
    features: [
      'Gestão de 6 redes sociais',
      '30 posts por mês',
      'Design completo + vídeos',
      'Relatório semanal detalhado',
      'Suporte 24/7',
      'Revisões ilimitadas',
      'Análise de concorrência',
      'Estratégia personalizada',
      'Marketing offline',
      'Consultoria mensal',
      'Audiovisual completo'
    ],
    popular: false
  }
];

export default function PricingPlans() {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');

  const getPrice = (plan: typeof plans[0]) => {
    if (billingCycle === 'yearly') {
      return {
        price: Math.round(plan.price * 0.8),
        originalPrice: Math.round(plan.originalPrice * 0.8)
      };
    }
    return {
      price: plan.price,
      originalPrice: plan.originalPrice
    };
  };

  return (
    <section className={styles.pricingSection} id="planos">
      <div className={styles.container}>
        <div className={styles.header}>
          <h1 className="animate-fade-in">
            Planos que se adaptam ao seu negócio
          </h1>
          <p className={styles.subtitle}>
            Escolha o plano ideal para impulsionar sua presença digital
          </p>
          
          <div className={styles.billingToggle}>
            <span className={billingCycle === 'monthly' ? styles.active : ''}>Mensal</span>
            <button
              className={styles.toggle}
              onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')}
            >
              <div className={`${styles.slider} ${billingCycle === 'yearly' ? styles.sliderYearly : ''}`} />
            </button>
            <span className={billingCycle === 'yearly' ? styles.active : ''}>
              Anual
              <span className={styles.discount}>20% OFF</span>
            </span>
          </div>
        </div>

        <div className={styles.plansGrid}>
          {plans.map((plan) => {
            const { price, originalPrice } = getPrice(plan);
            
            return (
              <div 
                key={plan.id} 
                className={`${styles.planCard} ${plan.popular ? styles.popular : ''} card animate-slide-up`}
              >
                {plan.popular && (
                  <div className={styles.popularBadge}>
                    <FiStar />
                    Mais Popular
                  </div>
                )}
                
                <div className={styles.planHeader}>
                  <h3>{plan.name}</h3>
                  <p>{plan.description}</p>
                  
                  <div className={styles.price}>
                    <span className={styles.currency}>R$</span>
                    <span className={styles.amount}>{price}</span>
                    <span className={styles.period}>/{billingCycle === 'monthly' ? 'mês' : 'mês'}</span>
                  </div>
                  
                  {originalPrice > price && (
                    <div className={styles.originalPrice}>
                      De R$ {originalPrice}
                    </div>
                  )}
                </div>

                <ul className={styles.features}>
                  {plan.features.map((feature, index) => (
                    <li key={index}>
                      <FiCheck />
                      {feature}
                    </li>
                  ))}
                </ul>

                <a 
                  href="#contato" 
                  className={`${styles.ctaButton} btn ${plan.popular ? 'btn--primary' : 'btn--outline'}`}
                >
                  Começar Agora
                </a>
              </div>
            );
          })}
        </div>

        <div className={styles.guarantee}>
          <div className={styles.guaranteeContent}>
            <h3>Garantia de 30 dias</h3>
            <p>
              Se você não ficar satisfeito com nossos serviços nos primeiros 30 dias, 
              devolvemos 100% do seu dinheiro. Sem perguntas.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
