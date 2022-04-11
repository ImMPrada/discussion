import { LikesContainer } from '../../atoms'
import { Message } from '../../molecules';
import './styles.scss'
import { PostProps } from './types'

const Post = ({
  post,
}: PostProps) => {
  const { reactionsScore, user, userId, content, createdAt } = post
  return(
    <div className="post">
      <div className="post-likes">
        <LikesContainer reactionsScore={reactionsScore} />
      </div>
      <div className="post-message">
        <Message 
          user={user}
          userId={userId}
          content={content}
          createdAt={createdAt}
        />
      </div>
    </div>
  )
}

export default Post;
