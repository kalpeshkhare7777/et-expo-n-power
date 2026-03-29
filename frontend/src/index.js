import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'; 
import App from './App';       
import Exit from './pages/Exit'; 
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));


const basename = process.env.NODE_ENV === 'production' ? '/et-expo-n-power' : '';

root.render(
  <React.StrictMode>
    <Router basename={basename}> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quiz" element={<App />} />
        <Route path="/exit" element={<Exit />} />
      </Routes>
    </Router>
  </React.StrictMode>
);