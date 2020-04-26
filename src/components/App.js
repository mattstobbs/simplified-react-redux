import React, { useState } from 'react';
import Todos from './Todos';
import './App.css';

const initalTodos = [
  { id: 1, isDone: false, description: 'write some docs' },
  { id: 2, isDone: false, description: 'start writing JSConf talk' },
  { id: 3, isDone: true, description: 'buy some milk' },
  { id: 4, isDone: false, description: 'mow the lawn' },
  { id: 5, isDone: false, description: 'feed the turtle' },
  { id: 6, isDone: false, description: 'fix some bugs' },
];

function App() {
  const [todos, setTodos] = useState(initalTodos);

  const addTodo = (todo) => {
    setTodos([todo, ...todos]);
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
