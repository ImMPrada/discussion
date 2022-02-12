import React from 'react';
import './styles.css'
import { AvatarGenerator } from 'random-avatar-generator';


const profileData = {
  userId: 1,
  userNick: 'John Doe',
  userAvatar: new AvatarGenerator().generateRandomAvatar(),
}

const ProfileBox = () => {
  console.log(profileData)


  return (
    <div className="profilebox">
      <div className="profilebox-avatar">
        <img src={profileData.userAvatar} />
      </div>
      <div className="profilebox-nickname">
        <h3>{profileData.userNick}</h3>
      </div>
    </div>
  )
}

export default ProfileBox
