import React, { useState, useEffect } from 'react';
import '../Backend.css';

const API_BASE = "https://et605-backend.onrender.com/api";

const BackendDashboard = () => {
  const [logs, setLogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch detailed interaction logs from the admin route
        const sessionRes = await fetch(`${API_BASE}/admin/all-logs`);
        const sessionData = await sessionRes.json();
        
        setLogs(sessionData);
        setLoading(false);
      } catch (err) {
        console.error("Dashboard Fetch Error:", err);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) return <div className="admin-loading">Initializing Analytics Engine...</div>;

  return (
    <div className="admin-container">
      <header className="admin-header">
        <h1>ITS Analytics <span>Backend</span></h1>
        <div className="status-badge">Live Database: MongoDB Atlas</div>
      </header>

      <div className="admin-grid">
        {/* Metric Summary Cards */}
        <div className="stat-card">
          <h3>Total Interactions</h3>
          <p className="big-num">{logs.length}</p>
        </div>
        <div className="stat-card">
          <h3>Avg Latency</h3>
          <p className="big-num">
            {logs.length > 0 ? (logs.reduce((acc, curr) => acc + (curr.response_time_ms || 0), 0) / logs.length / 1000).toFixed(2) : 0}s
          </p>
        </div>

        {/* Detailed Logs Table */}
        <div className="table-section">
          <h2>Student Interaction Stream (Clickstream)</h2>
          <table className="admin-table">
            <thead>
              <tr>
                <th>Session ID</th>
                <th>Roll No</th>
                <th>KC ID</th>
                <th>Result</th>
                <th>Mastery P(L)</th>
                <th>Latency</th>
                <th>Clickstream Path</th>
              </tr>
            </thead>
            <tbody>
              {logs.map((log, index) => (
                <tr key={index}>
                  <td className="mono">{log.session_id}</td>
                  <td><strong>{log.roll_number}</strong></td>
                  <td><span className="kc-tag">{log.kc_id}</span></td>
                  <td>
                    <span className={`res-pill ${log.is_correct ? 'pos' : 'neg'}`}>
                      {log.is_correct ? "CORRECT" : "WRONG/REVEAL"}
                    </span>
                  </td>
                  <td><strong>{((log.p_l_post || 0) * 100).toFixed(1)}%</strong></td>
                  <td>{((log.response_time_ms || 0) / 1000).toFixed(2)}s</td>
                  <td className="clickstream-cell">
                    {(log.click_sequence || []).map((click, i) => (
                      <span key={i} className="click-crumb">{click}</span>
                    ))}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default BackendDashboard;