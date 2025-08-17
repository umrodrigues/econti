import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import styles from './Reviews.module.scss';

const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className={styles.stars}>
      {Array.from({ length: 5 }).map((_, i) =>
        i < rating ? <AiFillStar key={i} /> : <AiOutlineStar key={i} />
      )}
    </div>
  );
};

export default function Reviews() {
  const reviews = [
    {
      user: '@gb_viamopolis',
      text: 'A &Conti transformou completamente nossa presença digital. O gerenciamento collab trouxe resultados incríveis para nosso negócio.',
      rating: 5,
    },
    {
      user: '@riverdaestalagem',
      text: 'Excelente trabalho! A equipe da &Conti entendeu perfeitamente nossa identidade e criou estratégias que realmente funcionam.',
      rating: 5,
    },
    {
      user: '@barbeariaeneiasdebittencourt',
      text: 'Atendimento personalizado e resultados que superaram nossas expectativas. Recomendo muito a &Conti para qualquer empresa.',
      rating: 5,
    },
    {
      user: 'Cliente Satisfeito',
      text: 'Mais de 70 empresas já foram atendidas pela &Conti. A experiência e profissionalismo fazem toda a diferença.',
      rating: 5,
    },
    {
      user: 'Empresa Parceira',
      text: 'Soluções que realmente cabem no bolso e entregam resultados. A &Conti é nossa parceira de confiança.',
      rating: 5,
    },
    {
      user: 'Cliente Premium',
      text: 'Marketing digital e offline integrados com excelência. A &Conti entende que cada negócio é único.',
      rating: 5,
    },
  ];

  return (
    <section className={styles.reviewsSection}>
      <h2 className={styles.title}>O que falam da &CONTI?</h2>
      <div className={styles.cardsContainer}>
        {reviews.map((review, idx) => (
          <div key={idx} className={styles.card}>
            <div className={styles.cardInner}>
              <p className={styles.user}>{review.user}</p>
              <p className={styles.text}>
                {review.text.split('. ').map((line, i) => (
                  <span key={i}>
                    {line.trim()}
                    {i < review.text.split('. ').length - 1 && <br />}
                  </span>
                ))}
              </p>
              <StarRating rating={review.rating} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
