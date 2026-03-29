import React from 'react';
import { useNavigate } from 'react-router-dom';

function Homepage() {
  const navigate = useNavigate();

  // Data you "Receive" from the Merge Team / Platform Auth
  const receivedData = {
    student_id: "STU_22B0069", // Received from Auth
    chapter_id: "grade7_exponents_powers",
    grade: 7,
    chapter_name: "Exponents and Powers"
  };

  const startChapter = () => {
    // Generate a unique Session ID as per Merge Team rules
    const session_id = `sess_${receivedData.student_id}_${Date.now()}`;
    
    // Pass this data into your Quiz state
    navigate('/quiz', { state: { ...receivedData, session_id } });
  };

  return (
    <div className="app-container">
      <div className="quiz-card animate-in">
        <h1 className="section-title">Chapter Overview</h1>
        <div className="content-box">
          <p><strong>Grade:</strong> {receivedData.grade}</p>
          <p><strong>Chapter:</strong> {receivedData.chapter_name}</p>
          <p><strong>Chapter ID:</strong> <code>{receivedData.chapter_id}</code></p>
        </div>
        
        <div className="status-message">
          Authentication Verified. Ready to track session for Student: {receivedData.student_id}
        </div>

        <button className="option-btn primary-btn" onClick={startChapter}>
          Enter Chapter
        </button>
      </div>
    </div>
  );
}

export default Homepage;