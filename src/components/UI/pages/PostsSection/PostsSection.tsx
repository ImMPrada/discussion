import { useContext, useEffect } from 'react'
import { PostsContext } from '../../../../contexts/PostsContext'
import { PostsContextTypes } from '../../../../contexts/PostsContext/types'
import { 
  ConversationsList,
  MessageTextBox,
 } from '../../organisms'
import './styles.scss'


const PostsSection = () => {
  const { getPosts } = useContext(PostsContext) as PostsContextTypes;

  useEffect(() => {
    getPosts();
  }, [])

  return (
    <div className='feed'>
      <div className='feed-wall'>
        <ConversationsList/>
      </div>
      <div className='feed-message-box'>
        <MessageTextBox/>
      </div>
    </div>
  )
}

export default PostsSection;
