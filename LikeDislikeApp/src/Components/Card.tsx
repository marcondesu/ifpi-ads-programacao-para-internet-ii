import React from 'react';
import styles from '../styles/Card.module.css';
import { CardData } from './CardComponent';

type CardProps = {
  card: CardData;
  onLike: () => void;
  onDislike: () => void;
};

const Card: React.FC<CardProps> = ({ card, onLike, onDislike }) => {
  return (
    <div className={styles.card}>
      <div className={styles.title}>
        "{card.title}"
      </div>
      <div className={styles.likeDislikeRow}>
        <span className={styles.likeSpan}>Likes</span>
        <div className={styles.likesDislikes}>
          <span>{card.likes - card.dislikes}</span>
        </div>
        <span className={styles.dislikeSpan}>Dislikes</span>
      </div>
      <div className={styles.likeDislikeCounters}>
        <span>{card.likes}</span>
        <span>{card.dislikes}</span>
      </div>
      <div className={styles.likeDislikeButtons}>
        <button onClick={onLike}>Like</button>
        <button onClick={onDislike}>Dislike</button>
      </div>
    </div>
  );
};

export default Card;
