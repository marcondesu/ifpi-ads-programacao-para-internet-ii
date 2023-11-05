import React from 'react';
import Card from './Card';
import styles from '../styles/CardComponent.module.css';

export type CardData = {
  id: number;
  title: string;
  likes: number;
  dislikes: number;
};

type CardComponentProps = {
  cards: CardData[];
  setCards: React.Dispatch<React.SetStateAction<CardData[]>>;
};

const CardComponent: React.FC<CardComponentProps> = ({ cards, setCards }) => {
  const handleLike = (cardId: number) => {
    setCards((prevCards) =>
      prevCards.map((card) =>
        card.id === cardId ? { ...card, likes: card.likes + 1 } : card
      )
    );
  };

  const handleDislike = (cardId: number) => {
    setCards((prevCards) =>
      prevCards.map((card) =>
        card.id === cardId ? { ...card, dislikes: card.dislikes + 1 } : card
      )
    );
  };

  return (
    <div className={styles.cardContainer}>
      {cards.map((card) => (
        <Card
          key={card.id}
          card={card}
          onLike={() => handleLike(card.id)}
          onDislike={() => handleDislike(card.id)}
        />
      ))}
    </div>
  );
};

export default CardComponent;
