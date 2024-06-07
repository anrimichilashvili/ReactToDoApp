// src/components/AddTodo.js
import React, { useState } from 'react';
import '../styles/AddTodo.css';

const AddTodo = ({ onAdd }) => {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      onAdd({ id: Date.now(), text });
      setText('');
    }
  };

  return (
    <div className="add-todo">
      <form onSubmit={handleSubmit} className="add-todo-form">
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Add a new task"
          className="add-todo-input"
        />
        <button type="submit" className="add-todo-button">Add</button>
      </form>
    </div>
  );
};

export default AddTodo;
