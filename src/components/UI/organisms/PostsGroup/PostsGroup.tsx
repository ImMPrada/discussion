import { Post } from '../'
import './styles.scss'

const PostsGroup = () => {

  return(
    <div className="posts-group">
      <div className="posts-group-main">
        <Post />
      </div>
      <div className="posts-group-responses">
        <div className="posts-group-responses-icon">
          <div className="icon"></div>
        </div>
        <div className="posts-group-responses-content">
          <Post/>
          <Post/>
          <Post/>
          <Post/>
          <Post/>
          <Post/>
        </div>
      </div>
    </div>
  )
}

export default PostsGroup;
