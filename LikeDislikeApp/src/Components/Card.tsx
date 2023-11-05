import React from 'react'
import '../styles/Card.css'

type CardProps = {
  title: string
  likes: number
  dislikes: number
  onLike: () => void
  onDislike: () => void
}

const Card: React.FC<CardProps> = ({ title, likes, dislikes, onLike, onDislike }) => {
    return (
      <div className="card">
        <span>"{title}"</span>
        <div className="like-dislike">
          <button onClick={onLike}>Like</button>
          <span>{likes - dislikes}</span>
          <button onClick={onDislike}>Dislike</button>
        </div>
      </div>
    );
};

export default Card
