import React from 'react';

import './styles.scss'
import { ProfileBox } from '../../atoms';
import { TextArea } from '../../atoms'
import { Button } from '../../atoms'

const MessageTextBox = () => {

  return(
    <div className="message-textbox">
      <div className="message-textbox-profile-avatar">
        <ProfileBox 
          onlyAvatar = {true}
          isYou = {false}
        />
      </div>
      <div className="message-textbox-text">
        <TextArea 
          initialValue = ' Add a comment...'
        />
      </div>
      <div className="message-textbox-button">
        <Button 
          label = 'Send'
        />
      </div>
    </div>
  )
}

export default MessageTextBox;
