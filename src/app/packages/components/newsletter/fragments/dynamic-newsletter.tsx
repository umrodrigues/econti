import React, { ReactNode } from 'react';
import { useForm } from 'react-hook-form';
import styles from '../Newsletter.module.scss';
import Button from '../../button/button';

export interface NewsletterProps {
  children?: ReactNode;
}

// TODO - Integrar com RD station

const DynamicNewsletter: React.FC<NewsletterProps> = ({ children }) => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <div className={styles.newsletterContainer}>
      <h2 className={styles.title}>Newsletter</h2>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <div className={styles.formGroup}>
          <label htmlFor="name" className={styles.label}>Nome</label>
          <input 
            id="name"
            type="text"
            className={styles.input}
          />
          {errors.name && <p className={styles.error}>{errors.name.message as string}</p>}
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="email" className={styles.label}>Email</label>
          <input 
            id="email"
            type="email"
            {...register('email', { required: 'Email é obrigatório', pattern: { value: /^\S+@\S+$/i, message: 'Email inválido' } })}
            className={styles.input}
          />
          {errors.email && <p className={styles.error}>{errors.email.message as string}</p>}
        </div>
        <Button onClick={handleSubmit(onSubmit)} type={'primary'} className={styles.button}> Solicitar</Button>
      </form>
      {children}
    </div>
  );
};

export default DynamicNewsletter;
