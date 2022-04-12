import { useContext } from 'react'
import { AuthContext } from '../../../../contexts/AuthContext';
import { AuthContextTypes } from '../../../../contexts/AuthContext/types';
import { PostsContext } from '../../../../contexts/PostsContext';
import { PostsContextTypes } from '../../../../contexts/PostsContext/types';
import { MessageBody } from '../../atoms';
import { MessageHeader } from '../'
import { MessageProps } from './types'
import './styles.scss'


const Message = ({
  user,
  content,
  createdAt,
  postId,
  receiver,
}: MessageProps) => {
  const { currentUser } = useContext(AuthContext) as AuthContextTypes;
  const { createPost, getPosts } = useContext(PostsContext) as PostsContextTypes;

  const fetchResponse = async (response: any) => {
    await createPost(response)
    await getPosts()
  }

  return(
    <div className="message">
      <MessageHeader 
        isYou={currentUser.id === user.id}
        user={user}
        createdAt={createdAt}
        postId={postId}
        isReceiver={receiver === null}
      />
      <MessageBody 
        receiver={receiver}
        message={content}
        onClick={fetchResponse}
      />
    </div>
  )
}

export default Message;
