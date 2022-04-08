import React from 'react';
import './App.scss';
import { Post } from './components/UI/organisms'
import { MessageTextBox } from './components/UI/organisms';

function App() {
  return (
    <>
      <Post />
      <MessageTextBox />
    </>
  );
}

export default App;
