import React, { useState, useEffect } from 'react';
import './App.css';
import { kcs } from './data/domain';
import { updateMastery } from './utils/bktEngine';
import { getNextAction, selectQuestion } from './utils/pedagogy';

function App() {
  const [viewMode, setViewMode] = useState('LEARNING'); 
  const [attempts, setAttempts] = useState(0);
  const [session, setSession] = useState({
    currentSubtopic: "KC1",
    currentSubskill: "KC11",
    mastery: 0.40,
    usedQuestions: [],
    consecutiveCorrect: 0,
    lastResponseCorrect: true,
  });

  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [feedback, setFeedback] = useState("");
  const activeSubtopic = kcs[session.currentSubtopic];

  const startQuiz = () => {
    const q = selectQuestion(session.currentSubskill, "easy", session.usedQuestions);
    setCurrentQuestion(q);
    setViewMode('QUIZ');
  };

  const handleAnswer = (selected) => {
    const isCorrect = selected === currentQuestion.answer;
    
    if (!isCorrect) {
      const nextAttempt = attempts + 1;
      setAttempts(nextAttempt);
      if (nextAttempt >= 3) {
        setFeedback("Maximum attempts reached. Let's review the content.");
        setAttempts(0);
        setViewMode('LEARNING'); // Loop prevention [cite: 1284]
        return;
      }
    } else {
      setAttempts(0);
    }

    const nextMastery = updateMastery(session.mastery, isCorrect, session.currentSubtopic, session.currentSubskill);
    const updatedSession = {
      ...session,
      mastery: nextMastery,
      lastResponseCorrect: isCorrect,
      consecutiveCorrect: isCorrect ? session.consecutiveCorrect + 1 : 0,
      usedQuestions: [...session.usedQuestions, currentQuestion.id],
    };

    const action = getNextAction(updatedSession);

    if (action.type === 'ADVANCE_KC') {
      const nextSubtopicId = `KC${parseInt(session.currentSubtopic.replace('KC','')) + 1}`;
      if (!kcs[nextSubtopicId]) {
        alert("Course Completed!");
        return;
      }
      const firstSkill = Object.keys(kcs[nextSubtopicId].subskills)[0];
      setSession({ ...updatedSession, currentSubtopic: nextSubtopicId, currentSubskill: firstSkill, mastery: kcs[nextSubtopicId].subskills[firstSkill].pL0, consecutiveCorrect: 0 });
      setViewMode('LEARNING');
    } else {
      const nextQ = selectQuestion(session.currentSubskill, action.payload.difficulty, updatedSession.usedQuestions);
      setCurrentQuestion(nextQ);
      setSession(updatedSession);
      setFeedback(action.message);
    }
  };

  return (
    <div className="app-container">
      <header className="header">
        <h1>{activeSubtopic.title}</h1>
        <div className="stats-bar">
          <span>Mastery: {(session.mastery * 100).toFixed(1)}%</span>
        </div>
      </header>

      {viewMode === 'LEARNING' ? (
        <div className="quiz-card">
          <section className="learning-section">
            <h2>Motivation</h2><p>{activeSubtopic.motivation}</p>
            <h2>Concept</h2><div className="content-box">{activeSubtopic.content}</div>
            <button className="option-btn primary" onClick={startQuiz}>Start Assessment</button>
          </section>
        </div>
      ) : (
        <div className="quiz-card">
          <div className="status-message">{feedback}</div>
          <h2 className="question-text">{currentQuestion?.text}</h2>
          <div className="options-grid">
            {currentQuestion?.options.map(opt => (
              <button key={opt} className="option-btn" onClick={() => handleAnswer(opt)}>{opt}</button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;