import { Avatar } from '../'
import './styles.scss'
import { ProfileBoxProps } from './types'

const ProfileBox = ({
  isYou,
  user
}: ProfileBoxProps) => (
  <div className="profile-box">

    <div className="profile-box-avatar">
      <Avatar profileImg={user.avatar} />
    </div>

    <h3 className="profile-box-username">
      {user.nickname}

      { isYou && (
        <span className="profile-box-username-you">
          you
        </span>
      )}
    </h3>
  </div>
)

export default ProfileBox
