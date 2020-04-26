import { createStore } from 'redux';
import todosReducer from '../reducers/todosReducer';

const configureStore = (initialState) => {
  const store = createStore(todosReducer, initialState);
  return store;
};

export default configureStore;
