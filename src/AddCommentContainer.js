import { connect } from 'react-redux';
import { addComment } from './actions';
import CommentAdd from './CommentAdd';

const mapDispatchToProps = dispatch => ({
  addComment: (text) => dispatch(addComment(text))
});

export default connect(null, mapDispatchToProps)(CommentAdd);