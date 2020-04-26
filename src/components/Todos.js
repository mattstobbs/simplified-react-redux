import React, { useState } from 'react';
import TodoItem from './TodoItem';
import './Todos.css';

const Todos = ({ todos, addTodo, removeTodo, checkTodo }) => {
  const [newTodo, setNewTodo] = useState('');

  const handleInputChange = (e) => {
    setNewTodo(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.keyCode === 13) {
      addTodo({ id: todos.length + 1, isDone: false, description: newTodo });
      setNewTodo('');
    }
  };

  return (
    <div className="App">
      <input
        className="new-todo"
        placeholder="what needs to be done?"
        value={newTodo}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
      />
      <div className="left">
        <h2>todo</h2>
        {todos
          .filter((todo) => !todo.isDone)
          .map((todo) => (
            <TodoItem
              key={todo.id}
              {...todo}
              remove={removeTodo}
              check={checkTodo}
            />
          ))}
      </div>
      <div className="right">
        <h2>done</h2>
        {todos
          .filter((todo) => todo.isDone)
          .map((todo) => (
            <TodoItem
              key={todo.id}
              {...todo}
              remove={removeTodo}
              check={checkTodo}
            />
          ))}
      </div>
    </div>
  );
};

export default Todos;
