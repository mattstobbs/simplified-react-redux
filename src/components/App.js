import React, { useState } from 'react';
import Todos from './Todos';
import './App.css';

function App() {
  const [todos, setTodos] = useState(initalTodos);

  const addTodo = (description) => {
    setTodos([{ id: todos.length + 1, isDone: false, description }, ...todos]);
  };

  const removeTodo = (id) => {
    const newTodos = todos.filter((t) => t.id !== id);
    setTodos(newTodos);
  };

  const checkTodo = (id) => {
    const newTodos = todos.map((t) =>
      t.id === id ? { ...t, isDone: !t.isDone } : t
    );
    setTodos(newTodos);
  };

  return (
    <Todos
      todos={todos}
      addTodo={addTodo}
      removeTodo={removeTodo}
      checkTodo={checkTodo}
    />
  );
}

export default App;
