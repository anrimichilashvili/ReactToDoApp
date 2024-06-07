// src/components/TodoItem.js
import React from 'react';
import '../styles/TodoItem.css';

const TodoItem = ({ todo, onEdit, onDelete, onToggleComplete, className }) => {
  return (
    <li className={`todo-item ${className}`}>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => onToggleComplete(todo.id)}
      />
      <span className={todo.completed ? 'completed' : ''}>{todo.text}</span>
      <div className="item-controls">
        <button onClick={() => onEdit(todo)}>✏️</button> {/* Pass the whole todo object */}
        <button onClick={() => onDelete(todo.id)}>🗑️</button>
      </div>
    </li>
  );
};

export default TodoItem;
