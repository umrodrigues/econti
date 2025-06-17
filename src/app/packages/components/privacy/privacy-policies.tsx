import React from 'react';
import styles from './PrivacyPolicies.module.scss';
import clsx from 'clsx';


export const PrivacyPolicies = () => {
  return (
    <div className={clsx(styles.privacyPolicy, 'container')}>
      <h1 className={styles.title}>Política de Privacidade e Proteção de Dados [Company name]</h1>
      <h2 className={styles.sectionTitle}>1. Introdução</h2>
      <p className={styles.text}>
        Bem-vindo à [Nome da Empresa]. A proteção da sua privacidade é muito importante para nós. Esta Política de
        Privacidade descreve como coletamos, usamos, compartilhamos e protegemos suas informações pessoais ao usar nosso
        site e serviços.
      </p>

      <h2 className={styles.sectionTitle}>2. Informações que Coletamos</h2>
      <h3 className={styles.subSectionTitle}>2.1. Informações Pessoais</h3>
      <p className={styles.text}>
        Podemos coletar informações pessoais que você nos fornece diretamente, como nome, endereço de e-mail, número de
        telefone, endereço postal e outras informações de contato.
      </p>
      <h3 className={styles.subSectionTitle}>2.2. Informações de Uso</h3>
      <p className={styles.text}>
        Coletamos informações sobre suas interações com nosso site, incluindo as páginas que você visita, o tempo gasto
        em cada página, os links clicados e outras ações tomadas.
      </p>
      <h3 className={styles.subSectionTitle}>2.3. Informações de Dispositivo</h3>
      <p className={styles.text}>
        Podemos coletar informações sobre o dispositivo que você usa para acessar nosso site, incluindo o modelo do
        dispositivo, sistema operacional, tipo de navegador e endereço IP.
      </p>

      <h2 className={styles.sectionTitle}>3. Uso das Informações</h2>
      <h3 className={styles.subSectionTitle}>3.1. Prestação de Serviços</h3>
      <p className={styles.text}>
        Usamos suas informações para fornecer e melhorar nossos serviços, responder às suas solicitações e processar suas transações.
      </p>
      <h3 className={styles.subSectionTitle}>3.2. Comunicação</h3>
      <p className={styles.text}>
        Podemos usar suas informações para enviar atualizações, newsletters, materiais promocionais e outras comunicações relacionadas aos nossos serviços. Você pode optar por não receber essas comunicações a qualquer momento.
      </p>
      <h3 className={styles.subSectionTitle}>3.3. Personalização</h3>
      <p className={styles.text}>
        Usamos as informações coletadas para personalizar sua experiência em nosso site, recomendando conteúdo e ofertas relevantes.
      </p>
      <h3 className={styles.subSectionTitle}>3.4. Melhoria do Serviço</h3>
      <p className={styles.text}>
        Analisamos as informações coletadas para entender melhor como nossos usuários interagem com nosso site e serviços, e para melhorar a funcionalidade e a qualidade do serviço.
      </p>

      <h2 className={styles.sectionTitle}>4. Compartilhamento de Informações</h2>
      <h3 className={styles.subSectionTitle}>4.1. Prestadores de Serviços</h3>
      <p className={styles.text}>
        Podemos compartilhar suas informações com prestadores de serviços que realizam serviços em nosso nome, como processamento de pagamentos, hospedagem de sites e análise de dados.
      </p>
      <h3 className={styles.subSectionTitle}>4.2. Obrigações Legais</h3>
      <p className={styles.text}>
        Podemos divulgar suas informações para cumprir obrigações legais, regulatórias ou judiciais.
      </p>
      <h3 className={styles.subSectionTitle}>4.3. Proteção de Direitos</h3>
      <p className={styles.text}>
        Podemos divulgar suas informações para proteger nossos direitos, propriedade ou segurança, bem como os de nossos usuários e o público.
      </p>

      <h2 className={styles.sectionTitle}>5. Segurança das Informações</h2>
      <p className={styles.text}>
        Implementamos medidas de segurança adequadas para proteger suas informações contra acesso não autorizado, alteração, divulgação ou destruição. No entanto, nenhum sistema de segurança é infalível e não podemos garantir a segurança absoluta das suas informações.
      </p>

      <h2 className={styles.sectionTitle}>6. Seus Direitos</h2>
      <h3 className={styles.subSectionTitle}>6.1. Acesso e Correção</h3>
      <p className={styles.text}>
        Você tem o direito de acessar e corrigir suas informações pessoais que mantemos.
      </p>
      <h3 className={styles.subSectionTitle}>6.2. Exclusão</h3>
      <p className={styles.text}>
        Você pode solicitar a exclusão de suas informações pessoais, sujeito a certas exceções.
      </p>
      <h3 className={styles.subSectionTitle}>6.3. Portabilidade de Dados</h3>
      <p className={styles.text}>
        Você tem o direito de solicitar uma cópia das suas informações pessoais em um formato estruturado, de uso comum e legível por máquina.
      </p>
      <h3 className={styles.subSectionTitle}>6.4. Retirada de Consentimento</h3>
      <p className={styles.text}>
        Quando o processamento de informações pessoais for baseado em seu consentimento, você pode retirar seu consentimento a qualquer momento.
      </p>

      <h2 className={styles.sectionTitle}>7. Cookies e Tecnologias Semelhantes</h2>
      <p className={styles.text}>
        Usamos cookies e tecnologias semelhantes para coletar informações sobre sua navegação em nosso site, personalizar sua experiência e analisar o uso do site. Você pode configurar seu navegador para recusar cookies, mas isso pode afetar a funcionalidade do nosso site.
      </p>

      <h2 className={styles.sectionTitle}>8. Alterações nesta Política</h2>
      <p className={styles.text}>
        Podemos atualizar esta Política de Privacidade periodicamente para refletir mudanças em nossas práticas de privacidade. Notificaremos sobre mudanças significativas através de nosso site ou por outros meios apropriados.
      </p>

      <h2 className={styles.sectionTitle}>9. Contato</h2>
      <p className={styles.text}>
        Se você tiver dúvidas ou preocupações sobre esta Política de Privacidade ou sobre nossas práticas de privacidade, entre em contato conosco em:
      </p>
      <p className={styles.text}>
        [Nome da Empresa]<br/>
        [Endereço]<br/>
        [E-mail de Contato]<br/>
        [Telefone]
      </p>
    </div>
  );
}
