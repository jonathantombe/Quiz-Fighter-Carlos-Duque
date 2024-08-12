import React, { useState } from 'react';
import Character from './components/Character/Character';
import Question from './components/Question/Question';
import Result from './components/Result/Result';
import './App.css';

const App = () => {
  const [playerHealth, setPlayerHealth] = useState(100);
  const [opponentHealth, setOpponentHealth] = useState(100);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [winner, setWinner] = useState(null);

  const questions = [
    {
      question: "¿Cuál es la capital de Francia?",
      options: ["París", "Londres", "Berlín", "Madrid"],
      answer: "París"
    },
    {
      question: "¿Cuánto es 2 + 2?",
      options: ["3", "4", "5", "6"],
      answer: "4"
    },
    {
      question: "¿Cuál es el río más largo del mundo?",
      options: ["Nilo", "Amazonas", "Yangtsé", "Misisipi"],
      answer: "Amazonas"
    },
    {
      question: "¿Quién pintó la Mona Lisa?",
      options: ["Leonardo da Vinci", "Pablo Picasso", "Vincent van Gogh", "Claude Monet"],
      answer: "Leonardo da Vinci"
    },
    {
      question: "¿En qué año llegó el hombre a la Luna?",
      options: ["1969", "1975", "1965", "1980"],
      answer: "1969"
    }
  ];

  const handleAnswer = (answer) => {
    const correctAnswer = questions[questionIndex].answer;
    if (answer === correctAnswer) {
      setOpponentHealth(prev => Math.max(prev - 20, 0));
    } else {
      setPlayerHealth(prev => Math.max(prev - 20, 0));
    }

    if (playerHealth <= 0) {
      setWinner('Oponente');
    } else if (opponentHealth <= 0) {
      setWinner('Jugador');
    } else {
      setQuestionIndex(prev => (prev + 1) % questions.length);
    }
  };

  return (
    <div className="app-container">
      <div className="characters-container">
        <Character name="Jugador" health={playerHealth} />
        <Character name="Oponente" health={opponentHealth} />
      </div>
      {winner === null ? (
        <>
          <Question
            question={questions[questionIndex].question}
            options={questions[questionIndex].options}
            onAnswer={handleAnswer}
          />
          <button
            onClick={() => setQuestionIndex((questionIndex + 1) % questions.length)}
            className="next-question-button"
          >
            Siguiente Pregunta
          </button>
        </>
      ) : (
        <Result winner={winner} />
      )}
    </div>
  );
};

export default App;
