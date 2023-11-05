import React, { useState } from 'react';
import styles from '../styles/CreateCardButton.module.css'
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
    <form onSubmit={handleCreateCardClick} className={styles.form}>
      <input
        type="text"
        placeholder="Título do Card"
        value={title}
        onChange={handleTitleChange}
        className={styles.input}
      />
      <button type="submit" className={styles.button}>
        Criar Card
      </button>
    </form>
  );
};

export default CreateCardButton;
