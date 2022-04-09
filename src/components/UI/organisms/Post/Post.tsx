import { LikesContainer } from '../../atoms'
import { Message } from '../../molecules';
import './styles.scss'

const Post = () => {

  return(
    <div className="post">
      <div className="post-likes">
        <LikesContainer />
      </div>
      <div className="post-message">
        <Message />
      </div>
    </div>
  )
}

export default Post;
