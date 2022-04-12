import { LikesContainer } from '../../atoms'
import { Message } from '../../molecules';
import './styles.scss'
import { PostProps } from './types'

const Post = ({
  post,
}: PostProps) => {
  const { reactionsScore, user, content, createdAt, receiverId } = post
  console.log(post)
  return(
    <div className="post">
      <div className="post-likes">
        <LikesContainer 
          reactionsScore={reactionsScore} 
          post={post}
        />
      </div>
      <div className="post-message">
        <Message 
          user={user}
          postId={post.id}
          userId={user.id}
          content={content}
          createdAt={createdAt}
          receiver={receiverId}
        />
      </div>
    </div>
  )
}

export default Post;
