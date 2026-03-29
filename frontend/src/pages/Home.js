import React from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom'; // Added useSearchParams

const CHAPTER_METADATA = {
  // ... your existing metadata object
};

function Home() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams(); // 1. Access the URL parameters

  // 2. Capture the student_id from the URL (or default if missing)
  const studentId = searchParams.get('student_id') || "22B0069";

  const handleBegin = () => {
    // 3. Pass the student_id forward to the quiz route
    navigate(`/quiz?student_id=${studentId}`); 
  };
  
  return (
    <div className="dashboard-layout" style={{ justifyContent: 'center', alignItems: 'center' }}>
      <div className="glass-card animate-in" style={{ textAlign: 'center', maxWidth: '600px' }}>
        {/* Displaying the ID so you can verify it's working */}
        <div style={{ fontSize: '12px', color: '#666', marginBottom: '10px' }}>
          Student ID: <strong>{studentId}</strong>
        </div>

        <h1>{CHAPTER_METADATA.chapter_name}</h1>
        <p className="big-text" style={{margin: '20px 0'}}>Grade {CHAPTER_METADATA.grade} | Math Assessment</p>
        
        <div className="metadata-summary" style={{ margin: '20px 0', opacity: 0.8 }}>
          <span>Difficulty: {CHAPTER_METADATA.chapter_difficulty}</span> • 
          <span> Time: ~60 mins</span>
        </div>

        <button className="cta-btn" onClick={handleBegin}>
          Begin Chapter
        </button>
      </div>
    </div>
  );
}

export default Home;