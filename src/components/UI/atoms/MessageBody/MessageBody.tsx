import { MessageBodyProps } from './types'
import './styles.scss'

const TAGS_REGEXP = /(@\w+)/g;

const MessageBody = ({message}: MessageBodyProps) => {
  const parsedMessage = message.replaceAll(TAGS_REGEXP, "<a href='#'>$1</a>")

  return (
    <div className="message-body">
      <p className="message-body-text" dangerouslySetInnerHTML={{__html: parsedMessage}} />
    </div>
  )
}

export default MessageBody
