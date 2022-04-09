import { ProfileBox, TimeLabel } from '../../atoms';
import { PostActions } from '../'
import { profileData } from '../../../../mocks'
import './styles.scss'
import { Post } from '../../organisms';

const MessageHeader = () => {

  return(
    <div className="message-header">
      <div className="message-header-info">
        <ProfileBox 
          isYou
          profileData={profileData}
        />
        <TimeLabel label="2 months ago"/>
      </div>
      <div className="message-header-message-actions">
        <PostActions
          isYou
        />
      </div>
    </div>
  )
}

export default MessageHeader;
