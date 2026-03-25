import React, { useState } from 'react';
import { questions, kcs } from '../data/questions';
import { updateMastery } from '../utils/bktEngine';

function QuizPage() {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [mastery, setMastery] = useState(0.40); // Starting with KC11 pL0

  const handleAnswer = (selected) => {
    const isCorrect = selected === questions[currentIdx].answer;
    const kcParam = kcs[questions[currentIdx].kc] || kcs.KC11;
    
    const newMastery = updateMastery(mastery, isCorrect, kcParam);
    setMastery(newMastery);
    
    alert(isCorrect ? "Correct!" : "Incorrect. Check the hints.");
    setCurrentIdx(currentIdx + 1);
  };

  return (
    <div className="quiz-container">
      <h2>Mastery: {(mastery * 100).toFixed(1)}%</h2>
      <p>{questions[currentIdx].text}</p>
      {questions[currentIdx].options.map(opt => (
        <button key={opt} onClick={() => handleAnswer(opt)}>{opt}</button>
      ))}
    </div>
  );
}

export default QuizPage;