import React from 'react';
import { useNavigate } from 'react-router-dom'; // 1. Import useNavigate

const CHAPTER_METADATA = {
  grade: 7,
  chapter_name: "Exponents and Powers",
  chapter_id: "grade7_exponents_and_powers",
  chapter_url: "https://kalpeshkhare7777.github.io/et-expo-n-/",
  chapter_difficulty: 0.55,
  expected_completion_time_seconds: 3600,
  subtopics: [
    { subtopic_id: "KC1", name: "Introduction to Exponents", difficulty: 0.25 },
    { subtopic_id: "KC2", name: "Special Powers and Negative Bases", difficulty: 0.45 },
    { subtopic_id: "KC3", name: "Laws of Exponents (Same Base)", difficulty: 0.60 },
    { subtopic_id: "KC4", name: "Laws of Exponents (Different Bases)", difficulty: 0.70 },
    { subtopic_id: "KC5", name: "Standard Form (Scientific Notation)", difficulty: 0.55 }
  ],
  prerequisites: []
};

function Home() {
  const navigate = useNavigate(); // 2. Initialize navigate

const handleBegin = () => {
    navigate('/quiz'); 
  };
  
  return (
    <div className="dashboard-layout" style={{ justifyContent: 'center', alignItems: 'center' }}>
      <div className="glass-card animate-in" style={{ textAlign: 'center', maxWidth: '600px' }}>
        <h1>{CHAPTER_METADATA.chapter_name}</h1>
        <p className="big-text" style={{margin: '20px 0'}}>Grade {CHAPTER_METADATA.grade} | Math Assessment</p>
        
        <div className="metadata-summary" style={{ margin: '20px 0', opacity: 0.8 }}>
          <span>Difficulty: {CHAPTER_METADATA.chapter_difficulty}</span> • 
          <span> Time: ~60 mins</span>
        </div>

        {/* Change onClick to our new handleBegin function */}
        <button className="cta-btn" onClick={handleBegin}>
          Begin Chapter
        </button>

        <script type="application/json" id="merge-metadata">
          {JSON.stringify(CHAPTER_METADATA)}
        </script>
      </div>
    </div>
  );
}

export default Home;