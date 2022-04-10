import { Post } from '..'
import './styles.scss'
import { ConversationProps } from './types'

const Conversation = ({
  main,
  responses
}: ConversationProps) => {

  return(
    <div className="conversation">
      <div className="conversation-initial-post">
        <Post 
          key={main.postId}
          postData={main}
        />
      </div>
        {
          responses.length > 0 && (
            <div className="conversation-thread">
              <div className="conversation-thread-icon">
                <div className="icon"></div>
              </div>
              <div className="conversation-thread-content">
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

export default Conversation;
