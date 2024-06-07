// src/components/Header.js
import React from 'react';
import '../styles/Header.css';

const Header = ({ children, className }) => {
  return (
    <header className={`header ${className}`}>
      <h1 className="header-title">TODO LIST</h1>
      <div className="header-controls">
        {children}
      </div>
    </header>
  );
};

export default Header;
