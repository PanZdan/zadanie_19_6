import React from 'react';
import './App.css';
import CommentsListContainer from './CommentsListContainer';
import AddCommentContainer from './AddCommentContainer';
import DevTools from './DevTools';

const App = () => {
  return (
    <div className="App">
      Tu będzie lista komentarzy!
      <AddCommentContainer />
      <CommentsListContainer />
      <DevTools />
    </div>
  );
};

export default App;