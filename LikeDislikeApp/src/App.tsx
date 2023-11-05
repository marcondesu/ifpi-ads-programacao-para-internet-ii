import React, { useState } from 'react';
import CardComponent, { CardData } from './Components/CardComponent';
import CreateCardButton from './Components/CreateCardButton';

const App: React.FC = () => {
  const [cards, setCards] = useState<CardData[]>([]);

  const handleCreateCard = (newCard: CardData) => {
    setCards([...cards, newCard]);
  };

  return (
    <div className="App">
      <h1>Card Component Example</h1>
      <CreateCardButton onCreateCard={handleCreateCard} />

      <CardComponent cards={cards} setCards={setCards} />
    </div>
  );
};

export default App;
