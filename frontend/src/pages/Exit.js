import React, { useEffect, useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';

const API_BASE = "https://et605-backend.onrender.com/api";

function Exit() {
  const [searchParams] = useSearchParams();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const studentId = searchParams.get('student_id');

  useEffect(() => {
    if (studentId) {
      // Fetch the latest session we just saved to MongoDB
      fetch(`${API_BASE}/verify-session/${studentId}`)
        .then(res => res.json())
        .then(json => {
          setData(json);
          setLoading(false);
        })
        .catch(err => console.error("Error fetching exit data:", err));
    }
  }, [studentId]);

  if (loading) return <div className="loader">Finalizing your report...</div>;
  if (!data) return <div>No session data found.</div>;

  return (
    <div className="dashboard-layout" style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
      <div className="glass-card animate-in" style={{maxWidth: '500px', textAlign: 'center'}}>
        <div className="success-icon" style={{fontSize: '3rem'}}>🏆</div>
        <h2>Session Summary</h2>
        <p>Student ID: <strong>{data.student_id}</strong></p>
        
        <hr />
        
        <div className="stats-grid" style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', margin: '20px 0'}}>
          <div className="stat-card">
            <small>Accuracy</small>
            <div>{Math.round((data.correct_answers / data.questions_attempted) * 100)}%</div>
          </div>
          <div className="stat-card">
            <small>Time Spent</small>
            <div>{Math.floor(data.time_spent_seconds / 60)}m {data.time_spent_seconds % 60}s</div>
          </div>
        </div>

        <div className="json-preview" style={{textAlign: 'left', background: '#f4f4f4', padding: '10px', borderRadius: '8px', fontSize: '12px'}}>
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>

        <button className="cta-btn" onClick={() => window.location.href='/'} style={{marginTop: '20px'}}>
          Return Home
        </button>
      </div>
    </div>
  );
}

export default Exit;