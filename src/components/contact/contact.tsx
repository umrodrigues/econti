'use client';

import { useState } from 'react';
import { FiMail, FiPhone, FiMapPin, FiSend, FiCheck } from 'react-icons/fi';
import styles from './Contact.module.scss';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        message: ''
      });
    } catch (error) {
      console.error('Erro ao enviar formulário:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className={styles.contactSection} id="contato">
      <div className={styles.container}>
        <div className={styles.header}>
          <h2>Entre em Contato</h2>
          <p>
            Pronto para transformar sua presença digital? Vamos conversar sobre como podemos ajudar seu negócio.
          </p>
        </div>

        <div className={styles.content}>
          <div className={styles.info}>
            <h3>Vamos conversar</h3>
            <p>
              Nossa equipe está pronta para entender suas necessidades e criar uma estratégia personalizada 
              para impulsionar sua presença nas redes sociais.
            </p>
            
            <div className={styles.contactInfo}>
              <div className={styles.contactItem}>
                <FiPhone />
                <div>
                  <h4>Telefone</h4>
                  <p>Entre em contato via WhatsApp</p>
                </div>
              </div>
              
              <div className={styles.contactItem}>
                <FiMail />
                <div>
                  <h4>Email</h4>
                  <p>contato@econti.com.br</p>
                </div>
              </div>
              
              <div className={styles.contactItem}>
                <FiMapPin />
                <div>
                  <h4>Redes Sociais</h4>
                  <p>@econticomigo</p>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.formContainer}>
            {isSubmitted ? (
              <div className={styles.successMessage}>
                <FiCheck />
                <h3>Mensagem enviada!</h3>
                <p>
                  Obrigado pelo contato. Nossa equipe entrará em contato em até 24 horas.
                </p>
                <button 
                  onClick={() => setIsSubmitted(false)}
                  className="btn btn--primary"
                >
                  Enviar nova mensagem
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label htmlFor="name">Nome completo *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  
                  <div className={styles.formGroup}>
                    <label htmlFor="email">Email *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label htmlFor="phone">Telefone</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                  
                  <div className={styles.formGroup}>
                    <label htmlFor="company">Empresa</label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="message">Mensagem *</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Conte-nos sobre seu projeto e como podemos ajudar..."
                    required
                  />
                </div>

                <button 
                  type="submit" 
                  className={`${styles.submitButton} btn btn--primary`}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <div className={styles.spinner} />
                      Enviando...
                    </>
                  ) : (
                    <>
                      <FiSend />
                      Enviar Mensagem
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
