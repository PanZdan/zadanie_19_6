import React from 'react';

class CommentAdd extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ""
    }
  };

  onChangeHandle(event) {
    this.setState({
      text: event.target.value
    });
  };

  onSubmitHandle(event) {
    event.preventDefault();
    if (this.state.text) {
      this.props.addComment(this.state.text);
      this.setState({
        text: ""
      });
    }
  };

  render() {
    return (
      <form onSubmit={this.onSubmitHandle.bind(this)}>
      <input value={this.state.text} onChange={this.onChangeHandle.bind(this)}/>
      <input type="submit" value="Add comment"/>
     </form>
    )
  }
 };

export default CommentAdd;