import { 
  Wall,
  MessageTextBox,
 } from '../../organisms'
import './styles.scss'


const PostsSection = () => {
  return (
    <div className='publications-container'>
      <div className='publications-container-wall'>
        <Wall/>
      </div>
      <div className='publications-container-message-box'>
        <MessageTextBox/>
      </div>
    </div>
  )
}

export default PostsSection;
