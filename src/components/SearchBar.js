// src/components/SearchBar.js
import React from 'react';
import '../styles/SearchBar.css';

const SearchBar = ({ onSearch, placeholder, className }) => {
  return (
    <div className={`search-bar ${className}`}>
      <input
        type="text"
        placeholder={placeholder || "Search note..."}
        onChange={(e) => onSearch(e.target.value)}
      />
      <button className="search-button">
        <i className="search-icon">🔍</i>
      </button>
    </div>
  );
};

export default SearchBar;
