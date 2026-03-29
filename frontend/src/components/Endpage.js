import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function Endpage() {
  const { state } = useLocation();
  const navigate = useNavigate();

  // Safety check: if someone navigates here directly without state, send them home
  useEffect(() => {
    if (!state) {
      navigate('/');
      return;
    }

    // Define payload inside useEffect to satisfy React Hook rules
    const sessionPayload = {
      student_id: state.student_id || "GUEST_USER",
      session_id: state.session_id || `sess_${Date.now()}`,
      chapter_id: "grade7_exponents_powers",
      timestamp: new Date().toISOString(),
      session_status: state.completed ? "completed" : "exited_midway",
      
      // Metrics from App.js
      correct_answers: state.correctCount || 0,
      wrong_answers: state.wrongCount || 0,
      questions_attempted: state.attemptedCount || 0,
      total_questions: 15, 
      
      retry_count: state.retries || 0,
      hints_used: state.hintsUsed || 0,
      total_hints_embedded: 45, // 3 hints per question * 15 questions
      
      time_spent_seconds: Math.floor((Date.now() - (state.startTime || Date.now())) / 1000),
      topic_completion_ratio: parseFloat(((state.attemptedCount || 0) / 15).toFixed(2))
    };

    const sendToMergeTeam = async () => {
      try {
        console.log("📤 Attempting to send session payload to Merge Team:", sessionPayload);
        
        // This is the Merge Team's central endpoint
        const response = await fetch('https://merge-team-api.render.com/session/submit', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(sessionPayload)
        });

        if (response.ok) {
          console.log("✅ Data successfully synced with Merge System.");
        } else {
          console.warn("⚠️ Merge System rejected the payload. Check data types.");
        }
      } catch (err) {
        // Log the error but keep the UI functional for the Expo
        console.error("❌ Network error: Could not reach Merge Team API.", err);
      }
    };

    sendToMergeTeam();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Empty dependency array ensures this runs exactly once on mount

  // If state is missing during initial render, show nothing while useEffect redirects
  if (!state) return null;

  return (
    <div className="app-container">
      <div className="quiz-card animate-in">
        <h1 className="section-title">Session Summary</h1>
        <div className="status-message">
          Great job, {state.student_id}! Your session data has been transmitted.
        </div>
        
        <div className="table-container">
          <table className="summary-table">
            <thead>
              <tr>
                <th>Metric Name</th>
                <th>Data Sent</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Student ID</strong></td>
                <td>{state.student_id}</td>
              </tr>
              <tr>
                <td><strong>Session Status</strong></td>
                <td style={{ color: state.completed ? '#28a745' : '#dc3545', fontWeight: 'bold' }}>
                  {state.completed ? "COMPLETED" : "EXITED MIDWAY"}
                </td>
              </tr>
              <tr>
                <td><strong>Correct / Wrong</strong></td>
                <td>{state.correctCount} / {state.wrongCount}</td>
              </tr>
              <tr>
                <td><strong>Unique Questions Attempted</strong></td>
                <td>{state.attemptedCount} / 15</td>
              </tr>
              <tr>
                <td><strong>Total Retries</strong></td>
                <td>{state.retries}</td>
              </tr>
              <tr>
                <td><strong>Hints Consumed</strong></td>
                <td>{state.hintsUsed} / 45</td>
              </tr>
              <tr>
                <td><strong>Time Spent</strong></td>
                <td>{Math.floor((Date.now() - state.startTime) / 1000)} seconds</td>
              </tr>
              <tr>
                <td><strong>Completion Ratio</strong></td>
                <td>{( (state.attemptedCount / 15) * 100 ).toFixed(0)}%</td>
              </tr>
            </tbody>
          </table>
        </div>

        <button className="option-btn primary-btn" onClick={() => navigate('/')}>
          Finish & Return Home
        </button>
      </div>
      <footer className="footer-credits">Grade 7 Math | Exponents & Powers</footer>
    </div>
  );
}

export default Endpage;