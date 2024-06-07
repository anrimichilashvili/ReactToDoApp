// src/components/TodoList.js
import React from 'react';
import TodoItem from './TodoItem';
import '../styles/TodoList.css';

const TodoList = ({ todos, onEdit, onDelete, onToggleComplete }) => {
  if (todos.length === 0) {
    return (
      <div className="empty-state">
        <img
          src={`${process.env.PUBLIC_URL}/white-empthy-page.png`} // Update the image name
          alt="No tasks"
          className="empty-state-image"
        />
      </div>
    );
  }

  return (
    <ul className="todo-list">
      {todos.map(todo => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onEdit={onEdit}
          onDelete={onDelete}
          onToggleComplete={onToggleComplete}
        />
      ))}
    </ul>
  );
};

export default TodoList;



