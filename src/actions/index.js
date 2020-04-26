export const ADD_TODO = 'ADD_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';
export const CHECK_TODO = 'CHECK_TODO';

export const addTodo = (newTodo) => ({
  type: ADD_TODO,
  newTodo,
});

export const removeTodo = (id) => ({
  type: REMOVE_TODO,
  id,
});

export const checkTodo = (id) => ({
  type: CHECK_TODO,
  id,
});
