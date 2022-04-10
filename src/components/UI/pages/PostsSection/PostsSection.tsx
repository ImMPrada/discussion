import { 
  Wall,
  MessageTextBox,
 } from '../../organisms'
import './styles.scss'


const PostsSection = () => {
  return (
    <div className='feed'>
      <div className='feed-wall'>
        <Wall/>
      </div>
      <div className='feed-message-box'>
        <MessageTextBox/>
      </div>
    </div>
  )
}

export default PostsSection;
