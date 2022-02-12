import React from 'react';
import { MessageBodyTypes } from './types'
import './styles.css'


const MessageBody = ({message}: MessageBodyTypes) => (
  <div className="MessageBody">
    <p>{message}</p>
  </div>
)

export default MessageBody
