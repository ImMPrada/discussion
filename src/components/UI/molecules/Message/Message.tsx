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
  userId,
  content,
  createdAt,
  postId,
  receiver,
}: MessageProps) => {
  const { currentUser } = useContext(AuthContext) as AuthContextTypes;
  const { createPost, getPosts } = useContext(PostsContext) as PostsContextTypes;
  if (!currentUser) return null;

  const fetchResponse = async (response: any) => {
    await createPost(response)
    await getPosts()
  }
  console.log(currentUser.id, userId)

  return(
    <div className="message">
      <MessageHeader 
        isYou={currentUser.id === userId}
        user={user}
        createdAt={createdAt}
        postId={postId}
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
