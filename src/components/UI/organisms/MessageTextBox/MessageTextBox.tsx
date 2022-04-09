import { useContext } from 'react'
import { AuthContext } from '../../../../contexts/AuthContext'
import './styles.scss'
import { Avatar } from '../../atoms'

const MessageTextBox = () => {
  const { currentUser }: any = useContext(AuthContext);


  return(
    <div className="message-textbox">
      <div className="message-textbox-avatar">
        <Avatar profileImg={currentUser.userAvatar} />
      </div>
      <div className="message-textbox-text-area">
        <textarea placeholder='Add a new post...'></textarea>        
      </div>
      <button>SEND</button>
    </div>
  )
}

export default MessageTextBox;
