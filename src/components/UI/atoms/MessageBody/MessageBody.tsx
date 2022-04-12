import { useState } from 'react' 
import { MessageBodyProps } from './types'
import './styles.scss'


const TAGS_REGEXP = /(@\w+)/g;

const MessageBody = ({message, receiver, onClick}: MessageBodyProps) => {
  const parsedMessage = message.replaceAll(TAGS_REGEXP, "<a href='#'>$1</a>")
  const [textAreaContent, setTextAreaContent] = useState<string | null>(null)
  const [ display, setDisplay ] = useState<boolean>(message === '')

  return (
        display ? (
        <div className="message-body">
          <div className="message-body-response-area">
            <textarea id='response' name='response' placeholder='Type resonse' 
              onBlur={e=>setTextAreaContent(e.target.value)}
            >{textAreaContent}</textarea>
            <button
              onClick={() => {
                onClick({
                  content: textAreaContent,
                  receiverId: receiver,
                })
                setDisplay(false)
              } 
              }
            >
              SEND
            </button>
          </div>
        </div>
      ) : (
        <div className="message-body">
          <p className="message-body-text" dangerouslySetInnerHTML={{__html: parsedMessage}} />
        </div>
      )

  )
}

export default MessageBody
