import React, { useState } from "react";

const Flashcard = () => {
  // Array of questions and answers with images
  const flashcards = [
    {
      question: <img className="traffic-sign" src="/img/stop-sign.png" alt="Stop Sign" />,
      answer: <p className="answer">Stop Sign</p>,
    },
    {
      question: <img className="traffic-sign" src="/img/yield.png" alt="Yield Sign" />,
      answer: <p className="answer">Yield</p>,
    },
    {
      question: <img className="traffic-sign" src="/img/traffic-light.png" alt="Traffic light Sign" />,
      answer: <p className="answer">Traffic Light</p>,
    },
    {
        question: <img className= "traffic-sign" src="/img/divided-highway-end.png" alt= "Divided Highway End"/>,
        answer: <p className="answer">Divided Highway Ends</p>
    },
    {
        question: <img className= "traffic-sign" src="/img/divider.png" alt= "Divider"/>,
        answer: <p className="answer">Divider</p>
    },
    {
        question: <img className="traffic-sign" src="/img/do-not-enter.png" alt="Do not enter"/>,
        answer: <p className="answer">Do not enter</p>
    },
    {
        question: <img className="traffic-sign" src="/img/hill-ahead.png" alt="Hill ahead"/>,
        answer: <p className="answer">Hill ahead</p>
    },
    {
        question: <img className= "traffic-sign" src="/img/hospital.png" alt="Hospital Sign"/>,
        answer: <p className="answer">Hospital</p>
    },
    {
        question: <img className="traffic-sign" src="/img/lane-ends.png" alt="Lane ends"/>,
        answer: <p className="answer">Lane ends</p>
    },
    {
        question: <img className="traffic-sign" src="/img/merge.png" alt="Merge"/>,
        answer: <p className="answer">Merge</p>
    },
    {
        question: <img className="traffic-sign" src="/img/no-left-turn.png" alt="No left turn"/>,
        answer: <p className="answer">No left turn</p>
    },
    {
        question: <img className="traffic-sign" src="/img/no-uturn.png" alt="No U-Turn"/>,
        answer: <p className="answer">No U-Turn</p>
    },
    {
        question: <img className="traffic-sign" src="/img/railroad-crossing.png" alt="Railroad crossing"/>,
        answer: <p className="answer">Railroad Crossing</p>
    },
    {
        question: <img className="traffic-sign" src="/img/school-crossing.png" alt="School Crossing"/>,
        answer: <p className="answer">School Acrossing</p>
    },
    {
        question: <img className="traffic-sign" src="/img/slippery-road.png" alt="Slipper Road"/>,
        answer: <p className="answer">Slippery Road</p>
    },
    {
        question: <img className="traffic-sign" src="/img/two-way-traffic.png" alt="Two Way Traffic"/>,
        answer: <p className="answer">Two Way Traffic</p>
    },

  ];

  // Generate the random card
  const [currentCardIndex, setCardIndex] = useState(0);

  const randomCard = () => {
    const randomIndex = Math.floor(Math.random() * flashcards.length);
    setCardIndex(randomIndex);
  };

  const currentFlashcard = flashcards[currentCardIndex];

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
          currentFlashcard.question
        ) : (
          currentFlashcard.answer
        )}
      </div>
      <button class="randomButton" onClick={randomCard}>Next</button>
    </div>
  );
};

export default Flashcard;
