import { formatDistance } from 'date-fns'
import { ProfileBox, TimeLabel } from '../../atoms';
import { PostActions } from '../'
import './styles.scss'
import { MessageHeaderProps } from './types';

const MessageHeader = ({
  isYou,
  user,
  createdAt,
  postId,
  isReceiver,
}: MessageHeaderProps) => {

  const formattedTimeAgo = formatDistance(new Date(createdAt), new Date(), { addSuffix: true})

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
          isReceiver={isReceiver}
        />
      </div>
    </div>
  )
}

export default MessageHeader;
