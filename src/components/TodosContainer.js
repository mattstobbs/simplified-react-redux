import Todos from './Todos';
import { connect } from '../react-redux';
import { addTodo, removeTodo, checkTodo } from '../actions';

const mapStateToProps = (state) => ({
  todos: state,
});

const mapDispatchToProps = (dispatch) => ({
  addTodo: (todo) => dispatch(addTodo(todo)),
  removeTodo: (id) => dispatch(removeTodo(id)),
  checkTodo: (id) => dispatch(checkTodo(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Todos);
