// src/components/FilterDropdown.js
import React from 'react';
import '../styles/FilterDropdown.css';

const FilterDropdown = ({ options, onChange, className }) => {
  return (
    <select className={`filter-dropdown ${className}`} onChange={(e) => onChange(e.target.value)}>
      {options.map((option, index) => (
        <option key={index} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default FilterDropdown;
