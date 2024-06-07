// src/components/Modal.js
import React, { useState, useEffect } from 'react';
import '../styles/Modal.css';

const Modal = ({ isOpen, onClose, onSubmit, task, className }) => {
  const [taskText, setTaskText] = useState('');

  useEffect(() => {
    if (task) {
      setTaskText(task.text); // Pre-fill with the task's text when editing
    } else {
      setTaskText(''); // Clear the input for adding a new task
    }
  }, [task, isOpen]); // Also reset input when modal opens

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskText.trim()) {
      onSubmit(taskText.trim());
    }
  };

  if (!isOpen) return null;

  return (
    <div className={`modal-overlay ${className}`}>
      <div className={`modal-content ${className}`}>
        <h2 className="modal-title">{task ? 'Edit Task' : 'New Task'}</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Input your task..."
            value={taskText}
            onChange={(e) => setTaskText(e.target.value)}
            className={`modal-input ${className}`}
          />
          <div className="modal-buttons">
            <button className={`cancel-button ${className}`} type="button" onClick={onClose}>
              Cancel
            </button>
            <button className={`apply-button ${className}`} type="submit">
              {task ? 'Update' : 'Add'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;
