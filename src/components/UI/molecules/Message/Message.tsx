import React from 'react';
import { MessageBody } from '../../atoms';
import { MessageHeader } from '../'
import { MessageProps } from './types'
import './styles.scss'
import { profiles } from '../../../../mocks'
import { currentUser } from '../../../../mocks';

const Message = ({
  profileId,
  content,
}: MessageProps) => {

  console.log(profileId)
  const getProfileData = (id: Number) => {
    return profiles.filter(profile => profile.userId === id).slice(-1)[0]
  }

  return(
    <div className="message">
      <MessageHeader 
        isYou={currentUser.userId === profileId}
        profileData={getProfileData(profileId)}
      />
      <MessageBody 
        message={content}
      />
    </div>
  )
}

export default Message;
