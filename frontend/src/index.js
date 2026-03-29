import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'; 
import App from './App';       
import Exit from './pages/Exit'; 

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Router> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quiz" element={<App />} />
        <Route path="/exit" element={<Exit />} />
      </Routes>
    </Router>
  </React.StrictMode>
);