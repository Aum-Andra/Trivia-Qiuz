import "./App.css";
import { useState } from "react";

function App() {
  const [results, setResults] = useState(false);
  const [currentQusetion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  const questions = [
    {
      text: "Which is the only edible food that never goes bad?",
      options: [
        { id: 0, text: "Nuts", isCorrect: false },
        { id: 1, text: "Rice", isCorrect: false },
        { id: 2, text: "Oats", isCorrect: false },
        { id: 3, text: "Honey", isCorrect: true },
      ],
    },
    {
      text: "What countries made up the original Axis powers in World War II?",
      options: [
        { id: 0, text: "Germany,Russia and Japan", isCorrect: false },
        { id: 1, text: "France,Belgium and Netherdals", isCorrect: false },
        { id: 2, text: "Germany, Italy, and Japan", isCorrect: true },
        { id: 3, text: "China,Uk,Russia,USA and Canada", isCorrect: false },
      ],
    },
    {
      text: "What is the name of the biggest technology company in South Korea?",
      options: [
        { id: 0, text: "Samsung", isCorrect: true },
        { id: 1, text: "Hyundai", isCorrect: false },
        { id: 2, text: "LG", isCorrect: false },
        { id: 3, text: "SAMSUNG BIOLOGICS", isCorrect: false },
      ],
    },
    {
      text: "Who was the first woman to win a Nobel Prize (in 1903)?",
      options: [
        { id: 0, text: "Andrea Ghez", isCorrect: false },
        { id: 1, text: "Marie Curie", isCorrect: true },
        { id: 2, text: "Maria Ressa", isCorrect: false },
        { id: 3, text: "Donna Strickland", isCorrect: false },
      ],
    },
    {
      text: "What was the first soft drink in space?",
      options: [
        { id: 0, text: "Adria Cola", isCorrect: false },
        { id: 1, text: "Sprite", isCorrect: false },
        { id: 2, text: "Fanta", isCorrect: false },
        { id: 3, text: "Coca Cola", isCorrect: true },
      ],
    },
  ];

  const handleClick = (id) => {
    if (questions[currentQusetion].options[id].isCorrect == true) {
      setScore(score + 1);
    } else {
      setScore(score);
    }

    if (currentQusetion + 1 < questions.length) {
      setCurrentQuestion(currentQusetion + 1);
    } else {
      setResults(true);
    }
  };

  const handlePlayAgain = () => {
    setResults(false);
    setCurrentQuestion(0);
    setScore(0);
  };

  return (
    <div className="App">
      <div className="quiz-app">
        <h1>Trivia Quiz </h1>
        <h3>Current Score: {score}</h3>

        {results === false ? (
          <div className="question">
            <h3>
              Question:{currentQusetion + 1} out of {questions.length}
            </h3>
            <h2>{questions[currentQusetion].text}</h2>
            {questions[currentQusetion].options.map((option) => (
              <li
                onClick={() => handleClick(option.id)}
                className="option"
                key={option.id}
              >
                {option.text}
              </li>
            ))}
          </div>
        ) : (
          <div className="final-score">
            <h3>You answered correctly {score} out of 5 questions</h3>
            <h1>Your score is {score * 20}%</h1>
            <button onClick={handlePlayAgain} className="btn">
              Play again
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
