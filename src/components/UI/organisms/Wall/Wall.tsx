import './styles.scss'
import { PostsGroup } from '../'
import { posts } from '../../../../mocks'


const Wall = () => {

  return(
    <div className="wall">
      {
        posts.map(post => {
          console.log(post)
          if(post.main) {
            return (<PostsGroup
              key={post.postId}
              main={post}
              responses={post.responses}
            />)
          }
        })
      }
    </div>
  )
}

export default Wall;
