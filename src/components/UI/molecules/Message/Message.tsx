import { useContext } from 'react'
import { AuthContext } from '../../../../contexts/AuthContext';
import { AuthContextTypes } from '../../../../contexts/AuthContext/types';
import { MessageBody } from '../../atoms';
import { MessageHeader } from '../'
import { MessageProps } from './types'
import './styles.scss'


const Message = ({
  user,
  userId,
  content,
  createdAt
}: MessageProps) => {
  const { currentUser } = useContext(AuthContext) as AuthContextTypes;
  if (!currentUser) return null;

  return(
    <div className="message">
      <MessageHeader 
        isYou={currentUser.id === userId}
        user={user}
        createdAt={createdAt}
      />
      <MessageBody 
        message={content}
      />
    </div>
  )
}

export default Message;
