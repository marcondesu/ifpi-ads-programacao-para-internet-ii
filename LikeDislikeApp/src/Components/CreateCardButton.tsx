import React, { useState } from 'react';
import { CardData } from './CardComponent';

type CreateCardButtonProps = {
  onCreateCard: (newCard: CardData) => void;
};

const CreateCardButton: React.FC<CreateCardButtonProps> = ({ onCreateCard }) => {
  const [title, setTitle] = useState(''); // estado para o título do card

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleCreateCardClick = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // evitar o comportamento padrão do formulário

    const newCard: CardData = {
      id: 0, // defina um ID apropriado para o novo card
      title: title, // usa o título inserido no input
      likes: 0,
      dislikes: 0,
    };

    onCreateCard(newCard); // chama a função onCreateCard passando o novo card
  };

  return (
    <form onSubmit={handleCreateCardClick}>
      <input
        type="text"
        placeholder="Título do Card"
        value={title}
        onChange={handleTitleChange}
      />
      <button type="submit">Criar Card</button>
    </form>
  );
};

export default CreateCardButton;
