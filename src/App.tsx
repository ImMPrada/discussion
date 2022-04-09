import React from 'react';
import { AuthProvider } from './contexts/AuthContext'
import { DataProvider } from './contexts/DataContext';
import { Wall } from './components/UI/organisms'
import { MessageTextBox } from './components/UI/organisms';
import './styles/global/app.scss'


function App() {
  return (
    <AuthProvider>
      <DataProvider>
        <div className='publications-container'>
          <div className='publications-container-wall'>
            <Wall/>
          </div>
          <div className='publications-container-message-box'>
            <MessageTextBox/>
          </div>
        </div>
      </DataProvider>
    </AuthProvider>
    
  )
}

export default App;
