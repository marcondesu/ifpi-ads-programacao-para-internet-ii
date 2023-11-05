import React, { useState } from 'react';
import CardComponent, { CardData } from './Components/CardComponent';
import CreateCardButton from './Components/CreateCardButton';
import styles from './styles/App.module.css'

const App: React.FC = () => {
  const [cards, setCards] = useState<CardData[]>([]);

  const handleCreateCard = (newCard: CardData) => {
    setCards([...cards, newCard]);
  };

  return (
    <div className={styles.app}>
      <div className={styles.title}>
        <h1>Like/Dislike App</h1>
      </div>
      <div className={styles.cards}>
        <CreateCardButton onCreateCard={handleCreateCard} />
        <CardComponent cards={cards} setCards={setCards} />
      </div>
    </div>
  );
  
};

export default App;
