import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { updateMastery, calculateLearnerState } from './utils/bktEngine';
import { getNextPedAction } from './utils/pedagogy';
import './App.css';

const API_BASE = "https://et605-backend.onrender.com/api";

const MISCONCEPTION_LIBRARY = {
  "M1": { title: "Base vs Exponent", review: "Pari says: 'Look closely! The base is the big number on the ground—it's the one being multiplied. The exponent is the small number on top!'" },
  "M2": { title: "Multiplication vs Power", review: "Roohi warns: 3⁴ is NOT 3 × 4. It means 3 × 3 × 3 × 3. Exponents are repeated multiplication!" },
  "M3": { title: "Zero Exponent Rule", review: "Any non-zero number to the power 0 becomes 1. Think: aᵐ ÷ aᵐ = 1, so a⁰ = 1." },
  "M4": { title: "Incomplete Expansion", review: "Roohi says: 'Don’t stop halfway! 2³ means 2 × 2 × 2 (which is 8). Count how many times the base repeats!'" },
  "M5": { title: "Even Exponent Sign", review: "Even exponents mean negatives cancel out! (-2) × (-2) = +4. Even powers always result in positive!" },
  "M6": { title: "The Bracket Trap", review: "(-3)² = 9 but -3² = -9. Brackets decide if the minus is part of the base or just sitting outside.'" },
  "M23": { title: "Decimal Placement", review: "Check your zeros! When multiplying by 10ⁿ, the decimal moves n places to the right. Count the jumps!" }
};


const TOPIC_STRUCTURE = [
  { parent: "KC1", title: "Unit 1: Large Numbers", subs: ["KC11", "KC12", "KC13", "KC14", "KC15"], subTitles: { "KC11": "Identify Base & Exponent", "KC12": "Repeated Multiplication", "KC13": "Expansion", "KC14": "Finding Value", "KC15": "Prime Powers" } },
  { parent: "KC2", title: "Unit 2: Negative Bases", subs: ["KC21", "KC22", "KC23", "KC24"], subTitles: { "KC21": "Negative Powers", "KC22": "Determining Sign", "KC23": "Variable Products", "KC24": "The Bracket Trap" } },
  { parent: "KC3", title: "Unit 3: Same Base Laws", subs: ["KC31", "KC32", "KC33", "KC34"], subTitles: { "KC31": "Multiplication Law", "KC32": "Division Law", "KC33": "Power of a Power", "KC34": "Mixed Operations" } },
  { parent: "KC4", title: "Unit 4: Different Bases", subs: ["KC41", "KC42", "KC43", "KC44"], subTitles: { "KC41": "Bases Multiply", "KC42": "Bases Divide", "KC43": "Zero Exponent", "KC44": "Combining Groups" } },
  { parent: "KC5", title: "Unit 5: Standard Form", subs: ["KC51", "KC52", "KC53", "KC54"], subTitles: { "KC51": "Anatomy of SF", "KC52": "Large Numbers", "KC53": "Comparing", "KC54": "Interpreting" } }
];


function App() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const questionStartTime = useRef(null);
  const sessionStartTimestamp = useRef(Date.now());
  const askedQuestionsRef = useRef([]); 
// Add these to your state declarations
const [timeLeft, setTimeLeft] = useState(null);
const timerRef = useRef(null);

const DIFFICULTY_TIMES = {
  'easy': 30,
  'medium': 60,
  'hard': 90,
  'very difficult': 120
};
  const [sessionInfo] = useState({
    student_id: searchParams.get('student_id') || "22B0069", 
    chapter_id: "grade7_exponents_and_powers",
    session_id: `SESS_${Math.random().toString(36).substr(2, 9).toUpperCase()}`,
    startTime: new Date().toISOString()
  });

  const [kcMasteryMap, setKcMasteryMap] = useState({
    KC11: 0.40, KC12: 0.35, KC13: 0.30, KC14: 0.30, KC15: 0.25,
    KC21: 0.20, KC22: 0.20, KC23: 0.25, KC24: 0.15,
    KC31: 0.25, KC32: 0.20, KC33: 0.20, KC34: 0.20,
    KC41: 0.15, KC42: 0.15, KC43: 0.10, KC44: 0.15,
    KC51: 0.20, KC52: 0.20, KC53: 0.15, KC54: 0.20
  });

  const [session, setSession] = useState({
    currentTopicIndex: 0,
    currentSubIndex: -1, 
    difficulty: 'easy',
    correct_answers: 0,
    wrong_answers: 0,
    retry_count: 0,
    hints_used_total: 0,
    usedQuestions: []
  });

  const [viewMode, setViewMode] = useState('MOTIVATION');
  const [exampleIndex, setExampleIndex] = useState(0); 
  const [activeKCData, setActiveKCData] = useState(null);
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [activeHints, setActiveHints] = useState([]);
  const [showCorrectAns, setShowCorrectAns] = useState(false);
  const [selectedWrong, setSelectedWrong] = useState([]); 
  const [isResolved, setIsResolved] = useState(false); 
  const [feedback, setFeedback] = useState(null);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [showExitModal, setShowExitModal] = useState(false);
  const [activeMisconception, setActiveMisconception] = useState(null);

  async function fetchNextQuestion(subtopicId, difficulty) {
    try {
      setCurrentQuestion(null);
      const res = await fetch(`${API_BASE}/questions/${subtopicId}/${difficulty}`);
      const questions = await res.json();
      const available = questions.filter(q => !askedQuestionsRef.current.includes(q._id));
      
      const nextQ = available.length > 0 ? available[0] : questions[0];
      setCurrentQuestion(nextQ);
      setShowCorrectAns(false); 
      setSelectedWrong([]); 
      setIsResolved(false); 
      setActiveHints([]); 
      setFeedback(null); 
      setActiveMisconception(null);
      questionStartTime.current = Date.now();
    } catch (e) { console.error("Fetch Error", e); }
  }

  const submitFinalPayload = async (status, finalMastery) => {
    const timeSpent = Math.floor((Date.now() - sessionStartTimestamp.current) / 1000);
    const completionRatio = status === 'completed' ? 1.0 : parseFloat((session.currentTopicIndex / 5).toFixed(2));

    const payload = {
      ...sessionInfo,
      timestamp: new Date().toISOString(),
      session_status: status,
      correct_answers: session.correct_answers,
      wrong_answers: session.wrong_answers,
      questions_attempted: askedQuestionsRef.current.length,
      total_questions: 22,
      retry_count: session.retry_count,
      hints_used: session.hints_used_total,
      total_hints_embedded: 66,
      time_spent_seconds: timeSpent,
      topic_completion_ratio: completionRatio,
      p_l_post: finalMastery ?? null
    };

    try {
      await fetch(`${API_BASE}/log-session`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      localStorage.removeItem('failed_session_retry');
    } catch (e) {
      localStorage.setItem('failed_session_retry', JSON.stringify(payload));
    }
    navigate('/exit', { state: payload });
  };

  const handleNextQuestion = async () => {
    try {
      if (!currentQuestion) return;
      const currentKC = currentQuestion.kc_id;
      if (!askedQuestionsRef.current.includes(currentQuestion._id)) {
          askedQuestionsRef.current.push(currentQuestion._id);
      }

      const timeTaken = Date.now() - (questionStartTime.current || Date.now());
      const rt_norm = Math.min(timeTaken / 30000, 2); 
      const isCorrectFirstTry = !showCorrectAns && selectedWrong.length === 0 && activeHints.length === 0;

      const nextKCMastery = updateMastery(kcMasteryMap[currentKC], isCorrectFirstTry ? 1.0 : 0.0, currentKC);
      setKcMasteryMap(prev => ({ ...prev, [currentKC]: nextKCMastery }));

      let history = [];
      try {
        const hRes = await fetch(`${API_BASE}/history/${sessionInfo.student_id}/${currentKC}`);
        const rawHistory = await hRes.json();
        history = [{ is_correct: isCorrectFirstTry ? 1 : 0, rt_norm, hints_used: activeHints.length }, ...rawHistory].slice(0, 5);
      } catch (e) { history = []; }

      const state = calculateLearnerState(history, nextKCMastery);
      let decision = getNextPedAction(state);

      const currentSubKCCount = session.usedQuestions.length + 1;
      if (decision.type === 'ADVANCE' && currentSubKCCount < 5) decision = { type: 'PRACTICE', difficulty: 'hard' };
      if (currentSubKCCount >= 15 && decision.type !== 'ADVANCE') decision = { type: 'REMEDIAL' };

      setSession(prev => ({
        ...prev,
        correct_answers: prev.correct_answers + (isCorrectFirstTry ? 1 : 0),
        wrong_answers: prev.wrong_answers + (isCorrectFirstTry ? 0 : 1),
        retry_count: prev.retry_count + (selectedWrong.length > 0 ? 1 : 0),
        hints_used_total: prev.hints_used_total + activeHints.length,
        usedQuestions: [...prev.usedQuestions, currentQuestion._id]
      }));

      if (decision.type === 'ADVANCE') {
        const isLastSub = session.currentSubIndex === TOPIC_STRUCTURE[session.currentTopicIndex].subs.length - 1;
        if (isLastSub) {
          if (session.currentTopicIndex === 4) submitFinalPayload('completed', nextKCMastery);
          else setSession(prev => ({ ...prev, currentTopicIndex: prev.currentTopicIndex + 1, currentSubIndex: -1, usedQuestions: [] }));
        } else {
          setSession(prev => ({ ...prev, currentSubIndex: prev.currentSubIndex + 1, usedQuestions: [] }));
        }
      } else if (decision.type === 'REMEDIAL') {
        setFeedback("Reviewing theory...");
        setTimeout(() => setViewMode('CONTENT'), 2000);
      } else {
        fetchNextQuestion(currentKC, decision.difficulty);
      }
    } catch (err) {
      console.error(err);
      fetchNextQuestion(currentQuestion?.kc_id || "KC11", 'easy');
    }
  };
  useEffect(() => {
    // Clear any existing timer when a question changes
    if (timerRef.current) clearInterval(timerRef.current);
  
    if (viewMode === 'QUIZ' && currentQuestion && !isResolved) {
      const limit = DIFFICULTY_TIMES[currentQuestion.difficulty] || 60;
      setTimeLeft(limit);
  
      timerRef.current = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            clearInterval(timerRef.current);
            handleTimerExpiry(); // Reveal answer when time is up
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
  
    return () => clearInterval(timerRef.current);
  }, [currentQuestion, viewMode, isResolved]);
  
  const handleTimerExpiry = () => {
    setFeedback('timeout');
    setIsResolved(true);
    setShowCorrectAns(true);
  };

  useEffect(() => {
    let targetId;
    const isParent = session.currentSubIndex === -1;
    targetId = isParent ? TOPIC_STRUCTURE[session.currentTopicIndex].parent : TOPIC_STRUCTURE[session.currentTopicIndex].subs[session.currentSubIndex];
    fetch(`${API_BASE}/content/${targetId}`).then(res => res.json()).then(data => {
      setActiveKCData(data);
      setViewMode(isParent ? 'MOTIVATION' : 'CONTENT');
    });
  }, [session.currentTopicIndex, session.currentSubIndex]);

  const handleAnswer = (opt) => {
    if (isResolved || !currentQuestion) return;
    if (opt === currentQuestion.answer) { 
        clearInterval(timerRef.current);
        setFeedback('correct'); 
        setIsResolved(true); 
        setActiveMisconception(null);
    } else { 
        setSelectedWrong(p => [...p, opt]); 
        setFeedback('wrong'); 

        const trigger = currentQuestion.misconception_map?.find(m => m.option === opt);
        if (trigger && MISCONCEPTION_LIBRARY[trigger.misconception_id]) {
          setActiveMisconception(MISCONCEPTION_LIBRARY[trigger.misconception_id]);
        } else {
          setTimeout(() => setFeedback(null), 800); 
        }
    }
  };

  const handleHintOrReveal = () => {
    if (!currentQuestion) return;
    if (activeHints.length < 3) {
      const h = currentQuestion.hints[activeHints.length];
      setActiveHints([...activeHints, h]);
    } else { setShowCorrectAns(true); setIsResolved(true); }
  };

  const handleListen = (text) => {
    if (isSpeaking) { window.speechSynthesis.cancel(); setIsSpeaking(false); return; }
    setIsSpeaking(true);
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.onend = () => setIsSpeaking(false);
    window.speechSynthesis.speak(utterance);
  };
  const handleFlowNext = () => {
    if (viewMode === 'MOTIVATION') {
      setViewMode('CONTENT');
    } else if (viewMode === 'CONTENT') {
      if (activeKCData?.worked_examples?.length > 0) {
        setExampleIndex(0);
        setViewMode('WORKED_EXAMPLE');
      } else {
        startQuiz();
      }
    } else if (viewMode === 'WORKED_EXAMPLE') {
      if (exampleIndex < activeKCData.worked_examples.length - 1) {
        setExampleIndex(prev => prev + 1);
      } else {
        startQuiz();
      }
    }
  };

  const startQuiz = () => {
    const currentSubKC = TOPIC_STRUCTURE[session.currentTopicIndex].subs[session.currentSubIndex] || "KC11";
    fetchNextQuestion(currentSubKC, 'easy');
    setViewMode('QUIZ');
  };

  return (
    <div className="dashboard-layout">
      {showExitModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h3>Pause your progress?</h3>
            <div className="modal-actions">
              <button className="btn-stay" onClick={() => setShowExitModal(false)}>Keep Learning</button>
              <button className="btn-exit" onClick={() => submitFinalPayload('exited_midway', kcMasteryMap[currentQuestion?.kc_id])}>Exit Session</button>
            </div>
          </div>
        </div>
      )}

      {activeMisconception && (
        <div className="modal-overlay character-modal">
          <div className="modal-content animate-pop purple-gradient-border">
            <div className="character-header">
              <div className="character-avatar">🧐</div>
              <div>
                <h3>Wait a second!</h3>
                <div className="misconception-label">{activeMisconception.title}</div>
              </div>
            </div>
            <p className="review-text">{activeMisconception.review}</p>
            <button className="cta-btn full-width" onClick={() => { setActiveMisconception(null); setFeedback(null); }}>
              Got it, let me try again!
            </button>
          </div>
        </div>
      )}

      <aside className="sidebar">
        <div className="logo-section"><h2>EdBuddy <span>ExpoTutor</span></h2></div>
        <nav className="nav-menu">
          {TOPIC_STRUCTURE.map((topic, pIdx) => (
            <div key={topic.parent} className="nav-group">
              <div className={`nav-item parent ${session.currentTopicIndex === pIdx ? 'active' : ''}`}>
                <span className="step-num">{pIdx + 1}</span><span className="step-label">{topic.title}</span>
              </div>
              {(session.currentTopicIndex === pIdx || pIdx < session.currentTopicIndex) && (
                <div className="sub-menu">
                  {topic.subs.map((sub, sIdx) => {
                    const mVal = kcMasteryMap[sub] || 0;
                    const st = (pIdx < session.currentTopicIndex || (pIdx === session.currentTopicIndex && sIdx < session.currentSubIndex)) ? 'completed' : (sIdx === session.currentSubIndex ? 'current' : 'locked');
                    return (
                      <div key={sub} className={`sub-item-container ${st}`}>
                        <div className="sub-item"><span className="sub-dot"></span>{TOPIC_STRUCTURE[pIdx].subTitles[sub]}</div>
                        <div className="side-mastery-track"><div className="side-mastery-fill" style={{ width: `${mVal * 100}%`, background: mVal > 0.8 ? '#3fb950' : '#4e54c8' }}></div></div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          ))}
          <button className="exit-btn-nav" onClick={() => setShowExitModal(true)}>✕ Exit Session</button>
        </nav>
      </aside>

      <main className="main-viewport">
        <header className="top-nav">
          <div className="mastery-indicator">
            <label>Mastery: {currentQuestion?.kc_id || 'Focus'}</label>
            <div className="progress-track"><div className="progress-fill" style={{ width: `${(kcMasteryMap[currentQuestion?.kc_id] || 0.4) * 100}%` }}></div></div>
          </div>
          {viewMode === 'QUIZ' && <div className="kc-counter">Attempt: <strong>{session.usedQuestions.length + 1}</strong> / 15</div>}
        </header>

        <section className="content-container">
          {/* 1. MOTIVATION SCREEN */}
          {viewMode === 'MOTIVATION' && (
  <div className="glass-card animate-in">
    <button className="tts-btn" onClick={() => handleListen(activeKCData?.motivation)}>🔊 Listen</button>
    <h2>Discovery</h2>
    {/* Wrap the motivation text here */}
    <div className="preserve-newline big-text">
      {activeKCData?.motivation}
    </div>
    <button className="cta-btn" onClick={handleFlowNext}>Start Lesson →</button>
  </div>
)}

  {/* 2. CONTENT SCREEN */}
  {viewMode === 'CONTENT' && (
  <div className="glass-card animate-in">
    <div className="module-badge">Theory & Concepts</div>
    <h2>{activeKCData?.title}</h2>
    
    {/* Applying 'preserve-newline' here ensures that 
        any \n characters in your 'content' string 
        create actual line breaks in the browser.
    */}
    <div 
      className="theory-body preserve-newline" 
      style={{ marginBottom: '30px' }}
      dangerouslySetInnerHTML={{ __html: activeKCData?.content }} 
    />

    <button className="cta-btn" onClick={() => {
      if(session.currentSubIndex === -1) {
        setSession(p => ({...p, currentSubIndex: 0}));
      } else {
        handleFlowNext();
      }
    }}>
      {session.currentSubIndex === -1 ? "Explore Lessons →" : "See Examples →"}
    </button>
  </div>
)}

  {/* 3. WORKED EXAMPLES SCREEN (Step-by-Step) */}
  {viewMode === 'WORKED_EXAMPLE' && (
  <div className="glass-card animate-in example-card">
    <div className="module-badge">Example {exampleIndex + 1}</div>
    <div className="example-box">
      {/* Use the class here for the examples */}
      <div className="preserve-newline theory-body">
        {activeKCData.worked_examples[exampleIndex]}
      </div>
    </div>
    <button className="cta-btn" onClick={handleFlowNext}>
      {exampleIndex < activeKCData.worked_examples.length - 1 ? "Next Example →" : "Start Quiz →"}
    </button>
  </div>
)}
          {viewMode === 'QUIZ' && (
  <div className="quiz-area animate-in">
    {!currentQuestion ? (
      <div className="loading-spinner">Initializing Adaptive Quiz...</div>
    ) : (
      <>
        {/* Header Section: Timer and Progress */}
        <div className="quiz-header-meta" style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center', 
          marginBottom: '20px' 
        }}>
          <div className="kc-counter">
            Attempt: <strong>{session.usedQuestions.length + 1}</strong> / 15
          </div>
          
          <div className={`timer-pill ${timeLeft <= 10 ? 'timer-urgent' : ''}`} style={{
            padding: '8px 16px',
            borderRadius: '20px',
            background: timeLeft <= 10 ? '#ffe3e3' : '#f0f2f5',
            color: timeLeft <= 10 ? '#d63031' : '#444',
            fontWeight: 'bold',
            border: `2px solid ${timeLeft <= 10 ? '#d63031' : '#ddd'}`,
            transition: 'all 0.3s ease'
          }}>
            <span style={{ marginRight: '8px' }}>⏱️</span>
            {timeLeft}s
          </div>
        </div>

        {/* Feedback Messages */}
        {feedback && (
          <div className={`feedback-bubble ${feedback}`}>
            {feedback === 'correct' && 'Brilliant!'}
            {feedback === 'wrong' && 'Try Again'}
            {feedback === 'timeout' && "Time's up! Here is the correct answer."}
          </div>
        )}

        <h2>{currentQuestion.question_text}</h2>

        <div className="options-container">
          {currentQuestion.options?.map((opt, index) => {
            // Logic: Reveal correct answer if resolved (by click OR timeout)
            // Highlight wrong choices only if the user actually clicked them
            let cls = "";
            if (isResolved && opt === currentQuestion.answer) {
              cls = "reveal-correct";
            } else if (selectedWrong.includes(opt)) {
              cls = "reveal-wrong";
            }

            return (
              <button
                key={opt}
                className={`quiz-opt ${cls}`}
                onClick={() => handleAnswer(opt)}
                disabled={isResolved} // Disable all buttons once time is up or correct answer found
              >
                <span className="opt-label">{String.fromCharCode(65 + index)}.</span> {opt}
              </button>
            );
          })}
        </div>

        <div className="interaction-footer">
          <div className="hint-section">
            <button 
              className="hint-btn-modern" 
              onClick={handleHintOrReveal} 
              disabled={isResolved}
            >
              <span className="icon">💡</span> Hint ({activeHints.length}/3)
            </button>
            <div className="hints-stack">
              {activeHints.map((h, i) => (
                <div key={i} className="hint-bubble animate-hint">
                  <span className="hint-step">Step {i + 1}</span> {h}
                </div>
              ))}
            </div>
          </div>

          {/* Next Button appears if user is correct OR if timer ran out */}
          {isResolved && (
            <button className="next-btn animate-pop" onClick={handleNextQuestion}>
              Next Question →
            </button>
          )}
        </div>
      </>
    )}
  </div>
)}
        </section>
      </main>
    </div>
  );
}

export default App;