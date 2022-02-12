import React from 'react';
import { ProfileBox, ATimeAgoLabel } from '../../atoms';
import './styles.css'

const MessageHeader = () => {

  return(
    <div className="message-header">
      <div className="message-header-message-info">
        <ProfileBox />
        <ATimeAgoLabel label="lorem ipsum"/>
      </div>
      <div className="message-header-message-actions">
        <h2>Holi</h2>
      </div>
    </div>
  )
}

export default MessageHeader;
