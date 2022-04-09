import { Post } from '../'
import './styles.scss'
import { PostsGroupProps } from './types'

const PostsGroup = ({
  key,
  main,
  responses
}: PostsGroupProps) => {

  return(
    <div className="posts-group">
      <div className="posts-group-main">
        <Post 
          postData={main}
        />
      </div>
      <div className="posts-group-responses">
        <div className="posts-group-responses-icon">
          <div className="icon"></div>
        </div>
        {
          responses.length > 0 && (
            <div className="posts-group-responses-content">
              {responses.map(response => 
                {
                  return (
                    <Post 
                      postData={response}
                    />
                  )
                }
              )}
            </div>
          )
        }
      </div>
    </div>
  )
}

export default PostsGroup;
