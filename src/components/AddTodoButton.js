// src/components/AddTodoButton.js
import React from 'react';
import '../styles/AddTodoButton.css';

const AddTodoButton = ({ onClick, className }) => {
  return (
    <button className={`add-todo-button ${className}`} onClick={onClick}>
      +
    </button>
  );
};

export default AddTodoButton;
