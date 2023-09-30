import React, { useState } from "react";

const Flashcard = () => {
  // Initialize the state to be 'question' because the flashcard is displaying traffic signs
  const [cardMode, setCardMode] = useState('question');

  // Function to toggle card mode between 'question' and 'answer'
  const updateCard = () => {
    setCardMode(cardMode === 'question' ? 'answer' : 'question');
  };

  return (
    <div className="flashcard-container">
      <div className="flashcards" onClick={updateCard}>
        {cardMode === 'question' ? (
          <img className="traffic-sign" src="/img/stop-sign.png" alt="Stop Sign"/>
        ) : (
          <p className="answer">Stop Sign</p>
        )}
      </div>
    </div>
  );
}

export default Flashcard;
