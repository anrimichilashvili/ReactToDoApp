import React, { useState, useEffect } from 'react';
import './styles/App.css';
import Header from './components/Header';
import TodoList from './components/TodoList';
import AddTodoButton from './components/AddTodoButton';
import Modal from './components/Modal';
import SearchBar from './components/SearchBar';
import FilterDropdown from './components/FilterDropdown';
import DarkModeToggle from './components/DarkModeToggle';

const App = () => {
  const [todos, setTodos] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState('add');
  const [darkMode, setDarkMode] = useState(false);
  const [filter, setFilter] = useState('All');
  const [editingTodo, setEditingTodo] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-mode');
      document.body.classList.remove('light-mode');
    } else {
      document.body.classList.add('light-mode');
      document.body.classList.remove('dark-mode');
    }
  }, [darkMode]);

  const handleAddTodo = (text) => {
    setTodos([...todos, { id: Date.now(), text, completed: false }]);
    setIsModalOpen(false);
  };

  const handleDeleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const handleEditTodo = (todo) => {
    setEditingTodo(todo);
    setModalMode('edit');
    setIsModalOpen(true);
  };

  const handleUpdateTodo = (updatedText) => {
    setTodos(
      todos.map(todo =>
        todo.id === editingTodo.id ? { ...todo, text: updatedText } : todo
      )
    );
    setEditingTodo(null);
    setIsModalOpen(false);
  };

  const handleToggleComplete = (id) => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const handleSearch = (query) => {
    setSearchQuery(query.toLowerCase());
  };

  const handleToggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const handleFilterChange = (filter) => {
    setFilter(filter);
  };

  const handleOpenAddModal = () => {
    setModalMode('add');
    setEditingTodo(null);
    setIsModalOpen(true);
  };

  const handleSubmitModal = (text) => {
    if (modalMode === 'add') {
      handleAddTodo(text);
    } else if (modalMode === 'edit') {
      handleUpdateTodo(text);
    }
  };

  const filteredTodos = todos.filter(todo => {
    const matchesSearchQuery = todo.text.toLowerCase().includes(searchQuery);
    if (filter === 'All') return matchesSearchQuery;
    if (filter === 'Complete') return todo.completed && matchesSearchQuery;
    if (filter === 'Incomplete') return !todo.completed && matchesSearchQuery;
    return true;
  });

  return (
    <div className={`app ${darkMode ? 'dark-mode' : 'light-mode'}`}>
      <Header className={`${darkMode ? 'dark-mode' : 'light-mode'}`}>
        <SearchBar onSearch={handleSearch} className={`${darkMode ? 'dark-mode' : 'light-mode'}`} />
        <FilterDropdown
          options={[
            { value: 'All', label: 'All' },
            { value: 'Complete', label: 'Complete' },
            { value: 'Incomplete', label: 'Incomplete' }
          ]}
          onChange={handleFilterChange}
          className={`${darkMode ? 'dark-mode' : 'light-mode'}`}
        />
        <DarkModeToggle isDarkMode={darkMode} onToggle={handleToggleDarkMode} />
      </Header>
      <TodoList
        todos={filteredTodos}
        onEdit={handleEditTodo}
        onDelete={handleDeleteTodo}
        onToggleComplete={handleToggleComplete}
        className={`${darkMode ? 'dark-mode' : 'light-mode'}`}
      />
      <AddTodoButton onClick={handleOpenAddModal} className={`${darkMode ? 'dark-mode' : 'light-mode'}`} />
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleSubmitModal}
        task={modalMode === 'edit' ? editingTodo : null}
        className={`${darkMode ? 'dark-mode' : 'light-mode'}`}
      />
    </div>
  );
};

export default App;
