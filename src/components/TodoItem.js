import React from 'react';

const TodoItem = ({ id, isDone, description, check, remove }) => (
  <label>
    <input type="checkbox" checked={isDone} onChange={() => check(id)} />
    {description}
    <button onClick={() => remove(id)}>x</button>
  </label>
);

export default TodoItem;
