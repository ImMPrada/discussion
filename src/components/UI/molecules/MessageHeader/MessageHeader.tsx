import { ProfileBox, TimeLabel } from '../../atoms';
import { PostActions } from '../'
import './styles.scss'
import { MessageHeaderProps } from './types';

const MessageHeader = ({
  isYou,
  profileData,
}: MessageHeaderProps) => {

  return(
    <div className="message-header">
      <div className="message-header-info">
        <ProfileBox 
          isYou={isYou}
          profileData={profileData}
        />
        <TimeLabel label="2 months ago"/>
      </div>
      <div className="message-header-message-actions">
        <PostActions
          isYou={isYou}
        />
      </div>
    </div>
  )
}

export default MessageHeader;
