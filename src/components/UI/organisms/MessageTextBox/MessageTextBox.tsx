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
      <textarea>Holi</textarea>        
      <button>Send</button>
    </div>
  )
}

export default MessageTextBox;
