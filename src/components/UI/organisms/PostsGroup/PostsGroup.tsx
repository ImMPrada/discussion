import { Post } from '../'
import './styles.scss'
import { PostsGroupProps } from './types'

const PostsGroup = ({
  main,
  responses
}: PostsGroupProps) => {

  return(
    <div className="posts-group">
      <div className="posts-group-main">
        <Post 
          key={main.postId}
          postData={main}
        />
      </div>
        {
          responses.length > 0 && (
            <div className="posts-group-responses">
              <div className="posts-group-responses-icon">
                <div className="icon"></div>
              </div>
              <div className="posts-group-responses-content">
                {responses.map(response => 
                  {
                    return (
                      <Post 
                        key={response.postId}
                        postData={response}
                      />
                    )
                  }
                )}
              </div>
            </div>
          )
        }
    </div>
  )
}

export default PostsGroup;
