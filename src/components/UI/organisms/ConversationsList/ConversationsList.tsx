import { useContext } from 'react'
import './styles.scss'
import { Conversation } from '..'
import { PostsContext } from '../../../../contexts/PostsContext'
import { PostsContextTypes } from '../../../../contexts/PostsContext/types'
import { Post } from '../../../../types'


const ConversationsList = () => {
  const { allPosts } = useContext(PostsContext) as PostsContextTypes;

  return(
    <div className="conversations-list">
      {
        allPosts.map((post: Post) => (
          <Conversation
            key={post.id}
            post={post}
          />
        ))
      }
    </div>
  )
}

export default ConversationsList;
