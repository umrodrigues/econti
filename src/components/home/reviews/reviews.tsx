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
      user: '@voluntopower',
      text: 'Plataforma incrível! Conseguimos organizar nossa ação em tempo recorde. Os voluntários foram super engajados e preparados.',
      rating: 5,
    },
    {
      user: '@ongunidas',
      text: 'Muito fácil de usar e com ótimos resultados. A &CONTI nos ajudou a encontrar voluntários para um evento super importante.',
      rating: 5,
    },
    {
      user: '@impactoativo',
      text: 'Adoramos a proposta! A equipe é prestativa e a plataforma facilitou todo nosso processo de recrutamento voluntário.',
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
