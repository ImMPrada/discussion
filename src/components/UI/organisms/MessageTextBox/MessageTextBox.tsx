import { profileData } from '../../../../mocks'

import './styles.scss'
import { Avatar } from '../../atoms'

const MessageTextBox = () => {

  return(
    <div className="message-textbox">

      <div className="message-textbox-avatar">
        <Avatar profileImg={profileData.userAvatar} />
      </div>
      <textarea>Holi</textarea>
      <div className="message-textbox-button">
        <button>Send</button>
      </div>

    </div>
  )
}

export default MessageTextBox;
