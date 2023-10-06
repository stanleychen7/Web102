import React, { useState } from "react";


const Flashcard = () => {
  // Array of questions and answers with images
  const flashcards = [
    {
      question: <img className="traffic-sign" src="/img/stop-sign.png" alt="Stop Sign" />,
      answer: <p className="answer">Stop Sign</p>,
      check_answer: "Stop Sign"
    },
    {
      question: <img className="traffic-sign" src="/img/yield.png" alt="Yield Sign" />,
      answer: <p className="answer">Yield</p>,
      check_answer: "Yield"
    },
    {
      question: <img className="traffic-sign" src="/img/traffic-light.png" alt="Traffic light Sign" />,
      answer: <p className="answer">Traffic Light</p>,
      check_answer: "Traffic Light"
    },
    {
        question: <img className= "traffic-sign" src="/img/divided-highway-end.png" alt= "Divided Highway End"/>,
        answer: <p className="answer">Divided Highway Ends</p>,
        check_answer: "Divided Highway Ends"
    },
    {
        question: <img className= "traffic-sign" src="/img/divider.png" alt= "Divider"/>,
        answer: <p className="answer">Divider</p>,
        check_answer: "Divider"
    },
    {
        question: <img className="traffic-sign" src="/img/do-not-enter.png" alt="Do not enter"/>,
        answer: <p className="answer">Do not enter</p>,
        check_answer: "Do Not Enter"
    },
    {
        question: <img className="traffic-sign" src="/img/hill-ahead.png" alt="Hill ahead"/>,
        answer: <p className="answer">Hill ahead</p>,
        check_answer: "Hill Ahead"
    },
    {
        question: <img className= "traffic-sign" src="/img/hospital.png" alt="Hospital Sign"/>,
        answer: <p className="answer">Hospital</p>,
        check_answer: "Hospital"
    },
    {
        question: <img className="traffic-sign" src="/img/lane-ends.png" alt="Lane ends"/>,
        answer: <p className="answer">Lane ends</p>,
        check_answer: "Traffic Light"
    },
    {
        question: <img className="traffic-sign" src="/img/merge.png" alt="Merge"/>,
        answer: <p className="answer">Merge</p>,
        check_answer: "Merge"
    },
    {
        question: <img className="traffic-sign" src="/img/no-left-turn.png" alt="No left turn"/>,
        answer: <p className="answer">No left turn</p>,
        check_answer: "No Left Turn"
    },
    {
        question: <img className="traffic-sign" src="/img/no-uturn.png" alt="No U-Turn"/>,
        answer: <p className="answer">No U-Turn</p>,
        check_answer: "No U-Turn"
    },
    {
        question: <img className="traffic-sign" src="/img/railroad-crossing.png" alt="Railroad crossing"/>,
        answer: <p className="answer">Railroad Crossing</p>,
        check_answer: "Railroad Crossing"
    },
    {
        question: <img className="traffic-sign" src="/img/school-crossing.png" alt="School Crossing"/>,
        answer: <p className="answer">School Crossing</p>,
        check_answer: "School Crossing"
    },
    {
        question: <img className="traffic-sign" src="/img/slippery-road.png" alt="Slipper Road"/>,
        answer: <p className="answer">Slippery Road</p>,
        check_answer: "Slippery Road"
    },
    {
        question: <img className="traffic-sign" src="/img/two-way-traffic.png" alt="Two Way Traffic"/>,
        answer: <p className="answer">Two Way Traffic</p>,
        check_answer: "Two Way Traffic"
    },

  ];

  // Generate the random card
  const [currentCardIndex, setCardIndex] = useState(0);

  //Get the index for the previous card
  const prevCard = () => {
    if(currentCardIndex > 0) {
      const prevIndex = currentCardIndex - 1;
      setCardIndex(prevIndex);
    } 
  }

  //Get the index for the next card
  const nextCard = () => {
    if (currentCardIndex < (flashcards.length - 1)) {
      const nextIndex = currentCardIndex + 1;
      setCardIndex(nextIndex)
    }
  }

  const currentFlashcard = flashcards[currentCardIndex];

  // Initialize the state to be 'question' because the flashcard is displaying traffic signs
  const [cardMode, setCardMode] = useState('question');

  // Function to toggle card mode between 'question' and 'answer'
  const updateCard = () => {
    setCardMode(cardMode === 'question' ? 'answer' : 'question');
  };

  //Submit form
  const [userAnswer, setUserAnswer] = useState('');

  const handleAnswer = (e) => {
    setUserAnswer(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  }
  const[numCorrect, setNumCorrect] = useState(0);

  const checkAnswer = () => {
    if(userAnswer.toLowerCase() === currentFlashcard.check_answer.toLowerCase()) {
      setNumCorrect(numCorrect+1);
    }
  };



  return (
    <div className="Flashcard">
      <h2>Correct: {numCorrect}</h2>
      <div className="flashcard-container">
        <div className="flashcards" onClick={updateCard}>
          {cardMode === 'question' ? (
            currentFlashcard.question
          ) : (
            currentFlashcard.answer
          )}
        </div>
      </div>
      <div className="buttons-container">
        <button class= "btn prev-Button" onClick={prevCard}>←</button>
        <button class="btn next-Button" onClick={nextCard}>→</button>
      </div>
      <form onSubmit={handleSubmit}>
          <label>Answer: </label>
          <input type="text" id="userAnswer" value={userAnswer} onChange={handleAnswer}/>
        </form>
        <button type="submit" className="submit-button" onClick={checkAnswer}>Submit</button>
    </div>  
  );
};

export default Flashcard;
