import React from 'react';
import { PostsGroup, Wall } from './components/UI/organisms'
import { MessageTextBox } from './components/UI/organisms';
import './styles/global/app.scss'


function App() {
  return (
    <div className='publications-container'>
      <div className='publications-container-wall'>
        <Wall/>
      </div>
      <div className='publications-container-message-box'>
        <MessageTextBox/>
      </div>
    </div>
  )
}

export default App;
