import React from 'react';
import { MessageBodyTypes } from './types'
import './styles.scss'


const MessageBody = ({message}: MessageBodyTypes) => (
  <div className="MessageBody">
    <p>{message}</p>
  </div>
)

export default MessageBody
