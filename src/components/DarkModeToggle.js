// src/components/DarkModeToggle.js
import React from 'react';
import '../styles/DarkModeToggle.css';

const DarkModeToggle = ({ isDarkMode, onToggle }) => {
  return (
    <button className="dark-mode-toggle" onClick={onToggle}>
      {isDarkMode ? '☀️' : '🌙'}
    </button>
  );
};

export default DarkModeToggle;
