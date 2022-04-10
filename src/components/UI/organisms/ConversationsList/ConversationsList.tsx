import { useContext } from 'react'
import './styles.scss'
import { Conversation } from '..'
import { DataContext } from '../../../../contexts/DataContext'
import { Post } from '../../../../types'


const ConversationsList = () => {
  const { allPosts }: any = useContext(DataContext);
  console.log('Renderizando wall...')
  return(
    <div className="conversations-list">
      {
        allPosts.map((post: Post) => {
          console.log(post)
          if(post.main) {
            return (
              <Conversation
                key={post.postId}
                main={post}
                responses={post.responses}
              />
            )
          }
        })
      }
    </div>
  )
}

export default ConversationsList;
