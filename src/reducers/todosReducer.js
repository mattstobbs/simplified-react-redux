import { ADD_TODO, REMOVE_TODO, CHECK_TODO } from '../actions';

const todosReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [
        {
          id: state.length + 1,
          isDone: false,
          description: action.description,
        },
        ...state,
      ];
    case REMOVE_TODO:
      return state.filter((t) => t.id !== action.id);
    case CHECK_TODO:
      return state.map((t) =>
        t.id === action.id ? { ...t, isDone: !t.isDone } : t
      );
    default:
      return state;
  }
};

export default todosReducer;
