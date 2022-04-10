import { useContext } from 'react'
import './styles.scss'
import { PostsGroup } from '../'
import { DataContext } from '../../../../contexts/DataContext'
import { Post } from '../../../../types'


const Wall = () => {
  const { allPosts }: any = useContext(DataContext);
  console.log('Renderizando wall...')
  return(
    <div className="wall">
      {
        allPosts.map((post: Post) => {
          console.log(post)
          if(post.main) {
            return (
              <PostsGroup
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

export default Wall;
