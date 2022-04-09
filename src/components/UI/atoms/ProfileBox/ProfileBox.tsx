import { Avatar } from '../'
import './styles.scss'
import { ProfileBoxProps } from './types'

const ProfileBox = ({
  isYou,
  profileData
}: ProfileBoxProps) => { 
  console.log(profileData)
  return(
  <div className="profile-box">

    <div className="profile-box-avatar">
      <Avatar profileImg={profileData.userAvatar} />
    </div>

    <h3 className="profile-box-username">
      {profileData.username}

      { isYou && (
        <span className="profile-box-username-you">
          you
        </span>
      )}
    </h3>
  </div>
)}

export default ProfileBox
