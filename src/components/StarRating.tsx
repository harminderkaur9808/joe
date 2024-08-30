// components/StarRating.tsx
import React from 'react';
import styles from '../styles/StarRating.module.css';

interface StarRatingProps {
  rating: number;
}

const StarRating: React.FC<StarRatingProps> = ({ rating }) => {
  const stars = [];

  for (let i = 1; i <= 5; i++) {
    stars.push(
      <span key={i} className={i <= rating ? styles.filledStar : styles.emptyStar}>
        ★
      </span>
    );
  }

  return <div className={styles.starRating}>{stars}</div>;
};

export default StarRating;
