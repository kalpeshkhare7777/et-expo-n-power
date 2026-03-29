import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function Exit() {
  const { state } = useLocation();
  const navigate = useNavigate();

  // If no state exists (direct access), show empty/error state
  if (!state) return <div className="glass-card">No session data found.</div>;

  const {
    student_id,
    session_id,
    chapter_id,
    timestamp,
    session_status,
    correct_answers,
    wrong_answers,
    questions_attempted,
    total_questions,
    retry_count,
    hints_used,
    total_hints_embedded,
    time_spent_seconds,
    topic_completion_ratio
  } = state;

  return (
    <div className="dashboard-layout" style={{ justifyContent: 'center', alignItems: 'center' }}>
      <div className="glass-card animate-in" style={{ maxWidth: '600px', width: '100%' }}>
        <h2 style={{ color: session_status === 'completed' ? 'var(--success)' : 'var(--accent-primary)' }}>
          {session_status === 'completed' ? '🎉 Chapter Complete!' : 'Session Paused'}
        </h2>
        
        {/* GUIDELINE: Show student and session identity */}
        <div style={{ marginBottom: '20px', fontSize: '0.9rem' }}>
          <p className="text-dim">Student ID: <strong>{student_id}</strong></p>
          <p className="text-dim">Session: {session_id}</p>
          <p className="text-dim">Chapter: {chapter_id}</p>
        </div>

        <hr border="1" style={{ margin: '20px 0', borderColor: 'var(--border-main)' }} />

        <div className="stats-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', textAlign: 'left' }}>
          <div className="stat-item">
            <label>Unique Attempted</label>
            <p><strong>{questions_attempted}</strong> / {total_questions}</p>
          </div>
          <div className="stat-item">
            <label>Correct / Wrong</label>
            <p><span style={{color: 'var(--success)'}}>{correct_answers}</span> / <span style={{color: 'var(--error)'}}>{wrong_answers}</span></p>
          </div>
          <div className="stat-item">
            <label>Retries Made</label>
            <p>{retry_count}</p>
          </div>
          <div className="stat-item">
            <label>Hints Used</label>
            <p>{hints_used} / {total_hints_embedded}</p>
          </div>
          <div className="stat-item">
            <label>Time Spent</label>
            <p>{Math.floor(time_spent_seconds / 60)}m {time_spent_seconds % 60}s</p>
          </div>
          <div className="stat-item">
            <label>Completion</label>
            <p>{(topic_completion_ratio * 100).toFixed(0)}%</p>
          </div>
        </div>

        <div style={{ marginTop: '30px' }}>
          <button className="cta-btn" onClick={() => navigate('/')}>
            Return to Dashboard
          </button>
        </div>

        {/* GUIDELINE: Exact UTC Timestamp and Status for Merge Team audit */}
        <div className="debug-payload" style={{ marginTop: '20px', fontSize: '10px', opacity: 0.4, textAlign: 'left' }}>
          <p>Payload Timestamp: {timestamp}</p>
          <p>Final Status: {session_status}</p>
        </div>
      </div>
    </div>
  );
}

export default Exit;