import { ProfileBox, TimeLabel } from '../../atoms';
import { PostActions } from '../'
import './styles.scss'
import { MessageHeaderProps } from './types';

const MessageHeader = ({
  isYou,
  user,
  createdAt,
  postId,
}: MessageHeaderProps) => {

  const formattedTimeAgo = "2 months ago" // TODO: Use createdAt here

  return(
    <div className="message-header">
      <div className="message-header-info">
        <ProfileBox 
          isYou={isYou}
          user={user}
        />
        <TimeLabel label={formattedTimeAgo}/>
      </div>
      <div className="message-header-message-actions">
        <PostActions
          isYou={isYou}
          postId={postId}
        />
      </div>
    </div>
  )
}

export default MessageHeader;
