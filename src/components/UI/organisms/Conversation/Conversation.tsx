import { Post } from '..'
import './styles.scss'
import { ConversationProps } from './types'

const Conversation = ({
  post
}: ConversationProps) => {
  const { thread } = post;

  return (
    <div className="conversation">
      <div className="conversation-initial-post">
        <Post post={post}/>
      </div>
        {
          thread.length > 0 && (
            <div className="conversation-thread">
              <div className="conversation-thread-icon">
                <div className="icon"></div>
              </div>
              <div className="conversation-thread-content">
                {thread.map(response => 
                  {
                    return (
                      <Post 
                        key={response.id}
                        post={response}
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
