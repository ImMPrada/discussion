import { LikesContainer } from '../../atoms'
import { Message } from '../../molecules';
import './styles.scss'
import { PostProps } from './types'

const Post = ({
  postData,
}: PostProps) => {
  console.log(postData.userId)
  return(
    <div className="post">
      <div className="post-likes">
        <LikesContainer />
      </div>
      <div className="post-message">
        <Message 
          profileId={postData.userId}
          content={postData.content}
        />
      </div>
    </div>
  )
}

export default Post;
