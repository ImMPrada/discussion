import { 
  ConversationsList,
  MessageTextBox,
 } from '../../organisms'
import './styles.scss'


const PostsSection = () => {
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
