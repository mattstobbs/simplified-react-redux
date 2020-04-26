import Todos from './Todos';
import { connect } from '../react-redux';

const mapStateToProps = (state) => ({
  todos: state,
});

export default connect(mapStateToProps)(Todos);
