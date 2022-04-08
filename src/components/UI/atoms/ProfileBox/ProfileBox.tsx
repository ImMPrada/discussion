import React from 'react';
import './styles.scss'
import { AvatarGenerator } from 'random-avatar-generator';
import { ProfileBoxProps } from './types'


const profileData = {
  userId: 1,
  userNick: 'John Doe',
  userAvatar: new AvatarGenerator().generateRandomAvatar(),
}

const ProfileBox = ({
  onlyAvatar,
  isYou
}: ProfileBoxProps) => {
  console.log(profileData)


  return (
    <div className="profilebox">
      <div className="profilebox-avatar">
        <img src={profileData.userAvatar} />
      </div>
      { !onlyAvatar && (
        <div className="profilebox-nickname">
          <h3>{profileData.userNick}</h3>
        </div>
      )}
      { isYou && (
        <div className="profilebox-nickname">
          <h3>YOU</h3>
        </div>
      )}
    </div>
  )
}

export default ProfileBox
