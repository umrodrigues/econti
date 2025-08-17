'use client';

import { useState } from 'react';
import { FiPlus, FiMinus } from 'react-icons/fi';
import styles from './PricingFAQ.module.scss';

const faqs = [
  {
    question: 'Como funciona o processo de contratação?',
    answer: 'O processo é simples: entre em contato conosco, agendamos uma reunião para entender suas necessidades, apresentamos uma proposta personalizada e, após a aprovação, iniciamos o trabalho imediatamente.'
  },
  {
    question: 'Posso cancelar o contrato a qualquer momento?',
    answer: 'Sim, você pode cancelar o contrato a qualquer momento. Oferecemos uma garantia de 30 dias e, se não ficar satisfeito, devolvemos 100% do seu dinheiro.'
  },
  {
    question: 'Quais redes sociais vocês gerenciam?',
    answer: 'Gerenciamos Instagram, Facebook, LinkedIn, Twitter, TikTok e YouTube. A quantidade de redes depende do plano escolhido.'
  },
  {
    question: 'Vocês criam o conteúdo ou eu preciso fornecer?',
    answer: 'Criamos todo o conteúdo do zero, incluindo textos, imagens e vídeos. Apenas precisamos de algumas informações sobre sua marca e público-alvo.'
  },
  {
    question: 'Com que frequência vocês postam?',
    answer: 'A frequência varia conforme o plano: Starter (12 posts/mês), Professional (20 posts/mês) e Enterprise (30 posts/mês).'
  },
  {
    question: 'Vocês fornecem relatórios de performance?',
    answer: 'Sim, todos os planos incluem relatórios. O Starter tem relatório mensal básico, Professional tem relatório mensal detalhado e Enterprise tem relatório semanal completo.'
  },
  {
    question: 'Posso fazer alterações no conteúdo antes de postar?',
    answer: 'Sim, oferecemos revisões ilimitadas em todos os planos. Você pode solicitar alterações até ficar 100% satisfeito.'
  },
  {
    question: 'Vocês trabalham com empresas de qualquer tamanho?',
    answer: 'Sim, atendemos desde pequenas empresas até grandes corporações. Nossos planos são flexíveis e podem ser personalizados conforme suas necessidades.'
  }
];

export default function PricingFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className={styles.faqSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2>Perguntas Frequentes</h2>
          <p>
            Tire suas dúvidas sobre nossos serviços e planos
          </p>
        </div>

        <div className={styles.faqList}>
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`${styles.faqItem} ${openIndex === index ? styles.open : ''}`}
            >
              <button 
                className={styles.question}
                onClick={() => toggleFAQ(index)}
                aria-expanded={openIndex === index}
              >
                <span>{faq.question}</span>
                {openIndex === index ? <FiMinus /> : <FiPlus />}
              </button>
              <div className={styles.answer}>
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.contact}>
          <h3>Ainda tem dúvidas?</h3>
          <p>Entre em contato conosco e nossa equipe terá prazer em ajudar</p>
          <a href="#contato" className="btn btn--primary">
            Falar com Especialista
          </a>
        </div>
      </div>
    </section>
  );
}
